import "./gallery.css"

interface Props {
    images: string[]
}

export default async function Gallery({ images }: Props) {
    return (
        <div className="gallery">
            {images.map(img=>(<img key={img} src={"/"+img} />))}
        </div>
    )
}