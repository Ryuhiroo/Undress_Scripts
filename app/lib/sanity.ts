import { createClient } from "next-sanity"

const projectId = '45k7jm6m'
const dataset = 'production'
const apiVersion = '2023-01-01'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
});
