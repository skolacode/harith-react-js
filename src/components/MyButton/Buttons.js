import React from 'react'
import { Button } from '@mui/material'

export const MyButton = (props) => {
  return (
    <Button
      size="large" 
      variant="contained"
      color="primary"
      sx={{ 
        "&:hover": {
            backgroundColor: "#c4c4c4 !important"
        }
      }} 
      {...props}
    >
      {props.children}
    </Button>
  )
}