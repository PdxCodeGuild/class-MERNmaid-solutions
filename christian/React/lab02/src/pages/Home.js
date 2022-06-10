import image from "../images/me.jpg";

const Home = () => {
  return (
    <div className=" bg-slate-700 h-screen">
      <p className="flex justify-center text-white text-5xl">⬆️click above</p>
      <div className="container flex justify-center">
        <img className="h-32 w-32 pt-3" src={image}></img>
      </div>
      <h1 className="flex justify-center text-white text-5xl pt-5">
        Christian Alvarado
      </h1>
      <p className="flex justify-center text-white pt-3 text-bold">
        Lorem ipsum dolor sit amet, debitis salutatus sea cu. In vidit congue
        referrentur nec, duo mentitum necessitatibus ne, eu ius eius fabellas.
        Elit inani his ad, id docendi copiosae sed. Omnium feugait has in. Cu
        qui accusata mnesarchum, an imperdiet deterruisset sit. Lorem ipsum
        dolor sit amet, debitis salutatus sea cu. In vidit congue referrentur
        nec, duo mentitum necessitatibus ne, eu ius eius fabellas. Elit inani
        his ad, id docendi copiosae sed. Omnium feugait has in. Cu qui accusata
        mnesarchum, an imperdiet deterruisset sit.
      </p>
      <div className="flex justify-center">
        <a className="pt-5" href="https://github.com/chrisalv27/StarWay">
          Project Starway ⬅️
        </a>
      </div>
    </div>
  );
};

export default Home;
