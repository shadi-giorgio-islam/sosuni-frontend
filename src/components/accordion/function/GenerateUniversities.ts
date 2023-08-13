import University from "../entity/University";
import {generateCourses} from "./GenerateCourses";

export const generateUniversities = (numUniversities: number, numCoursesPerUniversity: number, numExamsPerCourse: number): University[] => {
    const universities: University[] = [];
    for (let i = 1; i <= numUniversities; i++) {
        universities.push(new University(i, `Università ${i}`, generateCourses(numCoursesPerUniversity, numExamsPerCourse)));
    }
    return universities;
};