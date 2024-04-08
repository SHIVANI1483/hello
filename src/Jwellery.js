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
function Jwellery()
{
   

    const [apidata,setdata]=useState([])
    useEffect(()=>{
        getData()
    },[])
     async function getData()
    {
      var result =await fetch("https://fakestoreapi.com/products/category/jewelery")
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
    <Footer></Footer>
  
        

    </>

   ) 
}
export default Jwellery