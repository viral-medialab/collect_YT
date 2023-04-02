import React, { useState } from 'react';
import './PremiumCard.css';

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
	j = Math.floor(Math.random() * (i + 1));
	x = a[i];
	a[i] = a[j]; 
	a[j] = x;
    }
    return a;
}

const PremiumCard = ({ data }) => {
  const [activeVideoIndexes, setActiveVideoIndexes] = useState([]);

  const handleVideoClick = (index) => {
    setActiveVideoIndexes([...activeVideoIndexes, index]);
  };

  const handleVideoClose = (index) => {
    setActiveVideoIndexes(activeVideoIndexes.filter((i) => i !== index));
  };

  return (
    <div className="video-list">
      {shuffle(data).map(({ thumbnail, id, title }, index) => (
        <div className="card" key={id}>
          {activeVideoIndexes.includes(index) ? (
            <div className="video-player">
              <iframe
                title={id}
                width="100%"
                height="100%"
                src={"https://www.youtube.com/embed/" + id}
                frameBorder="0"
                allowFullScreen
              />
              <button onClick={() => handleVideoClose(index)}>Close</button>
            </div>
          ) : (
            <div
              className="thumbnail"
              onClick={() => handleVideoClick(index)}
            >
              <img className="thumbnail" src={thumbnail} alt="Video thumbnail"/>
              <mark><strong>{title}</strong></mark>
            </div> 
          )}
        </div>
      ))}
    </div>
  );
};

export default PremiumCard;
