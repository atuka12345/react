import { FormControl,TextField,InputAdornment } from '@mui/material';
import useForm from '../../APP/hooks/useForm';
import { useUserContext } from '../../context/userContext';
import "./reg.css"
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import { FaEyeSlash,FaEye } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';


  const generateRegisterFormValues = () => {
    return {
      firstName: {
        value: "",
        required: true,
        error: "",
        validateInput: (name) =>
          name.length > 3 ? null : "name should have at least 4 charachter",
      },
      lastName: {
        value: "",
        required: true,
        error: "",
        validateInput: (lastName) =>
          lastName.length > 3
            ? null
            : "last name should have at least 4 charachter",
      },
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
  
  const RegisterForm = () => {
    
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
    const { register } = useUserContext();
    const { formValues, checkButtonDisable, onInputChange } = useForm({
      defaultFormValues: generateRegisterFormValues(),
    });
  
    useEffect(() => {
      setIsButtonDisabled(checkButtonDisable(formValues));
    }, [formValues]);
  
    const onSubmit = (e) => {
      e.preventDefault();
      const firstName = formValues.firstName.value;
      const lastName = formValues.lastName.value;
      const email = formValues.email.value;
      const password = formValues.password.value;
      register({ firstName, lastName, email, password });
    };
  
    return (
      <div className='card1'> 
        <h1 className='h1'>
        Registration
        </h1> 
        <hr></hr>
      <FormControl className='
      reg'>
        <TextField
          variant="outlined"
          name="firstName"
          label="firstName"
          value={formValues.firstName.value}
          error={!!formValues.firstName.error}
          helperText={formValues.firstName.error}
          onChange={onInputChange}
          margin="dense"
        />
        <TextField
          variant="outlined"
          name="lastName"
          label="lastName"
          value={formValues.lastName.value}
          error={!!formValues.lastName.error}
          helperText={formValues.lastName.error}
          onChange={onInputChange}
          margin="dense"
        />
        <TextField
          variant="outlined"
          name="email"
          label="email"
          value={formValues.email.value}
          error={!!formValues.email.error}
          helperText={formValues.email.error}
          onChange={onInputChange}
          margin="dense"
        />
        <FormControl className='io' >
        <InputLabel 
          htmlFor="filled-adornment- 
   password">
          Password
        </InputLabel>
        
        <FilledInput
         
          name="password"
        
          
          
          
          error={!!formValues.password.error}
          

          
          type={values.showPassword ? 'text' : 'password'}
          value={formValues.password.value}
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

        <button className='bunno' disabled={isButtonDisabled} onClick={onSubmit}>
          Register
        </button>
      </FormControl>
      </div>
    );
  };
  
  export default RegisterForm;