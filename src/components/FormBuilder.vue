<template>
  <form @submit.prevent="formSubmit" novalidate>
    <fieldset>
      <legend>
        <h1>{{ header }}</h1>
      </legend>
      <FormInput ref="inputRef" placeholder="id..."></FormInput>
      <button type="submit">confirm</button>
    </fieldset>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue } from "vue-property-decorator";
import FormInput from "@/components/form-items/FormInput.vue";

@Component({
  components: { FormInput },
})
export default class FormBuild extends Vue {
  @Ref() readonly inputRef!: FormInput;
  @Prop({ default: "Header", required: true }) header!: string;

  formSubmit() {
    this.inputRef.validateInput();
  }
}
</script>

<style scoped>
fieldset {
  display: grid;
}
</style>
