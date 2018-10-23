import React from 'react';

import {Layout} from '../atoms/Layout';
import {PageFooter} from '../molecules/PageFooter';
import {TopNavBar} from '../molecules/TopNavBar';
import {Heading} from "../atoms/Heading";
import {EventCard} from "../molecules/EventCard";
import {Row} from "../atoms/Row";
import {Column} from "../atoms/Column";
import {NavLink} from "../atoms/Nav/NavLink";
import {Button} from "../atoms/Button/Button";

export const EventSlider = ({children}) => (
  <Layout className="wrapper pb-5">
    <Heading level={4} className={"part-headline"}>Kalendář akcí</Heading>
    <Row className={"justify-content-center mb-3"}>
      <EventCard
        id={1}
        name={"Mezinárodní den diabetu"}
        img={"https://images.pexels.com/photos/1001897/pexels-photo-1001897.jpeg?cs=srgb&dl=checking-close-up-diabetes-1001897.jpg&fm=jpg0"}
        alt={"Udalost obrazek"}
        location={"Celosvětově"}
        date={"21.10.2018 17:00 - 21:00"}
      />
      <EventCard
        id={1}
        name={"Společně proti obezitě"}
        img={"https://images.pexels.com/photos/1246953/pexels-photo-1246953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
        alt={"Udalost obrazek"}
        location={"Karlovo náměstí, Praha"}
        date={"21.10.2018 17:00 - 21:00"}
      />
      <EventCard
        id={1}
        name={"Mezinárodní den proti rakovině prsu"}
        img={"https://images.pexels.com/photos/579474/pexels-photo-579474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
        alt={"Udalost obrazek"}
        location={"Celosvětově"}
        date={"21.10.2018 17:00 - 21:00"}
      />
      <EventCard
        id={1}
        name={"Mezinárodní den první pomoci"}
        img={"https://www.pacificfirstaid.ca/wp-content/uploads/2018/01/firstaid-cprprgram-1024x683.jpg"}
        alt={"Udalost obrazek"}
        location={"Celosvětově"}
        date={"21.10.2018 17:00 - 21:00"}
      />
      <EventCard
        id={1}
        name={"Pomáháme s Bílou pastelkou"}
        img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP2-sQQbDEqedDCefqLgDYeEtsIx5BHhgkbaUJfndgRWd54ZFsmA"}
        alt={"Udalost obrazek"}
        location={"Antala Staška 771, Praha 4"}
        date={"21.10.2018 17:00 - 21:00"}
      />
    </Row>
    <Row className={"justify-content-center mb-3"}>
      <NavLink exact to="/akce">
        <Button title="Zobrazit všechny akce v kalendáři" variant="all"/>
      </NavLink>
    </Row>
  </Layout>
);
