import React, {useState} from 'react'
import './Main.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import styled from 'styled-components'

function Main() {
    const services = [
        {
            title:'End of Lease Cleaning', 
            description: 'WOW your landlord and win your security deposit today with best and most comprehensive end of tenanacy cleaning service in Australia!',
            price:'100' },
        {
            title:'Domestic Cleaning', 
            description: 'WOW your Domestic Partner and win your security deposit today with best and most comprehensive end of tenanacy cleaning service in Australia!',
            price:'777' },
            {
            title:'Mould Cleaning', 
            description: 'WOW your Domestic Partner and win your security deposit today with best and most comprehensive end of tenanacy cleaning service in Australia!',
            price:'999' 
        }
        
    ]
    const [background, setBackground] = useState('yellow');
    const [click, setClick] = useState(false)

    const [contents, setContents] = useState(services[0])

    const handleClick = () => {
      
        setClick(!click);
      }

    const Circle = styled.button`
    border: 1px solid black;      
    border-radius:50%;
    width: 15px;
    height: 15px;
    background-color: blue;
    cursor: pointer;

`
    // const CircleToggle = styled(Circle)`
    //     opacity: 0.6;
    //     ${({ active }) =>
    //     active && 
    //     `
    //         opacity: 2;
    //     background-color:red;
    //             `}
    //     `;

       const Container = styled.section`
        display: flex;
        flex-direction: column;
        padding-bottom: 20px;
        width: 60%;
        `


    const Title = styled.section`
        font-family: 'Raleway';
        font-size:1.4rem;
        font-weight: bold;
        `
    const todisplayCarts = () => {
        return(
            <div className="right_container">
                 {services.map(type => (
                     <div
                        key={type}
                        className= {contents.title === type.title ? "right_serviceActive" : "right_service"}>
                     <div className="logo_service"></div>
                     <div className="title_service">
                         {type.title}
                     </div>
                     <div className="price_service">Starting from ${type.price}</div>
                 </div>

                ))
                }
               
            </div>
        )
    }

    const todisplayContents = () => {
        return (
            <Container>
            <div className="left_container">
                <Title>{contents.title}</Title>
             <div className="main_description">{contents.description}</div>
                <div className="prices"><p>FROM</p>${contents.price}</div>
                <div className="prices_button">CHECK AVAILABILITY</div>
            </div>
           
           
        </Container>
        )

    }
    const circleNav = () => {

        const activateCircle = (type) => {
            setContents(type)

        }

     
        return(
            <div className="circlenavs">
               {services.map(type => (
                   <div 
                   className={click && type === contents ? "circle_toggle:active" : "circle_toggle" }  
                //    {/* <CircleToggle */}
                      key={type}
                //         {/* active={contents === type} */}
                        onClick={() => {
                            handleClick()
                            activateCircle(type)
                            
                            
                        }}>

                        {/* </CircleToggle> */}
                        </div>
               ))}
            </div>
        )
    }
      return (
       <div className="main">
            <div className="mother_container">
            {todisplayContents()}
            {todisplayCarts()}
            </div>
            <div className="circle_container">
            {circleNav()}
            </div>


          
   </div>  )
}

export default Main

