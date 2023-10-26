import Results from "@/app/components/Results";

export default async function SearchPage({ params }) {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.API_ACCESS_TOKEN_AUTH}`
        }
      };
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${params.searchTerm}&language=en-US&page=1&include_adult=false`, options, { next: { revalidate: 10000 } });
    if(!response.ok){
        throw new Error("Failed to fetch data");
    }
      const data = await response.json();
      const results = data.results;
  return (
    <div>
        {results && results.length === 0 && (
            <h1 className="text-center pt-6">No results round</h1>
        )}
        {results && <Results results={results}/>}
    </div>
  )
}
