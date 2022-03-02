import React from "react"
import twitterIMG from '../assets/twitter.svg'
import avatar1 from '../assets/1.png'
import avatar2 from '../assets/2.png'
import avatar5 from '../assets/5.png'
import avatar6 from '../assets/6.png'
import avatar7 from '../assets/7.webp'
import avatar8 from '../assets/8.png'
import avatar9 from '../assets/9.png'
import avatar10 from '../assets/10.png'
import avatar11 from '../assets/11.png'
import avatar12 from '../assets/12.jpeg'

const Team = () => {
    return <div className="team section" id="team">
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
                            <a target="blank" href="https://twitter.com/anhysby"><img src={twitterIMG} alt='twitter logo' className='team-social-img' /></a>
                        </div>
                    </li>
                    <li className="team-item">
                        <img className="team-avatar" src={avatar2} />
                        <div className="team-text">
                            <b>Ezi </b>
                            <p>0xBuni artist</p>
                            <a target="blank" href="https://twitter.com/ezi_art_"><img src={twitterIMG} alt='twitter logo' className='team-social-img' /></a>
                        </div>
                    </li>
                    <li className="team-item">
                        <img className="team-avatar" src={avatar10} />
                        <div className="team-text">
                            <b>JohnnyD </b>
                            <p>Community Manager</p>
                            <a target="blank" href="https://twitter.com/aliens_general"><img src={twitterIMG} alt='twitter logo' className='team-social-img' /></a>
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
                            <a target="blank" href="https://twitter.com/heyonuoha"><img src={twitterIMG} alt='twitter logo' className='team-social-img' /></a>
                        </div>
                    </li>
                    <li className="team-item">
                        <img className="team-avatar" src={avatar7} />
                        <div className="team-text">
                            <b>Langford </b>
                            <p>Developer</p>
                            <a target="blank" href="https://twitter.com/langford_dev"><img src={twitterIMG} alt='twitter logo' className='team-social-img' /></a>
                        </div>
                    </li>
                    <li className="team-item">
                        <img className="team-avatar" src={avatar8} />
                        <div className="team-text">
                            <b>Hyphy </b>
                            <p>Discord Moderator</p>
                            <a target="blank" href="https://twitter.com/niftyhyphy"><img src={twitterIMG} alt='twitter logo' className='team-social-img' /></a>
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
                            {/* <a target="blank" href="https://twitter.com/nironic"><img src={twitterIMG} alt='twitter logo' className='team-social-img' /></a> */}
                        </div>
                    </li>
                    <li className="team-item">
                        <img className="team-avatar" src={avatar12} />
                        <div className="team-text">
                            <b>Bamf</b>
                            <p>Discord Moderator</p>
                            <a target="blank" href="https://twitter.com/0xBamf"><img src={twitterIMG} alt='twitter logo' className='team-social-img' /></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}

export default Team