import CardWithForm from "@/app/(routes)/_components/card-demo";
import { MDXRemote } from "next-mdx-remote/rsc";
import { promises as fs } from "fs";
import { ComponentPreview } from "@/app/(routes)/library/_components/component-preview";

export default async function Page() {
  const components = { CardWithForm };

  const source = await fs.readFile(
    process.cwd() + "/app/content/test.mdx",
    "utf8"
  );

  const code = await fs.readFile(
    process.cwd() + "/registry/default/example/card-with-form.tsx",
    "utf8"
  );

  // const source = "# Selva Some **mdx** text, with a component";

  return (
    <div>
      <ComponentPreview name="card-with-form">
        <div className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 m-4 dark:bg-zinc-900">
          <pre>
            <code className="left-4 top-4 relative rounded font-mono text-sm pb-8">
              {code}
            </code>
          </pre>
        </div>
      </ComponentPreview>

      <div className="prose dark:prose-invert">
        <MDXRemote source={source} components={components} />
        {/* <CardWithForm /> */}
      </div>
    </div>
  );
}
