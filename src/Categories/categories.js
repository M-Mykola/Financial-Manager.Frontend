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
  getCategories,
  deleteCategories,
} from "../API/CategoriesRequest/CategoriesRequestAPI";
const { Link } = ReactRouterDOM;

function Categories() {
  const [categoriesdata, setCategoriesData] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const categoriesRequest = async () => {
    try {
      const getOne = await getCategories();
      setCategoriesData(getOne.data);
    } catch (e) {
      console.error(e);
    }
    return;
  };
  const deleteOne = async (id) => {
    if (id) {
      await deleteCategories(id);
    }
    return;
  };
  useEffect(() => {
    if (categoriesdata.count) return;
    categoriesRequest();
    return;
  }, [categoriesdata]);
  return (
    <div className="App">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Назва</TableCell>
              <TableCell align="right">Опис</TableCell>
              <TableCell align="right">Управління</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categoriesdata.map((item) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right"> {item.categories}</TableCell>
                <TableCell align="right">{item.description} </TableCell>

                <TableCell align="right">
                  {" "}
                  <ButtonGroup disableElevation variant="contained">
                    <Button>
                      {" "}
                      <Link
                        to={{ pathname: "/editCategories", state: { item } }}
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
        <Link to={{ pathname: "/createCategories" }}>
          Додати нову категорію
        </Link>{" "}
      </Button>
    </div>
  );
}

export default Categories;
