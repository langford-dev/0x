import React from "react"
import rarityImg from '../assets/rarity-img.webp'
import commonImg from '../assets/rarity/common.webp'
import uncommonImg from '../assets/rarity/uncommon.webp'
import rareImg from '../assets/rarity/rare.webp'
import gothicImg from '../assets/rarity/gothic.png'
import RarityItem from './RarityItem'

const Rarity = () => {
    return <div>
        <div className="rarity section dark-bg" id="rarity">
            <div className="width-constraint flex section-wrapper">
                <div className="flex-img flex-1"><img src={rarityImg} alt="oxbuni rarity image" /></div>
                <div className="flex-text flex-1">
                    <h1>Rarity</h1>
                    <div className="space-50"></div>
                    <p>
                        "Why is the rabbit unafraid? Because he's smatter than the panther"  - Charles Morse, 'The Edge'
                        <br />
                        <br />
                        Buni's are fearless. Each buni is made up of Head, Face, Body, Fur, and Background traits, all of which reflect their personalities.
                        <br />
                        <br />
                        Buni's take pride in their distinct style, which is reserved yet unafraid. Characteristics can be classified as Common, Uncommon, Rare, or Gothic. Some are cuddlier and braver than others. However, they are all proud of their Buniverse membership pass.
                    </p>
                </div>
            </div >
        </div>

        <div className="space-100" />

        <div className="rarity ddark-bg" id="traits">
            <div className="space-100"></div>
            <ul className="width-constraint flex-between section-wrapper">
                <RarityItem name='Common' qty='1000' img={commonImg} />
                <RarityItem name='Uncommon' qty='600' img={uncommonImg} />
                <RarityItem name='Rare' qty='380' img={rareImg} />
                <RarityItem name='Gothic' qty='20' img={gothicImg} />
            </ul>
        </div>
    </div>
}

export default Rarity