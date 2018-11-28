import React, {Component} from 'react';

import {Layout} from '../atoms/Layout';
import {Paragraph} from '../atoms/Paragraph';
import {Row} from "../atoms/Row";
import {InputWithLabel} from "../molecules/InputWithLabel";
import {Heading} from "../atoms/Heading";
import {Button} from "../atoms/Button/Button";
import {Column} from "../atoms/Column";
import {TextareaWithLabel} from "../molecules/TextareaWithLabel";
import {MultiSelectWithLabel} from "./MultiSelectWithLabel";
import {SelectWithLabel} from "./SelectWithLabel";
import { Link } from '../atoms/Link';
import {FontIcon} from "../atoms/FontIcon";


export class PeriodicitaInput extends Component {
  render() {
    const { vekOdId, vekDoId, periodicitaId } = this.props;

    return (
                      <Row>
                        <Column md={3}>
                          <InputWithLabel
                            id={vekOdId}
                            type="number"
                            label="Vek od:"
                            min={1}
                            max={120}
                            value={18}
                          />
                        </Column>
                        <Column md={3}>
                          <InputWithLabel
                            id={vekDoId}
                            type="number"
                            label="Vek do:"
                            min={1}
                            max={120}
                            value={39}
                          />
                        </Column>
                        <Column md={6}>
                          <InputWithLabel
                            id={periodicitaId}
                            type="number"
                            label="Periodicita (v měsících)"
                            min={1}
                            value={12}
                          />
                        </Column>
                      </Row>
  );
  }
}
