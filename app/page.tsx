
type Country = {
  name: {
    common: string;
  }
}
async function getCountries(): Promise<Country[]> {
  const countriesResponse = await fetch("https://restcountries.com/v3.1/all");
  return countriesResponse.json();
}
export default async function Home() {
  const countries = await getCountries();
  return (
      <section className="grid grid-cols-5 w-full container gap-2 mt-16">
        {countries.map((country) => (
          <h1 key={country.name.common}>{country.name.common}</h1>
        ))}
      </section>
  )
}
