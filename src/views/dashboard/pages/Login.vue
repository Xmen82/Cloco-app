<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="6">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              ログイン
            </div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="12">
                  <v-text-field class="purple-input" label="ユーザー名:" />
                </v-col>

                <v-col cols="12" md="12">
                  <v-text-field label="パスワード:" class="purple-input" />
                </v-col>

                <v-col cols="12" class="text-center">
                  <v-btn color="success" class="mr-5">
                    ログイン
                  </v-btn>
                  <v-btn color="success" class="mr-0">
                    キャンセル
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login"
};
</script>
