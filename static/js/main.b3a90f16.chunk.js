(this.webpackJsonpmusichar=this.webpackJsonpmusichar||[]).push([[0],{176:function(t,e,a){},177:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),r=a(55),o=a.n(r),i=(a(61),a(3)),c=a(4),l=a(1),u=a(6),h=a(5),p=a(13),m=a.n(p);var d=a(14);function g(t){var e,a,s,n,r=0,o=0,i=0,c=-1,l=101,u=0,h=0,p=[],m=[];t.track_features.audio_features.forEach((function(t){p.push(t.time_signature),h+=t.duration_ms,u+=t.valence,t.mode?(m.push(t.key.toString()+"+"),r++):(m.push(t.key.toString()+"-"),o++)})),t.track_objects.items.forEach((function(t){c<t.track.popularity&&(c=t.track.popularity,e=t.track.name,a=t.track.artists[0].name),l>t.track.popularity&&(l=t.track.popularity,s=t.track.name,n=t.track.artists[0].name),i+=t.track.popularity}));var g={major:r,minor:o,avgPopularity:Math.floor(i/t.track_features.audio_features.length),mostPopular:e,mostPopularArtist:a,leastPopular:s,leastPopularArtist:n,avgDurationMin:Math.round(h/t.track_features.audio_features.length/6e4),avgDurationSec:Math.round(h/t.track_features.audio_features.length/6e4%1*60),avgValence:(u/t.track_features.audio_features.length).toFixed(3),timeSigs:Object(d.a)(new Set(p)),sigCount:b(p),uniqueKeys:Object(d.a)(new Set(m.sort((function(t,e){return parseInt(t.slice(0,-1))-parseInt(e.slice(0,-1))})))),keyCount:f(m)};return console.log(g),g}function f(t){var e=Object(d.a)(new Set(t)),a={};return e.forEach((function(e){a[e]=t.filter((function(t){return t===e})).length})),a}function b(t){var e=Object(d.a)(new Set(t)),a={};return e.forEach((function(e){a[e]=t.filter((function(t){return t===e})).length})),a}var k=a(10),y=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var s;return Object(i.a)(this,a),(s=e.call(this,t)).state={labels:["major","minor"],datasets:[{data:[s.props.major,s.props.minor],backgroundColor:["#FF6384","#36A2EB"]}]},s.getState=s.getState.bind(Object(l.a)(s)),s}return Object(c.a)(a,[{key:"getState",value:function(){return{labels:["major","minor"],datasets:[{data:[this.props.major,this.props.minor],backgroundColor:["#FF6384","#36A2EB"]}]}}},{key:"componentDidUpdate",value:function(t){this.props!==t&&this.setState(this.getState())}},{key:"render",value:function(){return n.a.createElement(k.Doughnut,{data:this.state,key:this.props.minor})}}]),a}(s.Component),v=["#405BD5","#6F40D5","#BA40D5","#D540A5","#D5405B","#D56F40"],j={4:v[0],3:v[1],1:v[2],2:v[3],5:v[4],6:v[5]},E=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var s;return Object(i.a)(this,a),(s=e.call(this,t)).state={labels:Object.keys(s.props.sigCount),datasets:[{data:Object.values(s.props.sigCount),backgroundColor:s.getColors(Object.keys(s.props.sigCount))}]},s.getState=s.getState.bind(Object(l.a)(s)),s.getColors=s.getColors.bind(Object(l.a)(s)),s}return Object(c.a)(a,[{key:"getState",value:function(){return{labels:Object.keys(this.props.sigCount),datasets:[{data:Object.values(this.props.sigCount),backgroundColor:this.getColors(Object.keys(this.props.sigCount))}]}}},{key:"getColors",value:function(t){var e=[];return t.forEach((function(t){j[t]?e.push(j[t]):e.push("rgba("+Math.floor(255*Math.random()).toString()+", "+Math.floor(255*Math.random()).toString()+", "+Math.floor(255*Math.random()).toString()+")")})),e}},{key:"componentDidUpdate",value:function(t){this.props!==t&&this.setState(this.getState())}},{key:"render",value:function(){return n.a.createElement(k.Doughnut,{data:this.state,key:this.props})}}]),a}(s.Component),C={"0+":"#f9ddab","0-":"#FCF0DB","2+":"#f9a706","2-":"#FAB938","1+":"#ff6704","1-":"#FF8637","3+":"#e7062e","3-":"#F9274C","5+":"#a2217e","5-":"#CC2A9F","4+":"#511296","4-":"#6A17C4","6+":"#020759","6-":"#030B8B","8+":"#114fc6","8-":"#1E65EC","7+":"#038c5e","7-":"#04BE80","9+":"#7fc24f","9-":"#9BCF75","11+":"#1b998b","11-":"#23C4B2","10+":"#9fa713","10-":"#CBD518"},O={"0+":"C major","0-":"C minor","1+":"C\u266f/D\u266d major","1-":"C\u266f/D\u266d minor","2+":"D major","2-":"D minor","3+":"D\u266f/E\u266d major","3-":"D\u266f/E\u266d minor","4+":"E major","4-":"E minor","5+":"F major","5-":"F minor","6+":"F\u266f/G\u266d major","6-":"F\u266f/G\u266d minor","7+":"G major","7-":"G minor","8+":"G\u266f/A\u266d major","8-":"G\u266f/A\u266d minor","9+":"A major","9-":"A minor","10+":"A\u266f/B\u266d major","10-":"A\u266f/B\u266d minor","11+":"B major","11-":"B minor"},S=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var s;return Object(i.a)(this,a),(s=e.call(this,t)).state={labels:Object.keys(s.props.data).map((function(t){return O[t]})),datasets:[{data:Object.values(s.props.data),backgroundColor:s.getColors(Object.keys(s.props.data))}]},s.getState=s.getState.bind(Object(l.a)(s)),s.getColors=s.getColors.bind(Object(l.a)(s)),s.getModeColors=s.getModeColors.bind(Object(l.a)(s)),s}return Object(c.a)(a,[{key:"getState",value:function(){return{labels:Object.keys(this.props.data),datasets:[{data:Object.values(this.props.data)}]}}},{key:"getColors",value:function(t){var e=[];return t.forEach((function(t){e.push(C[t])})),e}},{key:"componentDidUpdate",value:function(t){this.props!==t&&this.setState(this.getState())}},{key:"getModeColors",value:function(t){var e=[];return t.forEach((function(t){C[t]?e.push(C[t]):e.push("rgba("+Math.floor(255*Math.random()).toString()+", "+Math.floor(255*Math.random()).toString()+", "+Math.floor(255*Math.random()).toString()+")")})),e}},{key:"render",value:function(){return n.a.createElement(k.Doughnut,{data:this.state,key:this.props})}}]),a}(s.Component),_=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var s;return Object(i.a)(this,a),(s=e.call(this,t)).state={track_objects:[],track_features:[],stats:null},s.storeTrackObjects=s.storeTrackObjects.bind(Object(l.a)(s)),s.storeTrackFeatures=s.storeTrackFeatures.bind(Object(l.a)(s)),s.storeStats=s.storeStats.bind(Object(l.a)(s)),s.getModeString=s.getModeString.bind(Object(l.a)(s)),s.getTimeSigString=s.getTimeSigString.bind(Object(l.a)(s)),s}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(t){var e,a,s;this.props.bleh!==t.bleh&&(e=this.props.token,a=this.props.bleh,s=this.storeTrackObjects,a?m.a.get("https://api.spotify.com/v1/playlists/"+a+"/tracks",{headers:{Authorization:"Bearer "+e}}).then((function(t){s(t.data)})).catch((function(t){console.error(t)})):m.a.get("https://api.spotify.com/v1/me/player/recently-played",{headers:{Authorization:"Bearer "+e}}).then((function(t){s(t.data)})).catch((function(t){console.error(t)})))}},{key:"storeTrackObjects",value:function(t){this.setState({track_objects:t}),function(t,e,a){var s=function(t){var e="";return t.items.forEach((function(t){e+=t.track.id+","})),e}(e);m.a.get("https://api.spotify.com/v1/audio-features",{headers:{Authorization:"Bearer "+t},params:{ids:s}}).then((function(t){a(t.data)})).catch((function(t){console.error(t)}))}(this.props.token,this.state.track_objects,this.storeTrackFeatures)}},{key:"storeTrackFeatures",value:function(t){this.setState({track_features:t}),this.storeStats()}},{key:"storeStats",value:function(){this.setState({stats:g(this.state)})}},{key:"getModeString",value:function(){var t="";return this.state.stats.major===this.state.stats.minor?t+="equally major and minor ":this.state.stats.major>this.state.stats.minor?t+="mostly major ":t+="mostly minor ",t}},{key:"getTimeSigString",value:function(){var t="[";return this.state.stats.timeSigs.forEach((function(e){t+=e.toString(),t+=", "})),t=t.slice(0,-2),t+="]"}},{key:"render",value:function(){return n.a.createElement("div",{id:"statsOutput"},!this.state.stats&&n.a.createElement("h3",null,"select a playlist to begin"),this.state.stats&&n.a.createElement("div",{id:"infoContainer"},n.a.createElement("h3",null,this.props.name),n.a.createElement("div",{id:"graphContainer"},n.a.createElement("div",{className:"graphBlock"},n.a.createElement("p",null,"This playlist is ",n.a.createElement("span",{className:"bold"},this.getModeString())," with ",n.a.createElement("span",{className:"bold"},this.state.stats.major," major song",1!==this.state.stats.major&&"s")," and ",n.a.createElement("span",{className:"bold"},this.state.track_objects.items.length-this.state.stats.major," minor song",this.state.track_objects.items.length-this.state.stats.major!==1&&"s"),"."),n.a.createElement(y,{id:this.props.bleh,major:this.state.stats.major,minor:this.state.stats.minor})),n.a.createElement("div",{className:"graphBlock"},n.a.createElement("p",null,"This playlist has songs in the following ",n.a.createElement("span",{className:"under"},"time signatures"),": ",n.a.createElement("span",{className:"bold"},this.getTimeSigString()),"."),n.a.createElement(E,{id:this.props.bleh,sigCount:this.state.stats.sigCount}),n.a.createElement("p",{className:"explanation"},'"The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure)."')),n.a.createElement("div",{className:"graphBlock"},n.a.createElement(S,{sigCount:this.state.stats.sigCount,id:this.props.bleh,data:this.state.stats.keyCount}))),n.a.createElement("p",null,"The average song duration is ",n.a.createElement("span",{className:"bold"},this.state.stats.avgDurationMin," minutes and ",this.state.stats.avgDurationSec," seconds.")),n.a.createElement("p",null,"This playlist has an average ",n.a.createElement("span",{className:"under"},"popularity")," of ",n.a.createElement("span",{className:"bold"},this.state.stats.avgPopularity),", with the most popular song being ",n.a.createElement("span",{className:"bold"},'"',this.state.stats.mostPopular,'" by ',this.state.stats.mostPopularArtist)," and the least popular song being ",n.a.createElement("span",{className:"bold"},'"',this.state.stats.leastPopular,'" by ',this.state.stats.leastPopularArtist),"."),n.a.createElement("p",{className:"explanation"},'"The popularity of a track is a value between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are."'),n.a.createElement("p",null,"This playlist has an average ",n.a.createElement("span",{className:"under"},"valence")," of ",n.a.createElement("span",{className:"bold"},this.state.stats.avgValence),"."),n.a.createElement("p",{className:"explanation"},' Valence is "a measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry)."')))}}]),a}(s.Component),w=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var s;return Object(i.a)(this,a),(s=e.call(this,t)).state={selected:null,token:s.props.token,no_data:!1},s.handleClick=s.handleClick.bind(Object(l.a)(s)),s}return Object(c.a)(a,[{key:"handleClick",value:function(t,e){this.setState({selected:t,name:e})}},{key:"render",value:function(){var t=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"sidebar"},n.a.createElement("ul",null,n.a.createElement("li",{onClick:function(){return t.handleClick(0,"Recently Played")},className:"playlist_item",key:0},"Recently Played"),Array.from(this.props.playlists).map((function(e){return n.a.createElement("li",{onClick:function(){return t.handleClick(e.id,e.name)},className:"playlist_item",key:e.id},e.name)})))),n.a.createElement(_,{token:this.state.token,name:this.state.name,bleh:this.state.selected}))}}]),a}(s.Component),D=window.location.hash.substring(1).split("&").reduce((function(t,e){if(e){var a=e.split("=");t[a[0]]=decodeURIComponent(a[1])}return t}),{});window.location.hash="";var B=D,M=(a(176),["ugc-image-upload","user-read-recently-played","playlist-read-collaborative","playlist-read-private"]),A=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){var t;return Object(i.a)(this,a),(t=e.call(this)).state={token:null,playlists:[],no_data:!1},t.setPlaylists=t.setPlaylists.bind(Object(l.a)(t)),t}return Object(c.a)(a,[{key:"setPlaylists",value:function(t){this.setState({playlists:t})}},{key:"componentDidMount",value:function(){var t,e,a=B.access_token;a&&(this.setState({token:a}),t=a,e=this.setPlaylists,m.a.get("https://api.spotify.com/v1/me/playlists?limit=30",{headers:{Authorization:"Bearer "+t}}).then((function(t){e(t.data.items)})).catch((function(t){console.error(t)})))}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},!this.state.token&&n.a.createElement("div",{id:"landing"},n.a.createElement("h1",null,"musichar"),n.a.createElement("p",null,"generate spotify playlist statistics"),n.a.createElement("a",{className:"btn btn--loginApp-link",href:"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("308136625304484d92879d69e98ccd89","&redirect_uri=").concat("http://leesgrey.github.io/musichar","&scope=").concat(M.join("%20"),"&response_type=token&show_dialog=true")},"log into spotify")),this.state.token&&n.a.createElement("div",{id:"loginDisplay"},n.a.createElement("div",{id:"header"},n.a.createElement("h1",null,"petalist")),n.a.createElement(w,{token:this.state.token,playlists:this.state.playlists}))))}}]),a}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},56:function(t,e,a){t.exports=a(177)},61:function(t,e,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.b3a90f16.chunk.js.map