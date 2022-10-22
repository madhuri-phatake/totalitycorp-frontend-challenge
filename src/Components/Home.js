import React from 'react';
import styled from 'styled-components';
import Models from './Home/Models.js';
import bgImg1 from './Images/tesla-car-1.jpg';
import bgImg2 from './Images/tesla-car-2.jpg';
import bgImg3 from './Images/tesla-car-3.jpg';
import bgImg4 from './Images/tesla-car-4.jpg';
import bgImg5 from './Images/solar-panels.jpg';
import bgImg6 from './Images/solar-roof.jpg';
import bgImg7 from './Images/Desktop-Accessories.jpg';
import downArrow from './Images/down-arrow.svg';
const Home = () => {
  return (
    <div>
      <Main>
      <Models 
          title="Model S"
          text="Order Online for Touchless Delivery"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          backgroundImg={bgImg3}
          dropdown={downArrow}
          ifDropDownExits
      />
      <Models 
          title="Model Y"
          text="Order Online for Touchless Delivery"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          backgroundImg={bgImg2}
      />
      <Models 
          title="Model 3"
          text="Order Online for Touchless Delivery"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          backgroundImg={bgImg1}
      />
       <Models 
          title="Model X"
          text="Order Online for Touchless Delivery"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          backgroundImg={bgImg4}
          
      />
       <Models 
          title="Lowest Solar Panel in America"
          text="Money Back Guarantee"
          leftBtn=" Order Now"
          rightBtn="Learn More"
          backgroundImg={bgImg5}
          ifblackColorExits
      />
       <Models 
          title="Solar for New Roofs"
          text="Solar Roof Costs Less Then a New Roof Plue Solar Panels"
          leftBtn="Oreder Now"
          rightBtn="Learn More "
          backgroundImg={bgImg6}
          ifblackColorExits
      />
       <Models 
          title="Accessories"
          text=""
          leftBtn="Shop Now"
          backgroundImg={bgImg7}
          ifblackColorExits
      />

      </Main>
    </div>
  )
}

const Main= styled.main`
   width:auto;
   height:auto;
   overflow:auto;
   scroll-behavior:smooth;
   scroll-snap-align:initial;
   snap-snap-type: mandatory;
`;
export default Home