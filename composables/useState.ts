import { FirebaseUser } from "~~/Types/firebaseUser.interface";
export const useFirebaseUser = () => useState<FirebaseUser[]>("firebaseUser", () => []);