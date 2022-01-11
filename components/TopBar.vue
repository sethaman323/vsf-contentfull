<template>
  <div class="for-topbar">
    <div>
      <ul class="list">
        <li class="item">
          <a v-bind:href="content[0].fields.content[20].fields.link6"
            >{{content[0].fields.content[20].fields.text1}}</a
          >
        </li>
        <li class="item">
          <a v-bind:href="content[0].fields.content[20].fields.link7">
           {{content[0].fields.content[20].fields.text2}}</a
          >
        </li>
        <li class="item">
          <a v-bind:href="content[0].fields.content[20].fields.link8"
            >{{content[0].fields.content[20].fields.text3}}</a
          >
        </li>
      </ul>
    </div>
    <div>
      <div class="middle">
        <b>FREE SHIPPING</b
        ><a v-bind:href="content[0].fields.content[20].fields.link9">
          a {{content[0].fields.content[20].fields.text4}}</a
        >
      </div>
    </div>
    <div class="language">
      <a
        v-bind:href="content[0].fields.content[20].fields.link10"
        data-mz-lang="languageChangeLink"
        title="Français"
        class="mz-utilitynav-link"
        data-gtm-vis-recent-on-screen-8904058_1287="8072"
        data-gtm-vis-first-on-screen-8904058_1287="8072"
        data-gtm-vis-total-visible-time-8904058_1287="100"
        data-gtm-vis-has-fired-8904058_1287="1"
        >{{content[0].fields.content[20].fields.text5}}</a
      >
    </div>
  </div>
</template>

<script>
import LocaleSelector from "./LocaleSelector";
import { onSSR } from "@vue-storefront/core";
import { useContent } from "@vsf-enterprise/contentful";
// path to the component that you've just copied
import RenderContent from "~/components/cms/RenderContent";

export default {
  components: {
    RenderContent,
    LocaleSelector,
  },
  setup() {
    const { search, content, loading, error } = useContent();
    // get data
    onSSR(async () => {
      await search({ id: "2PHdWS1Ud0QPEfXjvjqwB6" });
    });
    // return data
    return {
      content,
    };
  },
};
</script>
<style lang="scss" scoped>
.topbar {
  position: relative;
  z-index: 2;
  &__button {
    margin: 0 0 0 var(--spacer-xs);
  }
}
.for-topbar {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.list {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-family: Agenda, sans-serif;
}
.middle {
  padding: 15px;
  font-family: Agenda, sans-serif;
}
.middle:hover {
  text-decoration: underline;
}
.item {
  color: black;
  font-size: 10px;
  line-height: 14px;
  border-left: 1px solid #000;
  /* padding-right: 14px; */
  padding-left: 14px;
  float: left;
  line-height: 20px;
  text-decoration: underline;
}

.language {
  padding-left: 300px;
  padding-top: 15px;
}
.language:hover {
  text-decoration: underline;
}
</style>
