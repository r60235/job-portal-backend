const mongoose = require('mongoose');
const Job = require('./models/Job');
require('dotenv').config();

const sampleJobs = [
  {
    title: 'Software Engineer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    salary: 120000,
    jobType: 'Full-time (On-site)',
    description: 'Develop and maintain scalable web applications. Collaborate with cross-functional teams.',
    qualifications: "Bachelor's degree in Computer Science or related field.\n3+ years of experience in full-stack development."
  },
  {
    title: 'Content Writer',
    company: 'Creative Ink',
    location: 'Austin, TX',
    salary: 55000,
    jobType: 'Part-time (Remote)',
    description: 'Create engaging content for blogs, social media, and marketing materials.',
    qualifications: "Excellent writing and communication skills.\n2+ years of content writing experience.\nFamiliarity with SEO best practices."
  },
  {
    title: 'Data Analyst',
    company: 'Data Insights Inc.',
    location: 'Chicago, IL',
    salary: 85000,
    jobType: 'Full-time (On-site)',
    description: 'Analyze complex datasets to provide actionable business insights.',
    qualifications: "Bachelor's degree in Statistics, Mathematics, or related field.\nProficiency in SQL and Python.\nExperience with data visualization tools."
  },
  {
    title: 'UI/UX Designer',
    company: 'Design Studio',
    location: 'Seattle, WA',
    salary: 70000,
    jobType: 'Part-time (On-site)',
    description: 'Design intuitive user interfaces and create exceptional user experiences.',
    qualifications: "Portfolio demonstrating UI/UX design skills.\n3+ years of experience with design tools like Figma or Adobe XD.\nUnderstanding of user-centered design principles."
  },
  {
    title: 'DevOps Engineer',
    company: 'CloudTech',
    location: 'Remote',
    salary: 110000,
    jobType: 'Full-time (Remote)',
    description: 'Manage cloud infrastructure and implement CI/CD pipelines.',
    qualifications: "Experience with AWS, Azure, or Google Cloud.\nProficiency in Docker and Kubernetes.\nStrong scripting skills in Python or Bash."
  },
  {
    title: 'Customer Support Representative',
    company: 'Supportly',
    location: 'Remote',
    salary: 45000,
    jobType: 'Full-time (Remote)',
    description: 'Provide excellent customer service and resolve customer inquiries.',
    qualifications: "Strong communication and problem-solving skills.\n1+ years of customer service experience.\nAbility to work in a fast-paced environment."
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    await Job.deleteMany({});
    console.log('Cleared existing jobs');

    await Job.insertMany(sampleJobs);
    console.log('Sample jobs inserted successfully');

    mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
