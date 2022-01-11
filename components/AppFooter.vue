<template>
  <div>
    <div>
      <div class="Footer-row Footer-row--top">
        <div>
          <div class="Footer-cell">
            <div class="Footer-newsletter">
              <h2 class="heading-text">
                Stay in the know with exclusive deals and event updates.
              </h2>
              <form action="post" class="post">
                <div class="email-footer">
                  <label
                    for="Footer-newsletter-email"
                    style="padding-left: 16px; font-weight: bold"
                    >Email</label
                  >
                  <input
                    type="email"
                    placeholder="Email address"
                    name="email"
                    id="Footer-newsletter-email"
                    required=""
                    class="footeremail"
                  />
                </div>

                <input type="submit" class="Button" value="Sign Up" />
              </form>
            </div>
          </div>
          <div class="Footer-cell">
            <div class="Footer-social">
              <!-- <h2>Inspiration’s always handy</h2>
        <p>Follow us for bright ideas and must-haves for every season.</p> -->
              <!-- COMPONENT: SocialLinks -->
              <!-- <ul class="SocialLinks ">
          <li>
            <a href="#" data-facebook="">
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" data-twitter="">
              <span>Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" data-pinterest="">
              <span>Pinterest</span>
            </a>
          </li>
          <li>
            <a href="#" data-youtube="">
              <span>Youtube</span>
            </a>
          </li>
          <li>
            <a href="#" data-instagram="">
              <span>Instagram</span>
            </a>
          </li>
        </ul> -->
              <!-- /COMPONENT: SocialLinks -->
            </div>
          </div>
        </div>
      </div>
      <div class="Footer-row Footer-row--middle">
        <div class="Footer-cell">
          <div class="Footer-services">
            <nav>
              <ul class="footer-icons">
                <li>
                  <a v-bind:href="content[0].fields.content[19].fields.link1">
                    <!-- <img
                      src="https://hh-styleguide.s3.ca-central-1.amazonaws.com/img/ui/footer/servies/aeroplan-en.png"
                      alt=""
                      class="footer-image"
                    /> -->

                     <img
              class="footer-image"
              v-bind:src="
                content[0].fields.content[21].fields.image1.fields.file.url
              "
            />
                    <span> {{content[0].fields.content[19].fields.text1}}</span>
                  </a>
                </li>
                <li>
                  <a v-bind:href="content[0].fields.content[19].fields.link2">
                    <!-- <img
                      src="https://hh-styleguide.s3.ca-central-1.amazonaws.com/img/ui/footer/servies/beautitone-en.png"
                      alt=""
                      class="footer-image"
                    /> -->

                    <img
              class="footer-image"
              v-bind:src="
                content[0].fields.content[21].fields.image2.fields.file.url
              "
            />
                    <span>{{content[0].fields.content[19].fields.text2}}</span>
                  </a>
                </li>
                <li>
                  <a v-bind:href="content[0].fields.content[19].fields.link3">
                    <!-- <img
                      src="https://hh-styleguide.s3.ca-central-1.amazonaws.com/img/ui/footer/servies/giftcards-en.png"
                      alt=""
                      class="footer-image"
                    /> -->
                    <img
              class="footer-image"
              v-bind:src="
                content[0].fields.content[21].fields.image3.fields.file.url
              "
            />
                    <span>{{content[0].fields.content[19].fields.text3}}</span>
                  </a>
                </li>
                <li>
                  <a v-bind:href="content[0].fields.content[19].fields.link4">
                    <!-- <img
                      src="https://hh-styleguide.s3.ca-central-1.amazonaws.com/img/ui/footer/servies/contractors-en.png"
                      alt=""
                      class="footer-image"
                    /> -->

                    <img
              class="footer-image"
              v-bind:src="
                content[0].fields.content[21].fields.image4.fields.file.url
              "
            />
                    <span>{{content[0].fields.content[19].fields.text4}}</span>
                  </a>
                </li>
                <li>
                  <a v-bind:href="content[0].fields.content[19].fields.link5">
                    <!-- <img
                      src="https://hh-styleguide.s3.ca-central-1.amazonaws.com/img/ui/footer/servies/beaverhomes-en.png"
                      alt=""
                      class="footer-image"
                    /> -->

                    <img
              class="footer-image"
              v-bind:src="
                content[0].fields.content[21].fields.image5.fields.file.url
              "
            />
                    <span>{{content[0].fields.content[19].fields.text5}}</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="Footer-cell">
          <div class="Footer-navigation">
            <ul class="TabList" role="tablist">
              <li class="for-service">
                <h2
                  role="tab"
                  aria-selected="false"
                  aria-expanded="false"
                  aria-controls="Footer-navigation-1-panel"
                  id="Footer-navigation-1-tab"
                  tabindex="0"
                >
                  <!-- Services -->
                  {{content[0].fields.content[19].fields.text23}}
                </h2>
                <ul
                  role="tabpanel"
                  aria-hidden="true"
                  aria-labelledby="Footer-navigation-1-tab"
                  id="Footer-navigation-1-panel"
                  tabindex="-1"
                >
                  <li class="footerlistitem">
                    <a v-bind:href="content[0].fields.content[19].fields.link6"
                      >{{content[0].fields.content[19].fields.text6}}</a
                    >
                  </li>
                  <li class="footerlistitem">
                    <a v-bind:href="content[0].fields.content[19].fields.link7"
                      >{{content[0].fields.content[19].fields.text7}}</a
                    >
                  </li>
                  <li class="footerlistitem">
                    <a v-bind:href="content[0].fields.content[19].fields.link8"
                      >{{content[0].fields.content[19].fields.text8}}</a
                    >
                  </li>
                </ul>
              </li>
              <li class="for-Business">
                <h2
                  role="tab"
                  aria-selected="false"
                  aria-expanded="false"
                  aria-controls="Footer-navigation-2-panel"
                  id="Footer-navigation-2-tab"
                  tabindex="0"
                >
                  <!-- Services for Business -->
                  {{content[0].fields.content[19].fields.text24}}
                </h2>
                <ul
                  role="tabpanel"
                  aria-hidden="true"
                  aria-labelledby="Footer-navigation-2-tab"
                  id="Footer-navigation-2-panel"
                  tabindex="-1"
                >
                  <li class="footerlistitem">
                    <a v-bind:href="content[0].fields.content[19].fields.link9"
                      >{{content[0].fields.content[19].fields.text9}}</a
                    >
                  </li>
                  <li class="footerlistitem">
                    <a v-bind:href="content[0].fields.content[19].fields.link10"
                      >{{content[0].fields.content[19].fields.text10}}</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                <h2
                  role="tab"
                  aria-selected="false"
                  aria-expanded="false"
                  aria-controls="Footer-navigation-3-panel"
                  id="Footer-navigation-3-tab"
                  tabindex="0"
                >
                  <!-- About Us -->
                  {{content[0].fields.content[19].fields.text25}}
                </h2>
                <ul
                  role="tabpanel"
                  aria-hidden="true"
                  aria-labelledby="Footer-navigation-3-tab"
                  id="Footer-navigation-3-panel"
                  tabindex="-1"
                >
                  <li class="footerlistitem">
                    <a v-bind:href="content[0].fields.content[19].fields.link11"
                      >{{content[0].fields.content[19].fields.text11}}</a
                    >
                  </li>
                  <li class="footerlistitem">
                    <a v-bind:href="content[0].fields.content[19].fields.link12"
                      >{{content[0].fields.content[19].fields.text12}}</a
                    >
                  </li>
                  <li class="footerlistitem">
                    <a v-bind:href="content[0].fields.content[19].fields.link13"
                      >{{content[0].fields.content[19].fields.text13}}</a
                    >
                  </li>
                  <li class="footerlistitem">
                    <a v-bind:href="content[0].fields.content[19].fields.link14"
                      >{{content[0].fields.content[19].fields.text14}}</a
                    >
                  </li>
                  <li class="footerlistitem">
                    <a v-bind:href="content[0].fields.content[19].fields.link15"
                      >{{content[0].fields.content[19].fields.text15}}</a
                    >
                  </li>
                  <li class="footerlistitem">
                    <a v-bind:href="content[0].fields.content[19].fields.link16"
                      >{{content[0].fields.content[19].fields.text16}}</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                <h2
                  role="tab"
                  aria-selected="false"
                  aria-expanded="false"
                  aria-controls="Footer-navigation-4-panel"
                  id="Footer-navigation-4-tab"
                  tabindex="0"
                >
                  <!-- Help &amp; Support -->
                  {{content[0].fields.content[19].fields.text26}}
                </h2>
                <ul
                  role="tabpanel"
                  aria-hidden="true"
                  aria-labelledby="Footer-navigation-4-tab"
                  id="Footer-navigation-4-panel"
                  tabindex="-1"
                >
                  <li class="footerlistitem">
                    <a v-bind:href="content[0].fields.content[19].fields.link17"
                      >{{content[0].fields.content[19].fields.text17}}</a
                    >
                  </li>
                  <li class="footerlistitem">
                    <a v-bind:href="content[0].fields.content[19].fields.link18"
                      >{{content[0].fields.content[19].fields.text18}}</a
                    >
                  </li>
                  <li class="footerlistitem">
                    <a v-bind:href="content[0].fields.content[19].fields.link19"
                      >{{content[0].fields.content[19].fields.text19}}</a
                    >
                  </li>
                  <li class="footerlistitem">
                    <a v-bind:href="content[0].fields.content[19].fields.link20"
                      >{{content[0].fields.content[19].fields.text20}}</a
                    >
                  </li>
                  <li class="footerlistitem">
                    <a v-bind:href="content[0].fields.content[19].fields.link21"
                      >{{content[0].fields.content[19].fields.text21}}</a
                    >
                  </li>
                  <li class="footerlistitem">
                    <a v-bind:href="content[0].fields.content[19].fields.link22"
                      >{{content[0].fields.content[19].fields.text22}}</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="Footer-accessibility" style="margin-left: 550px">
        <!-- Accessibility Support -->
        <h2>{{content[0].fields.content[19].fields.text27}}</h2>
        <div>
          <a href="https://www.essentialaccessibility.com/" target="_blank">
            <!-- <img
              v-bind:src="content[0].fields.content[19].fields.link22"
              width="84px"
              height="33px"
            /> -->
            <img
              class="footer-image"
              v-bind:src="
                content[0].fields.content[21].fields.image6.fields.file.url
              "
            />
            <!-- <span>Download the app</span> -->
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onSSR } from "@vue-storefront/core";
import { useContent } from "@vsf-enterprise/contentful";
// path to the component that you've just copied
import RenderContent from "~/components/cms/RenderContent";
//import { Banner } from '~/components/cms/Banner.vue'

