import React from 'react';
import { Box, Card, CardMedia, Typography, Button } from "@mui/material";
import ProgressBars from '../progressBar/progressBar';
import { motion } from "framer-motion"




function DetailCard({ movieData }) {
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
        <motion.div layout>
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
                        fontSize="30px"
                        component="div"
                        color="#D4D7DD"
                        padding="10px 0"
                        fontWeight='700'
                        marginBottom='0'
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
                        <ProgressBars imdbRating={imdbRating} />
                    </Typography>

                    <Card sx={{
                        backgroundColor: 'transparent',
                        color: '#fff',
                        boxShadow: 'none',
                        justifyContent: 'space-between',
                        marginRight: '0 0 0 18px'
                    }}
                        className='paragraph-space'>
                        <p><span>Year:</span><span>{Year}</span></p>
                        <p><span>Running Time:</span><span>{Runtime}</span></p>
                        <p><span>Directed By:</span><span>{Director}</span></p>
                        <p><span>Language:</span><span>{Language}</span></p>

                    </Card>

                    <Card sx={{ backgroundColor: 'transparent', color: '#fff', boxShadow: 'none' }}>
                        <Typography sx={{ fontSize: '14px', color: '#D4D7DD' }}>
                            {Plot}
                        </Typography>
                    </Card>


                    <Button sx={{
                        marginTop: '20px',
                        marginRight: '10px',
                        backgroundColor: '#00E0FF',
                        color: '#000',
                        fontWeight: '600'
                    }}
                        variant="contained">
                        Play Movie
                    </Button>
                    <Button sx={{
                        marginTop: '20px',
                        outlineColor: '#00E0FF',
                        color: '#fff'
                    }}
                        variant="outlined"
                    >Watch Trailer
                    </Button>

                </Card>

            </Box>
            </motion.div>
    )
}

export default DetailCard
