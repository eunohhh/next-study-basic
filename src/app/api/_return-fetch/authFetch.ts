import returnFetch from "return-fetch";

const authFetch = returnFetch({
    baseUrl: process.env.AUTH_BASE_URL,
    headers: { Accept: "application/json" },
});

export default authFetch;
