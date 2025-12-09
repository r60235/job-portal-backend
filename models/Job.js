const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Job title is required'],
    trim: true
  },
  company: {
    type: String,
    required: [true, 'Company name is required'],
    trim: true
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true
  },
  salary: {
    type: Number,
    required: [true, 'Salary is required'],
    min: [0, 'Salary must be a positive number']
  },
  jobType: {
    type: String,
    required: [true, 'Job type is required'],
    enum: {
      values: [
        'Full-time (On-site)',
        'Part-time (On-site)',
        'Full-time (Remote)',
        'Part-time (Remote)'
      ],
      message: '{VALUE} is not a valid job type'
    }
  },
  description: {
    type: String,
    required: [true, 'Job description is required']
  },
  qualifications: {
    type: String,
    required: [true, 'Qualifications are required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Job', jobSchema);
