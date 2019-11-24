<template>
  <layout-data
    :alert-message="alertMessage"
    :data="products.length > 0"
    title="Manage Products"
  >
    <reload-bar
      :fetch-data-function="fetchProducts"
      :handle-add-function="addProduct"
    />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">id</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product._id">
          <th scope="row">{{ product._id }}</th>
          <td>{{ product.name }}</td>
          <td>{{ product.price }} €</td>
          <td>
            <button
              type="submit"
              class="btn btn-primary mr-1"
              @click="editProduct"
              :data-product-id="product._id"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                />
              </svg>
            </button>
            <button
              type="button"
              class="btn btn-danger mr-1"
              :data-product-id="product._id"
              @click="deleteProduct"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </layout-data>
</template>

<script>
import { deleteProductById, getProducts } from "../services/ProductService";
import LayoutData from "../layouts/LayoutData";
import ReloadBar from "../components/ReloadBar";

export default {
  name: "Products",
  data() {
    return {
      products: [],
      alertMessage: ""
    };
  },
  components: {
    LayoutData,
    ReloadBar
  },
  beforeMount() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      const products = await getProducts();

      if (!products) {
        return;
      }

      this.products = products.data;
    },
    addProduct(e) {},
    editProduct(e) {
      e.preventDefault();
      const id = e.currentTarget.getAttribute("data-product-id");
      this.$router.push({ name: "product-edit", params: { id } });
    },
    async deleteProduct(e) {
      e.preventDefault();
      const id = e.currentTarget.getAttribute("data-product-id");
      try {
        console.log(await deleteProductById(id));
        await this.fetchProducts();
        this.alertMessage = `Product “${id}“ is now deleted !`;
      } catch (e) {
        this.alertMessage = `Can't delete product “${id}“ !`;
      }
    }
  }
};
</script>

<style lang="scss">
body {
  .modal {
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 0.3s;
    transform: translateX(-20px);
  }
  &.modal-open {
    .modal {
      display: block;
      background-color: rgba(0, 0, 0, 0.3);
      transform: translateX(0);
    }
  }
}
</style>
