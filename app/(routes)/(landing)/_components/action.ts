"use server";

import {
  simpleGit,
  SimpleGit,
  CleanOptions,
  SimpleGitOptions,
} from "simple-git";
import path from "path";
import fs from "fs";

export default async function GitDemo() {
  const options: Partial<SimpleGitOptions> = {
    baseDir: process.cwd(),
    binary: "git",
    maxConcurrentProcesses: 6,
    trimmed: false,
  };

  // when setting all options in a single object
  const git: SimpleGit = simpleGit(options);

  const repoUrl = "https://github.com/shadcn-ui/ui.git"; // Change this to your repository URL
  const localPath = path.join(process.cwd(), "tempRepo"); // Temporary local path to clone the repo

  try {
    // Clone the repository
    await git.clone(repoUrl, localPath);
    console.log("Repository cloned to: " + localPath);

    // // Example: Reading a specific file from the cloned repository
    // const filePath = path.join(localPath, "tsconfig.json"); // Specify the path to your text file
    // const fileContent = fs.readFileSync(filePath, "utf8");

    // // Clean up: Optionally, delete the cloned repo if you no longer need it after reading the files

    // console.log(fileContent);

    // Respond with the file content
  } catch (error) {
    console.error("Failed to clone repository or read file:");
  }
}
