import Arrow from "./Arrow";
import Search from "./Search";

const Header = ({ isTransparent }) => {
    return (
        <header className={`header ${!isTransparent ? "header--dark" : ""}`}>

            <Arrow
                href="/"
                isLeft
            />
            <Arrow
                href="/play"
            />
            <Search />
        </header>
    );
}

export default Header;