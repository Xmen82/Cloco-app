<template>
  <v-app-bar
    id="app-bar"
    absolute
    app
    flat
    class="background-common accent-3 text-center app-bar"
  >
    <v-row>
      <v-col cols="12" class="text-center background-common">
        <v-toolbar-title class="hidden-sm-and-down font-weight-light">
          ヘッダー（固定）
        </v-toolbar-title>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-left">
        <v-toolbar-title class="hidden-sm-and-down font-weight-light">
          クライアント管理
        </v-toolbar-title>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
// Utilities
import { mapState, mapMutations } from "vuex";

export default {
  name: "DashboardCoreAppBar",

  components: {},

  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    notifications: [
      "Mike John Responded to your email",
      "You have 5 new tasks",
      "You're now friends with Andrew",
      "Another Notification",
      "Another one"
    ]
  }),

  computed: {
    ...mapState(["drawer"])
  },

  methods: {
    ...mapMutations({
      setDrawer: "SET_DRAWER"
    })
  }
};
</script>
