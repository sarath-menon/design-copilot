"use server";
import { Component } from "@/app/types/fs";
import { promises as fs } from "fs";
import path from "path";

export async function getComponentInfo(prompt: string, path: string) {
  const url = `http://127.0.0.1:8000/question/?file_path=${encodeURIComponent(
    path
  )}&question=${encodeURIComponent(prompt)}`;

  const options = {
    method: "GET",
  };

  try {
    console.log("url", url);
    const response = await fetch(url, options);
    const data = await response.json();
    return data.response;
  } catch (error) {
    return { message: error };
  }
}

export async function createComponent(prompt: string, path: string) {
  const url = `http://127.0.0.1:8000/create/?&prompt=${encodeURIComponent(
    prompt
  )}`;

  const options = {
    method: "GET",
  };

  try {
    console.log("url", url);
    const response = await fetch(url, options);
    const data = await response.json();
    return data.response;
  } catch (error) {
    return { message: error };
  }
}

export async function exampleFiles(path?: string) {
  const url = "http://127.0.0.1:8000/examples/?path=" + path;

  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    const files_json = await response.json();

    const files = files_json as Component[];

    return files;
  } catch (error) {
    return { message: error };
  }
}

export async function readFile(relativePath: string) {
  const absolutePath = path.resolve(__dirname, relativePath);
  const file = await fs.readFile(absolutePath, "utf8");
  return file;
}

export async function fetchComponentCode(path: string) {
  const componentCode = await fs.readFile(
    process.cwd() + "/lib/ui/apps/www/" + path,
    "utf8"
  );
  return componentCode;
}
