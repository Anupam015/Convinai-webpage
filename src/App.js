import React, { Component } from 'react';


import Navbar from './components/navbar';
import './App.css';
import './components/body.css';
import clock from "./assets/images/clock.png";
import grapg from "./assets/images/grapg.png";
import loop from "./assets/images/loop.png";
import agent from "./assets/images/agent.png";
import leader from "./assets/images/leader.png";
import manager from "./assets/images/manager.png";
import person1 from "./assets/images/person1.png";
import b5 from "./assets/images/b5.png";
import b1 from "./assets/images/b1.png";
import b2 from "./assets/images/b2.png";
import b3 from "./assets/images/b3.png";
import b4 from "./assets/images/b4.png";
import sec1 from "./assets/images/sec1.png";
import sec2 from "./assets/images/sec2.png";
import sec3 from "./assets/images/sec3.png";
import logo from "./assets/images/logo.png";
import loc from "./assets/images/loc.png";
import phone from "./assets/images/phone.png";
import fb from "./assets/images/fb.png";
import ld from "./assets/images/ld.png";
import tweeter from "./assets/images/tweeter.png";
import Ig from "./assets/images/Ig.png";
import logo8 from "./assets/images/logo8.png";
import logo1 from "./assets/images/logo1.png";
import logo2 from "./assets/images/logo2.png";
import logo3 from "./assets/images/logo3.png";
import logo7 from "./assets/images/logo7.png";
import logo6 from "./assets/images/logo6.png";
import logo11 from "./assets/images/logo11.png";
import logo9 from "./assets/images/logo9.png";
import slide1 from "./assets/images/slide1.png";

