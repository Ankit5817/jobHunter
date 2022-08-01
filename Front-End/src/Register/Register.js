import { useFormik } from 'formik'
import * as yup from 'yup'
import React from 'react'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import "./Register.css"
import img2 from '../images/image2.jpg';

export default function Register() {
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmpassword: ''
        },
        onSubmit: (values, { resetForm }) => {

            axios.post(`http://localhost:3050/api/addUser`, { values })
                .then(res => {
                    console.log(res.data);
                    resetForm({ values: '' })
                    difftoast(res.data);
                })
        },
        validationSchema: yup.object().shape({
            firstname: yup.string()
                .min(3, 'FirstName is too short')
                .max(10, 'FirstName is too long')
                .required('FirstName cannot be left blank'),
            lastname: yup.string()
                .min(3, 'LastName is too short')
                .max(10, 'LastName is too long')
                .required('LastName cannot be left blank'),
            email: yup.string()
                .email('Invalid Email Address')
                .required('Email cannot be left blank'),
            password: yup.string()
                .required('Password cannot be left blank')

                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
                ),


            confirmpassword: yup.string()
                .required('Confirm Password cannot be left blank')
                .test('confirmpassword', 'Password & confirm password should be same', function (confirmpass) {
                    if (this.parent.password === confirmpass) {
                        return true;
                    }
                    return false;
                })
        }),
    });
    const difftoast = (responseMsg) => {
        let popUpText = responseMsg === 'already exist'?'Email id already exist':'Registration Successfull'
        toast.success(popUpText, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return (
        <div className='bg-white container-fluid' id='register'>
            <div>
                <div className="row">

                    <div className="col-md-7 text-end">
                        <img className="registerimage mt-4" src={img2} alt="registger" />
                    </div>

                    <div className="col-md-5 formPart text-center">
                        <div >
                            <h2 className="heading"><u>Register Here</u></h2>
                        </div>


                        <div className="formbox">

                            <form onSubmit={formik.handleSubmit}>
                                <div className="inputBox">
                                    <input id="firstname" name="firstname" type="text" value={formik.values.firstname} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="First Name" />
                                    {formik.errors.firstname && formik.touched.firstname ? <div className="warning">{formik.errors.firstname}</div> : null}
                                </div>
                                <div className="inputBox">
                                    <input id="lastname" name="lastname" type="text" value={formik.values.lastname} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="Last Name" />
                                    {formik.errors.lastname && formik.touched.lastname ? <div className="warning">{formik.errors.lastname}</div> : null}
                                </div>
                                <div className="inputBox">
                                    <input id="email" name="email" type="text" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="Email" />
                                    {formik.errors.email && formik.touched.email ? <div className="warning">{formik.errors.email}</div> : null}
                                </div>
                                <div className="inputBox">
                                    <input id="password" name="password" type="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="Password" />
                                    {formik.errors.password && formik.touched.password ? <div className="warning">{formik.errors.password}</div> : null}
                                </div>
                                <div className="inputBox">
                                    <input id="confirmpassword" name="confirmpassword" type="password" value={formik.values.confirmpassword} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="Confirm Password" />
                                    {formik.errors.confirmpassword && formik.touched.confirmpassword ? <div className="warning">{formik.errors.confirmpassword}</div> : null}
                                </div>
                                <div className="link">

                                    <Link to='/login'><p>Already have an Account</p></Link>
                                    {/* <Link className="nav-link active" aria-current="page" to="#">Already have an Account</Link> */}

                                </div>
                                <div className="inputBox text-center">
                                    <button type="submit" className='button'>Register</button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    )
}