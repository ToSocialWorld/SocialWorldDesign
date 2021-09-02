/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/contact.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@googlemaps/js-api-loader/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@googlemaps/js-api-loader/dist/index.esm.js ***!
  \******************************************************************/
/*! exports provided: DEFAULT_ID, Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DEFAULT_ID\", function() { return DEFAULT_ID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Loader\", function() { return Loader; });\n// do not edit .js files directly - edit src/index.jst\n\n\n\nvar fastDeepEqual = function equal(a, b) {\n  if (a === b) return true;\n\n  if (a && b && typeof a == 'object' && typeof b == 'object') {\n    if (a.constructor !== b.constructor) return false;\n\n    var length, i, keys;\n    if (Array.isArray(a)) {\n      length = a.length;\n      if (length != b.length) return false;\n      for (i = length; i-- !== 0;)\n        if (!equal(a[i], b[i])) return false;\n      return true;\n    }\n\n\n\n    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;\n    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();\n    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();\n\n    keys = Object.keys(a);\n    length = keys.length;\n    if (length !== Object.keys(b).length) return false;\n\n    for (i = length; i-- !== 0;)\n      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;\n\n    for (i = length; i-- !== 0;) {\n      var key = keys[i];\n\n      if (!equal(a[key], b[key])) return false;\n    }\n\n    return true;\n  }\n\n  // true if both NaN, false otherwise\n  return a!==a && b!==b;\n};\n\n/**\r\n * Copyright 2019 Google LLC. All Rights Reserved.\r\n *\r\n * Licensed under the Apache License, Version 2.0 (the \"License\");\r\n * you may not use this file except in compliance with the License.\r\n * You may obtain a copy of the License at.\r\n *\r\n *      Http://www.apache.org/licenses/LICENSE-2.0.\r\n *\r\n * Unless required by applicable law or agreed to in writing, software\r\n * distributed under the License is distributed on an \"AS IS\" BASIS,\r\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n * See the License for the specific language governing permissions and\r\n * limitations under the License.\r\n */\r\nconst DEFAULT_ID = \"__googleMapsScriptId\";\r\n/**\r\n * [[Loader]] makes it easier to add Google Maps JavaScript API to your application\r\n * dynamically using\r\n * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).\r\n * It works by dynamically creating and appending a script node to the the\r\n * document head and wrapping the callback function so as to return a promise.\r\n *\r\n * ```\r\n * const loader = new Loader({\r\n *   apiKey: \"\",\r\n *   version: \"weekly\",\r\n *   libraries: [\"places\"]\r\n * });\r\n *\r\n * loader.load().then((google) => {\r\n *   const map = new google.maps.Map(...)\r\n * })\r\n * ```\r\n */\r\nclass Loader {\r\n    /**\r\n     * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set\r\n     * using this library, instead the defaults are set by the Google Maps\r\n     * JavaScript API server.\r\n     *\r\n     * ```\r\n     * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});\r\n     * ```\r\n     */\r\n    constructor({ apiKey, channel, client, id = DEFAULT_ID, libraries = [], language, region, version, mapIds, nonce, retries = 3, url = \"https://maps.googleapis.com/maps/api/js\", }) {\r\n        this.CALLBACK = \"__googleMapsCallback\";\r\n        this.callbacks = [];\r\n        this.done = false;\r\n        this.loading = false;\r\n        this.errors = [];\r\n        this.version = version;\r\n        this.apiKey = apiKey;\r\n        this.channel = channel;\r\n        this.client = client;\r\n        this.id = id || DEFAULT_ID; // Do not allow empty string\r\n        this.libraries = libraries;\r\n        this.language = language;\r\n        this.region = region;\r\n        this.mapIds = mapIds;\r\n        this.nonce = nonce;\r\n        this.retries = retries;\r\n        this.url = url;\r\n        if (Loader.instance) {\r\n            if (!fastDeepEqual(this.options, Loader.instance.options)) {\r\n                throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Loader.instance.options)}`);\r\n            }\r\n            return Loader.instance;\r\n        }\r\n        Loader.instance = this;\r\n    }\r\n    get options() {\r\n        return {\r\n            version: this.version,\r\n            apiKey: this.apiKey,\r\n            channel: this.channel,\r\n            client: this.client,\r\n            id: this.id,\r\n            libraries: this.libraries,\r\n            language: this.language,\r\n            region: this.region,\r\n            mapIds: this.mapIds,\r\n            nonce: this.nonce,\r\n            url: this.url,\r\n        };\r\n    }\r\n    get failed() {\r\n        return this.done && !this.loading && this.errors.length >= this.retries + 1;\r\n    }\r\n    /**\r\n     * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].\r\n     *\r\n     * @ignore\r\n     */\r\n    createUrl() {\r\n        let url = this.url;\r\n        url += `?callback=${this.CALLBACK}`;\r\n        if (this.apiKey) {\r\n            url += `&key=${this.apiKey}`;\r\n        }\r\n        if (this.channel) {\r\n            url += `&channel=${this.channel}`;\r\n        }\r\n        if (this.client) {\r\n            url += `&client=${this.client}`;\r\n        }\r\n        if (this.libraries.length > 0) {\r\n            url += `&libraries=${this.libraries.join(\",\")}`;\r\n        }\r\n        if (this.language) {\r\n            url += `&language=${this.language}`;\r\n        }\r\n        if (this.region) {\r\n            url += `&region=${this.region}`;\r\n        }\r\n        if (this.version) {\r\n            url += `&v=${this.version}`;\r\n        }\r\n        if (this.mapIds) {\r\n            url += `&map_ids=${this.mapIds.join(\",\")}`;\r\n        }\r\n        return url;\r\n    }\r\n    /**\r\n     * Load the Google Maps JavaScript API script and return a Promise.\r\n     */\r\n    load() {\r\n        return this.loadPromise();\r\n    }\r\n    /**\r\n     * Load the Google Maps JavaScript API script and return a Promise.\r\n     *\r\n     * @ignore\r\n     */\r\n    loadPromise() {\r\n        return new Promise((resolve, reject) => {\r\n            this.loadCallback((err) => {\r\n                if (!err) {\r\n                    resolve(window.google);\r\n                }\r\n                else {\r\n                    reject(err.error);\r\n                }\r\n            });\r\n        });\r\n    }\r\n    /**\r\n     * Load the Google Maps JavaScript API script with a callback.\r\n     */\r\n    loadCallback(fn) {\r\n        this.callbacks.push(fn);\r\n        this.execute();\r\n    }\r\n    /**\r\n     * Set the script on document.\r\n     */\r\n    setScript() {\r\n        if (document.getElementById(this.id)) {\r\n            // TODO wrap onerror callback for cases where the script was loaded elsewhere\r\n            this.callback();\r\n            return;\r\n        }\r\n        const url = this.createUrl();\r\n        const script = document.createElement(\"script\");\r\n        script.id = this.id;\r\n        script.type = \"text/javascript\";\r\n        script.src = url;\r\n        script.onerror = this.loadErrorCallback.bind(this);\r\n        script.defer = true;\r\n        script.async = true;\r\n        if (this.nonce) {\r\n            script.nonce = this.nonce;\r\n        }\r\n        document.head.appendChild(script);\r\n    }\r\n    deleteScript() {\r\n        const script = document.getElementById(this.id);\r\n        if (script) {\r\n            script.remove();\r\n        }\r\n    }\r\n    /**\r\n     * Reset the loader state.\r\n     */\r\n    reset() {\r\n        this.deleteScript();\r\n        this.done = false;\r\n        this.loading = false;\r\n        this.errors = [];\r\n        this.onerrorEvent = null;\r\n    }\r\n    resetIfRetryingFailed() {\r\n        if (this.failed) {\r\n            this.reset();\r\n        }\r\n    }\r\n    loadErrorCallback(e) {\r\n        this.errors.push(e);\r\n        if (this.errors.length <= this.retries) {\r\n            const delay = this.errors.length * Math.pow(2, this.errors.length);\r\n            console.log(`Failed to load Google Maps script, retrying in ${delay} ms.`);\r\n            setTimeout(() => {\r\n                this.deleteScript();\r\n                this.setScript();\r\n            }, delay);\r\n        }\r\n        else {\r\n            this.onerrorEvent = e;\r\n            this.callback();\r\n        }\r\n    }\r\n    setCallback() {\r\n        window.__googleMapsCallback = this.callback.bind(this);\r\n    }\r\n    callback() {\r\n        this.done = true;\r\n        this.loading = false;\r\n        this.callbacks.forEach((cb) => {\r\n            cb(this.onerrorEvent);\r\n        });\r\n        this.callbacks = [];\r\n    }\r\n    execute() {\r\n        this.resetIfRetryingFailed();\r\n        if (this.done) {\r\n            this.callback();\r\n        }\r\n        else {\r\n            // short circuit and warn if google.maps is already loaded\r\n            if (window.google && window.google.maps && window.google.maps.version) {\r\n                console.warn(\"Google Maps already loaded outside @googlemaps/js-api-loader.\" +\r\n                    \"This may result in undesirable behavior as options and script parameters may not match.\");\r\n                this.callback();\r\n                return;\r\n            }\r\n            if (this.loading) ;\r\n            else {\r\n                this.loading = true;\r\n                this.setCallback();\r\n                this.setScript();\r\n            }\r\n        }\r\n    }\r\n}\n\n\n//# sourceMappingURL=index.esm.js.map\n\n\n//# sourceURL=webpack:///./node_modules/@googlemaps/js-api-loader/dist/index.esm.js?");

