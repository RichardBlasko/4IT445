import React, {Component} from 'react';

import {Layout} from '../atoms/Layout';
import {Row} from "../atoms/Row";
import {SelectWithLabel} from "./SelectWithLabel";
import {PeriodicitaInput} from "../molecules/PeriodicitaInput";

export const AnamnesisAddInputForm = ({anamnezy, anamnesis}) => {
  return (
    anamnezy.map((val, idx) => {
      let anamnezyId = 'anamnezy-${idx}',
          vekOdId = 'vekOd-${idx}',
          vekDoId = 'vekDo-${idx}',
          periodicitaId = 'periodicita-${idx}'

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
          <Layout  className="col-md-4">
            <PeriodicitaInput vekOdId = {vekOdId} vekDoId = {vekDoId} periodicitaId = {periodicitaId}/>
            <PeriodicitaInput vekOdId = {vekOdId} vekDoId = {vekDoId} periodicitaId = {periodicitaId}/>
            <PeriodicitaInput vekOdId = {vekOdId} vekDoId = {vekDoId} periodicitaId = {periodicitaId}/>
          </Layout>
        </Row>
        </div>
      )
    })
  )
}
