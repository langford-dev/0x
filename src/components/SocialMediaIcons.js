import React from "react";
import discordIMG from '../assets/discord.svg'
import openseaIMG from '../assets/opensea.svg'
import twitterIMG from '../assets/twitter.svg'

const SocialMediaIcons = () => {
    return <div className="header-social-icons flex-between">
        <div className="space-20"></div>
        <a target='blank' href="https://discord.gg/9ruqCzxTUS"><img src={discordIMG} alt="discord" /></a>
        <div className="space-20"></div>
        <a target='blank' href='https://twitter.com/oxbuni'><img src={twitterIMG} alt="twitter" /></a>
        <div className="space-20"></div>
        <a target='blank' href='https://twitter.com/oxbuni'><img src={openseaIMG} alt="opensea" /></a>
    </div>
}

export default SocialMediaIcons