import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from 'firebase/app';


import App from './App.vue'
import router from './router'

import './index.css'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFCuegPuJjpUiOTsu8G8ae3g8dtuFTqJ4",
    authDomain: "crowdlibrary-in.firebaseapp.com",
    projectId: "crowdlibrary-in",
    storageBucket: "crowdlibrary-in.appspot.com",
    messagingSenderId: "734801484197",
    appId: "1:734801484197:web:d874dbedfa0c28ff1cf04c",
    measurementId: "G-DNBKE6NWZJ"
  };

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
