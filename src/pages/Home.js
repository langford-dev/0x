import React from "react"
import stripIMG from '../assets/strip-img.png'
import stripIMG2 from '../assets/strip-img-2.png'
import carrotHunt from '../assets/carrot-hunt.png'
import MainHeader from "../components/Nav"
import Hero from "../components/Hero"
import About from "../components/About"
import Team from "../components/Team"
import FAQ from "../components/Faq"
import MainFooter from "../components/Footer"
import RoadMap from "../components/Roadmap"
import Rarity from "../components/Rarity"
import GiveBack from "../components/GiveBack"
import DateCountdown from 'react-date-countdown-timer';
import Countdown from "../components/Countdown"

const Home = () => {
    return (
        <div>

            <MainHeader />

            <Hero />

            {/* <Countdown /> */}

            <img src={stripIMG} className='strip-img' alt="oxbuni images" />

            <About />

            <img src={stripIMG2} className='strip-img' alt="oxbuni images" />

            <RoadMap />

            <div className="carrot-hunt-container">
                <img src={carrotHunt} className='w-100' />
            </div>

            <Rarity />

            <GiveBack />

            {/* <div className="about section dark-bg" id="merch">
                <div className="width-constraint flex section-wrapper">
                    <div className="flex-img flex-1"><img src={merchIMG} alt="oxbuni merch" /></div>
                    <div className="flex-text flex-1">
                        <h1>Merch Store</h1>
                        <div className="space-50"></div>
                        <p>A real Fangster can’t go without catching the latest merch drop. One of the highlights on the Fang Gang roadmap is the launch of a premium merch store. <br />
                            <br />

                            From dope crewneck sweaters to fresh dad hats, bomber jackets with patches and embroidered t-shirts. These are just some of the items we want to get out there. Some will showcase recognisable Fang Gang imagery and brands from their world, like Wildfangz and BITE.
                            <br />
                            <br />
                            And other items will have completely new and unique designs so everyone can rock the sickest fits.

                        </p>
                    </div>
                </div >
            </div> */}

            <Team />
            <FAQ />
            <MainFooter />

        </div >
    );
}

export default Home