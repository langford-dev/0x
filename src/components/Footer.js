import React from "react"
import SocialMediaIcons from "./SocialMediaIcons"

const MainFooter = () => {
    return <footer>
        <div className="width-constraint flex-between">
            <p>0x Buni &copy;2022</p>
            <SocialMediaIcons />
        </div>
    </footer>
}

export default MainFooter