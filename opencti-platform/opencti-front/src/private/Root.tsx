import React from 'react';
import * as R from 'ramda';
import { graphql, useLazyLoadQuery, Variables } from 'react-relay';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';
import { ConnectedIntlProvider } from '../components/AppIntlProvider';
import { ConnectedThemeProvider } from '../components/AppThemeProvider';
import Index from './Index';
import { UserContext } from '../utils/Security';
import { Module, Settings, User } from '../generated/graphql';
import { Maybe } from 'graphql/jsutils/Maybe';
import { RootPrivateQuery$data } from './__generated__/RootPrivateQuery.graphql';

const rootPrivateQuery = graphql`
  query RootPrivateQuery {
    me {
      id
      name
      lastname
      language
      theme
      user_email
      theme
      capabilities {
        name
      }
    }
    settings {
      platform_map_tile_server_dark
      platform_map_tile_server_light
      platform_feature_flags {
        id
        enable
      }
      platform_modules {
        id
        enable
      }
      ...AppThemeProvider_settings
      ...AppIntlProvider_settings
    }
    about {
      version
    }
  }
`;

type SettingsFlag = {
  id?: string;
  enable?: boolean;
};

type Data = {
  me: User;
  settings: Settings;
};


const isFeatureEnabled = (settings: Settings, id: string) => {
  const flags = settings.platform_feature_flags || [];
  const feature: null | undefined | SettingsFlag | Maybe<Module>[] = R.find(
    (f: SettingsFlag | Maybe<Module>) => f?.id === id,
    flags,
  );
  return feature !== undefined && feature?.enable === true;
};
const isModuleEnabled = (settings: Settings, id: string) => {
  const modules = settings.platform_modules || [];
  const module: null | undefined | SettingsFlag |  Maybe<Module>[] = R.find(
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    (f: Settings | Maybe<Module>) => f?.id === id,
    modules,
  );
  return module !== undefined && module?.enable === true;
};
const buildHelper = (settings: Settings) => ({
  isModuleEnable: (id: string) => isModuleEnabled(settings, id),
  isRuleEngineEnable: () => isModuleEnabled(settings, 'RULE_ENGINE'),
  isFeatureEnable: (id: string) => isFeatureEnabled(settings, id),
  isRuntimeFieldEnable: () => isFeatureEnabled(settings, 'RUNTIME_SORTING'),
});

const Root = () => {
  const variables: Variables = [];
  const dataResponse: RootPrivateQuery$data = useLazyLoadQuery(rootPrivateQuery, variables) as RootPrivateQuery$data;
  const { me, settings } = dataResponse;
  if (settings && me) {
    const helper = buildHelper(settings);
    return (
      <UserContext.Provider value={{ me, settings, helper }}>
        <StyledEngineProvider injectFirst={true}>
          <ConnectedThemeProvider settings={settings}>
            <CssBaseline />
            <ConnectedIntlProvider settings={settings}>
              <Index me={me} />
            </ConnectedIntlProvider>
          </ConnectedThemeProvider>
        </StyledEngineProvider>
      </UserContext.Provider>
    );
  }
  return <></>;
};

export default Root;
