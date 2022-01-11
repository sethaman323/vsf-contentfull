<template>
  <div>
 
    <SfHeader
      class="sf-header--has-mobile-search"
      :class="{ 'header-on-top': isSearchOpen }"
      :isNavVisible="isMobileMenuOpen"
    >
      <!-- TODO: add mobile view buttons after SFUI team PR -->
      <template #logo>
        <nuxt-link :to="localePath('/')" class="sf-header__logo">
          <div class="header-logo">
            <a
              class="
                mz-storebranding
                Sirv
                smv-bg-image smv-bg-contain
                sirv-image-loaded
              "
              id="store-branding"
              data-bg-src="https://homehardware.sirv.com/resources/images/hh-logo.svg"
              href="/en/"
              title="Home Hardware"
              style="
                background-image: url('https://homehardware.sirv.com/resources/images/hh-logo.svg');
              "
              >Home Hardware</a
            >
          </div>
        </nuxt-link>
      </template>

      <!-- <template #navigation>
        <HeaderNavigation :isMobile="isMobile" />
      </template>
      <template #aside>
        <LocaleSelector class="smartphone-only" />
      </template> -->
      <template #header-icons>
        <div class="store-dropdown--button">
          <svg
            class="svg-inline--fa fa-map-marker-alt fa-w-12"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="map-marker-alt"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
            ></path></svg
          ><!-- <i class="fas fa-map-marker-alt"></i> Font Awesome fontawesome.com -->
          <svg
            class="svg-inline--fa fa-times fa-w-10"
            style="display: none"
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="times"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
            ></path></svg
          ><!-- <i class="far fa-times" style="display:none"></i> Font Awesome fontawesome.com -->
          <div class="store-dropdown-info">
            <span
              class="store-title store-name"
              id="store-name"
              title="Home Hardware - St. Jacobs"
              >Home Hardware - St. Jacobs</span
            >
            <span class="store-hours"> Today's Hours: 8:00 am - 6:00 pm </span>
          </div>
          <svg
            id="for-dropdown"
            class="svg-inline--fa fa-chevron-down fa-w-14"
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="chevron-down"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"
            ></path></svg
          ><!-- <i class="far fa-chevron-down"></i> Font Awesome fontawesome.com -->
        </div>
        <div class="sf-header__icons">
          <SfButton
            v-e2e="'app-header-account'"
            class="sf-button--pure sf-header__action"
            @click="handleAccountClick"
          >
            <div class="header-account" v-if="loginText === 'Log In'">
              <svg
                class="svg-inline--fa fa-user-circle fa-w-19"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="user-circle"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"
                ></path>
              </svg>
              <span class="icon-text">Log In</span>
            </div>
            <div class="header-account" v-else>
              <svg
                class="svg-inline--fa fa-user-circle fa-w-19"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="user-circle"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
                ></path>
              </svg>
              <span class="icon-text">My Account</span>
            </div>
          </SfButton>
          <SfButton
            class="sf-button--pure sf-header__action"
            @click="toggleWishlistSidebar"
          >
            <svg
              class="svg-inline--fa fa-list-ul fa-w-19"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="list-ul"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M48 368a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0-160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0-160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 24H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16z"
              ></path>
            </svg>
            <span class="icon-text wishlist-icon logout-wishlist">List</span>
            <SfBadge
              v-if="wishlistItemTotals"
              class="sf-badge--number cart-badge"
              >{{ wishlistItemTotals }}</SfBadge
            >
          </SfButton>
          <SfButton
            v-e2e="'app-header-cart'"
            class="sf-button--pure sf-header__action"
            @click="toggleCartSidebar"
          >
            <svg
              class="svg-inline--fa fa-shopping-cart fa-w-19"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="shopping-cart"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
              ></path>
            </svg>
            <span class="icon-text">Cart</span>
            <SfBadge
              v-if="cartTotalItems"
              class="sf-badge--number cart-badge"
              >{{ cartTotalItems }}</SfBadge
            >
          </SfButton>
        </div>
      </template>

      <template #search>
        <SfSearchBar
          ref="searchBarRef"
          :placeholder="$t('Search')"
          aria-label="Search"
          class="sf-header__search"
          :value="term"
          @input="handleSearch"
          @keydown.enter="handleSearch($event)"
          @focus="isSearchOpen = true"
          @keydown.esc="closeSearch"
          v-click-outside="closeSearch"
        >
          <template #icon>
            <SfButton
              v-if="!!term"
              class="sf-search-bar__button sf-button--pure"
              @click="closeOrFocusSearchBar"
            >
              <span class="sf-search-bar__icon">
                <SfIcon color="var(--c-text)" size="18px" icon="cross" />
              </span>
            </SfButton>
            <SfButton
              v-else
              class="sf-search-bar__button sf-button--pure"
              @click="
                isSearchOpen ? (isSearchOpen = false) : (isSearchOpen = true)
              "
            >
              <span class="sf-search-bar__icon">
                <SfIcon size="20px" icon="search" />
              </span>
            </SfButton>
          </template>
        </SfSearchBar>
      </template>
    </SfHeader>
    <SearchResults
      :visible="isSearchOpen"
      :result="result"
      @close="closeSearch"
      @removeSearchResults="removeSearchResults"
    />
    <SfOverlay :visible="isSearchOpen" />
    <div class="for-the-box">
      <ul class="for-the-list">
        <li class="for-the-items">
          <a href="#navigation" class="for-the-link"
            ><svg
              class="svg-inline--fa fa-hammer fa-w-18"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="hammer"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M571.31 193.94l-22.63-22.63c-6.25-6.24-16.38-6.25-22.63 0l-11.31 11.31-28.91-28.9c5.63-21.31.36-44.9-16.35-61.61l-45.25-45.25C392.99 15.62 352.05 0 311.1 0c-40.95 0-81.9 15.62-113.14 46.86l67.88 67.88v18.75c0 8.05 1.62 15.91 4.5 23.27L22.77 387.89C-6.88 415.57-7.68 462.32 21 491c14.03 14.03 32.37 21 50.69 21 19.15 0 38.27-7.62 52.42-22.77l230.92-247.34c7.56 3 15.58 4.52 23.61 4.52 5.61 0 11.23-.73 16.7-2.17l28.91 28.9-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.63c6.25 6.24 16.37 6.25 22.63 0l113.14-113.14c6.23-6.25 6.23-16.38-.02-22.63zM89.02 456.47c-9.86 10.56-25.36 9.31-34.08.59-10.21-10.22-8.44-25.66.59-34.08L300.3 194.46l17.24 17.24L89.02 456.47zm380.47-205.96l-59.74-59.73-26.68 7.05c-9.5 2.52-15.12-3.61-15.4-3.88l-49.14-49.14c-2.98-2.98-4.69-7.1-4.69-11.31V94.86l-40.4-40.4C285.37 50.21 298.06 48 311.1 48c29.92 0 58.04 11.65 79.2 32.8l45.25 45.25c5.84 5.84 4.45 13.26 3.89 15.4l-7.05 26.69 59.74 59.73-22.64 22.64z"
              ></path>
            </svg>
            <HeaderNavigation :isMobile="isMobile" />

            <LocaleSelector class="smartphone-only" />
          </a>
        </li>

        <li class="for-the-items">
          <a
            v-bind:href="content[0].fields.content[20].fields.link1"
            class="for-the-link"
          >
            <svg
              class="svg-inline--fa fa-play-circle fa-w-16"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="play-circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"
              ></path></svg
            ><!-- <i class="far fa-play-circle"></i> Font Awesome fontawesome.com -->

           {{content[0].fields.content[20].fields.text6}}
          </a>
        </li>

        <li class="for-the-items">
          <a
            v-bind:href="content[0].fields.content[20].fields.link2"
            class="for-the-link"
          >
            <svg
              class="svg-inline--fa fa-newspaper fa-w-18"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="newspaper"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z"
              ></path></svg
            ><!-- <i class="far fa-newspaper"></i> Font Awesome fontawesome.com -->

          {{content[0].fields.content[20].fields.text7}}
          </a>
        </li>

        <li class="for-the-items">
          <a
            v-bind:href="content[0].fields.content[20].fields.link3"
            class="for-the-link"
          >
            <svg
              class="svg-inline--fa fa-gift fa-w-16"
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="gift"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M464 144h-39.3c9.5-13.4 15.3-29.9 15.3-48 0-44.1-33.4-80-74.5-80-42.3 0-66.8 25.4-109.5 95.8C213.3 41.4 188.8 16 146.5 16 105.4 16 72 51.9 72 96c0 18.1 5.8 34.6 15.3 48H48c-26.5 0-48 21.5-48 48v96c0 8.8 7.2 16 16 16h16v144c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304h16c8.8 0 16-7.2 16-16v-96c0-26.5-21.5-48-48-48zm-187.8-3.6c49.5-83.3 66-92.4 89.3-92.4 23.4 0 42.5 21.5 42.5 48s-19.1 48-42.5 48H274l2.2-3.6zM146.5 48c23.4 0 39.8 9.1 89.3 92.4l2.1 3.6h-91.5c-23.4 0-42.5-21.5-42.5-48 .1-26.5 19.2-48 42.6-48zM192 464H80c-8.8 0-16-7.2-16-16V304h128v160zm0-192H32v-80c0-8.8 7.2-16 16-16h144v96zm96 192h-64V176h64v288zm160-16c0 8.8-7.2 16-16 16H320V304h128v144zm32-176H320v-96h144c8.8 0 16 7.2 16 16v80z"
              ></path></svg
            ><!-- <i class="fal fa-gift"></i> Font Awesome fontawesome.com -->

        {{content[0].fields.content[20].fields.text8}}
          </a>
        </li>

        <li class="for-the-items">
          <a
            v-bind:href="content[0].fields.content[20].fields.link4"
            class="for-the-link"
          >
            <svg
              class="svg-inline--fa fa-hard-hat fa-w-16"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="hard-hat"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M480 320c0-101.46-67.5-187-160-214.6V80a16 16 0 0 0-16-16h-96a16 16 0 0 0-16 16v25.4C99.49 133 32 218.54 32 320a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32zM172.16 165.29l17.78 81.27a12 12 0 0 0 11.72 9.44H212a12 12 0 0 0 12-12V112h64v132a12 12 0 0 0 12 12h10.34a12 12 0 0 0 11.72-9.44l17.78-81.27A176.14 176.14 0 0 1 432 320H80a176.14 176.14 0 0 1 92.16-154.71zM464 400H48v-32h416z"
              ></path></svg
            ><!-- <i class="far fa-hard-hat"></i> Font Awesome fontawesome.com -->

         {{content[0].fields.content[20].fields.text9}}
          </a>
        </li>

        <li class="for-the-items">
          <a
            v-bind:href="content[0].fields.content[20].fields.link5"
            class="for-the-link"
          >
            <svg
              class="svg-inline--fa fa-tag fa-w-16"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="tag"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a47.998 47.998 0 0 0 14.059 33.941l211.882 211.882c18.745 18.745 49.137 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM259.886 463.996L48 252.118V48h204.118L464 259.882 259.886 463.996zM192 144c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48z"
              ></path></svg
            ><!-- <i class="far fa-tag"></i> Font Awesome fontawesome.com -->

           {{content[0].fields.content[20].fields.text10}}
          </a>
        </li>

        <li class="for-the-items">
          <a href="/en/on-sale" class="for-the-link"> </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  SfHeader,
  SfImage,
  SfIcon,
  SfButton,
  SfBadge,
  SfSearchBar,
  SfOverlay,
  SfMenuItem,
  SfLink,
} from "@storefront-ui/vue";
import { useUiState } from "~/composables";
import {
  useCart,
  useWishlist,
  useUser,
  cartGetters,
  categoryGetters,
  useCategory,
  useSearchSuggestions,
  wishlistGetters,
} from "@vue-storefront/kibocommerce";
import { computed, ref, onBeforeUnmount, watch } from "@vue/composition-api";
import { onSSR } from "@vue-storefront/core";
import { useUiHelpers } from "~/composables";
import LocaleSelector from "./LocaleSelector";
import SearchResults from "~/components/SearchResults";
import { clickOutside } from "@storefront-ui/vue/src/utilities/directives/click-outside/click-outside-directive.js";
import {
  mapMobileObserver,
  unMapMobileObserver,
} from "@storefront-ui/vue/src/utilities/mobile-observer.js";
import debounce from "lodash.debounce";
import HeaderNavigation from "./HeaderNavigation";
import { useContent } from "@vsf-enterprise/contentful";
// path to the component that you've just copied
import RenderContent from "~/components/cms/RenderContent";

