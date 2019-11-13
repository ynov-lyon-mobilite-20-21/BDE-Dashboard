<template>
  <div>
    <div v-if="!users" class="loading">
      Loading...
    </div>
    <div v-else>
      <div class="row m-y-2">
        <div class="col-lg-4">
          <h2>Gestion des utilisateurs</h2>
        </div>
        <div class="col-lg-8">
          <message :message="alertMessage" />
        </div>
        <div class="col-lg-4">
          <button type="button" class="btn btn-dark" @click="fetchUsers">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"
              />
            </svg>
          </button>
        </div>
        <div class="col-lg-8 my-2 text-right">
          <button type="button" class="btn btn-success" @click="toggleModal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">mail</th>
            <th scope="col">isActive</th>
            <th scope="col">registrationDate</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users">
            <th scope="row">{{ user._id }}</th>
            <td>{{ user.mail }}</td>
            <td>{{ user.active }}</td>
            <td>{{ user.registrationDate }}</td>
            <td>
              <button
                type="submit"
                class="btn btn-primary mr-1"
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
                class="btn btn-danger mr-1"
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
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <modal v-model="addUserModelIsOpen" title="Add user">
      <form @submit="createUser">
        <div class="form-group row">
          <label class="col-lg-3 col-form-label form-control-label">Email</label>
          <div class="col-lg-9">
            <input class="form-control" type="email" v-model="addUserMail" />
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
  </div>
</template>

<script>
import { getUsers, deleteUserById, createUser } from "../services/UserService";
import Modal from "../components/Modal";
import Message from "../components/Message";

export default {
  name: "Users",
  data() {
    return {
      users: null,
      addUserModelIsOpen: false,
      addUserMail: null,
      alertMessage: ""
    };
  },
  components: {
    modal: Modal,
    message: Message
  },
  created() {
    this.fetchUsers();
  },
  methods: {
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
        await createUser(this.addUserMail);
        await this.fetchUsers();
        this.alertMessage = `Mail send to ${this.addUserMail}`;
      } catch (e) {
        this.alertMessage = `Incorrect mail`;
      }
      this.toggleModal();
      this.addUserMail = null;
    },
    async deleteUser(e) {
      e.preventDefault();
      const id = e.currentTarget.getAttribute("data-user-id");
      try {
        await deleteUserById(id);
        await this.fetchUsers();
        this.alertMessage = `User “${id}“ is now deleted !`;
      } catch (e) {
        this.alertMessage = `Can't delete user “${id}“ !`;
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
