const usersData = require('./users')
const coursesData = require('./courses')
const studentcourses=require('./studentcourses')
const reviews=require("./reviews")
<<<<<<< HEAD
//const enrolledData=require('./enrolled_courses.js')
=======
const enrolledData=require('./enrolled_courses.js')
>>>>>>> 81c17f14a75a2aeabc6c51f3bbec1eb1e2ceded1

module.exports = {
    users: usersData,
    courses: coursesData,
    studentcourses:studentcourses,  
    reviews: reviews,
<<<<<<< HEAD
    // enrolled_courses: enrolledData
=======
    enrolled_courses: enrolledData
>>>>>>> 81c17f14a75a2aeabc6c51f3bbec1eb1e2ceded1
}