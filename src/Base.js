import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const app = firebase.initializeApp({
      apiKey: "AIzaSyBL3uNl_7pgtpy08gwTOZeIrRkCkDHlI3Q",
    authDomain: "my-games-36d1c.firebaseapp.com",
    databaseURL: "https://my-games-36d1c.firebaseio.com",
});

var db = firebase.database(app);
var base = Rebase.createClass(db);

export default base;