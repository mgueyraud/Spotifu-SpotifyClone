import Arrow from "./Arrow";
import Search from "./Search";
import { Link } from "react-router-dom";

const Header = ({ isTransparent }) => {
    return (
        <header className={`header ${!isTransparent ? "header--dark" : ""}`}>
            <Link to="/">
                <Arrow
                    href="#"
                    isLeft
                />
            </Link>
            <Arrow
                href="#"
            />
            <Search />
        </header>
    );
}

export default Header;