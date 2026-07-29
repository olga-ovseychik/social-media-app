import React from 'react';
import { View } from 'react-native';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock'


jest.mock("@/shared/hooks/useAppTheme", () => ({
  useAppTheme: () => require('@/constants/theme').LightTheme
}));

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('react-native-gesture-handler', () => ({
  ...require('react-native-gesture-handler/jestSetup'),
  GestureHandlerRootView: ({children}) => children
}))

jest.mock('@gorhom/bottom-sheet', () => {
  const React = require('react')
  const {View} = require('react-native')

  return {
    __esModule: true,
    default: React.forwardRef(({ children, ...props }, ref) => {
      React.useImperativeHandle(ref, () => ({
        expand: jest.fn(),
        close: jest.fn(),
      }))

      return <View ref={ref} {...props}>{children}</View>
    }),

    BottomSheetView: ({children}) => <View>{children}</View>,
    BottomSheetBackdrop: () => null
  }
})

jest.mock("@/entities/post/hooks/usePosts", () => ({
  usePosts: jest.fn().mockReturnValue({
    getPosts: {
      data: {
        pages: [{
          items: [
            {
              id: 1,
              content: 'mock-content-1',
              image_url: null,
              created_at: new Date().toISOString(),
              userId: '1',
              user: { username: 'test', avatar_url: null }
            },
            {
              id: 2,
              content: 'mock-content-2',
              image_url: null,
              created_at: new Date().toISOString(),
              userId: '1',
              user: { username: 'test', avatar_url: null }
            },
          ]
        }]
      },
      isPending: false,
      isRefetching: false,
      hasNextPage: false,
      isFetchingNextPage: false,
      fetchNextPage: jest.fn(),
      refetch: jest.fn(),
    }
  })
}))

// jest.mock('@/shared/components/BottomSheet/CustomBottomSheet', () => {
//   const React = require('react')
//   const {View} = require('react-native')
//
//   return {
//     __esModule: true,
//     default: React.forwardRef((props, ref) => {
//       React.useImperativeHandle(ref, () => ({
//         expand: jest.fn(),
//         close: jest.fn(),
//       }))
//
//       return <View {...props} />
//     }),
//     BottomSheetView: ({children}) => <View>{children}</View>,
//     BottomSheetBackdrop: () => null
//   }
// })

