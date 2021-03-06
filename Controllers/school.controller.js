import School from "../models/school.model";
import jwt from "jsonwebtoken";

const getAllSchools = (req, res) => {
  School.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
};
const findById = (req, res) => {
  const id = req.params.id;
  School.findOne({ _id: id })
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json(err));
};

const addNewSchool = (req, res) => {
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
      console.log(token);
      res.header("auth-token", token).send(token);
    })
    .catch((err) => res.status(400).json(err));
};

const updateSchool = (req, res) => {
  const id = req.params.id;
  const toUpdate = req.body;
  School.updateOne(
    { _id: id },
    {
      $set: {
        ...toUpdate,
      },
    }
  )
    .then((response) => {
      res.json(response);
    })
    .catch((err) => res.status(400).json(err));
};

const deleteSchool = (req, res) => {
  const { id } = req.body;
  School.remove({ _id: id })
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json(err));
};

export { findById, addNewSchool, updateSchool, deleteSchool, getAllSchools };
