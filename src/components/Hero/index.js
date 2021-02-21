const Hero = ({ albumTitle, albumSubtitle, albumFollowers, coverImg }) => {
    return (
        <section className="hero js-hero">
            <div className="hero__content js-hero-content">
                <h1 className="title-black--lg text--white">{albumTitle}</h1>
                <p className="mt-16">{albumSubtitle}</p>
                <p>{albumFollowers} seguidores.</p>
                <button className="btn btn--primary mt-16">Reproducir</button>
            </div>
            <div className="hero__bg js-hero-bg" data-bg="/assets/img/placeholders/placeholder-cover-hero.png" style={{ backgroundImage: `linear-gradient(to bottom, rgba(47, 47, 47, 0) 0%, #171717 90%), url(${coverImg})` }}></div>
        </section>
    );
}

export default Hero;