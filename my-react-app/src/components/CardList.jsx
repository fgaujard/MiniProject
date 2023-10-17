import data from '/src/public/data/data.json'
import Card from '/src/components/Card.jsx'
import { useState } from 'react'


function CardList ({ cart, setCart }) {

    const [filterType , setFilterType] = useState("");
    console.log(filterType);

    return (
        <>
            <div id="type-selector">
                <div>
                    <label id="type-title">Choisis un type d'effet :</label><br/>
                    <select name="type" id="type-select" onChange={e => setFilterType(e.target.value)}>
                        <option value="">--Please choose an option--</option>
                        <option value="Normal ❤️">Normal ❤️</option>
                        <option value="Volt ⚡️">Volt ⚡️</option>
                        <option value="GlaGla 🧊">GlaGla 🧊</option>
                        <option value="Piment 🌶️">Piment 🌶️</option>
                        <option value="Max ❤️‍🔥">Max ❤️‍🔥</option>
                    </select>
                </div>
                <div>
                    <label id="type-title">Choisis un type d'ingrédients :</label><br/>
                    <select name="type" id="type-select">
                        <option value="">--Please choose an option--</option>
                        <option value="Champignon">Champignon 🍄</option>
                        <option value="Poisson">Poisson 🐠</option>
                        <option value="Insecte">Insecte 🦋</option>
                    </select>
                </div>
            </div>
            {filterType ? data.filter((data => data.category === filterType)).map((element) => Card(element, { cart, setCart })) :
                data.map((element) => Card(element, { cart, setCart }))}
        </>
    )
}

export default CardList