"use client"

import React, { Suspense } from 'react';
import SearchResults from '../SearchResults';
import SongList from '../SongList';
import { useStateContext } from '../../context/state';
import _ from 'lodash';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SearchResultsContainer = () => {
    const { state } = useStateContext();

    return (
        <section className="searchContainer">
            {
                state.toggleSearchResultsView && 
                <Suspense fallback={<Skeleton count={10} />}>
                    <SearchResults />
                </Suspense>
            }
            {
                !_.isEmpty(state.songs) && 
                <Suspense fallback={<Skeleton count={10} />}>
                    <SongList songs={state.songs ? state.songs : []} />
                </Suspense>
            }
		</section>
    );
}

export default SearchResultsContainer;