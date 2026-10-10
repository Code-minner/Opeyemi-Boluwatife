export type Article = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
};

/**
 * Curated tech reading list (not personal posts).
 * Shared by Hero carousel + Articles section.
 */
export const articles: Article[] = [
  {
    id: "microservices",
    title: "Microservices — the original definition",
    description:
      "Martin Fowler and James Lewis on what microservices actually mean: independently deployable services, business capabilities, and the trade-offs people still argue about.",
    href: "https://martinfowler.com/articles/microservices.html",
    image: "/assets/gradient.jpg",
  },
  {
    id: "event-driven",
    title: "What do you mean by “event-driven”?",
    description:
      "A clear breakdown of event notification, event-carried state transfer, event sourcing, and CQRS — so “we use events” stops meaning four different things.",
    href: "https://martinfowler.com/articles/201701-event-driven.html",
    image: "/assets/gradient2.jpg",
  },
  {
    id: "postgres-skip-locked",
    title: "Durable job queues in plain Postgres",
    description:
      "Transactional outbox + SELECT … FOR UPDATE SKIP LOCKED: concurrent workers, retries, and idempotency without standing up a separate broker.",
    href: "https://dev.to/poojang/you-probably-dont-need-kafka-a-durable-outbox-and-job-queue-in-plain-postgres-4791",
    image: "/assets/gradient.jpg",
  },
  {
    id: "redis-rate-limiting",
    title: "Build five rate limiters with Redis",
    description:
      "Fixed window, sliding window log/counter, token bucket, and leaky bucket — with Redis data structures and when each pattern fits.",
    href: "https://redis.io/tutorials/howtos/ratelimiting/",
    image: "/assets/gradient2.jpg",
  },
  {
    id: "react-server-components",
    title: "React Server Components",
    description:
      "Official React docs on Server Components: what runs on the server, how they compose with Client Components, and why the bundle stays smaller.",
    href: "https://react.dev/reference/rsc/server-components",
    image: "/assets/gradient.jpg",
  },
  {
    id: "otel-nodejs",
    title: "OpenTelemetry for Node.js",
    description:
      "Official getting-started guide: auto-instrument an Express/Node app for traces and metrics in a few minutes, then export to a real backend.",
    href: "https://opentelemetry.io/docs/languages/js/getting-started/nodejs/",
    image: "/assets/gradient2.jpg",
  },
];
