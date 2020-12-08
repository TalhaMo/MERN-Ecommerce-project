import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <MDBFooter  className="font-small mdb-color lighten-3 pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <img  src='/logo2.jpg' alt='logo2'/>
        
          </MDBCol>
          
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.linkedin.com/feed/" class="li-ic">
                  <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                <a href="https://www.facebook.com/" class="fb-ic">
                  <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                <a href="https://www.twitter.com/" class="tw-ic">
                  <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                <a href="https://www.google.com/" class="gplus-ic">
                  <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                <a href="https://www.instagram.com/" class="ins-ic">
                  <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                <a href="https://www.pinterest.com/" class="pin-ic">
                  <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <Link to="/"> Garden Store</Link>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;