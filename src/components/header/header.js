import styled from "styled-components"
import './menu.css'
import { Link } from "react-router-dom"
import { logo } from "../assets/images"

const HeaderMenu = () => {
    return (
        <Header className="header">
            <div className="header-container">
                <Link to={'/'}>
                    <img src={logo} />
                </Link>

                <nav>
                    <input type="checkbox" id="menu-hamburguer" />

                    <label htmlFor="menu-hamburguer">
                        <div className="menu">
                            <span className="hamburguer"></span>
                        </div>
                    </label>

                    <ul>
                        <li><a href="#">Corridas</a></li>
                    </ul>
                </nav>
            </div>
        </Header>
    )
}

const Header = styled.header`

.header-container {
    display: flex;
    padding: 20px 40px;
    justify-content: space-between;
    align-items: center;
    min-height: 75px;
}

.header-container a img {
    width: 130px;
    height: 30px;
}

nav ul {
    display: flex;
}

nav ul li a {
color: #fff;
list-style: none;
font-size: 20px;
font-weight: 500;
background-image: linear-gradient(to right, red, red);
background-repeat: no-repeat;
background-size: 0% 2px;
background-position: 0% 100%;
transition: background-size 0.3s ease-in-out;
}

nav ul li a:hover {
background-size: 100% 2px;
background-position: 0% 100%;
}
`

export { HeaderMenu }