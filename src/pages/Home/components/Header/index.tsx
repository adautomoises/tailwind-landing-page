import { useState } from "react";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuMobile() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="h-28 flex justify-between items-center bg-[#FFA41D] py-4 border-b-[1px]">
      <a href="#inicio">
        <img
          className="max-w-[12rem] pl-10"
          src="src/assets/metalvagas_logo.svg"
          alt="Logo MetalVagas"
        />
      </a>
      <nav className="pr-5 max-[768px]:hidden">
        <ul className="flex flex-row items-center px-4 gap-8 text-white">
          {[
            ["Serviços", "#o-que-fazemos"],
            ["Soluções", "#para-empresas"],
            ["Sobre", "#sobre"],
          ].map(([title, url]) => (
            <li key={title}>
              <a className="hover:text-gray-200" href={url}>
                {title}
              </a>
            </li>
          ))}
          <li>
            <a href="#FAQ">
              <button className="rounded p-2 border border-white bg-transparent hover:bg-[#ffb443]">
                ANUNCIAR VAGA
              </button>
            </a>
          </li>
        </ul>
      </nav>

      <button className="pr-5 min-[769px]:hidden" onClick={handleMenuMobile}>
        <img
          className="max-w-[12rem]"
          src="src/assets/menu_mobile.svg"
          alt="Três traços horizontais representando o Menu de navegação mobile."
        />
      </button>

      {showMenu && (
        <div className="shadow-mv rounded absolute top-4 right-4 bg-white">
          <div className="w-full h-12 relative">
            <button
              className="absolute rounded top-4 right-4 hover:bg-[#ffb443]"
              onClick={handleMenuMobile}
            >
              <img
                src="src/assets/menu_mobile_close.svg"
                alt="Três traços horizontais representando o Menu de navegação mobile."
              />
            </button>
          </div>
          <nav className="p-4">
            <ul className="flex flex-col items-center gap-4 text-black">
              {[
                ["O que fazemos", "#o-que-fazemos"],
                ["Como fazemos", "#como-fazemos"],
                ["Para empresas", "#para-empresas"],
                ["Para profissionais", "#para-profissionais"],
                ["Benefícios e Vantagens", "#beneficios-e-vantagens"],
                ["Sobre", "#sobre"],
                ["Contato", "#contato"],
              ].map(([title, url]) => (
                <li className="w-full" key={title}>
                  <a
                    className="w-full rounded px-2 flex justify-center hover:bg-[#ffb443]"
                    href={url}
                    onClick={handleMenuMobile}
                  >
                    {title}
                  </a>
                </li>
              ))}
              <li className="w-full">
                <a className="w-full flex justify-center" href="#FAQ" onClick={handleMenuMobile}>
                  <button className="w-full rounded p-2 border border-[#ffb443] bg-transparent hover:bg-[#ffb443]">
                    ANUNCIAR VAGA
                  </button>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
