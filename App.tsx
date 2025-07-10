
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useAuthStore } from './src/store/authStore';
import { AuthNavigator } from './src/presentation/navigation';

const queryClient = new QueryClient();

export default function App() {
  const { restoreToken } = useAuthStore();

  useEffect(() => {
    // Al arrancar, carga el token desde EncryptedStorage
    restoreToken();
  }, [restoreToken]);

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
