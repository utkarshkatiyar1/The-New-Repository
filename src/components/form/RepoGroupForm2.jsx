"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createRepoGroupAccount } from "@/lib/actions/repo-group.action";

const formSchema = z.object({
  groupName: z.string().min(1, { message: "Group name is required" }),
  githubUsername: z.string().min(1, { message: "GitHub username is required" }),
});

export function RepoGroupForm2({githubUsername}) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      groupName: "",
      githubUsername: ""
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
            <FormItem className="flex flex-col w-full gap-3">
              <FormLabel className="text-base-semibold text-gray-200">
                Group Name
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="githubUsername"
          render={({ field }) => (
            <FormItem className="hidden flex-col w-full gap-3">
              <FormLabel className="text-base-semibold text-gray-200">
                GitHub Username
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
