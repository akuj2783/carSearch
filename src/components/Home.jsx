import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import Card from './card';
import { useNavigate, useParams } from 'react-router-dom';
import { useSearch } from '../context/searchContext';
import SearchBar from './searchBar';

const Home = () => {
    const navigate = useNavigate();
    const { searchInput } = useSearch();
    const { pageNumber } = useParams();

   const [items,setItems]=useState({ cars: [] });
   const [itemOffset, setItemOffset] = useState(0);
   const itemsPerPage=6;

    useEffect(()=>{
    const dataFilePath = '../../db.json';

    fetch(dataFilePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        setItems(jsonData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    },[pageNumber])

    const filteredItems = items.cars.filter((car) =>
      car.name.toLowerCase().includes(searchInput.toLowerCase())
    );  

  
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredItems.slice(itemOffset, endOffset);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.cars.length;
    setItemOffset(newOffset);
    // window.location.href = `/page/${event.selected}`;
    navigate(`/page/${event.selected + 1}`)
  };

  return (
    <div>
    <SearchBar/>
    <Card currentItems={currentItems}/>

      <ReactPaginate
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      renderOnZeroPageCount={null}
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      pageCount={10}
      containerClassName={'pagination justify-content-center'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
      breakLinkClassName={'page-link'}
      activeClassName={'active'}
      />
    </div>
  )
}

export default Home
