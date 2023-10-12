const jwt = require("jsonwebtoken");
const { Patient, Doctor } = require("../database");

const authProtection = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token fron header
      token = req.headers.authorization.split(" ")[1];
      console.log(token);

      //Verify token
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      console.log("hi decoded", decoded);
      //Get User from the token
      if (decoded.PatientId) {
        req.user = await Patient.findByPk(decoded.PatientId, {
          include: { all: true, nested: true },
        });
      } else {
        req.user = await Doctor.findByPk(decoded.DoctorId, {
          include: { all: true, nested: true },
        });
      }
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      res.send("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    res.send("Not authorized,no token ");
  }
};
module.exports = authProtection;
