import React from 'react';
import { useStateContext } from '../../context/state';

const MultipleArtists = (props: any) => {
    const { artists } = props;
    const { getArtist } = useStateContext();

    return (
        <section className="col-xs-12 col-md-8 searchContainer">
			<div id="multi_results">
				<ul>
                    {
                        artists.map((artist: any) => {
                           return <li onClick={() => getArtist(artist.name)}>
                                <img className="artist_thumbs" src={ artist.images[0] } 
                                alt={ artist.name + ' Thumbnail Picture' }  />
                                    &nbsp;&nbsp;{ artist.name }
                            </li>
                        })
                    }
				</ul>
			</div>
		</section>
    );
}

export default MultipleArtists;