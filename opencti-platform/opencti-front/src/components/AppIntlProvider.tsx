import React, { useContext } from 'react';
import { IntlProvider } from 'react-intl';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import frLocale from 'date-fns/locale/fr';
import enLocale from 'date-fns/locale/en-US';
import cnLocale from 'date-fns/locale/zh-CN';
import moment from 'moment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { graphql, createFragmentContainer, RelayProp } from 'react-relay';
import { pathOr } from 'ramda';
import locale, { DEFAULT_LANG } from '../utils/BrowserLanguage';
import i18n from '../utils/Localization';
import { UserContext } from '../utils/Security';
import { Settings } from '../generated/graphql';
import { ComponentType } from 'react-markdown/lib/ast-to-react';


interface LocaleMap {
  [key: string]: Locale
}

const localeMap: LocaleMap = {
  'en-us': enLocale,
  'fr-fr': frLocale,
  'zg-cn': cnLocale,
};

export interface AppIntlProviderProps {
  children: ComponentType<{ relay?: RelayProp | undefined; }>;
  settings: Settings;
};

function AppIntlProvider(props: AppIntlProviderProps) {
  const { children } = props;
  const context = useContext(UserContext);
  if(context) {
    const { me } = context;
  const platformLanguage = pathOr(
    null,
    ['settings', 'platform_language'],
    props,
  );
  const platformLang = platformLanguage !== null && platformLanguage !== 'auto'
    ? props.settings.platform_language
    : locale;
  const lang: string = me
    && me.language !== null
    && me.language !== undefined
    && me.language !== 'auto'
    ? me.language
    : platformLang as string || DEFAULT_LANG;
  const baseMessages = i18n.messages[lang];
  if (lang === 'fr-fr') {
    moment.locale('fr-fr');
  } else if (lang === 'zh-cn') {
    moment.locale('zh-cn');
  } else {
    moment.locale('en-us');
  }
  return (
    <IntlProvider
      locale={lang}
      key={lang}
      messages={baseMessages}
      onError={(err) => {
        if (err.code === 'MISSING_TRANSLATION') {
          return;
        }
        throw err;
      }}
      data-testid="IntlProvider"
    >
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        locale={localeMap[lang]}
      >
        {children}
      </LocalizationProvider>
    </IntlProvider>
  );
  }
}

export const ConnectedIntlProvider = createFragmentContainer(AppIntlProvider, {
  settings: graphql`
    fragment AppIntlProvider_settings on Settings {
      platform_language
    }
  `,
});

export default AppIntlProvider;
