(function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
        module.exports = factory(require("echarts"));
    else if(typeof define === 'function' && define.amd)
        define(["echarts"], factory);
    else if(typeof exports === 'object')
        exports["echarts-gl"] = factory(require("echarts"));
    else
        root["echarts-gl"] = factory(root["echarts"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
    return /******/ (function(modules) { // webpackBootstrap
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
                /******/ 			Object.defineProperty(exports, name, {
                    /******/ 				configurable: false,
                    /******/ 				enumerable: true,
                    /******/ 				get: getter
                    /******/ 			});
                /******/ 		}
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
        /******/ 	// Load entry module and return exports
        /******/ 	return __webpack_require__(__webpack_require__.s = 106);
        /******/ })
    /************************************************************************/
    /******/ ([
        /* 0 */
        /***/ (function(module, exports) {

            module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

            /***/ }),
        /* 1 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_claygl_src_Mesh__ = __webpack_require__(40);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_claygl_src_Renderer__ = __webpack_require__(52);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_claygl_src_Texture2D__ = __webpack_require__(5);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_claygl_src_Texture__ = __webpack_require__(4);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_claygl_src_Shader__ = __webpack_require__(8);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_claygl_src_Material__ = __webpack_require__(19);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_claygl_src_Node__ = __webpack_require__(35);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_claygl_src_Geometry__ = __webpack_require__(15);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_echarts_lib_echarts__ = __webpack_require__(0);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_echarts_lib_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_echarts_lib_echarts__);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_claygl_src_Scene__ = __webpack_require__(36);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_zrender_lib_core_LRU__ = __webpack_require__(60);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_zrender_lib_core_LRU___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_zrender_lib_core_LRU__);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_claygl_src_util_texture__ = __webpack_require__(61);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__EChartsSurface__ = __webpack_require__(124);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_claygl_src_light_AmbientCubemap__ = __webpack_require__(125);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_claygl_src_light_AmbientSH__ = __webpack_require__(129);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_claygl_src_util_sh__ = __webpack_require__(130);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__retrieve__ = __webpack_require__(2);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_claygl_src_geometry_Sphere__ = __webpack_require__(132);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_claygl_src_geometry_Plane__ = __webpack_require__(43);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_claygl_src_geometry_Cube__ = __webpack_require__(76);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_claygl_src_light_Ambient__ = __webpack_require__(133);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_claygl_src_light_Directional__ = __webpack_require__(134);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_claygl_src_light_Point__ = __webpack_require__(135);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_claygl_src_light_Spot__ = __webpack_require__(136);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_claygl_src_camera_Perspective__ = __webpack_require__(41);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_claygl_src_camera_Orthographic__ = __webpack_require__(37);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_claygl_src_math_Vector2__ = __webpack_require__(26);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_claygl_src_math_Vector3__ = __webpack_require__(3);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_claygl_src_math_Vector4__ = __webpack_require__(137);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_claygl_src_math_Quaternion__ = __webpack_require__(56);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_claygl_src_math_Matrix2__ = __webpack_require__(138);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_claygl_src_math_Matrix2d__ = __webpack_require__(139);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_claygl_src_math_Matrix3__ = __webpack_require__(140);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_claygl_src_math_Matrix4__ = __webpack_require__(9);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_claygl_src_math_Plane__ = __webpack_require__(74);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_claygl_src_math_Ray__ = __webpack_require__(54);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_claygl_src_math_BoundingBox__ = __webpack_require__(18);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_claygl_src_math_Frustum__ = __webpack_require__(59);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__animatableMixin__ = __webpack_require__(141);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_claygl_src_shader_source_util_glsl_js__ = __webpack_require__(146);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_claygl_src_shader_source_prez_glsl_js__ = __webpack_require__(71);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__shader_common_glsl_js__ = __webpack_require__(147);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__shader_color_glsl_js__ = __webpack_require__(148);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__shader_lambert_glsl_js__ = __webpack_require__(149);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__shader_realistic_glsl_js__ = __webpack_require__(150);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__shader_hatching_glsl_js__ = __webpack_require__(151);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__shader_shadow_glsl_js__ = __webpack_require__(152);






























// Math

















// Some common shaders










            __WEBPACK_IMPORTED_MODULE_8_echarts_lib_echarts___default.a.util.extend(__WEBPACK_IMPORTED_MODULE_6_claygl_src_Node__["a" /* default */].prototype, __WEBPACK_IMPORTED_MODULE_38__animatableMixin__["a" /* default */]);

            __WEBPACK_IMPORTED_MODULE_4_claygl_src_Shader__["a" /* default */].import(__WEBPACK_IMPORTED_MODULE_39_claygl_src_shader_source_util_glsl_js__["a" /* default */]);
            __WEBPACK_IMPORTED_MODULE_4_claygl_src_Shader__["a" /* default */].import(__WEBPACK_IMPORTED_MODULE_40_claygl_src_shader_source_prez_glsl_js__["a" /* default */]);
            __WEBPACK_IMPORTED_MODULE_4_claygl_src_Shader__["a" /* default */].import(__WEBPACK_IMPORTED_MODULE_41__shader_common_glsl_js__["a" /* default */]);
            __WEBPACK_IMPORTED_MODULE_4_claygl_src_Shader__["a" /* default */].import(__WEBPACK_IMPORTED_MODULE_42__shader_color_glsl_js__["a" /* default */]);
            __WEBPACK_IMPORTED_MODULE_4_claygl_src_Shader__["a" /* default */].import(__WEBPACK_IMPORTED_MODULE_43__shader_lambert_glsl_js__["a" /* default */]);
            __WEBPACK_IMPORTED_MODULE_4_claygl_src_Shader__["a" /* default */].import(__WEBPACK_IMPORTED_MODULE_44__shader_realistic_glsl_js__["a" /* default */]);
            __WEBPACK_IMPORTED_MODULE_4_claygl_src_Shader__["a" /* default */].import(__WEBPACK_IMPORTED_MODULE_45__shader_hatching_glsl_js__["a" /* default */]);
            __WEBPACK_IMPORTED_MODULE_4_claygl_src_Shader__["a" /* default */].import(__WEBPACK_IMPORTED_MODULE_46__shader_shadow_glsl_js__["a" /* default */]);

            function isValueNone(value) {
                return !value || value === 'none';
            }

            function isValueImage(value) {
                return value instanceof HTMLCanvasElement
                    || value instanceof HTMLImageElement
                    || value instanceof Image;
            }

            function isECharts(value) {
                return value.getZr && value.setOption;
            }

// Overwrite addToScene and removeFromScene
            var oldAddToScene = __WEBPACK_IMPORTED_MODULE_9_claygl_src_Scene__["a" /* default */].prototype.addToScene;
            var oldRemoveFromScene = __WEBPACK_IMPORTED_MODULE_9_claygl_src_Scene__["a" /* default */].prototype.removeFromScene;

            __WEBPACK_IMPORTED_MODULE_9_claygl_src_Scene__["a" /* default */].prototype.addToScene = function (node) {
                oldAddToScene.call(this, node);

                if (this.__zr) {
                    var zr = this.__zr;
                    node.traverse(function (child) {
                        child.__zr = zr;
                        if (child.addAnimatorsToZr) {
                            child.addAnimatorsToZr(zr);
                        }
                    });
                }
            };

            __WEBPACK_IMPORTED_MODULE_9_claygl_src_Scene__["a" /* default */].prototype.removeFromScene = function (node) {
                oldRemoveFromScene.call(this, node);

                node.traverse(function (child) {
                    var zr = child.__zr;
                    child.__zr = null;
                    if (zr && child.removeAnimatorsFromZr) {
                        child.removeAnimatorsFromZr(zr);
                    }
                });
            };

            /**
             * @param {string} textureName
             * @param {string|HTMLImageElement|HTMLCanvasElement} imgValue
             * @param {module:echarts/ExtensionAPI} api
             * @param {Object} [textureOpts]
             */
            __WEBPACK_IMPORTED_MODULE_5_claygl_src_Material__["a" /* default */].prototype.setTextureImage = function (textureName, imgValue, api, textureOpts) {
                if (!this.shader) {
                    return;
                }

                var zr = api.getZr();
                var material = this;
                var texture;
                material.autoUpdateTextureStatus = false;
                // disableTexture first
                material.disableTexture(textureName);
                if (!isValueNone(imgValue)) {
                    texture = graphicGL.loadTexture(imgValue, api, textureOpts, function (texture) {
                        material.enableTexture(textureName);
                        zr && zr.refresh();
                    });
                    // Set texture immediately for other code to verify if have this texture.
                    material.set(textureName, texture);
                }

                return texture;
            };

            var graphicGL = {};

            graphicGL.Renderer = __WEBPACK_IMPORTED_MODULE_1_claygl_src_Renderer__["a" /* default */];

            graphicGL.Node = __WEBPACK_IMPORTED_MODULE_6_claygl_src_Node__["a" /* default */];

            graphicGL.Mesh = __WEBPACK_IMPORTED_MODULE_0_claygl_src_Mesh__["a" /* default */];

            graphicGL.Shader = __WEBPACK_IMPORTED_MODULE_4_claygl_src_Shader__["a" /* default */];

            graphicGL.Material = __WEBPACK_IMPORTED_MODULE_5_claygl_src_Material__["a" /* default */];

            graphicGL.Texture = __WEBPACK_IMPORTED_MODULE_3_claygl_src_Texture__["a" /* default */];

            graphicGL.Texture2D = __WEBPACK_IMPORTED_MODULE_2_claygl_src_Texture2D__["a" /* default */];

// Geometries
            graphicGL.Geometry = __WEBPACK_IMPORTED_MODULE_7_claygl_src_Geometry__["a" /* default */];
            graphicGL.SphereGeometry = __WEBPACK_IMPORTED_MODULE_17_claygl_src_geometry_Sphere__["a" /* default */];
            graphicGL.PlaneGeometry = __WEBPACK_IMPORTED_MODULE_18_claygl_src_geometry_Plane__["a" /* default */];
            graphicGL.CubeGeometry = __WEBPACK_IMPORTED_MODULE_19_claygl_src_geometry_Cube__["a" /* default */];

// Lights
            graphicGL.AmbientLight = __WEBPACK_IMPORTED_MODULE_20_claygl_src_light_Ambient__["a" /* default */];
            graphicGL.DirectionalLight = __WEBPACK_IMPORTED_MODULE_21_claygl_src_light_Directional__["a" /* default */];
            graphicGL.PointLight = __WEBPACK_IMPORTED_MODULE_22_claygl_src_light_Point__["a" /* default */];
            graphicGL.SpotLight = __WEBPACK_IMPORTED_MODULE_23_claygl_src_light_Spot__["a" /* default */];

// Cameras
            graphicGL.PerspectiveCamera = __WEBPACK_IMPORTED_MODULE_24_claygl_src_camera_Perspective__["a" /* default */];
            graphicGL.OrthographicCamera = __WEBPACK_IMPORTED_MODULE_25_claygl_src_camera_Orthographic__["a" /* default */];

// Math
            graphicGL.Vector2 = __WEBPACK_IMPORTED_MODULE_26_claygl_src_math_Vector2__["a" /* default */];
            graphicGL.Vector3 = __WEBPACK_IMPORTED_MODULE_27_claygl_src_math_Vector3__["a" /* default */];
            graphicGL.Vector4 = __WEBPACK_IMPORTED_MODULE_28_claygl_src_math_Vector4__["a" /* default */];

            graphicGL.Quaternion = __WEBPACK_IMPORTED_MODULE_29_claygl_src_math_Quaternion__["a" /* default */];

            graphicGL.Matrix2 = __WEBPACK_IMPORTED_MODULE_30_claygl_src_math_Matrix2__["a" /* default */];
            graphicGL.Matrix2d = __WEBPACK_IMPORTED_MODULE_31_claygl_src_math_Matrix2d__["a" /* default */];
            graphicGL.Matrix3 = __WEBPACK_IMPORTED_MODULE_32_claygl_src_math_Matrix3__["a" /* default */];
            graphicGL.Matrix4 = __WEBPACK_IMPORTED_MODULE_33_claygl_src_math_Matrix4__["a" /* default */];

            graphicGL.Plane = __WEBPACK_IMPORTED_MODULE_34_claygl_src_math_Plane__["a" /* default */];
            graphicGL.Ray = __WEBPACK_IMPORTED_MODULE_35_claygl_src_math_Ray__["a" /* default */];
            graphicGL.BoundingBox = __WEBPACK_IMPORTED_MODULE_36_claygl_src_math_BoundingBox__["a" /* default */];
            graphicGL.Frustum = __WEBPACK_IMPORTED_MODULE_37_claygl_src_math_Frustum__["a" /* default */];

// Texture utilities

            var blankImage = __WEBPACK_IMPORTED_MODULE_11_claygl_src_util_texture__["a" /* default */].createBlank('rgba(255,255,255,0)').image;


            function nearestPowerOfTwo(val) {
                return Math.pow(2, Math.round(Math.log(val) / Math.LN2));
            }
            function convertTextureToPowerOfTwo(texture) {
                if ((texture.wrapS === __WEBPACK_IMPORTED_MODULE_3_claygl_src_Texture__["a" /* default */].REPEAT || texture.wrapT === __WEBPACK_IMPORTED_MODULE_3_claygl_src_Texture__["a" /* default */].REPEAT)
                    && texture.image
                ) {
                    // var canvas = document.createElement('canvas');
                    var width = nearestPowerOfTwo(texture.width);
                    var height = nearestPowerOfTwo(texture.height);
                    if (width !== texture.width || height !== texture.height) {
                        var canvas = document.createElement('canvas');
                        canvas.width = width;
                        canvas.height = height;
                        var ctx = canvas.getContext('2d');
                        ctx.drawImage(texture.image, 0, 0, width, height);
                        texture.image = canvas;
                    }
                }
            }
            /**
             * @param {string|HTMLImageElement|HTMLCanvasElement} imgValue
             * @param {module:echarts/ExtensionAPI} api
             * @param {Object} [textureOpts]
             * @param {Function} cb
             */
// TODO Promise, test
            graphicGL.loadTexture = function (imgValue, api, textureOpts, cb) {
                if (typeof textureOpts === 'function') {
                    cb = textureOpts;
                    textureOpts = {};
                }
                textureOpts = textureOpts || {};

                var keys = Object.keys(textureOpts).sort();
                var prefix = '';
                for (var i = 0; i < keys.length; i++) {
                    prefix += keys[i] + '_' + textureOpts[keys[i]] + '_';
                }

                var textureCache = api.__textureCache = api.__textureCache || new __WEBPACK_IMPORTED_MODULE_10_zrender_lib_core_LRU___default.a(20);

                if (isECharts(imgValue)) {
                    var id = imgValue.__textureid__;
                    var textureObj = textureCache.get(prefix + id);
                    if (!textureObj) {
                        var surface = new __WEBPACK_IMPORTED_MODULE_12__EChartsSurface__["a" /* default */](imgValue);
                        surface.onupdate = function () {
                            api.getZr().refresh();
                        };
                        textureObj = {
                            texture: surface.getTexture()
                        };
                        for (var i = 0; i < keys.length; i++) {
                            textureObj.texture[keys[i]] = textureOpts[keys[i]];
                        }
                        id = imgValue.__textureid__ || '__ecgl_ec__' + textureObj.texture.__uid__;
                        imgValue.__textureid__ = id;
                        textureCache.put(prefix + id, textureObj);
                        cb && cb(textureObj.texture);
                    }
                    else {
                        textureObj.texture.surface.setECharts(imgValue);

                        cb && cb(textureObj.texture);
                    }
                    return textureObj.texture;
                }
                else if (isValueImage(imgValue)) {
                    var id = imgValue.__textureid__;
                    var textureObj = textureCache.get(prefix + id);
                    if (!textureObj) {
                        textureObj = {
                            texture: new graphicGL.Texture2D({
                                image: imgValue
                            })
                        };
                        for (var i = 0; i < keys.length; i++) {
                            textureObj.texture[keys[i]] = textureOpts[keys[i]];
                        }
                        id = imgValue.__textureid__ || '__ecgl_image__' + textureObj.texture.__uid__;
                        imgValue.__textureid__ = id;
                        textureCache.put(prefix + id, textureObj);

                        convertTextureToPowerOfTwo(textureObj.texture);
                        // TODO Next tick?
                        cb && cb(textureObj.texture);
                    }
                    return textureObj.texture;
                }
                else {
                    var textureObj = textureCache.get(prefix + imgValue);
                    if (textureObj) {
                        if (textureObj.callbacks) {
                            // Add to pending callbacks
                            textureObj.callbacks.push(cb);
                        }
                        else {
                            // TODO Next tick?
                            cb && cb(textureObj.texture);
                        }
                    }
                    else {
                        // Maybe base64
                        if (imgValue.match(/.hdr$|^data:application\/octet-stream/)) {
                            textureObj = {
                                callbacks: [cb]
                            };
                            var texture = __WEBPACK_IMPORTED_MODULE_11_claygl_src_util_texture__["a" /* default */].loadTexture(imgValue, {
                                exposure: textureOpts.exposure,
                                fileType: 'hdr'
                            }, function () {
                                texture.dirty();
                                textureObj.callbacks.forEach(function (cb) {
                                    cb && cb(texture);
                                });
                                textureObj.callbacks = null;
                            });
                            textureObj.texture = texture;
                            textureCache.put(prefix + imgValue, textureObj);
                        }
                        else {
                            var texture = new graphicGL.Texture2D({
                                image: new Image()
                            });
                            for (var i = 0; i < keys.length; i++) {
                                texture[keys[i]] = textureOpts[keys[i]];
                            }

                            textureObj = {
                                texture: texture,
                                callbacks: [cb]
                            };
                            var originalImage = texture.image;
                            originalImage.onload = function () {
                                texture.image = originalImage;
                                convertTextureToPowerOfTwo(texture);

                                texture.dirty();
                                textureObj.callbacks.forEach(function (cb) {
                                    cb && cb(texture);
                                });
                                textureObj.callbacks = null;
                            };
                            originalImage.src = imgValue;
                            // Use blank image as place holder.
                            texture.image = blankImage;

                            textureCache.put(prefix + imgValue, textureObj);
                        }
                    }

                    return textureObj.texture;
                }
            };

            /**
             * Create ambientCubemap and ambientSH light. respectively to have specular and diffuse light
             * @return {Object} { specular, diffuse }
             */
            graphicGL.createAmbientCubemap = function (opt, renderer, api, cb) {
                opt = opt || {};
                var textureUrl = opt.texture;
                var exposure = __WEBPACK_IMPORTED_MODULE_16__retrieve__["a" /* default */].firstNotNull(opt.exposure, 1.0);

                var ambientCubemap = new __WEBPACK_IMPORTED_MODULE_13_claygl_src_light_AmbientCubemap__["a" /* default */]({
                    intensity: __WEBPACK_IMPORTED_MODULE_16__retrieve__["a" /* default */].firstNotNull(opt.specularIntensity, 1.0)
                });
                var ambientSH = new __WEBPACK_IMPORTED_MODULE_14_claygl_src_light_AmbientSH__["a" /* default */]({
                    intensity: __WEBPACK_IMPORTED_MODULE_16__retrieve__["a" /* default */].firstNotNull(opt.diffuseIntensity, 1.0),
                    coefficients: [0.844, 0.712, 0.691, -0.037, 0.083, 0.167, 0.343, 0.288, 0.299, -0.041, -0.021, -0.009, -0.003, -0.041, -0.064, -0.011, -0.007, -0.004, -0.031, 0.034, 0.081, -0.060, -0.049, -0.060, 0.046, 0.056, 0.050]
                });


                ambientCubemap.cubemap = graphicGL.loadTexture(textureUrl, api, {
                    exposure: exposure
                }, function () {
                    // TODO Performance when multiple view
                    ambientCubemap.cubemap.flipY = false;
                    if (true) {
                        var time = Date.now();
                    }
                    ambientCubemap.prefilter(renderer, 32);
                    if (true) {
                        var dTime = Date.now() - time;
                        console.log('Prefilter environment map: ' + dTime + 'ms');
                    }
                    ambientSH.coefficients = __WEBPACK_IMPORTED_MODULE_15_claygl_src_util_sh__["a" /* default */].projectEnvironmentMap(renderer, ambientCubemap.cubemap, {
                        lod: 1
                    });

                    cb && cb();

                    // TODO Refresh ?
                });

                return {
                    specular: ambientCubemap,
                    diffuse: ambientSH
                };
            };

            /**
             * Create a blank texture for placeholder
             */
            graphicGL.createBlankTexture = __WEBPACK_IMPORTED_MODULE_11_claygl_src_util_texture__["a" /* default */].createBlank;

            /**
             * If value is image
             * @param {*}
             * @return {boolean}
             */
            graphicGL.isImage = isValueImage;

            graphicGL.additiveBlend = function (gl) {
                gl.blendEquation(gl.FUNC_ADD);
                gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
            };

            /**
             * @param {string|Array.<number>} colorStr
             * @param {Array.<number>} [rgba]
             * @return {Array.<number>} rgba
             */
            graphicGL.parseColor = function (colorStr, rgba) {
                if (colorStr instanceof Array) {
                    if (!rgba) {
                        rgba = [];
                    }
                    // Color has been parsed.
                    rgba[0] = colorStr[0];
                    rgba[1] = colorStr[1];
                    rgba[2] = colorStr[2];
                    if (colorStr.length > 3) {
                        rgba[3] = colorStr[3];
                    }
                    else {
                        rgba[3] = 1;
                    }
                    return rgba;
                }

                rgba = __WEBPACK_IMPORTED_MODULE_8_echarts_lib_echarts___default.a.color.parse(colorStr || '#000', rgba) || [0, 0, 0, 0];
                rgba[0] /= 255;
                rgba[1] /= 255;
                rgba[2] /= 255;
                return rgba;
            };

            /**
             * Convert alpha beta rotation to direction.
             * @param {number} alpha
             * @param {number} beta
             * @return {Array.<number>}
             */
            graphicGL.directionFromAlphaBeta = function (alpha, beta) {
                var theta = alpha / 180 * Math.PI + Math.PI / 2;
                var phi = -beta / 180 * Math.PI + Math.PI / 2;

                var dir = [];
                var r = Math.sin(theta);
                dir[0] = r * Math.cos(phi);
                dir[1] = -Math.cos(theta);
                dir[2] = r * Math.sin(phi);

                return dir;
            };
            /**
             * Get shadow resolution from shadowQuality configuration
             */
            graphicGL.getShadowResolution = function (shadowQuality) {
                var shadowResolution = 1024;
                switch (shadowQuality) {
                    case 'low':
                        shadowResolution = 512;
                        break;
                    case 'medium':
                        break;
                    case 'high':
                        shadowResolution = 2048;
                        break;
                    case 'ultra':
                        shadowResolution = 4096;
                        break;
                }
                return shadowResolution;
            };

            /**
             * Shading utilities
             */
            graphicGL.COMMON_SHADERS = ['lambert', 'color', 'realistic', 'hatching'];

            /**
             * Create shader including vertex and fragment
             * @param {string} prefix.
             */
            graphicGL.createShader = function (prefix) {
                var vertexShaderStr = __WEBPACK_IMPORTED_MODULE_4_claygl_src_Shader__["a" /* default */].source(prefix + '.vertex');
                var fragmentShaderStr = __WEBPACK_IMPORTED_MODULE_4_claygl_src_Shader__["a" /* default */].source(prefix + '.fragment');
                if (!vertexShaderStr) {
                    console.error('Vertex shader of \'%s\' not exits', prefix);
                }
                if (!fragmentShaderStr) {
                    console.error('Fragment shader of \'%s\' not exits', prefix);
                }
                var shader = new __WEBPACK_IMPORTED_MODULE_4_claygl_src_Shader__["a" /* default */](vertexShaderStr, fragmentShaderStr);
                shader.name = prefix;
                return shader;
            };

            graphicGL.createMaterial = function (prefix, defines) {
                if (!(defines instanceof Array)) {
                    defines = [defines];
                }
                var shader = graphicGL.createShader(prefix);
                var material = new __WEBPACK_IMPORTED_MODULE_5_claygl_src_Material__["a" /* default */]({
                    shader: shader
                });
                defines.forEach(function (defineName) {
                    if (typeof defineName === 'string') {
                        material.define(defineName);
                    }
                });
                return material;
            };
            /**
             * Set material from model.
             * @param {clay.Material} material
             * @param {module:echarts/model/Model} model
             * @param {module:echarts/ExtensionAPI} api
             */
            graphicGL.setMaterialFromModel = function (shading, material, model, api) {
                material.autoUpdateTextureStatus = false;

                var materialModel = model.getModel(shading + 'Material');
                var detailTexture = materialModel.get('detailTexture');
                var uvRepeat = __WEBPACK_IMPORTED_MODULE_16__retrieve__["a" /* default */].firstNotNull(materialModel.get('textureTiling'), 1.0);
                var uvOffset = __WEBPACK_IMPORTED_MODULE_16__retrieve__["a" /* default */].firstNotNull(materialModel.get('textureOffset'), 0.0);
                if (typeof uvRepeat === 'number') {
                    uvRepeat = [uvRepeat, uvRepeat];
                }
                if (typeof uvOffset === 'number') {
                    uvOffset = [uvOffset, uvOffset];
                }
                var repeatParam = (uvRepeat[0] > 1 || uvRepeat[1] > 1) ? graphicGL.Texture.REPEAT : graphicGL.Texture.CLAMP_TO_EDGE;
                var textureOpt = {
                    anisotropic: 8,
                    wrapS: repeatParam,
                    wrapT: repeatParam
                };
                if (shading === 'realistic') {
                    var roughness = materialModel.get('roughness');
                    var metalness = materialModel.get('metalness');
                    if (metalness != null) {
                        // Try to treat as a texture, TODO More check
                        if (isNaN(metalness)) {
                            material.setTextureImage('metalnessMap', metalness, api, textureOpt);
                            metalness = __WEBPACK_IMPORTED_MODULE_16__retrieve__["a" /* default */].firstNotNull(materialModel.get('metalnessAdjust'), 0.5);
                        }
                    }
                    else {
                        // Default metalness.
                        metalness = 0;
                    }
                    if (roughness != null) {
                        // Try to treat as a texture, TODO More check
                        if (isNaN(roughness)) {
                            material.setTextureImage('roughnessMap', roughness, api, textureOpt);
                            roughness = __WEBPACK_IMPORTED_MODULE_16__retrieve__["a" /* default */].firstNotNull(materialModel.get('roughnessAdjust'), 0.5);
                        }
                    }
                    else {
                        // Default roughness.
                        roughness = 0.5;
                    }
                    var normalTextureVal = materialModel.get('normalTexture');
                    material.setTextureImage('detailMap', detailTexture, api, textureOpt);
                    material.setTextureImage('normalMap', normalTextureVal, api, textureOpt);
                    material.set({
                        roughness: roughness,
                        metalness: metalness,
                        detailUvRepeat: uvRepeat,
                        detailUvOffset: uvOffset
                    });
                    // var normalTexture = material.get('normalMap');
                    // if (normalTexture) {
                    // PENDING
                    // normalTexture.format = Texture.SRGB;
                    // }
                }
                else if (shading === 'lambert') {
                    material.setTextureImage('detailMap', detailTexture, api, textureOpt);
                    material.set({
                        detailUvRepeat: uvRepeat,
                        detailUvOffset: uvOffset
                    });
                }
                else if (shading === 'color') {
                    material.setTextureImage('detailMap', detailTexture, api, textureOpt);
                    material.set({
                        detailUvRepeat: uvRepeat,
                        detailUvOffset: uvOffset
                    });
                }
                else if (shading === 'hatching') {
                    var tams = materialModel.get('hatchingTextures') || [];
                    if (tams.length < 6) {
                        if (true) {
                            console.error('Invalid hatchingTextures.');
                        }
                    }
                    for (var i = 0; i < 6; i++) {
                        material.setTextureImage('hatch' + (i + 1), tams[i], api, {
                            anisotropic: 8,
                            wrapS: graphicGL.Texture.REPEAT,
                            wrapT: graphicGL.Texture.REPEAT
                        });
                    }
                    material.set({
                        detailUvRepeat: uvRepeat,
                        detailUvOffset: uvOffset
                    });
                }
            };

            graphicGL.updateVertexAnimation = function (
                mappingAttributes, previousMesh, currentMesh, seriesModel
            ) {
                var enableAnimation = seriesModel.get('animation');
                var duration = seriesModel.get('animationDurationUpdate');
                var easing = seriesModel.get('animationEasingUpdate');
                var shadowDepthMaterial = currentMesh.shadowDepthMaterial;

                if (enableAnimation && previousMesh && duration > 0
                    // Only animate when bar count are not changed
                    && previousMesh.geometry.vertexCount === currentMesh.geometry.vertexCount
                ) {
                    currentMesh.material.define('vertex', 'VERTEX_ANIMATION');
                    currentMesh.ignorePreZ = true;
                    if (shadowDepthMaterial) {
                        shadowDepthMaterial.define('vertex', 'VERTEX_ANIMATION');
                    }
                    for (var i = 0; i < mappingAttributes.length; i++) {
                        currentMesh.geometry.attributes[mappingAttributes[i][0]].value =
                            previousMesh.geometry.attributes[mappingAttributes[i][1]].value;
                    }
                    currentMesh.geometry.dirty();
                    currentMesh.__percent = 0;
                    currentMesh.material.set('percent', 0);
                    currentMesh.stopAnimation();
                    currentMesh.animate()
                        .when(duration, {
                            __percent: 1
                        })
                        .during(function () {
                            currentMesh.material.set('percent', currentMesh.__percent);
                            if (shadowDepthMaterial) {
                                shadowDepthMaterial.set('percent', currentMesh.__percent);
                            }
                        })
                        .done(function () {
                            currentMesh.ignorePreZ = false;
                            currentMesh.material.undefine('vertex', 'VERTEX_ANIMATION');
                            if (shadowDepthMaterial) {
                                shadowDepthMaterial.undefine('vertex', 'VERTEX_ANIMATION');
                            }
                        })
                        .start(easing);
                }
                else {
                    currentMesh.material.undefine('vertex', 'VERTEX_ANIMATION');
                    if (shadowDepthMaterial) {
                        shadowDepthMaterial.undefine('vertex', 'VERTEX_ANIMATION');
                    }
                }
            };

            /* harmony default export */ __webpack_exports__["a"] = (graphicGL);

            /***/ }),
        /* 2 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts__ = __webpack_require__(0);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts__);


            var retrieve = {

                firstNotNull: function () {
                    for (var i = 0, len = arguments.length; i < len; i++) {
                        if (arguments[i] != null) {
                            return arguments[i];
                        }
                    }
                },

                /**
                 * @param {module:echarts/data/List} data
                 * @param {Object} payload Contains dataIndex (means rawIndex) / dataIndexInside / name
                 *                         each of which can be Array or primary type.
                 * @return {number|Array.<number>} dataIndex If not found, return undefined/null.
                 */
                queryDataIndex: function (data, payload) {
                    if (payload.dataIndexInside != null) {
                        return payload.dataIndexInside;
                    }
                    else if (payload.dataIndex != null) {
                        return __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.util.isArray(payload.dataIndex)
                            ? __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.util.map(payload.dataIndex, function (value) {
                                return data.indexOfRawIndex(value);
                            })
                            : data.indexOfRawIndex(payload.dataIndex);
                    }
                    else if (payload.name != null) {
                        return __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.util.isArray(payload.name)
                            ? __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.util.map(payload.name, function (value) {
                                return data.indexOfName(value);
                            })
                            : data.indexOfName(payload.name);
                    }
                }
            };

            /* harmony default export */ __webpack_exports__["a"] = (retrieve);

            /***/ }),
        /* 3 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__ = __webpack_require__(12);


            /**
             * @constructor
             * @alias clay.Vector3
             * @param {number} x
             * @param {number} y
             * @param {number} z
             */
            var Vector3 = function(x, y, z) {

                x = x || 0;
                y = y || 0;
                z = z || 0;

                /**
                 * Storage of Vector3, read and write of x, y, z will change the values in array
                 * All methods also operate on the array instead of x, y, z components
                 * @name array
                 * @type {Float32Array}
                 * @memberOf clay.Vector3#
                 */
                this.array = __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].fromValues(x, y, z);

                /**
                 * Dirty flag is used by the Node to determine
                 * if the matrix is updated to latest
                 * @name _dirty
                 * @type {boolean}
                 * @memberOf clay.Vector3#
                 */
                this._dirty = true;
            };

            Vector3.prototype = {

                constructor: Vector3,

                /**
                 * Add b to self
                 * @param  {clay.Vector3} b
                 * @return {clay.Vector3}
                 */
                add: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].add(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Set x, y and z components
                 * @param  {number}  x
                 * @param  {number}  y
                 * @param  {number}  z
                 * @return {clay.Vector3}
                 */
                set: function (x, y, z) {
                    this.array[0] = x;
                    this.array[1] = y;
                    this.array[2] = z;
                    this._dirty = true;
                    return this;
                },

                /**
                 * Set x, y and z components from array
                 * @param  {Float32Array|number[]} arr
                 * @return {clay.Vector3}
                 */
                setArray: function (arr) {
                    this.array[0] = arr[0];
                    this.array[1] = arr[1];
                    this.array[2] = arr[2];

                    this._dirty = true;
                    return this;
                },

                /**
                 * Clone a new Vector3
                 * @return {clay.Vector3}
                 */
                clone: function () {
                    return new Vector3(this.x, this.y, this.z);
                },

                /**
                 * Copy from b
                 * @param  {clay.Vector3} b
                 * @return {clay.Vector3}
                 */
                copy: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].copy(this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Cross product of self and b, written to a Vector3 out
                 * @param  {clay.Vector3} a
                 * @param  {clay.Vector3} b
                 * @return {clay.Vector3}
                 */
                cross: function (a, b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].cross(this.array, a.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Alias for distance
                 * @param  {clay.Vector3} b
                 * @return {number}
                 */
                dist: function (b) {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].dist(this.array, b.array);
                },

                /**
                 * Distance between self and b
                 * @param  {clay.Vector3} b
                 * @return {number}
                 */
                distance: function (b) {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].distance(this.array, b.array);
                },

                /**
                 * Alias for divide
                 * @param  {clay.Vector3} b
                 * @return {clay.Vector3}
                 */
                div: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].div(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Divide self by b
                 * @param  {clay.Vector3} b
                 * @return {clay.Vector3}
                 */
                divide: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].divide(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Dot product of self and b
                 * @param  {clay.Vector3} b
                 * @return {number}
                 */
                dot: function (b) {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].dot(this.array, b.array);
                },

                /**
                 * Alias of length
                 * @return {number}
                 */
                len: function () {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].len(this.array);
                },

                /**
                 * Calculate the length
                 * @return {number}
                 */
                length: function () {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].length(this.array);
                },
                /**
                 * Linear interpolation between a and b
                 * @param  {clay.Vector3} a
                 * @param  {clay.Vector3} b
                 * @param  {number}  t
                 * @return {clay.Vector3}
                 */
                lerp: function (a, b, t) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].lerp(this.array, a.array, b.array, t);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Minimum of self and b
                 * @param  {clay.Vector3} b
                 * @return {clay.Vector3}
                 */
                min: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].min(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Maximum of self and b
                 * @param  {clay.Vector3} b
                 * @return {clay.Vector3}
                 */
                max: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].max(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Alias for multiply
                 * @param  {clay.Vector3} b
                 * @return {clay.Vector3}
                 */
                mul: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].mul(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Mutiply self and b
                 * @param  {clay.Vector3} b
                 * @return {clay.Vector3}
                 */
                multiply: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].multiply(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Negate self
                 * @return {clay.Vector3}
                 */
                negate: function () {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].negate(this.array, this.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Normalize self
                 * @return {clay.Vector3}
                 */
                normalize: function () {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].normalize(this.array, this.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Generate random x, y, z components with a given scale
                 * @param  {number} scale
                 * @return {clay.Vector3}
                 */
                random: function (scale) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].random(this.array, scale);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Scale self
                 * @param  {number}  scale
                 * @return {clay.Vector3}
                 */
                scale: function (s) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].scale(this.array, this.array, s);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Scale b and add to self
                 * @param  {clay.Vector3} b
                 * @param  {number}  scale
                 * @return {clay.Vector3}
                 */
                scaleAndAdd: function (b, s) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].scaleAndAdd(this.array, this.array, b.array, s);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Alias for squaredDistance
                 * @param  {clay.Vector3} b
                 * @return {number}
                 */
                sqrDist: function (b) {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].sqrDist(this.array, b.array);
                },

                /**
                 * Squared distance between self and b
                 * @param  {clay.Vector3} b
                 * @return {number}
                 */
                squaredDistance: function (b) {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].squaredDistance(this.array, b.array);
                },

                /**
                 * Alias for squaredLength
                 * @return {number}
                 */
                sqrLen: function () {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].sqrLen(this.array);
                },

                /**
                 * Squared length of self
                 * @return {number}
                 */
                squaredLength: function () {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].squaredLength(this.array);
                },

                /**
                 * Alias for subtract
                 * @param  {clay.Vector3} b
                 * @return {clay.Vector3}
                 */
                sub: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].sub(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Subtract b from self
                 * @param  {clay.Vector3} b
                 * @return {clay.Vector3}
                 */
                subtract: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].subtract(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Transform self with a Matrix3 m
                 * @param  {clay.Matrix3} m
                 * @return {clay.Vector3}
                 */
                transformMat3: function (m) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].transformMat3(this.array, this.array, m.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Transform self with a Matrix4 m
                 * @param  {clay.Matrix4} m
                 * @return {clay.Vector3}
                 */
                transformMat4: function (m) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].transformMat4(this.array, this.array, m.array);
                    this._dirty = true;
                    return this;
                },
                /**
                 * Transform self with a Quaternion q
                 * @param  {clay.Quaternion} q
                 * @return {clay.Vector3}
                 */
                transformQuat: function (q) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].transformQuat(this.array, this.array, q.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Trasnform self into projection space with m
                 * @param  {clay.Matrix4} m
                 * @return {clay.Vector3}
                 */
                applyProjection: function (m) {
                    var v = this.array;
                    m = m.array;

                    // Perspective projection
                    if (m[15] === 0) {
                        var w = -1 / v[2];
                        v[0] = m[0] * v[0] * w;
                        v[1] = m[5] * v[1] * w;
                        v[2] = (m[10] * v[2] + m[14]) * w;
                    }
                    else {
                        v[0] = m[0] * v[0] + m[12];
                        v[1] = m[5] * v[1] + m[13];
                        v[2] = m[10] * v[2] + m[14];
                    }
                    this._dirty = true;

                    return this;
                },

                eulerFromQuat: function(q, order) {
                    Vector3.eulerFromQuat(this, q, order);
                },

                eulerFromMat3: function (m, order) {
                    Vector3.eulerFromMat3(this, m, order);
                },

                toString: function() {
                    return '[' + Array.prototype.join.call(this.array, ',') + ']';
                },

                toArray: function () {
                    return Array.prototype.slice.call(this.array);
                }
            };

            var defineProperty = Object.defineProperty;
