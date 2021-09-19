const School = require("../models/school.model");

module.exports.findById = (req, res) => {
  const id = req.params.id;
  School.findOne({ _id: id })
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json(err));
};

module.exports.addNewSchool = (req, res) => {
  const { name: schoolName, address, contactNo, medicalCondition } = req.body;
  const newSchool = new School({
    name: schoolName,
    address: address,
    contactNo: contactNo,
    medicalCondition: medicalCondition,
  });
  newSchool
    .save()
    .then((response) => {
      var token = jwt.sign({ _id: response._id }, process.env.SECRET_TOKEN);
      res.header("auth-token", token).send(token);
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.updateSchool = (req, res) => {
  const {
    id,
    name: schoolName,
    address,
    contactNo,
    medicalCondition,
  } = req.body;
  School.updateOne(
    { _id: id },
    {
      $set: {
        name: schoolName,
        address: address,
        contactNo: contactNo,
        medicalCondition: medicalCondition,
      },
    }
  )
    .then((response) => {
      res.json(response);
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.deleteSchool = (req, res) => {
  const { id } = req.body;
  School.remove({ _id: id })
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json(err));
};
