import React, { useEffect, useState } from 'react';
import axios from 'axios';

const YouTubeChapters = ({ videoUrl, apiKey }) => {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const getChapters = async () => {
      const videoId = getVideoId(videoUrl);
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet%2C+contentDetails&key=${apiKey}`);
      const items = response.data.items;
      if (items.length) {
        const chapterData = parseChapters(items[0].contentDetails.chapters);
        setChapters(chapterData);
      }
    };
    getChapters();
  }, [videoUrl]);

  const getVideoId = (url) => {
    const videoId = url.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
      return videoId.substring(0, ampersandPosition);
    }
    return videoId;
  };

  const parseChapters = (chapters) => {
    return chapters.map((chapter) => {
      return {
        title: chapter.title,
        startTime: parseDuration(chapter.startOffset),
      };
    });
  };

  const parseDuration = (duration) => {
    const match = duration.match(/(\d+)(?=[HMS])/ig) || [];
    return match.reduce((acc, time) => {
      return acc * 60 + parseInt(time, 10);
    }, 0);
  };

  return (
    <div>
      <iframe width="560" height="315" src={videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <ul>
        {chapters.map((chapter, index) => (
          <li key={index}>{chapter.title} - {chapter.startTime}</li>
        ))}
      </ul>
    </div>
  );
};

export default YouTubeChapters;
