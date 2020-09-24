import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Sidebar from "./components/Sidebar"
import Content from "./components/Content"
import Container from "./components/Container"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Employment from "./components/pages/Employment"
import Skills from "./components/pages/Skills"
import MyWork from "./components/pages/MyWork"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import './styles/all.scss';


import mobile from "is-mobile"

let isMobile = mobile()


function App() {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <BrowserRouter>
      <Container>
        {isMobile && <div id="sidebar_bars" className={`link_active_color fixed hover font-size-25 ${showSidebar ? "sidebar_bars_open" : "sidebar_bars"}`} onClick={() => setShowSidebar(!showSidebar)}><FontAwesomeIcon icon={faBars} /></div>}
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} mobile={isMobile} />
          <Content>
              <Switch>
                <Route path="/about" component={() => <About mobile={isMobile} />} />
                <Route path="/contact" component={() => <Contact mobile={isMobile} />} />
                <Route path="/employment" component={() => <Employment mobile={isMobile} />} />
                <Route path="/skills" component={() => <Skills mobile={isMobile} />} />
                <Route path="/my_work" component={() => <MyWork mobile={isMobile} />} />
                <Route exact path="/" component={() => <Home mobile={isMobile} />} />
              </Switch>
          </Content>
      </Container>
    </BrowserRouter>
  );
}

export default App;
