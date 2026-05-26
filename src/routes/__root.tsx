import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileApplyBar from "@/components/layout/MobileApplyBar";
import NotFoundPage from "@/components/pages/NotFoundPage";

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-bold text-navy-dark">
          Something went wrong
        </h1>
        <p className="mt-2 text-sm text-ink">
          Please try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-gold px-5 py-2 font-display italic font-semibold text-navy-dark"
          >
            Try again
          </button>
          <Link to="/" className="rounded-full border border-navy/20 px-5 py-2 text-sm text-navy">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AYCNC · African Youth Climate Negotiation Center" },
      { name: "description", content: "Africa's permanent institutional response to the climate diplomacy gap. Hosted in Tanzania. Endorsed by CAHOSCC." },
      { property: "og:site_name", content: "AYCNC" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "AYCNC · African Youth Climate Negotiation Center" },
      { property: "og:description", content: "Building Africa's next generation of climate diplomats." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,700;0,9..144,900;1,9..144,300;1,9..144,600;1,9..144,700;1,9..144,900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,600;1,9..40,300&family=Space+Mono:wght@400;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundPage,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <MobileApplyBar />
      </div>
    </QueryClientProvider>
  );
}
