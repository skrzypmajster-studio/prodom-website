"use client";
import { useState } from "react";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type LightboxGalleryImage = {
    src: string;
    thumbnail: string;
}

type LightboxGalleryProps = {
    images: LightboxGalleryImage[];
}

export const LightboxGallery = ({ images }: LightboxGalleryProps) => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const slides: SlideImage[] = images.map(({ src }) => ({ src }));

    return <>
        {/* Thumbnails grid  */}
        {
            images.map(({ thumbnail }, idx) => (
                <button key={idx}
                    onClick={() => {
                        setIndex(idx);
                        setOpen(true);
                    }}
                    className="aspect-[4/3] rounded-xl overflow-hidden shadow focus:outline-none hover:cursor-pointer"
                >
                    <img src={thumbnail} alt={`Realizacja ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </button>
            ))
        }
        {/* Lightbox */}
        <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={slides}
            index={index}
            on={{ view: ({ index }) => setIndex(index) }}
        />
    </>

}