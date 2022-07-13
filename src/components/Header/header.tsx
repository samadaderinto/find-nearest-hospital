import React from 'react'
import { InputBase, Typography, Box, Button, AppBar, Toolbar } from '@material-ui/core'
import useStyles from "./styles"
import distance from "../../assets/radius.svg"

const Header = () => {
  const classes = useStyles()
  return (
    <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
         <Typography variant='h5' className={classes.title}> 
            Hospifind 
         </Typography> 
         <Box display="flex" width= "600px"> 
             <Typography variant='h5'>Find Nearest Hospital</Typography> 
             <div style={{display: "flex"}}> 
                <div className={classes.search}> 
                    <InputBase  
                    placeholder="Please insert radius"  
                    classes={{root: classes.inputRoot, input: classes.inputInput }}/> 
                    <div className={classes.searchIcon}> 
                         <object data={distance} className={classes.searchIconImage}/> 
                    </div>  
                 </div> 
                 <Button className={classes.button}>Find</Button>
             </div> 
         </Box> 
        </Toolbar>
    </AppBar>
  )
}

export default Header