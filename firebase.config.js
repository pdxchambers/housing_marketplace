// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDS0u7W_havof9KyFpU55TM_o7Y4SND3GY',
  authDomain: 'house-marketplace-app-aef0b.firebaseapp.com',
  projectId: 'house-marketplace-app-aef0b',
  storageBucket: 'house-marketplace-app-aef0b.appspot.com',
  messagingSenderId: '106296757429',
  appId: '1:106296757429:web:f5319eba2af33003cc02fc'
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()