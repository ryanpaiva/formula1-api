import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

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
        <DivBody>
            <Div>
                <DivName>
                    <h1>{driver.Driver.givenName} {driver.Driver.familyName}</h1>
                </DivName>
                <ButtonName>
                    <a target='_blank' href={driver.Driver.url}>Saiba mais sobre {driver.Driver.givenName} {driver.Driver.familyName}
                    </a>
                </ButtonName>
                <Table>
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
                        <tr>
                            <td>Vitórias na temporada:</td>
                            <td>{driver.wins}</td>
                        </tr>
                    </tbody>
                </Table>
            </Div>
            <ButtonHome>
                <CustomLink to='/'>Voltar ao menu</CustomLink>
            </ButtonHome>
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
`

const Div = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
background-color: #e5e5e5;
padding: 25px;
border-radius: 5px;
opacity: 0.9;
`

const DivName = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const ButtonName = styled.button`
    padding: 10px;
    margin: 20px 0;
    border-radius: 15px;
    border: 1px solid #000;
    transition: 0.3s ease-in;

    &:hover{
    background-color: #000;
}

&:hover a{
    background-size: 100% 2px;
    background-position: 0% 100%;
    color: #fff;
}

a{
    color: #000;
    background-image: linear-gradient(to right, red, red);
    background-repeat: no-repeat;
    background-size: 0% 2px;
    background-position: 0% 100%;
    transition: background-size 0.3s ease-in-out;
    }
`

const Table = styled.table`
td{
    padding: 10px 20px;
}
`

const CustomLink = styled(Link)`
color: #fff;
background-image: linear-gradient(to right, red, red);
background-repeat: no-repeat;
background-size: 0% 2px;
background-position: 0% 100%;
transition: background-size 0.3s ease-in-out;

`;

const ButtonHome = styled.button`
margin-top: 30px;
width: 150px;
height: 35px;
border-radius: 15px;
background-color: #000;
border: 1px solid #fff;
transition: 0.3s ease-in-out;

&:hover{
    background-color: #e5e5e5;
}

&:hover ${CustomLink}{
    background-size: 100% 2px;
    background-position: 0% 100%;
    color: #000;
}
`;

export { DriverDetails };
