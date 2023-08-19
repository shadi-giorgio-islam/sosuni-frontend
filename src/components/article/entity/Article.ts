

class Article{
    private _id: number;
    private _title: string;
    private _content: string;
    private _image: string;
    private _publicationDate: string;


    constructor(id: number, title: string, content: string, image: string, publicationDate: string) {
        this._id = id;
        this._title = title;
        this._content = content;
        this._image = image;
        this._publicationDate = publicationDate;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
    }

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }

    get publicationDate(): string {
        return this._publicationDate;
    }

    set publicationDate(value: string) {
        this._publicationDate = value;
    }
}

export default Article;