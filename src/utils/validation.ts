import * as Yup from 'yup';

export const loginValidation = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Requerido'),
  password: Yup.string().min(6, 'Mínimo 6 caracteres').required('Requerido'),
});

export const registerValidation = loginValidation;
