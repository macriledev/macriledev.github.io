import { Manga } from "./Manga";
import Navbar from "./navbar";
import fs from "fs";
import "./manga-preview.css"

const MANGA_LOCATION = "./manga/"

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="page-layout">
        <aside className="sidebar">
            <h2>Macfreak</h2>

            <p>
                Welcome to the Macfreak content page.
            </p>

            <p>
                Browse the manga available below.
            </p>
        </aside>

        <section className="manga-grid">
          {fs.readdirSync(MANGA_LOCATION).map(file=>{
            const manga = Manga.fromFile(MANGA_LOCATION+file)
            return (
              <div key={file} className="manga-preview">
                <h1>{manga.options.name}</h1>
                <p>{manga.options.description.short}</p>
                <img src={manga.options.pages[0]} />
              </div>
            )
          })}
        </section>
      </main>
    </>
  );
}
