import React from 'react';
import { Box, Card, CardMedia, Typography, Button } from "@mui/material";



function DetailCard({movieData}) {
    const
        { Title,
            Poster,
            imdbRating,
            Year,
            Runtime,
            Director,
            Language,
            Plot 
        } = movieData;

    return (
        <Box
            display="flex"
            width="960px"
            backgroundColor="#394B61"
            borderRadius="11px"
            margin="27px 0"
        >

            <Card
                sx={{ width: 392, height: 'auto', borderRadius: 0 }}>

                <CardMedia
                    component="img"
                    alt={Title}
                    image={Poster}
                />
            </Card>


            <Card sx={{
                backgroundColor: 'transparent',
                padding: '35px 0 0 30px',
                width: '100%'
            }}>

                <Typography
                    gutterBottom
                    fontSize="30"
                    component="div"
                    color="#D4D7DD"
                    padding="10px 0"
                >
                    {Title}
                </Typography>
                <Typography
                    gutterBottom
                    fontSize="30"
                    component="div"
                    color="#D4D7DD"
                    padding="10px 0"
                >
                    {imdbRating}
                </Typography>

                <Card sx={{ backgroundColor: 'transparent' }}>
                    <p><span>Year:</span><span>{Year}</span></p>
                    <p><span>Running Time:</span><span>{Runtime}</span></p>
                    <p><span>Directed By:</span><span>{Director}</span></p>
                    <p><span>Language:</span><span>{Language}</span></p>

                </Card>

                <Card>
                    <Typography>
                        {Plot}
                    </Typography>
                </Card>


                <Button sx={{ padding: "0" }}>Play Movie</Button>
                <Button>Watch Trailer</Button>

            </Card>

        </Box>
    )
}

export default DetailCard
