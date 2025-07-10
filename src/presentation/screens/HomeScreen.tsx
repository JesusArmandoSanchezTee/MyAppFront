import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuthStore } from '../../store/authStore';

export default function HomeScreen() {
  const { logout, token } = useAuthStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Text>Tu token:</Text>
      <Text style={styles.token}>{token}</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 28, marginBottom: 24 },
  token: { marginVertical: 8, fontSize: 12, color: '#555' },
});
