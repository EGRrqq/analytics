<template>
  <div>
    <input
      type="text"
      v-model="inputValue"
      :placeholder="placeholder"
      @input="setError"
      required
    />
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class FormInput extends Vue {
  @Prop({ default: "placeholder", required: true }) placeholder!: string;

  inputValue = "";
  error = "";

  get isValid(): boolean {
    return this.inputValue.length === 24;
  }

  setError() {
    this.isValid
      ? (this.error = "")
      : (this.error = `id сайта должен содержать 24 символа. Текущая длина ${this.inputValue.length}.`);
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
