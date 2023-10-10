const { Patient } = require("../database/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


module.exports.register = async (req, res) => {
    try {
        bcrypt.hash(req.body.password, 10)
            .then((hassedPass) => {
                console.log(hassedPass);
                Patient.create({
                    ...req.body,
                    password: hassedPass
                })
                    .then((result) =>
                        res.status(201).json({
                            message: "User Created Successfully",
                            result,
                        })
                    )
                    .catch((error) => {
                        res.status(500).send({
                            message: "Error creating User",
                            error,
                        });
                    });
            });
    } catch (error) {
        res.status(500).send({
            message: "Password was not hashed successfully",
            error,
        });
    }
};


module.exports.login = async (req, res) => {
    Patient.findOne({
        where: {
            email: req.body.email,
        },
        })
        .then((Patient) => {
            bcrypt
                .compare(req.body.password, Patient.password)
                .then((passChedk) => {
                    if (!passChedk) {
                        res.status(400).send({
                            message: "Passwords does not match",
                            error,
                        });
                    }
                    const Token = jwt.sign(
                        {
                            PatientId: Patient.id,
                            email: Patient.email,
                        },
                        process.env.SECRET_KEY,
                        { expiresIn: "24h" }
                    );
                    res.status(200).json({
                        message: "Login Successfull",
                        PatientId: Patient.id,
                        token: Token
                    });
                })
                .catch((error) => {
                    res.status(400).send({
                        message: "Passwords does not match",
                        error,
                    });
                });
        })
        .catch((error) => {
            res.status(404).send({
                message: "Email not found",
                error,
            });
        });
};




