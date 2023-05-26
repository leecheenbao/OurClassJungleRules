import { defineNuxtPlugin } from '#app';

import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('QuillEditor', QuillEditor);
});

// https://github.com/vueup/vue-quill/issues/161
// https://vueup.github.io/vue-quill/guide/installation.html