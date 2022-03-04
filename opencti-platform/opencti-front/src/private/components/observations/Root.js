import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { Switch, Redirect } from 'react-router-dom';
import BoundaryRoute from '../BoundaryRoute';
import StixCyberObservables from './StixCyberObservables';
import RootStixCyberObservable from './stix_cyber_observables/Root';
import Artifacts from './Artifacts';
import Indicators from './Indicators';
import RootIndicator from './indicators/Root';
import Infrastructures from './Infrastructures';
import RootInfrastructure from './infrastructures/Root';
import RootArtifact from './artifacts/Root';

class Root extends Component {
  render() {
    const { me } = this.props;
    const dashboardObservationsRoute = React.memo(() => (
      <Redirect to='/dashboard/observations/observables' />
    ));
    const observablesIdRoute = React.memo((routeProps) => (
      <RootStixCyberObservable {...routeProps} me={me} />
    ));
    const artifactsObservablesIdRoute = React.memo((routeProps) => (
      <RootArtifact {...routeProps} me={me} />
    ));
    const observationsIndicatorIdRoute = React.memo((routeProps) => (
      <RootIndicator {...routeProps} me={me} />
    ));
    const infrastructureIdRoute = React.memo((routeProps) => (
      <RootInfrastructure {...routeProps} me={me} />
    ));

    return (
      <Switch>
        <BoundaryRoute exact path='/dashboard/observations' render={dashboardObservationsRoute} />
        <BoundaryRoute
          exact
          path='/dashboard/observations/observables'
          component={StixCyberObservables}
        />
        <BoundaryRoute
          path='/dashboard/observations/observables/:observableId'
          render={observablesIdRoute}
        />
        <BoundaryRoute exact path='/dashboard/observations/artifacts' component={Artifacts} />
        <BoundaryRoute
          path='/dashboard/observations/artifacts/:observableId'
          render={artifactsObservablesIdRoute}
        />
        <BoundaryRoute exact path='/dashboard/observations/indicators' component={Indicators} />
        <BoundaryRoute
          path='/dashboard/observations/indicators/:indicatorId'
          render={observationsIndicatorIdRoute}
        />
        <BoundaryRoute
          exact
          path='/dashboard/observations/infrastructures'
          component={Infrastructures}
        />
        <BoundaryRoute
          path='/dashboard/observations/infrastructures/:infrastructureId'
          render={infrastructureIdRoute}
        />
      </Switch>
    );
  }
}

Root.propTypes = {
  me: PropTypes.object,
};

export default Root;
