
import Box from '@mui/material/Box';
import { filledInputClasses } from '@mui/material/FilledInput';
import { inputBaseClasses } from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';


const NumberInput = ({formik})=>{

  console.log(formik, "formik")
  console.log(formik.values, "values")
  console.log(formik.errors, "errors")
  console.log(formik.touched.number, "formik.touched.number")

    return (
        <>

    <Box
      component="form"
      sx={{ '& > :not(style)': { mb: 3, width: '100%' } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-suffix-shrink"
        label="Mobile Number"
        variant="outlined"
        name="number"
        value={formik.values.number}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur} // ✅ important
        // onChange={handleChange}
        error={formik.touched.number && Boolean(formik.errors.number)}
        helperText={formik.touched.number && formik.errors.number}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment
                position="start"
                sx={{
                  opacity: 0,
                  pointerEvents: 'none',
                  [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                    opacity: 1,
                  },
                }}
              >
                +91 |
              </InputAdornment>
            ),
          },
        }}
      />
   
    
    </Box>
 

        </>
    )
}


export default NumberInput;