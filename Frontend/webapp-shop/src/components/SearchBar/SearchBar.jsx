import React from 'react';
import useFetch from '../../hooks/useFetch';

export default function SearchBar() {
  const categories = useFetch(`.https}/api/categories`);
  const tags = useFetch(`.https}/api/tags`);
}
