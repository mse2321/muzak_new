(this.webpackJsonpmuzak_new=this.webpackJsonpmuzak_new||[]).push([[0],{60:function(e,t,r){},61:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r.n(n),a=r(28),c=r.n(a),i=r(9),o=r(10),l=r(0),u=function(){return Object(l.jsxs)("section",{className:"error_view",children:[Object(l.jsx)(i.a,{icon:o.a}),Object(l.jsxs)("p",{children:[Object(l.jsxs)("span",{className:"opps",children:["Opps!",Object(l.jsx)("br",{})]}),Object(l.jsxs)("span",{children:["Something went wrong.",Object(l.jsx)("br",{}),"Please try again."]})]})]})},d=r(12),j=r.n(d),b=r(13),h=r(4),p=r(14),g=r.n(p),v=r(11),x=r.n(v),O="HXVjrLeEQhrviqTAitfJKDfwIvBMFImseaHzNnyI";console.log(""),console.log(O);var f=Object(n.createContext)({}),m=function(){return Object(n.useContext)(f)},y=function(e){var t=e.children,r=Object(n.useState)([]),s=Object(h.a)(r,2),a=s[0],c=s[1],i=Object(n.useState)([]),o=Object(h.a)(i,2),u=o[0],d=o[1],p=Object(n.useState)({}),v=Object(h.a)(p,2),m=v[0],y=v[1],w=Object(n.useState)({}),k=Object(h.a)(w,2),S=k[0],_=k[1],N=Object(n.useState)(""),T=Object(h.a)(N,2),C=T[0],P=T[1],E=Object(n.useState)(!1),A=Object(h.a)(E,2),D=A[0],I=A[1],M=Object(n.useState)(!1),V=Object(h.a)(M,2),B=V[0],R=V[1],z=Object(n.useState)(!1),F=Object(h.a)(z,2),q=F[0],J=F[1],X=Object(n.useState)(!1),H=Object(h.a)(X,2),L=H[0],K=H[1],Q=Object(n.useState)(!1),U=Object(h.a)(Q,2),Y=U[0],G=U[1],W=Object(n.useState)(null),Z=Object(h.a)(W,2),$=Z[0],ee=Z[1],te=Object(n.useState)(!0),re=Object(h.a)(te,2),ne=re[0],se=re[1],ae=Object(n.useState)(!1),ce=Object(h.a)(ae,2),ie=ce[0],oe=ce[1],le=function(){var e=Object(b.a)(j.a.mark((function e(){var t,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Basic ",t={"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "},"https://accounts.spotify.com/api/token","grant_type=client_credentials",e.prev=4,e.next=7,g.a.post("https://accounts.spotify.com/api/token","grant_type=client_credentials",{headers:t});case 7:r=e.sent,P(r.data.access_token),oe(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),oe(!0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=Object(b.a)(j.a.mark((function e(t){var r,n,s,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer "+C},s=(n={url:"https://api.spotify.com/v1/search?",q:t,type:"artist"}).url+"q="+n.q+"&type="+n.type,x.a.isEmpty(C)){e.next=19;break}return e.prev=5,e.next=8,g.a.get(s,{headers:r});case 8:a=e.sent,c(a.data.artists.items),oe(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(5),oe(!0),console.error(e.t0);case 17:e.next=20;break;case 19:console.log("problem with token for search");case 20:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t){return e.apply(this,arguments)}}(),de=function(){var e=Object(b.a)(j.a.mark((function e(t){var r,n,s,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer "+C},"https://api.spotify.com/v1/artists/",n="https://api.spotify.com/v1/artists/"+t+"/top-tracks?market=US",x.a.isEmpty(C)||"none"===t){e.next=21;break}return e.prev=5,e.next=8,g.a.get(n,{headers:r});case 8:s=e.sent,a=s.data.tracks,c=a.filter((function(e){return!x.a.isEmpty(null===e||void 0===e?void 0:e.preview_url)})),d(c),oe(!1),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(5),oe(!0),console.error(e.t0);case 19:e.next=22;break;case 21:console.log("problem with token for songs");case 22:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t){return e.apply(this,arguments)}}(),je=function(){var e=Object(b.a)(j.a.mark((function e(t){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.discogs.com/artists/",r="https://api.discogs.com/artists/"+t,e.prev=2,e.next=5,g.a.get(r);case 5:n=e.sent,y(n.data),oe(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),oe(!0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),be={songs:u,artistDetails:m,currentSong:S,totalArtists:a,togglePlayer:D,toggleSearchResults:B,toggleProfile:q,toggleSearchResultsView:L,toggleSidebar:Y,songIndex:$,displayNoTracksMessage:ne,showErrorView:ie,getAuth:le,getArtist:ue,getSongs:de,getArtistDiscogs:function(){var e=Object(b.a)(j.a.mark((function e(t){var r,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.discogs.com/database/search?",r="https://api.discogs.com/database/search?"+("q="+t+"&type=artist&token="+O),e.prev=3,e.next=6,g.a.get(r);case 6:n=e.sent,s=null===n||void 0===n?void 0:n.data.results[0].id,je(s.toString()),oe(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),oe(!0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),setCurrentSong:_,setTogglePlayer:I,setToggleSearchResults:R,setToggleProfile:J,setToggleSearchResultsView:K,setTotalArtists:c,setToggleSidebar:G,setSongIndex:ee,setDisplayNoTracksMessage:se,setShowErrorView:oe};return Object(l.jsx)(f.Provider,{value:be,children:t})},w=function(){var e=m(),t=e.setToggleProfile,r=e.setToggleSidebar;return Object(l.jsx)("div",{className:"info",children:Object(l.jsx)(i.a,{type:"button",icon:o.b,onClick:function(){return r(!0),void t(!0)}})})},k=function(){var e=m().currentSong;return Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{children:"Muzak"}),Object(l.jsxs)("p",{children:["Listen to available preview tracks from your favorite artists using ",Object(l.jsx)("a",{href:"https://www.spotify.com",target:"_blank",rel:"noopener noreferrer",children:"Spotify"})," and artist information from ",Object(l.jsx)("a",{href:"https://www.discogs.com/",target:"_blank",rel:"noopener noreferrer",children:"Discogs"}),"."]}),Object(l.jsx)(w,{}),Object(l.jsx)("audio",{id:"music",src:null===e||void 0===e?void 0:e.preview_url})]})},S=function(e){var t=e.children,r=m(),a=r.getAuth,c=r.showErrorView;return Object(n.useEffect)((function(){a()}),[a]),Object(l.jsxs)(s.a.Fragment,{children:[Object(l.jsx)(k,{}),t,c&&Object(l.jsx)(u,{})]})},_=r(65),N=r(66),T=r(67),C=function(){var e=m(),t=e.getArtist,r=e.setToggleSearchResultsView,s=e.setDisplayNoTracksMessage,a=e.displayNoTracksMessage,c=e.setShowErrorView,i=Object(n.useState)(""),o=Object(h.a)(i,2),u=o[0],d=o[1];return Object(l.jsxs)(_.a,{id:"search_form",children:[Object(l.jsx)(N.a,{placeholder:"Search for something?!","aria-label":"SearchBar","aria-describedby":"search",onChange:function(e){return function(e){c(!1);var t=e.target.value;d(t)}(e)}}),Object(l.jsx)(_.a.Append,{children:Object(l.jsx)(T.a,{type:"submit",id:"submit",onClick:function(){a&&s(!1),t(u),r(!0)},children:"Search"})})]})},P=function(){var e=(new Date).getFullYear();return Object(l.jsx)("footer",{children:Object(l.jsxs)("small",{children:["\xa9",e,Object(l.jsx)("a",{href:"http://www.meinnovation.net",target:"_blank",rel:"noopener noreferrer",children:"ME Innovation"})]})})},E=function(){var e,t,r,a=m(),c=a.currentSong,u=a.setTogglePlayer,d=a.setToggleSidebar,j=a.songs,b=a.songIndex,p=a.setSongIndex,g=a.setCurrentSong,v=document.getElementById("music"),x=Object(n.useState)("pause"),O=Object(h.a)(x,2),f=O[0],y=O[1],w=Object(n.useState)(!1),k=Object(h.a)(w,2),S=k[0],_=k[1];Object(n.useEffect)((function(){null===v||void 0===v||v.setAttribute("src",null===c||void 0===c?void 0:c.preview_url)}),[v,c]);return Object(l.jsx)("div",{className:"audioPlayer_container",children:Object(l.jsxs)("div",{id:"audioPlayer",children:[Object(l.jsx)("img",{className:"album_art",src:null===c||void 0===c||null===(e=c.album)||void 0===e||null===(t=e.images[0])||void 0===t?void 0:t.url,alt:""}),Object(l.jsx)("div",{id:"song_name_display",children:S?"Something went wrong. Please try again.":Object(l.jsxs)(s.a.Fragment,{children:[Object(l.jsx)("p",{className:"artist_name",children:null===c||void 0===c?void 0:c.name}),Object(l.jsx)("p",{className:"album",children:null===c||void 0===c||null===(r=c.album)||void 0===r?void 0:r.name})]})}),Object(l.jsx)("div",{id:"controls_wrap",children:Object(l.jsxs)("div",{id:"audio_controls",children:[Object(l.jsx)(i.a,{icon:o.f,id:"previous_song",role:"button",className:"previous_song"===f?"active_player_button":"",onClick:function(){return function(e){y(e);var t=b-1,r=j&&j[t];g(r),p(t)}("previous_song")}}),Object(l.jsx)(i.a,{icon:o.d,id:"play",role:"button",className:"play"===f?"active_player_button":"",onClick:function(){return y("play"),_(!v),void(null===v||void 0===v||v.play())}}),Object(l.jsx)(i.a,{icon:o.c,id:"pause",role:"button",className:"pause"===f?"active_player_button":"",onClick:function(){return y("pause"),void(null===v||void 0===v||v.pause())}}),Object(l.jsx)(i.a,{icon:o.g,id:"next_song",role:"button",className:"next_song"===f?"active_player_button":"",onClick:function(){return function(e){y(e);var t=b+1,r=j&&j[t];g(r),p(t)}("next_song")}})]})}),Object(l.jsx)("button",{id:"mobile_back",onClick:function(){d(!1),u(!1)},children:Object(l.jsx)("p",{children:"Back to results"})})]})})},A=function(){var e=m(),t=e.artistDetails,r=e.setToggleProfile,n=e.setToggleSidebar;return Object(l.jsxs)("div",{id:"artist_info",children:[Object(l.jsx)("div",{className:"close",children:Object(l.jsx)(T.a,{onClick:function(){return n(!1),void r(!1)},children:"X"})}),Object(l.jsx)("div",{className:"content",children:x.a.isEmpty(t)?"Nothing to see here until you search for something":Object(l.jsxs)(s.a.Fragment,{children:[Object(l.jsx)("h3",{children:null===t||void 0===t?void 0:t.name}),Object(l.jsx)("p",{children:null===t||void 0===t?void 0:t.profile}),Object(l.jsx)("a",{href:null===t||void 0===t?void 0:t.uri,target:"_blank",rel:"noreferrer",children:"Check out the rest of the "+(null===t||void 0===t?void 0:t.name)+" profile from Discogs"})]})})]})},D=function(){var e=m(),t=e.togglePlayer,r=e.toggleProfile,n=e.toggleSidebar,s=e.currentSong,a=e.displayNoTracksMessage,c=e.setDisplayNoTracksMessage;return Object(l.jsxs)("aside",{id:"album_player_section",className:n?"":"hidden",children:[(null===s||void 0===s?void 0:s.preview_url)?t&&Object(l.jsx)(E,{}):Object(l.jsxs)("div",{className:"no_tracks"+(a?"":" hidden"),children:[Object(l.jsx)("div",{className:"close",children:Object(l.jsx)(T.a,{onClick:function(){c(!1)},children:"X"})}),"Sorry can't find preview tracks available for this artist right now. Please try again, check out their profile or select a new artist."]}),r&&Object(l.jsx)(A,{})]})},I=function(){var e=m(),t=e.totalArtists,r=e.getSongs,n=e.getArtistDiscogs,s=e.setToggleSearchResultsView,a=e.songs,c=e.setToggleSearchResults,i=e.setTogglePlayer;return Object(l.jsxs)("div",{id:"search_results",children:[Object(l.jsx)("h2",{children:"Search Results"}),Object(l.jsx)("p",{children:"Please choose an option from the following:"}),Object(l.jsx)("ul",{children:x.a.isEmpty(t)?"Sorry there was a problem. Please try again":null===t||void 0===t?void 0:t.map((function(e,t){return Object(l.jsx)("li",{className:"result",onClick:function(){return t=null===e||void 0===e?void 0:e.name,o=null===e||void 0===e?void 0:e.id,i(!1),r(o).then(n(t)),!x.a.isEmpty(a)&&c(!0),void s(!1);var t,o},children:null===e||void 0===e?void 0:e.name},t)}))})]})},M=r(62),V=r(63),B=function(e){var t=e.songData,r=e.index,n=m(),s=n.setCurrentSong,a=n.setTogglePlayer,c=n.setToggleSidebar,u=n.setSongIndex,d=n.setDisplayNoTracksMessage;return Object(l.jsxs)(M.a,{as:"li",className:"tracks",children:[Object(l.jsx)(V.a,{xs:8,xl:11,children:null===t||void 0===t?void 0:t.name}),Object(l.jsx)(V.a,{className:"d-flex flex-row-reverse",children:Object(l.jsx)("button",{onClick:function(){s(t),c(!0),u(r),d(!0),a(!0)},id:"play_buttons",children:Object(l.jsx)(i.a,{icon:o.e})})})]})},R=function(e){var t=e.songs;return Object(l.jsx)("div",{id:"song_list",children:Object(l.jsxs)(s.a.Fragment,{children:[Object(l.jsx)("h2",{children:"Top Songs"}),Object(l.jsx)("ul",{children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(l.jsx)(B,{songData:e,index:t},t)}))})]})})},z=function(){var e=m(),t=e.songs,r=e.toggleSearchResultsView;return Object(l.jsxs)("section",{className:"searchContainer",children:[r&&Object(l.jsx)(I,{}),!x.a.isEmpty(t)&&Object(l.jsx)(R,{songs:t||[]})]})},F=r(64),q=function(){return Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(y,{children:Object(l.jsx)(F.a,{fluid:!0,children:Object(l.jsxs)(M.a,{id:"content_wrap",children:[Object(l.jsx)(V.a,{xs:12,md:7,lg:7,xl:7,children:Object(l.jsxs)(S,{children:[Object(l.jsx)(C,{}),Object(l.jsx)(z,{})]})}),Object(l.jsx)(V.a,{className:"sidebar_container",xs:12,md:5,lg:5,xl:5,children:Object(l.jsx)(D,{})}),Object(l.jsx)(P,{})]})})})})};r(60);c.a.render(Object(l.jsx)(q,{}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.bdd30c27.chunk.js.map