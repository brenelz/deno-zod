import { z } from "https://deno.land/x/zod@v3.20.2/mod.ts";

export const fetchTyped = async <T extends z.Schema>(url: string, schema: T, params?: RequestInit): Promise<z.infer<T>> => {
    const res = await fetch(url, {
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        },
        ...params
    });

    return schema.parse(await res.json())
}

export const fetchTypedPost = <T extends z.Schema>(url: string, schema: T, body: Record<string, unknown>, params?: RequestInit) => {
    return fetchTyped(url, schema, {
        method: 'POST',
        body: JSON.stringify(body),
        ...params
    })
}