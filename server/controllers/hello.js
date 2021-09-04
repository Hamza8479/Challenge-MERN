exports.hello = (req, res) => {
  res.json({
    hello: ["Hamza", "adeel"],
  });
  // res.send("Hello");
};
