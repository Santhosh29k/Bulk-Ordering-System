import { createStore, combineReducers } from'redux';
import companyReducer from './reducers/companyReducer';
import branchReducer from './reducers/branchReducer';
import deliveryLocationReducer from './reducers/deliveryLocationReducer';
import mentorReducer from './reducers/mentorReducer';
import corporateUserReducer from './reducers/corporateUserReducer';
import individualUserReducer from './reducers/individualUserReducer';
import orderReducer from './reducers/orderReducer';
import orderItemReducer from './reducers/orderItemReducer';
import subscriptionPlanReducer from './reducers/subscriptionPlanReducer';
import subscriptionReducer from './reducers/subscriptionReducer';

const rootReducer = combineReducers({
  companies: companyReducer,
  branches: branchReducer,
  deliveryLocations: deliveryLocationReducer,
  mentors: mentorReducer,
  corporateUsers: corporateUserReducer,
  individualUsers: individualUserReducer,
  orders: orderReducer,
  orderItems: orderItemReducer,
  subscriptionPlans: subscriptionPlanReducer,
  subscriptions: subscriptionReducer
});

const store = createStore(rootReducer);

export default store;