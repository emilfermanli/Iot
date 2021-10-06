import React, { useEffect } from 'react'
import Header from "./components/Header"
import Projects from './components/Project/Projects'
import { Switch, Route, Redirect } from 'react-router-dom'
import Footer from './components/Footer'
import Account from './components/Account/Account'
import Sidebar from './components/Sidebar/Sidebar'
import NewProject from "./components/Project/NewProject"
import NotFound from "./components/NotFound"
import { getData, getProject } from "./redux/actions/userAction"
import { connect,useSelector } from "react-redux";
import Billing from "./components/Billing/Billing"
import Documentation from "./components/Documentation/Documentation"
import { ToastContainer, toast } from 'react-toastify';




function App({ getData, getProject }) {
    

    const wbStatus = useSelector(state => state.socketStatus)

    const userInfo = useSelector(state => state.dataReducer)
    
    console.log(userInfo)

    console.log(wbStatus)
 
    

    useEffect(() => {

        if (wbStatus === 1) {
            toast.success("connected")
        } else if (wbStatus === 2) {
            toast.warning("disconnected")
        }

        
        

        console.log("44")
        getData()
        setTimeout(function(){ 
            getProject() 
        }, 2000);

    }, [getData, getProject,wbStatus])


    return (
        <div>
            <div className="content">
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Projects />
                    </Route>
                    <Route path="/billing">
                        <Billing />
                    </Route>
                    <Route path="/account">
                        <Account />
                    </Route>
                    <Route path="/project" render={(props) => <Redirect to={{
                        pathname: '/project',
                        state: props.location.state
                        }}/>}
                    >
                        <Sidebar />

                    </Route>
                    <Route path="/projectItm">
                        <Projects />
                    </Route>
                    <Route path="/newproject">
                        <NewProject />
                    </Route>
                    <Route path="/documentation">
                        <Documentation />
                    </Route>
                    <Route component={NotFound} />
                </Switch>
            </div>
            <ToastContainer position="bottom-right" autoClose={3000} />
            <Footer />
           
        </div>
    )
}

const mapDispatchToProps = {
    getData,
    getProject
}

export default connect(null, mapDispatchToProps)(App)
