import { TResponseRedux } from "../../components/utils/apitypes";
import baseApi from "../baseApi";

export const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCarts: builder.query<TResponseRedux, void>({
      query: () => ({
        url: "/cart",
        method: "GET",
      }),
    }),

    // Add a product to the cart
    addToCart: builder.mutation<
      TResponseRedux,
      { productId: string; quantity: number }
    >({
      query: ({ productId, quantity }) => ({
        url: "/cart",
        method: "POST",
        body: { productId, quantity },
      }),
    }),

    // Remove a product from the cart
    removeFromCart: builder.mutation<TResponseRedux, { productId: string }>({
      query: ({ productId }) => ({
        url: `/cart/${productId}`,
        method: "DELETE",
      }),
    }),

    // Clear all items from the cart
    clearCart: builder.mutation<TResponseRedux, void>({
      query: () => ({
        url: "/cart",
        method: "DELETE",
      }),
    }),

    updateCartQuantity: builder.mutation<
      TResponseRedux,
      { productId: string; quantity: number }
    >({
      query: ({ productId, quantity }) => ({
        url: `/cart`,
        method: "PUT",
        body: { productId, quantity },
      }),
    }),
  }),
});

export const {
  useGetAllCartsQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useClearCartMutation,
  useUpdateCartQuantityMutation,
} = cartApi;

export default cartApi;
