"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation";

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
import { createGithubAccount } from "@/lib/actions/github-account.action"

const formSchema = z.object({
  pat: z.string().min(1, { message: "PAT is required" }),
  AdhaarNumber: z.string().min(1, { message: "username is required" }),
  PhoneNumber: z.string().min(1, { message: "username is required" }),
  Address: z.string().min(1, { message: "username is required" }),
  username: z.string().min(1, { message: "username is required" }),
})



export function PostListForm() {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pat: "",
      AdhaarNumber: "",
      PhoneNumber: "",
      Address: "",
      username: ""
    },
  });

  const onSubmit = async () => {
    console.log("values")
    router.push('/');
    // const savedGithubAccountData = await createGithubAccount({
    //   pat: values.pat,
    //   username: values.username,
    // });
    // const parsedObject = JSON.parse(JSON.stringify(savedGithubAccountData));
    // console.log(parsedObject.pat)
    // form.reset();
 
  }
  // ...

  return (
    <div className="w-[70%] p-8">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
       <FormField
          control={form.control}
          name="CropName"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="text-base-semibold text-[]">
                {"CropName"}
              </FormLabel>

              <FormControl>
                <Input
                  type="text"
                  className="border-[1px]  border-gray-600 rounded-md"
                  {...field}
                />
              </FormControl>
              <FormMessage/> 
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="Qunatity"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="text-base-semibold">
              Qunatity
              </FormLabel>

              <FormControl>
                <Input
                  type="text"
                  className="border-[1px]  border-gray-600 rounded-md"
                  {...field}
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Price"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="text-base-semibold">
              Price
              </FormLabel>

              <FormControl>
                <Input
                  type="text"
                  className="border-[1px]  border-gray-600 rounded-md"
                  {...field}
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="Address"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="text-base-semibold">
                Address
              </FormLabel>

              <FormControl>
                <Input
                  type="text"
                  className="border-[1px]  border-gray-600 rounded-md"
                  {...field}
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="Address"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="text-base-semibold">
                Photos
              </FormLabel>

              <FormControl>
                <Input
                  type="file"
                  className="border-[1px]  border-gray-600 rounded-md"
                  {...field}
                />
              </FormControl>
              <div className="bg-green-600 p-2 rounded-md text-white cursor-pointer hover:opacity-75 w-[8rem]">PredictQuality</div>
              <FormMessage/>
            </FormItem>
          )}
        />


        <Button onClick={onSubmit} type="submit">Post</Button>
      </form>
    </Form>

    </div>
    
  )
}
