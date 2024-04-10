<template>
  <div>
    <FormInput placeholder="id..."></FormInput>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import FormInput from "@/components/form-items/FormInput.vue";

@Component({
  components: { FormInput },
})
export default class FormBuild extends Vue {}
</script>
