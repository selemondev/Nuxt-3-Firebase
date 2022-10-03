import { initializeApp } from "firebase/app";
export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()
    const firebaseConfig = {
        apiKey: config.public.FIREBASE_API_KEY,
        // authDomain: "nuxt-firebase-b75fb.firebaseapp.com",
        // projectId: "nuxt-firebase-b75fb",
        // storageBucket: "nuxt-firebase-b75fb.appspot.com",
        // messagingSenderId: "218542199251",
        // appId: "1:218542199251:web:377bedd62925789a5b9f26"
    };
    const app = initializeApp(firebaseConfig);
    console.log(app);
})