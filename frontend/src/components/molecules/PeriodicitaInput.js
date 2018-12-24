import React, {Component} from 'react';

import {Row} from "../atoms/Row";
import {InputWithLabel} from "../molecules/InputWithLabel";
import {Column} from "../atoms/Column";

export class PeriodicitaInput extends Component {
  render() {
    const { vekOd, vekDo, vekOdId, vekDoId, periodicitaId } = this.props;

    return (
                      <Row>
                        <Column md={3}>
                          <InputWithLabel
                            id={vekOdId}
                            type="number"
                            label="Vek od:"
                            min={1}
                            max={120}
                            value={vekOd}
                          />
                        </Column>
                        <Column md={3}>
                          <InputWithLabel
                            id={vekDoId}
                            type="number"
                            label="Vek do:"
                            min={1}
                            max={120}
                            value={vekDo}
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
