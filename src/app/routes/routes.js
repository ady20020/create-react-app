import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router'; // react-router v4
import { BrowserRouter } from 'react-router-dom';
import Loader from '../Layout/Loader';
import { PropTypes } from 'prop-types';


// Dynamically loaded components
// const Header = React.lazy(() => import('../Common/Header.jsx'));
const Home = React.lazy(() => import('../Home/Home.jsx'));
const Appointment = React.lazy(() => import('../Appointment/Appointment.jsx'));

const DefaultRoot = ({ component: Component, path, exact, withHeader, withSidebar, activeItem, ...rest }) => {

    return (
        <Route
            path={path}
            exact={exact}
            render= { props => {
                const { match : {params: urlProps} = {}} = props;
                const { location: {state: navigationStateProps}} = props;
                
                return <Component {...rest} {...urlProps} {...navigationStateProps} />
            }
         }
        />
    );

};

const getRoutes = props => {
    return (
        <Suspense fallback={<Loader />}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>                    
                    <DefaultRoot component={Home} exact={true} path='/' withHeader= {false} withSidebar= {false} activeItem=''/>
                    <DefaultRoot component={Appointment} exact={true} path='/appointment' withHeader= {false} withSidebar= {false} activeItem=''/>
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
};

getRoutes.propTypes = {
    history: PropTypes.array,
};

export default getRoutes;

