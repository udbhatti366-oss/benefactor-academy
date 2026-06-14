import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "ai-side-hustles-2026",
    title: "Top AI Side Hustles to Make Money in 2026",
    excerpt: "Discover the most profitable AI-powered side hustles that anyone can start today with zero investment.",
    category: "Online Income",
    readTime: "8 min read",
    content: "AI is changing the way people make money online. From AI chatbot services to automation consulting, the opportunities are endless in 2026...",
  },
  {
    slug: "top-ai-tools-for-creators",
    title: "Top AI Tools for Creators in 2026",
    excerpt: "The ultimate list of AI tools that content creators, marketers, and entrepreneurs are using to 10x their output.",
    category: "AI Tools",
    readTime: "6 min read",
    content: "Content creation has never been easier with the latest AI tools. Here are the top tools every creator needs in their toolkit...",
  },
  {
    slug: "automation-business-systems",
    title: "Build Automation Systems That Run Your Business",
    excerpt: "Learn how to build automated business systems that generate revenue while you sleep.",
    category: "Automation",
    readTime: "10 min read",
    content: "Automation is the key to building a scalable business. In this guide, we walk through the exact systems you need to automate your operations...",
  },
  {
    slug: "claude-vs-chatgpt",
    title: "Claude vs ChatGPT: Which AI is Better for Business?",
    excerpt: "An honest comparison of Claude and ChatGPT for business use cases, automation, and content creation.",
    category: "AI Tools",
    readTime: "7 min read",
    content: "Choosing the right AI for your business is critical. We compare Claude and ChatGPT across key business use cases...",
  },
  {
    slug: "digital-wealth-systems",
    title: "Digital Wealth Systems: Build Income That Scales",
    excerpt: "How to build digital wealth systems that compound over time and generate passive income.",
    category: "Online Income",
    readTime: "9 min read",
    content: "Digital wealth is built through systems, not hard work alone. Here is how to create income streams that scale automatically...",
  },
  {
    slug: "future-of-ai-agents",
    title: "The Future of AI Agents & Autonomous Businesses",
    excerpt: "AI agents are changing the way businesses operate. Here is what the future looks like and how to prepare.",
    category: "AI Agents",
    readTime: "8 min read",
    content: "AI agents are no longer science fiction. They are running real businesses right now, and the future is even more exciting...",
  },
  {
    slug: "gemini-vs-claude",
    title: "Gemini vs Claude: The Ultimate AI Showdown",
    excerpt: "Google Gemini vs Anthropic Claude — which AI wins for business, coding, and content creation?",
    category: "AI Tools",
    readTime: "6 min read",
    content: "Google and Anthropic are in a fierce race to build the best AI. Here is how Gemini and Claude compare in real-world business tasks...",
  },
  {
    slug: "geo-content-strategy",
    title: "GEO Content Strategy: Rank in AI Search Engines",
    excerpt: "Generative Engine Optimization is the new SEO. Learn how to rank your content in AI-powered search engines.",
    category: "GEO",
    readTime: "11 min read",
    content: "GEO is the future of content marketing. As AI search engines like Perplexity and Google AI Overviews grow, your content strategy must evolve...",
  },
  {
    slug: "open-source-ai-systems",
    title: "Open Source AI Systems: Build for Free",
    excerpt: "The best open source AI tools and models you can use to build powerful AI systems without paying for APIs.",
    category: "AI Tools",
    readTime: "8 min read",
    content: "You do not need to spend thousands on AI APIs. Open source models like Llama and Mistral are powerful enough for most business use cases...",
  },
  {
    slug: "ai-consulting-business",
    title: "How to Start an AI Consulting Business in 2026",
    excerpt: "Step-by-step guide to launching a profitable AI consulting business and landing your first clients.",
    category: "Online Income",
    readTime: "12 min read",
    content: "AI consulting is one of the most profitable businesses you can start in 2026. Here is the exact roadmap to go from zero to your first $10,000...",
  },
];