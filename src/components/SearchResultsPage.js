import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Search_results_api, GOOGLE_API_KEY } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import SearchCards from './SearchCards';
import { setChannelId } from '../utils/channelIdSlice';

const SearchResultsPage = () => {
  const [params] = useSearchParams();
  const query = params.get('q');
  const [searchResults, setSearchResults] = useState([]);
  const dispatcher = useDispatch();

  useEffect(() => {
    getSearchData();
    dispatcher(closeMenu());
  }, [query]);

  const getSearchData = async() =>{
    const data = await fetch(Search_results_api + query + "&key=" + GOOGLE_API_KEY);
    const json = await data.json();
    // console.log(json)
    setSearchResults(json.items);
  }

  return (
    <div className='p-2 w-full overflow-y-hidden'>
      {
        searchResults.map((result) => <Link key={result?.id?.videoId} to={'/watch?v=' + result?.id?.videoId} onClick={()=> dispatcher(setChannelId(result?.snippet?.channelId))}>
          <SearchCards data={result?.snippet}></SearchCards>
        </Link>)
        }
    </div>
  )
}

export default SearchResultsPage