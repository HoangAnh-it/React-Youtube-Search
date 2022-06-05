import '../styles/Search.scss';
import { useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const Search = () => {
    const [keyword, setKeyword] = useState('');
    const [videos, setVideos] = useState([]);
    const fetchData = async () => {
        if (!keyword.trim()) {
            return;
        }

        const res = await axios({
            method: 'GET',
            url: 'https://www.googleapis.com/youtube/v3/search',
            params: {
                part: 'snippet',
                maxResults: 20,
                key: 'config_your-keyId',
                q: keyword,
            }
        });
        const items = res?.data?.items;
        if (items && items.length > 0) {
            const newVideos = items.map(item => {
                return {
                    id: item.id.videoId,
                    title: item.snippet.title,
                    createAt: item.snippet.publishedAt,
                    author: item.snippet.channelTitle,
                    description: item.snippet.description,
                }
            });
            setVideos(newVideos);
        }
    }

    return (
        <div className="yt">
            <div className="search-field">
                <input type="text" placeholder="Search" value={keyword} onChange={(event) => setKeyword(event.target.value)} />
                <button onClick={() => fetchData()}>Search</button>
            </div>

            <div className="results">
                {
                    videos && videos.length > 0 &&
                    videos.map(video => 
                        <div className="item" key={ video.id}>
                            <div className="left">
                                <iframe 
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title="Youtube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                                </iframe>
                            </div>
                            <div className="right">
                                <div className="title">{ video.title }</div>
                                <div className="created-at">Created at: {moment(video.createAt).format('DD-MM-YYY HH:mm:ss A')}</div>
                                <div className="author">Author: { video.author}</div>
                                <div className="description">{ video.description}</div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Search;
