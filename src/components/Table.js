import React from 'react';
import { useTable } from 'react-table';
import './table.css';

function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function App() {
  const data = [
    {
      name: 'Spongebob',
      age: 13,
      job: 'Software Developer',
    },
    {
      name: 'Batman',
      age: 32,
      job: 'Graphic Designer',
    },
    {
      name: 'John Snow',
      age: 45,
      job: 'Project Manager',
    },
  ];

  const columns = [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Age',
      accessor: 'age',
    },
    {
      Header: 'Job',
      accessor: 'job',
    },
  ];

  return (
    <div>
      <h1>React Table </h1>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
