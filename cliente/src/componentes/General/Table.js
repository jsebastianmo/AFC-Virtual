import { useSortBy, useTable, useGlobalFilter, usePagination, useRowSelect } from 'react-table';
import GlobalFilter from './GlobalFilter';
import { Checkbox } from './Checkbox';

const Table = ({columns, data}) => {
  
  const tableInstance = useTable({
    columns: columns,
    data: data,
  }, useGlobalFilter, useSortBy, usePagination,
     useRowSelect, (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: 'selection',
            Header: ({getToggleAllRowsSelectedProps}) => (
              <Checkbox { ...getToggleAllRowsSelectedProps() } />
            ),
            Cell: ({row}) => (
              <Checkbox { ...row.getToggleRowSelectedProps() } />
            )
          },
          ...columns
        ]
      })
    }
  )

  const { getTableProps, getTableBodyProps, headerGroups, page, rows, canNextPage, canPreviousPage, pageOptions, gotoPage, pageCount, setPageSize, prepareRow, state, selectedFlatRows, setGlobalFilter } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  // Calcular el índice de la página inicial y final del carrusel
  const startIndex = Math.max(pageIndex - Math.floor(pageSize / 2), 0);
  const endIndex = Math.min(startIndex + pageSize, pageOptions.length);

  const handleEdit = (id) => {
    // Lógica para editar el elemento con el ID proporcionado
    console.log('Editar elemento con ID:', id);
  };

  const handleDelete = (id) => {
    // Lógica para eliminar el elemento con el ID proporcionado
    console.log('Eliminar elemento con ID:', id);
  };

  return (
    <>
      <div>
        <span> Mostrar </span>
        <select value={pageSize} onChange={e=>setPageSize(Number(e.target.value))}>
          {
            [5, 10, 50, 100].map(pageSize => (
              <option key={pageSize} value={pageSize}>
              { pageSize }
              </option>
            ))
          }
        </select>
        <span> Registros </span>
      </div>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
      <table { ...getTableProps() } className='table table-hover'>
        <thead className='bg-dark text-white'>
          {
            headerGroups.map((headerGroup)=>(
              <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    headerGroup.headers.map( (column) => (
                      <th { ...column.getHeaderProps(column.getSortByToggleProps()) } > 
                        {column.render('Header')} 
                        <span>
                          {
                            column.isSorted ? (column.isSortedDesc ? (<i class="bi bi-caret-up-fill"></i>) : (<i class="bi bi-caret-down-fill"></i>)) : ''
                          }
                        </span>
                      </th>
                    ) )
                  }
                  <th>
                    <i className="actions bi bi-three-dots-vertical" data-bs-toggle="tooltip" data-bs-placement="top" title="Acciones"></i>
                  </th>
              </tr>
            ))
          }
        </thead>
        <tbody { ...getTableBodyProps() }>
          {
            page.map((row)=>{
              prepareRow(row)
              return(
                <tr {...row.getRowProps()}>
                  {
                    row.cells.map((cell) => {
                      return <td {...cell.getCellProps()}> {cell.render('Cell')} </td>
                    })
                  }
                  <td>
                    {/* Botones de acción */}
                    <button className='btn' onClick={() => handleEdit(row.original.id)} data-bs-toggle="tooltip" data-bs-placement="top" title="Editar"><i className="bi bi-pencil-square"></i></button>
                    <button className='btn' onClick={() => handleDelete(row.original.id)} data-bs-toggle="tooltip" data-bs-placement="top" title="Eliminar"><i className="bi bi-trash3-fill"></i></button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div>
        <span>
          Mostrando{' '}
          <strong>
            {pageIndex + 1} en { pageOptions.length }
          </strong> {' '}
          de { rows.length } elementos
        </span>
      </div>
      
      <div className="pagination-container">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className='btn'> {'<<'} </button>
        {pageOptions.slice(startIndex, endIndex).map(pageNum => (
          <button
            key={pageNum}
            onClick={() => gotoPage(pageNum)}
            className={ pageNum === pageIndex ? 'btn pageSelected' : 'btn'}
          >
            {pageNum + 1}
          </button>
        ))}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className='btn'> {'>>'} </button>
      </div>
    </>
  )
}
export default Table;