export class Item {
    constructor(public name: string, public value: number) { }

    public toString = (): string => {
        return `Item (name: ${this.name}, value: ${this.value})`;
    }
}