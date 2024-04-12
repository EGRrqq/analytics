<template>
  <div class="signUp">
    <FormBuilder header="LeadHit"></FormBuilder>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FormBuilder from "@/components/FormBuilder.vue";

@Component({
  components: {
    FormBuilder,
  },
})
export default class SignUpView extends Vue {}
</script>
