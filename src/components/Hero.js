import React from "react"
import heroGif from '../assets/OxBuni.gif'
import Countdown from "./Countdown"

const Hero = () => {
    return <div className="hero">
        <div className="hero-wrapper width-constraint">
            <div className=' hero-text'>
                <h1>Welcome to 0x Buni</h1>
                <p>0x Buni is a collection of 2,000 randomly generated NFTs stored on the ethereum blockchain</p>
                <div className="flex hero-btns-container">
                    <a target='blank' href="https://discord.gg/9ruqCzxTUS" className="btn">JOIN DISCORD</a>
                    <a target='blank' href="#" className="btn">CHECK OPENSEA</a>
                </div>
                <div className="toast">
                    <marquee behavior="scroll" direction="right" scrollamount="20">Own 3 0x Buni's to qualify for NFT NYC raffle draw </marquee>
                </div>
                <Countdown />
            </div>
            <img src={heroGif} className='hero-img' alt="" />
        </div>
    </div>
}

export default Hero