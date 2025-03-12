import { useState, useEffect } from "react";

export function useCatImage({ facto, font, color }) {
  const [imageURL, setImageURL] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!facto || typeof facto !== 'string') return;

    setLoading(true);  // Comienza la carga de la imagen
    const wordFact = facto.split(' ', 3).join(' ');  // Toma las primeras 3 palabras del hecho

    // Realiza la solicitud para obtener la imagen del gato
    fetch(`https://cataas.com/cat/says/${wordFact}?fontSize=${font}&fontColor=${color}`)
      .then((res) => {
        setImageURL(res.url);  // La URL de la imagen está directamente en `res.url`
        setLoading(false);  // Ya terminó de cargar la imagen
      })
      .catch((error) => {
        console.log(error.message);  // En caso de error, muestra un mensaje en consola
        setLoading(false);  // Asegúrate de que 'loading' se ponga en false, incluso si ocurre un error
      });
  }, [facto, font, color]);  // Dependencias de useEffect

  return { imageURL, loading };
}
