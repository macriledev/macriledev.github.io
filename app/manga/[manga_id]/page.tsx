import { Manga } from "@/app/Manga";

interface PageProps {
    params: Promise<{
        manga_id: string;
    }>;
}

export default async function MangaPage({ params }: PageProps) {
    const { manga_id } = await params;

    return Manga.fromFile("./manga/"+manga_id+".json").toSexyHTML()
}