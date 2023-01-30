
var admin = require("firebase-admin");

var serviceAccount = require("../../node-eco-wallet-admin-sdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://eco-wallet-6ecf7-default-rtdb.firebaseio.com"
});
