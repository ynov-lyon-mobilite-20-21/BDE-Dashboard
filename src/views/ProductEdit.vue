<template>
  <layout-data
    :alert-message="alertMessage"
    :data="product"
    title="Edit Product"
    :backButton="true"
  >
    <div class="row m-y-2">
      <div class="col-lg-4"></div>
      <div class="col-lg-8 push-lg-4 personal-info">
        <form role="form" @submit="updateProduct">
          <div class="form-group row">
            <label class="col-lg-3 col-form-label form-control-label"
              >Product ID</label
            >
            <div class="col-lg-9">
              <p>{{ product._id }}</p>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-lg-3 col-form-label form-control-label"
              >Product Name</label
            >
            <div class="col-lg-9">
              <input class="form-control" type="text" v-model="product.name" />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-lg-3 col-form-label form-control-label"
              >Category</label
            >
            <div class="col-lg-9">
              <input
                class="form-control"
                type="text"
                v-model="product.category"
              />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-lg-3 col-form-label form-control-label"
              >Description</label
            >
            <div class="col-lg-9">
              <textarea
                class="form-control"
                v-model="product.description"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-lg-3 col-form-label form-control-label"
              >Images</label
            >
            <div class="col-lg-9">
              <dynamic-list v-model="product.images" />
            </div>
          </div>

          <div class="form-group row">
            <div class="col-lg-3"></div>
            <div class="col-lg-9">
              <button type="submit" class="btn btn-primary mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </layout-data>
</template>

<script>
import DynamicList from "../components/DynamicList";
import { getProductById, updateProduct } from "../services/ProductService";
import LayoutData from "../layouts/LayoutData";

export default {
  name: "ProductEdit",
  components: {
    LayoutData,
    DynamicList
  },
  data() {
    return {
      product: { images: [] },
      alertMessage: ""
    };
  },
  created() {
    this.fetchProduct();
  },
  methods: {
    async fetchProduct() {
      const id = this.$route.params.id;
      const product = await getProductById(id);

      if (!product.success) {
        return;
      }

      this.product = product.data;
    },
    async updateProduct(e) {
      e.preventDefault();

      const update = await updateProduct(this.product);
      console.log(update);
      this.fetchProduct();
    }
  }
};
</script>

<style scoped></style>
