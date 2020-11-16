const admin = require("firebase-admin");
const serviceAccount = require("../../google-services.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://indo-socialmedia.firebaseio.com",
});
