import { renderWithProviders } from "@/shared/lib/renderWithProviders";
import { userEvent } from "@testing-library/react-native";
import SignOutButton from "@/features/auth/ui/components/sign-out-button";

const mockMutate = jest.fn()
let mockIsPending = false;

jest.mock('@/shared/api/supabase', () => ({
  supabase: {
    auth: {
      signUp: jest.fn(),
      signInWithPassword: jest.fn(),
      signOut: jest.fn().mockResolvedValue({error: null}),
    }
  }
}))
jest.mock("@/features/auth/hooks/useAuth", () => ({
  useAuth: () => ({
    signUp: {mutate: jest.fn(), isPending: false},
    signIn: {mutate: jest.fn(), isPending: false},
    signOut: {mutate: mockMutate, isPending: mockIsPending},
  })
}));
jest.mock("@/shared/hooks/useAppTheme", () => ({
  useAppTheme: () => require('@/constants/theme').LightTheme
}));

describe('SignOutButton component', () => {
  beforeEach(() => {
    mockIsPending = false;
  })

  test('should render correctly', async () => {
    const {getByTestId} = renderWithProviders(<SignOutButton />)

    expect(getByTestId('submit-button')).toBeDefined();
  })

  test('should call signOut when button is pressed', async () => {
    const {getByTestId} = renderWithProviders(<SignOutButton />)

    const submitButton = getByTestId('submit-button')

    await userEvent.press(submitButton);
    expect(mockMutate).toHaveBeenCalledTimes(1)
  })
})