import eslintConfigPrettier from "eslint-config-prettier/flat";
import vuetify from "eslint-config-vuetify";

export default vuetify({
  rules: {
    ...eslintConfigPrettier.rules,
  },
});
