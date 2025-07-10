import React from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { loginValidation } from '../../utils/validation';
import { useAuthStore } from '../../store/authStore';

export default function LoginScreen({ navigation }: any) {
  const { login, isLoading, error } = useAuthStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginValidation}
        onSubmit={async values => {
          await login(values.email, values.password);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              placeholder="Email"
              style={styles.input}
              autoCapitalize="none"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <Button title="Login" onPress={() => handleSubmit()} />
            )}

            {error && <Text style={styles.error}>{error}</Text>}

            <Button title="Registrarse" onPress={() => navigation.navigate('Register')} />
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 16, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 8, padding: 8, borderRadius: 4 },
  error: { color: 'red', marginBottom: 8 },
});
