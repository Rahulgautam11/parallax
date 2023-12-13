import React, { useState, useMemo, useEffect } from 'react';
import Searchbar from '../../common/Searchbar/Searchbar';
import './style.scss'

const columns = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'location', label: 'Location' },
];

const data = [
    { name: 'John Doe', age: 25, location: 'New York' },
    { name: 'Jane Smith', age: 30, location: 'San Francisco' },
    { name: 'Bob Johnson', age: 22, location: 'Chicago' },
    { name: 'Doe', age: 25, location: 'New York' },
    { name: 'Smith', age: 30, location: 'San Francisco' },
    { name: 'Johnson', age: 22, location: 'Chicago' },
    { name: 'John Doe', age: 25, location: 'New York' },
    { name: 'warner', age: 30, location: 'San Francisco' },
    { name: 'Bob', age: 22, location: 'Chicago' },
    { name: 'maxwell', age: 25, location: 'New York' },
    { name: 'jonny', age: 30, location: 'San Francisco' },
    { name: 'simmy', age: 22, location: 'Chicago' },
    { name: 'moni', age: 25, location: 'India' },
    { name: 'dico', age: 30, location: 'San Francisco' },
    { name: 'lila', age: 22, location: 'Chicago' },
    { name: 'qiul', age: 25, location: 'New York' },
    { name: 'god', age: 30, location: 'San Francisco' },
    { name: 'dummu', age: 22, location: 'Chicago' },
    { name: 'Jolly', age: 25, location: 'New York' },
    { name: 'silla', age: 30, location: 'India' },
    { name: 'rahul', age: 22, location: 'India' },

];

const DataTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const rowsPerPage = 8;


    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(0);
    };
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const filteredAndSortedData = useMemo(() => {
        let filteredData = data;

        if (searchTerm) {
            filteredData = data.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        }
        return filteredData;
    }, [data, searchTerm]);

    const paginatedData = useMemo(() => {
        const startIndex = currentPage * rowsPerPage;
        return filteredAndSortedData.slice(startIndex, startIndex + rowsPerPage);
    }, [filteredAndSortedData, currentPage, rowsPerPage]);

    return (
        <div className='record_container'>

            <h1 className='heading_tittle'>HERE SOME RECORD OF OUR CLIENT </h1>
            <Searchbar
                type="text"
                placeholder="Search Name..."
                value={searchTerm}
                onChange={handleSearch}
            />

            <table className='Table_main'>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th
                                key={column.key}
                            >
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {paginatedData ? paginatedData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((column) => (
                                <td key={column.key}>
                                    {row[column.key]}
                                </td>
                            ))}
                        </tr>
                    )) : "No Record Found"
                    }
                </tbody>
            </table>

            <div className='pagination_wrap'>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0}>
                    Previous
                </button>
                <span >Page {currentPage + 1}</span>
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage >= Math.ceil(filteredAndSortedData.length / rowsPerPage) - 1}
                >
                    Next
                </button>
            </div>


        </div>
    );
}
export default DataTable;