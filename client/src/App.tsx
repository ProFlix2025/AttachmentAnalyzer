import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Footer from "@/components/Footer";

import Home from "@/pages/home";
import SearchPage from "@/pages/search";
import CreatorDashboard from "@/pages/creator-dashboard";
import CreatorDashboardNew from "@/pages/creator-dashboard-new";
import CategoryView from "@/pages/category-view";
import VideoPlayer from "@/pages/video-player";
import CreatorApplication from "@/pages/creator-application";
import CoursePurchase from "@/pages/course-purchase";
import DMCAPolicy from "@/pages/dmca-policy";
import TermsOfUse from "@/pages/terms-of-use";
import PrivacyPolicy from "@/pages/privacy-policy";
import Favorites from "@/pages/favorites";
import Apply from "@/pages/apply";
import NotFound from "@/pages/not-found";

function Router() {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/apply" component={Apply} />
          <Route path="/search" component={SearchPage} />
          <Route path="/creator" component={CreatorDashboard} />
          <Route path="/creator-new" component={CreatorDashboardNew} />
          <Route path="/creator-application" component={CreatorApplication} />
          <Route path="/course-purchase/:videoId" component={CoursePurchase} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/dmca-policy" component={DMCAPolicy} />
          <Route path="/terms-of-use" component={TermsOfUse} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/category/:slug" component={CategoryView} />
          <Route path="/video/:id" component={VideoPlayer} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
