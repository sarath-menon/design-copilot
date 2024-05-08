import { MDXRemote } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";
import { CardWithForm } from "@/components/cards/demo-card";

export default async function RemoteMdxPage() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <CardWithForm />
    </div>
  );
}
