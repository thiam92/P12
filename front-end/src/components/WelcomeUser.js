import React from "react";
import PropTypes from "prop-types";

/**
 * Returns a React component displays the message on top dashboard
 * @param {string}
 * @returns a React Components
 */
const WelcomeUser = ({ name }) => {
  return (
    <section className="welcome">
      <h1>
        Bonjour <span>{name}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  );
};

export default WelcomeUser;

WelcomeUser.propTypes = {
  name: PropTypes.string,
};
