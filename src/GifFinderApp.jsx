import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifFinderApp = () => {

  const [categories, setCategories] = useState([ 'Adidas Forum Low' ]);

  const onAddCategory = (newCategory) =>{
    if (categories.includes( newCategory )) return;
    setCategories( [newCategory, ...categories] );
  }

  return (
    <>
        <h1>GifFinderApp</h1>

        <AddCategory 
          onNewCategory = {event => onAddCategory( event )}
        />

        { 
          categories.map( category => (
              <GifGrid 
                key={ category } 
                category={ category }
              />
            )) 
        }
    </>
  )
}
