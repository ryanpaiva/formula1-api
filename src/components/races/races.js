import React, { useEffect, useState } from "react";
import { HeaderMenu } from "../header/header";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Races() {
    const [results, setResults] = useState([]);
    const [raceName, setRaceName] = useState([]);

    useEffect(() => {
        fetch("https://ergast.com/api/f1/current/last/results.json")
            .then((response) => response.json())
            .then((data) => {
                const results = data.MRData.RaceTable.Races[0].Results;
                setResults(results);
                setRaceName(data.MRData.RaceTable.Races[0].raceName);
            })
            .catch((error) => {
                console.log("Error fetching data:", error);
            });
    }, []);

    return (
        <>
            <HeaderMenu />
            <DivBody className='position-box'>
                <Div>
                    <h1>Resultados Última Corrida</h1>
                    <h2>{raceName}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Posição</th>
                                <th>Nome</th>
                                <th>Constructor</th>
                                <th>Laps</th>
                                <th>Grid</th>
                                <th>Status</th>
                                <th>Pontos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((result) => (
                                <tr key={result.position}>
                                    <td>{result.position}</td>
                                    <td>
                                        <CustomLink to={`../driver/${result.Driver.driverId}`}>
                                            {result.Driver.givenName} {result.Driver.familyName}
                                        </CustomLink>
                                    </td>
                                    <td>{result.Constructor.name}</td>
                                    <td>{result.laps}</td>
                                    <td>{result.grid}</td>
                                    <td>{result.status}</td>
                                    <td>{result.points}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h6>As atualizações podem demorar até 24h Horas</h6>
                </Div>
            </DivBody>
        </>
    );
}

const DivBody = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column; 
`

const Div = styled.div`
background-color: #e5e5e5;
padding: 30px;
border-radius: 5px;
opacity: 0.9;

h6 {
    margin-top: 10px;
    margin-bottom: 0;
    text-align: center;
    color: red;
}

th {
font-weight: 700;
font-size: 18px;
padding-bottom: 10px;
}

td {
padding: 5px 35px;
text-align: center;
font-size: 12px;
}

h1 {
text-align: center;
font-weight: 700;
margin-bottom: 20px;
font-size: 25px;
}

h2 {
text-align: center;
margin-bottom: 15px;
font-size: 22px;
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

export { Races }
