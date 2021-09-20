import Student from "../models/student.model";

const getAllStudents = (req, res) => {
  Student.find()
    .populate("school")
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json(err));
};

const addNewStudent = (req, res) => {
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

const findByRollNoAndName = (req, res) => {
  const { name, rollNo } = req.body;
  if (rollNo)
    Student.find({ rollNo: rollNo })
      .populate("school")
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json(err));
  else {
    Student.find({ name: { $regex: name, $options: "i" } })
      .populate("school")
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json(err));
  }
};

const deleteStudent = (req, res) => {
  const { id } = req.body;
  Student.deleteOne({ _id: id })
    .then(() => res.json("Student Deleted"))
    .catch((err) => res.status(400).json(err));
};

export { getAllStudents, addNewStudent, findByRollNoAndName, deleteStudent };
