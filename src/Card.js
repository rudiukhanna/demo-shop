
function Card({id, title, price, thumbnail}) {

    return (
        <div className="card" style={{width:'14rem'}}>
            <img src={thumbnail} className="card-img-top" alt={title}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">$ {price}</p>
        </div>
        </div>
    );
}

export default Card;


