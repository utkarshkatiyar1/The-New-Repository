"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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
import Link from "next/link";

const formSchema = z.object({
  pat: z.string().min(1, { message: "PAT is required" }),
  AdhaarNumber: z.string().min(1, { message: "username is required" }),
  PhoneNumber: z.string().min(1, { message: "username is required" }),
  Address: z.string().min(1, { message: "username is required" }),
  username: z.string().min(1, { message: "username is required" }),
})



export function DashboardForm() {
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
    <div className=" w-[35%]">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
       <FormField
          control={form.control}
          name="pat"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="text-base-semibold text-[]">
                {"Username"}
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
          name="AdhaarNumber"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="text-base-semibold">
                AdhaarNumber
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
          name="PhoneNumber"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="text-base-semibold">
                PhoneNumber
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
className=""
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select className="" onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border-[1px]  border-gray-600">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">As Farmer</SelectItem>
                  <SelectItem value="m@google.com">As Buyer</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
               
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button onClick={onSubmit} type="submit">Submit</Button>
      </form>
    </Form>

    </div>
    
  )
}
