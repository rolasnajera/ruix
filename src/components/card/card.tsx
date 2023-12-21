import imageTest from "../../assets/imagetest.jpg";
import { Chip } from "../chip";
// Core container
//image
// Author and date
// Title
// Summary
// Tags
export default function Card() {
  return (
    <div id="container" className="flex flex-col space-y-2 p-4 w-full bg-lime-300">
      <div id="card-header" className="my-3">
        <img src={imageTest} className="min-w-full" />
      </div>
      <div id="card-body" className="flex flex-col space-y-2 py-2">
        <p id="author-date" className="text-sm font-semibold text-violet-600">
          Olivia Rhye &#183; 20 Jan 2022
        </p>
        <h1 id="Title" className="text-xl font-semibold md:text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, fugit.
        </h1>
        <div id="summary" className="text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum reprehenderit deserunt
          mollitia nisi vero magni velit excepturi delectus quod nihil?
        </div>
      </div>
      <div id="footer" className="flex flex-row flex-wrap space-x-2">
        <Chip label="Default" />
        <Chip label="Success" color="success" size="xs" />
        <Chip label="Danger" color="danger" size="lg" />
        <Chip label="Stone" color="stone" size="xl" />
      </div>
    </div>
  );
}
