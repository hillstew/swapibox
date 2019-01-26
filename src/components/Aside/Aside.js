import React from "react";

export const Aside = props => {
  const { opening_crawl, title, release_date } = props.film;
  return (
    <aside className="aside">
      <p className="scrolling-text">
        {opening_crawl}
        <span>{title}</span>
        <span>{release_date}</span>
      </p>
    </aside>
  );
};
