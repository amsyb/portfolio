import Summary from "../../components/Summary/Summary";
import TextBlock from "../../components/TextBlock/TextBlock";
import MediaBlockRight from "../../components/MediaBlockRight/MediaBlockRight";
import dwfp from "../../assets/images/dw-fp.png";

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
          title="Overview"
          copy1="Youth experiencing homelessness often navigate a maze of disconnected agencies, each with its own intake process, requirements, and systems. The reality is that support does exist, but the path to accessing it is fragmented, overwhelming, and exhausting. 
Traditional intake systems aren’t designed with the lived realities of youth in mind. Instead, they force young people to repeatedly share the same information across multiple organizations, filling out form after form with no continuity, no shared data, and no sense of forward progress. This creates unnecessary friction, delays the support they need, and can even discourage them from seeking help altogether.
"
        ></TextBlock>

        <div className="giftstart__takeaways">
          <TextBlock
            title="Key Features"
            copy1="• AI-Powered Resource Discovery: Doorwai is an AI assistant that simplifies resource discovery for youth experiencing homelessness. Users search for resources through a real-time search engine, and a trained AI returns tailored recommendations. If they choose to reach out, our AI places calls on their behalf using ElevenLabs voice synthesis, with full transcripts provided for easy reference."
            copy2="• Universal Intake Form: We developed a universal intake form where users enter their information once, with clear explanations for each field. This form auto-populates other required intake documents and generates a QR code for easy sharing with service providers."
          ></TextBlock>
        </div>

        <MediaBlockRight
          image={dwfp}
          title="Final Product"
          description="These key features address the core problems we identified: fragmented systems, repetitive paperwork, and barriers to accessing support."
          button="View Github"
          buttonLink="https://github.com/amsyb/social-impact-hackathon"
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
