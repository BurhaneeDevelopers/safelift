import { createClient } from "next-sanity";

const client = createClient({
  projectId: "n12km8si",
  dataset: "production",
  useCdn: false,
  apiVersion: "2025-03-05",
});
