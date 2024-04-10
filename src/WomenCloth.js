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
import Footer from "./Footer";
function WomenCloth()
{
   

    const [apidata,setdata]=useState([])
    useEffect(()=>{
        getData()
    },[])
     async function getData()
    {
      var result =await fetch("https://fakestoreapi.com/products/category/women's clothing")
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
            <center>
          <MDBCardImage
            src={item.image} style={{width:"100px", height:"100px"}}
            alt='...'
            position='top'
          />
          </center>
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardTitle>{item.price*80} rs</MDBCardTitle>
            <MDBCardTitle>{item.category} </MDBCardTitle>
            <MDBCardTitle>{item.rating.rate}</MDBCardTitle>
            <MDBCardText>
            {item.description}
            </MDBCardText>
          </MDBCardBody>
          
        </MDBCard>
      </MDBCol>
    )}
      
    </MDBRow>
    <Footer></Footer>
  
        

    </>

   ) 
}
export default WomenCloth