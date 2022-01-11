<template>
  <div>
    <!-- {{products}} -->
    <!-- {{ categories }} -->
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 big-banner">
      <section class="widget-hero container-fluid">
        <div class="container slider-navigation-wrapper">
          <div class="row">
            <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6">
              <div class="slider-navigation"></div>
            </div>
          </div>
        </div>
      </section>
      <div class="hero-slider">
        <div
          class="Sirv hero-slide hero-slide-1"
          v-bind:style="{
            'background-image':
              'url(' +
              content[0].fields.content[0].fields.image.fields.file.url +
              ')',
          }"
        >
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6">
                <h2 class="heading1">
                  {{ content[0].fields.content[0].fields.title }}
                </h2>
                <div class="hero-card">
                  <div class="row">
                    <div class="col-xs-12">
                      <p class="hero-card--title">
                        {{ content[0].fields.content[0].fields.subtitle }}
                      </p>
                      <button class="content-button">
                        {{ content[0].fields.content[0].fields.button_text }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 small-banner">
      <div class="col-md-3 offer-card">
        <a class="ign-banner-datalayer-promotion" href="">
          <div class="offer-card--headline">
            <span>{{ content[0].fields.content[1].fields.title }}</span>
          </div>
          <div class="offer-card--image">
            <img
              class="Sirv"
              v-bind:src="
                content[0].fields.content[1].fields.bannerImage.fields.file.url
              "
            />
          </div>
          <div class="offer-card--copy">
            <p>{{ content[0].fields.content[1].fields.linkLabel }}</p>
          </div>
        </a>
      </div>
      <div class="col-md-3 offer-card">
        <a class="ign-banner-datalayer-promotion" href="">
          <div class="offer-card--headline">
            <span>{{ content[0].fields.content[2].fields.title }}</span>
          </div>
          <div class="offer-card--image">
            <img
              class="Sirv"
              v-bind:src="
                content[0].fields.content[2].fields.bannerImage.fields.file.url
              "
            />
          </div>
          <div class="offer-card--copy">
            <p>{{ content[0].fields.content[2].fields.linkLabel }}</p>
          </div>
        </a>
      </div>
      <div class="col-md-3 offer-card">
        <a class="ign-banner-datalayer-promotion" href="">
          <div class="offer-card--headline">
            <span>{{ content[0].fields.content[3].fields.title }}</span>
          </div>
          <div class="offer-card--image">
            <img
              class="Sirv"
              v-bind:src="
                content[0].fields.content[3].fields.bannerImage.fields.file.url
              "
            />
          </div>
          <div class="offer-card--copy">
            <p>{{ content[0].fields.content[3].fields.linkLabel }}</p>
          </div>
        </a>
      </div>
      <div class="col-md-3 offer-card">
        <a class="ign-banner-datalayer-promotion" href="">
          <div class="offer-card--headline">
            <span>{{ content[0].fields.content[4].fields.title }}</span>
          </div>
          <div class="offer-card--image">
            <img
              class="Sirv"
              v-bind:src="
                content[0].fields.content[4].fields.bannerImage.fields.file.url
              "
            />
          </div>
          <div class="offer-card--copy">
            <p>{{ content[0].fields.content[4].fields.linkLabel }}</p>
          </div>
        </a>
      </div>
    </div>
    <div class="for-products">
      <div class="for-product-items">
        <div>
          <img
            v-bind:src="products.items[0].content.productImages[0].imageUrl"
            height="300px"
            width="300px"
          />
        </div>
        <div class="for-product-heading">
          <h3>{{ products.items[0].categories[0].content.name }}</h3>
          <p>{{ products.items[0].content.productName }}</p>
          <h3 style="font-weight: 700">${{ products.items[0].price.price }}</h3>
          <a
            href="/p/6414516/3-piece-palm-island-wicker-rocker-chat-set"
            class="HES-cta-button"
            style="
              border: 2px solid rgba(228, 0, 43, 1);
              color: rgba(228, 0, 43, 1);
            "
            >Shop Now</a
          >
        </div>
      </div>
      <div class="for-product-items">
        <div>
          <img
            v-bind:src="products.items[3].content.productImages[0].imageUrl"
            height="300px"
            width="300px"
          />
        </div>
        <div class="for-product-heading">
          <h3>{{ products.items[3].categories[0].content.name }}</h3>
          <p>{{ products.items[3].content.productName }}</p>
          <h3 style="font-weight: 700">${{ products.items[3].price.price }}</h3>
          <a
            href="/p/4218254/175-x-215-keep-your-eyes-on-the-stars-framed-plaque"
            class="HES-cta-button"
            style="
              border: 2px solid rgba(228, 0, 43, 1);
              color: rgba(228, 0, 43, 1);
            "
            >Shop Now</a
          >
        </div>
      </div>
    </div>
    <section class="widget-category-grid container widget-padding">
      <div class="widget-title">
          <h2 class="h-title">Featured Categories</h2>
      </div>
      <div class="row">
        <div class="col-xs-6 col-lg-3">
                <a
                :href="
                  `/c/` +
                  categories[1].childrenCategories[0].content.slug +
                  `/` +
                  categories[1].childrenCategories[0].categoryCode
                "
              ><img
                  src="https://homehardware.sirv.com/24871-37656/cms/files/8c9c79ea-7427-4c80-bdd9-6bff41701ab9?scale.option=fill&w=300&h=0"
                  height="300px"
                  width="260px"
                />
                <span class="btn-text"
              >{{ categories[1].childrenCategories[0].content.name }}
              <svg
                class="svg-inline--fa fa-arrow-right fa-w-14"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                style="width: 0.875em; margin-left: 5px; color: #e4002b"
                data-icon="arrow-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                ></path>
              </svg>
            </span></a>
        </div>
        <div class="col-xs-6 col-lg-3">
            <a
            :href="
              `/c/` +
              categories[1].childrenCategories[1].content.slug +
              `/` +
              categories[1].childrenCategories[1].categoryCode
            "
          ><img
              src="https://homehardware.sirv.com/24871-37656/cms/files/8138cc9e-89b5-4018-b005-6c128b87837c?scale.option=fill&w=300&h=0"
              height="300px"
              width="260px"
            />
            <span class="btn-text"
              >{{ categories[1].childrenCategories[1].content.name }}
              <svg
                class="svg-inline--fa fa-arrow-right fa-w-14"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                style="width: 0.875em; margin-left: 5px; color: #e4002b"
                data-icon="arrow-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                ></path>
              </svg>
            </span>
            </a>
        </div>
        <div class="col-xs-6 col-lg-3">
            <a
            :href="
              `/c/` +
              categories[1].childrenCategories[2].content.slug +
              `/` +
              categories[1].childrenCategories[2].categoryCode
            "
          ><img
              src="https://homehardware.sirv.com/24871-37656/cms/files/38599574-b89b-4600-9230-1bc3e40428b7?scale.option=fill&w=300&h=0"
              height="300px"
              width="260px"
            />
            <span class="btn-text"
              >{{ categories[1].childrenCategories[2].content.name }}
              <svg
                class="svg-inline--fa fa-arrow-right fa-w-14"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                style="width: 0.875em; margin-left: 5px; color: #e4002b"
                data-icon="arrow-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                ></path>
              </svg>
            </span>
            </a>
        </div>
        <div class="col-xs-6 col-lg-3">
            <a
            :href="
              `/c/` +
              categories[1].childrenCategories[4].content.slug +
              `/` +
              categories[1].childrenCategories[4].categoryCode
            "
          ><img
              src="https://homehardware.sirv.com/24871-37656/cms/files/923cf2da-0ea7-47a9-a1eb-d34a0115d598?scale.option=fill&w=300&h=0"
              height="300px"
              width="260px"
            />
            <span class="btn-text"
              >{{ categories[1].childrenCategories[4].content.name }}
              <svg
                class="svg-inline--fa fa-arrow-right fa-w-14"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                style="width: 0.875em; margin-left: 5px; color: #e4002b"
                data-icon="arrow-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                ></path>
              </svg>
            </span>
            </a>
        </div>
        <div class="col-xs-6 col-lg-3">
            <a
            :href="
              `/c/` +
              categories[1].childrenCategories[5].content.slug +
              `/` +
              categories[1].childrenCategories[5].categoryCode
            "
          ><img
              src="https://homehardware.sirv.com/24871-37656/cms/files/4829fbca-d37f-4a13-9804-e815ed65a9c4?scale.option=fill&w=300&h=0"
              height="300px"
              width="260px"
            />
            <span class="btn-text"
              >{{ categories[1].childrenCategories[5].content.name }}
              <svg
                class="svg-inline--fa fa-arrow-right fa-w-14"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                style="width: 0.875em; margin-left: 5px; color: #e4002b"
                data-icon="arrow-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                ></path>
              </svg>
            </span>
            </a>
        </div>
        <div class="col-xs-6 col-lg-3">
           <a
            :href="
              `/c/` +
              categories[1].childrenCategories[6].content.slug +
              `/` +
              categories[1].childrenCategories[6].categoryCode
            "
          ><img
              src="https://homehardware.sirv.com/24871-37656/cms/files/a3f5475a-8a70-430e-89d2-50ba77038da5?scale.option=fill&w=300&h=0"
              height="300px"
              width="260px"
            />
            <span class="btn-text"
              >{{ categories[1].childrenCategories[6].content.name }}
              <svg
                class="svg-inline--fa fa-arrow-right fa-w-14"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                style="width: 0.875em; margin-left: 5px; color: #e4002b"
                data-icon="arrow-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                ></path>
              </svg>
            </span>
            </a>
        </div>
        <div class="col-xs-6 col-lg-3">
            <a
            :href="
              `/c/` +
              categories[1].childrenCategories[7].content.slug +
              `/` +
              categories[1].childrenCategories[7].categoryCode
            "
          ><img
              src="https://homehardware.sirv.com/24871-37656/cms/files/47b8d9ac-adff-411c-8520-fcf174d0337e?scale.option=fill&w=300&h=0"
              height="300px"
              width="260px"
            />
            <span class="btn-text"
              >{{ categories[1].childrenCategories[7].content.name }}
              <svg
                class="svg-inline--fa fa-arrow-right fa-w-14"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                style="width: 0.875em; margin-left: 5px; color: #e4002b"
                data-icon="arrow-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                ></path>
              </svg>
            </span>
            </a>
        </div>
        <div class="col-xs-6 col-lg-3">
            <a
            :href="
              `/c/` +
              categories[1].childrenCategories[8].content.slug +
              `/` +
              categories[1].childrenCategories[8].categoryCode
            "
          ><img
              src="https://homehardware.sirv.com/24871-37656/cms/files/204e2e37-d914-4c43-9108-4803999a51b1?scale.option=fill&w=300&h=0"
              height="300px"
              width="260px"
            />
            <span class="btn-text"
              >{{ categories[1].childrenCategories[8].content.name }}
              <svg
                class="svg-inline--fa fa-arrow-right fa-w-14"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                style="width: 0.875em; margin-left: 5px; color: #e4002b"
                data-icon="arrow-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                ></path>
              </svg>
            </span>
            </a>
        </div>
      </div>
    </section>
    <div class="box">
      <div class="innerBox">
        <h3 class="heading">{{ content[0].fields.content[5].fields.title }}</h3>
        <p class="forsub">{{ content[0].fields.content[5].fields.subtitle }}</p>
        <a v-bind:href="content[0].fields.content[5].fields.button_link">
          <p class="btn-secondary">
            {{ content[0].fields.content[5].fields.button_text }}
          </p></a
        >
      </div>
      <div>
        <img
          v-bind:src="content[0].fields.content[5].fields.image.fields.file.url"
          height="350px"
          width="550px"
          style="width: 100%; max-height: 100%"
        />
      </div>
    </div>

    <div class="box">
      <div class="box-1">
        <img
          v-bind:src="content[0].fields.content[7].fields.image.fields.file.url"
          height="350px"
          width="550px"
          style="width: 100%; max-height: 100%"
        />
      </div>
      <div class="innerBlock">
        <h3 class="heading">{{ content[0].fields.content[7].fields.title }}</h3>
        <p class="forsub">{{ content[0].fields.content[7].fields.subtitle }}</p>
        <a v-bind:href="content[0].fields.content[7].fields.button_link">
          <p class="btn-secondary">
            {{ content[0].fields.content[7].fields.button_text }}
          </p></a
        >
      </div>
    </div>

    <div class="box">
      <div class="innerBox">
        <h3 class="heading">{{ content[0].fields.content[6].fields.title }}</h3>
        <p class="forsub">{{ content[0].fields.content[6].fields.subtitle }}</p>
        <a v-bind:href="content[0].fields.content[6].fields.button_link">
          <p class="btn-secondary">
            {{ content[0].fields.content[6].fields.button_text }}
          </p></a
        >
      </div>
      <div>
        <img
          v-bind:src="content[0].fields.content[6].fields.image.fields.file.url"
          height="350px"
          width="550px"
          style="width: 100%; max-height: 100%"
        />
      </div>
    </div>

    <h1 class="banner-title">
      {{ content[0].fields.content[9].fields.title }}
    </h1>
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 banner-grid">
      <div class="col-md-4">
        <a
          class="datalayer-banner"
          v-bind:href="content[0].fields.content[10].fields.button_link"
        >
          <div class="offer-card--image">
            <img
              class="Sirv"
              v-bind:src="
                content[0].fields.content[10].fields.image.fields.file.url
              "
            />
          </div>
          <div class="card-headline">
            <p class="three-up-card--title">
              {{ content[0].fields.content[10].fields.title }}
            </p>
            <button class="btn-secondary">
              {{ content[0].fields.content[10].fields.button_text }}
            </button>
          </div>
        </a>
      </div>
      <div class="col-md-4">
        <a
          class="datalayer-banner"
          v-bind:href="content[0].fields.content[11].fields.button_link"
        >
          <div class="offer-card--image">
            <img
              class="Sirv"
              v-bind:src="
                content[0].fields.content[11].fields.image.fields.file.url
              "
            />
          </div>
          <div class="card-headline">
            <p class="three-up-card--title">
              {{ content[0].fields.content[11].fields.title }}
            </p>
            <button class="btn-secondary">
              {{ content[0].fields.content[11].fields.button_text }}
            </button>
          </div>
        </a>
      </div>
      <div class="col-md-4">
        <a
          class="datalayer-banner"
          v-bind:href="content[0].fields.content[12].fields.button_link"
        >
          <div class="offer-card--image">
            <img
              class="Sirv"
              v-bind:src="
                content[0].fields.content[12].fields.image.fields.file.url
              "
            />
          </div>
          <div class="card-headline">
            <p class="three-up-card--title">
              {{ content[0].fields.content[12].fields.title }}
            </p>
            <button class="btn-secondary">
              {{ content[0].fields.content[12].fields.button_text }}
            </button>
          </div>
        </a>
      </div>
    </div>
    <div class="box">
      <div class="box-1">
        <img
          v-bind:src="content[0].fields.content[8].fields.image.fields.file.url"
          height="350px"
          width="550px"
          style="width: 100%; max-height: 100%"
        />
      </div>
      <div class="innerBlock">
        <h3 class="heading">{{ content[0].fields.content[8].fields.title }}</h3>
        <p class="forsub">{{ content[0].fields.content[8].fields.subtitle }}</p>
        <a v-bind:href="content[0].fields.content[8].fields.button_link">
          <p class="btn-secondary">
            {{ content[0].fields.content[8].fields.button_text }}
          </p></a
        >
      </div>
    </div>
    <h1 class="banner-title2">
      {{ content[0].fields.content[13].fields.title }}
    </h1>
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 banner-grid">
      <div class="col-md-4">
        <a
          class="datalayer-banner"
          v-bind:href="content[0].fields.content[14].fields.button_link"
        >
          <div class="offer-card--image">
            <img
              class="Sirv"
              v-bind:src="
                content[0].fields.content[14].fields.image.fields.file.url
              "
            />
          </div>
          <div class="card-headline">
            <p class="three-up-card--title">
              {{ content[0].fields.content[14].fields.title }}
            </p>
            <button class="btn-secondary">
              {{ content[0].fields.content[14].fields.button_text }}
            </button>
          </div>
        </a>
      </div>
      <div class="col-md-4">
        <a
          class="datalayer-banner"
          v-bind:href="content[0].fields.content[15].fields.button_link"
        >
          <div class="offer-card--image">
            <img
              class="Sirv"
              v-bind:src="
                content[0].fields.content[15].fields.image.fields.file.url
              "
            />
          </div>
          <div class="card-headline">
            <p class="three-up-card--title">
              {{ content[0].fields.content[15].fields.title }}
            </p>
            <button class="btn-secondary">
              {{ content[0].fields.content[15].fields.button_text }}
            </button>
          </div>
        </a>
      </div>
      <div class="col-md-4">
        <a
          class="datalayer-banner"
          v-bind:href="content[0].fields.content[16].fields.button_link"
        >
          <div class="offer-card--image">
            <img
              class="Sirv"
              v-bind:src="
                content[0].fields.content[16].fields.image.fields.file.url
              "
            />
          </div>
          <div class="card-headline">
            <p class="three-up-card--title">
              {{ content[0].fields.content[16].fields.title }}
            </p>
            <button class="btn-secondary">
              {{ content[0].fields.content[16].fields.button_text }}
            </button>
          </div>
        </a>
      </div>
    </div>
    <div class="box">
      <div class="innerBox">
        <h3 class="heading">
          {{ content[0].fields.content[17].fields.title }}
        </h3>
        <p class="forsub">
          {{ content[0].fields.content[17].fields.subtitle }}
        </p>
        <a v-bind:href="content[0].fields.content[17].fields.button_link">
          <p class="btn-secondary">
            {{ content[0].fields.content[17].fields.button_text }}
          </p></a
        >
      </div>
      <div>
        <img
          v-bind:src="
            content[0].fields.content[17].fields.image.fields.file.url
          "
          height="350px"
          width="550px"
          style="width: 100%; max-height: 100%"
        />
      </div>
    </div>

    <div class="box">
      <div class="box-1">
        <img
          v-bind:src="
            content[0].fields.content[18].fields.image.fields.file.url
          "
          height="350px"
          width="550px"
          style="width: 100%; max-height: 100%"
        />
      </div>
      <div class="innerBlock">
        <h3 class="heading">
          {{ content[0].fields.content[18].fields.title }}
        </h3>
        <p class="forsub">
          {{ content[0].fields.content[18].fields.subtitle }}
        </p>
        <a v-bind:href="content[0].fields.content[18].fields.button_link">
          <p class="btn-secondary">
            {{ content[0].fields.content[18].fields.button_text }}
          </p></a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { onSSR } from "@vue-storefront/core";
import { useContent } from "@vsf-enterprise/contentful";
// path to the component that you've just copied
import RenderContent from "~/components/cms/RenderContent";
import { useUser } from "@vue-storefront/kibocommerce";
import { useProduct, useCategory } from "@vue-storefront/kibocommerce";

export default {
  components: {
    RenderContent,
  },
  setup() {
    const { search, content, loading, error } = useContent();
    const { isAuthenticated } = useUser();
    const {
      products,
      search: searchProduct,
      loading: lodingProduct,
    } = useProduct();

    const { categories, search: searchCategory } = useCategory();
    // get data
    onSSR(async () => {
      await search({ id: "2PHdWS1Ud0QPEfXjvjqwB6" });
      await searchProduct({ name: "Article Price List" });
      // await searchProduct({ id: "6414516" });
      await searchCategory({ id: "2127" });

      //console.log("sata",products.value.properties)
    });
    // return data
    return {
      content,
      isAuthenticated,
      products,
      categories,
    };
  },
};
</script>
<style lang="scss" scoped>
.col-lg-12 {
  width: 100%;
}
.col-md-4 {
  width: 31%;
  margin: 0 auto;
  display: inline-block;
  padding-right: 10px;
  padding-left: 10px;
  justify-content: center;
  @media (max-width: 768px) {
    width: 30%;
  }
  @media (max-width: 479px) {
    width: 100%;
    height: 444px;
    padding-left: 0px;
  }
}
.centered {
  text-align: center;
  font-size: 0;
}
.centered > div {
  float: none;
  display: inline-block;
  text-align: left;
  font-size: 13px;
}
.centered {
  text-align: center;
  font-size: 0;
}
.centered > div {
  float: none;
  display: inline-block;
  text-align: left;
  font-size: 13px;
}
.col-lg-6 {
  width: 33.33%;
  padding: 20px 40px;
  @media (max-width: 768px) {
    width: 44%;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (max-width: 479px) {
    width: 92%;
  }
}
.banner-grid {
  display: inline;
}
.card-headline {
  padding: 15px 20px 48px;
}
.three-up-card--title {
  //min-height: 80px;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 0;
  height: 80px;
  // line-height: 80px;
   @media (max-width: 768px) {
     font-size: 25px;
   }
}
.datalayer-banner {
  border: 1px solid #e6e7e8;
  box-shadow: 0 0 12px 0 rgb(0 0 0 / 8%);
  display: inline-block;
  height: 100%;
}
.banner-title {
  color: #e4002b;
  text-align: center;
  font-size: 40px;
  padding-bottom: 20px;
}

.slider-navigation {
  // width: 95%;
  padding: 0px 15px 7px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 100px;
  z-index: 10;
  color: #006a4e;
}
.hero-card {
  background-color: #006a4e;
  padding: 50px 20px 80px;
  // margin-top: 50px;
  position: relative;
  text-align: left;
  height: inherit;
}
.heading1 {
  background: white;
}
.hero-card--title {
  font-family: Agenda, sans-serif;
  font-weight: 900;
  letter-spacing: 0;
  margin-top: 0px;
  font-size: 48px;
  line-height: 70px;
  color: #fff;
}
.content-button {
  background-color: #006a4e;
  padding: 10px;
  box-sizing: border-box;
  border: 2px solid #fff;
  border-radius: 22px;
  color: #fff;
  width: 200px;
}
.small-banner {
  margin-top: 30px;
  display: inline;
}
.col-md-3 {
  width: 21%;
  margin: 0 auto;
  display: inline-block;
  padding-right: 22px;
  padding-left: 22px;
  padding-top: 30px;
  justify-content: center;
  @media all and (device-width: 1024px) and (device-height: 768px) and (orientation:landscape) {
    width: 20%;
  }
  @media (max-width: 768px) {
    width: 43%;
  }
  @media (max-width: 479px) {
    width: 100%;
    padding-left: 0;
  }
}
.offer-card--headline {
  color: #fff;
  font-family: Agenda, sans-serif;
  font-size: 25px;
  font-weight: 900;
  letter-spacing: 0;
  padding: 10px 10px 11px 20px;
  background-color: #006a4e;
  line-height: 30px;
}
.offer-card--image img {
  width: 100%;
}
.offer-card--copy {
  margin: 0;
}
.box {
  margin-top: 25px;
  margin-bottom: 25px;
  display: block;
  border: 1px solid #e6e7e8;
  box-shadow: 0 0 12px 0 rgb(0 0 0 / 8%);
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 479px) {
    display: block;
  }
  img {
    @media (max-width: 479px) {
      object-fit: contain;
    }
  }
}
.box-1 {
  @media (max-width: 479px) {
    padding-left: 0px;
    padding-right: 20%;
    width: 100%;
  }
  @media (max-width: 768px) {
    padding-left: 0px;
    padding-right: 0;
  }
}
.innerBox {
  padding-left: 50px;
  padding-right: 20%;
  // padding-top: 20px;
}

.heading {
  font-size: 48px;
  font-weight: bold;
  line-height: 54px;
  color: #000;
  font-family: Agenda, sans-serif;
  margin-top: 20px;
  @media (max-width: 768px) {
    font-size: 38px;
    line-height: 35px;
    margin-bottom: 20px;
  }
  @media (max-width: 479px) {
    font-size: 30px;
    line-height: 35px;
    margin-bottom: 20px;
  }
}
.btn-secondary {
  padding: 12px 40px;
  box-sizing: border-box;
  border: 2px solid #e4002b;
  border-radius: 22px;
  color: #e4002b;
  font-family: Agenda, sans-serif;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  background-color: #fff;
  @media (max-width: 479px) {
   // margin-top: 100px;
  }
}
.forsub {
  color: #000;
  font-family: Agenda, sans-serif;
  font-size: 32px;
  letter-spacing: 0;
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 20px;
  }
}

