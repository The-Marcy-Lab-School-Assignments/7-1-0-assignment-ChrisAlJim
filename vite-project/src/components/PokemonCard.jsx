// TODO: This component should render a single pokemon's stats and image.
import { useState } from "react";

const PokemonCard = ({ pokemon}) => {

    const [isFront, setIsFront] = useState(true)

    const handleImageClick = () => {
        setIsFront(prevState => !prevState);
      };

    return (
        <div className="ui card">
            <div>
                <div className="image">
                    <img alt={pokemon.name} src={isFront ? pokemon.front : pokemon.back} onClick={handleImageClick}/>
                </div>
                <div className="content">
                    <div className="header">{pokemon.name}</div>
                </div>
                <div className="extra content">
                    <span>
                        <i className="icon heartbeat red" />
                        {pokemon.hp}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard