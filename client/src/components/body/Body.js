import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import ActivationEmail from './auth/ActivationEmail'
import NotFound from '../utils/NotFound/NotFound'

import ForgotPass from './auth/ForgotPassword'
import ResetPass from './auth/ResetPassword'

import Profile from './profile/Profile'
import EditUser from './profile/EditUser'

import Home from './main/Main'
import Homepage from '../Homepage/Homepage'
import Menu from '../menu/Menu'
import Worklyf from '../worklyf/Worklyf'
import Slider from '../Slider/Slider'
import Jobs from '../Jobs/Jobs'
import Card from '../Card/Card'
import Workpass from '../workpass/Workpass'
import Tribe from '../tribe/Tribe'
import Payment from '../payment/Payment'
import PaymentMethod from '../paymentmethod/PaymentMethod'
import Team from '../team/Team';
import Thankyou from '../thankyou/Thankyou'
import Learn from '../learn/Learn'
import {useSelector} from 'react-redux'


function Body() {
    const auth = useSelector(state => state.auth)
    const {isLogged, isAdmin} = auth
    return (
        <section>
            <Switch>
                <Route path="/" component={Slider} exact />
                <Route path="/main" component={Home} exact />
                <Route path="/home" component={Homepage} exact/>
                <Route path="/menu" component={Menu} exact/>
                <Route path="/jobs" component={Jobs} exact/>
                <Route path="/cards" component={Card} exact/>
                <Route path="/card/:id" component={Workpass} exact/>
                <Route path="/tribe" component={Tribe} exact/>
                <Route path="/payment" component={Payment} exact/>
                <Route path="/payment_method" component={PaymentMethod} exact/>
                <Route path="/team" component={Team} exact/>
                <Route path="/thankyou" component={Thankyou} exact/>
                <Route path="/learn" component={Learn} exact/>
                
                


                <Route path="/login" component={isLogged ? NotFound :Login } exact />
                <Route path="/register" component={isLogged ? NotFound :Register} exact />

                <Route path="/forgot_password" component={isLogged ? NotFound : ForgotPass} exact />
                <Route path="/user/reset/:token" component={isLogged ? NotFound : ResetPass} exact />

                <Route path="/user/activate/:activation_token" component={ActivationEmail} exact />

                <Route path="/profile" component={isLogged ? Profile : NotFound} exact />
                <Route path="/edit_user/:id" component={isAdmin ? EditUser : NotFound} exact />

            </Switch>
        </section>
    )
}

export default Body
