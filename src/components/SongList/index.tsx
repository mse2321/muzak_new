import React from 'react';
import Song from '../Song/';

const SongList = (props: any) => {
    const { songs } = props;

    const heading = 'Top Songs';

    return (
        <section className="col-xs-12 col-md-8 searchContainer">
			<div id="results">
                <h2>{heading}</h2>
				<ul>
                    {
                        songs?.map((song: any, index: number) => {
                            return <Song key={index} songData={song} />
                        })
                    }
				</ul>
			</div>
		</section>
    );
}

export default SongList;