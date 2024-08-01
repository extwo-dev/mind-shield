import { appRouter } from '@/server/routers';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

const handler = (req: Request) =>
  fetchRequestHandler({
    req: req,
    router: appRouter,
    endpoint: "/api/trpc",
    createContext: () => ({}),
  });

export { handler as GET, handler as POST, handler as PUT, handler as DELETE };