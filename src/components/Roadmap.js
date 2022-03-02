import React from "react"
import roadmap1 from '../assets/roadmap-images/roadmap1.png'
import roadmap2 from '../assets/roadmap-images/roadmap2.png'
import roadmap3 from '../assets/roadmap-images/roadmap3.png'
import roadmap4 from '../assets/roadmap-images/roadmap4.png'
import roadmap5 from '../assets/roadmap-images/roadmap5.png'
import roadmap6 from '../assets/roadmap-images/roadmap6.png'
import roadmap7 from '../assets/roadmap-images/roadmap7.png'

const RoadMap = () => {
    return <div className="roadmap section" id="roadmap">
        <div className="roadmap-wrapper width-constraint">
            <h1 className="text-align-center">Roadmap 1.0</h1>
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
}

export default RoadMap