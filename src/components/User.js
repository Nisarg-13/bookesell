import React from 'react';
import SimpleCard from './Card';
import { Typography } from '@material-ui/core';

export default function User(props) {
  return (
   <>
     <div>
        <Typography variant='h3' color='primary' align='center'>{props.name}</Typography>
        <Typography variant='h6' color='secondary' align='center'>{props.role}</Typography>
    </div>
    <SimpleCard/>

   </>

  )
}