
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import StarIcon from '@mui/icons-material/Star';

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// MUI divider imports
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import Divider, { dividerClasses } from '@mui/material/Divider';

import Typography from '@mui/material/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import "./buyCard.css"





export const BuyCard=()=>{

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
    brandName: "House of Pataudi",
    description: "Women's Embroidered Kurta with Trouser & Dupatta",
    rating: 4.5,
    reviews: 1284,
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
    brandName: "Libas",
    description: "Printed Cotton Straight Kurta Set",
    rating: 4.3,
    reviews: 965,
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
    brandName: "Anouk",
    description: "Floral Printed Anarkali Kurta Set",
    rating: 4.6,
    reviews: 2137,
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
    brandName: "Biba",
    description: "Ethnic Motifs Kurta with Palazzo",
    rating: 4.4,
    reviews: 1843,
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
    brandName: "W for Woman",
    description: "Elegant Rayon A-Line Kurta Set",
    rating: 4.7,
    reviews: 3012,
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
    brandName: "Sangria",
    description: "Printed Pure Cotton Kurta Set",
    rating: 4.2,
    reviews: 856,
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
    brandName: "Aurelia",
    description: "Women's Embellished Kurta with Pants",
    rating: 4.5,
    reviews: 1547,
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
    brandName: "Indo Era",
    description: "Embroidered Kurta, Pant & Dupatta Set",
    rating: 4.3,
    reviews: 1228,
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
    brandName: "Varanga",
    description: "Women's Floral Printed Anarkali Dress",
    rating: 4.6,
    reviews: 2674,
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
    brandName: "AKS Couture",
    description: "Designer Ethnic Kurta Set with Dupatta",
    rating: 4.4,
    reviews: 1789,
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
    brandName: "Global Desi",
    description: "Bohemian Printed Maxi Dress",
    rating: 4.1,
    reviews: 694,
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
    brandName: "Tokyo Talkies",
    description: "Women's Casual Floral Midi Dress",
    rating: 4.4,
    reviews: 2315,
  },
];

const itemInfo = {img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
    brandName: "Tokyo Talkies",
    description: "Women's Casual Floral Midi Dress",
    rating: 4.4,
    reviews: 2315,
    price:1800
  }

    return (
        <>
        <Container>
      <Row>
        <Col sm="12" md="6" className='mt-4'>
          <Card>
               <Box sx={{ width: "100%", height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    
          </Card>
        </Col>

        <Col className='mt-4'>
           <Box>
      <h3>{itemInfo.brandName}</h3>
      <p>{itemInfo.description}</p>
       <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        bgcolor: 'background.paper',
        color: 'text.secondary',
        '& svg': {
          m: 1,
        },
        [`& .${dividerClasses.root}`]: {
          mx: 0.5,
        },

        height:"30px",

      }}
    >
     
     <Typography sx={{marginTop:"2px", marginLeft:"4px", fontWeight:"800"}}>{itemInfo.rating } </Typography>
     <Typography className="star"><StarIcon /></Typography>
      <Divider orientation="vertical" flexItem />
      
      <Typography sx={{margin:"5px"}}>{itemInfo.reviews}</Typography>
      
    </Box>

    </Box>
      <Box>
        <Divider orientation="horizontal" flexItem sx={{  border: '1px solid', color:"grey", marginTop : "1rem", marginBottom : "1rem"}} />
        <Typography sx={{fontWeight:"900"}} >
          <CurrencyRupeeIcon />
          {itemInfo.price}
          </Typography>
      </Box>

      <Box> 
      <Button variant="contained" sx={{
    mt: 2,
    mr: 3,
    backgroundColor: "var(--secondary)",
    "&:hover": {
      backgroundColor: "var(--secondary)",
    },
  }}>
    <FavoriteBorderIcon fontSize="small" />  
    <span style={{marginLeft:"14px"}} >ADD To BAG</span>
    </Button>
      <Button variant="outlined"
      sx={{
    mt: 2,
    mr: 3,
    color:"black",
    borderColor:"black"
  }}>
    <FavoriteBorderIcon fontSize="small" />  
    <span style={{marginLeft:"14px"}} >WISHLIST</span>
    </Button>

      </Box>

    </Col>

 
      </Row>
    </Container>

        </>
    )

}




