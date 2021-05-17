export interface Song {
    name: string,
    url: string,
    index: number,
    artistName: string
}

export interface Artist {
    name?: string,
    id?: string
}

export interface ArtistDetails {
    images?: Array<any>,
    url?: string,
    name?: string,
    profile?: string,
    uri?: string
}

export interface CurrentSong {
    preview_url?: string,
    href?: string,
    albumImageSource?: string,
    album?: {
        images: Array<{
            url: string
        }>,
        name: string
    },
    name?: string
}

export interface IDefaultContext {
    searchTerm?: string,
    songs?: Array<CurrentSong>,
    totalArtists?: Array<Artist>,
    artistDetails?: ArtistDetails,
    currentSong?: CurrentSong,
    songIndex?: number | null,
    displayNoTracksMessage? : boolean,
    showErrorView: boolean,
    getAuth: Function,
    getArtist: Function,
    getSongs: Function,
    getArtistDiscogs: Function,
    setTogglePlayer: Function,
    setToggleSearchResults: Function,
    setToggleProfile: Function,
    setToggleSearchResultsView: Function,
    setTotalArtists: Function,
    setToggleSidebar: Function,
    setCurrentSong: Function,
    setSongIndex: Function,
    setShowErrorView: Function,
    setDisplayNoTracksMessage: Function,
    togglePlayer: boolean,
    toggleSearchResults: boolean,
    toggleProfile: boolean,
    toggleSearchResultsView: boolean,
    toggleSidebar: boolean
}