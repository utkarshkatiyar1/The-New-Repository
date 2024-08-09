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
import { createRepo } from "@/lib/actions/repo.action"
import { useSelector } from "react-redux"

const formSchema = z.object({
    repoName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function RepoForm() {

  const group_data = useSelector((state) => state.groupData.group);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
        repoName: ""
    //   githubUsername: ""
    },
  });

  const onSubmit = async (values) => {
    console.log(values);
    try {
      const savedRepoData = await createRepo({
        repoName: values.repoName,
        repoGroupName: group_data.name,
        githubUsername: group_data.username,
      });
    //   console.log(savedRepoData);
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
          name="repoName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Repo Name</FormLabel>
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
