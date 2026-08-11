export function createMockAuthState() {
  return {
    auth: {
      profile: {id: '1', username: 'test'},
      session: null,
      isLoading: false,
      isLoggedIn: true,
      isJustLoggedIn: false,
    }
  }
}