const isAdmin = (req, res, next) => {
  try {
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).send({ errors: [{ msg: "Admin access required" }] });
    }
    next();
  } catch (error) {
    return res.status(500).send({ errors: [{ msg: "Server error (admin check)" }] });
  }
};

module.exports = isAdmin;


