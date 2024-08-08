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
import { createRepoGroupAccount } from "@/lib/actions/repo-group.action";

const formSchema = z.object({
    groupName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function RepoGroupForm({githubUsername}) {

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      groupName: ""
    //   githubUsername: ""
    },
  });

  const onSubmit = async (values) => {
    console.log(values);
    try {
      const savedRepoGroupData = await createRepoGroupAccount({
        groupName: values.groupName,
        githubUsername: githubUsername,
      });
      console.log(savedRepoGroupData);
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="groupName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Group Name</FormLabel>
              <FormControl>
                <Input placeholder="example" {...field} />
              </FormControl>
              <FormDescription>
   
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
