import { Switch, Route, Router as WouterRouter } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import Home from "@/pages/Home";
import About from "@/pages/About";
import ResearchPrograms from "@/pages/ResearchPrograms";
import PublicUtilityLabs from "@/pages/PublicUtilityLabs";
import Publications from "@/pages/Publications";
import AdvisoryServices from "@/pages/AdvisoryServices";
import ResearchThemes from "@/pages/ResearchThemes";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="main-content" className="flex-grow pt-[80px] lg:pt-[128px]">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/research-programs" component={ResearchPrograms} />
          <Route path="/public-utility-labs" component={PublicUtilityLabs} />
          <Route path="/publications" component={Publications} />
          <Route path="/advisory-services" component={AdvisoryServices} />
          <Route path="/research-themes" component={ResearchThemes} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {import.meta.env.VITE_HASH_ROUTER === "1" ? (
          <WouterRouter hook={useHashLocation}>
            <Router />
          </WouterRouter>
        ) : (
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
        )}
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
