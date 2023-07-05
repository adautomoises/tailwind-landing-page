import paraprofissionais from "../../../../assets/paraprofissionais.jpg";
import { ImageWrapper } from "../../../../components/ImageWrapper";
import { SectionWrapper } from "../../../../components/SectionWrapper";

export function ForProfessionals() {
  return (
    <div
      id="para-profissionais"
      className="flex lg:flex-row flex-col-reverse items-center sm:p-4 md:p-8 lg:p-16 xl:p-20"
    >
      <SectionWrapper
        subtitle="Profissionais"
        title={"Solução para Profissionais"}
        about={[
          "A maioria dos Profissionais que conversarmos estavam com o curriculo desatualizado e desanimados em se canditar em vagas em sites de emprego que não conhecem o mercado Metalmecânico.",
        ]}
        description={[
          "Para solucionarmos esse problema, criamos um plataforma especifica para eles e um sistema onde todos tem a mesma chance na vaga, desenvovelmos ainda dentro da plataforma um modelo de Curriculo digital Gratuito, totalmente intuitivo e facil de preencher, que fica salvo na plataforma e pode ser  baixado em qualquer telefone, ajudando o Profissional a se canditar em vagas de trabalho mesmo fora da plataforma Metalvagas.",
          "Criamos ainda, um sistema automatico de disparo de mensagens, que quando uma vaga é publicada, o Profissional cadastrado na plataforma que atenda o perfil da vaga, é comunicado imediatamente aumentando as chances de ser contratado rapidamente.",
        ]}
      />
      <ImageWrapper
        image={paraprofissionais}
        alt={"Profissionais de Metalmecânica reunidos apresentando-se."}
      />
    </div>
  );
}
