import Exam from './Exam';

class Course {
    private _id: number;
    private _name: string;
    private _exams: Exam[];

    constructor(id: number, name: string, exams: Exam[]) {
        this._id = id;
        this._name = name;
        this._exams = exams;
    }
    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get exams(): Exam[] {
        return this._exams;
    }

    set exams(value: Exam[]) {
        this._exams = value;
    }
}

export default Course;