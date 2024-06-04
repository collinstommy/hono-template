import { Layout } from "./shared/Layout";
import { serveStatic } from "hono/cloudflare-workers";
// @ts-expect-error - cloudflare
import manifest from "__STATIC_CONTENT_MANIFEST";
import { app } from "./app";

app.get("/static/*", serveStatic({ root: "./", manifest }));

app.get("/", (c) => {
  return c.html(
    <Layout>
      <div>
        <h1 class="text-2xl font-bold">Hello World</h1>
        <a class="link link-accent">I'm a simple link</a>
      </div>
    </Layout>,
  );
});

export default app;
