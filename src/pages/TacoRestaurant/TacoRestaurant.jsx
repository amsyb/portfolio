import Summary from "../../components/Summary/Summary";
import TextBlock from "../../components/TextBlock/TextBlock";
import redlining from "../../assets/images/tcs-redlining.png";
import future from "../../assets/images/tcs-next.png";
import finalProduct from "../../assets/images/tcs-final-product.png";
import userPersona from "../../assets/images/user-persona.png";
import MediaBlockLeft from "../../components/MediaBlock/MediaBlock";
import MediaBlockRight from "../../components/MediaBlockRight/MediaBlockRight";
import MediaBlockTop from "../../components/MediaBlockTop/MediaBlockTop";
import "./TacoRestaurant.scss";

function TacoRestaurant() {
  return (
    <>
      <section className="casestudy">
        <Summary
          title="Taco 'Bout It"
          overview1="• Led end-to-end development and design by handling UX/UI design, front-end implementation, and back-end development to deliver a fully functional product."
          overview2="• Designed and developed responsive, user-centered interfaces that enhanced user engagement and met project goals."
          overview3="• Built and maintained back-end APIs and databases to ensure seamless data flow and functionality."
          duration="Jan 2025 - Feb 2025"
          tools="React, Node, Express, Javascript, SCCS, Photoshop"
          role="Full-Stack Developer & UX/UI Designer"
          button="View Github"
          buttonLink="https://github.com/amsyb/taco-restaurant"
        ></Summary>

        <TextBlock
          title="Problem Space"
          copy="This app concept aims to support a hypothetical business owner. Since Taco 'Bout It relies on platforms like Uber Eats and DoorDash, they would incur costly fees to keep their restaurant listed. The goal is to create a custom app that helps retain more revenue and develop an experience that aligns seamlessly with their unique brand identity."
        ></TextBlock>
        {/* 
      <MediaBlockTop
        title="The Process"
        text="For this project, branding and styling came naturally, as the clients had a strong, well-defined identity reflected in their marketing and food. To ensure the design resonated with their audience, I began by developing a user persona. This step was essential in gaining a deeper understanding of the target users’ needs, behaviors, and expectations, allowing me to create a more accessible and user-centered experience."
        image={userPersona}
        classname="process"
      ></MediaBlockTop> */}
        <MediaBlockLeft
          image={redlining}
          title="Research"
          description="In addition to the persona, I conducted a competitor analysis to
          identify industry standards, uncover opportunities for
          differentiation, and determine best practices for designing a
          successful application in this space. These insights guided key design
          decisions and ensured the product aligned with both user expectations
          and business goals. With a solid foundation in place, I moved on to
          low-fidelity wireframes, which allowed for rapid iteration and early
          validation of core layouts and user flows. After A/B Testing and user
          interviews, I gathered feedback to refine the design further, ensuring
          that the structure and interactions aligned with their vision and user
          needs."
        ></MediaBlockLeft>
        <MediaBlockRight
          image={finalProduct}
          title="Final Product"
          description="The final product is a full-stack application built with React, designed to provide a seamless and engaging user experience. The core functionality allows users to place orders efficiently while also tracking their rewards, ensuring they can easily redeem benefits once they accumulate enough points. Recognizing the importance of personalization, I also implemented a light and dark mode toggle, enhancing accessibility and user preference options. To see the full project in action, you can explore the code on my GitHub."
          button="View Github"
          buttonLink="https://github.com/amsyb/taco-restaurant"
          classname="final__product"
        ></MediaBlockRight>
        <MediaBlockLeft
          image={future}
          title="What's Next?"
          description="In the future, I plan to enhance the application by implementing a chatbot, enabling patrons to ask a wider range of questions and receive instant support. Additionally, I aim to develop a more robust profile management system, allowing users to update payment methods, remove saved payment options, and access an order history page for seamless reordering."
        ></MediaBlockLeft>
      </section>
    </>
  );
}

export default TacoRestaurant;
