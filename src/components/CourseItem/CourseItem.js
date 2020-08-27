import React from 'react';
import './CourseItem.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";


const CourseItem = (props) => {
    // console.log(props.course);
    const {img, title, name, price} = props.course;
    return (
        <div className='course-box'>
           <div>
                <img src={props.course.img}alt=""/>
           </div>
           <div>
                <h4>{name}</h4>
                <h3>{title} </h3>
                <p>${price}</p>
                <Button color="success" onClick={() => props.handleAddCourse(props.course)}>Enroll <FontAwesomeIcon icon={faPlusSquare} />  Now</Button> 
           </div>
        </div>
    );
};

export default CourseItem;