import React, { useEffect, useState } from 'react';
import './App.css';
import { Headers } from "./components/Headers";
import { Loader } from "./components/Loader";
import { Pixabay } from "./components/Pixabay";
import { Input } from "./components/Input"

import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';


const cameras = ["Canon", "Nikon", "Sony", "Fujifilm", "Panasonic", "Olympus", "Leica", "Pentax"];

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [initialRandomImages, setInitialRandomImages] = useState([]);

  useEffect(() => {
    fetchRandomImages();
  }, []);

  useEffect(() => {
    setImages([]);
    setPage(1);
    setHasMore(true);
    fetchImages();
  }, [searchQuery]);

  const fetchImages = () => {
    const apiRoot = "https://pixabay.com/api/";
    const apiKey = "38085818-b31ba57d682bb58cb5016481e";
    const count = 10;

    let url = `${apiRoot}?key=${apiKey}&image_type=photo&per_page=${count}&page=${page}`;

    if (searchQuery) {
      url += `&q=${searchQuery}`;
    } else {
      url += `&order=popular&min_width=200&min_height=200`;
    }

    setIsLoading(true);
    axios
      .get(url)
      .then(res => {
        if (res.data.hits.length > 0) {
          const imagesWithInfo = res.data.hits.map(image => ({
            id: image.id,
            largeImageURL: image.largeImageURL,
            tags: image.tags,
            views: image.views,
            downloads: image.downloads,
            likes: image.likes,
            user: image.user,
            camera: image.camera || cameras[Math.floor(Math.random() * cameras.length)],
          }));

          setImages(prevImages => [...prevImages, ...imagesWithInfo]);
          setPage(prevPage => prevPage + 1);
        } else {
          setHasMore(false);
        }
      })
      .catch(error => console.error(error))
      .finally(() => setIsLoading(false));
  };

  const fetchRandomImages = () => {
    const count = 10;
    const randomImages = generateRandomImages(count);
    setInitialRandomImages(randomImages);
    setImages(randomImages);
  };

  const generateRandomImages = (count) => {
    const randomImages = [];

    for (let i = 0; i < count; i++) {
      const image = {
        id: `random-${i}`,
        largeImageURL: `https://picsum.photos/200/300?random=${i}`,
        tags: "Random Image",
        views: 0,
        downloads: 0,
        likes: 0,
        user: "Unknown",
        camera: cameras[Math.floor(Math.random() * cameras.length)],
      };

      randomImages.push(image);
    }

    return randomImages;
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <div className="App">
        <Headers />

        <div className='container'>
          <Input onSearch={handleSearch} />
          <InfiniteScroll
            dataLength={images.length}
            next={fetchImages}
            hasMore={hasMore}
            loader={<div style={{ textAlign: 'center' }}>{isLoading && <Loader />}</div>}
          >
            <div className='row'>
              {images.map((image, index) => (
                <div className='col-lg-3 col-12 col-sm-6' key={`${image.id}-${index}`}>
                  <Pixabay
                    url={image.largeImageURL}
                    imageKey={image.id}
                    imageTag={image.tags}
                    views={image.views}
                    downloads={image.downloads}
                    likes={image.likes}
                    user={image.user}
                    camera={image.camera}
                  />
                </div>
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
}

export default App;
