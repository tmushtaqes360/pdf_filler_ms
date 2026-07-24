import { Container } from "cloudflare:workers";

export class PdfFillerContainer extends Container {
  defaultPort = 8080;

  // Container sleeps after 30s of no requests (saves cost)
  sleepAfter = "30s";
}

export default {
  async fetch(request, env) {
    const id = env.PDF_CONTAINER.idFromName("pdf-service");
    const container = env.PDF_CONTAINER.get(id);
    return container.fetch(request);
  },
};
