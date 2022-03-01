import React from 'react';
import { dissoc } from 'ramda';
import { Route } from 'react-router-dom';
import { ErrorBoundary, SimpleError, wrapBound } from './Error';

interface BoundaryParams {
    exact?: boolean;
    component?: any;
    render?: any;
    path?: string;
    me?: any;
  }
  
  // eslint-disable-next-line max-len
  export const BoundaryRoute = React.memo((props: BoundaryParams) => {
    if (props.component) {
      const route = dissoc('component', props);
      return <Route component={wrapBound(props.component)} {...route} />;
    }
    if (props.render) {
      const route = dissoc('render', props);
      return (
        <Route
          render={(routeProps) => {
            const comp = props.render(routeProps);
            return (
              <ErrorBoundary display={<SimpleError />}>{comp}</ErrorBoundary>
            );
          }}
          {...route}
        />
      );
    }
    return <Route {...props} />;
  });
  
  