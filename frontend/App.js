import React from'react';
import { BrowserRouter, Route, Switch } from'react-router-dom';
import CompanyDashboard from './components/CompanyDashboard';
import BranchDashboard from './components/BranchDashboard';
import DeliveryLocationDashboard from './components/DeliveryLocationDashboard';
import MentorDashboard from './components/MentorDashboard';
import CorporateUserDashboard from './components/CorporateUserDashboard';
import IndividualUserDashboard from './components/IndividualUserDashboard';
import SubscriptionPlanDashboard from './components/SubscriptionPlanDashboard';
import SubscriptionDashboard from './components/SubscriptionDashboard';
import OrderDashboard from './components/OrderDashboard';
import OrderItemDashboard from './components/OrderItemDashboard';
import SubscriptionPlanDishDashboard from './components/SubscriptionPlanDishDashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CompanyDashboard} />
        <Route path="/branches" component={BranchDashboard} />
        <Route path="/delivery-locations" component={DeliveryLocationDashboard} />
        <Route path="/mentors" component={MentorDashboard} />
        <Route path="/corporate-users" component={CorporateUserDashboard} />
        <Route path="/individual-users" component={IndividualUserDashboard} />
        <Route path="/subscription-plans" component={SubscriptionPlanDashboard} />
        <Route path="/subscriptions" component={SubscriptionDashboard} />
        <Route path="/orders" component={OrderDashboard} />
        <Route path="/order-items" component={OrderItemDashboard} />
        <Route path="/subscription-plan-dishes" component={SubscriptionPlanDishDashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;