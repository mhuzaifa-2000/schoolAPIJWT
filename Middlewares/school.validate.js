const validateNewSchool = (req, res, next) => {
  const { name: schoolName, address, contactNo, medicalCondition } = req.body;
  if (!schoolName)
    res.status(400).json({
      error: {
        message: "School name missing",
      },
    });
  if (!address)
    res.status(400).json({
      error: {
        message: "Address missing",
      },
    });
  if (!contactNo)
    res.status(400).json({
      error: {
        message: "Contact number missing",
      },
    });

  next();
};

const validateUpdateSchool = (req, res, next) => {
  const { id } = req.params;
  if (!id)
    res.status(400).json({
      error: {
        message: "ID missing",
      },
    });

  next();
};

const validateDeleteSchool = (req, res, next) => {
  const { id } = req.body;
  if (!id)
    res.status(400).json({
      error: {
        message: "ID missing",
      },
    });
  next();
};

export { validateNewSchool, validateUpdateSchool, validateDeleteSchool };
