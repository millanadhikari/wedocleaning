import React from 'react'
import { Card, makeStyles } from '@material-ui/core';




function CarouselSlide(props) {
    const { backgroundColor, title, description, name, address } = props.content;

    const useStyles = makeStyles(() => ({
        card: {
            borderRadius: 5,
            padding: '20px 40px 50px',
            textAlign:'left',
            width: '280px',
            boxShadow: '5px 5px 20px black',
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            fontSize:'16px', 
            fontFamily:'Raleway', 
            
            
        }, 
        
        
    }));
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <h3 style={{marginBottom:'15px'}}>{title}</h3>
            <p style={{marginBottom:'50px', fontSize:'15px'}}>{description}</p>
            <span style={{marginBottom:'5px', color:'#3c76a9'}}>{name}</span>
            <p>{address}</p>
        </Card>
    )
}

export default CarouselSlide
