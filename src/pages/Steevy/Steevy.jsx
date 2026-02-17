import Summary from "../../components/Summary/Summary";
import TextBlock from "../../components/TextBlock/TextBlock";
import MediaBlockRight from "../../components/MediaBlockRight/MediaBlockRight";
import steevy from "../../assets/images/Steevy.png";
function Steevy() {
  return (
    <>
      <section className="casestudy">
        <h1>Steevy</h1>
        <Summary
          overview1="• Architected and delivered a full-stack AI-powered interview preparation platform, handling all aspects from UX design through backend API integration."
          overview2="• Coaching system that analyzes resume content against job descriptions to generate personalized interview strategies."
          overview3="• Designed a streamlined, single-page interface that transforms complex inputs, resumes, and job descriptions into actionable interview preparation."
          duration="Feb 2026"
          tools="React, OpenAI API (OpenRouter), Vercel"
          role="Full Stack Developer & UX Designer"
          button="View Site"
          buttonLink="https://steevy.vercel.app/"
        ></Summary>

        <TextBlock
          title="Insight"
          copy1="Job interviews are high-stakes, but preparation is often scattered across generic advice articles, resume review sessions, and guesswork about what interviewers will ask. Steevy emerged from recognizing that candidates have all the raw materials they need, their own experience, and the job posting, but lack a fast, personalized way to connect the dots. This isn't another resume builder or generic question bank; it's an intelligent coach that understands your background and this specific opportunity, delivering targeted preparation that respects the urgency and anxiety of interview prep.
"
        ></TextBlock>

        <div className="giftstart__takeaways">
          <TextBlock
            title="Key Features"
            copy1="• Analyzes your resume against the specific job description to identify which experiences to emphasize, creating a personalized strategy rather than generic advice."
            copy2="• Choose between comprehensive interview notes or focused question generation, giving users control over their preparation approach.
"
            copy3="• Delivers results in clean, markdown-formatted output that's immediately usable, no fluff, no ads, just the preparation materials you need when interview anxiety is high and time is short.
"
          ></TextBlock>
        </div>

        <MediaBlockRight
          image={steevy}
          title="Final Product"
          description="Steevy transforms the scattered, stressful process of interview preparation into a focused, confidence-building experience. By synthesizing resume content with job requirements through AI analysis, it helps candidates walk into interviews knowing exactly which stories to tell and which questions to prepare for."
          button="View Site"
          buttonLink="https://steevy.vercel.app/"
        ></MediaBlockRight>
        <div className="giftstart__takeaways">
          <TextBlock
            title="Next Steps"
            copy1="• Add visual highlighting of skills from the job description that aren't reflected in the resume, with suggestions for how to address these gaps in the interview."
            copy2="• Enable users to save preparation sessions and refine their materials across multiple prep rounds."
            copy3="• Pull in company culture insights and recent news to help candidates ask informed questions and demonstrate genuine interest."
            copy4="I truly enjoyed building a tool that directly addresses and ensures I feel properly prepared before important interviews."
          ></TextBlock>
        </div>
      </section>
    </>
  );
}

export default Steevy;
