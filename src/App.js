import logo from './logo.svg';
import {useState} from "react";
import './App.css';
import Menu from "./components/Menu";
import Game from "./components/Game";
import Shop from "./components/Shop";

function App() {

    const [getGameState, setGameState] = useState(1)
    const [getPoints, setPoints] = useState(1500)
    const [getClickPoints, setClickPoints] = useState(1)
    const [getCookieImage, setCookieImage] = useState("https://cdn.picpng.com/cookie/cookie-picture-26897.png")
    const [getBg, setBg] = useState("white") 
    const [getCookieSpin, setCookieSpin] = useState(false)


        function updatePoints() {
            setPoints(getPoints + getClickPoints)
        }

    function buyUpgrade(num) {
        if (num === 1) {
            if (getPoints >= 200) {
                setPoints(getPoints - 200)
                setClickPoints(2)
            }
        }
        if (num === 2) {
            if (getPoints >= 500) {
                setPoints(getPoints - 500)
                setClickPoints(5)
            }
        }
        if (num === 3) {
            if (getPoints >= 1000) {
                setPoints(getPoints - 1000)
                setClickPoints(10)
            }
        }
        if (num === 4) {
            if (getPoints >= 400) {
                setPoints(getPoints - 400)
                setCookieImage("https://upload.wikimedia.org/wikipedia/commons/7/70/Cookie.png")
            }
        }
        if (num === 5) {
            if (getPoints >= 300) {
                setPoints(getPoints - 300)
                setBg("pink")
            }
        }
        if (num === 6) {
            if (getPoints >= 600) {
                setPoints(getPoints - 600)
                setCookieSpin(true)
            }
        }
        setGameState(2)
    }

    return (
        <div className="App" style={{backgroundColor: getBg}}>
            {getGameState === 1 && <Menu changeState={setGameState}/>}
            {getGameState === 2 && <Game changeState={setGameState}
                                         points={getPoints}
                                         addPoints={updatePoints}
                                         cookie={getCookieImage}
                                         cookieSpin={getCookieSpin}
                                            />}
            {getGameState === 3 && <Shop changeState={setGameState}
                                         points={getPoints}
                                         upgrade={buyUpgrade}
                                         />}
        </div>
    );
}

export default App;
