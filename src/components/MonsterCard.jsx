function MonsterCard({ monster }) {

    return (
        <div className="monster-card">

            <h3>{monster.name}</h3>

            <img src={monster.image} alt={`${monster.name} in black and white`} />

            <button>Favorite</button>

        </div>
    )

}

export default MonsterCard