<template>
  <v-footer id="dashboard-core-footer" class="background-common accent-3">
    <v-container>
      <v-row align="center" no-gutters>
        <v-col cols="12" class="text-center">
          <div class="body-1 font-weight-light pt-6 pt-md-0">
            Cpoyright&copy; 2020, 契約囚虜を含む
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "DashboardCoreFooter",

  data: () => ({
    links: [
      {
        href: "#",
        text: "Creative Tim"
      },
      {
        href: "#",
        text: "About Us"
      },
      {
        href: "#",
        text: "Blog"
      },
      {
        href: "#",
        text: "Licenses"
      }
    ]
  })
};
</script>

<style lang="sass">
#dashboard-core-footer
  a
    font-size: .825rem
    font-weight: 500
    text-decoration: none
    text-transform: uppercase
</style>
