module.exports.validateStudent = (req, res, next) => {
  const { name, class: className, school } = req.body;
  if (!name)
    res.status(400).json({
      error: {
        message: "Name missing",
      },
    });
  if (!className)
    res.status(400).json({
      error: {
        message: "Class missing",
      },
    });
  if (!school)
    res.status(400).json({
      error: {
        message: "School missing",
      },
    });
  next();
};

module.exports.validateFindByRollAndName = (req, res, next) => {
  const { name, rollNo } = req.body;
  if (!name)
    res.status(400).json({
      error: {
        message: "Name missing",
      },
    });
  if (!rollNo)
    res.status(400).json({
      error: {
        message: "Roll Number missing",
      },
    });
  next();
};

module.exports.validateDeleteStudent = (req, res, next) => {
  const { id } = req.body;
  if (!id)
    res.status(400).json({
      error: {
        message: "ID missing",
      },
    });
};