export default {
  components: {
    SfHeader,
    SfImage,
    LocaleSelector,
    SfIcon,
    SfButton,
    SfBadge,
    SfSearchBar,
    SearchResults,
    SfOverlay,
    SfMenuItem,
    SfLink,
    HeaderNavigation,
    RenderContent,
  },
  directives: { clickOutside },

  setup(props, { root }) {
    const {
      toggleCartSidebar,
      toggleWishlistSidebar,
      toggleLoginModal,
      isMobileMenuOpen,
    } = useUiState();
    const { search, content, loading, error } = useContent();
    const { setTermForUrl, getFacetsFromURL, getCatLink } = useUiHelpers();
    const { load: loadUser, isAuthenticated } = useUser();
    const { search: loadSearchSuggestions } = useSearchSuggestions();

    const { cart, load: loadCart } = useCart();
    const { search: searchCategories, categories } =
      useCategory("AppHeader:Category");

    const { wishlist, load: loadWishlist } = useWishlist();
    const term = ref(getFacetsFromURL().phrase);
    const isSearchOpen = ref(false);
    const searchBarRef = ref(null);
    const result = ref(null);
    const loginText = computed(() => {
      if (isAuthenticated.value) {
        return "My Account";
      } else {
        return "Log In";
      }
    });
    const wishlistItemTotals = computed(() => {
      const count = wishlistGetters.getTotalItems(wishlist.value);
      return count;
    });

    const cartTotalItems = computed(() => {
      const count = cartGetters.getTotalItems(cart.value);
      return count ? count.toString() : null;
    });
    const navigationCategories = computed(() => {
      return categories.value
        ?.filter(
          (category) =>
            category.childrenCategories?.length && category.isDisplayed
        )
        .map(categoryGetters.getTree)
        .filter((category, indx) => indx < 4);
    });
    const accountIcon = computed(() =>
      isAuthenticated.value ? "profile_fill" : "profile"
    );

    // TODO: https://github.com/DivanteLtd/vue-storefront/issues/4927
    const handleAccountClick = async () => {
      if (isAuthenticated.value) {
        return root.$router.push("/my-account");
      }

      toggleLoginModal();
    };

    onSSR(async () => {
      await search({ id: "2PHdWS1Ud0QPEfXjvjqwB6" });
      await Promise.all([
        loadUser(),
        loadCart(),
        loadWishlist(),
        searchCategories(),
      ]);
    });

    const closeSearch = () => {
      if (!isSearchOpen.value) return;

      term.value = "";
      isSearchOpen.value = false;
    };

    const handleSearch = debounce(async (paramValue) => {
      if (!paramValue.target) {
        term.value = paramValue;
      } else {
        term.value = paramValue.target.value;
      }
      const searchSuggestions = await loadSearchSuggestions({
        term: term.value,
      });
      result.value = {
        products: searchSuggestions.value.products,
        categories: searchSuggestions.value.categories?.map((element) =>
          categoryGetters.getTree(element)
        ),
      };
    }, 1000);

    const isMobile = computed(() => mapMobileObserver().isMobile.get());

    const closeOrFocusSearchBar = () => {
      if (isMobile.value) {
        return closeSearch();
      } else {
        term.value = "";
        return searchBarRef.value.$el.children[0].focus();
      }
    };

    watch(
      () => term.value,
      (newVal, oldVal) => {
        const shouldSearchBeOpened =
          !isMobile.value &&
          term.value.length > 0 &&
          ((!oldVal && newVal) ||
            (newVal.length !== oldVal.length && isSearchOpen.value === false));
        if (shouldSearchBeOpened) {
          isSearchOpen.value = true;
        }
      }
    );

    const removeSearchResults = () => {
      result.value = null;
    };

    onBeforeUnmount(() => {
      unMapMobileObserver();
    });

    return {
      content,
      accountIcon,
      cartTotalItems,
      handleAccountClick,
      toggleCartSidebar,
      toggleWishlistSidebar,
      setTermForUrl,
      term,
      isSearchOpen,
      closeSearch,
      handleSearch,
      result,
      closeOrFocusSearchBar,
      searchBarRef,
      isMobile,
      removeSearchResults,
      categories,
      navigationCategories,
      getCatLink,
      wishlistItemTotals,
      isMobileMenuOpen,
      loginText,
    };
  },
};
</script>

