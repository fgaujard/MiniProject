//{cart}

function Navbar ({cart}) {
    return (
        <div class="navbar">  
            <h1>Hyrule Shop</h1>
            <ul>
                <li>Home</li>
                <li>Panier({cart})</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar;