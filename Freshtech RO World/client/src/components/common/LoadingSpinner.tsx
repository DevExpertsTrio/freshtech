import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

interface LoadingSpinnerProps {
  size?: number;
  message?: string;
  fullScreen?: boolean;
  color?: 'primary' | 'secondary' | 'inherit';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 40,
  message = 'Loading...',
  fullScreen = false,
  color = 'primary',
}) => {
  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      <CircularProgress size={size} color={color} />
      {message && (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: 'center' }}
        >
          {message}
        </Typography>
      )}
    </Box>
  );

  if (fullScreen) {
    return (
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
        }}
      >
        {content}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 200,
      }}
    >
      {content}
    </Box>
  );
};

export default LoadingSpinner;
