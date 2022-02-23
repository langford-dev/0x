import React from "react"
import logoIMG from '../assets/logo.png'
import discordIMG from '../assets/discord.svg'
import openseaIMG from '../assets/opensea.svg'
import twitterIMG from '../assets/twitter.svg'
import RarityItem from "../components/RarityItem"
import stripIMG from '../assets/strip-img.png'
import stripIMG2 from '../assets/strip-img-2.png'
import rarityImg from '../assets/rarity-img.webp'
import heroGif from '../assets/OxBuni.gif'

import roadmap1 from '../assets/roadmap-images/roadmap1.png'
import roadmap2 from '../assets/roadmap-images/roadmap2.png'
import roadmap3 from '../assets/roadmap-images/roadmap3.png'
import roadmap4 from '../assets/roadmap-images/roadmap4.png'
import roadmap5 from '../assets/roadmap-images/roadmap5.png'
import roadmap6 from '../assets/roadmap-images/roadmap6.png'
import roadmap7 from '../assets/roadmap-images/roadmap7.png'

import carrotHunt from '../assets/carrot-hunt.png'
import commonImg from '../assets/rarity/common.webp'
import uncommonImg from '../assets/rarity/uncommon.webp'
import rareImg from '../assets/rarity/rare.webp'
import gothicImg from '../assets/rarity/gothic.webp'

import avatar1 from '../assets/1.png'
import avatar2 from '../assets/2.png'
// import avatar3 from '../assets/3.png'
// import avatar4 from '../assets/4.png'
import avatar5 from '../assets/5.png'
import avatar6 from '../assets/6.png'
import avatar7 from '../assets/7.webp'
import avatar8 from '../assets/8.png'
import avatar9 from '../assets/9.png'
import avatar10 from '../assets/10.png'
import avatar11 from '../assets/11.png'

