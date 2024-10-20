// productSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  categoryFilter: string | null;
}

const initialState: ProductState = {
  categoryFilter: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCategoryFilter: (state, action: PayloadAction<string>) => {
      state.categoryFilter = action.payload;
    },
    clearCategoryFilter: (state) => {
      state.categoryFilter = null;
    },
  },
});

export const { setCategoryFilter, clearCategoryFilter } = productSlice.actions;
export default productSlice.reducer;
