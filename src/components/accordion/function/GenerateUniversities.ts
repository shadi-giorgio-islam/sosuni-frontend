import University from "../entity/University";
import {generateCourses} from "./GenerateCourses";

export const generateUniversities = (count: number): University[] => {
    const universities: University[] = [];
    for (let i = 1; i <= count; i++) {
        const universityId = i;
        const courses = generateCourses(30, universityId);
        universities.push(new University(universityId, `University ${universityId}`, courses));
    }
    return universities;
};