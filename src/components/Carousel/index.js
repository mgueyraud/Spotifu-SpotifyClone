import CarouselHeader from "./Header";
import { useEffect, useRef } from "react";
import CarouselS from "../../libraries/carousel";

const Carousel = ({ title, children }) => {

    const carouselRef = useRef(null);

    useEffect(() => {
        CarouselS({
            wrapper: carouselRef.current,
            el: ".carousel__content",
            prev: ".carousel__controls--prev",
            next: ".carousel__controls--next",
        });
    }, []);

    return (
        <div className="carousel mt-18" ref={carouselRef}>
            <CarouselHeader title={title} />
            <div className="carousel__content-overflowed">
                <div className="carousel__content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Carousel;