<style lang="scss" scoped>
.sf-header {
  --header-padding: var(--spacer-sm);
  @include for-desktop {
    --header-padding: 0;
  }
  &__logo-image {
    height: 100%;
  }
}
.header-on-top {
  z-index: 2;
}
.nav-item {
  --header-navigation-item-margin: 0 var(--spacer-base);
  .sf-header-navigation-item__item--mobile {
    display: none;
  }
}
svg:not(:root).svg-inline--fa {
  overflow: visible;
}
.svg-inline--fa.fa-w-19 {
  width: 1.5em;
  color: white;
}
.icon-text {
  padding-left: 8px;
  color: white;
  font-family: Agenda, sans-serif;
  text-align: center;
}
.svg-inline--fa.fa-w-19 {
  width: 1.5em;
  color: white;
}
::v-deep .sf-header__action {
  margin: 0px;
  @media (max-width: 767px) {
    margin-right: 20px;
  }
}
::v-deep .sf-header__icons {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr;
  justify-items: start;
}
::v-deep .sf-header__wrapper {
  background-color: #e4002b;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
}
::v-deep .sf-header__header {
  padding: 10px 0px;
  @media (max-width: 767px) {
    display: block;
  }
}

::v-deep .sf-header__actions {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  // padding: 10px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 479px) {
    display: inline;
  }
}
.store-dropdown-info {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
}
::v-deep .sf-header__search {
  grid-column-start: 1;
  margin-left: 20px;
  width: 400px;
  //--search-bar-display: block;
  height: 40px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
    width: 224px;
    margin-top: 0px;
     margin-left: 0px;
  }
}
::v-deep .sf-search-bar__input {
  border-radius: 50px;
  border: none;
  background: white;
  padding: 20px;
   @media (max-width: 767px) {
   max-width: 244px;
   display: inline-block;
  }
}
::v-deep .sf-header-navigation-item__item {
  display: block;
}
::v-deep .sf-header__navigation {
  margin-left: 0px;
}

