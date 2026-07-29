import { renderWithProviders } from "@/shared/lib/renderWithProviders";
import { userEvent, waitFor } from "@testing-library/react-native";
import StepProgress from "@/features/onboarding/ui/components/step-progress";
import resetAllMocks = jest.resetAllMocks;

const mockReplace = jest.fn();
const mockUpdateProfile = jest.fn();

jest.mock('@/shared/api/supabase', () => ({
  supabase: {
    auth: {
      signUp: jest.fn(),
      signInWithPassword: jest.fn(),
      signOut: jest.fn().mockResolvedValue({error: null}),
    }
  }
}))

jest.mock("@/shared/hooks/useAppTheme", () => ({
  useAppTheme: () => require('@/constants/theme').LightTheme
}));

jest.mock("expo-router", () => ({
  useRouter: () => ({replace: mockReplace}),
}));

jest.mock("@/entities/user/hooks/useProfiles", () => ({
  useProfiles: () => ({
    updateProfile: {
      mutate: mockUpdateProfile,
      isPending: false,
    }}),
}))

describe("Step Progress", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })

  test("should render correctly", () => {
    const {getByTestId, queryByTestId} = renderWithProviders(<StepProgress />)

    expect(getByTestId('indicators-container')).not.toBeNull();
    expect(getByTestId('username-text')).not.toBeNull();
    expect(getByTestId('username-AddCommentForm')).not.toBeNull();
    expect(queryByTestId('username-errors')).toBeNull()
  })

  test("should show correct step label", async () => {
    const { getByTestId } = renderWithProviders(<StepProgress />)

    const usernameInput = getByTestId('username-AddCommentForm')
    expect(getByTestId('step-label')).toHaveTextContent('Add your username');
    const nextButton = getByTestId('next-button');
    await userEvent.type(usernameInput, 'test')
    await userEvent.press(nextButton);
    expect(getByTestId('step-label')).toHaveTextContent('Add your display name');
  })

  test("should navigate to the next step", async () => {
    const {getByTestId, queryByTestId } = renderWithProviders(<StepProgress />)

    const usernameInput = getByTestId('username-AddCommentForm')
    const nextButton = getByTestId('next-button');
    await userEvent.type(usernameInput, 'test')
    await userEvent.press(nextButton);
    await waitFor(() => {
      expect(queryByTestId('display_name-AddCommentForm')).not.toBeNull();
    })
  })

  test("should not to show back button at the first step", async () => {
    const { queryByTestId } = renderWithProviders(<StepProgress />)

    const backButton = queryByTestId('back-button');
    expect(backButton).toBeNull();
  })

  test("should navigate to the back step", async () => {
    const {getByTestId, queryByTestId} = renderWithProviders(<StepProgress />)

    const usernameInput = getByTestId('username-AddCommentForm')
    const nextButton = getByTestId('next-button');
    let backButton

    await userEvent.type(usernameInput, 'test')
    await userEvent.press(nextButton);
    await waitFor(() => {
      expect(queryByTestId('display_name-AddCommentForm')).not.toBeNull();
      backButton = queryByTestId('back-button');
    })

    await userEvent.press(backButton);
    await waitFor(() => {
      expect(queryByTestId('username-AddCommentForm')).not.toBeNull();
    })
  })

  test("should show done button at the last step", async () => {
    const { queryByTestId, getByTestId } = renderWithProviders(<StepProgress />)

    const usernameInput = getByTestId('username-AddCommentForm')
    const nextButton = getByTestId('next-button');
    await userEvent.type(usernameInput, 'test')
    await userEvent.press(nextButton)
    await userEvent.press(nextButton)

    expect(queryByTestId('done-button')).not.toBeNull();
  })

  test("should show validation errors when username is empty", async () => {
    const { queryByTestId, getByTestId } = renderWithProviders(<StepProgress />)

    const nextButton = getByTestId('next-button');
    await userEvent.press(nextButton);

    expect(queryByTestId('username-errors')).not.toBeNull();
  })

  test("should call updateProfile when submission is valid", async () => {
    const { queryByTestId, getByTestId } = renderWithProviders(<StepProgress />)

    const nextButton = getByTestId('next-button');
    const usernameInput = getByTestId('username-AddCommentForm');
    await userEvent.type(usernameInput, 'test')
    await userEvent.press(nextButton)
    await userEvent.press(nextButton)

    const doneButton = queryByTestId('done-button')
    await userEvent.press(doneButton)
    await waitFor(() => {
      expect(mockUpdateProfile).toHaveBeenCalledTimes(1)
    })
  })
})