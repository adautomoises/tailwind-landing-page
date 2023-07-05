export function AboutUs() {
  return (
    <section id="sobre" className="flex flex-col items-center p-2 sm:p-4 md:p-8 lg:p-16 xl:p-20">
      <div className="w-full mb-2">
        <span className="text-primary text-lg font-semibold">Feedback</span>
      </div>
      <div className="w-full mb-5">
        <h3 className="text-4xl font-bold xl:leading-4 text-[#222222] mb-2">Sobre nós</h3>
        <div className="w-1/5 border-2 border-primary border-solid"></div>
      </div>
      <div className="w-full flex overflow-x-auto gap-2 p-2">
        {[
          [
            "src/assets/sobre.png",
            "Lorem Ipsum",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          ],
          [
            "src/assets/sobre.png",
            "Lorem Ipsum",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          ],
          [
            "src/assets/sobre.png",
            "Lorem Ipsum",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          ],
        ].map(([image, title, description], index) => (
          <div
            className=" min-w-fit md:min-w-[50%]  py-8 px-2 shadow-md border-t-2 border-[gray]"
            key={index}
          >
            <img src={image} alt={title} />
            <span className="text-[24px] font-semibold">{title}</span>
            <p className="text-[14px] break-words">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
