import Image from "next/image";

export default function RelaxingSounds({ imagePath, altText }) {
    return (
        <div>
            <Image 
            src={`/images/destress_relaxing_sounds/${imagePath}MusicCard.svg`}
            alt={altText} 
            width={281}
            height={387}
            />
        </div>
    )
}
