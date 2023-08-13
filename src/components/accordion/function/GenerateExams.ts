import Exam from "../entity/Exam";


export const generateExams = (numExams: number): Exam[] => {
    const exams: Exam[] = [];
    for (let i = 1; i <= numExams; i++) {
        exams.push(new Exam(i, `Esame ${i}`));
    }
    return exams;
};