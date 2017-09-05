import { connectedRouterRedirect } from 'redux-auth-wrapper/history3/redirect';
import { routerActions } from 'react-router-redux';
import locationHelperBuilder from 'redux-auth-wrapper/history3/locationHelper';

const locationHelper = locationHelperBuilder({});

export const UserIsAuthenticated = connectedRouterRedirect({
  redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/',
  allowRedirectBack: false,
  authenticatedSelector: ({ authorization }) => authorization.uid !== '',
  authenticatingSelector: ({ authorization }) => authorization.isLoading,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated',
});

export const UserIsNotAuthenticated = connectedRouterRedirect({
  redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/groups',
  allowRedirectBack: false,
  authenticatedSelector: ({ authorization }) => authorization.uid === '',
  authenticatingSelector: ({ authorization }) => authorization.isLoading,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsNotAuthenticated',
});

