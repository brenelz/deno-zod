import { z } from "https://deno.land/x/zod/mod.ts";
import { fetchTyped } from "./utils/fetch.ts";

const PersonSchema = z.object({
    name: z.string(),
    height: z.coerce.number(),
    films: z.array(z.string().url()),
    eye_color: z.enum(["green", "blue"])
});

const FilmSchema = z.object({
    title: z.string()
});

const person = await fetchTyped('https://swapi.dev/api/people/1', PersonSchema);
const films = await Promise.all(person.films.map(filmUrl => fetchTyped(filmUrl, FilmSchema)));

const fullPerson = {
    person,
    films
};

console.log(fullPerson);