import React from'react';
import { BrowserRouter, Route, Switch } from'react-router-dom';
import CompanyDashboard from './CompanyDashboard';
import BranchDashboard from './BranchDashboard';
import DeliveryLocationDashboard from './DeliveryLocationDashboard';
import MentorDashboard from './MentorDashboard';
import CorporateUserDashboard from './CorporateUserDashboard';
import IndividualUserDashboard from './IndividualUserDashboard';
import SubscriptionPlanDashboard from './SubscriptionPlanDashboard';
import SubscriptionDashboard from './SubscriptionDashboard';
import OrderDashboard from './OrderDashboard';
import OrderItemDashboard from './OrderItemDashboard';
import SubscriptionPlanDishDashboard from './SubscriptionPlanDishDashboard';

const Index = () => {
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
};

export default Index;