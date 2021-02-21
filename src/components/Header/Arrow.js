const Arrow = ({ href, isLeft = false }) => {
    return (
        <a href={href} className={`header__arrow header__arrow--${isLeft ? "left" : "right"}`} >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.4319 39L8.18356 20L30.4319 1L31.8164 2.61883L11.4638 20L31.8164 37.3812" fill="white" />
            </svg>
        </a >
    );
}

export default Arrow;