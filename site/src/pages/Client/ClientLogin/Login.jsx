import React from 'react'
import "./Login.scss "
const Login = () => {
  return (
    <section id='clientLogin'>
      <form onSubmit={formik.handleSubmit}>
        <input placeholder="desc" className="form-control my-2" id="desc" name="desc" type="text" onChange={formik.handleChange} value={formik.values.desc} />
        {formik.errors.desc ? <div>{formik.errors.desc}</div> : null}

        <button type="submit" className="btn btn-success ">Submit</button>
      </form>
    </section>
  )
}

export default Login