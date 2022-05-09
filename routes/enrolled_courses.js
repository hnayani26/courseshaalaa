const express = require('express');
const router = express.Router();
const data = require('../data');
const enrolledData = data.enrolled_courses;
const fs = require('fs');
var xss = require("xss");

<<<<<<< HEAD


// router.get('/videos/:id/:index', async(req, res) => {
//     const id = req.params.id;
//     const index = req.params.index;
//     const enrolledCourse = await enrolledData.getEnrolledCourseById(id);
//     const curSeq = enrolledCourse.videos;
//     const showButton = index-1 == curSeq;
//     const coursename = enrolledCourse.course_name;
//     const teacher = enrolledCourse.teacher;
//     const course = await enrolledData.getCourseByNameAndCourse(coursename, teacher);
//     const curVideo = course.videos[index-1];
//     const len = course.videos.length;
//     res.render('course/video', {enrolledCourseId: id, seq: curSeq, showButton: showButton, 
//       curVideo: curVideo, index: index, coursename: coursename, len: len})
//   });
  
//   router.post('/videoCompleted', async function(req,res){
//     console.log('button clicked')
//     let dt = req.body.btnn;
//     let vals = dt.split('#')
//     let enrolledCourseId = vals[0]
//     let curSeq = +vals[1]
//     let len = +vals[2]
//     curSeq = curSeq + 1
//     console.log('Reached here')
//     try {
//       if(curSeq <= len) {
//         await enrolledData.updateVideoSequenceByUserAndCourse(enrolledCourseId, curSeq);
//       }   
//     }
//     catch(e) {
//       console.log('Unable to update')
//     }
//    res.redirect('/enrolled_courses/'+enrolledCourseId)
//   })
  
//   router.get('enrolled/:id', async (req, res) => {
//     const id = req.params.id;
//     const enrolledCourse = await enrolledData.getEnrolledCourseById(id);
//     const teacher = enrolledCourse.teacher;
//     const courseName = enrolledCourse.course_name;
//     const course = await enrolledData.getCourseByNameAndCourse(courseName, teacher);
//     course.assignments = enrolledCourse.assignments;
//     // course.enrolledCourseId = id;
//     //console.log('Router Course: ',course)
//     res.render('course/course', {course: course});
// });

// router.get('enrolled/:id', async (req, res) => {
//     console.log('here')
//     const id = req.params.id;
//     //const username = req.session.user.username;
//     const username = 'aniket2499'
//     const enrolledCourse = await enrolledData.getEnrolledCourseById(id);
//     const teacher = enrolledCourse.teacher;
//     const courseName = enrolledCourse.course_name;
//     const course = await enrolledData.getCourseByNameAndCourse(courseName, teacher);
//     course.assignments = enrolledCourse.assignments;
//     const seq = await enrolledData.getVideoSequenceByUserAndCourse(courseName, username)
//     const videoLectures = course.videos
//     let tick=[];
//     for(let i=0;i<videoLectures.length;i++){
//         let j = {}
//         j['url'] = videoLectures[i]
//         j['tick'] = i < seq;
//         j['index'] = i + 1
//         j['disable'] = i > seq
//         j['enrolledCourseId'] = id;
//         tick.push(j)
//     }
//     course['tickedVideos'] = tick;
//     // course.enrolledCourseId = id;
//     //console.log('Router Course: ',course)
//     res.render('course/course', {course: course});
// });
=======
router.get('enrolled/:id', async (req, res) => {
    const id = xss(req.params.id);
    const enrolledCourse = await enrolledData.getEnrolledCourseById(id);
    const teacher = enrolledCourse.teacher;
    const courseName = enrolledCourse.course_name;
    const course = await enrolledData.getCourseByNameAndCourse(courseName, teacher);
    course.assignments = enrolledCourse.assignments;
    // course.enrolledCourseId = id;
    //console.log('Router Course: ',course)
    res.render('course/course', {course: course});
});

router.get('enrolled/:id', async (req, res) => {
    const id = xss(req.params.id);
    const enrolledCourse = await enrolledData.getEnrolledCourseById(id);
    const teacher = enrolledCourse.teacher;
    const courseName = enrolledCourse.course_name;
    const course = await enrolledData.getCourseByNameAndCourse(courseName, teacher);
    course.assignments = enrolledCourse.assignments;
    // course.enrolledCourseId = id;
    //console.log('Router Course: ',course)
    res.render('course/course', {course: course});
});
>>>>>>> 81c17f14a75a2aeabc6c51f3bbec1eb1e2ceded1


module.exports=router;