import React from "react";

const Summary = ({
  header,
  summaryTitle,
  summaryCopy,
  responsibilityTitle,
  responsibilities = [], // Expecting an array
  details,
}) => {
  return (
    <section className="summary">
      <h1>{header}</h1>
      {summaryTitle && <h2>{summaryTitle}</h2>}
      {summaryCopy && <p>{summaryCopy}</p>}

      {responsibilities.length > 0 && (
        <div>
          <h2>{responsibilityTitle}</h2>
          <ul>
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {details && <p>{details}</p>}
    </section>
  );
};

export default Summary;
