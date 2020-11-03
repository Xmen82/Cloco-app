<template>
  <v-app>
    <view-empty />
  </v-app>
</template>

<script>
export default {
  name: "DashboardIndex",

  components: {
    ViewEmpty: () => import("./components/core/ViewEmpty")
  },

  data: () => ({
    expandOnHover: false
  })
};
</script>
