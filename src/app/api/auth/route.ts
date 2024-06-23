import authFetch from "../_return-fetch/authFetch";

export async function POST(req: Request) {
    try {
        const response = await authFetch("/login?expiresIn=30m", {
            method: "POST",
            body: JSON.stringify(req.body),
        });

        console.log(response);
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

export async function GET(req: Request) {
    try {
        const response = await authFetch("/user", {
            method: "GET",
            headers: {
                Authorization: req.headers.get("Authorization") as string,
            },
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
        }
    }
}
