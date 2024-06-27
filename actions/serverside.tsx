"use server";


import { CourseSchema } from "@/components/createform";
import { DeleteSchema } from "@/components/deleteform";
import { UpdateSchema } from "@/components/updateform";
import { prisma } from "@/lib/prisma";
import { z } from "zod"

export const Createcourse = async (values: z.infer<typeof CourseSchema>) => {
    console.log(values);

    const course = await prisma.course.create({
        data: {
            studentname: values.studentname,
            coursename: values.coursename,
            email: values.email,
            phonenumber: values.phonenumber,
        }
    })
    console.log(course)


}

export const Deletecourse = async (values: z.infer<typeof DeleteSchema>) => {
    console.log(values)

    const course1 = await prisma.course.deleteMany({
        where: {
            ID: values.ID,
        }

    })
    console.log(course1)

}

export const Updatecourse = async (values: z.infer<typeof UpdateSchema>) => {
    console.log(values);

    const course2 = await prisma.course.updateMany({
        where: {
            ID: values.ID,
        },

        data: {
            coursename: values.coursename,
        }


    })
    console.log(course2)
}