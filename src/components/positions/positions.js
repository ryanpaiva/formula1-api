import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './positions.css'

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
        <div className='position-box'>
            <h1>Classificação de Pilotos:</h1>
            <table>
                <thead>
                    <tr>
                        <th>Posição</th>
                        <th>Piloto</th>
                        <th>Scuderia</th>
                        <th>Pontos</th>
                    </tr>
                </thead>
                <tbody>
                    {driverStandings.map((driver) => (
                        <tr key={driver.Driver.driverId}>
                            <td>{driver.position}</td>
                            <td>
                                <Link to={`./driver/${driver.Driver.driverId}`}>
                                    {driver.Driver.givenName} {driver.Driver.familyName}
                                </Link>
                            </td>
                            <td>{driver.Constructors[0].name}</td>
                            <td>{driver.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export { Positions }
