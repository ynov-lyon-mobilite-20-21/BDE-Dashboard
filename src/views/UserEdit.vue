<template>
  <div>
    <div v-if="!user" class="loading">
      Loading...
    </div>
    <div v-else class="row m-y-2">
      <div class="col-lg-4 text-lg-center">
        <h2>Edit Profile</h2>
      </div>
      <div class="col-lg-8">
        <div class="alert alert-info alert-dismissable">
          <a class="panel-close close" data-dismiss="alert">×</a> This is an
          <strong>.alert</strong>. Use this to show important messages to the
          user.
        </div>
      </div>
      <div class="col-lg-4"></div>
      <div class="col-lg-8 push-lg-4 personal-info">
        <form role="form">
          <!--          <div class="form-group row">-->
          <!--            <label class="col-lg-3 col-form-label form-control-label">First name</label>-->
          <!--            <div class="col-lg-9">-->
          <!--              <input class="form-control" type="text" value="Jane" />-->
          <!--            </div>-->
          <!--          </div>-->
          <!--          <div class="form-group row">-->
          <!--            <label class="col-lg-3 col-form-label form-control-label">Last name</label>-->
          <!--            <div class="col-lg-9">-->
          <!--              <input class="form-control" type="text" value="Bishop" />-->
          <!--            </div>-->
          <!--          </div>-->
          <div class="form-group row">
            <label class="col-lg-3 col-form-label form-control-label"
              >Email</label
            >
            <div class="col-lg-9">
              <input class="form-control" type="email" v-model="user.mail" />
            </div>
          </div>
          <!--          <div class="form-group row">-->
          <!--            <label class="col-lg-3 col-form-label form-control-label">Address</label>-->
          <!--            <div class="col-lg-9">-->
          <!--              <input class="form-control" type="text" value="" placeholder="Street" />-->
          <!--            </div>-->
          <!--          </div>-->
          <!--          <div class="form-group row">-->
          <!--            <label class="col-lg-3 col-form-label form-control-label"></label>-->
          <!--            <div class="col-lg-6">-->
          <!--              <input class="form-control" type="text" value="" placeholder="City" />-->
          <!--            </div>-->
          <!--            <div class="col-lg-3">-->
          <!--              <input class="form-control" type="text" value="" placeholder="State" />-->
          <!--            </div>-->
          <!--          </div>-->
          <div class="form-group row">
            <label class="col-lg-3 col-form-label form-control-label"
              >Password</label
            >
            <div class="col-lg-9">
              <input class="form-control" type="password" value="11111122333" />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-lg-3 col-form-label form-control-label"
              >Confirm password</label
            >
            <div class="col-lg-9">
              <input class="form-control" type="password" value="11111122333" />
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
  </div>
</template>
<script>
import { getUserById } from "../services/UserService";

export default {
  name: "UserEdit",
  data() {
    return {
      user: null,
      password: null
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    async fetchUser() {
      const id = this.$route.params.id;
      const user = await getUserById(id);

      if (!user) {
        return;
      }

      this.user = user;
    }
  }
};
</script>

<style scoped></style>