/***/ }),

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_getDocumentLang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/getDocumentLang */ \"./src/js/modules/getDocumentLang.js\");\n/* harmony import */ var _modules_GMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/GMap */ \"./src/js/modules/GMap.js\");\n/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popup */ \"./src/js/modules/popup.js\");\n/* harmony import */ var _modules_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/utility */ \"./src/js/modules/utility.js\");\n\r\n\r\n\r\n\r\n\r\nlet textData = {\r\n    sk: {\r\n        email: {\r\n            success: \"Vaša správa nám bola odoslaná\",\r\n            error: \"Vyskytla sa chyba. Skúste znova\",\r\n        },\r\n        form: {\r\n            wrongEmail: \"Nesprávny formát e -mailu\",\r\n            wrongContent: \"Vaša správa nemá byť prázdna\"\r\n        }\r\n    },\r\n    en: {\r\n        email: {\r\n            success: \"Your message was sent to us\",\r\n            error: \"An error occurred, please try again\",\r\n        },\r\n        form: {\r\n            wrongEmail: \"Wrong email format\",\r\n            wrongContent: \"Your message should not be empty\"\r\n        }\r\n    },\r\n    de: {\r\n        email: {\r\n            success: \"Ihre Nachricht wurde an uns gesendet\",\r\n            error: \"Es ist ein Fehler aufgetreten. Versuchen Sie es erneut\",\r\n        },\r\n        form: {\r\n            wrongEmail: \"Falsches E-Mail-Format\",\r\n            wrongContent: \"Ihre Nachricht sollte nicht leer sein\"\r\n        }\r\n    }\r\n};\r\n\r\nlet currentTextData;\r\nfor(let lang in textData) {\r\n    if(Object(_modules_getDocumentLang__WEBPACK_IMPORTED_MODULE_0__[\"default\"])() === lang) currentTextData = textData[lang];\r\n}\r\n\r\nlet map = new _modules_GMap__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Michalovce, Jana Holleho 107\", 14, null, \"#map\");\r\nmap.updateMarkers([{address: {\r\n    city: \"Michalovce\",\r\n    street: \"Jana Holleho\",\r\n    buildingNumber: 107\r\n}}]);\r\n\r\n//PROCESS CONTACT FORM\r\nlet popup = null;\r\nlet contactForm = document.querySelector(\".contact-form\");\r\ncontactForm.addEventListener(\"submit\", processFormData);\r\n\r\nfunction processFormData(event) {\r\n    event.preventDefault();\r\n    let contactForm = document.querySelector(\".contact-form\");\r\n    let contactFormItems = contactForm.elements;\r\n\r\n    if(!validate(contactForm)) return;\r\n\r\n    sendEmail(\r\n        contactFormItems.name.value, \r\n        contactFormItems.email.value, \r\n        contactFormItems.opinion.value\r\n    ).then(emailSentSuccessfully => {\r\n        popup = popup || new _modules_popup__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n        contactForm.reset();\r\n        if(emailSentSuccessfully) {\r\n            popup.setContent(`<p class=\"contact-popup-text\">${currentTextData.email.success}</p>`);\r\n        } else {\r\n            popup.setContent(`<p class=\"contact-popup-text\">${currentTextData.email.error}</p>`);\r\n        }\r\n\r\n        popup.render(document.querySelector(\"body\"));\r\n    });\r\n}\r\n\r\nfunction validate(form) {\r\n    let {email, opinion} = form.elements;\r\n    let isValid = true;\r\n\r\n    if(!Object(_modules_utility__WEBPACK_IMPORTED_MODULE_3__[\"validateEmail\"])(email.value)) {\r\n        insertError(form, email, currentTextData.form.wrongEmail);\r\n        isValid = false;\r\n    }\r\n    if(Object(_modules_utility__WEBPACK_IMPORTED_MODULE_3__[\"isBlank\"])(opinion.value)) {\r\n        insertError(form, opinion, currentTextData.form.wrongContent);\r\n        isValid = false;\r\n    }\r\n\r\n    return isValid;\r\n}\r\n\r\nfunction insertError(parentEl, insertBeforeEl, text) {    \r\n    let errorParagraph = document.createElement(\"p\");\r\n    errorParagraph.textContent = text;\r\n    errorParagraph.classList.add(\"default-error\");\r\n    parentEl.insertBefore(errorParagraph, insertBeforeEl);\r\n    if(!!parentEl.onclick) return;\r\n    parentEl.onclick = event => {\r\n        if(event.target.tagName !== \"INPUT\" && event.target.tagName !== \"TEXTAREA\" && event.target.tagName !== \"BUTTON\") return;\r\n        let errors = document.querySelectorAll(\".default-error\");\r\n        Array.from(errors).forEach(warning => warning.remove());\r\n    };\r\n}\r\n\r\nasync function sendEmail(name, email, content) {\r\n    if(Object(_modules_utility__WEBPACK_IMPORTED_MODULE_3__[\"isBlank\"])(email) || Object(_modules_utility__WEBPACK_IMPORTED_MODULE_3__[\"isBlank\"])(content)) return false;\r\n    let body = `Nazor použivateľa: ${content}`;\r\n    if(!Object(_modules_utility__WEBPACK_IMPORTED_MODULE_3__[\"isBlank\"])(name)) {\r\n        body = `Meno použivateľa: ${name}\\n ${body}`;\r\n    }\r\n\r\n    const message = await Email.send({\r\n        Host: \"smtp.gmail.com\",\r\n        Username: \"MUST BE SPECIFIED\",\r\n        Password: \"MUST BE SPECIFIED\",\r\n        To: \"MUST BE SPECIFIED\",\r\n        From: email,\r\n        Subject: \"Použivateľský názor\",\r\n        Body: body\r\n    });\r\n\r\n    return message === \"OK\";\r\n}\n\n//# sourceURL=webpack:///./src/js/contact.js?");

