# Intern House - Backend API

A RESTful API backend for the job portal application. Built with Express.js, Node.js, and MongoDB, providing endpoints for job management with full CRUD operations, data validation, and error handling.

---

## Demo Link

[Live API](https://job-portal-backend-5ybs.vercel.app/)

---

## Quick Start

```bash
git clone https://github.com/r60235/job-portal-backend.git
cd job-portal-backend
npm install
npm run dev
```

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- CORS
- dotenv

## Demo Video

Watch a walkthrough (3 minutes) of all API endpoints and features:
[Explaination Video Link](https://drive.google.com/file/d/1m8FEAdf9w7ml7wzSow6bc0311KSPTdRp/view?usp=drive_link) 

## Features

**Job Management**
- Create, read, and delete job postings
- Data validation with Mongoose schemas
- Enum constraints for job types
- Required field validation

**Database**
- MongoDB with Mongoose ODM
- Job schema with comprehensive validation
- Sample seed data included

**API Design**
- RESTful endpoints following standard conventions
- Proper HTTP status codes (200, 201, 400, 404, 500)
- JSON responses with error handling
- CORS configuration for cross-origin requests

**Error Handling**
- Global error middleware
- Validation error responses
- Database error handling
- 404 route handling


## Available Scripts

```bash
npm start       # Start the server
npm run dev     # Start development server
npm run seed    # Seed database with sample data
```

## Project Structure

```
backend/
├── api/
│   └── index.js          # Vercel serverless entry point
├── config/
│   └── db.js            # MongoDB connection
├── controllers/
│   └── jobController.js # Job CRUD operations
├── models/
│   └── Job.js           # Job schema and model
├── routes/
│   └── jobs.js          # Job API routes
├── server.js            # Local development server
├── seed.js              # Database seeding script
├── vercel.json          # Vercel deployment config
└── package.json
```

## API Reference

### **GET /api/jobs**
List all job postings

**Sample Response:**
```json
[
  {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "title": "Software Engineer",
    "company": "TechCorp",
    "location": "San Francisco, CA",
    "salary": 120000,
    "jobType": "Full-time (On-site)",
    "description": "Develop and maintain scalable web applications...",
    "qualifications": "Bachelor's degree in Computer Science...",
    "createdAt": "2023-09-06T10:30:00.000Z"
  }
]
```

### **GET /api/jobs/:id**
Get details for one job posting

**Sample Response:**
```json
{
  "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
  "title": "Software Engineer",
  "company": "TechCorp",
  "location": "San Francisco, CA",
  "salary": 120000,
  "jobType": "Full-time (On-site)",
  "description": "Develop and maintain scalable web applications. Collaborate with cross-functional teams.",
  "qualifications": "Bachelor's degree in Computer Science or related field.\n3+ years of experience in full-stack development.",
  "createdAt": "2023-09-06T10:30:00.000Z"
}
```

### **POST /api/jobs**
Create a new job posting

**Request Body:**
```json
{
  "title": "Frontend Developer",
  "company": "StartupXYZ",
  "location": "Austin, TX",
  "salary": 85000,
  "jobType": "Full-time (Remote)",
  "description": "Build responsive web applications using React...",
  "qualifications": "3+ years React experience\nStrong CSS skills"
}
```

**Sample Response:**
```json
{
  "_id": "64f8a1b2c3d4e5f6a7b8c9d1",
  "title": "Frontend Developer",
  "company": "StartupXYZ",
  "location": "Austin, TX",
  "salary": 85000,
  "jobType": "Full-time (Remote)",
  "description": "Build responsive web applications using React...",
  "qualifications": "3+ years React experience\nStrong CSS skills",
  "createdAt": "2023-09-06T11:15:00.000Z"
}
```

### **DELETE /api/jobs/:id**
Delete a job posting

**Sample Response:**
```json
{
  "message": "Job deleted successfully"
}
```

## Data Model

### Job Schema

```javascript
{
  title: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  salary: {
    type: Number,
    required: true,
    min: 0
  },
  jobType: {
    type: String,
    required: true,
    enum: [
      'Full-time (On-site)',
      'Part-time (On-site)',
      'Full-time (Remote)',
      'Part-time (Remote)'
    ]
  },
  description: {
    type: String,
    required: true
  },
  qualifications: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}
```

## Database Setup

### MongoDB Atlas (Cloud)

1. Create MongoDB Atlas account
2. Create a cluster
3. Get connection string
4. Add to `MONGODB_URI` environment variable
5. Whitelist IP addresses (0.0.0.0/0 for Vercel)


## Error Handling

The API returns appropriate HTTP status codes:

- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors)
- `404` - Not Found
- `500` - Internal Server Error

**Error Response Format:**
```json
{
  "message": "Error description",
  "error": "Detailed error (development only)"
}
```

## Contact

For bugs or feature requests, please reach out to rishaabh105@gmail.com