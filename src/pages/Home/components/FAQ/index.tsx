export function FAQ() {
  return (
    <section id="FAQ" className="flex flex-col justify-center align-middle">
      <div className="flex flex-col justify-center align-middle">
        <span className="text-primary text-lg font-semibold text-center">FAQ</span>
        <h1 className="text-[#222222] font-bold text-[40px] text-center">
          Tire todas as suas dúvidas
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center align-middle p-2 pb-0">
        <div className="w-full h-auto flex flex-col justify-center align-middle p-2">
          <div className="shadow-mv">
            <div className="p-4">
              {[
                [
                  "Como funciona para empresas ?",
                  "A empresa entra na plataforma https://appmetalvagas.com.br/, se cadastra e anuncia sua vaga.",
                ],
                [
                  "Quanto custa para anunciar uma vaga ?",
                  "Anuncie sua vaga na plataforma https://appmetalvagas.com.br/ com valores entre R$ 97,00 e R$ 197,00.",
                ],
                [
                  "Como funciona para Profissionais ?",
                  "O Profissional se cadastra na Plataforma Metalvagas https://appmetalvagas.com.br/, cria ou cadastra um curriculo e já está pronto para se candidatar nas vagas que ele atende.",
                ],
                [
                  "Como entro em contato para maiores infromações ?",
                  "Atraves do e-mail contato@metalvagas.com.br e WhatsApp.",
                ],
              ].map(([summary, p], index) => (
                <details
                  key={index}
                  className="p-4 border-[5px] border-[#F2F2F2]"
                  style={{ borderTopWidth: index === 0 ? "5px" : "0" }}
                >
                  <summary className="font-bold text-[#737373]">{summary}</summary>
                  <p className="break-words">{p}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
        <div className="p-2 flex items-end pb-0">
          <img
            className="object-contain w-full"
            src="src/assets/faq.png"
            alt="Um homem se vestindo como profissional de Metalmecânica, segurando uma prancheta e usando um EPI laranja na cabeça."
          />
        </div>
      </div>
    </section>
  );
}