.innerBlock {
  padding-left: 50px;
  // padding-top: 20px;
}
.for-products {
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    display: inline-block;
  }
}
.for-product-items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 10px;
  box-shadow: 0 0 12px 0 rgb(0 0 0 / 8%);
  flex: 1;
  @media (max-width: 479px) {
    display: block;
  }
  img {
    width: 100%;
  }
}
.for-product-heading {
  padding: 20px 20px 20px 30px;
  border-top: 3.5px solid rgba(228, 0, 43, 1);
}
.HES-cta-button {
  display: block;
  margin-top: 20px;
  margin-bottom: 10px;
  text-decoration: none;
  display: inline-block;
  padding: 12px 40px;
  box-sizing: border-box;
  border-radius: 22px;
  font-family: Agenda, sans-serif;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 18px;
  text-align: center;
}

// .home-Featured-item {
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr;
// }

.btn-text {
  padding: 20px 0 40px;
  font-size: 18px;
  color: #000;
  font-family: Agenda, sans-serif;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0;
  text-decoration: none;
  display: inline-block;
   @media (max-width: 767px) {
        padding:10px 20px;
      }
  @media (max-width: 479px) {
        padding: 0 5px;
      }
}
.btn-text:hover {
  color: #e4002b;
  text-decoration: underline;
}

.home-category-icon {
  width: 0.875em;
}

section.widget-category-grid.container.widget-padding {
    margin-top: 25px;
    margin-bottom: 25px;
    padding-left: 10px;
     @media (max-width: 768px) {
      padding-left: 5px;
     }
}
.col-lg-3 {
    width: 24%;
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    @media (max-width: 768px) {
      width: 49%;
    }
    img{
      width: 100%;
      @media (max-width: 767px) {
        object-fit: contain;
      }
    }
}
.row {
    margin-right: -10px;
    margin-left: -10px;
}
h2.h-title {
   @media (max-width: 767px) {
    padding-left: 20px;
   }
   @media (max-width: 479px) {
    padding-left: 0px;
   }
}
</style>
