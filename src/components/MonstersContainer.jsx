import { useState } from 'react'
import MonsterCard from './MonsterCard'
import { monstersArray } from '../data/monsters-array'
import Search from './Search'
import Stuff from './Stuff'

function MonstersContainer({ setFavMonsters }) {
    
    const [monsters, setMonsters] = useState( monstersArray )
    const [searchMonster, setSearchMonster] = useState("")

    const filteredMonsters = monsters.filter(eachMonster => eachMonster.name.toUpperCase().includes(searchMonster.toUpperCase()))

    const mappedMonsters = filteredMonsters.map( monster =>  <MonsterCard key={monster.id} monster={monster} setFavMonsters={setFavMonsters} />)

    return (
        <div>

        <h2>All Monsters</h2>

            <p>Searching for: {searchMonster}</p>

            <Search setSearchMonster={setSearchMonster} />

            <div className="monster-container">
                
                { mappedMonsters }

            </div>
 
        </div>
    )

}

export default MonstersContainer