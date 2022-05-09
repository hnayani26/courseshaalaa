const connection = require('./config/mongoConnection');
const mongoCollections = require("./config/mongoCollections");
const courses=require('./data/courses');
const studentcourses = mongoCollections.studentcourses;

const studen=require('./data/studentcourses')
const reviews= require('./data/reviews')
const users= require('./data/users')

const { ObjectId } = require('mongodb');


const main = async () => {
    const db = await connection.connectToDb();
    await db.dropDatabase()
try{
    console.log(await studen.addcourse("Web","Sahil","user3","enrolled"))
    console.log(await studen.addcourse("Data","Sahil","user3","not_enrolled"))
    console.log(await studen.addcourse("Structures","Kevin","user3","not_enrolled"))
    console.log(await studen.addcourse("Web 2","Hariom","user3","not_enrolled"))
    console.log(await studen.addcourse("Web Mining","Hariom","user3","not_enrolled"))
    console.log(await studen.addcourse("TCP","Aniket","user3","not_enrolled"))
    console.log(await studen.addcourse("IP","Aniket","user3","not_enrolled"))
    console.log(await studen.addcourse("Java","Vanshika","user3","not_enrolled"))

}
catch(e){
    console.log(e)
}

try{
    console.log(await courses.addcourse("Web tec","Sahil","user3","enrolled"))
    // console.log(await studen.addcourse("Data","Sahil","user3","not_enrolled"))
    // console.log(await studen.addcourse("Structures","Kevin","user3","not_enrolled"))
    // console.log(await studen.addcourse("Web 2","Hariom","user3","not_enrolled"))
    // console.log(await studen.addcourse("Web Mining","Hariom","user3","not_enrolled"))
    // console.log(await studen.addcourse("TCP","Aniket","user3","not_enrolled"))
    // console.log(await studen.addcourse("IP","Aniket","user3","not_enrolled"))
    // console.log(await studen.addcourse("Java","Vanshika","user3","not_enrolled"))

}
catch(e){
    console.log(e)
}





console.log(await "---------------------------------------------------------------------------")
}
main()