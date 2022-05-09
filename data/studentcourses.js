const mongoCollections = require("../config/mongoCollections");
const courses = mongoCollections.courses;
const studentcourses = mongoCollections.studentcourses;
const { ObjectId } = require("mongodb");
const upload = require("express-fileupload");
const { dropdowndata } = require("../config/mongoCollections");
const AppError = require("../middleware/appError");
const { ErrorType } = require("../middleware/enum");


async function gettagsdropdown(type){
    const dropdowndatacollection = await dropdowndata();
      const info = await dropdowndatacollection.find({}).toArray();
      if (!info) {
        throw new AppError("failed to get tags", ErrorType.not_found);
      }
      return info;

}
async function addcourse(coursename,studentusername,teacherusername,type){
    const scoursescollection = await studentcourses();
    let stud = {
        // _id: ObjectId, 
        coursename: coursename.trim(),
        studentusername: studentusername,
        teacherusername: teacherusername,
        type: type,
        assignments: []
        
    }
    const insertInfo = await scoursescollection.insertOne(stud);
    if (!insertInfo.acknowledged || !insertInfo.insertedId)
      throw 'Could not add';
    console.log( await`${coursename} created`)
    const newId = insertInfo.insertedId.toString();

    // const bad = await this.get(newId);
    // return bad;
    return newId
}



async function allCourses(){
    const coursescollection = await courses();
        const insertInfo = await coursescollection
          .find({"deployed": 0})
          .toArray();
        return insertInfo;
}

async function enrolledcourses(username){
    const coursescollection = await studentcourses();
        const enrolledinfo = await coursescollection
          .find({ $and: [{ "studentusername": username },{"type":"enrolled"}]},{ projection: { "course_id": 1, "coursename": 1, "_id": 0 } })
          .toArray();
        let enrolledcourses = []
        for( let x =0 ; x < enrolledinfo.length ; x++){
            enrolledcourses.push(await coursescollection.findOne({"course_id":enrolledinfo[x].course_id}))
        }
        console.log(enrolledcourses)
        return enrolledcourses;
}

async function recommend(username){
    const coursescollection= await courses()
    const studentcoursecollection= await studentcourses()
    const insertInfo = await coursescollection.find({}).toArray();
    const enrolledinfo = await studentcoursecollection.find({ $and: [{ "studentusername": username },{"type":"enrolled"}]},{ projection: { "coursename": 1, "_id": 0 } }).toArray();
    let recommendations

    for(i=0;i<enrolledinfo.length;i++){
        recommendations=[]
        // console.log(insertInfo[i].coursename)
        for(j=0;j<insertInfo.length;j++){
           
            if(insertInfo[j].coursename!==enrolledinfo[i].coursename){
                recommendations.push(insertInfo[j])
            }

        }
    }
    return recommendations
}
const getStudentcourseById = async(id) => {
    const enrolledCollection = await courses();
    const enrolledCourse = await enrolledCollection.findOne({_id: ObjectId(id)});
    return enrolledCourse;
}


const getCourseByNameAndCourse = async(courseName, username) => {
    const coursescoll = await courses();
    const course = await coursescoll.findOne({$and:[{"username": username}, {"coursename": courseName}]})
    //console.log('Course: ',course)
    return course;
}

const getVideoSequenceByUserAndCourse = async(courseName, username) => {
    // const enrolledCourseCollection = await enrolledcourses();
    let studentcourescollection = await studentcourses()
    const enrolledCourse = await studentcourescollection.findOne({$and:[{"studentusername": username}, {"coursename": courseName}]})
    return enrolledCourse.videos;
}
const updateVideoSequenceByUserAndCourse = async(coursename, username, seq) => {
    const enrolledCourseCollection = await studentcourses();
    const res = await enrolledCourseCollection.updateOne({$and:[{"coursename":coursename}, {"studentusername": username}]}, 
        {$set : {"videos": seq}});
        if(res.upsertedCount == 0){
            throw "Couldn't update video sequence"
        } 
}


// async function main(){
//     console.log(await recommend("user1"))
// }
// main()
module.exports={
    addcourse,
    allCourses,
    enrolledcourses,
    recommend,
    getStudentcourseById,
    getVideoSequenceByUserAndCourse,
    updateVideoSequenceByUserAndCourse,
    getCourseByNameAndCourse
}