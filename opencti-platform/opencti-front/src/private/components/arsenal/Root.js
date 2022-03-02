import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { Switch, Redirect } from 'react-router-dom';
import { BoundaryRoute } from '../BoundaryRoute';
import Malwares from './Malwares';
import RootMalware from './malwares/Root';
import AttackPatterns from './AttackPatterns';
import RootAttackPattern from './attack_patterns/Root';
import RootCourseOfAction from './courses_of_action/Root';
import Tools from './Tools';
import RootTool from './tools/Root';
import Vulnerabilities from './Vulnerabilities';
import RootVulnerabilities from './vulnerabilities/Root';
import CoursesOfAction from './CoursesOfAction';

class Root extends Component {
  render() {
    const { me } = this.props;
    const arsenalRoute = () => <Redirect to="/dashboard/arsenal/malwares" />;
    const malwaresIdRoute = (routeProps) => <RootMalware {...routeProps} me={me} />;
    const attackPatternsIdRoute = (routeProps) => <RootAttackPattern {...routeProps} me={me} />;
    const couseOfActionIdRoute = (routeProps) => <RootCourseOfAction {...routeProps} me={me} />;
    const toolsIdRoute = (routeProps) => <RootTool {...routeProps} me={me} />;
    const vulnerabilityIdRoute = (routeProps) => <RootVulnerabilities {...routeProps} me={me} />
    
    return (
      <Switch>
        <BoundaryRoute
          exact
          path="/dashboard/arsenal"
          render={arsenalRoute}
        />
        <BoundaryRoute
          exact
          path="/dashboard/arsenal/malwares"
          component={Malwares}
        />
        <BoundaryRoute
          path="/dashboard/arsenal/malwares/:malwareId"
          render={malwaresIdRoute}
        />
        <BoundaryRoute
          exact
          path="/dashboard/arsenal/attack_patterns"
          component={AttackPatterns}
        />
        <BoundaryRoute
          path="/dashboard/arsenal/attack_patterns/:attackPatternId"
          render={attackPatternsIdRoute}
        />
        <BoundaryRoute
          exact
          path="/dashboard/arsenal/courses_of_action"
          component={CoursesOfAction}
        />
        <BoundaryRoute
          path="/dashboard/arsenal/courses_of_action/:courseOfActionId"
          render={couseOfActionIdRoute}
        />
        <BoundaryRoute
          exact
          path="/dashboard/arsenal/tools"
          component={Tools}
        />
        <BoundaryRoute
          path="/dashboard/arsenal/tools/:toolId"
          render={toolsIdRoute}
        />
        <BoundaryRoute
          exact
          path="/dashboard/arsenal/vulnerabilities"
          component={Vulnerabilities}
        />
        <BoundaryRoute
          path="/dashboard/arsenal/vulnerabilities/:vulnerabilityId"
          render={vulnerabilityIdRoute}
        />
      </Switch>
    );
  }
}

Root.propTypes = {
  me: PropTypes.object,
};

export default Root;
