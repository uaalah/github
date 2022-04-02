import React, { FC } from 'react'
import { Box, CardMedia, Container, Typography } from '@mui/material'
import Logo from '../../logo.svg'

const HeaderStyle = {
  bgcolor: "secondary.main",
  height: 100,
  display: "flex",
  alignItems: "center",
  
  "img": {
    height: '5rem'
  }
}

const Header: FC = () => {
  return (
    <Box sx={HeaderStyle}
      component="header"
    >
      <Container>
        <Typography variant='h1' display="flex" alignItems="center" justifyContent="center">
          <img src={Logo} alt="" />
          React Repo
        </Typography>

      </Container>
    </Box>
  )
}

export default Header