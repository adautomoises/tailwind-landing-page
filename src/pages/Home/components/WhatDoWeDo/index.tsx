import { ImageWrapper } from "../../../../components/ImageWrapper";
import { SectionWrapper } from "../../../../components/SectionWrapper";

export function WhatDoWeDo() {
  return (
    <div
      id="o-que-fazemos"
      className="flex lg:flex-row flex-col items-center sm:p-4 md:p-8 lg:p-16 xl:p-20"
    >
      <ImageWrapper
        image={"src/assets/oquefazemos.jpg"}
        alt={"Profissionais de Metalmecânica reunidos apresentando-se."}
      />
      <SectionWrapper
        title={"O que Fazemos ?"}
        about={[
          "Nossa Plataforma conecta Empresas da indústria Metalmecânica que precisam contratar mão de Obra qualificada, e os melhores Profissionais do Mercado.",
        ]}
        description={[
          "Cada dia está mais complexo e demorado encontrar profissionais qualificados na area industrial, por isso criamos uma plataforma simples e funcional para que as empresas tenham acesso mais facil a esses profissionais.",
          "A Metalvagas soluciona o problema de encontrar Mão de Obra qualificada com a rapidez e assertividade, sem desperdicio de tempo e recursos.",
        ]}
      />
    </div>
  );
}
