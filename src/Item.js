import { useEffect, useState } from "react";
import{useLocation} from "react-router-dom"
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';
function Item()
{
    const location=useLocation();
    const data=location.state
    const [apidata,setdata]=useState({})
    useEffect(()=>{
     fetch("https://fakestoreapi.com/products/"+data.pid).then((result)=>{
     result.json().then((data1)=>{
        console.log(data1)
        setdata(data1)
     })
     })
    },[])
    return(
        <>
        
         {/* <h1>{data.pid}</h1> */}
         <MDBCard style={{ maxWidth: '540px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={apidata.image} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>{apidata.title}</MDBCardTitle>
            <MDBCardTitle style={{color:"brown"}}>{apidata.price*80} rs</MDBCardTitle>
            <MDBCardTitle>{apidata.category} </MDBCardTitle>
            {/* <MDBCardTitle>{apidata.rating}</MDBCardTitle> */}
            <MDBCardText>
             {apidata.description}
            </MDBCardText>
            <center><MDBBtn >Buy Now</MDBBtn></center> 
            {/* <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText> */}
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    
        </>
    )
}
export  default Item