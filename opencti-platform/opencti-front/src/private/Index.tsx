import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'ramda';
import TopBar from './components/nav/TopBar';
import LeftBar from './components/nav/LeftBar';
import Dashboard from './components/Dashboard';
import Search from './components/Search';
import RootImport from './components/import/Root';
import RootAnalysis from './components/analysis/Root';
import RootEvents from './components/events/Root';
import RootObservations from './components/observations/Root';
import RootThreats from './components/threats/Root';
import RootArsenal from './components/arsenal/Root';
import RootEntities from './components/entities/Root';
import RootSettings from './components/settings/Root';
import RootData from './components/data/Root';
import RootWorkspaces from './components/workspaces/Root';
import Profile from './components/Profile';
import Message from '../components/Message';
import { NoMatch } from './components/Error';
import BoundaryRoute from './components/BoundaryRoute';
import StixCoreObjectOrStixCoreRelationship from './components/StixCoreObjectOrStixCoreRelationship';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { User } from '../generated/graphql';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minWidth: 1280,
    height: '100%',
  },
  content: {
    height: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: '24px 24px 24px 204px',
    minWidth: 0,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  messageIcon: {
    marginRight: theme.spacing(1),
  },
  toolbar: theme.mixins.toolbar,
}));

export interface IndexProps {
  me?: User;
}

const noTopBarLocations = ['/dashboard'];
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const Index = (({me}: IndexProps) => {
  const dashboardSearchRoute = React.memo((routeProps) => <Search {...routeProps} me={me} />);
  const dashboardIdRoute = React.memo((routeProps) => (
    <StixCoreObjectOrStixCoreRelationship {...routeProps} me={me} />
  ));
  const searchKeywordRoute = React.memo((routeProps) => <Search {...routeProps} me={me} />);
  const dashboardProfileRoute = React.memo((routeProps) => <Profile {...routeProps} me={me} />);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {!noTopBarLocations.includes(location.pathname) && <TopBar />}
      <LeftBar />
      <Message />
      <main className={classes.content} style={{ paddingRight: 24 }}>
        <div className={classes.toolbar} />
        <Switch>
          <BoundaryRoute exact path='/dashboard' component={Dashboard} />
          <BoundaryRoute exact path='/dashboard/search' render={dashboardSearchRoute} />
          <BoundaryRoute exact path='/dashboard/id/:id' render={dashboardIdRoute} />
          <BoundaryRoute exact path='/dashboard/search/:keyword' render={searchKeywordRoute} />
          <BoundaryRoute path='/dashboard/analysis' component={RootAnalysis} />
          <BoundaryRoute path='/dashboard/events' component={RootEvents} />
          <Route path='/dashboard/observations' component={RootObservations} />
          <BoundaryRoute path='/dashboard/threats' component={RootThreats} />
          <BoundaryRoute path='/dashboard/arsenal' component={RootArsenal} />
          <BoundaryRoute path='/dashboard/entities' component={RootEntities} />
          <BoundaryRoute path='/dashboard/data' render={RootData} />
          <BoundaryRoute path='/dashboard/workspaces' component={RootWorkspaces} />
          <BoundaryRoute path='/dashboard/settings' component={RootSettings} />
          <BoundaryRoute exact path='/dashboard/profile' render={dashboardProfileRoute} />
          <BoundaryRoute path='/dashboard/import' component={RootImport} me={me} />
          <Route component={NoMatch} />
        </Switch>
      </main>
    </div>
  );
});

export default compose(withRouter)(Index);
