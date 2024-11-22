import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { NotFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";
import { Card, Grid } from "@nextui-org/react";

import { FavoritePokemons } from '../../components/pokemon/index'


const FavoritesPage = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons)
    }, []);


    return (
        <Layout title='Pokemons Favoritos'>
            {
                favoritePokemons.length === 0
                    ? (<NotFavorites />)
                    : (
                        <FavoritePokemons pokemons={favoritePokemons} />
                    )
            }


        </Layout>
    )
}


export default FavoritesPage;