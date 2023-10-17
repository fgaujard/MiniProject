function Card (element, {cart, setCart}) {

    function addToCart() {
        setCart(cart + 1);
    }

    console.log(element)

    return (
        <div class="card" key={element.id}>
            <h2 id="cardTitle">{element.title}</h2>
            <img id="cardImg" src={element.image}></img>
            <p id="desc">{element.description}</p>
            <div class="cardFooter">
                <p id="price">{element.price} 💎 Rubis</p>
                <p id="category">Type : {element.category}</p>
            </div>
            <button id="addtocart" onClick={addToCart}>Ajouter au panier</button>
        </div>
    )
}

export default Card