/***/ }),

/***/ "./src/js/modules/GMap.js":
/*!********************************!*\
  !*** ./src/js/modules/GMap.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GMap; });\n/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @googlemaps/js-api-loader */ \"./node_modules/@googlemaps/js-api-loader/dist/index.esm.js\");\n\r\n\r\nconst apiKey = \"AIzaSyDzn8GqfC8fZdO69esWjgQk2U9ewcUriXw\";\r\n\r\nclass GMap {\r\n    constructor(center, zoom, markerIcon, container) {\r\n        this.mapDefaultSettings = {\r\n            center: center,\r\n            zoom: zoom || 12\r\n        };\r\n\r\n        this.markersData = null;\r\n        this.markerIcon = markerIcon;\r\n        this.onMapLoad = this.onMapLoad.bind(this);\r\n\r\n        this.loaded = new _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__[\"Loader\"]({\r\n            apiKey: apiKey,\r\n            version: \"weekly\",\r\n            libraries: [\"places\"]\r\n        }).load();\r\n        this.loaded.then(this.onMapLoad);\r\n\r\n        this.domElement = document.querySelector(container);\r\n    }\r\n\r\n    addInfoWindow(marker, markerData) {\r\n        if(markerData.infoWindowOptions) {\r\n            marker.addListener(\"click\", () => {\r\n                const infoWindow = new this.maps.InfoWindow(markerData.infoWindowOptions);\r\n\r\n                infoWindow.open({\r\n                    anchor: marker,\r\n                    map: this.map,\r\n                    shouldFocus: false\r\n                });\r\n            });\r\n        }\r\n    }\r\n\r\n    getLatLng(address) {\r\n        const geocoder = new this.maps.Geocoder();\r\n        return geocoder.geocode({address: address})\r\n            .then(geocoder => {\r\n                return geocoder.results[0].geometry.location\r\n            })\r\n            .catch(error => console.error(error.message));\r\n    }\r\n\r\n    getPositionFromAddress(address) {\r\n        let addressString = \"\";\r\n        for(let propName in address) {\r\n            if(!address[propName]) continue;\r\n            addressString += address[propName] + \" \";\r\n        }\r\n        return this.getLatLng(addressString);\r\n    }\r\n\r\n    getMarkersFromData() {\r\n        if(!this.markersData) return null;\r\n        return Promise.all(this.markersData.map(async markerData => {           \r\n            markerData.map = this.map;\r\n            markerData.position = markerData.address.position || await this.getPositionFromAddress(markerData.address);\r\n            markerData.address.position = markerData.position;\r\n            \r\n            markerData.icon = this.markerIcon;\r\n            const marker = new this.maps.Marker(markerData);\r\n            this.addInfoWindow(marker, markerData);\r\n            return marker;\r\n        }));\r\n    }\r\n\r\n    async initializeMap() {\r\n        let mapCenterString = this.mapDefaultSettings.center;\r\n        this.mapDefaultSettings.center = await this.getLatLng(mapCenterString);\r\n\r\n        this.setCenter(this.mapDefaultSettings.center);\r\n    }\r\n\r\n    onMapLoad(google) {\r\n        this.maps = google.maps;\r\n        this.map = new google.maps.Map(this.domElement, {\r\n            ...this.mapDefaultSettings,\r\n            center: null\r\n        });\r\n\r\n        this.initializeMap();\r\n    };\r\n\r\n    async updateMarkers(markersData) {\r\n        await this.loaded;\r\n        if(this.markers) {\r\n            let markers = await this.markers;\r\n            markers.forEach(marker => {\r\n                marker.setMap(null);\r\n            });\r\n        }\r\n\r\n        this.markersData = markersData;\r\n        this.markers = this.getMarkersFromData();\r\n    }\r\n\r\n    setCenter(coordinates) {\r\n        this.map.setCenter(coordinates);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/modules/GMap.js?");

