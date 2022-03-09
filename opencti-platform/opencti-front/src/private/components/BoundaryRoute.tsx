import React from 'react';
import { dissoc } from 'ramda';
import { Route } from 'react-router-dom';
import { ErrorBoundary, SimpleError, wrapBound } from './Error';

// eslint-disable-next-line max-len @typescript-eslint/no-explicit-any
const BoundaryRoute: any = (props: any) => {
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
          return <ErrorBoundary display={<SimpleError />}>{comp}</ErrorBoundary>;
        }}
        {...route}
      />
    );
  }
  return <Route {...props} />;
};

export default BoundaryRoute;
