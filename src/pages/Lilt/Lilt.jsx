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
          overview1="• Full-Stack Ownership: Architected and executed the complete product lifecycle, from initial UX research and interface design through front-end development and back-end infrastructure, delivering a production-ready application as sole developer and designer."
          overview2="• Crafted an intuitive, mobile-first interface that prioritizes accessibility and speed, ensuring bartenders can find critical information in seconds, even during peak service hours."
          overview3="• Successfully launched on Vercel with optimized performance metrics, with a strategic roadmap for Google Play Store distribution to expand reach across mobile platforms."
          duration="Oct 2025"
          tools="Figma, React, Vercel"
          role="Full Stack Developer"
          button="View Site"
          buttonLink="https://drnks.vercel.app/"
        ></Summary>

        <TextBlock
          title="Insight"
          copy1="Born from the real-world friction of forgetting specs mid-service, drnks transforms institutional bartending knowledge into an instant, reliable resource. This isn't just another recipe app; it's a solution to the cognitive load problem every bartender faces: maintaining encyclopedic drink knowledge while managing the chaos of a busy bar. I built the tool I needed when I was learning the craft, one that respects your time, understands the pressure, and delivers answers without the noise.
"
        ></TextBlock>

        <div className="giftstart__takeaways">
          <TextBlock
            title="Key Features"
            copy1="• Intelligent Discovery: Filter by base spirit and explore an expertly curated library of classic cocktails, complete with historical context and origin stories that deepen your understanding of the craft."
            copy2="• Unlike traditional cocktail sites that bury recipes beneath ads and lengthy narratives, drnks respects the urgency of your search—delivering the recipe immediately, with context available when you want it, not when we force it on you."
            cpy3="• Built for real-world conditions where every second counts and precision matters."
          ></TextBlock>
        </div>

        <MediaBlockRight
          image={lilt}
          title="Final Product"
          description="drnks is a dynamic tool that evolves with the industry. Designed to support both the seasoned professional navigating a Friday night rush and the enthusiastic apprentice learning the ropes, it delivers clarity, speed, and consistency to every pour. By blending operational insight with intuitive design, drnks helps venues elevate the craft of service at scale."
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
