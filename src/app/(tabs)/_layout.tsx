import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useAppTheme } from "@/shared/hooks/useAppTheme";

export default function TabLayout() {
  const theme = useAppTheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.tint,
        tabBarInactiveTintColor: theme.tint,
        headerStyle: {
          backgroundColor: theme.primary,
        },
        headerShadowVisible: false,
        headerTintColor: theme.tint,
        tabBarStyle: {
          backgroundColor: theme.primary,
        },
      }}>
      <Tabs.Screen name="feed" options={{ title: 'Feed', tabBarIcon: ({color, focused}) => (
        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />),
      }}/>
      <Tabs.Screen name="addPost" options={{ title: 'Add', headerShown: false, tabBarIcon: ({color, focused}) => (
        <Ionicons name={focused ? 'add-circle' : 'add-circle-outline'} color={color} size={24} />),
      }} />
      <Tabs.Screen name="profile" options={{ headerShown: false, tabBarIcon: ({color, focused}) => (
          <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={24} />),
      }} />
    </Tabs>
  );
}

