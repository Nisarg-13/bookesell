import React from 'react'
import { Typography, Button, Grid} from '@material-ui/core';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import TextFieldCustom from '../UI/TextField';
import Password from '../UI/PassWord';
import Select from '../UI/Select';



export default function User(props) {

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: ''
  }


  const Option = ['User', 'Seller', 'Admin'];

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name isRequired').min(5, "Min 5 characters"),

    lastName: Yup.string().required('Last Name isRequired').min(5, "Min 5 characters"),

    email: Yup.string().email('Email is invalid').required('Email is required'),

    password: Yup.string().required('Password is required').min(8, 'Password must be atleast 8 characters'),

    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Confirm Password is required'),

    role: Yup.string().required('Role is required')
  })

  return (
    < div style={{ overflow: 'hidden' }}>
      <Typography variant='h4' align='center'>
        Create Account
      </Typography>

      <Formik 
        validateOnChange='true'
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => console.log(values)}>

        <Form >

          <Typography variant='h5' style={{ marginLeft: 100 }}>
            Personal Information
          </Typography>
          <Grid container style={{ marginLeft: 100 }}>
            <Grid item xs={5}>
              <TextFieldCustom name='firstName' label="First Name" />
            </Grid>
            <Grid item xs={5}>
              <TextFieldCustom name='lastName' label="Last Name" />
            </Grid>
          </Grid>
          <br></br>
          <br></br>

          <Typography variant='h5' style={{ marginLeft: 100 }}>
            Email Address
          </Typography>
          <Grid container style={{ marginLeft: 100 }}>
            <Grid item xs={5}>
              <TextFieldCustom name='email' label="email" />
            </Grid>
            <Grid item xs={5}>
              <Select name='role' options={Option} label='Roles'/>
            </Grid>
          </Grid>
          <br></br>
          <br></br>


          <Typography variant='h5' style={{ marginLeft: 100 }}>
            Login Information
          </Typography>
          <Grid container style={{ marginLeft: 100 }}>
            <Grid item xs={5}>
              <Password name='password' label="Password" />
            </Grid>
            <Grid item xs={5}>
              <Password name='confirmPassword' label="Confirm Password" />
            </Grid>
          </Grid>

          <br></br>
          <br></br>
          <Button type='submit' variant="contained" color="primary" style={{ marginLeft: 100 }}>Register</Button>

        </Form>
      </Formik>



      

    </div>

  )
}