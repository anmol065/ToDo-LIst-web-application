//jshint esversion:6

exports.taarikh = function() {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  const day = today.toLocaleDateString("en-US", options);

  return day;
}

exports.vaar = function() {
  const today = new Date();

  const options = {
    weekday: "long"
  };
  const day = today.toLocaleDateString("en-US", options);

  return day;
}
