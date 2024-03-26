import { MDXRemote } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";
import { CardWithForm } from "@/components/cards/demo-card";

export default async function RemoteMdxPage() {
  const components = { CardWithForm };

  const source =
    "### Selva Some **mdx** text, with a component <CardWithForm /> <CardWithForm />";
  const res = await serialize(source);

  return (
    <div className="wrapper">
      <MDXRemote source={source} components={components} />;
      {/* <CardWithForm /> */}
    </div>
  );
}
