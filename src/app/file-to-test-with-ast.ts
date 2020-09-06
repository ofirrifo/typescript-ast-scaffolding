export class A {

    constructor() {
    }

    save(name: string) {
        console.log(name);
    }
}

export class B {

    constructor() {
    }

    delete(id: string) {
        console.log(id);
    }
}


const a = new A;
a.save('test');

const b = new B;
b.delete('abc123here');
