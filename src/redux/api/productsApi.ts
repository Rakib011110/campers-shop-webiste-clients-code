import {
  IProduct,
  TQueryParam,
  TResponseRedux,
} from "../../components/utils/apitypes";
import baseApi from "../baseApi";

// Redux Toolkit Query setup for product API
export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<TResponseRedux, TQueryParam>({
      query: (args) => {
        return {
          url: `/products`, // This matches the backend route
          params: args,
        };
      },
    }),
    // If needed, you can add create, update, delete queries here
    getProductById: builder.query<IProduct, string>({
      query: (id) => `/products/${id}`, // Match route for fetching product by ID
    }),
    createProduct: builder.mutation<TResponseRedux, Partial<TQueryParam>>({
      query: (newProduct) => ({
        url: `/products`,
        method: "POST",
        body: newProduct,
      }),
    }),
    updateProduct: builder.mutation<
      TResponseRedux,
      { id: string; data: Partial<TQueryParam> }
    >({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteProduct: builder.mutation<TResponseRedux, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;

export default productApi;
