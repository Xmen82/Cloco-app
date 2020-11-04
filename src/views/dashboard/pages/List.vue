<template>
  <div class="pa-5">
    <v-row>
      <v-col cols="6" class="text-right">
        <v-switch label="契約囚虜を含む" color="button-color" />
      </v-col>
      <v-col cols="6" class="text-right">
        <v-btn tile dark color="button-color" right @click="openPopUp">
          <v-icon left>
            mdi-pencil
          </v-icon>
          クライアント追加
        </v-btn>
      </v-col>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="9"
      class="elevation-1"
      :header-props="{ 'sort-icon': 'mdi-arrow-down-bold' }"
    >
      <template v-slot:[`item.calories`]="{ item }">
        <v-tooltip bottom class="background-common">
          <template v-slot:activator="{ on }">
            <v-chip v-on="on" class="span-without-color">{{
              item.calories
            }}</v-chip>
          </template>
          <span>アカウント数推移 </span>
        </v-tooltip>
      </template>
    </v-data-table>
    <v-row justify="center">
      <details-dialog :isOpen="dialog" @closePopup="dialog = false" />
    </v-row>
  </div>
</template>
<script>
import DetailsDialog from "../components/dialogs/DetailsDialog";
export default {
  components: {
    DetailsDialog
  },
  data() {
    return {
      dialog: false,
      headers: [
        {
          text: "クライアント",
          align: "start",
          sortable: false,
          value: "name",
          class: "table-header-color"
        },
        { text: "ドメイン", value: "calories", class: "table-header-color" },
        { text: "契約ログイン数", value: "fat", class: "table-header-color" },
        { text: "当月ログイン数", value: "carbs", class: "table-header-color" },
        {
          text: "前月ログイン数",
          value: "protein",
          class: "table-header-color"
        },
        { text: "状態", value: "iron", class: "table-header-color" }
      ],
      desserts: [
        {
          name: "検索",
          calories: "xxxxxxxxxxxxxxxxxxxxxxx",
          fat: "999,999",
          carbs: "999,999",
          protein: "999,999",
          iron: "終了"
        },
        {
          name: "検索",
          calories: "xxxxxxxxxxxxxxxxxxxxxxx",
          fat: "999,999",
          carbs: "999,999",
          protein: "999,999",
          iron: "終了"
        },
        {
          name: "検索",
          calories: "xxxxxxxxxxxxxxxxxxxxxxx",
          fat: "999,999",
          carbs: "999,999",
          protein: "999,999",
          iron: "終了"
        },
        {
          name: "検索",
          calories: "xxxxxxxxxxxxxxxxxxxxxxx",
          fat: "999,999",
          carbs: "999,999",
          protein: "999,999",
          iron: "終了"
        },
        {
          name: "検索",
          calories: "xxxxxxxxxxxxxxxxxxxxxxx",
          fat: "999,999",
          carbs: "999,999",
          protein: "999,999",
          iron: "終了"
        },
        {
          name: "検索",
          calories: "xxxxxxxxxxxxxxxxxxxxxxx",
          fat: "999,999",
          carbs: "999,999",
          protein: "999,999",
          iron: "終了"
        },
        {
          name: "検索",
          calories: "xxxxxxxxxxxxxxxxxxxxxxx",
          fat: "999,999",
          carbs: "999,999",
          protein: "999,999",
          iron: "終了"
        },
        {
          name: "検索",
          calories: "xxxxxxxxxxxxxxxxxxxxxxx",
          fat: "999,999",
          carbs: "999,999",
          protein: "999,999",
          iron: "終了"
        },
        {
          name: "検索",
          calories: "xxxxxxxxxxxxxxxxxxxxxxx",
          fat: "999,999",
          carbs: "999,999",
          protein: "999,999",
          iron: "終了"
        },
        {
          name: "検索",
          calories: "xxxxxxxxxxxxxxxxxxxxxxx",
          fat: "999,999",
          carbs: "999,999",
          protein: "999,999",
          iron: "終了"
        },
        {
          name: "検索",
          calories: "xxxxxxxxxxxxxxxxxxxxxxx",
          fat: "999,999",
          carbs: "999,999",
          protein: "999,999",
          iron: "終了"
        },
        {
          name: "検索",
          calories: "xxxxxxxxxxxxxxxxxxxxxxx",
          fat: "999,999",
          carbs: "999,999",
          protein: "999,999",
          iron: "終了"
        }
      ]
    };
  },
  methods: {
    openPopUp() {
      this.dialog = true;
    }
  }
};
</script>
