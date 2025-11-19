import Summary from "../../components/Summary/Summary";
import TextBlock from "../../components/TextBlock/TextBlock";
import MediaBlockRight from "../../components/MediaBlockRight/MediaBlockRight";
import MediaBlockLeft from "../../components/MediaBlock/MediaBlock";

import navigation from "../../assets/images/ng-navigation.png";
import finalProduct from "../../assets/images/ng-final.png";

function Doorwai() {
  return (
    <>
      <section className="casestudy">
        <h1>Doorwai</h1>
        <Summary
          overview1="• Google Technology 1st Place Winner"
          overview2="• Developed an AI-powered full-stack application to streamline access to homeless shelter resources for at-risk youth."
          overview3="• Leveraged AI to make automated phone calls to shelters, check bed availability, and pre-fill intake forms for users."
          duration="Nov 2025"
          tools="ElevenLabs AI Voice Tools, Google Auth, React"
          role="Full Stack Developer"
          button="View Git Repo"
          buttonLink="https://github.com/amsyb/social-impact-hackathon"
        ></Summary>

        <TextBlock
          title="Introduction"
          copy1="Youth experiencing homelessness often navigate a maze of disconnected agencies, each with its own intake process, requirements, and systems. The reality is that support does exist, but the path to accessing it is fragmented, overwhelming, and exhausting. 
Traditional intake systems aren’t designed with the lived realities of youth in mind. Instead, they force young people to repeatedly share the same information across multiple organizations, filling out form after form with no continuity, no shared data, and no sense of forward progress. This creates unnecessary friction, delays the support they need, and can even discourage them from seeking help altogether.
"
        ></TextBlock>

        <h2>Our Solution</h2>
        <MediaBlockLeft
          description="Doorwai an AI assistant, where youth can search for all available resources and complete one global intake form that travels with them eliminating repetitive data entry across providers.
"
          image={navigation}
        ></MediaBlockLeft>

        <MediaBlockRight
          image={finalProduct}
          title="Final Product"
          description="Giftstart expanded my previous employer’s market reach by establishing a strong brand and scalable UI framework. A highlight was the intuitive gift registry UI, which enhanced user experience and translated seamlessly into front-end components.
The project’s success led to industry recognition, earning an Innovative Design award at the Netty Awards.
"
          button="View Site"
          buttonLink="https://giftstart.ca/"
        ></MediaBlockRight>
        <div className="giftstart__takeaways">
          <TextBlock
            title="Next Steps"
            copy1="• Location-Based Directions: Integrate GPS to provide navigation to the next resource appointment"
            copy2="• Medical Information Integration: Add critical health data (allergies, medications) to the QR code for emergency situations "
            copy3="• Enhanced Janice Capabilities: Train Janice to send follow-up emails to providers and generate summaries of findings"
            copy4="This experience reinforced my passion for crafting intuitive user experiences while ensuring seamless front-end implementation, a skill set I’m eager to bring to my next role"
          ></TextBlock>
        </div>
      </section>
    </>
  );
}

export default Doorwai;
