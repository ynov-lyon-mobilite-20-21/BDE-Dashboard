<template>
    <div>
        <button type="button" class="btn btn-primary" @click="toggleModal">
            Modifier
        </button>
        <div class="row text-center text-lg-left">
            <div
                v-for="image in value"
                :key="image"
                class="col-lg-3 col-md-4 col-6"
            >
                <img class="img-fluid img-thumbnail" :src="image" alt="empty" />
            </div>
        </div>
        <modal v-model="modalIsOpen" title="Sélectionner les image">
            <div class="row text-center text-lg-left">
                <div
                    v-for="image in images"
                    :key="image._id"
                    class="col-lg-3 col-md-4 col-6"
                >
                    <img
                        class="img-fluid"
                        :data-image-url="image.url"
                        @click="toggleImage"
                        :class="{ selected: value.indexOf(image.url) !== -1 }"
                        :src="image.url"
                        alt="empty"
                    />
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
import Modal from "./Modal";
import { getImages } from "../services/ImagesService";

export default {
    name: "DynamicList",
    components: {
        Modal
    },
    data() {
        return {
            modalIsOpen: false,
            images: []
        };
    },
    props: {
        value: {
            type: Array,
            defaultValue: []
        }
    },
    beforeMount() {
        this.fetchImages();
    },
    methods: {
        toggleImage(e) {
            const url = e.currentTarget.getAttribute("data-image-url");

            let newArray = Array.from(this.value);

            if (newArray.indexOf(url) !== -1) {
                newArray.splice(newArray.indexOf(url), 1);
            } else {
                newArray.push(url);
            }

            this.$emit("input", newArray);
        },
        toggleModal(e = null) {
            if (e) {
                e.preventDefault();
            }
            this.modalIsOpen = !this.modalIsOpen;
        },
        async fetchImages() {
            const result = await getImages();

            if (!result.success) {
                return;
            }

            this.images = result.data;
        }
    }
};
</script>

<style scoped lang="scss">
.selected {
    border: 3px solid red;
}
</style>
