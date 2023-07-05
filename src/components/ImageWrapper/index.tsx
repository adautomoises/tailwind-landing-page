interface Props {
  image: string;
  alt: string;
}

export function ImageWrapper({ image, alt }: Props) {
  return (
    <div className="container lg:w-1/2 w-full flex lg:items-start my-5 lg:my-0 px-2">
      <img className="object-contain" src={image} alt={alt} />
    </div>
  );
}
