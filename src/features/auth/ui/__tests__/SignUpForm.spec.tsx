import SignUpForm from "@/features/auth/ui/components/SignUpForm";
import { renderWithProviders } from "@/shared/lib/renderWithProviders";
import { userEvent, waitFor } from "@testing-library/react-native";

const mockMutate = jest.fn().mockImplementation(
  (data, {onSuccess}) => {
  onSuccess()
});
const mockReplace = jest.fn();
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
    signUp: {mutate: mockMutate, isPending: mockIsPending},
    signIn: {mutate: jest.fn(), isPending: false},
    signOut: {mutate: jest.fn(), isPending: false},
  })
}));

jest.mock("expo-router", () => ({
  useRouter: () => ({replace: mockReplace}),
  Link: ({children, ...props}: any) => {
    const {Text} = require('react-native');
    return <Text {...props}>{children}</Text>
  },
}));

jest.mock("@/shared/hooks/useAppTheme", () => ({
  useAppTheme: () => require('@/constants/theme').LightTheme
}));

describe('SignUpForm component', () => {
  beforeEach(() => {
    mockIsPending = false;
  })

  test('should render correctly', async () => {
    const {getByTestId} = renderWithProviders(<SignUpForm />)

    expect(getByTestId('email-AddCommentForm')).toBeDefined();
    expect(getByTestId('password-AddCommentForm')).toBeDefined();
    expect(getByTestId('submit-button')).toBeDefined();
    expect(getByTestId('link')).toBeDefined();
  })

  test('should show validation errors', async () => {
    const {getByTestId} = renderWithProviders(<SignUpForm />)

    const submitButton = getByTestId('submit-button')

    await userEvent.press(submitButton);
    expect(getByTestId('error-text')).toBeDefined();
  })

  test('should call signUp on valid submit', async () => {
    const {getByTestId} = renderWithProviders(<SignUpForm />)
    const mockReplace = jest.mocked(require('expo-router').useRouter)().replace

    const submitButton = getByTestId('submit-button')
    const emailInput = getByTestId('email-AddCommentForm')
    const passwordInput = getByTestId('password-AddCommentForm')

    await userEvent.type(emailInput, 'test@mail.com')
    await userEvent.type(passwordInput, 'password')
    await userEvent.press(submitButton);
    expect(mockMutate).toHaveBeenCalledTimes(1)
    await waitFor(() => {
      expect(mockReplace).toHaveBeenCalledWith('/(tabs)/feed')
    })
  })

  test('should show loading indicator when isPending is true', async () => {
    mockIsPending = true;
    const {getByTestId} = renderWithProviders(<SignUpForm />)

    expect(getByTestId('loading-indicator')).toBeDefined();
  })
})