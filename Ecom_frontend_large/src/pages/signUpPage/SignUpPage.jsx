import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PrimaryNavbar from '../../components/primaryNavbar/PrimaryNavbar';
import NumberInput from './NumberInput';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/material';
import { useFormik } from 'formik';
import Form from "react-bootstrap/Form"




const SignUpPage = ()=>{

    const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

    const formik = useFormik({
        initialValues:{
            number:""
        },
        enableReinitialize:true,
         validate: (values) => {
    const errors = {};

    if (!values.number) {
      errors.number = "Required";
    } else if (!/^[0-9]*$/.test(values.number)) {
      errors.number = "Mobile number must be digits";
    } else if (values.number.length !== 10) {
      errors.number = "Mobile number must be 10 digits";
    }

    return errors;
  },
        onSubmit:(values)=>{
            console.log(values, "values in submit")
        }
    })


   
 
    return (
        <>
        <PrimaryNavbar />
        <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
         <Card sx={{ maxWidth: 345, padding:"15px" }}>
      <Form onSubmit={formik.handleSubmit}>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{marginBottom:"15px"}}>
            Login/Signup        
        </Typography>

        <NumberInput formik={formik} />
         
        <div className='d-flex'> 
        <Checkbox {...label} />

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          By continuing, I agree to the 
<Box component="span" sx={{ color: "var(--primary)", fontWeight:"700" }}> Terms of Use
</Box>           & 
           <Box component="span" sx={{ color: "var(--primary)", fontWeight:"700"}}> Privacy Policy</Box>
            and I am 18 years old.
        </Typography>
        </div>
              
      </CardContent>
         <CardActions  className='justify-content-center'>
      <div className='d-flex flex-column w-100'>

        <Button size="large" sx={{backgroundColor:"var(--primary)", color:"white", fontWeight:"600", marginBottom:"10px"}} type="submit">Continue</Button>
        
         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Have trouble logging in ? 
            <Box component="span" sx={{ color: "var(--primary)", fontWeight:"700"}}> Get help</Box>
           
        </Typography>
              </div>

      </CardActions>
                     </Form>

     
    </Card>
    </div>
    </>
    )
}

export default SignUpPage;


