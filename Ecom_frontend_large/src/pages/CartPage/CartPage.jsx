import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ClearIcon from '@mui/icons-material/Clear';
import { BasicModal } from '../../components/BasicModal/BasicModal';



export const CartPage = ()=>{

    const [openDialog, setOpenDialog] = useState(false)

const itemInfo = {img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
    brandName: "Tokyo Talkies",
    description: "Women's Casual Floral Midi Dress",
    rating: 4.4,
    reviews: 2315,
    price:1800
  }

  const handleOpen = ()=>{
    setOpenDialog(true)
  }

    return (
        <>
 <Container>
      <Row>
        <Col sm="12" md="6">
         <Card sx={{ minWidth: 700, marginTop:"4rem" }}>
      <CardContent>
        <div className="d-flex flex-row justify-content-start">
        <div style={{height:"100%", width:"20%"}}>
        <img src={itemInfo.img} style={{height:"100%", width:"100%"}}/>
        </div>
        <div style={{ width:"90%", marginLeft:"2rem"}}>
            <Typography>{itemInfo.brandName}</Typography>
             <Typography>{itemInfo.title}</Typography>
              <Typography>{itemInfo.description}</Typography>
              <Typography sx={{fontWeight:"900"}} >
          <CurrencyRupeeIcon />
          {itemInfo.price}
          </Typography>
        </div>
        <div className='flex-end' >
            <Button onClick={()=>handleOpen()}>
                <ClearIcon />
            </Button>
            
            </div>
        </div>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
        </Col>
        <Col sm="12" md="6">
        </Col>

        <BasicModal open = {openDialog} setOpen = {setOpenDialog} />
      </Row>
    </Container>        </>
    )

}