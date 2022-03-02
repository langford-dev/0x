import React from "react"
import { Link, useNavigate } from 'react-router-dom'
import logoIMG from '../assets/logo.png'
import discordIMG from '../assets/discord.svg'
import openseaIMG from '../assets/opensea.svg'
import twitterIMG from '../assets/twitter.svg'
import SocialMediaIcons from "./SocialMediaIcons"

const MainHeader = () => {
    const navigate = useNavigate()

    const exitMint = () => {
        const shouldExit = window.confirm('Exit mint?')
        if (!shouldExit) return
        navigate('/')
    }

    return (
        <header className='header fixed-top'>
            <div className="header-wrapper width-constraint">
                <Link to='/'> <img src={logoIMG} className='logo-img' alt="logo" />  </Link>

                <nav className='flex-between'>
                    <a href="/#">0xBUNI</a>
                    <a href="#about">ABOUT</a>
                    <a href="#roadmap">ROADMAP</a>
                    <a href="#rarity">RARITY</a>
                    <a href="#team">TEAM</a>
                </nav>

                <div className="header-social-icons flex-between">
                    {/* <SocialMediaIcons /> */}

                    {
                        window.location.pathname === '/mint' ?

                            <div className="btn connect-wallet-btn exit-min-btn" onClick={exitMint}>Exit mint</div>

                            :
                            <Link to='/mint'>
                                <div className="btn connect-wallet-btn">Mint buni's</div>
                            </Link>

                    }

                </div>
            </div>
        </header>
    )
}

export default MainHeader