import React from 'react';

import {Image} from "../atoms/Image";
import {Layout} from "../atoms/Layout";
import {Paragraph} from "../atoms/Paragraph";
import {Heading} from "../atoms/Heading";
import {Button} from "../atoms/Button/Button";
import {NavLink} from "../atoms/Nav/NavLink";

export const StoryCard = ({ id, person, diagnose, story, img}) => (
  <Layout>
    <section className="section mt-4 mb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div>
              <Image alt="Web Studio" className="img-fluid"
                   src={img}/>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 mt-4 mt-md-0">
              <Heading level={4} className="card-title">{person}</Heading>
              <Heading level={6} className="card-title">{diagnose}</Heading>
              <Paragraph className="text-justify">
                {story}
              </Paragraph>
            <NavLink exact to={`/pribehy/${id}`}>
              <Button title="Přečíst si celý příběh" variant="read"/>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
