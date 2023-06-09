import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../pics/it.jpg';
import CheckPassword from './CheckPassword/CheckPassword';
import styles from './SignUp.module.scss';

export default function SignUp() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasswrod] = useState('');
  const [username, setUsername] = useState('');
  const [passFocus, setPassFocus] = useState(false);
  const [gender ,setGender] = useState()


  fetch('http://localhost:3000/signup', {
    method: 'POST',
    body: JSON.stringify({
      username : username ,
      email : email,
      password : password,
      first_name : fname,
      last_name : lname,
      gender : gender
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
    }).then(function (response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    }).then(function (data) {
      console.log(data);
    }).catch(function (error) {
      console.warn('Something went wrong.', error);
    });

  return (
    <div className={styles.signup}>
      <div className={styles.signuptotal} style={{ backgroundImage: `url(${img1})` }}>
        <div className={styles.signupshadow}>
          <div className={styles.checkpasscontainer}>
            {passFocus && <CheckPassword password={password} />}
          </div>
          <div className={styles.signupcontext}>
            <form className={styles.signupform}>
              <div className={styles.createtextcontainer}>
                <p className={styles.createtext}> Craete new account </p>
                <div className={styles.signupcircle}></div>
              </div>
              <div className={styles.alreadycontainer}>
                <p className={styles.already}> Already a memeber ? </p>
                <Link className={styles.alreadylogin} to='/login'> Log In </Link>
              </div>
              <div className={styles.flnames}>
                <div className={styles.fnamecontainer}>
                  <p className={styles.fnametext}> First name </p>
                  <input
                    className={styles.fname}
                    value={fname}
                    required
                    onChange={(e) => {
                      setFname(e.target.value);
                    }}
                  />
                </div>
                <div className={styles.lnamecontainer}>
                  <p className={styles.lnametext}> Last name </p>
                  <input
                    className={styles.lname}
                    value={lname}
                    onChange={(e) => {
                      setLname(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className={styles.signupemailcontainer}>
                <p className={styles.signupemailtext}> Email Adrress</p>
                <input
                  className={styles.signupemail}
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className={styles['username-container']}>
                <p className={styles['username-text']}> Username </p>
                <input
                  className={styles.username}
                  type='text'
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div className={styles.signuppasscontainer}>
                <p className={styles.signuppasstext}> Password </p>
                <input
                  className={styles.signuppass}
                  type='password'
                  value={password}
                  required
                  onChange={(e) => {
                    setPasswrod(e.target.value);
                  }}
                  onFocus={() => {
                    setPassFocus(true);
                  }}
                  onBlur={() => {
                    setPassFocus(false);
                  }}
                />
              </div>
              <div className={styles.line4}>
                <p className={styles.line4text}>
                  don't have any idea for your password ?
                </p>
                <Link to='/' >
                  Click Here
                </Link>
              </div>
              <div className={styles.sexsubmitcontainer}>
                <div className={styles.sexcontainer}>
                  <p className={styles.sextext}> Sex </p>
                  <select id='sex' className={styles.sex} onChange={e => {
                    setGender(e.target.value)
                  }}>
                    <option value={gender}> Male </option>
                    <option value={gender}> Female </option>
                    <option value={gender}> Other </option>
                  </select>
                </div>
                <div className={styles.btncontainer}>
                  <input type='submit' className={styles.signupbtn} value='Sign Up' />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
