import { supabase } from "@/shared/api/supabase";

type UserData = {
  email: string;
  password: string;
}

export async function signUpNewUser({email, password}: UserData) {
  const { error } = await supabase.auth.signUp({
    email: email,
    password: password,
  })

  if (error) throw error
}

export async function signInWithEmail({email, password}: UserData) {
  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })

  if (error) console.error(error)
}

export async function signOutUser() {
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error('Error signing out:', error)
  }
}