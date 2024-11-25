<template>
  <section class="container">
    <div class="columns is-centered">
      <div class="column is-6">
        <form @submit.prevent="addUser()">
          <b-field label="Tên">
            <b-input
              type="text"
              @blur="validateUser"
              v-model="dataUser.name"
              :class="{ 'is-danger': errors.name }"
            ></b-input>
          </b-field>
          <p v-if="errors.name" class="help is-danger">{{ errors.name }}</p>

          <b-field label="Email">
            <b-input
              type="email"
              @blur="validateUser"
              v-model="dataUser.email"
              :class="{ 'is-danger': errors.email }"
            ></b-input>
          </b-field>
          <p v-if="errors.email" class="help is-danger">{{ errors.email }}</p>
          <b-field label="Số điện thoại">
            <b-input
              type="tel"
              @blur="validateUser"
              v-model="dataUser.phone_number"
              :class="{ 'is-danger': errors.phone_number }"
            ></b-input>
          </b-field>
          <p v-if="errors.phone_number" class="help is-danger">
            {{ errors.phone_number }}
          </p>
          <b-field label="Địa chỉ">
            <b-input
              type="text"
              @blur="validateUser"
              v-model="dataUser.address"
              :class="{ 'is-danger': errors.address }"
            ></b-input>
          </b-field>
          <p v-if="errors.address" class="help is-danger">
            {{ errors.address }}
          </p>
          <section class="container has-text-centered">
            <button type="submit" class="button is-success">Thêm mới</button>
          </section>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      dataUser: {
        name: "",
        email: "",
        phone_number: "",
        address: "",
      },
      errors: {
        name: "",
        email: "",
        phone_number: "",
        address: "",
      },
    };
  },
  methods: {
    validatePhoneNumber(phone) {
      const phoneRegex = /^0\d{9}$/;
      return phoneRegex.test(phone);
    },
    validateUser() {
      let valid = true;

      //Reset Error
      this.errors = {
        name: "",
        email: "",
        phone_number: "",
        address: "",
      };
      if (!this.dataUser.name) {
        this.errors.name = "Tên không được bỏ trống";
        valid = false;
      } else {
        this.errors.name = "";
      }

      if (!this.dataUser.email) {
        this.errors.email = "Email không được bỏ trống";
        valid = false;
      } else {
        this.errors.email = "";
      }

      if (!this.dataUser.phone_number) {
        this.errors.phone_number = "Số điện không được bỏ trống";
        valid = false;
      } else if (!this.validatePhoneNumber(this.dataUser.phone_number)) {
        this.errors.phone_number = "Số điện thoại không hợp lệ";
        valid = false;
      } else {
        this.errors.phone_number = "";
      }

      if (!this.dataUser.address) {
        this.errors.address = "Địa chỉ không được bỏ trống";
        valid = false;
      } else {
        this.errors.address = "";
      }
      return valid;
    },
    addUser() {
      if (this.validateUser()) {
        console.log(this.dataUser);
        try {
          this.$store.dispatch("addUser", this.dataUser);
          alert("Thêm thành công!!");
          this.$router.push({ name: "list" });
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>
<style scoped>
.is-danger .b-input {
  border-color: red !important;
}
.is-danger .help.is-danger {
  color: red !important;
}
</style>
