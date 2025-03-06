import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "ne9t1t1k",
  dataset: "production",
  apiVersion: '2025-03-05', 
  useCdn: true, 
});
 