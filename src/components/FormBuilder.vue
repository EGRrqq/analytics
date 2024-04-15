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

interface ErrData {
  loc: string[];
  msg: string;
  type: string;
}
interface SuccessRes {
  message: string;
}
interface ErrRes {
  detail: ErrData[];
}

interface Res extends Partial<SuccessRes>, Partial<ErrRes> {}

@Component({
  components: { FormInput },
})
export default class FormBuild extends Vue {
  @Ref() readonly inputRef!: FormInput;
  @Prop({ default: "Header", required: true }) header!: string;

  async fetchData(): Promise<Res> {
    const data: Res = await fetch(
      "https://track-api.leadhit.io/client/test_auth",
      {
        method: "GET",
        headers: {
          "Api-Key": "5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo",
          "Leadhit-Site-Id": `${this.inputRef.inputValue}`,
        },
      }
    ).then((res) => res.json());

    return data;
  }

  async isAuth(): Promise<string | ErrData[]> {
    const data = await this.fetchData();

    return new Promise((res, rej) => {
      data.message === "ok" ? res(data.message) : rej(data.detail);
    });
  }

  async formSubmit() {
    this.inputRef.setError();

    if (this.inputRef.isValid) {
      await this.isAuth()
        .then(() => {
          localStorage.setItem("leadhit-site-id", this.inputRef.inputValue);
          this.$router.push("analytics");
        })
        .catch(() => (this.inputRef.error = "некорректный id сайта."));
    }
  }
}
</script>

<style scoped>
fieldset {
  display: grid;
}
</style>
