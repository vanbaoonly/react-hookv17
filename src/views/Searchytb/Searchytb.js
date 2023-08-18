import "./searchytb.scss";
import { useState } from "react"
import moment from "moment";
import axios from "axios";


const Searchytb = (props) => {
    const [Video, setVideo] = useState([])
    const [Query, setQuery] = useState()

    const Search = async () => {

        let response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                maxResults: '10',
                type: 'video',
                key: 'AIzaSyBjuCXXv4fbbK3ya66kD_NLf73NMAxJ-jw',
                q: Query
            }
            // key lấy trên https://console.cloud.google.com
        })
        console.log(">>check response", response.data.items)
        if (response && response.data.items) { // kiểm tr có data chua
            let itemdata = response.data.items;
            let result = [];
            if (itemdata && itemdata.length > 0) {
                itemdata.map((item) => {
                    let object = {};
                    object.id = item.id.videoId;
                    object.title = item.snippet.title;
                    object.time = item.snippet.publishTime;
                    object.description = item.snippet.description;
                    object.info = item.snippet.channelTitle;
                    result.push(object); // sau khi lấy data xong thì đẩy vào result
                })
            }
            console.log(">>data result", result) // kiểm tra kết quả
            setVideo(result); // dùng để render lại 
        }

    }
    return (
        <div className="container-search">
            <div className="input">
                <input className="form-control" type="text" value={Query} placeholder='Search...'
                    onChange={(event) => setQuery(event.target.value)}
                />
                <button className="btn btn-primary" onClick={() => Search()}>Search</button>
            </div>

            <div className="container-body">
                {
                    Video && Video.length > 0 &&
                    Video.map((item) => {
                        return (
                            <div className="item" key={item.id}>
                                <div className="left">
                                    <iframe width="500" height="300"
                                        src={`https://www.youtube.com/embed/${item.id}`}
                                        title=""
                                        frameborder="0"
                                        allow=""
                                        allowfullscreen>

                                    </iframe>
                                </div>
                                <div className="rigth">
                                    <div className="title">
                                        {item.title}
                                    </div>
                                    <div className="date">
                                        {moment(`${item.time}`).format('DD/MM/yyyy HH:mm a')}
                                        {/* <spa className="time-ago">
                                            {moment('2023-08-19T01:00:00').fromNow()}
                                        </spa> */}
                                    </div>
                                    <div className="channel">
                                        <div className="icon">&#9829;</div>
                                        <div className="info">{item.info}</div>
                                        <div className="bala">&#174;  </div>
                                    </div>
                                    <div className="description">
                                        {item.description}
                                    </div>
                                </div>
                            </div>

                        )

                    })
                }

            </div>
        </div >
    );
}

export default Searchytb;
// {
//     "kind": "youtube#searchListResponse",
//         "etag": "os1R7lUAoLYCy0onwdKBeApA0Js",
//             "nextPageToken": "CAIQAA",
//                 "regionCode": "VN",
//                     "pageInfo": {
//         "totalResults": 1000000,
//             "resultsPerPage": 2
//     },
//     "items": [
//         {
//             "kind": "youtube#searchResult",
//             "etag": "H2oo6kvIRxzRI4Mipv18G9XJzbw",
//             "id": {
//                 "kind": "youtube#video",
//                 "videoId": "n8lH00Og-3g"
//             },
//             "snippet": {
//                 "publishedAt": "2022-05-14T12:35:06Z",
//                 "channelId": "UCabsTV34JwALXKGMqHpvUiA",
//                 "title": "Triều Tiên đối phó với COVID-19 | VTV24",
//                 "description": "Nhiều nước trên thế giới và LHQ khẳng định sẵn sàng giúp Triều Tiên đối phó với COVID-19. ---------- Đồng hành cùng VTV ...",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://i.ytimg.com/vi/n8lH00Og-3g/default.jpg",
//                         "width": 120,
//                         "height": 90
//                     },
//                     "medium": {
//                         "url": "https://i.ytimg.com/vi/n8lH00Og-3g/mqdefault.jpg",
//                         "width": 320,
//                         "height": 180
//                     },
//                     "high": {
//                         "url": "https://i.ytimg.com/vi/n8lH00Og-3g/hqdefault.jpg",
//                         "width": 480,
//                         "height": 360
//                     }
//                 },
//                 "channelTitle": "VTV24",
//                 "liveBroadcastContent": "none",
//                 "publishTime": "2022-05-14T12:35:06Z"
//             }
//         },
//         {
//             "kind": "youtube#searchResult",
//             "etag": "BBJVWLdsFHeBKGFddHiAIPj-Duo",
//             "id": {
//                 "kind": "youtube#video",
//                 "videoId": "hNqIxLR73B0"
//             },
//             "snippet": {
//                 "publishedAt": "2023-06-19T12:30:29Z",
//                 "channelId": "UCd1T8CDVLrTMijqR4hQ6P-w",
//                 "title": "Popcorn in macro and slow motion #urday #closeup",
//                 "description": "Popcorn in macro and slow motion #urday #closeup.",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://i.ytimg.com/vi/hNqIxLR73B0/default.jpg",
//                         "width": 120,
//                         "height": 90
//                     },
//                     "medium": {
//                         "url": "https://i.ytimg.com/vi/hNqIxLR73B0/mqdefault.jpg",
//                         "width": 320,
//                         "height": 180
//                     },
//                     "high": {
//                         "url": "https://i.ytimg.com/vi/hNqIxLR73B0/hqdefault.jpg",
//                         "width": 480,
//                         "height": 360
//                     }
//                 },
//                 "channelTitle": "UrDay",
//                 "liveBroadcastContent": "none",
//                 "publishTime": "2023-06-19T12:30:29Z"
//             }
//         }
//     ]
// }

