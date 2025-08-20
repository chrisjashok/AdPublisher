import React, { useState, useRef, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../components/index.css'; // Assuming you have styles for the slider

const videos = [
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/movie.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
];

const CENTER_WIDTH = '90vw';
const CENTER_HEIGHT = '40vw';
const SIDE_WIDTH = '40vw';
const SIDE_HEIGHT = '30vh';

// const OVERLAP = SIDE_WIDTH / 3; // One third overlap

function Slider() {
    const [index, setIndex] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        startAutoSlide();
        return () => clearInterval(intervalRef.current);
    }, [index]);

    const startAutoSlide = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setIndex((prev) => (prev + 1) % videos.length);
        }, 4000);
    };

    const handleDotClick = (i) => setIndex(i);
    const handlePrev = () => setIndex((prev) => (prev - 1 + videos.length) % videos.length);
    const handleNext = () => setIndex((prev) => (prev + 1) % videos.length);

    // Indices for left, center, right
    const getDisplayIndices = () => {
        const left = (index - 1 + videos.length) % videos.length;
        const right = (index + 1) % videos.length;
        return [left, index, right];
    };

    const displayIndices = getDisplayIndices();

    // For mapping: assign className and video props
    const videoPositions = ['left', 'center', 'right'];

    return (
        <Box className="slider_root">
            {/* Video windows */}
            <Box className="slider-window-container">
                {displayIndices.map((videoIdx, i) => (
                    <Box
                        key={videoPositions[i]}
                        className={`slider-video ${videoPositions[i]}`}
                    >
                        <video
                            src={videos[videoIdx]}
                            width={videoPositions[i] === 'center' ? CENTER_WIDTH : SIDE_WIDTH}
                            height={videoPositions[i] === 'center' ? CENTER_HEIGHT : SIDE_HEIGHT}
                            autoPlay
                            loop
                            muted
                            // controls={videoPositions[i] === 'center'}
                            onMouseEnter={videoPositions[i] === 'center' ? () => clearInterval(intervalRef.current) : undefined}
                            onMouseLeave={videoPositions[i] === 'center' ? startAutoSlide : undefined}
                        />
                    </Box>
                ))}
            </Box>

            {/* Dots indicator with arrows */}
            <Box className="slider-controls">
                <IconButton onClick={handlePrev}>
                    <ArrowBackIosNewIcon />
                </IconButton>
                {videos.map((_, i) => (
                    <IconButton
                        key={i}
                        size="small"
                        onClick={() => handleDotClick(i)}
                        sx={{ color: i === index ? '#1976d2' : '#bdbdbd' }}
                    >
                        <FiberManualRecordIcon fontSize={i === index ? 'medium' : 'small'} />
                    </IconButton>
                ))}
                <IconButton onClick={handleNext}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>
        </Box>
    );
}

export default Slider;