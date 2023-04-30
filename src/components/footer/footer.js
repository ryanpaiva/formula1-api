import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import styled from "styled-components"

const Footer = () => {
    return (
        <FOOTER>
                <p>Feito por Ryan Paiva</p>
                <a target="_blank" href="https://github.com/ryanpaiva/formula1-api" rel="noopener noreferrer">
                    <i><FaGithub /></i>
                </a>

                <a target="_blank" href="https://www.linkedin.com/in/ryanpaiva05/" rel="noopener noreferrer">
                    <i><FaLinkedinIn /></i>
                </a>
            </FOOTER>
    )
}

const FOOTER = styled.footer`
text-align: center;
position: absolute;
left: 50%;
bottom: -1%;
transform: translate(-50%, -50%);

p {
    margin-bottom: 10px;
    cursor: default;
}

a {
    display: inline-block;
    width: 40px;
    height: 20px;
    font-size: 1.8rem;
    text-align: center;
    margin: 0 6px;
    border-radius: 50%;
    transition: 0.3s ease-in-out;
    color: #fff;

&:hover {
color: red;
transform: rotate(5deg);
}
}

@media (max-width: 1280px) {

    display: none;

    p {
        color: #fff;
    }
}
`

export { Footer }