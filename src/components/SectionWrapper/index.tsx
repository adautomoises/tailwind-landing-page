import { Button } from "../Button";

interface Props {
  title: string;
  subtitle?: string;
  about: Array<string>;
  description: Array<string>;
}

export function SectionWrapper({ title, subtitle, about, description }: Props) {
  return (
    <section className="container w-full lg:w-1/2 px-2">
      {subtitle && (
        <div className="mb-2">
          <span className="text-primary text-lg font-semibold">{subtitle}</span>
        </div>
      )}
      <div className="mb-5">
        <h3 className="text-4xl font-bold xl:leading-4 text-[#222222] mb-5">{title}</h3>
        <div className="w-1/5 border-2 border-primary border-solid"></div>
      </div>
      <div className="mb-5">
        {about.map((text, index) => (
          <p key={index} className="text-left text-lg font-normal text-[#444444]">
            {text}
          </p>
        ))}
      </div>
      <div>
        {description.map((text, index) => (
          <p key={index} className="text-left text-base font-normal text-[#444444] mb-5">
            {text}
          </p>
        ))}
      </div>
      <div className="mb-5">
        <Button />
      </div>
    </section>
  );
}
