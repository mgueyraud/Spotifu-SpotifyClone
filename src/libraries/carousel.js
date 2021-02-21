function Carousel({ wrapper, el, prev, next }) {
    const $wrapper = wrapper;
    const $el = $wrapper.querySelector(el);
    const $prev = $wrapper.querySelector(prev);
    const $next = $wrapper.querySelector(next);
    const widthChild = $el.children[0].getBoundingClientRect().width;

    //Click prev
    $prev.addEventListener("click", e => {
        e.preventDefault();
        $el.scrollTo({
            left: $el.scrollLeft - widthChild,
            behavior: 'smooth'
        });
    });

    //Click next
    $next.addEventListener("click", e => {
        e.preventDefault();
        $el.scrollTo({
            left: $el.scrollLeft + widthChild,
            behavior: 'smooth'
        });
    });
}

export default Carousel;