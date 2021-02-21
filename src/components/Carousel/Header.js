import CarouselArrow from "./CarouselArrow";

const CarouselHeader = ({ title }) => {
    return (
        <div className="carousel__header">
            <h3>{title}</h3>
            <CarouselArrow isPrev />
            <CarouselArrow />
        </div>
    );
}

export default CarouselHeader;