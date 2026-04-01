import React from "react";
import Summary from "../../components/Summary/Summary";
import TextBlock from "../../components/TextBlock/TextBlock";
import OwedDemo from "../../assets/videos/Owed.mp4";
import MediaBlockRight from "../../components/MediaBlockRight/MediaBlockRight";

function Owed() {
  return (
    <>
      <section className="casestudy">
        <h1> Owed</h1>
        <Summary
          overview1="• Wealthsimple Hackathon"
          overview2="• Built an AI-powered tool that helps workers understand their employment rights, calculate unpaid wages, and take action, privately and without legal expertise."
          overview3="• Designed around a core principle: AI surfaces information and options, but every consequential decision stays with the user."
          duration="March 2026"
          tools="React, Figma, Claude AI, Arcee AI"
          role="Full Stack Developer"
          button="View Git Repo"
          buttonLink="https://github.com/amsyb/owed"
        ></Summary>

        <TextBlock
          title="Overview"
          copy1="As a young adult entering the workforce, understanding your employment rights isn't straightforward. Concerns about unfair wages, unpaid overtime, or wrongful termination are common, but the process for addressing them is fragmented, intimidating, and difficult to navigate without legal knowledge or professional support.
There's no simple, accessible, one-stop tool for workers facing these situations. Most resources are buried in government websites, written in legal language, or require contacting an employer or agency before a worker is even sure of their rights. Owed was built to change that, making the process simple, private, and actionable."
        ></TextBlock>
        <div className="giftstart__takeaways">
          <TextBlock
            title="Key Features"
            copy1="• AI Navigator: Users describe their workplace situation in plain language and can upload relevant documents like termination letters or employment contracts. The Navigator provides a clear, plain-language review of their rights and options, without contacting employers or government agencies. Everything stays private, so users can safely explore their situation before deciding on next steps."
            copy2="• Wage Calculator: The Wage Calculator helps users determine exactly what they're owed, including minimum wage, overtime, vacation pay, and public holiday entitlements. Results can be saved or exported, giving users a documented record they can use if they choose to escalate."
            copy3="• Your Options: A four-step guide that walks users through understanding their rights, documenting their case, sending a demand letter, and, if needed, filing a formal complaint with the Ministry of Labour. Each step is clearly explained, but every action remains the user's choice."
          ></TextBlock>
        </div>
        <MediaBlockRight
          video={OwedDemo}
          title="Video Walkthrough"
          description="Owed brings together rights information, wage calculations, and escalation pathways in one place, reducing the cognitive load workers face when navigating an unfamiliar system."
        ></MediaBlockRight>

        <div className="giftstart__takeaways">
          <TextBlock
            title="Critical Design Decision: Human Control"
            copy1="The decision to take formal action, whether sending a demand letter or filing a complaint with the Ministry of Labour, must always remain with the user. AI can surface rights, calculate entitlements, and outline options, but it cannot fully account for someone's personal circumstances: their immigration status, job security fears, financial situation, or the power dynamics in their workplace."
            copy2="Getting this wrong doesn't just mean a bad recommendation, it could cost someone their job or their safety. The AI guides. The human decides. This principle shaped every product decision we made."
          ></TextBlock>
        </div>

        <TextBlock
          title="Next Steps"
          copy1="• Jurisdiction Expansion: Extend support beyond Ontario to cover federal workers and other provinces, each with their own employment standards"
          copy2="• Document Generation: Allow users to generate and download customized demand letters directly from the platform"
          copy3="• Anonymous Community Q&A: Let workers see anonymized situations similar to their own, reducing isolation and helping people recognize when their experience isn't unique"
          copy4="This project reinforced my belief that the most impactful products handle real cognitive work on behalf of users, surfacing complexity so people can focus on making informed decisions, not navigating a system that was never designed for them."
        ></TextBlock>
      </section>
    </>
  );
}

export default Owed;
