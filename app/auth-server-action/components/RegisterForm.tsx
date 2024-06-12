import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

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

import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { signUpWithEmailAndPassword } from "../actions";

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password is required.",
  }),
});
export default function RegisterForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
		setLoading(true);
		const result=await signUpWithEmailAndPassword(data);
		const {error}=JSON.parse(result);
		setLoading(false);

		if(error?.message){
			toast({
				variant:"destructive",
				title: "Oops!",
				description: (
					<pre className="mt-2 w-[340px] rounded-md  p-4">
						<code className="text-white">{error.message}</code>
					</pre>
				),
			});
		}
		else{
			toast({
				title: "Woohoo!",
				description: (
					<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
						<code className="text-white">
							Successfully registered
						</code>
					</pre>
				),
			});
		}
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="example@gmail.com"
                  {...field}
                  type="email"
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="password"
                  {...field}
                  type="password"
                  onChange={field.onChange}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full flex gap-2">
          {loading ? (
            <AiOutlineLoading3Quarters className={cn("animate-spin")} />
          ) : (
            "Register"
          )}
        </Button>
      </form>
    </Form>
  );
}
