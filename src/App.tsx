import Card from "./components/Card"
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import { Card3 } from "./components/Card3";
import Card4 from "./components/Card4";
import Card5 from "./components/Card5";
import Card6 from "./components/Card6";
import Card7 from "./components/Card7";

function App() {
  return (
    <div className="grid h-screen place-items-center">
      <main className="grid grid-cols-4 grid-rows-6 gap-2 h-full min-w-[760px] md:w-[900px] lg:w-[1024px] p-20">
        <div className="bg-yellow-100 row-span-3 rounded-2xl">
          <Card />
        </div>
        <div className="bg-purple-500 row-span-2 col-span-2 rounded-2xl"><Card1 /></div>
        <div className="bg-purple-100 row-span-4 rounded-2xl"><Card2 /></div>
        <div className="bg-gray-100 row-span-2 rounded-2xl"><Card4 /></div>
        <div className="bg-yellow-500 row-span-2 rounded-2xl"><Card5 /></div>
        <div className="bg-yellow-500 row-span-3 rounded-2xl"><Card3 /></div>
        <div className="bg-gray-100 row-span-2 rounded-2xl"><Card6 /></div>
        <div className="bg-purple-500 row-span-2 col-span-2 rounded-2xl"><Card7 /></div>
      </main>
    </div>
  );
}

export default App;
