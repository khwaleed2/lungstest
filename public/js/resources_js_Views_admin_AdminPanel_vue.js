(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Views_admin_AdminPanel_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Views/admin/AdminPanel.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Views/admin/AdminPanel.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_admin_Disclaimer_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/admin/Disclaimer.vue */ "./resources/js/components/admin/Disclaimer.vue");
/* harmony import */ var _components_admin_MetaData_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/admin/MetaData.vue */ "./resources/js/components/admin/MetaData.vue");
/* harmony import */ var _components_admin_Settings_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/admin/Settings.vue */ "./resources/js/components/admin/Settings.vue");
/* harmony import */ var _components_admin_layout_Navbar_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/admin/layout/Navbar.vue */ "./resources/js/components/admin/layout/Navbar.vue");
/* harmony import */ var _components_admin_layout_SideNav_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/admin/layout/SideNav.vue */ "./resources/js/components/admin/layout/SideNav.vue");
/* harmony import */ var _components_admin_SocialShare_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/admin/SocialShare.vue */ "./resources/js/components/admin/SocialShare.vue");
/* harmony import */ var _components_admin_AdminSettings_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/admin/AdminSettings.vue */ "./resources/js/components/admin/AdminSettings.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "admin-panel",
  components: {
    Navbar: _components_admin_layout_Navbar_vue__WEBPACK_IMPORTED_MODULE_3__.default,
    SideNav: _components_admin_layout_SideNav_vue__WEBPACK_IMPORTED_MODULE_4__.default,
    Disclaimer: _components_admin_Disclaimer_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    MetaData: _components_admin_MetaData_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    Settings: _components_admin_Settings_vue__WEBPACK_IMPORTED_MODULE_2__.default,
    SocialShare: _components_admin_SocialShare_vue__WEBPACK_IMPORTED_MODULE_5__.default,
    AdminSettings: _components_admin_AdminSettings_vue__WEBPACK_IMPORTED_MODULE_6__.default
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/AdminSettings.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/AdminSettings.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "admin-settings",
  data: function data() {
    return {
      pageName: "adminSettings",
      activePage: localStorage.getItem("cPage") || "disclaimer",
      loading1: false,
      loading2: false,
      email: "",
      ePassword: "",
      pPassword: "",
      newPassword: "",
      conPassword: ""
    };
  },
  methods: {
    updateEmail: function updateEmail() {
      var _this = this;

      this.loading1 = true;
      var disData = new FormData();
      disData.append("email", this.email);
      disData.append("password", this.ePassword);
      axios({
        url: "/update/email",
        data: disData,
        method: "POST"
      }).then(function (res) {
        _this.loading1 = false;
        _this.email = "";
        _this.ePassword = "";

        _this.$notify({
          type: "success",
          title: res.data.message,
          duration: 6000
        });
      })["catch"](function (err) {
        _this.ePassword = "";
        _this.loading1 = false;

        _this.$notify({
          type: "error",
          title: err.response.data.message,
          duration: 6000
        });
      });
    },
    updatePassword: function updatePassword() {
      var _this2 = this;

      this.loading2 = true;
      var disData = new FormData();
      disData.append("password", this.pPassword);
      disData.append("new_password", this.newPassword);
      disData.append("new_password_confirmation", this.conPassword);
      axios({
        url: "/update/password",
        data: disData,
        method: "POST"
      }).then(function (res) {
        _this2.loading2 = false;
        _this2.pPassword = "";
        _this2.newPassword = "";
        _this2.conPassword = "";

        _this2.$notify({
          type: "success",
          title: res.data.message,
          duration: 6000
        });
      })["catch"](function (err) {
        _this2.loading2 = false;
        _this2.pPassword = "";
        _this2.newPassword = "";
        _this2.conPassword = "";

        _this2.$notify({
          type: "error",
          title: err.response.data.message,
          duration: 6000
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Disclaimer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Disclaimer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "disclaimer",
  data: function data() {
    return {
      pageName: "disclaimer",
      activePage: localStorage.getItem("cPage") || "disclaimer",
      cardText: "",
      disclaimersInputs: {
        icon: "",
        text: "",
        preview: ""
      },
      disclaimers: [],
      loading1: false,
      loading2: false
    };
  },
  mounted: function mounted() {
    $('[data-toggle="tooltip"]').tooltip();
  },
  created: function created() {
    this.getDisclaimers();
  },
  methods: {
    addIcon: function addIcon(e) {
      var file = e.target.files[0];
      this.disclaimersInputs.preview = URL.createObjectURL(file);
      this.disclaimersInputs.icon = file;
    },
    getDisclaimers: function getDisclaimers() {
      var _this = this;

      axios({
        url: "disclaimers",
        method: "GET"
      }).then(function (res) {
        _this.disclaimers = res.data.disclaimers;
        _this.cardText = res.data.DisclaimerCardText.text;
      })["catch"](function (err) {
        _this.$notify({
          type: "error",
          title: err.response.data.message,
          duration: 6000
        });
      });
    },
    saveDisCardText: function saveDisCardText() {
      var _this2 = this;

      this.loading1 = true;
      var disData = new FormData();
      disData.append("text", this.cardText);
      axios({
        url: "disCardText-save",
        data: disData,
        method: "POST"
      }).then(function (res) {
        _this2.loading1 = false;

        _this2.$notify({
          type: "success",
          title: res.data.success,
          duration: 6000
        });
      })["catch"](function (err) {
        _this2.loading1 = false;

        _this2.$notify({
          type: "error",
          title: err.response.data.message,
          duration: 6000
        });
      });
    },
    saveDisclaimers: function saveDisclaimers() {
      var _this3 = this;

      this.loading2 = true;
      var disData = new FormData();
      disData.append("file", this.disclaimersInputs.icon);
      disData.append("text", this.disclaimersInputs.text);
      axios({
        url: "dis-save",
        data: disData,
        method: "POST"
      }).then(function (res) {
        _this3.disclaimersInputs = {
          icon: "",
          text: "",
          preview: ""
        };
        _this3.loading2 = false;

        _this3.getDisclaimers();

        _this3.$notify({
          type: "success",
          title: res.data.success,
          duration: 6000
        });
      })["catch"](function (err) {
        _this3.loading2 = false;
        console.log(err);
      });
    },
    deleteDis: function deleteDis(id) {
      var _this4 = this;

      axios({
        url: "dis-delete/".concat(id),
        method: "DELETE"
      }).then(function (res) {
        _this4.getDisclaimers();

        _this4.$notify({
          type: "success",
          title: res.data.success,
          duration: 6000
        });
      })["catch"](function (err) {
        _this4.$notify({
          type: "error",
          title: err.response.data.message,
          duration: 6000
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/MetaData.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/MetaData.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "meta-data",
  data: function data() {
    return {
      pageName: "metaData",
      activePage: localStorage.getItem("cPage") || "disclaimer",
      title: "",
      url: "",
      desc: "",
      type: "",
      card: "",
      file: "",
      analy: "",
      imgUrl: "",
      loading1: false,
      loading2: false
    };
  },
  mounted: function mounted() {
    this.getMetaData();
  },
  methods: {
    addImg: function addImg(e) {
      var file = e.target.files[0];
      this.imgUrl = URL.createObjectURL(file);
      this.file = file;
    },
    getMetaData: function getMetaData() {
      var _this = this;

      axios({
        url: "get-metaData",
        method: "GET"
      }).then(function (res) {
        _this.title = res.data.metaData.title;
        _this.url = res.data.metaData.url;
        _this.desc = res.data.metaData.description;
        _this.type = res.data.metaData.type;
        _this.card = res.data.metaData.card;
        _this.imgUrl = res.data.metaData.image;
        _this.analy = res.data.metaData.analytics;
      })["catch"](function (err) {
        _this.$notify({
          type: "error",
          title: err.response.data.message,
          duration: 6000
        });
      });
    },
    saveOG: function saveOG() {
      var _this2 = this;

      this.loading1 = true;
      var disData = new FormData();
      disData.append("title", this.title);
      disData.append("url", this.url);
      disData.append("desc", this.desc);
      disData.append("type", this.type);
      disData.append("card", this.card);
      disData.append("file", this.file);
      axios({
        url: "save-og",
        data: disData,
        method: "POST"
      }).then(function (res) {
        _this2.loading1 = false;

        _this2.$notify({
          type: "success",
          title: res.data.success,
          duration: 6000
        });
      })["catch"](function (err) {
        _this2.loading1 = false;

        _this2.$notify({
          type: "error",
          title: err.response.data.message,
          duration: 6000
        });
      });
    },
    saveAnaly: function saveAnaly() {
      var _this3 = this;

      this.loading2 = true;
      var disData = new FormData();
      disData.append("analy", this.analy);
      axios({
        url: "save-analytics",
        data: disData,
        method: "POST"
      }).then(function (res) {
        _this3.loading2 = false;

        _this3.$notify({
          type: "success",
          title: res.data.success,
          duration: 6000
        });
      })["catch"](function (err) {
        _this3.loading2 = false;

        _this3.$notify({
          type: "error",
          title: err.response.data.message,
          duration: 6000
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Settings.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Settings.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "settings",
  data: function data() {
    return {
      pageName: "settings",
      activePage: localStorage.getItem("cPage") || "disclaimer",
      inhale_dura: "",
      hold_dura: "",
      condition: "befor",
      seconds: "",
      result: "",
      critical: "no",
      cardText: "",
      loading1: false,
      loading2: false,
      loading3: false,
      results: []
    };
  },
  mounted: function mounted() {
    this.getResults();
  },
  methods: {
    saveTimes: function saveTimes() {
      var _this = this;

      this.loading1 = true;
      var disData = new FormData();
      disData.append("inhale", this.inhale_dura);
      disData.append("hold", this.hold_dura);
      axios({
        url: "save-times",
        data: disData,
        method: "POST"
      }).then(function (res) {
        _this.loading1 = false;

        _this.$notify({
          type: "success",
          title: res.data.success,
          duration: 6000
        });
      })["catch"](function (err) {
        _this.loading1 = false;

        _this.$notify({
          type: "error",
          title: err.response.data.message,
          duration: 6000
        });
      });
    },
    saveResults: function saveResults() {
      var _this2 = this;

      this.loading2 = true;
      var disData = new FormData();
      disData.append("condition", this.condition);
      disData.append("seconds", this.seconds);
      disData.append("result", this.result);
      disData.append("critical", this.critical);
      axios({
        url: "save-result",
        data: disData,
        method: "POST"
      }).then(function (res) {
        _this2.loading2 = false;
        _this2.seconds = "";
        _this2.result = "";
        _this2.critical = "no";

        _this2.getResults();

        _this2.$notify({
          type: "success",
          title: res.data.success,
          duration: 6000
        });
      })["catch"](function (err) {
        _this2.$notify({
          type: "error",
          title: err.response.data.message,
          duration: 6000
        });

        _this2.loading2 = false;
      });
    },
    getResults: function getResults() {
      var _this3 = this;

      axios({
        url: "results",
        method: "GET"
      }).then(function (res) {
        _this3.results = res.data.result;
        _this3.cardText = res.data.resultData.card_text;
        _this3.inhale_dura = res.data.resultData.inhale_dura;
        _this3.hold_dura = res.data.resultData.hold_dura;
      })["catch"](function (err) {
        _this3.$notify({
          type: "error",
          title: err.response.data.message,
          duration: 6000
        });
      });
    },
    saveCardText: function saveCardText() {
      var _this4 = this;

      this.loading3 = true;
      var disData = new FormData();
      disData.append("card_text", this.cardText);
      axios({
        url: "cardText-save",
        data: disData,
        method: "POST"
      }).then(function (res) {
        _this4.loading3 = false;

        _this4.$notify({
          type: "success",
          title: res.data.success,
          duration: 6000
        });
      })["catch"](function (err) {
        _this4.$notify({
          type: "error",
          title: err.response.data.message,
          duration: 6000
        });

        _this4.loading3 = false;
      });
    },
    deleteResult: function deleteResult(id) {
      var _this5 = this;

      axios({
        url: "del-result/".concat(id),
        method: "DELETE"
      }).then(function (res) {
        _this5.getResults();

        _this5.$notify({
          type: "success",
          title: res.data.success,
          duration: 6000
        });
      })["catch"](function (err) {
        _this5.$notify({
          type: "error",
          title: err.response.data.message,
          duration: 6000
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SocialShare.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SocialShare.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "social-share",
  data: function data() {
    return {
      pageName: "socialShare",
      activePage: localStorage.getItem("cPage") || "disclaimer",
      list: [{
        name: "Facebook",
        bColor: "#3b5998",
        icon: '<i class="fab fa-facebook-f"></i>',
        value: "facebook"
      }, {
        name: "Twitter",
        bColor: "#1da1f2",
        icon: '<i class="fab fa-twitter"></i>',
        value: "twitter"
      }, {
        name: "LinkedIn",
        bColor: "#0077b5",
        icon: '<i class="fab fa-linkedin-in"></i>',
        value: "linkedin"
      }, {
        name: "Messenger",
        bColor: "#0084ff",
        icon: '<i class="fab fa-facebook-messenger"></i>',
        value: "messenger"
      }, {
        name: "WhatsApp",
        bColor: "#128c7e",
        icon: '<i class="fab fa-whatsapp"></i>',
        value: "whatsapp"
      }, {
        name: "Skype",
        bColor: "#00aff0",
        icon: '<i class="fab fa-skype"></i>',
        value: "skype"
      }, {
        name: "Tumblr",
        bColor: "#35465c",
        icon: '<i class="fab fa-tumblr"></i>',
        value: "tumblr"
      }, {
        name: "Pinterest",
        bColor: "#e60023",
        icon: '<i class="fab fa-pinterest"></i>',
        value: "pinterest"
      }, {
        name: "Reddit",
        bColor: "#ff4500",
        icon: '<i class="fab fa-reddit-alien"></i>',
        value: "reddit"
      }, {
        name: "Telegram",
        bColor: "#0088cc",
        icon: '<i class="fab fa-telegram-plane"></i>',
        value: "telegram"
      }],
      selected: []
    };
  },
  created: function created() {
    this.getList();
  },
  methods: {
    getList: function getList() {
      var _this = this;

      axios({
        url: "/socialList",
        method: "GET"
      }).then(function (res) {
        var list = [];
        res.data.list.forEach(function (e) {
          list.push(e.name);
        });
        _this.selected = list;
      })["catch"](function (err) {
        _this.$notify({
          type: "error",
          title: err.response.data.message,
          duration: 6000
        });
      });
    },
    addRemove: function addRemove(name, icon, bColor) {
      var _this2 = this;

      var disData = new FormData();
      disData.append("name", name);
      disData.append("icon", icon);
      disData.append("bColor", bColor);
      axios({
        url: "/add-remove-social",
        data: disData,
        method: "POST"
      }).then(function (res) {
        _this2.getList();

        _this2.$notify({
          type: "success",
          title: res.data.success,
          duration: 6000
        });
      })["catch"](function (err) {
        _this2.$notify({
          type: "error",
          title: err.response.data.message,
          duration: 6000
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/layout/Navbar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/layout/Navbar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "navbar",
  data: function data() {
    return {
      appName: process.env.APP_NAME || "LungsTest"
    };
  },
  methods: {
    logout: function logout() {
      var _this = this;

      this.$store.dispatch("logout").then(function () {
        _this.$router.push({
          name: "login"
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/layout/SideNav.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/layout/SideNav.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "side-nav",
  data: function data() {
    return {
      activePage: localStorage.getItem("cPage") || "disclaimer",
      navList: [{
        slug: "disclaimer",
        name: "Disclaimer"
      }, {
        slug: "settings",
        name: "App Settings"
      }, {
        slug: "metaData",
        name: "Meta Data"
      }, {
        slug: "socialShare",
        name: "Social Share"
      }, {
        slug: "adminSettings",
        name: "Admin Settings"
      }]
    };
  },
  methods: {
    current: function current(e) {
      localStorage.setItem("cPage", e);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/AdminSettings.vue?vue&type=style&index=0&id=3e9582b7&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/AdminSettings.vue?vue&type=style&index=0&id=3e9582b7&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "form[data-v-3e9582b7] {\n  width: 100%;\n  max-width: 500px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Disclaimer.vue?vue&type=style&index=0&id=70e8f146&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Disclaimer.vue?vue&type=style&index=0&id=70e8f146&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".add-icon-btn input[data-v-70e8f146] {\n  display: none;\n}\n.add-icon[data-v-70e8f146] {\n  width: 32px;\n  height: 32px;\n  display: inline-block;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 100%;\n  margin-right: 10px;\n  margin: auto;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.add-icon[data-v-70e8f146]:hover {\n  background-color: #fafafa;\n}\n.add-icon i[data-v-70e8f146] {\n  color: #ccc;\n  margin-left: 1px;\n}\n.add-icon img[data-v-70e8f146] {\n  width: 100%;\n  max-width: 15px;\n}\nform[data-v-70e8f146] {\n  width: 100%;\n  max-width: 600px;\n  margin-right: auto;\n}\n.disclaimer-list[data-v-70e8f146] {\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n  overflow-y: auto;\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  width: 100%;\n  max-width: 600px;\n  margin: 20px auto 0px 0px;\n}\n.disclaimer-list[data-v-70e8f146]::-webkit-scrollbar {\n  display: none;\n}\n.disclaimer-list li[data-v-70e8f146] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 15px;\n  background-color: #ececec;\n  padding: 10px;\n  border-radius: 9px;\n  color: #000;\n}\n.disclaimer-list li div[data-v-70e8f146] {\n  display: flex;\n  align-items: center;\n}\n.disclaimer-list li div[data-v-70e8f146]:last-child {\n  margin-right: 10px;\n}\n.disclaimer-list li div:last-child i[data-v-70e8f146] {\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.disclaimer-list li div:last-child i[data-v-70e8f146]:hover {\n  color: #c53333;\n}\n.disclaimer-list li .list-icon[data-v-70e8f146] {\n  width: 32px;\n  height: 32px;\n  display: inline-block;\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 100%;\n  margin-right: 10px;\n}\n.disclaimer-list li .list-icon img[data-v-70e8f146] {\n  width: 100%;\n  max-width: 15px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/MetaData.vue?vue&type=style&index=0&id=5f620c8c&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/MetaData.vue?vue&type=style&index=0&id=5f620c8c&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "form[data-v-5f620c8c] {\n  width: 100%;\n  max-width: 600px;\n}\n.add-img[data-v-5f620c8c] {\n  position: relative;\n}\n.add-img input[data-v-5f620c8c] {\n  display: none;\n}\n.add-img .add-image[data-v-5f620c8c] {\n  width: 300px;\n  height: 200px;\n  border: 3px dashed #dddddd;\n  background-color: #f3f2f2;\n  border-radius: 14px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n}\n.add-img .add-image i[data-v-5f620c8c] {\n  font-size: 58px;\n  color: #dddddd;\n}\n.add-img .add-image img[data-v-5f620c8c] {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Settings.vue?vue&type=style&index=0&id=c4cf86e4&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Settings.vue?vue&type=style&index=0&id=c4cf86e4&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".result-list[data-v-c4cf86e4] {\n  list-style: none;\n  padding: 0px;\n  overflow-y: auto;\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  width: 100%;\n  max-width: 600px;\n  margin: 20px auto 0px 0px;\n}\n.result-list[data-v-c4cf86e4]::-webkit-scrollbar {\n  display: none;\n}\n.result-list li[data-v-c4cf86e4] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 15px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  padding: 10px 10px 10px 20px;\n  border-radius: 9px;\n  color: #000;\n}\n.result-list li span[data-v-c4cf86e4] {\n  display: flex;\n  align-items: center;\n}\n.result-list li span[data-v-c4cf86e4]:last-child {\n  margin-right: 10px;\n}\n.result-list li span:last-child i[data-v-c4cf86e4] {\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.result-list li span:last-child i[data-v-c4cf86e4]:hover {\n  color: #c53333;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SocialShare.vue?vue&type=style&index=0&id=0496d1d7&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SocialShare.vue?vue&type=style&index=0&id=0496d1d7&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".switch-btn[data-v-0496d1d7] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.switch-btn input[data-v-0496d1d7] {\n  display: none;\n}\n.switch-btn input:checked ~ .switch[data-v-0496d1d7] {\n  background-color: #629efe;\n}\n.switch-btn input:checked ~ .switch[data-v-0496d1d7]::before {\n  transform: translateX(21px);\n}\n.switch-btn .switch[data-v-0496d1d7] {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n  background-color: #797c9b;\n  border-radius: 40px;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n.switch-btn .switch[data-v-0496d1d7]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  background-color: #f3f3f3;\n  border-radius: 100%;\n  transition: all 0.3s;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);\n}\n.social-list[data-v-0496d1d7] {\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n  width: 100%;\n  max-width: 600px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 20px;\n}\n.social-list li[data-v-0496d1d7] {\n  background-color: #fff;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 15px;\n  border-radius: 6px;\n  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);\n}\n.social-list li .title[data-v-0496d1d7] {\n  font-size: 1rem;\n}\n.social-list li .icon[data-v-0496d1d7] {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 32px;\n  height: 32px;\n  color: #fff;\n  border-radius: 4px;\n  margin-right: 5px;\n}\n@media screen and (max-width: 500px) {\n.social-list[data-v-0496d1d7] {\n    grid-template-columns: 1fr;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/Views/admin/AdminPanel.vue":
/*!*************************************************!*\
  !*** ./resources/js/Views/admin/AdminPanel.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminPanel_vue_vue_type_template_id_36ddb518_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminPanel.vue?vue&type=template&id=36ddb518&scoped=true& */ "./resources/js/Views/admin/AdminPanel.vue?vue&type=template&id=36ddb518&scoped=true&");
/* harmony import */ var _AdminPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminPanel.vue?vue&type=script&lang=js& */ "./resources/js/Views/admin/AdminPanel.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AdminPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AdminPanel_vue_vue_type_template_id_36ddb518_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminPanel_vue_vue_type_template_id_36ddb518_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "36ddb518",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Views/admin/AdminPanel.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/AdminSettings.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/admin/AdminSettings.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminSettings_vue_vue_type_template_id_3e9582b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminSettings.vue?vue&type=template&id=3e9582b7&scoped=true& */ "./resources/js/components/admin/AdminSettings.vue?vue&type=template&id=3e9582b7&scoped=true&");
/* harmony import */ var _AdminSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminSettings.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/AdminSettings.vue?vue&type=script&lang=js&");
/* harmony import */ var _AdminSettings_vue_vue_type_style_index_0_id_3e9582b7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminSettings.vue?vue&type=style&index=0&id=3e9582b7&lang=scss&scoped=true& */ "./resources/js/components/admin/AdminSettings.vue?vue&type=style&index=0&id=3e9582b7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _AdminSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AdminSettings_vue_vue_type_template_id_3e9582b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminSettings_vue_vue_type_template_id_3e9582b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3e9582b7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/AdminSettings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Disclaimer.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/admin/Disclaimer.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Disclaimer_vue_vue_type_template_id_70e8f146_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Disclaimer.vue?vue&type=template&id=70e8f146&scoped=true& */ "./resources/js/components/admin/Disclaimer.vue?vue&type=template&id=70e8f146&scoped=true&");
/* harmony import */ var _Disclaimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Disclaimer.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Disclaimer.vue?vue&type=script&lang=js&");
/* harmony import */ var _Disclaimer_vue_vue_type_style_index_0_id_70e8f146_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Disclaimer.vue?vue&type=style&index=0&id=70e8f146&lang=scss&scoped=true& */ "./resources/js/components/admin/Disclaimer.vue?vue&type=style&index=0&id=70e8f146&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Disclaimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Disclaimer_vue_vue_type_template_id_70e8f146_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Disclaimer_vue_vue_type_template_id_70e8f146_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "70e8f146",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Disclaimer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/MetaData.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/admin/MetaData.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MetaData_vue_vue_type_template_id_5f620c8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MetaData.vue?vue&type=template&id=5f620c8c&scoped=true& */ "./resources/js/components/admin/MetaData.vue?vue&type=template&id=5f620c8c&scoped=true&");
/* harmony import */ var _MetaData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MetaData.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/MetaData.vue?vue&type=script&lang=js&");
/* harmony import */ var _MetaData_vue_vue_type_style_index_0_id_5f620c8c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MetaData.vue?vue&type=style&index=0&id=5f620c8c&lang=scss&scoped=true& */ "./resources/js/components/admin/MetaData.vue?vue&type=style&index=0&id=5f620c8c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _MetaData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _MetaData_vue_vue_type_template_id_5f620c8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _MetaData_vue_vue_type_template_id_5f620c8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5f620c8c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/MetaData.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Settings.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/admin/Settings.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Settings_vue_vue_type_template_id_c4cf86e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=c4cf86e4&scoped=true& */ "./resources/js/components/admin/Settings.vue?vue&type=template&id=c4cf86e4&scoped=true&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Settings.vue?vue&type=script&lang=js&");
/* harmony import */ var _Settings_vue_vue_type_style_index_0_id_c4cf86e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Settings.vue?vue&type=style&index=0&id=c4cf86e4&lang=scss&scoped=true& */ "./resources/js/components/admin/Settings.vue?vue&type=style&index=0&id=c4cf86e4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Settings_vue_vue_type_template_id_c4cf86e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Settings_vue_vue_type_template_id_c4cf86e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c4cf86e4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/SocialShare.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/admin/SocialShare.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SocialShare_vue_vue_type_template_id_0496d1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SocialShare.vue?vue&type=template&id=0496d1d7&scoped=true& */ "./resources/js/components/admin/SocialShare.vue?vue&type=template&id=0496d1d7&scoped=true&");
/* harmony import */ var _SocialShare_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocialShare.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/SocialShare.vue?vue&type=script&lang=js&");
/* harmony import */ var _SocialShare_vue_vue_type_style_index_0_id_0496d1d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SocialShare.vue?vue&type=style&index=0&id=0496d1d7&lang=scss&scoped=true& */ "./resources/js/components/admin/SocialShare.vue?vue&type=style&index=0&id=0496d1d7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _SocialShare_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SocialShare_vue_vue_type_template_id_0496d1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SocialShare_vue_vue_type_template_id_0496d1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0496d1d7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/SocialShare.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/layout/Navbar.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/admin/layout/Navbar.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navbar_vue_vue_type_template_id_407fff7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=407fff7a& */ "./resources/js/components/admin/layout/Navbar.vue?vue&type=template&id=407fff7a&");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/layout/Navbar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Navbar_vue_vue_type_template_id_407fff7a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Navbar_vue_vue_type_template_id_407fff7a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/layout/Navbar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/layout/SideNav.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/admin/layout/SideNav.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SideNav_vue_vue_type_template_id_1ed3ce52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideNav.vue?vue&type=template&id=1ed3ce52& */ "./resources/js/components/admin/layout/SideNav.vue?vue&type=template&id=1ed3ce52&");
/* harmony import */ var _SideNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideNav.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/layout/SideNav.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SideNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SideNav_vue_vue_type_template_id_1ed3ce52___WEBPACK_IMPORTED_MODULE_0__.render,
  _SideNav_vue_vue_type_template_id_1ed3ce52___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/layout/SideNav.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Views/admin/AdminPanel.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Views/admin/AdminPanel.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminPanel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Views/admin/AdminPanel.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/admin/AdminSettings.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/admin/AdminSettings.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminSettings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/AdminSettings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/admin/Disclaimer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/admin/Disclaimer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Disclaimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Disclaimer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Disclaimer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Disclaimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/admin/MetaData.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/admin/MetaData.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MetaData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MetaData.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/MetaData.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MetaData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/admin/Settings.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/admin/Settings.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Settings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/admin/SocialShare.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/admin/SocialShare.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialShare_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SocialShare.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SocialShare.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialShare_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/admin/layout/Navbar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/admin/layout/Navbar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/layout/Navbar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/admin/layout/SideNav.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/layout/SideNav.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SideNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/layout/SideNav.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Views/admin/AdminPanel.vue?vue&type=template&id=36ddb518&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Views/admin/AdminPanel.vue?vue&type=template&id=36ddb518&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPanel_vue_vue_type_template_id_36ddb518_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPanel_vue_vue_type_template_id_36ddb518_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPanel_vue_vue_type_template_id_36ddb518_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminPanel.vue?vue&type=template&id=36ddb518&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Views/admin/AdminPanel.vue?vue&type=template&id=36ddb518&scoped=true&");


/***/ }),

/***/ "./resources/js/components/admin/AdminSettings.vue?vue&type=template&id=3e9582b7&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/admin/AdminSettings.vue?vue&type=template&id=3e9582b7&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSettings_vue_vue_type_template_id_3e9582b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSettings_vue_vue_type_template_id_3e9582b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSettings_vue_vue_type_template_id_3e9582b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminSettings.vue?vue&type=template&id=3e9582b7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/AdminSettings.vue?vue&type=template&id=3e9582b7&scoped=true&");


/***/ }),

/***/ "./resources/js/components/admin/Disclaimer.vue?vue&type=template&id=70e8f146&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/admin/Disclaimer.vue?vue&type=template&id=70e8f146&scoped=true& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Disclaimer_vue_vue_type_template_id_70e8f146_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Disclaimer_vue_vue_type_template_id_70e8f146_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Disclaimer_vue_vue_type_template_id_70e8f146_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Disclaimer.vue?vue&type=template&id=70e8f146&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Disclaimer.vue?vue&type=template&id=70e8f146&scoped=true&");


/***/ }),

/***/ "./resources/js/components/admin/MetaData.vue?vue&type=template&id=5f620c8c&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/admin/MetaData.vue?vue&type=template&id=5f620c8c&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MetaData_vue_vue_type_template_id_5f620c8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MetaData_vue_vue_type_template_id_5f620c8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MetaData_vue_vue_type_template_id_5f620c8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MetaData.vue?vue&type=template&id=5f620c8c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/MetaData.vue?vue&type=template&id=5f620c8c&scoped=true&");


/***/ }),

/***/ "./resources/js/components/admin/Settings.vue?vue&type=template&id=c4cf86e4&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/admin/Settings.vue?vue&type=template&id=c4cf86e4&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_c4cf86e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_c4cf86e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_c4cf86e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settings.vue?vue&type=template&id=c4cf86e4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Settings.vue?vue&type=template&id=c4cf86e4&scoped=true&");


/***/ }),

/***/ "./resources/js/components/admin/SocialShare.vue?vue&type=template&id=0496d1d7&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/admin/SocialShare.vue?vue&type=template&id=0496d1d7&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialShare_vue_vue_type_template_id_0496d1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialShare_vue_vue_type_template_id_0496d1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialShare_vue_vue_type_template_id_0496d1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SocialShare.vue?vue&type=template&id=0496d1d7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SocialShare.vue?vue&type=template&id=0496d1d7&scoped=true&");


/***/ }),

/***/ "./resources/js/components/admin/layout/Navbar.vue?vue&type=template&id=407fff7a&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/admin/layout/Navbar.vue?vue&type=template&id=407fff7a& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_407fff7a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_407fff7a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_407fff7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navbar.vue?vue&type=template&id=407fff7a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/layout/Navbar.vue?vue&type=template&id=407fff7a&");


/***/ }),

/***/ "./resources/js/components/admin/layout/SideNav.vue?vue&type=template&id=1ed3ce52&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/layout/SideNav.vue?vue&type=template&id=1ed3ce52& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_template_id_1ed3ce52___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_template_id_1ed3ce52___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_template_id_1ed3ce52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SideNav.vue?vue&type=template&id=1ed3ce52& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/layout/SideNav.vue?vue&type=template&id=1ed3ce52&");


/***/ }),

/***/ "./resources/js/components/admin/AdminSettings.vue?vue&type=style&index=0&id=3e9582b7&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/admin/AdminSettings.vue?vue&type=style&index=0&id=3e9582b7&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSettings_vue_vue_type_style_index_0_id_3e9582b7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminSettings.vue?vue&type=style&index=0&id=3e9582b7&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/AdminSettings.vue?vue&type=style&index=0&id=3e9582b7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSettings_vue_vue_type_style_index_0_id_3e9582b7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSettings_vue_vue_type_style_index_0_id_3e9582b7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSettings_vue_vue_type_style_index_0_id_3e9582b7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSettings_vue_vue_type_style_index_0_id_3e9582b7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/components/admin/Disclaimer.vue?vue&type=style&index=0&id=70e8f146&lang=scss&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/admin/Disclaimer.vue?vue&type=style&index=0&id=70e8f146&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Disclaimer_vue_vue_type_style_index_0_id_70e8f146_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Disclaimer.vue?vue&type=style&index=0&id=70e8f146&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Disclaimer.vue?vue&type=style&index=0&id=70e8f146&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Disclaimer_vue_vue_type_style_index_0_id_70e8f146_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Disclaimer_vue_vue_type_style_index_0_id_70e8f146_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Disclaimer_vue_vue_type_style_index_0_id_70e8f146_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Disclaimer_vue_vue_type_style_index_0_id_70e8f146_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/components/admin/MetaData.vue?vue&type=style&index=0&id=5f620c8c&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/admin/MetaData.vue?vue&type=style&index=0&id=5f620c8c&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MetaData_vue_vue_type_style_index_0_id_5f620c8c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MetaData.vue?vue&type=style&index=0&id=5f620c8c&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/MetaData.vue?vue&type=style&index=0&id=5f620c8c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MetaData_vue_vue_type_style_index_0_id_5f620c8c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MetaData_vue_vue_type_style_index_0_id_5f620c8c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MetaData_vue_vue_type_style_index_0_id_5f620c8c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MetaData_vue_vue_type_style_index_0_id_5f620c8c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/components/admin/Settings.vue?vue&type=style&index=0&id=c4cf86e4&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/admin/Settings.vue?vue&type=style&index=0&id=c4cf86e4&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_c4cf86e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settings.vue?vue&type=style&index=0&id=c4cf86e4&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Settings.vue?vue&type=style&index=0&id=c4cf86e4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_c4cf86e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_c4cf86e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_c4cf86e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_c4cf86e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/components/admin/SocialShare.vue?vue&type=style&index=0&id=0496d1d7&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/admin/SocialShare.vue?vue&type=style&index=0&id=0496d1d7&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialShare_vue_vue_type_style_index_0_id_0496d1d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SocialShare.vue?vue&type=style&index=0&id=0496d1d7&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SocialShare.vue?vue&type=style&index=0&id=0496d1d7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialShare_vue_vue_type_style_index_0_id_0496d1d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialShare_vue_vue_type_style_index_0_id_0496d1d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialShare_vue_vue_type_style_index_0_id_0496d1d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialShare_vue_vue_type_style_index_0_id_0496d1d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Views/admin/AdminPanel.vue?vue&type=template&id=36ddb518&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Views/admin/AdminPanel.vue?vue&type=template&id=36ddb518&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "admin-panel" },
    [
      _c("navbar"),
      _vm._v(" "),
      _c("div", { staticClass: "container mt-5" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-2 col-md-3" }, [_c("side-nav")], 1),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-10 col-md-9" }, [
            _c(
              "div",
              {
                staticClass: "tab-content",
                attrs: { id: "v-pills-tabContent" }
              },
              [
                _c("disclaimer"),
                _vm._v(" "),
                _c("settings"),
                _vm._v(" "),
                _c("meta-data"),
                _vm._v(" "),
                _c("social-share"),
                _vm._v(" "),
                _c("admin-settings")
              ],
              1
            )
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/AdminSettings.vue?vue&type=template&id=3e9582b7&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/AdminSettings.vue?vue&type=template&id=3e9582b7&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "tab-pane fade show mb-5",
      class: { active: _vm.activePage === _vm.pageName },
      attrs: {
        id: "v-pills-" + _vm.pageName,
        role: "tabpanel",
        "aria-labelledby": "v-pills-" + _vm.pageName + "-tab"
      }
    },
    [
      _c("h4", [_vm._v("Updade Email")]),
      _vm._v(" "),
      _c(
        "form",
        {
          staticClass: "mb-5",
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.updateEmail($event)
            }
          }
        },
        [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "email" } }, [_vm._v("New email")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.email,
                  expression: "email"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "email", placeholder: "Email", id: "email" },
              domProps: { value: _vm.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.email = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "password" } }, [
              _vm._v("Current password")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.ePassword,
                  expression: "ePassword"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "password",
                placeholder: "Password",
                id: "password"
              },
              domProps: { value: _vm.ePassword },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.ePassword = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-primary mt-2", attrs: { type: "submit" } },
            [
              !_vm.loading1
                ? _c("span", [_vm._v("Update")])
                : _c("i", { staticClass: "fas fa-spinner fa-spin" })
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("h4", [_vm._v("Updade Password")]),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.updatePassword($event)
            }
          }
        },
        [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "cPassword" } }, [
              _vm._v("Current password")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.pPassword,
                  expression: "pPassword"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "password",
                placeholder: "Password",
                id: "cPassword"
              },
              domProps: { value: _vm.pPassword },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.pPassword = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "newPassword" } }, [
              _vm._v("New password")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.newPassword,
                  expression: "newPassword"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "password",
                placeholder: "Password",
                id: "newPassword"
              },
              domProps: { value: _vm.newPassword },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.newPassword = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "conPassword" } }, [
              _vm._v("Confirm Password")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.conPassword,
                  expression: "conPassword"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "password",
                placeholder: "Password",
                id: "conPassword"
              },
              domProps: { value: _vm.conPassword },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.conPassword = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-primary mt-2", attrs: { type: "submit" } },
            [
              !_vm.loading2
                ? _c("span", [_vm._v("Update")])
                : _c("i", { staticClass: "fas fa-spinner fa-spin" })
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Disclaimer.vue?vue&type=template&id=70e8f146&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Disclaimer.vue?vue&type=template&id=70e8f146&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "tab-pane fade show mb-5",
      class: { active: _vm.activePage === _vm.pageName },
      attrs: {
        id: "v-pills-" + _vm.pageName,
        role: "tabpanel",
        "aria-labelledby": "v-pills-" + _vm.pageName + "-tab"
      }
    },
    [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.saveDisCardText($event)
            }
          }
        },
        [
          _c("div", { staticClass: "form-row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "cardtexta" } }, [
                  _vm._v("Card Text")
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.cardText,
                      expression: "cardText"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "cardtexta", rows: "3" },
                  domProps: { value: _vm.cardText },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.cardText = $event.target.value
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 text-right mt-2" }, [
              _c(
                "button",
                { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                [
                  !_vm.loading1
                    ? _c("span", [_vm._v("Save")])
                    : _c("i", { staticClass: "fas fa-spinner fa-spin" })
                ]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.saveDisclaimers($event)
            }
          }
        },
        [
          _c("div", { staticClass: "form-row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("h4", { staticClass: "mb-4" }, [_vm._v("Disclaimers")]),
              _vm._v(" "),
              _c("div", { staticClass: "row align-items-center mb-3" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-1 col-sm-2 col-2 position-relative" },
                  [
                    _c("div", { staticClass: "add-icon-btn" }, [
                      _c("input", {
                        attrs: { id: "icon", type: "file", accept: ".svg" },
                        on: { change: _vm.addIcon }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "add-icon",
                          attrs: {
                            "data-toggle": "tooltip",
                            "data-placement": "top",
                            title: "Add Icon SVG(only)",
                            for: "icon"
                          }
                        },
                        [
                          !_vm.disclaimersInputs.preview
                            ? _c("i", { staticClass: "far fa-smile" })
                            : _c("img", {
                                attrs: {
                                  src: _vm.disclaimersInputs.preview,
                                  alt: ""
                                }
                              })
                        ]
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col pl-0" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.disclaimersInputs.text,
                        expression: "disclaimersInputs.text"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "disclaimer",
                      required: ""
                    },
                    domProps: { value: _vm.disclaimersInputs.text },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.disclaimersInputs,
                          "text",
                          $event.target.value
                        )
                      }
                    }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 text-right mt-2" }, [
              _c(
                "button",
                { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                [
                  !_vm.loading2
                    ? _c("span", [
                        _c("i", { staticClass: "fas fa-plus" }),
                        _vm._v(" Add More")
                      ])
                    : _c("i", { staticClass: "fas fa-spinner fa-spin" })
                ]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "disclaimer-list" },
        [
          _vm._l(_vm.disclaimers, function(item, index) {
            return [
              _c("li", { key: index }, [
                _c("div", [
                  _c("i", { staticClass: "list-icon" }, [
                    _c("img", { attrs: { src: item.icon } })
                  ]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(item.text))])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("i", {
                    staticClass: "fas fa-trash-alt",
                    on: {
                      click: function($event) {
                        return _vm.deleteDis(item.id)
                      }
                    }
                  })
                ])
              ])
            ]
          })
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/MetaData.vue?vue&type=template&id=5f620c8c&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/MetaData.vue?vue&type=template&id=5f620c8c&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "tab-pane fade show mb-5",
      class: { active: _vm.activePage === _vm.pageName },
      attrs: {
        id: "v-pills-" + _vm.pageName,
        role: "tabpanel",
        "aria-labelledby": "v-pills-" + _vm.pageName + "-tab"
      }
    },
    [
      _c("h2", [_vm._v("OG Tag")]),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.saveOG($event)
            }
          }
        },
        [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "title" } }, [_vm._v("OG:Title")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.title,
                  expression: "title"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "title" },
              domProps: { value: _vm.title },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.title = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "url" } }, [_vm._v("OG:URL")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.url,
                  expression: "url"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "url" },
              domProps: { value: _vm.url },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.url = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "description" } }, [
              _vm._v("OG:Description")
            ]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.desc,
                  expression: "desc"
                }
              ],
              staticClass: "form-control",
              attrs: { rows: "3", id: "description" },
              domProps: { value: _vm.desc },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.desc = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-row" }, [
            _c("div", { staticClass: "col" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "type" } }, [_vm._v("OG:Type")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.type,
                      expression: "type"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", id: "type" },
                  domProps: { value: _vm.type },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.type = $event.target.value
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "card" } }, [
                  _vm._v("Twitter:Card")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.card,
                      expression: "card"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", id: "card" },
                  domProps: { value: _vm.card },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.card = $event.target.value
                    }
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "add-img" }, [
            _c("input", {
              attrs: { id: "image", type: "file", accept: ".png" },
              on: { change: _vm.addImg }
            }),
            _vm._v(" "),
            _c("label", { staticClass: "add-image", attrs: { for: "image" } }, [
              _c("i", { staticClass: "far fa-image" }),
              _vm._v(" "),
              _vm.imgUrl
                ? _c("img", { attrs: { src: _vm.imgUrl, alt: "" } })
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-primary mt-4", attrs: { type: "submit" } },
            [
              !_vm.loading1
                ? _c("span", [_vm._v("Save")])
                : _c("i", { staticClass: "fas fa-spinner fa-spin" })
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("h2", { staticClass: "mt-4" }, [_vm._v("Google Analytics")]),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.saveAnaly($event)
            }
          }
        },
        [
          _c("div", { staticClass: "form-group" }, [
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.analy,
                  expression: "analy"
                }
              ],
              staticClass: "form-control",
              attrs: { rows: "6", placeholder: "Palce analytics code here" },
              domProps: { value: _vm.analy },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.analy = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-primary mt-2", attrs: { type: "submit" } },
            [
              !_vm.loading2
                ? _c("span", [_vm._v("Save")])
                : _c("i", { staticClass: "fas fa-spinner fa-spin" })
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Settings.vue?vue&type=template&id=c4cf86e4&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Settings.vue?vue&type=template&id=c4cf86e4&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "tab-pane fade show mb-5",
      class: { active: _vm.activePage === _vm.pageName },
      attrs: {
        id: "v-pills-" + _vm.pageName,
        role: "tabpanel",
        "aria-labelledby": "v-pills-" + _vm.pageName + "-tab"
      }
    },
    [
      _c("h4", [_vm._v("Breath settings")]),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.saveTimes($event)
            }
          }
        },
        [
          _c("div", { staticClass: "form-row" }, [
            _c("div", { staticClass: "col-lg-3 col-md-4 col" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "inhale" } }, [
                    _vm._v("Inhale Duration")
                  ]),
                  _vm._v(" "),
                  _c("the-mask", {
                    staticClass: "form-control",
                    attrs: {
                      mask: ["#s", "##s", "###s"],
                      id: "inhale",
                      placeholder: "1s"
                    },
                    model: {
                      value: _vm.inhale_dura,
                      callback: function($$v) {
                        _vm.inhale_dura = $$v
                      },
                      expression: "inhale_dura"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-3 col-md-4 col" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "holdBreath" } }, [
                    _vm._v("Hold breath Duration")
                  ]),
                  _vm._v(" "),
                  _c("the-mask", {
                    staticClass: "form-control",
                    attrs: {
                      mask: ["#s", "##s", "###s"],
                      id: "holdBreath",
                      placeholder: "1s"
                    },
                    model: {
                      value: _vm.hold_dura,
                      callback: function($$v) {
                        _vm.hold_dura = $$v
                      },
                      expression: "hold_dura"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 mt-1 mb-3" }, [
              _c(
                "button",
                { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                [
                  !_vm.loading1
                    ? _c("span", [_vm._v("Save")])
                    : _c("i", { staticClass: "fas fa-spinner fa-spin" })
                ]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("h4", [_vm._v("Results settings")]),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.saveResults($event)
            }
          }
        },
        [
          _c("div", { staticClass: "form-row" }, [
            _c("div", { staticClass: "col-lg-2 col-sm-3 col" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "condition" } }, [
                  _vm._v("Condition")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.condition,
                        expression: "condition"
                      }
                    ],
                    staticClass: "custom-select mr-sm-2",
                    attrs: { id: "condition" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.condition = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "befor" } }, [
                      _vm._v("Befor")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "after" } }, [
                      _vm._v("After")
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-2 col-sm-3 col" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "sec" } }, [_vm._v("Seconds")]),
                  _vm._v(" "),
                  _c("the-mask", {
                    staticClass: "form-control",
                    attrs: {
                      mask: ["#s", "##s", "###s"],
                      id: "sec",
                      placeholder: "1s"
                    },
                    model: {
                      value: _vm.seconds,
                      callback: function($$v) {
                        _vm.seconds = $$v
                      },
                      expression: "seconds"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-2 col-sm-3 col" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "resu" } }, [_vm._v("Result")]),
                  _vm._v(" "),
                  _c("the-mask", {
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      mask: ["<##%", "≈##-##%"],
                      masked: true,
                      id: "resu",
                      placeholder: "≈91-95%"
                    },
                    model: {
                      value: _vm.result,
                      callback: function($$v) {
                        _vm.result = $$v
                      },
                      expression: "result"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-2 col-sm-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { staticClass: "mb-2", attrs: { for: "resu" } }, [
                  _vm._v("Critical")
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "form-check form-check-inline" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.critical,
                        expression: "critical"
                      }
                    ],
                    staticClass: "form-check-input",
                    attrs: {
                      type: "radio",
                      name: "critical",
                      id: "inlineRadio1",
                      value: "yes"
                    },
                    domProps: { checked: _vm._q(_vm.critical, "yes") },
                    on: {
                      change: function($event) {
                        _vm.critical = "yes"
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "form-check-label",
                      attrs: { for: "inlineRadio1" }
                    },
                    [_vm._v("Yes")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-check form-check-inline" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.critical,
                        expression: "critical"
                      }
                    ],
                    staticClass: "form-check-input",
                    attrs: {
                      type: "radio",
                      name: "critical",
                      id: "inlineRadio2",
                      value: "no"
                    },
                    domProps: { checked: _vm._q(_vm.critical, "no") },
                    on: {
                      change: function($event) {
                        _vm.critical = "no"
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "form-check-label",
                      attrs: { for: "inlineRadio2" }
                    },
                    [_vm._v("No")]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 mt-1 mb-3" }, [
              _c(
                "button",
                { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                [
                  !_vm.loading2
                    ? _c("span", [_vm._v("Save")])
                    : _c("i", { staticClass: "fas fa-spinner fa-spin" })
                ]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "result-list mb-3" },
        [
          _vm._l(_vm.results, function(r, index) {
            return [
              _c("li", { key: index }, [
                _c("span", [
                  _vm._v(
                    "If user Tap " +
                      _vm._s(r.conditions) +
                      " " +
                      _vm._s(r.seconds) +
                      "s the\n                    result is " +
                      _vm._s(r.result) +
                      "  \n                    "
                  ),
                  r.critical === "yes"
                    ? _c("span", { staticClass: "text-danger" }, [
                        _vm._v("critical")
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("span", [
                  _c("i", {
                    staticClass: "fas fa-trash-alt",
                    on: {
                      click: function($event) {
                        return _vm.deleteResult(r.id)
                      }
                    }
                  })
                ])
              ])
            ]
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.saveCardText($event)
            }
          }
        },
        [
          _c("div", { staticClass: "form-row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "cardtext" } }, [
                  _vm._v("Card Text")
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.cardText,
                      expression: "cardText"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "cardtext", rows: "3" },
                  domProps: { value: _vm.cardText },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.cardText = $event.target.value
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 text-right mt-2" }, [
              _c(
                "button",
                { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                [
                  !_vm.loading3
                    ? _c("span", [_vm._v("Save")])
                    : _c("i", { staticClass: "fas fa-spinner fa-spin" })
                ]
              )
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SocialShare.vue?vue&type=template&id=0496d1d7&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SocialShare.vue?vue&type=template&id=0496d1d7&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "tab-pane fade show mb-5",
      class: { active: _vm.activePage === _vm.pageName },
      attrs: {
        id: "v-pills-" + _vm.pageName,
        role: "tabpanel",
        "aria-labelledby": "v-pills-" + _vm.pageName + "-tab"
      }
    },
    [
      _c("h2", { staticClass: "mb-4" }, [_vm._v("Social List")]),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "social-list" },
        [
          _vm._l(_vm.list, function(item, index) {
            return [
              _c("li", { key: index }, [
                _c("div", { staticClass: "title" }, [
                  _c("span", {
                    staticClass: "icon",
                    style: "background-color: " + item.bColor + ";",
                    domProps: { innerHTML: _vm._s(item.icon) }
                  }),
                  _vm._v(
                    "\n                    " +
                      _vm._s(item.name) +
                      "\n                "
                  )
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "switch-btn" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.selected,
                        expression: "selected"
                      }
                    ],
                    attrs: { type: "checkbox" },
                    domProps: {
                      value: item.value,
                      checked: Array.isArray(_vm.selected)
                        ? _vm._i(_vm.selected, item.value) > -1
                        : _vm.selected
                    },
                    on: {
                      change: [
                        function($event) {
                          var $$a = _vm.selected,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = item.value,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 && (_vm.selected = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.selected = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.selected = $$c
                          }
                        },
                        function($event) {
                          return _vm.addRemove(
                            item.value,
                            item.icon,
                            item.bColor
                          )
                        }
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "switch" })
                ])
              ])
            ]
          })
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/layout/Navbar.vue?vue&type=template&id=407fff7a&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/layout/Navbar.vue?vue&type=template&id=407fff7a& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    { staticClass: "navbar navbar-expand navbar-dark bg-dark" },
    [
      _c("div", { staticClass: "container" }, [
        _c("a", { staticClass: "navbar-brand", attrs: { href: "#" } }, [
          _vm._v(_vm._s(_vm.appName) + " | Admin")
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "collapse navbar-collapse",
            attrs: { id: "navbarNav" }
          },
          [
            _c("ul", { staticClass: "navbar-nav ml-auto" }, [
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link",
                    attrs: { href: "#" },
                    on: { click: _vm.logout }
                  },
                  [_vm._v("Logout")]
                )
              ])
            ])
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/layout/SideNav.vue?vue&type=template&id=1ed3ce52&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/layout/SideNav.vue?vue&type=template&id=1ed3ce52& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "nav flex-md-column justify-content-center mb-4 nav-pills",
      attrs: {
        id: "v-pills-tab",
        role: "tablist",
        "aria-orientation": "vertical"
      }
    },
    [
      _vm._l(_vm.navList, function(item, index) {
        return [
          _c(
            "a",
            {
              key: index,
              staticClass: "nav-link",
              class: { active: _vm.activePage === item.slug },
              attrs: {
                id: "v-pills-" + item.slug + "-tab",
                "data-toggle": "pill",
                href: "#v-pills-" + item.slug,
                role: "tab",
                "aria-controls": "v-pills-" + item.slug,
                "aria-selected": "true"
              },
              on: {
                click: function($event) {
                  return _vm.current(item.slug)
                }
              }
            },
            [_vm._v(_vm._s(item.name))]
          )
        ]
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/AdminSettings.vue?vue&type=style&index=0&id=3e9582b7&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/AdminSettings.vue?vue&type=style&index=0&id=3e9582b7&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminSettings.vue?vue&type=style&index=0&id=3e9582b7&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/AdminSettings.vue?vue&type=style&index=0&id=3e9582b7&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("49ad84cd", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Disclaimer.vue?vue&type=style&index=0&id=70e8f146&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Disclaimer.vue?vue&type=style&index=0&id=70e8f146&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Disclaimer.vue?vue&type=style&index=0&id=70e8f146&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Disclaimer.vue?vue&type=style&index=0&id=70e8f146&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("13af260d", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/MetaData.vue?vue&type=style&index=0&id=5f620c8c&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/MetaData.vue?vue&type=style&index=0&id=5f620c8c&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MetaData.vue?vue&type=style&index=0&id=5f620c8c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/MetaData.vue?vue&type=style&index=0&id=5f620c8c&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5e73835f", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Settings.vue?vue&type=style&index=0&id=c4cf86e4&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Settings.vue?vue&type=style&index=0&id=c4cf86e4&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settings.vue?vue&type=style&index=0&id=c4cf86e4&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Settings.vue?vue&type=style&index=0&id=c4cf86e4&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("611f97b5", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SocialShare.vue?vue&type=style&index=0&id=0496d1d7&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SocialShare.vue?vue&type=style&index=0&id=0496d1d7&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SocialShare.vue?vue&type=style&index=0&id=0496d1d7&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SocialShare.vue?vue&type=style&index=0&id=0496d1d7&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("713f05c9", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);