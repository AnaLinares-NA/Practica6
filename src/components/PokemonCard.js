import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const PokemonCard = ({ item }) => {
    return (
        <Card sx={{ maxWidth: 500 }}>
            <Box>
                <img src={item.sprites.front_default} alt={item.name} />
            </Box>
            <CardActionArea>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Nombre: {item.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Peso: {item.weight}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Tipo: {item.types[0].type.name}
                        </Typography>
                    </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={`/pokemon/${item.id}`} style={{ textDecoration: 'none' }}>
                <Button size="small" color="primary">
                    Detalles
                </Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default PokemonCard;
