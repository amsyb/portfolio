import Summary from "../../components/Summary/Summary";
import TextBlock from "../../components/TextBlock/TextBlock";
import MediaBlockRight from "../../components/MediaBlockRight/MediaBlockRight";
import MediaBlockLeft from "../../components/MediaBlock/MediaBlock";

import navigation from "../../assets/images/ng-navigation.png";
import finalProduct from "../../assets/images/ng-final.png";

function NickGraham() {
  return (
    <>
      <section className="casestudy">
        <h1>Nick Graham</h1>
        <Summary
          overview1="Redesigned Nick Graham’s homepage to better showcase their full product catalog while ensuring the client could easily update content after launch. Focused on optimizing navigation, enhancing product visibility, and improving the overall user experience through structured UI updates and micro-interactions."
          duration="July 2023 - Oct 2023"
          tools="BigCommerce, Figma, Photoshop"
          role="UI Designer"
          button="View Site"
          buttonLink="https://nickgraham.com/"
        ></Summary>

        <TextBlock
          title="Introduction"
          copy1="Nick Graham’s existing homepage functioned more as a landing page than a fully developed e-commerce experience. They needed a brand refresh to reignite customer interest in their clothing line, along with a homepage that displayed their entire product range beyond just t-shirts. Given that a new product photoshoot was scheduled after launch, it was essential to create a flexible, easily editable design.
Prior to our first meeting, I conducted a site audit and identified key areas for improvement based on industry best practices. My primary goals were to revamp navigation, refine homepage content, introduce structured product displays, and enhance the footer for a cohesive, engaging experience.
"
        ></TextBlock>

        <h2>The Process</h2>
        <MediaBlockLeft
          title="Navigation Overhaul"
          description="The original navigation lacked hierarchy, making it difficult for users to find products. It also omitted a search function and shopping cart—both essential for a seamless e-commerce experience. To address this, we;
introduced a clear navigation structure with distinct product categories,
designed icons for auxiliary navigation, account pages, and search,
implemented an expandable full-width search bar with guided input and
added a collapsing navigation bar to increase product visibility while scrolling.
"
          image={navigation}
        ></MediaBlockLeft>
        <TextBlock
          title="Enhancing Product Visibility"
          copy1="The previous homepage focused solely on t-shirts, neglecting other key offerings like shoes and accessories. We introduced;
full-height product category sections to highlight the entire catalog,
user-generated Instagram content to provide social proof,
an About Us section to strengthen brand identity,
a Coming Soon feature to generate anticipation for new releases.
"
        ></TextBlock>
        {/* <MediaBlockLeft
          title="Footer Navigation"
          description="The original footer lacked structure and didn’t align with the brand’s vibrant aesthetic. Therefore I
moved the newsletter signup to a prominent call-to-action banner, increasing visibility and conversions. Additionally, I
enhanced the footer’s design with a fabric-textured background to reinforce the brand’s identity.
"
          image={visualIdentity}
        ></MediaBlockLeft> */}
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
          title="Key Takeaways"
          copy1="• Implemented structured navigation, interactive elements, and an improved search experience, which aligns with front-end work involving user flows, accessibility, and performance optimizations"
          copy2="• Designed a homepage structure that allowed the client to easily update content post-launch, demonstrating an understanding of modular and reusable UI components—similar to front-end development best practices."
          copy3="• Worked closely with developers to ensure design feasibility, scalability across devices, and seamless implementation—skills that directly translate to working on a front-end engineering team."
          copy4="This project reinforced my passion for crafting thoughtful, adaptable UI solutions that enhance both business goals and user experience while strengthening my front-end development skills."
        ></TextBlock>
      </section>
    </>
  );
}

export default NickGraham;