::v-deep .sf-header-navigation-item__link {
  font-family: Agenda, sans-serif;
  padding-left: 0px;
  padding-right: 0px;
  margin: 0px;
  color: black;
  font-size: 1em;
  font-weight: 600;
}

::v-deep .sf-header-navigation-item__link:hover {
  border-bottom: none;
}
.sf-icon {
  --icon-color: #e4002b;
  margin-right: 9px;
}
.for-the-list {
  list-style: none;
  display: flex;
  align-items: flex-end;
  max-width: calc(1300px + 2em);
  margin: 0 auto;
  font-family: Agenda, sans-serif;
  padding: 2px;
}
.for-the-link:hover {
  text-decoration: none;
  border-bottom: 2px solid #e4002b;
}
.for-the-items {
  margin: 0 1em;
}
.for-the-link {
  color: #000;
  display: flex;
  align-items: center;
  padding: 1.25em 0;
  border-bottom: 2px solid transparent;
}

.svg-inline--fa.fa-w-16[data-v-61d08a43] {
  width: 1.5em;
  color: black;
}
.svg-inline--fa.fa-w-18[data-v-61d08a43] {
  font-size: 1.6em;
  margin-right: 0.2em;
  width: 1.125em;
  color: black;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
  position: relative;
  top: -7px;
  padding-right: 5px;
}

.header-account {
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin-right: 20px;
}
.store-hours {
  font-size: 12px;
  text-align: left;
  @media (max-width: 479px) {
    display: inline-block;
  }
}
#for-dropdown {
  width: 0.75em;
  position: relative;
  top: -7px;
}
.store-dropdown--button {
  display: flex;
  color: white;
  font-weight: 600;
  padding-right: 50px;
  @media (max-width: 768px) {
    padding-right: 10px;
  }
  @media (max-width: 479px) {
    padding-left: 80px;
    padding-right: 0px;
    margin-bottom: 10px;
  } 
  }
.for-the-box {
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  background: #fff;
  font-size: 1.15em;
  font-weight: 600;
  @media (max-width: 479px) {
    display: none;
  }
}
#store-branding {
  float: left;
  width: 45px;
  height: 40.909090909px;
  margin-right: 15px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  text-indent: -99999px;
  @media (max-width: 479px) {
    margin-left: 15px;
    width: 35px;
  }
}

// ::v-deep .sf-header__search {
//     --search-bar-display: block;
// }

.cart-badge {
  position: absolute;
  bottom: 40%;
  left: 40%;
}
</style>
