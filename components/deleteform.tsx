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
import { Deletecourse } from "@/actions/serverside";

export const DeleteSchema = z.object({
    ID: z.string().min(2, {
        message: "ID must be at least 2 characters.",
    }),


})

export const Deleteform = () => {
    const form = useForm<z.infer<typeof DeleteSchema>>({
        resolver: zodResolver(DeleteSchema),
        defaultValues: {
            ID: "",

        },
    })


    function onSubmit(values: z.infer<typeof DeleteSchema>) {

        console.log(values)
        Deletecourse(values)
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
                <Button type="submit" className="flex items-center justify-center ">Delete Form</Button>
            </form>

        </Form>
    );
};

