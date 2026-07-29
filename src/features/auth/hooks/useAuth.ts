import { useMutation } from "@tanstack/react-query";
import { signUpNewUser, signInWithEmail, signOutUser } from "@/features/auth/api/auth.queries";


export const useAuth = () => {
  const signUp =  useMutation({
    mutationFn: signUpNewUser,
  });

  const signIn =  useMutation({
    mutationFn: signInWithEmail,
  });

  const signOut =  useMutation({
    mutationFn: signOutUser,
  });

  return { signIn, signUp, signOut };
}

