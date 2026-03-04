import CardList from "./components/CardList";
import { people } from "./data/people";

function App() {
  return (
    <main className="min-h-screen bg-slate-100 py-10 px-4">
      <section className="mx-auto w-full max-w-6xl">
        <header className="mb-8">
          <h1 className="text-center text-3xl font-bold text-slate-900">
            ID Card Generator
          </h1>
          <p className="mt-2 text-center text-slate-600">
            shecan code ID card
          </p>
        </header>

        <CardList people={people} />
      </section>
    </main>
  );
}

export default App;
