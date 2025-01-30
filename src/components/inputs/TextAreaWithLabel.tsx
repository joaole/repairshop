"use client";

import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormLabel,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { TextareaHTMLAttributes } from "react";

type Props<S> = {
  filedTitle: string;
  nameInSchema: keyof S & string;
  className?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextAreaWithLabel<S>({
  filedTitle,
  nameInSchema,
  className,
  ...props
}: Props<S>) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base" htmlFor={nameInSchema}>
            {filedTitle}
          </FormLabel>

          <FormControl>
            <Textarea
              id={nameInSchema}
              className={`${className}`}
              {...field}
              {...props}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
