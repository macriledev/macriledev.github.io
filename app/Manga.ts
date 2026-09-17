import fs from "fs";

interface MangaSchema {
    name: string,
    description: {
        long: string;
        short: string;
    },
    pages: string[]
}

export class Manga {
    constructor(
        public options: MangaSchema
    ) {}

    static fromFile(file: string) {
        const json = JSON.parse(fs.readFileSync(file).toString());

        return new Manga(json)
    }
}