import Results from "./components/Results";

const API_ACCESS_TOKEN_AUTH = process.env.API_ACCESS_TOKEN_AUTH;
export default async function Home({ searchParams }) {
    const genre = searchParams.genre || "fetchTrending";
    const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_ACCESS_TOKEN_AUTH}`
    }
  };
  
  const response = await fetch(`https://api.themoviedb.org/3/${genre === "fetchTopRated" ? 'movie/top_rated' : 'trending/movie/week'}?language=en-US&page=1`, options, { next: { revalidate: 10000 } });
  if(!response.ok){
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  const results = data.results;
  // console.log(results);
  return (
    <div>
      <Results results={results}/>
    </div>
  )
}
