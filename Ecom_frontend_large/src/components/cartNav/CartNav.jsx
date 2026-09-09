
import { CartStepper } from "./CartStepper";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import ShieldIcon from '@mui/icons-material/Shield';
import Typography from "@mui/material/Typography";




export const CartNav = ()=>{


    return (
        <>
          <Navbar sticky="top" collapseOnSelect expand="lg" variant="dark" className="nav shadow-lg">
        <Container>
          <Navbar.Brand href="/home" className="brand-name">
            <img
              alt=""
              src="https://i.pinimg.com/236x/b7/8e/16/b78e163a3a551906642dce556cc58d3e.jpg"
              width="50"
              height="50"
              className="d-inline-block "
              style={{ borderRadius: "50px", marginRight: "5px" }}
            />
            Tara
          </Navbar.Brand>

           <CartStepper />

           <Typography><ShieldIcon sx={{fill:"var(--secondary)"}} /> 100% SECURE</Typography>
           
       
        </Container>
      </Navbar>

     
        </>
    )
}