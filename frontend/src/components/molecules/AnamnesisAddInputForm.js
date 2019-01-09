import React from 'react';

import {Layout} from '../atoms/Layout';
import {Row} from "../atoms/Row";
import {SelectWithLabel} from "./SelectWithLabel";
import {PeriodicitaInput} from "../molecules/PeriodicitaInput";

export const AnamnesisAddInputForm = ({anamnezy, anamnesis}) => {
  return (
    anamnezy.map((val, idx) => {
      let anamnezyId = `anamnezy-${idx}`,
          vekOdId = `vekOd-${idx}`,
          vekDoId = `vekDo-${idx}`,
          periodicitaId = `periodicita-${idx}`

      return(
        <div key={idx}>

        <Row>
          <Layout className="col-md-6">
            <SelectWithLabel
              id={anamnezyId}
              label="Seznam anamnéz"
              options={anamnesis.map(anamnesis => {
                return {label: anamnesis, value: anamnesis}
              })}
              name={anamnezyId}
              data-id={idx}
              placeholder="Vyber..."
            />
          </Layout>
          <Layout  className="col-md-5">
            <PeriodicitaInput vekOd="18" vekDo="39" vekOdId = {vekOdId} vekDoId = {vekDoId} periodicitaId = {periodicitaId}/>
            <PeriodicitaInput vekOd="40" vekDo="49" vekOdId = {vekOdId} vekDoId = {vekDoId} periodicitaId = {periodicitaId}/>
            <PeriodicitaInput vekOd="50" vekDo="199" vekOdId = {vekOdId} vekDoId = {vekDoId} periodicitaId = {periodicitaId}/>
          </Layout>
        </Row>
        </div>
      )
    })
  )
}
