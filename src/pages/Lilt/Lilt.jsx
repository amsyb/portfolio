import Summary from "../../components/Summary/Summary";
import TextBlock from "../../components/TextBlock/TextBlock";
import MediaBlockRight from "../../components/MediaBlockRight/MediaBlockRight";
import lilt from "../../assets/images/Lilt.png";
function Lilt() {
  return (
    <>
      <section className="casestudy">
        <h1>Lilt</h1>
        <Summary
          overview1="• Led end-to-end development and design by handling UX/UI design, front-end implementation, and back-end development to deliver a fully functional product."
          overview2="• Designed and developed responsive, user-centered interfaces."
          overview3="• Launced project on vercel with next steps to have it hosted on google app store"
          duration="Oct 2025"
          tools="Figma, React, Vercel"
          role="Full Stack Developer"
          button="View Site"
          buttonLink="https://drnks.vercel.app/"
        ></Summary>

        <TextBlock
          title="Insight"
          copy1="Born from the frustration of forgetting that obscure classic recipe, Lilt bridges the gap between professional knowledge and practical application. I created this resource to be what I needed when learning the craft; a reliable, instant reference that understands the pressure behind the bar.
"
        ></TextBlock>

        <div className="giftstart__takeaways">
          <TextBlock
            title="Key Features"
            copy1="• Sort, search and learn about classic cocktails, and their origins"
            copy2="• Most sites require enless scrolling to get to the recipe, Lilt gives you the recipe first"
          ></TextBlock>
        </div>

        <MediaBlockRight
          image={lilt}
          title="Final Product"
          description="These key features address the core problems we identified: fragmented systems, repetitive paperwork, and barriers to accessing support."
          button="View Site"
          buttonLink="https://drnks.vercel.app/"
        ></MediaBlockRight>
        <div className="giftstart__takeaways">
          <TextBlock
            title="Next Steps"
            copy1="• Expand drink availability"
            copy2="• Partner with local restaurants to include thier bar classics"
            copy3="• Enhanced Janice Capabilities: Train Janice to send follow-up emails to providers and generate summaries of findings"
            copy4="I loved working on a project that allowed me to utilize my past hospitality experience"
          ></TextBlock>
        </div>
      </section>
    </>
  );
}

export default Lilt;
