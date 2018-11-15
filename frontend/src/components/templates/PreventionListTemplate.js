import React from 'react';

import {Layout} from "../atoms/Layout";
import {HeadBlock} from "../organisms/HeadBlock";
import {FilterBox} from "../molecules/FilterBox";

import {GENDERS} from "../../mocks/Genders";
import {ANAMNESIS} from "../../mocks/Anamnes";
import {STYLES} from "../../mocks/LifeStyle";
import {PREVENTIONS} from "../../mocks/Preventions";
import {PreventionCard} from "../molecules/PreventionCard";
import {NavLink} from "../atoms/Nav/NavLink";

import { ErrorMessage } from '../molecules/ErrorMessage';
import { LoadingIndicator } from '../molecules/LoadingIndicator';

export const PreventionListTemplate = ({
  isLoading,
  isLoaded,
  isError,
  prevence,
  error,
}) => {
  if (isError && !isLoading) {
    return <ErrorMessage error={error} />;
  }

  if (isLoading && !isLoaded) {
    return <LoadingIndicator />;
  }

  return (
    <Layout className={"mb-5"}>
      <HeadBlock category={"Seznam prevencí"} descr={"Zjistěte, jaké všechny prevence jsou v dnešení době podporovány a na které máte nárok. Vyhledejte si přímo ty, které se vás momentálně týkají!"}/>
      <FilterBox genders={GENDERS} anamnesis={ANAMNESIS} styles={STYLES}/>
      <Layout className="text-center">
        <NavLink exact to="/prevence" className="linkprevence">
          Zobrazit vše
        </NavLink>
      </Layout>
      {prevence.map(prevence => (
        <PreventionCard prevence={prevence} key={prevence.id} />
      ))}
    </Layout>
  );
};
