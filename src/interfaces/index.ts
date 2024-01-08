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

export interface IState {
    searchTerm?: string,
    songs?: Array<CurrentSong>,
    totalArtists?: Array<Artist>,
    artistDetails?: ArtistDetails,
    currentSong?: CurrentSong,
    songIndex?: number | null,
    displayNoTracksMessage? : boolean,
    token?: string,
    showErrorView: boolean,
    togglePlayer: boolean,
    toggleSearchResults: boolean,
    toggleProfile: boolean,
    toggleSearchResultsView: boolean,
    toggleSidebar: boolean,
}

export interface IStateReducer {
    state: any,
    dispatch: Function
}

export interface IAction {
    type: string,
    payload?: any
}

