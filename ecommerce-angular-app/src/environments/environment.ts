// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'default',
  firebase:{
    config : {
      apiKey: "AIzaSyDWvWSMpI7m_HEWY0arTYyUniIhBVXRBZQ",
      authDomain: "ecommerce-b2c61.firebaseapp.com",
      projectId: "ecommerce-b2c61",
      storageBucket: "ecommerce-b2c61.appspot.com",
      messagingSenderId: "1014741312786",
      appId: "1:1014741312786:web:f4e3b1e3c6b50c4bc47fcb"
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
