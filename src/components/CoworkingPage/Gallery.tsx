import { useState } from "react"

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Galleria } from "primereact/galleria"

const responsiveOptions = [
    {
        breakpoint: "1024px",
        numVisible: 3,
        numScroll: 3,
    },
    {
        breakpoint: "768px",
        numVisible: 2,
        numScroll: 2,
    },
    {
        breakpoint: "560px",
        numVisible: 1,
        numScroll: 1,
    },
]

const Gallery = ({ images }: { images: string[] }) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const prev = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1)
        }
    }

    const next = () => {
        if (activeIndex < images.length - 1) {
            setActiveIndex(activeIndex + 1)
        }
    }

    const itemTemplate = (item: string) => {
        return (
            <div className="item-template">
                <img src={item} alt={item} style={{ width: "100%", display: "block" }} />
            </div>
        )
    }

    const thumbnailTemplate = (item: string) => {
        return <img src={item} alt={item} style={{ width: "100%", display: "block" }} />
    }

    return (
        <div className="coworking_page__col">
            <div className="coworking_page__galery">
                <Galleria
                    value={images}
                    activeIndex={activeIndex}
                    onItemChange={e => setActiveIndex(e.index)}
                    responsiveOptions={responsiveOptions}
                    numVisible={5}
                    item={itemTemplate}
                    thumbnail={thumbnailTemplate}
                    style={{ maxWidth: "100%" }}
                />
                <div onClick={prev} className="coworking_page__galery_button_left">
                    <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#fff", fontSize: "30px" }} />
                </div>
                <div onClick={next} className="coworking_page__galery_button_right">
                    <FontAwesomeIcon icon={faChevronRight} style={{ color: "#fff", fontSize: "30px" }} />
                </div>
            </div>
        </div>
    )
}

export default Gallery
