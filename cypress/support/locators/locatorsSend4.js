const locators = {

    LOGOS_SEND4: {
        LOGO: '[id=send4-logo]',
    },

    HOME_PAGE: {
        BTN_START: '[id=introduction__start]',
        TOAST_SUCESS: '.modern-toast__item',
    },

    SELECT_SOURCE: {
        OPTION_STORE: '[id=select-source__store]',
        OPTION_ECOMMERCE: '[id=select-source__ecommerce]',
    },

    ORDER: {
        INPUT_ORDER_NUMBER: '[id=order-number]',
        INPUT_EMAIL: '[id=order-confirmation]',
        BTN_CONTINUE: '[id=order__continue]'
    },

    PRODUCTS_ECOMMERCE: {
        CHECKBOX_PRODUCT_ECOMMERCE: '[id=product-ecommerce]',
        CHECKBOX_PRODUCT_ONE: '.product-checkbox',
        SELECT_DEFAULT: '.select-default-field',
        TEXTAREA_DEFAULT: '.textarea-default-field ',
        BTN_CONTINUE: '[id=products-ecommerce__continue]'
    },

    SHIPPING: {
        BTN_CHANGE_ADDRESS: '.flex-between-center',
        BTN_MAIL_AGENCY: '.couriers-button',
        BTN_CONTINUE: '[id=shipping__continue]',
    },

    SHIPPING_MODAL_CHANGE_ADDRESS: {
        INPUT_CEP: '[id=address-zip_code]',
        INPUT_ADDRESS: '[id=address-address]',
        INPUT_NUMBER: '[id=address-number]',
        INPUT_NEIGHBORHOOD: '[id=address-neighborhood]',
        INPUT_CITY: '[id=address-city]',
        INPUT_UF: '[id=address-state]',
        INPUT_COMPLEMENT: '[id=address-complement]',
        BTN_SAVE: '[id=shipping-address__save]',
        BTN_CANCEL: '[id=shipping-address__cancel]',
    },

    RESUME: {
        CHECKBOX_POLICY: '[id=policy-checkbox]',
        BTN_CONTINUE: '[id=resume__continue]',
        BTN_BACK: '[id=resume__back]'
    },

    FINISH: {
        BTN_STAR0: '[id=rating-star-0]',
        BTN_STAR1: '[id=rating-star-1]',
        BTN_STAR2: '[id=rating-star-2]',
        BTN_STAR3: '[id=rating-star-3]',
        BTN_STAR4: '[id=rating-star-4]',
        BTN_STAR5: '[id=rating-star-5]',
        BTN_STAR6: '[id=rating-star-6]',
        BTN_STAR7: '[id=rating-star-7]',
        BTN_STAR8: '[id=rating-star-8]',
        BTN_STAR9: '[id=rating-star-9]',
        BTN_STAR10: '[id=rating-star-10]',
        TEXTAREA_COMMENT: '[id=finish-comment]',
        BTN_SEND: '[id=finish__send-rating]',
    }

}

export default locators;