import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    const { sx, ...rest } = props

    return (
        <Slider
            sx={{
                width: 175,
                padding: '0 0',
                color: '#4caf50',
                '& .MuiSlider-rail': {
                    backgroundColor: '#bdbdbd',
                    opacity: 1,
                    height: 3,
                    borderRadius: 999,
                },
                '& .MuiSlider-track': {
                    backgroundColor: '#4caf50',
                    height: 3,
                    borderRadius: 999,
                },
                '& .MuiSlider-thumb': {
                    width: 18,
                    height: 18,
                    backgroundColor: '#ffffff',
                    border: '1px solid #4caf50',
                    boxShadow: 'none',
                    '&:before': {
                        display: 'none',
                    },
                },
                '& .MuiSlider-mark': {
                    display: 'none',
                },
                ...(sx as any),
            }}
            valueLabelDisplay="off"
            {...rest} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