export default {
  components: {
    RenderContent,
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
/* @import "//fonts.googleapis.com/css?family=Work+Sans:400,500,700"; */
/* @import "//cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"; */
/* @import "//hh-styleguide.s3.ca-central-1.amazonaws.com/css/bootstrap3.7.css";
@import "//hh-styleguide.s3.ca-central-1.amazonaws.com/css/app.css";
@import "//hh-styleguide.s3.ca-central-1.amazonaws.com/css/utilities.css";  */

.Footer-row {
  padding: 30px 0;
}
.Footer-row--top {
  background-color: #e4002b;
  color: #fff;
}
.Footer-row--middle {
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 70px;
  @media (max-width: 479px) {
    // .Footer-row--middle{
    padding-left: 0;
    padding-right: 0;
    // }
  }
}
.TabList {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  list-style: none;
  font-size: 15px;
  @media (max-width: 479px) {
    display: inline-block;
  }
}
.heading-text {
  font-size: 27px;
  @media (max-width: 479px) {
    padding-left: 20px;
  }
}
#Footer-navigation-1-tab,
#Footer-navigation-2-tab,
#Footer-navigation-3-tab,
#Footer-navigation-4-tab {
  margin: 1px 1px;
  font-family: "Agenda_bold", sans-serif;
  font-style: normal;
  /* font-weight: normal; */
  font-size: 18px;
}
.Footer-newsletter {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 30px;
  @media (max-width: 479px) {
    display: inline-block;
    padding: 0;
  }
}
#Footer-navigation-1-panel {
  list-style: none;
  padding: 0px;
  text-decoration: underline;
}
#Footer-navigation-2-panel {
  list-style: none;
  padding: 0px;
  text-decoration: underline;
}
#Footer-navigation-3-panel {
  list-style: none;
  padding: 0px;
  text-decoration: underline;
}
#Footer-navigation-4-panel {
  list-style: none;
  padding: 0px;
  text-decoration: underline;
}
#Footer-navigation-1-panel:hover {
  color: red;
}
.for-service {
  grid-column: 1 / 1;
  grid-row: 1/1;
}
.for-Business {
  grid-column: 1/2;
  grid-row: 2/2;
}
.footer-icons {
  list-style: none;
}
.footer-image {
  width: 97px;
  height: 50px;
  padding-right: 9px;
}
.footerlistitem {
  padding-bottom: 8px;
}
.post {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 20px;
  @media (max-width: 479px) {
    display: inline-block;
    padding: 0;
    width: 100%;
    margin-left: 0;
  }
}
.footeremail {
  width: 300px;
  border-radius: 20px;
  border: none;
  background: #fff;
  color: #000;
  height: 44px;
  @media (max-width: 479px) {
    padding-left: 10px;
  }
}
.Button {
  border: none;
  color: #e4002b;
  padding: 12px 40px;
  border-radius: 22px;
  background-color: #fff;
  height: 40px;
  width: 140px;
  font-family: Agenda, sans-serif;
  font-size: 15px;
  font-weight: 600;
  margin-top: 20px;
  @media (max-width: 479px) {
    margin-left: 20px;
  }
}
.accessibility-heading {
  font-size: 1.8rem;
  font-family: "Agenda_bold", sans-serif;
  font-style: normal;
  font-weight: normal;
}
.h2 {
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>
