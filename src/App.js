// import React, { useEffect, useState } from 'react';
// import './App.css';
// import { Headers } from "./components/Headers";
// import { Loader } from "./components/Loader";
// import { Pixabay } from "./components/Pixabay";

// import axios from 'axios';
// import InfiniteScroll from 'react-infinite-scroll-component';



// function App() {
//   const [images, setImages] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   useEffect(() => {
//     fetchImages();
//   }, []);

//   const fetchImages = () => {
//     const apiRoot = "https://pixabay.com/api/";
//     const apiKey = "38085818-b31ba57d682bb58cb5016481e";
//     const category = "";
//     const count = 10;

//     const url = `${apiRoot}?key=${apiKey}&q=${category}&image_type=photo&per_page=${count}&page=${page}`;

//     axios
//       .get(url)
//       .then(res => {
//         console.log(res.data.hits);
//         if (res.data.hits.length > 0) {
//           setImages(prevImages => [...prevImages, ...res.data.hits]);
//           setPage(prevPage => prevPage + 1);
//         } else {
//           setHasMore(false);
//         }
//       })
//       .catch(error => console.error(error));
//   };

//   return (
//     <>
//       <div className="App">
//         <Headers />
//         <Loader />
//         <div className='container'>
//           <InfiniteScroll
//             dataLength={images.length}
//             next={fetchImages}
//             hasMore={hasMore}
//             loader={<Loader />} // Un componente de carga mientras se cargan más imágenes
//           >
//             <div className='row'>
//               {images.map(image => (
//                 <div className='col-lg-3' key={image.id}>
//                   <Pixabay url={image.largeImageURL} imageKey={image.id} imageTag={image.tags} />
//                 </div>
//               ))}
//             </div>
//           </InfiniteScroll>
//         </div>
//       </div>
//     </>
//   );
// }
// export default App

import React, { useEffect, useState } from 'react';
import './App.css';
import { Headers } from "./components/Headers";
import { Loader } from "./components/Loader";
import { Pixabay } from "./components/Pixabay";

import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    const apiRoot = "https://pixabay.com/api/";
    const apiKey = "38085818-b31ba57d682bb58cb5016481e";
    const category = "";
    const count = 10;

    const url = `${apiRoot}?key=${apiKey}&q=${category}&image_type=photo&per_page=${count}&page=${page}`;

    setIsLoading(true);

    axios
      .get(url)
      .then(res => {
        console.log(res.data.hits);
        if (res.data.hits.length > 0) {
          setImages(prevImages => [...prevImages, ...res.data.hits]);
          setPage(prevPage => prevPage + 1);
        } else {
          setHasMore(false);
        }
      })
      .catch(error => console.error(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <div className="App">
        <Headers />
        <div className='container'>
          <InfiniteScroll
            dataLength={images.length}
            next={fetchImages}
            hasMore={hasMore}
            loader={<div style={{ textAlign: 'center' }}>{isLoading && <Loader />}</div>}
          >
            <div className='row'>
              {images.map(image => (
                <div className='col-lg-3' key={image.id}>
                  <Pixabay url={image.largeImageURL} imageKey={image.id} imageTag={image.tags} />
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
