<template>
  <v-row justify="center">
    <v-dialog v-model="showDialog" persistent max-width="600px">
      <v-card>
        <v-toolbar>
          <v-toolbar-title>
            クライアント登録
          </v-toolbar-title>
          <v-spacer />
          <v-toolbar-items>
            <v-btn icon @click="handleClosePopup">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <v-row>
            <v-col cols="12" class="row-control">
              <span>クライアント名</span>
              <v-text-field
                solo
                placeholder="XXXXXXXXXX"
                class="text-field-color"
              />
            </v-col>
            <v-col cols="12" class="row-control">
              <span>ドメイン</span>
              <v-text-field
                solo
                required
                placeholder="XXXXXXXXXX"
                class="text-field-color"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="5" class="row-control">
              <span>全体管理者メールアドレス </span>
              <v-text-field
                solo
                required
                placeholder="XXXXXXXXXX"
                class="text-field-color"
              />
            </v-col>
            <v-col cols="3" class="row-control">
              <span>契約ログイン数 </span>
              <v-text-field
                solo
                required
                placeholder="XXXXXXXXXX"
                class="text-field-color"
              />
            </v-col>
            <v-col cols="4" class="row-control">
              <span>契約期日 </span>
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    solo
                    v-model="date"
                    append-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    class="text-field-color"
                  />
                </template>
                <v-date-picker v-model="date" @input="menu2 = false" />
              </v-menu>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-col cols="12" class="text-center">
            <v-btn
              class="mr-0"
              @click="handleClosePopup"
              dark
              color="button-color"
            >
              登録
            </v-btn>
          </v-col>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: "details-dialog",
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    showDialog() {
      return this.isOpen;
    }
  },
  methods: {
    handleClosePopup() {
      this.$emit("closePopup");
    }
  }
};
</script>
