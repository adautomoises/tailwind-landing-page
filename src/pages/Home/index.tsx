import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { WhatDoWeDo } from "./components/WhatDoWeDo";
import { HowDoWeDo } from "./components/HowDoWeDo";
import { ForCompany } from "./components/ForCompany";
import { ForProfessionals } from "./components/ForProfessionals";
import { BenefitsAndAdvantages } from "./components/BenefitsAndAdvantages";
import { AboutUs } from "./components/AboutUs";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";

export function Home() {
  return (
    <div className="w-vw flex flex-col">
      <Header />
      <Main />
      <WhatDoWeDo />
      <HowDoWeDo />
      <ForCompany />
      <ForProfessionals />
      <BenefitsAndAdvantages />
      <AboutUs />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}
