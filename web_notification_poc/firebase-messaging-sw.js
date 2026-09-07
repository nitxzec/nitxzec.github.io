// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// 1. Paste your Firebase config here
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX3KCMDyL00gFZmLW_G940uo3Vh4DwZbw",
  authDomain: "simple-web-push-poc.firebaseapp.com",
  projectId: "simple-web-push-poc",
  storageBucket: "simple-web-push-poc.firebasestorage.app",
  messagingSenderId: "286960834774",
  appId: "1:286960834774:web:1a235076528fbd7c5bd177",
  measurementId: "G-PB0GSE7Q4C"
};

// Initialize Firebase inside the Service Worker
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Handle background notifications
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification?.title || 'Default Title';
  const notificationOptions = {
    body: payload.notification?.body || 'Default Body',
    icon: payload.notification?.icon || '/icon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});