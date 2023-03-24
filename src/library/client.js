import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "swg8q9ts",
  dataset: "production",
  apiVersion: "2023-03-23",
  useCdn: true,
  token:
    "skruSbbyNMCo1P13V15lWGoStygLsaBSF6TPt8CHzm5SJev0oCFiAQORIl8Le4K0fc3knqA0Zba2GFBKNa3tk3uE8eY0LcKGKjmBUGMAWmTeZBCbRvAKBCgA7OP8hmgjqHgibq1DVEyjtQi7oJ4pR0tqbdEVjwWj3YNl7IenDfeTbrjpkrm5",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
