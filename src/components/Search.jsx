function Search({ setSearchMonster }) {

    function handleInput(event) {
        setSearchMonster(event.target.value)
    }

    return (
        <>
            <input onChange={handleInput} type="text" placeholder="search" />
        </>
    )

}

export default Search