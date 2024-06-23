import authFetch from "../_return-fetch/authFetch";

export async function POST(req: Request) {
    try {
        const response = await authFetch("/register", {
            method: "POST",
            body: req.body,
        });

        if (!response.ok)
            throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        return Response.json(data);
    } catch (error) {
        if (error instanceof Error) {
            return new Response(JSON.stringify({ error: error.message }), {
                status: 500,
            });
        } else {
            return new Response(
                JSON.stringify({ error: "Unknown error occurred" }),
                { status: 500 }
            );
        }
    }
}
