import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import * as ReactRouterDOM from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  getTranzactions,
  deleteTranzactions,
} from "../API/CategoriesRequest/TranzactionsRequestAPI";

const { Link } = ReactRouterDOM;

function Tranzactions() {
  const [tranzactions, setTranzactionsData] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const categoriesRequest = async () => {
    try {
      const getOne = await getTranzactions();
      setTranzactionsData(getOne.data);
    } catch (e) {
      console.error(e);
    }
    return;
  };

  const deleteOne = async (id) => {
    if (id) {
      await deleteTranzactions(id);
    }
    return;
  };

  useEffect(() => {
    if (tranzactions.count) return;
    categoriesRequest();
    return;
  }, [tranzactions]);

  return (
    <div className="App">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Категорія</TableCell>
              <TableCell align="right">Тип Операції</TableCell>
              <TableCell align="right">Сума</TableCell>
              <TableCell align="right">Дата</TableCell>
              <TableCell align="right">Детальний опис</TableCell>
              <TableCell align="right">Управління</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tranzactions.map((item) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right"> {item.categories}</TableCell>
                <TableCell align="right"> {item.type_of_operation}</TableCell>
                <TableCell align="right">{item.sum} </TableCell>
                <TableCell align="right"> {item.date}</TableCell>
                <TableCell align="right">{item.description} </TableCell>
                <TableCell align="right">
                  {" "}
                  <ButtonGroup disableElevation variant="contained">
                    <Button>
                      <Link
                        to={{ pathname: "/editTransactions", state: { item } }}
                      >
                        Edit
                      </Link>
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => deleteOne(item._id)}
                    >
                      {" "}
                      Delete
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button clasName="AppBattons" variant="contained">
        <Link to={{ pathname: "/createTranzactions" }}>
          Додати нову транзакцію.
        </Link>{" "}
      </Button>
    </div>
  );
}

export default Tranzactions;
