

import {Request, Response} from 'express';
import {COURSES} from "./db-data";


 
export function getAllCourses(req, res) {

/*
    const error = (Math.random() >= 0.5);

    if (error) {
        console.log("ERROR loading courses!");
        res.status(500).json({message: 'random error occurred.'});
    }
    else { */

        setTimeout(() => {

             res.status(200).json({payload:Object.values(COURSES)});

        }, 200);

  //  }
}


export function getCourseById(req, res) {

    const courseId = req.params["id"];

    const courses = Object.values(COURSES);

    const course = courses.find(course => course.id == courseId);

    res.status(200).json(course);
}



