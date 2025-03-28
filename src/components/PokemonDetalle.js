import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const PokemonDetalle = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const pokemonData = [
            {"id": 1,"name": "bulbasaur","description": "Loves to eat","height": 7, "weight": 69, "types": [{"type": {"name": "grass"}}, {"type": {"name": "poison"}}],"abilities": [{"ability": {"name": "overgrow"}},{"ability": {"name": "chlorophyll"}}],"sprites": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},"evolutions": [{"id": 2, "name": "ivysaur", "sprites": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"}}, {"id": 3, "name": "venusaur", "sprites": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"}}]}
            //Aqui irian mas pokemones si hubiera un json tocho
        ];

        const selectedPokemon = pokemonData.find(p => p.id === parseInt(id));
        setPokemon(selectedPokemon);
    }, [id]);

    if (!pokemon) {
        return <div><h1>Cargando wuuu...</h1></div>;
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <Card sx={{ Width: 400 }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={pokemon.sprites.front_default}
                    alt={pokemon.name}
                />
                <CardContent>
                    <Typography variant="h4">{pokemon.name}</Typography>
                    <Typography variant="body1">Descripción: {pokemon.description}</Typography>
                    <Typography variant="body1">Altura: {pokemon.height}</Typography>
                    <Typography variant="body1">Peso: {pokemon.weight}</Typography>

                    <Typography variant="body1">Tipos:</Typography>
                    {pokemon.types.map((type, index) => (
                        <Typography key={index} variant="body2" sx={{ color: 'text.secondary' }}>
                            {type.type.name}
                        </Typography>
                    ))}

                    <Typography variant="body1">Habilidades:</Typography>
                    {pokemon.abilities.map((ability, index) => (
                        <Typography key={index} variant="body2" sx={{ color: 'text.secondary' }}>
                            {ability.ability.name}
                        </Typography>
                    ))}

                    <Typography variant="body1">Evoluciones:</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: '10px' }}>
                        {pokemon.evolutions.map((evolution, index) => (
                            <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 4 }}>
                                <CardMedia
                                    component="img"
                                    height="80"
                                    image={evolution.sprites.front_default}
                                    alt={evolution.name}
                                    sx={{ marginBottom: 1 }}
                                />
                                <Typography variant="body2">{evolution.name}</Typography>
                                <Link to={`/pokemon/${evolution.id}`} style={{ textDecoration: 'none' }}>
                                    <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
                                        Ver detalles
                                    </Typography>
                                </Link>
                            </Box>
                        ))}
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default PokemonDetalle;
