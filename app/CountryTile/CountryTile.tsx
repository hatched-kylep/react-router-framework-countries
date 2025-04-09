import { Link } from "react-router";
import type { CountryDataShort } from "~/types";

interface Props {
  country: CountryDataShort;
}

function CountryTile({ country }: Props) {
  return (
    <Link to={`/country/${encodeURIComponent(country.cca3)}`} className="block">
      <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="w-32 h-20 mb-4">
          <img
            src={country.flags.svg || "/placeholder.svg"}
            alt={country.flags.alt || `Flag of ${country.name.common}`}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <h2 className="text-lg font-semibold text-center">
          {country.name.common}
        </h2>
        <p className="text-sm text-gray-600 text-center mt-1">
          {country.name.official}
        </p>
      </div>
    </Link>
  );
}

export default CountryTile;
