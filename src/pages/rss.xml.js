import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { blogPageContent } from "../config";

export async function GET(context) {
  const posts = await getCollection("posts");
  posts.sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate));

  return rss({
    title: "Ruthwik Arepelly — Writing",
    description: blogPageContent.subtitle,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id.replace(/\.md$/, "")}/`,
    })),
  });
}
