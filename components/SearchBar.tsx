"use client";
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
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Form schema using zod to check for correct URL
const formSchema = z.object({
  url: z
    .string()
    .startsWith("https://www.", {
      message: "Must provide secure URL (https://)",
    })
    .includes("amazon", { message: "Must be URL from Amazon" }),
});

const SearchBar = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
  });

  // TODO: Implement functionality --> Pass URL to be scraped for price
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values); // Check that values go through on console
  }

  return (
    <div className="p-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex justify-between w-[40vw] gap-10"
        >
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem className="font-roboto w-full">
                <FormControl className="border-slate-600">
                  <Input
                    placeholder="https://www.amazon.com/product_url"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Copy and paste Amazon URL</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="font-semibold text-md" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SearchBar;
