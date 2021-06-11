exports.userProfile = (req, res) => {
  return res.json({ message: "Protected content!" });
};

exports.userInfo = (req, res) => {
  const { page_number, page_length } = req.query;
  console.log(req.query);
  // res.send(req.query);
  return res.json({ message: "userinfo" });
};
