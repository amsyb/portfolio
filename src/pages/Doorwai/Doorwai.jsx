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
          copy1="The reality is that youth experiencing homelessness face fragmented intake processes across disconnected agencies."
          copy2="The problem we solve: Traditional intake systems force youth to complete repetitive forms at each agency with no data portability."
        ></TextBlock>

        <h2>Our Solution</h2>
        <MediaBlockLeft
          description="Doorwai an AI assistant, where youth can search for all available resources and complete one global intake form that travels with them eliminating repetitive data entry across providers.
"
          image={navigation}
        ></MediaBlockLeft>

        <div className="giftstart__takeaways">
          <MediaBlockRight
            image={finalProduct}
            title="Final Product"
            description="Giftstart expanded my previous employer’s market reach by establishing a strong brand and scalable UI framework. A highlight was the intuitive gift registry UI, which enhanced user experience and translated seamlessly into front-end components.
The project’s success led to industry recognition, earning an Innovative Design award at the Netty Awards.
"
            button="View Site"
            buttonLink="https://nickgraham.com/"
          ></MediaBlockRight>
        </div>
        <TextBlock
          title="Next Steps"
          copy1="• Location-Based Directions: Integrate GPS to provide navigation to the next resource appointment "
          copy2="• Medical Information Integration: Add critical health data (allergies, medications) to the QR code for emergency situations"
          copy3="• Enhanced Janice Capabilities: Train Janice to send follow-up emails to providers and generate summaries of findings"
        ></TextBlock>
      </section>
    </>
  );
}

export default Doorwai;
