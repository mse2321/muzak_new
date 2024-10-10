"use client"

import React, { Suspense } from 'react';
import SongList from '../SongList';
import { useStateContext } from '../../../context/state';
import _ from 'lodash';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SearchResultsContainer = () => {
    const { state } = useStateContext();

    return (
        <section className="song_search_container">
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