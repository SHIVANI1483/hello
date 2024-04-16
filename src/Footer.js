import React from 'react';
import './footer.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
function Footer()
{
    return(
        <div className='footer1'>
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' >
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span></span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className='footer2'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                FeshionStreet
              </h6>
              <p>
                Here you can style your Self by our best Products and Brand.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
              <NavLink to="/">Home</NavLink>
              </p>
              <p>
              <NavLink to="/jewelery">Jwellery</NavLink>
              </p>
              <p>
              <NavLink to="/Electronic">Electronics</NavLink>
              </p>
              <p>
              <NavLink to="/MenClothes">Men Cloth</NavLink>
              </p>
              <p>
              <NavLink to="/womenCloth">Women Cloth</NavLink>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
              Pream Plaza Mall,
              Bhawarkua,INDORE
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                FeshionStreet.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 91 8965967795
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 91 6266410465
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright: Shivani Lavvanshi
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        FeshionStreet.com
        </a>
      </div>
    </MDBFooter>
        </div>
    )
}
export default Footer