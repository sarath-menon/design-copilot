"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { listen } from "@tauri-apps/api/event";
import { open } from "@tauri-apps/api/dialog";
import getComponentInfo from "@/components/dialogs/action";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export function CreateProject() {
  const [isOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState("");
  const router = useRouter();

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  useEffect(() => {
    //listen to a event
    const unlisten = listen("open-project", (e) => {
      console.log(e.payload);
      //   selectFolder();
      openDialog();
    });

    return () => {
      unlisten.then((f) => f());
    };
  }, []);

  async function selectFolder() {
    // Opens a dialog for directory selection
    const selected = await open({
      directory: true, // Only directories can be selected
      multiple: false, // Only one directory can be selected
    });

    setPath(selected as string);
  }

  async function getComponentInfoselv() {
    const data = await getComponentInfo(path);
    console.log(data);

    router.push("/playground");
  }

  const formSchema = z.object({
    username: z.string().min(2),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: {
      username: path,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    closeDialog();

    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    const data = await getComponentInfo(path);
    console.log(data);

    router.push("/playground");
  }

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>Add local repository</DialogTitle>
          </DialogHeader>

          {/* <div className="flex gap-4">
            <Input
              className="border border-gray-300 p-2 rounded"
              type="text"
              value={path}
              readOnly
            />
            <Button variant={"secondary"} onClick={selectFolder}>
              Choose
            </Button>
          </div> */}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <div className="flex gap-2 items-center">
                        <Input {...field} readOnly />
                        <Button variant={"secondary"} onClick={selectFolder}>
                          Choose
                        </Button>
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter className="pt-4 flex">
                {/* <Button variant={"secondary"} onClick={closeDialog}>
                  Close
                </Button> */}
                <Button type="submit">Add repo</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
