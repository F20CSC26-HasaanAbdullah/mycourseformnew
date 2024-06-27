import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface Formwrapperprops{
    children:React.ReactNode
    title: string
    description?:string
}


export const Formwrapper = ({children,title,description}:Formwrapperprops) => {
    return (
        <Card className="flex flex-col items-center justify-center border border-black w-[700px] h-[700px] ml-[600px]  mt-20">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>

    )
}
