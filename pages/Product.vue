<template>
  <div id="product">
    <SfBreadcrumbs
      class="breadcrumbs desktop-only"
      :breadcrumbs="breadcrumbs"
    />
    <div class="product">
      <LazyHydrate when-idle>
        <SfGallery :images="productGallery" class="product__gallery"   enableZoom/>
      </LazyHydrate>

      <div class="product__info">
        <div class="product__header">
          <a href="/en/brands/bennett" style="display: inline-flex">
            <div
              v-for="(props, index) in properties"
              :key="index"
              class="product-brand"
            >
              <div v-if="index === 'Brand'" style="padding-right: 10px">
                {{ props.toString() }}
              </div>
            </div>
            <span style="padding-top: 3px"> Shop All > </span></a
          >
          <span class="new" v-for="(props, index) in properties" :key="index">
            <div
              v-if="index === 'Brand'"
              style="
                margin-top: 10px;
                font-weight: 900;
                font-size: 25px;
                float: left;
              "
            >
              <div>{{ props.toString() }}</div>
              <SfHeading
                :title="productGetters.getName(product)"
                :level="3"
                class="sf-heading--left"
              />
            </div>
          </span>

          <SfButton
            class="sf-button--pure sf-header__action on_wishList"
            v-if="isAuthenticated && isPurchasable"
            @click="
              !isInWishlist({ product })
                ? addItemToWishlist({ product })
                : removeItemFromWishlist({ product })
            "
          >
            <SfIcon
              class="sf-header__icon"
              :icon="currentWishlistIcon"
              size="1.25rem"
              data-test="sf-wishlist-icon"
            />
          </SfButton>
          <SfIcon
            icon="drag"
            size="xxl"
            color="var(--c-text-disabled)"
            class="product__drag-icon smartphone-only"
          />
        </div>
        <div class="product__price-and-rating">
          <!-- <SfPrice
            :regular="$n(productGetters.getPrice(product).regular, 'currency')"
            :special="
              productGetters.getPrice(product).special &&
              $n(productGetters.getPrice(product).special, 'currency')
            "
          /> -->

          <div class="product__rating">
            <SfRating :score="averageRating" :max="5" />
            <a v-if="!!totalReviews" href="#" class="product__count">
              ({{ totalReviews }})
            </a>

            <SfButton data-cy="product-btn_read-all" class="sf-button--text">{{
              $t("Write a review")
            }}</SfButton>
          </div>
        </div>
        <ul style="list-style: none; padding-left: 0px; font-size: 14px">
          <li style="padding-bottom: 5px">
            #Item:
            <span v-for="(props, index) in properties" :key="index">
              <span v-if="index === 'DISPLAY_ITEM'">
                {{ props.toString() }}
              </span>
            </span>
          </li>
          <li>
            #Model:
            <span v-for="(props, index) in properties" :key="index">
              <span v-if="index === 'Model'">
                {{ props.toString() }}
              </span>
            </span>
          </li>
        </ul>
        <SfPrice
          :regular="$n(productGetters.getPrice(product).regular, 'currency')"
          :special="
            productGetters.getPrice(product).special &&
            $n(productGetters.getPrice(product).special, 'currency')
          "
        />
        <div>
          <p class="environmental-handling-fee"></p>

          <div class="aeroplan-miles">
            <span class="link_txt"> Earn 5 Aeroplan Points </span>
          </div>
        </div>
        <div class="boh-info">
          <div class="boh-icon">
            <div class="img-responsive icon storeicon"></div>
            <h3 class="boh-msg">
              <span
                class="available-stock"
                style="padding-left: 10px; font-weight: 900"
              >
                2 in stock at your store</span
              >

              <span
                class="info-icon popupover"
                data-toggle="popover"
                data-trigger="hover"
                data-content="<p class='store-disclaimer'>We always try our best to show you the most accurate in-store inventory. However, someone else may already have this item in their cart.</p><p class='pricing-offer'>Pricing and offers may vary by location</p>"
                data-original-title=""
                data-html="true"
                title=""
                data-placement="top"
              ></span>
            </h3>
            <p style="margin-top: 0px">
              <a
                href="#"
                class="link check-nearby"
                id="checkNearByStore"
                style="padding-left: 60px"
                >Check nearby stores</a
              >
            </p>
          </div>
        </div>

        <SfAddToCart
          data-cy="product-cart_add"
          :stock="stock"
          v-model="qty"
          :disabled="loading || !isPurchasable"
          :canAddToCart="stock > 0"
          class="product__add-to-cart"
          @click="addItem({ product, quantity: parseInt(qty) })"
        />
        <div class="orderVolumeMsg">
          <p style="margin: 12.5px 0">
            During this time of increased demand, a $20 (pre-tax) order minimum
            is required for all online purchases.
          </p>
        </div>
        <div class="icons">
          <div class="img-responsive icon storeicon"></div>
          <div class="information-container">
            <h4
              class="icon-title"
              style="padding-left: 60px; font-weight: 900; font-size: 26px"
            >
              FREE In-Store Pick-up*
            </h4>
            <p class="icon-text" style="padding-left: 60px">
              <strong>Buy online, pick-up at</strong>

              <strong>Home Hardware - St. Jacobs</strong>
            </p>

            <p
              class="get-it-by"
              style="margin-top: 0px; margin-bottom: 0px; padding-left: 60px"
            >
              Estimated Arrival: 2-15 days
            </p>
            <p
              class="get-it-by"
              style="margin-top: 0px; margin-bottom: 0px; padding-left: 60px"
            >
              *on all eligible orders
            </p>
          </div>
        </div>

        <div class="icons ship-to-home" id="shipToHomeContainer">
          <div class="img-responsive icon deliveryicon"></div>
          <div class="information-container">
            <h4
              class="icon-title"
              style="padding-left: 70px; font-weight: 900; font-size: 26px"
            >
              Ship to Home
            </h4>
            <p class="icon-text">
              <span class="available" style="padding-left: 70px">
                Available
              </span>

              for shipping to <strong>N0B2N0</strong>
            </p>

            <p class="get-it-by" style="padding-left: 70px">
              Estimated Arrival: 8-10 business days
            </p>

            <a
              class="change-shipping-location"
              style="padding-left: 70px"
              data-mz-action="showEstimateShippingModal"
              href="javascript:void(0)"
              ><b>Estimate Shipping Cost</b>
            </a>

            <div id="shipping-popup-container" class="ship-container"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="prod-description-container">
      <h3 class="section-title">
        <span class="mainTitle" style="font-size: 34px">More Like This</span>
      </h3>
      <LazyHydrate when-visible>
        <RelatedProducts
          :products="relatedProducts"
          :loading="relatedLoading"
        />
      </LazyHydrate>
    </div>
    <div class="prod-description-container">
      <h3 class="section-title">
        <span class="mainTitle" style="font-size: 34px"> Product Overview</span>
      </h3>
       {{  description.replace(/<\/?[^>]+>/gi,'') }} 
    </div>

    <div class="prod-description-container">
      <h3 class="section-title">
        <span class="mainTitle" style="font-size: 34px"> Specifications</span>
      </h3>

      <div
        class="productdetails-attributes description-container"
        id="mobileSpecification"
      >
        <table
          width="100%"
          style="
            border-collapse: collapse;
            border-spacing: 0;
            background-color: transparent;
          "
        >
          <tbody style="display: grid; grid-template-columns: 1fr 1fr">
            <tr
              style="
                margin-bottom: 0px;
                border: 1px solid #c5c5c5;
                display: flex;
              "
              width="50%"
              v-for="(props, index) in properties"
              :key="index"
            >
              <td
                width="50%"
                style="
                  font-weight: 600;
                  margin: 0px;
                  background: #e6e6e6;
                  padding: 13px;
                "
              >
                {{ index }}
              </td>
              <td
                width="50%"
                style="font-weight: 600; margin: 0px; padding: 10px"
              >
                {{ props.toString() }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- <LazyHydrate when-visible>
      <InstagramFeed />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <MobileStoreBanner />
    </LazyHydrate> -->
  </div>
</template>
<script>
import {
  SfProperty,
  SfHeading,
  SfPrice,
  SfRating,
  SfSelect,
  SfAddToCart,
  SfTabs,
  SfGallery,
  SfIcon,
  SfImage,
  SfBanner,
  SfAlert,
  SfSticky,
  SfReview,
  SfBreadcrumbs,
  SfButton,
  SfColor,
} from "@storefront-ui/vue";
import InstagramFeed from "~/components/InstagramFeed.vue";
import RelatedProducts from "~/components/RelatedProducts.vue";
import { ref, computed, useRoute, useRouter } from "@nuxtjs/composition-api";
import {
  useProduct,
  useWishlist,
  useCart,
  productGetters,
  useReview,
  reviewGetters,
  useUser,
} from "@vue-storefront/kibocommerce";
import { onSSR } from "@vue-storefront/core";
import MobileStoreBanner from "~/components/MobileStoreBanner.vue";
import LazyHydrate from "vue-lazy-hydration";
export default {
  name: "Product",
  transition: "fade",
  props: {
    wishlistIcon: {
      type: [String, Array, Boolean],

      default: "heart",
    },

    isOnWishlistIcon: {
      type: [String, Array],

      default: "heart_fill",
    },
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const qty = ref(1);
    const id = route.value?.params?.id;
    const { isAuthenticated } = useUser();
    const {
      load: loadWishlist,
      addItem: addItemToWishlist,
      isInWishlist,
      removeItem: removeItemFromWishlist,
    } = useWishlist();
    const { products, search } = useProduct("products");
    const {
      products: relatedProducts,
      search: searchRelatedProducts,
      loading: relatedLoading,
    } = useProduct("relatedProducts");
    const { addItem, loading } = useCart();
    const { reviews: productReviews, search: searchReviews } =
      useReview("productReviews");

    const product = computed(() => products.value);

    const currentWishlistIcon = computed(() => {
      return isInWishlist({ product: product.value })
        ? props.isOnWishlistIcon
        : props.wishlistIcon;
    });

    const options = computed(() => productGetters.getOptions(product.value));
    const configuration = computed(() =>
      productGetters.getConfiguration(product.value)
    );
    const categories = computed(() =>
      productGetters.getCategoryIds(product.value)
    );
    const reviews = computed(() =>
      reviewGetters.getItems(productReviews.value)
    );
    const description = computed(() =>
      productGetters.getDescription(product.value)
    );
    
    //const des = description.replace(/<\/?[^>]+>/gi,'')
    //console.log(des);
    const properties = computed(() =>
      productGetters.getAttributes(product.value)
    );
    const breadcrumbs = computed(() =>
      productGetters.getBreadcrumbs(product.value)
    );

    const productGallery = computed(() =>
      productGetters.getGallery(product.value).map((img) => ({
        mobile: { url: img.small },
        desktop: { url: img.normal },
        big: { url: img.big },
        alt: productGetters.getName(product.value),
      }))
    );

    onSSR(async () => {
      await Promise.all([
        loadWishlist(),
        search({ id, attributes: route.value.query }),
        searchRelatedProducts({
          catId: [categories.value[0]],
          limit: 8,
          id,
        }),
        searchReviews({ productId: id }),
      ]);
    });

    const updateFilter = (filter) => {
      router.push({
        path: route.value.path,
        query: {
          ...configuration.value,
          ...filter,
        },
      });
    };

    return {
      updateFilter,
      configuration,
      isInWishlist,
      product,
      reviews,
      reviewGetters,
      averageRating: computed(() =>
        productGetters.getAverageRating(product.value)
      ),
      totalReviews: computed(() =>
        productGetters.getTotalReviews(product.value)
      ),
      relatedProducts: computed(() =>
        productGetters.getFiltered(relatedProducts.value, { master: true })
      ),
      relatedLoading,
      options,
      qty,
      addItem,
      loading,
      productGetters,
      productGallery,
      description,
      properties,
      breadcrumbs,
      isAuthenticated,
      isPurchasable: computed(() =>
        productGetters.getPurchasable(product.value)
      ),
      stock: computed(() => productGetters.getInventory(product.value)),
      addItemToWishlist,
      removeItemFromWishlist,
      currentWishlistIcon,
    };
  },
  components: {
    SfAlert,
    SfColor,
    SfProperty,
    SfHeading,
    SfPrice,
    SfRating,
    SfSelect,
    SfAddToCart,
    SfTabs,
    SfGallery,
    SfIcon,
    SfImage,
    SfBanner,
    SfSticky,
    SfReview,
    SfBreadcrumbs,
    SfButton,
    InstagramFeed,
    RelatedProducts,
    MobileStoreBanner,
    LazyHydrate,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "//fonts.googleapis.com/css?family=Work+Sans:400,500,700";

#product {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1272px;
    margin: 0 auto;
  }
}
.product {
  @include for-desktop {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-height: 950px;
  }
  &__info {
    margin: var(--spacer-sm) auto;
    @include for-desktop {
      max-width: 32.625rem;
      margin: 0 0 0 7.5rem;
    }
  }
  &__header {
    --heading-title-color: var(--c-link);
    --heading-title-font-weight: var(--font-weight--bold);
    --heading-padding: 0;
    margin: 0 var(--spacer-sm);
    display: flex;
    justify-content: space-between;
    @include for-desktop {
      --heading-title-font-weight: var(--font-weight--semibold);
      margin: 0 auto;
    }
  }
  &__drag-icon {
    animation: moveicon 1s ease-in-out infinite;
  }
  &__price-and-rating {
    margin: 0 var(--spacer-sm) var(--spacer-base);
    align-items: center;
    @include for-desktop {
      display: flex;
      justify-content: space-between;
      margin: var(--spacer-sm) 0 var(--spacer-lg) 0;
    }
  }
  &__rating {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: var(--spacer-xs) 0 var(--spacer-xs);
  }
  &__count {
    @include font(
      --count-font,
      var(--font-weight--normal),
      var(--font-size--sm),
      1.4,
      var(--font-family--secondary)
    );
    color: var(--c-text);
    text-decoration: none;
    margin: 0 0 0 var(--spacer-xs);
  }
  &__description {
    @include font(
      --product-description-font,
      var(--font-weight--light),
      var(--font-size--base),
      1.6,
      var(--font-family--primary)
    );
  }
  &__select-size {
    margin: 0 var(--spacer-sm);
    @include for-desktop {
      margin: 0;
    }
  }
  &__colors {
    @include font(
      --product-color-font,
      var(--font-weight--normal),
      var(--font-size--lg),
      1.6,
      var(--font-family--secondary)
    );
    display: flex;
    align-items: center;
    margin-top: var(--spacer-xl);
  }
  &__color-label {
    margin: 0 var(--spacer-lg) 0 0;
  }
  &__color {
    margin: 0 var(--spacer-2xs);
  }
  &__add-to-cart {
    margin: var(--spacer-base) var(--spacer-sm) 0;
    @include for-desktop {
      margin-top: var(--spacer-2xl);
    }
  }
  &__guide,
  &__compare,
  &__save {
    display: block;
    margin: var(--spacer-xl) 0 var(--spacer-base) auto;
  }
  &__compare {
    margin-top: 0;
  }
  &__tabs {
    margin: var(--spacer-lg) auto var(--spacer-2xl);
    --tabs-title-font-size: var(--font-size--lg);
    @include for-desktop {
      margin-top: var(--spacer-2xl);
    }
  }
  &__property {
    margin: var(--spacer-base) 0;
    &__button {
      --button-font-size: var(--font-size--base);
    }
  }
  &__review {
    padding-bottom: 24px;
    border-bottom: var(--c-light) solid 1px;
    margin-bottom: var(--spacer-base);
  }
  &__additional-info {
    color: var(--c-link);
    @include font(
      --additional-info-font,
      var(--font-weight--light),
      var(--font-size--sm),
      1.6,
      var(--font-family--primary)
    );
    &__title {
      font-weight: var(--font-weight--normal);
      font-size: var(--font-size--base);
      margin: 0 0 var(--spacer-sm);
      &:not(:first-child) {
        margin-top: 3.5rem;
      }
    }
    &__paragraph {
      margin: 0;
    }
  }
  &__gallery {
    flex: 1;
    ::v-deep .sf-image {
      object-fit: contain;
      height: 80vh;
    }
    @include for-mobile {
      ::v-deep .sf-image {
        object-fit: contain;
        height: 50vh;
      }
    }
  }
}
.breadcrumbs {
  margin: var(--spacer-base) auto var(--spacer-lg);
}
@keyframes moveicon {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 30%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
.product-brand {
  font-family: "Agenda_bold", sans-serif;
  font-style: normal;
  font-weight: 900;
  text-transform: uppercase;
  margin-top: 0;
  color: #e4002b;
}
.icons {
  border-bottom: 1px solid #c7c7c7;
  padding: 15px 0;
}
::v-deep .sf-section {
  margin-bottom: 0px;
}
.product__header {
  display: grid;
}
.product__info {
  font-family: "Agenda_bold", sans-serif;
}
.sf-button--text {
  text-decoration: none;
  color: #4f4f4f;
}
.sf-price__regular {
  --price-regular-font-size: 34px;
  --price-regular-font-family: "Agenda_bold", sans-serif;
  --price-regular-font-weight: 900;
}
.sf-rating {
  margin-right: 12px;
}
// .aeroplan-miles {
//   overflow: hidden;
//   border-bottom: 1px solid #c7c7c7;
//   margin-bottom: 15px;
// }
.aeroplan-miles {
  padding-left: 50px;
  min-height: 23px;
  margin: 25px 0 0;
  font-size: 1.4rem;
  background-image: url(https://homehardware.sirv.com/resources/images/footer-logosR2.png);
  background-repeat: no-repeat;
  background-position: 0 center;
  background-size: 130px 177px;
  float: left;
  width: 350px;
  margin-left: -5px;
  overflow: hidden;
  border-bottom: 1px solid #c7c7c7;
  margin-bottom: 15px;
}
.storeicon {
  width: 58px;
  background-image: url("https://homehardware-uat.sirv.com/resources/images/Web-Icons-on-one-file.png");
  background-size: 150px;
  background-position: 61px -418px;
}
.deliveryicon {
  width: 67px;
  background-image: url(https://homehardware.sirv.com/resources/images/Web-Icons-on-one-file.png);
  background-size: 159px;
  background-position: -5px -445px;
}
.link_txt {
  display: block;
  width: 360px;
  margin-left: 78px;
  font-size: 13px;
}
.img-responsive {
  display: block;
  max-width: 100%;
}
.icon {
  width: 63px;
  height: 41px;
  float: left;
}
.boh-icon {
  //padding-left: 70px;
  position: relative;
  margin-bottom: 15px;
}
.section-title {
  padding: 10px 0px 0px 10px;
  margin-top: 6px;
  text-transform: capitalize;
  border-bottom: 1px solid #c5c5c5;
}
.boh-info {
  border-bottom: 1px solid #c7c7c7;
  margin-bottom: 15px;
  float: left;
  width: 100%;
}
::v-deep .sf-section__content {
  margin: 0px;
}
::v-deep .sf-arrow {
  --button-background: #e4002b;
  --icon-color: white;
  border-radius: 20px;
}
#checkNearByStore {
  color: #e4002b;
  font-weight: 900;
}
#checkNearByStore:hover {
  text-decoration: underline;
  color: #e4002b;
}
.sf-add-to-cart {
  --button-background: #e4002b;
  --button-font-family: Agenda, sans-serif;

  --button-border-radius: 22px;
  width: 100%;
}
.orderVolumeMsg {
  border-bottom: 1px solid #c7c7c7;
  padding-bottom: 20px;
  text-align: justify;
  font-family: "Agenda", sans-serif;
  font-style: normal;
  font-weight: 400;
}

#mobileSpecification {
  width: 97%;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  background-color: transparent;
}

.description-container {
  padding: 0 15px;
}
.prod-info-new-layout
  #main-content-container
  #specification
  #mobileSpecification
  .attributes {
  width: 50%;
  margin-bottom: 0px;
  border: 1px solid #c5c5c5;
}
// .attributes .attribute-title {
//   margin: 0px;
//   background: #e6e6e6;
//   padding: 13px;
//   font-family: "Agenda_bold", sans-serif;
//   display: block;
//   float: left;
// }
.product__gallery {
  display: grid;
  grid-template-rows: 30% 30%;
  grid-row: revert;
}
::v-deep .sf-gallery__stage {
  grid-row: 1;
  height: 300px;
}
::v-deep .sf-gallery__thumbs {
  display: inline-block;
}
::v-deep .sf-gallery__item {
  display: inline-block;
}
.prod-info-new-layout
  #main-content-container
  #specification
  #mobileSpecification
  .attributes
  .attribute-value {
  margin: 0px;
  padding: 10px;
  display: block;
  float: left;
}
</style>
