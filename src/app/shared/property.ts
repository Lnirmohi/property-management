export class Property {
    id: number;
    name: string;
    description: string;
    size: number;

    constructor(id: number, name: string, description: string, size: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.size = size;
    }
}
