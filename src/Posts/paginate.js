import React from 'react';
import Pagination from 'react-bootstrap/Pagination';


const PaginateBx = ({perPageNum , totalPage , activePage , paginate}) => {
    let pageNumber = [];

    for(let i=1; i <= Math.ceil (totalPage / perPageNum); i++){
        pageNumber.push(i);
    }
    return (
        <Pagination className='pg'>
            {
                pageNumber.map((num)=>(

                <Pagination.Item
                 key={num}
                 active={num === activePage}
                 onClick={()=> paginate(num)}
                 >
                 {num}
                </Pagination.Item>

                ))
            }
        </Pagination>
    );
};

export default PaginateBx;