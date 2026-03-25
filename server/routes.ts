import type { Express } from "express";
import { createServer, type Server } from "http";
import { registerSpotifyRoutes } from "./spotify";

export async function registerRoutes(app: Express): Promise<Server> {
  registerSpotifyRoutes(app);

  const httpServer = createServer(app);
  return httpServer;
}
