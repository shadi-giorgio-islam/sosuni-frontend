import Course from './Course';

class University {

    private _id: number;

    private _name: string;

    private _courses: Course[];

    constructor(id: number, name: string, ccourses: Course[]) {
        this._id = id;
        this._name = name;
        this._courses = ccourses;
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

    get courses(): Course[] {
        return this._courses;
    }

    set ccourses(value: Course[]) {
        this._courses = value;
    }
}

export default University;