import { memo, useRef } from "react"

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Carousel } from "antd"
import { CarouselRef } from "antd/es/carousel"

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "100%",
    width: "100%",
    color: "#fff",
    textAlign: "center",
    background: "#364d79",
}

interface GaleryProps {
    images: string[];
    title: string;
}

const Galery = ({ images, title }: GaleryProps) => {
    const ref = useRef<CarouselRef>(null)

    return (
        <div className="coworking_card__col coworking_card__col-1">
            <div className="coworking_card__carousel">
                <Carousel ref={ref}>
                    {images.map((el, index) => (
                        <div className="coworking_card-image" style={contentStyle} key={index}>
                            <img src={el} alt={title} />
                        </div>
                    ))}
                </Carousel>
                <div
                    className="coworking_card__arrow_prev"
                    onClick={() => {
                        ref.current?.prev?.()
                    }}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <div
                    className="coworking_card__arrow_next"
                    onClick={() => {
                        ref.current?.next?.()
                    }}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
        </div>
    )
}

export default memo(Galery)
