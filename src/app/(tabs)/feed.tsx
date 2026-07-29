import { useAppSelector, useAppDispatch } from "@/store/hooks";
import Toast from 'react-native-toast-message';
import { setIsJustLoggedIn, selectedJustLoggedIn } from "@/store/slices/auth.slice";
import PostsList from "@/features/feed/ui/components/PostsList/PostsList";
import { useEffect } from "react";


export default function Feed() {
  const isJustLoggedIn = useAppSelector(selectedJustLoggedIn);
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isJustLoggedIn) {
      showToast()
    }
  }, []);

  const showToast = () => {
    Toast.show({
      type: 'success',
      text2: 'You have successfully logged in',
    });

    dispatch(setIsJustLoggedIn(false));
  }

  return <PostsList />
}



// Code for change color schema ----->

// import { setTheme, ThemeType } from "@/src/store/slices/theme.slice";
// import { useAppTheme } from "@/shared/hooks/useAppTheme";

// const theme = useAppTheme()
// const dispatch = useAppDispatch();
//
// const handleClick = (theme: ThemeType) => {
//   dispatch(setTheme(theme))
// }

{/*<Button theme="primary" label="Change theme mode to Light" cb={() => handleClick('light')}/>*/}
{/*<Button theme="primary" label="Change theme mode to Dark" cb={() => handleClick('dark')}/>*/}
{/*<Button theme="primary" label="Change theme mode to System" cb={() => handleClick('device')}/>*/}
