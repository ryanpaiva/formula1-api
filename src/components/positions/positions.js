import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Positions() {
    const [driverStandings, setDriverStandings] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch('https://ergast.com/api/f1/current/driverStandings.json');
        const data = await response.json();
        setDriverStandings(data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
    };

    return (
        <DivBody className='position-box'>
            <Div>
                <H1>Classificação de Pilotos:</H1>
                <h6>As atualizações podem demorar até 24h Horas</h6>
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
        </DivBody>
    );
}

const DivBody = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column; 

h6 {
    text-align: center;
    color: red;
}

@media (max-width: 1280px) {
    height: auto;
}
`
const Div = styled.div`
background-color: #e5e5e5;
padding: 10px;
border-radius: 5px;
opacity: 0.9;

@media (max-width: 1280px) {
    padding: 15px;
    margin: 55px;
}
`

const Th = styled.th`
font-weight: 700;
font-size: 18px;
padding-bottom: 10px;

@media (max-width: 980px) {
font-size: 14px;
}
`

const Td = styled.td`
padding: 5px 35px;
text-align: center;
font-size: 12px;

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
margin-bottom: 20px;
font-size: 25px;
`

export { Positions }
