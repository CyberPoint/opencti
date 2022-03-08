import React from 'react';
import { dissoc } from 'ramda';
import { Route } from 'react-router-dom';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { ErrorBoundary, SimpleError, wrapBound } from './Error';
import { User } from '../../generated/graphql';

interface BoundaryParams {
  exact?: boolean;
  component?: ReactJSXElement;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  render?: any;
  path?: string;
  me?: User;
}

// eslint-disable-next-line max-len
const BoundaryRoute = (props: BoundaryParams) => {
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
