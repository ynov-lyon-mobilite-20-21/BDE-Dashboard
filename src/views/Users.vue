<template>
    <layout-data :data="users.length > 0" title="Manage Users">
        <reload-bar
            :fetch-data-function="fetchUsers"
            :handle-add-function="toggleModal"
        />
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">mail</th>
                    <th scope="col">isActive</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user._id">
                    <th scope="row">{{ user._id }}</th>
                    <td>
                        {{ user.mail }}
                        <svg
                            v-if="user.isAdmin"
                            style="height: 10px; color: #F6A704"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                        >
                            <path
                                fill="currentColor"
                                d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"
                            />
                        </svg>
                    </td>
                    <td>{{ user.active }}</td>
                    <td>
                        <button
                            type="submit"
                            class="btn btn-primary mr-1 mb-1"
                            @click="editUser"
                            :data-user-id="user._id"
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
                            class="btn btn-danger mr-1 mb-1"
                            :data-user-id="user._id"
                            @click="deleteUser"
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
                        <button
                            v-if="!user.active"
                            type="button mb-1"
                            class="btn btn-success mb-1"
                            :data-user-mail="user.mail"
                            @click="handleResendActivationLink"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                                />
                            </svg>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <modal v-model="addUserModelIsOpen" title="Add user">
            <form @submit="createUser">
                <div class="form-group row">
                    <label class="col-lg-3 col-form-label form-control-label"
                        >Email</label
                    >
                    <div class="col-lg-9 input-group">
                        <input
                            class="form-control"
                            type="email"
                            v-model="addUserMail"
                        />
                        <div class="input-group-append">
                            <span class="input-group-text">@</span>
                        </div>
                    </div>
                </div>
                <div class="text-right">
                    <button type="submit" class="btn btn-success">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                            />
                        </svg>
                    </button>
                </div>
            </form>
        </modal>
    </layout-data>
</template>

<script>
import { getUsers, deleteUserById, createUser } from "../services/UserService";
import Modal from "../components/Modal";
import LayoutData from "../layouts/LayoutData";
import ReloadBar from "../components/ReloadBar";
import { mapActions } from "vuex";

export default {
    name: "Users",
    data() {
        return {
            users: [],
            addUserModelIsOpen: false,
            addUserMail: null
        };
    },
    components: {
        Modal,
        LayoutData,
        reloadBar: ReloadBar
    },
    beforeMount() {
        this.fetchUsers();
    },
    methods: {
        ...mapActions(["addNotification"]),
        async fetchUsers() {
            const users = await getUsers();

            if (!users) {
                return;
            }

            this.users = users;
        },
        editUser(e) {
            e.preventDefault();
            const id = e.currentTarget.getAttribute("data-user-id");
            this.$router.push({ name: "user-edit", params: { id } });
        },
        toggleModal(e = null) {
            if (e) {
                e.preventDefault();
            }
            this.addUserModelIsOpen = !this.addUserModelIsOpen;
        },
        async createUser(e) {
            e.preventDefault();
            try {
                const result = await createUser(this.addUserMail);

                if (!result.success) {
                    if (
                        result.error.code &&
                        result.error.code === "MAIL_ALREADY_USING"
                    ) {
                        this.addNotification({
                            title: "User",
                            content: `The user "${this.addUserMail}" already exists.`
                        });
                        return;
                    }

                    this.addNotification({
                        title: "User",
                        content: "An error has occurred"
                    });
                    return;
                }

                await this.fetchUsers();
                this.addNotification({
                    title: "User",
                    content: `You have just added the user ${result.data._id}. He will have to confirm his registration in the email he received.`
                });
            } catch (e) {
                this.addNotification({
                    title: "User",
                    content: "An error has occurred"
                });
            }
            this.toggleModal();
            this.addUserMail = null;
        },
        async deleteUser(e) {
            e.preventDefault();
            const id = e.currentTarget.getAttribute("data-user-id");
            try {
                const result = await deleteUserById(id);
                await this.fetchUsers();

                if (!result.success) {
                    this.addNotification({
                        title: "User",
                        content: `Error when deleting user "${id}".`
                    });
                    return;
                }

                this.addNotification({
                    title: "User",
                    content: `The user "${id}" has been deleted.`
                });
            } catch (e) {
                this.addNotification({
                    title: "User",
                    content: `Error when deleting user "${id}".`
                });
            }
        },
        async handleResendActivationLink(e) {
            e.preventDefault();
            const mail = e.currentTarget.getAttribute("data-user-mail");
            try {
                const result = await createUser(mail);

                if (!result.success || !result.data.mailIsSent) {
                    if (
                        result.error.code &&
                        result.error.code === "MAIL_ALREADY_USING"
                    ) {
                        this.addNotification({
                            title: "User",
                            content: `The user "${mail}" already exists.`
                        });
                        return;
                    }

                    this.addNotification({
                        title: "User",
                        content: `Error when sending the mail to "${mail}".`
                    });
                    return;
                }

                await this.fetchUsers();
                this.addNotification({
                    title: "User",
                    content: `A confirmation email was sent back to "${mail}".`
                });
            } catch (e) {
                this.addNotification({
                    title: "User",
                    content: `Error when sending the mail to "${mail}".`
                });
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
