import returnFetch from "return-fetch";

const ledgerFetch = returnFetch({
    baseUrl: process.env.LEDGER_BASE_URL,
    headers: { Accept: "application/json" },
});

export default ledgerFetch;
