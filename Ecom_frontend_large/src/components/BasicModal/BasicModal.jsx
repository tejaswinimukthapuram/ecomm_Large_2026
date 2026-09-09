import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ClearIcon from '@mui/icons-material/Clear';
import Divider from '@mui/material/Divider';


import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 1,
};

export const BasicModal = (props)=> {
  const {open, setOpen} = props
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const itemInfo = {img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
    brandName: "Tokyo Talkies",
    description: "Women's Casual Floral Midi Dress",
    rating: 4.4,
    reviews: 2315,
    price:1800
  }



  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
              <div className="d-flex flex-row justify-content-start">
                <div style={{ height: "100%", width: "30%" }}>
                  <img src={itemInfo.img} style={{ height: "90%", width: "100%" }} />
                </div>
                <div style={{ width: "90%", marginLeft: "0.5rem" }}>
                  <Typography sx={{fontWeight:"700"}}>Move from bag </Typography>
                  <Typography>Are you sure you want to remove this item from bag ?</Typography>

                </div>
                <div className='flex-end' >
                  <Button onClick={() => handleClose()}>
                    <ClearIcon />
                  </Button>
                </div>
              </div>

        <Divider orientation="horizontal" flexItem sx={{  border: '1px solid', color:"grey", marginTop : "0.6rem", marginBottom : "2PX"}} />
          <div className='d-flex flex-row justify-content-between'>
                       <Button onClick={() => handleClose()} sx={{color:"black"}}>
                    REMOVE
                  </Button>
                   <Button onClick={() => handleClose()} sx={{color:"var(--primary)"}}>
                    MOVE TO WISHLIST
                  </Button>
                  </div> 
        </Box>
      </Modal>
    </div>
  );
}





  
