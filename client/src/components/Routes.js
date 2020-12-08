import React from 'react'
import { Route,Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import LoginScreen from '../screens/auth/LoginScreen';
import ProfileScreen from '../screens/auth/ProfileScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import UserListScreen from '../screens/admin/UserListScreen';
import UserEditScreen from '../screens/admin/EditUserList';
import ProductListScreen from '../screens/admin/ProductListScreen';
import ProductEditScreen from '../screens/admin/ProductEditScreen';
import OrderListScreen from '../screens/admin/OrderListScreen';
import ShippingScreen from '../screens/order/ShippingScreen';
import PaymentScreen from '../screens/order/PaymentScreen';
import PlaceOrderScreen from '../screens/order/PlaceOrderScreen';
import OrderScreen from '../screens/order/OrderScreen';
import ProductScreen from '../screens/ProductScreen';
import CartScreen from '../screens/CartScreen';
import NotFound from './NotFound';



const Routes = () => {
    return (
        <Container>
            <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/page/:pageNumber" component={HomeScreen} exact />
            <Route path="/search/:keyword" component={HomeScreen} exact />
            <Route
                path="/search/:keyword/page/:pageNumber"
                component={HomeScreen}
                exact
            />
            <Route exact path="/register" component={RegisterScreen} />
            <Route exact path="/login" component={LoginScreen} />
            <Route path="/profile" component={ProfileScreen} />

            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />

            <Route path="/admin/userlist" component={UserListScreen} />
            <Route path="/admin/user/:id/edit" component={UserEditScreen} />

            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/order/:id" component={OrderScreen} />

            <Route path="/admin/productlist" component={ProductListScreen} exact />
            <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
            <Route
                path="/admin/productlist/:pageNumber"
                component={ProductListScreen}
                exact
            />
            <Route path="/admin/orderlist" component={OrderListScreen} />

            <Route component={NotFound}/>
        </Switch>
        </Container>
    )
}

export default Routes
