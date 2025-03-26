import React from 'react';
import { Grid } from '@mui/material';
import PokemonCard from './PokemonCard';

const Pokedex = ({ data }) => {
    return (
        <Grid container spacing={3} justifyContent="center">
            {data.items.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <PokemonCard item={item} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Pokedex;