function App(){
 
    return (
      <body>
        <Navbar />
        <section id="home">
        <div class="content">
            <h1 class="h-primary unique">3X
            <em class="emtag">your contact center</em>
            </h1>
            <h2 class="h-primary">performance with</h2>
            <h2 class="h-primary unique">Automated Agent Coaching</h2>
            <p>Convin improves agent performance, enhances customer experience, and increases conversions with<br/>
                conversation intelligence.</p>
                <button className='book' style={{marginRight: '20px'}} onClick={() => {window.location.href='https://www.convin.ai/sign-up'}}>
                            Book a Demo
                        </button>

            <button class="btn">Sign Up</button>
           
        </div>
        <div class="swiper">
      <div class="swiper wrapper">
          <img src={slide1} alt="slide1" />
        
      </div>
      </div>
        </section>
        <section class="scroll">
        <marquee behavior="scroll" direction="left" scrollamount="20">
            <img src={logo8} alt="logos"/>
            <img src={logo1} alt="logos"/>
            <img src={logo7} alt="logos"/>
            <img src={logo2} alt="logos"/>
            <img src={logo3} alt="logos"/>
            <img src={logo6} alt="logos"/>
            <img src={logo9}  alt="logos"/>
            <img src={logo11}  alt="logos"/>
            <img src={logo7}  alt="logos"/>
            <img src={logo8} alt="logos"/>
            <img src={logo3} alt="logos"/>
            <img src={logo1} alt="logos"/>
            <img src={logo2} alt="logos"/>
        </marquee>
    </section>

    <section class="services-container">
        <h1>Convin's Automation Engine</h1>
        <div class="boxes">
            <div class="box">
                <img src={clock} alt="clock" />
                <h2>Automated</h2>
                <h2>Call QA</h2>
                <p>Monitor And Analyze 100% Calls Automatically Based On A Custom Scorecard. </p>
            </div>
            <h3 id="one">1</h3>
            <div class="box">
                <img src={grapg} alt="graph"/>
                <h2>Win Behavior</h2>
                <h2>Analysis</h2>
                <p> Identify Actions And Behaviors That Drive Positive And Negative Business Outcomes.</p>
            </div>
            <h3 id="two">2</h3>
            <div class="box">
                <img src={loop} alt="loop" />
                <h2>Automated Agent </h2>
                <h2>Coaching </h2>
                <p>Automatically Create And Share Personalized Agent Coaching At Scale.</p>
            </div>
            <h3 id="three">3</h3>
        </div>
    </section>


    
    <section id="numbers-section">
        <div class="heading">
            <h1 class="h-primary">Analyze conversation</h1>
            <h1 class="h-primary">for excellence</h1>
        </div>
        <div class="secOne">
            <div class="numBox">
                <h2>21 <em>%</em> </h2>
                <p>Increase in Sales</p>
            </div>
            <div class="numBox">
                <h2>27 <em>%</em></h2>
                <p>Increase in CSAT</p>

            </div>
            <div class="numBox">
                <h2>100 <em>%</em></h2>
                <p>Compliance monitoring</p>
            </div>
        </div>
        <div class="secTwo">
            <div class="numBox">
                <h2>17 <em>%</em> </h2>
                <p>Increase in</p>
                <p>Collection Rate</p>
            </div>
            <div class="numBox">
                <h2>56 <em>sec</em></h2>
                <p>Lower AHT</p>

            </div>
            <div class="numBox">
                <h2>60 <em>%</em></h2>
                <p>Decrease in</p>
                <p>Ramp up time</p>
            </div>
        </div>
    </section>

    <section class="employee-section">
        <div class="heading">
            <h1>Different roles. Different problems.</h1>
            <h1>One solution.</h1>
        </div>
        <div class="leader box">
            <div class="image">
                <img src={leader} alt="leader Image" />
            </div>
            <div class="info">
                <h1>For Leaders</h1>
                <p><span class="unique"> Increase Customer Lifetime Values </span> by accelerating QA, scaling
                    automatedcoaching, and optimize for business drivers. Simultaneously, reduce employee churn by
                    investing in agent performance and development. </p>
            </div>
        </div>
        <div class="manager box">
            <div class="info">
                <h1>For Managers</h1>
                <p><span class="unique"> Proactively address contact center productivity</span><br />
                    <span class="blueShade">challenges</span> by emphasizing on agents and processes
                    through call insights, compliance monitoring, and
                    automated agent coaching.
                </p>
            </div>
            <div class="image">
                <img src={manager} alt="leader Image" />
            </div>
        </div>
        <div class="agent box">
            <div class="image">
                <img src={agent} alt="leader Image" />
            </div>
            <div class="info">
                <h1>For Leaders</h1>
                <p><span class="unique"> Empower agents to handle complex conversations </span>by focusing on unbiased
                    feedback, personalized coaching at scale, and actionable insights on a daily basis. </p>
            </div>
        </div>
    </section>


    
    <section class="external-info">
        <div class="heading">
            <h1>Trust Convin. We Deliver Excellence.</h1>
        </div>
        <p>See how our clients transformed their customer conversations.</p>
        <div class="person-container">
            <div class="person-image">
                <img src={person1} alt="peraon1"/>
            </div>
            <div class="person-info">
                <h3>Convin is a sales managers' Swiss army knife</h3>
                <p>Convin is a sales managers' Swiss army knife for coaching and call tracking. Having a library of key
                    topics and next steps mentioned by each rep on each call helps streamline coaching moments and 1-1s,
                    this keeps me from bouncing back and forth to programs and gives me more time to coach and help my
                    team perform.</p>
                <div class="name">
                    <h3>Aaron Drummond</h3>
                    <p>Account Executive - Place Technology</p>
                </div>
            </div>
        </div>
        <div class="heading2">
            <h2>Don't just take it from us.</h2>
        </div>

        <div class="bandages">
            <img src={b1} alt="bandage"/>
            <img src={b2} alt="bandage"/>
            <img src={b3} alt="bandage"/>
            <img src={b4} alt="bandage"/>
            <img src={b5} alt="bandage"/>
        </div>
        <div class="heading2">
            <h2>Don't just take it from us.</h2>
        </div>

        <div class="band">
            <div class="band-box">
                <img src={sec1} alt="sec"/>
                <a href="#">Learn More</a>
            </div>
            <div class="band-box">
                <img src={sec2} alt="sec"/>
                <a href="#">Learn More</a>
            </div>
            <div class="band-box">
                <img src={sec3} alt="sec"/>
                <a href="#">Learn More</a>
            </div>
        </div>
        <div class="dark-box">
            <div class="heading">
                <h1>Eliminate human dependency</h1>
                <h1>with Convin’s AI engine</h1>
            </div>
            <p>Go from Insight to Action</p>
            <button>Sign Up</button>
        </div>
    </section>

    <section class="footer-section">
    <div class="contact">
    <div class="logo">
        <img src={logo} alt=""/>
    </div>
    <h3>US</h3>
    <div class="adddress">
        <img src={loc} alt="location"/>
        <p>2093 PHILADELPHIA PIKE #5025
            CLAYMONT, DELAWARE 19703</p>
    </div>
    <div class="phone">
        <img src={phone} alt="phone"/>
        <p>(+1) 6282095776</p>
    </div>
    <h3>India</h3>
    <div class="adddress">
        <img src={loc} alt="location"/>
        <p>BHIVE WORKSPACE NO.112,AKR
            TECHPARK, A-BLOCK, 7TH MILE
            HOSUR ROAD, KRISHNA REDDY,
            INDUSTRIAL AREA,
            BENGALURU-560068</p>
    </div>
    <div class="phone">
        <img src={phone} alt="phone"/>
        <p>+91 7011464590, +91 8802881329</p>
    </div>
</div>



<div class="products">
    <h2>Products</h2>
    <a href="https://convin.ai/products/ai-powered-contact-center-software">Contact center software</a>
    <a href="https://convin.ai/products/speech-analytics-software">Speech Analytics software</a>
    <a href="https://convin.ai/products/call-center-monitoring-software">Call center monitoring software</a>
    <a href="https://convin.ai/products/conversation-intelligence">Conversation intelligence</a>
    <a href="https://convin.ai/products/sales-tracking-software">Sales tracking software</a>
    <a href="https://convin.ai/products/sales-calls-analytics-solution-convin">Sales call analytics software</a>
    <a href="https://convin.ai/products/conversation-analytics-software-convin">Conversation analytics
    </a>
    <a href="https://convin.ai/products/ai-powered-contact-center-software">Automated quality management</a>
    <a href="https://convin.ai/products/automated-quality-management">Contact center software</a>
    <a href="https://convin.ai/products/call-center-recording-solution-convin-ai">Call center recording
        solution</a>
</div>
<div class="company">
    <h2>Company</h2>
    <a href="https://convin.ai/about-us">About Us</a>
    <a href="https://www.linkedin.com/company/convin/jobs/">Careers</a>
    <a href="https://convin.ai/podcasts">Sales Gambit</a>
    <a href="https://convin.ai/news">Press</a>
    <a href="https://convin.ai/blog">Blogs</a>
    <a href="https://convin.ai/e-books">e-Book</a>
    <a href="https://convin.ai/pricing">Pricing</a>
</div>
<div class="solutions">
    <h2>Solutions</h2>
    <a href="https://convin.ai/use-cases/account-executives">For Account Execs</a>
    <a href="https://convin.ai/use-cases/sales-managers">For Sales Managers</a>
    <a href="https://convin.ai/use-cases/sales-leaders">For Account Leaders</a>
    <a href="https://convin.ai/use-cases/market-intelligence">Market Intelligence</a>
    <a href="https://convin.ai/use-cases/people-intelligence">People Intelligence</a>
    <a href="https://convin.ai/use-cases/sales-leaders">Sales Enablement</a>
    <a href="https://convin.ai/use-cases/sales-leaders">Sales Enablement</a>
    <a href="https://convin.ai/use-cases/sales-onboarding">Sales Onboarding</a>
    <a href="https://convin.ai/use-cases/process-monitoring">Process Monitoring</a>
    <a href="https://convin.ai/use-cases/sales-strategy">Sales Strategy</a>
    <a href="https://convin.ai/use-cases/meeting-intelligence">Meeting Intelligence</a>
    <a href="https://convin.ai/use-cases/convin-call-quality-management-system">Quality Management</a>
</div>
</section>

<footer>
<div class="social">
    <h2>Follow us on</h2>
    <div class="images">
        <img src={fb} alt="fb"/>
        <img src={tweeter} alt="tweeter"/>
        <img src={ld} alt="LD"/>
        <img src={Ig} alt="Ig"/>
    </div>
</div>

<div class="links">
    <a href="https://convin.ai/terms-and-conditions">Terms & Conditions</a> <span>|</span>
    <a href="https://convin.ai/privacy-policy">Privacy Policy</a> <span>|</span>
    <a href="https://convin.ai/security">Security</a>
</div>

</footer>

<p class="copyright">2022 Convin.ai. Copyright and All Rights Reserved. </p>


</body>

    );
  }


export default App;
