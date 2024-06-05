import * as yup from 'yup';

const userSchema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  });


  export default userSchema