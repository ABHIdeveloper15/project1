import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { addRow, deleteRow } from "../redux/tableSlice";
import styles from "../styles/Table.module.css";

const Table = () => {
  const rows = useSelector((state: RootState) => state.table.rows);
  const dispatch = useDispatch();

  const handleAdd = () => {
    const name = prompt("Enter name:");
    const status = prompt("Enter status:");
    if (name && status) {
      dispatch(addRow({ id: rows.length + 1, name, status }));
    }
  };

  const handleDelete = (id: number) => {
    dispatch(deleteRow(id));
  };

  return (
    <div>
      <button onClick={handleAdd}>Add Row</button>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.status}</td>
              <td>
                <button onClick={() => handleDelete(row.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
