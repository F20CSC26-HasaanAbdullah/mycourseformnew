"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import { Createcourse } from "@/actions/serverside";

export const CourseSchema = z.object({
    studentname: z.string().min(2, {
        message: "Studentname must be at least 2 characters.",
    }),
    coursename: z.string().min(2, {
        message: "Coursename must be at least 2 characters.",
    }),
    email: z.string().email(),
    phonenumber: z.string().min(2, {
        message: "Phonennumber must be at least 11 characters.",
    }),

})

export const Createform = () => {
    const form = useForm<z.infer<typeof CourseSchema>>({
        resolver: zodResolver(CourseSchema),
        defaultValues: {
            studentname: "",
            coursename: "",
            email: "",
            phonenumber: "",

        },
    })


    function onSubmit(values: z.infer<typeof CourseSchema>) {

        console.log(values)
        Createcourse(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="studentname"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Student Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Student Name" className="border border-black w-[500px]"{...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phonenumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Phonenumber"className="border border-black w-[500px]" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="coursename"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Course Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Course Name" className="border border-black w-[500px]" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your email" className="border border-black w-[500px]"{...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="flex items-center justify-center ">Create Form</Button>
            </form>
            <div className="text-right mt-8 underline">
                <Link href={'/deleteform'}>
                Delete Page 
                </Link>
            </div>
            <div className="text-left mt-2 underline">
                <Link href={'/updateform'}>
                Update Page
                </Link>
            </div>
        </Form>
    );
};

