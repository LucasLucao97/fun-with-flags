import { Card, Footer, Header } from './components';
import Grid from './components/Grid';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Grid>
          {countries.map(({ id, country, capital, region, population }) =>
            <Card
              key={id}
              country={country}
              capital={capital}
              region={region}
              population={population}
            />
          )}
        </Grid>
      </main>
      <Footer />
    </>
  );
}