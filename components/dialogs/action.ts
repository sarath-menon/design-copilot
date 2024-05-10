"use server";

export default async function getComponentInfo(path: string) {
  const url = "http://localhost:3002/api/project";

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ name: "timestone", path: path }),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    return { message: error };
  }
}
