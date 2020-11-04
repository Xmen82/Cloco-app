<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    :src="barImage"
    mobile-break-point="960"
    app
    width="260"
    v-bind="$attrs"
    class="background-common accent-3"
  >
    <v-card class="mx-auto" width="300" style="margin-top:0px">
      <v-list>
        <v-list-item link>
          <v-list-item-title>ログ</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-title>メニュー01 </v-list-item-title>
        </v-list-item>
        <v-list-group :value="true">
          <template v-slot:activator>
            <v-list-item-title>メニュー02 </v-list-item-title>
          </template>

          <v-list-item link>
            <v-list-item-title class="pl-5">サブメニュー01</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title class="pl-5 highlighted" active-class="highlighted">サブメニュー02</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title class="pl-5">サブメニュー03</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-item link>
          <v-list-item-title>メニュー03</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapState } from "vuex";

export default {
  name: "DashboardCoreDrawer",

  props: {
    expandOnHover: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    links: [
      {
        to: "/pages/list",
        icon: "mdi-view-dashboard",
        text: "List"
      },
      {
        to: "/login",
        icon: "mdi-trophy",
        text: "Login"
      },
      {
        icon: "mdi-tennis",
        text: "Players",
        subLinks: [
          {
            text: "Players list",
            to: "/"
          },
          {
            text: "Import WTA Players",
            to: "/"
          }
        ]
      }
    ],
    items: [
      {
        icon: "mdi-view-dashboard",
        title: "Menu1",
        to: "/"
      },
      {
        icon: "mdi-view-dashboard",
        title: "Menu2",
        to: "/"
      }
    ]
  }),

  computed: {
    ...mapState(["barColor", "barImage"]),
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("SET_DRAWER", val);
      }
    },
    computedItems() {
      return this.items.map(this.mapItem);
    },
    profile() {
      return {
        avatar: true,
        title: this.$t("avatar")
      };
    }
  },

  methods: {
    mapItem(item) {
      return {
        ...item,
        children: item.children ? item.children.map(this.mapItem) : undefined,
        title: this.$t(item.title)
      };
    }
  }
};
</script>

<style lang="sass">
@import '~vuetify/src/styles/tools/_rtl.sass'

#core-navigation-drawer
  .v-list-group__header.v-list-item--active:before
    opacity: .24

  .v-list-item
    &__icon--text,
    &__icon:first-child
      justify-content: center
      text-align: center
      width: 20px

      +ltr()
        margin-right: 24px
        margin-left: 12px !important

      +rtl()
        margin-left: 24px
        margin-right: 12px !important

  .v-list--dense
    .v-list-item
      &__icon--text,
      &__icon:first-child
        margin-top: 10px

  .v-list-group--sub-group
    .v-list-item
      +ltr()
        padding-left: 8px

      +rtl()
        padding-right: 8px

    .v-list-group__header
      +ltr()
        padding-right: 0

      +rtl()
        padding-right: 0

      .v-list-item__icon--text
        margin-top: 19px
        order: 0

      .v-list-group__header__prepend-icon
        order: 2

        +ltr()
          margin-right: 8px

        +rtl()
          margin-left: 8px
</style>
