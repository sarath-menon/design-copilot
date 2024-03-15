export async function invokeLangserve(input: string) {
  const res = await fetch("http://localhost:8000/invoke", {
    method: "POST",
    headers: {},
    body: JSON.stringify({
      input: {
        chat_history: [],
        text: input,
      },
      config: {},
      kwargs: {},
    }),
  });

  const data = await res.json();

  return data;
}
