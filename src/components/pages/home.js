import { Positions } from "../positions/positions";
import { HeaderMenu } from "../header/header";
import { Footer } from "../footer/footer";

const Home = () => {
    return (
        <>
            <HeaderMenu />
            <Positions />
            <Footer />
        </>
    )
}



export { Home }