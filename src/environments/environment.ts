// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  authority:"https://sso.xxxxx.cm",
  redirect_uri:"https://xxxxx.cm",
  post_logout_redirect_uri:"https://xxxxx.cm",
  response_type:"code",
  client_secret:"secret",
  client_id:"xxxx-landing-donald-xxxx",
  scopes:"openid profile xxxxx",

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
