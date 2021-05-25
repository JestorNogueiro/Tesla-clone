import React from "react";
import Styled from "styled-components";
import Section from "./Section";
const Home = () => {
  return (
    <Container>
      <Section
        title="Model-S"
        disc="Order Online For Touchless Delivery"
        bgImage="model-s.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section
        title="Model Y"
        disc="Order Online For Touchless Delivery"
        bgImage="model-y.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section
        title="Model X"
        disc="Order Online For Touchless Delivery"
        bgImage="model-x.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section
        title="Model 3"
        disc="Order Online For Touchless Delivery"
        bgImage="model-3.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section
        title="Solar panel"
        disc="Money back guarantee"
        bgImage="solar-panel.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section
        title="Solar Roof"
        disc="Solar Roof Costs Less than a New Roof Plus Solar Panels"
        bgImage="solar-roof.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section
        title="Accessories"
        disc="Solar Roof Costs Less than a New Roof Plus Solar Panels"
        bgImage="accessories.jpg"
        leftButton="Buy Now"
      />
    </Container>
  );
};

export default Home;

const Container = Styled.div`
  height: 100%;
  
`;
