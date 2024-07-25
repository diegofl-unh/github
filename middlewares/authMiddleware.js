const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res
        .status(401)
        .send({ message: "Autorizacion fallida", success: false });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .send({ message: "Autorizacion fallida", success: false });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .send({ message: "Autorizacion fallida", success: false });
      } else {
        req.body.userId = decoded.id;
        next();
      }
    });
  } catch (error) {
    return res
      .status(401)
      .send({ message: "Autorizacion fallida", success: false });
  }
};
