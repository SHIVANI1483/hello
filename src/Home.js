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
function Home()
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
      console.log(pid)
      
    }
     async function getData()
    {
      var result =await fetch("https://fakestoreapi.com/products")
      var data= await result.json()
     
      setdata(data)
      console.log(data)
      
    }
    return(
        <>
            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
             { 
             apidata.map((item,i)=>  
      <MDBCol key={i}>
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
            <MDBCardTitle style={{color:"brown"}}>{item.price*80} rs</MDBCardTitle>
            <MDBCardTitle>{item.category} </MDBCardTitle>
            <MDBCardTitle>{item.rating.rate}</MDBCardTitle>
            <MDBCardText>
            {item.description}
            </MDBCardText>
           <center><MDBBtn onClick={()=>getId(item.id)}>view {item.id}</MDBBtn></center> 
          </MDBCardBody>
          
        </MDBCard>
      </MDBCol>
    )}
      
    </MDBRow>
    <Footer></Footer>

  
        </>
    )
}
export default Home