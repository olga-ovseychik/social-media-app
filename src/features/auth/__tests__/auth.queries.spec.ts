import { signUpNewUser, signInWithEmail, signOutUser } from "@/features/auth/api/auth.queries";
import { supabase } from "@/shared/api/supabase";

jest.mock('@/shared/api/supabase', () => ({
  supabase: {
    auth: {
      signUp: jest.fn(),
      signInWithPassword: jest.fn(),
      signOut: jest.fn().mockResolvedValue({error: null}),
    }
  }
}))

const mockUserData = {
  email: 'test@mail.com',
  password: 'test'
}

describe('auth queries', () => {
  test('should call signUp method', async () => {
    await signUpNewUser(mockUserData)

    expect(supabase.auth.signUp).toHaveBeenCalledWith(mockUserData)
  })

  test('should call signInWithEmail method', async () => {
    await signInWithEmail(mockUserData)

    expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith(mockUserData)
  })

  test('should call signOutUser method', async () => {
    await signOutUser()

    expect(supabase.auth.signOut).toHaveBeenCalledTimes(1)
  })
})

