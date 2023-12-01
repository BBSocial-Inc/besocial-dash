"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { useData } from "@/context/DataContext";

const accountFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    })
    .optional(),
  description: z.string().max(160).min(4).optional(),
  website: z.string().url({ message: "Please enter a valid URL." }).optional(),
  webhookURL: z
    .string()
    .url({ message: "Please enter a valid URL." })
    .optional(),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

export function AccountForm() {
  const { toast } = useToast();
  const { activeCampaign, updateProject } = useData();

  // This can come from your database or API.
  const defaultValues: Partial<AccountFormValues> = {};

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  });

  async function onSubmit(data: AccountFormValues) {
    let res = await updateProject(activeCampaign?._id, data);

    if (res) {
      toast({
        title: "Campaign updated",
        description: "You have update this campaign successfully",
      });
    } else {
      toast({
        title: "Updated failed",
        description: "Something went wrong. try again",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  defaultValue={activeCampaign?.name}
                  placeholder={activeCampaign?.name}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is the name of this campaign.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input
                  defaultValue={activeCampaign?.website}
                  placeholder={activeCampaign?.website}
                  {...field}
                />
              </FormControl>
              <FormDescription>Enter a link to your website</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  defaultValue={activeCampaign?.description}
                  placeholder={activeCampaign?.description}
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>Write about your project.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="webhookURL"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Webhook</FormLabel>
              <FormControl>
                <Input
                  defaultValue={activeCampaign?.webhookURL}
                  placeholder={activeCampaign?.webhookURL}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Enter your webhook URL here. This is where we will send all
                events to.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Update campaign</Button>
      </form>
    </Form>
  );
}
