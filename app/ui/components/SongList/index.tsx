import Song from '../Song';

const SongList = (props: any) => {
    const { songs } = props;

    const heading = 'Top Songs';

    return (
        <div id="song_list">
            <>
                <h2>{heading}</h2>
                <ul>
                    {
                        songs?.map((song: any, index: number) => {
                            return <Song key={index} songData={song} index={index}/>
                        })
                    }
                </ul>
            </>
        </div>
    );
}

export default SongList;