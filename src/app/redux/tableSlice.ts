import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Row {
  id: number;
  name: string;
  status: string;
}

interface TableState {
  rows: Row[];
}

const initialState: TableState = {
  rows: [
    { id: 1, name: "John Doe", status: "Active" },
    { id: 2, name: "Jane Smith", status: "Inactive" },
  ],
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    addRow: (state, action: PayloadAction<Row>) => {
      state.rows.push(action.payload);
    },
    deleteRow: (state, action: PayloadAction<number>) => {
      state.rows = state.rows.filter((row) => row.id !== action.payload);
    },
    updateRow: (state, action: PayloadAction<Row>) => {
      const index = state.rows.findIndex((row) => row.id === action.payload.id);
      if (index !== -1) state.rows[index] = action.payload;
    },
  },
});

export const { addRow, deleteRow, updateRow } = tableSlice.actions;
export default tableSlice.reducer;