// Getter and Setter
            if (defineProperty) {

                var proto = Vector3.prototype;
                /**
                 * @name x
                 * @type {number}
                 * @memberOf clay.Vector3
                 * @instance
                 */
                defineProperty(proto, 'x', {
                    get: function () {
                        return this.array[0];
                    },
                    set: function (value) {
                        this.array[0] = value;
                        this._dirty = true;
                    }
                });

                /**
                 * @name y
                 * @type {number}
                 * @memberOf clay.Vector3
                 * @instance
                 */
                defineProperty(proto, 'y', {
                    get: function () {
                        return this.array[1];
                    },
                    set: function (value) {
                        this.array[1] = value;
                        this._dirty = true;
                    }
                });

                /**
                 * @name z
                 * @type {number}
                 * @memberOf clay.Vector3
                 * @instance
                 */
                defineProperty(proto, 'z', {
                    get: function () {
                        return this.array[2];
                    },
                    set: function (value) {
                        this.array[2] = value;
                        this._dirty = true;
                    }
                });
            }


// Supply methods that are not in place

            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {clay.Vector3}
             */
            Vector3.add = function(out, a, b) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].add(out.array, a.array, b.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Vector3} out
             * @param  {number}  x
             * @param  {number}  y
             * @param  {number}  z
             * @return {clay.Vector3}
             */
            Vector3.set = function(out, x, y, z) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].set(out.array, x, y, z);
                out._dirty = true;
            };

            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} b
             * @return {clay.Vector3}
             */
            Vector3.copy = function(out, b) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].copy(out.array, b.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {clay.Vector3}
             */
            Vector3.cross = function(out, a, b) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].cross(out.array, a.array, b.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {number}
             */
            Vector3.dist = function(a, b) {
                return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].distance(a.array, b.array);
            };

            /**
             * @function
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {number}
             */
            Vector3.distance = Vector3.dist;

            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {clay.Vector3}
             */
            Vector3.div = function(out, a, b) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].divide(out.array, a.array, b.array);
                out._dirty = true;
                return out;
            };

            /**
             * @function
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {clay.Vector3}
             */
            Vector3.divide = Vector3.div;

            /**
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {number}
             */
            Vector3.dot = function(a, b) {
                return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].dot(a.array, b.array);
            };

            /**
             * @param  {clay.Vector3} a
             * @return {number}
             */
            Vector3.len = function(b) {
                return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].length(b.array);
            };

