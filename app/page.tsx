import { Manga } from "./Manga";
import fs from "fs";

const MANGA_LOCATION = "./manga/"

export default function Home() {
  return (
    <>
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
        {fs.readdirSync(MANGA_LOCATION).map(file=>Manga.fromFile(MANGA_LOCATION+file).toPreviewHTML())}
      </section>
    </>
  );
}
