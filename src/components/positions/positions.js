import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Positions() {
    const [driverStandings, setDriverStandings] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch('https://ergast.com/api/f1/current/driverStandings.json');
        const data = await response.json();
        setDriverStandings(data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
        console.log(driverStandings);
    };

    return (
        <DivBody className='position-box'>
            <Div>
                <H1>Classificação de Pilotos:</H1>
                <table>
                    <thead>
                        <tr>
                            <Th>Posição</Th>
                            <Th>Piloto</Th>
                            <Th>Scuderia</Th>
                            <Th>Pontos</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {driverStandings.map((driver) => (
                            <tr key={driver.Driver.driverId}>
                                <Td>{driver.position}</Td>
                                <Td>
                                    <CustomLink to={`./driver/${driver.Driver.driverId}`}>
                                        {driver.Driver.givenName} {driver.Driver.familyName}
                                    </CustomLink>
                                </Td>
                                <Td>{driver.Constructors[0].name}</Td>
                                <Td>{driver.points}</Td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Div>
            <Footer>
                <P>Feito por Ryan Paiva</P>
                <A target="_blank" href="https://github.com/ryanpaiva/formula1-api" rel="noopener noreferrer">
                    <i><FaGithub /></i>
                </A>

                <A target="_blank" href="https://www.linkedin.com/in/ryanpaiva05/" rel="noopener noreferrer">
                    <i><FaLinkedinIn /></i>
                </A>
            </Footer>
        </DivBody>
    );
}

const DivBody = styled.div`
display: flex;
justify-content: center;
background-image: url('assets/images/backgroundImg.jpg');
background-size: cover ;
background-repeat: no-repeat;
background-position: center center;
height: 100vh;
align-items: center;
flex-direction: column; 

@media (max-width: 1280px) {
    height: auto;
}
`

const Footer = styled.footer`
text-align: center;
width: 100vw;
padding: 20px;
margin-top: 20px;
`

const P = styled.p`
margin-bottom: 20px;
`

const A = styled.a`
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
color: pink;
transform: rotate(5deg);
}
`

const Div = styled.div`
background-color: #e5e5e5;
padding: 20px;
border-radius: 5px;
opacity: 0.9;

@media (max-width: 1280px) {
    padding: 10px;
    margin: 20px;
}
`

const Th = styled.th`
font-weight: 700;
font-size: 18px;
padding-bottom: 20px;

@media (max-width: 980px) {
font-size: 16px;
}
`

const Td = styled.td`
padding: 5px 35px;
text-align: center;
font-size: 16px;

@media (max-width: 980px) {
padding: 5px 10px;
font-size: 14px;
}
`

const CustomLink = styled(Link)`
color: #000;
text-decoration: none;
background-image: linear-gradient(to right, red, red);
background-repeat: no-repeat;
background-size: 0% 2px;
background-position: 0% 100%;
transition: background-size 0.3s ease-in-out;

&:hover {
background-size: 100% 2px;
background-position: 0% 100%;
}

@media (max-width: 980px) {
font-size: 14px;
}
`;

const H1 = styled.h1`
text-align: center;
font-weight: 700;
margin-bottom: 30px;
`

export { Positions }
