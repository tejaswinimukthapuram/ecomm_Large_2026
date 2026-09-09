import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
// import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import "./primaryNavbar.scss"

//nav tab imports


  import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

//RESPONSIVE NAVBAR IMPORTS

import Nav from "react-bootstrap/Nav";

import NavDropdown from "react-bootstrap/NavDropdown";

function PrimaryNavbar(props) {
  const { updateSearchTerm } = props;
  // const navigate = useNavigate();
  // console.log(decoded);
  function onLogout() {
    // cookie.Expires = DateTime.Now.AddDays(-1);
    // Response.Cookies.Clear();
    localStorage.removeItem("token");
    localStorage.removeItem("userMail");
    localStorage.removeItem("refreshtoken");
    localStorage.removeItem("userdetails");
    // navigate("/login");
  }



  const onCartClick = () => {
    // navigate("/parent/cartpage");
  };

  const gotoWishlistPage = () => {
    // navigate("/parent/wishlist");
  };

  const goToAdminPage = () => {
    // navigate("/parent/admin");
  };

  const navItems = ["Men", "Women", "Beauty", "Jewellery"]


  //nav tabs code 


function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      aria-current={props.selected && 'page'}
      {...props}
    />
  );
}

LinkTab.propTypes = {
  selected: PropTypes.bool,
};


  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== 'click' ||
      (event.type === 'click' && samePageLinkNavigation(event))
    ) {
      setValue(newValue);
    }
  };




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
       
       {/* code for nav tabs */}

         <Box sx={{ width: '60%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="nav tabs example"
        role="navigation"
      >
        <LinkTab label="Men" href="/drafts" />
        <LinkTab label="Women" href="/trash" />
        <LinkTab label="Beauty" href="/spam" />
        <LinkTab label="Jewellery" href="/spam" />
      </Tabs>
    </Box>

{/* code for search bar */}
       <div className="input-group">
            <InputGroup className="mb-3 w-60">
              <InputGroup.Text id="basic-addon1">
                <span className="material-icons-outlined">search</span>
              </InputGroup.Text>
              <Form.Control
                placeholder="Search for Products brands and more"
                aria-label="Search"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  updateSearchTerm(e.target.value);
                  //   props.getFilteredData();
                  // setSearchTerm(e.target.value);
                }}
              />
            </InputGroup>
                  </div>


          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <div className="d-flex flex-row justify-content-end">
                <button onClick={goToAdminPage} className="nav-btn">
                  <i class="fa-solid fa-user"></i>
                </button>

                  <button className="nav-btn" onClick={gotoWishlistPage}>
                  <i class="fa-solid fa-heart"></i>
                </button>

                <Stack spacing={2} direction="row">
                  <button onClick={onCartClick} className="cart-btn">
                    <Badge
                      badgeContent={1}
                      color="info"
                    >
                    <i class="fa-solid fa-bag-shopping"></i>

                    </Badge>
                  </button>
                </Stack>

                 <button onClick={goToAdminPage} className="nav-btn">
                    <i class="fa-solid fa-circle-plus"></i>
                </button>
                
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

   
    </>
  );
}

export default PrimaryNavbar;
