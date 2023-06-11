import { createClient } from "@sanity/client";

const currentDate = new Date().toJSON().slice(0, 10);

export const client = createClient({
  projectId: import.meta.env.VITE_APP_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  apiVersion: currentDate,
  token: import.meta.env.VITE_APP_SANITY_TOKEN,
});
