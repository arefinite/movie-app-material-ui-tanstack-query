import {
  Stack,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  FormControlLabel,
  Switch,
  IconButton,
  Drawer,
  Divider,
} from '@mui/material'
import TheatersIcon from '@mui/icons-material/Theaters'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false)
  return (
    <Box>
      <AppBar
        sx={{
          backgroundColor: '#063970',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Container maxWidth='xl'>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
          >
            <Toolbar>
              <TheatersIcon />
              <Typography variant='h6' color='white' sx={{ ml: 1 }}>
                Movie App
              </Typography>
            </Toolbar>

            <Toolbar sx={{ display: 'flex', gap: '2rem' }}>
              <FormControlLabel
                value='start'
                control={<Switch color='primary' />}
                label='Dark'
                labelPlacement='start'
              />
              <Stack
                direction='row'
                sx={{ display: { xs: 'none', md: 'flex' } }}
              >
                <Stack direction='row' gap={2}>
                  <Button variant='text' color='inherit'>
                    <NavLink color='inherit' to='/'>
                      HOME
                    </NavLink>
                  </Button>
                  <Button variant='text' color='inherit'>
                    <NavLink color='inherit' to='/rated'>
                      RATED
                    </NavLink>
                  </Button>
                </Stack>
                <Button variant='contained' sx={{ marginLeft: '2rem' }}>
                  Login
                </Button>
              </Stack>
              <Box sx={{ display: { md: 'none' } }}>
                <IconButton
                  size='large'
                  edge='start'
                  color='inherit'
                  onClick={() => setNavOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor='right'
                  open={navOpen}
                  onClose={() => setNavOpen(false)}
                >
                  <Box width='200px' role='presentation'>
                    <Stack
                      direction='row'
                      alignItems='center'
                      justifyContent='space-between'
                      p={1}
                      pr={0}
                    >
                      <Typography variant='body1' color='initial'>
                        Welcome!
                      </Typography>
                      <IconButton
                        color='inherit'
                        onClick={() => setNavOpen(false)}
                      >
                        <CloseIcon />
                      </IconButton>
                    </Stack>
                    <Divider></Divider>

                    <Stack mt={1}>
                      <Button variant='text' color='inherit'>
                        <NavLink color='inherit' to='/'>
                          HOME
                        </NavLink>
                      </Button>
                      <Button variant='text' color='inherit'>
                        <NavLink color='inherit' to='/rated'>
                          RATED
                        </NavLink>
                      </Button>
                    </Stack>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Button variant='contained' sx={{ marginTop: '0.5rem' }}>
                        Login
                      </Button>
                    </Box>
                  </Box>
                </Drawer>
              </Box>
            </Toolbar>
          </Stack>
        </Container>
      </AppBar>
    </Box>
  )
}
export default Navbar
