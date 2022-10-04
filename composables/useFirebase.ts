import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

export const registerUser = async (email, password) => {
    const auth = getAuth();
    const credentials = await createUserWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorMessage = error.message;
        });
    return credentials;
}

export const loginUser = async (email, password) => {
    const auth = getAuth();
    const credentials = await signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorMessage = error.message;
        });
    return credentials;
}

export const initUser = async () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user.uid);
        } else {

        }
    });
};

export const signOutUser = async () => {
    const auth = getAuth();
    await signOut(auth);
}
