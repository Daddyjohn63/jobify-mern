import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';

import Wrapper from '../assets/wrappers/RegisterPage';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true
};

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);

  // console.log(values);

  // global state and useNavigate
  //const state = useAppContext();
  //console.log(state);   //to test if global state is available.

  const { user, isLoading, showAlert, displayAlert, registerUser } =
    useAppContext();
  //above is destructuring of state coming from our custom hook useAppContext()

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
    //isMember: !values.isMember -- this takes what ever is the current state of isMember and sets it to the opposite.
  };

  const handleChange = e => {
    // console.log(e.target);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    // console.log(e.target);
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (isMember) {
      console.log('already a member');
    } else {
      registerUser(currentUser);
    }
    console.log(values);
  };
  //when user successful redirect to the home page
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
        {/* name input */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            values={values.name}
            handleChange={handleChange}
          />
        )}

        {/* email input */}
        <FormRow
          type="email"
          name="email"
          values={values.email}
          handleChange={handleChange}
        />

        {/* password input */}
        <FormRow
          type="password"
          name="password"
          values={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
