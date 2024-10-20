import baseApi from "../baseApi";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Place an order
    placeOrder: builder.mutation({
      query: (orderData) => ({
        url: `/order`,
        method: "POST",
        body: orderData,
      }),
    }),

    // Get order by ID
    getOrderById: builder.query({
      query: (orderId) => `/order/${orderId}`,
    }),

    // Get all orders (admin or user without userId filter)
    getAllOrders: builder.query({
      query: () => `/orders`,
    }),
  }),
});

export const {
  usePlaceOrderMutation,
  useGetOrderByIdQuery,
  useGetAllOrdersQuery,
} = orderApi;
