import type { Route } from "./+types/home";
import CountryTile from "../CountryTile/CountryTile";
import type { CountryDataShort } from "~/types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Countries" },
    { name: "description", content: "View all countries of the world!" },
  ];
}

export async function loader() {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=flags,name,cca3"
  );
  return response.json() as Promise<CountryDataShort[]>;
}

function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center py-4">
        The Countries of the World
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {loaderData?.map((country) => (
          <CountryTile key={country.name.common} country={country} />
        ))}
      </div>
    </div>
  );
}

export default Home;
