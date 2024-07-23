export class Item {
    constructor(public id: number, public name: string, public value: number, public type: string = "") { }

    public toString = (): string => {
        return `Item (name: ${this.name}, value: ${this.value}), type: ${this.type}`;
    }
}