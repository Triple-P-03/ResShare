import "./App.css";
// import { Vid } from "./components/Vid";
import { Videocard } from "./components/Videocard";

function App() {
  return (
    <div className="bg-gray-900 ">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2 space-y-2">
        {/* <Vid></Vid> this was the practice component */}
        <Videocard
          source="/file/2.mp4"
          thumb="/file/spider.jpg"
          title="Interstellar: A Stunning Composition"
          desc="Title track from the movie Interstellar"
        ></Videocard>
        <Videocard
          source="/file/1.webm"
          thumb="/file/thanos.jpg"
          title="Bling Bang Bang Born : A Creepy Nut Song"
          desc="Title track from the anime, Mashle "
        ></Videocard>
        <Videocard
          source="/file/3.mp4"
          thumb="/file/tom.jpg"
          title="Bella Ciao :Money Hiest Banger from last season"
          desc="Bella Ciao one last time "
        ></Videocard>
        <Videocard
          source="/file/2.mp4"
          thumb="/file/spider.jpg"
          title="Interstellar: A Stunning Composition"
          desc="Title track from the movie Interstellar"
        ></Videocard>
        <Videocard
          source="/file/1.webm"
          thumb="/file/thanos.jpg"
          title="Bling Bang Bang Born : A Creepy Nut Song"
          desc="Title track from the anime, Mashle "
        ></Videocard>
        <Videocard
          source="/file/3.mp4"
          thumb="/file/tom.jpg"
          title="Bella Ciao :Money Hiest"
          desc="Bella Ciao one last time "
        ></Videocard>
        <Videocard
          source="/file/2.mp4"
          thumb="/file/spider.jpg"
          title="Interstellar: A Stunning Composition"
          desc="Title track from the movie Interstellar"
        ></Videocard>
        <Videocard
          source="/file/1.webm"
          thumb="/file/thanos.jpg"
          title="Bling Bang Bang Born : A Creepy Nut Song"
          desc="Title track from the anime, Mashle "
        ></Videocard>
        <Videocard
          source="/file/3.mp4"
          thumb="/file/tom.jpg"
          title="Bella Ciao :Money Hiest"
          desc="Bella Ciao one last time "
        ></Videocard>
        <Videocard
          source="/file/2.mp4"
          thumb="/file/spider.jpg"
          title="Interstellar: A Stunning Composition"
          desc="Title track from the movie Interstellar"
        ></Videocard>
        <Videocard
          source="/file/1.webm"
          thumb="/file/thanos.jpg"
          title="Bling Bang Bang Born : A Creepy Nut Song"
          desc="Title track from the anime, Mashle "
        ></Videocard>
        <Videocard
          source="/file/3.mp4"
          thumb="/file/tom.jpg"
          title="Bella Ciao :Money Hiest"
          desc="Bella Ciao one last time "
        ></Videocard>
        <Videocard
          source="/file/2.mp4"
          thumb="/file/spider.jpg"
          title="Interstellar: A Stunning Composition"
          desc="Title track from the movie Interstellar"
        ></Videocard>
        <Videocard
          source="/file/1.webm"
          thumb="/file/thanos.jpg"
          title="Bling Bang Bang Born : A Creepy Nut Song"
          desc="Title track from the anime, Mashle "
        ></Videocard>
        <Videocard
          source="/file/3.mp4"
          thumb="/file/tom.jpg"
          title="Bella Ciao :Money Hiest"
          desc="Bella Ciao one last time "
        ></Videocard>
      </div>
    </div>
  );
}

export default App;
