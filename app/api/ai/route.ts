export async function POST(req: Request) {
  const { prompt } = await req.json();

  const response = {
    output: `AI GENERATED RESPONSE: ${prompt}`,
    status: "success"
  };

  return Response.json(response);
}