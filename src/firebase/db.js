import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDwf6xAe2-h5hDTHT0kXnn48AJ_V6fcZPY",
    authDomain: "projeto-estagio-40f6a.firebaseapp.com",
    projectId: "projeto-estagio-40f6a",
    storageBucket: "projeto-estagio-40f6a.appspot.com",
    messagingSenderId: "607510274211",
    appId: "1:607510274211:web:0b342e3dba821a643a1f16",
    measurementId: "G-048BFJ24EJ"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
