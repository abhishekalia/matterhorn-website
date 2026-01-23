import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import BrokerPage from "@/pages/BrokerPage";
import PickleballPage from "@/pages/PickleballPage";
import YouthSportsPage from "@/pages/YouthSportsPage";
import TravelPage from "@/pages/TravelPage";
import RideSharePage from "@/pages/RideSharePage";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import NaysMembersPage from "@/pages/NaysMembersPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/brokers" component={BrokerPage} />
      <Route path="/pickleball" component={PickleballPage} />
      <Route path="/youth-sports" component={YouthSportsPage} />
      <Route path="/travel" component={TravelPage} />
      <Route path="/rideshare" component={RideSharePage} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms" component={TermsOfService} />
      <Route path="/naysmembers" component={NaysMembersPage} />
      <Route component={NotFound} />
    </Switch>
  );
}
``;
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
