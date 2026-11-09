// STARLITE backend settings.
//
// Multiplayer rooms need a small realtime database so the game master's computer and
// each team's computer can see the same game. Without one, rooms only work between
// tabs of a single browser (handy for testing).
//
// To play across computers: create a free Firebase project, add a Realtime Database,
// register a web app and paste its config below (see README.md, "Firebase setup").
// Example:
//   firebase: {
//     apiKey: "AIza...",
//     authDomain: "starlite-xxxx.firebaseapp.com",
//     databaseURL: "https://starlite-xxxx-default-rtdb.firebaseio.com",
//     projectId: "starlite-xxxx",
//     appId: "1:123:web:abc"
//   }
// Firebase project starlite-b2c86 (web config; these values are not secret).
// Set firebase: null to fall back to single-browser test mode.
window.STARLITE_CONFIG = {
  firebase: {
    apiKey: "AIzaSyBLk6b9kq9JtTYYHWPSSMgVSkOSH5YeVL0",
    authDomain: "starlite-b2c86.firebaseapp.com",
    databaseURL: "https://starlite-b2c86-default-rtdb.firebaseio.com",
    projectId: "starlite-b2c86",
    storageBucket: "starlite-b2c86.firebasestorage.app",
    messagingSenderId: "360547004563",
    appId: "1:360547004563:web:0468377d636e93991bdd66",
  },
};
