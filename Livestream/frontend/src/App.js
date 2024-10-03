import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './App.css';

function App() {
  const [rtspUrl, setRtspUrl] = useState('');
  const [streamUrl, setStreamUrl] = useState('');
  const [overlays, setOverlays] = useState([]);

  // Fetch overlays from backend
  useEffect(() => {
    fetch('http://localhost:5000/api/overlays')
      .then((res) => res.json())
      .then((data) => setOverlays(data))
      .catch((error) => console.error('Error fetching overlays:', error));
  }, []);

  // Handle RTSP URL
  const handleStreamStart = () => {
    fetch('http://localhost:5000/stream', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rtsp_url: rtspUrl }),
    })
      .then((res) => res.json())
      .then(() => setStreamUrl(rtspUrl))
      .catch((error) => console.error('Error starting stream:', error));
  };

  return (
    <div className="App">
      <h1>Livestream with RTSP</h1>
      <input
        type="text"
        placeholder="Enter RTSP URL"
        value={rtspUrl}
        onChange={(e) => setRtspUrl(e.target.value)}
      />
      <button onClick={handleStreamStart}>Play Stream</button>

      {streamUrl && (
        <div className="video-container">
          <ReactPlayer
            url={streamUrl}
            playing
            controls
            volume={0.8}
            width="100%"
            height="100%"
          />
          {}
          {overlays.map((overlay) => (
            <div
              key={overlay._id}
              className="overlay"
              style={{
                top: overlay.position?.top,
                left: overlay.position?.left,
                width: overlay.size?.width,
                height: overlay.size?.height,
              }}
            >
              {overlay.content}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
