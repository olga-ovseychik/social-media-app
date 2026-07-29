import authReducer, {
  setIsLoading,
  setSession,
  selectedIsLoading,
  selectedSession,
  setProfile,
  selectedProfile,
  selectIsLoggedIn
} from "@/store/slices/auth.slice";
import { RootState } from "@/store";
import { ThemeState } from "@/store/slices/theme.slice";


describe('auth slice', () => {
  test('should return the initial state', () => {
    const state = authReducer(undefined, {type: 'unknown'})

    expect(state.isLoading).toBe(true)
    expect(state.session).toBeUndefined()
  })

  test('should set isLoading to false when setIsLoading is dispatched with false', () => {
    const state = authReducer({
      session: undefined,
      profile: undefined,
      isLoading: true,
      isLoggedIn: false,
    },
    setIsLoading(false))

    expect(state.isLoading).toBe(false)
  })

  test('should return true when isLoading state is true', () => {
    const state = { auth: {
      session: undefined,
      profile: undefined,
      isLoading: true,
      isLoggedIn: false,
    }}

    expect(selectedIsLoading(state as RootState)).toBe(true)
  })

  test('should return false when isLoading state is false', () => {
    const state = { auth: {
      session: undefined,
      profile: undefined,
      isLoading: false,
      isLoggedIn: false,
    }}

    expect(selectedIsLoading(state as RootState)).toBe(false)
  })

  test('should set session to null when session is dispatched with null', () => {
    const state = authReducer({
        session: undefined,
        profile: undefined,
        isLoading: true,
        isLoggedIn: false,
      },
      setSession(null))

    expect(state.session).toBe(null)
  })

  test('should set session to session object when session is dispatched with session object', () => {
    const mockSession = { user: { id: '123', email: 'test@test.com' } }
    const state = authReducer({
        session: undefined,
        profile: undefined,
        isLoading: true,
        isLoggedIn: false,
      },
      setSession(mockSession))

    expect(state.session).toEqual(mockSession)
  })

  test('should return session object when session state contains session object', () => {
    const mockSession = { user: { id: '123', email: 'test@test.com' } }
    const state = {
      auth: {
        session: mockSession,
        profile: undefined,
        isLoading: false,
        isLoggedIn: false,
      },
      theme: {} as ThemeState
    }

    expect(selectedSession(state as RootState)).toEqual(mockSession)
  })

  test('should return null when session state is null', () => {
    const state = { auth: {
      session: undefined,
      profile: undefined,
      isLoading: false,
      isLoggedIn: false,
    }}

    expect(selectedSession(state as RootState)).toBeUndefined()
  })

  test('should set profile to null when profile is dispatched with null', () => {
    const state = authReducer({
        session: undefined,
        profile: undefined,
        isLoading: true,
        isLoggedIn: false,
      },
      setProfile(null))

    expect(state.profile).toBe(null)
  })

  test('should set profile when setProfile is dispatched with profile object', () => {
    const mockProfile = {
      id: 'mock-id',
      display_name: 'mock-display-name',
      username: 'mock-username',
      avatar_url: 'mock-avatar_url',
      bio: 'mock-bio',
     }
    const state = authReducer({
        session: undefined,
        profile: undefined,
        isLoading: true,
        isLoggedIn: false,
      },
    setProfile(mockProfile))

    expect(state.profile).toEqual(mockProfile)
  })

  test('should return profile object when profile state contains profile object', () => {
    const mockProfile = {
      id: 'mock-id',
      display_name: 'mock-display-name',
      username: 'mock-username',
      avatar_url: 'mock-avatar_url',
      bio: 'mock-bio',
    }
    const state = {
      auth: {
        session: undefined,
        profile: mockProfile,
        isLoading: false,
        isLoggedIn: false,
      },
      theme: {} as ThemeState
    }

    expect(selectedProfile(state as RootState)).toEqual(mockProfile)
  })

  test('should return null when profile state is null', () => {
    const state = { auth: {
        session: undefined,
        profile: undefined,
        isLoading: false,
        isLoggedIn: false,
      }}

    expect(selectedProfile(state as RootState)).toBeUndefined()
  })

  test('should return true when isLoggedIn state is true', () => {
    const mockSession = { user: { id: '123', email: 'test@test.com' } }
    const state = { auth: {
        session: mockSession,
        profile: undefined,
        isLoading: false,
        isLoggedIn: false,
      }}

    expect(selectIsLoggedIn(state as unknown as RootState)).toBe(true)
  })

  test('should return false when isLoggedIn state is false', () => {
    const state = { auth: {
        session: undefined,
        profile: undefined,
        isLoading: false,
        isLoggedIn: false,
      }}

    expect(selectIsLoggedIn(state as RootState)).toBe(false)
  })
})