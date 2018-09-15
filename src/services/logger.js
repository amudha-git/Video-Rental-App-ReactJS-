import Raven from "raven-js";
function init() {
  Raven.config(
    "https://654518baf533482f9df59bd672eab1cf@sentry.io/1281537"
  ).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log
};
