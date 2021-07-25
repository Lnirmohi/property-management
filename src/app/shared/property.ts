export class Property {
    id: string;
    name: string;
    description: string;
    size: number;

    constructor(id: string, name: string, description: string, size: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.size = size;
    }
}