// Vector3.length = Vector3.len;

            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @param  {number}  t
             * @return {clay.Vector3}
             */
            Vector3.lerp = function(out, a, b, t) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].lerp(out.array, a.array, b.array, t);
                out._dirty = true;
                return out;
            };
            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {clay.Vector3}
             */
            Vector3.min = function(out, a, b) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].min(out.array, a.array, b.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {clay.Vector3}
             */
            Vector3.max = function(out, a, b) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].max(out.array, a.array, b.array);
                out._dirty = true;
                return out;
            };
            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {clay.Vector3}
             */
            Vector3.mul = function(out, a, b) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].multiply(out.array, a.array, b.array);
                out._dirty = true;
                return out;
            };
            /**
             * @function
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {clay.Vector3}
             */
            Vector3.multiply = Vector3.mul;
            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @return {clay.Vector3}
             */
            Vector3.negate = function(out, a) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].negate(out.array, a.array);
                out._dirty = true;
                return out;
            };
            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @return {clay.Vector3}
             */
            Vector3.normalize = function(out, a) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].normalize(out.array, a.array);
                out._dirty = true;
                return out;
            };
            /**
             * @param  {clay.Vector3} out
             * @param  {number}  scale
             * @return {clay.Vector3}
             */
            Vector3.random = function(out, scale) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].random(out.array, scale);
                out._dirty = true;
                return out;
            };
            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {number}  scale
             * @return {clay.Vector3}
             */
            Vector3.scale = function(out, a, scale) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].scale(out.array, a.array, scale);
                out._dirty = true;
                return out;
            };
            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @param  {number}  scale
             * @return {clay.Vector3}
             */
            Vector3.scaleAndAdd = function(out, a, b, scale) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].scaleAndAdd(out.array, a.array, b.array, scale);
                out._dirty = true;
                return out;
            };
            /**
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {number}
             */
            Vector3.sqrDist = function(a, b) {
                return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].sqrDist(a.array, b.array);
            };
            /**
             * @function
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {number}
             */
            Vector3.squaredDistance = Vector3.sqrDist;
            /**
             * @param  {clay.Vector3} a
             * @return {number}
             */
            Vector3.sqrLen = function(a) {
                return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].sqrLen(a.array);
            };
            /**
             * @function
             * @param  {clay.Vector3} a
             * @return {number}
             */
            Vector3.squaredLength = Vector3.sqrLen;

            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {clay.Vector3}
             */
            Vector3.sub = function(out, a, b) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].subtract(out.array, a.array, b.array);
                out._dirty = true;
                return out;
            };
            /**
             * @function
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {clay.Vector3}
             */
            Vector3.subtract = Vector3.sub;

            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {Matrix3} m
             * @return {clay.Vector3}
             */
            Vector3.transformMat3 = function(out, a, m) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].transformMat3(out.array, a.array, m.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {clay.Matrix4} m
             * @return {clay.Vector3}
             */
            Vector3.transformMat4 = function(out, a, m) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].transformMat4(out.array, a.array, m.array);
                out._dirty = true;
                return out;
            };
            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {clay.Quaternion} q
             * @return {clay.Vector3}
             */
            Vector3.transformQuat = function(out, a, q) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].transformQuat(out.array, a.array, q.array);
                out._dirty = true;
                return out;
            };

            function clamp(val, min, max) {
                return val < min ? min : (val > max ? max : val);
            }
            var atan2 = Math.atan2;
            var asin = Math.asin;
            var abs = Math.abs;
            /**
             * Convert quaternion to euler angle
             * Quaternion must be normalized
             * From three.js
             */
            Vector3.eulerFromQuat = function (out, q, order) {
                out._dirty = true;
                q = q.array;

                var target = out.array;
                var x = q[0], y = q[1], z = q[2], w = q[3];
                var x2 = x * x;
                var y2 = y * y;
                var z2 = z * z;
                var w2 = w * w;

                var order = (order || 'XYZ').toUpperCase();

                switch (order) {
                    case 'XYZ':
                        target[0] = atan2(2 * (x * w - y * z), (w2 - x2 - y2 + z2));
                        target[1] = asin(clamp(2 * (x * z + y * w), - 1, 1));
                        target[2] = atan2(2 * (z * w - x * y), (w2 + x2 - y2 - z2));
                        break;
                    case 'YXZ':
                        target[0] = asin(clamp(2 * (x * w - y * z), - 1, 1));
                        target[1] = atan2(2 * (x * z + y * w), (w2 - x2 - y2 + z2));
                        target[2] = atan2(2 * (x * y + z * w), (w2 - x2 + y2 - z2));
                        break;
                    case 'ZXY':
                        target[0] = asin(clamp(2 * (x * w + y * z), - 1, 1));
                        target[1] = atan2(2 * (y * w - z * x), (w2 - x2 - y2 + z2));
                        target[2] = atan2(2 * (z * w - x * y), (w2 - x2 + y2 - z2));
                        break;
                    case 'ZYX':
                        target[0] = atan2(2 * (x * w + z * y), (w2 - x2 - y2 + z2));
                        target[1] = asin(clamp(2 * (y * w - x * z), - 1, 1));
                        target[2] = atan2(2 * (x * y + z * w), (w2 + x2 - y2 - z2));
                        break;
                    case 'YZX':
                        target[0] = atan2(2 * (x * w - z * y), (w2 - x2 + y2 - z2));
                        target[1] = atan2(2 * (y * w - x * z), (w2 + x2 - y2 - z2));
                        target[2] = asin(clamp(2 * (x * y + z * w), - 1, 1));
                        break;
                    case 'XZY':
                        target[0] = atan2(2 * (x * w + y * z), (w2 - x2 + y2 - z2));
                        target[1] = atan2(2 * (x * z + y * w), (w2 + x2 - y2 - z2));
                        target[2] = asin(clamp(2 * (z * w - x * y), - 1, 1));
                        break;
                    default:
                        console.warn('Unkown order: ' + order);
                }
                return out;
            };

            /**
             * Convert rotation matrix to euler angle
             * from three.js
             */
            Vector3.eulerFromMat3 = function (out, m, order) {
                // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
                var te = m.array;
                var m11 = te[0], m12 = te[3], m13 = te[6];
                var m21 = te[1], m22 = te[4], m23 = te[7];
                var m31 = te[2], m32 = te[5], m33 = te[8];
                var target = out.array;

                var order = (order || 'XYZ').toUpperCase();

                switch (order) {
                    case 'XYZ':
                        target[1] = asin(clamp(m13, -1, 1));
                        if (abs(m13) < 0.99999) {
                            target[0] = atan2(-m23, m33);
                            target[2] = atan2(-m12, m11);
                        }
                        else {
                            target[0] = atan2(m32, m22);
                            target[2] = 0;
                        }
                        break;
                    case 'YXZ':
                        target[0] = asin(-clamp(m23, -1, 1));
                        if (abs(m23) < 0.99999) {
                            target[1] = atan2(m13, m33);
                            target[2] = atan2(m21, m22);
                        }
                        else {
                            target[1] = atan2(-m31, m11);
                            target[2] = 0;
                        }
                        break;
                    case 'ZXY':
                        target[0] = asin(clamp(m32, -1, 1));
                        if (abs(m32) < 0.99999) {
                            target[1] = atan2(-m31, m33);
                            target[2] = atan2(-m12, m22);
                        }
                        else {
                            target[1] = 0;
                            target[2] = atan2(m21, m11);
                        }
                        break;
                    case 'ZYX':
                        target[1] = asin(-clamp(m31, -1, 1));
                        if (abs(m31) < 0.99999) {
                            target[0] = atan2(m32, m33);
                            target[2] = atan2(m21, m11);
                        }
                        else {
                            target[0] = 0;
                            target[2] = atan2(-m12, m22);
                        }
                        break;
                    case 'YZX':
                        target[2] = asin(clamp(m21, -1, 1));
                        if (abs(m21) < 0.99999) {
                            target[0] = atan2(-m23, m22);
                            target[1] = atan2(-m31, m11);
                        }
                        else {
                            target[0] = 0;
                            target[1] = atan2(m13, m33);
                        }
                        break;
                    case 'XZY':
                        target[2] = asin(-clamp(m12, -1, 1));
                        if (abs(m12) < 0.99999) {
                            target[0] = atan2(m32, m22);
                            target[1] = atan2(m13, m11);
                        }
                        else {
                            target[0] = atan2(-m23, m33);
                            target[1] = 0;
                        }
                        break;
                    default:
                        console.warn('Unkown order: ' + order);
                }
                out._dirty = true;

                return out;
            };

            Object.defineProperties(Vector3, {
                /**
                 * @type {clay.Vector3}
                 * @readOnly
                 * @memberOf clay.Vector3
                 */
                POSITIVE_X: {
                    get: function () {
                        return new Vector3(1, 0, 0);
                    }
                },
                /**
                 * @type {clay.Vector3}
                 * @readOnly
                 * @memberOf clay.Vector3
                 */
                NEGATIVE_X: {
                    get: function () {
                        return new Vector3(-1, 0, 0);
                    }
                },
                /**
                 * @type {clay.Vector3}
                 * @readOnly
                 * @memberOf clay.Vector3
                 */
                POSITIVE_Y: {
                    get: function () {
                        return new Vector3(0, 1, 0);
                    }
                },
                /**
                 * @type {clay.Vector3}
                 * @readOnly
                 * @memberOf clay.Vector3
                 */
                NEGATIVE_Y: {
                    get: function () {
                        return new Vector3(0, -1, 0);
                    }
                },
                /**
                 * @type {clay.Vector3}
                 * @readOnly
                 * @memberOf clay.Vector3
                 */
                POSITIVE_Z: {
                    get: function () {
                        return new Vector3(0, 0, 1);
                    }
                },
                /**
                 * @type {clay.Vector3}
                 * @readOnly
                 */
                NEGATIVE_Z: {
                    get: function () {
                        return new Vector3(0, 0, -1);
                    }
                },
                /**
                 * @type {clay.Vector3}
                 * @readOnly
                 * @memberOf clay.Vector3
                 */
                UP: {
                    get: function () {
                        return new Vector3(0, 1, 0);
                    }
                },
                /**
                 * @type {clay.Vector3}
                 * @readOnly
                 * @memberOf clay.Vector3
                 */
                ZERO: {
                    get: function () {
                        return new Vector3();
                    }
                }
            });

            /* harmony default export */ __webpack_exports__["a"] = (Vector3);


            /***/ }),
        /* 4 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Base__ = __webpack_require__(7);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_glenum__ = __webpack_require__(11);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_Cache__ = __webpack_require__(57);
            /**
             * Base class for all textures like compressed texture, texture2d, texturecube
             * TODO mapping
             */




            /**
             * @constructor
             * @alias clay.Texture
             * @extends clay.core.Base
             */
            var Texture = __WEBPACK_IMPORTED_MODULE_0__core_Base__["a" /* default */].extend( /** @lends clay.Texture# */ {
                    /**
                     * Texture width, readonly when the texture source is image
                     * @type {number}
                     */
                    width: 512,
                    /**
                     * Texture height, readonly when the texture source is image
                     * @type {number}
                     */
                    height: 512,
                    /**
                     * Texel data type.
                     * Possible values:
                     *  + {@link clay.Texture.UNSIGNED_BYTE}
                     *  + {@link clay.Texture.HALF_FLOAT}
                     *  + {@link clay.Texture.FLOAT}
                     *  + {@link clay.Texture.UNSIGNED_INT_24_8_WEBGL}
                     *  + {@link clay.Texture.UNSIGNED_INT}
                     * @type {number}
                     */
                    type: __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].UNSIGNED_BYTE,
                    /**
                     * Format of texel data
                     * Possible values:
                     *  + {@link clay.Texture.RGBA}
                     *  + {@link clay.Texture.DEPTH_COMPONENT}
                     *  + {@link clay.Texture.DEPTH_STENCIL}
                     * @type {number}
                     */
                    format: __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].RGBA,
                    /**
                     * Texture wrap. Default to be REPEAT.
                     * Possible values:
                     *  + {@link clay.Texture.CLAMP_TO_EDGE}
                     *  + {@link clay.Texture.REPEAT}
                     *  + {@link clay.Texture.MIRRORED_REPEAT}
                     * @type {number}
                     */
                    wrapS: __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].REPEAT,
                    /**
                     * Texture wrap. Default to be REPEAT.
                     * Possible values:
                     *  + {@link clay.Texture.CLAMP_TO_EDGE}
                     *  + {@link clay.Texture.REPEAT}
                     *  + {@link clay.Texture.MIRRORED_REPEAT}
                     * @type {number}
                     */
                    wrapT: __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].REPEAT,
                    /**
                     * Possible values:
                     *  + {@link clay.Texture.NEAREST}
                     *  + {@link clay.Texture.LINEAR}
                     *  + {@link clay.Texture.NEAREST_MIPMAP_NEAREST}
                     *  + {@link clay.Texture.LINEAR_MIPMAP_NEAREST}
                     *  + {@link clay.Texture.NEAREST_MIPMAP_LINEAR}
                     *  + {@link clay.Texture.LINEAR_MIPMAP_LINEAR}
                     * @type {number}
                     */
                    minFilter: __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].LINEAR_MIPMAP_LINEAR,
                    /**
                     * Possible values:
                     *  + {@link clay.Texture.NEAREST}
                     *  + {@link clay.Texture.LINEAR}
                     * @type {number}
                     */
                    magFilter: __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].LINEAR,
                    /**
                     * If enable mimap.
                     * @type {boolean}
                     */
                    useMipmap: true,

                    /**
                     * Anisotropic filtering, enabled if value is larger than 1
                     * @see https://developer.mozilla.org/en-US/docs/Web/API/EXT_texture_filter_anisotropic
                     * @type {number}
                     */
                    anisotropic: 1,
                    // pixelStorei parameters, not available when texture is used as render target
                    // http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml
                    /**
                     * If flip in y axis for given image source
                     * @type {boolean}
                     * @default true
                     */
                    flipY: true,

                    /**
                     * A flag to indicate if texture source is sRGB
                     */
                    sRGB: true,
                    /**
                     * @type {number}
                     * @default 4
                     */
                    unpackAlignment: 4,
                    /**
                     * @type {boolean}
                     * @default false
                     */
                    premultiplyAlpha: false,

                    /**
                     * Dynamic option for texture like video
                     * @type {boolean}
                     */
                    dynamic: false,

                    NPOT: false,

                    // PENDING
                    // Init it here to avoid deoptimization when it's assigned in application dynamically
                    __used: 0

                }, function () {
                    this._cache = new __WEBPACK_IMPORTED_MODULE_2__core_Cache__["a" /* default */]();
                },
                /** @lends clay.Texture.prototype */
                {

                    getWebGLTexture: function (renderer) {
                        var _gl = renderer.gl;
                        var cache = this._cache;
                        cache.use(renderer.__uid__);

                        if (cache.miss('webgl_texture')) {
                            // In a new gl context, create new texture and set dirty true
                            cache.put('webgl_texture', _gl.createTexture());
                        }
                        if (this.dynamic) {
                            this.update(renderer);
                        }
                        else if (cache.isDirty()) {
                            this.update(renderer);
                            cache.fresh();
                        }

                        return cache.get('webgl_texture');
                    },

                    bind: function () {},
                    unbind: function () {},

                    /**
                     * Mark texture is dirty and update in the next frame
                     */
                    dirty: function () {
                        if (this._cache) {
                            this._cache.dirtyAll();
                        }
                    },

                    update: function (renderer) {},

                    // Update the common parameters of texture
                    updateCommon: function (renderer) {
                        var _gl = renderer.gl;
                        _gl.pixelStorei(_gl.UNPACK_FLIP_Y_WEBGL, this.flipY);
                        _gl.pixelStorei(_gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
                        _gl.pixelStorei(_gl.UNPACK_ALIGNMENT, this.unpackAlignment);

                        // Use of none-power of two texture
                        // http://www.khronos.org/webgl/wiki/WebGL_and_OpenGL_Differences
                        if (this.format === __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].DEPTH_COMPONENT) {
                            this.useMipmap = false;
                        }

                        var sRGBExt = renderer.getGLExtension('EXT_sRGB');
                        // Fallback
                        if (this.format === Texture.SRGB && !sRGBExt) {
                            this.format = Texture.RGB;
                        }
                        if (this.format === Texture.SRGB_ALPHA && !sRGBExt) {
                            this.format = Texture.RGBA;
                        }

                        this.NPOT = !this.isPowerOfTwo();
                    },

                    getAvailableWrapS: function () {
                        if (this.NPOT) {
                            return __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].CLAMP_TO_EDGE;
                        }
                        return this.wrapS;
                    },
                    getAvailableWrapT: function () {
                        if (this.NPOT) {
                            return __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].CLAMP_TO_EDGE;
                        }
                        return this.wrapT;
                    },
                    getAvailableMinFilter: function () {
                        var minFilter = this.minFilter;
                        if (this.NPOT || !this.useMipmap) {
                            if (minFilter === __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].NEAREST_MIPMAP_NEAREST ||
                                minFilter === __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].NEAREST_MIPMAP_LINEAR
                            ) {
                                return __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].NEAREST;
                            }
                            else if (minFilter === __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].LINEAR_MIPMAP_LINEAR ||
                                minFilter === __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].LINEAR_MIPMAP_NEAREST
                            ) {
                                return __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].LINEAR;
                            }
                            else {
                                return minFilter;
                            }
                        }
                        else {
                            return minFilter;
                        }
                    },
                    getAvailableMagFilter: function () {
                        return this.magFilter;
                    },

                    nextHighestPowerOfTwo: function (x) {
                        --x;
                        for (var i = 1; i < 32; i <<= 1) {
                            x = x | x >> i;
                        }
                        return x + 1;
                    },
                    /**
                     * @param  {clay.Renderer} renderer
                     */
                    dispose: function (renderer) {

                        var cache = this._cache;

                        cache.use(renderer.__uid__);

                        var webglTexture = cache.get('webgl_texture');
                        if (webglTexture){
                            renderer.gl.deleteTexture(webglTexture);
                        }
                        cache.deleteContext(renderer.__uid__);

                    },
                    /**
                     * Test if image of texture is valid and loaded.
                     * @return {boolean}
                     */
                    isRenderable: function () {},

                    /**
                     * Test if texture size is power of two
                     * @return {boolean}
                     */
                    isPowerOfTwo: function () {}
                });

            Object.defineProperty(Texture.prototype, 'width', {
                get: function () {
                    return this._width;
                },
                set: function (value) {
                    this._width = value;
                }
            });
            Object.defineProperty(Texture.prototype, 'height', {
                get: function () {
                    return this._height;
                },
                set: function (value) {
                    this._height = value;
                }
            });

            /* DataType */

            /**
             * @type {number}
             */
            Texture.BYTE = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].BYTE;
            /**
             * @type {number}
             */
            Texture.UNSIGNED_BYTE = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].UNSIGNED_BYTE;
            /**
             * @type {number}
             */
            Texture.SHORT = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].SHORT;
            /**
             * @type {number}
             */
            Texture.UNSIGNED_SHORT = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].UNSIGNED_SHORT;
            /**
             * @type {number}
             */
            Texture.INT = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].INT;
            /**
             * @type {number}
             */
            Texture.UNSIGNED_INT = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].UNSIGNED_INT;
            /**
             * @type {number}
             */
            Texture.FLOAT = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].FLOAT;
            /**
             * @type {number}
             */
            Texture.HALF_FLOAT = 0x8D61;

            /**
             * UNSIGNED_INT_24_8_WEBGL for WEBGL_depth_texture extension
             * @type {number}
             */
            Texture.UNSIGNED_INT_24_8_WEBGL = 34042;

            /* PixelFormat */
            /**
             * @type {number}
             */
            Texture.DEPTH_COMPONENT = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].DEPTH_COMPONENT;
            /**
             * @type {number}
             */
            Texture.DEPTH_STENCIL = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].DEPTH_STENCIL;
            /**
             * @type {number}
             */
            Texture.ALPHA = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].ALPHA;
            /**
             * @type {number}
             */
            Texture.RGB = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].RGB;
            /**
             * @type {number}
             */
            Texture.RGBA = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].RGBA;
            /**
             * @type {number}
             */
            Texture.LUMINANCE = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].LUMINANCE;
            /**
             * @type {number}
             */
            Texture.LUMINANCE_ALPHA = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].LUMINANCE_ALPHA;

            /**
             * @see https://www.khronos.org/registry/webgl/extensions/EXT_sRGB/
             * @type {number}
             */
            Texture.SRGB = 0x8C40;
            /**
             * @see https://www.khronos.org/registry/webgl/extensions/EXT_sRGB/
             * @type {number}
             */
            Texture.SRGB_ALPHA = 0x8C42;

            /* Compressed Texture */
            Texture.COMPRESSED_RGB_S3TC_DXT1_EXT = 0x83F0;
            Texture.COMPRESSED_RGBA_S3TC_DXT1_EXT = 0x83F1;
            Texture.COMPRESSED_RGBA_S3TC_DXT3_EXT = 0x83F2;
            Texture.COMPRESSED_RGBA_S3TC_DXT5_EXT = 0x83F3;

            /* TextureMagFilter */
            /**
             * @type {number}
             */
            Texture.NEAREST = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].NEAREST;
            /**
             * @type {number}
             */
            Texture.LINEAR = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].LINEAR;

            /* TextureMinFilter */
            /**
             * @type {number}
             */
            Texture.NEAREST_MIPMAP_NEAREST = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].NEAREST_MIPMAP_NEAREST;
            /**
             * @type {number}
             */
            Texture.LINEAR_MIPMAP_NEAREST = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].LINEAR_MIPMAP_NEAREST;
            /**
             * @type {number}
             */
            Texture.NEAREST_MIPMAP_LINEAR = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].NEAREST_MIPMAP_LINEAR;
            /**
             * @type {number}
             */
            Texture.LINEAR_MIPMAP_LINEAR = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].LINEAR_MIPMAP_LINEAR;

            /* TextureWrapMode */
            /**
             * @type {number}
             */
            Texture.REPEAT = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].REPEAT;
            /**
             * @type {number}
             */
            Texture.CLAMP_TO_EDGE = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].CLAMP_TO_EDGE;
            /**
             * @type {number}
             */
            Texture.MIRRORED_REPEAT = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].MIRRORED_REPEAT;


            /* harmony default export */ __webpack_exports__["a"] = (Texture);


            /***/ }),
        /* 5 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Texture__ = __webpack_require__(4);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_glenum__ = __webpack_require__(11);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_vendor__ = __webpack_require__(14);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_util__ = __webpack_require__(73);




            var isPowerOfTwo = __WEBPACK_IMPORTED_MODULE_3__math_util__["a" /* default */].isPowerOfTwo;

            function nearestPowerOfTwo(val) {
                return Math.pow(2, Math.round(Math.log(val) / Math.LN2));
            }
            function convertTextureToPowerOfTwo(texture, canvas) {
                // var canvas = document.createElement('canvas');
                var width = nearestPowerOfTwo(texture.width);
                var height = nearestPowerOfTwo(texture.height);
                canvas = canvas || document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext('2d');
                ctx.drawImage(texture.image, 0, 0, width, height);

                return canvas;
            }

            /**
             * @constructor clay.Texture2D
             * @extends clay.Texture
             *
             * @example
             *     ...
             *     var mat = new clay.Material({
 *         shader: clay.shader.library.get('clay.phong', 'diffuseMap')
 *     });
             *     var diffuseMap = new clay.Texture2D();
             *     diffuseMap.load('assets/textures/diffuse.jpg');
             *     mat.set('diffuseMap', diffuseMap);
             *     ...
             *     diffuseMap.success(function () {
 *         // Wait for the diffuse texture loaded
 *         animation.on('frame', function (frameTime) {
 *             renderer.render(scene, camera);
 *         });
 *     });
             */
            var Texture2D = __WEBPACK_IMPORTED_MODULE_0__Texture__["a" /* default */].extend(function () {
                return /** @lends clay.Texture2D# */ {
                    /**
                     * @type {?HTMLImageElement|HTMLCanvasElemnet}
                     */
                    // TODO mark dirty when assigned.
                    image: null,
                    /**
                     * Pixels data. Will be ignored if image is set.
                     * @type {?Uint8Array|Float32Array}
                     */
                    pixels: null,
                    /**
                     * @type {Array.<Object>}
                     * @example
                     *     [{
         *         image: mipmap0,
         *         pixels: null
         *     }, {
         *         image: mipmap1,
         *         pixels: null
         *     }, ....]
                     */
                    mipmaps: [],

                    /**
                     * If convert texture to power-of-two
                     * @type {boolean}
                     */
                    convertToPOT: false
                };
            }, {

                textureType: 'texture2D',

                update: function (renderer) {

                    var _gl = renderer.gl;
                    _gl.bindTexture(_gl.TEXTURE_2D, this._cache.get('webgl_texture'));

                    this.updateCommon(renderer);

                    var glFormat = this.format;
                    var glType = this.type;

                    // Convert to pot is only available when using image/canvas/video element.
                    var convertToPOT = !!(this.convertToPOT
                        && !this.mipmaps.length && this.image
                        && (this.wrapS === __WEBPACK_IMPORTED_MODULE_0__Texture__["a" /* default */].REPEAT || this.wrapT === __WEBPACK_IMPORTED_MODULE_0__Texture__["a" /* default */].REPEAT)
                        && this.NPOT
                    );

                    _gl.texParameteri(_gl.TEXTURE_2D, _gl.TEXTURE_WRAP_S, convertToPOT ? this.wrapS : this.getAvailableWrapS());
                    _gl.texParameteri(_gl.TEXTURE_2D, _gl.TEXTURE_WRAP_T, convertToPOT ? this.wrapT : this.getAvailableWrapT());

                    _gl.texParameteri(_gl.TEXTURE_2D, _gl.TEXTURE_MAG_FILTER, convertToPOT ? this.magFilter : this.getAvailableMagFilter());
                    _gl.texParameteri(_gl.TEXTURE_2D, _gl.TEXTURE_MIN_FILTER, convertToPOT ? this.minFilter : this.getAvailableMinFilter());

                    var anisotropicExt = renderer.getGLExtension('EXT_texture_filter_anisotropic');
                    if (anisotropicExt && this.anisotropic > 1) {
                        _gl.texParameterf(_gl.TEXTURE_2D, anisotropicExt.TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropic);
                    }

                    // Fallback to float type if browser don't have half float extension
                    if (glType === 36193) {
                        var halfFloatExt = renderer.getGLExtension('OES_texture_half_float');
                        if (!halfFloatExt) {
                            glType = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].FLOAT;
                        }
                    }

                    if (this.mipmaps.length) {
                        var width = this.width;
                        var height = this.height;
                        for (var i = 0; i < this.mipmaps.length; i++) {
                            var mipmap = this.mipmaps[i];
                            this._updateTextureData(_gl, mipmap, i, width, height, glFormat, glType, false);
                            width /= 2;
                            height /= 2;
                        }
                    }
                    else {
                        this._updateTextureData(_gl, this, 0, this.width, this.height, glFormat, glType, convertToPOT);

                        if (this.useMipmap && (!this.NPOT || convertToPOT)) {
                            _gl.generateMipmap(_gl.TEXTURE_2D);
                        }
                    }

                    _gl.bindTexture(_gl.TEXTURE_2D, null);
                },

                _updateTextureData: function (_gl, data, level, width, height, glFormat, glType, convertToPOT) {
                    if (data.image) {
                        var imgData = data.image;
                        if (convertToPOT) {
                            this._potCanvas = convertTextureToPowerOfTwo(this, this._potCanvas);
                            imgData = this._potCanvas;
                        }
                        _gl.texImage2D(_gl.TEXTURE_2D, level, glFormat, glFormat, glType, imgData);
                    }
                    else {
                        // Can be used as a blank texture when writing render to texture(RTT)
                        if (
                            glFormat <= __WEBPACK_IMPORTED_MODULE_0__Texture__["a" /* default */].COMPRESSED_RGBA_S3TC_DXT5_EXT
                            && glFormat >= __WEBPACK_IMPORTED_MODULE_0__Texture__["a" /* default */].COMPRESSED_RGB_S3TC_DXT1_EXT
                        ) {
                            _gl.compressedTexImage2D(_gl.TEXTURE_2D, level, glFormat, width, height, 0, data.pixels);
                        }
                        else {
                            // Is a render target if pixels is null
                            _gl.texImage2D(_gl.TEXTURE_2D, level, glFormat, width, height, 0, glFormat, glType, data.pixels);
                        }
                    }
                },

                /**
                 * @param  {clay.Renderer} renderer
                 * @memberOf clay.Texture2D.prototype
                 */
                generateMipmap: function (renderer) {
                    var _gl = renderer.gl;
                    if (this.useMipmap && !this.NPOT) {
                        _gl.bindTexture(_gl.TEXTURE_2D, this._cache.get('webgl_texture'));
                        _gl.generateMipmap(_gl.TEXTURE_2D);
                    }
                },

                isPowerOfTwo: function () {
                    return isPowerOfTwo(this.width) && isPowerOfTwo(this.height);
                },

                isRenderable: function () {
                    if (this.image) {
                        return this.image.nodeName === 'CANVAS'
                            || this.image.nodeName === 'VIDEO'
                            || this.image.complete;
                    }
                    else {
                        return !!(this.width && this.height);
                    }
                },

                bind: function (renderer) {
                    renderer.gl.bindTexture(renderer.gl.TEXTURE_2D, this.getWebGLTexture(renderer));
                },

                unbind: function (renderer) {
                    renderer.gl.bindTexture(renderer.gl.TEXTURE_2D, null);
                },

                load: function (src, crossOrigin) {
                    var image = __WEBPACK_IMPORTED_MODULE_2__core_vendor__["a" /* default */].createImage();
                    if (crossOrigin) {
                        image.crossOrigin = crossOrigin;
                    }
                    var self = this;
                    image.onload = function () {
                        self.dirty();
                        self.trigger('success', self);
                        image.onload = null;
                    };
                    image.onerror = function () {
                        self.trigger('error', self);
                        image.onerror = null;
                    };

                    image.src = src;
                    this.image = image;

                    return this;
                }
            });

            Object.defineProperty(Texture2D.prototype, 'width', {
                get: function () {
                    if (this.image) {
                        return this.image.width;
                    }
                    return this._width;
                },
                set: function (value) {
                    if (this.image) {
                        console.warn('Texture from image can\'t set width');
                    }
                    else {
                        if (this._width !== value) {
                            this.dirty();
                        }
                        this._width = value;
                    }
                }
            });
            Object.defineProperty(Texture2D.prototype, 'height', {
                get: function () {
                    if (this.image) {
                        return this.image.height;
                    }
                    return this._height;
                },
                set: function (value) {
                    if (this.image) {
                        console.warn('Texture from image can\'t set height');
                    }
                    else {
                        if (this._height !== value) {
                            this.dirty();
                        }
                        this._height = value;
                    }
                }
            });

            /* harmony default export */ __webpack_exports__["a"] = (Texture2D);


            /***/ }),
        /* 6 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__glmatrix__ = __webpack_require__(161);
// DEPRECATED


            /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__glmatrix__["a" /* default */]);


            /***/ }),
        /* 7 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_extend__ = __webpack_require__(110);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixin_notifier__ = __webpack_require__(53);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(23);




            /**
             * Base class of all objects
             * @constructor
             * @alias clay.core.Base
             * @mixes clay.core.mixin.notifier
             */
            var Base = function () {
                /**
                 * @type {number}
                 */
                this.__uid__ = __WEBPACK_IMPORTED_MODULE_2__util__["a" /* default */].genGUID();
            };

            Base.__initializers__ = [
                function (opts) {
                    __WEBPACK_IMPORTED_MODULE_2__util__["a" /* default */].extend(this, opts);
                }
            ];

            __WEBPACK_IMPORTED_MODULE_2__util__["a" /* default */].extend(Base, __WEBPACK_IMPORTED_MODULE_0__mixin_extend__["a" /* default */]);
            __WEBPACK_IMPORTED_MODULE_2__util__["a" /* default */].extend(Base.prototype, __WEBPACK_IMPORTED_MODULE_1__mixin_notifier__["a" /* default */]);

            /* harmony default export */ __webpack_exports__["a"] = (Base);


            /***/ }),
        /* 8 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_util__ = __webpack_require__(23);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_vendor__ = __webpack_require__(14);
            /**
             * Mainly do the parse and compile of shader string
             * Support shader code chunk import and export
             * Support shader semantics
             * http://www.nvidia.com/object/using_sas.html
             * https://github.com/KhronosGroup/collada2json/issues/45
             */



            var uniformRegex = /uniform\s+(bool|float|int|vec2|vec3|vec4|ivec2|ivec3|ivec4|mat2|mat3|mat4|sampler2D|samplerCube)\s+([\s\S]*?);/g;
            var attributeRegex = /attribute\s+(float|int|vec2|vec3|vec4)\s+([\s\S]*?);/g;
