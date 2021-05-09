import React from 'react';
import Song from '../Song/';

const SongList = (props: any) => {
    const { songs } = props;

    const heading = 'Top Songs';

    return (
        <div id="song_list">
            <React.Fragment>
                <h2>{heading}</h2>
                <ul>
                    {
                        songs?.map((song: any, index: number) => {
                            return <Song key={index} songData={song} />
                        })
                    }
                </ul>
            </React.Fragment>
        </div>
    );
}

export default SongList;