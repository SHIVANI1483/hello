import { useEffect, useState } from "react"
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
function MenClothes()
{
   

    const [apidata,setdata]=useState([])
    useEffect(()=>{
        getData()
    },[])
     async function getData()
    {
      var result =await fetch("https://fakestoreapi.com/products/category/men's%20clothing")
      var data= await result.json()
     
      setdata(data)
      console.log(data)
      
    }
    return(
        <>
         
            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
             { 
             apidata.map((item)=>  
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={item.image}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            {/* <MDBCardTitle>{item.price}</MDBCardTitle>
            <MDBCardTitle>{item.rating}</MDBCardTitle> */}
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
          
        </MDBCard>
      </MDBCol>
    )}
      
    </MDBRow>
  
        

    </>

   ) 
}
export default MenClothes