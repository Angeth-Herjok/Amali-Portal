
import { BASE_URL } from "../../../../config";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = await fetch(`${BASE_URL}/api/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!result.ok) {
      const errorResponse = await result.json();
      return new Response(errorResponse.message, {
        status: 401,
        statusText: "Bad Request",
      });
    }

    const successResponse = await result.json();

    return new Response(JSON.stringify(successResponse), {
      status: 200,
      statusText: "Success",
    });
  } catch (error: any) {
    return new Response(error.message, {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}