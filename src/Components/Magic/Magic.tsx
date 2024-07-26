export class Magic {
    constructor(public id: number, public type: string, public level: number, public name: string, public range: string, public duration: string, public description: string) { }

    public toString = (): string => {
        return `Magic (type: ${this.type}, level: ${this.level}, name: ${this.name}, range: ${this.range}, duration: ${this.duration}, description: ${this.description})`;
        
    }
}