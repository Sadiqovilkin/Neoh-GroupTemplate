import React from 'react'
import "./LoginPage.scss"
import { useEffect } from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { useDataContext } from '../../../context/context';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useFormik } from 'formik';
import bcrypt from 'bcryptjs-react'
const Login = () => {
  const {users} = useDataContext()
  const [setUserID, setLocalUserID,] = useOutletContext();
 
  const navigate = useNavigate();
  const formik = useFormik  ({
    initialValues: {
      email: "",
      password: "",
    },
    // validationSchema: loginValidation,
    onSubmit:  (values) => {
      
      
      const foundUsers = users.find(
        (x) =>
          x.email == values.email &&
          x.role == "client"
      );
      console.log(foundUsers);
      if (foundUsers) {
        bcrypt.compare(values.password, foundUsers.password).then((match) => {
          if(!match){
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "email or password inCorrect",
              showConfirmButton: false,
              timer: 1500
            })
          }
          else{
            setUserID(foundUsers._id);
            setLocalUserID(foundUsers._id);
            //token
            // const token = response.token;
            // Cookies.set('token', token, {expires: 1});
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User succses login",
              showConfirmButton: false,
              timer: 1500
            }).then(()=>{
    
              navigate('/');
            })
          }
      });
     
       
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "some problem ",
          showConfirmButton: false,
          timer: 1500
        });
      }
      // if (response.auth) {
      //   formik.resetForm();
      //   dispatch(login(response.user));
      //   //token
      //   const token = response.token;
      //   Cookies.set('token', token, {expires: 1});
      //   Swal.fire({
      //     position: "top-end",
      //     icon: "success",
      //     title: response.message,
      //     showConfirmButton: false,
      //     timer: 1000,
      //   }).then(() => {
      //     navigate("/");
      //   });
      // } else {
      //   Swal.fire({
      //     position: "top-end",
      //     icon: "error",
      //     title: response.message,
      //     showConfirmButton: false,
      //     timer: 1000,
      //   });
      // }
    },
  });
  return (
    <section id='clientLogin'>
          <form onSubmit={formik.handleSubmit}>
        <input placeholder="email" className="form-control my-2" id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
        {formik.errors.email ? <div style={{color:"red"}}>{formik.errors.email}</div> : null}
        <input placeholder="password" className="form-control my-2" id="password" name="password" type="password" onChange={formik.handleChange} value={formik.values.password} />
        {formik.errors.password ? <div style={{color:"red"}}>{formik.errors.password}</div> : null}
        
        <button type="submit" className="btn btn-success ">Submit</button>
      </form>
    </section>
  )
}

export default Login