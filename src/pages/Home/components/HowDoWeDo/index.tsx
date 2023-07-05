import { ImageWrapper } from "../../../../components/ImageWrapper";
import { SectionWrapper } from "../../../../components/SectionWrapper";

export function HowDoWeDo() {
  return (
    <div
      id="como-fazemos"
      className="flex lg:flex-row flex-col-reverse items-center sm:p-4 md:p-8 lg:p-16 xl:p-20"
    >
      <SectionWrapper
        title={"Como Fazemos ?"}
        about={[
          "Usando Tecnologia de ponta e o conhecimento de  profissionais especialistas em : Solda, Caldeiraria, Tubulação, Pintura, Mecânica etc...",
        ]}
        description={[
          "Criamos uma plataforma de vagas online com filtros mais precisos, onde só os profissionais que atendam aos requisitos da vaga anunciada podem se cadastrar, nessa vaga. Evitando contatos desnecessarios e frustações de ambas as partes.",
        ]}
      />
      <ImageWrapper
        image={"src/assets/comofazemos.jpg"}
        alt={"Profissionais de Metalmecânica reunidos apresentando-se."}
      />
    </div>
  );
}
