// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'portfolio-frontend-angular',
    appId: '1:508264880415:web:4d3237d94743b2d9c0b82a',
    storageBucket: 'portfolio-frontend-angular.appspot.com',
    locationId: 'southamerica-east1',
    apiKey: 'AIzaSyCPu-G9uD9MgFPvqJ9NWC0gF7kcyuNWpUQ',
    authDomain: 'portfolio-frontend-angular.firebaseapp.com',
    messagingSenderId: '508264880415',
  },
  production: true,
  apiBaseUrl: 'https://ap-backend-springboot.onrender.com/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
