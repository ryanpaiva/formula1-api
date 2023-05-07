import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DriverDetails } from '../driverDetails/driverDetails'
import { Home } from './home.js'
import { Races } from '../races/races'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/driver/:driverId' element={<DriverDetails />} />
                <Route path='/races' element={<Races />} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRouter }
