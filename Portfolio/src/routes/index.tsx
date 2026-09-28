import { createFileRoute } from "@tanstack/react-router";
import portfolioHtml from "../portfolio.html?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Noman Nawaz | Software Engineer & AI Developer" },
      { name: "description", content: "Portfolio of Noman Nawaz, a Software Engineering student building full-stack, generative AI, RAG, agentic AI, and automation projects." },
      { property: "og:title", content: "Noman Nawaz | Software Engineer & AI Developer" },
      { property: "og:description", content: "Explore Noman Nawaz's full-stack, generative AI, RAG, agentic AI, and automation work." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  server: {
    handlers: {
      GET: () =>
        new Response(portfolioHtml as string, {
          headers: { "Content-Type": "text/html; charset=utf-8" },
        }),
    },
  },
});