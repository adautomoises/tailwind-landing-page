export function Contact() {
  return (
    <section
      id="contato"
      className="relative bg-no-repeat bg-cover mb-20 bg-white"
      style={{
        backgroundImage: "url(https://metalvagas.com.br/wp-content/uploads/2021/12/post-3.jpg)",
        backgroundPosition: "0px - 189px",
      }}
    >
      <div className="absolute w-full h-full mix-blend-multiply bg-[#21253894] opacity-100 top-0 left-0 transition-all"></div>
      <div className="relative flex flex-col md:flex-row md:py-[100px]">
        <div className="w-full p-2">
          <h1 className="text-[40px] font-bold text-white">
            Para maiores informações fale conosco
          </h1>
        </div>
        <div className="w-full flex items-center justify-center md:justify-end p-2">
          <a
            className="w-[200px] px-10 py-2 rounded text-center transition-all duration-700 bg-[#87FD01] hover:bg-[#3EE900] hover:shadow-b hover:scale-110"
            href="https://github.com/adautomoises"
            target="_blank"
          >
            <span className="text-white text-sm font-bold bg-transparent">Fale conosco</span>
          </a>
        </div>
      </div>
    </section>
  );
}
