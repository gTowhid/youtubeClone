import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import Videos from './Videos';
import fetchFromAPI from "../utlis/fetchFromAPI";

export default function SearchFeed(){
    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))
    }, [searchTerm]);


    return (
        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: '2' }}>
            <Typography variant="h4" fontWeight="bold" marginBottom={2} sx={{color: 'white'}}>
                Search Results for: <span style={{color: '#f31503' }}>{searchTerm}</span> videos
            </Typography>

            <Videos videos={videos} />
        </Box>
    );
}