export async function POST(req: Request) {
try {
const { prompt } = await req.json();


const response = await fetch(
  "https://openrouter.ai/api/v1/chat/completions",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "openai/gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `


You are Atlas AI OS.

You help founders:

* Start businesses
* Generate leads
* Build AI systems
* Create marketing plans
* Automate operations
* Increase revenue

Always give practical, actionable advice.
`,
},
{
role: "user",
content: prompt,
},
],
}),
}
);


const data = await response.json();

return Response.json({
  response:
    data?.choices?.[0]?.message?.content ||
    "No response available.",
});


} catch (error) {
console.error(error);


return Response.json(
  {
    response:
      "Atlas AI is temporarily unavailable.",
  },
  {
    status: 500,
  }
);


}
}
