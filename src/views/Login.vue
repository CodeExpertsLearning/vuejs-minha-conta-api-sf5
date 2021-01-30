<template>
  <div class="d-flex justify-content-center align-items-center ">
    <div class="col-6 border rounded p-5">
      <div class="col-12">
        <h2>Meu Painel</h2>
        <hr />
      </div>
      <div class="col-12">
        <form action="">
          <div class="form-group">
            <label>Email</label>
            <input
              type="text"
              class="form-control"
              placeholder="Seu email..."
              v-model="credentials.username"
            />
          </div>
          <div class="form-group">
            <label>Senha</label>
            <input
              type="password"
              class="form-control"
              placeholder="Sua senha..."
              v-model="credentials.password"
            />
          </div>
          <div class="col-12">
            <button
              type="submit"
              @click.prevent="login"
              class="btn btn-success btn-lg"
            >
              Acessar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import HttpService from "../services/http-service.js";
import Storage from "../services/storage.js";

export default {
  data() {
    return {
      credentials: {
        username: "nandokstro@gmail.com",
        password: "123456xyz"
      }
    };
  },
  methods: {
    login() {
      HttpService.post("/login", this.credentials).then(res => {
        Storage.setData("token", res.data.data.token);
        this.$router.push({ name: "Orders" });
      });
    }
  }
};
</script>
