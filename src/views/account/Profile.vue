<template>
  <div class="col-12">
    <h2>Meu Perfil</h2>
  </div>
  <div v-if="profile" class="col-12">
    <form action="#" method="post">
      <div class="row">
        <div class="form-group col-12">
          <label>Nome</label>
          <input type="text" class="form-control" v-model="profile.firstName" />
        </div>
        <div class="form-group col-12">
          <label>Sobrenome</label>
          <input type="text" class="form-control" v-model="profile.lastName" />
        </div>
        <div class="form-group col-12">
          <label>E-mail</label>
          <input type="text" class="form-control" v-model="profile.email" />
        </div>
        <div class="col-12">
          <button
            type="submit"
            @click.prevent="updateProfile"
            class="btn btn-success btn-lg"
          >
            Atualizar Perfil
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import HttpService from "../../services/http-service.js";

export default {
  data() {
    return {
      profile: null
    };
  },
  methods: {
    updateProfile() {
      delete this.profile.address;

      HttpService.put("/profiles/", this.profile)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.response));
    }
  },
  created() {
    HttpService.get("/profiles/").then(
      res => (this.profile = res.data.data.profile)
    );
  }
};
</script>
