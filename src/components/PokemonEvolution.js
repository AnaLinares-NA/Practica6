import React from 'react';
import { Card, CardContent, Typography, CardMedia, Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const PokemonEvolution = ({ evolution }) => {
    return (
        <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
            <CardMedia
                component="img"
                height="140"
                image={evolution.sprites.front_default}
                alt={evolution.name}
            />
            <CardContent>
                <Typography variant="h6">{evolution.name}</Typography>
            </CardContent>
            <CardActions>
                <Link to={`/pokemon/${evolution.id}`} style={{ textDecoration: 'none' }}>
                    <Button size="small" color="primary">
                        Detalles
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default PokemonEvolution;
