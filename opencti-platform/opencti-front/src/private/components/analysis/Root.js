import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { Switch, Redirect } from 'react-router-dom';
import BoundaryRoute from '../BoundaryRoute';
import Reports from './Reports';
import RootReport from './reports/Root';
import Notes from './Notes';
import RootNote from './notes/Root';
import Opinions from './Opinions';
import RootOpinion from './opinions/Root';
import ExternalReferences from './ExternalReferences';
import RootExternalReference from './external_references/Root';

class Root extends Component {
  render() {
    const { me } = this.props;
    const analysisRoute = () => (<Redirect to="/dashboard/analysis/reports" />);
    const reportsRoute = React.memo((routeProps) => (
      <Reports {...routeProps} me={me} displayCreate={true} />
    ));
    const reportsIdRoute = React.memo((routeProps) => (<RootReport {...routeProps} me={me} />));
    const notesRoute = React.memo((routeProps) => (<RootNote {...routeProps} me={me} />));
    const opinionsRoute = React.memo((routeProps) => (<RootOpinion {...routeProps} me={me} />));
    const externalReferencesRoute = React.memo((routeProps) => (
      <RootExternalReference {...routeProps} me={me} />
    ));

    return (
      <Switch>
        <BoundaryRoute
          exact
          path="/dashboard/analysis"
          render={analysisRoute}
        />
        <BoundaryRoute
          exact
          path="/dashboard/analysis/reports"
          render={reportsRoute}
        />
        <BoundaryRoute
          path="/dashboard/analysis/reports/:reportId"
          render={reportsIdRoute}
        />
        <BoundaryRoute
          exact
          path="/dashboard/analysis/notes"
          component={Notes}
        />
        <BoundaryRoute
          path="/dashboard/analysis/notes/:noteId"
          render={notesRoute}
        />
        <BoundaryRoute
          exact
          path="/dashboard/analysis/opinions"
          component={Opinions}
        />
        <BoundaryRoute
          path="/dashboard/analysis/opinions/:opinionId"
          render={opinionsRoute}
        />
        <BoundaryRoute
          exact
          path="/dashboard/analysis/external_references"
          component={ExternalReferences}
        />
        <BoundaryRoute
          path="/dashboard/analysis/external_references/:externalReferenceId"
          render={externalReferencesRoute}
        />
      </Switch>
    );
  }
}

Root.propTypes = {
  me: PropTypes.object,
};

export default Root;