// Only parse number define.
            var defineRegex = /#define\s+(\w+)?(\s+[\d-.]+)?\s*;?\s*\n/g;

            var uniformTypeMap = {
                'bool': '1i',
                'int': '1i',
                'sampler2D': 't',
                'samplerCube': 't',
                'float': '1f',
                'vec2': '2f',
                'vec3': '3f',
                'vec4': '4f',
                'ivec2': '2i',
                'ivec3': '3i',
                'ivec4': '4i',
                'mat2': 'm2',
                'mat3': 'm3',
                'mat4': 'm4'
            };

            function createZeroArray(len) {
                var arr = [];
                for (var i = 0; i < len; i++) {
                    arr[i] = 0;
                }
                return arr;
            }

            var uniformValueConstructor = {
                'bool': function () { return true; },
                'int': function () { return 0; },
                'float': function () { return 0; },
                'sampler2D': function () { return null; },
                'samplerCube': function () { return null; },

                'vec2': function () { return createZeroArray(2); },
                'vec3': function () { return createZeroArray(3); },
                'vec4': function () { return createZeroArray(4); },

                'ivec2': function () { return createZeroArray(2); },
                'ivec3': function () { return createZeroArray(3); },
                'ivec4': function () { return createZeroArray(4); },

                'mat2': function () { return createZeroArray(4); },
                'mat3': function () { return createZeroArray(9); },
                'mat4': function () { return createZeroArray(16); },

                'array': function () { return []; }
            };

            var attributeSemantics = [
                'POSITION',
                'NORMAL',
                'BINORMAL',
                'TANGENT',
                'TEXCOORD',
                'TEXCOORD_0',
                'TEXCOORD_1',
                'COLOR',
                // Skinning
                // https://github.com/KhronosGroup/glTF/blob/master/specification/README.md#semantics
                'JOINT',
                'WEIGHT'
            ];
            var uniformSemantics = [
                'SKIN_MATRIX',
                // Information about viewport
                'VIEWPORT_SIZE',
                'VIEWPORT',
                'DEVICEPIXELRATIO',
                // Window size for window relative coordinate
                // https://www.opengl.org/sdk/docs/man/html/gl_FragCoord.xhtml
                'WINDOW_SIZE',
                // Infomation about camera
                'NEAR',
                'FAR',
                // Time
                'TIME'
            ];
            var matrixSemantics = [
                'WORLD',
                'VIEW',
                'PROJECTION',
                'WORLDVIEW',
                'VIEWPROJECTION',
                'WORLDVIEWPROJECTION',
                'WORLDINVERSE',
                'VIEWINVERSE',
                'PROJECTIONINVERSE',
                'WORLDVIEWINVERSE',
                'VIEWPROJECTIONINVERSE',
                'WORLDVIEWPROJECTIONINVERSE',
                'WORLDTRANSPOSE',
                'VIEWTRANSPOSE',
                'PROJECTIONTRANSPOSE',
                'WORLDVIEWTRANSPOSE',
                'VIEWPROJECTIONTRANSPOSE',
                'WORLDVIEWPROJECTIONTRANSPOSE',
                'WORLDINVERSETRANSPOSE',
                'VIEWINVERSETRANSPOSE',
                'PROJECTIONINVERSETRANSPOSE',
                'WORLDVIEWINVERSETRANSPOSE',
                'VIEWPROJECTIONINVERSETRANSPOSE',
                'WORLDVIEWPROJECTIONINVERSETRANSPOSE'
            ];

            var attributeSizeMap = {
                // WebGL does not support integer attributes
                'vec4': 4,
                'vec3': 3,
                'vec2': 2,
                'float': 1
            };


            var shaderIDCache = {};
            var shaderCodeCache = {};

            function getShaderID(vertex, fragment) {
                var key = 'vertex:' + vertex + 'fragment:' + fragment;
                if (shaderIDCache[key]) {
                    return shaderIDCache[key];
                }
                var id = __WEBPACK_IMPORTED_MODULE_0__core_util__["a" /* default */].genGUID();
                shaderIDCache[key] = id;

                shaderCodeCache[id] = {
                    vertex: vertex,
                    fragment: fragment
                };

                return id;
            }

            function removeComment(code) {
                return code.replace(/[ \t]*\/\/.*\n/g, '' )   // remove //
                    .replace(/[ \t]*\/\*[\s\S]*?\*\//g, '' ); // remove /* */
            }

            function logSyntaxError() {
                console.error('Wrong uniform/attributes syntax');
            }

            function parseDeclarations(type, line) {
                var speratorsRegexp = /[,=\(\):]/;
                var tokens = line
                // Convert `symbol: [1,2,3]` to `symbol: vec3(1,2,3)`
                    .replace(/:\s*\[\s*(.*)\s*\]/g, '=' + type + '($1)')
                    .replace(/\s+/g, '')
                    .split(/(?=[,=\(\):])/g);

                var newTokens = [];
                for (var i = 0; i < tokens.length; i++) {
                    if (tokens[i].match(speratorsRegexp)) {
                        newTokens.push(
                            tokens[i].charAt(0),
                            tokens[i].slice(1)
                        );
                    }
                    else {
                        newTokens.push(tokens[i]);
                    }
                }
                tokens = newTokens;

                var TYPE_SYMBOL = 0;
                var TYPE_ASSIGN = 1;
                var TYPE_VEC = 2;
                var TYPE_ARR = 3;
                var TYPE_SEMANTIC = 4;
                var TYPE_NORMAL = 5;

                var opType = TYPE_SYMBOL;
                var declarations = {};
                var declarationValue = null;
                var currentDeclaration;

                addSymbol(tokens[0]);

                function addSymbol(symbol) {
                    if (!symbol) {
                        logSyntaxError();
                    }
                    var arrResult = symbol.match(/\[(.*?)\]/);
                    currentDeclaration = symbol.replace(/\[(.*?)\]/, '');
                    declarations[currentDeclaration] = {};
                    if (arrResult) {
                        declarations[currentDeclaration].isArray = true;
                        declarations[currentDeclaration].arraySize = arrResult[1];
                    }
                }

                for (var i = 1; i < tokens.length; i++) {
                    var token = tokens[i];
                    if (!token) {   // Empty token;
                        continue;
                    }
                    if (token === '=') {
                        if (opType !== TYPE_SYMBOL
                            && opType !== TYPE_ARR) {
                            logSyntaxError();
                            break;
                        }
                        opType = TYPE_ASSIGN;

                        continue;
                    }
                    else if (token === ':') {
                        opType = TYPE_SEMANTIC;

                        continue;
                    }
                    else if (token === ',') {
                        if (opType === TYPE_VEC) {
                            if (!(declarationValue instanceof Array)) {
                                logSyntaxError();
                                break;
                            }
                            declarationValue.push(+tokens[++i]);
                        }
                        else {
                            opType = TYPE_NORMAL;
                        }

                        continue;
                    }
                    else if (token === ')') {
                        declarations[currentDeclaration].value = new __WEBPACK_IMPORTED_MODULE_1__core_vendor__["a" /* default */].Float32Array(declarationValue);
                        declarationValue = null;
                        opType = TYPE_NORMAL;
                        continue;
                    }
                    else if (token === '(') {
                        if (opType !== TYPE_VEC) {
                            logSyntaxError();
                            break;
                        }
                        if (!(declarationValue instanceof Array)) {
                            logSyntaxError();
                            break;
                        }
                        declarationValue.push(+tokens[++i]);
                        continue;
                    }
                    else if (token.indexOf('vec') >= 0) {
                        if (opType !== TYPE_ASSIGN
                            // Compatitable with old syntax `symbol: [1,2,3]`
                            && opType !== TYPE_SEMANTIC) {
                            logSyntaxError();
                            break;
                        }
                        opType = TYPE_VEC;
                        declarationValue = [];
                        continue;
                    }
                    else if (opType === TYPE_ASSIGN) {
                        if (type === 'bool') {
                            declarations[currentDeclaration].value = token === 'true';
                        }
                        else {
                            declarations[currentDeclaration].value = parseFloat(token);
                        }
                        declarationValue = null;
                        continue;
                    }
                    else if (opType === TYPE_SEMANTIC) {
                        var semantic = token;
                        if (attributeSemantics.indexOf(semantic) >= 0
                            || uniformSemantics.indexOf(semantic) >= 0
                            || matrixSemantics.indexOf(semantic) >= 0
                        ) {
                            declarations[currentDeclaration].semantic = semantic;
                        }
                        else if (semantic === 'ignore' || semantic === 'unconfigurable') {
                            declarations[currentDeclaration].ignore = true;
                        }
                        else {
                            // Try to parse as a default tvalue.
                            if (type === 'bool') {
                                declarations[currentDeclaration].value = semantic === 'true';
                            }
                            else {
                                declarations[currentDeclaration].value = parseFloat(semantic);
                            }
                        }
                        continue;
                    }

                    // treat as symbol.
                    addSymbol(token);
                    opType = TYPE_SYMBOL;
                }

                return declarations;
            }


            /**
             * @constructor
             * @extends clay.core.Base
             * @alias clay.Shader
             * @param {string} vertex
             * @param {string} fragment
             * @example
             * // Create a phong shader
             * var shader = new clay.Shader(
             *      clay.Shader.source('clay.standard.vertex'),
             *      clay.Shader.source('clay.standard.fragment')
             * );
             */
            function Shader(vertex, fragment) {
                // First argument can be { vertex, fragment }
                if (typeof vertex === 'object') {
                    fragment = vertex.fragment;
                    vertex = vertex.vertex;
                }

                vertex = removeComment(vertex);
                fragment = removeComment(fragment);

                this._shaderID = getShaderID(vertex, fragment);

                this._vertexCode = Shader.parseImport(vertex);
                this._fragmentCode = Shader.parseImport(fragment);

                /**
                 * @readOnly
                 */
                this.attributeSemantics = {};
                /**
                 * @readOnly
                 */
                this.matrixSemantics = {};
                /**
                 * @readOnly
                 */
                this.uniformSemantics = {};
                /**
                 * @readOnly
                 */
                this.matrixSemanticKeys = [];
                /**
                 * @readOnly
                 */
                this.uniformTemplates = {};
                /**
                 * @readOnly
                 */
                this.attributes = {};
                /**
                 * @readOnly
                 */
                this.textures = {};
                /**
                 * @readOnly
                 */
                this.vertexDefines = {};
                /**
                 * @readOnly
                 */
                this.fragmentDefines = {};

                this._parseAttributes();
                this._parseUniforms();
                this._parseDefines();
            }

            Shader.prototype = {

                constructor: Shader,

                // Create a new uniform instance for material
                createUniforms: function () {
                    var uniforms = {};

                    for (var symbol in this.uniformTemplates){
                        var uniformTpl = this.uniformTemplates[symbol];
                        uniforms[symbol] = {
                            type: uniformTpl.type,
                            value: uniformTpl.value()
                        };
                    }

                    return uniforms;
                },

                _parseImport: function () {
                    this._vertexCode = Shader.parseImport(this.vertex);
                    this._fragmentCode = Shader.parseImport(this.fragment);
                },

                _addSemanticUniform: function (symbol, uniformType, semantic) {
                    // This case is only for SKIN_MATRIX
                    // TODO
                    if (attributeSemantics.indexOf(semantic) >= 0) {
                        this.attributeSemantics[semantic] = {
                            symbol: symbol,
                            type: uniformType
                        };
                    }
                    else if (matrixSemantics.indexOf(semantic) >= 0) {
                        var isTranspose = false;
                        var semanticNoTranspose = semantic;
                        if (semantic.match(/TRANSPOSE$/)) {
                            isTranspose = true;
                            semanticNoTranspose = semantic.slice(0, -9);
                        }
                        this.matrixSemantics[semantic] = {
                            symbol: symbol,
                            type: uniformType,
                            isTranspose: isTranspose,
                            semanticNoTranspose: semanticNoTranspose
                        };
                    }
                    else if (uniformSemantics.indexOf(semantic) >= 0) {
                        this.uniformSemantics[semantic] = {
                            symbol: symbol,
                            type: uniformType
                        };
                    }
                },

                _addMaterialUniform: function (symbol, type, uniformType, defaultValueFunc, isArray, materialUniforms) {
                    materialUniforms[symbol] = {
                        type: uniformType,
                        value: isArray ? uniformValueConstructor['array'] : (defaultValueFunc || uniformValueConstructor[type]),
                        semantic: null
                    };
                },

                _parseUniforms: function () {
                    var uniforms = {};
                    var self = this;
                    var shaderType = 'vertex';
                    this._uniformList = [];

                    this._vertexCode = this._vertexCode.replace(uniformRegex, _uniformParser);
                    shaderType = 'fragment';
                    this._fragmentCode = this._fragmentCode.replace(uniformRegex, _uniformParser);

                    self.matrixSemanticKeys = Object.keys(this.matrixSemantics);

                    function makeDefaultValueFunc(value) {
                        return value != null ? function () { return value; } : null;
                    }

                    function _uniformParser(str, type, content) {
                        var declaredUniforms = parseDeclarations(type, content);
                        var uniformMainStr = [];
                        for (var symbol in declaredUniforms) {

                            var uniformInfo = declaredUniforms[symbol];
                            var semantic = uniformInfo.semantic;
                            var tmpStr = symbol;
                            var uniformType = uniformTypeMap[type];
                            var defaultValueFunc = makeDefaultValueFunc(declaredUniforms[symbol].value);
                            if (declaredUniforms[symbol].isArray) {
                                tmpStr += '[' + declaredUniforms[symbol].arraySize + ']';
                                uniformType += 'v';
                            }

                            uniformMainStr.push(tmpStr);

                            self._uniformList.push(symbol);

                            if (!uniformInfo.ignore) {
                                if (type === 'sampler2D' || type === 'samplerCube') {
                                    // Texture is default disabled
                                    self.textures[symbol] = {
                                        shaderType: shaderType,
                                        type: type
                                    };
                                }

                                if (semantic) {
                                    // TODO Should not declare multiple symbols if have semantic.
                                    self._addSemanticUniform(symbol, uniformType, semantic);
                                }
                                else {
                                    self._addMaterialUniform(
                                        symbol, type, uniformType, defaultValueFunc,
                                        declaredUniforms[symbol].isArray, uniforms
                                    );
                                }
                            }
                        }
                        return uniformMainStr.length > 0
                            ? 'uniform ' + type + ' ' + uniformMainStr.join(',') + ';\n' : '';
                    }

                    this.uniformTemplates = uniforms;
                },

                _parseAttributes: function () {
                    var attributes = {};
                    var self = this;
                    this._vertexCode = this._vertexCode.replace(attributeRegex, _attributeParser);

                    function _attributeParser(str, type, content) {
                        var declaredAttributes = parseDeclarations(type, content);

                        var size = attributeSizeMap[type] || 1;
                        var attributeMainStr = [];
                        for (var symbol in declaredAttributes) {
                            var semantic = declaredAttributes[symbol].semantic;
                            attributes[symbol] = {
                                // TODO Can only be float
                                type: 'float',
                                size: size,
                                semantic: semantic || null
                            };
                            // TODO Should not declare multiple symbols if have semantic.
                            if (semantic) {
                                if (attributeSemantics.indexOf(semantic) < 0) {
                                    throw new Error('Unkown semantic "' + semantic + '"');
                                }
                                else {
                                    self.attributeSemantics[semantic] = {
                                        symbol: symbol,
                                        type: type
                                    };
                                }
                            }
                            attributeMainStr.push(symbol);
                        }

                        return 'attribute ' + type + ' ' + attributeMainStr.join(',') + ';\n';
                    }

                    this.attributes = attributes;
                },

                _parseDefines: function () {
                    var self = this;
                    var shaderType = 'vertex';
                    this._vertexCode = this._vertexCode.replace(defineRegex, _defineParser);
                    shaderType = 'fragment';
                    this._fragmentCode = this._fragmentCode.replace(defineRegex, _defineParser);

                    function _defineParser(str, symbol, value) {
                        var defines = shaderType === 'vertex' ? self.vertexDefines : self.fragmentDefines;
                        if (!defines[symbol]) { // Haven't been defined by user
                            if (value === 'false') {
                                defines[symbol] = false;
                            }
                            else if (value === 'true') {
                                defines[symbol] = true;
                            }
                            else {
                                defines[symbol] = value
                                    // If can parse to float
                                    ? (isNaN(parseFloat(value)) ? value.trim() : parseFloat(value))
                                    : null;
                            }
                        }
                        return '';
                    }
                },

                /**
                 * Clone a new shader
                 * @return {clay.Shader}
                 */
                clone: function () {
                    var code = shaderCodeCache[this._shaderID];
                    var shader = new Shader(code.vertex, code.fragment);
                    return shader;
                }
            };

            if (Object.defineProperty) {
                Object.defineProperty(Shader.prototype, 'shaderID', {
                    get: function () {
                        return this._shaderID;
                    }
                });
                Object.defineProperty(Shader.prototype, 'vertex', {
                    get: function () {
                        return this._vertexCode;
                    }
                });
                Object.defineProperty(Shader.prototype, 'fragment', {
                    get: function () {
                        return this._fragmentCode;
                    }
                });
                Object.defineProperty(Shader.prototype, 'uniforms', {
                    get: function () {
                        return this._uniformList;
                    }
                });
            }

            var importRegex = /(@import)\s*([0-9a-zA-Z_\-\.]*)/g;
            Shader.parseImport = function (shaderStr) {
                shaderStr = shaderStr.replace(importRegex, function (str, importSymbol, importName) {
                    var str = Shader.source(importName);
                    if (str) {
                        // Recursively parse
                        return Shader.parseImport(str);
                    }
                    else {
                        console.error('Shader chunk "' + importName + '" not existed in library');
                        return '';
                    }
                });
                return shaderStr;
            };

            var exportRegex = /(@export)\s*([0-9a-zA-Z_\-\.]*)\s*\n([\s\S]*?)@end/g;

            /**
             * Import shader source
             * @param  {string} shaderStr
             * @memberOf clay.Shader
             */
            Shader['import'] = function (shaderStr) {
                shaderStr.replace(exportRegex, function (str, exportSymbol, exportName, code) {
                    var code = code.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+\x24)/g, '');
                    if (code) {
                        var parts = exportName.split('.');
                        var obj = Shader.codes;
                        var i = 0;
                        var key;
                        while (i < parts.length - 1) {
                            key = parts[i++];
                            if (!obj[key]) {
                                obj[key] = {};
                            }
                            obj = obj[key];
                        }
                        key = parts[i];
                        obj[key] = code;
                    }
                    return code;
                });
            };

            /**
             * Library to store all the loaded shader codes
             * @type {Object}
             * @readOnly
             * @memberOf clay.Shader
             */
            Shader.codes = {};

            /**
             * Get shader source
             * @param  {string} name
             * @return {string}
             */
            Shader.source = function (name) {
                var parts = name.split('.');
                var obj = Shader.codes;
                var i = 0;
                while (obj && i < parts.length) {
                    var key = parts[i++];
                    obj = obj[key];
                }
                if (typeof obj !== 'string') {
                    // FIXME Use default instead
                    console.error('Shader "' + name + '" not existed in library');
                    return '';
                }
                return obj;
            };

            /* harmony default export */ __webpack_exports__["a"] = (Shader);


            /***/ }),
        /* 9 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__ = __webpack_require__(21);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__ = __webpack_require__(12);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__glmatrix_quat__ = __webpack_require__(55);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__glmatrix_mat3__ = __webpack_require__(34);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Vector3__ = __webpack_require__(3);






            /**
             * @constructor
             * @alias clay.Matrix4
             */
            var Matrix4 = function() {

                this._axisX = new __WEBPACK_IMPORTED_MODULE_4__Vector3__["a" /* default */]();
                this._axisY = new __WEBPACK_IMPORTED_MODULE_4__Vector3__["a" /* default */]();
                this._axisZ = new __WEBPACK_IMPORTED_MODULE_4__Vector3__["a" /* default */]();

                /**
                 * Storage of Matrix4
                 * @name array
                 * @type {Float32Array}
                 * @memberOf clay.Matrix4#
                 */
                this.array = __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].create();

                /**
                 * @name _dirty
                 * @type {boolean}
                 * @memberOf clay.Matrix4#
                 */
                this._dirty = true;
            };

            Matrix4.prototype = {

                constructor: Matrix4,

                /**
                 * Set components from array
                 * @param  {Float32Array|number[]} arr
                 */
                setArray: function (arr) {
                    for (var i = 0; i < this.array.length; i++) {
                        this.array[i] = arr[i];
                    }
                    this._dirty = true;
                    return this;
                },
                /**
                 * Calculate the adjugate of self, in-place
                 * @return {clay.Matrix4}
                 */
                adjoint: function() {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].adjoint(this.array, this.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Clone a new Matrix4
                 * @return {clay.Matrix4}
                 */
                clone: function() {
                    return (new Matrix4()).copy(this);
                },

                /**
                 * Copy from b
                 * @param  {clay.Matrix4} b
                 * @return {clay.Matrix4}
                 */
                copy: function(a) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].copy(this.array, a.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Calculate matrix determinant
                 * @return {number}
                 */
                determinant: function() {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].determinant(this.array);
                },

                /**
                 * Set upper 3x3 part from quaternion
                 * @param  {clay.Quaternion} q
                 * @return {clay.Matrix4}
                 */
                fromQuat: function(q) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].fromQuat(this.array, q.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Set from a quaternion rotation and a vector translation
                 * @param  {clay.Quaternion} q
                 * @param  {clay.Vector3} v
                 * @return {clay.Matrix4}
                 */
                fromRotationTranslation: function(q, v) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].fromRotationTranslation(this.array, q.array, v.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Set from Matrix2d, it is used when converting a 2d shape to 3d space.
                 * In 3d space it is equivalent to ranslate on xy plane and rotate about z axis
                 * @param  {clay.Matrix2d} m2d
                 * @return {clay.Matrix4}
                 */
                fromMat2d: function(m2d) {
                    Matrix4.fromMat2d(this, m2d);
                    return this;
                },

                /**
                 * Set from frustum bounds
                 * @param  {number} left
                 * @param  {number} right
                 * @param  {number} bottom
                 * @param  {number} top
                 * @param  {number} near
                 * @param  {number} far
                 * @return {clay.Matrix4}
                 */
                frustum: function (left, right, bottom, top, near, far) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].frustum(this.array, left, right, bottom, top, near, far);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Set to a identity matrix
                 * @return {clay.Matrix4}
                 */
                identity: function() {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].identity(this.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Invert self
                 * @return {clay.Matrix4}
                 */
                invert: function() {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].invert(this.array, this.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Set as a matrix with the given eye position, focal point, and up axis
                 * @param  {clay.Vector3} eye
                 * @param  {clay.Vector3} center
                 * @param  {clay.Vector3} up
                 * @return {clay.Matrix4}
                 */
                lookAt: function(eye, center, up) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].lookAt(this.array, eye.array, center.array, up.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Alias for mutiply
                 * @param  {clay.Matrix4} b
                 * @return {clay.Matrix4}
                 */
                mul: function(b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].mul(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Alias for multiplyLeft
                 * @param  {clay.Matrix4} a
                 * @return {clay.Matrix4}
                 */
                mulLeft: function(a) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].mul(this.array, a.array, this.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Multiply self and b
                 * @param  {clay.Matrix4} b
                 * @return {clay.Matrix4}
                 */
                multiply: function(b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].multiply(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Multiply a and self, a is on the left
                 * @param  {clay.Matrix3} a
                 * @return {clay.Matrix3}
                 */
                multiplyLeft: function(a) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].multiply(this.array, a.array, this.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Set as a orthographic projection matrix
                 * @param  {number} left
                 * @param  {number} right
                 * @param  {number} bottom
                 * @param  {number} top
                 * @param  {number} near
                 * @param  {number} far
                 * @return {clay.Matrix4}
                 */
                ortho: function(left, right, bottom, top, near, far) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].ortho(this.array, left, right, bottom, top, near, far);
                    this._dirty = true;
                    return this;
                },
                /**
                 * Set as a perspective projection matrix
                 * @param  {number} fovy
                 * @param  {number} aspect
                 * @param  {number} near
                 * @param  {number} far
                 * @return {clay.Matrix4}
                 */
                perspective: function(fovy, aspect, near, far) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].perspective(this.array, fovy, aspect, near, far);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Rotate self by rad about axis.
                 * Equal to right-multiply a rotaion matrix
                 * @param  {number}   rad
                 * @param  {clay.Vector3} axis
                 * @return {clay.Matrix4}
                 */
                rotate: function(rad, axis) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].rotate(this.array, this.array, rad, axis.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Rotate self by a given radian about X axis.
                 * Equal to right-multiply a rotaion matrix
                 * @param {number} rad
                 * @return {clay.Matrix4}
                 */
                rotateX: function(rad) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].rotateX(this.array, this.array, rad);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Rotate self by a given radian about Y axis.
                 * Equal to right-multiply a rotaion matrix
                 * @param {number} rad
                 * @return {clay.Matrix4}
                 */
                rotateY: function(rad) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].rotateY(this.array, this.array, rad);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Rotate self by a given radian about Z axis.
                 * Equal to right-multiply a rotaion matrix
                 * @param {number} rad
                 * @return {clay.Matrix4}
                 */
                rotateZ: function(rad) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].rotateZ(this.array, this.array, rad);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Scale self by s
                 * Equal to right-multiply a scale matrix
                 * @param  {clay.Vector3}  s
                 * @return {clay.Matrix4}
                 */
                scale: function(v) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].scale(this.array, this.array, v.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Translate self by v.
                 * Equal to right-multiply a translate matrix
                 * @param  {clay.Vector3}  v
                 * @return {clay.Matrix4}
                 */
                translate: function(v) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].translate(this.array, this.array, v.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Transpose self, in-place.
                 * @return {clay.Matrix2}
                 */
                transpose: function() {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].transpose(this.array, this.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Decompose a matrix to SRT
                 * @param {clay.Vector3} [scale]
                 * @param {clay.Quaternion} rotation
                 * @param {clay.Vector} position
                 * @see http://msdn.microsoft.com/en-us/library/microsoft.xna.framework.matrix.decompose.aspx
                 */
                decomposeMatrix: (function() {

                    var x = __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].create();
                    var y = __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].create();
                    var z = __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].create();

                    var m3 = __WEBPACK_IMPORTED_MODULE_3__glmatrix_mat3__["a" /* default */].create();

                    return function(scale, rotation, position) {

                        var el = this.array;
                        __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].set(x, el[0], el[1], el[2]);
                        __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].set(y, el[4], el[5], el[6]);
                        __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].set(z, el[8], el[9], el[10]);

                        var sx = __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].length(x);
                        var sy = __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].length(y);
                        var sz = __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].length(z);

                        // if determine is negative, we need to invert one scale
                        var det = this.determinant();
                        if (det < 0) {
                            sx = -sx;
                        }

                        if (scale) {
                            scale.set(sx, sy, sz);
                        }

                        position.set(el[12], el[13], el[14]);

                        __WEBPACK_IMPORTED_MODULE_3__glmatrix_mat3__["a" /* default */].fromMat4(m3, el);
                        // Not like mat4, mat3 in glmatrix seems to be row-based
                        // Seems fixed in gl-matrix 2.2.2
                        // https://github.com/toji/gl-matrix/issues/114
                        // mat3.transpose(m3, m3);

                        m3[0] /= sx;
                        m3[1] /= sx;
                        m3[2] /= sx;

                        m3[3] /= sy;
                        m3[4] /= sy;
                        m3[5] /= sy;

                        m3[6] /= sz;
                        m3[7] /= sz;
                        m3[8] /= sz;

                        __WEBPACK_IMPORTED_MODULE_2__glmatrix_quat__["a" /* default */].fromMat3(rotation.array, m3);
                        __WEBPACK_IMPORTED_MODULE_2__glmatrix_quat__["a" /* default */].normalize(rotation.array, rotation.array);

                        rotation._dirty = true;
                        position._dirty = true;
                    };
                })(),

                toString: function() {
                    return '[' + Array.prototype.join.call(this.array, ',') + ']';
                },

                toArray: function () {
                    return Array.prototype.slice.call(this.array);
                }
            };

            var defineProperty = Object.defineProperty;

            if (defineProperty) {
                var proto = Matrix4.prototype;
                /**
                 * Z Axis of local transform
                 * @name z
                 * @type {clay.Vector3}
                 * @memberOf clay.Matrix4
                 * @instance
                 */
                defineProperty(proto, 'z', {
                    get: function () {
                        var el = this.array;
                        this._axisZ.set(el[8], el[9], el[10]);
                        return this._axisZ;
                    },
                    set: function (v) {
                        // TODO Here has a problem
                        // If only set an item of vector will not work
                        var el = this.array;
                        v = v.array;
                        el[8] = v[0];
                        el[9] = v[1];
                        el[10] = v[2];

                        this._dirty = true;
                    }
                });

                /**
                 * Y Axis of local transform
                 * @name y
                 * @type {clay.Vector3}
                 * @memberOf clay.Matrix4
                 * @instance
                 */
                defineProperty(proto, 'y', {
                    get: function () {
                        var el = this.array;
                        this._axisY.set(el[4], el[5], el[6]);
                        return this._axisY;
                    },
                    set: function (v) {
                        var el = this.array;
                        v = v.array;
                        el[4] = v[0];
                        el[5] = v[1];
                        el[6] = v[2];

                        this._dirty = true;
                    }
                });

                /**
                 * X Axis of local transform
                 * @name x
                 * @type {clay.Vector3}
                 * @memberOf clay.Matrix4
                 * @instance
                 */
                defineProperty(proto, 'x', {
                    get: function () {
                        var el = this.array;
                        this._axisX.set(el[0], el[1], el[2]);
                        return this._axisX;
                    },
                    set: function (v) {
                        var el = this.array;
                        v = v.array;
                        el[0] = v[0];
                        el[1] = v[1];
                        el[2] = v[2];

                        this._dirty = true;
                    }
                })
            }

            /**
             * @param  {clay.Matrix4} out
             * @param  {clay.Matrix4} a
             * @return {clay.Matrix4}
             */
            Matrix4.adjoint = function(out, a) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].adjoint(out.array, a.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4} out
             * @param  {clay.Matrix4} a
             * @return {clay.Matrix4}
             */
            Matrix4.copy = function(out, a) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].copy(out.array, a.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4} a
             * @return {number}
             */
            Matrix4.determinant = function(a) {
                return __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].determinant(a.array);
            };

            /**
             * @param  {clay.Matrix4} out
             * @return {clay.Matrix4}
             */
            Matrix4.identity = function(out) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].identity(out.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4} out
             * @param  {number}  left
             * @param  {number}  right
             * @param  {number}  bottom
             * @param  {number}  top
             * @param  {number}  near
             * @param  {number}  far
             * @return {clay.Matrix4}
             */
            Matrix4.ortho = function(out, left, right, bottom, top, near, far) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].ortho(out.array, left, right, bottom, top, near, far);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4} out
             * @param  {number}  fovy
             * @param  {number}  aspect
             * @param  {number}  near
             * @param  {number}  far
             * @return {clay.Matrix4}
             */
            Matrix4.perspective = function(out, fovy, aspect, near, far) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].perspective(out.array, fovy, aspect, near, far);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4} out
             * @param  {clay.Vector3} eye
             * @param  {clay.Vector3} center
             * @param  {clay.Vector3} up
             * @return {clay.Matrix4}
             */
            Matrix4.lookAt = function(out, eye, center, up) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].lookAt(out.array, eye.array, center.array, up.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4} out
             * @param  {clay.Matrix4} a
             * @return {clay.Matrix4}
             */
            Matrix4.invert = function(out, a) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].invert(out.array, a.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4} out
             * @param  {clay.Matrix4} a
             * @param  {clay.Matrix4} b
             * @return {clay.Matrix4}
             */
            Matrix4.mul = function(out, a, b) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].mul(out.array, a.array, b.array);
                out._dirty = true;
                return out;
            };

            /**
             * @function
             * @param  {clay.Matrix4} out
             * @param  {clay.Matrix4} a
             * @param  {clay.Matrix4} b
             * @return {clay.Matrix4}
             */
            Matrix4.multiply = Matrix4.mul;

            /**
             * @param  {clay.Matrix4}    out
             * @param  {clay.Quaternion} q
             * @return {clay.Matrix4}
             */
            Matrix4.fromQuat = function(out, q) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].fromQuat(out.array, q.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4}    out
             * @param  {clay.Quaternion} q
             * @param  {clay.Vector3}    v
             * @return {clay.Matrix4}
             */
            Matrix4.fromRotationTranslation = function(out, q, v) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].fromRotationTranslation(out.array, q.array, v.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4} m4
             * @param  {clay.Matrix2d} m2d
             * @return {clay.Matrix4}
             */
            Matrix4.fromMat2d = function(m4, m2d) {
                m4._dirty = true;
                var m2d = m2d.array;
                var m4 = m4.array;

                m4[0] = m2d[0];
                m4[4] = m2d[2];
                m4[12] = m2d[4];

                m4[1] = m2d[1];
                m4[5] = m2d[3];
                m4[13] = m2d[5];

                return m4;
            };

            /**
             * @param  {clay.Matrix4} out
             * @param  {clay.Matrix4} a
             * @param  {number}  rad
             * @param  {clay.Vector3} axis
             * @return {clay.Matrix4}
             */
            Matrix4.rotate = function(out, a, rad, axis) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].rotate(out.array, a.array, rad, axis.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4} out
             * @param  {clay.Matrix4} a
             * @param  {number}  rad
             * @return {clay.Matrix4}
             */
            Matrix4.rotateX = function(out, a, rad) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].rotateX(out.array, a.array, rad);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4} out
             * @param  {clay.Matrix4} a
             * @param  {number}  rad
             * @return {clay.Matrix4}
             */
            Matrix4.rotateY = function(out, a, rad) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].rotateY(out.array, a.array, rad);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4} out
             * @param  {clay.Matrix4} a
             * @param  {number}  rad
             * @return {clay.Matrix4}
             */
            Matrix4.rotateZ = function(out, a, rad) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].rotateZ(out.array, a.array, rad);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4} out
             * @param  {clay.Matrix4} a
             * @param  {clay.Vector3} v
             * @return {clay.Matrix4}
             */
            Matrix4.scale = function(out, a, v) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].scale(out.array, a.array, v.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4} out
             * @param  {clay.Matrix4} a
             * @return {clay.Matrix4}
             */
            Matrix4.transpose = function(out, a) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].transpose(out.array, a.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4} out
             * @param  {clay.Matrix4} a
             * @param  {clay.Vector3} v
             * @return {clay.Matrix4}
             */
            Matrix4.translate = function(out, a, v) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].translate(out.array, a.array, v.array);
                out._dirty = true;
                return out;
            };

            /* harmony default export */ __webpack_exports__["a"] = (Matrix4);


            /***/ }),
        /* 10 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Base__ = __webpack_require__(7);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Texture__ = __webpack_require__(4);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TextureCube__ = __webpack_require__(27);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_glenum__ = __webpack_require__(11);
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_Cache__ = __webpack_require__(57);






            var KEY_FRAMEBUFFER = 'framebuffer';
            var KEY_RENDERBUFFER = 'renderbuffer';
            var KEY_RENDERBUFFER_WIDTH = KEY_RENDERBUFFER + '_width';
            var KEY_RENDERBUFFER_HEIGHT = KEY_RENDERBUFFER + '_height';
            var KEY_RENDERBUFFER_ATTACHED = KEY_RENDERBUFFER + '_attached';
            var KEY_DEPTHTEXTURE_ATTACHED = 'depthtexture_attached';

            var GL_FRAMEBUFFER = __WEBPACK_IMPORTED_MODULE_3__core_glenum__["a" /* default */].FRAMEBUFFER;
            var GL_RENDERBUFFER = __WEBPACK_IMPORTED_MODULE_3__core_glenum__["a" /* default */].RENDERBUFFER;
            var GL_DEPTH_ATTACHMENT = __WEBPACK_IMPORTED_MODULE_3__core_glenum__["a" /* default */].DEPTH_ATTACHMENT;
            var GL_COLOR_ATTACHMENT0 = __WEBPACK_IMPORTED_MODULE_3__core_glenum__["a" /* default */].COLOR_ATTACHMENT0;
            /**
             * @constructor clay.FrameBuffer
             * @extends clay.core.Base
             */
            var FrameBuffer = __WEBPACK_IMPORTED_MODULE_0__core_Base__["a" /* default */].extend(
                /** @lends clay.FrameBuffer# */
                {
                    /**
                     * If use depth buffer
                     * @type {boolean}
                     */
                    depthBuffer: true,

                    /**
                     * @type {Object}
                     */
                    viewport: null,

                    _width: 0,
                    _height: 0,

                    _textures: null,

                    _boundRenderer: null,
                }, function () {
                    // Use cache
                    this._cache = new __WEBPACK_IMPORTED_MODULE_4__core_Cache__["a" /* default */]();

                    this._textures = {};
                },

                /**@lends clay.FrameBuffer.prototype. */
                {
                    /**
                     * Get attached texture width
                     * {number}
                     */
                    // FIXME Can't use before #bind
                    getTextureWidth: function () {
                        return this._width;
                    },

                    /**
                     * Get attached texture height
                     * {number}
                     */
                    getTextureHeight: function () {
                        return this._height;
                    },

                    /**
                     * Bind the framebuffer to given renderer before rendering
                     * @param  {clay.Renderer} renderer
                     */
                    bind: function (renderer) {

                        if (renderer.__currentFrameBuffer) {
                            // Already bound
                            if (renderer.__currentFrameBuffer === this) {
                                return;
                            }

                            console.warn('Renderer already bound with another framebuffer. Unbind it first');
                        }
                        renderer.__currentFrameBuffer = this;

                        var _gl = renderer.gl;

                        _gl.bindFramebuffer(GL_FRAMEBUFFER, this._getFrameBufferGL(renderer));
                        this._boundRenderer = renderer;
                        var cache = this._cache;

                        cache.put('viewport', renderer.viewport);

                        var hasTextureAttached = false;
                        var width;
                        var height;
                        for (var attachment in this._textures) {
                            hasTextureAttached = true;
                            var obj = this._textures[attachment];
                            if (obj) {
                                // TODO Do width, height checking, make sure size are same
                                width = obj.texture.width;
                                height = obj.texture.height;
                                // Attach textures
                                this._doAttach(renderer, obj.texture, attachment, obj.target);
                            }
                        }

                        this._width = width;
                        this._height = height;

                        if (!hasTextureAttached && this.depthBuffer) {
                            console.error('Must attach texture before bind, or renderbuffer may have incorrect width and height.')
                        }

                        if (this.viewport) {
                            renderer.setViewport(this.viewport);
                        }
                        else {
                            renderer.setViewport(0, 0, width, height, 1);
                        }

                        var attachedTextures = cache.get('attached_textures');
                        if (attachedTextures) {
                            for (var attachment in attachedTextures) {
                                if (!this._textures[attachment]) {
                                    var target = attachedTextures[attachment];
                                    this._doDetach(_gl, attachment, target);
                                }
                            }
                        }
                        if (!cache.get(KEY_DEPTHTEXTURE_ATTACHED) && this.depthBuffer) {
                            // Create a new render buffer
                            if (cache.miss(KEY_RENDERBUFFER)) {
                                cache.put(KEY_RENDERBUFFER, _gl.createRenderbuffer());
                            }
                            var renderbuffer = cache.get(KEY_RENDERBUFFER);

                            if (width !== cache.get(KEY_RENDERBUFFER_WIDTH)
                                || height !== cache.get(KEY_RENDERBUFFER_HEIGHT)) {
                                _gl.bindRenderbuffer(GL_RENDERBUFFER, renderbuffer);
                                _gl.renderbufferStorage(GL_RENDERBUFFER, _gl.DEPTH_COMPONENT16, width, height);
                                cache.put(KEY_RENDERBUFFER_WIDTH, width);
                                cache.put(KEY_RENDERBUFFER_HEIGHT, height);
                                _gl.bindRenderbuffer(GL_RENDERBUFFER, null);
                            }
                            if (!cache.get(KEY_RENDERBUFFER_ATTACHED)) {
                                _gl.framebufferRenderbuffer(GL_FRAMEBUFFER, GL_DEPTH_ATTACHMENT, GL_RENDERBUFFER, renderbuffer);
                                cache.put(KEY_RENDERBUFFER_ATTACHED, true);
                            }
                        }
                    },

                    /**
                     * Unbind the frame buffer after rendering
                     * @param  {clay.Renderer} renderer
                     */
                    unbind: function (renderer) {
                        // Remove status record on renderer
                        renderer.__currentFrameBuffer = null;

                        var _gl = renderer.gl;

                        _gl.bindFramebuffer(GL_FRAMEBUFFER, null);
                        this._boundRenderer = null;

                        this._cache.use(renderer.__uid__);
                        var viewport = this._cache.get('viewport');
                        // Reset viewport;
                        if (viewport) {
                            renderer.setViewport(viewport);
                        }

                        this.updateMipmap(renderer);
                    },

                    // Because the data of texture is changed over time,
                    // Here update the mipmaps of texture each time after rendered;
                    updateMipmap: function (renderer) {
                        var _gl = renderer.gl;
                        for (var attachment in this._textures) {
                            var obj = this._textures[attachment];
                            if (obj) {
                                var texture = obj.texture;
                                // FIXME some texture format can't generate mipmap
                                if (!texture.NPOT && texture.useMipmap
                                    && texture.minFilter === __WEBPACK_IMPORTED_MODULE_1__Texture__["a" /* default */].LINEAR_MIPMAP_LINEAR) {
                                    var target = texture.textureType === 'textureCube' ? __WEBPACK_IMPORTED_MODULE_3__core_glenum__["a" /* default */].TEXTURE_CUBE_MAP : __WEBPACK_IMPORTED_MODULE_3__core_glenum__["a" /* default */].TEXTURE_2D;
                                    _gl.bindTexture(target, texture.getWebGLTexture(renderer));
                                    _gl.generateMipmap(target);
                                    _gl.bindTexture(target, null);
                                }
                            }
                        }
                    },


                    // 0x8CD5, 36053, FRAMEBUFFER_COMPLETE
                    // 0x8CD6, 36054, FRAMEBUFFER_INCOMPLETE_ATTACHMENT
                    // 0x8CD7, 36055, FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT
                    // 0x8CD9, 36057, FRAMEBUFFER_INCOMPLETE_DIMENSIONS
                    // 0x8CDD, 36061, FRAMEBUFFER_UNSUPPORTED
                    checkStatus: function (_gl) {
                        return _gl.checkFramebufferStatus(GL_FRAMEBUFFER);
                    },

                    _getFrameBufferGL: function (renderer) {
                        var cache = this._cache;
                        cache.use(renderer.__uid__);

                        if (cache.miss(KEY_FRAMEBUFFER)) {
                            cache.put(KEY_FRAMEBUFFER, renderer.gl.createFramebuffer());
                        }

                        return cache.get(KEY_FRAMEBUFFER);
                    },

                    /**
                     * Attach a texture(RTT) to the framebuffer
                     * @param  {clay.Texture} texture
                     * @param  {number} [attachment=gl.COLOR_ATTACHMENT0]
                     * @param  {number} [target=gl.TEXTURE_2D]
                     */
                    attach: function (texture, attachment, target) {

                        if (!texture.width) {
                            throw new Error('The texture attached to color buffer is not a valid.');
                        }
                        // TODO width and height check

                        // If the depth_texture extension is enabled, developers
                        // Can attach a depth texture to the depth buffer
                        // http://blog.tojicode.com/2012/07/using-webgldepthtexture.html
                        attachment = attachment || GL_COLOR_ATTACHMENT0;
                        target = target || __WEBPACK_IMPORTED_MODULE_3__core_glenum__["a" /* default */].TEXTURE_2D;

                        var boundRenderer = this._boundRenderer;
                        var _gl = boundRenderer && boundRenderer.gl;
                        var attachedTextures;

                        if (_gl) {
                            var cache = this._cache;
                            cache.use(boundRenderer.__uid__);
                            attachedTextures = cache.get('attached_textures');
                        }

                        // Check if texture attached
                        var previous = this._textures[attachment];
                        if (previous && previous.target === target
                            && previous.texture === texture
                            && (attachedTextures && attachedTextures[attachment] != null)
                        ) {
                            return;
                        }

                        var canAttach = true;
                        if (boundRenderer) {
                            canAttach = this._doAttach(boundRenderer, texture, attachment, target);
                            // Set viewport again incase attached to different size textures.
                            if (!this.viewport) {
                                boundRenderer.setViewport(0, 0, texture.width, texture.height, 1);
                            }
                        }

                        if (canAttach) {
                            this._textures[attachment] = this._textures[attachment] || {};
                            this._textures[attachment].texture = texture;
                            this._textures[attachment].target = target;
                        }
                    },

                    _doAttach: function (renderer, texture, attachment, target) {
                        var _gl = renderer.gl;
                        // Make sure texture is always updated
                        // Because texture width or height may be changed and in this we can't be notified
                        // FIXME awkward;
                        var webglTexture = texture.getWebGLTexture(renderer);
                        // Assume cache has been used.
                        var attachedTextures = this._cache.get('attached_textures');
                        if (attachedTextures && attachedTextures[attachment]) {
                            var obj = attachedTextures[attachment];
                            // Check if texture and target not changed
                            if (obj.texture === texture && obj.target === target) {
                                return;
                            }
                        }
                        attachment = +attachment;

                        var canAttach = true;
                        if (attachment === GL_DEPTH_ATTACHMENT || attachment === __WEBPACK_IMPORTED_MODULE_3__core_glenum__["a" /* default */].DEPTH_STENCIL_ATTACHMENT) {
                            var extension = renderer.getGLExtension('WEBGL_depth_texture');

                            if (!extension) {
                                console.error('Depth texture is not supported by the browser');
                                canAttach = false;
                            }
                            if (texture.format !== __WEBPACK_IMPORTED_MODULE_3__core_glenum__["a" /* default */].DEPTH_COMPONENT
                                && texture.format !== __WEBPACK_IMPORTED_MODULE_3__core_glenum__["a" /* default */].DEPTH_STENCIL
                            ) {
                                console.error('The texture attached to depth buffer is not a valid.');
                                canAttach = false;
                            }

                            // Dispose render buffer created previous
                            if (canAttach) {
                                var renderbuffer = this._cache.get(KEY_RENDERBUFFER);
                                if (renderbuffer) {
                                    _gl.framebufferRenderbuffer(GL_FRAMEBUFFER, GL_DEPTH_ATTACHMENT, GL_RENDERBUFFER, null);
                                    _gl.deleteRenderbuffer(renderbuffer);
                                    this._cache.put(KEY_RENDERBUFFER, false);
                                }

                                this._cache.put(KEY_RENDERBUFFER_ATTACHED, false);
                                this._cache.put(KEY_DEPTHTEXTURE_ATTACHED, true);
                            }
                        }

                        // Mipmap level can only be 0
                        _gl.framebufferTexture2D(GL_FRAMEBUFFER, attachment, target, webglTexture, 0);

                        if (!attachedTextures) {
                            attachedTextures = {};
                            this._cache.put('attached_textures', attachedTextures);
                        }
                        attachedTextures[attachment] = attachedTextures[attachment] || {};
                        attachedTextures[attachment].texture = texture;
                        attachedTextures[attachment].target = target;

                        return canAttach;
                    },

                    _doDetach: function (_gl, attachment, target) {
                        // Detach a texture from framebuffer
                        // https://github.com/KhronosGroup/WebGL/blob/master/conformance-suites/1.0.0/conformance/framebuffer-test.html#L145
                        _gl.framebufferTexture2D(GL_FRAMEBUFFER, attachment, target, null, 0);

                        // Assume cache has been used.
                        var attachedTextures = this._cache.get('attached_textures');
                        if (attachedTextures && attachedTextures[attachment]) {
                            attachedTextures[attachment] = null;
                        }

                        if (attachment === GL_DEPTH_ATTACHMENT || attachment === __WEBPACK_IMPORTED_MODULE_3__core_glenum__["a" /* default */].DEPTH_STENCIL_ATTACHMENT) {
                            this._cache.put(KEY_DEPTHTEXTURE_ATTACHED, false);
                        }
                    },

                    /**
                     * Detach a texture
                     * @param  {number} [attachment=gl.COLOR_ATTACHMENT0]
                     * @param  {number} [target=gl.TEXTURE_2D]
                     */
                    detach: function (attachment, target) {
                        // TODO depth extension check ?
                        this._textures[attachment] = null;
                        if (this._boundRenderer) {
                            var cache = this._cache;
                            cache.use(this._boundRenderer.__uid__);
                            this._doDetach(this._boundRenderer.gl, attachment, target);
                        }
                    },
                    /**
                     * Dispose
                     * @param  {WebGLRenderingContext} _gl
                     */
                    dispose: function (renderer) {

                        var _gl = renderer.gl;
                        var cache = this._cache;

                        cache.use(renderer.__uid__);

                        var renderBuffer = cache.get(KEY_RENDERBUFFER);
                        if (renderBuffer) {
                            _gl.deleteRenderbuffer(renderBuffer);
                        }
                        var frameBuffer = cache.get(KEY_FRAMEBUFFER);
                        if (frameBuffer) {
                            _gl.deleteFramebuffer(frameBuffer);
                        }
                        cache.deleteContext(renderer.__uid__);

                        // Clear cache for reusing
                        this._textures = {};

                    }
                });

            FrameBuffer.DEPTH_ATTACHMENT = GL_DEPTH_ATTACHMENT;
            FrameBuffer.COLOR_ATTACHMENT0 = GL_COLOR_ATTACHMENT0;
            FrameBuffer.STENCIL_ATTACHMENT = __WEBPACK_IMPORTED_MODULE_3__core_glenum__["a" /* default */].STENCIL_ATTACHMENT;
            FrameBuffer.DEPTH_STENCIL_ATTACHMENT = __WEBPACK_IMPORTED_MODULE_3__core_glenum__["a" /* default */].DEPTH_STENCIL_ATTACHMENT;

            /* harmony default export */ __webpack_exports__["a"] = (FrameBuffer);


            /***/ }),
        /* 11 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /**
             * @namespace clay.core.glenum
             * @see http://www.khronos.org/registry/webgl/specs/latest/1.0/#5.14
             */
            /* harmony default export */ __webpack_exports__["a"] = ({
                /* ClearBufferMask */
                DEPTH_BUFFER_BIT               : 0x00000100,
                STENCIL_BUFFER_BIT             : 0x00000400,
                COLOR_BUFFER_BIT               : 0x00004000,

                /* BeginMode */
                POINTS                         : 0x0000,
                LINES                          : 0x0001,
                LINE_LOOP                      : 0x0002,
                LINE_STRIP                     : 0x0003,
                TRIANGLES                      : 0x0004,
                TRIANGLE_STRIP                 : 0x0005,
                TRIANGLE_FAN                   : 0x0006,

                /* AlphaFunction (not supported in ES20) */
                /*      NEVER */
                /*      LESS */
                /*      EQUAL */
                /*      LEQUAL */
                /*      GREATER */
                /*      NOTEQUAL */
                /*      GEQUAL */
                /*      ALWAYS */

                /* BlendingFactorDest */
                ZERO                           : 0,
                ONE                            : 1,
                SRC_COLOR                      : 0x0300,
                ONE_MINUS_SRC_COLOR            : 0x0301,
                SRC_ALPHA                      : 0x0302,
                ONE_MINUS_SRC_ALPHA            : 0x0303,
                DST_ALPHA                      : 0x0304,
                ONE_MINUS_DST_ALPHA            : 0x0305,

                /* BlendingFactorSrc */
                /*      ZERO */
                /*      ONE */
                DST_COLOR                      : 0x0306,
                ONE_MINUS_DST_COLOR            : 0x0307,
                SRC_ALPHA_SATURATE             : 0x0308,
                /*      SRC_ALPHA */
                /*      ONE_MINUS_SRC_ALPHA */
                /*      DST_ALPHA */
                /*      ONE_MINUS_DST_ALPHA */

                /* BlendEquationSeparate */
                FUNC_ADD                       : 0x8006,
                BLEND_EQUATION                 : 0x8009,
                BLEND_EQUATION_RGB             : 0x8009, /* same as BLEND_EQUATION */
                BLEND_EQUATION_ALPHA           : 0x883D,

                /* BlendSubtract */
                FUNC_SUBTRACT                  : 0x800A,
                FUNC_REVERSE_SUBTRACT          : 0x800B,

                /* Separate Blend Functions */
                BLEND_DST_RGB                  : 0x80C8,
                BLEND_SRC_RGB                  : 0x80C9,
                BLEND_DST_ALPHA                : 0x80CA,
                BLEND_SRC_ALPHA                : 0x80CB,
                CONSTANT_COLOR                 : 0x8001,
                ONE_MINUS_CONSTANT_COLOR       : 0x8002,
                CONSTANT_ALPHA                 : 0x8003,
                ONE_MINUS_CONSTANT_ALPHA       : 0x8004,
                BLEND_COLOR                    : 0x8005,

                /* Buffer Objects */
                ARRAY_BUFFER                   : 0x8892,
                ELEMENT_ARRAY_BUFFER           : 0x8893,
                ARRAY_BUFFER_BINDING           : 0x8894,
                ELEMENT_ARRAY_BUFFER_BINDING   : 0x8895,

                STREAM_DRAW                    : 0x88E0,
                STATIC_DRAW                    : 0x88E4,
                DYNAMIC_DRAW                   : 0x88E8,

                BUFFER_SIZE                    : 0x8764,
                BUFFER_USAGE                   : 0x8765,

                CURRENT_VERTEX_ATTRIB          : 0x8626,

                /* CullFaceMode */
                FRONT                          : 0x0404,
                BACK                           : 0x0405,
                FRONT_AND_BACK                 : 0x0408,

                /* DepthFunction */
                /*      NEVER */
                /*      LESS */
                /*      EQUAL */
                /*      LEQUAL */
                /*      GREATER */
                /*      NOTEQUAL */
                /*      GEQUAL */
                /*      ALWAYS */

                /* EnableCap */
                /* TEXTURE_2D */
                CULL_FACE                      : 0x0B44,
                BLEND                          : 0x0BE2,
                DITHER                         : 0x0BD0,
                STENCIL_TEST                   : 0x0B90,
                DEPTH_TEST                     : 0x0B71,
                SCISSOR_TEST                   : 0x0C11,
                POLYGON_OFFSET_FILL            : 0x8037,
                SAMPLE_ALPHA_TO_COVERAGE       : 0x809E,
                SAMPLE_COVERAGE                : 0x80A0,

                /* ErrorCode */
                NO_ERROR                       : 0,
                INVALID_ENUM                   : 0x0500,
                INVALID_VALUE                  : 0x0501,
                INVALID_OPERATION              : 0x0502,
                OUT_OF_MEMORY                  : 0x0505,

                /* FrontFaceDirection */
                CW                             : 0x0900,
                CCW                            : 0x0901,

                /* GetPName */
                LINE_WIDTH                     : 0x0B21,
                ALIASED_POINT_SIZE_RANGE       : 0x846D,
                ALIASED_LINE_WIDTH_RANGE       : 0x846E,
                CULL_FACE_MODE                 : 0x0B45,
                FRONT_FACE                     : 0x0B46,
                DEPTH_RANGE                    : 0x0B70,
                DEPTH_WRITEMASK                : 0x0B72,
                DEPTH_CLEAR_VALUE              : 0x0B73,
                DEPTH_FUNC                     : 0x0B74,
                STENCIL_CLEAR_VALUE            : 0x0B91,
                STENCIL_FUNC                   : 0x0B92,
                STENCIL_FAIL                   : 0x0B94,
                STENCIL_PASS_DEPTH_FAIL        : 0x0B95,
                STENCIL_PASS_DEPTH_PASS        : 0x0B96,
                STENCIL_REF                    : 0x0B97,
                STENCIL_VALUE_MASK             : 0x0B93,
                STENCIL_WRITEMASK              : 0x0B98,
                STENCIL_BACK_FUNC              : 0x8800,
                STENCIL_BACK_FAIL              : 0x8801,
                STENCIL_BACK_PASS_DEPTH_FAIL   : 0x8802,
                STENCIL_BACK_PASS_DEPTH_PASS   : 0x8803,
                STENCIL_BACK_REF               : 0x8CA3,
                STENCIL_BACK_VALUE_MASK        : 0x8CA4,
                STENCIL_BACK_WRITEMASK         : 0x8CA5,
                VIEWPORT                       : 0x0BA2,
                SCISSOR_BOX                    : 0x0C10,
                /*      SCISSOR_TEST */
                COLOR_CLEAR_VALUE              : 0x0C22,
                COLOR_WRITEMASK                : 0x0C23,
                UNPACK_ALIGNMENT               : 0x0CF5,
                PACK_ALIGNMENT                 : 0x0D05,
                MAX_TEXTURE_SIZE               : 0x0D33,
                MAX_VIEWPORT_DIMS              : 0x0D3A,
                SUBPIXEL_BITS                  : 0x0D50,
                RED_BITS                       : 0x0D52,
                GREEN_BITS                     : 0x0D53,
                BLUE_BITS                      : 0x0D54,
                ALPHA_BITS                     : 0x0D55,
                DEPTH_BITS                     : 0x0D56,
                STENCIL_BITS                   : 0x0D57,
                POLYGON_OFFSET_UNITS           : 0x2A00,
                /*      POLYGON_OFFSET_FILL */
                POLYGON_OFFSET_FACTOR          : 0x8038,
                TEXTURE_BINDING_2D             : 0x8069,
                SAMPLE_BUFFERS                 : 0x80A8,
                SAMPLES                        : 0x80A9,
                SAMPLE_COVERAGE_VALUE          : 0x80AA,
                SAMPLE_COVERAGE_INVERT         : 0x80AB,

                /* GetTextureParameter */
                /*      TEXTURE_MAG_FILTER */
                /*      TEXTURE_MIN_FILTER */
                /*      TEXTURE_WRAP_S */
                /*      TEXTURE_WRAP_T */

                COMPRESSED_TEXTURE_FORMATS     : 0x86A3,

                /* HintMode */
                DONT_CARE                      : 0x1100,
                FASTEST                        : 0x1101,
                NICEST                         : 0x1102,

                /* HintTarget */
                GENERATE_MIPMAP_HINT            : 0x8192,

                /* DataType */
                BYTE                           : 0x1400,
                UNSIGNED_BYTE                  : 0x1401,
                SHORT                          : 0x1402,
                UNSIGNED_SHORT                 : 0x1403,
                INT                            : 0x1404,
                UNSIGNED_INT                   : 0x1405,
                FLOAT                          : 0x1406,

                /* PixelFormat */
                DEPTH_COMPONENT                : 0x1902,
                ALPHA                          : 0x1906,
                RGB                            : 0x1907,
                RGBA                           : 0x1908,
                LUMINANCE                      : 0x1909,
                LUMINANCE_ALPHA                : 0x190A,

                /* PixelType */
                /*      UNSIGNED_BYTE */
                UNSIGNED_SHORT_4_4_4_4         : 0x8033,
                UNSIGNED_SHORT_5_5_5_1         : 0x8034,
                UNSIGNED_SHORT_5_6_5           : 0x8363,

                /* Shaders */
                FRAGMENT_SHADER                  : 0x8B30,
                VERTEX_SHADER                    : 0x8B31,
                MAX_VERTEX_ATTRIBS               : 0x8869,
                MAX_VERTEX_UNIFORM_VECTORS       : 0x8DFB,
                MAX_VARYING_VECTORS              : 0x8DFC,
                MAX_COMBINED_TEXTURE_IMAGE_UNITS : 0x8B4D,
                MAX_VERTEX_TEXTURE_IMAGE_UNITS   : 0x8B4C,
                MAX_TEXTURE_IMAGE_UNITS          : 0x8872,
                MAX_FRAGMENT_UNIFORM_VECTORS     : 0x8DFD,
                SHADER_TYPE                      : 0x8B4F,
                DELETE_STATUS                    : 0x8B80,
                LINK_STATUS                      : 0x8B82,
                VALIDATE_STATUS                  : 0x8B83,
                ATTACHED_SHADERS                 : 0x8B85,
                ACTIVE_UNIFORMS                  : 0x8B86,
                ACTIVE_ATTRIBUTES                : 0x8B89,
                SHADING_LANGUAGE_VERSION         : 0x8B8C,
                CURRENT_PROGRAM                  : 0x8B8D,

                /* StencilFunction */
                NEVER                          : 0x0200,
                LESS                           : 0x0201,
                EQUAL                          : 0x0202,
                LEQUAL                         : 0x0203,
                GREATER                        : 0x0204,
                NOTEQUAL                       : 0x0205,
                GEQUAL                         : 0x0206,
                ALWAYS                         : 0x0207,

                /* StencilOp */
                /*      ZERO */
                KEEP                           : 0x1E00,
                REPLACE                        : 0x1E01,
                INCR                           : 0x1E02,
                DECR                           : 0x1E03,
                INVERT                         : 0x150A,
                INCR_WRAP                      : 0x8507,
                DECR_WRAP                      : 0x8508,

                /* StringName */
                VENDOR                         : 0x1F00,
                RENDERER                       : 0x1F01,
                VERSION                        : 0x1F02,

                /* TextureMagFilter */
                NEAREST                        : 0x2600,
                LINEAR                         : 0x2601,

                /* TextureMinFilter */
                /*      NEAREST */
                /*      LINEAR */
                NEAREST_MIPMAP_NEAREST         : 0x2700,
                LINEAR_MIPMAP_NEAREST          : 0x2701,
                NEAREST_MIPMAP_LINEAR          : 0x2702,
                LINEAR_MIPMAP_LINEAR           : 0x2703,

                /* TextureParameterName */
                TEXTURE_MAG_FILTER             : 0x2800,
                TEXTURE_MIN_FILTER             : 0x2801,
                TEXTURE_WRAP_S                 : 0x2802,
                TEXTURE_WRAP_T                 : 0x2803,

                /* TextureTarget */
                TEXTURE_2D                     : 0x0DE1,
                TEXTURE                        : 0x1702,

                TEXTURE_CUBE_MAP               : 0x8513,
                TEXTURE_BINDING_CUBE_MAP       : 0x8514,
                TEXTURE_CUBE_MAP_POSITIVE_X    : 0x8515,
                TEXTURE_CUBE_MAP_NEGATIVE_X    : 0x8516,
                TEXTURE_CUBE_MAP_POSITIVE_Y    : 0x8517,
                TEXTURE_CUBE_MAP_NEGATIVE_Y    : 0x8518,
                TEXTURE_CUBE_MAP_POSITIVE_Z    : 0x8519,
                TEXTURE_CUBE_MAP_NEGATIVE_Z    : 0x851A,
                MAX_CUBE_MAP_TEXTURE_SIZE      : 0x851C,

                /* TextureUnit */
                TEXTURE0                       : 0x84C0,
                TEXTURE1                       : 0x84C1,
                TEXTURE2                       : 0x84C2,
                TEXTURE3                       : 0x84C3,
                TEXTURE4                       : 0x84C4,
                TEXTURE5                       : 0x84C5,
                TEXTURE6                       : 0x84C6,
                TEXTURE7                       : 0x84C7,
                TEXTURE8                       : 0x84C8,
                TEXTURE9                       : 0x84C9,
                TEXTURE10                      : 0x84CA,
                TEXTURE11                      : 0x84CB,
                TEXTURE12                      : 0x84CC,
                TEXTURE13                      : 0x84CD,
                TEXTURE14                      : 0x84CE,
                TEXTURE15                      : 0x84CF,
                TEXTURE16                      : 0x84D0,
                TEXTURE17                      : 0x84D1,
                TEXTURE18                      : 0x84D2,
                TEXTURE19                      : 0x84D3,
                TEXTURE20                      : 0x84D4,
                TEXTURE21                      : 0x84D5,
                TEXTURE22                      : 0x84D6,
                TEXTURE23                      : 0x84D7,
                TEXTURE24                      : 0x84D8,
                TEXTURE25                      : 0x84D9,
                TEXTURE26                      : 0x84DA,
                TEXTURE27                      : 0x84DB,
                TEXTURE28                      : 0x84DC,
                TEXTURE29                      : 0x84DD,
                TEXTURE30                      : 0x84DE,
                TEXTURE31                      : 0x84DF,
                ACTIVE_TEXTURE                 : 0x84E0,

                /* TextureWrapMode */
                REPEAT                         : 0x2901,
                CLAMP_TO_EDGE                  : 0x812F,
                MIRRORED_REPEAT                : 0x8370,

                /* Uniform Types */
                FLOAT_VEC2                     : 0x8B50,
                FLOAT_VEC3                     : 0x8B51,
                FLOAT_VEC4                     : 0x8B52,
                INT_VEC2                       : 0x8B53,
                INT_VEC3                       : 0x8B54,
                INT_VEC4                       : 0x8B55,
                BOOL                           : 0x8B56,
                BOOL_VEC2                      : 0x8B57,
                BOOL_VEC3                      : 0x8B58,
                BOOL_VEC4                      : 0x8B59,
                FLOAT_MAT2                     : 0x8B5A,
                FLOAT_MAT3                     : 0x8B5B,
                FLOAT_MAT4                     : 0x8B5C,
                SAMPLER_2D                     : 0x8B5E,
                SAMPLER_CUBE                   : 0x8B60,

                /* Vertex Arrays */
                VERTEX_ATTRIB_ARRAY_ENABLED        : 0x8622,
                VERTEX_ATTRIB_ARRAY_SIZE           : 0x8623,
                VERTEX_ATTRIB_ARRAY_STRIDE         : 0x8624,
                VERTEX_ATTRIB_ARRAY_TYPE           : 0x8625,
                VERTEX_ATTRIB_ARRAY_NORMALIZED     : 0x886A,
                VERTEX_ATTRIB_ARRAY_POINTER        : 0x8645,
                VERTEX_ATTRIB_ARRAY_BUFFER_BINDING : 0x889F,

                /* Shader Source */
                COMPILE_STATUS                 : 0x8B81,

                /* Shader Precision-Specified Types */
                LOW_FLOAT                      : 0x8DF0,
                MEDIUM_FLOAT                   : 0x8DF1,
                HIGH_FLOAT                     : 0x8DF2,
                LOW_INT                        : 0x8DF3,
                MEDIUM_INT                     : 0x8DF4,
                HIGH_INT                       : 0x8DF5,

                /* Framebuffer Object. */
                FRAMEBUFFER                    : 0x8D40,
                RENDERBUFFER                   : 0x8D41,

                RGBA4                          : 0x8056,
                RGB5_A1                        : 0x8057,
                RGB565                         : 0x8D62,
                DEPTH_COMPONENT16              : 0x81A5,
                STENCIL_INDEX                  : 0x1901,
                STENCIL_INDEX8                 : 0x8D48,
                DEPTH_STENCIL                  : 0x84F9,

                RENDERBUFFER_WIDTH             : 0x8D42,
                RENDERBUFFER_HEIGHT            : 0x8D43,
                RENDERBUFFER_INTERNAL_FORMAT   : 0x8D44,
                RENDERBUFFER_RED_SIZE          : 0x8D50,
                RENDERBUFFER_GREEN_SIZE        : 0x8D51,
                RENDERBUFFER_BLUE_SIZE         : 0x8D52,
                RENDERBUFFER_ALPHA_SIZE        : 0x8D53,
                RENDERBUFFER_DEPTH_SIZE        : 0x8D54,
                RENDERBUFFER_STENCIL_SIZE      : 0x8D55,

                FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE           : 0x8CD0,
                FRAMEBUFFER_ATTACHMENT_OBJECT_NAME           : 0x8CD1,
                FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL         : 0x8CD2,
                FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE : 0x8CD3,

                COLOR_ATTACHMENT0              : 0x8CE0,
                DEPTH_ATTACHMENT               : 0x8D00,
                STENCIL_ATTACHMENT             : 0x8D20,
                DEPTH_STENCIL_ATTACHMENT       : 0x821A,

                NONE                           : 0,

                FRAMEBUFFER_COMPLETE                      : 0x8CD5,
                FRAMEBUFFER_INCOMPLETE_ATTACHMENT         : 0x8CD6,
                FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT : 0x8CD7,
                FRAMEBUFFER_INCOMPLETE_DIMENSIONS         : 0x8CD9,
                FRAMEBUFFER_UNSUPPORTED                   : 0x8CDD,

                FRAMEBUFFER_BINDING            : 0x8CA6,
                RENDERBUFFER_BINDING           : 0x8CA7,
                MAX_RENDERBUFFER_SIZE          : 0x84E8,

                INVALID_FRAMEBUFFER_OPERATION  : 0x0506,

                /* WebGL-specific enums */
                UNPACK_FLIP_Y_WEBGL            : 0x9240,
                UNPACK_PREMULTIPLY_ALPHA_WEBGL : 0x9241,
                CONTEXT_LOST_WEBGL             : 0x9242,
                UNPACK_COLORSPACE_CONVERSION_WEBGL : 0x9243,
                BROWSER_DEFAULT_WEBGL          : 0x9244,
            });


            /***/ }),
        /* 12 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(20);

            /* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */



            /**
             * @class 3 Dimensional Vector
             * @name vec3
             */

            var vec3 = {};

            /**
             * Creates a new, empty vec3
             *
             * @returns {vec3} a new 3D vector
             */
            vec3.create = function() {
                var out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* GLMAT_ARRAY_TYPE */](3);
                out[0] = 0;
                out[1] = 0;
                out[2] = 0;
                return out;
            };

            /**
             * Creates a new vec3 initialized with values from an existing vector
             *
             * @param {vec3} a vector to clone
             * @returns {vec3} a new 3D vector
             */
            vec3.clone = function(a) {
                var out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* GLMAT_ARRAY_TYPE */](3);
                out[0] = a[0];
                out[1] = a[1];
                out[2] = a[2];
                return out;
            };

            /**
             * Creates a new vec3 initialized with the given values
        *