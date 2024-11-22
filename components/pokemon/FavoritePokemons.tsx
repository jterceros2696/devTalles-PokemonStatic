import { Grid, Card, Row, Text } from '@nextui-org/react';
import { FavoriteCardPokemons } from './FavoriteCardPokemon';
import { FC } from 'react';



interface Props{
    pokemons:number[]
}

export const FavoritePokemons:FC<Props> = ({pokemons}) => {

  

    return (
        <Grid.Container gap={2} direction="row" justify="flex-start">
            {
                pokemons.map(id => (
                    <FavoriteCardPokemons key={id} pokemonId={id}/>
                ))
            }
        </Grid.Container>
    )
};
