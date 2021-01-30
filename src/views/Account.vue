<template>
  <div class="row">
    <div class="col-3">
      <ul class="list-group">
        <router-link
          to="/my-account/orders"
          class="list-group-item list-group-item-action"
          >Meus Pedidos</router-link
        >
        <router-link
          to="/my-account/profile"
          class="list-group-item list-group-item-action"
          >Meu Perfil</router-link
        >
      </ul>
    </div>
    <div class="col-9"><router-view /></div>
  </div>
</template>
