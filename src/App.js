import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Start from "./components/start/Start";
import {
    PATH_GUIDE_INFO,
    PATH_LIST_EVENTS,
    PATH_PAYMENT, PATH_PROFILE,
    PATH_SIGN_UP_EVENT,
    PATH_START, PATH_THANK_YOU_PAGE,
    PATH_VIEW_EVENT
} from "./config/config_navigation";
import ListEvents from "./components/listEvents/ListEvents";
import ViewEvent from "./components/viewEvent/ViewEvent";
import SignupEvent from "./components/signupEvent/SignupEvent";
import Payment from "./components/payment/Payment";
import ThankYouPage from "./components/thankYouPage/ThankYouPage";
import GuideInfo from "./components/guideInfo/GuideInfo";
import GuideProfile from "./components/helpers/guideProfile/GuideProfile";

function App() {

    return (
    <div className="App">
        <Redirect to={PATH_START}/>
        <Switch>
            <Route path={PATH_START} exact render={()=>{
                return <Start />
            }}/>

            <Route path={PATH_LIST_EVENTS} exact render={()=>{
                return <ListEvents />
            }}/>

            <Route path={PATH_VIEW_EVENT} exact render={()=>{
                return <ViewEvent />
            }}/>

            <Route path={PATH_SIGN_UP_EVENT} exact render={()=>{
                return <SignupEvent />
            }}/>

            <Route path={PATH_PAYMENT} exact render={()=>{
                return <Payment />
            }}/>

            <Route path={PATH_THANK_YOU_PAGE} exact render={()=>{
                return <ThankYouPage />
            }}/>

            <Route path={PATH_GUIDE_INFO} exact render={()=>{
                return <GuideInfo />
            }}/>

            <Route path={PATH_PROFILE} exact render={()=>{
                return <GuideProfile/>
            }}/>

        </Switch>
    </div>
  );
}

export default App;
