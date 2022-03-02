import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { Switch, Redirect } from 'react-router-dom';
import { BoundaryRoute } from '../BoundaryRoute';
import ThreatActors from './ThreatActors';
import RootThreatActor from './threat_actors/Root';
import IntrusionSets from './IntrusionSets';
import RootIntrusionSet from './intrusion_sets/Root';
import Campaigns from './Campaigns';
import RootCampaign from './campaigns/Root';

class Root extends Component {
  render() {
    const { me } = this.props;
    const dashboardThreatsRoute = React.memo(() => { return(<Redirect to="/dashboard/threats/threat_actors" />)});
    const threatActorIdRoute = React.memo((routeProps) => { return(<RootThreatActor {...routeProps} me={me} />)});
    const intrusionSetIdRoute = React.memo((routeProps) => { return(<RootIntrusionSet {...routeProps} me={me} />)});
    const campaignIdRoute = React.memo((routeProps) => { return(<RootCampaign {...routeProps} me={me} />)});

    return (
      <Switch>
        <BoundaryRoute
          exact
          path="/dashboard/threats"
          render={dashboardThreatsRoute}
        />
        <BoundaryRoute
          exact
          path="/dashboard/threats/threat_actors"
          component={ThreatActors}
        />
        <BoundaryRoute
          path="/dashboard/threats/threat_actors/:threatActorId"
          render={threatActorIdRoute}
        />
        <BoundaryRoute
          exact
          path="/dashboard/threats/intrusion_sets"
          component={IntrusionSets}
        />
        <BoundaryRoute
          path="/dashboard/threats/intrusion_sets/:intrusionSetId"
          render={intrusionSetIdRoute}
        />
        <BoundaryRoute
          exact
          path="/dashboard/threats/campaigns"
          component={Campaigns}
        />
        <BoundaryRoute
          path="/dashboard/threats/campaigns/:campaignId"
          render={campaignIdRoute}
        />
      </Switch>
    );
  }
}

Root.propTypes = {
  me: PropTypes.object,
};

export default Root;
