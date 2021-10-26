import React, { useState, useEffect } from "react";
import "../App.css";
import { PieChart, Pie, Tooltip } from "recharts";
import { getTranzactions } from "../API/CategoriesRequest/TranzactionsRequestAPI";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const Apps = () => {
  const [categories, setCategories] = useState([]);
  const [type_of_operation, setType_of_operation] = useState("");

  const setAllData = async () => {
    try {
      const getAllTranzactions = await getTranzactions();
      setCategories(getAllTranzactions.data);
      console.log("доходи:", getAllTranzactions.data);
      if (getAllTranzactions.data.type_of_operation === "Дохід") {
        setType_of_operation(getAllTranzactions.data.type_of_operation);
        console.log("hey", type_of_operation);
      }
      return;
    } catch (e) {
      console.error(e);
    }
    return;
  };
  useEffect(() => {
    if (categories.count) return;
    return;
  }, [categories]);

  const data = [
    { name: "Some data 1", age: 245 },
    { name: "Some data 2", age: 238 },
    { name: "Some data 3", age: 2444 },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <p>Всі витрати та доходи можна згенерувати в таблиці</p>
      <PieChart width={400} height={400}>
        <Pie
          dataKey={"age"}
          isAnimationActive={false}
          data={data}
          cx={200}
          cy={200}
          outerRadius={130}
          fill="#1c2e68"
          label={"asfasf"}
        />
        <Tooltip />
      </PieChart>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Категорія</TableCell>
              <TableCell align="right">Сума:UAH</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((item) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{item.categories}</TableCell>
                <TableCell align="right">{item.sum}</TableCell>{" "}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button clasName="AppBattons" variant="contained" onClick={setAllData}>
        Згенерувати
      </Button>
    </div>
  );
};

export default Apps;
