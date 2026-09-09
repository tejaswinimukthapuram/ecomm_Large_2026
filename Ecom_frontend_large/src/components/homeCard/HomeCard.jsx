import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from "axios";
// import cardImage1 from "../../assets/bannerImages/nike-air-force-1-mockup-floating";
import cardImage1 from "../../assets/bannerImages/nike-air-force-1-mockup-floating/cee18cde-8dbd-4316-a7ff-3eb19e49d11c.jpg";
import cardImage2 from "../../assets/bannerImages/close-up-smiling-pretty-lady-posing-while-demonstrating-designer-jewelry-beauty-concept.jpg";
import cardImage3 from "../../assets/bannerImages/closeup-shot-female-wearing-beautiful-silver-necklace-with-diamond-pendant.jpg";
import cardImage4 from "../../assets/bannerImages/luxury-jewellery-display.jpg";
import cardImage5 from "../../assets/bannerImages/woman-wearing-stunning-pink-saree.jpg";
import cardImage6 from "../../assets/bannerImages/two-girls-red-coats-models.jpg";
import { useState } from 'react';
import { useEffect } from 'react';
const list = [
  { id:1, category: "Shoes", image: cardImage1 },
  { id:2, category: "Jewellery", image: cardImage2 },
  { id:3, category: "Sarees", image: cardImage5 },
  { id:4, category: "Jewellery", image: cardImage3 },
  { id:5, category: "Earrings", image: cardImage4 },
  { id:6, category: "Western wear", image: cardImage6 }
]


const HomeCard = () => {

  const [items, setItems] = useState([]);


useEffect(() => {
  const fetchItems = async () => {
    try {
      const result = await axios.get("http://localhost:3000/api/items");
      console.log(result, "result");
    } catch (err) {
      console.error(err);
    }
  };

  fetchItems();
}, []);

  const navigate = useNavigate()

  const goToBuyPage = (item)=>{
    navigate("/buyPage/" + item.id)
 
  }
  return (
    <>
      <div className='d-flex flex-row ms-4 me-4'>

        {
          list.map((each) => {
            return (
              <Card style={{ width: '18rem' }} className='m-3' onClick={()=>goToBuyPage(each)}>
                <Card.Img variant="top" src={each.image} width={900}
                  height={250}
                />
                <div className='d-flex flex-column justify-content-center align-items-center'>
                  <Card.Body>
                    <Card.Title>{each.category}</Card.Title>
                    <Card.Text>
                      40-80% OFF%
                    </Card.Text>
                    <Card.Text>
                      Shop Now
                    </Card.Text>
                  </Card.Body>
                </div>
                {/* <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body> */}
              </Card>


            )
          })
        }
      </div>
    </>

  );
}

export default HomeCard;