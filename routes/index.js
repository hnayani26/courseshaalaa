const loginsignup = require('./loginsignup')
const mainpage = require('./mainpage')
const gradespage = require('./gradespage')
const student=require('./student')
const enrolledRoutes = require('./enrolled_courses')

const constructorMethod = (app) => {

    app.use('/login',loginsignup);

    app.use('/mainpage',mainpage);

    app.use('/grades',gradespage);

    app.use('/student',student);

<<<<<<< HEAD
   // app.use('/enrolled_courses',enrolledRoutes)
=======
    // app.use('/enrolled_courses',enrolledRoutes)
>>>>>>> 81c17f14a75a2aeabc6c51f3bbec1eb1e2ceded1

    app.use('*', (req, res) => {
        res.sendStatus(404);
    });
}

module.exports = constructorMethod