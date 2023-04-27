import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DriverDetails() {
    const [driver, setDriver] = useState(null);
    const { driverId } = useParams();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(`https://ergast.com/api/f1/current/drivers/${driverId}/driverStandings.json`);
        const data = await response.json();
        setDriver(data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]);
    };

    if (!driver) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{driver.Driver.givenName} {driver.Driver.familyName}</h1>
            <table>
                <thead>
                    <tr>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Posição:</td>
                        <td>{driver.position}</td>
                    </tr>
                    <tr>
                        <td>Equipe:</td>
                        <td>{driver.Constructors[0].name}</td>
                    </tr>
                    <tr>
                        <td>Pontos:</td>
                        <td>{driver.points}</td>
                    </tr>
                    <tr>
                        <td>Número:</td>
                        <td>{driver.Driver.permanentNumber}</td>
                    </tr>
                    <tr>
                        <td>Nacionalidade:</td>
                        <td>{driver.Driver.nationality}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export { DriverDetails };
