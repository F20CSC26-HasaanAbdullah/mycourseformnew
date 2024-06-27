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
import { Updatecourse } from "@/actions/serverside";

export const UpdateSchema = z.object({
    ID: z.string().min(2, {
        message: "ID must be at least 2 characters.",
    }),
    coursename: z.string().min(2, {
        message: "Coursename must be at least 2 characters.",
    }),



})

export const Updateform = () => {
    const form = useForm<z.infer<typeof UpdateSchema>>({
        resolver: zodResolver(UpdateSchema),
        defaultValues: {
            ID: "",
            coursename:"",

        },
    })


    function onSubmit(values: z.infer<typeof UpdateSchema>) {

        console.log(values)
        Updatecourse(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="ID"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>ID</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter ID" className="border border-black w-[500px]"{...field} />
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
                                <Input placeholder="Enter Course Name" className="border border-black w-[500px]"{...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="flex items-center justify-center ">Update Form</Button>
            </form>

        </Form>
    );
};

