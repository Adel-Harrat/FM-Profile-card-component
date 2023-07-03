import "./App.css";

const stats = [
  { id: 1, title: "80K", subtitle: "Followers" },
  { id: 2, title: "803K", subtitle: "Likes" },
  { id: 3, title: "1.4K", subtitle: "Photos" },
];

const App = () => {
  return (
    <div className="min-h-screen bg-darkCyan relative overflow-hidden grid place-items-center font-kumbh">
      <img
        src="./images/bg-pattern-top.svg"
        alt="background pattern top"
        className="absolute -top-40 -left-40 w-[50rem] lg:-top-96 lg:-left-36"
      />

      <img
        src="public/images/bg-pattern-bottom.svg"
        alt="background pattern bottom"
        className="absolute -bottom-40 -right-40 w-[50rem] lg:bottom-[-30rem] lg:-right-32x"
      />

      <main className="mx-5 bg-white relative w-80 rounded-xl overflow-hidden">
        {/* Cover bg goes here */}
        <section>
          <img src="./images/bg-pattern-card.svg" alt="Cover background" />
        </section>

        {/* Avatar goes here */}
        <img
          src="./images/image-victor.jpg"
          alt="Avatar"
          className="block mx-auto transform -translate-y-2/4 rounded-full border-[5px] border-solid border-white"
        />

        {/* User details goes here */}
        <section className="text-center transform -translate-y-9">
          <h1 className="flex items-center justify-center space-x-2">
            <a href="#" className="text-darkBlue font-bold">
              Victor Crest
            </a>
            <span className="font-thin text-grayishBlue">26</span>
          </h1>

          <p className="mt-2 text-sm text-grayishBlue">London</p>
        </section>

        {/* Stats goes here */}
        <section className="flex items-center justify-between px-10 py-5 border-t border-darkGray/25 transform -translate-y-3 pb-4">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <h2 className="font-bold text-darkBlue -mb-2">{stat.title}</h2>
              <span className="text-[0.65rem] text-grayishBlue tracking-widest">
                {stat.subtitle}
              </span>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default App;
