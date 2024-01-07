import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useMemo } from 'react';

export default function DataTable({ pageSizeOption, isCheckbox, tableStyles, paginationModels, tableHeader, tableData }) {

    const tableHeaders = useMemo(() => {
        return tableHeader;
    }, [tableHeader])
    const tableDatas = useMemo(() => {
        return tableData;
    }, [tableData])

    const paginationModel = useMemo(() => {
        return { page: 0, pageSize: 5 };
    }, [paginationModels])

    const tableStyle = useMemo(() => {
        return { height: 400, width: '100%' };
    }, [tableStyles])

    const isCheckboxSelection = useMemo(() => {
        return false;
    }, [isCheckbox])

    const pageSizeOptions = useMemo(() => {
        return [5, 10];
    }, [pageSizeOption])

    return (
        <div style={tableStyle}>
            <DataGrid
                rows={tableDatas}
                columns={tableHeaders}
                initialState={{
                    pagination: {
                        paginationModel: paginationModel,
                    },
                }}
                pageSizeOptions={pageSizeOptions}
                checkboxSelection={isCheckboxSelection}
            />
        </div>
    );
}



// const column = [
//     { field: 'firstName', headerName: 'First name', width: 130 },
//     { field: 'lastName', headerName: 'Last name', width: 130 },
//     {
//         field: 'age',
//         headerName: 'Age',
//         type: 'number',
//         width: 90,
//     },
//     {
//         field: 'fullName',
//         headerName: 'Full name',
//         description: 'This column has a value getter and is not sortable.',
//         sortable: false,
//         width: 160,
//         valueGetter: (params) =>
//             `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//     },
//     { field: 'id', headerName: 'ID', width: 200 },
// ];

// function orderColumns(columns, order) {
//     const orderedColumns = order.map(field => columns.find(column => column.field === field));
//     return orderedColumns;
// }

// const desiredOrder = ['id', 'firstName', 'lastName', 'age', 'fullName'];
// const result = orderColumns(column, desiredOrder);
// console.log(result);