import CaseStudy1 from "../../components/CaseStudy1/CaseStudy1";
import Summary from "../../components/Summary/Summary";

const Giftstart = () => {
  return (
    <>
      {/* -----------------------summary----------------------- */}
      <Summary
        header="Giftstart"
        summaryTitle="
Summary"
        summaryCopy="Giftstart involved the creation of a brand identity from scratch, including voice, and color palette."
        responsibilityTitle="Responsibilities"
        responsibilityCopy="Led UI brand design initiatives, crafting a comprehensive design system that supported a consistent and scalable user experience across all touchpoints.
 

Integrated insights from user research to address specific audience needs, ensuring that each design element contributed to building trust and aligning with the brand’s goals.
 

Applied UX/UI best practices throughout the design workflow, refining solutions to address both user pain points and client objectives effectively."
      ></Summary>
      {/* -----------------------intro----------------------- */}
      <CaseStudy1 title="Introduction">
        Giftstart, a specialized baby registry service offering subscriptions,
        services, and cash funds, represented a pivotal project for my previous
        agency as our first full-scale brand initiative. This project involved
        building a cohesive brand identity from the ground up, including voice,
        color palette, and a long-lasting design system that empowered the CEO
        to manage and scale the brand independently. Through close collaboration
        with the CEO, interviews with expectant parents, market research, and
        adherence to best practices, we crafted a user-centered experience that
        brought the client’s vision to life and made it tangible for users.
      </CaseStudy1>

      {/* -----------------------process----------------------- */}
      <CaseStudy1
        title="
The Process"
      >
        To thoroughly understand the client’s audience, we conducted
        comprehensive research. This included a competitor analysis, which
        provided us with a strong foundation for identifying key focus areas. To
        further refine our approach, we performed a SWOT analysis to gain a
        deeper understanding of what the MVP should encompass. During the
        wireframe development phase, we engaged users in usability testing,
        which provided valuable insights into the design's effectiveness.
        Particularly noteworthy were the privacy considerations and user flow
        within each registry. We needed to design a solution that was
        client-facing, user-facing, and ensured privacy. Additionally, we
        incorporated a feature to notify users when an item on the registry was
        purchased. It was through rigorous user testing that we were able to
        fine-tune this aspect of the design successfully.
      </CaseStudy1>
      {/* -----------------------
Key Takeaways----------------------- */}
      <CaseStudy1
        title="

Key Takeaways"
      >
        Starting with just a logo, I recognized that this project would be a
        significant undertaking. One of the key insights I gained was the
        critical importance of communication. I learned how to strategically
        facilitate meetings to maximize productivity and keep the client aligned
        with essential business objectives. Through our frequent interactions, I
        became more confident in presenting my designs and explaining my thought
        process. Additionally, I developed greater adaptability, particularly
        when we transitioned from a fully headless build to incorporating
        Tailwind components. This project not only honed my ability to
        communicate effectively but also strengthened my adaptability—skills I
        have continued to refine and develop.
      </CaseStudy1>
    </>
  );
};

export default Giftstart;
