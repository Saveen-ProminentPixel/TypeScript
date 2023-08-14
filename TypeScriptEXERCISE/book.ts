interface Readable{
    read(): string;
}

interface Writable extends Readable{
    write(st: string): void;
}

class Book implements Writable{
    data: string;

    constructor(data: string){
        this.data = data;
    }

    read(): string {
        return this.data;
    }

    write(st: string): void {
        console.log(st);
    }
}

let book1: Book = new Book("Game of Thrones");

book1.write(book1.read());