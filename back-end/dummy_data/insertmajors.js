const mongoose = require('mongoose');

// Define the Major schema
const majorsSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  field: String,
});

// Create the Major model
const Major = mongoose.model('Major', majorsSchema);

// Insert majors into the collection
const majors = [
    { _id: new mongoose.Types.ObjectId(), field: 'Accounting' },
    { _id: new mongoose.Types.ObjectId(), field: 'Aerospace Engineering' },
    { _id: new mongoose.Types.ObjectId(), field: 'Anthropology' },
    { _id: new mongoose.Types.ObjectId(), field: 'Architecture' },
    { _id: new mongoose.Types.ObjectId(), field: 'Art History' },
    { _id: new mongoose.Types.ObjectId(), field: 'Biomedical Engineering' },
    { _id: new mongoose.Types.ObjectId(), field: 'Biology' },
    { _id: new mongoose.Types.ObjectId(), field: 'Business Administration' },
    { _id: new mongoose.Types.ObjectId(), field: 'Chemical Engineering' },
    { _id: new mongoose.Types.ObjectId(), field: 'Chemistry' },
    { _id: new mongoose.Types.ObjectId(), field: 'Civil Engineering' },
    { _id: new mongoose.Types.ObjectId(), field: 'Communications' },
    { _id: new mongoose.Types.ObjectId(), field: 'Computer Science' },
    { _id: new mongoose.Types.ObjectId(), field: 'Criminal Justice' },
    { _id: new mongoose.Types.ObjectId(), field: 'Economics' },
    { _id: new mongoose.Types.ObjectId(), field: 'Education' },
    { _id: new mongoose.Types.ObjectId(), field: 'Electrical Engineering' },
    { _id: new mongoose.Types.ObjectId(), field: 'English Literature' },
    { _id: new mongoose.Types.ObjectId(), field: 'Environmental Engineering' },
    { _id: new mongoose.Types.ObjectId(), field: 'Environmental Science' },
    { _id: new mongoose.Types.ObjectId(), field: 'Film Studies' },
    { _id: new mongoose.Types.ObjectId(), field: 'Finance' },
    { _id: new mongoose.Types.ObjectId(), field: 'Forensic Science' },
    { _id: new mongoose.Types.ObjectId(), field: 'Geology' },
    { _id: new mongoose.Types.ObjectId(), field: 'Graphic Design' },
    { _id: new mongoose.Types.ObjectId(), field: 'History' },
    { _id: new mongoose.Types.ObjectId(), field: 'Industrial Engineering' },
    { _id: new mongoose.Types.ObjectId(), field: 'International Relations' },
    { _id: new mongoose.Types.ObjectId(), field: 'Journalism' },
    { _id: new mongoose.Types.ObjectId(), field: 'Linguistics' },
    { _id: new mongoose.Types.ObjectId(), field: 'Materials Science and Engineering' },
    { _id: new mongoose.Types.ObjectId(), field: 'Mathematics' },
    { _id: new mongoose.Types.ObjectId(), field: 'Mechanical Engineering' },
    { _id: new mongoose.Types.ObjectId(), field: 'Music' },
    { _id: new mongoose.Types.ObjectId(), field: 'Nuclear Engineering' },
    { _id: new mongoose.Types.ObjectId(), field: 'Nutrition' },
    { _id: new mongoose.Types.ObjectId(), field: 'Petroleum Engineering' },
    { _id: new mongoose.Types.ObjectId(), field: 'Philosophy' },
    { _id: new mongoose.Types.ObjectId(), field: 'Physics' },
    { _id: new mongoose.Types.ObjectId(), field: 'Political Science' },
    { _id: new mongoose.Types.ObjectId(), field: 'Psychology' },
    { _id: new mongoose.Types.ObjectId(), field: 'Public Health' },
    { _id: new mongoose.Types.ObjectId(), field: 'Sociology' },
    { _id: new mongoose.Types.ObjectId(), field: 'Software Engineering' },
    { _id: new mongoose.Types.ObjectId(), field: 'Statistics' }
    ];

Major.insertMany(majors)
  .then(() => {
    console.log('Majors inserted successfully.');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error inserting majors:', error);
    mongoose.connection.close();
  });