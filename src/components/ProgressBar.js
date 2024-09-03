import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: '#FF0000',  // Set the unfilled portion background color to red
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: '#379017',  // Set the filled portion background color to green
    },
}));

export default function ProgressBar({ value, month }) {
    return (
        <Stack spacing={1} sx={{ flexGrow: 1, width: '100%' }}>
            <Typography 
                variant="subtitle1" 
                color="textPrimary" 
                sx={{ fontWeight: 'bold', textAlign: 'center' }}
            >
                {month}
            </Typography>
            <Stack sx={{ position: 'relative', width: '100%' }}>
                <BorderLinearProgress variant="determinate" value={value} />
                <Typography 
                    variant="body2" 
                    color="textPrimary" 
                    sx={{ 
                        position: 'absolute', 
                        top: '100%', 
                        left: '50%', 
                        transform: 'translate(-50%, 0%)',
                        fontWeight: 'bold',
                    }}
                >
                    {`${value}%`}
                </Typography>
            </Stack>
        </Stack>
    );
}

 
