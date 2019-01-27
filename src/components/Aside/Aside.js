import React from "react";

export const Aside = props => {
  const { openingCrawl, title, year } = props.film;
  return (
    <aside className="aside">
      <p className="scrolling-text">{openingCrawl}</p>
      <p className="scrolling-text">{title}</p>
      <p className="scrolling-text">{year}</p>
    </aside>
  );
};
