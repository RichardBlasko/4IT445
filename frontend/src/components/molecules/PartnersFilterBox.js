import React from 'react';
import {Row} from "../atoms/Row";
import {Layout} from "../atoms/Layout";
import {Button} from "../atoms/Button/Button";
import {MultiSelectWithLabel} from "./MultiSelectWithLabel";
import {Heading} from "../atoms/Heading";
import {Column} from "../atoms/Column";

export class PartnersFilterBox extends React.Component {
  render() {
    let {diagnosis} = this.props;
    return (
      <Layout className="wrapper pb-5 ">
      <form action={"/partneri"}>
        <Row className={"justify-content-center"}>
          <Column lg={9} md={9} sm={12} xs={12}>
            <Row>
              <Column lg={12} md={12} sm={12} xs={12}>
              <Heading level={3} className="part-sub blue-text">Filtrovat projekty podle diagnózy:</Heading>
              <MultiSelectWithLabel
                  id="my_anamnes"
                  multi
                  options={diagnosis.map(diagnoza => {
                    return {label: diagnoza.nazevDiagnoza, value: diagnoza.nazevDiagnoza}
                  })}
                  name="my_anamnes"
                  placeholder="Seznam diagnóz"
                />
              <Button title="Filtrovat" variant="filter2" type="submit" />
            </Column>
            </Row>
          </Column>
        </Row>
      </form>
      </Layout>
    )
  }
};
