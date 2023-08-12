import Exam from "../entity/Exam";


export const generateExams = (count: number, courseId: number): Exam[] => {
    const exams: Exam[] = [];
    for (let i = 1; i <= count; i++) {
        exams.push(new Exam(i, `Exam ${courseId}-${i}`));
    }
    return exams;
};