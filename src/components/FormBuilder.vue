<template>
  <form method="get" @submit.prevent="formSubmit" novalidate>
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

  async formSubmit() {
    this.inputRef.validateInput();

    if (!this.inputRef.error) {
      const data = await fetch(
        "https://track-api.leadhit.io/client/test_auth",
        {
          method: "GET",
          headers: {
            "Api-Key": "5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo",
            "Leadhit-Site-Id": `${this.inputRef.inputValue}`,
          },
        }
      ).then((res) => res.json());

      console.log(data);
      if (data.message === "ok") {
        localStorage.setItem("Leadhit-Site-Id", this.inputRef.inputValue);
      } else {
        this.inputRef.error = "некорректный id сайта.";
      }
    }
  }
}
</script>

<style scoped>
fieldset {
  display: grid;
}
</style>
