import { useState } from 'react'
import MonsterCard from './MonsterCard'
import { monstersArray } from '../data/monsters-array'

function MonstersContainer() {
    
    const [monsters, setMonsters] = useState( monstersArray )

    const mappedMonsters = monsters.map( monster =>  <MonsterCard key={monster.id} monster={monster} />)

    return (
        <div>

        <h2>All Monsters</h2>

            <div className="monster-container">
                
                { mappedMonsters }

            </div>
 
        </div>
    )

}

export default MonstersContainer