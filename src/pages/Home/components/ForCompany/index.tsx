import { ImageWrapper } from "../../../../components/ImageWrapper";
import { SectionWrapper } from "../../../../components/SectionWrapper";

export function ForCompany() {
  return (
    <div
      id="para-empresas"
      className="flex lg:flex-row flex-col items-center sm:p-4 md:p-8 lg:p-16 xl:p-20"
    >
      <ImageWrapper
        image={"src/assets/paraempresas.jpg"}
        alt={"Profissionais de Metalmecânica reunidos apresentando-se."}
      />
      <SectionWrapper
        subtitle="Empresas"
        title={"Solução para Empresas"}
        about={[
          "Verificamos que muitas vagas anunciadas na internet ficam rodando por muito tempo sem achar o profissional adequado para a vaga, pois o anúncio não surtia efeito.",
          "Fizemos uma pesquisa com centenas de profissionais em todo Brasil para descobrir o por que isso acontecia, e descobrimos que:",
        ]}
        description={[
          "Quase 95 % dos profissionais da metalmecanica não utilizam a principal rede social Profissional do mundo (in), 100% dos entrevistados utilizam o WhatsApp como principal meio de comunicação e quase 80% não tem o habito de verificar email diariamente.",
          "Com essas informações, criamos um canal de comunicação direto com os profissionais, além de um banco de dados onde todas as informações ficam atualizadas.",
        ]}
      />
    </div>
  );
}
