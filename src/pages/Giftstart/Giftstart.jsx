import Summary from "../../components/Summary/Summary";
import TextBlock from "../../components/TextBlock/TextBlock";
import MediaBlockRight from "../../components/MediaBlockRight/MediaBlockRight";
import MediaBlockLeft from "../../components/MediaBlock/MediaBlock";
import "./Giftstart.scss";
import visualIdentity from "../../assets/images/gsp-identity.png";
import finalProduct from "../../assets/images/gsp-final.png";

function Giftstart() {
  return (
    <>
      <section className="casestudy">
        <h1>Giftstart</h1>
        <p>Building a Scalable Design System for a Gifting Platform</p>
        <Summary
          overview1="• Led UI brand design initiatives, crafting a scalable design system that ensured consistency and ease of implementation for developers. Collaborated closely with engineers to translate design concepts into reusable front-end components."
          overview2="• Integrated user research insights to align UI elements with usability standards and development best practices, ensuring both efficiency and maintainability."
          overview3="• Applied UX/UI best practices while bridging the gap between design and engineering, refining solutions that balanced user needs with technical feasibility."
          duration="Jan 2022 - June 2023"
          tools="Tailwind, Figma, Adobe Illustrator"
          role="UX/UI Designer"
          // button="View Site"
          // buttonLink="https://giftstart.ca/"
        ></Summary>

        <TextBlock
          title="The Process"
          copy1="We conducted market research, competitor analysis, and a SWOT assessment to define MVP priorities. Usability testing during wireframe development validated our design assumptions and refined key features."
          copy2="A primary challenge was designing privacy-focused user flows for registries while maintaining a seamless experience. Additionally, we developed a real-time notification system for purchased gifts, requiring close collaboration with developers to ensure smooth integration."
          copy3="Throughout, I structured UI components with reusability in mind, simplifying front-end development."
        ></TextBlock>

        <MediaBlockLeft
          title="Visual Identity & Design System"
          description="To establish the brand’s visual identity, I curated color palettes, typography, and a comprehensive style guide that ensured accessibility and consistency across platforms. Originally planned as a headless build, we pivoted to Tailwind based on client and development needs. My modular design system facilitated this transition, making implementation seamless."
          image={visualIdentity}
        ></MediaBlockLeft>
        <MediaBlockRight
          image={finalProduct}
          title="Final Product"
          description="Giftstart expanded my previous employer’s market reach by establishing a strong brand and scalable UI framework. A highlight was the intuitive gift registry UI, which enhanced user experience and translated seamlessly into front-end components.
The project’s success led to industry recognition, earning an Innovative Design award at the Netty Awards.
"
          // button="View Site"
          // buttonLink="https://giftstart.ca/"
        ></MediaBlockRight>
        <div className="giftstart__takeaways">
          <TextBlock
            title="Key Takeaways"
            copy1="• Create developer-friendly design systems that support scalable front-end builds."
            copy2="• Facilitate communication between designers and engineers to align UX with technical feasibility."
            copy3="• Design component-based UI systems, leveraging Tailwind for efficiency and maintainability."
            copy4="This experience reinforced my passion for crafting intuitive user experiences while ensuring seamless front-end implementation, a skill set I’m eager to bring to my next role"
          ></TextBlock>
        </div>
      </section>
    </>
  );
}

export default Giftstart;
