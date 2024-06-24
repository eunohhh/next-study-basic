import returnFetchJson from "return-fetch-json";

const authFetch = returnFetchJson({
    jsonParser: JSON.parse, // `jsonParser` property is omittable. You can use your custom parser.
    baseUrl: process.env.AUTH_BASE_URL,
    headers: { Accept: "application/json" },
});

export default authFetch;
