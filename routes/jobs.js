const express = require('express');
const router = express.Router();
const {
  getJobs,
  getJobById,
  createJob,
  deleteJob
} = require('../controllers/jobController');

// GET /api/jobs - Get all jobs
router.get('/', getJobs);

// GET /api/jobs/:id - Get job by ID
router.get('/:id', getJobById);

// POST /api/jobs - Create new job
router.post('/', createJob);

// DELETE /api/jobs/:id - Delete job
router.delete('/:id', deleteJob);

module.exports = router;
