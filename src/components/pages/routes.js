import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DriverDetails } from '../driverDetails/driverDetails'
import { Home } from './home.js'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/driver/:driverId' element={<DriverDetails />} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRouter }
