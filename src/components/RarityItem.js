const RarityItem = ({ img, name, qty }) => {
    return (
        <div className="rarity-item">
            <img src={img} alt="oxbuni trait" />
            <div className="space-20"></div>
            <div className="flex-between">
                <p>Name:</p>
                <h2 className="name">{name}</h2>
            </div>
            <div className="space-10"></div>
            <div className="flex-between">
                <p>Qty:</p>
                <h2>{qty}</h2>
            </div>
        </div>
    )
}

export default RarityItem