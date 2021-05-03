export interface Song {
    name: string,
    url: string,
    index: number,
    artistName: string
}

export interface CurrentArtistDiscogs {
    name: string
}

export interface ArtistDetails {
    images: Array<any>,
    url: string,
    name: string
}

export interface CurrentSong {
    url: string,
    albumImageSource: string,
    albumName: string,
    name: string
}

export interface CurrentArtist {
    url: string,
    albumImageSource: string,
    albumName: string,
    name: string
}

export interface DefaultContext {
    searchTerm?: string,
    currentArtist?: CurrentArtist,
    songs?: Array<Song>,
    currentArtistDiscogs?: CurrentArtistDiscogs,
    artistDetails?: ArtistDetails,
    currentSong?: CurrentSong,
    setSearchTerm?: Function,
    getArtist?: Function,
    getSongs?: Function,
    getArtistDiscogs?: Function,
    getArtistDetails?: Function,
    setCurrentSong?: Function,
}