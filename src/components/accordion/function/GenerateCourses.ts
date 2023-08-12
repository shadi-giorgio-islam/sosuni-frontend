import Course from "../entity/Course";
import {generateExams} from "./GenerateExams";

export const generateCourses = (count: number, universityId: number): Course[] => {
    const courses: Course[] = [];
    for (let i = 1; i <= count; i++) {
        const courseId = (universityId - 1) * count + i;
        const exams = generateExams(20, courseId);
        courses.push(new Course(courseId, `Course ${courseId}`, exams));
    }
    return courses;
};
