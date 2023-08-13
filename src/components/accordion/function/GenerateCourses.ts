import Course from "../entity/Course";
import {generateExams} from "./GenerateExams";

export const generateCourses = (numCourses: number, numExamsPerCourse: number): Course[] => {
    const courses: Course[] = [];
    for (let i = 1; i <= numCourses; i++) {
        courses.push(new Course(i, `Corso di Laurea ${i}`, generateExams(numExamsPerCourse)));
    }
    return courses;
};