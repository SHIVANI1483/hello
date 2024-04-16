import { useEffect, useState } from "react"
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

function Demo()
{
    const [apidata,setdata]=useState([])
    useEffect(()=>{
        getData()
    },[])
     async function getData()
    {
      var result=await fetch("https://jsonplaceholder.typicode.com/photos")
      var data =await result.json()
      setdata(data)

      console.log(data)
    }

    
    return(
        <>
         <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{margin:"10px"}}>
             { 
             apidata.map((item,i)=>
              item.id<=50? 
      <MDBCol key={i}>
        <MDBCard className='h-100'>
          <center>
          <MDBCardImage
            src={item.thumbnailUrl} style={{width:"100px", height:"150px", margin:"20px"}}
            alt='...'
            position='top'
          />
           <MDBCardImage
            src={item.url} style={{width:"100px", height:"150px", margin:"20px"}}
            alt='...'
            position='left'
          />
          </center>
          <MDBCardBody>
            <MDBCardTitle style={{fontFamily:"serif"}}>ALBUM :{item.albumId}</MDBCardTitle>
            <MDBCardTitle style={{color:"brown"}}> ID :{item.id}</MDBCardTitle>
          <MDBCardTitle  style={{color:"red"}}>{item.title} </MDBCardTitle>
            
            <MDBCardText>
            {item.description}
            </MDBCardText>
           
          </MDBCardBody>
          
        </MDBCard>
      </MDBCol> :null
    )}
      
    </MDBRow>
        </>

    )
}
export default Demo