import React from 'react';
import { Link } from 'react-router-dom';
import background from "../bg-intro.jpeg";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #fdad2f; // This is a blue color
  font-size: 14px;
  color: white;
  padding: 10px;
  text-align: center;
`;

const Home = () => {
  return (
    <div>
      <h3 class="font text-center">
        A one of its kind Platform to connect dental clincs and consultants!
      </h3>
      <div style={{ background: '#fdad2f', padding: '15px' }}>
        <h5 class="text-start">Practitioners - </h5>
        <ul>
          <li>
            Do not worry about contacts if you require specialists to provide quality treatments
          </li>
          <li>
            Are all your specialists busy? - Don&#39;t worry, we got you            </li>
        </ul>
        <h5 class="text-start">Consultants and full-time doctors - </h5>
        <ul>
          <li>
            Don&#39;t run around clinics giving your visiting cards and resumes anymore.
          </li>
          <li>
            Started new and struggling to find clinics? - We got you           </li>
        </ul>
      </div>
      <div>
        <h2>
          Practioners
        </h2>
        <h2>or</h2>
        <h2>Consultants</h2>
        <Link type="button" class="btn btn-dark p-2 border border-bottom-3" style={{fontSize:"25px", }} as={Link} to="/Register">
          Register
        </Link>
      </div>
      <div style={{ backgroundImage: `url(${background})`, linearGradient: '(rgba(255,255,255,0.5), rgba(255,255,255,0.5))' }}>
        <p style={{ fontFamily: 'Aria', color: "black", fontWeight: "normal", fontSize:"25", textAlign:"center" }}>
        CoDent is a cutting-edge platform designed to revolutionize the way dental clinics and consultants connect and collaborate.<br/>
        At its core, CoDent serves as a dynamic hub facilitating seamless interactions between dental professionals. <br/>
        Through an intuitive online environment, CoDent empowers dentists to effortlessly find experienced consultants or connect with other clinics.<br/>
        This innovative platform is poised to reshape the landscape of dental collaboration, introducing efficiency, convenience, and a sense of community into the world of dentistry.</p>
      </div>
      <FooterContainer>
      {/* You can change the text of the footer here */}
      <p>&copy; Deraive Technologies 2024. All rights reserved.</p>
    </FooterContainer>
    </div>
  )
}

export default Home;