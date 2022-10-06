import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
export const registerUser = async (email:string, password:string) => {
    const auth = getAuth();
    const credentials = await createUserWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorMessage = error.message;
        });
    return credentials;
}

export const loginUser = async (email:string, password:string) => {
    const auth = getAuth();
    const credentials = await signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorMessage = error.message;
        });
    return credentials;
}

export const initUser = async () => {
    const auth = getAuth();
    const firebaseUser = useFirebaseUser();
    firebaseUser.value = auth.currentUser;
    const router = useRouter();
    const userCookie:any = useCookie("userCookie");
    onAuthStateChanged(auth, (user) => {
        if (user) {
            router.push("/dashboard")
        } else {
            router.push("/")
        };
        firebaseUser.value = user;
        userCookie.value = user;

        $fetch("/api/auth", {
            method: "POST",
            body: { user },
        });
    });
};

export const signOutUser = async () => {
    const auth = getAuth();
    await signOut(auth);
}
