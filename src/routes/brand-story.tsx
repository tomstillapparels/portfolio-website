import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/brand-story")({
  beforeLoad: () => {
    throw redirect({ to: "/about", statusCode: 301 });
  },
});
