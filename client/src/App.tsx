// SALT & TIDE — Pacific Brutalist. App router. Dark theme baseline; layout wraps every route.
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import Services from "./pages/Services";
import LeadGrowthEngine from "./pages/LeadGrowthEngine";
import LeadLeakAudit from "./pages/LeadLeakAudit";
import { BetterFirstImpressionLanding, FreeWebsiteAuditLanding, RestaurantWebsitesLanding } from "./pages/AdLandingPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import LocationPage from "./pages/LocationPage";
import { SEATTLE, EDMONDS, LYNNWOOD } from "./data/locations";
import Insights from "./pages/Insights";
import InsightArticle from "./pages/InsightArticle";
import LegalPage from "./pages/Legal";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/work" component={Work} />
      <Route path="/work/:slug" component={CaseStudy} />
      <Route path="/services" component={Services} />
      <Route path="/local-growth-engine" component={LeadGrowthEngine} />
      <Route path="/lead-leak-audit" component={LeadLeakAudit} />
      <Route path="/better-first-impression" component={BetterFirstImpressionLanding} />
      <Route path="/free-website-audit" component={FreeWebsiteAuditLanding} />
      <Route path="/restaurant-websites" component={RestaurantWebsitesLanding} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/seattle-web-design">{() => <LocationPage config={SEATTLE} />}</Route>
      <Route path="/edmonds-web-design">{() => <LocationPage config={EDMONDS} />}</Route>
      <Route path="/lynnwood-web-design">{() => <LocationPage config={LYNNWOOD} />}</Route>
      <Route path="/insights" component={Insights} />
      <Route path="/insights/:slug" component={InsightArticle} />
      <Route path="/privacy-policy">{() => <LegalPage type="privacy" />}</Route>
      <Route path="/terms-of-service">{() => <LegalPage type="terms" />}</Route>
      <Route path="/cookie-policy">{() => <LegalPage type="cookies" />}</Route>
      <Route path="/accessibility">{() => <LegalPage type="accessibility" />}</Route>
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster
            position="bottom-right"
            theme="dark"
            toastOptions={{
              style: {
                background: "var(--color-surface)",
                color: "var(--color-text-primary)",
                border: "1px solid var(--color-hairline)",
                fontFamily: "var(--font-body)",
              },
            }}
          />
          <Layout>
            <Router />
          </Layout>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
