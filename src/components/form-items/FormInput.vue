<template>
  <div>
    <input
      type="text"
      v-model="inputValue"
      :placeholder="placeholder"
      @input="validateInput"
      required
    />
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class FormInput extends Vue {
  @Prop({ default: "" }) placeholder!: string;

  inputValue = "";
  error = "";

  validateInput() {
    this.inputValue.length !== 24
      ? (this.error = "id сайта должен содержать 24 символа")
      : (this.error = "");
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
