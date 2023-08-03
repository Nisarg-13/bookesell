import React from 'react'
import { Grid, TextField } from '@material-ui/core'
import { useField } from 'formik'

const Password = ({
    name, 
    ...otherProps
})=>{

  const [show,setShow] = React.useState(false); 
  const [field, meta] = useField(name);
  const configTextField = {
    ...field,
    ...otherProps,
    }
  
  if(meta && meta.touched && meta.error)
  {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  } 

  const handleShow = ()=>{
    setShow(show=>!show);
  }
   
  return (
    <Grid container  style={{position:'relative'}} >
        <Grid item >
            <TextField {...configTextField} type={show?'text':'password'} />
        </Grid>
        <Grid item onClick={handleShow} style={{position:'relative',top:20,cursor:'pointer'}}>
            {show ?  '🔒' : '👁️' }
        </Grid>
    </Grid>
  )
}
export default  Password;