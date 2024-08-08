"use client"

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
import { createGithubAccount } from "@/lib/actions/github-account.action"

const formSchema = z.object({
  pat: z.string().min(1, { message: "PAT is required" }),
  username: z.string().min(1, { message: "username is required" }),
})



export function GithubAccountForm() {

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pat: "",
      username: ""
    },
  });

  const onSubmit = async (values) => {
    console.log(values)
    const savedGithubAccountData = await createGithubAccount({
      pat: values.pat,
      username: values.username,
    });
    const parsedObject = JSON.parse(JSON.stringify(savedGithubAccountData));
    console.log(parsedObject.pat)
    form.reset();
 
  }
  // ...

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
       <FormField
          control={form.control}
          name="pat"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full gap-3">
              <FormLabel className="text-base-semibold text-gray-200">
                PAT
              </FormLabel>

              <FormControl>
                <Input
                  type="text"
                  className=""
                  {...field}
                />
              </FormControl>
              <FormMessage/> 
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full gap-3">
              <FormLabel className="text-base-semibold text-gray-200">
                Username
              </FormLabel>

              <FormControl>
                <Input
                  type="text"
                  className=""
                  {...field}
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
