import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      enum: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    },
    rollNo: {
      type: Number,
      unique: true,
      required: true,
    },
    fatherName: {
      type: String,
    },
    address: {
      type: String,
    },
    contactNo: {
      type: String,
    },
    medicalCondition: {
      type: String,
    },
    school: {
      type: Schema.Types.ObjectId,
      ref: "School",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

autoIncrement.initialize(mongoose.connection);
studentSchema.plugin(autoIncrement.plugin, {
  model: "Student",
  field: "rollNo",
  startAt: 101,
  incrementBy: 1,
});
const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
