import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { MdModeEdit, MdDelete } from 'react-icons/md';

import './index.css';
import { mockBooks } from './__tests__/mock'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Books = () => {
  const classes = useStyles();
  const [booksData, setBooksData] = useState(mockBooks)

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className="books-table-head">
          <TableRow className="books-table-head-row">
            <TableCell className="books-table-head-cell">Cover</TableCell>
            <TableCell className="books-table-head-cell">Title</TableCell>
            <TableCell className="books-table-head-cell">Author</TableCell>
            <TableCell className="books-table-head-cell">Shelves</TableCell>
            <TableCell className="books-table-head-cell"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="books-table-body">
          {booksData.map((book) => (
            <TableRow className="books-table-body-row" key={book.id}>
              <TableCell className="books-table-body-cell" component="th" scope="row">
                <img className="books-covers" src={book.cover} />
              </TableCell>
              <TableCell className="books-table-body-cell">{book.title}</TableCell>
              <TableCell className="books-table-body-cell">{book.author}</TableCell>
              <TableCell className="books-table-body-cell">{book.shelf}</TableCell>
              <TableCell className="books-table-body-cell">
                <MdModeEdit className="books-ic-actions" />
                <MdDelete className="books-ic-actions" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Books