const Home = () => {
    return (
        <div>
            <header className='header fixed-top'>
                <div className="header-wrapper width-constraint">
                    <div className="flex">
                        <img src={logoIMG} className='logo-img' alt="logo" />
                    </div>

                    <nav className='flex-between'>
                        <div className="space-20"></div>
                        <a href="#">0xBUNI</a>
                        <a href="#about">ABOUT</a>
                        <a href="#roadmap">ROADMAP</a>
                        <a href="#rarity">RARITY</a>
                        <a href="#team">TEAM</a>
                    </nav>

                    <div className="header-social-icons flex-between">
                        {/* <div className="space-20"></div> */}
                        <a href='https://discord.gg/9ruqCzxTUS'> <img src={discordIMG} alt="discord" /></a>
                        <div className="space-20"></div>
                        <a href='https://twitter.com/oxbuni'><img src={twitterIMG} alt="twitter" /></a>
                        <div className="space-20"></div>
                        <a href='#'><img src={openseaIMG} alt="opensea" /></a>
                        {/* <div className="space-20"></div> */}
                    </div>
                </div>
            </header>

            <div className="hero">

                <div className="hero-wrapper width-constraint">
                    <div className=' hero-text'>
                        <h1>Welcome to 0x Buni</h1>
                        <p>0x Buni is a collection of 2,000 randomly generated NFTs stored on the ethereum blockchain</p>
                        <div className="flex hero-btns-container">
                            <a target='blank' href="https://discord.gg/9ruqCzxTUS" className="btn">JOIN DISCORD</a>
                            <a target='blank' href="#" className="btn">CHECK OPENSEA</a>
                        </div>
                        <div className="toast">
                            <marquee>Own 3 0x Buni's to qualify for NFT NYC raffle draw</marquee>
                        </div>
                    </div>
                    <img src={heroGif} className='hero-img' alt="" />
                    {/* <video src={heroIMG} controls loop autoPlay></video> */}
                </div>
            </div>

            <img src={stripIMG} className='strip-img' alt="oxbuni images" />

            <div className="about section dark-bg" id="about">
                <div className="width-constraint section-wrapper">
                    <div className="section-text margin-auto text-align-center">
                        <h1>The Path To Carotism 🥕</h1>
                        <br />
                        <br />
                        {/* <h1>Who 0x Buni?</h1> */}
                        <p>
                            {/* The Path To Carotism: */}

                            {/* <br /> */}
                            {/* <br /> */}

                            To know Carotism is to know pain…a fire, scorching every fleck of your furry outer coat.

                            In the beginning  there was nothing…a void…carrotless as far as the eyes could see and the ears could hear.

                            The Elder Buni’s floated, drifting furlessly in the midst of a nebulous medium.

                            The carrots changed everything. They brought a new pallet of feelings both physical and mental. They brought harmony, joy, love  and laughter.

                            <br />
                            <br />

                            Anhysby and his band of Fearless warriors had nothing to strive for, lacking an epicentre of hope.

                            The carrots filled the trench, the carrots were more than a delicious crunchy vegetable. They were the missing piece to a joke in which the Elder buni’s were unaware needed filling.

                            They harnessed this power…they evolved…they bread…..like Buni’s.

                            It is only now that you are hit with the meaning behind your reason for being in this discord.

                            <br />
                            <br />

                            You have been chosen my fren. You have been chosen by the Elder Buni’s
                            <br />
                            <a target='blank' href="https://discord.gg/9ruqCzxTUS" className="mini-btn">!hop in 🐇</a>

                        </p>
                        {/* <div className="space-50"></div>
                        <p> 0x Buni is a community driven project focused on Metaverse onboarding and education. Our goal is to bridge the gap between Web 2.0 and Web 3.0 by introducing an easy entry into the Metaverse world.

                            We wanted to make our NFT accessible to most people at a fair price point of .08 ETH.

                            <br />
                            <br />
                            This gives you an epic pfp and grants you a ticket to Buniverse events both irl and on the metaverse, $Buniverse Token and it’s Utility, unique merch and co-ownership of acquired Metaverse lands.

                            This is our first imprint on the metaverse, roadmap 2.0 will blow your mind. Are you prepared to go on a Metaverse adventure with the crew?</p> */}
                    </div>
                </div>
            </div>

            <img src={stripIMG2} className='strip-img' alt="oxbuni images" />

            <div className="roadmap section" id="roadmap">
                <div className="roadmap-wrapper width-constraint">
                    <h1 className="text-align-center">Roadmap 1.0</h1>
                    {/* <img src={carrot} className='carrot' /> */}
                    <div className="space-50"></div>

                    <div className="roadmap-items-container">
                        <div className="flex-between flex-wrap">
                            <div className="roadmap-item">
                                <img src={roadmap1} alt="roadmap-1" />
                                <p>Metaverse onboarding and education</p>
                            </div>
                            <div className="roadmap-item">
                                <img src={roadmap2} alt="roadmap-1" />
                                <p>NFT NYC Raffle Draw</p>
                            </div>
                            <div className="roadmap-item">
                                <img src={roadmap5} alt="roadmap-1" />
                                <p>Purchase and building on metaverse lands</p>
                            </div>
                        </div>

                        <div className="flex-between flex-wrap">
                            <div className="roadmap-item">
                                <img src={roadmap6} alt="roadmap-1" />
                                <p>Buniverse adventures</p>
                            </div>
                            <div className="roadmap-item">
                                <img src={roadmap3} alt="roadmap-1" />
                                <p>$Buniverse Token (bun) and evolution Utility process begins.</p>
                            </div>
                            <div className="roadmap-item">
                                <img src={roadmap4} alt="roadmap-1" />
                                <p>Buniverse events both irl and metaverse</p>
                            </div>
                        </div>

                        <div className="roadmap-item margin-auto" id="roadmap-7">
                            <img src={roadmap7} alt="roadmap-1" />
                            <p>Exclusive Merch and collectibles</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="carrot-hunt-container">
                <img src={carrotHunt} className='w-100' />
            </div>

            <div className="about section dark-bg" id="rarity">
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
                        {/* <p>Fangsters got that drip. Each Fangster is comprised of head, face, body, fur and background traits. Each reflecting their personalities.
                            <br />
                            <br />

                            When going out at night to throw parties or just hangin' in the back alley, they express themselves through their style. Their traits can be common, uncommon, rare or mythic. Some are doper than others, but they're all fit for a Fangster.
                            <br />
                            <br />
                            Of course every gang has their leaders, so some Fangsters are Special - 1/1 editions, meaning no one’s ever gonna bite their toes.

                            You’ll hear them howl in the streets at night about who’s got the most sauce.

                            Check out your Fangsters rarity on Rarity.Tools
                        </p> */}
                    </div>
                </div >
            </div>

            <div className="space-100"></div>

            <div className="rarity ddark-bg" id="traits">
                <div className="space-100"></div>
                <ul className="width-constraint flex-between section-wrapper">
                    <RarityItem name='Common' qty='1000' img={commonImg} />
                    <RarityItem name='Uncommon' qty='600' img={uncommonImg} />
                    <RarityItem name='Rare' qty='380' img={rareImg} />
                    <RarityItem name='Gothic' qty='20' img={gothicImg} />
                </ul>
            </div>

            <div className="about section dark-bg" id="give-back">
                <div className="width-constraint section-wrapper">
                    <div className="section-text margin-auto text-align-center">
                        <h1>Give back</h1>
                        <div className="space-50"></div>
                        <p>As a gesture of good faith to the NFT community, 0x Buni intends to host a series of charity events, giveaways, and raffle draws for community members, beginning with the NFT NYC raffle.</p>
                        {/* <p> While the Fangsters live a good life in the urban jungle, not all creatures on planet Earth share this fortunate lifestyle. That’s why we committed to give back part of our profits to two NGOs that protect and restore wildlife.</p>
                        <div className="space-30"></div>
                        <p> Sea Shepherd and Re:wild were chosen by community vote to receive a 10ETH donation each via The Giving Block.</p>
                        <div className="space-30"></div>
                        <p> Besides donating we are also exploring the option to extend our partnerships with these NGOs long term.</p> */}
                    </div>
                </div >
            </div >

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

            <div className="team section" id="team">
                <div className="width-constraint section-wrapper">
                    <div className="section-text margin-auto text-align-center">
                        <h1>The Team</h1>
                        <div className="space-50"></div>

                        <ul className="team-container">
                            <li className="team-item">
                                <img className="team-avatar" src={avatar1} />
                                <div className="team-text">
                                    <b>Anhysby </b>
                                    <p>Founder/Project Lead</p>
                                    <a target="blank" href="https://twitter.com/anhysby?s=21"><img src={twitterIMG} alt='twitter logo' className='team-social-img' /></a>
                                </div>
                            </li>
                            <li className="team-item">
                                <img className="team-avatar" src={avatar2} />
                                <div className="team-text">
                                    <b>Ezi </b>
                                    <p>0xBuni artist</p>
                                    <a target="blank" href="https://twitter.com/ezi_art_?s=21"><img src={twitterIMG} alt='twitter logo' className='team-social-img' /></a>
                                </div>
                            </li>
                            <li className="team-item">
                                <img className="team-avatar" src={avatar10} />
                                <div className="team-text">
                                    <b>JohnnyD </b>
                                    <p>Community Manager</p>
                                    <a target="blank" href="https://twitter.com/aliens_general?s=21"><img src={twitterIMG} alt='twitter logo' className='team-social-img' /></a>
                                </div>
                            </li>
                            <li className="team-item">
                                <img className="team-avatar" src={avatar5} />
                                <div className="team-text">
                                    <b>0xZaddy</b>
                                    <p>Discord Manager</p>
                                    <a target="blank" href="https://twitter.com/zaddy_nft"><img src={twitterIMG} alt='twitter logo' className='team-social-img' /></a>
                                </div>
                            </li>
                            <li className="team-item">
                                <img className="team-avatar" src={avatar6} />
                                <div className="team-text">
                                    <b>Favor </b>
                                    <p>Solidity Developer</p>
                                    <a target="blank" href="https://twitter.com/heyonuoha?s=21"><img src={twitterIMG} alt='twitter logo' className='team-social-img' /></a>
                                </div>
                            </li>
                            <li className="team-item">
                                <img className="team-avatar" src={avatar7} />
                                <div className="team-text">
                                    <b>Langford </b>
                                    <p>Developer</p>
                                    <a target="blank" href="https://twitter.com/langford_dev?s=21"><img src={twitterIMG} alt='twitter logo' className='team-social-img' /></a>
                                </div>
                            </li>
                            <li className="team-item">
                                <img className="team-avatar" src={avatar8} />
                                <div className="team-text">
                                    <b>Hyphy </b>
                                    <p>Discord Moderator</p>
                                    <a target="blank" href="https://twitter.com/niftyhyphy?s=21"><img src={twitterIMG} alt='twitter logo' className='team-social-img' /></a>
                                </div>
                            </li>
                            <li className="team-item">
                                <img className="team-avatar" src={avatar9} />
                                <div className="team-text">
                                    <b>Maestro Shifu </b>
                                    <p>Discord Moderator</p>
                                    <a target="blank" href="https://twitter.com/ian_dev_"><img src={twitterIMG} alt='twitter logo' className='team-social-img' /></a>
                                </div>
                            </li>
                            <li className="team-item">
                                <img className="team-avatar" src={avatar11} />
                                <div className="team-text">
                                    <b>Guan</b>
                                    <p>Discord Moderator</p>
                                    {/* <a target="blank" href="https://twitter.com/nironic?s=21"><img src={twitterIMG} alt='twitter logo' className='team-social-img' /></a> */}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* FAQ */}

            {/* anhysby@gmail.com */}

            <div className="section faq">
                <h1 className="text-align-center">FAQ 🐇</h1>
                <div className="space-50"></div>

                <div className="width-constraint">
                    <details open>
                        <summary>What is the total supply?</summary>
                        <p>A Total of 2,000 unique 0x Buni NFTs will be created.</p>
                    </details>

                    <details>
                        <summary>When will 0x Buni launch?</summary>
                        <p>The pre-sale and main sale will be updated shortly 🥕</p>
                    </details>

                    <details>
                        <summary>Why 0x Buni?</summary>
                        <p>0x Buni's are unique creatures with their unique personalitites. Anhysby built the commmunity to promote inclusivity and communal progression. 0x Buni's are a collection of degenerates pushing p at a time.</p>
                        {/* <p>When you join the Buni's, you are securing a life long carrotship with 2,000 buni's. Anhysby created this community based project with the intent of making the biggest group of frens possible. The community comes first, which in turns drives value. Invasions, clothing line, comic books, IRL meet ups, $fren coin, exclusive rights to artwork, and lambos are just a bonus. Our road map is quarterly based, with new and innovative goals and roadmap each quarter term. Come be frens (:</p> */}
                    </details>

                    <details>
                        <summary>Is there a launch roadmap?</summary>
                        <p>Unlike other projects, we don’t want to use prizes and promises as a crutch on why you should mint buni's. The community drives our value, Instead, we will surprise our buni's with prizes, charity events, etc. along the way!</p>
                    </details>

                    <details>
                        <summary>How do you obtain an 0x Buni?</summary>
                        <p>
                            {/* On December 19th, our presale will begin for 0.02 ETH. You will have 24 hours to mint to avoid gas fees, to get on the presale list you must join the discord. On December 20th Public launch will begin for 0.02 ETH. */}
                            More details incoming
                            <br />
                            <br />
                            How to buy:
                            <br />
                            <br />
                            Here are the steps on what you need to do to get your 0x Buni NFT.
                            <br />
                            <br />
                            1. Download the metamask.io extension on your browser
                            <br />
                            2. Purchase Ethereum from various exchanges, such as Coinbase or Binance
                            <br />
                            3. Send Ethereum from this exchange to your MetaMask wallet
                            <br />
                            4. On launch day, open the 0x Buni website and select the number of NFTs you wish to mint
                            <br />
                            5. Click “MINT” button, Metamask will popup asking for connection
                            <br />
                            6. Confirm the transaction and any associated fees
                            <br />
                            7. Once you have made your purchase, your NFTs will appear in your wallet and on OpenSea
                        </p>
                    </details>
                </div>
            </div>

            <footer>
                <div className="width-constraint flex-between">
                    <p>0x Buni &copy;2022</p>

                    <div className="header-social-icons flex-between">
                        <div className="space-20"></div>
                        <a href="https://discord.gg/9ruqCzxTUS"><img src={discordIMG} alt="discord" /></a>
                        <div className="space-20"></div>
                        <a href='https://twitter.com/oxbuni'><img src={twitterIMG} alt="twitter" /></a>
                        <div className="space-20"></div>
                        <a href='https://twitter.com/oxbuni'><img src={openseaIMG} alt="opensea" /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home