/***/ }),

/***/ "./src/js/modules/getDocumentLang.js":
/*!*******************************************!*\
  !*** ./src/js/modules/getDocumentLang.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getDocumentLang; });\nfunction getDocumentLang() {\r\n    return document.querySelector(\"html\").lang;\r\n}\n\n//# sourceURL=webpack:///./src/js/modules/getDocumentLang.js?");

/***/ }),

/***/ "./src/js/modules/popup.js":
/*!*********************************!*\
  !*** ./src/js/modules/popup.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Popup; });\nfunction Popup(content) {\r\n    this.content = content;\r\n}\r\n\r\nPopup.prototype.getBody = function() {\r\n    let popupContainer = document.createElement(\"div\");\r\n    popupContainer.classList.add(\"default-popup-container\");\r\n    popupContainer.innerHTML = `\r\n        <div class=\"default-popup\">\r\n            ${this.content}\r\n            <button class=\"close-popup\">\r\n                <span></span><span></span>\r\n            </button>\r\n        </div>      \r\n    `;\r\n\r\n    return popupContainer;\r\n};\r\n\r\nPopup.prototype.render = function(parentEl) {\r\n    if(localStorage.popupShowed === undefined) {\r\n        localStorage.popupShowed = false;\r\n    }\r\n\r\n    let popupShowed = localStorage.popupShowed === \"true\";\r\n\r\n    //if(!popupShowed) {\r\n        let newBody = this.getBody();\r\n        parentEl.appendChild(newBody);\r\n        \r\n        let closePopup = document.querySelector(\".close-popup\");\r\n        closePopup.addEventListener(\"click\", () => {\r\n            newBody.remove();\r\n            localStorage.popupShowed = true;\r\n        });\r\n    //}\r\n};\r\n\r\nPopup.prototype.setContent = function(content) {\r\n    this.content = content;\r\n}\n\n//# sourceURL=webpack:///./src/js/modules/popup.js?");

/***/ }),

/***/ "./src/js/modules/utility.js":
/*!***********************************!*\
  !*** ./src/js/modules/utility.js ***!
  \***********************************/
/*! exports provided: isBlank, validateEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isBlank\", function() { return isBlank; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateEmail\", function() { return validateEmail; });\nfunction isBlank(str) {\r\n    return (!str || /^\\s*$/.test(str));\r\n}\r\n\r\nfunction validateEmail(email) {\r\n    const emailRegex = /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\r\n    return emailRegex.test(String(email).toLowerCase());\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/modules/utility.js?");

/***/ })

/******/ });