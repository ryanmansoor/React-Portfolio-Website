/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import EnianLogo from "../../images/portfolio/enian-logo.svg";
import EnergySearch from "../../images/portfolio/energysearch.jpg";
import TurbineFound from "../../images/portfolio/turbinefound.jpg";
import Swimsol from "../../images/portfolio/swimsol.png";
import SwimsolTeam from "../../images/portfolio/swimsolteam.jpg";
import Rwanda from "../../images/portfolio/rwanda.jpg";
import Equinox from "../../images/portfolio/equinox.png";
import GCI from "../../images/portfolio/gci.png";
import GoPomelo from "../../images/portfolio/gopomelo.png";
import FireAlarm from "../../images/portfolio/firealarm.jpg";
import Rover from "../../images/portfolio/rover.jpg";
import PMCG from "../../images/portfolio/pmcg.jpg";
import Copolla from "../../images/portfolio/copolla.jpg";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
const Portfolio = () => {
  return (
    <div id="wrapper">
      <section id="main">
        <header>
          <ul class="icons">
            <li>
              <NavLink to="/" title="Home" class="fa-home">
                Home
              </NavLink>
            </li>
          </ul>
          <h1>Portfolio</h1>
          <p>Last Updated Apr 2021</p>
        </header>
      </section>
      <section id="wrapper">
        <h2> Ryan Mansoor</h2>

        <div class="longtext">
          <p>
            Welcome to my portfolio! I have a passion for technology, and am
            enthusiastic about the growth of the renewable energy sector. I'm
            from the Maldives, a country severly threatened by climate change. I
            hope to contribute my technological knowledge to aid the global
            effort to combat it. I have an MEng in Electrical and Electronic
            Engineering at Imperial College London and have been involved in
            various projects, volunteer work, and paid work experiences in
            energy and software.
          </p>
          <p style={{ marginBottom: "20px" }}>
            I grew up living in Maldives, Sri Lanka and Thailand before moving
            to university in the UK. I can speak Dhivehi and English fluently. I
            enjoy playing the guitar, diving, playing football, and travelling.
            I am always keen on making friends and working with those who share
            my passions.
          </p>

          <h2> Experience</h2>
          <Accordion defaultActiveKey="0">
            <Card class="accordion">
              <Accordion.Toggle
                as={Card.Header}
                eventKey="0"
                style={{ background: "#665259", color: "#FFFFFF" }}
              >
                <div class="accordionheader">
                  <ul>
                    <li style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Software Engineer
                    </li>
                    <li> Enian</li>
                    <li> Aug 2020 - Present</li>
                  </ul>
                  <ul class="icons" style={{ margin: "0" }}>
                    <li>
                      <a class="fa-angle-down">Open</a>
                    </li>
                  </ul>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <img
                    src={EnianLogo}
                    style={{
                      width: "150px",
                    }}
                    alt=""
                  ></img>
                  <p class="accordiontext">
                    <ul>
                      <li>
                        Python: Building an API with Django and Graphene for our
                        front end services to query data using GraphQL. Paying
                        attention to efficiency by minimising calls required
                        from the client to the API, the API to the database, and
                        writing functions with low complexity. Implemented
                        Dijkstra's algorithm and A* search.
                      </li>
                      <li>
                        PostgreSQL: Primarily queried using the Django ORM,
                        however for more complex queries, I write raw SQL.
                      </li>
                      <li>
                        AWS: Deploying apps with the Elastic Container Service
                        (ECS), deploying apps in AWS Amplify, setting up private
                        subnets for our apps for added security, writing
                        CloudFormation YAML, and frequently using CloudWatch,
                        S3, Secrets Manager, IAM, Elastic Beanstalk and EC2.
                      </li>
                      <li>
                        React: Writing reusable functional components, with
                        experience in using React hooks and React context.
                        Communicating with authentication servers and fetching
                        data using GraphQL with Apollo from our backend servers.
                      </li>
                      <li>
                        Security: Deployed a cluster of docker containers
                        running Keycloak (OIDC/OAuth2.0) with AWS ECS. Set up
                        the required pieces on all fronts for PKCE
                        authentication, including on the Client (React), the
                        Auth0 Tenant (Keycloak) and the API (Python Django). Set
                        authorization rules in Python Django based on user
                        permission levels.
                      </li>

                      <li></li>
                    </ul>
                    Enian build software for the renewable energy industry, with
                    a primary focus on making data more accesible, and providing
                    tools to accelerate renewable energy product pipelines. The
                    tools I'm involved in developing include a search tool for
                    power plant and grid data, with a user friendly map that
                    displays this data with filters. In addition we are
                    buildinge a project management platform, and an AI tool for
                    calculating least cost paths for new Electricity
                    Transmission Lines (ETL), for new energy project locations
                    to their closest connections points.
                    <img
                      src={EnergySearch}
                      style={{
                        width: "100%",
                      }}
                      alt=""
                    ></img>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card class="accordion">
              <Accordion.Toggle
                as={Card.Header}
                eventKey="1"
                style={{ background: "#665259", color: "#FFFFFF" }}
              >
                <div class="accordionheader">
                  <ul>
                    <li style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Software Engineer
                    </li>
                    <li> Enian</li>
                    <li> Apr 2019 - Sep 2019</li>
                  </ul>
                  <ul class="icons" style={{ margin: "0" }}>
                    <li>
                      <a class="fa-angle-down">Open</a>
                    </li>
                  </ul>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <img
                    src={EnianLogo}
                    style={{
                      width: "150px",
                    }}
                    alt=""
                  ></img>
                  <p class="accordiontext">
                    During my initial placement at Enian, the main project I
                    worked on was validating their large power plant database, I
                    built a Machine Learning (ML )model for detecting wind
                    turbines from satellite images. In order to implement this,
                    I wrote a script to visit the coordinates/addresses of the
                    assets on google maps, take a clip, and feed it to my ML
                    model to determine whether there is an active wind or solar
                    project at the location.
                    <img
                      src={TurbineFound}
                      style={{
                        width: "50%",
                      }}
                      alt=""
                    ></img>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card class="accordion">
              <Accordion.Toggle
                as={Card.Header}
                eventKey="2"
                style={{ background: "#665259", color: "#FFFFFF" }}
                python
              >
                <div class="accordionheader">
                  <ul>
                    <li style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Vice Chair, Project Engineer
                    </li>
                    <li> E.quinox</li>
                    <li> Oct 2017 - Jul 2019</li>
                  </ul>
                  <ul class="icons" style={{ margin: "0" }}>
                    <li>
                      <a class="fa-angle-down" />
                    </li>
                  </ul>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <img
                    src={Equinox}
                    style={{
                      width: "150px",
                    }}
                    alt=""
                  ></img>
                  <p class="accordiontext">
                    E.quinox is a student-led, non-profit, humanitarian project
                    that hopes to bring cost-effective, sustainable, renewable
                    energy to developing countries. Laundrette Project - Project
                    Manager (March 2018 - March 2019) The Laundrette project by
                    E.quinox aims to install an autonomous laundrette in Rwanda
                    that runs on solar power. Rainwater collected on the roof of
                    our kiosk is used for washing, grey water is treated with
                    new filtering technologies to allow reusing of water during
                    the dry season. For the academic year 2018-2019 our aim is
                    to evaluate the technical feasibility of this project.
                  </p>
                  <p class="accordiontext">
                    I also went on an expition to Rwanda in 2018, where we
                    surveyed potential innovative rural electrification project
                    opportunities. We discussed and pitched project plans with
                    the government’s sector and district offices in Rwanda,
                    carried out repairs and the uninstallation of a solar energy
                    kiosk in Batima, Rwanda. As the treasurer for the trip I
                    produced a detailed log of the society’s expenses during the
                    expedition.
                    <img
                      src={Rwanda}
                      style={{
                        width: "80%",
                      }}
                      alt=""
                    ></img>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card class="accordion">
              <Accordion.Toggle
                as={Card.Header}
                eventKey="3"
                style={{ background: "#665259", color: "#FFFFFF" }}
              >
                <div class="accordionheader">
                  <ul>
                    <li style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Engineering Intern
                    </li>
                    <li> Swimsol</li>
                    <li> Jun 2018 - Aug 2018</li>
                  </ul>
                  <ul class="icons" style={{ margin: "0" }}>
                    <li>
                      <a class="fa-angle-down" />
                    </li>
                  </ul>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <img
                    src={Swimsol}
                    style={{
                      width: "150px",
                    }}
                    alt=""
                  ></img>
                  <p class="accordiontext">
                    Swimsol are a company that deploy rooftop and platform solar
                    energy solutions I carried out the installation of
                    electrical wiring, inverters and other equipment. The
                    project was to install an 800 kW solar power system at the
                    Four Seasons Resort in Maldives. I worked with experienced
                    engineers to solve design problems during the installation.
                    <img
                      src={SwimsolTeam}
                      style={{
                        width: "80%",
                      }}
                      alt=""
                    ></img>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card class="accordion">
              <Accordion.Toggle
                as={Card.Header}
                eventKey="4"
                style={{ background: "#665259", color: "#FFFFFF" }}
              >
                <div class="accordionheader">
                  <ul>
                    <li style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Software Intern
                    </li>
                    <li> Gold Coin International</li>
                    <li> Aug 2016 - Sep 2016</li>
                  </ul>
                  <ul class="icons" style={{ margin: "0" }}>
                    <li>
                      <a class="fa-angle-down" />
                    </li>
                  </ul>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  <img
                    src={GCI}
                    style={{
                      width: "150px",
                    }}
                    alt=""
                  ></img>
                  <p class="accordiontext">
                    I developed a Java based system that allows users in
                    different departments to enter data electronically through
                    forms, publish them, and allow users in other departments to
                    sign and approve them. I connected the system to an Access
                    Database for record keeping, and utilized functions to print
                    PDF reports generated automatically.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card class="accordion">
              <Accordion.Toggle
                as={Card.Header}
                eventKey="5"
                style={{ background: "#665259", color: "#FFFFFF" }}
              >
                <div class="accordionheader">
                  <ul>
                    <li style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Software Intern
                    </li>
                    <li> GoPomelo</li>
                    <li> Jun 2014</li>
                  </ul>
                  <ul class="icons" style={{ margin: "0" }}>
                    <li>
                      <a class="fa-angle-down" />
                    </li>
                  </ul>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
                  <img
                    src={GoPomelo}
                    style={{
                      width: "150px",
                    }}
                    alt=""
                  ></img>
                  <p class="accordiontext">
                    I asisted another intern who was using the Google Maps API
                    to develop an interactive map of store locations for a
                    client’s website, Then I collaborated with 3 other interns
                    to create a similar interactive map, using Java, JavaScript,
                    HTML and the Google Maps API.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <h2 style={{ margin: "20px" }}> Project Work</h2>
          <Accordion>
            <Card class="accordion">
              <Accordion.Toggle
                as={Card.Header}
                eventKey="0"
                style={{ background: "#665259", color: "#FFFFFF" }}
              >
                <div class="accordionheader">
                  <ul>
                    <li style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Fire Alarm for Refugee Camps
                    </li>
                    <li> 2018 </li>
                  </ul>
                  <ul class="icons" style={{ margin: "0" }}>
                    <li>
                      <a class="fa-angle-down" />
                    </li>
                  </ul>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <p class="accordiontext">
                    In recent years the number of refugee camps around the world
                    has greatly risen. Today, fires can spread rapidly
                    throughout an entire camp as suitable fire safety is
                    unavailable. This inspired the design of our fire alarm. The
                    prototype shows the alarm system, made for the outdoors with
                    infrared detection, thermal detection (thermistor), and
                    photoelectric smoke detection using the grey chamber
                    illustrated. It runs on batteries charged using solar
                    panels. When a fire is detected the buzzer is triggered and
                    sends a text message warning to registered users nearby.
                    <img
                      src={FireAlarm}
                      style={{
                        width: "80%",
                      }}
                      alt=""
                    ></img>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card class="accordion">
              <Accordion.Toggle
                as={Card.Header}
                eventKey="1"
                style={{ background: "#665259", color: "#FFFFFF" }}
              >
                <div class="accordionheader">
                  <ul>
                    <li style={{ fontSize: "20px", fontWeight: "bold" }}>
                      EERover - Mensa
                    </li>
                    <li> 2017 </li>
                  </ul>
                  <ul class="icons" style={{ margin: "0" }}>
                    <li>
                      <a class="fa-angle-down" />
                    </li>
                  </ul>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <p class="accordiontext">
                    The EERover is a prototype of a rover that could be sent to
                    distant planets for detecting different types of minerals.
                    The rover uses radio wave detection and infrared radiation
                    detection to determine the type of mineral that it is
                    observing. It can be controlled remotely via a mobile phone
                    or laptop, made capable by an arduino uno WiFi.
                    <img
                      src={Rover}
                      style={{
                        width: "50%",
                      }}
                      alt=""
                    ></img>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <h2 style={{ margin: "20px" }}> Volunteering</h2>
          <Accordion>
            <Card class="accordion">
              <Accordion.Toggle
                as={Card.Header}
                eventKey="0"
                style={{ background: "#665259", color: "#FFFFFF" }}
              >
                <div class="accordionheader">
                  <ul>
                    <li style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Board Member
                    </li>
                    <li>Patana Marine Conversation Group</li>
                    <li> 2014 -2016 </li>
                  </ul>
                  <ul class="icons" style={{ margin: "0" }}>
                    <li>
                      <a class="fa-angle-down" />
                    </li>
                  </ul>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <p class="accordiontext">
                    Took part in multiple dive trips involving either cleaning
                    up plastic or planting corals in Thailand as a board member.
                    <img
                      src={PMCG}
                      style={{
                        width: "100%",
                      }}
                      alt=""
                    ></img>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card class="accordion">
              <Accordion.Toggle
                as={Card.Header}
                eventKey="1"
                style={{ background: "#665259", color: "#FFFFFF" }}
              >
                <div class="accordionheader">
                  <ul>
                    <li style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Various Roles
                    </li>
                    <li>More Volunteering</li>
                    <li> 2014 -2016 </li>
                  </ul>
                  <ul class="icons" style={{ margin: "0" }}>
                    <li>
                      <a class="fa-angle-down" />
                    </li>
                  </ul>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <ul style={{ listStyleType: "circle" }}>
                    <li>Maths tutoring for younger students in school </li>
                    <li>
                      School House Captain, organising sports events in school{" "}
                    </li>
                    <li>
                      Led an extracurricular activity named the Universe,
                      discussing new breakthroughs in technology and learning
                      about the Universe{" "}
                    </li>
                    <li>
                      {" "}
                      Amnesty International: Organised and presented at a
                      fundraising event at school.
                    </li>
                    <li>
                      Project Star: A group that supports people in Thailand
                      living with mental or physical disabilities.
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <h2 style={{ margin: "20px" }}> Interests and Contact</h2>
          <Accordion>
            <Card class="accordion">
              <Accordion.Toggle
                as={Card.Header}
                eventKey="0"
                style={{ background: "#665259", color: "#FFFFFF" }}
              >
                <div class="accordionheader">
                  <ul>
                    <li style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Copolla's Door- Bassist
                    </li>
                    <li> 2017 -2019 </li>
                  </ul>
                  <ul class="icons" style={{ margin: "0" }}>
                    <li>
                      <a class="fa-angle-down" />
                    </li>
                  </ul>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <p class="accordiontext">
                    <img
                      src={Copolla}
                      style={{
                        width: "100%",
                      }}
                      alt=""
                    ></img>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card class="accordion">
              <Accordion.Toggle
                as={Card.Header}
                eventKey="1"
                style={{ background: "#665259", color: "#FFFFFF" }}
              >
                <div class="accordionheader">
                  <ul>
                    <li style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Contact
                    </li>
                  </ul>
                  <ul class="icons" style={{ margin: "0" }}>
                    <li>
                      <a class="fa-angle-down" />
                    </li>
                  </ul>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <ul>
                    <li>Phone: +44 (0) 7508 997292 </li>
                    <li>Email: ryanmansoor97@gmail.com</li>
                    <li>Ryan Mansoor</li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </section>

      <footer id="footer">
        <ul class="copyright">
          <li>&copy; Ryan Mansoor</li>
        </ul>
      </footer>
    </div>
  );
};

export default Portfolio;
