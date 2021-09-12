import { getSigninPage } from '@keystone-next/auth/pages/SigninPage';

export default getSigninPage({
  identityField: 'email',
  secretField: 'password',
  mutationName: 'authenticatePersonWithPassword',
  successTypename: 'PersonAuthenticationWithPasswordSuccess',
  failureTypename: 'PersonAuthenticationWithPasswordFailure',
});
