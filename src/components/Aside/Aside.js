import React from "react";
import PropTypes from "prop-types";

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

Aside.propTypes = {
  film: PropTypes.object
}
