

function Card({id, image, name , info, price, removeTour}){
    return(
        <div className="card">
            <img src={image} className="image"></img>
            <div>
                <div>
                    <h4>{name}</h4>
                    <h4>{price}</h4>
                </div>
                <div>
                    <p>{info}</p>
                </div>
            </div>
            <button onClick={() => removeTour(id)}>Not Interested</button>
        </div>
    )
}

export default Card;