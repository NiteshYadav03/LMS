import { clerkClient } from '@clerk/express';
import {v2 as cloudinary} from 'cloudinary';
import Course from '../models/Course.js'
import { Purchase } from '../models/Purchase.js';
import User from '../models/User.js';
export const updateRoleToEducator = async (req, res) => {
  try {
    const { userId } = await req.auth(); // ✅ Correct way to get userId

    if (!userId) {
      return res.status(401).json({ success: false, message: 'User not authenticated' });
    }

    await clerkClient.users.updateUser(userId, {
      publicMetadata: {
        role: 'educator'
      }
    });

    res.json({ success: true, message: 'You can publish a course now' });

  } catch (error) {
    console.error('Error updating role:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};


// Add new course

export const addCourse = async (req, res) =>{

  try{
    const {courseData} = req.body
    const imageFile = req.file
    const {educatorId} = await req.auth()

    if(!imageFile){
      return res.json({success: false, 
        message: 'Please Attached an image for your course Thumbnail.'})
       
    }

    const parsedCourseData =  JSON.parse(courseData)
    parsedCourseData.educator=educatorId
    const newCourse=await Course.create(parsedCourseData)
    const imageUpload= await connectCloudinary.uploader.upload(imageFile.path)
    newCourse.courseThumbnail=imageUpload.secure_url 
    await newCourse.save()

    res.json({success:true,message:'course added'})

  }catch(error){
    res.json({success:false,message:error.message})
  }

}

// Get Educator courses

export const getEducatorCourses = async (req,res)=>{
  try{
    const educator = req.auth.userId
    
    const courses = await Course.find({educator})
    res.json({success:true,courses})
  } catch(error){
    res.json({ success:false,message:error.message})
  }
}

// Get educator Dashboard Data

export const educatorDashboardData=async(req,res)=>{
  try{
      const educator = req.auth.userId
      const courses = await Course.find({educator})
      const totalCourses = courses.length
      const courseIds=courses.map(course=> course._id);
      // Calculate total earning
      const purchases = await Purchase.find({
        courseId: { $in: courseIds },
        status:'completed'
      })
      const totalEarnings = purchases.reduce((sum,purchase)=> sum+purchase.amount,0);

      // Collect unique enrolled student IDs with their course titles
      const enrolledStudentsData=[];
      for(const course of courses){
        const student = await User.find({
          _id: { $in: course.enrolledStudents }

        },'name imageUrl');

        students.forEach(student=> {
          enrolledStudentsData.push({
            courseTitle: course.courseTitle,
            student
          })
        })
      }

      res.json( {success:true, dashboardData:{
        totalEarnings,enrolledStudentsData,totalCourses
      } } )


      
      
        
  } catch(error){
    res.json({success:false,message:error.message})
  }
}

// get enrolled students data with purchase data

export const getEnrolledStudentsData=async(req,res)=>{

    try{
      const educator= req.auth.userId;
      const courses = await Course.find({educator})
      const courseIds =courses.map(course=> course._id)

      const purchases = await Purchase.find({
        courseId:{$in:courseIds},
        status:'completed'
      }).populate('userId','name imageUrl').getPopulatedPaths('courseId','courseTitle')
      const enrolledStudents = purchase.map(purchase=>({
          student:purchase.userId,
          courseTitle: purchase.courseId.courseTitle,
          purchaseDate:purchase.createAt
      }))
      res.json({success:true,enrolledStudents})
    }catch(error){
      res.json({success:false,message:error.message})
    }

}
