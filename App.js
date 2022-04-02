import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import './index.css';
import Grid from '@mui/material/Grid';
import { Button, Dropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'




function App() {
  const [value, setvalue] = useState(0)
  const IncreaseValue = (e) => {
    if (e.target.textContent === 'Add To Cart') {
      setvalue(value + 1)
      e.target.textContent = 'Remove From Cart'
    }
    else if (e.target.textContent === 'Remove From Cart') {
      setvalue(value - 1)
      e.target.textContent = 'Add To Cart'
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }



  return (
    <>
      <div className="topgrid">
        <Grid container spacing={2}>
          <div className='SB'>
            <Grid >
              <span variant="light"  >  Start Bootstrap </span>
            </Grid>
          </div>

          <Grid className='home' >
            <Button variant="light"  >  Home </Button>
          </Grid>
          <Grid >
            <Button variant="light"  >  About </Button>
          </Grid>
          <Grid >
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                shop
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">All Products</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Popular items</Dropdown.Item>
                <Dropdown.Item href="#/action-3">New Arrivals</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Grid>
          <div className="cart">
            <Grid >
              <Button variant="outline-dark" size="sl" startIcon={<DeleteIcon />}>
                <FontAwesomeIcon icon={faShoppingCart} />  Cart <span id="cv" className="Cnum">{value}</span> </Button>
            </Grid>
          </div>
        </Grid>
      </div> <br></br>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ height: "300px" }} className="color">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
              <div className="fontstyle1">
                Shop in style <br></br>
              </div>
              <div className="fontstyle2">
                with this Shop homepage template
              </div>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <br></br>
      <Grid container spacing={6} className="grid" >
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardContent className="cardcolor">
              <div className="number">
                <span>450x300</span>
              </div>
            </CardContent>
            <CardContent style={{ height: "150px" }}>
              <Typography gutterBottom variant="h5" component="div">
                <div className="fontstyle3">
                  Fancy Product
                </div>
                <div className="fontstyle4">
                  $40.00 - $80.00
                </div>
              </Typography>
            </CardContent>
            <CardActions >
              <div className="Button">
                <Button id='B1' variant="outline-dark">View options</Button>
              </div>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardContent className="cardcolor">
              <div className="sale">
                <span>Sale</span>
              </div>
              <div className="number1">
                <span>450x300</span>
              </div>
            </CardContent>
            <CardContent style={{ height: "150px" }}>
              <Typography gutterBottom variant="h5" component="div">
                <div className="fontstyle3">
                  Special Item
                </div>
                <div className="rating">
                  <Stack spacing={1}>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                  </Stack>
                </div>
                <div className="fontstyle4">
                  <s>$20.00</s> $18.00
                </div>
              </Typography>
            </CardContent>
            <CardActions >
              <div className="Button">
                <Button onClick={(e) => IncreaseValue(e)} id='B1' variant="outline-dark">Add To Cart</Button>{' '}
              </div>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardContent className="cardcolor">
              <div className="sale">
                <span>Sale</span>
              </div>
              <div className="number1">
                <span>450x300</span>
              </div>
            </CardContent>
            <CardContent style={{ height: "150px" }}>
              <Typography gutterBottom variant="h5" component="div">
                <div className="fontstyle3">
                  Sale Item
                </div>
                <div className="fontstyle4">
                  <s>$50.00</s> $25.00
                </div>
              </Typography>
            </CardContent>
            <CardActions >
              <div className="Button">
                <Button onClick={(e) => IncreaseValue(e)} id='B1' variant="outline-dark">Add To Cart</Button>{' '}
              </div>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardContent className="cardcolor">
              <div className="number">
                <span>450x300</span>
              </div>
            </CardContent>
            <CardContent style={{ height: "150px" }}>
              <Typography gutterBottom variant="h5" component="div">
                <div className="fontstyle3">
                  Popular Item
                </div>
                <div className="rating">
                  <Stack spacing={1}>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                  </Stack>
                </div>
                <div className="fontstyle4">
                  $40.00
                </div>
              </Typography>
            </CardContent>
            <CardActions >
              <div className="Button">
                <Button onClick={(e) => IncreaseValue(e)} id='B1' variant="outline-dark">Add To Cart</Button>{' '}
              </div>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <br></br>

      <Grid container spacing={6} className="grid1" >
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardContent className="cardcolor">
              <div className="sale">
                <span>Sale</span>
              </div>
              <div className="number1">
                <span>450x300</span>
              </div>
            </CardContent>
            <CardContent style={{ height: "150px" }}>
              <Typography gutterBottom variant="h5" component="div">
                <div className="fontstyle3">
                  Sale Item
                </div>
                <div className="fontstyle4">
                  <s>$50.00</s> $25.00
                </div>
              </Typography>
            </CardContent>
            <CardActions >
              <div className="Button">
                <Button onClick={(e) => IncreaseValue(e)} id='B1' variant="outline-dark">Add To Cart</Button>{' '}
              </div>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardContent className="cardcolor">
              <div className="number">
                <span>450x300</span>
              </div>
            </CardContent>
            <CardContent style={{ height: "150px" }}>
              <Typography gutterBottom variant="h5" component="div">
                <div className="fontstyle3">
                  Fancy Product
                </div>
                <div className="fontstyle4">
                  $120.00 - $280.00
                </div>
              </Typography>
            </CardContent>
            <CardActions >
              <div className="Button">
                <Button id='B1' variant="outline-dark">View options</Button>{' '}
              </div>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardContent className="cardcolor">
              <div className="sale">
                <span>Sale</span>
              </div>
              <div className="number1">
                <span>450x300</span>
              </div>
            </CardContent>
            <CardContent style={{ height: "150px" }}>
              <Typography gutterBottom variant="h5" component="div">
                <div className="fontstyle3">
                  Special Item
                </div>
                <div className="rating">
                  <Stack spacing={1}>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                  </Stack>
                </div>
                <div className="fontstyle4">
                  <s>$20.00</s> $18.00
                </div>
              </Typography>
            </CardContent>
            <CardActions >
              <div className="Button">
                <Button onClick={(e) => IncreaseValue(e)} id='B1' variant="outline-dark">Add To Cart</Button>{' '}
              </div>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardContent className="cardcolor">
              <div className="number">
                <span>450x300</span>
              </div>
            </CardContent>
            <CardContent style={{ height: "150px" }}>
              <Typography gutterBottom variant="h5" component="div">
                <div className="fontstyle3">
                  Popular Item
                </div>
                <div className="rating">
                  <Stack spacing={1}>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                  </Stack>
                </div>
                <div className="fontstyle4">
                  $40.00
                </div>
              </Typography>
            </CardContent>
            <CardActions >
              <div className="Button">
                <Button onClick={(e) => IncreaseValue(e)} id='B1' variant="outline-dark">Add To Cart</Button>{' '}
              </div>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <br></br>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ height: "150px" }} className="color">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
              <div className="fontstyle2">
                Copyright © Your Website 2022
              </div>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

    </>
  );
}

export default App;
