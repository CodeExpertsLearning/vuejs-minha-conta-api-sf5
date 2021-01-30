<template>
  Meus Pedidos
  <div class="accordion" id="accordionExample">
    <div class="card" v-for="(order, index) in orders" :key="order.reference">
      <div class="card-header" id="headingOne">
        <h2 class="mb-0">
          <button
            class="btn btn-link btn-block text-left"
            type="button"
            data-toggle="collapse"
            :data-target="['#collapse' + index]"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Pedido # {{ order.reference }}
          </button>
        </h2>
      </div>

      <div
        :id="['collapse' + index]"
        class="collapse"
        :class="{ show: index + 1 == 1 }"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div class="card-body">
          {{ order.items }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HttpService from "../../services/http-service";

export default {
  data() {
    return {
      orders: null
    };
  },
  created() {
    HttpService.get("/orders/").then(
      res => (this.orders = res.data.data.orders)
    );
  }
};
</script>
