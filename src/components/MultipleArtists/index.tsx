import React, { useState } from 'react';

const MultipleArtists = (props: any) => {
    const { searchName } = props;

    const [artist, setArtist] = useState({
        name: 'some name',
        images: ['1', '2']
    })

    const heading = 'Top Songs';

    const multipleResultsFindArtist = () => {
        //
    }

    return (
        <section className="col-xs-12 col-md-8 searchContainer">
			<div id="multi_results">
                <h3>{heading}</h3>
				<ul>
					<li onClick={multipleResultsFindArtist}>
                        <img className="artist_thumbs" src={ artist.images[0] } alt={ artist.name + ' Thumbnail Picture' }  />
                        &nbsp;&nbsp;{ artist.name }
                    </li>
				</ul>
			</div>
		</section>
    );
}

export default MultipleArtists;