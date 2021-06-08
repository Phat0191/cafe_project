import React, {Component,Fragment} from 'react';					
				
import Content from "./Content_service";
import Our_menu from './our_menu';
import Caffee_sell from './caffee_sell';
import People_shop from './people_shop';
import Our_chef from './our_chef';
// import HeroSection from './Video';
import About from './About';



function Home() {
    return(
      <Fragment>
        {/* <HeroSection /> */}
        <About />
        <Content />
        <Our_menu />
        <Caffee_sell />
        <People_shop />
        <Our_chef />
      </Fragment>
    );
  }
  export default Home;