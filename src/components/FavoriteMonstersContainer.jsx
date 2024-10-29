import { useState } from 'react'
import MonsterCard from './MonsterCard'

function FavoriteMonstersContainer() {
    
    const [monsters, setMonsters] = useState( [ ] )

    const mappedMonsters = monsters.map( monster =>  <MonsterCard key={monster.id} monster={monster} />)

    return (
        <div>

        <h2>My Favorites</h2>

            <div className="monster-container">
                
                {/* if the monsters array has 0 length show an h3 instead */}
                { monsters.length ? mappedMonsters : <h3>No favorites yet</h3> }

            </div>
 
        </div>
    )

}

export default FavoriteMonstersContainer