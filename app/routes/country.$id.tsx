import { Link } from "react-router";
import type { Route } from "./+types/country.$id";
import type { CountryDataLong } from "~/types";

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `Country Details - ${params.id}` },
    { name: "description", content: "Detailed information about the country." },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha/${params.id}?fields=name,cca3,currencies,capital,altSpellings,region,subregion,languages,latlng,landlocked,borders,population,timezones,continents,flags`
  );
  return response.json() as Promise<CountryDataLong>;
}

function CountryDetails({ loaderData }: Route.ComponentProps) {
  const country = loaderData;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Flag Section */}
          <div className="md:w-1/2">
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Country Details Section */}
          <div className="md:w-1/2 p-6">
            <h1 className="text-3xl font-bold mb-4">{country.name.common}</h1>
            <p className="text-gray-700 mb-2">
              <strong>Official Name:</strong> {country.name.official}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Region:</strong> {country.region}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Subregion:</strong> {country.subregion}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Capital:</strong> {country.capital.join(", ")}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Population:</strong> {country.population.toLocaleString()}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Languages:</strong>{" "}
              {Object.values(country.languages).join(", ")}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Currencies:</strong>{" "}
              {Object.values(country.currencies)
                .map((currency) => `${currency.name} (${currency.symbol})`)
                .join(", ")}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Borders:</strong>{" "}
              {country.borders.length > 0
                ? country.borders.map((border) => (
                    <Link
                      key={border}
                      to={`/country/${border}`}
                      className="text-blue-500 hover:underline mr-2"
                    >
                      {border}
                    </Link>
                  ))
                : "None"}
            </p>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-6 text-center">
        <Link
          to="/"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Back to All Countries
        </Link>
      </div>
    </div>
  );
}

export default CountryDetails;
