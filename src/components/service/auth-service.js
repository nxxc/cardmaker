import firebaseApp from './firebase.js';
import firebase from 'firebase';

class AuthService {
  login(service) {
    const provider = new firebase.auth[`${service}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(provider);
  }

  logout() {
    firebaseApp.auth().signOut();
  }

  onAuthChange(onUserChanged) {
    firebaseApp.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
