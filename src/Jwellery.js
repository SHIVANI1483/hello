import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBRow,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';
import Footer from "./Footer";
function Jwellery()
{
   

    const [apidata,setdata]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        getData()
    },[])
    function getId(pid)
    {
      const data={pid:pid}
      navigate("/item",{state:data})
    }
     async function getData()
    {
      var result =await fetch("https://fakestoreapi.com/products/category/jewelery")
      var data= await result.json()
     
      setdata(data)
      console.log(data)
      
    }
    return(
        <>
          <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{margin:"10px"}}>
             { 
             apidata.map((item,i)=>  
      <MDBCol key={i}>
        <MDBCard className='h-100' style={{border:"2px solid pink" }}>
          <center>
          <MDBCardImage
            src={item.image} style={{width:"100px", height:"150px", margin:"20px"}}
            alt='...'
            position='top'
          />
          </center>
          <MDBCardBody>
            <MDBCardTitle style={{fontFamily:"serif"}}>{item.title}</MDBCardTitle>
            <MDBCardTitle style={{color:"brown"}}>{item.price*80} rs</MDBCardTitle>
            <MDBCardTitle  style={{color:"red"}}>{item.category} </MDBCardTitle>
            <MDBCardTitle  style={{color:"blue"}}>{item.rating.rate}</MDBCardTitle>
            <MDBCardText>
            {item.description}
            </MDBCardText>
           <center><MDBBtn style={{backgroundColor:"Brown"}} onClick={()=>getId(item.id)}>view </MDBBtn></center> 
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