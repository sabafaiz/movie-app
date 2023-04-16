import React from 'react';
import { Box, Card, CardMedia, Typography, IconButton } from "@mui/material"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
// import DetailCard from '../detailsCard/DetailCard';




function MovieCard({ movieData }) {
    
    const { Title, Poster } = movieData;

    return (
        <Box sx={{ p: 2 }}>
            <Card
                sx={{
                    width: 178,
                    borderRadius: '11px',
                    background: "#394B61",
                    height: 278,
                    p: 1.5
                }}>
                <CardMedia
                    component="img"
                    alt={Title}
                    height="188"
                    sx={{ borderRadius: "6" }}
                    image={Poster}
                />

                <Typography
                    gutterBottom
                    fontSize="15"
                    component="div"
                    color="#D4D7DD"
                    padding="10px 0"
                >
                    {Title}
                </Typography>

                <IconButton sx={{ padding: "0" }}><PlayCircleOutlineIcon sx={{ color: "#fff" }} /></IconButton>
                <IconButton><ControlPointIcon sx={{ color: "#fff" }} /></IconButton>

            </Card>

            {/* <DetailCard /> */}
        </Box>
    )
}

export default MovieCard
