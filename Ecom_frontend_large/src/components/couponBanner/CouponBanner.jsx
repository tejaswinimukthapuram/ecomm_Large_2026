import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./couponBanner.css"

function CouponBanner() {
  return (
    <>
   <div className='coupon-banner-container'>   
    <div className='m-4 coupon-banner'>
     
     <div>
        <h1 className='gradient-text'>Get 25% OFF</h1>
        <p className='off'>
            Up to 200 Off*
        </p> 
    </div>

    <div>

         <h1 className='sparkle-text'>Sale is live</h1>

    </div>


     <div className='circle1'></div>
     <div className='circle2'></div>
      <div className='circle3'></div>

     <div className='circle4'></div>
      <div className='circle5'></div>
     <div className='circle6'></div>
      </div>
   
     </div>







      {/* <div className='coupon-container'>   
    <Card className='m-4 coupon-banner coupon-card'>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        
     <div className='circle1'></div>
     <div className='circle2'></div>
      </Card.Body>
    </Card>
     </div> */}

    </>


    
  );
}

export default CouponBanner;