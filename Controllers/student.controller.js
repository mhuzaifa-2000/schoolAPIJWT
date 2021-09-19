import Student from "../models/student.model";

module.exports.getAllStudents = (req, res) => {
  Student.find()
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json(err));
};

module.exports.addNewStudent = (req, res) => {
  const {
    name,
    class: className,
    fatherName,
    address,
    contactNo,
    medicalCondition,
    school,
  } = req.body;
  const newSchool = new Student({
    name: name,
    class: req.body.className,
    fatherName: fatherName,
    address: address,
    contactNo: contactNo,
    medicalCondition: medicalCondition,
    school: school,
  });
  newSchool
    .save()
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json(err));
};

module.exports.findByRollNoAndName = (req, res) => {
  const { name, rollNo } = req.body;
  Student.find({ name: name, rollNo: rollNo })
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
};

module.exports.deleteStudent = (req, res) => {
  const { id } = req.body;
  Student.deleteOne({ _id: id })
    .then(() => res.json("Student Deleted"))
    .catch((err) => res.status(400).json(err));
};
