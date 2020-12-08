import {createStore,applyMiddleware,compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer
  } from './store/reducers/userReducer';

  import {
     productListReducer,
     productDetailsReducer,
     productDeleteReducer,
     productCreateReducer,
     productUpdateReducer,
     productReviewCreateReducer,
     productTopRatedReducer,
  } from './store/reducers/productReducer'

  import {
    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer,
    orderDeliverReducer,
    orderListMyReducer,
    orderListReducer
  } from './store/reducers/orderReducer'

  import { cartReducer } from './store/reducers/cartReducer';

const middleware=[thunk]; 

const reducer = combineReducers({

    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productReviewCreate: productReviewCreateReducer,
    productTopRated: productTopRatedReducer,
  
    cart: cartReducer,

    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,

    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderDeliver: orderDeliverReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer

})



const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store=createStore(reducer,composeEnhancers(applyMiddleware(...middleware)))