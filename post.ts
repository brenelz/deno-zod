import { z } from "https://deno.land/x/zod/mod.ts";
import { fetchTypedPost } from "./utils/fetch.ts";

const PostSchema = z.object({
    title: z.string(),
    body: z.string(),
    userId: z.number(),
    id: z.number()
});

const post = await fetchTypedPost('https://jsonplaceholder.typicode.com/posts', PostSchema, {
    title: 'foo',
    body: 'bar',
    userId: 1,
});

console.log(post);