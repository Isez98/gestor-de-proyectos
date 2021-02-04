import React from 'react';
import { useTable, usePagination } from 'react-table';


const Table = ({projectsData}) => {

  //console.log(projectsData)
  const data = React.useMemo(() => 
  Object.keys(projectsData).map((key, index) => ({
    proyectName: projectsData[key].proyectName,
    startDate: projectsData[key].startDate,
    typeProyect: projectsData[key].typeProyect,
    enterpriseProject: projectsData[key].enterpriseProject,
    objectiveProject: projectsData[key].objectiveProject,
    statusProject: projectsData[key].statusProject,
    _id: projectsData[key]._id
  })),
  [projectsData]
)

  const columns = React.useMemo(
    () => [
      {
        Header: 'Proyecto',
        accessor: 'proyectName', // accessor is the "key" in the data
      },
      {
        Header: 'Fecha De Inicio',
        accessor: 'startDate',
      },
      {
        Header: 'Tipo De Proyecto',
        accessor: 'typeProyect'
      },
      {
        Header: 'Empresa',
        accessor: 'enterpriseProject'
      },
      {
        Header: 'Objetivo',
        accessor: 'objectiveProject'
      },
      {
        Header: 'Estatus',
        accessor: 'statusProject'
      },
      {
        Header: 'ID',
        accessor: '_id',
        show: false
      }
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of rows, we'll use page
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    { 
      columns, 
      data, 
      initialState: {hiddenColumns: "_id", pageIndex: 0}
    },
    usePagination
  )

  return (
    <div>
    <table {...getTableProps()} style={{ border: 'solid 1px' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: 'solid 1px',
                  color: 'black',
                  fontWeight: 'bold',
                  borderRight: 'solid 1px'
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
      {page.map((row, i) => {
        prepareRow(row)
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
            })}
          </tr>
        )
      })}
      </tbody>
    </table>
    <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  )

};

export default Table;