const notFound = (req, res) => {
  if (res.status === 404) {
    res.status(404).send("This Route Was Not Found");
  }
};
module.exports = notFound;
