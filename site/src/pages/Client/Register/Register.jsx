import React from 'react'
import { useFormik } from 'formik';
import { useDataContext } from '../../../context/context';
import userSchema from '../../../validations/User.validations';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import "../ClientLogin/LoginPage.scss"
const Register = () => {

  const {userPost} = useDataContext()
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues:{
      username:"",
      email:"",
      password:"",
      confPassword:"",
    },
    onSubmit:(values)=>{
      console.log(values);
      userPost({
        username:values.username,
        email:values.email,
        password:values.password,
        role:"client"
      })
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User succses Sign Up",
        showConfirmButton: false,
        timer: 1500
      }).then(()=>{

        navigate('/login');
      })
      formik.resetForm()  
    },
    validationSchema:userSchema
  })
  return (
  <section>
       <div className="container">
        <div className="row  justify-content-center ">
          <div className="col-lg-6">
          <form onSubmit={formik.handleSubmit}>
        <input placeholder="username" className="form-control my-2" id="username" name="username" type="text" onChange={formik.handleChange} value={formik.values.username} />
        {formik.errors.username ? <div style={{color:"red"}}>{formik.errors.username}</div> : null}
        <input placeholder="email" className="form-control my-2" id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
        {formik.errors.email ? <div style={{color:"red"}}>{formik.errors.email}</div> : null}
        <input placeholder="password" className="form-control my-2" id="password" name="password" type="password" onChange={formik.handleChange} value={formik.values.password} />
        {formik.errors.password ? <div style={{color:"red"}}>{formik.errors.password}</div> : null}
        <input placeholder="confrim password" className="form-control my-2" id="confPassword" name="confPassword" type="password" onChange={formik.handleChange} value={formik.values.confPassword} />
        {formik.errors.confPassword ? <div style={{color:"red"}}>{formik.errors.confPassword}</div> : null}

        <button type="submit" className="btn btn-success ">Submit</button>
      </form>
          </div>
        </div>
       </div>
  </section>
  )
}

export default Register