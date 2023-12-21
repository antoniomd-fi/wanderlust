import { useEffect, useState } from 'react';

interface UnsplashImage {
  urls: {
    regular: string;
  };
}
const ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

const useUnsplashImage = (searchQuery: string) => {
  const [imageUrl, setImageUrl] = useState<string>('');
  

  useEffect(() => {
    const fetchImage = async () => {
      try {
        
        const response = await fetch(
          `https://api.unsplash.com/search/photos?page=1&query=${searchQuery}&client_id=${ACCESS_KEY}`
        );
        const data = await response.json();

        const firstImage = data.results[0];
        const url = firstImage ? firstImage.urls.regular : '';
        setImageUrl(url);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, [searchQuery]);

  return { imageUrl };
};



export default useUnsplashImage;
