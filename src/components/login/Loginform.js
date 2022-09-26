import React,{useEffect, useState} from "react";
import { useUserContext } from "../../context/userContext";
import useForm from "../../APP/hooks/useForm";
import { FormControl,TextField,InputAdornment} from "@mui/material";
import './login.css'
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import { FaEyeSlash,FaEye } from "react-icons/fa";
 
const generateLoginFormValues = () => {
  return {
    email: {
      value: "",
      required: true,
      error: "",
      validateInput: (email) =>
        email.includes("@gmail.com") ? null : "email is not valid",
    },
    password: {
      value: "",
      required: true,
      error: "",
      validateInput: (password) =>
        password.length > 6
          ? null
          : "password should have at least 7 charachter",
    },
  };
};

const LoginForm = () => {
  
  
  const [values, setValues] = React.useState({
    
    showPassword: false,
  });
  
 
  
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const {
    formValues: loginFormValues,
    onInputChange,
    checkButtonDisable,
  } = useForm({ defaultFormValues: generateLoginFormValues() });

  const { login } = useUserContext();

  useEffect(() => {
    setIsButtonDisabled(checkButtonDisable(loginFormValues));
  }, [loginFormValues]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const email = loginFormValues.email.value;
    const password = loginFormValues.password.value;
    login({ email, password });
  };

  return (
    <div className="logincard">
          <h1 className='h2'>
        Login 
        </h1> 
        <hr></hr>
    <FormControl className='log' >
      <TextField 
        variant="outlined"
        name="email"
        label="email"
        value={loginFormValues.email.value}
        error={!!loginFormValues.email.error}
        helperText={loginFormValues.email.error}
        onChange={onInputChange}
        margin="dense"
      />
      <FormControl className='ioi' >
        <InputLabel 
          htmlFor="filled-adornment- 
   password">
          Password
        </InputLabel>
        
        <FilledInput
         
          name="password"
        
          label="password"
          
          
          error={!!loginFormValues.password.error}
          

          
          type={values.showPassword ? 'text' : 'password'}
          value={loginFormValues.password.value}
          onChange={onInputChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end">
                {values.showPassword ? <FaEye/>: <FaEyeSlash/>}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <button className="bton" disabled={isButtonDisabled} onClick={onFormSubmit}>
        Login
      </button>
    </FormControl>
    </div>
  );
};

export default LoginForm;