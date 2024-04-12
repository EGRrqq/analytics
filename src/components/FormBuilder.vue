<template>
  <fieldset>
    <FormInput ref="inputRef" placeholder="id..."></FormInput>
    <button type="submit" @click="formSubmit">confirm</button>
  </fieldset>
</template>

<script lang="ts">
import { Component, Ref, Vue } from "vue-property-decorator";
import FormInput from "@/components/form-items/FormInput.vue";

@Component({
  components: { FormInput },
})
export default class FormBuild extends Vue {
  @Ref() readonly inputRef!: FormInput;

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
