export function BenefitsAndAdvantages() {
  return (
    <section
      id="beneficios-e-vantagens"
      className="flex flex-col justify-center align-middle my-20"
    >
      <div className="flex flex-col justify-center align-middle mb-5">
        <span className="text-primary text-lg font-semibold text-center">Benefícios</span>

        <h1 className="text-[#222222] font-bold text-[40px] text-center">Benefícios e Vantagens</h1>
        <p className="text-[#444444] text-center">
          Veja nossos diferenciais e se destaque no mercado!
        </p>
      </div>

      <div className="flex flex-col md:flex-row p-4 gap-10 md:gap-2 lg:gap-10">
        {[
          [
            "src/assets/speed-meter.svg",
            "Velocidade no anúncio",
            "Publique sua vaga em menos de 5 minutos, e seja visto por milhares de profissionais.",
          ],
          [
            "src/assets/target.svg",
            "Específico",
            "Seu anúncio é direcionado para  os profissinais que atendam aos requisitos, evitando dispercío de tempo e dinheiro.",
          ],
          [
            "src/assets/ficha.svg",
            "Mensúravel",
            "A empresa consegue dimensionar a quantidade  e qualidade dos profissionais que se canditam na sua vaga.",
          ],
          [
            "src/assets/database.svg",
            "Banco de Dados​",
            "A Metalvagas Possui um Banco de dados com milhares de profissionais cadastrasdos, que recebem uma mensagem logo após a publicação da vaga.",
          ],
        ].map(([icon, title, p], index) => (
          <div
            className={"w-full h-72 md:h-96 p-2 flex justify-center items-center"}
            style={{ backgroundColor: index % 2 === 1 ? "#FFA149" : "#F2F2F2" }}
            key={index}
          >
            <div
              className="flex flex-col justify-center items-center p-2 gap-4"
              style={{ color: index % 2 === 1 ? "#FFFFFF" : "#222222" }}
            >
              <img className="max-w-[50px]" src={icon} />
              <span className="text-[28px] font-medium text-center">{title}</span>
              <p className="font-medium text-center">{p}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
