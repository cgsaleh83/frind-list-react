import React from 'react';
import { useState } from 'react';
import fakeDataCourses from '../../fakeData/CorseList';
import './Course.css';
import CourseItem from '../CourseItem/CourseItem';
import Cart from '../Cart/Cart';


const Course = () => {
    const data = fakeDataCourses;
     const [courses, setCourses] = useState(data);
    const [user, setUser] = useState([]);

     const handleAddCourse = (course) =>{
        const newUser =[...user, course];
        setUser(newUser)
     }
    return (
        <div className="container">
            <div className="row">
                <div className='course-wrap'>
                    <div className="row">
                        <div className="corse-first-box">
                            <h1>All Course :{courses.length}</h1>
                                {
                                courses.map(cr => <CourseItem

                                    handleAddCourse={handleAddCourse}
                                     course ={cr}

                                     ></CourseItem>)
                                }

                        </div>
                        <div className="corse-second-box">
                            <Cart user={user}></Cart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
