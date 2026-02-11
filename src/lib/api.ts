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
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "url";
    const url = `${baseUrl}${endpoint}`;
    console.log("API FETCH:", url);

    const res = await fetch(url, {
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
