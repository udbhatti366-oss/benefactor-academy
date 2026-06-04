import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json(
      { error: "Supabase environment variables missing" },
      { status: 500 }
    );
  }

  const supabase = createClient(
    supabaseUrl,
    supabaseKey
  );

  const body = await req.json();

  const { error } = await supabase
    .from("leads")
    .insert([
      {
        name: body.name,
        email: body.email,
        whatsapp: body.whatsapp,
        company: body.company,
        budget: body.budget,
        goal: body.goal,
      },
    ]);

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
  });
}