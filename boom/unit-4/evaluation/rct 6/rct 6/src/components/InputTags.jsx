import Card from './Card';
const InputTags=()=>{
    return(
        <>
        <form>
            <input data-testid="input-name" type="text"/>
            <input data-testid="input-height" type="text"/>
            <input data-testid="input-weight" type="text"/>
            <input data-testid="input-power" type="text"/> 
            <button data-testid="add-button">Add SuperHero</button>
        </form>
        <button data-testid="most-powerfull">Most Powerful Superhero</button>
        <button data-testid="all-superheroes">Show All</button>
        <Card/>
        </>
    )
}

export default InputTags;
