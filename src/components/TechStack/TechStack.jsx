import StackIcon from "tech-stack-icons";

export default function InfiniteTechStackScroll() {
  const icons = [
    "aws",
    "docker",
    "react",
    "vercel",
    "netlify2",
    "figma",
    "hotjar",
    "js",
    "mysql",
    "nodejs",
    "python",
    "sass",
    "tailwindcss",
    "ps",
    "adobeillustrator",
    "html5",
    "analytics",
  ];

  const loopIcons = [...icons, ...icons];

  return (
    <div className="w-full overflow-hidden bg-black py-8">
      <div className="scroll-track">
        {loopIcons.map((icon, index) => (
          <div className="icon" key={index}>
            <StackIcon name={icon} style={{ width: "60px", height: "60px" }} />
          </div>
        ))}
      </div>

      <style jsx>{`
        .scroll-track {
          display: flex;
          flex-direction: row;
          align-items: center;
          animation: scroll 25s linear infinite;
        }

        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 80px;
          margin-right: 30px;
          opacity: 0.85;
          transition: opacity 0.3s ease;
        }

        .icon:hover {
          opacity: 1;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
