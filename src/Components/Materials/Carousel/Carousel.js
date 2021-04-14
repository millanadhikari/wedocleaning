
import React, { useState, useEffect } from 'react';

import CarouselSlide from './CarouselSlide';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slide from '@material-ui/core/Slide';
import './Carousel.css'

const SLIDE_INFO = [
    { backgroundColor: '#ff7c7c', title: 'Spring Cleaning',
      description:'First time using WeServe Cleaners and I was very imnpressed. Friendly, punctual cleaners and my apartment is sparkling clean. Highly recommended their service and will use them again.',
      name:'Rajesh Hamal', address:'Tarneit' },
    { backgroundColor: '#ffb6b9',
        title: 'Regular Cleaning', 
        description:'All I need is my house need to get cleaned, and it did, they come with their own vaccuum and put garbage bin outside also they did dishes, room organised. Great service and excellent cleaning from the team who attended.', name:'Hari Bansha', address:'Homebush' },
    { backgroundColor: '#8deaff', title: 'Carpet Cleaning', description:'The carpet had a lot of extremely their own vaccum and the excellent job that you did very famous in your country huh!', name:'Philiphine Kancha', address:'Tokha, Nepal' },
    { backgroundColor: '#ffe084', title: 'Slide 4', description:'Good reviews', name:'Rajesh Hamal', address:'Tarneit' },
    { backgroundColor: '#d9d9d9', title: 'Slide 5', description:'Good reviews', name:'Rajesh Hamal', address:'Tarneit' },
];

function Arrow(props) {
    const { direction, clickFunction } = props;
    const icon = direction === 'left' ? <FaChevronLeft  /> : <FaChevronRight />;

    return <div onClick={clickFunction}>{icon}</div>;

}

function Carousel() {
    const [index, setIndex] = useState(0);
    const content = SLIDE_INFO[index];
    const numSlides = SLIDE_INFO.length;

    const [slideIn, setSlideIn] = useState(true);
    const [slideDirection, setSlideDirection] = useState('down');

    const onArrowClick = (direction) => {
        const increment = direction === 'left' ? -1 : 1;
        const newIndex = (index + increment + numSlides) % numSlides;

        const oppDirection = direction === 'left' ? 'right' : 'left';
        setSlideDirection(direction);
        setSlideIn(false);

        setTimeout(() => {
            setIndex(newIndex);
            setSlideDirection(oppDirection);
            setSlideIn(true);
        }, 500);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.keyCode === 39) {
                onArrowClick('right');
            }
            if (e.keyCode === 37) {
                onArrowClick('left');
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    return (
        <div className='carousel'>
            <h3 style={{fontSize:'32px', textAlign:'center'}}>Customer Reviews</h3>
            <div className="carousel_holder">
            <Arrow
                direction='left'
                
                clickFunction={() => onArrowClick('left')}
            />
            <Slide in={slideIn} direction={slideDirection}>
                <div>
                    <CarouselSlide content={content} />
                </div>
            </Slide>
            <Arrow
                direction='right'
                clickFunction={() => onArrowClick('right')}
            />
            </div>
          
        </div>
    );
}

export default Carousel;