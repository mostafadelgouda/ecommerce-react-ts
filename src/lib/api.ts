// src/lib/api.ts
type RequestOptions = {
    method?: "GET" | "POST" | "PUT" | "DELETE";
    body?: unknown;
    headers?: HeadersInit;
};

export async function apiFetch<T>(
    endpoint: string,
    options: RequestOptions = {}
): Promise<T> {
    console.log("___________________________________")
    console.log(`${process.env.API_URL}${endpoint}`)
    const res = await fetch(`${process.env.API_URL}${endpoint}`, {
        method: options.method ?? "GET",
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
        cache: "no-store",
    });

    if (!res.ok) {
        const error = await res.text();
        throw new Error(error || "Request failed");
    }

    return res.json();
}
