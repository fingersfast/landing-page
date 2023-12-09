import { Nav } from "./components";
import { Hero, Footer } from "./sections";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className=" xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>

      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
