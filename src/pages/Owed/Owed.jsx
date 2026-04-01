import React from "react";
import Summary from "../../components/Summary/Summary";
import TextBlock from "../../components/TextBlock/TextBlock";
import MediaBlockRight from "../../components/MediaBlockRight/MediaBlockRight";

function Owed() {
  return (
    <>
      <section>
        <h1> Owed</h1>
        <Summary
          overview1="• Wealthsimple Hackathon"
          overview2="• Built an AI-powered tool that helps workers understand their employment rights, calculate unpaid wages, and take action — privately and without legal expertise."
          overview3="• Designed around a core principle: AI surfaces information and options, but every consequential decision stays with the user."
          duration="March 2026"
          tools="React, Figma, Claude AI, Arcee AI"
          role="Full Stack Developer"
          button="View Git Repo"
          buttonLink=""
        ></Summary>
      </section>
    </>
  );
}

export default Owed;
