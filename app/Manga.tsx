import fs from "fs";
import "./manga-preview.css"
import Gallery from "./Gallery";

interface MangaSchema {
    filename: string;
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

    toPreviewHTML() {
        return (
            <div key={this.options.filename} className="manga-preview">
                <h1 title={this.options.name}>{this.options.name}</h1>
                <p title={this.options.description.long}>{this.options.description.short}</p>
                <a href={this.options.filename}><img src={"/"+this.options.pages[0]} /></a>
            </div>
        )
    }

    toSexyHTML() {
        return (
            <div key={this.options.filename}>
                <Gallery images={this.options.pages} />
            </div>
        )
    }

    static fromFile(file: string) {
        const json = JSON.parse(fs.readFileSync(file).toString());

        json.filename = file.substring(0, file.lastIndexOf("."))

        return new Manga(json)
    }
}