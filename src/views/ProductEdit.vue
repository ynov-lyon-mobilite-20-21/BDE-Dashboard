<template>
    <layout-data
        :alert-message="alertMessage"
        :data="product"
        :title="id === 'new' ? 'Create product' : 'Edit Product'"
        :backButton="true"
    >
        <div class="row m-y-2">
            <div class="col-lg-4"></div>
            <div class="col-lg-8 push-lg-4 personal-info">
                <form role="form" @submit="handleSubmitForm">
                    <div class="form-group row">
                        <label
                            class="col-lg-3 col-form-label form-control-label"
                            >Product ID</label
                        >
                        <div class="col-lg-9">
                            <p v-if="product._id">{{ product._id }}</p>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label
                            class="col-lg-3 col-form-label form-control-label"
                            >Product Name</label
                        >
                        <div class="col-lg-9">
                            <input
                                class="form-control"
                                type="text"
                                v-model="product.name"
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label
                            class="col-lg-3 col-form-label form-control-label"
                            >Price</label
                        >
                        <div class="col-lg-9 input-group">
                            <input
                                class="form-control"
                                step="0.01"
                                type="number"
                                v-model="product.price"
                            />
                            <div class="input-group-append">
                                <span class="input-group-text">€</span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label
                            class="col-lg-3 col-form-label form-control-label"
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
                        <label
                            class="col-lg-3 col-form-label form-control-label"
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
                        <label
                            class="col-lg-3 col-form-label form-control-label"
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
import {
    createProduct,
    getProductById,
    updateProduct
} from "../services/ProductService";
import LayoutData from "../layouts/LayoutData";
import { mapActions } from "vuex";

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
    beforeMount() {
        this.fetchProduct();
    },
    computed: {
        id() {
            return this.$route.params.id;
        }
    },
    methods: {
        ...mapActions(["addNotification"]),
        async fetchProduct() {
            if (this.id === "new") {
                this.product = {
                    name: "",
                    description: "",
                    category: "",
                    images: [],
                    price: 0
                };
                return;
            }

            const product = await getProductById(this.id);

            if (!product.success) {
                return;
            }

            this.product = product.data;
        },
        handleSubmitForm(e) {
            e.preventDefault();
            if (this.id === "new") {
                this.handleCreateProduct();
                return;
            }

            this.handleUpdateProduct();
        },
        async handleUpdateProduct() {
            const result = await updateProduct(this.product);
            this.fetchProduct();

            if (!result.success) {
                this.addNotification({
                    title: "Product",
                    content: `Error when updating the product "${this.result._id}".`
                });
                return;
            }

            this.addNotification({
                title: "Product",
                content: `The product "${this.product._id}" was update`
            });
        },
        async handleCreateProduct() {
            const result = await createProduct(this.product);

            if (!result.success) {
                this.addNotification({
                    title: "Product",
                    content: `Error when creating the product.`
                });
                return;
            }

            this.$router
                .replace({
                    name: "product-edit",
                    params: { id: result.data._id }
                })
                .then(this.fetchProduct);
            this.addNotification({
                title: "Product",
                content: `A product has been created with the id "${this.result._id}".`
            });
        }
    }
};
</script>

<style scoped></style>
