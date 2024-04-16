/* eslint-disable no-undef */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

// eslint-disable-next-line no-undef, no-unused-vars
module.exports = (phase) => {
  if (PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "tdiecan83",
        mongodb_password: "MNhxE33L1h5wsZDD",
        mongodb_clustername: "cluster0",
        mongodb_databasename: "myblogsite",
      },
    };
  }
  return {
    env: {
      mongodb_username: "tdiecan83",
      mongodb_password: "MNhxE33L1h5wsZDD",
      mongodb_clustername: "cluster0",
      mongodb_databasename: "myblogsite",
    },
  };
};
