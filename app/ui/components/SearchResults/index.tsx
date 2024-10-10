import _ from 'lodash';

const SearchResults = (props: any) => {
    const {
        submitSearch,
        totalArtists
    } = props;
    return (
        <div className="search_auto_complete">
            <ul>
                {
                    !_.isEmpty(totalArtists) ? totalArtists?.map((artist?: any, index?: number) => {
                        return <li key={index} className="result" onClick={() => submitSearch(artist?.name, artist?.id)}>
                            { artist?.name }
                        </li>
                    }) : <p className="search_issue">Sorry there was a problem. Please try again</p>
                }
            </ul>
        </div>
    );
}

export default SearchResults;