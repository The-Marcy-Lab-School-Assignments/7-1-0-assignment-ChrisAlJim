import PokemonCard from './PokemonCard';
import PokemonContext from '../context/PokemonContext';
import { useContext, useEffect } from 'react';

// TODO: import the PokemonContext and useContext


const PokemonCollection = () => {
    const allPokemon = useContext(PokemonContext).allPokemon

    // TODO: Replace this to get the pokemon from PokemonContext

    useEffect(() => {
        console.log('TEST: ', allPokemon)
    }, [allPokemon])

    return (
        <div className="ui six cards">
            {allPokemon?.map(pokemon => <PokemonCard key={pokemon.id} pokemon = {pokemon} />)}
        </div>
    )
}

export default PokemonCollection