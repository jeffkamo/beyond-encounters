/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _redux = __webpack_require__(1);

	var _reducers = __webpack_require__(22);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _reduxLogger = __webpack_require__(26);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reduxThunk = __webpack_require__(32);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reactChromeRedux = __webpack_require__(33);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var logger = (0, _reduxLogger2.default)({
	  level: 'info',
	  collapsed: true
	});

	var middleware = [_reduxThunk2.default, logger];

	var store = (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware))(_redux.createStore)(_reducers2.default);

	(0, _reactChromeRedux.wrapStore)(store, {
	  portName: 'example'
	});

	// ////////////////////////////////////////////
	// //Inject content Script on each tab change//
	// ////////////////////////////////////////////
	// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	//   console.log('content script injected')
	//   chrome.tabs.executeScript(null, {file: "content.js"});
	// });

	/////////////////////////////////////////////////////
	//Inject content script when first tab is activated//
	/////////////////////////////////////////////////////
	chrome.tabs.onActivated.addListener(function (tabId, changeInfo, tab) {
	  console.log('content script injected');
	  chrome.tabs.executeScript(null, { file: "content.js" });
	});

	__webpack_require__(80);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(3);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(17);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(19);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(20);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(21);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(18);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;

	var _isPlainObject = __webpack_require__(4);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(14);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'

	  /**
	   * Creates a Redux store that holds the state tree.
	   * The only way to change the data in the store is to call `dispatch()` on it.
	   *
	   * There should only be a single store in your app. To specify how different
	   * parts of the state tree respond to actions, you may combine several reducers
	   * into a single reducer function by using `combineReducers`.
	   *
	   * @param {Function} reducer A function that returns the next state tree, given
	   * the current state tree and the action to handle.
	   *
	   * @param {any} [preloadedState] The initial state. You may optionally specify it
	   * to hydrate the state from the server in universal apps, or to restore a
	   * previously serialized user session.
	   * If you use `combineReducers` to produce the root reducer function, this must be
	   * an object with the same shape as `combineReducers` keys.
	   *
	   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
	   * to enhance the store with third-party capabilities such as middleware,
	   * time travel, persistence, etc. The only store enhancer that ships with Redux
	   * is `applyMiddleware()`.
	   *
	   * @returns {Store} A Redux store that lets you read the state, dispatch actions
	   * and subscribe to changes.
	   */
	};function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      var listener = listeners[i];
	      listener();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/tc39/proposal-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(5),
	    getPrototype = __webpack_require__(11),
	    isObjectLike = __webpack_require__(13);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(6),
	    getRawTag = __webpack_require__(9),
	    objectToString = __webpack_require__(10);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(7);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(8);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(6);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(12);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ponyfill = __webpack_require__(16);

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var root; /* global window */


	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(15)(module)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	var _createStore = __webpack_require__(3);

	var _isPlainObject = __webpack_require__(4);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(18);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });

	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerShape(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];

	    if (process.env.NODE_ENV !== 'production') {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }

	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  var unexpectedKeyCache = void 0;
	  if (process.env.NODE_ENV !== 'production') {
	    unexpectedKeyCache = {};
	  }

	  var shapeAssertionError = void 0;
	  try {
	    assertReducerShape(finalReducers);
	  } catch (e) {
	    shapeAssertionError = e;
	  }

	  return function combination() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];

	    if (shapeAssertionError) {
	      throw shapeAssertionError;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
	      var _key = finalReducerKeys[_i];
	      var reducer = finalReducers[_key];
	      var previousStateForKey = state[_key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(_key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[_key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	var _compose = __webpack_require__(21);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  return funcs.reduce(function (a, b) {
	    return function () {
	      return a(b.apply(undefined, arguments));
	    };
	  });
	}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(1);

	var _cards = __webpack_require__(23);

	var _cards2 = _interopRequireDefault(_cards);

	var _dock = __webpack_require__(24);

	var _dock2 = _interopRequireDefault(_dock);

	var _dragPort = __webpack_require__(25);

	var _dragPort2 = _interopRequireDefault(_dragPort);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _redux.combineReducers)({
	    cards: _cards2.default,
	    dock: _dock2.default,
	    dragPort: _dragPort2.default
	});

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var initialState = {
	    beholder: {
	        title: 'Beholder',
	        href: '#',
	        body: "\r\n\r\n<div class=\"tooltip tooltip-monster\">\r\n    <div class=\"tooltip-header\">\r\n        <div class=\"tooltip-header-icon\">\r\n            \r\n                <div class=\"monster-icon monster-icon-aberration\" style=\"background-image: url('https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/716/35/35/636288206263353113.jpeg')\"></div>\r\n            \r\n        </div>\r\n        <div class=\"tooltip-header-text\">\r\n            Beholder\r\n        </div>\r\n        <div class=\"tooltip-header-identifier tooltip-header-identifier-monster\">\r\n            Monster\r\n        </div>\r\n    </div>\r\n    <div class=\"tooltip-body\">\r\n        <div class=\"details-byline\">\r\n            Large aberration, lawful evil\r\n        </div>\r\n        <div class=\"line monster height3 marginTop20 marginBottom20\"></div>\r\n        <div class=\"tooltip-body-statblock tooltip-body-statblock-ability-scores\">\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-item-strength\">\r\n                <div class=\"tooltip-body-statblock-item-label\">STR</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"ability-score\">10</div>\r\n                    <div class=\"ability-modifier\">(+0)</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-item-dexterity\">\r\n                <div class=\"tooltip-body-statblock-item-label\">DEX</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"ability-score\">14</div>\r\n                    <div class=\"ability-modifier\">(+2)</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-item-constitution\">\r\n                <div class=\"tooltip-body-statblock-item-label\">CON</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"ability-score\">18</div>\r\n                    <div class=\"ability-modifier\">(+4)</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-item-intelligence\">\r\n                <div class=\"tooltip-body-statblock-item-label\">INT</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"ability-score\">17</div>\r\n                    <div class=\"ability-modifier\">(+3)</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-item-wisdom\">\r\n                <div class=\"tooltip-body-statblock-item-label\">WIS</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"ability-score\">15</div>\r\n                    <div class=\"ability-modifier\">(+2)</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-item-charisma\">\r\n                <div class=\"tooltip-body-statblock-item-label\">CHA</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"ability-score\">17</div>\r\n                    <div class=\"ability-modifier\">(+3)</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"line monster height3 marginTop20 marginBottom20\"></div>\r\n        <div class=\"tooltip-body-statblock tooltip-body-statblock-monster-stats\">\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-challenge-rating\">\r\n                <div class=\"tooltip-body-statblock-item-label\">Challenge Rating</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"primary\">13</div>\r\n                    <div class=\"secondary\">(10,000 XP)</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-armor-class\">\r\n                <div class=\"tooltip-body-statblock-item-label\">Armor Class</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"primary\">18</div>\r\n                    \r\n                        <div class=\"secondary\">Natural Armor</div>\r\n                       \r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-hit-points\">\r\n                <div class=\"tooltip-body-statblock-item-label\">Hit Points</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"primary\">180</div>\r\n                    <div class=\"secondary\">((19d10 + 76))</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-speed\">\r\n                <div class=\"tooltip-body-statblock-item-label\">Speed</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"primary\">0 ft.</div>\r\n                    \r\n                        <div class=\"secondary\">(fly 20 ft. (hover))</div>\r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"line monster marginTop20 marginBottom20\"></div>\r\n        <div class=\"tooltip-body-statblock tooltip-body-statblock-monster-details\">\r\n            \r\n                <div class=\"tooltip-body-statblock-item tooltip-body-statblock-saving-throws\">\r\n                    <div class=\"tooltip-body-statblock-item-label\">Saving Throws</div>\r\n                    <div class=\"tooltip-body-statblock-item-value\">INT +8, WIS +7, CHA +8</div>\r\n                </div>\r\n            \r\n                <div class=\"tooltip-body-statblock-item tooltip-body-statblock-skills\">\r\n                    <div class=\"tooltip-body-statblock-item-label\">Skills</div>\r\n                    <div class=\"tooltip-body-statblock-item-value\"><a class=\"tooltip-hover skill-tooltip\" href=\"/compendium/rules/basic-rules/using-ability-scores#Perception\" data-tooltip-href=\"/skills/14-tooltip\">Perception</a> +12</div>\r\n                </div>\r\n            \r\n                <div class=\"tooltip-body-statblock-item tooltip-body-statblock-condition-immunities\">\r\n                    <div class=\"tooltip-body-statblock-item-label\">Condition Immunities</div>\r\n                    <div class=\"tooltip-body-statblock-item-value\"><a class=\"tooltip-hover condition-tooltip\" href=\"/compendium/rules/basic-rules/appendix-a-conditions#Prone\" data-tooltip-href=\"/conditions/12-tooltip\">Prone</a></div>\r\n                </div>\r\n            \r\n                <div class=\"tooltip-body-statblock-item tooltip-body-statblock-senses\">\r\n                    <div class=\"tooltip-body-statblock-item-label\">Senses</div>\r\n                    <div class=\"tooltip-body-statblock-item-value\"><a class=\"tooltip-hover sense-tooltip\" href=\"/compendium/rules/basic-rules/monsters#Darkvision\" data-tooltip-href=\"/senses/2-tooltip\">Darkvision</a> 120 ft.,  Passive Perception 22</div>\r\n                </div>\r\n            \r\n                <div class=\"tooltip-body-statblock-item tooltip-body-statblock-languages\">\r\n                    <div class=\"tooltip-body-statblock-item-label\">Languages</div>\r\n                    <div class=\"tooltip-body-statblock-item-value\">Deep Speech, Undercommon</div>\r\n                </div>\r\n            \r\n        </div>\r\n    </div>\r\n</div>\r\n"
	    },
	    commoner: {
	        title: 'Commoner',
	        href: '#',
	        body: "\r\n\r\n<div class=\"tooltip tooltip-monster\">\r\n    <div class=\"tooltip-header\">\r\n        <div class=\"tooltip-header-icon\">\r\n            \r\n                <div class=\"monster-icon monster-icon-humanoid\"></div>\r\n            \r\n        </div>\r\n        <div class=\"tooltip-header-text\">\r\n            Commoner\r\n        </div>\r\n        <div class=\"tooltip-header-identifier tooltip-header-identifier-monster\">\r\n            Monster\r\n        </div>\r\n    </div>\r\n    <div class=\"tooltip-body\">\r\n        <div class=\"details-byline\">\r\n            Medium humanoid, any\r\n        </div>\r\n        <div class=\"line monster height3 marginTop20 marginBottom20\"></div>\r\n        <div class=\"tooltip-body-statblock tooltip-body-statblock-ability-scores\">\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-item-strength\">\r\n                <div class=\"tooltip-body-statblock-item-label\">STR</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"ability-score\">10</div>\r\n                    <div class=\"ability-modifier\">(+0)</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-item-dexterity\">\r\n                <div class=\"tooltip-body-statblock-item-label\">DEX</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"ability-score\">10</div>\r\n                    <div class=\"ability-modifier\">(+0)</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-item-constitution\">\r\n                <div class=\"tooltip-body-statblock-item-label\">CON</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"ability-score\">10</div>\r\n                    <div class=\"ability-modifier\">(+0)</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-item-intelligence\">\r\n                <div class=\"tooltip-body-statblock-item-label\">INT</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"ability-score\">10</div>\r\n                    <div class=\"ability-modifier\">(+0)</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-item-wisdom\">\r\n                <div class=\"tooltip-body-statblock-item-label\">WIS</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"ability-score\">10</div>\r\n                    <div class=\"ability-modifier\">(+0)</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-item-charisma\">\r\n                <div class=\"tooltip-body-statblock-item-label\">CHA</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"ability-score\">10</div>\r\n                    <div class=\"ability-modifier\">(+0)</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"line monster height3 marginTop20 marginBottom20\"></div>\r\n        <div class=\"tooltip-body-statblock tooltip-body-statblock-monster-stats\">\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-challenge-rating\">\r\n                <div class=\"tooltip-body-statblock-item-label\">Challenge Rating</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"primary\">0</div>\r\n                    <div class=\"secondary\">(10 XP)</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-armor-class\">\r\n                <div class=\"tooltip-body-statblock-item-label\">Armor Class</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"primary\">10</div>\r\n                       \r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-hit-points\">\r\n                <div class=\"tooltip-body-statblock-item-label\">Hit Points</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"primary\">4</div>\r\n                    <div class=\"secondary\">((1d8))</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-speed\">\r\n                <div class=\"tooltip-body-statblock-item-label\">Speed</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"primary\">30 ft.</div>\r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"line monster marginTop20 marginBottom20\"></div>\r\n        <div class=\"tooltip-body-statblock tooltip-body-statblock-monster-details\">\r\n            \r\n                <div class=\"tooltip-body-statblock-item tooltip-body-statblock-senses\">\r\n                    <div class=\"tooltip-body-statblock-item-label\">Senses</div>\r\n                    <div class=\"tooltip-body-statblock-item-value\"> Passive Perception 10</div>\r\n                </div>\r\n            \r\n                <div class=\"tooltip-body-statblock-item tooltip-body-statblock-languages\">\r\n                    <div class=\"tooltip-body-statblock-item-label\">Languages</div>\r\n                    <div class=\"tooltip-body-statblock-item-value\"> Any one language (usually Common)  </div>\r\n                </div>\r\n            \r\n        </div>\r\n    </div>\r\n</div>\r\n"
	    }
	};

	exports.default = function () {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	    var action = arguments[1];

	    switch (action.type) {
	        default:
	            return state;
	    }
	};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var initialState = ['commoner'];

	exports.default = function () {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	    var action = arguments[1];

	    var newState = void 0;
	    var index = void 0;

	    switch (action.type) {
	        case 'REMOVE_FROM_DOCK':
	            newState = [].concat(_toConsumableArray(state));

	            // Get card index from the state
	            index = newState.indexOf(action.card);

	            if (index > -1) {
	                // Remove the card from the state, only if it's actually there!
	                newState.splice(index, 1);
	            }

	            return newState;
	            break;
	        case 'ADD_INTO_DOCK':
	            newState = [].concat(_toConsumableArray(state));

	            // Get card index from the state
	            index = newState.indexOf(action.card);

	            if (index === -1) {
	                // Add the card to the state, only if it wasn't there before!
	                newState.push(action.card);
	            }

	            return newState;
	            break;
	        default:
	            return state;
	    }
	};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var initialState = ['beholder'];

	exports.default = function () {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	    var action = arguments[1];

	    var newState = void 0;
	    var index = void 0;

	    switch (action.type) {
	        case 'REMOVE_FROM_DRAG_PORT':
	            newState = [].concat(_toConsumableArray(state));

	            // Get card index from the state
	            index = newState.indexOf(action.card);

	            if (index > -1) {
	                // Remove the card from the state, only if it's actually there!
	                newState.splice(index, 1);
	            }

	            return newState;
	            break;
	        case 'ADD_INTO_DRAG_PORT':
	            newState = [].concat(_toConsumableArray(state));

	            // Get card index from the state
	            index = newState.indexOf(action.card);

	            if (index === -1) {
	                // Add the card to the state, only if it wasn't there before!
	                newState.push(action.card);
	            }

	            return newState;
	            break;
	        default:
	            return state;
	    }
	};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.logger = exports.defaults = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _core = __webpack_require__(27);

	var _helpers = __webpack_require__(28);

	var _defaults = __webpack_require__(31);

	var _defaults2 = _interopRequireDefault(_defaults);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Creates logger with following options
	 *
	 * @namespace
	 * @param {object} options - options for logger
	 * @param {string | function | object} options.level - console[level]
	 * @param {boolean} options.duration - print duration of each action?
	 * @param {boolean} options.timestamp - print timestamp with each action?
	 * @param {object} options.colors - custom colors
	 * @param {object} options.logger - implementation of the `console` API
	 * @param {boolean} options.logErrors - should errors in action execution be caught, logged, and re-thrown?
	 * @param {boolean} options.collapsed - is group collapsed?
	 * @param {boolean} options.predicate - condition which resolves logger behavior
	 * @param {function} options.stateTransformer - transform state before print
	 * @param {function} options.actionTransformer - transform action before print
	 * @param {function} options.errorTransformer - transform error before print
	 *
	 * @returns {function} logger middleware
	 */
	function createLogger() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var loggerOptions = _extends({}, _defaults2.default, options);

	  var logger = loggerOptions.logger,
	      transformer = loggerOptions.transformer,
	      stateTransformer = loggerOptions.stateTransformer,
	      errorTransformer = loggerOptions.errorTransformer,
	      predicate = loggerOptions.predicate,
	      logErrors = loggerOptions.logErrors,
	      diffPredicate = loggerOptions.diffPredicate;

	  // Return if 'console' object is not defined

	  if (typeof logger === 'undefined') {
	    return function () {
	      return function (next) {
	        return function (action) {
	          return next(action);
	        };
	      };
	    };
	  }

	  if (transformer) {
	    console.error('Option \'transformer\' is deprecated, use \'stateTransformer\' instead!'); // eslint-disable-line no-console
	  }

	  // Detect if 'createLogger' was passed directly to 'applyMiddleware'.
	  if (options.getState && options.dispatch) {
	    // eslint-disable-next-line no-console
	    console.error('[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n\n// Logger with default options\nimport { logger } from \'redux-logger\'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n\n\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from \'redux-logger\'\n\nconst logger = createLogger({\n  // ...options\n});\n\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n');

	    return function () {
	      return function (next) {
	        return function (action) {
	          return next(action);
	        };
	      };
	    };
	  }

	  var logBuffer = [];

	  return function (_ref) {
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        // Exit early if predicate function returns 'false'
	        if (typeof predicate === 'function' && !predicate(getState, action)) {
	          return next(action);
	        }

	        var logEntry = {};
	        logBuffer.push(logEntry);

	        logEntry.started = _helpers.timer.now();
	        logEntry.startedTime = new Date();
	        logEntry.prevState = stateTransformer(getState());
	        logEntry.action = action;

	        var returnedValue = void 0;
	        if (logErrors) {
	          try {
	            returnedValue = next(action);
	          } catch (e) {
	            logEntry.error = errorTransformer(e);
	          }
	        } else {
	          returnedValue = next(action);
	        }

	        logEntry.took = _helpers.timer.now() - logEntry.started;
	        logEntry.nextState = stateTransformer(getState());

	        var diff = loggerOptions.diff && typeof diffPredicate === 'function' ? diffPredicate(getState, action) : loggerOptions.diff;

	        (0, _core.printBuffer)(logBuffer, _extends({}, loggerOptions, { diff: diff }));
	        logBuffer.length = 0;

	        if (logEntry.error) throw logEntry.error;
	        return returnedValue;
	      };
	    };
	  };
	}

	var defaultLogger = createLogger();

	exports.defaults = _defaults2.default;
	exports.logger = defaultLogger;
	exports.default = createLogger;
	module.exports = exports['default'];


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.printBuffer = printBuffer;

	var _helpers = __webpack_require__(28);

	var _diff = __webpack_require__(29);

	var _diff2 = _interopRequireDefault(_diff);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/**
	 * Get log level string based on supplied params
	 *
	 * @param {string | function | object} level - console[level]
	 * @param {object} action - selected action
	 * @param {array} payload - selected payload
	 * @param {string} type - log entry type
	 *
	 * @returns {string} level
	 */
	function getLogLevel(level, action, payload, type) {
	  switch (typeof level === 'undefined' ? 'undefined' : _typeof(level)) {
	    case 'object':
	      return typeof level[type] === 'function' ? level[type].apply(level, _toConsumableArray(payload)) : level[type];
	    case 'function':
	      return level(action);
	    default:
	      return level;
	  }
	}

	function defaultTitleFormatter(options) {
	  var timestamp = options.timestamp,
	      duration = options.duration;


	  return function (action, time, took) {
	    var parts = ['action'];

	    parts.push('%c' + String(action.type));
	    if (timestamp) parts.push('%c@ ' + time);
	    if (duration) parts.push('%c(in ' + took.toFixed(2) + ' ms)');

	    return parts.join(' ');
	  };
	}

	function printBuffer(buffer, options) {
	  var logger = options.logger,
	      actionTransformer = options.actionTransformer,
	      _options$titleFormatt = options.titleFormatter,
	      titleFormatter = _options$titleFormatt === undefined ? defaultTitleFormatter(options) : _options$titleFormatt,
	      collapsed = options.collapsed,
	      colors = options.colors,
	      level = options.level,
	      diff = options.diff;


	  buffer.forEach(function (logEntry, key) {
	    var started = logEntry.started,
	        startedTime = logEntry.startedTime,
	        action = logEntry.action,
	        prevState = logEntry.prevState,
	        error = logEntry.error;
	    var took = logEntry.took,
	        nextState = logEntry.nextState;

	    var nextEntry = buffer[key + 1];

	    if (nextEntry) {
	      nextState = nextEntry.prevState;
	      took = nextEntry.started - started;
	    }

	    // Message
	    var formattedAction = actionTransformer(action);
	    var isCollapsed = typeof collapsed === 'function' ? collapsed(function () {
	      return nextState;
	    }, action, logEntry) : collapsed;

	    var formattedTime = (0, _helpers.formatTime)(startedTime);
	    var titleCSS = colors.title ? 'color: ' + colors.title(formattedAction) + ';' : '';
	    var headerCSS = ['color: gray; font-weight: lighter;'];
	    headerCSS.push(titleCSS);
	    if (options.timestamp) headerCSS.push('color: gray; font-weight: lighter;');
	    if (options.duration) headerCSS.push('color: gray; font-weight: lighter;');
	    var title = titleFormatter(formattedAction, formattedTime, took);

	    // Render
	    try {
	      if (isCollapsed) {
	        if (colors.title) logger.groupCollapsed.apply(logger, ['%c ' + title].concat(headerCSS));else logger.groupCollapsed(title);
	      } else {
	        if (colors.title) logger.group.apply(logger, ['%c ' + title].concat(headerCSS));else logger.group(title);
	      }
	    } catch (e) {
	      logger.log(title);
	    }

	    var prevStateLevel = getLogLevel(level, formattedAction, [prevState], 'prevState');
	    var actionLevel = getLogLevel(level, formattedAction, [formattedAction], 'action');
	    var errorLevel = getLogLevel(level, formattedAction, [error, prevState], 'error');
	    var nextStateLevel = getLogLevel(level, formattedAction, [nextState], 'nextState');

	    if (prevStateLevel) {
	      if (colors.prevState) logger[prevStateLevel]('%c prev state', 'color: ' + colors.prevState(prevState) + '; font-weight: bold', prevState);else logger[prevStateLevel]('prev state', prevState);
	    }

	    if (actionLevel) {
	      if (colors.action) logger[actionLevel]('%c action    ', 'color: ' + colors.action(formattedAction) + '; font-weight: bold', formattedAction);else logger[actionLevel]('action    ', formattedAction);
	    }

	    if (error && errorLevel) {
	      if (colors.error) logger[errorLevel]('%c error     ', 'color: ' + colors.error(error, prevState) + '; font-weight: bold;', error);else logger[errorLevel]('error     ', error);
	    }

	    if (nextStateLevel) {
	      if (colors.nextState) logger[nextStateLevel]('%c next state', 'color: ' + colors.nextState(nextState) + '; font-weight: bold', nextState);else logger[nextStateLevel]('next state', nextState);
	    }

	    if (diff) {
	      (0, _diff2.default)(prevState, nextState, logger, isCollapsed);
	    }

	    try {
	      logger.groupEnd();
	    } catch (e) {
	      logger.log('\u2014\u2014 log end \u2014\u2014');
	    }
	  });
	}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var repeat = exports.repeat = function repeat(str, times) {
	  return new Array(times + 1).join(str);
	};

	var pad = exports.pad = function pad(num, maxLength) {
	  return repeat("0", maxLength - num.toString().length) + num;
	};

	var formatTime = exports.formatTime = function formatTime(time) {
	  return pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
	};

	// Use performance API if it's available in order to get better precision
	var timer = exports.timer = typeof performance !== "undefined" && performance !== null && typeof performance.now === "function" ? performance : Date;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = diffLogger;

	var _deepDiff = __webpack_require__(30);

	var _deepDiff2 = _interopRequireDefault(_deepDiff);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	// https://github.com/flitbit/diff#differences
	var dictionary = {
	  'E': {
	    color: '#2196F3',
	    text: 'CHANGED:'
	  },
	  'N': {
	    color: '#4CAF50',
	    text: 'ADDED:'
	  },
	  'D': {
	    color: '#F44336',
	    text: 'DELETED:'
	  },
	  'A': {
	    color: '#2196F3',
	    text: 'ARRAY:'
	  }
	};

	function style(kind) {
	  return 'color: ' + dictionary[kind].color + '; font-weight: bold';
	}

	function render(diff) {
	  var kind = diff.kind,
	      path = diff.path,
	      lhs = diff.lhs,
	      rhs = diff.rhs,
	      index = diff.index,
	      item = diff.item;


	  switch (kind) {
	    case 'E':
	      return [path.join('.'), lhs, '\u2192', rhs];
	    case 'N':
	      return [path.join('.'), rhs];
	    case 'D':
	      return [path.join('.')];
	    case 'A':
	      return [path.join('.') + '[' + index + ']', item];
	    default:
	      return [];
	  }
	}

	function diffLogger(prevState, newState, logger, isCollapsed) {
	  var diff = (0, _deepDiff2.default)(prevState, newState);

	  try {
	    if (isCollapsed) {
	      logger.groupCollapsed('diff');
	    } else {
	      logger.group('diff');
	    }
	  } catch (e) {
	    logger.log('diff');
	  }

	  if (diff) {
	    diff.forEach(function (elem) {
	      var kind = elem.kind;

	      var output = render(elem);

	      logger.log.apply(logger, ['%c ' + dictionary[kind].text, style(kind)].concat(_toConsumableArray(output)));
	    });
	  } else {
	    logger.log('\u2014\u2014 no diff \u2014\u2014');
	  }

	  try {
	    logger.groupEnd();
	  } catch (e) {
	    logger.log('\u2014\u2014 diff end \u2014\u2014 ');
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * deep-diff.
	 * Licensed under the MIT License.
	 */
	;(function(root, factory) {
	  'use strict';
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return factory();
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    // Browser globals (root is window)
	    root.DeepDiff = factory();
	  }
	}(this, function(undefined) {
	  'use strict';

	  var $scope, conflict, conflictResolution = [];
	  if (typeof global === 'object' && global) {
	    $scope = global;
	  } else if (typeof window !== 'undefined') {
	    $scope = window;
	  } else {
	    $scope = {};
	  }
	  conflict = $scope.DeepDiff;
	  if (conflict) {
	    conflictResolution.push(
	      function() {
	        if ('undefined' !== typeof conflict && $scope.DeepDiff === accumulateDiff) {
	          $scope.DeepDiff = conflict;
	          conflict = undefined;
	        }
	      });
	  }

	  // nodejs compatible on server side and in the browser.
	  function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  }

	  function Diff(kind, path) {
	    Object.defineProperty(this, 'kind', {
	      value: kind,
	      enumerable: true
	    });
	    if (path && path.length) {
	      Object.defineProperty(this, 'path', {
	        value: path,
	        enumerable: true
	      });
	    }
	  }

	  function DiffEdit(path, origin, value) {
	    DiffEdit.super_.call(this, 'E', path);
	    Object.defineProperty(this, 'lhs', {
	      value: origin,
	      enumerable: true
	    });
	    Object.defineProperty(this, 'rhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffEdit, Diff);

	  function DiffNew(path, value) {
	    DiffNew.super_.call(this, 'N', path);
	    Object.defineProperty(this, 'rhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffNew, Diff);

	  function DiffDeleted(path, value) {
	    DiffDeleted.super_.call(this, 'D', path);
	    Object.defineProperty(this, 'lhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffDeleted, Diff);

	  function DiffArray(path, index, item) {
	    DiffArray.super_.call(this, 'A', path);
	    Object.defineProperty(this, 'index', {
	      value: index,
	      enumerable: true
	    });
	    Object.defineProperty(this, 'item', {
	      value: item,
	      enumerable: true
	    });
	  }
	  inherits(DiffArray, Diff);

	  function arrayRemove(arr, from, to) {
	    var rest = arr.slice((to || from) + 1 || arr.length);
	    arr.length = from < 0 ? arr.length + from : from;
	    arr.push.apply(arr, rest);
	    return arr;
	  }

	  function realTypeOf(subject) {
	    var type = typeof subject;
	    if (type !== 'object') {
	      return type;
	    }

	    if (subject === Math) {
	      return 'math';
	    } else if (subject === null) {
	      return 'null';
	    } else if (Array.isArray(subject)) {
	      return 'array';
	    } else if (Object.prototype.toString.call(subject) === '[object Date]') {
	      return 'date';
	    } else if (typeof subject.toString !== 'undefined' && /^\/.*\//.test(subject.toString())) {
	      return 'regexp';
	    }
	    return 'object';
	  }

	  function deepDiff(lhs, rhs, changes, prefilter, path, key, stack) {
	    path = path || [];
	    var currentPath = path.slice(0);
	    if (typeof key !== 'undefined') {
	      if (prefilter) {
	        if (typeof(prefilter) === 'function' && prefilter(currentPath, key)) { return; }
	        else if (typeof(prefilter) === 'object') {
	          if (prefilter.prefilter && prefilter.prefilter(currentPath, key)) { return; }
	          if (prefilter.normalize) {
	            var alt = prefilter.normalize(currentPath, key, lhs, rhs);
	            if (alt) {
	              lhs = alt[0];
	              rhs = alt[1];
	            }
	          }
	        }
	      }
	      currentPath.push(key);
	    }

	    // Use string comparison for regexes
	    if (realTypeOf(lhs) === 'regexp' && realTypeOf(rhs) === 'regexp') {
	      lhs = lhs.toString();
	      rhs = rhs.toString();
	    }

	    var ltype = typeof lhs;
	    var rtype = typeof rhs;
	    if (ltype === 'undefined') {
	      if (rtype !== 'undefined') {
	        changes(new DiffNew(currentPath, rhs));
	      }
	    } else if (rtype === 'undefined') {
	      changes(new DiffDeleted(currentPath, lhs));
	    } else if (realTypeOf(lhs) !== realTypeOf(rhs)) {
	      changes(new DiffEdit(currentPath, lhs, rhs));
	    } else if (Object.prototype.toString.call(lhs) === '[object Date]' && Object.prototype.toString.call(rhs) === '[object Date]' && ((lhs - rhs) !== 0)) {
	      changes(new DiffEdit(currentPath, lhs, rhs));
	    } else if (ltype === 'object' && lhs !== null && rhs !== null) {
	      stack = stack || [];
	      if (stack.indexOf(lhs) < 0) {
	        stack.push(lhs);
	        if (Array.isArray(lhs)) {
	          var i, len = lhs.length;
	          for (i = 0; i < lhs.length; i++) {
	            if (i >= rhs.length) {
	              changes(new DiffArray(currentPath, i, new DiffDeleted(undefined, lhs[i])));
	            } else {
	              deepDiff(lhs[i], rhs[i], changes, prefilter, currentPath, i, stack);
	            }
	          }
	          while (i < rhs.length) {
	            changes(new DiffArray(currentPath, i, new DiffNew(undefined, rhs[i++])));
	          }
	        } else {
	          var akeys = Object.keys(lhs);
	          var pkeys = Object.keys(rhs);
	          akeys.forEach(function(k, i) {
	            var other = pkeys.indexOf(k);
	            if (other >= 0) {
	              deepDiff(lhs[k], rhs[k], changes, prefilter, currentPath, k, stack);
	              pkeys = arrayRemove(pkeys, other);
	            } else {
	              deepDiff(lhs[k], undefined, changes, prefilter, currentPath, k, stack);
	            }
	          });
	          pkeys.forEach(function(k) {
	            deepDiff(undefined, rhs[k], changes, prefilter, currentPath, k, stack);
	          });
	        }
	        stack.length = stack.length - 1;
	      }
	    } else if (lhs !== rhs) {
	      if (!(ltype === 'number' && isNaN(lhs) && isNaN(rhs))) {
	        changes(new DiffEdit(currentPath, lhs, rhs));
	      }
	    }
	  }

	  function accumulateDiff(lhs, rhs, prefilter, accum) {
	    accum = accum || [];
	    deepDiff(lhs, rhs,
	      function(diff) {
	        if (diff) {
	          accum.push(diff);
	        }
	      },
	      prefilter);
	    return (accum.length) ? accum : undefined;
	  }

	  function applyArrayChange(arr, index, change) {
	    if (change.path && change.path.length) {
	      var it = arr[index],
	          i, u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          delete it[change.path[i]];
	          break;
	        case 'E':
	        case 'N':
	          it[change.path[i]] = change.rhs;
	          break;
	      }
	    } else {
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(arr[index], change.index, change.item);
	          break;
	        case 'D':
	          arr = arrayRemove(arr, index);
	          break;
	        case 'E':
	        case 'N':
	          arr[index] = change.rhs;
	          break;
	      }
	    }
	    return arr;
	  }

	  function applyChange(target, source, change) {
	    if (target && source && change && change.kind) {
	      var it = target,
	          i = -1,
	          last = change.path ? change.path.length - 1 : 0;
	      while (++i < last) {
	        if (typeof it[change.path[i]] === 'undefined') {
	          it[change.path[i]] = (typeof change.path[i] === 'number') ? [] : {};
	        }
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(change.path ? it[change.path[i]] : it, change.index, change.item);
	          break;
	        case 'D':
	          delete it[change.path[i]];
	          break;
	        case 'E':
	        case 'N':
	          it[change.path[i]] = change.rhs;
	          break;
	      }
	    }
	  }

	  function revertArrayChange(arr, index, change) {
	    if (change.path && change.path.length) {
	      // the structure of the object at the index has changed...
	      var it = arr[index],
	          i, u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          revertArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'E':
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'N':
	          delete it[change.path[i]];
	          break;
	      }
	    } else {
	      // the array item is different...
	      switch (change.kind) {
	        case 'A':
	          revertArrayChange(arr[index], change.index, change.item);
	          break;
	        case 'D':
	          arr[index] = change.lhs;
	          break;
	        case 'E':
	          arr[index] = change.lhs;
	          break;
	        case 'N':
	          arr = arrayRemove(arr, index);
	          break;
	      }
	    }
	    return arr;
	  }

	  function revertChange(target, source, change) {
	    if (target && source && change && change.kind) {
	      var it = target,
	          i, u;
	      u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        if (typeof it[change.path[i]] === 'undefined') {
	          it[change.path[i]] = {};
	        }
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          // Array was modified...
	          // it will be an array...
	          revertArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          // Item was deleted...
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'E':
	          // Item was edited...
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'N':
	          // Item is new...
	          delete it[change.path[i]];
	          break;
	      }
	    }
	  }

	  function applyDiff(target, source, filter) {
	    if (target && source) {
	      var onChange = function(change) {
	        if (!filter || filter(target, source, change)) {
	          applyChange(target, source, change);
	        }
	      };
	      deepDiff(target, source, onChange);
	    }
	  }

	  Object.defineProperties(accumulateDiff, {

	    diff: {
	      value: accumulateDiff,
	      enumerable: true
	    },
	    observableDiff: {
	      value: deepDiff,
	      enumerable: true
	    },
	    applyDiff: {
	      value: applyDiff,
	      enumerable: true
	    },
	    applyChange: {
	      value: applyChange,
	      enumerable: true
	    },
	    revertChange: {
	      value: revertChange,
	      enumerable: true
	    },
	    isConflict: {
	      value: function() {
	        return 'undefined' !== typeof conflict;
	      },
	      enumerable: true
	    },
	    noConflict: {
	      value: function() {
	        if (conflictResolution) {
	          conflictResolution.forEach(function(it) {
	            it();
	          });
	          conflictResolution = null;
	        }
	        return accumulateDiff;
	      },
	      enumerable: true
	    }
	  });

	  return accumulateDiff;
	}));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  level: "log",
	  logger: console,
	  logErrors: true,
	  collapsed: undefined,
	  predicate: undefined,
	  duration: false,
	  timestamp: true,
	  stateTransformer: function stateTransformer(state) {
	    return state;
	  },
	  actionTransformer: function actionTransformer(action) {
	    return action;
	  },
	  errorTransformer: function errorTransformer(error) {
	    return error;
	  },
	  colors: {
	    title: function title() {
	      return "inherit";
	    },
	    prevState: function prevState() {
	      return "#9E9E9E";
	    },
	    action: function action() {
	      return "#03A9F4";
	    },
	    nextState: function nextState() {
	      return "#4CAF50";
	    },
	    error: function error() {
	      return "#F20404";
	    }
	  },
	  diff: false,
	  diffPredicate: undefined,

	  // Deprecated options
	  transformer: undefined
	};
	module.exports = exports["default"];

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	function createThunkMiddleware(extraArgument) {
	  return function (_ref) {
	    var dispatch = _ref.dispatch,
	        getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        if (typeof action === 'function') {
	          return action(dispatch, getState, extraArgument);
	        }

	        return next(action);
	      };
	    };
	  };
	}

	var thunk = createThunkMiddleware();
	thunk.withExtraArgument = createThunkMiddleware;

	exports['default'] = thunk;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.alias = exports.wrapStore = exports.Store = undefined;

	var _Store = __webpack_require__(34);

	var _Store2 = _interopRequireDefault(_Store);

	var _wrapStore = __webpack_require__(78);

	var _wrapStore2 = _interopRequireDefault(_wrapStore);

	var _alias = __webpack_require__(79);

	var _alias2 = _interopRequireDefault(_alias);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Store = _Store2.default;
	exports.wrapStore = _wrapStore2.default;
	exports.alias = _alias2.default;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assignIn = __webpack_require__(35);

	var _assignIn2 = _interopRequireDefault(_assignIn);

	var _constants = __webpack_require__(77);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Store = function () {
	  /**
	   * Creates a new Proxy store
	   * @param  {object} options An object of form {portName, state}, where `portName` is a required string and defines the name of the port for state transition changes and `state` is the initial state of this store (default `{}`)
	   */

	  function Store(_ref) {
	    var _this = this;

	    var portName = _ref.portName;
	    var _ref$state = _ref.state;
	    var state = _ref$state === undefined ? {} : _ref$state;

	    _classCallCheck(this, Store);

	    if (!portName) {
	      throw new Error('portName is required in options');
	    }

	    this.port = chrome.runtime.connect({ name: portName });
	    this.listeners = [];
	    this.state = state;

	    this.port.onMessage.addListener(function (message) {
	      if (message.type === _constants.STATE_TYPE) {
	        _this.replaceState(message.payload);
	      }
	    });
	  }

	  /**
	   * Subscribes a listener function for all state changes
	   * @param  {function} listener A listener function to be called when store state changes
	   * @return {function}          An unsubscribe function which can be called to remove the listener from state updates
	   */

	  _createClass(Store, [{
	    key: 'subscribe',
	    value: function subscribe(listener) {
	      var _this2 = this;

	      this.listeners.push(listener);

	      return function () {
	        _this2.listeners = _this2.listeners.filter(function (l) {
	          return l !== listener;
	        });
	      };
	    }

	    /**
	     * Replace the current state with a new state. Notifies all listeners of state change.
	     * @param  {object} state The new state for the store
	     */

	  }, {
	    key: 'replaceState',
	    value: function replaceState(state) {
	      this.state = state;

	      this.listeners.forEach(function (l) {
	        return l();
	      });
	    }

	    /**
	     * Get the current state of the store
	     * @return {object} the current store state
	     */

	  }, {
	    key: 'getState',
	    value: function getState() {
	      return this.state;
	    }

	    /**
	     * Dispatch an action to the background using messaging passing
	     * @param  {object} data The action data to dispatch
	     * @return {Promise}     Promise that will resolve/reject based on the action response from the background
	     */

	  }, {
	    key: 'dispatch',
	    value: function dispatch(data) {
	      return new Promise(function (resolve, reject) {
	        chrome.runtime.sendMessage({
	          type: _constants.DISPATCH_TYPE,
	          payload: data
	        }, function (_ref2) {
	          var error = _ref2.error;
	          var value = _ref2.value;

	          if (error) {
	            reject((0, _assignIn2.default)(new Error(), error));
	          } else {
	            resolve(value && value.payload);
	          }
	        });
	      });
	    }
	  }]);

	  return Store;
	}();

	exports.default = Store;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(36),
	    createAssigner = __webpack_require__(49),
	    keysIn = __webpack_require__(62);

	/**
	 * This method is like `_.assign` except that it iterates over own and
	 * inherited source properties.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @alias extend
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assign
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assignIn({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
	 */
	var assignIn = createAssigner(function(object, source) {
	  copyObject(source, keysIn(source), object);
	});

	module.exports = assignIn;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(37),
	    baseAssignValue = __webpack_require__(38);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(38),
	    eq = __webpack_require__(48);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignValue;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(39);

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	module.exports = baseAssignValue;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(40);

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	module.exports = defineProperty;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(41),
	    getValue = __webpack_require__(47);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(42),
	    isMasked = __webpack_require__(44),
	    isObject = __webpack_require__(43),
	    toSource = __webpack_require__(46);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(5),
	    isObject = __webpack_require__(43);

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	module.exports = isFunction;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(45);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(7);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(50),
	    isIterateeCall = __webpack_require__(58);

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(51),
	    overRest = __webpack_require__(52),
	    setToString = __webpack_require__(54);

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	module.exports = baseRest;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(53);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = overRest;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(55),
	    shortOut = __webpack_require__(57);

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	module.exports = setToString;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(56),
	    defineProperty = __webpack_require__(39),
	    identity = __webpack_require__(51);

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	module.exports = baseSetToString;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	module.exports = constant;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	module.exports = shortOut;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(48),
	    isArrayLike = __webpack_require__(59),
	    isIndex = __webpack_require__(61),
	    isObject = __webpack_require__(43);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(42),
	    isLength = __webpack_require__(60);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ }),
/* 60 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(63),
	    baseKeysIn = __webpack_require__(74),
	    isArrayLike = __webpack_require__(59);

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	module.exports = keysIn;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(64),
	    isArguments = __webpack_require__(65),
	    isArray = __webpack_require__(67),
	    isBuffer = __webpack_require__(68),
	    isIndex = __webpack_require__(61),
	    isTypedArray = __webpack_require__(70);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ }),
/* 64 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(66),
	    isObjectLike = __webpack_require__(13);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	module.exports = isArguments;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(5),
	    isObjectLike = __webpack_require__(13);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	module.exports = baseIsArguments;


/***/ }),
/* 67 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(7),
	    stubFalse = __webpack_require__(69);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)(module)))

/***/ }),
/* 69 */
/***/ (function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(71),
	    baseUnary = __webpack_require__(72),
	    nodeUtil = __webpack_require__(73);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(5),
	    isLength = __webpack_require__(60),
	    isObjectLike = __webpack_require__(13);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	module.exports = baseIsTypedArray;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(8);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)(module)))

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(43),
	    isPrototype = __webpack_require__(75),
	    nativeKeysIn = __webpack_require__(76);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeysIn;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = nativeKeysIn;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// Message type used for dispatch events
	// from the Proxy Stores to background
	var DISPATCH_TYPE = exports.DISPATCH_TYPE = 'chromex.dispatch';

	// Message type for state update events from
	// background to Proxy Stores
	var STATE_TYPE = exports.STATE_TYPE = 'chromex.state';

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _constants = __webpack_require__(77);

	/**
	 * Responder for promisified results
	 * @param  {object} dispatchResult The result from `store.dispatch()`
	 * @param  {function} send         The function used to respond to original message
	 * @return {undefined}
	 */
	var promiseResponder = function promiseResponder(dispatchResult, send) {
	  Promise.resolve(dispatchResult).then(function (res) {
	    send({
	      error: null,
	      value: res
	    });
	  }).catch(function (err) {
	    send({
	      error: err,
	      value: null
	    });
	  });
	};

	exports.default = function (store, _ref) {
	  var portName = _ref.portName;
	  var dispatchResponder = _ref.dispatchResponder;

	  if (!portName) {
	    throw new Error('portName is required in options');
	  }

	  // set dispatch responder as promise responder
	  if (!dispatchResponder) {
	    dispatchResponder = promiseResponder;
	  }

	  /**
	   * Setup action handler to respond to dispatches from UI components
	   */
	  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	    if (request.type === _constants.DISPATCH_TYPE) {
	      dispatchResponder(store.dispatch(request.payload), sendResponse);
	      return true;
	    }
	  });

	  /**
	   * Setup extended connection for state updates
	   */
	  chrome.runtime.onConnect.addListener(function (port) {
	    if (port.name !== portName) {
	      return;
	    }

	    /**
	     * Send store's current state through port
	     * @return undefined
	     */
	    var sendState = function sendState() {
	      port.postMessage({
	        type: _constants.STATE_TYPE,
	        payload: store.getState()
	      });
	    };

	    // Send new state down connected port on every redux store state change
	    var unsubscribe = store.subscribe(sendState);

	    // when the port disconnects, unsubscribe the sendState listener
	    port.onDisconnect.addListener(unsubscribe);

	    // send initial state
	    sendState();
	  });
	};

/***/ }),
/* 79 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Simple middleware intercepts actions and replaces with
	 * another by calling an alias function with the original action
	 * @type {object} aliases an object that maps action types (keys) to alias functions (values) (e.g. { SOME_ACTION: newActionAliasFunc })
	 */

	exports.default = function (aliases) {
	  return function (store) {
	    return function (next) {
	      return function (action) {
	        var alias = aliases[action.type];

	        if (alias) {
	          return next(alias(action));
	        } else {
	          return next(action);
	        }
	      };
	    };
	  };
	};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(81);

	var _react2 = _interopRequireDefault(_react);

	var _react3 = __webpack_require__(116);

	var _cerebral = __webpack_require__(121);

	var _devtools = __webpack_require__(157);

	var _devtools2 = _interopRequireDefault(_devtools);

	var _storage = __webpack_require__(161);

	var _storage2 = _interopRequireDefault(_storage);

	var _PopupMenu = __webpack_require__(164);

	var _PopupMenu2 = _interopRequireDefault(_PopupMenu);

	var _addParticipant = __webpack_require__(171);

	var _addParticipant2 = _interopRequireDefault(_addParticipant);

	var _removeParticipant = __webpack_require__(177);

	var _removeParticipant2 = _interopRequireDefault(_removeParticipant);

	var _editInitiative = __webpack_require__(178);

	var _editInitiative2 = _interopRequireDefault(_editInitiative);

	var _addToOrder = __webpack_require__(176);

	var _addToOrder2 = _interopRequireDefault(_addToOrder);

	var _removeOrderGroup = __webpack_require__(179);

	var _removeOrderGroup2 = _interopRequireDefault(_removeOrderGroup);

	var _removeParticipantFromOrder = __webpack_require__(180);

	var _removeParticipantFromOrder2 = _interopRequireDefault(_removeParticipantFromOrder);

	var _setInitiative = __webpack_require__(181);

	var _setInitiative2 = _interopRequireDefault(_setInitiative);

	var _setOrderName = __webpack_require__(200);

	var _setOrderName2 = _interopRequireDefault(_setOrderName);

	var _setName = __webpack_require__(201);

	var _setName2 = _interopRequireDefault(_setName);

	var _setMaxHp = __webpack_require__(202);

	var _setMaxHp2 = _interopRequireDefault(_setMaxHp);

	var _setCurrentHp = __webpack_require__(203);

	var _setCurrentHp2 = _interopRequireDefault(_setCurrentHp);

	var _applyDamage = __webpack_require__(204);

	var _applyDamage2 = _interopRequireDefault(_applyDamage);

	var _applyHealing = __webpack_require__(205);

	var _applyHealing2 = _interopRequireDefault(_applyHealing);

	var _setTempHp = __webpack_require__(206);

	var _setTempHp2 = _interopRequireDefault(_setTempHp);

	var _setStatus = __webpack_require__(207);

	var _setStatus2 = _interopRequireDefault(_setStatus);

	var _addBestiary = __webpack_require__(172);

	var _addBestiary2 = _interopRequireDefault(_addBestiary);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var storage = (0, _storage2.default)({
	  target: localStorage,
	  json: true,
	  sync: {
	    'participants': 'participants',
	    'bestiary': 'bestiary',
	    'order': 'order'
	  }
	});

	var app = (0, _cerebral.Module)({
	  modules: { storage: storage },
	  state: {
	    order: {},
	    participants: {},
	    bestiary: { 'giant-poisonous-snake': { url: 'http://google.com/#' } }
	  },
	  signals: {
	    addToOrder: _addToOrder2.default,
	    removeOrderGroup: _removeOrderGroup2.default,
	    removeParticipantFromOrder: _removeParticipantFromOrder2.default,
	    setInitiative: _setInitiative2.default,
	    setOrderName: _setOrderName2.default,
	    addParticipant: _addParticipant2.default,
	    removeParticipant: _removeParticipant2.default,
	    editInitiative: _editInitiative2.default,
	    setName: _setName2.default,
	    setMaxHp: _setMaxHp2.default,
	    setCurrentHp: _setCurrentHp2.default,
	    applyDamage: _applyDamage2.default,
	    applyHealing: _applyHealing2.default,
	    setTempHp: _setTempHp2.default,
	    setStatus: _setStatus2.default,
	    addBestiary: _addBestiary2.default
	  }
	});

	var controller = (0, _cerebral.Controller)(app, {
	  devtools: (0, _devtools2.default)({
	    host: 'localhost:8585',
	    https: false,
	    reconnect: true,
	    storeMutations: true,
	    bigComponentsWarning: 5,
	    warnStateProps: true
	  })
	});

	window.CEREBRAL = controller;

	var App = function App() {
	  return _react2.default.createElement(
	    _react3.Container,
	    { controller: controller },
	    _react2.default.createElement(_PopupMenu2.default, null)
	  );
	};

	window.Menu = App;

	chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	  console.log('inside event listner', request, sender, sendResponse);
	  var _request$msg = request.msg,
	      initiative = _request$msg.initiative,
	      dndBeyondId = _request$msg.dndBeyondId,
	      name = _request$msg.name,
	      hp = _request$msg.hp,
	      statBlockData = _request$msg.statBlockData;


	  hp ? window.CEREBRAL.getSignal('addParticipant')({ initiative: initiative, dndBeyondId: dndBeyondId, name: name, hp: hp, statBlockData: statBlockData }) : window.CEREBRAL.getSignal('addBestiary')({ dndBeyondId: dndBeyondId, statBlockData: statBlockData });
	});

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(82);


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(83);

	var ReactBaseClasses = __webpack_require__(84);
	var ReactChildren = __webpack_require__(93);
	var ReactDOMFactories = __webpack_require__(101);
	var ReactElement = __webpack_require__(95);
	var ReactPropTypes = __webpack_require__(107);
	var ReactVersion = __webpack_require__(112);

	var createReactClass = __webpack_require__(113);
	var onlyChild = __webpack_require__(115);

	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;

	if (process.env.NODE_ENV !== 'production') {
	  var lowPriorityWarning = __webpack_require__(92);
	  var canDefineProperty = __webpack_require__(89);
	  var ReactElementValidator = __webpack_require__(102);
	  var didWarnPropTypesDeprecated = false;
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}

	var __spread = _assign;
	var createMixin = function (mixin) {
	  return mixin;
	};

	if (process.env.NODE_ENV !== 'production') {
	  var warnedForSpread = false;
	  var warnedForCreateMixin = false;
	  __spread = function () {
	    lowPriorityWarning(warnedForSpread, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.');
	    warnedForSpread = true;
	    return _assign.apply(null, arguments);
	  };

	  createMixin = function (mixin) {
	    lowPriorityWarning(warnedForCreateMixin, 'React.createMixin is deprecated and should not be used. ' + 'In React v16.0, it will be removed. ' + 'You can use this mixin directly instead. ' + 'See https://fb.me/createmixin-was-never-implemented for more info.');
	    warnedForCreateMixin = true;
	    return mixin;
	  };
	}

	var React = {
	  // Modern

	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    toArray: ReactChildren.toArray,
	    only: onlyChild
	  },

	  Component: ReactBaseClasses.Component,
	  PureComponent: ReactBaseClasses.PureComponent,

	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement.isValidElement,

	  // Classic

	  PropTypes: ReactPropTypes,
	  createClass: createReactClass,
	  createFactory: createFactory,
	  createMixin: createMixin,

	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories,

	  version: ReactVersion,

	  // Deprecated hook for JSX spread, don't use this for anything.
	  __spread: __spread
	};

	if (process.env.NODE_ENV !== 'production') {
	  var warnedForCreateClass = false;
	  if (canDefineProperty) {
	    Object.defineProperty(React, 'PropTypes', {
	      get: function () {
	        lowPriorityWarning(didWarnPropTypesDeprecated, 'Accessing PropTypes via the main React package is deprecated,' + ' and will be removed in  React v16.0.' + ' Use the latest available v15.* prop-types package from npm instead.' + ' For info on usage, compatibility, migration and more, see ' + 'https://fb.me/prop-types-docs');
	        didWarnPropTypesDeprecated = true;
	        return ReactPropTypes;
	      }
	    });

	    Object.defineProperty(React, 'createClass', {
	      get: function () {
	        lowPriorityWarning(warnedForCreateClass, 'Accessing createClass via the main React package is deprecated,' + ' and will be removed in React v16.0.' + " Use a plain JavaScript class instead. If you're not yet " + 'ready to migrate, create-react-class v15.* is available ' + 'on npm as a temporary, drop-in replacement. ' + 'For more info see https://fb.me/react-create-class');
	        warnedForCreateClass = true;
	        return createReactClass;
	      }
	    });
	  }

	  // React.DOM factories are deprecated. Wrap these methods so that
	  // invocations of the React.DOM namespace and alert users to switch
	  // to the `react-dom-factories` package.
	  React.DOM = {};
	  var warnedForFactories = false;
	  Object.keys(ReactDOMFactories).forEach(function (factory) {
	    React.DOM[factory] = function () {
	      if (!warnedForFactories) {
	        lowPriorityWarning(false, 'Accessing factories like React.DOM.%s has been deprecated ' + 'and will be removed in v16.0+. Use the ' + 'react-dom-factories package instead. ' + ' Version 1.0 provides a drop-in replacement.' + ' For more info, see https://fb.me/react-dom-factories', factory);
	        warnedForFactories = true;
	      }
	      return ReactDOMFactories[factory].apply(ReactDOMFactories, arguments);
	    };
	  });
	}

	module.exports = React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 83 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(85),
	    _assign = __webpack_require__(83);

	var ReactNoopUpdateQueue = __webpack_require__(86);

	var canDefineProperty = __webpack_require__(89);
	var emptyObject = __webpack_require__(90);
	var invariant = __webpack_require__(91);
	var lowPriorityWarning = __webpack_require__(92);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	ReactComponent.prototype.isReactComponent = {};

	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
	  this.updater.enqueueSetState(this, partialState);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'setState');
	  }
	};

	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'forceUpdate');
	  }
	};

	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    if (canDefineProperty) {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function () {
	          lowPriorityWarning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
	          return undefined;
	        }
	      });
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactPureComponent(props, context, updater) {
	  // Duplicated from ReactComponent.
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	function ComponentDummy() {}
	ComponentDummy.prototype = ReactComponent.prototype;
	ReactPureComponent.prototype = new ComponentDummy();
	ReactPureComponent.prototype.constructor = ReactPureComponent;
	// Avoid an extra prototype jump for these methods.
	_assign(ReactPureComponent.prototype, ReactComponent.prototype);
	ReactPureComponent.prototype.isPureReactComponent = true;

	module.exports = {
	  Component: ReactComponent,
	  PureComponent: ReactPureComponent
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 85 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	'use strict';

	/**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */

	function reactProdInvariant(code) {
	  var argCount = arguments.length - 1;

	  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

	  for (var argIdx = 0; argIdx < argCount; argIdx++) {
	    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
	  }

	  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

	  var error = new Error(message);
	  error.name = 'Invariant Violation';
	  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

	  throw error;
	}

	module.exports = reactProdInvariant;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var warning = __webpack_require__(87);

	function warnNoop(publicInstance, callerName) {
	  if (process.env.NODE_ENV !== 'production') {
	    var constructor = publicInstance.constructor;
	    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
	  }
	}

	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {
	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },

	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function (publicInstance, callback) {},

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState) {
	    warnNoop(publicInstance, 'replaceState');
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState) {
	    warnNoop(publicInstance, 'setState');
	  }
	};

	module.exports = ReactNoopUpdateQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(88);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 88 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	'use strict';

	var canDefineProperty = false;
	if (process.env.NODE_ENV !== 'production') {
	  try {
	    // $FlowFixMe https://github.com/facebook/flow/issues/285
	    Object.defineProperty({}, 'x', { get: function () {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}

	module.exports = canDefineProperty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyObject = {};

	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Forked from fbjs/warning:
	 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
	 *
	 * Only change is we use console.warn instead of console.error,
	 * and do nothing when 'console' is not supported.
	 * This really simplifies the code.
	 * ---
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var lowPriorityWarning = function () {};

	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function (format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.warn(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  lowPriorityWarning = function (condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	module.exports = lowPriorityWarning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var PooledClass = __webpack_require__(94);
	var ReactElement = __webpack_require__(95);

	var emptyFunction = __webpack_require__(88);
	var traverseAllChildren = __webpack_require__(98);

	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;

	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func,
	      context = bookKeeping.context;

	  func.call(context, child, bookKeeping.count++);
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result,
	      keyPrefix = bookKeeping.keyPrefix,
	      func = bookKeeping.func,
	      context = bookKeeping.context;


	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement.isValidElement(mappedChild)) {
	      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}

	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}

	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}

	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}

	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}

	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};

	module.exports = ReactChildren;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(85);

	var invariant = __webpack_require__(91);

	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function (copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};

	var twoArgumentPooler = function (a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};

	var threeArgumentPooler = function (a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};

	var fourArgumentPooler = function (a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};

	var standardReleaser = function (instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};

	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;

	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances.
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function (CopyConstructor, pooler) {
	  // Casting as any so that flow ignores the actual implementation and trusts
	  // it to match the type we declared
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};

	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler
	};

	module.exports = PooledClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(83);

	var ReactCurrentOwner = __webpack_require__(96);

	var warning = __webpack_require__(87);
	var canDefineProperty = __webpack_require__(89);
	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var REACT_ELEMENT_TYPE = __webpack_require__(97);

	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};

	var specialPropKeyWarningShown, specialPropRefWarningShown;

	function hasValidRef(config) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.key !== undefined;
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function () {
	    if (!specialPropKeyWarningShown) {
	      specialPropKeyWarningShown = true;
	      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}

	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function () {
	    if (!specialPropRefWarningShown) {
	      specialPropRefWarningShown = true;
	      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}

	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,

	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,

	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  if (process.env.NODE_ENV !== 'production') {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};

	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty) {
	      Object.defineProperty(element._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: false
	      });
	      // self and source are DEV only properties.
	      Object.defineProperty(element, '_self', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: self
	      });
	      // Two elements created in two different places should be considered
	      // equal for testing purposes and therefore we hide it from enumeration.
	      Object.defineProperty(element, '_source', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: source
	      });
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._source = source;
	    }
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};

	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
	 */
	ReactElement.createElement = function (type, config, children) {
	  var propName;

	  // Reserved names are extracted
	  var props = {};

	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      ref = config.ref;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    if (process.env.NODE_ENV !== 'production') {
	      if (Object.freeze) {
	        Object.freeze(childArray);
	      }
	    }
	    props.children = childArray;
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    if (key || ref) {
	      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
	        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
	        if (key) {
	          defineKeyPropWarningGetter(props, displayName);
	        }
	        if (ref) {
	          defineRefPropWarningGetter(props, displayName);
	        }
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	};

	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
	 */
	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};

	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

	  return newElement;
	};

	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
	 */
	ReactElement.cloneElement = function (element, config, children) {
	  var propName;

	  // Original props are copied
	  var props = _assign({}, element.props);

	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;

	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    // Remaining properties override existing props
	    var defaultProps;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};

	/**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};

	module.exports = ReactElement;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 96 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	'use strict';

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	var ReactCurrentOwner = {
	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null
	};

	module.exports = ReactCurrentOwner;

/***/ }),
/* 97 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	'use strict';

	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.

	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

	module.exports = REACT_ELEMENT_TYPE;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(85);

	var ReactCurrentOwner = __webpack_require__(96);
	var REACT_ELEMENT_TYPE = __webpack_require__(97);

	var getIteratorFn = __webpack_require__(99);
	var invariant = __webpack_require__(91);
	var KeyEscapeUtils = __webpack_require__(100);
	var warning = __webpack_require__(87);

	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';

	/**
	 * This is inlined from ReactElement since this file is shared between
	 * isomorphic and renderers. We could extract this to a
	 *
	 */

	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */

	var didWarnAboutMaps = false;

	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (component && typeof component === 'object' && component.key != null) {
	    // Explicit key
	    return KeyEscapeUtils.escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}

	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  if (children === null || type === 'string' || type === 'number' ||
	  // The following is inlined from ReactElement. This means we can optimize
	  // some checks. React Fiber also inlines this logic for similar purposes.
	  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }

	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = nextNamePrefix + getComponentKey(child, ii++);
	          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	        }
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          var mapsAsChildrenAddendum = '';
	          if (ReactCurrentOwner.current) {
	            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
	            if (mapsAsChildrenOwnerName) {
	              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
	            }
	          }
	          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
	            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	          }
	        }
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if (process.env.NODE_ENV !== 'production') {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
	        if (children._isReactElement) {
	          addendum = " It looks like you're using an element created by a different " + 'version of React. Make sure to use only one copy of React.';
	        }
	        if (ReactCurrentOwner.current) {
	          var name = ReactCurrentOwner.current.getName();
	          if (name) {
	            addendum += ' Check the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = String(children);
	       true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
	    }
	  }

	  return subtreeCount;
	}

	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}

	module.exports = traverseAllChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 99 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	'use strict';

	/* global Symbol */

	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}

	module.exports = getIteratorFn;

/***/ }),
/* 100 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	'use strict';

	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */

	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });

	  return '$' + escapedString;
	}

	/**
	 * Unescape and unwrap key for human-readable display
	 *
	 * @param {string} key to unescape.
	 * @return {string} the unescaped key.
	 */
	function unescape(key) {
	  var unescapeRegex = /(=0|=2)/g;
	  var unescaperLookup = {
	    '=0': '=',
	    '=2': ':'
	  };
	  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

	  return ('' + keySubstring).replace(unescapeRegex, function (match) {
	    return unescaperLookup[match];
	  });
	}

	var KeyEscapeUtils = {
	  escape: escape,
	  unescape: unescape
	};

	module.exports = KeyEscapeUtils;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var ReactElement = __webpack_require__(95);

	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @private
	 */
	var createDOMFactory = ReactElement.createFactory;
	if (process.env.NODE_ENV !== 'production') {
	  var ReactElementValidator = __webpack_require__(102);
	  createDOMFactory = ReactElementValidator.createFactory;
	}

	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 *
	 * @public
	 */
	var ReactDOMFactories = {
	  a: createDOMFactory('a'),
	  abbr: createDOMFactory('abbr'),
	  address: createDOMFactory('address'),
	  area: createDOMFactory('area'),
	  article: createDOMFactory('article'),
	  aside: createDOMFactory('aside'),
	  audio: createDOMFactory('audio'),
	  b: createDOMFactory('b'),
	  base: createDOMFactory('base'),
	  bdi: createDOMFactory('bdi'),
	  bdo: createDOMFactory('bdo'),
	  big: createDOMFactory('big'),
	  blockquote: createDOMFactory('blockquote'),
	  body: createDOMFactory('body'),
	  br: createDOMFactory('br'),
	  button: createDOMFactory('button'),
	  canvas: createDOMFactory('canvas'),
	  caption: createDOMFactory('caption'),
	  cite: createDOMFactory('cite'),
	  code: createDOMFactory('code'),
	  col: createDOMFactory('col'),
	  colgroup: createDOMFactory('colgroup'),
	  data: createDOMFactory('data'),
	  datalist: createDOMFactory('datalist'),
	  dd: createDOMFactory('dd'),
	  del: createDOMFactory('del'),
	  details: createDOMFactory('details'),
	  dfn: createDOMFactory('dfn'),
	  dialog: createDOMFactory('dialog'),
	  div: createDOMFactory('div'),
	  dl: createDOMFactory('dl'),
	  dt: createDOMFactory('dt'),
	  em: createDOMFactory('em'),
	  embed: createDOMFactory('embed'),
	  fieldset: createDOMFactory('fieldset'),
	  figcaption: createDOMFactory('figcaption'),
	  figure: createDOMFactory('figure'),
	  footer: createDOMFactory('footer'),
	  form: createDOMFactory('form'),
	  h1: createDOMFactory('h1'),
	  h2: createDOMFactory('h2'),
	  h3: createDOMFactory('h3'),
	  h4: createDOMFactory('h4'),
	  h5: createDOMFactory('h5'),
	  h6: createDOMFactory('h6'),
	  head: createDOMFactory('head'),
	  header: createDOMFactory('header'),
	  hgroup: createDOMFactory('hgroup'),
	  hr: createDOMFactory('hr'),
	  html: createDOMFactory('html'),
	  i: createDOMFactory('i'),
	  iframe: createDOMFactory('iframe'),
	  img: createDOMFactory('img'),
	  input: createDOMFactory('input'),
	  ins: createDOMFactory('ins'),
	  kbd: createDOMFactory('kbd'),
	  keygen: createDOMFactory('keygen'),
	  label: createDOMFactory('label'),
	  legend: createDOMFactory('legend'),
	  li: createDOMFactory('li'),
	  link: createDOMFactory('link'),
	  main: createDOMFactory('main'),
	  map: createDOMFactory('map'),
	  mark: createDOMFactory('mark'),
	  menu: createDOMFactory('menu'),
	  menuitem: createDOMFactory('menuitem'),
	  meta: createDOMFactory('meta'),
	  meter: createDOMFactory('meter'),
	  nav: createDOMFactory('nav'),
	  noscript: createDOMFactory('noscript'),
	  object: createDOMFactory('object'),
	  ol: createDOMFactory('ol'),
	  optgroup: createDOMFactory('optgroup'),
	  option: createDOMFactory('option'),
	  output: createDOMFactory('output'),
	  p: createDOMFactory('p'),
	  param: createDOMFactory('param'),
	  picture: createDOMFactory('picture'),
	  pre: createDOMFactory('pre'),
	  progress: createDOMFactory('progress'),
	  q: createDOMFactory('q'),
	  rp: createDOMFactory('rp'),
	  rt: createDOMFactory('rt'),
	  ruby: createDOMFactory('ruby'),
	  s: createDOMFactory('s'),
	  samp: createDOMFactory('samp'),
	  script: createDOMFactory('script'),
	  section: createDOMFactory('section'),
	  select: createDOMFactory('select'),
	  small: createDOMFactory('small'),
	  source: createDOMFactory('source'),
	  span: createDOMFactory('span'),
	  strong: createDOMFactory('strong'),
	  style: createDOMFactory('style'),
	  sub: createDOMFactory('sub'),
	  summary: createDOMFactory('summary'),
	  sup: createDOMFactory('sup'),
	  table: createDOMFactory('table'),
	  tbody: createDOMFactory('tbody'),
	  td: createDOMFactory('td'),
	  textarea: createDOMFactory('textarea'),
	  tfoot: createDOMFactory('tfoot'),
	  th: createDOMFactory('th'),
	  thead: createDOMFactory('thead'),
	  time: createDOMFactory('time'),
	  title: createDOMFactory('title'),
	  tr: createDOMFactory('tr'),
	  track: createDOMFactory('track'),
	  u: createDOMFactory('u'),
	  ul: createDOMFactory('ul'),
	  'var': createDOMFactory('var'),
	  video: createDOMFactory('video'),
	  wbr: createDOMFactory('wbr'),

	  // SVG
	  circle: createDOMFactory('circle'),
	  clipPath: createDOMFactory('clipPath'),
	  defs: createDOMFactory('defs'),
	  ellipse: createDOMFactory('ellipse'),
	  g: createDOMFactory('g'),
	  image: createDOMFactory('image'),
	  line: createDOMFactory('line'),
	  linearGradient: createDOMFactory('linearGradient'),
	  mask: createDOMFactory('mask'),
	  path: createDOMFactory('path'),
	  pattern: createDOMFactory('pattern'),
	  polygon: createDOMFactory('polygon'),
	  polyline: createDOMFactory('polyline'),
	  radialGradient: createDOMFactory('radialGradient'),
	  rect: createDOMFactory('rect'),
	  stop: createDOMFactory('stop'),
	  svg: createDOMFactory('svg'),
	  text: createDOMFactory('text'),
	  tspan: createDOMFactory('tspan')
	};

	module.exports = ReactDOMFactories;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */

	'use strict';

	var ReactCurrentOwner = __webpack_require__(96);
	var ReactComponentTreeHook = __webpack_require__(103);
	var ReactElement = __webpack_require__(95);

	var checkReactTypeSpec = __webpack_require__(104);

	var canDefineProperty = __webpack_require__(89);
	var getIteratorFn = __webpack_require__(99);
	var warning = __webpack_require__(87);
	var lowPriorityWarning = __webpack_require__(92);

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = ReactCurrentOwner.current.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	function getSourceInfoErrorAddendum(elementProps) {
	  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
	    var source = elementProps.__source;
	    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	    var lineNumber = source.lineNumber;
	    return ' Check your code at ' + fileName + ':' + lineNumber + '.';
	  }
	  return '';
	}

	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  var info = getDeclarationErrorAddendum();

	  if (!info) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      info = ' Check the top-level render call using <' + parentName + '>.';
	    }
	  }
	  return info;
	}

	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;

	  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

	  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
	  if (memoizer[currentComponentErrorInfo]) {
	    return;
	  }
	  memoizer[currentComponentErrorInfo] = true;

	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  var childOwner = '';
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
	  }

	  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
	}

	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}

	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;
	  if (componentClass.propTypes) {
	    checkReactTypeSpec(componentClass.propTypes, element.props, 'prop', name, element, null);
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
	  }
	}

	var ReactElementValidator = {
	  createElement: function (type, props, children) {
	    var validType = typeof type === 'string' || typeof type === 'function';
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    if (!validType) {
	      if (typeof type !== 'function' && typeof type !== 'string') {
	        var info = '';
	        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	          info += ' You likely forgot to export your component from the file ' + "it's defined in.";
	        }

	        var sourceInfo = getSourceInfoErrorAddendum(props);
	        if (sourceInfo) {
	          info += sourceInfo;
	        } else {
	          info += getDeclarationErrorAddendum();
	        }

	        info += ReactComponentTreeHook.getCurrentStackAddendum();

	        var currentSource = props !== null && props !== undefined && props.__source !== undefined ? props.__source : null;
	        ReactComponentTreeHook.pushNonStandardWarningStack(true, currentSource);
	        process.env.NODE_ENV !== 'production' ? warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info) : void 0;
	        ReactComponentTreeHook.popNonStandardWarningStack();
	      }
	    }

	    var element = ReactElement.createElement.apply(this, arguments);

	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }

	    // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)
	    if (validType) {
	      for (var i = 2; i < arguments.length; i++) {
	        validateChildKeys(arguments[i], type);
	      }
	    }

	    validatePropTypes(element);

	    return element;
	  },

	  createFactory: function (type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;

	    if (process.env.NODE_ENV !== 'production') {
	      if (canDefineProperty) {
	        Object.defineProperty(validatedFactory, 'type', {
	          enumerable: false,
	          get: function () {
	            lowPriorityWarning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
	            Object.defineProperty(this, 'type', {
	              value: type
	            });
	            return type;
	          }
	        });
	      }
	    }

	    return validatedFactory;
	  },

	  cloneElement: function (element, props, children) {
	    var newElement = ReactElement.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }
	};

	module.exports = ReactElementValidator;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2016-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(85);

	var ReactCurrentOwner = __webpack_require__(96);

	var invariant = __webpack_require__(91);
	var warning = __webpack_require__(87);

	function isNative(fn) {
	  // Based on isNative() from Lodash
	  var funcToString = Function.prototype.toString;
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	  var reIsNative = RegExp('^' + funcToString
	  // Take an example native function source for comparison
	  .call(hasOwnProperty
	  // Strip regex characters so we can use it for regex
	  ).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&'
	  // Remove hasOwnProperty from the template to make it generic
	  ).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	  try {
	    var source = funcToString.call(fn);
	    return reIsNative.test(source);
	  } catch (err) {
	    return false;
	  }
	}

	var canUseCollections =
	// Array.from
	typeof Array.from === 'function' &&
	// Map
	typeof Map === 'function' && isNative(Map) &&
	// Map.prototype.keys
	Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
	// Set
	typeof Set === 'function' && isNative(Set) &&
	// Set.prototype.keys
	Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

	var setItem;
	var getItem;
	var removeItem;
	var getItemIDs;
	var addRoot;
	var removeRoot;
	var getRootIDs;

	if (canUseCollections) {
	  var itemMap = new Map();
	  var rootIDSet = new Set();

	  setItem = function (id, item) {
	    itemMap.set(id, item);
	  };
	  getItem = function (id) {
	    return itemMap.get(id);
	  };
	  removeItem = function (id) {
	    itemMap['delete'](id);
	  };
	  getItemIDs = function () {
	    return Array.from(itemMap.keys());
	  };

	  addRoot = function (id) {
	    rootIDSet.add(id);
	  };
	  removeRoot = function (id) {
	    rootIDSet['delete'](id);
	  };
	  getRootIDs = function () {
	    return Array.from(rootIDSet.keys());
	  };
	} else {
	  var itemByKey = {};
	  var rootByKey = {};

	  // Use non-numeric keys to prevent V8 performance issues:
	  // https://github.com/facebook/react/pull/7232
	  var getKeyFromID = function (id) {
	    return '.' + id;
	  };
	  var getIDFromKey = function (key) {
	    return parseInt(key.substr(1), 10);
	  };

	  setItem = function (id, item) {
	    var key = getKeyFromID(id);
	    itemByKey[key] = item;
	  };
	  getItem = function (id) {
	    var key = getKeyFromID(id);
	    return itemByKey[key];
	  };
	  removeItem = function (id) {
	    var key = getKeyFromID(id);
	    delete itemByKey[key];
	  };
	  getItemIDs = function () {
	    return Object.keys(itemByKey).map(getIDFromKey);
	  };

	  addRoot = function (id) {
	    var key = getKeyFromID(id);
	    rootByKey[key] = true;
	  };
	  removeRoot = function (id) {
	    var key = getKeyFromID(id);
	    delete rootByKey[key];
	  };
	  getRootIDs = function () {
	    return Object.keys(rootByKey).map(getIDFromKey);
	  };
	}

	var unmountedIDs = [];

	function purgeDeep(id) {
	  var item = getItem(id);
	  if (item) {
	    var childIDs = item.childIDs;

	    removeItem(id);
	    childIDs.forEach(purgeDeep);
	  }
	}

	function describeComponentFrame(name, source, ownerName) {
	  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	}

	function getDisplayName(element) {
	  if (element == null) {
	    return '#empty';
	  } else if (typeof element === 'string' || typeof element === 'number') {
	    return '#text';
	  } else if (typeof element.type === 'string') {
	    return element.type;
	  } else {
	    return element.type.displayName || element.type.name || 'Unknown';
	  }
	}

	function describeID(id) {
	  var name = ReactComponentTreeHook.getDisplayName(id);
	  var element = ReactComponentTreeHook.getElement(id);
	  var ownerID = ReactComponentTreeHook.getOwnerID(id);
	  var ownerName;
	  if (ownerID) {
	    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
	  }
	  process.env.NODE_ENV !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
	  return describeComponentFrame(name, element && element._source, ownerName);
	}

	var ReactComponentTreeHook = {
	  onSetChildren: function (id, nextChildIDs) {
	    var item = getItem(id);
	    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
	    item.childIDs = nextChildIDs;

	    for (var i = 0; i < nextChildIDs.length; i++) {
	      var nextChildID = nextChildIDs[i];
	      var nextChild = getItem(nextChildID);
	      !nextChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
	      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
	      !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
	      if (nextChild.parentID == null) {
	        nextChild.parentID = id;
	        // TODO: This shouldn't be necessary but mounting a new root during in
	        // componentWillMount currently causes not-yet-mounted components to
	        // be purged from our tree data so their parent id is missing.
	      }
	      !(nextChild.parentID === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
	    }
	  },
	  onBeforeMountComponent: function (id, element, parentID) {
	    var item = {
	      element: element,
	      parentID: parentID,
	      text: null,
	      childIDs: [],
	      isMounted: false,
	      updateCount: 0
	    };
	    setItem(id, item);
	  },
	  onBeforeUpdateComponent: function (id, element) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.element = element;
	  },
	  onMountComponent: function (id) {
	    var item = getItem(id);
	    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
	    item.isMounted = true;
	    var isRoot = item.parentID === 0;
	    if (isRoot) {
	      addRoot(id);
	    }
	  },
	  onUpdateComponent: function (id) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.updateCount++;
	  },
	  onUnmountComponent: function (id) {
	    var item = getItem(id);
	    if (item) {
	      // We need to check if it exists.
	      // `item` might not exist if it is inside an error boundary, and a sibling
	      // error boundary child threw while mounting. Then this instance never
	      // got a chance to mount, but it still gets an unmounting event during
	      // the error boundary cleanup.
	      item.isMounted = false;
	      var isRoot = item.parentID === 0;
	      if (isRoot) {
	        removeRoot(id);
	      }
	    }
	    unmountedIDs.push(id);
	  },
	  purgeUnmountedComponents: function () {
	    if (ReactComponentTreeHook._preventPurging) {
	      // Should only be used for testing.
	      return;
	    }

	    for (var i = 0; i < unmountedIDs.length; i++) {
	      var id = unmountedIDs[i];
	      purgeDeep(id);
	    }
	    unmountedIDs.length = 0;
	  },
	  isMounted: function (id) {
	    var item = getItem(id);
	    return item ? item.isMounted : false;
	  },
	  getCurrentStackAddendum: function (topElement) {
	    var info = '';
	    if (topElement) {
	      var name = getDisplayName(topElement);
	      var owner = topElement._owner;
	      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
	    }

	    var currentOwner = ReactCurrentOwner.current;
	    var id = currentOwner && currentOwner._debugID;

	    info += ReactComponentTreeHook.getStackAddendumByID(id);
	    return info;
	  },
	  getStackAddendumByID: function (id) {
	    var info = '';
	    while (id) {
	      info += describeID(id);
	      id = ReactComponentTreeHook.getParentID(id);
	    }
	    return info;
	  },
	  getChildIDs: function (id) {
	    var item = getItem(id);
	    return item ? item.childIDs : [];
	  },
	  getDisplayName: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element) {
	      return null;
	    }
	    return getDisplayName(element);
	  },
	  getElement: function (id) {
	    var item = getItem(id);
	    return item ? item.element : null;
	  },
	  getOwnerID: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element || !element._owner) {
	      return null;
	    }
	    return element._owner._debugID;
	  },
	  getParentID: function (id) {
	    var item = getItem(id);
	    return item ? item.parentID : null;
	  },
	  getSource: function (id) {
	    var item = getItem(id);
	    var element = item ? item.element : null;
	    var source = element != null ? element._source : null;
	    return source;
	  },
	  getText: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (typeof element === 'string') {
	      return element;
	    } else if (typeof element === 'number') {
	      return '' + element;
	    } else {
	      return null;
	    }
	  },
	  getUpdateCount: function (id) {
	    var item = getItem(id);
	    return item ? item.updateCount : 0;
	  },


	  getRootIDs: getRootIDs,
	  getRegisteredIDs: getItemIDs,

	  pushNonStandardWarningStack: function (isCreatingElement, currentSource) {
	    if (typeof console.reactStack !== 'function') {
	      return;
	    }

	    var stack = [];
	    var currentOwner = ReactCurrentOwner.current;
	    var id = currentOwner && currentOwner._debugID;

	    try {
	      if (isCreatingElement) {
	        stack.push({
	          name: id ? ReactComponentTreeHook.getDisplayName(id) : null,
	          fileName: currentSource ? currentSource.fileName : null,
	          lineNumber: currentSource ? currentSource.lineNumber : null
	        });
	      }

	      while (id) {
	        var element = ReactComponentTreeHook.getElement(id);
	        var parentID = ReactComponentTreeHook.getParentID(id);
	        var ownerID = ReactComponentTreeHook.getOwnerID(id);
	        var ownerName = ownerID ? ReactComponentTreeHook.getDisplayName(ownerID) : null;
	        var source = element && element._source;
	        stack.push({
	          name: ownerName,
	          fileName: source ? source.fileName : null,
	          lineNumber: source ? source.lineNumber : null
	        });
	        id = parentID;
	      }
	    } catch (err) {
	      // Internal state is messed up.
	      // Stop building the stack (it's just a nice to have).
	    }

	    console.reactStack(stack);
	  },
	  popNonStandardWarningStack: function () {
	    if (typeof console.reactStackEnd !== 'function') {
	      return;
	    }
	    console.reactStackEnd();
	  }
	};

	module.exports = ReactComponentTreeHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(85);

	var ReactPropTypeLocationNames = __webpack_require__(105);
	var ReactPropTypesSecret = __webpack_require__(106);

	var invariant = __webpack_require__(91);
	var warning = __webpack_require__(87);

	var ReactComponentTreeHook;

	if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
	  // Temporary hack.
	  // Inline requires don't work well with Jest:
	  // https://github.com/facebook/react/issues/7240
	  // Remove the inline requires when we don't need them anymore:
	  // https://github.com/facebook/react/pull/7178
	  ReactComponentTreeHook = __webpack_require__(103);
	}

	var loggedTypeFailures = {};

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?object} element The React element that is being type-checked
	 * @param {?number} debugID The React component instance that is being type-checked
	 * @private
	 */
	function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
	  for (var typeSpecName in typeSpecs) {
	    if (typeSpecs.hasOwnProperty(typeSpecName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        // This is intentionally an invariant that gets caught. It's the same
	        // behavior as without this statement except with a better message.
	        !(typeof typeSpecs[typeSpecName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
	        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	      } catch (ex) {
	        error = ex;
	      }
	      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;

	        var componentStackInfo = '';

	        if (process.env.NODE_ENV !== 'production') {
	          if (!ReactComponentTreeHook) {
	            ReactComponentTreeHook = __webpack_require__(103);
	          }
	          if (debugID !== null) {
	            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
	          } else if (element !== null) {
	            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
	          }
	        }

	        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
	      }
	    }
	  }
	}

	module.exports = checkReactTypeSpec;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	'use strict';

	var ReactPropTypeLocationNames = {};

	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}

	module.exports = ReactPropTypeLocationNames;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 106 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var _require = __webpack_require__(95),
	    isValidElement = _require.isValidElement;

	var factory = __webpack_require__(108);

	module.exports = factory(isValidElement);

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	// React 15.5 references this module, and assumes PropTypes are still callable in production.
	// Therefore we re-export development-only version with all the PropTypes checks here.
	// However if one is migrating to the `prop-types` npm library, they will go through the
	// `index.js` entry point, and it will branch depending on the environment.
	var factory = __webpack_require__(109);
	module.exports = function(isValidElement) {
	  // It is still allowed in 15.5.
	  var throwOnDirectAccess = false;
	  return factory(isValidElement, throwOnDirectAccess);
	};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(88);
	var invariant = __webpack_require__(91);
	var warning = __webpack_require__(87);
	var assign = __webpack_require__(83);

	var ReactPropTypesSecret = __webpack_require__(110);
	var checkPropTypes = __webpack_require__(111);

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 110 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(91);
	  var warning = __webpack_require__(87);
	  var ReactPropTypesSecret = __webpack_require__(110);
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 112 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	module.exports = '15.6.2';

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var _require = __webpack_require__(84),
	    Component = _require.Component;

	var _require2 = __webpack_require__(95),
	    isValidElement = _require2.isValidElement;

	var ReactNoopUpdateQueue = __webpack_require__(86);
	var factory = __webpack_require__(114);

	module.exports = factory(Component, isValidElement, ReactNoopUpdateQueue);

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(83);

	var emptyObject = __webpack_require__(90);
	var _invariant = __webpack_require__(91);

	if (process.env.NODE_ENV !== 'production') {
	  var warning = __webpack_require__(87);
	}

	var MIXINS_KEY = 'mixins';

	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}

	var ReactPropTypeLocationNames;
	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	} else {
	  ReactPropTypeLocationNames = {};
	}

	function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
	  /**
	   * Policies that describe methods in `ReactClassInterface`.
	   */

	  var injectedMixins = [];

	  /**
	   * Composite components are higher-level components that compose other composite
	   * or host components.
	   *
	   * To create a new type of `ReactClass`, pass a specification of
	   * your new class to `React.createClass`. The only requirement of your class
	   * specification is that you implement a `render` method.
	   *
	   *   var MyComponent = React.createClass({
	   *     render: function() {
	   *       return <div>Hello World</div>;
	   *     }
	   *   });
	   *
	   * The class specification supports a specific protocol of methods that have
	   * special meaning (e.g. `render`). See `ReactClassInterface` for
	   * more the comprehensive protocol. Any other properties and methods in the
	   * class specification will be available on the prototype.
	   *
	   * @interface ReactClassInterface
	   * @internal
	   */
	  var ReactClassInterface = {
	    /**
	     * An array of Mixin objects to include when defining your component.
	     *
	     * @type {array}
	     * @optional
	     */
	    mixins: 'DEFINE_MANY',

	    /**
	     * An object containing properties and methods that should be defined on
	     * the component's constructor instead of its prototype (static methods).
	     *
	     * @type {object}
	     * @optional
	     */
	    statics: 'DEFINE_MANY',

	    /**
	     * Definition of prop types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    propTypes: 'DEFINE_MANY',

	    /**
	     * Definition of context types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    contextTypes: 'DEFINE_MANY',

	    /**
	     * Definition of context types this component sets for its children.
	     *
	     * @type {object}
	     * @optional
	     */
	    childContextTypes: 'DEFINE_MANY',

	    // ==== Definition methods ====

	    /**
	     * Invoked when the component is mounted. Values in the mapping will be set on
	     * `this.props` if that prop is not specified (i.e. using an `in` check).
	     *
	     * This method is invoked before `getInitialState` and therefore cannot rely
	     * on `this.state` or use `this.setState`.
	     *
	     * @return {object}
	     * @optional
	     */
	    getDefaultProps: 'DEFINE_MANY_MERGED',

	    /**
	     * Invoked once before the component is mounted. The return value will be used
	     * as the initial value of `this.state`.
	     *
	     *   getInitialState: function() {
	     *     return {
	     *       isOn: false,
	     *       fooBaz: new BazFoo()
	     *     }
	     *   }
	     *
	     * @return {object}
	     * @optional
	     */
	    getInitialState: 'DEFINE_MANY_MERGED',

	    /**
	     * @return {object}
	     * @optional
	     */
	    getChildContext: 'DEFINE_MANY_MERGED',

	    /**
	     * Uses props from `this.props` and state from `this.state` to render the
	     * structure of the component.
	     *
	     * No guarantees are made about when or how often this method is invoked, so
	     * it must not have side effects.
	     *
	     *   render: function() {
	     *     var name = this.props.name;
	     *     return <div>Hello, {name}!</div>;
	     *   }
	     *
	     * @return {ReactComponent}
	     * @required
	     */
	    render: 'DEFINE_ONCE',

	    // ==== Delegate methods ====

	    /**
	     * Invoked when the component is initially created and about to be mounted.
	     * This may have side effects, but any external subscriptions or data created
	     * by this method must be cleaned up in `componentWillUnmount`.
	     *
	     * @optional
	     */
	    componentWillMount: 'DEFINE_MANY',

	    /**
	     * Invoked when the component has been mounted and has a DOM representation.
	     * However, there is no guarantee that the DOM node is in the document.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been mounted (initialized and rendered) for the first time.
	     *
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidMount: 'DEFINE_MANY',

	    /**
	     * Invoked before the component receives new props.
	     *
	     * Use this as an opportunity to react to a prop transition by updating the
	     * state using `this.setState`. Current props are accessed via `this.props`.
	     *
	     *   componentWillReceiveProps: function(nextProps, nextContext) {
	     *     this.setState({
	     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	     *     });
	     *   }
	     *
	     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	     * transition may cause a state change, but the opposite is not true. If you
	     * need it, you are probably looking for `componentWillUpdate`.
	     *
	     * @param {object} nextProps
	     * @optional
	     */
	    componentWillReceiveProps: 'DEFINE_MANY',

	    /**
	     * Invoked while deciding if the component should be updated as a result of
	     * receiving new props, state and/or context.
	     *
	     * Use this as an opportunity to `return false` when you're certain that the
	     * transition to the new props/state/context will not require a component
	     * update.
	     *
	     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	     *     return !equal(nextProps, this.props) ||
	     *       !equal(nextState, this.state) ||
	     *       !equal(nextContext, this.context);
	     *   }
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @return {boolean} True if the component should update.
	     * @optional
	     */
	    shouldComponentUpdate: 'DEFINE_ONCE',

	    /**
	     * Invoked when the component is about to update due to a transition from
	     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	     * and `nextContext`.
	     *
	     * Use this as an opportunity to perform preparation before an update occurs.
	     *
	     * NOTE: You **cannot** use `this.setState()` in this method.
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @param {ReactReconcileTransaction} transaction
	     * @optional
	     */
	    componentWillUpdate: 'DEFINE_MANY',

	    /**
	     * Invoked when the component's DOM representation has been updated.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been updated.
	     *
	     * @param {object} prevProps
	     * @param {?object} prevState
	     * @param {?object} prevContext
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidUpdate: 'DEFINE_MANY',

	    /**
	     * Invoked when the component is about to be removed from its parent and have
	     * its DOM representation destroyed.
	     *
	     * Use this as an opportunity to deallocate any external resources.
	     *
	     * NOTE: There is no `componentDidUnmount` since your component will have been
	     * destroyed by that point.
	     *
	     * @optional
	     */
	    componentWillUnmount: 'DEFINE_MANY',

	    /**
	     * Replacement for (deprecated) `componentWillMount`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillMount: 'DEFINE_MANY',

	    /**
	     * Replacement for (deprecated) `componentWillReceiveProps`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',

	    /**
	     * Replacement for (deprecated) `componentWillUpdate`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillUpdate: 'DEFINE_MANY',

	    // ==== Advanced methods ====

	    /**
	     * Updates the component's currently mounted DOM representation.
	     *
	     * By default, this implements React's rendering and reconciliation algorithm.
	     * Sophisticated clients may wish to override this.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     * @overridable
	     */
	    updateComponent: 'OVERRIDE_BASE'
	  };

	  /**
	   * Similar to ReactClassInterface but for static methods.
	   */
	  var ReactClassStaticInterface = {
	    /**
	     * This method is invoked after a component is instantiated and when it
	     * receives new props. Return an object to update state in response to
	     * prop changes. Return null to indicate no change to state.
	     *
	     * If an object is returned, its keys will be merged into the existing state.
	     *
	     * @return {object || null}
	     * @optional
	     */
	    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
	  };

	  /**
	   * Mapping from class specification keys to special processing functions.
	   *
	   * Although these are declared like instance properties in the specification
	   * when defining classes using `React.createClass`, they are actually static
	   * and are accessible on the constructor instead of the prototype. Despite
	   * being static, they must be defined outside of the "statics" key under
	   * which all other static methods are defined.
	   */
	  var RESERVED_SPEC_KEYS = {
	    displayName: function(Constructor, displayName) {
	      Constructor.displayName = displayName;
	    },
	    mixins: function(Constructor, mixins) {
	      if (mixins) {
	        for (var i = 0; i < mixins.length; i++) {
	          mixSpecIntoComponent(Constructor, mixins[i]);
	        }
	      }
	    },
	    childContextTypes: function(Constructor, childContextTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, childContextTypes, 'childContext');
	      }
	      Constructor.childContextTypes = _assign(
	        {},
	        Constructor.childContextTypes,
	        childContextTypes
	      );
	    },
	    contextTypes: function(Constructor, contextTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, contextTypes, 'context');
	      }
	      Constructor.contextTypes = _assign(
	        {},
	        Constructor.contextTypes,
	        contextTypes
	      );
	    },
	    /**
	     * Special case getDefaultProps which should move into statics but requires
	     * automatic merging.
	     */
	    getDefaultProps: function(Constructor, getDefaultProps) {
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps = createMergedResultFunction(
	          Constructor.getDefaultProps,
	          getDefaultProps
	        );
	      } else {
	        Constructor.getDefaultProps = getDefaultProps;
	      }
	    },
	    propTypes: function(Constructor, propTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, propTypes, 'prop');
	      }
	      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	    },
	    statics: function(Constructor, statics) {
	      mixStaticSpecIntoComponent(Constructor, statics);
	    },
	    autobind: function() {}
	  };

	  function validateTypeDef(Constructor, typeDef, location) {
	    for (var propName in typeDef) {
	      if (typeDef.hasOwnProperty(propName)) {
	        // use a warning instead of an _invariant so components
	        // don't show up in prod but only in __DEV__
	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            typeof typeDef[propName] === 'function',
	            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	              'React.PropTypes.',
	            Constructor.displayName || 'ReactClass',
	            ReactPropTypeLocationNames[location],
	            propName
	          );
	        }
	      }
	    }
	  }

	  function validateMethodOverride(isAlreadyDefined, name) {
	    var specPolicy = ReactClassInterface.hasOwnProperty(name)
	      ? ReactClassInterface[name]
	      : null;

	    // Disallow overriding of base class methods unless explicitly allowed.
	    if (ReactClassMixin.hasOwnProperty(name)) {
	      _invariant(
	        specPolicy === 'OVERRIDE_BASE',
	        'ReactClassInterface: You are attempting to override ' +
	          '`%s` from your class specification. Ensure that your method names ' +
	          'do not overlap with React methods.',
	        name
	      );
	    }

	    // Disallow defining methods more than once unless explicitly allowed.
	    if (isAlreadyDefined) {
	      _invariant(
	        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
	        'ReactClassInterface: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be due ' +
	          'to a mixin.',
	        name
	      );
	    }
	  }

	  /**
	   * Mixin helper which handles policy validation and reserved
	   * specification keys when building React classes.
	   */
	  function mixSpecIntoComponent(Constructor, spec) {
	    if (!spec) {
	      if (process.env.NODE_ENV !== 'production') {
	        var typeofSpec = typeof spec;
	        var isMixinValid = typeofSpec === 'object' && spec !== null;

	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            isMixinValid,
	            "%s: You're attempting to include a mixin that is either null " +
	              'or not an object. Check the mixins included by the component, ' +
	              'as well as any mixins they include themselves. ' +
	              'Expected object but got %s.',
	            Constructor.displayName || 'ReactClass',
	            spec === null ? null : typeofSpec
	          );
	        }
	      }

	      return;
	    }

	    _invariant(
	      typeof spec !== 'function',
	      "ReactClass: You're attempting to " +
	        'use a component class or function as a mixin. Instead, just use a ' +
	        'regular object.'
	    );
	    _invariant(
	      !isValidElement(spec),
	      "ReactClass: You're attempting to " +
	        'use a component as a mixin. Instead, just use a regular object.'
	    );

	    var proto = Constructor.prototype;
	    var autoBindPairs = proto.__reactAutoBindPairs;

	    // By handling mixins before any other properties, we ensure the same
	    // chaining order is applied to methods with DEFINE_MANY policy, whether
	    // mixins are listed before or after these methods in the spec.
	    if (spec.hasOwnProperty(MIXINS_KEY)) {
	      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	    }

	    for (var name in spec) {
	      if (!spec.hasOwnProperty(name)) {
	        continue;
	      }

	      if (name === MIXINS_KEY) {
	        // We have already handled mixins in a special case above.
	        continue;
	      }

	      var property = spec[name];
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      validateMethodOverride(isAlreadyDefined, name);

	      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	        RESERVED_SPEC_KEYS[name](Constructor, property);
	      } else {
	        // Setup methods on prototype:
	        // The following member methods should not be automatically bound:
	        // 1. Expected ReactClass methods (in the "interface").
	        // 2. Overridden methods (that were mixed in).
	        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	        var isFunction = typeof property === 'function';
	        var shouldAutoBind =
	          isFunction &&
	          !isReactClassMethod &&
	          !isAlreadyDefined &&
	          spec.autobind !== false;

	        if (shouldAutoBind) {
	          autoBindPairs.push(name, property);
	          proto[name] = property;
	        } else {
	          if (isAlreadyDefined) {
	            var specPolicy = ReactClassInterface[name];

	            // These cases should already be caught by validateMethodOverride.
	            _invariant(
	              isReactClassMethod &&
	                (specPolicy === 'DEFINE_MANY_MERGED' ||
	                  specPolicy === 'DEFINE_MANY'),
	              'ReactClass: Unexpected spec policy %s for key %s ' +
	                'when mixing in component specs.',
	              specPolicy,
	              name
	            );

	            // For methods which are defined more than once, call the existing
	            // methods before calling the new property, merging if appropriate.
	            if (specPolicy === 'DEFINE_MANY_MERGED') {
	              proto[name] = createMergedResultFunction(proto[name], property);
	            } else if (specPolicy === 'DEFINE_MANY') {
	              proto[name] = createChainedFunction(proto[name], property);
	            }
	          } else {
	            proto[name] = property;
	            if (process.env.NODE_ENV !== 'production') {
	              // Add verbose displayName to the function, which helps when looking
	              // at profiling tools.
	              if (typeof property === 'function' && spec.displayName) {
	                proto[name].displayName = spec.displayName + '_' + name;
	              }
	            }
	          }
	        }
	      }
	    }
	  }

	  function mixStaticSpecIntoComponent(Constructor, statics) {
	    if (!statics) {
	      return;
	    }

	    for (var name in statics) {
	      var property = statics[name];
	      if (!statics.hasOwnProperty(name)) {
	        continue;
	      }

	      var isReserved = name in RESERVED_SPEC_KEYS;
	      _invariant(
	        !isReserved,
	        'ReactClass: You are attempting to define a reserved ' +
	          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	          'as an instance property instead; it will still be accessible on the ' +
	          'constructor.',
	        name
	      );

	      var isAlreadyDefined = name in Constructor;
	      if (isAlreadyDefined) {
	        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
	          ? ReactClassStaticInterface[name]
	          : null;

	        _invariant(
	          specPolicy === 'DEFINE_MANY_MERGED',
	          'ReactClass: You are attempting to define ' +
	            '`%s` on your component more than once. This conflict may be ' +
	            'due to a mixin.',
	          name
	        );

	        Constructor[name] = createMergedResultFunction(Constructor[name], property);

	        return;
	      }

	      Constructor[name] = property;
	    }
	  }

	  /**
	   * Merge two objects, but throw if both contain the same key.
	   *
	   * @param {object} one The first object, which is mutated.
	   * @param {object} two The second object
	   * @return {object} one after it has been mutated to contain everything in two.
	   */
	  function mergeIntoWithNoDuplicateKeys(one, two) {
	    _invariant(
	      one && two && typeof one === 'object' && typeof two === 'object',
	      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
	    );

	    for (var key in two) {
	      if (two.hasOwnProperty(key)) {
	        _invariant(
	          one[key] === undefined,
	          'mergeIntoWithNoDuplicateKeys(): ' +
	            'Tried to merge two objects with the same key: `%s`. This conflict ' +
	            'may be due to a mixin; in particular, this may be caused by two ' +
	            'getInitialState() or getDefaultProps() methods returning objects ' +
	            'with clashing keys.',
	          key
	        );
	        one[key] = two[key];
	      }
	    }
	    return one;
	  }

	  /**
	   * Creates a function that invokes two functions and merges their return values.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createMergedResultFunction(one, two) {
	    return function mergedResult() {
	      var a = one.apply(this, arguments);
	      var b = two.apply(this, arguments);
	      if (a == null) {
	        return b;
	      } else if (b == null) {
	        return a;
	      }
	      var c = {};
	      mergeIntoWithNoDuplicateKeys(c, a);
	      mergeIntoWithNoDuplicateKeys(c, b);
	      return c;
	    };
	  }

	  /**
	   * Creates a function that invokes two functions and ignores their return vales.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createChainedFunction(one, two) {
	    return function chainedFunction() {
	      one.apply(this, arguments);
	      two.apply(this, arguments);
	    };
	  }

	  /**
	   * Binds a method to the component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   * @param {function} method Method to be bound.
	   * @return {function} The bound method.
	   */
	  function bindAutoBindMethod(component, method) {
	    var boundMethod = method.bind(component);
	    if (process.env.NODE_ENV !== 'production') {
	      boundMethod.__reactBoundContext = component;
	      boundMethod.__reactBoundMethod = method;
	      boundMethod.__reactBoundArguments = null;
	      var componentName = component.constructor.displayName;
	      var _bind = boundMethod.bind;
	      boundMethod.bind = function(newThis) {
	        for (
	          var _len = arguments.length,
	            args = Array(_len > 1 ? _len - 1 : 0),
	            _key = 1;
	          _key < _len;
	          _key++
	        ) {
	          args[_key - 1] = arguments[_key];
	        }

	        // User is trying to bind() an autobound method; we effectively will
	        // ignore the value of "this" that the user is trying to use, so
	        // let's warn.
	        if (newThis !== component && newThis !== null) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): React component methods may only be bound to the ' +
	                'component instance. See %s',
	              componentName
	            );
	          }
	        } else if (!args.length) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): You are binding a component method to the component. ' +
	                'React does this for you automatically in a high-performance ' +
	                'way, so you can safely remove this call. See %s',
	              componentName
	            );
	          }
	          return boundMethod;
	        }
	        var reboundMethod = _bind.apply(boundMethod, arguments);
	        reboundMethod.__reactBoundContext = component;
	        reboundMethod.__reactBoundMethod = method;
	        reboundMethod.__reactBoundArguments = args;
	        return reboundMethod;
	      };
	    }
	    return boundMethod;
	  }

	  /**
	   * Binds all auto-bound methods in a component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   */
	  function bindAutoBindMethods(component) {
	    var pairs = component.__reactAutoBindPairs;
	    for (var i = 0; i < pairs.length; i += 2) {
	      var autoBindKey = pairs[i];
	      var method = pairs[i + 1];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }

	  var IsMountedPreMixin = {
	    componentDidMount: function() {
	      this.__isMounted = true;
	    }
	  };

	  var IsMountedPostMixin = {
	    componentWillUnmount: function() {
	      this.__isMounted = false;
	    }
	  };

	  /**
	   * Add more to the ReactClass base class. These are all legacy features and
	   * therefore not already part of the modern ReactComponent.
	   */
	  var ReactClassMixin = {
	    /**
	     * TODO: This will be deprecated because state should always keep a consistent
	     * type signature and the only use case for this, is to avoid that.
	     */
	    replaceState: function(newState, callback) {
	      this.updater.enqueueReplaceState(this, newState, callback);
	    },

	    /**
	     * Checks whether or not this composite component is mounted.
	     * @return {boolean} True if mounted, false otherwise.
	     * @protected
	     * @final
	     */
	    isMounted: function() {
	      if (process.env.NODE_ENV !== 'production') {
	        warning(
	          this.__didWarnIsMounted,
	          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
	            'subscriptions and pending requests in componentWillUnmount to ' +
	            'prevent memory leaks.',
	          (this.constructor && this.constructor.displayName) ||
	            this.name ||
	            'Component'
	        );
	        this.__didWarnIsMounted = true;
	      }
	      return !!this.__isMounted;
	    }
	  };

	  var ReactClassComponent = function() {};
	  _assign(
	    ReactClassComponent.prototype,
	    ReactComponent.prototype,
	    ReactClassMixin
	  );

	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  function createClass(spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function(props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if (process.env.NODE_ENV !== 'production') {
	        warning(
	          this instanceof Constructor,
	          'Something is calling a React component directly. Use a factory or ' +
	            'JSX instead. See: https://fb.me/react-legacyfactory'
	        );
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (
	          initialState === undefined &&
	          this.getInitialState._isMockFunction
	        ) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      _invariant(
	        typeof initialState === 'object' && !Array.isArray(initialState),
	        '%s.getInitialState(): must return an object or null',
	        Constructor.displayName || 'ReactCompositeComponent'
	      );

	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
	    mixSpecIntoComponent(Constructor, spec);
	    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    _invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    );

	    if (process.env.NODE_ENV !== 'production') {
	      warning(
	        !Constructor.prototype.componentShouldUpdate,
	        '%s has a method called ' +
	          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	          'The name is phrased as a question because the function is ' +
	          'expected to return a value.',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.componentWillRecieveProps,
	        '%s has a method called ' +
	          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.UNSAFE_componentWillRecieveProps,
	        '%s has a method called UNSAFE_componentWillRecieveProps(). ' +
	          'Did you mean UNSAFE_componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  }

	  return createClass;
	}

	module.exports = factory;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	'use strict';

	var _prodInvariant = __webpack_require__(85);

	var ReactElement = __webpack_require__(95);

	var invariant = __webpack_require__(91);

	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
	  return children;
	}

	module.exports = onlyChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(117)


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.decorator = exports.connect = exports.StateContainer = exports.Container = undefined;

	var _Container = __webpack_require__(118);

	Object.defineProperty(exports, 'Container', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Container).default;
	  }
	});

	var _StateContainer = __webpack_require__(154);

	Object.defineProperty(exports, 'StateContainer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_StateContainer).default;
	  }
	});

	var _Hoc = __webpack_require__(155);

	var _Hoc2 = _interopRequireDefault(_Hoc);

	var _connect = __webpack_require__(156);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var connect = exports.connect = (0, _connect2.default)(_Hoc2.default);
	var decorator = exports.decorator = (0, _connect.decoratorFactory)(_Hoc2.default);
	//# sourceMappingURL=index.js.map

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(81);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(119);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _cerebral = __webpack_require__(121);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Container = function (_React$Component) {
	  _inherits(Container, _React$Component);

	  function Container() {
	    _classCallCheck(this, Container);

	    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
	  }

	  _createClass(Container, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      var controller = this.props.controller;

	      if (!controller) {
	        (0, _cerebral.throwError)('You are not passing controller to Container');
	      }

	      return { controller: controller };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);

	  return Container;
	}(_react2.default.Component);

	Container.propTypes = {
	  controller: _propTypes2.default.object.isRequired,
	  children: _propTypes2.default.node.isRequired
	};
	Container.childContextTypes = {
	  controller: _propTypes2.default.object.isRequired
	};

	exports.default = Container;
	//# sourceMappingURL=Container.js.map

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(109)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(120)();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(88);
	var invariant = __webpack_require__(91);
	var ReactPropTypesSecret = __webpack_require__(110);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(122)


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.throwError = exports.createDummyController = exports.View = exports.parallel = exports.sequence = exports.Compute = exports.Provider = exports.CerebralError = exports.ProviderClass = exports.ControllerClass = exports.ModuleClass = undefined;

	var _Module = __webpack_require__(123);

	Object.defineProperty(exports, 'ModuleClass', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Module).default;
	  }
	});

	var _Controller = __webpack_require__(140);

	Object.defineProperty(exports, 'ControllerClass', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Controller).default;
	  }
	});

	var _Provider = __webpack_require__(145);

	Object.defineProperty(exports, 'ProviderClass', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Provider).default;
	  }
	});
	exports.BaseController = BaseController;
	exports.Controller = Controller;
	exports.UniversalController = UniversalController;
	exports.Module = Module;

	var _CerebralError = __webpack_require__(149);

	Object.defineProperty(exports, 'CerebralError', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CerebralError).default;
	  }
	});
	Object.defineProperty(exports, 'Provider', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Provider).default;
	  }
	});

	var _Compute = __webpack_require__(139);

	Object.defineProperty(exports, 'Compute', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Compute).default;
	  }
	});

	var _functionTree = __webpack_require__(126);

	Object.defineProperty(exports, 'sequence', {
	  enumerable: true,
	  get: function get() {
	    return _functionTree.sequence;
	  }
	});
	Object.defineProperty(exports, 'parallel', {
	  enumerable: true,
	  get: function get() {
	    return _functionTree.parallel;
	  }
	});

	var _View = __webpack_require__(151);

	Object.defineProperty(exports, 'View', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_View).default;
	  }
	});

	var _utils = __webpack_require__(124);

	Object.defineProperty(exports, 'createDummyController', {
	  enumerable: true,
	  get: function get() {
	    return _utils.createDummyController;
	  }
	});
	Object.defineProperty(exports, 'throwError', {
	  enumerable: true,
	  get: function get() {
	    return _utils.throwError;
	  }
	});

	var _BaseController = __webpack_require__(142);

	var _BaseController2 = _interopRequireDefault(_BaseController);

	var _Controller2 = _interopRequireDefault(_Controller);

	var _UniversalController = __webpack_require__(153);

	var _UniversalController2 = _interopRequireDefault(_UniversalController);

	var _Module2 = _interopRequireDefault(_Module);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function BaseController(rootModule, options) {
	  return new _BaseController2.default(rootModule, options);
	}

	function Controller(rootModule, options) {
	  return new _Controller2.default(rootModule, options);
	}

	function UniversalController(rootModule, options) {
	  return new _UniversalController2.default(rootModule, options);
	}

	function Module(definition) {
	  return new _Module2.default(definition);
	}
	//# sourceMappingURL=index.js.map

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(124);

	var _functionTree = __webpack_require__(126);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Module = function () {
	  function Module(moduleDescription) {
	    _classCallCheck(this, Module);

	    this.moduleDescription = moduleDescription;
	  }

	  _createClass(Module, [{
	    key: 'create',
	    value: function create(controller, path) {
	      var stringPath = path.join('.');
	      var moduleStub = {
	        controller: controller,
	        path: stringPath,
	        name: path.slice().pop()
	      };

	      var module = typeof this.moduleDescription === 'function' ? this.moduleDescription(moduleStub) : Object.assign({}, this.moduleDescription);

	      /* Convert arrays to actually runable signals */
	      module.signals = Object.keys(module.signals || {}).reduce(function (currentSignals, signalKey) {
	        var signal = module.signals[signalKey];
	        if (!(signal && (Array.isArray(signal) || typeof signal === 'function' || signal instanceof _functionTree.Primitive))) {
	          (0, _utils.throwError)('Signal with name "' + signalKey + '" is not correctly defined. Please check that the signal is either a sequence, an array or a function.');
	        }
	        currentSignals[signalKey] = {
	          signal: signal,
	          run: function run(payload) {
	            controller.runSignal(path.concat(signalKey).join('.'), signal, payload);
	          }
	        };

	        return currentSignals;
	      }, {});

	      /* Instantiate submodules */
	      module.modules = Object.keys(module.modules || {}).reduce(function (registered, moduleKey) {
	        if (!module.modules[moduleKey].create) {
	          throw new Error('You are not using the Module factory on module "' + moduleKey + '"');
	        }

	        registered[moduleKey] = module.modules[moduleKey].create(controller, path.concat(moduleKey));

	        return registered;
	      }, {});

	      return module;
	    }
	  }]);

	  return Module;
	}();

	exports.default = Module;
	//# sourceMappingURL=Module.js.map

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.noop = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.getChangedProps = getChangedProps;
	exports.cleanPath = cleanPath;
	exports.isObject = isObject;
	exports.isComplexObject = isComplexObject;
	exports.isSerializable = isSerializable;
	exports.ensurePath = ensurePath;
	exports.throwError = throwError;
	exports.isDeveloping = isDeveloping;
	exports.delay = delay;
	exports.forceSerializable = forceSerializable;
	exports.getProviders = getProviders;
	exports.dependencyMatch = dependencyMatch;
	exports.getWithPath = getWithPath;
	exports.ensureStrictPath = ensureStrictPath;
	exports.createResolver = createResolver;
	exports.createDummyController = createDummyController;
	exports.addCerebralStateKey = addCerebralStateKey;
	exports.getStateTreeProp = getStateTreeProp;
	exports.getModule = getModule;
	exports.extractModuleProp = extractModuleProp;

	var _tags = __webpack_require__(125);

	var _Compute = __webpack_require__(139);

	function getChangedProps() {
	  var propsA = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var propsB = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  var propsAKeys = Object.keys(propsA);
	  var propsBKeys = Object.keys(propsB);
	  var changedProps = [];

	  for (var i = 0; i < propsAKeys.length; i++) {
	    if (propsA[propsAKeys[i]] !== propsB[propsAKeys[i]]) {
	      changedProps.push({ path: [propsAKeys[i]] });
	    }
	  }

	  for (var _i = 0; _i < propsBKeys.length; _i++) {
	    if (propsA[propsBKeys[_i]] !== propsB[propsBKeys[_i]]) {
	      changedProps.push({ path: [propsBKeys[_i]] });
	    }
	  }

	  return changedProps;
	}

	function cleanPath(path) {
	  return typeof path === 'string' ? path.replace(/\.\*\*|\.\*/, '') : path;
	}

	function isObject(obj) {
	  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null && !Array.isArray(obj);
	}

	function isComplexObject(obj) {
	  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null;
	}

	function isSerializable(value) {
	  var additionalTypes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	  var validType = additionalTypes.reduce(function (currentValid, type) {
	    if (currentValid || value instanceof type) {
	      return true;
	    }

	    return currentValid;
	  }, false);

	  if (value !== undefined && (validType || isObject(value) && Object.prototype.toString.call(value) === '[object Object]' && (value.constructor === Object || Object.getPrototypeOf(value) === null) || typeof value === 'number' || typeof value === 'string' || typeof value === 'boolean' || value === null || Array.isArray(value))) {
	    return true;
	  }
	  return false;
	}

	function ensurePath() {
	  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	  if (Array.isArray(path)) {
	    return path;
	  } else if (typeof path === 'string') {
	    return path.split('.');
	  }

	  return [];
	}

	function throwError(message) {
	  throw new Error('Cerebral - ' + message);
	}

	function isDeveloping() {
	  return process.env.NODE_ENV !== 'production';
	}

	function delay(func, wait) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var context = this;
	    var later = function later() {
	      func.apply(context, args);
	    };

	    setTimeout(later, wait);
	  };
	}

	function forceSerializable(value) {
	  if (value && !isSerializable(value)) {
	    var name = value.constructor.name;

	    try {
	      Object.defineProperty(value, 'toJSON', {
	        value: function value() {
	          return '[' + name + ']';
	        }
	      });
	    } catch (e) {}
	  }

	  return value;
	}

	function getProviders(module) {
	  return Object.assign(module.providers || {}, Object.keys(module.modules || {}).reduce(function (nestedProviders, moduleKey) {
	    return Object.assign(nestedProviders, getProviders(module.modules[moduleKey]));
	  }, {}));
	}

	function extractAllChildMatches(children) {
	  return Object.keys(children).reduce(function (matches, key) {
	    if (children[key].children) {
	      return matches.concat(children[key]).concat(extractAllChildMatches(children[key].children));
	    }

	    return matches.concat(children[key]);
	  }, []);
	}

	function dependencyMatch(changes, dependencyMap) {
	  var currentMatches = [];

	  for (var changeIndex = 0; changeIndex < changes.length; changeIndex++) {
	    var currentDependencyMapLevel = dependencyMap;
	    for (var pathKeyIndex = 0; pathKeyIndex < changes[changeIndex].path.length; pathKeyIndex++) {
	      if (!currentDependencyMapLevel) {
	        break;
	      }

	      if (currentDependencyMapLevel['**']) {
	        currentMatches.push(currentDependencyMapLevel['**']);
	      }

	      if (pathKeyIndex === changes[changeIndex].path.length - 1) {
	        var dependency = currentDependencyMapLevel[changes[changeIndex].path[pathKeyIndex]];
	        if (dependency) {
	          currentMatches.push(dependency);

	          if (dependency.children) {
	            if (changes[changeIndex].forceChildPathUpdates) {
	              currentMatches = currentMatches.concat(extractAllChildMatches(dependency.children));
	            } else {
	              if (dependency.children['**']) {
	                currentMatches.push(dependency.children['**']);
	              }

	              if (dependency.children['*']) {
	                currentMatches.push(dependency.children['*']);
	              }
	            }
	          }
	        }

	        if (currentDependencyMapLevel['*']) {
	          currentMatches.push(currentDependencyMapLevel['*']);
	        }
	      }

	      if (!currentDependencyMapLevel[changes[changeIndex].path[pathKeyIndex]]) {
	        currentDependencyMapLevel = null;
	        break;
	      }

	      currentDependencyMapLevel = currentDependencyMapLevel[changes[changeIndex].path[pathKeyIndex]].children;
	    }
	  }

	  return currentMatches;
	}

	function getWithPath(obj) {
	  return function (path) {
	    return path.split('.').reduce(function (currentValue, key, index) {
	      if (index > 0 && currentValue === undefined) {
	        throwError('You are extracting with path "' + path + '", but it is not valid for this object');
	      }

	      return currentValue[key];
	    }, obj);
	  };
	}

	function ensureStrictPath(path, value) {
	  if (isComplexObject(value) && path.indexOf('*') === -1) {
	    return path + '.**';
	  }

	  return path;
	}

	function createResolver(getters) {
	  return {
	    isTag: function isTag(arg) {
	      if (!(arg instanceof _tags.Tag)) {
	        return false;
	      }

	      for (var _len2 = arguments.length, types = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        types[_key2 - 1] = arguments[_key2];
	      }

	      if (types.length) {
	        return types.reduce(function (isType, type) {
	          return isType || type === arg.type;
	        }, false);
	      }

	      return true;
	    },
	    isCompute: function isCompute(arg) {
	      return arg instanceof _Compute.Compute;
	    },
	    value: function value(arg, overrideProps) {
	      if (arg instanceof _tags.Tag || arg instanceof _Compute.Compute) {
	        return arg.getValue(overrideProps ? Object.assign({}, getters, { props: overrideProps }) : getters);
	      }

	      return arg;
	    },
	    path: function path(arg) {
	      if (arg instanceof _tags.Tag) {
	        return arg.getPath(getters);
	      }

	      throwError('You are extracting a path from an argument that is not a Tag');
	    }
	  };
	}

	var noop = exports.noop = function noop() {};

	/*
	  When testing and running on the server there is no need to
	  initialize all of Cerebral. So by not passing a controller
	  to this Container it will create a dummy version which inserts
	  state and mocks any signals when connecting the component.
	*/
	function createDummyController() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var signals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  var getState = function getState(path) {
	    return ensurePath(path).reduce(function (currentState, pathKey) {
	      return currentState ? currentState[pathKey] : undefined;
	    }, state);
	  };
	  return {
	    options: {},
	    on: function on() {},

	    getState: getState,
	    model: {
	      get: getState
	    },
	    getSignal: function getSignal(signal) {
	      return signals[signal] || function () {};
	    },

	    componentDependencyStore: {
	      addEntity: noop,
	      removeEntity: noop
	    }
	  };
	}

	function addCerebralStateKey(object) {
	  if (isComplexObject(object)) {
	    for (var key in object) {
	      addCerebralStateKey(object[key]);
	    }

	    !object.__CerebralState && Object.defineProperty(object, '__CerebralState', {
	      value: true
	    });
	  }

	  return object;
	}

	function getStateTreeProp() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  return Object.keys(props).reduce(function (hit, key) {
	    if (!hit && isComplexObject(props[key]) && '__CerebralState' in props[key]) {
	      return key;
	    }

	    return hit;
	  }, null);
	}

	function getModule(path, modules) {
	  var pathArray = Array.isArray(path) ? path : ensurePath(path);
	  return pathArray.reduce(function (currentModule, key) {
	    if (!currentModule.modules[key]) {
	      throwError('The path "' + pathArray.join('.') + '" is invalid, can not find module. Does the path "' + pathArray.splice(0, path.length - 1).join('.') + '" exist?');
	    }
	    return currentModule.modules[key];
	  }, modules);
	}

	function extractModuleProp(module, prop, transform) {
	  var extracted = Object.keys(module.modules || {}).reduce(function (additionalExtracted, subModuleKey) {
	    additionalExtracted[subModuleKey] = extractModuleProp(module.modules[subModuleKey], prop, transform);

	    return additionalExtracted;
	  }, {});

	  if (module[prop]) {
	    return transform ? transform(Object.assign(extracted, module[prop]), module) : Object.assign(extracted, module[prop]);
	  }

	  return extracted;
	}
	//# sourceMappingURL=utils.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.props = exports.module = exports.state = exports.signals = exports.signal = exports.string = exports.Tag = exports.ResolveValue = exports.resolveObject = exports.extractValueWithPath = exports.createTemplateTag = undefined;

	var _functionTree = __webpack_require__(126);

	Object.defineProperty(exports, 'createTemplateTag', {
	  enumerable: true,
	  get: function get() {
	    return _functionTree.createTemplateTag;
	  }
	});
	Object.defineProperty(exports, 'extractValueWithPath', {
	  enumerable: true,
	  get: function get() {
	    return _functionTree.extractValueWithPath;
	  }
	});
	Object.defineProperty(exports, 'resolveObject', {
	  enumerable: true,
	  get: function get() {
	    return _functionTree.resolveObject;
	  }
	});
	Object.defineProperty(exports, 'ResolveValue', {
	  enumerable: true,
	  get: function get() {
	    return _functionTree.ResolveValue;
	  }
	});
	Object.defineProperty(exports, 'Tag', {
	  enumerable: true,
	  get: function get() {
	    return _functionTree.Tag;
	  }
	});
	var string = exports.string = (0, _functionTree.createTemplateTag)('string', function (path) {
	  return path;
	});

	var signal = exports.signal = (0, _functionTree.createTemplateTag)('signal', function (path, context) {
	  // View
	  if (typeof context.signal === 'function') {
	    return context.signal(path);
	  }

	  return context.controller.getSignal(path);
	});

	var signals = exports.signals = (0, _functionTree.createTemplateTag)('signals', function (path, context) {
	  // View
	  if (typeof context.signal === 'function') {
	    return context.signals(path);
	  }

	  return context.controller.getSignals(path);
	});

	var state = exports.state = (0, _functionTree.createTemplateTag)('state', function (path, context) {
	  // Computed tracking and View
	  if (typeof context.state === 'function') {
	    return context.state(path);
	  }

	  return context.state.get(path);
	});

	var _module = (0, _functionTree.createTemplateTag)('module', function (path, context) {
	  return context.module.get(path);
	});

	exports.module = _module;
	var props = exports.props = (0, _functionTree.createTemplateTag)('props', function (path, context) {
	  // Computed tracking and View
	  if (typeof context.props === 'function') {
	    return context.props(path);
	  }

	  return (0, _functionTree.extractValueWithPath)(context.props, path);
	});
	//# sourceMappingURL=index.js.map

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Tag = exports.createTemplateTag = exports.ResolveValue = exports.resolveObject = exports.extractValueWithPath = exports.Provider = exports.default = exports.FunctionTree = exports.Path = exports.createStaticTree = exports.Primitive = exports.FunctionTreeError = exports.FunctionTreeExecutionError = undefined;

	var _errors = __webpack_require__(127);

	Object.defineProperty(exports, 'FunctionTreeExecutionError', {
	  enumerable: true,
	  get: function get() {
	    return _errors.FunctionTreeExecutionError;
	  }
	});
	Object.defineProperty(exports, 'FunctionTreeError', {
	  enumerable: true,
	  get: function get() {
	    return _errors.FunctionTreeError;
	  }
	});

	var _primitives = __webpack_require__(128);

	Object.defineProperty(exports, 'Primitive', {
	  enumerable: true,
	  get: function get() {
	    return _primitives.Primitive;
	  }
	});

	var _staticTree = __webpack_require__(129);

	Object.defineProperty(exports, 'createStaticTree', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_staticTree).default;
	  }
	});

	var _Path = __webpack_require__(130);

	Object.defineProperty(exports, 'Path', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Path).default;
	  }
	});
	exports.sequence = sequence;
	exports.parallel = parallel;

	var _FunctionTree = __webpack_require__(131);

	Object.defineProperty(exports, 'FunctionTree', {
	  enumerable: true,
	  get: function get() {
	    return _FunctionTree.FunctionTree;
	  }
	});
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _FunctionTree.FunctionTree;
	  }
	});

	var _Provider = __webpack_require__(135);

	Object.defineProperty(exports, 'Provider', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Provider).default;
	  }
	});

	var _ResolveValue = __webpack_require__(138);

	Object.defineProperty(exports, 'extractValueWithPath', {
	  enumerable: true,
	  get: function get() {
	    return _ResolveValue.extractValueWithPath;
	  }
	});
	Object.defineProperty(exports, 'resolveObject', {
	  enumerable: true,
	  get: function get() {
	    return _ResolveValue.resolveObject;
	  }
	});
	Object.defineProperty(exports, 'ResolveValue', {
	  enumerable: true,
	  get: function get() {
	    return _ResolveValue.ResolveValue;
	  }
	});

	var _Tag = __webpack_require__(137);

	Object.defineProperty(exports, 'createTemplateTag', {
	  enumerable: true,
	  get: function get() {
	    return _Tag.createTemplateTag;
	  }
	});
	Object.defineProperty(exports, 'Tag', {
	  enumerable: true,
	  get: function get() {
	    return _Tag.Tag;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function sequence() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  return new (Function.prototype.bind.apply(_primitives.Sequence, [null].concat(args)))();
	}

	function parallel() {
	  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    args[_key2] = arguments[_key2];
	  }

	  return new (Function.prototype.bind.apply(_primitives.Parallel, [null].concat(args)))();
	}
	//# sourceMappingURL=index.js.map

/***/ }),
/* 127 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _extendableBuiltin(cls) {
	  function ExtendableBuiltin() {
	    var instance = Reflect.construct(cls, Array.from(arguments));
	    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
	    return instance;
	  }

	  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
	    constructor: {
	      value: cls,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });

	  if (Object.setPrototypeOf) {
	    Object.setPrototypeOf(ExtendableBuiltin, cls);
	  } else {
	    ExtendableBuiltin.__proto__ = cls;
	  }

	  return ExtendableBuiltin;
	}

	var FunctionTreeError = exports.FunctionTreeError = function (_extendableBuiltin2) {
	  _inherits(FunctionTreeError, _extendableBuiltin2);

	  function FunctionTreeError(error) {
	    _classCallCheck(this, FunctionTreeError);

	    var _this = _possibleConstructorReturn(this, (FunctionTreeError.__proto__ || Object.getPrototypeOf(FunctionTreeError)).call(this, error.message || error));

	    _this.name = 'FunctionTreeError';
	    return _this;
	  }

	  _createClass(FunctionTreeError, [{
	    key: 'toJSON',
	    value: function toJSON() {
	      return {
	        name: this.name,
	        message: this.message,
	        stack: this.stack
	      };
	    }
	  }]);

	  return FunctionTreeError;
	}(_extendableBuiltin(Error));

	var FunctionTreeExecutionError = exports.FunctionTreeExecutionError = function (_FunctionTreeError) {
	  _inherits(FunctionTreeExecutionError, _FunctionTreeError);

	  function FunctionTreeExecutionError(execution, funcDetails, payload, error) {
	    _classCallCheck(this, FunctionTreeExecutionError);

	    var _this2 = _possibleConstructorReturn(this, (FunctionTreeExecutionError.__proto__ || Object.getPrototypeOf(FunctionTreeExecutionError)).call(this, error));

	    _this2.name = 'FunctionTreeExecutionError';
	    _this2.execution = execution;
	    _this2.funcDetails = funcDetails;
	    _this2.payload = payload;
	    return _this2;
	  }

	  _createClass(FunctionTreeExecutionError, [{
	    key: 'toJSON',
	    value: function toJSON() {
	      return {
	        name: this.name,
	        message: this.message,
	        execution: {
	          name: this.execution.name
	        },
	        funcDetails: {
	          name: this.funcDetails.name,
	          functionIndex: this.funcDetails.functionIndex
	        },
	        payload: this.payload,
	        stack: this.stack
	      };
	    }
	  }]);

	  return FunctionTreeExecutionError;
	}(FunctionTreeError);
	//# sourceMappingURL=errors.js.map

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Parallel = exports.Sequence = exports.Primitive = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _errors = __webpack_require__(127);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Primitive = exports.Primitive = function () {
	  function Primitive(type) {
	    _classCallCheck(this, Primitive);

	    this.type = type;

	    if (typeof (arguments.length <= 1 ? undefined : arguments[1]) === 'string') {
	      this.name = arguments.length <= 1 ? undefined : arguments[1];
	      this.items = arguments.length <= 2 ? undefined : arguments[2];
	    } else {
	      this.name = null;
	      this.items = arguments.length <= 1 ? undefined : arguments[1];
	    }

	    if (!Array.isArray(this.items)) {
	      throw new _errors.FunctionTreeError('You have not passed an array of functions to ' + type);
	    }
	  }

	  _createClass(Primitive, [{
	    key: 'toJSON',
	    value: function toJSON() {
	      return {
	        name: this.name,
	        _functionTreePrimitive: true,
	        type: this.type,
	        items: this.items
	      };
	    }
	  }]);

	  return Primitive;
	}();

	var Sequence = exports.Sequence = function (_Primitive) {
	  _inherits(Sequence, _Primitive);

	  function Sequence() {
	    var _ref;

	    _classCallCheck(this, Sequence);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_ref = Sequence.__proto__ || Object.getPrototypeOf(Sequence)).call.apply(_ref, [this, 'sequence'].concat(args)));
	  }

	  return Sequence;
	}(Primitive);

	var Parallel = exports.Parallel = function (_Primitive2) {
	  _inherits(Parallel, _Primitive2);

	  function Parallel() {
	    var _ref2;

	    _classCallCheck(this, Parallel);

	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    return _possibleConstructorReturn(this, (_ref2 = Parallel.__proto__ || Object.getPrototypeOf(Parallel)).call.apply(_ref2, [this, 'parallel'].concat(args)));
	  }

	  return Parallel;
	}(Primitive);
	//# sourceMappingURL=primitives.js.map

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _primitives = __webpack_require__(128);

	var _errors = __webpack_require__(127);

	function getFunctionName(fn) {
	  if (fn.displayName) return fn.displayName;
	  if (fn.name) return fn.name;

	  var ret = fn.toString();

	  var startNameMatch = void 0;
	  if (ret.indexOf('async function') === 0) startNameMatch = 'async function ';else if (ret.indexOf('function') === 0) startNameMatch = 'function ';

	  ret = ret.substr(startNameMatch ? startNameMatch.length : 0);
	  ret = ret.substr(0, ret.indexOf('('));

	  return ret;
	}

	function isPaths(item) {
	  return item && !Array.isArray(item) && (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && !(item instanceof _primitives.Primitive);
	}

	function stringifyInvalidTreeItem(items, invalidItem) {
	  return '\n[\n' + items.map(function (item) {
	    if (item === invalidItem) {
	      return '  ' + (typeof invalidItem === 'undefined' ? 'undefined' : _typeof(invalidItem)) + ', <-- PROBLEM';
	    }
	    if (typeof item === 'function') {
	      return '  ' + getFunctionName(item) + ',';
	    }
	    if (item instanceof _primitives.Primitive) {
	      return '  [ ' + item.type.toUpperCase() + ' ],';
	    }
	    if (Array.isArray(item)) {
	      return '  [ SEQUENCE ],';
	    }

	    return '  { PATHS },';
	  }).join('\n') + '\n]\n  ';
	}

	function analyze(name, functions, item, isParallel) {
	  if (item instanceof _primitives.Primitive) {
	    var instance = item.toJSON();

	    return Object.assign(instance, {
	      items: analyze(name, functions, instance.items, item instanceof _primitives.Parallel).items
	    });
	  } else if (Array.isArray(item)) {
	    return new _primitives.Sequence(item.reduce(function (allItems, subItem, index) {
	      if (subItem instanceof _primitives.Primitive) {
	        var _instance = subItem.toJSON();

	        return allItems.concat(Object.assign(_instance, {
	          items: analyze(name, functions, _instance.items, subItem instanceof _primitives.Parallel).items
	        }));
	      } else if (typeof subItem === 'function') {
	        var funcDetails = {
	          name: subItem.displayName || getFunctionName(subItem),
	          functionIndex: functions.push(subItem) - 1,
	          function: subItem
	        };
	        var nextItem = item[index + 1];

	        if (isPaths(nextItem)) {
	          funcDetails.outputs = {};
	          Object.keys(nextItem).forEach(function (key) {
	            if (subItem.outputs && !~subItem.outputs.indexOf(key)) {
	              throw new _errors.FunctionTreeError('Outputs object doesn\'t match list of possible outputs defined for function.');
	            }
	            funcDetails.outputs[key] = analyze(name, functions, typeof nextItem[key] === 'function' ? [nextItem[key]] : nextItem[key]);
	          });
	        }

	        return allItems.concat(funcDetails);
	      } else if (isPaths(subItem)) {
	        return allItems;
	      } else if (Array.isArray(subItem)) {
	        var items = analyze(name, functions, subItem);

	        return allItems.concat(items);
	      } else {
	        throw new _errors.FunctionTreeError('Unexpected entry in "' + name + '". ' + stringifyInvalidTreeItem(item, subItem));
	      }
	    }, [])).toJSON();
	  } else {
	    throw new _errors.FunctionTreeError('Unexpected entry in tree');
	  }
	}

	exports.default = function (name, tree) {
	  var functions = [];

	  return analyze(name, functions, typeof tree === 'function' ? [tree] : tree);
	};
	//# sourceMappingURL=staticTree.js.map

/***/ }),
/* 130 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Path = function () {
	  function Path(path, payload) {
	    _classCallCheck(this, Path);

	    this.path = path;
	    this.payload = payload;
	  }

	  _createClass(Path, [{
	    key: "toJSON",
	    value: function toJSON() {
	      return {
	        path: this.path,
	        payload: this.payload,
	        _functionTreePath: true
	      };
	    }
	  }]);

	  return Path;
	}();

	exports.default = Path;
	//# sourceMappingURL=Path.js.map

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FunctionTree = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _eventemitter = __webpack_require__(132);

	var _eventemitter2 = _interopRequireDefault(_eventemitter);

	var _executeTree = __webpack_require__(133);

	var _executeTree2 = _interopRequireDefault(_executeTree);

	var _staticTree = __webpack_require__(129);

	var _staticTree2 = _interopRequireDefault(_staticTree);

	var _Resolve = __webpack_require__(134);

	var _Resolve2 = _interopRequireDefault(_Resolve);

	var _Path = __webpack_require__(130);

	var _Path2 = _interopRequireDefault(_Path);

	var _Provider = __webpack_require__(135);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _primitives = __webpack_require__(128);

	var _errors = __webpack_require__(127);

	var _utils = __webpack_require__(136);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	  Need to create a unique ID for each execution to identify it
	  in debugger
	*/
	function createUniqueId() {
	  return Date.now() + '_' + Math.floor(Math.random() * 10000);
	}

	/*
	  Validate any returned value from a function. Has
	  to be nothing or an object
	*/
	function isValidResult(result) {
	  return !result || (typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object' && !Array.isArray(result);
	}

	/*
	  Create an error with execution details
	*/
	function createErrorObject(error, execution, functionDetails, payload) {
	  var errorToReturn = error;

	  errorToReturn.execution = execution;
	  errorToReturn.functionDetails = functionDetails;
	  errorToReturn.payload = Object.assign({}, payload, {
	    _execution: {
	      id: execution.id,
	      functionIndex: functionDetails.functionIndex
	    },
	    error: error.toJSON ? error.toJSON() : {
	      name: error.name,
	      message: error.message,
	      stack: error.stack
	    }
	  });

	  return errorToReturn;
	}

	var FunctionTreeExecution = function () {
	  function FunctionTreeExecution(name, staticTree, functionTree, errorCallback) {
	    _classCallCheck(this, FunctionTreeExecution);

	    this.id = createUniqueId();
	    this.name = name || staticTree.name || this.id;
	    this.staticTree = staticTree;
	    this.functionTree = functionTree;
	    this.datetime = Date.now();
	    this.errorCallback = errorCallback;
	    this.hasThrown = false;
	    this.isAsync = false;

	    this.runFunction = this.runFunction.bind(this);
	  }

	  /*
	    Creates the context for the current function to be run,
	    emits events and handles its returned value. Also handles
	    the returned value being a promise
	  */


	  _createClass(FunctionTreeExecution, [{
	    key: 'runFunction',
	    value: function runFunction(funcDetails, payload, prevPayload, next) {
	      if (this.hasThrown) {
	        return;
	      }

	      var context = this.createContext(funcDetails, payload, prevPayload);
	      var functionTree = this.functionTree;
	      var errorCallback = this.errorCallback;
	      var execution = this;
	      var result = void 0;

	      functionTree.emit('functionStart', execution, funcDetails, payload);
	      try {
	        result = funcDetails.function(context);
	      } catch (error) {
	        this.hasThrown = true;

	        return errorCallback(createErrorObject(error, execution, funcDetails, payload), execution, funcDetails, payload);
	      }

	      /*
	        If result is a promise we want to emit an event and wait for it to resolve to
	        move on
	      */
	      if ((0, _utils.isPromise)(result)) {
	        functionTree.emit('asyncFunction', execution, funcDetails, payload, result);
	        this.isAsync = true;
	        result.then(function (result) {
	          if (result instanceof _Path2.default) {
	            functionTree.emit('functionEnd', execution, funcDetails, payload, result);
	            next(result.toJSON());
	          } else if (funcDetails.outputs) {
	            functionTree.emit('functionEnd', execution, funcDetails, payload, result);
	            throw new _errors.FunctionTreeExecutionError(execution, funcDetails, payload, new Error('The result ' + JSON.stringify(result) + ' from function ' + funcDetails.name + ' needs to be a path of either ' + Object.keys(funcDetails.outputs)));
	          } else if (isValidResult(result)) {
	            functionTree.emit('functionEnd', execution, funcDetails, payload, result);
	            next({
	              payload: result
	            });
	          } else {
	            functionTree.emit('functionEnd', execution, funcDetails, payload, result);
	            throw new _errors.FunctionTreeExecutionError(execution, funcDetails, payload, new Error('The result ' + JSON.stringify(result) + ' from function ' + funcDetails.name + ' is not a valid result'));
	          }
	        }).catch(function (result) {
	          if (execution.hasThrown) {
	            return;
	          }

	          if (result instanceof Error) {
	            execution.hasThrown = true;
	            errorCallback(createErrorObject(result, execution, funcDetails, payload), execution, funcDetails, payload);
	          } else if (result instanceof _Path2.default) {
	            functionTree.emit('functionEnd', execution, funcDetails, payload, result);
	            next(result.toJSON());
	          } else if (funcDetails.outputs) {
	            var error = new _errors.FunctionTreeExecutionError(execution, funcDetails, payload, new Error('The result ' + JSON.stringify(result) + ' from function ' + funcDetails.name + ' needs to be a path of either ' + Object.keys(funcDetails.outputs)));

	            execution.hasThrown = true;
	            errorCallback(createErrorObject(error, execution, funcDetails, payload), execution, funcDetails, payload);
	          } else if (isValidResult(result)) {
	            functionTree.emit('functionEnd', execution, funcDetails, payload, result);
	            next({
	              payload: result
	            });
	          } else {
	            var _error = new _errors.FunctionTreeExecutionError(execution, funcDetails, payload, new Error('The result ' + JSON.stringify(result) + ' from function ' + funcDetails.name + ' is not a valid result'));
	            execution.hasThrown = true;

	            errorCallback(createErrorObject(_error, execution, funcDetails, payload), execution, funcDetails, payload);
	          }
	        });
	      } else if (result instanceof _Path2.default) {
	        functionTree.emit('functionEnd', execution, funcDetails, payload, result);
	        next(result.toJSON());
	      } else if (funcDetails.outputs) {
	        var error = new _errors.FunctionTreeExecutionError(execution, funcDetails, payload, new Error('The result ' + JSON.stringify(result) + ' from function ' + funcDetails.name + ' needs to be a path of either ' + Object.keys(funcDetails.outputs)));

	        this.hasThrown = true;
	        errorCallback(createErrorObject(error, execution, funcDetails, payload), execution, funcDetails, payload);
	      } else if (isValidResult(result)) {
	        functionTree.emit('functionEnd', execution, funcDetails, payload, result);
	        next({
	          payload: result
	        });
	      } else {
	        var _error2 = new _errors.FunctionTreeExecutionError(execution, funcDetails, payload, new Error('The result ' + JSON.stringify(result) + ' from function ' + funcDetails.name + ' is not a valid result'));
	        this.hasThrown = true;

	        errorCallback(createErrorObject(_error2, execution, funcDetails, payload), execution, funcDetails, payload);
	      }
	    }

	    /*
	      Creates the context for the next running function
	    */

	  }, {
	    key: 'createContext',
	    value: function createContext(functionDetails, payload, prevPayload) {
	      var contextProviders = this.functionTree.contextProviders;
	      var newContext = {
	        execution: this,
	        props: payload || {},
	        functionDetails: functionDetails,
	        path: functionDetails.outputs ? Object.keys(functionDetails.outputs).reduce(function (output, outputPath) {
	          output[outputPath] = function (payload) {
	            return new _Path2.default(outputPath, payload);
	          };

	          return output;
	        }, {}) : null
	      };

	      var debuggerProvider = contextProviders.debugger && contextProviders.debugger.get(newContext, functionDetails, payload, prevPayload);

	      var context = Object.keys(contextProviders).reduce(function (currentContext, name) {
	        var provider = contextProviders[name];

	        if (provider instanceof _Provider2.default) {
	          currentContext[name] = provider.get(currentContext, functionDetails, payload, prevPayload);
	        } else {
	          currentContext[name] = provider;
	        }

	        return currentContext;
	      }, newContext);

	      if (debuggerProvider) {
	        return Object.keys(context).reduce(function (currentContext, name) {
	          var provider = contextProviders[name];

	          if (provider && provider instanceof _Provider2.default && provider.wrap) {
	            currentContext[name] = typeof provider.wrap === 'function' ? provider.wrap(context, functionDetails) : provider.getWrapped(name, context);
	          } else {
	            currentContext[name] = context[name];
	          }

	          return currentContext;
	        }, {});
	      }

	      return context;
	    }
	  }]);

	  return FunctionTreeExecution;
	}();

	var FunctionTree = exports.FunctionTree = function (_EventEmitter) {
	  _inherits(FunctionTree, _EventEmitter);

	  function FunctionTree() {
	    var contextProviders = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, FunctionTree);

	    var _this = _possibleConstructorReturn(this, (FunctionTree.__proto__ || Object.getPrototypeOf(FunctionTree)).call(this));

	    _this.cachedTrees = [];
	    _this.cachedStaticTrees = [];

	    if ((typeof contextProviders === 'undefined' ? 'undefined' : _typeof(contextProviders)) !== 'object' || contextProviders === null || Array.isArray(contextProviders)) {
	      throw new Error('You have to pass an object of context providers to FunctionTree');
	    }

	    var providerKeys = Object.keys(contextProviders);

	    if (providerKeys.indexOf('props') >= 0 || providerKeys.indexOf('path') >= 0 || providerKeys.indexOf('resolve') >= 0 || providerKeys.indexOf('execution') >= 0 || providerKeys.indexOf('debugger') >= 0) {
	      throw new Error('You are trying to add a provider with protected key. "props", "path", "resolve", "execution" and "debugger" are protected');
	    }

	    _this.contextProviders = Object.assign({}, contextProviders, {
	      resolve: _Resolve2.default
	    });

	    _this.run = _this.run.bind(_this);
	    return _this;
	  }

	  /*
	    Analyses the tree to identify paths and its validity. This analysis
	    is cached. Then the method creates an execution for the tree to run.
	  */


	  _createClass(FunctionTree, [{
	    key: 'run',
	    value: function run() {
	      var _this2 = this;

	      var name = void 0;
	      var tree = void 0;
	      var payload = void 0;
	      var cb = void 0;
	      var staticTree = void 0;
	      var args = [].slice.call(arguments);
	      args.forEach(function (arg) {
	        if (typeof arg === 'string') {
	          name = arg;
	        } else if (Array.isArray(arg) || arg instanceof _primitives.Primitive) {
	          tree = arg;
	        } else if (!tree && typeof arg === 'function') {
	          tree = arg;
	        } else if (typeof arg === 'function') {
	          cb = arg;
	        } else {
	          payload = arg;
	        }
	      });

	      if (!tree) {
	        throw new Error('function-tree - You did not pass in a function tree');
	      }

	      var withResolveAndReject = function withResolveAndReject(resolve, reject) {
	        var treeIdx = _this2.cachedTrees.indexOf(tree);
	        if (treeIdx === -1) {
	          staticTree = (0, _staticTree2.default)(name, tree);
	          _this2.cachedTrees.push(tree);
	          _this2.cachedStaticTrees.push(staticTree);
	        } else {
	          staticTree = _this2.cachedStaticTrees[treeIdx];
	        }
	        var execution = new FunctionTreeExecution(name, staticTree, _this2, function (error, execution, funcDetails, finalPayload) {
	          _this2.emit('error', error, execution, funcDetails, finalPayload);
	          reject(error);
	        });

	        _this2.emit('start', execution, payload);
	        (0, _executeTree2.default)(execution, payload, function (funcDetails, path, currentPayload) {
	          _this2.emit('pathStart', path, execution, funcDetails, currentPayload);
	        }, function (currentPayload) {
	          _this2.emit('pathEnd', execution, currentPayload);
	        }, function (currentPayload, functionsToResolve) {
	          _this2.emit('parallelStart', execution, currentPayload, functionsToResolve);
	        }, function (currentPayload, functionsResolved) {
	          _this2.emit('parallelProgress', execution, currentPayload, functionsResolved);
	        }, function (currentPayload, functionsResolved) {
	          _this2.emit('parallelEnd', execution, currentPayload, functionsResolved);
	        }, function (finalPayload) {
	          _this2.emit('end', execution, finalPayload);
	          resolve === reject ? resolve(null, finalPayload) : resolve(finalPayload);
	        });
	      };

	      if (cb) {
	        withResolveAndReject(cb, cb);
	      } else {
	        return new Promise(withResolveAndReject);
	      }
	    }
	  }]);

	  return FunctionTree;
	}(_eventemitter2.default);
	//# sourceMappingURL=FunctionTree.js.map

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var has = Object.prototype.hasOwnProperty
	  , prefix = '~';

	/**
	 * Constructor to create a storage for our `EE` objects.
	 * An `Events` instance is a plain object whose properties are event names.
	 *
	 * @constructor
	 * @api private
	 */
	function Events() {}

	//
	// We try to not inherit from `Object.prototype`. In some engines creating an
	// instance in this way is faster than calling `Object.create(null)` directly.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// character to make sure that the built-in object properties are not
	// overridden or used as an attack vector.
	//
	if (Object.create) {
	  Events.prototype = Object.create(null);

	  //
	  // This hack is needed because the `__proto__` property is still inherited in
	  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
	  //
	  if (!new Events().__proto__) prefix = false;
	}

	/**
	 * Representation of a single event listener.
	 *
	 * @param {Function} fn The listener function.
	 * @param {Mixed} context The context to invoke the listener with.
	 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
	 * @constructor
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Minimal `EventEmitter` interface that is molded against the Node.js
	 * `EventEmitter` interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() {
	  this._events = new Events();
	  this._eventsCount = 0;
	}

	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @api public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var names = []
	    , events
	    , name;

	  if (this._eventsCount === 0) return names;

	  for (name in (events = this._events)) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }

	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }

	  return names;
	};

	/**
	 * Return the listeners registered for a given event.
	 *
	 * @param {String|Symbol} event The event name.
	 * @param {Boolean} exists Only check if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event
	    , available = this._events[evt];

	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];

	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }

	  return ee;
	};

	/**
	 * Calls each of the listeners registered for a given event.
	 *
	 * @param {String|Symbol} event The event name.
	 * @returns {Boolean} `true` if the event had listeners, else `false`.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return false;

	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;

	  if (listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }

	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Add a listener for a given event.
	 *
	 * @param {String|Symbol} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {Mixed} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this)
	    , evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
	  else if (!this._events[evt].fn) this._events[evt].push(listener);
	  else this._events[evt] = [this._events[evt], listener];

	  return this;
	};

	/**
	 * Add a one-time listener for a given event.
	 *
	 * @param {String|Symbol} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {Mixed} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true)
	    , evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
	  else if (!this._events[evt].fn) this._events[evt].push(listener);
	  else this._events[evt] = [this._events[evt], listener];

	  return this;
	};

	/**
	 * Remove the listeners of a given event.
	 *
	 * @param {String|Symbol} event The event name.
	 * @param {Function} fn Only remove the listeners that match this function.
	 * @param {Mixed} context Only remove the listeners that have this context.
	 * @param {Boolean} once Only remove one-time listeners.
	 * @returns {EventEmitter} `this`.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return this;
	  if (!fn) {
	    if (--this._eventsCount === 0) this._events = new Events();
	    else delete this._events[evt];
	    return this;
	  }

	  var listeners = this._events[evt];

	  if (listeners.fn) {
	    if (
	         listeners.fn === fn
	      && (!once || listeners.once)
	      && (!context || listeners.context === context)
	    ) {
	      if (--this._eventsCount === 0) this._events = new Events();
	      else delete this._events[evt];
	    }
	  } else {
	    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
	      if (
	           listeners[i].fn !== fn
	        || (once && !listeners[i].once)
	        || (context && listeners[i].context !== context)
	      ) {
	        events.push(listeners[i]);
	      }
	    }

	    //
	    // Reset the array, or remove it completely if we have no more listeners.
	    //
	    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
	    else if (--this._eventsCount === 0) this._events = new Events();
	    else delete this._events[evt];
	  }

	  return this;
	};

	/**
	 * Remove all listeners, or those of the specified event.
	 *
	 * @param {String|Symbol} [event] The event name.
	 * @returns {EventEmitter} `this`.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  var evt;

	  if (event) {
	    evt = prefix ? prefix + event : event;
	    if (this._events[evt]) {
	      if (--this._eventsCount === 0) this._events = new Events();
	      else delete this._events[evt];
	    }
	  } else {
	    this._events = new Events();
	    this._eventsCount = 0;
	  }

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};

	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;

	//
	// Allow `EventEmitter` to be imported as module namespace.
	//
	EventEmitter.EventEmitter = EventEmitter;

	//
	// Expose the module.
	//
	if (true) {
	  module.exports = EventEmitter;
	}


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = executeTree;

	var _errors = __webpack_require__(127);

	function isPrimitive(primitive, type) {
	  return primitive._functionTreePrimitive && primitive.type === type;
	}

	/*
	  Runs through the tree providing a "next" callback to process next step
	  of execution
	*/
	function executeTree(execution, initialPayload, branchStart, branchEnd, parallelStart, parallelProgress, parallelEnd, end) {
	  function runBranch(branch, index, payload, prevPayload, nextBranch) {
	    function runNextItem(result) {
	      runBranch(branch, index + 1, result, payload, nextBranch);
	    }

	    function processFunctionOutput(funcDetails, outputResult) {
	      return function (result) {
	        var newPayload = Object.assign({}, payload, result ? result.payload : {});

	        if (result && funcDetails.outputs) {
	          var outputs = Object.keys(funcDetails.outputs);

	          if (~outputs.indexOf(result.path)) {
	            branchStart(funcDetails, result.path, newPayload);
	            runBranch(funcDetails.outputs[result.path].items, 0, newPayload, payload, outputResult);
	          } else {
	            throw new _errors.FunctionTreeExecutionError(execution, funcDetails, payload, 'function ' + funcDetails.name + ' must use one of its possible outputs: ' + outputs.join(', ') + '.');
	          }
	        } else {
	          outputResult(newPayload);
	        }
	      };
	    }

	    var currentItem = branch[index];

	    if (!currentItem) {
	      if (branch !== execution.staticTree) {
	        branchEnd(payload);
	      }
	      nextBranch(payload);
	    } else if (isPrimitive(currentItem, 'sequence')) {
	      runBranch(currentItem.items, 0, payload, prevPayload, runNextItem);
	    } else if (isPrimitive(currentItem, 'parallel')) {
	      var itemLength = currentItem.items.length;
	      var payloads = [];

	      parallelStart(payload, itemLength);
	      currentItem.items.forEach(function (func, index) {
	        if (func.function) {
	          execution.runFunction(func, payload, prevPayload, processFunctionOutput(func, function (payload) {
	            payloads.push(payload);
	            if (payloads.length === itemLength) {
	              parallelEnd(payload, itemLength);
	              runNextItem(Object.assign.apply(Object, [{}].concat(payloads)));
	            } else {
	              parallelProgress(payload, itemLength - payloads.length);
	            }
	          }));
	        } else {
	          runBranch(func.items, 0, payload, prevPayload, function (payload) {
	            payloads.push(payload);
	            if (payloads.length === itemLength) {
	              parallelEnd(payload, itemLength);
	              runNextItem(Object.assign.apply(Object, [{}].concat(payloads)));
	            } else {
	              parallelProgress(payload, itemLength - payloads.length);
	            }
	          });
	        }

	        return payloads;
	      });
	    } else {
	      execution.runFunction(currentItem, payload, prevPayload, processFunctionOutput(currentItem, runNextItem));
	    }
	  }

	  return runBranch([execution.staticTree], 0, initialPayload, null, end);
	}
	//# sourceMappingURL=executeTree.js.map

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Provider = __webpack_require__(135);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _Tag = __webpack_require__(137);

	var _ResolveValue = __webpack_require__(138);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = new _Provider2.default({
	  isTag: function isTag(arg) {
	    if (!(arg instanceof _Tag.Tag)) {
	      return false;
	    }

	    for (var _len = arguments.length, types = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      types[_key - 1] = arguments[_key];
	    }

	    if (types.length) {
	      return types.reduce(function (isType, type) {
	        return isType || type === arg.type;
	      }, false);
	    }

	    return true;
	  },
	  isResolveValue: function isResolveValue(arg) {
	    return arg instanceof _ResolveValue.ResolveValue;
	  },
	  value: function value(arg) {
	    var overrides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    if (arg instanceof _ResolveValue.ResolveValue) {
	      return arg.getValue(overrides ? Object.assign({}, this.context, overrides) : this.context);
	    }

	    return arg;
	  },
	  path: function path(arg) {
	    if (arg instanceof _Tag.Tag) {
	      return arg.getPath(this.context);
	    }

	    throw new Error('You are extracting a path from an argument that is not a Tag.');
	  }
	}, {
	  wrap: false
	});
	//# sourceMappingURL=Resolve.js.map

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(136);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Provider = function () {
	  function Provider(definition) {
	    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	        _ref$wrap = _ref.wrap,
	        wrap = _ref$wrap === undefined ? true : _ref$wrap;

	    _classCallCheck(this, Provider);

	    this.verifyDefinition(definition);
	    this.wrap = wrap;

	    this.ProviderConstructor = function (context) {
	      this.context = context;
	    };
	    this.ProviderConstructor.prototype = definition;

	    this.WrappedProviderConstructor = function (name, context) {
	      this.context = context;
	      this.providerName = name;
	    };
	    this.WrappedProviderConstructor.prototype = Object.keys(definition).reduce(function (wrappedProvider, key) {
	      var originalFunc = definition[key];

	      wrappedProvider[key] = function () {
	        var _this = this;

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        var providerResult = originalFunc.apply(this, args);

	        if ((0, _utils.isPromise)(providerResult)) {
	          return providerResult.then(function (result) {
	            _this.context.debugger.send({
	              method: _this.providerName + '.' + key,
	              args: args,
	              isPromise: true,
	              isRejected: false,
	              returnValue: result
	            });

	            return result;
	          }).catch(function (error) {
	            _this.context.debugger.send({
	              method: _this.providerName + '.' + key,
	              args: args,
	              isPromise: true,
	              isRejected: true
	            });

	            throw error;
	          });
	        }

	        this.context.debugger.send({
	          method: this.providerName + '.' + key,
	          args: args,
	          returnValue: providerResult
	        });

	        return providerResult;
	      };

	      return wrappedProvider;
	    }, {});
	  }

	  _createClass(Provider, [{
	    key: 'verifyDefinition',
	    value: function verifyDefinition(definition) {
	      if ((typeof definition === 'undefined' ? 'undefined' : _typeof(definition)) !== 'object' || definition === null) {
	        throw new Error('The definition passed as Provider is not valid');
	      }

	      Object.keys(definition).forEach(function (key) {
	        if (typeof definition[key] !== 'function') {
	          throw new Error('The property ' + key + ' passed to Provider is not a method');
	        }
	      });
	    }
	  }, {
	    key: 'get',
	    value: function get(context) {
	      return new this.ProviderConstructor(context);
	    }
	  }, {
	    key: 'getWrapped',
	    value: function getWrapped(name, context) {
	      return new this.WrappedProviderConstructor(name, context);
	    }
	  }]);

	  return Provider;
	}();

	exports.default = Provider;
	//# sourceMappingURL=Provider.js.map

/***/ }),
/* 136 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isPromise = isPromise;
	/*
	   If it walks like a duck and quacks like a duck...
	 */
	function isPromise(result) {
	  return result && (result instanceof Promise || typeof result.then === 'function' && typeof result.catch === 'function');
	}
	//# sourceMappingURL=utils.js.map

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Tag = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.createTemplateTag = createTemplateTag;

	var _ResolveValue2 = __webpack_require__(138);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/*
	  Creates tag for targetting things with a path in Cerebral
	*/
	var Tag = exports.Tag = function (_ResolveValue) {
	  _inherits(Tag, _ResolveValue);

	  function Tag(type, getter, strings, values) {
	    _classCallCheck(this, Tag);

	    var _this = _possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).call(this));

	    _this.type = type;
	    _this.getter = getter;
	    _this.strings = strings;
	    _this.values = values;
	    return _this;
	  }
	  /*
	    Returns all tags, also nested to identify nested state dependencies
	    in components
	  */


	  _createClass(Tag, [{
	    key: 'getTags',
	    value: function getTags() {
	      return [this].concat(this.getNestedTags());
	    }
	    /*
	      Gets the path of the tag, where nested tags are evaluated
	    */

	  }, {
	    key: 'getPath',
	    value: function getPath(context) {
	      var _this2 = this;

	      return this.strings.reduce(function (currentPath, string, idx) {
	        var valueTemplate = _this2.values[idx];

	        if (valueTemplate instanceof _ResolveValue2.ResolveValue) {
	          return currentPath + string + valueTemplate.getValue(context);
	        }

	        return currentPath + string + (valueTemplate !== undefined ? valueTemplate : '');
	      }, '');
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue(context) {
	      return this.getter(this.getPath(context), context);
	    }
	    /*
	      Grab nested tags from the tags current path
	    */

	  }, {
	    key: 'getNestedTags',
	    value: function getNestedTags() {
	      var _this3 = this;

	      return this.strings.reduce(function (currentPaths, string, idx) {
	        var valueTemplate = _this3.values[idx];

	        if (valueTemplate instanceof Tag) {
	          return currentPaths.concat(valueTemplate);
	        }

	        return currentPaths;
	      }, []);
	    }
	    /*
	      Produces a string representation of the tag
	    */

	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this.type + '`' + this.pathToString() + '`';
	    }
	    /*
	      Produces a string representation of the path
	    */

	  }, {
	    key: 'pathToString',
	    value: function pathToString() {
	      var _this4 = this;

	      return this.strings.reduce(function (currentPath, string, idx) {
	        var valueTemplate = _this4.values[idx];

	        if (valueTemplate instanceof Tag) {
	          return currentPath + string + '${' + valueTemplate.toString() + '}';
	        }

	        return currentPath + string + (valueTemplate !== undefined ? valueTemplate : '');
	      }, '');
	    }
	  }]);

	  return Tag;
	}(_ResolveValue2.ResolveValue);

	function createTemplateTag(tag, getValue) {
	  return function (strings) {
	    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      values[_key - 1] = arguments[_key];
	    }

	    if (values.some(function (value) {
	      return value === undefined;
	    })) {
	      throw new Error('One of the values passed inside the tag interpolated to undefined. Please check.');
	    }
	    return new Tag(tag, getValue, strings, values);
	  };
	}
	//# sourceMappingURL=Tag.js.map

/***/ }),
/* 138 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.extractValueWithPath = extractValueWithPath;

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ResolveValue = exports.ResolveValue = function () {
	  function ResolveValue() {
	    _classCallCheck(this, ResolveValue);
	  }

	  _createClass(ResolveValue, [{
	    key: 'getValue',

	    // "getValue" should receive a context to extract the value
	    value: function getValue() {
	      throw new Error('Extending ResolveValue requires you to add a "getValue" method');
	    }
	  }]);

	  return ResolveValue;
	}();

	function extractValueWithPath(obj, path) {
	  return path.split('.').reduce(function (currentValue, key, index) {
	    if (index > 0 && currentValue === undefined) {
	      throw new Error('Cannot extract value at path "' + path + '" ("' + key + '" is not defined).');
	    }

	    return currentValue[key];
	  }, obj);
	}

	var ResolveObject = function (_ResolveValue) {
	  _inherits(ResolveObject, _ResolveValue);

	  function ResolveObject(cvalue) {
	    _classCallCheck(this, ResolveObject);

	    var _this = _possibleConstructorReturn(this, (ResolveObject.__proto__ || Object.getPrototypeOf(ResolveObject)).call(this));

	    _this.cvalue = cvalue;
	    return _this;
	  }

	  _createClass(ResolveObject, [{
	    key: 'getValue',
	    value: function getValue(_ref) {
	      var resolve = _ref.resolve;

	      var cvalue = this.cvalue;
	      if (resolve.isResolveValue(cvalue)) {
	        return resolve.value(cvalue);
	      }

	      return Object.keys(cvalue).reduce(function (convertedObject, key) {
	        convertedObject[key] = resolve.value(cvalue[key]);

	        return convertedObject;
	      }, {});
	    }
	  }]);

	  return ResolveObject;
	}(ResolveValue);

	var resolveObject = exports.resolveObject = function resolveObject(obj) {
	  return new ResolveObject(obj);
	};
	//# sourceMappingURL=ResolveValue.js.map

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Compute = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = compute;

	var _tags = __webpack_require__(125);

	var _functionTree = __webpack_require__(126);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Compute = exports.Compute = function (_ResolveValue) {
	  _inherits(Compute, _ResolveValue);

	  function Compute(args) {
	    _classCallCheck(this, Compute);

	    var _this = _possibleConstructorReturn(this, (Compute.__proto__ || Object.getPrototypeOf(Compute)).call(this));

	    _this.args = args;
	    _this.value = null;
	    return _this;
	  }

	  _createClass(Compute, [{
	    key: 'getValue',
	    value: function getValue(context) {
	      var computeGet = function computeGet(tag) {
	        return tag.getValue(context);
	      };
	      var result = this.args.reduce(function (details, arg, index) {
	        if (arg instanceof _tags.Tag) {
	          var path = arg.getPath(context);

	          if (path.indexOf('.*') > 0) {
	            var value = arg.getValue(context);

	            details.results.push(value ? Object.keys(value) : []);
	          } else {
	            details.results.push(arg.getValue(context));
	          }

	          return details;
	        } else if (arg instanceof _functionTree.ResolveValue) {
	          details.results.push(arg.getValue(context));

	          return details;
	        } else if (typeof arg === 'function') {
	          details.results.push(arg.apply(undefined, _toConsumableArray(details.results.slice(details.previousFuncIndex, index)).concat([computeGet])));
	          details.previousFuncIndex = index;

	          return details;
	        }

	        details.results.push(arg);

	        return details;
	      }, {
	        results: [],
	        previousFuncIndex: 0
	      });

	      return result.results[result.results.length - 1];
	    }
	  }]);

	  return Compute;
	}(_functionTree.ResolveValue);

	function compute() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  return new Compute(args);
	}
	//# sourceMappingURL=Compute.js.map

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _DependencyStore = __webpack_require__(141);

	var _DependencyStore2 = _interopRequireDefault(_DependencyStore);

	var _BaseController2 = __webpack_require__(142);

	var _BaseController3 = _interopRequireDefault(_BaseController2);

	var _Model = __webpack_require__(147);

	var _Model2 = _interopRequireDefault(_Model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/*
	  The controller is where everything is attached. The devtools
	  is attached directly. Also a top level module is created.
	  The controller creates the function tree that will run all signals,
	  based on top level providers and providers defined in modules
	*/
	var Controller = function (_BaseController) {
	  _inherits(Controller, _BaseController);

	  function Controller(rootModule, options) {
	    _classCallCheck(this, Controller);

	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this, rootModule, Object.assign({
	      Model: _Model2.default
	    }, options)));

	    _this.componentDependencyStore = new _DependencyStore2.default();
	    _this.flush = _this.flush.bind(_this);

	    _this.on('asyncFunction', function (execution, funcDetails) {
	      if (!funcDetails.isParallel) {
	        _this.flush();
	      }
	    });
	    _this.on('parallelStart', function () {
	      return _this.flush();
	    });
	    _this.on('parallelProgress', function (execution, currentPayload, functionsResolving) {
	      if (functionsResolving === 1) {
	        _this.flush();
	      }
	    });
	    _this.on('end', function () {
	      return _this.flush();
	    });
	    return _this;
	  }
	  /*
	    Whenever components needs to be updated, this method
	    can be called
	  */


	  _createClass(Controller, [{
	    key: 'flush',
	    value: function flush(force) {
	      var changes = this.model.flush();

	      if (!force && !Object.keys(changes).length) {
	        return;
	      }

	      this.updateComponents(changes, force);
	      this.emit('flush', changes, Boolean(force));
	    }
	  }, {
	    key: 'updateComponents',
	    value: function updateComponents(changes, force) {
	      var _this2 = this;

	      var componentsToRender = [];

	      if (force) {
	        componentsToRender = this.componentDependencyStore.getAllUniqueEntities();
	      } else {
	        componentsToRender = this.componentDependencyStore.getUniqueEntities(changes);
	      }

	      var start = Date.now();
	      componentsToRender.forEach(function (component) {
	        if (_this2.devtools) {
	          _this2.devtools.updateComponentsMap(component);
	        }
	        component.onUpdate(changes, force);
	      });
	      var end = Date.now();

	      if (this.devtools && componentsToRender.length) {
	        this.devtools.sendComponentsMap(componentsToRender, changes, start, end);
	      }
	    }
	  }]);

	  return Controller;
	}(_BaseController3.default);

	exports.default = Controller;
	//# sourceMappingURL=Controller.js.map

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(124);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DependencyStore = function () {
	  function DependencyStore() {
	    _classCallCheck(this, DependencyStore);

	    this.map = {};
	  }
	  /*
	    Adds the entity to all the depending paths
	  */


	  _createClass(DependencyStore, [{
	    key: 'addEntity',
	    value: function addEntity(entity, depsMap) {
	      var _this = this;

	      var _loop = function _loop(depsMapKey) {
	        var path = depsMapKey.split('.');

	        path.reduce(function (currentMapLevel, key, index) {
	          if (!currentMapLevel[key]) {
	            currentMapLevel[key] = {};
	          }

	          if (index < path.length - 1) {
	            currentMapLevel[key].children = currentMapLevel[key].children || {};

	            return currentMapLevel[key].children;
	          }

	          currentMapLevel[key].entities = currentMapLevel[key].entities ? currentMapLevel[key].entities.concat(entity) : [entity];

	          return currentMapLevel;
	        }, _this.map);
	      };

	      for (var depsMapKey in depsMap) {
	        _loop(depsMapKey);
	      }
	    }
	    /*
	      Removes the entity from all depending paths
	    */

	  }, {
	    key: 'removeEntity',
	    value: function removeEntity(entity, depsMap) {
	      var _this2 = this;

	      var _loop2 = function _loop2(depsMapKey) {
	        var path = depsMapKey.split('.');
	        path.reduce(function (currentMapLevel, key, index) {
	          if (index === path.length - 1) {
	            currentMapLevel[key].entities.splice(currentMapLevel[key].entities.indexOf(entity), 1);

	            if (!currentMapLevel[key].entities.length) {
	              delete currentMapLevel[key].entities;
	            }
	          }

	          return currentMapLevel[key].children;
	        }, _this2.map);
	      };

	      for (var depsMapKey in depsMap) {
	        _loop2(depsMapKey);
	      }
	    }
	    /*
	      Updates entity based on changed dependencies
	    */

	  }, {
	    key: 'updateEntity',
	    value: function updateEntity(entity, prevDepsMap, nextDepsMap) {
	      var toRemove = Object.keys(prevDepsMap).reduce(function (removeDepsMap, prevDepsMapKey) {
	        if (!nextDepsMap[prevDepsMapKey]) {
	          removeDepsMap[prevDepsMapKey] = true;
	        }

	        return removeDepsMap;
	      }, {});
	      var toAdd = Object.keys(nextDepsMap).reduce(function (addDepsMap, nextDepsMapKey) {
	        if (!prevDepsMap[nextDepsMapKey]) {
	          addDepsMap[nextDepsMapKey] = true;
	        }

	        return addDepsMap;
	      }, {});

	      this.removeEntity(entity, toRemove);

	      this.addEntity(entity, toAdd);
	    }
	    /*
	      As same entity can appear in multiple paths, this method returns
	      all unique entities. Used by view to render all components
	    */

	  }, {
	    key: 'getAllUniqueEntities',
	    value: function getAllUniqueEntities() {
	      var entities = [];

	      function traverseChildren(children) {
	        for (var childKey in children) {
	          if (children[childKey].entities) {
	            for (var y = 0; y < children[childKey].entities.length; y++) {
	              if (entities.indexOf(children[childKey].entities[y]) === -1) {
	                entities.push(children[childKey].entities[y]);
	              }
	            }
	          }

	          if (children[childKey].children) {
	            traverseChildren(children[childKey].children);
	          }
	        }
	      }
	      traverseChildren(this.map);

	      return entities;
	    }
	    /*
	      Returns entities based on a change map returned from
	      the model flush method.
	    */

	  }, {
	    key: 'getUniqueEntities',
	    value: function getUniqueEntities(changesMap) {
	      return (0, _utils.dependencyMatch)(changesMap, this.map).reduce(function (unique, match) {
	        return (match.entities || []).reduce(function (currentUnique, entity) {
	          if (currentUnique.indexOf(entity) === -1) {
	            return currentUnique.concat(entity);
	          }

	          return currentUnique;
	        }, unique);
	      }, []);
	    }
	  }]);

	  return DependencyStore;
	}();

	exports.default = DependencyStore;
	//# sourceMappingURL=DependencyStore.js.map

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _functionTree = __webpack_require__(126);

	var _functionTree2 = _interopRequireDefault(_functionTree);

	var _Module = __webpack_require__(123);

	var _Module2 = _interopRequireDefault(_Module);

	var _utils = __webpack_require__(124);

	var _Debugger = __webpack_require__(143);

	var _Debugger2 = _interopRequireDefault(_Debugger);

	var _Module3 = __webpack_require__(144);

	var _Module4 = _interopRequireDefault(_Module3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/*
	  The controller is where everything is attached. The devtools
	  is attached directly. Also a top level module is created.
	  The controller creates the function tree that will run all signals,
	  based on top level providers and providers defined in modules
	*/
	var BaseController = function (_FunctionTree) {
	  _inherits(BaseController, _FunctionTree);

	  function BaseController(rootModule, options) {
	    _classCallCheck(this, BaseController);

	    var _this = _possibleConstructorReturn(this, (BaseController.__proto__ || Object.getPrototypeOf(BaseController)).call(this));

	    var Model = options.Model,
	        _options$devtools = options.devtools,
	        devtools = _options$devtools === undefined ? null : _options$devtools,
	        _options$stateChanges = options.stateChanges,
	        stateChanges = _options$stateChanges === undefined ? typeof window !== 'undefined' && window.CEREBRAL_STATE : _options$stateChanges,
	        _options$throwToConso = options.throwToConsole,
	        throwToConsole = _options$throwToConso === undefined ? true : _options$throwToConso,
	        _options$preventIniti = options.preventInitialize,
	        preventInitialize = _options$preventIniti === undefined ? false : _options$preventIniti;

	    var getSignal = _this.getSignal;
	    var getSignals = _this.getSignals;

	    _this.getSignal = function () {
	      (0, _utils.throwError)('You are grabbing a signal before controller has initialized, please wait for "initialized" event');
	    };

	    _this.getSignals = function () {
	      (0, _utils.throwError)('You are grabbing a signals before controller has initialized, please wait for "initialized" event');
	    };

	    if (!(rootModule instanceof _Module2.default)) {
	      (0, _utils.throwError)('You did not pass a root module to the controller. The first argument has to be a module');
	    }

	    _this.throwToConsole = throwToConsole;

	    _this.devtools = devtools;
	    _this.module = rootModule.create(_this, []);
	    _this.model = new Model(_this);

	    if (!preventInitialize) {
	      _this.emit('initialized:model');
	    }

	    _this.contextProviders = Object.assign(_this.contextProviders, (0, _utils.getProviders)(_this.module), {
	      controller: _this,
	      state: _this.model.StateProvider(_this.devtools),
	      module: (0, _Module4.default)(_this.devtools)
	    }, _this.devtools ? {
	      debugger: (0, _Debugger2.default)(_this.devtools)
	    } : {});

	    if (stateChanges) {
	      Object.keys(stateChanges).forEach(function (statePath) {
	        _this.model.set((0, _utils.ensurePath)(statePath), stateChanges[statePath]);
	      });
	    }

	    if (_this.devtools) {
	      _this.devtools.init(_this);
	    }

	    if (!_this.devtools && (0, _utils.isDeveloping)() && typeof navigator !== 'undefined' && /Chrome/.test(navigator.userAgent)) {
	      console.warn('You are not using the Cerebral devtools. It is highly recommended to use it in combination with the debugger: https://cerebraljs.com/docs/introduction/debugger.html');
	    }

	    if ((0, _utils.isDeveloping)()) {
	      _this.on('functionStart', function (execution, functionDetails, payload) {
	        try {
	          JSON.stringify(payload);
	        } catch (e) {
	          (0, _utils.throwError)('The function ' + functionDetails.name + ' in signal ' + execution.name + ' is not given a valid payload');
	        }
	      });
	      _this.on('functionEnd', function (execution, functionDetails, payload, propsToAdd) {
	        if (devtools && devtools.preventPropsReplacement) {
	          Object.keys(propsToAdd || {}).forEach(function (key) {
	            if (key in payload) {
	              throw new Error('Cerebral Devtools - You have activated the "preventPropsReplacement" option and in signal "' + execution.name + '", before the action "' + functionDetails.name + '", the key "' + key + '" was replaced');
	            }
	          });
	        }
	      });
	    }

	    _this.getSignal = getSignal;
	    _this.getSignals = getSignals;

	    if (!preventInitialize) {
	      _this.emit('initialized');
	    }
	    return _this;
	  }
	  /*
	    Conveniance method for grabbing the model
	  */


	  _createClass(BaseController, [{
	    key: 'getModel',
	    value: function getModel() {
	      return this.model;
	    }
	    /*
	      Method called by view to grab state
	    */

	  }, {
	    key: 'getState',
	    value: function getState(path) {
	      return this.model.get((0, _utils.ensurePath)((0, _utils.cleanPath)(path)));
	    }
	    /*
	      Uses function tree to run the array and optional
	      payload passed in. The payload will be checkd
	    */

	  }, {
	    key: 'runSignal',
	    value: function runSignal(name, signal) {
	      var _this2 = this;

	      var payload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      if (this.devtools && (!(0, _utils.isObject)(payload) || !(0, _utils.isSerializable)(payload))) {
	        console.warn('You passed an invalid payload to signal "' + name + '". Only serializable payloads can be passed to a signal. The payload has been ignored. This is the object:', payload);
	        payload = {};
	      }

	      if (this.devtools) {
	        payload = Object.keys(payload).reduce(function (currentPayload, key) {
	          if (!(0, _utils.isSerializable)(payload[key], _this2.devtools.allowedTypes)) {
	            console.warn('You passed an invalid payload to signal "' + name + '", on key "' + key + '". Only serializable values like Object, Array, String, Number and Boolean can be passed in. Also these special value types:', _this2.devtools.allowedTypes);

	            return currentPayload;
	          }

	          currentPayload[key] = (0, _utils.forceSerializable)(payload[key]);

	          return currentPayload;
	        }, {});
	      }

	      this.run(name, signal, payload, function (error) {
	        if (error) {
	          var signalPath = (0, _utils.ensurePath)(error.execution.name);
	          var catchingResult = signalPath.reduce(function (details, key, index) {
	            if (details.currentModule.catch) {
	              details.catchingModule = details.currentModule;
	            }

	            details.currentModule = details.currentModule.modules[key];

	            return details;
	          }, {
	            currentModule: _this2.module,
	            catchingModule: null
	          });

	          if (catchingResult.catchingModule) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	              for (var _iterator = catchingResult.catchingModule.catch[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var _step$value = _slicedToArray(_step.value, 2),
	                    errorType = _step$value[0],
	                    signalChain = _step$value[1];

	                if (error instanceof errorType) {
	                  _this2.runSignal('catch', signalChain, error.payload);

	                  // Throw the error to console even if handling it
	                  if (_this2.throwToConsole) {
	                    setTimeout(function () {
	                      console.log('Cerebral is handling error "' + error.name + ': ' + error.message + '" thrown by signal "' + error.execution.name + '". Check debugger for more information.');
	                    });
	                  }

	                  return;
	                }
	              }
	            } catch (err) {
	              _didIteratorError = true;
	              _iteratorError = err;
	            } finally {
	              try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                  _iterator.return();
	                }
	              } finally {
	                if (_didIteratorError) {
	                  throw _iteratorError;
	                }
	              }
	            }
	          }

	          if (error.execution.isAsync) {
	            setTimeout(function () {
	              throw error;
	            });
	          } else {
	            throw error;
	          }
	        }
	      });
	    }
	    /*
	      Returns a function which binds the name/path of signal,
	      and the array. This allows view layer to just call it with
	      an optional payload and it will run
	    */

	  }, {
	    key: 'getSignal',
	    value: function getSignal(path) {
	      var pathArray = (0, _utils.ensurePath)(path);
	      var signalKey = pathArray.pop();
	      var module = pathArray.reduce(function (currentModule, key) {
	        return currentModule ? currentModule.modules[key] : undefined;
	      }, this.module);
	      var signal = module && module.signals[signalKey];

	      if (!signal) {
	        (0, _utils.throwError)('The signal on path "' + path + '" does not exist, please check path');
	      }

	      return signal && signal.run;
	    }
	  }, {
	    key: 'getSignals',
	    value: function getSignals(modulePath) {
	      var pathArray = (0, _utils.ensurePath)(modulePath);
	      var module = pathArray.reduce(function (currentModule, key) {
	        return currentModule ? currentModule.modules[key] : undefined;
	      }, this.module);

	      var signals = module && module.signals;

	      if (!signals) {
	        return undefined;
	      }

	      var callableSignals = {};
	      for (var name in signals) {
	        var signal = signals[name].run;
	        callableSignals[name] = signal;
	      }

	      return callableSignals;
	    }
	  }, {
	    key: 'addModule',
	    value: function addModule(path, module) {
	      var pathArray = (0, _utils.ensurePath)(path);
	      var moduleKey = pathArray.pop();
	      var parentModule = (0, _utils.getModule)(pathArray, this.module);
	      var newModule = module.create(this, (0, _utils.ensurePath)(path));
	      parentModule.modules[moduleKey] = newModule;

	      if (newModule.providers) {
	        Object.assign(this.contextProviders, newModule.providers);
	      }

	      this.emit('moduleAdded', path.split('.'), newModule);

	      this.flush();
	    }
	  }, {
	    key: 'removeModule',
	    value: function removeModule(path) {
	      var _this3 = this;

	      if (!path) {
	        console.warn('Controller.removeModule requires a Module Path');
	        return null;
	      }

	      var pathArray = (0, _utils.ensurePath)(path);
	      var moduleKey = pathArray.pop();
	      var parentModule = (0, _utils.getModule)(pathArray, this.module);

	      var module = parentModule.modules[moduleKey];

	      if (module.providers) {
	        Object.keys(module.providers).forEach(function (provider) {
	          delete _this3.contextProviders[provider];
	        });
	      }

	      delete parentModule.modules[moduleKey];

	      this.emit('moduleRemoved', (0, _utils.ensurePath)(path), module);

	      this.flush();
	    }
	  }]);

	  return BaseController;
	}(_functionTree2.default);

	exports.default = BaseController;
	//# sourceMappingURL=BaseController.js.map

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = DebuggerProvider;

	var _ = __webpack_require__(122);

	function DebuggerProvider(devtools) {
	  return (0, _.Provider)({
	    send: function send(debuggerData) {
	      devtools.sendExecutionData(debuggerData, this.context.execution, this.context.functionDetails, this.context.props);
	    },
	    wrapProvider: function wrapProvider(name, provider) {
	      var _this = this;

	      return Object.keys(provider).reduce(function (wrappedProvider, key) {
	        var originalFunc = provider[key];

	        wrappedProvider[key] = function () {
	          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	          }

	          _this.context.debugger.send({
	            method: name + '.' + key,
	            args: args
	          });

	          console.log(provider.context);
	          return originalFunc.apply(provider, args);
	        };

	        return wrappedProvider;
	      }, {});
	    }
	  }, {
	    wrap: false
	  });
	}
	//# sourceMappingURL=Debugger.js.map

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ModuleProviderFactory;

	var _utils = __webpack_require__(124);

	var _Provider = __webpack_require__(145);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _State = __webpack_require__(146);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function ModuleProviderFactory(devtools) {
	  return (0, _Provider2.default)(_State.methods.reduce(function (currentState, methodKey) {
	    currentState[methodKey] = function () {
	      var _context$state;

	      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	      path = (0, _utils.ensurePath)(path);
	      var signalPath = this.context.execution.name.split('.');
	      var modulePath = signalPath.splice(0, signalPath.length - 1);

	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      return (_context$state = this.context.state)[methodKey].apply(_context$state, [modulePath.concat(path)].concat(args));
	    };

	    return currentState;
	  }, {}), {
	    wrap: devtools ? function (context, functionDetails) {
	      return _State.methods.reduce(function (currentState, methodKey) {
	        if (methodKey === 'get' || methodKey === 'compute') {
	          currentState[methodKey] = function (path) {
	            path = (0, _utils.ensurePath)(path);
	            var signalPath = context.execution.name.split('.');
	            var modulePath = signalPath.splice(0, signalPath.length - 1);

	            path = modulePath.concat(path);

	            return context.state[methodKey](path);
	          };
	        } else {
	          var originFunc = context.state[methodKey];

	          currentState[methodKey] = function () {
	            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	              args[_key2] = arguments[_key2];
	            }

	            var argsCopy = args.slice();
	            var path = (0, _utils.ensurePath)(argsCopy.shift());
	            var signalPath = context.execution.name.split('.');
	            var modulePath = signalPath.splice(0, signalPath.length - 1);

	            path = modulePath.concat(path);

	            context.debugger.send({
	              datetime: Date.now(),
	              type: 'mutation',
	              color: '#333',
	              method: 'module.' + methodKey,
	              args: [path].concat(_toConsumableArray(argsCopy))
	            });

	            try {
	              originFunc.apply(context.state, [path].concat(_toConsumableArray(argsCopy)));
	            } catch (e) {
	              var signalName = context.execution.name;
	              (0, _utils.throwError)('The Signal "' + signalName + '" with action "' + functionDetails.name + '" has an error: ' + e.message);
	            }
	          };
	        }

	        return currentState;
	      }, {});
	    } : false
	  });
	}
	//# sourceMappingURL=Module.js.map

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _functionTree = __webpack_require__(126);

	exports.default = function () {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  return new (Function.prototype.bind.apply(_functionTree.Provider, [null].concat(args)))();
	};
	//# sourceMappingURL=Provider.js.map

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.methods = undefined;
	exports.default = StateProviderFactory;

	var _utils = __webpack_require__(124);

	var _Provider = __webpack_require__(145);

	var _Provider2 = _interopRequireDefault(_Provider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var methods = exports.methods = ['concat', 'get', 'increment', 'merge', 'pop', 'push', 'set', 'shift', 'splice', 'toggle', 'unset', 'unshift'];

	function StateProviderFactory(devtools) {
	  var asyncTimeout = null;

	  return (0, _Provider2.default)(methods.reduce(function (currentState, methodKey) {
	    currentState[methodKey] = function () {
	      var _this = this;

	      var model = this.context.controller.model;

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      var path = (0, _utils.ensurePath)((0, _utils.cleanPath)(args.shift()));

	      if (methodKey === 'get') {
	        return model.get(path);
	      }

	      if (this.context.controller.flush) {
	        clearTimeout(asyncTimeout);
	        asyncTimeout = setTimeout(function () {
	          return _this.context.controller.flush();
	        });
	      }

	      return model[methodKey].apply(model, [path].concat(args));
	    };

	    return currentState;
	  }, {}), {
	    wrap: devtools ? function (context, functionDetails) {
	      var asyncTimeout = null;

	      return methods.reduce(function (currentState, methodKey) {
	        if (methodKey === 'get' || methodKey === 'compute') {
	          currentState[methodKey] = function (path) {
	            return context.controller.model[methodKey]((0, _utils.ensurePath)((0, _utils.cleanPath)(path)));
	          };
	        } else {
	          var originFunc = context.controller.model[methodKey];

	          currentState[methodKey] = function () {
	            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	              args[_key2] = arguments[_key2];
	            }

	            var argsCopy = args.slice();
	            var path = (0, _utils.ensurePath)(argsCopy.shift());

	            context.debugger.send({
	              datetime: Date.now(),
	              type: 'mutation',
	              color: '#333',
	              method: methodKey,
	              args: [path].concat(_toConsumableArray(argsCopy))
	            });

	            if (context.controller.flush) {
	              clearTimeout(asyncTimeout);
	              asyncTimeout = setTimeout(function () {
	                return context.controller.flush();
	              });
	            }

	            try {
	              originFunc.apply(context.controller.model, [path].concat(_toConsumableArray(argsCopy)));
	            } catch (e) {
	              var signalName = context.execution.name;
	              (0, _utils.throwError)('The Signal "' + signalName + '" with action "' + functionDetails.name + '" has an error: ' + e.message);
	            }
	          };
	        }

	        return currentState;
	      }, {});
	    } : false
	  });
	}
	//# sourceMappingURL=State.js.map

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(124);

	var _BaseModel2 = __webpack_require__(148);

	var _BaseModel3 = _interopRequireDefault(_BaseModel2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Model = function (_BaseModel) {
	  _inherits(Model, _BaseModel);

	  function Model(controller) {
	    _classCallCheck(this, Model);

	    var _this = _possibleConstructorReturn(this, (Model.__proto__ || Object.getPrototypeOf(Model)).call(this, controller));

	    _this.controller = controller;
	    _this.devtools = controller.devtools;
	    _this.state = _this.devtools && _this.devtools.warnStateProps ? (0, _utils.addCerebralStateKey)(_this.initialState) : _this.initialState;

	    controller.on('initialized', function () {
	      _this.flush();
	    });
	    return _this;
	  }

	  _createClass(Model, [{
	    key: 'updateIn',
	    value: function updateIn(path, cb) {
	      var _this2 = this;

	      var forceChildPathUpdates = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	      if (!path.length) {
	        cb(this.state, this, 'state');

	        return;
	      }

	      path.reduce(function (currentState, key, index) {
	        if (index === path.length - 1) {
	          if (!Array.isArray(currentState) && !(0, _utils.isObject)(currentState)) {
	            (0, _utils.throwError)('The path "' + path.join('.') + '" is invalid. Path: "' + path.slice(0, path.length - 1).join('.') + '" is type of "' + (currentState === null ? 'null' : typeof currentState === 'undefined' ? 'undefined' : _typeof(currentState)) + '"');
	          }

	          var currentValue = currentState[key];

	          cb(currentState[key], currentState, key);
	          if (currentState[key] !== currentValue || (0, _utils.isComplexObject)(currentState[key]) && (0, _utils.isComplexObject)(currentValue)) {
	            _this2.changedPaths.push({
	              path: path,
	              forceChildPathUpdates: forceChildPathUpdates
	            });
	          }
	        } else if (!currentState[key]) {
	          currentState[key] = {};
	        }

	        return currentState[key];
	      }, this.state);
	    }
	  }, {
	    key: 'verifyValue',
	    value: function verifyValue(value, path) {
	      if (this.devtools && !(0, _utils.isSerializable)(value, this.devtools.allowedTypes)) {
	        (0, _utils.throwError)('You are passing a non serializable value into the state tree on path "' + path.join('.') + '"');
	      }
	      if (this.devtools) {
	        (0, _utils.forceSerializable)(value);
	      }
	      if (this.devtools && this.devtools.warnStateProps) {
	        (0, _utils.addCerebralStateKey)(value);
	      }
	    }
	  }, {
	    key: 'verifyValues',
	    value: function verifyValues(values, path) {
	      var _this3 = this;

	      if (this.devtools) {
	        values.forEach(function (value) {
	          _this3.verifyValue(value, path);
	        });
	      }
	    }
	  }, {
	    key: 'emitMutationEvent',
	    value: function emitMutationEvent(method, path) {
	      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	        args[_key - 2] = arguments[_key];
	      }

	      this.controller.emit('mutation', {
	        method: method,
	        path: path,
	        args: args
	      });
	    }
	  }, {
	    key: 'get',
	    value: function get() {
	      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	      return path.reduce(function (currentState, key) {
	        return currentState ? currentState[key] : undefined;
	      }, this.state);
	    }
	  }, {
	    key: 'set',
	    value: function set(path, value) {
	      this.verifyValue(value, path);
	      this.updateIn(path, function (_, parent, key) {
	        parent[key] = value;
	      }, true);
	      this.emitMutationEvent('set', path, value);
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle(path) {
	      this.updateIn(path, function (value, parent, key) {
	        parent[key] = !value;
	      });
	      this.emitMutationEvent('toggle', path);
	    }
	  }, {
	    key: 'push',
	    value: function push(path, value) {
	      this.verifyValue(value, path);
	      this.updateIn(path, function (array) {
	        array.push(value);
	      });
	      this.emitMutationEvent('push', path, value);
	    }
	  }, {
	    key: 'merge',
	    value: function merge(path) {
	      for (var _len2 = arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        values[_key2 - 1] = arguments[_key2];
	      }

	      var value = Object.assign.apply(Object, values);

	      // If we already have an object we make it behave
	      // like multiple sets, indicating a change to very key.
	      // If no value it should indicate that we are setting
	      // a new object
	      if (this.get(path)) {
	        for (var prop in value) {
	          this.set(path.concat(prop), value[prop]);
	        }
	      } else {
	        this.set(path, value);
	      }
	      this.emitMutationEvent.apply(this, ['merge', path].concat(values));
	    }
	  }, {
	    key: 'pop',
	    value: function pop(path) {
	      this.updateIn(path, function (array) {
	        array.pop();
	      });
	      this.emitMutationEvent('pop', path);
	    }
	  }, {
	    key: 'shift',
	    value: function shift(path) {
	      this.updateIn(path, function (array) {
	        array.shift();
	      });
	      this.emitMutationEvent('shift', path);
	    }
	  }, {
	    key: 'unshift',
	    value: function unshift(path, value) {
	      this.verifyValue(value, path);
	      this.updateIn(path, function (array) {
	        array.unshift(value);
	      });
	      this.emitMutationEvent('unshift', path, value);
	    }
	  }, {
	    key: 'splice',
	    value: function splice(path) {
	      for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	        args[_key3 - 1] = arguments[_key3];
	      }

	      this.verifyValues(args, path);
	      this.updateIn(path, function (array) {
	        array.splice.apply(array, args);
	      });
	      this.emitMutationEvent.apply(this, ['splice', path].concat(args));
	    }
	  }, {
	    key: 'unset',
	    value: function unset(path) {
	      this.updateIn(path, function (_, parent, key) {
	        delete parent[key];
	      }, true);
	      this.emitMutationEvent('unset', path);
	    }
	  }, {
	    key: 'concat',
	    value: function concat(path, value) {
	      this.verifyValue(value, path);
	      this.updateIn(path, function (array, parent, key) {
	        parent[key] = array.concat(value);
	      });
	      this.emitMutationEvent('concat', path, value);
	    }
	  }, {
	    key: 'increment',
	    value: function increment(path) {
	      var delta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

	      if (!Number.isInteger(delta)) {
	        throw new Error('Cerebral state.increment: you must increment with integer values.');
	      }
	      this.updateIn(path, function (value, parent, key) {
	        if (!Number.isInteger(value)) {
	          throw new Error('Cerebral state.increment: you must increment integer values.');
	        }
	        parent[key] = value + delta;
	      });
	      this.emitMutationEvent('increment', path, delta);
	    }
	  }]);

	  return Model;
	}(_BaseModel3.default);

	exports.default = Model;
	//# sourceMappingURL=Model.js.map

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(124);

	var _State = __webpack_require__(146);

	var _State2 = _interopRequireDefault(_State);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BaseModel = function () {
	  function BaseModel(controller) {
	    _classCallCheck(this, BaseModel);

	    this.initialState = (0, _utils.extractModuleProp)(controller.module, 'state');
	    this.StateProvider = _State2.default;
	    this.changedPaths = [];

	    controller.on('moduleAdded', this.onModuleAdded.bind(this));
	    controller.on('moduleRemoved', this.onModuleRemoved.bind(this));
	  }

	  _createClass(BaseModel, [{
	    key: 'onModuleAdded',
	    value: function onModuleAdded(path, module) {
	      this.set(path, module.state);
	    }
	  }, {
	    key: 'onModuleRemoved',
	    value: function onModuleRemoved(path) {
	      this.unset(path);
	    }
	  }, {
	    key: 'flush',
	    value: function flush() {
	      var changes = this.changedPaths.slice();

	      this.changedPaths = [];

	      return changes;
	    }
	  }]);

	  return BaseModel;
	}();

	exports.default = BaseModel;
	//# sourceMappingURL=BaseModel.js.map

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _es6Error = __webpack_require__(150);

	var _es6Error2 = _interopRequireDefault(_es6Error);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CerebralError = function (_ExtendableError) {
	  _inherits(CerebralError, _ExtendableError);

	  function CerebralError(message, details) {
	    _classCallCheck(this, CerebralError);

	    var _this = _possibleConstructorReturn(this, (CerebralError.__proto__ || Object.getPrototypeOf(CerebralError)).call(this, message));

	    _this.name = 'CerebralError';
	    _this.details = details;
	    _this.toJSON = function () {
	      var _this2 = this;

	      return Object.getOwnPropertyNames(this).reduce(function (props, key) {
	        if (!['toJSON', 'execution', 'functionDetails'].includes(key)) {
	          props[key] = _this2[key];
	        }

	        return props;
	      }, {});
	    };
	    return _this;
	  }

	  return CerebralError;
	}(_es6Error2.default);

	exports.default = CerebralError;
	//# sourceMappingURL=CerebralError.js.map

/***/ }),
/* 150 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _extendableBuiltin(cls) {
	  function ExtendableBuiltin() {
	    cls.apply(this, arguments);
	  }

	  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
	    constructor: {
	      value: cls,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });

	  if (Object.setPrototypeOf) {
	    Object.setPrototypeOf(ExtendableBuiltin, cls);
	  } else {
	    ExtendableBuiltin.__proto__ = cls;
	  }

	  return ExtendableBuiltin;
	}

	var ExtendableError = function (_extendableBuiltin2) {
	  _inherits(ExtendableError, _extendableBuiltin2);

	  function ExtendableError() {
	    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	    _classCallCheck(this, ExtendableError);

	    // extending Error is weird and does not propagate `message`
	    var _this = _possibleConstructorReturn(this, (ExtendableError.__proto__ || Object.getPrototypeOf(ExtendableError)).call(this, message));

	    Object.defineProperty(_this, 'message', {
	      configurable: true,
	      enumerable: false,
	      value: message,
	      writable: true
	    });

	    Object.defineProperty(_this, 'name', {
	      configurable: true,
	      enumerable: false,
	      value: _this.constructor.name,
	      writable: true
	    });

	    if (Error.hasOwnProperty('captureStackTrace')) {
	      Error.captureStackTrace(_this, _this.constructor);
	      return _possibleConstructorReturn(_this);
	    }

	    Object.defineProperty(_this, 'stack', {
	      configurable: true,
	      enumerable: false,
	      value: new Error(message).stack,
	      writable: true
	    });
	    return _this;
	  }

	  return ExtendableError;
	}(_extendableBuiltin(Error));

	exports.default = ExtendableError;
	module.exports = exports['default'];


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _DependencyTracker = __webpack_require__(152);

	var _DependencyTracker2 = _interopRequireDefault(_DependencyTracker);

	var _Compute = __webpack_require__(139);

	var _utils = __webpack_require__(124);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var View = function () {
	  function View(_ref) {
	    var _this = this;

	    var dependencies = _ref.dependencies,
	        mergeProps = _ref.mergeProps,
	        props = _ref.props,
	        controller = _ref.controller,
	        displayName = _ref.displayName,
	        onUpdate = _ref.onUpdate;

	    _classCallCheck(this, View);

	    if (typeof dependencies === 'function') {
	      (0, _utils.throwError)('You can not use a function to define dependencies. Use tags or a function on the specific property you want to dynamically create');
	    }

	    if (!dependencies) {
	      (0, _utils.throwError)('There is no reason to connect a component that has no dependencies');
	    }
	    this.stateGetter = this.stateGetter.bind(this);
	    this.signalGetter = this.signalGetter.bind(this);
	    this.signalsGetter = this.signalsGetter.bind(this);
	    this.mergeProps = mergeProps;
	    this.controller = controller;
	    this._displayName = displayName;
	    this._hasWarnedBigComponent = false;
	    this.isUnmounted = false;
	    this.updateComponent = onUpdate || _utils.noop;
	    this.propKeys = Object.keys(props || {});
	    this._verifyPropsWarned = false;

	    if (this.controller.devtools && this.controller.devtools.warnStateProps) {
	      this.verifyProps(props);
	    }

	    /*
	      First we find any dependency functions to convert to DependencyTrackers.
	      They are instantly run to produce their value and map of state
	      dependencies
	    */
	    this.dependencyTrackers = Object.keys(dependencies).reduce(function (currentDependencyTrackers, dependencyKey) {
	      if (dependencies[dependencyKey] instanceof _Compute.Compute) {
	        currentDependencyTrackers[dependencyKey] = new _DependencyTracker2.default(dependencies[dependencyKey]);
	        currentDependencyTrackers[dependencyKey].run(_this.stateGetter, props);
	      }

	      return currentDependencyTrackers;
	    }, {});
	    this.dependencies = dependencies;
	    this.dependencyTrackersDependencyMaps = this.getDependencyTrackersDependencyMaps(props);
	    this.tagsDependencyMap = this.getTagsDependencyMap(props);
	  }
	  /*
	    A getter for StateTracker and tags to grab state from Cerebral
	  */


	  _createClass(View, [{
	    key: 'stateGetter',
	    value: function stateGetter(path) {
	      return this.controller.getState(path);
	    }
	    /*
	      A getter for tags to grab signals from Cerebral
	    */

	  }, {
	    key: 'signalGetter',
	    value: function signalGetter(path) {
	      try {
	        return this.controller.getSignal(path);
	      } catch (e) {}
	    }
	    /*
	      A getter for tags to grab signals of module from Cerebral
	    */

	  }, {
	    key: 'signalsGetter',
	    value: function signalsGetter(modulePath) {
	      return this.controller.getSignals(modulePath);
	    }
	    /*
	      A method to ensure objects and arrays from state tree are not passed as props
	    */

	  }, {
	    key: 'verifyProps',
	    value: function verifyProps(props) {
	      var key = (0, _utils.getStateTreeProp)(props);

	      if (key && !this._verifyPropsWarned) {
	        console.warn('You are passing an ' + (Array.isArray(props[key]) ? 'array' : 'object') + ' to the component "' + this._displayName + '" on prop "' + key + '" which is from the Cerebral state tree. You should not do this, but rather connect it directly to this component. This will optimize the component and avoid any rerender issues.');
	        this._verifyPropsWarned = true;
	      }
	    }
	  }, {
	    key: 'mount',
	    value: function mount() {
	      var depsMap = Object.assign({}, this.dependencyTrackersDependencyMaps.state, this.tagsDependencyMap);

	      this.controller.componentDependencyStore.addEntity(this, depsMap);

	      if (this.controller.devtools) {
	        this.controller.devtools.updateComponentsMap(this, depsMap);
	      }
	    }
	  }, {
	    key: 'onUpdate',
	    value: function onUpdate() {
	      if (this.isUnmounted) {
	        return;
	      }

	      this.updateComponent.apply(this, arguments);
	    }
	  }, {
	    key: 'unMount',
	    value: function unMount() {
	      var depsMap = Object.assign({}, this.dependencyTrackersDependencyMaps.state, this.tagsDependencyMap);
	      this.controller.componentDependencyStore.removeEntity(this, depsMap);

	      if (this.controller.devtools) {
	        this.controller.devtools.updateComponentsMap(this, null, depsMap);
	      }

	      this.isUnmounted = true;
	    }
	  }, {
	    key: 'onPropsUpdate',
	    value: function onPropsUpdate(props, nextProps) {
	      if (this.controller.devtools) {
	        this.verifyProps(nextProps);
	      }

	      var propsChanges = (0, _utils.getChangedProps)(props, nextProps);
	      if (propsChanges.length) {
	        this.updateFromProps(propsChanges, nextProps);

	        return true;
	      }

	      return false;
	    }
	    /*
	      Called by component when props are passed from parent and they
	      have changed. In this situation both tags and depndency trackers might
	      be affected. Tags are just updated and dependency trackers are matched
	      on props changed
	    */

	  }, {
	    key: 'updateFromProps',
	    value: function updateFromProps(propsChanges, props) {
	      this.update(props, this.updateDependencyTrackers({}, propsChanges, props));
	    }
	    /*
	      Called by Container when the components state dependencies
	      has changed. In this scenario we need to run any dependencyTrackers
	      that matches the state changes. There is no need to update the tags
	      as their declared state deps can not change
	    */

	  }, {
	    key: 'updateFromState',
	    value: function updateFromState(stateChanges, props, force) {
	      this.update(props, force ? this.forceUpdateDependencyTrackers() : this.updateDependencyTrackers(stateChanges, {}, props));
	    }
	    /*
	      Udpates the dependency trackers by checking state
	      changes and props changes
	    */

	  }, {
	    key: 'updateDependencyTrackers',
	    value: function updateDependencyTrackers(stateChanges, propsChanges, props) {
	      var _this2 = this;

	      var hasChanged = Object.keys(this.dependencyTrackers).reduce(function (hasChanged, key) {
	        if (_this2.dependencyTrackers[key].match(stateChanges, propsChanges)) {
	          _this2.dependencyTrackers[key].run(_this2.stateGetter, props);

	          return true;
	        }

	        return hasChanged;
	      }, false);

	      return hasChanged;
	    }
	    /*
	      Run update, re-evaluating the tags and computed, if neccessary
	    */

	  }, {
	    key: 'update',
	    value: function update(props, hasChangedDependencyTrackers) {
	      var prevDependencyTrackersDependencyMaps = this.dependencyTrackersDependencyMaps;
	      var previousTagsDependencyMap = this.tagsDependencyMap;

	      this.tagsDependencyMap = this.getTagsDependencyMap(props);
	      this.dependencyTrackersDependencyMaps = hasChangedDependencyTrackers ? this.getDependencyTrackersDependencyMaps(props) : this.dependencyTrackersDependencyMaps;

	      var prevDepsMap = Object.assign({}, prevDependencyTrackersDependencyMaps.state, previousTagsDependencyMap);
	      var nextDepsMap = Object.assign({}, this.dependencyTrackersDependencyMaps.state, this.tagsDependencyMap);
	      this.controller.componentDependencyStore.updateEntity(this, prevDepsMap, nextDepsMap);

	      if (this.controller.devtools) {
	        this.controller.devtools.updateComponentsMap(this, nextDepsMap, prevDepsMap);
	      }
	    }
	    /*
	      Forces update of all computed
	    */

	  }, {
	    key: 'forceUpdateDependencyTrackers',
	    value: function forceUpdateDependencyTrackers() {
	      var _this3 = this;

	      Object.keys(this.dependencyTrackers).forEach(function (key) {
	        _this3.dependencyTrackers[key].run(_this3.stateGetter, _this3.props);
	      });

	      return true;
	    }
	    /*
	      Go through dependencies and identify state trackers and
	      merge in their state dependencies
	    */

	  }, {
	    key: 'getDependencyTrackersDependencyMaps',
	    value: function getDependencyTrackersDependencyMaps(props) {
	      var _this4 = this;

	      return Object.keys(this.dependencies).reduce(function (currentDepsMaps, propKey) {
	        if (_this4.dependencyTrackers[propKey]) {
	          currentDepsMaps.state = Object.assign(currentDepsMaps.state, _this4.dependencyTrackers[propKey].stateTrackFlatMap);
	          currentDepsMaps.props = Object.assign(currentDepsMaps.props, _this4.dependencyTrackers[propKey].propsTrackFlatMap);

	          return currentDepsMaps;
	        }

	        return currentDepsMaps;
	      }, {
	        state: {},
	        props: {}
	      });
	    }
	    /*
	      Go through dependencies and extract tags related to state
	      dependencies
	    */

	  }, {
	    key: 'getTagsDependencyMap',
	    value: function getTagsDependencyMap(props) {
	      var _this5 = this;

	      return Object.keys(this.dependencies).reduce(function (currentDepsMap, propKey) {
	        if (_this5.dependencyTrackers[propKey]) {
	          return currentDepsMap;
	        }

	        if (!_this5.dependencies[propKey].getTags) {
	          (0, _utils.throwError)('Prop \'' + propKey + '\' should be a tag or a Compute.');
	        }

	        var getters = _this5.createTagGetters(props);

	        return _this5.dependencies[propKey].getTags(getters).reduce(function (updatedCurrentDepsMap, tag) {
	          if (tag.type === 'state') {
	            var path = tag.getPath(getters);
	            var strictPath = (0, _utils.ensureStrictPath)(path, _this5.stateGetter(path));

	            updatedCurrentDepsMap[strictPath] = true;
	          }

	          return updatedCurrentDepsMap;
	        }, currentDepsMap);
	      }, {});
	    }
	    /*
	      Creates getters passed into tags
	    */

	  }, {
	    key: 'createTagGetters',
	    value: function createTagGetters(props) {
	      return {
	        state: this.stateGetter,
	        props: props,
	        signal: this.signalGetter,
	        signals: this.signalsGetter
	      };
	    }
	    /*
	      Runs whenever the component has an update and renders.
	      Extracts the actual values from dependency trackers and/or tags
	    */

	  }, {
	    key: 'getProps',
	    value: function getProps() {
	      var _this6 = this;

	      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      var includeProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	      var dependenciesProps = Object.keys(this.dependencies).reduce(function (currentProps, key) {
	        if (_this6.dependencyTrackers[key]) {
	          currentProps[key] = _this6.dependencyTrackers[key].value;
	        } else {
	          var tag = _this6.dependencies[key];
	          var getters = _this6.createTagGetters(props);

	          if (tag.type === 'state') {
	            var path = tag.getPath(getters);
	            var value = _this6.stateGetter(path);
	            if (path.substr(path.length - 2, 2) === '.*') {
	              currentProps[key] = value ? Object.keys(value) : [];
	            } else {
	              currentProps[key] = value;
	            }
	          } else {
	            currentProps[key] = tag.getValue(getters);
	          }
	        }

	        return currentProps;
	      }, {});

	      if (this.controller.devtools && this.controller.devtools.bigComponentsWarning && !this._hasWarnedBigComponent && Object.keys(this.dependencies).length >= this.controller.devtools.bigComponentsWarning) {
	        console.warn('Component named ' + this._displayName + ' has a lot of dependencies, consider refactoring or adjust this option in devtools');
	        this._hasWarnedBigComponent = true;
	      }

	      if (this.mergeProps) {
	        return this.mergeProps(dependenciesProps, props, (0, _utils.createResolver)(this.createTagGetters(props)));
	      }

	      return Object.assign({}, includeProps ? props : {}, dependenciesProps);
	    }
	  }]);

	  return View;
	}();

	exports.default = View;
	//# sourceMappingURL=View.js.map

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(124);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DependencyTracker = function () {
	  function DependencyTracker(computed) {
	    _classCallCheck(this, DependencyTracker);

	    this.propsTrackMap = {};
	    this.stateTrackMap = {};
	    this.propsTrackFlatMap = {};
	    this.stateTrackFlatMap = {};
	    this.computed = computed;
	    this.value = null;
	  }

	  _createClass(DependencyTracker, [{
	    key: 'run',
	    value: function run(stateGetter, props) {
	      var newStateTrackMap = {};
	      var newPropsTrackMap = {};
	      var newPropsTrackFlatMap = {};
	      var newStateTrackFlatMap = {};
	      var stateTrackFlatMap = this.stateTrackFlatMap;
	      var propsTrackFlatMap = this.propsTrackFlatMap;
	      var propsGetter = (0, _utils.getWithPath)(props);
	      var hasChanged = false;

	      function setTrackMap(path, newTrackMap) {
	        var pathArray = path.split('.');
	        pathArray.reduce(function (currentNewTrackMapLevel, key, index) {
	          if (!currentNewTrackMapLevel[key]) {
	            hasChanged = true;
	            currentNewTrackMapLevel[key] = {};
	          }

	          if (index < pathArray.length - 1) {
	            currentNewTrackMapLevel[key].children = currentNewTrackMapLevel[key].children || {};
	          }

	          return currentNewTrackMapLevel[key].children;
	        }, newTrackMap);
	      }

	      this.value = this.computed.getValue({
	        state: function state(path) {
	          var value = stateGetter(path);
	          var strictPath = (0, _utils.ensureStrictPath)(path, value);

	          newStateTrackFlatMap[strictPath] = true;

	          if (!stateTrackFlatMap[strictPath]) hasChanged = true;
	          setTrackMap(strictPath, newStateTrackMap);

	          return value;
	        },
	        props: function props(path) {
	          newPropsTrackFlatMap[path] = true;

	          if (!propsTrackFlatMap[path]) hasChanged = true;
	          setTrackMap(path, newPropsTrackMap);

	          return propsGetter(path);
	        }
	      });

	      this.stateTrackMap = newStateTrackMap;
	      this.propsTrackMap = newPropsTrackMap;
	      this.stateTrackFlatMap = newStateTrackFlatMap;
	      this.propsTrackFlatMap = newPropsTrackFlatMap;

	      return hasChanged;
	    }
	  }, {
	    key: 'match',
	    value: function match(stateChanges, propsChanges) {
	      return Boolean((0, _utils.dependencyMatch)(stateChanges, this.stateTrackMap).length) || Boolean((0, _utils.dependencyMatch)(propsChanges, this.propsTrackMap).length);
	    }
	  }]);

	  return DependencyTracker;
	}();

	exports.default = DependencyTracker;
	//# sourceMappingURL=DependencyTracker.js.map

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Controller2 = __webpack_require__(140);

	var _Controller3 = _interopRequireDefault(_Controller2);

	var _utils = __webpack_require__(124);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UniversalController = function (_Controller) {
	  _inherits(UniversalController, _Controller);

	  function UniversalController(rootModule, controllerOptions) {
	    _classCallCheck(this, UniversalController);

	    var _this = _possibleConstructorReturn(this, (UniversalController.__proto__ || Object.getPrototypeOf(UniversalController)).call(this, rootModule, controllerOptions));

	    _this.changes = [];
	    _this.model.state = JSON.parse(JSON.stringify(_this.model.state));
	    _this.trackChanges = _this.trackChanges.bind(_this);
	    _this.on('flush', _this.trackChanges);
	    _this.hasRun = false;
	    return _this;
	  }

	  _createClass(UniversalController, [{
	    key: 'trackChanges',
	    value: function trackChanges(changes) {
	      this.changes = this.changes.concat(changes);
	    }
	  }, {
	    key: 'getChanges',
	    value: function getChanges() {
	      var _this2 = this;

	      return this.changes.reduce(function (changes, change) {
	        changes[change.path.join('.')] = _this2.getState(change.path);

	        return changes;
	      }, {});
	    }
	  }, {
	    key: 'getScript',
	    value: function getScript() {
	      var state = JSON.stringify(this.getChanges());

	      this.hasRun = true;
	      return '<script>window.CEREBRAL_STATE = ' + state + '</script>';
	    }
	  }, {
	    key: 'runSequence',
	    value: function runSequence(sequence, payload) {
	      var signalRun = void 0;

	      if (Array.isArray(sequence)) {
	        signalRun = this.run('UniversalController.run', sequence, payload);
	      } else if (typeof sequence === 'string') {
	        var pathArray = (0, _utils.ensurePath)(sequence);
	        var signalKey = pathArray.pop();
	        var module = (0, _utils.getModule)(pathArray, this.module);
	        var signalDefinition = module && module.signals[signalKey];

	        signalRun = this.run(sequence, signalDefinition.signal, payload);
	      } else {
	        (0, _utils.throwError)('Sequence must be a signal-path or an array of action.');
	      }

	      return signalRun;
	    }
	  }, {
	    key: 'setState',
	    value: function setState(path, value) {
	      this.model.set((0, _utils.ensurePath)(path), value);
	      this.flush(true); // Track changes.
	    }
	  }]);

	  return UniversalController;
	}(_Controller3.default);

	exports.default = UniversalController;
	//# sourceMappingURL=UniversalController.js.map

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(81);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(119);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _cerebral = __webpack_require__(121);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var StateContainer = function (_React$Component) {
	  _inherits(StateContainer, _React$Component);

	  function StateContainer() {
	    _classCallCheck(this, StateContainer);

	    return _possibleConstructorReturn(this, (StateContainer.__proto__ || Object.getPrototypeOf(StateContainer)).apply(this, arguments));
	  }

	  _createClass(StateContainer, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        controller: (0, _cerebral.createDummyController)(this.props.state, this.props.signals)
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);

	  return StateContainer;
	}(_react2.default.Component);

	StateContainer.propTypes = {
	  state: _propTypes2.default.object,
	  children: _propTypes2.default.node.isRequired
	};
	StateContainer.childContextTypes = {
	  controller: _propTypes2.default.object.isRequired
	};

	exports.default = StateContainer;
	//# sourceMappingURL=StateContainer.js.map

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = HOC;

	var _react = __webpack_require__(81);

	var _react2 = _interopRequireDefault(_react);

	var _cerebral = __webpack_require__(121);

	var _propTypes = __webpack_require__(119);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BaseComponent = function (_React$Component) {
	  _inherits(BaseComponent, _React$Component);

	  function BaseComponent(dependencies, mergeProps, props, controller, name) {
	    _classCallCheck(this, BaseComponent);

	    var _this = _possibleConstructorReturn(this, (BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).call(this, props));

	    if (!controller) {
	      (0, _cerebral.throwError)('Can not find controller, did you remember to use the Container component? Read more at: http://cerebraljs.com/docs/api/components.html#react');
	    }

	    _this.onUpdate = _this.onUpdate.bind(_this);
	    _this.view = new _cerebral.View({
	      dependencies: dependencies,
	      mergeProps: mergeProps,
	      props: props,
	      controller: controller,
	      displayName: name,
	      onUpdate: _this.onUpdate
	    });
	    return _this;
	  }
	  /*
	    Register the component to the dependency store with its
	    state tracker and tags state dependencies
	  */


	  _createClass(BaseComponent, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.view.mount();
	    }
	    /*
	      We only allow forced render by change of props passed
	      or Container tells it to render
	    */

	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate() {
	      return false;
	    }
	    /*
	      If received props differ, we need to update any
	      StateTrackers and tags, cause they might be using
	      props to define a state dependency
	    */

	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var hasUpdate = this.view.onPropsUpdate(this.props, nextProps);
	      if (hasUpdate) {
	        this.forceUpdate();
	      }
	    }
	    /*
	      Unregister with existing state dependencies
	    */

	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.view.unMount();
	    }
	  }, {
	    key: 'onUpdate',
	    value: function onUpdate(stateChanges, force) {
	      this.view.updateFromState(stateChanges, this.props, force);
	      this.forceUpdate();
	    }
	  }]);

	  return BaseComponent;
	}(_react2.default.Component);

	function HOC(dependencies, mergeProps, Component) {
	  var CerebralComponent = function (_BaseComponent) {
	    _inherits(CerebralComponent, _BaseComponent);

	    function CerebralComponent(props, context) {
	      _classCallCheck(this, CerebralComponent);

	      return _possibleConstructorReturn(this, (CerebralComponent.__proto__ || Object.getPrototypeOf(CerebralComponent)).call(this, dependencies, mergeProps, props, context.controller, Component.displayName || Component.name));
	    }

	    _createClass(CerebralComponent, [{
	      key: 'toJSON',
	      value: function toJSON() {
	        return this.view._displayName;
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return _react2.default.createElement(Component, this.view.getProps(this.props));
	      }
	    }]);

	    return CerebralComponent;
	  }(BaseComponent);

	  CerebralComponent.displayName = 'CerebralWrapping_' + (Component.displayName || Component.name);

	  CerebralComponent.contextTypes = {
	    controller: _propTypes2.default.object
	  };

	  return CerebralComponent;
	}
	//# sourceMappingURL=Hoc.js.map

/***/ }),
/* 156 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function connect(HOC, dependencies, mergeProps, passedComponent) {
	  var component = passedComponent;
	  var props = mergeProps;

	  if (arguments.length === 3) {
	    component = props;
	    props = null;
	  }

	  return HOC(dependencies, props, component);
	}

	exports.default = function (HOC) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return connect.apply(undefined, [HOC].concat(args));
	  };
	};

	var decoratorFactory = exports.decoratorFactory = function decoratorFactory(HOC) {
	  return function () {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    return function (component) {
	      return connect.apply(undefined, [HOC].concat(args, [component]));
	    };
	  };
	};
	//# sourceMappingURL=connect.js.map

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Devtools = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	exports.default = function () {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  return new (Function.prototype.bind.apply(Devtools, [null].concat(args)))();
	};

	var _utils = __webpack_require__(124);

	var _devtools = __webpack_require__(158);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global WebSocket File FileList Blob ImageData VERSION */


	var PLACEHOLDER_INITIAL_MODEL = 'PLACEHOLDER_INITIAL_MODEL';
	var PLACEHOLDER_DEBUGGING_DATA = '$$DEBUGGING_DATA$$';

	/*
	  Connects to the Cerebral debugger
	  - Triggers events with information from function tree execution
	  - Stores data related to time travel, if activated
	*/

	var Devtools = exports.Devtools = function (_DevtoolsBase) {
	  _inherits(Devtools, _DevtoolsBase);

	  function Devtools() {
	    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	        _ref$storeMutations = _ref.storeMutations,
	        storeMutations = _ref$storeMutations === undefined ? true : _ref$storeMutations,
	        _ref$preventExternalM = _ref.preventExternalMutations,
	        preventExternalMutations = _ref$preventExternalM === undefined ? true : _ref$preventExternalM,
	        _ref$warnStateProps = _ref.warnStateProps,
	        warnStateProps = _ref$warnStateProps === undefined ? true : _ref$warnStateProps,
	        _ref$preventPropsRepl = _ref.preventPropsReplacement,
	        preventPropsReplacement = _ref$preventPropsRepl === undefined ? false : _ref$preventPropsRepl,
	        _ref$bigComponentsWar = _ref.bigComponentsWarning,
	        bigComponentsWarning = _ref$bigComponentsWar === undefined ? 10 : _ref$bigComponentsWar,
	        _ref$host = _ref.host,
	        host = _ref$host === undefined ? null : _ref$host,
	        _ref$https = _ref.https,
	        https = _ref$https === undefined ? false : _ref$https,
	        _ref$reconnect = _ref.reconnect,
	        reconnect = _ref$reconnect === undefined ? true : _ref$reconnect,
	        _ref$reconnectInterva = _ref.reconnectInterval,
	        reconnectInterval = _ref$reconnectInterva === undefined ? 5000 : _ref$reconnectInterva,
	        _ref$allowedTypes = _ref.allowedTypes,
	        allowedTypes = _ref$allowedTypes === undefined ? [] : _ref$allowedTypes;

	    _classCallCheck(this, Devtools);

	    var _this = _possibleConstructorReturn(this, (Devtools.__proto__ || Object.getPrototypeOf(Devtools)).call(this, {
	      host: host,
	      https: https,
	      reconnect: reconnect,
	      reconnectInterval: reconnectInterval
	    }));

	    _this.version = "4.1.1";
	    _this.debuggerComponentsMap = {};
	    _this.debuggerComponentDetailsId = 1;
	    _this.storeMutations = storeMutations;
	    _this.preventExternalMutations = preventExternalMutations;
	    _this.warnStateProps = warnStateProps;
	    _this.preventPropsReplacement = preventPropsReplacement;
	    _this.bigComponentsWarning = bigComponentsWarning;

	    _this.mutations = [];
	    _this.initialModelString = null;
	    _this.controller = null;
	    _this.originalRunTreeFunction = null;
	    _this.isResettingDebugger = false;
	    _this.allowedTypes = [].concat(typeof File === 'undefined' ? [] : File).concat(typeof FileList === 'undefined' ? [] : FileList).concat(typeof Blob === 'undefined' ? [] : Blob).concat(typeof ImageData === 'undefined' ? [] : ImageData).concat(typeof RegExp === 'undefined' ? [] : RegExp).concat(allowedTypes || []);

	    _this.sendInitial = _this.sendInitial.bind(_this);
	    _this.sendComponentsMap = (0, _utils.delay)(_this.sendComponentsMap, 50);
	    return _this;
	  }

	  _createClass(Devtools, [{
	    key: 'createSocket',
	    value: function createSocket() {
	      this.ws = new WebSocket((this.https ? 'wss' : 'ws') + '://' + this.host);
	    }
	    /*
	      To remember state Cerebral stores the initial model as stringified
	      object. Since the model is mutable this is necessary. The debugger
	      passes the execution id of the signal that was double clicked. This
	      execution id is searched backwards in the array of mutations done.
	      This is necessary as multiple mutations can be done on the same execution.
	      Then all mutations are replayed to the model and all the components
	      will be rerendered using the "flush" event and "force" flag.
	       It will also replace the "run" method of the controller to
	      prevent any new signals firing off when in "remember state"
	    */

	  }, {
	    key: 'remember',
	    value: function remember(index) {
	      this.controller.model.set([], JSON.parse(this.initialModelString));

	      if (index === 0) {
	        this.controller.run = this.originalRunTreeFunction;
	      } else {
	        this.controller.run = function (name) {
	          console.warn('The signal "' + name + '" fired while debugger is remembering state, it was ignored');
	        };
	      }

	      for (var x = 0; x < this.mutations.length - index; x++) {
	        var _controller$model;

	        var mutation = JSON.parse(this.mutations[x].data);
	        (_controller$model = this.controller.model)[mutation.method].apply(_controller$model, _toConsumableArray(mutation.args));
	      }

	      this.controller.flush(true);
	      this.controller.emit('remember', JSON.parse(this.mutations[index].data).datetime);
	    }
	    /*
	     */

	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.controller.model.set([], JSON.parse(this.initialModelString));
	      this.backlog = [];
	      this.mutations = [];
	      this.controller.flush(true);
	    }
	  }, {
	    key: 'onMessage',
	    value: function onMessage(event) {
	      var message = JSON.parse(event.data);
	      switch (message.type) {
	        case 'changeModel':
	          this.controller.model.set(message.data.path, message.data.value);
	          this.controller.flush();
	          break;
	        case 'remember':
	          if (!this.storeMutations) {
	            console.warn('Cerebral Devtools - You tried to time travel, but you have turned of storing of mutations');
	          } else {
	            this.remember(message.data);
	          }
	          break;
	        case 'reset':
	          this.reset();
	          break;
	        case 'pong':
	          this.sendInitial();
	          break;
	        case 'ping':
	          this.sendInitial();
	          break;
	      }
	    }
	    /*
	      The debugger might be ready or it might not. The initial communication
	      with the debugger requires a "ping" -> "pong" to identify that it
	      is ready to receive messages.
	      1. Debugger is open when app loads
	        - Devtools sends "ping"
	        - Debugger sends "pong"
	        - Devtools sends "init"
	      2. Debugger is opened after app load
	        - Debugger sends "ping"
	        - Devtools sends "init"
	    */

	  }, {
	    key: 'init',
	    value: function init(controller) {
	      this.controller = controller || this.controller;
	      this.originalRunTreeFunction = this.controller.run;

	      if (this.storeMutations) {
	        this.initialModelString = JSON.stringify(this.controller.model.get());
	      }

	      _get(Devtools.prototype.__proto__ || Object.getPrototypeOf(Devtools.prototype), 'init', this).call(this);

	      if (controller) {
	        this.watchExecution(this.controller, 'c');
	      }
	    }
	    /*
	      Send initial model. If model has already been stringified we reuse it. Any
	      backlogged executions will also be triggered
	    */

	  }, {
	    key: 'sendInitial',
	    value: function sendInitial() {
	      var initialModel = this.controller.model.get();
	      var message = JSON.stringify({
	        type: 'init',
	        source: 'c',
	        version: this.version,
	        data: {
	          initialModel: this.initialModelString ? PLACEHOLDER_INITIAL_MODEL : initialModel
	        }
	      }).replace('"' + PLACEHOLDER_INITIAL_MODEL + '"', this.initialModelString);

	      this.isResettingDebugger = true;
	      this.sendMessage(message);
	      if (this.backlog.length) {
	        this.sendBulkMessage(this.backlog, 'c');
	        this.backlog = [];
	      }
	      this.isResettingDebugger = false;

	      this.isConnected = true;

	      this.sendMessage(JSON.stringify({
	        type: 'components',
	        source: 'c',
	        version: this.version,
	        data: {
	          map: this.debuggerComponentsMap,
	          render: {
	            components: []
	          }
	        }
	      }));
	    }
	    /*
	      Create the stringified message for the debugger. As we need to
	      store mutations with the default true "storeMutations" option used
	      by time travel and jumping between Cerebral apps, we are careful
	      not doing unnecessary stringifying.
	    */

	  }, {
	    key: 'createExecutionMessage',
	    value: function createExecutionMessage(debuggingData, execution, functionDetails, payload) {
	      var type = 'execution';
	      var mutationString = '';

	      if (this.storeMutations && debuggingData && debuggingData.type === 'mutation') {
	        mutationString = JSON.stringify(debuggingData);
	      }

	      var data = {
	        execution: {
	          executionId: execution.id,
	          functionIndex: functionDetails.functionIndex,
	          payload: payload,
	          datetime: execution.datetime,
	          data: mutationString ? PLACEHOLDER_DEBUGGING_DATA : debuggingData
	        }
	      };

	      if (mutationString) {
	        this.mutations.push({
	          executionId: execution.id,
	          data: mutationString
	        });
	      }

	      return JSON.stringify({
	        type: type,
	        source: 'c',
	        version: this.version,
	        data: data
	      }).replace('"' + PLACEHOLDER_DEBUGGING_DATA + '"', mutationString);
	    }
	    /*
	      The container will listen to "flush" events from the controller
	      and send an event to debugger about initial registered components
	    */

	  }, {
	    key: 'extractComponentName',
	    value: function extractComponentName(component) {
	      return component._displayName.replace('CerebralWrapping_', '');
	    }
	    /*
	      Updates the map the represents what active state paths and
	      components are in your app.Called from Controller. Used by the debugger
	    */

	  }, {
	    key: 'updateComponentsMap',
	    value: function updateComponentsMap(component, nextDeps, prevDeps) {
	      var componentDetails = {
	        name: this.extractComponentName(component),
	        renderCount: component.renderCount || 0,
	        id: component.componentDetailsId || this.debuggerComponentDetailsId++
	      };

	      if (arguments.length === 1) {
	        componentDetails.renderCount++;
	      }

	      component.componentDetailsId = componentDetails.id;
	      component.renderCount = componentDetails.renderCount;

	      if (prevDeps) {
	        for (var depsKey in prevDeps) {
	          var debuggerComponents = this.debuggerComponentsMap[depsKey];

	          for (var x = 0; x < debuggerComponents.length; x++) {
	            if (debuggerComponents[x].id === component.componentDetailsId) {
	              debuggerComponents.splice(x, 1);
	              if (debuggerComponents.length === 0) {
	                delete this.debuggerComponentsMap[depsKey];
	              }
	              break;
	            }
	          }
	        }
	      }

	      if (nextDeps) {
	        for (var _depsKey in nextDeps) {
	          this.debuggerComponentsMap[_depsKey] = this.debuggerComponentsMap[_depsKey] ? this.debuggerComponentsMap[_depsKey].concat(componentDetails) : [componentDetails];
	        }
	      }
	    }
	    /*
	      Sends components map to debugger. It is debounced (check constructor).
	      It needs to wait because React updates async. Instead of tracking
	      callbacks we just wait 50ms as it is not that important when
	      debugger updates
	    */

	  }, {
	    key: 'sendComponentsMap',
	    value: function sendComponentsMap(componentsToRender, changes, start, end) {
	      if (this.isConnected) {
	        this.sendMessage(JSON.stringify({
	          type: 'components',
	          source: 'c',
	          version: this.version,
	          data: {
	            map: this.debuggerComponentsMap,
	            render: {
	              start: start,
	              duration: end - start,
	              changes: changes,
	              components: componentsToRender.map(this.extractComponentName)
	            }
	          }
	        }));
	      }
	    }
	  }]);

	  return Devtools;
	}(_devtools.DevtoolsBase);
	//# sourceMappingURL=index.js.map

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Devtools = exports.DevtoolsBase = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _base = __webpack_require__(159);

	Object.defineProperty(exports, 'DevtoolsBase', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_base).default;
	  }
	});

	var _Provider2 = __webpack_require__(135);

	var _Provider3 = _interopRequireDefault(_Provider2);

	var _base2 = _interopRequireDefault(_base);

	var _universalWebsocketClient = __webpack_require__(160);

	var _universalWebsocketClient2 = _interopRequireDefault(_universalWebsocketClient);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global VERSION */


	var Devtools = exports.Devtools = function (_DevtoolsBase) {
	  _inherits(Devtools, _DevtoolsBase);

	  function Devtools(options) {
	    _classCallCheck(this, Devtools);

	    var _this = _possibleConstructorReturn(this, (Devtools.__proto__ || Object.getPrototypeOf(Devtools)).call(this, options));

	    _this.trees = [];
	    _this.latestExecutionId = null;
	    _this.version = "3.1.0";
	    _this.init();
	    return _this;
	  }

	  _createClass(Devtools, [{
	    key: 'createSocket',
	    value: function createSocket() {
	      this.ws = new _universalWebsocketClient2.default((this.https ? 'wss' : 'ws') + '://' + this.host);
	    }
	  }, {
	    key: 'onMessage',
	    value: function onMessage(event) {
	      var message = JSON.parse(event.data);
	      switch (message.type) {
	        case 'pong':
	          this.sendInitial();
	          break;
	        case 'ping':
	          this.sendInitial();
	          break;
	      }
	    }
	  }, {
	    key: 'add',
	    value: function add(tree) {
	      this.trees.push(tree);
	      tree.contextProviders.debugger = this.Provider();
	      this.watchExecution(tree, 'ft');
	    }
	  }, {
	    key: 'remove',
	    value: function remove(tree) {
	      this.trees.splice(this.trees.indexOf(tree), 1);
	      delete tree.contextProviders.debugger;

	      tree.removeAllListeners('start');
	      tree.removeAllListeners('end');
	      tree.removeAllListeners('pathStart');
	      tree.removeAllListeners('functionStart');
	      tree.removeAllListeners('functionEnd');
	      tree.removeAllListeners('error');
	    }
	  }, {
	    key: 'removeAll',
	    value: function removeAll() {
	      var _this2 = this;

	      var trees = this.trees.reduce(function (newTrees, tree) {
	        newTrees.push(tree);
	        return newTrees;
	      }, []);
	      trees.forEach(function (tree) {
	        _this2.remove(tree);
	      });
	    }
	  }, {
	    key: 'sendInitial',
	    value: function sendInitial() {
	      var message = JSON.stringify({
	        type: 'init',
	        source: 'ft',
	        version: this.version
	      });

	      this.sendMessage(message);
	      if (this.backlog.length) {
	        this.sendBulkMessage(this.backlog, 'ft');
	        this.backlog = [];
	      }
	      this.isConnected = true;
	    }
	    /*
	      Create the stringified message for the debugger. As we need to
	      store mutations with the default true "storeMutations" option used
	      by time travel and jumping between Cerebral apps, we are careful
	      not doing unnecessary stringifying.
	    */

	  }, {
	    key: 'createExecutionMessage',
	    value: function createExecutionMessage(debuggingData, execution, functionDetails, payload) {
	      var type = 'execution';
	      var data = {
	        execution: {
	          executionId: execution.id,
	          functionIndex: functionDetails.functionIndex,
	          payload: payload,
	          datetime: execution.datetime,
	          data: debuggingData
	        }
	      };

	      return this.safeStringify({
	        type: type,
	        source: 'ft',
	        version: this.version,
	        data: data
	      });
	    }
	  }, {
	    key: 'Provider',
	    value: function Provider() {
	      var sendExecutionData = this.sendExecutionData.bind(this);

	      return new _Provider3.default({
	        send: function send(data) {
	          sendExecutionData(data, this.context.execution, this.context.functionDetails, this.context.props);
	        },
	        wrapProvider: function wrapProvider(name, provider) {
	          var _this3 = this;

	          return Object.keys(provider).reduce(function (wrappedProvider, key) {
	            var originalFunc = provider[key];

	            wrappedProvider[key] = function () {
	              for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                args[_key] = arguments[_key];
	              }

	              _this3.context.debugger.send({
	                method: name + '.' + key,
	                args: args
	              });

	              return originalFunc.apply(provider, args);
	            };

	            return wrappedProvider;
	          }, {});
	        }
	      }, {
	        wrap: false
	      });
	    }
	  }]);

	  return Devtools;
	}(_base2.default);

	exports.default = Devtools;
	//# sourceMappingURL=index.js.map

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DevtoolsBase = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Path = __webpack_require__(130);

	var _Path2 = _interopRequireDefault(_Path);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DevtoolsBase = exports.DevtoolsBase = function () {
	  function DevtoolsBase() {
	    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	        _ref$https = _ref.https,
	        https = _ref$https === undefined ? false : _ref$https,
	        _ref$host = _ref.host,
	        host = _ref$host === undefined ? null : _ref$host,
	        _ref$reconnect = _ref.reconnect,
	        reconnect = _ref$reconnect === undefined ? true : _ref$reconnect,
	        _ref$reconnectInterva = _ref.reconnectInterval,
	        reconnectInterval = _ref$reconnectInterva === undefined ? 10000 : _ref$reconnectInterva;

	    _classCallCheck(this, DevtoolsBase);

	    this.host = host;
	    this.https = https;
	    this.version = 0;
	    if (!this.host) {
	      throw new Error('Devtools: You have to pass in the "host" option');
	    }
	    this.backlog = [];
	    this.isConnected = false;
	    this.ws = null;
	    this.reconnectInterval = reconnectInterval;
	    this.doReconnect = reconnect;

	    this.sendInitial = this.sendInitial.bind(this);
	  }

	  _createClass(DevtoolsBase, [{
	    key: 'createSocket',
	    value: function createSocket() {
	      throw new Error('You have to implement a "createSocket" method');
	    }
	    /*
	      Sets up the listeners to Chrome Extension or remote debugger
	    */

	  }, {
	    key: 'addListeners',
	    value: function addListeners() {
	      this.createSocket();
	      this.ws.onmessage = this.onMessage.bind(this);
	    }
	  }, {
	    key: 'onMessage',
	    value: function onMessage(event) {}
	  }, {
	    key: 'reconnect',
	    value: function reconnect() {
	      var _this = this;

	      setTimeout(function () {
	        _this.init();
	      }, this.reconnectInterval);
	    }
	    /*
	      The debugger might be ready or it might not. The initial communication
	      with the debugger requires a "ping" -> "pong" to identify that it
	      is ready to receive messages.
	      1. Debugger is open when app loads
	        - Devtools sends "ping"
	        - Debugger sends "pong"
	        - Devtools sends "init"
	      2. Debugger is opened after app load
	        - Debugger sends "ping"
	        - Devtools sends "init"
	    */

	  }, {
	    key: 'init',
	    value: function init() {
	      var _this2 = this;

	      this.addListeners();
	      this.ws.onopen = function () {
	        _this2.ws.send(JSON.stringify({ type: 'ping' }));
	      };
	      this.ws.onerror = function () {};
	      this.ws.onclose = function () {
	        _this2.isConnected = false;

	        if (_this2.doReconnect) {
	          console.warn('Debugger application is not running on selected port... will reconnect automatically behind the scenes');
	          _this2.reconnect();
	        }
	      };
	    }
	    /*
	      Sends message to chrome extension or remote debugger
	    */

	  }, {
	    key: 'sendMessage',
	    value: function sendMessage(stringifiedMessage) {
	      this.ws.send(stringifiedMessage);
	    }
	    /*
	      Sends multiple message in one batch to debugger, causing debugger
	      also to synchronously run all updates before rendering
	    */

	  }, {
	    key: 'sendBulkMessage',
	    value: function sendBulkMessage(messages, source) {
	      var message = JSON.stringify({
	        type: 'bulk',
	        source: source,
	        version: this.version,
	        data: {
	          messages: messages
	        }
	      });

	      this.sendMessage(message);
	    }
	    /*
	      Watches function tree for execution of signals. This is passed to
	      debugger to prevent time travelling when executing. It also tracks
	      latest executed signal for "remember" to know when signals can be
	      called again
	    */

	  }, {
	    key: 'watchExecution',
	    value: function watchExecution(tree, source) {
	      var _this3 = this;

	      tree.on('start', function (execution, payload) {
	        var message = JSON.stringify({
	          type: 'executionStart',
	          source: source,
	          version: _this3.version,
	          data: {
	            execution: {
	              executionId: execution.id,
	              name: execution.name,
	              staticTree: execution.staticTree,
	              datetime: execution.datetime,
	              executedBy: payload && payload._execution ? payload._execution : null
	            }
	          }
	        });

	        _this3.sendExecutionMessage(message);
	      });
	      tree.on('end', function (execution) {
	        var message = JSON.stringify({
	          type: 'executionEnd',
	          source: source,
	          version: _this3.version,
	          data: {
	            execution: {
	              executionId: execution.id
	            }
	          }
	        });
	        _this3.latestExecutionId = execution.id;

	        _this3.sendExecutionMessage(message);
	      });
	      tree.on('pathStart', function (path, execution, funcDetails) {
	        var message = JSON.stringify({
	          type: 'executionPathStart',
	          source: source,
	          version: _this3.version,
	          data: {
	            execution: {
	              executionId: execution.id,
	              functionIndex: funcDetails.functionIndex,
	              path: path
	            }
	          }
	        });

	        _this3.sendExecutionMessage(message);
	      });
	      tree.on('functionStart', function (execution, funcDetails, payload) {
	        var message = _this3.safeStringify({
	          type: 'execution',
	          source: source,
	          version: _this3.version,
	          data: {
	            execution: {
	              executionId: execution.id,
	              functionIndex: funcDetails.functionIndex,
	              payload: payload,
	              data: null
	            }
	          }
	        });

	        _this3.sendExecutionMessage(message);
	      });
	      tree.on('functionEnd', function (execution, funcDetails, payload, result) {
	        if (!result || result instanceof _Path2.default && !result.payload) {
	          return;
	        }

	        var message = _this3.safeStringify({
	          type: 'executionFunctionEnd',
	          source: source,
	          version: _this3.version,
	          data: {
	            execution: {
	              executionId: execution.id,
	              functionIndex: funcDetails.functionIndex,
	              output: result instanceof _Path2.default ? result.payload : result
	            }
	          }
	        });

	        _this3.sendExecutionMessage(message);
	      });
	      tree.on('error', function (error, execution, funcDetails) {
	        var message = JSON.stringify({
	          type: 'executionFunctionError',
	          source: source,
	          version: _this3.version,
	          data: {
	            execution: {
	              executionId: execution.id,
	              functionIndex: funcDetails.functionIndex,
	              error: {
	                name: error.name,
	                message: error.message,
	                stack: error.stack,
	                func: funcDetails.function.toString()
	              }
	            }
	          }
	        });

	        _this3.sendExecutionMessage(message);
	      });
	    }
	  }, {
	    key: 'safeStringify',
	    value: function safeStringify(object) {
	      var refs = [];

	      return JSON.stringify(object, function (key, value) {
	        var isObject = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null && !Array.isArray(value);

	        if (isObject && refs.indexOf(value) > -1) {
	          return '[CIRCULAR]';
	        } else if (isObject) {
	          refs.push(value);
	        }

	        return value;
	      });
	    }
	  }, {
	    key: 'sendExecutionMessage',
	    value: function sendExecutionMessage(message) {
	      if (this.isConnected) {
	        this.sendMessage(message);
	      } else {
	        this.backlog.push(message);
	      }
	    }
	  }, {
	    key: 'sendInitial',
	    value: function sendInitial() {}
	  }, {
	    key: 'createExecutionMessage',
	    value: function createExecutionMessage(debuggingData, execution, functionDetails, payload) {}
	    /*
	      Sends execution data to the debugger. Whenever a signal starts
	      it will send a message to the debugger, but any functions in the
	      function tree might also use this to send debugging data. Like when
	      mutations are done or any wrapped methods run.
	    */

	  }, {
	    key: 'sendExecutionData',
	    value: function sendExecutionData(debuggingData, execution, functionDetails, payload) {
	      var message = this.createExecutionMessage(debuggingData, execution, functionDetails, payload);

	      this.sendExecutionMessage(message);
	    }
	  }]);

	  return DevtoolsBase;
	}();

	exports.default = DevtoolsBase;
	//# sourceMappingURL=base.js.map

/***/ }),
/* 160 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = WebSocket;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.StorageProviderError = undefined;

	var _StorageProviderError = __webpack_require__(162);

	Object.defineProperty(exports, 'StorageProviderError', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_StorageProviderError).default;
	  }
	});

	var _cerebral = __webpack_require__(121);

	var _StorageProvider = __webpack_require__(163);

	var _StorageProvider2 = _interopRequireDefault(_StorageProvider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports.default = function (options) {
	  return (0, _cerebral.Module)(function (_ref) {
	    var name = _ref.name,
	        controller = _ref.controller;

	    controller.once('initialized:model', function () {
	      var targetStorage = options.target || localStorage;

	      Object.keys(options.sync || {}).forEach(function (syncKey) {
	        var value = targetStorage.getItem(options.prefix + syncKey);

	        if (!value) {
	          return;
	        }

	        var path = options.sync[syncKey].split('.');
	        controller.model.set(path, options.json ? JSON.parse(value) : value);
	      });
	    });

	    if (options.sync) {
	      controller.on('flush', function (changes) {
	        changes.forEach(function (change) {
	          Object.keys(options.sync).forEach(function (syncKey) {
	            if (change.path.join('.').indexOf(options.sync[syncKey]) === 0) {
	              var value = controller.getState(options.sync[syncKey]);

	              value === undefined ? options.target.removeItem(options.prefix + syncKey) : options.target.setItem(options.prefix + syncKey, options.json ? JSON.stringify(value) : value);
	            }
	          });
	        });
	      });
	    }

	    return {
	      providers: _defineProperty({}, name, (0, _StorageProvider2.default)(options))
	    };
	  });
	};
	//# sourceMappingURL=index.js.map

/***/ }),
/* 162 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _extendableBuiltin(cls) {
	  function ExtendableBuiltin() {
	    var instance = Reflect.construct(cls, Array.from(arguments));
	    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
	    return instance;
	  }

	  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
	    constructor: {
	      value: cls,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });

	  if (Object.setPrototypeOf) {
	    Object.setPrototypeOf(ExtendableBuiltin, cls);
	  } else {
	    ExtendableBuiltin.__proto__ = cls;
	  }

	  return ExtendableBuiltin;
	}

	var StorageProviderError = function (_extendableBuiltin2) {
	  _inherits(StorageProviderError, _extendableBuiltin2);

	  function StorageProviderError(error) {
	    _classCallCheck(this, StorageProviderError);

	    var _this = _possibleConstructorReturn(this, (StorageProviderError.__proto__ || Object.getPrototypeOf(StorageProviderError)).call(this, error.message));

	    _this.name = 'StorageProviderError';
	    _this.message = error.message;
	    return _this;
	  }

	  _createClass(StorageProviderError, [{
	    key: 'toJSON',
	    value: function toJSON() {
	      return {
	        name: this.name,
	        message: this.message,
	        stack: this.stack
	      };
	    }
	  }]);

	  return StorageProviderError;
	}(_extendableBuiltin(Error));

	exports.default = StorageProviderError;
	//# sourceMappingURL=StorageProviderError.js.map

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.StorageProviderError = undefined;

	var _StorageProviderError = __webpack_require__(162);

	Object.defineProperty(exports, 'StorageProviderError', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_StorageProviderError).default;
	  }
	});

	var _cerebral = __webpack_require__(121);

	var _StorageProviderError2 = _interopRequireDefault(_StorageProviderError);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function StorageProvider() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var target = options.target;

	  options.json = 'json' in options ? options.json : true;
	  options.prefix = options.prefix ? options.prefix + '.' : '';

	  return (0, _cerebral.Provider)({
	    get: function get(key) {
	      var value = target.getItem(options.prefix + key);

	      function resolveValue(value) {
	        if (options.json && value) {
	          return JSON.parse(value);
	        }

	        return value;
	      }

	      if (value instanceof Promise) {
	        return value.then(resolveValue).catch(function (error) {
	          throw new _StorageProviderError2.default(error);
	        });
	      }

	      return resolveValue(value);
	    },
	    set: function set(key, value) {
	      var maybePromise = value === undefined ? target.removeItem(options.prefix + key) : target.setItem(options.prefix + key, options.json ? JSON.stringify(value) : value);

	      if (maybePromise instanceof Promise) {
	        return maybePromise.catch(function (error) {
	          throw new _StorageProviderError2.default(error);
	        });
	      }
	    },
	    remove: function remove(key) {
	      var maybePromise = target.removeItem(options.prefix + key);

	      if (maybePromise instanceof Promise) {
	        return maybePromise.catch(function (error) {
	          throw new _StorageProviderError2.default(error);
	        });
	      }
	    }
	  });
	}

	exports.default = StorageProvider;
	//# sourceMappingURL=StorageProvider.js.map

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['order'], ['order']);

	var _react = __webpack_require__(81);

	var _react2 = _interopRequireDefault(_react);

	var _react3 = __webpack_require__(116);

	var _tags = __webpack_require__(125);

	var _styledComponents = __webpack_require__(165);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _OrderGroup = __webpack_require__(368);

	var _OrderGroup2 = _interopRequireDefault(_OrderGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PopupMenu = function (_React$Component) {
	  _inherits(PopupMenu, _React$Component);

	  function PopupMenu() {
	    _classCallCheck(this, PopupMenu);

	    return _possibleConstructorReturn(this, (PopupMenu.__proto__ || Object.getPrototypeOf(PopupMenu)).apply(this, arguments));
	  }

	  _createClass(PopupMenu, [{
	    key: 'render',
	    value: function render() {
	      var order = this.props.order;
	      order = Object.keys(order).map(function (id) {
	        return order[id];
	      });

	      return _react2.default.createElement(
	        'div',
	        { style: { width: '500px' } },
	        order.map(function (group, idx) {
	          return _react2.default.createElement(_OrderGroup2.default, { id: group.id, key: idx });
	        })
	      );
	    }
	  }]);

	  return PopupMenu;
	}(_react2.default.Component);

	exports.default = (0, _react3.connect)({ order: (0, _tags.state)(_templateObject) }, PopupMenu);

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, module) {'use strict';

	Object.defineProperty(exports, '__esModule', { value: true });

	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

	var isPlainObject = _interopDefault(__webpack_require__(166));
	var Stylis = _interopDefault(__webpack_require__(168));
	var _insertRulePlugin = _interopDefault(__webpack_require__(169));
	var React = __webpack_require__(81);
	var React__default = _interopDefault(React);
	var PropTypes = _interopDefault(__webpack_require__(119));
	var hoistStatics = _interopDefault(__webpack_require__(170));

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	var _uppercasePattern = /([A-Z])/g;

	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate$2(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}

	var hyphenate_1 = hyphenate$2;

	var hyphenate = hyphenate_1;

	var msPattern = /^ms-/;

	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}

	var hyphenateStyleName_1 = hyphenateStyleName;

	// 
	var objToCss = function objToCss(obj, prevKey) {
	  var css = Object.keys(obj).filter(function (key) {
	    var chunk = obj[key];
	    return chunk !== undefined && chunk !== null && chunk !== false && chunk !== '';
	  }).map(function (key) {
	    if (isPlainObject(obj[key])) return objToCss(obj[key], key);
	    return hyphenateStyleName_1(key) + ': ' + obj[key] + ';';
	  }).join(' ');
	  return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css;
	};

	var flatten = function flatten(chunks, executionContext) {
	  return chunks.reduce(function (ruleSet, chunk) {
	    /* Remove falsey values */
	    if (chunk === undefined || chunk === null || chunk === false || chunk === '') {
	      return ruleSet;
	    }
	    /* Flatten ruleSet */
	    if (Array.isArray(chunk)) {
	      return [].concat(ruleSet, flatten(chunk, executionContext));
	    }

	    /* Handle other components */
	    if (chunk.hasOwnProperty('styledComponentId')) {
	      // $FlowFixMe not sure how to make this pass
	      return [].concat(ruleSet, ['.' + chunk.styledComponentId]);
	    }

	    /* Either execute or defer the function */
	    if (typeof chunk === 'function') {
	      return executionContext ? ruleSet.concat.apply(ruleSet, flatten([chunk(executionContext)], executionContext)) : ruleSet.concat(chunk);
	    }

	    /* Handle objects */
	    return ruleSet.concat(
	    // $FlowFixMe have to add %checks somehow to isPlainObject
	    isPlainObject(chunk) ? objToCss(chunk) : chunk.toString());
	  }, []);
	};

	// 
	var stylis = new Stylis({
	  global: false,
	  cascade: true,
	  keyframe: false,
	  prefix: true,
	  compress: false,
	  semicolon: true
	});

	// Wrap `insertRulePlugin to build a list of rules,
	// and then make our own plugin to return the rules. This
	// makes it easier to hook into the existing SSR architecture

	var parsingRules = [];
	// eslint-disable-next-line consistent-return
	var returnRulesPlugin = function returnRulesPlugin(context) {
	  if (context === -2) {
	    var parsedRules = parsingRules;
	    parsingRules = [];
	    return parsedRules;
	  }
	};

	var parseRulesPlugin = _insertRulePlugin(function (rule) {
	  parsingRules.push(rule);
	});

	stylis.use([parseRulesPlugin, returnRulesPlugin]);

	var stringifyRules = function stringifyRules(rules, selector, prefix) {
	  var flatCSS = rules.join('').replace(/^\s*\/\/.*$/gm, ''); // replace JS comments

	  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

	  return stylis(prefix || !selector ? '' : selector, cssStr);
	};

	// 

	function isStyledComponent(target) /* : %checks */{
	  return typeof target === 'function' && typeof target.styledComponentId === 'string';
	}

	// 
	/**
	 * When using streaming rendering, style blocks are emitted in chunks directly
	 * next to the HTML they reference. In order to prevent errors during rehydration
	 * (since React doesn't know about the style blocks we are interleaving) this
	 * method relocates all styled-component blocks to the end of `<head>`.
	 *
	 * NOTE: this method MUST be called before ReactDOM.hydrate().
	 */
	function consolidateStreamedStyles() {
	  var blocks = Array.from(document.querySelectorAll('style[data-styled-components]'));

	  if (blocks.length) {
	    var frag = document.createDocumentFragment();

	    for (var i = 0, len = blocks.length; i < len; i += 1) {
	      // $FlowFixMe
	      frag.appendChild(blocks[i].parentNode.removeChild(blocks[i]));
	    }

	    // $FlowFixMe
	    document.head.appendChild(frag);
	  }
	}

	// 
	var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	var charsLength = chars.length;

	/* Some high number, usually 9-digit base-10. Map it to base-😎 */
	var generateAlphabeticName = function generateAlphabeticName(code) {
	  var name = '';
	  var x = void 0;

	  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
	    name = chars[x % charsLength] + name;
	  }

	  return chars[x % charsLength] + name;
	};

	// 

	var interleave = (function (strings, interpolations) {
	  return interpolations.reduce(function (array, interp, i) {
	    return array.concat(interp, strings[i + 1]);
	  }, [strings[0]]);
	});

	// 
	var css = (function (strings) {
	  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    interpolations[_key - 1] = arguments[_key];
	  }

	  return flatten(interleave(strings, interpolations));
	});

	// 
	var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;

	var extractCompsFromCSS = (function (maybeCSS) {
	  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
	  var existingComponents = [];
	  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
	    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
	    return match;
	  });
	  return existingComponents.map(function (_ref, i) {
	    var componentId = _ref.componentId,
	        matchIndex = _ref.matchIndex;

	    var nextComp = existingComponents[i + 1];
	    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
	    return { componentId: componentId, cssFromDOM: cssFromDOM };
	  });
	});

	// 
	/* eslint-disable camelcase, no-undef */

	var getNonce = (function () {
	  return typeof __webpack_nonce__ !== 'undefined' ? __webpack_nonce__ : null;
	});

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();







	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};



	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};









	var objectWithoutProperties = function (obj, keys) {
	  var target = {};

	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }

	  return target;
	};

	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};

	// 
	/* eslint-disable no-underscore-dangle */
	/*
	 * Browser Style Sheet with Rehydration
	 *
	 * <style data-styled-components="x y z"
	 *        data-styled-components-is-local="true">
	 *   /· sc-component-id: a ·/
	 *   .sc-a { ... }
	 *   .x { ... }
	 *   /· sc-component-id: b ·/
	 *   .sc-b { ... }
	 *   .y { ... }
	 *   .z { ... }
	 * </style>
	 *
	 * Note: replace · with * in the above snippet.
	 * */
	var DISABLE_SPEEDY = typeof false === 'boolean' && false || process.env.NODE_ENV !== 'production';

	var COMPONENTS_PER_TAG = 40;
	var SPEEDY_COMPONENTS_PER_TAG = 1000; // insertRule allows more injections before a perf slowdown

	// Source: https://github.com/threepointone/glamor/blob/master/src/sheet.js#L32-L43
	var sheetForTag = function sheetForTag(tag) {
	  if (tag.sheet) {
	    // $FlowFixMe
	    return tag.sheet;
	  }

	  for (var i = 0; i < document.styleSheets.length; i += 1) {
	    if (document.styleSheets[i].ownerNode === tag) {
	      // $FlowFixMe
	      return document.styleSheets[i];
	    }
	  }

	  // NOTE: This should never happen
	  throw new Error('');
	};

	// Safely (try/catch) injects rule at index and returns whether it was successful
	var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
	  if (cssRule === undefined || cssRule.length === 0) {
	    return false;
	  }

	  var maxIndex = sheet.cssRules.length;
	  var cappedIndex = index <= maxIndex ? index : maxIndex;

	  try {
	    sheet.insertRule(cssRule, cappedIndex);
	  } catch (err) {
	    // NOTE: An invalid rule here means it's not supported by the browser or obviously malformed
	    return false;
	  }

	  return true;
	};

	// Counts up the number of rules inside the array until a specific component entry is found
	// This is used to determine the necessary insertRule index
	var sizeUpToComponentIndex = function sizeUpToComponentIndex(componentSizes, componentIndex) {
	  var cssRulesSize = 0;
	  for (var i = 0; i <= componentIndex; i += 1) {
	    cssRulesSize += componentSizes[i];
	  }

	  return cssRulesSize;
	};

	var BaseBrowserTag = function () {
	  function BaseBrowserTag() {
	    classCallCheck(this, BaseBrowserTag);
	  }

	  BaseBrowserTag.prototype.toReactElement = function toReactElement() {
	    throw new Error(process.env.NODE_ENV !== 'production' ? "BrowserTag doesn't implement toReactElement!" : '');
	  };

	  BaseBrowserTag.prototype.clone = function clone() {
	    throw new Error(process.env.NODE_ENV !== 'production' ? 'BrowserTag cannot be cloned!' : '');
	  };

	  BaseBrowserTag.prototype.getComponentIds = function getComponentIds() {
	    return Object.keys(this.components);
	  };

	  return BaseBrowserTag;
	}();

	var BrowserTag = void 0;
	if (!DISABLE_SPEEDY) {
	  BrowserTag = function (_BaseBrowserTag) {
	    inherits(SpeedyBrowserTag, _BaseBrowserTag);

	    // Store component ruleSizes in an array per component (in order)


	    function SpeedyBrowserTag(el, isLocal, existingSource) {
	      classCallCheck(this, SpeedyBrowserTag);

	      var _this = possibleConstructorReturn(this, _BaseBrowserTag.call(this));

	      var nonce = getNonce();
	      if (nonce) {
	        el.setAttribute('nonce', nonce);
	      }

	      var extractedComps = extractCompsFromCSS(existingSource);

	      _this.el = el;
	      _this.isLocal = isLocal;
	      _this.ready = false;
	      _this.componentSizes = [];
	      _this.size = extractedComps.length;
	      _this.components = extractedComps.reduce(function (acc, obj) {
	        acc[obj.componentId] = obj; // eslint-disable-line no-param-reassign
	        return acc;
	      }, {});
	      return _this;
	    }

	    /* Because we care about source order, before we can inject anything we need to
	     * create a text node for each component and replace the existing CSS. */


	    SpeedyBrowserTag.prototype.replaceElement = function replaceElement() {
	      var _this2 = this;

	      // Build up our replacement style tag
	      var newEl = this.el.cloneNode(false);

	      if (!this.el.parentNode) {
	        throw new Error(process.env.NODE_ENV !== 'production' ? "Trying to replace an element that wasn't mounted!" : '');
	      }

	      // workaround for an IE/Edge bug: https://twitter.com/probablyup/status/958138927981977600
	      newEl.appendChild(document.createTextNode(''));

	      // $FlowFixMe
	      this.el.parentNode.replaceChild(newEl, this.el);
	      this.el = newEl;
	      this.ready = true;

	      // Retrieve the sheet for the new style tag
	      var sheet = sheetForTag(newEl);

	      Object.keys(this.components).forEach(function (componentId) {
	        var comp = _this2.components[componentId];
	        var cssFromDOM = comp.cssFromDOM;

	        var rules = stringifyRules([cssFromDOM]);
	        var rulesSize = rules.length;

	        var injectedRules = 0;
	        for (var j = 0; j < rulesSize; j += 1) {
	          if (safeInsertRule(sheet, rules[j], sheet.cssRules.length)) {
	            injectedRules += 1;
	          }
	        }

	        comp.componentIndex = _this2.componentSizes.length;
	        comp.css = rules.join(' ');
	        _this2.componentSizes.push(injectedRules);
	      });
	    };

	    SpeedyBrowserTag.prototype.isSealed = function isSealed() {
	      return this.size >= SPEEDY_COMPONENTS_PER_TAG;
	    };

	    SpeedyBrowserTag.prototype.addComponent = function addComponent(componentId) {
	      if (!this.ready) this.replaceElement();

	      if (process.env.NODE_ENV !== 'production' && this.components[componentId]) {
	        throw new Error('Trying to add Component \'' + componentId + '\' twice!');
	      }

	      this.components[componentId] = {
	        componentIndex: this.componentSizes.length,
	        css: ''
	      };

	      this.componentSizes.push(0);
	      this.size += 1;
	    };

	    SpeedyBrowserTag.prototype.inject = function inject(componentId, cssRules, name) {
	      if (!this.ready) this.replaceElement();

	      var comp = this.components[componentId];
	      if (process.env.NODE_ENV !== 'production' && !comp) {
	        throw new Error('Must add a new component before you can inject css into it');
	      }

	      var cssRulesSize = cssRules.length;
	      var sheet = sheetForTag(this.el);
	      var componentIndex = comp.componentIndex;

	      // Determine start index for injection

	      var insertIndex = sizeUpToComponentIndex(this.componentSizes, componentIndex);

	      // Inject each rule shifting index forward for each one (in-order injection)
	      var injectedRules = 0;
	      for (var i = 0; i < cssRulesSize; i += 1) {
	        var cssRule = cssRules[i];
	        if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
	          comp.css += ' ' + cssRule;
	          injectedRules += 1;
	        }
	      }

	      // Update number of rules for component
	      this.componentSizes[componentIndex] += injectedRules;

	      if (name !== undefined && name !== null) {
	        var existingNames = this.el.getAttribute(SC_ATTR);
	        this.el.setAttribute(SC_ATTR, existingNames ? existingNames + ' ' + name : name);
	      }
	    };

	    SpeedyBrowserTag.prototype.toRawCSS = function toRawCSS() {
	      return ''; // NOTE: Unsupported in production mode (SpeedyBrowserTag)
	    };

	    SpeedyBrowserTag.prototype.toHTML = function toHTML() {
	      return ''; // NOTE: Unsupported in production mode (SpeedyBrowserTag)
	    };

	    return SpeedyBrowserTag;
	  }(BaseBrowserTag);
	} else {
	  BrowserTag = function (_BaseBrowserTag2) {
	    inherits(TextNodeBrowserTag, _BaseBrowserTag2);

	    function TextNodeBrowserTag(el, isLocal) {
	      var existingSource = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	      classCallCheck(this, TextNodeBrowserTag);

	      var _this3 = possibleConstructorReturn(this, _BaseBrowserTag2.call(this));

	      var nonce = getNonce();
	      if (nonce !== null) {
	        el.setAttribute('nonce', nonce);
	      }

	      var extractedComps = extractCompsFromCSS(existingSource);

	      _this3.el = el;
	      _this3.isLocal = isLocal;
	      _this3.ready = false;
	      _this3.size = extractedComps.length;
	      _this3.components = extractedComps.reduce(function (acc, obj) {
	        acc[obj.componentId] = obj; // eslint-disable-line no-param-reassign
	        return acc;
	      }, {});
	      return _this3;
	    }

	    TextNodeBrowserTag.prototype.isSealed = function isSealed() {
	      return this.size >= COMPONENTS_PER_TAG;
	    };

	    TextNodeBrowserTag.prototype.addComponent = function addComponent(componentId) {
	      if (!this.ready) this.replaceElement();
	      if (process.env.NODE_ENV !== 'production' && this.components[componentId]) {
	        throw new Error('Trying to add Component \'' + componentId + '\' twice!');
	      }

	      var comp = { componentId: componentId, textNode: document.createTextNode('') };
	      this.el.appendChild(comp.textNode);
	      this.size += 1;
	      this.components[componentId] = comp;
	    };

	    TextNodeBrowserTag.prototype.inject = function inject(componentId, css, name) {
	      if (!this.ready) this.replaceElement();
	      var comp = this.components[componentId];

	      if (process.env.NODE_ENV !== 'production' && !comp) {
	        throw new Error('Must add a new component before you can inject css into it');
	      }

	      if (comp.textNode.data === '') {
	        comp.textNode.appendData('\n/* sc-component-id: ' + componentId + ' */\n');
	      }

	      comp.textNode.appendData(css.join(' '));

	      if (name !== undefined && name !== null) {
	        var existingNames = this.el.getAttribute(SC_ATTR);
	        this.el.setAttribute(SC_ATTR, existingNames ? existingNames + ' ' + name : name);
	      }
	    };

	    TextNodeBrowserTag.prototype.toHTML = function toHTML() {
	      return this.el.outerHTML;
	    };

	    TextNodeBrowserTag.prototype.toReactElement = function toReactElement() {
	      throw new Error(process.env.NODE_ENV !== 'production' ? "BrowserTag doesn't implement toReactElement!" : '');
	    };

	    TextNodeBrowserTag.prototype.clone = function clone() {
	      throw new Error(process.env.NODE_ENV !== 'production' ? 'BrowserTag cannot be cloned!' : '');
	    };

	    /* Because we care about source order, before we can inject anything we need to
	     * create a text node for each component and replace the existing CSS. */


	    TextNodeBrowserTag.prototype.replaceElement = function replaceElement() {
	      var _this4 = this;

	      this.ready = true;
	      // We have nothing to inject. Use the current el.
	      if (this.size === 0) return;

	      // Build up our replacement style tag
	      var newEl = this.el.cloneNode(false);
	      newEl.appendChild(document.createTextNode('\n'));

	      Object.keys(this.components).forEach(function (key) {
	        var comp = _this4.components[key];

	        // eslint-disable-next-line no-param-reassign
	        comp.textNode = document.createTextNode(comp.cssFromDOM);
	        newEl.appendChild(comp.textNode);
	      });

	      if (!this.el.parentNode) {
	        throw new Error(process.env.NODE_ENV !== 'production' ? "Trying to replace an element that wasn't mounted!" : '');
	      }

	      // The ol' switcheroo
	      this.el.parentNode.replaceChild(newEl, this.el);
	      this.el = newEl;
	    };

	    return TextNodeBrowserTag;
	  }(BaseBrowserTag);
	}

	/* Factory function to separate DOM operations from logical ones*/
	var BrowserStyleSheet = {
	  create: function create() {
	    var tags = [];
	    var names = {};

	    /* Construct existing state from DOM */
	    var nodes = document.querySelectorAll('[' + SC_ATTR + ']');
	    var nodesLength = nodes.length;

	    for (var i = 0; i < nodesLength; i += 1) {
	      // $FlowFixMe: We can trust that all elements in this query are style elements
	      var el = nodes[i];
	      var attr = el.getAttribute(SC_ATTR);

	      if (attr) {
	        attr.trim().split(/\s+/).forEach(function (name) {
	          names[name] = true;
	        });
	      }

	      tags.push(new BrowserTag(el, el.getAttribute(LOCAL_ATTR) === 'true', el.innerHTML));
	    }

	    /* Factory for making more tags */
	    var tagConstructor = function tagConstructor(isLocal) {
	      var el = document.createElement('style');
	      el.type = 'text/css';
	      el.setAttribute(SC_ATTR, '');
	      el.setAttribute(LOCAL_ATTR, isLocal ? 'true' : 'false');
	      if (!document.head) {
	        throw new Error(process.env.NODE_ENV !== 'production' ? 'Missing document <head>' : '');
	      }
	      document.head.appendChild(el);
	      return new BrowserTag(el, isLocal);
	    };

	    return new StyleSheet(tagConstructor, tags, names);
	  }
	};

	// 
	var SC_ATTR = 'data-styled-components';
	var LOCAL_ATTR = 'data-styled-components-is-local';
	var CONTEXT_KEY = '__styled-components-stylesheet__';

	/* eslint-disable flowtype/object-type-delimiter */
	/* eslint-enable flowtype/object-type-delimiter */

	var instance = null;
	// eslint-disable-next-line no-use-before-define
	var clones = [];

	var IS_BROWSER = typeof document !== 'undefined';

	var StyleSheet = function () {
	  function StyleSheet(tagConstructor) {
	    var tags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	    var names = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    classCallCheck(this, StyleSheet);
	    this.hashes = {};
	    this.deferredInjections = {};
	    this.stylesCacheable = IS_BROWSER;

	    this.tagConstructor = tagConstructor;
	    this.tags = tags;
	    this.names = names;
	    this.constructComponentTagMap();
	  }

	  // helper for `ComponentStyle` to know when it cache static styles.
	  // staticly styled-component can not safely cache styles on the server
	  // without all `ComponentStyle` instances saving a reference to the
	  // the styleSheet instance they last rendered with,
	  // or listening to creation / reset events. otherwise you might create
	  // a component with one stylesheet and render it another api response
	  // with another, losing styles on from your server-side render.


	  StyleSheet.prototype.constructComponentTagMap = function constructComponentTagMap() {
	    var _this = this;

	    this.componentTags = {};

	    this.tags.forEach(function (tag) {
	      tag.getComponentIds().forEach(function (componentId) {
	        _this.componentTags[componentId] = tag;
	      });
	    });
	  };

	  /* Best level of caching—get the name from the hash straight away. */


	  StyleSheet.prototype.getName = function getName(hash) {
	    return this.hashes[hash.toString()];
	  };

	  /* Second level of caching—if the name is already in the dom, don't
	   * inject anything and record the hash for getName next time. */


	  StyleSheet.prototype.alreadyInjected = function alreadyInjected(hash, name) {
	    if (!this.names[name]) return false;

	    this.hashes[hash.toString()] = name;
	    return true;
	  };

	  /* Third type of caching—don't inject components' componentId twice. */


	  StyleSheet.prototype.hasInjectedComponent = function hasInjectedComponent(componentId) {
	    return !!this.componentTags[componentId];
	  };

	  StyleSheet.prototype.deferredInject = function deferredInject(componentId, isLocal, css) {
	    if (this === instance) {
	      clones.forEach(function (clone) {
	        clone.deferredInject(componentId, isLocal, css);
	      });
	    }

	    this.getOrCreateTag(componentId, isLocal);
	    this.deferredInjections[componentId] = css;
	  };

	  StyleSheet.prototype.inject = function inject(componentId, isLocal, css, hash, name) {
	    if (this === instance) {
	      clones.forEach(function (clone) {
	        clone.inject(componentId, isLocal, css);
	      });
	    }

	    var tag = this.getOrCreateTag(componentId, isLocal);

	    var deferredInjection = this.deferredInjections[componentId];
	    if (deferredInjection) {
	      tag.inject(componentId, deferredInjection);
	      delete this.deferredInjections[componentId];
	    }

	    tag.inject(componentId, css, name);

	    if (hash && name) {
	      this.hashes[hash.toString()] = name;
	    }
	  };

	  StyleSheet.prototype.toHTML = function toHTML() {
	    return this.tags.map(function (tag) {
	      return tag.toHTML();
	    }).join('');
	  };

	  StyleSheet.prototype.toReactElements = function toReactElements() {
	    return this.tags.map(function (tag, i) {
	      return tag.toReactElement('sc-' + i);
	    });
	  };

	  StyleSheet.prototype.getOrCreateTag = function getOrCreateTag(componentId, isLocal) {
	    var existingTag = this.componentTags[componentId];
	    if (existingTag) {
	      return existingTag;
	    }

	    var lastTag = this.tags[this.tags.length - 1];
	    var componentTag = !lastTag || lastTag.isSealed() || lastTag.isLocal !== isLocal ? this.createNewTag(isLocal) : lastTag;
	    this.componentTags[componentId] = componentTag;
	    componentTag.addComponent(componentId);
	    return componentTag;
	  };

	  StyleSheet.prototype.createNewTag = function createNewTag(isLocal) {
	    var newTag = this.tagConstructor(isLocal);
	    this.tags.push(newTag);
	    return newTag;
	  };

	  StyleSheet.reset = function reset(isServer) {
	    instance = StyleSheet.create(isServer);
	  };

	  /* We can make isServer totally implicit once Jest 20 drops and we
	   * can change environment on a per-test basis. */


	  StyleSheet.create = function create() {
	    var isServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !IS_BROWSER;

	    return (isServer ? ServerStyleSheet : BrowserStyleSheet).create();
	  };

	  StyleSheet.clone = function clone(oldSheet) {
	    var newSheet = new StyleSheet(oldSheet.tagConstructor, oldSheet.tags.map(function (tag) {
	      return tag.clone();
	    }), _extends({}, oldSheet.names));

	    newSheet.hashes = _extends({}, oldSheet.hashes);
	    newSheet.deferredInjections = _extends({}, oldSheet.deferredInjections);
	    clones.push(newSheet);

	    return newSheet;
	  };

	  createClass(StyleSheet, null, [{
	    key: 'instance',
	    get: function get$$1() {
	      return instance || (instance = StyleSheet.create());
	    }
	  }]);
	  return StyleSheet;
	}();

	var _StyleSheetManager$ch;

	// 
	var StyleSheetManager = function (_Component) {
	  inherits(StyleSheetManager, _Component);

	  function StyleSheetManager() {
	    classCallCheck(this, StyleSheetManager);
	    return possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  StyleSheetManager.prototype.getChildContext = function getChildContext() {
	    var _ref;

	    return _ref = {}, _ref[CONTEXT_KEY] = this.props.sheet, _ref;
	  };

	  StyleSheetManager.prototype.render = function render() {
	    /* eslint-disable react/prop-types */
	    // Flow v0.43.1 will report an error accessing the `children` property,
	    // but v0.47.0 will not. It is necessary to use a type cast instead of
	    // a "fixme" comment to satisfy both Flow versions.
	    return React__default.Children.only(this.props.children);
	  };

	  return StyleSheetManager;
	}(React.Component);

	StyleSheetManager.childContextTypes = (_StyleSheetManager$ch = {}, _StyleSheetManager$ch[CONTEXT_KEY] = PropTypes.oneOfType([PropTypes.instanceOf(StyleSheet), PropTypes.instanceOf(ServerStyleSheet)]).isRequired, _StyleSheetManager$ch);

	process.env.NODE_ENV !== "production" ? StyleSheetManager.propTypes = {
	  sheet: PropTypes.oneOfType([PropTypes.instanceOf(StyleSheet), PropTypes.instanceOf(ServerStyleSheet)]).isRequired
	} : void 0;

	// 
	/* eslint-disable no-underscore-dangle */
	var ServerTag = function () {
	  function ServerTag(isLocal) {
	    classCallCheck(this, ServerTag);

	    this.emitted = false;
	    this.isLocal = isLocal;
	    this.isProduction = process.env.NODE_ENV === 'production';
	    this.components = {};
	    this.size = 0;
	    this.names = [];
	  }

	  ServerTag.prototype.isSealed = function isSealed() {
	    return this.emitted;
	  };

	  ServerTag.prototype.getComponentIds = function getComponentIds() {
	    return Object.keys(this.components);
	  };

	  ServerTag.prototype.addComponent = function addComponent(componentId) {
	    if (this.components[componentId]) {
	      throw new Error(process.env.NODE_ENV !== 'production' ? 'Trying to add Component \'' + componentId + '\' twice!' : '');
	    }
	    this.components[componentId] = { componentId: componentId, css: '' };
	    this.size += 1;
	  };

	  ServerTag.prototype.concatenateCSS = function concatenateCSS() {
	    var _this = this;

	    return Object.keys(this.components).reduce(function (styles, k) {
	      return styles + _this.components[k].css;
	    }, '');
	  };

	  ServerTag.prototype.inject = function inject(componentId, css, name) {
	    var comp = this.components[componentId];

	    if (!comp) {
	      throw new Error(process.env.NODE_ENV !== 'production' ? 'Must add a new component before you can inject css into it' : '');
	    }

	    if (comp.css === '') {
	      comp.css = '/* sc-component-id: ' + componentId + ' */\n';
	    }

	    var cssRulesSize = css.length;
	    for (var i = 0; i < cssRulesSize; i += 1) {
	      var cssRule = css[i];
	      comp.css += (cssRule + '\n').replace(/\n*$/, '\n');
	    }

	    if (name) this.names.push(name);
	  };

	  ServerTag.prototype.toHTML = function toHTML() {
	    var attrs = ['type="text/css"', SC_ATTR + '="' + this.names.join(' ') + '"', LOCAL_ATTR + '="' + (this.isLocal ? 'true' : 'false') + '"'];

	    var nonce = getNonce();
	    if (nonce) {
	      attrs.push('nonce="' + nonce + '"');
	    }

	    this.emitted = true;
	    return '<style ' + attrs.join(' ') + '>' + this.concatenateCSS() + '</style>';
	  };

	  ServerTag.prototype.toReactElement = function toReactElement(key) {
	    var _attrs;

	    var attrs = (_attrs = {}, _attrs[SC_ATTR] = this.names.join(' '), _attrs[LOCAL_ATTR] = this.isLocal.toString(), _attrs);

	    var nonce = getNonce();
	    if (nonce) {
	      attrs.nonce = nonce;
	    }

	    this.emitted = true;

	    return React__default.createElement('style', _extends({
	      key: key,
	      type: 'text/css'
	    }, attrs, {
	      dangerouslySetInnerHTML: { __html: this.concatenateCSS() }
	    }));
	  };

	  ServerTag.prototype.clone = function clone() {
	    var _this2 = this;

	    var copy = new ServerTag(this.isLocal);
	    copy.names = [].concat(this.names);
	    copy.size = this.size;
	    copy.components = Object.keys(this.components).reduce(function (acc, key) {
	      acc[key] = _extends({}, _this2.components[key]); // eslint-disable-line no-param-reassign
	      return acc;
	    }, {});

	    return copy;
	  };

	  return ServerTag;
	}();

	var ServerStyleSheet = function () {
	  function ServerStyleSheet() {
	    classCallCheck(this, ServerStyleSheet);

	    this.instance = StyleSheet.clone(StyleSheet.instance);
	    this.isStreaming = false;
	  }

	  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
	    if (this.closed) {
	      throw new Error(process.env.NODE_ENV !== 'production' ? "Can't collect styles once you've called getStyleTags!" : '');
	    }
	    return React__default.createElement(
	      StyleSheetManager,
	      { sheet: this.instance },
	      children
	    );
	  };

	  ServerStyleSheet.prototype.close = function close() {
	    clones.splice(clones.indexOf(this.instance), 1);
	    this.closed = true;
	  };

	  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
	    if (!this.closed) {
	      this.close();
	    }

	    return this.instance.toHTML();
	  };

	  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
	    if (!this.closed) {
	      this.close();
	    }

	    return this.instance.toReactElements();
	  };

	  ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
	    {
	      throw new Error(process.env.NODE_ENV !== 'production' ? 'streaming only works in Node.js, please do not try to call this method in the browser' : '');
	    }
	  };

	  ServerStyleSheet.create = function create() {
	    return new StyleSheet(function (isLocal) {
	      return new ServerTag(isLocal);
	    });
	  };

	  return ServerStyleSheet;
	}();

	// 

	var LIMIT = 200;

	var createWarnTooManyClasses = (function (displayName) {
	  var generatedClasses = {};
	  var warningSeen = false;

	  return function (className) {
	    if (!warningSeen) {
	      generatedClasses[className] = true;
	      if (Object.keys(generatedClasses).length >= LIMIT) {
	        // Unable to find latestRule in test environment.
	        /* eslint-disable no-console, prefer-template */
	        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs({\n' + '    style: ({ background }) => ({\n' + '      background,\n' + '    }),\n' + '  })`width: 100%;`\n\n' + '  <Component />');
	        warningSeen = true;
	        generatedClasses = {};
	      }
	    }
	  };
	});

	// 
	/* eslint-disable max-len */
	/**
	 * Trying to avoid the unknown-prop errors on styled components by filtering by
	 * React's attribute whitelist.
	 *
	 * To regenerate this regex:
	 *
	 * 1. `npm i -g regexgen` (https://github.com/devongovett/regexgen)
	 * 2. Run `regexgen` with the list of space-separated words below as input
	 * 3. Surround the emitted regex with this: `/^(GENERATED_REGEX)$/` -- this will ensure a full string match
	 *    and no false positives from partials
	 **/
	/*
	children dangerouslySetInnerHTML key ref autoFocus defaultValue valueLink defaultChecked checkedLink innerHTML suppressContentEditableWarning onFocusIn onFocusOut className onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onReset onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onAnimationStart onAnimationEnd onAnimationIteration onTransitionEnd onCopyCapture onCutCapture onPasteCapture onCompositionEndCapture onCompositionStartCapture onCompositionUpdateCapture onKeyDownCapture onKeyPressCapture onKeyUpCapture onFocusCapture onBlurCapture onChangeCapture onInputCapture onSubmitCapture onResetCapture onClickCapture onContextMenuCapture onDoubleClickCapture onDragCapture onDragEndCapture onDragEnterCapture onDragExitCapture onDragLeaveCapture onDragOverCapture onDragStartCapture onDropCapture onMouseDownCapture onMouseEnterCapture onMouseLeaveCapture onMouseMoveCapture onMouseOutCapture onMouseOverCapture onMouseUpCapture onSelectCapture onTouchCancelCapture onTouchEndCapture onTouchMoveCapture onTouchStartCapture onScrollCapture onWheelCapture onAbortCapture onCanPlayCapture onCanPlayThroughCapture onDurationChangeCapture onEmptiedCapture onEncryptedCapture onEndedCapture onErrorCapture onLoadedDataCapture onLoadedMetadataCapture onLoadStartCapture onPauseCapture onPlayCapture onPlayingCapture onProgressCapture onRateChangeCapture onSeekedCapture onSeekingCapture onStalledCapture onSuspendCapture onTimeUpdateCapture onVolumeChangeCapture onWaitingCapture onLoadCapture onAnimationStartCapture onAnimationEndCapture onAnimationIterationCapture onTransitionEndCapture accept acceptCharset accessKey action allowFullScreen allowTransparency alt as async autoComplete autoPlay capture cellPadding cellSpacing charSet challenge checked cite classID className cols colSpan content contentEditable contextMenu controls coords crossOrigin data dateTime default defer dir disabled download draggable encType form formAction formEncType formMethod formNoValidate formTarget frameBorder headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media mediaGroup method min minLength multiple muted name nonce noValidate open optimum pattern placeholder playsInline poster preload profile radioGroup readOnly referrerPolicy rel required reversed role rows rowSpan sandbox scope scoped scrolling seamless selected shape size sizes span spellCheck src srcDoc srcLang srcSet start step style summary tabIndex target title type useMap value width wmode wrap about datatype inlist prefix property resource typeof vocab autoCapitalize autoCorrect autoSave color itemProp itemScope itemType itemID itemRef results security unselectable accentHeight accumulate additive alignmentBaseline allowReorder alphabetic amplitude arabicForm ascent attributeName attributeType autoReverse azimuth baseFrequency baseProfile baselineShift bbox begin bias by calcMode capHeight clip clipPath clipRule clipPathUnits colorInterpolation colorInterpolationFilters colorProfile colorRendering contentScriptType contentStyleType cursor cx cy d decelerate descent diffuseConstant direction display divisor dominantBaseline dur dx dy edgeMode elevation enableBackground end exponent externalResourcesRequired fill fillOpacity fillRule filter filterRes filterUnits floodColor floodOpacity focusable fontFamily fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontWeight format from fx fy g1 g2 glyphName glyphOrientationHorizontal glyphOrientationVertical glyphRef gradientTransform gradientUnits hanging horizAdvX horizOriginX ideographic imageRendering in in2 intercept k k1 k2 k3 k4 kernelMatrix kernelUnitLength kerning keyPoints keySplines keyTimes lengthAdjust letterSpacing lightingColor limitingConeAngle local markerEnd markerMid markerStart markerHeight markerUnits markerWidth mask maskContentUnits maskUnits mathematical mode numOctaves offset opacity operator order orient orientation origin overflow overlinePosition overlineThickness paintOrder panose1 pathLength patternContentUnits patternTransform patternUnits pointerEvents points pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits r radius refX refY renderingIntent repeatCount repeatDur requiredExtensions requiredFeatures restart result rotate rx ry scale seed shapeRendering slope spacing specularConstant specularExponent speed spreadMethod startOffset stdDeviation stemh stemv stitchTiles stopColor stopOpacity strikethroughPosition strikethroughThickness string stroke strokeDasharray strokeDashoffset strokeLinecap strokeLinejoin strokeMiterlimit strokeOpacity strokeWidth surfaceScale systemLanguage tableValues targetX targetY textAnchor textDecoration textRendering textLength to transform u1 u2 underlinePosition underlineThickness unicode unicodeBidi unicodeRange unitsPerEm vAlphabetic vHanging vIdeographic vMathematical values vectorEffect version vertAdvY vertOriginX vertOriginY viewBox viewTarget visibility widths wordSpacing writingMode x xHeight x1 x2 xChannelSelector xlinkActuate xlinkArcrole xlinkHref xlinkRole xlinkShow xlinkTitle xlinkType xmlBase xmlns xmlnsXlink xmlLang xmlSpace y y1 y2 yChannelSelector z zoomAndPan
	*/
	/* eslint-enable max-len */

	var ATTRIBUTE_REGEX = /^((?:s(?:uppressContentEditableWarn|croll|pac)|(?:shape|image|text)Render|(?:letter|word)Spac|vHang|hang)ing|(?:on(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:Animation|Touch|Load|Drag)Start|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|TimeUpdate|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|MouseDown|P(?:rogress|laying)|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|KeyPress|DragEnd|Key(?:Down|Up)|(?:Wait|Seek)ing|(?:MouseU|Dro)p|Scroll|Paste|Focus|Abort|Drag|Play|Load|Blur)Captur|alignmentBaselin|(?:limitingConeAng|xlink(?:(?:Arcr|R)o|Tit)|s(?:urfaceSca|ty|ca)|unselectab|baseProfi|fontSty|(?:focus|dragg)ab|multip|profi|tit)l|d(?:ominantBaselin|efaultValu)|a(?:uto(?:Capitaliz|Revers|Sav)|dditiv)|(?:(?:formNoValid|xlinkActu|noValid|accumul|rot)a|autoComple|decelera)t|(?:(?:attribute|item)T|datat)yp|(?:attribute|glyph)Nam|playsInlin|(?:formE|e)ncTyp|(?:writing|input|edge)Mod|(?:xlinkTy|itemSco|keyTy|slo)p|(?:amplitu|mo)d|(?:xmlSpa|non)c|fillRul|(?:dateTi|na)m|r(?:esourc|ol)|xmlBas|wmod)e|(?:glyphOrientationHorizont|loc)al|(?:externalResourcesRequir|select|revers|mut)ed|c(?:o(?:lorInterpolationFilter|ntrol|ord)s|o(?:lor(?:Interpolation)?|ntent)|(?:ontentS(?:cript|tyle)Typ|o(?:ntentEditab|lorProfi)l|l(?:assNam|ipRul)|a(?:lcMod|ptur)|it)e|olorRendering|l(?:ipPathUnits|assID)|o(?:ntextMenu|ls)|h(?:eckedLink|a(?:llenge|rSet)|ildren|ecked)|ell(?:Spac|Padd)ing|(?:rossOrigi|olSpa)n|apHeight|lip(?:Path)?|ursor|[xy])|glyphOrientationVertical|d(?:angerouslySetInnerHTML|efaultChecked|ownload|isabled|isplay|[xy])|(?:s(?:trikethroughThickn|eaml)es|(?:und|ov)erlineThicknes|r(?:equiredExtension|adiu)|(?:requiredFeatur|tableValu|stitchTil|numOctav|filterR)e|key(?:(?:Splin|Tim)e|Param)|autoFocu|header|bia)s|(?:(?:st(?:rikethroughPosi|dDevia)|(?:und|ov)erlinePosi|(?:textDecor|elev)a|orienta)tio|(?:strokeLinejo|orig)i|formActio|zoomAndPa|onFocusI|directio|(?:vers|act)io|rowSpa|begi|ico)n|o(?:n(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:Animation|Touch|Load|Drag)Start|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|TimeUpdate|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|MouseDown|P(?:rogress|laying)|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|KeyPress|DragEnd|Key(?:Down|Up)|(?:Wait|Seek)ing|(?:MouseU|Dro)p|Scroll|Paste|Focus|Abort|Drag|Play|Load|Blur)|rient)|p(?:reserveA(?:spectRatio|lpha)|ointsAt[X-Z]|anose1)|(?:patternContent|ma(?:sk(?:Content)?|rker)|primitive|gradient|pattern|filter)Units|(?:gradientT|patternT|t)ransform|(?:(?:allowTranspar|baseFrequ)enc|re(?:ferrerPolic|adOnl)|(?:(?:st(?:roke|op)O|floodO|fillO|o)pac|integr|secur)it|visibilit|fontFamil|accessKe|propert|summar)y|(?:strokeMiterlimi|(?:specularConsta|repeatCou|fontVaria)n|(?:(?:specularE|e)xpon|renderingInt|asc)en|d(?:iffuseConsta|esce)n|(?:fontSizeAdju|lengthAdju|manife)s|baselineShif|vectorEffec|(?:(?:mar(?:ker|gin)|x)H|accentH|fontW)eigh|a(?:utoCorrec|bou)|markerStar|onFocusOu|in(?:tercep|lis)|restar|forma|heigh|lis)t|(?:(?:st(?:rokeDasho|artO)|o)ffs|acceptChars|formTarg|viewTarg|srcS)et|(?:(?:enableBackgrou|markerE)n|s(?:p(?:readMetho|ee)|ee)|formMetho|m(?:arkerMi|etho)|preloa|kin)d|k(?:ernel(?:UnitLength|Matrix)|[1-4])|(?:[xy]ChannelSelect|lightingCol|textAnch|floodCol|stopCol|operat|htmlF)or|(?:allowFullScre|hidd)en|strokeDasharray|systemLanguage|(?:strokeLineca|itemPro|useMa|wra|loo)p|v(?:Mathematical|ert(?:Origin[XY]|AdvY)|alues|ocab)|(?:pointerEve|keyPoi)nts|unicodeRange|(?:(?:allowReord|placehold|frameBord|paintOrd|post|ord)e|repeatDu|d(?:efe|u))r|mathematical|(?:vI|i)deographic|h(?:oriz(?:Origin|Adv)X|ttpEquiv)|u(?:nicodeBidi|[12])|(?:fontStretc|hig)h|(?:(?:mar(?:ker|gin)W|strokeW)id|azimu)th|vAlphabetic|mediaGroup|spellCheck|(?:unitsPerE|optimu|fro)m|r(?:adioGroup|e(?:sults|f[XY]|l)|ows|[xy])|(?:xmlnsXl|valueL)ink|a(?:rabicForm|l(?:phabetic|t)|sync)|pathLength|(?:text|m(?:in|ax))Length|innerHTML|xlinkShow|(?:xlinkHr|glyphR)ef|r(?:e(?:quired|sult|f))?|o(?:verflow|pen)|(?:tabInde|(?:sand|b)bo|viewBo)x|(?:(?:href|xml|src)La|kerni)ng|f(?:o(?:ntSize|rm)|il(?:ter|l))|autoPlay|unicode|p(?:attern|oints)|t(?:arget[XY]|o)|i(?:temRef|n2|s)|divisor|d(?:efault|ata|ir)?|srcDoc|s(?:coped|te(?:m[hv]|p)|pan)|(?:width|size)s|(?:stri|la)ng|prefix|itemID|s(?:t(?:roke|art)|hape|cope|rc)|a(?:ccept|s)|t(?:arget|ype)|typeof|width|value|x(?:mlns)?|label|m(?:edia|a(?:sk|x)|in)|size|href|k(?:ey)?|end|low|x[12]|i[dn]|y[12]|g[12]|by|f[xy]|[yz])$/;

	/* From DOMProperty */
	var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
	var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
	var isCustomAttribute = RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));

	var validAttr = (function (name) {
	  return ATTRIBUTE_REGEX.test(name) || isCustomAttribute(name.toLowerCase());
	});

	// 

	function isTag(target) /* : %checks */{
	  return typeof target === 'string';
	}

	// 

	/* eslint-disable no-undef */
	function getComponentName(target) {
	  return target.displayName || target.name || 'Component';
	}

	// 

	var determineTheme = (function (props, fallbackTheme, defaultProps) {
	  // Props should take precedence over ThemeProvider, which should take precedence over
	  // defaultProps, but React automatically puts defaultProps on props.

	  /* eslint-disable react/prop-types */
	  var isDefaultTheme = defaultProps && props.theme === defaultProps.theme;
	  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme;
	  /* eslint-enable */

	  return theme;
	});

	// 
	var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
	var dashesAtEnds = /(^-|-$)/g;

	/**
	 * TODO: Explore using CSS.escape when it becomes more available
	 * in evergreen browsers.
	 */
	function escape(str) {
	  return str
	  // Replace all possible CSS selectors
	  .replace(escapeRegex, '-')

	  // Remove extraneous hyphens at the start and end
	  .replace(dashesAtEnds, '');
	}

	// 
	/**
	 * Creates a broadcast that can be listened to, i.e. simple event emitter
	 *
	 * @see https://github.com/ReactTraining/react-broadcast
	 */

	var createBroadcast = function createBroadcast(initialState) {
	  var listeners = {};
	  var id = 0;
	  var state = initialState;

	  function publish(nextState) {
	    state = nextState;

	    // eslint-disable-next-line guard-for-in, no-restricted-syntax
	    for (var key in listeners) {
	      var listener = listeners[key];
	      if (listener === undefined) {
	        // eslint-disable-next-line no-continue
	        continue;
	      }

	      listener(state);
	    }
	  }

	  function subscribe(listener) {
	    var currentId = id;
	    listeners[currentId] = listener;
	    id += 1;
	    listener(state);
	    return currentId;
	  }

	  function unsubscribe(unsubID) {
	    listeners[unsubID] = undefined;
	  }

	  return { publish: publish, subscribe: subscribe, unsubscribe: unsubscribe };
	};

	// 
	// Helper to call a given function, only once
	var once = (function (cb) {
	  var called = false;

	  return function () {
	    if (!called) {
	      called = true;
	      cb();
	    }
	  };
	});

	var _ThemeProvider$childC;
	var _ThemeProvider$contex;

	// 
	/* globals React$Element */
	// NOTE: DO NOT CHANGE, changing this is a semver major change!
	var CHANNEL = '__styled-components__';
	var CHANNEL_NEXT = CHANNEL + 'next__';

	var CONTEXT_CHANNEL_SHAPE = PropTypes.shape({
	  getTheme: PropTypes.func,
	  subscribe: PropTypes.func,
	  unsubscribe: PropTypes.func
	});

	var warnChannelDeprecated = void 0;
	if (process.env.NODE_ENV !== 'production') {
	  warnChannelDeprecated = once(function () {
	    // eslint-disable-next-line no-console
	    console.error('Warning: Usage of `context.' + CHANNEL + '` as a function is deprecated. It will be replaced with the object on `.context.' + CHANNEL_NEXT + '` in a future version.');
	  });
	}

	var isFunction = function isFunction(test) {
	  return typeof test === 'function';
	};

	/**
	 * Provide a theme to an entire react component tree via context and event listeners (have to do
	 * both context and event emitter as pure components block context updates)
	 */

	var ThemeProvider = function (_Component) {
	  inherits(ThemeProvider, _Component);

	  function ThemeProvider() {
	    classCallCheck(this, ThemeProvider);

	    var _this = possibleConstructorReturn(this, _Component.call(this));

	    _this.unsubscribeToOuterId = -1;

	    _this.getTheme = _this.getTheme.bind(_this);
	    return _this;
	  }

	  ThemeProvider.prototype.componentWillMount = function componentWillMount() {
	    var _this2 = this;

	    // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
	    // with the outer theme
	    var outerContext = this.context[CHANNEL_NEXT];
	    if (outerContext !== undefined) {
	      this.unsubscribeToOuterId = outerContext.subscribe(function (theme) {
	        _this2.outerTheme = theme;

	        if (_this2.broadcast !== undefined) {
	          _this2.publish(_this2.props.theme);
	        }
	      });
	    }

	    this.broadcast = createBroadcast(this.getTheme());
	  };

	  ThemeProvider.prototype.getChildContext = function getChildContext() {
	    var _this3 = this,
	        _babelHelpers$extends;

	    return _extends({}, this.context, (_babelHelpers$extends = {}, _babelHelpers$extends[CHANNEL_NEXT] = {
	      getTheme: this.getTheme,
	      subscribe: this.broadcast.subscribe,
	      unsubscribe: this.broadcast.unsubscribe
	    }, _babelHelpers$extends[CHANNEL] = function (subscriber) {
	      if (process.env.NODE_ENV !== 'production') {
	        warnChannelDeprecated();
	      }

	      // Patch the old `subscribe` provide via `CHANNEL` for older clients.
	      var unsubscribeId = _this3.broadcast.subscribe(subscriber);
	      return function () {
	        return _this3.broadcast.unsubscribe(unsubscribeId);
	      };
	    }, _babelHelpers$extends));
	  };

	  ThemeProvider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (this.props.theme !== nextProps.theme) {
	      this.publish(nextProps.theme);
	    }
	  };

	  ThemeProvider.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.unsubscribeToOuterId !== -1) {
	      this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeToOuterId);
	    }
	  };

	  // Get the theme from the props, supporting both (outerTheme) => {} as well as object notation


	  ThemeProvider.prototype.getTheme = function getTheme(passedTheme) {
	    var theme = passedTheme || this.props.theme;
	    if (isFunction(theme)) {
	      var mergedTheme = theme(this.outerTheme);
	      if (process.env.NODE_ENV !== 'production' && !isPlainObject(mergedTheme)) {
	        throw new Error(process.env.NODE_ENV !== 'production' ? '[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!' : '');
	      }
	      return mergedTheme;
	    }
	    if (!isPlainObject(theme)) {
	      throw new Error(process.env.NODE_ENV !== 'production' ? '[ThemeProvider] Please make your theme prop a plain object' : '');
	    }
	    return _extends({}, this.outerTheme, theme);
	  };

	  ThemeProvider.prototype.publish = function publish(theme) {
	    this.broadcast.publish(this.getTheme(theme));
	  };

	  ThemeProvider.prototype.render = function render() {
	    if (!this.props.children) {
	      return null;
	    }
	    return React__default.Children.only(this.props.children);
	  };

	  return ThemeProvider;
	}(React.Component);

	ThemeProvider.childContextTypes = (_ThemeProvider$childC = {}, _ThemeProvider$childC[CHANNEL] = PropTypes.func, _ThemeProvider$childC[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$childC);
	ThemeProvider.contextTypes = (_ThemeProvider$contex = {}, _ThemeProvider$contex[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$contex);

	// 

	// HACK for generating all static styles without needing to allocate
	// an empty execution context every single time...
	var STATIC_EXECUTION_CONTEXT = {};

	var _StyledComponent = (function (ComponentStyle, constructWithOptions) {
	  var identifiers = {};

	  /* We depend on components having unique IDs */
	  var generateId = function generateId(_displayName, parentComponentId) {
	    var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);

	    var componentId = void 0;

	    /**
	     * only fall back to hashing the component injection order if
	     * a proper displayName isn't provided by the babel plugin
	     */
	    if (!_displayName) {
	      var nr = (identifiers[displayName] || 0) + 1;
	      identifiers[displayName] = nr;

	      componentId = displayName + '-' + ComponentStyle.generateName(displayName + nr);
	    } else {
	      componentId = displayName + '-' + ComponentStyle.generateName(displayName);
	    }

	    return parentComponentId !== undefined ? parentComponentId + '-' + componentId : componentId;
	  };

	  var BaseStyledComponent = function (_Component) {
	    inherits(BaseStyledComponent, _Component);

	    function BaseStyledComponent() {
	      var _temp, _this, _ret;

	      classCallCheck(this, BaseStyledComponent);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.attrs = {}, _this.state = {
	        theme: null,
	        generatedClassName: ''
	      }, _this.unsubscribeId = -1, _temp), possibleConstructorReturn(_this, _ret);
	    }

	    BaseStyledComponent.prototype.unsubscribeFromContext = function unsubscribeFromContext() {
	      if (this.unsubscribeId !== -1) {
	        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
	      }
	    };

	    BaseStyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props) {
	      var attrs = this.constructor.attrs;

	      var context = _extends({}, props, { theme: theme });
	      if (attrs === undefined) {
	        return context;
	      }

	      this.attrs = Object.keys(attrs).reduce(function (acc, key) {
	        var attr = attrs[key];
	        // eslint-disable-next-line no-param-reassign
	        acc[key] = typeof attr === 'function' ? attr(context) : attr;
	        return acc;
	      }, {});

	      return _extends({}, context, this.attrs);
	    };

	    BaseStyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
	      var _constructor = this.constructor,
	          attrs = _constructor.attrs,
	          componentStyle = _constructor.componentStyle,
	          warnTooManyClasses = _constructor.warnTooManyClasses;

	      var styleSheet = this.context[CONTEXT_KEY] || StyleSheet.instance;

	      // staticaly styled-components don't need to build an execution context object,
	      // and shouldn't be increasing the number of class names
	      if (componentStyle.isStatic && attrs === undefined) {
	        return componentStyle.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, styleSheet);
	      } else {
	        var executionContext = this.buildExecutionContext(theme, props);
	        var className = componentStyle.generateAndInjectStyles(executionContext, styleSheet);

	        if (process.env.NODE_ENV !== 'production' && warnTooManyClasses !== undefined) {
	          warnTooManyClasses(className);
	        }

	        return className;
	      }
	    };

	    BaseStyledComponent.prototype.componentWillMount = function componentWillMount() {
	      var _this2 = this;

	      var componentStyle = this.constructor.componentStyle;

	      var styledContext = this.context[CHANNEL_NEXT];

	      // If this is a staticaly-styled component, we don't need to the theme
	      // to generate or build styles.
	      if (componentStyle.isStatic) {
	        var generatedClassName = this.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, this.props);
	        this.setState({ generatedClassName: generatedClassName });
	        // If there is a theme in the context, subscribe to the event emitter. This
	        // is necessary due to pure components blocking context updates, this circumvents
	        // that by updating when an event is emitted
	      } else if (styledContext !== undefined) {
	        var subscribe = styledContext.subscribe;

	        this.unsubscribeId = subscribe(function (nextTheme) {
	          // This will be called once immediately
	          var theme = determineTheme(_this2.props, nextTheme, _this2.constructor.defaultProps);
	          var generatedClassName = _this2.generateAndInjectStyles(theme, _this2.props);

	          _this2.setState({ theme: theme, generatedClassName: generatedClassName });
	        });
	      } else {
	        // eslint-disable-next-line react/prop-types
	        var theme = this.props.theme || {};
	        var _generatedClassName = this.generateAndInjectStyles(theme, this.props);
	        this.setState({ theme: theme, generatedClassName: _generatedClassName });
	      }
	    };

	    BaseStyledComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      var _this3 = this;

	      // If this is a staticaly-styled component, we don't need to listen to
	      // props changes to update styles
	      var componentStyle = this.constructor.componentStyle;

	      if (componentStyle.isStatic) {
	        return;
	      }

	      this.setState(function (oldState) {
	        var theme = determineTheme(nextProps, oldState.theme, _this3.constructor.defaultProps);
	        var generatedClassName = _this3.generateAndInjectStyles(theme, nextProps);

	        return { theme: theme, generatedClassName: generatedClassName };
	      });
	    };

	    BaseStyledComponent.prototype.componentWillUnmount = function componentWillUnmount() {
	      this.unsubscribeFromContext();
	    };

	    BaseStyledComponent.prototype.render = function render() {
	      var _this4 = this;

	      // eslint-disable-next-line react/prop-types
	      var innerRef = this.props.innerRef;
	      var generatedClassName = this.state.generatedClassName;
	      var _constructor2 = this.constructor,
	          styledComponentId = _constructor2.styledComponentId,
	          target = _constructor2.target;


	      var isTargetTag = isTag(target);

	      var className = [
	      // eslint-disable-next-line react/prop-types
	      this.props.className, styledComponentId, this.attrs.className, generatedClassName].filter(Boolean).join(' ');

	      var baseProps = _extends({}, this.attrs, {
	        className: className
	      });

	      if (isStyledComponent(target)) {
	        baseProps.innerRef = innerRef;
	      } else {
	        baseProps.ref = innerRef;
	      }

	      var propsForElement = Object.keys(this.props).reduce(function (acc, propName) {
	        // Don't pass through non HTML tags through to HTML elements
	        // always omit innerRef
	        if (propName !== 'innerRef' && propName !== 'className' && (!isTargetTag || validAttr(propName))) {
	          // eslint-disable-next-line no-param-reassign
	          acc[propName] = _this4.props[propName];
	        }

	        return acc;
	      }, baseProps);

	      return React.createElement(target, propsForElement);
	    };

	    return BaseStyledComponent;
	  }(React.Component);

	  var createStyledComponent = function createStyledComponent(target, options, rules) {
	    var _StyledComponent$cont;

	    var _options$displayName = options.displayName,
	        displayName = _options$displayName === undefined ? isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')' : _options$displayName,
	        _options$componentId = options.componentId,
	        componentId = _options$componentId === undefined ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
	        _options$ParentCompon = options.ParentComponent,
	        ParentComponent = _options$ParentCompon === undefined ? BaseStyledComponent : _options$ParentCompon,
	        extendingRules = options.rules,
	        attrs = options.attrs;


	    var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : componentId;

	    var componentStyle = new ComponentStyle(extendingRules === undefined ? rules : extendingRules.concat(rules), attrs, styledComponentId);

	    var StyledComponent = function (_ParentComponent) {
	      inherits(StyledComponent, _ParentComponent);

	      function StyledComponent() {
	        classCallCheck(this, StyledComponent);
	        return possibleConstructorReturn(this, _ParentComponent.apply(this, arguments));
	      }

	      StyledComponent.withComponent = function withComponent(tag) {
	        var previousComponentId = options.componentId,
	            optionsToCopy = objectWithoutProperties(options, ['componentId']);


	        var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

	        var newOptions = _extends({}, optionsToCopy, {
	          componentId: newComponentId,
	          ParentComponent: StyledComponent
	        });

	        return createStyledComponent(tag, newOptions, rules);
	      };

	      createClass(StyledComponent, null, [{
	        key: 'extend',
	        get: function get$$1() {
	          var rulesFromOptions = options.rules,
	              parentComponentId = options.componentId,
	              optionsToCopy = objectWithoutProperties(options, ['rules', 'componentId']);


	          var newRules = rulesFromOptions === undefined ? rules : rulesFromOptions.concat(rules);

	          var newOptions = _extends({}, optionsToCopy, {
	            rules: newRules,
	            parentComponentId: parentComponentId,
	            ParentComponent: StyledComponent
	          });

	          return constructWithOptions(createStyledComponent, target, newOptions);
	        }
	      }]);
	      return StyledComponent;
	    }(ParentComponent);

	    StyledComponent.contextTypes = (_StyledComponent$cont = {}, _StyledComponent$cont[CHANNEL] = PropTypes.func, _StyledComponent$cont[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _StyledComponent$cont[CONTEXT_KEY] = PropTypes.oneOfType([PropTypes.instanceOf(StyleSheet), PropTypes.instanceOf(ServerStyleSheet)]), _StyledComponent$cont);
	    StyledComponent.displayName = displayName;
	    StyledComponent.styledComponentId = styledComponentId;
	    StyledComponent.attrs = attrs;
	    StyledComponent.componentStyle = componentStyle;
	    StyledComponent.target = target;


	    if (process.env.NODE_ENV !== 'production') {
	      StyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
	    }

	    return StyledComponent;
	  };

	  return createStyledComponent;
	});

	// murmurhash2 via https://gist.github.com/raycmorgan/588423

	function doHash(str, seed) {
	  var m = 0x5bd1e995;
	  var r = 24;
	  var h = seed ^ str.length;
	  var length = str.length;
	  var currentIndex = 0;

	  while (length >= 4) {
	    var k = UInt32(str, currentIndex);

	    k = Umul32(k, m);
	    k ^= k >>> r;
	    k = Umul32(k, m);

	    h = Umul32(h, m);
	    h ^= k;

	    currentIndex += 4;
	    length -= 4;
	  }

	  switch (length) {
	    case 3:
	      h ^= UInt16(str, currentIndex);
	      h ^= str.charCodeAt(currentIndex + 2) << 16;
	      h = Umul32(h, m);
	      break;

	    case 2:
	      h ^= UInt16(str, currentIndex);
	      h = Umul32(h, m);
	      break;

	    case 1:
	      h ^= str.charCodeAt(currentIndex);
	      h = Umul32(h, m);
	      break;
	  }

	  h ^= h >>> 13;
	  h = Umul32(h, m);
	  h ^= h >>> 15;

	  return h >>> 0;
	}

	function UInt32(str, pos) {
	  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
	}

	function UInt16(str, pos) {
	  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
	}

	function Umul32(n, m) {
	  n = n | 0;
	  m = m | 0;
	  var nlo = n & 0xffff;
	  var nhi = n >>> 16;
	  var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
	  return res;
	}

	// 
	var isStaticRules = function isStaticRules(rules, attrs) {
	  for (var i = 0; i < rules.length; i += 1) {
	    var rule = rules[i];

	    // recursive case
	    if (Array.isArray(rule) && !isStaticRules(rule)) {
	      return false;
	    } else if (typeof rule === 'function' && !isStyledComponent(rule)) {
	      // functions are allowed to be static if they're just being
	      // used to get the classname of a nested styled copmonent
	      return false;
	    }
	  }

	  if (attrs !== undefined) {
	    // eslint-disable-next-line guard-for-in, no-restricted-syntax
	    for (var key in attrs) {
	      var value = attrs[key];
	      if (typeof value === 'function') {
	        return false;
	      }
	    }
	  }

	  return true;
	};

	var isHRMEnabled = typeof module !== 'undefined' && module.hot && process.env.NODE_ENV !== 'production';

	/*
	 ComponentStyle is all the CSS-specific stuff, not
	 the React-specific stuff.
	 */
	var _ComponentStyle = (function (nameGenerator, flatten, stringifyRules) {
	  var ComponentStyle = function () {
	    function ComponentStyle(rules, attrs, componentId) {
	      classCallCheck(this, ComponentStyle);

	      this.rules = rules;
	      this.isStatic = !isHRMEnabled && isStaticRules(rules, attrs);
	      this.componentId = componentId;
	      if (!StyleSheet.instance.hasInjectedComponent(this.componentId)) {
	        var placeholder = process.env.NODE_ENV !== 'production' ? '.' + componentId + ' {}' : '';
	        StyleSheet.instance.deferredInject(componentId, true, [placeholder]);
	      }
	    }

	    /*
	     * Flattens a rule set into valid CSS
	     * Hashes it, wraps the whole chunk in a .hash1234 {}
	     * Returns the hash to be injected on render()
	     * */


	    ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
	      var isStatic = this.isStatic,
	          lastClassName = this.lastClassName;

	      if (isStatic && lastClassName !== undefined) {
	        return lastClassName;
	      }

	      var flatCSS = flatten(this.rules, executionContext);
	      var hash = doHash(this.componentId + flatCSS.join(''));

	      var stylesCacheable = styleSheet.stylesCacheable;

	      var existingName = styleSheet.getName(hash);

	      if (existingName !== undefined) {
	        if (stylesCacheable) {
	          this.lastClassName = existingName;
	        }
	        return existingName;
	      }

	      var name = nameGenerator(hash);
	      if (stylesCacheable) {
	        this.lastClassName = existingName;
	      }
	      if (styleSheet.alreadyInjected(hash, name)) {
	        return name;
	      }

	      var css = stringifyRules(flatCSS, '.' + name);
	      // NOTE: this can only be set when we inject the class-name.
	      // For some reason, presumably due to how css is stringifyRules behaves in
	      // differently between client and server, styles break.
	      styleSheet.inject(this.componentId, true, css, hash, name);
	      return name;
	    };

	    ComponentStyle.generateName = function generateName(str) {
	      return nameGenerator(doHash(str));
	    };

	    return ComponentStyle;
	  }();

	  return ComponentStyle;
	});

	// 
	// Thanks to ReactDOMFactories for this handy list!

	var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

	// SVG
	'circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

	// 
	var _styled = (function (styledComponent, constructWithOptions) {
	  var styled = function styled(tag) {
	    return constructWithOptions(styledComponent, tag);
	  };

	  // Shorthands for all valid HTML Elements
	  domElements.forEach(function (domElement) {
	    styled[domElement] = styled(domElement);
	  });

	  return styled;
	});

	// 
	var replaceWhitespace = function replaceWhitespace(str) {
	  return str.replace(/\s|\\n/g, '');
	};

	var _keyframes = (function (nameGenerator, stringifyRules, css) {
	  return function (strings) {
	    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      interpolations[_key - 1] = arguments[_key];
	    }

	    var rules = css.apply(undefined, [strings].concat(interpolations));
	    var hash = doHash(replaceWhitespace(JSON.stringify(rules)));

	    var existingName = StyleSheet.instance.getName(hash);
	    if (existingName) return existingName;

	    var name = nameGenerator(hash);
	    if (StyleSheet.instance.alreadyInjected(hash, name)) return name;

	    var generatedCSS = stringifyRules(rules, name, '@keyframes');
	    StyleSheet.instance.inject('sc-keyframes-' + name, true, generatedCSS, hash, name);
	    return name;
	  };
	});

	// 
	var _injectGlobal = (function (stringifyRules, css) {
	  var injectGlobal = function injectGlobal(strings) {
	    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      interpolations[_key - 1] = arguments[_key];
	    }

	    var rules = css.apply(undefined, [strings].concat(interpolations));
	    var hash = doHash(JSON.stringify(rules));

	    var componentId = 'sc-global-' + hash;
	    if (StyleSheet.instance.hasInjectedComponent(componentId)) return;

	    StyleSheet.instance.inject(componentId, false, stringifyRules(rules));
	  };

	  return injectGlobal;
	});

	// 

	var _constructWithOptions = (function (css) {
	  var constructWithOptions = function constructWithOptions(componentConstructor, tag) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	    if (typeof tag !== 'string' && typeof tag !== 'function') {
	      throw new Error(process.env.NODE_ENV !== 'production' ? 'Cannot create styled-component for component: ' + String(tag) : '');
	    }

	    /* This is callable directly as a template function */
	    var templateFunction = function templateFunction(strings) {
	      for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        interpolations[_key - 1] = arguments[_key];
	      }

	      return componentConstructor(tag, options, css.apply(undefined, [strings].concat(interpolations)));
	    };

	    /* If config methods are called, wrap up a new template function and merge options */
	    templateFunction.withConfig = function (config) {
	      return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
	    };
	    templateFunction.attrs = function (attrs) {
	      return constructWithOptions(componentConstructor, tag, _extends({}, options, {
	        attrs: _extends({}, options.attrs || {}, attrs)
	      }));
	    };

	    return templateFunction;
	  };

	  return constructWithOptions;
	});

	// 
	/* globals ReactClass */

	var wrapWithTheme = function wrapWithTheme(Component$$1) {
	  var _WithTheme$contextTyp;

	  var componentName = Component$$1.displayName || Component$$1.name || 'Component';
	  var isStatelessFunctionalComponent = typeof Component$$1 === 'function' && !(Component$$1.prototype && 'isReactComponent' in Component$$1.prototype);

	  // NOTE: We can't pass a ref to a stateless functional component
	  var shouldSetInnerRef = isStyledComponent(Component$$1) || isStatelessFunctionalComponent;

	  var WithTheme = function (_React$Component) {
	    inherits(WithTheme, _React$Component);

	    function WithTheme() {
	      var _temp, _this, _ret;

	      classCallCheck(this, WithTheme);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {}, _this.unsubscribeId = -1, _temp), possibleConstructorReturn(_this, _ret);
	    }

	    // NOTE: This is so that isStyledComponent passes for the innerRef unwrapping


	    WithTheme.prototype.componentWillMount = function componentWillMount() {
	      var _this2 = this;

	      var defaultProps = this.constructor.defaultProps;

	      var styledContext = this.context[CHANNEL_NEXT];
	      var themeProp = determineTheme(this.props, undefined, defaultProps);
	      if (styledContext === undefined && themeProp === undefined && process.env.NODE_ENV !== 'production') {
	        // eslint-disable-next-line no-console
	        console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps');
	      } else if (styledContext === undefined && themeProp !== undefined) {
	        this.setState({ theme: themeProp });
	      } else {
	        var subscribe = styledContext.subscribe;

	        this.unsubscribeId = subscribe(function (nextTheme) {
	          var theme = determineTheme(_this2.props, nextTheme, defaultProps);
	          _this2.setState({ theme: theme });
	        });
	      }
	    };

	    WithTheme.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      var defaultProps = this.constructor.defaultProps;

	      this.setState(function (oldState) {
	        var theme = determineTheme(nextProps, oldState.theme, defaultProps);

	        return { theme: theme };
	      });
	    };

	    WithTheme.prototype.componentWillUnmount = function componentWillUnmount() {
	      if (this.unsubscribeId !== -1) {
	        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
	      }
	    };

	    WithTheme.prototype.render = function render() {
	      var props = _extends({
	        theme: this.state.theme
	      }, this.props);

	      if (!shouldSetInnerRef) {
	        props.ref = props.innerRef;
	        delete props.innerRef;
	      }

	      return React__default.createElement(Component$$1, props);
	    };

	    return WithTheme;
	  }(React__default.Component);

	  WithTheme.displayName = 'WithTheme(' + componentName + ')';
	  WithTheme.styledComponentId = 'withTheme';
	  WithTheme.contextTypes = (_WithTheme$contextTyp = {}, _WithTheme$contextTyp[CHANNEL] = PropTypes.func, _WithTheme$contextTyp[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _WithTheme$contextTyp);


	  return hoistStatics(WithTheme, Component$$1);
	};

	// 

	/* Import singletons */
	/* Import singleton constructors */
	/* Import components */
	/* Import Higher Order Components */
	/* Warning if you've imported this file on React Native */
	if (process.env.NODE_ENV !== 'production' && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
	  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
	}

	/* Instantiate singletons */
	var ComponentStyle = _ComponentStyle(generateAlphabeticName, flatten, stringifyRules);
	var constructWithOptions = _constructWithOptions(css);
	var StyledComponent = _StyledComponent(ComponentStyle, constructWithOptions);

	/* Instantiate exported singletons */
	var keyframes = _keyframes(generateAlphabeticName, stringifyRules, css);
	var injectGlobal = _injectGlobal(stringifyRules, css);
	var styled = _styled(StyledComponent, constructWithOptions);

	/* Export everything */

	exports['default'] = styled;
	exports.css = css;
	exports.keyframes = keyframes;
	exports.injectGlobal = injectGlobal;
	exports.isStyledComponent = isStyledComponent;
	exports.consolidateStreamedStyles = consolidateStreamedStyles;
	exports.ThemeProvider = ThemeProvider;
	exports.withTheme = wrapWithTheme;
	exports.ServerStyleSheet = ServerStyleSheet;
	exports.StyleSheetManager = StyleSheetManager;
	//# sourceMappingURL=styled-components.browser.cjs.js.map

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(15)(module)))

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */

	'use strict';

	var isObject = __webpack_require__(167);

	function isObjectObject(o) {
	  return isObject(o) === true
	    && Object.prototype.toString.call(o) === '[object Object]';
	}

	module.exports = function isPlainObject(o) {
	  var ctor,prot;

	  if (isObjectObject(o) === false) return false;

	  // If has modified constructor
	  ctor = o.constructor;
	  if (typeof ctor !== 'function') return false;

	  // If has modified prototype
	  prot = ctor.prototype;
	  if (isObjectObject(prot) === false) return false;

	  // If constructor does not have an Object-specific method
	  if (prot.hasOwnProperty('isPrototypeOf') === false) {
	    return false;
	  }

	  // Most likely a plain Object
	  return true;
	};


/***/ }),
/* 167 */
/***/ (function(module, exports) {

	/*!
	 * isobject <https://github.com/jonschlinkert/isobject>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */

	'use strict';

	module.exports = function isObject(val) {
	  return val != null && typeof val === 'object' && Array.isArray(val) === false;
	};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/*
	 *          __        ___
	 *    _____/ /___  __/ (_)____
	 *   / ___/ __/ / / / / / ___/
	 *  (__  ) /_/ /_/ / / (__  )
	 * /____/\__/\__, /_/_/____/
	 *          /____/
	 *
	 * light - weight css preprocessor @licence MIT
	 */
	(function (factory) {/* eslint-disable */
		 true ? (module['exports'] = factory(null)) :
			typeof define === 'function' && define['amd'] ? define(factory(null)) :
				(window['stylis'] = factory(null))
	}(/** @param {*=} options */function factory (options) {/* eslint-disable */

		'use strict'

		/**
		 * Notes
		 *
		 * The ['<method name>'] pattern is used to support closure compiler
		 * the jsdoc signatures are also used to the same effect
		 *
		 * ----
		 *
		 * int + int + int === n4 [faster]
		 *
		 * vs
		 *
		 * int === n1 && int === n2 && int === n3
		 *
		 * ----
		 *
		 * switch (int) { case ints...} [faster]
		 *
		 * vs
		 *
		 * if (int == 1 && int === 2 ...)
		 *
		 * ----
		 *
		 * The (first*n1 + second*n2 + third*n3) format used in the property parser
		 * is a simple way to hash the sequence of characters
		 * taking into account the index they occur in
		 * since any number of 3 character sequences could produce duplicates.
		 *
		 * On the other hand sequences that are directly tied to the index of the character
		 * resolve a far more accurate measure, it's also faster
		 * to evaluate one condition in a switch statement
		 * than three in an if statement regardless of the added math.
		 *
		 * This allows the vendor prefixer to be both small and fast.
		 */

		var nullptn = /^\0+/g /* matches leading null characters */
		var formatptn = /[\0\r\f]/g /* matches new line, null and formfeed characters */
		var colonptn = /: */g /* splits animation rules */
		var cursorptn = /zoo|gra/ /* assert cursor varient */
		var transformptn = /([,: ])(transform)/g /* vendor prefix transform, older webkit */
		var animationptn = /,+\s*(?![^(]*[)])/g /* splits multiple shorthand notation animations */
		var propertiesptn = / +\s*(?![^(]*[)])/g /* animation properties */
		var elementptn = / *[\0] */g /* selector elements */
		var selectorptn = /,\r+?/g /* splits selectors */
		var andptn = /([\t\r\n ])*\f?&/g /* match & */
		var escapeptn = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g /* matches :global(.*) */
		var invalidptn = /\W+/g /* removes invalid characters from keyframes */
		var keyframeptn = /@(k\w+)\s*(\S*)\s*/ /* matches @keyframes $1 */
		var plcholdrptn = /::(place)/g /* match ::placeholder varient */
		var readonlyptn = /:(read-only)/g /* match :read-only varient */
		var beforeptn = /\s+(?=[{\];=:>])/g /* matches \s before ] ; = : */
		var afterptn = /([[}=:>])\s+/g /* matches \s after characters [ } = : */
		var tailptn = /(\{[^{]+?);(?=\})/g /* matches tail semi-colons ;} */
		var whiteptn = /\s{2,}/g /* matches repeating whitespace */
		var pseudoptn = /([^\(])(:+) */g /* pseudo element */
		var writingptn = /[svh]\w+-[tblr]{2}/ /* match writing mode property values */
		var gradientptn = /([\w-]+t\()/g /* match *gradient property */
		var supportsptn = /\(\s*(.*)\s*\)/g /* match supports (groups) */
		var propertyptn = /([\s\S]*?);/g /* match properties leading semicolon */
		var selfptn = /-self|flex-/g /* match flex- and -self in align-self: flex-*; */
		var pseudofmt = /[^]*?(:[rp][el]a[\w-]+)[^]*/ /* extrats :readonly or :placholder from selector */
		var trimptn = /[ \t]+$/ /* match tail whitspace */

		/* vendors */
		var webkit = '-webkit-'
		var moz = '-moz-'
		var ms = '-ms-'

		/* character codes */
		var SEMICOLON = 59 /* ; */
		var CLOSEBRACES = 125 /* } */
		var OPENBRACES = 123 /* { */
		var OPENPARENTHESES = 40 /* ( */
		var CLOSEPARENTHESES = 41 /* ) */
		var OPENBRACKET = 91 /* [ */
		var CLOSEBRACKET = 93 /* ] */
		var NEWLINE = 10 /* \n */
		var CARRIAGE = 13 /* \r */
		var TAB = 9 /* \t */
		var AT = 64 /* @ */
		var SPACE = 32 /*   */
		var AND = 38 /* & */
		var DASH = 45 /* - */
		var UNDERSCORE = 95 /* _ */
		var STAR = 42 /* * */
		var COMMA = 44 /* , */
		var COLON = 58 /* : */
		var SINGLEQUOTE = 39 /* ' */
		var DOUBLEQUOTE = 34 /* " */
		var FOWARDSLASH = 47 /* / */
		var GREATERTHAN = 62 /* > */
		var PLUS = 43 /* + */
		var TILDE = 126 /* ~ */
		var NULL = 0 /* \0 */
		var FORMFEED = 12 /* \f */
		var VERTICALTAB = 11 /* \v */

		/* special identifiers */
		var KEYFRAME = 107 /* k */
		var MEDIA = 109 /* m */
		var SUPPORTS = 115 /* s */
		var PLACEHOLDER = 112 /* p */
		var READONLY = 111 /* o */
		var IMPORT = 169 /* <at>i */
		var CHARSET = 163 /* <at>c */
		var DOCUMENT = 100 /* <at>d */
		var PAGE = 112 /* <at>p */

		var column = 1 /* current column */
		var line = 1 /* current line numebr */
		var pattern = 0 /* :pattern */

		var cascade = 1 /* #id h1 h2 vs h1#id h2#id  */
		var prefix = 1 /* vendor prefix */
		var escape = 1 /* escape :global() pattern */
		var compress = 0 /* compress output */
		var semicolon = 0 /* no/semicolon option */
		var preserve = 0 /* preserve empty selectors */

		/* empty reference */
		var array = []

		/* plugins */
		var plugins = []
		var plugged = 0
		var should = null

		/* plugin context */
		var POSTS = -2
		var PREPS = -1
		var UNKWN = 0
		var PROPS = 1
		var BLCKS = 2
		var ATRUL = 3

		/* plugin newline context */
		var unkwn = 0

		/* keyframe animation */
		var keyed = 1
		var key = ''

		/* selector namespace */
		var nscopealt = ''
		var nscope = ''

		/**
		 * Compile
		 *
		 * @param {Array<string>} parent
		 * @param {Array<string>} current
		 * @param {string} body
		 * @param {number} id
		 * @param {number} depth
		 * @return {string}
		 */
		function compile (parent, current, body, id, depth) {
			var bracket = 0 /* brackets [] */
			var comment = 0 /* comments /* // or /* */
			var parentheses = 0 /* functions () */
			var quote = 0 /* quotes '', "" */

			var first = 0 /* first character code */
			var second = 0 /* second character code */
			var code = 0 /* current character code */
			var tail = 0 /* previous character code */
			var trail = 0 /* character before previous code */
			var peak = 0 /* previous non-whitespace code */

			var counter = 0 /* count sequence termination */
			var context = 0 /* track current context */
			var atrule = 0 /* track @at-rule context */
			var pseudo = 0 /* track pseudo token index */
			var caret = 0 /* current character index */
			var format = 0 /* control character formating context */
			var insert = 0 /* auto semicolon insertion */
			var invert = 0 /* inverted selector pattern */
			var length = 0 /* generic length address */
			var eof = body.length /* end of file(length) */
			var eol = eof - 1 /* end of file(characters) */

			var char = '' /* current character */
			var chars = '' /* current buffer of characters */
			var child = '' /* next buffer of characters */
			var out = '' /* compiled body */
			var children = '' /* compiled children */
			var flat = '' /* compiled leafs */
			var selector /* generic selector address */
			var result /* generic address */

			// ...build body
			while (caret < eof) {
				code = body.charCodeAt(caret)

				// eof varient
				if (caret === eol) {
					// last character + noop context, add synthetic padding for noop context to terminate
					if (comment + quote + parentheses + bracket !== 0) {
						if (comment !== 0) {
							code = comment === FOWARDSLASH ? NEWLINE : FOWARDSLASH
						}

						quote = parentheses = bracket = 0
						eof++
						eol++
					}
				}

				if (comment + quote + parentheses + bracket === 0) {
					// eof varient
					if (caret === eol) {
						if (format > 0) {
							chars = chars.replace(formatptn, '')
						}

						if (chars.trim().length > 0) {
							switch (code) {
								case SPACE:
								case TAB:
								case SEMICOLON:
								case CARRIAGE:
								case NEWLINE: {
									break
								}
								default: {
									chars += body.charAt(caret)
								}
							}

							code = SEMICOLON
						}
					}

					// auto semicolon insertion
					if (insert === 1) {
						switch (code) {
							// false flags
							case OPENBRACES:
							case CLOSEBRACES:
							case SEMICOLON:
							case DOUBLEQUOTE:
							case SINGLEQUOTE:
							case OPENPARENTHESES:
							case CLOSEPARENTHESES:
							case COMMA: {
								insert = 0
							}
							// ignore
							case TAB:
							case CARRIAGE:
							case NEWLINE:
							case SPACE: {
								break
							}
							// valid
							default: {
								insert = 0
								length = caret
								first = code
								caret--
								code = SEMICOLON

								while (length < eof) {
									switch (body.charCodeAt(++length)) {
										case NEWLINE:
										case CARRIAGE:
										case SEMICOLON: {
											caret++
											code = first
										}
										case COLON:
										case OPENBRACES: {
											length = eof
										}
									}
								}
							}
						}
					}

					// token varient
					switch (code) {
						case OPENBRACES: {
							chars = chars.trim()
							first = chars.charCodeAt(0)
							counter = 1
							length = ++caret

							while (caret < eof) {
								code = body.charCodeAt(caret)

								switch (code) {
									case OPENBRACES: {
										counter++
										break
									}
									case CLOSEBRACES: {
										counter--
										break
									}
								}

								if (counter === 0) {
									break
								}

								caret++
							}

							child = body.substring(length, caret)

							if (first === NULL) {
								first = (chars = chars.replace(nullptn, '').trim()).charCodeAt(0)
							}

							switch (first) {
								// @at-rule
								case AT: {
									if (format > 0) {
										chars = chars.replace(formatptn, '')
									}

									second = chars.charCodeAt(1)

									switch (second) {
										case DOCUMENT:
										case MEDIA:
										case SUPPORTS:
										case DASH: {
											selector = current
											break
										}
										default: {
											selector = array
										}
									}

									child = compile(current, selector, child, second, depth+1)
									length = child.length

									// preserve empty @at-rule
									if (preserve > 0 && length === 0) {
										length = chars.length
									}

									// execute plugins, @at-rule context
									if (plugged > 0) {
										selector = select(array, chars, invert)
										result = proxy(ATRUL, child, selector, current, line, column, length, second, depth)
										chars = selector.join('')

										if (result !== void 0) {
											if ((length = (child = result.trim()).length) === 0) {
												second = 0
												child = ''
											}
										}
									}

									if (length > 0) {
										switch (second) {
											case SUPPORTS: {
												chars = chars.replace(supportsptn, supports)
											}
											case DOCUMENT:
											case MEDIA:
											case DASH: {
												child = chars + '{' + child + '}'
												break
											}
											case KEYFRAME: {
												chars = chars.replace(keyframeptn, '$1 $2' + (keyed > 0 ? key : ''))
												child = chars + '{' + child + '}'

												if (prefix === 1 || (prefix === 2 && vendor('@'+child, 3))) {
													child = '@' + webkit + child + '@' + child
												} else {
													child = '@' + child
												}
												break
											}
											default: {
												child = chars + child

												if (id === PAGE) {
													child = (out += child, '')
												}
											}
										}
									} else {
										child = ''
									}

									break
								}
								// selector
								default: {
									child = compile(current, select(current, chars, invert), child, id, depth+1)
								}
							}

							children += child

							// reset
							context = 0
							insert = 0
							pseudo = 0
							format = 0
							invert = 0
							atrule = 0
							chars = ''
							child = ''
							code = body.charCodeAt(++caret)
							break
						}
						case CLOSEBRACES:
						case SEMICOLON: {
							chars = (format > 0 ? chars.replace(formatptn, '') : chars).trim()

							if ((length = chars.length) > 1) {
								// monkey-patch missing colon
								if (pseudo === 0) {
									first = chars.charCodeAt(0)

									// first character is a letter or dash, buffer has a space character
									if ((first === DASH || first > 96 && first < 123)) {
										length = (chars = chars.replace(' ', ':')).length
									}
								}

								// execute plugins, property context
								if (plugged > 0) {
									if ((result = proxy(PROPS, chars, current, parent, line, column, out.length, id, depth)) !== void 0) {
										if ((length = (chars = result.trim()).length) === 0) {
											chars = '\0\0'
										}
									}
								}

								first = chars.charCodeAt(0)
								second = chars.charCodeAt(1)

								switch (first + second) {
									case NULL: {
										break
									}
									case IMPORT:
									case CHARSET: {
										flat += chars + body.charAt(caret)
										break
									}
									default: {
										if (chars.charCodeAt(length-1) === COLON)
											break

										out += property(chars, first, second, chars.charCodeAt(2))
									}
								}
							}

							// reset
							context = 0
							insert = 0
							pseudo = 0
							format = 0
							invert = 0
							chars = ''
							code = body.charCodeAt(++caret)
							break
						}
					}
				}

				// parse characters
				switch (code) {
					case CARRIAGE:
					case NEWLINE: {
						// auto insert semicolon
						if (comment + quote + parentheses + bracket + semicolon === 0) {
							// valid non-whitespace characters that
							// may precede a newline
							switch (peak) {
								case CLOSEPARENTHESES:
								case SINGLEQUOTE:
								case DOUBLEQUOTE:
								case AT:
								case TILDE:
								case GREATERTHAN:
								case STAR:
								case PLUS:
								case FOWARDSLASH:
								case DASH:
								case COLON:
								case COMMA:
								case SEMICOLON:
								case OPENBRACES:
								case CLOSEBRACES: {
									break
								}
								default: {
									// current buffer has a colon
									if (pseudo > 0) {
										insert = 1
									}
								}
							}
						}

						// terminate line comment
						if (comment === FOWARDSLASH) {
							comment = 0
						} else if (cascade + context === 0) {
							format = 1
							chars += '\0'
						}

						// execute plugins, newline context
						if (plugged * unkwn > 0) {
							proxy(UNKWN, chars, current, parent, line, column, out.length, id, depth)
						}

						// next line, reset column position
						column = 1
						line++
						break
					}
					case SEMICOLON:
					case CLOSEBRACES: {
						if (comment + quote + parentheses + bracket === 0) {
							column++
							break
						}
					}
					default: {
						// increment column position
						column++

						// current character
						char = body.charAt(caret)

						// remove comments, escape functions, strings, attributes and prepare selectors
						switch (code) {
							case TAB:
							case SPACE: {
								if (quote + bracket + comment === 0) {
									switch (tail) {
										case COMMA:
										case COLON:
										case TAB:
										case SPACE: {
											char = ''
											break
										}
										default: {
											if (code !== SPACE) {
												char = ' '
											}
										}
									}
								}
								break
							}
							// escape breaking control characters
							case NULL: {
								char = '\\0'
								break
							}
							case FORMFEED: {
								char = '\\f'
								break
							}
							case VERTICALTAB: {
								char = '\\v'
								break
							}
							// &
							case AND: {
								// inverted selector pattern i.e html &
								if (quote + comment + bracket === 0 && cascade > 0) {
									invert = 1
									format = 1
									char = '\f' + char
								}
								break
							}
							// ::p<l>aceholder, l
							// :read-on<l>y, l
							case 108: {
								if (quote + comment + bracket + pattern === 0 && pseudo > 0) {
									switch (caret - pseudo) {
										// ::placeholder
										case 2: {
											if (tail === PLACEHOLDER && body.charCodeAt(caret-3) === COLON) {
												pattern = tail
											}
										}
										// :read-only
										case 8: {
											if (trail === READONLY) {
												pattern = trail
											}
										}
									}
								}
								break
							}
							// :<pattern>
							case COLON: {
								if (quote + comment + bracket === 0) {
									pseudo = caret
								}
								break
							}
							// selectors
							case COMMA: {
								if (comment + parentheses + quote + bracket === 0) {
									format = 1
									char += '\r'
								}
								break
							}
							// quotes
							case DOUBLEQUOTE: {
								if (comment === 0) {
									quote = quote === code ? 0 : (quote === 0 ? code : quote)
								}
								break
							}
							case SINGLEQUOTE: {
								if (comment === 0) {
									quote = quote === code ? 0 : (quote === 0 ? code : quote)
								}
								break
							}
							// attributes
							case OPENBRACKET: {
								if (quote + comment + parentheses === 0) {
									bracket++
								}
								break
							}
							case CLOSEBRACKET: {
								if (quote + comment + parentheses === 0) {
									bracket--
								}
								break
							}
							// functions
							case CLOSEPARENTHESES: {
								if (quote + comment + bracket === 0) {
									parentheses--
								}
								break
							}
							case OPENPARENTHESES: {
								if (quote + comment + bracket === 0) {
									if (context === 0) {
										switch (tail*2 + trail*3) {
											// :matches
											case 533: {
												break
											}
											// :global, :not, :nth-child etc...
											default: {
												counter = 0
												context = 1
											}
										}
									}

									parentheses++
								}
								break
							}
							case AT: {
								if (comment + parentheses + quote + bracket + pseudo + atrule === 0) {
									atrule = 1
								}
								break
							}
							// block/line comments
							case STAR:
							case FOWARDSLASH: {
								if (quote + bracket + parentheses > 0) {
									break
								}

								switch (comment) {
									// initialize line/block comment context
									case 0: {
										switch (code*2 + body.charCodeAt(caret+1)*3) {
											// //
											case 235: {
												comment = FOWARDSLASH
												break
											}
											// /*
											case 220: {
												length = caret
												comment = STAR
												break
											}
										}
										break
									}
									// end block comment context
									case STAR: {
										if (code === FOWARDSLASH && tail === STAR) {
											// /*<!> ... */, !
											if (body.charCodeAt(length+2) === 33) {
												out += body.substring(length, caret+1)
											}
											char = ''
											comment = 0
										}
									}
								}
							}
						}

						// ignore comment blocks
						if (comment === 0) {
							// aggressive isolation mode, divide each individual selector
							// including selectors in :not function but excluding selectors in :global function
							if (cascade + quote + bracket + atrule === 0 && id !== KEYFRAME && code !== SEMICOLON) {
								switch (code) {
									case COMMA:
									case TILDE:
									case GREATERTHAN:
									case PLUS:
									case CLOSEPARENTHESES:
									case OPENPARENTHESES: {
										if (context === 0) {
											// outside of an isolated context i.e nth-child(<...>)
											switch (tail) {
												case TAB:
												case SPACE:
												case NEWLINE:
												case CARRIAGE: {
													char = char + '\0'
													break
												}
												default: {
													char = '\0' + char + (code === COMMA ? '' : '\0')
												}
											}
											format = 1
										} else {
											// within an isolated context, sleep untill it's terminated
											switch (code) {
												case OPENPARENTHESES: {
													context = ++counter
													break
												}
												case CLOSEPARENTHESES: {
													if ((context = --counter) === 0) {
														format = 1
														char += '\0'
													}
													break
												}
											}
										}
										break
									}
									case TAB:
									case SPACE: {
										switch (tail) {
											case NULL:
											case OPENBRACES:
											case CLOSEBRACES:
											case SEMICOLON:
											case COMMA:
											case FORMFEED:
											case TAB:
											case SPACE:
											case NEWLINE:
											case CARRIAGE: {
												break
											}
											default: {
												// ignore in isolated contexts
												if (context === 0) {
													format = 1
													char += '\0'
												}
											}
										}
									}
								}
							}

							// concat buffer of characters
							chars += char

							// previous non-whitespace character code
							if (code !== SPACE && code !== TAB) {
								peak = code
							}
						}
					}
				}

				// tail character codes
				trail = tail
				tail = code

				// visit every character
				caret++
			}

			length = out.length

			// preserve empty selector
	 		if (preserve > 0) {
	 			if (length === 0 && children.length === 0 && (current[0].length === 0) === false) {
	 				if (id !== MEDIA || (current.length === 1 && (cascade > 0 ? nscopealt : nscope) === current[0])) {
						length = current.join(',').length + 2
	 				}
	 			}
			}

			if (length > 0) {
				// cascade isolation mode?
				selector = cascade === 0 && id !== KEYFRAME ? isolate(current) : current

				// execute plugins, block context
				if (plugged > 0) {
					result = proxy(BLCKS, out, selector, parent, line, column, length, id, depth)

					if (result !== void 0 && (out = result).length === 0) {
						return flat + out + children
					}
				}

				out = selector.join(',') + '{' + out + '}'

				if (prefix*pattern !== 0) {
					if (prefix === 2 && !vendor(out, 2))
						pattern = 0

					switch (pattern) {
						// ::read-only
						case READONLY: {
							out = out.replace(readonlyptn, ':'+moz+'$1')+out
							break
						}
						// ::placeholder
						case PLACEHOLDER: {
							out = (
								out.replace(plcholdrptn, '::' + webkit + 'input-$1') +
								out.replace(plcholdrptn, '::' + moz + '$1') +
								out.replace(plcholdrptn, ':' + ms + 'input-$1') + out
							)
							break
						}
					}

					pattern = 0
				}
			}

			return flat + out + children
		}

		/**
		 * Select
		 *
		 * @param {Array<string>} parent
		 * @param {string} current
		 * @param {number} invert
		 * @return {Array<string>}
		 */
		function select (parent, current, invert) {
			var selectors = current.trim().split(selectorptn)
			var out = selectors

			var length = selectors.length
			var l = parent.length

			switch (l) {
				// 0-1 parent selectors
				case 0:
				case 1: {
					for (var i = 0, selector = l === 0 ? '' : parent[0] + ' '; i < length; ++i) {
						out[i] = scope(selector, out[i], invert, l).trim()
					}
					break
				}
				// >2 parent selectors, nested
				default: {
					for (var i = 0, j = 0, out = []; i < length; ++i) {
						for (var k = 0; k < l; ++k) {
							out[j++] = scope(parent[k] + ' ', selectors[i], invert, l).trim()
						}
					}
				}
			}

			return out
		}

		/**
		 * Scope
		 *
		 * @param {string} parent
		 * @param {string} current
		 * @param {number} invert
		 * @param {number} level
		 * @return {string}
		 */
		function scope (parent, current, invert, level) {
			var selector = current
			var code = selector.charCodeAt(0)

			// trim leading whitespace
			if (code < 33) {
				code = (selector = selector.trim()).charCodeAt(0)
			}

			switch (code) {
				// &
				case AND: {
					switch (cascade + level) {
						case 0:
						case 1: {
							if (parent.trim().length === 0) {
								break
							}
						}
						default: {
							return selector.replace(andptn, '$1'+parent.trim())
						}
					}
					break
				}
				// :
				case COLON: {
					switch (selector.charCodeAt(1)) {
						// g in :global
						case 103: {
							if (escape > 0 && cascade > 0) {
								return selector.replace(escapeptn, '$1').replace(andptn, '$1'+nscope)
							}
							break
						}
						default: {
							// :hover
							return parent.trim() + selector.replace(andptn, '$1'+parent.trim())
						}
					}
				}
				default: {
					// html &
					if (invert*cascade > 0 && selector.indexOf('\f') > 0) {
						return selector.replace(andptn, (parent.charCodeAt(0) === COLON ? '' : '$1')+parent.trim())
					}
				}
			}

			return parent + selector
		}

		/**
		 * Property
		 *
		 * @param {string} input
		 * @param {number} first
		 * @param {number} second
		 * @param {number} third
		 * @return {string}
		 */
		function property (input, first, second, third) {
			var index = 0
			var out = input + ';'
			var hash = (first*2) + (second*3) + (third*4)
			var cache

			// animation: a, n, i characters
			if (hash === 944) {
				return animation(out)
			} else if (prefix === 0 || (prefix === 2 && !vendor(out, 1))) {
				return out
			}

			// vendor prefix
			switch (hash) {
				// text-decoration/text-size-adjust: t, e, x
				case 1015: {
					// text-size-adjust, -
					return out.charCodeAt(9) === DASH ? webkit + out + out : out
				}
				// filter/fill f, i, l
				case 951: {
					// filter, t
					return out.charCodeAt(3) === 116 ? webkit + out + out : out
				}
				// color/column, c, o, l
				case 963: {
					// column, n
					return out.charCodeAt(5) === 110 ? webkit + out + out : out
				}
				// box-decoration-break, b, o, x
				case 1009: {
					if (out.charCodeAt(4) !== 100) {
						break
					}
				}
				// mask, m, a, s
				// clip-path, c, l, i
				case 969:
				case 942: {
					return webkit + out + out
				}
				// appearance: a, p, p
				case 978: {
					return webkit + out + moz + out + out
				}
				// hyphens: h, y, p
				// user-select: u, s, e
				case 1019:
				case 983: {
					return webkit + out + moz + out + ms + out + out
				}
				// background/backface-visibility, b, a, c
				case 883: {
					// backface-visibility, -
					return out.charCodeAt(8) === DASH ? webkit + out + out : out
				}
				// flex: f, l, e
				case 932: {
					if (out.charCodeAt(4) === DASH) {
						switch (out.charCodeAt(5)) {
							// flex-grow, g
							case 103: {
								return webkit + 'box-' + out.replace('-grow', '') + webkit + out + ms + out.replace('grow', 'positive') + out
							}
							// flex-shrink, s
							case 115: {
								return webkit + out + ms + out.replace('shrink', 'negative') + out
							}
							// flex-basis, b
							case 98: {
								return webkit + out + ms + out.replace('basis', 'preferred-size') + out
							}
						}
					}

					return webkit + out + ms + out + out
				}
				// order: o, r, d
				case 964: {
					return webkit + out + ms + 'flex' + '-' + out + out
				}
				// justify-items/justify-content, j, u, s
				case 1023: {
					// justify-content, c
					if (out.charCodeAt(8) !== 99) {
						break
					}

					cache = out.substring(out.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify')
					return webkit + 'box-pack' + cache + webkit + out + ms + 'flex-pack' + cache + out
				}
				// cursor, c, u, r
				case 1005: {
					return cursorptn.test(out) ? out.replace(colonptn, ':' + webkit) + out.replace(colonptn, ':' + moz) + out : out
				}
				// writing-mode, w, r, i
				case 1000: {
					cache = out.substring(13).trim()
					index = cache.indexOf('-') + 1

					switch (cache.charCodeAt(0)+cache.charCodeAt(index)) {
						// vertical-lr
						case 226: {
							cache = out.replace(writingptn, 'tb')
							break
						}
						// vertical-rl
						case 232: {
							cache = out.replace(writingptn, 'tb-rl')
							break
						}
						// horizontal-tb
						case 220: {
							cache = out.replace(writingptn, 'lr')
							break
						}
						default: {
							return out
						}
					}

					return webkit + out + ms + cache + out
				}
				// position: sticky
				case 1017: {
					if (out.indexOf('sticky', 9) === -1) {
						return out
					}
				}
				// display(flex/inline-flex/inline-box): d, i, s
				case 975: {
					index = (out = input).length - 10
					cache = (out.charCodeAt(index) === 33 ? out.substring(0, index) : out).substring(input.indexOf(':', 7) + 1).trim()

					switch (hash = cache.charCodeAt(0) + (cache.charCodeAt(7)|0)) {
						// inline-
						case 203: {
							// inline-box
							if (cache.charCodeAt(8) < 111) {
								break
							}
						}
						// inline-box/sticky
						case 115: {
							out = out.replace(cache, webkit+cache)+';'+out
							break
						}
						// inline-flex
						// flex
						case 207:
						case 102: {
							out = (
								out.replace(cache, webkit+(hash > 102 ? 'inline-' : '')+'box')+';'+
								out.replace(cache, webkit+cache)+';'+
								out.replace(cache, ms+cache+'box')+';'+
								out
							)
						}
					}

					return out + ';'
				}
				// align-items, align-center, align-self: a, l, i, -
				case 938: {
					if (out.charCodeAt(5) === DASH) {
						switch (out.charCodeAt(6)) {
							// align-items, i
							case 105: {
								cache = out.replace('-items', '')
								return webkit + out + webkit + 'box-' + cache + ms + 'flex-' + cache + out
							}
							// align-self, s
							case 115: {
								return webkit + out + ms + 'flex-item-' + out.replace(selfptn, '') + out
							}
							// align-content
							default: {
								return webkit + out + ms + 'flex-line-pack' + out.replace('align-content', '').replace(selfptn, '') + out
							}
						}
					}
					break
				}
				// width: min-content / width: max-content
				case 953: {
					if ((index = out.indexOf('-content', 9)) > 0) {
						// width: min-content / width: max-content
						if (out.charCodeAt(index - 3) === 109 && out.charCodeAt(index - 4) !== 45) {
							cache = out.substring(index - 3)
							return 'width:' + webkit + cache + 'width:' + moz + cache + 'width:' + cache
						}
					}
					break
				}
				// transform, transition: t, r, a
				case 962: {
					out = webkit + out + (out.charCodeAt(5) === 102 ? ms + out : '') + out

					// transitions
					if (second + third === 211 && out.charCodeAt(13) === 105 && out.indexOf('transform', 10) > 0) {
						return out.substring(0, out.indexOf(';', 27) + 1).replace(transformptn, '$1' + webkit + '$2') + out
					}

					break
				}
			}

			return out
		}

		var i = 0

		/**
		 * Vendor
		 *
		 * @param {string} content
		 * @param {number} context
		 * @return {boolean}
		 */
		function vendor (content, context) {
			var index = content.indexOf(context === 1 ? ':' : '{')
			var key = content.substring(0, context !== 3 ? index : 10)
			var value = content.substring(index + 1, content.length - 1)

			return should(context !== 2 ? key : key.replace(pseudofmt, '$1'), value, context)
		}

		/**
		 * Supports
		 *
		 * @param {string} match
		 * @param {string} group
		 * @return {string}
		 */
		function supports (match, group) {
			var out = property(group, group.charCodeAt(0), group.charCodeAt(1), group.charCodeAt(2))

			return out !== group+';' ? out.replace(propertyptn, ' or ($1)').substring(4) : '('+group+')'
		}

		/**
		 * Animation
		 *
		 * @param {string} input
		 * @return {string}
		 */
		function animation (input) {
			var length = input.length
			var index = input.indexOf(':', 9) + 1
			var declare = input.substring(0, index).trim()
			var out = input.substring(index, length-1).trim()

			switch (input.charCodeAt(9)*keyed) {
				case 0: {
					break
				}
				// animation-*, -
				case DASH: {
					// animation-name, n
					if (input.charCodeAt(10) !== 110) {
						break
					}
				}
				// animation/animation-name
				default: {
					// split in case of multiple animations
					var list = out.split((out = '', animationptn))

					for (var i = 0, index = 0, length = list.length; i < length; index = 0, ++i) {
						var value = list[i]
						var items = value.split(propertiesptn)

						while (value = items[index]) {
							var peak = value.charCodeAt(0)

							if (keyed === 1 && (
								// letters
								(peak > AT && peak < 90) || (peak > 96 && peak < 123) || peak === UNDERSCORE ||
								// dash but not in sequence i.e --
								(peak === DASH && value.charCodeAt(1) !== DASH)
							)) {
								// not a number/function
								switch (isNaN(parseFloat(value)) + (value.indexOf('(') !== -1)) {
									case 1: {
										switch (value) {
											// not a valid reserved keyword
											case 'infinite': case 'alternate': case 'backwards': case 'running':
											case 'normal': case 'forwards': case 'both': case 'none': case 'linear':
											case 'ease': case 'ease-in': case 'ease-out': case 'ease-in-out':
											case 'paused': case 'reverse': case 'alternate-reverse': case 'inherit':
											case 'initial': case 'unset': case 'step-start': case 'step-end': {
												break
											}
											default: {
												value += key
											}
										}
									}
								}
							}

							items[index++] = value
						}

						out += (i === 0 ? '' : ',') + items.join(' ')
					}
				}
			}

			out = declare + out + ';'

			if (prefix === 1 || (prefix === 2 && vendor(out, 1)))
				return webkit + out + out

			return out
		}

		/**
		 * Isolate
		 *
		 * @param {Array<string>} current
		 */
		function isolate (current) {
			for (var i = 0, length = current.length, selector = Array(length), padding, element; i < length; ++i) {
				// split individual elements in a selector i.e h1 h2 === [h1, h2]
				var elements = current[i].split(elementptn)
				var out = ''

				for (var j = 0, size = 0, tail = 0, code = 0, l = elements.length; j < l; ++j) {
					// empty element
					if ((size = (element = elements[j]).length) === 0 && l > 1) {
						continue
					}

					tail = out.charCodeAt(out.length-1)
					code = element.charCodeAt(0)
					padding = ''

					if (j !== 0) {
						// determine if we need padding
						switch (tail) {
							case STAR:
							case TILDE:
							case GREATERTHAN:
							case PLUS:
							case SPACE:
							case OPENPARENTHESES:  {
								break
							}
							default: {
								padding = ' '
							}
						}
					}

					switch (code) {
						case AND: {
							element = padding + nscopealt
						}
						case TILDE:
						case GREATERTHAN:
						case PLUS:
						case SPACE:
						case CLOSEPARENTHESES:
						case OPENPARENTHESES: {
							break
						}
						case OPENBRACKET: {
							element = padding + element + nscopealt
							break
						}
						case COLON: {
							switch (element.charCodeAt(1)*2 + element.charCodeAt(2)*3) {
								// :global
								case 530: {
									if (escape > 0) {
										element = padding + element.substring(8, size - 1)
										break
									}
								}
								// :hover, :nth-child(), ...
								default: {
									if (j < 1 || elements[j-1].length < 1) {
										element = padding + nscopealt + element
									}
								}
							}
							break
						}
						case COMMA: {
							padding = ''
						}
						default: {
							if (size > 1 && element.indexOf(':') > 0) {
								element = padding + element.replace(pseudoptn, '$1' + nscopealt + '$2')
							} else {
								element = padding + element + nscopealt
							}
						}
					}

					out += element
				}

				selector[i] = out.replace(formatptn, '').trim()
			}

			return selector
		}

		/**
		 * Proxy
		 *
		 * @param {number} context
		 * @param {string} content
		 * @param {Array<string>} selectors
		 * @param {Array<string>} parents
		 * @param {number} line
		 * @param {number} column
		 * @param {number} length
		 * @param {number} id
		 * @param {number} depth
		 * @return {(string|void|*)}
		 */
		function proxy (context, content, selectors, parents, line, column, length, id, depth) {
			for (var i = 0, out = content, next; i < plugged; ++i) {
				switch (next = plugins[i].call(stylis, context, out, selectors, parents, line, column, length, id, depth)) {
					case void 0:
					case false:
					case true:
					case null: {
						break
					}
					default: {
						out = next
					}
				}
			}

			switch (out) {
				case void 0:
				case false:
				case true:
				case null:
				case content: {
					break
				}
				default: {
					return out
				}
			}
		}

		/**
		 * Minify
		 *
		 * @param {(string|*)} output
		 * @return {string}
		 */
		function minify (output) {
			return output
				.replace(formatptn, '')
				.replace(beforeptn, '')
				.replace(afterptn, '$1')
				.replace(tailptn, '$1')
				.replace(whiteptn, ' ')
		}

		/**
		 * Use
		 *
		 * @param {(Array<function(...?)>|function(...?)|number|void)?} plugin
		 */
		function use (plugin) {
			switch (plugin) {
				case void 0:
				case null: {
					plugged = plugins.length = 0
					break
				}
				default: {
					switch (plugin.constructor) {
						case Array: {
							for (var i = 0, length = plugin.length; i < length; ++i) {
								use(plugin[i])
							}
							break
						}
						case Function: {
							plugins[plugged++] = plugin
							break
						}
						case Boolean: {
							unkwn = !!plugin|0
						}
					}
				}
	 		}

	 		return use
		}

		/**
		 * Set
		 *
		 * @param {*} options
		 */
		function set (options) {
			for (var name in options) {
				var value = options[name]
				switch (name) {
					case 'keyframe': keyed = value|0; break
					case 'global': escape = value|0; break
					case 'cascade': cascade = value|0; break
					case 'compress': compress = value|0; break
					case 'semicolon': semicolon = value|0; break
					case 'preserve': preserve = value|0; break
					case 'prefix':
						should = null

						if (!value) {
							prefix = 0
						} else if (typeof value !== 'function') {
							prefix = 1
						} else {
							prefix = 2
							should = value
						}
				}
			}

			return set
		}

		/**
		 * Stylis
		 *
		 * @param {string} selector
		 * @param {string} input
		 * @return {*}
		 */
		function stylis (selector, input) {
			if (this !== void 0 && this.constructor === stylis) {
				return factory(selector)
			}

			// setup
			var ns = selector
			var code = ns.charCodeAt(0)

			// trim leading whitespace
			if (code < 33) {
				code = (ns = ns.trim()).charCodeAt(0)
			}

			// keyframe/animation namespace
			if (keyed > 0) {
				key = ns.replace(invalidptn, code === OPENBRACKET ? '' : '-')
			}

			// reset, used to assert if a plugin is moneky-patching the return value
			code = 1

			// cascade/isolate
			if (cascade === 1) {
				nscope = ns
			} else {
				nscopealt = ns
			}

			var selectors = [nscope]
			var result

			// execute plugins, pre-process context
			if (plugged > 0) {
				result = proxy(PREPS, input, selectors, selectors, line, column, 0, 0, 0)

				if (result !== void 0 && typeof result === 'string') {
					input = result
				}
			}

			// build
			var output = compile(array, selectors, input, 0, 0)

			// execute plugins, post-process context
			if (plugged > 0) {
				result = proxy(POSTS, output, selectors, selectors, line, column, output.length, 0, 0)

				// bypass minification
				if (result !== void 0 && typeof(output = result) !== 'string') {
					code = 0
				}
			}

			// reset
			key = ''
			nscope = ''
			nscopealt = ''
			pattern = 0
			line = 1
			column = 1

			return compress*code === 0 ? output : minify(output)
		}

		stylis['use'] = use
		stylis['set'] = set

		if (options !== void 0) {
			set(options)
		}

		return stylis
	}));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)(module)))

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {(function (factory) {
		 true ? (module['exports'] = factory()) :
			typeof define === 'function' && define['amd'] ? define(factory()) :
				(window['stylisRuleSheet'] = factory())
	}(function () {

		'use strict'

		return function (insertRule) {
			var delimiter = '/*|*/'
			var needle = delimiter+'}'

			function toSheet (block) {
				if (block)
					try {
						insertRule(block + '}')
					} catch (e) {}
			}

			return function ruleSheet (context, content, selectors, parents, line, column, length, at, depth) {
				switch (context) {
					// property
					case 1:
						// @import
						if (depth === 0 && content.charCodeAt(0) === 64)
							return insertRule(content+';'), ''
						break
					// selector
					case 2:
						if (at === 0)
							return content + delimiter
						break
					// at-rule
					case 3:
						switch (at) {
							// @font-face, @page
							case 102:
							case 112:
								return insertRule(selectors[0]+content), ''
							default:
								return content + delimiter
						}
					case -2:
						content.split(needle).forEach(toSheet)
				}
			}
		}
	}))

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)(module)))

/***/ }),
/* 170 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _addBestiary = __webpack_require__(172);

	var _addBestiary2 = _interopRequireDefault(_addBestiary);

	var _addToOrder = __webpack_require__(176);

	var _addToOrder2 = _interopRequireDefault(_addToOrder);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var uuidv4 = __webpack_require__(173);
	exports.default = [function addParticipant(_ref) {
	  var state = _ref.state,
	      props = _ref.props;

	  var uuid = uuidv4();
	  var participants = state.get('participants');
	  participants[uuid] = {
	    id: uuid,
	    dndBeyondId: props.dndBeyondId,
	    name: props.dndBeyondId,
	    initiative: props.initiative,
	    hp: props.hp

	    // Add participant!
	  };state.set('participants', participants);

	  // This is needed in order to add paricipant to the Order group
	  return participants[uuid];
	}, _addBestiary2.default, _addToOrder2.default];

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var uuidv4 = __webpack_require__(173);

	exports.default = [function addBestiary(_ref) {
	  var state = _ref.state,
	      props = _ref.props;

	  var bestiary = state.get('bestiary');
	  bestiary[props.dndBeyondId] = props.statBlockData;
	  state.set('bestiary', bestiary);
	}];

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	var rng = __webpack_require__(174);
	var bytesToUuid = __webpack_require__(175);

	function v4(options, buf, offset) {
	  var i = buf && offset || 0;

	  if (typeof(options) == 'string') {
	    buf = options === 'binary' ? new Array(16) : null;
	    options = null;
	  }
	  options = options || {};

	  var rnds = options.random || (options.rng || rng)();

	  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
	  rnds[6] = (rnds[6] & 0x0f) | 0x40;
	  rnds[8] = (rnds[8] & 0x3f) | 0x80;

	  // Copy bytes to buffer, if provided
	  if (buf) {
	    for (var ii = 0; ii < 16; ++ii) {
	      buf[i + ii] = rnds[ii];
	    }
	  }

	  return buf || bytesToUuid(rnds);
	}

	module.exports = v4;


/***/ }),
/* 174 */
/***/ (function(module, exports) {

	// Unique ID creation requires a high quality random # generator.  In the
	// browser this is a little complicated due to unknown quality of Math.random()
	// and inconsistent support for the `crypto` API.  We do the best we can via
	// feature-detection

	// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
	var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues.bind(crypto)) ||
	                      (typeof(msCrypto) != 'undefined' && msCrypto.getRandomValues.bind(msCrypto));
	if (getRandomValues) {
	  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
	  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

	  module.exports = function whatwgRNG() {
	    getRandomValues(rnds8);
	    return rnds8;
	  };
	} else {
	  // Math.random()-based (RNG)
	  //
	  // If all else fails, use Math.random().  It's fast, but is of unspecified
	  // quality.
	  var rnds = new Array(16);

	  module.exports = function mathRNG() {
	    for (var i = 0, r; i < 16; i++) {
	      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
	      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
	    }

	    return rnds;
	  };
	}


/***/ }),
/* 175 */
/***/ (function(module, exports) {

	/**
	 * Convert array of 16 byte values to UUID string format of the form:
	 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
	 */
	var byteToHex = [];
	for (var i = 0; i < 256; ++i) {
	  byteToHex[i] = (i + 0x100).toString(16).substr(1);
	}

	function bytesToUuid(buf, offset) {
	  var i = offset || 0;
	  var bth = byteToHex;
	  return bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]];
	}

	module.exports = bytesToUuid;


/***/ }),
/* 176 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	exports.default = [function addToOrder(_ref) {
	  var state = _ref.state,
	      props = _ref.props;
	  var id = props.id;

	  var order = state.get('order');
	  var participants = state.get('participants');
	  var selectedParticipant = participants[id];

	  order[selectedParticipant.dndBeyondId] ? order[selectedParticipant.dndBeyondId].ids.push(id) : order[selectedParticipant.dndBeyondId] = {
	    id: selectedParticipant.dndBeyondId,
	    ids: [id],
	    name: selectedParticipant.name,
	    initiative: 0
	  };

	  order[selectedParticipant.dndBeyondId].ids = removeDuplicateIds(order[selectedParticipant.dndBeyondId].ids);

	  state.set('order', order);
	}];


	function removeDuplicateIds(ids) {
	  return [].concat(_toConsumableArray(new Set(ids)));
	}

/***/ }),
/* 177 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = [function removeParticipant(_ref) {
	  var state = _ref.state,
	      props = _ref.props;

	  var participants = state.get('participants');

	  Object.keys(participants).forEach(function (id) {
	    if (id === (props.id || props.uuid)) {
	      delete participants[id];
	    }
	  });

	  state.set('participants', participants);
	}];

/***/ }),
/* 178 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = [function addInitiative(_ref) {
	  var state = _ref.state,
	      props = _ref.props;
	  var initiative = props.initiative,
	      id = props.id;

	  var participants = state.get('participants');
	  participants[id].initiative = initiative;
	  state.set('participants', participants);
	}];

/***/ }),
/* 179 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = [function removeOrderGroup(_ref) {
	  var state = _ref.state,
	      props = _ref.props;

	  var order = state.get('order');
	  var ids = order[props.id].ids;

	  delete order[props.id];

	  state.set('order', order);

	  // This is needed, so we can delete the order group's participants
	  return { ids: ids };
	}, function removeParticipants(_ref2) {
	  var state = _ref2.state,
	      props = _ref2.props;

	  var participants = state.get('participants');

	  props.ids.forEach(function (id) {
	    delete participants[id];
	  });

	  state.set('participants', participants);
	}];

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _removeParticipant = __webpack_require__(177);

	var _removeParticipant2 = _interopRequireDefault(_removeParticipant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var uuidv4 = __webpack_require__(173);
	exports.default = [function removeParticipantFromOrder(_ref) {
	  var state = _ref.state,
	      props = _ref.props;

	  var order = state.get('order');

	  Object.keys(order).forEach(function (orderKey) {
	    order[orderKey].ids = order[orderKey].ids.filter(function (uuid) {
	      return uuid !== props.uuid;
	    });
	  });

	  state.set('order', order);
	}, _removeParticipant2.default];

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(['order.', '.initiative'], ['order.', '.initiative']),
	    _templateObject2 = _taggedTemplateLiteral(['id'], ['id']),
	    _templateObject3 = _taggedTemplateLiteral(['initiative'], ['initiative']);

	var _operators = __webpack_require__(182);

	var _tags = __webpack_require__(125);

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	var uuidv4 = __webpack_require__(173);
	exports.default = [(0, _operators.set)((0, _tags.state)(_templateObject, (0, _tags.props)(_templateObject2)), (0, _tags.props)(_templateObject3))];

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _debounce = __webpack_require__(183);

	Object.defineProperty(exports, 'debounce', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_debounce).default;
	  }
	});

	var _when = __webpack_require__(186);

	Object.defineProperty(exports, 'when', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_when).default;
	  }
	});

	var _wait = __webpack_require__(187);

	Object.defineProperty(exports, 'wait', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_wait).default;
	  }
	});

	var _equals = __webpack_require__(188);

	Object.defineProperty(exports, 'equals', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_equals).default;
	  }
	});

	var _concat = __webpack_require__(189);

	Object.defineProperty(exports, 'concat', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_concat).default;
	  }
	});

	var _increment = __webpack_require__(190);

	Object.defineProperty(exports, 'increment', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_increment).default;
	  }
	});

	var _merge = __webpack_require__(191);

	Object.defineProperty(exports, 'merge', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_merge).default;
	  }
	});

	var _pop = __webpack_require__(192);

	Object.defineProperty(exports, 'pop', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_pop).default;
	  }
	});

	var _push = __webpack_require__(193);

	Object.defineProperty(exports, 'push', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_push).default;
	  }
	});

	var _set = __webpack_require__(194);

	Object.defineProperty(exports, 'set', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_set).default;
	  }
	});

	var _shift = __webpack_require__(195);

	Object.defineProperty(exports, 'shift', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_shift).default;
	  }
	});

	var _splice = __webpack_require__(196);

	Object.defineProperty(exports, 'splice', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_splice).default;
	  }
	});

	var _toggle = __webpack_require__(197);

	Object.defineProperty(exports, 'toggle', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_toggle).default;
	  }
	});

	var _unset = __webpack_require__(198);

	Object.defineProperty(exports, 'unset', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_unset).default;
	  }
	});

	var _unshift = __webpack_require__(199);

	Object.defineProperty(exports, 'unshift', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_unshift).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	//# sourceMappingURL=index.js.map

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _factories = __webpack_require__(184);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _factories.debounce;
	  }
	});
	//# sourceMappingURL=debounce.js.map

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _debounce = __webpack_require__(185);

	Object.defineProperty(exports, 'debounce', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_debounce).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	//# sourceMappingURL=index.js.map

/***/ }),
/* 185 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function createDebounce(time, execution) {
	  function debounce(_ref) {
	    var path = _ref.path;

	    return new Promise(function (resolve) {
	      if (execution.timer) {
	        execution.resolve(path.discard());
	        clearTimeout(execution.timer);
	      }

	      execution.timer = setTimeout(function () {
	        execution.resolve(path.continue());
	        execution.timer = null;
	        execution.resolve = null;
	      }, time);
	      execution.resolve = resolve;
	    });
	  }
	  debounce.displayName = 'debounce - ' + time + 'ms';

	  return debounce;
	}

	function debounceFactory(time) {
	  // New execution on every call
	  var execution = { timer: null, resolve: null };

	  return createDebounce(time, execution);
	}

	debounceFactory.shared = function () {
	  // Shared execution
	  var execution = { timer: null, resolve: null };

	  return function debounceSharedFactory(time) {
	    return createDebounce(time, execution);
	  };
	};

	exports.default = debounceFactory;
	//# sourceMappingURL=debounce.js.map

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tags = __webpack_require__(125);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var HELP_URL = 'http://cerebraljs.com/docs/api/operators.html#when';

	function whenFactory() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  var whenFunc = args.length > 1 ? args[args.length - 1] : null;
	  var valueTemplates = args.length > 1 ? args.slice(0, -1) : args;
	  function when(_ref) {
	    var path = _ref.path,
	        resolve = _ref.resolve;

	    if (valueTemplates.length > 0 && !(valueTemplates[0] instanceof _tags.Tag)) {
	      throw new Error('Cerebral operator.when: You have to use the STATE, MODULE or PROPS tag as values, see: ' + HELP_URL);
	    }
	    if (!path || !path.true || !path.false) {
	      throw new Error('Cerebral operator.when: true/false paths need to be provided, see: http://cerebraljs.com/docs/api/operators.html#when');
	    }
	    var values = valueTemplates.map(function (value) {
	      return resolve.value(value);
	    });
	    var isTrue = Boolean(whenFunc ? whenFunc.apply(undefined, _toConsumableArray(values)) : values[0]);

	    return isTrue ? path.true() : path.false();
	  }

	  when.displayName = 'operator.when(' + args.filter(function (arg) {
	    return typeof arg !== 'function';
	  }).map(function (arg) {
	    return String(arg);
	  }).join(',') + ')';

	  return when;
	}

	exports.default = whenFactory;
	//# sourceMappingURL=when.js.map

/***/ }),
/* 187 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function waitFactory(ms) {
	  function wait(_ref) {
	    var path = _ref.path;

	    return new Promise(function (resolve) {
	      setTimeout(function () {
	        return resolve(path ? path.continue() : null);
	      }, ms);
	    });
	  }
	  wait.displayName = 'wait - ' + ms + 'ms';

	  return wait;
	}

	exports.default = waitFactory;
	//# sourceMappingURL=wait.js.map

/***/ }),
/* 188 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function equalsFactory(target) {
	  function equals(_ref) {
	    var path = _ref.path,
	        resolve = _ref.resolve;

	    if (!resolve.isTag(target, 'state', 'props', 'module')) {
	      throw new Error('Cerebral operator.equals: You have to use the STATE, PROPS or MODULE tag as first argument');
	    }

	    var targetValue = resolve.value(target);

	    return path[targetValue] ? path[targetValue]() : path.otherwise();
	  }

	  equals.displayName = 'operator.equals(' + String(target) + ')';

	  return equals;
	}

	exports.default = equalsFactory;
	//# sourceMappingURL=equals.js.map

/***/ }),
/* 189 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (target, value) {
	  function concat(context) {
	    if (!context.resolve.isTag(target, 'state', 'module')) {
	      throw new Error('Cerebral operator.concat: You have to use the STATE or MODULE tag as first argument');
	    }

	    context[target.type].concat(context.resolve.path(target), context.resolve.value(value));
	  }

	  concat.displayName = 'operator.concat(' + String(target) + ', ' + String(value) + ')';

	  return concat;
	};
	//# sourceMappingURL=concat.js.map

/***/ }),
/* 190 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (target) {
	  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

	  function increment(_ref) {
	    var state = _ref.state,
	        module = _ref.module,
	        props = _ref.props,
	        resolve = _ref.resolve;

	    if (!resolve.isTag(target, 'state', 'props', 'module')) {
	      throw new Error('Cerebral operator.increment: You have to use the STATE, MODULE or PROPS tag as first argument');
	    }

	    var resolvedValue = resolve.value(value);

	    if (!Number.isInteger(resolvedValue)) {
	      throw new Error('Cerebral operator.increment: You must increment by integer values');
	    }

	    var invalidStateMsg = 'Cerebral operator.increment: You must increment integer values';
	    if (target.type === 'state') {
	      state.increment(resolve.path(target), resolvedValue);
	    } else if (target.type === 'module') {
	      module.increment(resolve.path(target), resolvedValue);
	    } else {
	      var result = Object.assign({}, props);
	      var parts = resolve.path(target).split('.');
	      var key = parts.pop();
	      var targetObj = parts.reduce(function (target, key) {
	        return target[key] = Object.assign({}, target[key] || {});
	      }, result);

	      if (!Number.isInteger(targetObj[key])) {
	        throw new Error(invalidStateMsg);
	      }

	      targetObj[key] += resolvedValue;

	      return result;
	    }
	  }

	  increment.displayName = 'operator.increment(' + String(target) + ', ' + String(value) + ')';

	  return increment;
	};
	//# sourceMappingURL=increment.js.map

/***/ }),
/* 191 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (target) {
	  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    values[_key - 1] = arguments[_key];
	  }

	  function merge(context) {
	    var _context$target$type;

	    if (!context.resolve.isTag(target, 'state', 'module')) {
	      throw new Error('Cerebral operator.merge: You have to use the STATE or MODULE tag as first argument');
	    }

	    (_context$target$type = context[target.type]).merge.apply(_context$target$type, [context.resolve.path(target)].concat(_toConsumableArray(values.map(function (value) {
	      if (context.resolve.isTag(value)) {
	        return context.resolve.value(value);
	      }

	      return Object.keys(value).reduce(function (currentValue, key) {
	        currentValue[key] = context.resolve.value(value[key]);

	        return currentValue;
	      }, {});
	    }))));
	  }

	  merge.displayName = 'operator.merge(' + String(target) + ', ' + values.map(function (value) {
	    return String(value);
	  }).join(',') + ')';

	  return merge;
	};

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	//# sourceMappingURL=merge.js.map

/***/ }),
/* 192 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (target) {
	  function pop(context) {
	    if (!context.resolve.isTag(target, 'state', 'module')) {
	      throw new Error('Cerebral operator.pop: You have to use the STATE or MODULE tag as first argument');
	    }

	    context[target.type].pop(context.resolve.path(target));
	  }

	  pop.displayName = 'operator.pop(' + String(target) + ')';

	  return pop;
	};
	//# sourceMappingURL=pop.js.map

/***/ }),
/* 193 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (target, value) {
	  function push(context) {
	    if (!context.resolve.isTag(target, 'state', 'module')) {
	      throw new Error('Cerebral operator.push: You have to use the STATE TAG as first argument');
	    }

	    context[target.type].push(context.resolve.path(target), context.resolve.value(value));
	  }

	  push.displayName = 'operator.push(' + String(target) + ')';

	  return push;
	};
	//# sourceMappingURL=push.js.map

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (target, value) {
	  function set(_ref) {
	    var state = _ref.state,
	        module = _ref.module,
	        props = _ref.props,
	        resolve = _ref.resolve;

	    if (!resolve.isTag(target, 'state', 'props', 'module')) {
	      throw new Error('Cerebral operator.set: You have to use the STATE, PROPS or MODULE tag as first argument');
	    }

	    var resolvedValue = resolve.value(value);

	    if (!resolve.isResolveValue(value) && (0, _utils.isObject)(value)) {
	      resolvedValue = Object.assign({}, resolvedValue);
	    } else if (!resolve.isResolveValue(value) && Array.isArray(value)) {
	      resolvedValue = resolvedValue.slice();
	    }

	    if (target.type === 'state') {
	      state.set(resolve.path(target), resolvedValue);
	    } else if (target.type === 'module') {
	      module.set(resolve.path(target), resolvedValue);
	    } else {
	      var result = Object.assign({}, props);
	      var parts = resolve.path(target).split('.');
	      var key = parts.pop();
	      var targetObj = parts.reduce(function (target, key) {
	        return target[key] = Object.assign({}, target[key] || {});
	      }, result);
	      targetObj[key] = resolvedValue;

	      return result;
	    }
	  }

	  set.displayName = 'operator.set(' + String(target) + ', ' + String(value) + ')';

	  return set;
	};

	var _utils = __webpack_require__(124);
	//# sourceMappingURL=set.js.map

/***/ }),
/* 195 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (target) {
	  function shift(context) {
	    if (!context.resolve.isTag(target, 'state', 'module')) {
	      throw new Error('Cerebral operator.shift: You have to use the STATE or MODULE tag as first argument');
	    }

	    context[target.type].shift(context.resolve.path(target));
	  }

	  shift.displayName = 'operator.shift(' + String(target) + ')';

	  return shift;
	};
	//# sourceMappingURL=shift.js.map

/***/ }),
/* 196 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (target) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }

	  function splice(context) {
	    var _context$target$type;

	    if (!context.resolve.isTag(target, 'state', 'module')) {
	      throw new Error('Cerebral operator.splice: You have to use the STATE or MODULE tag as first argument');
	    }

	    var spliceArgs = args.map(function (arg) {
	      return context.resolve.value(arg);
	    });

	    (_context$target$type = context[target.type]).splice.apply(_context$target$type, [context.resolve.path(target)].concat(_toConsumableArray(spliceArgs)));
	  }

	  splice.displayName = 'operator.splice(' + String(target) + ', ' + args.map(function (arg) {
	    return String(arg);
	  }).join(',') + ')';

	  return splice;
	};

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	//# sourceMappingURL=splice.js.map

/***/ }),
/* 197 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (target) {
	  function toggle(context) {
	    if (!context.resolve.isTag(target, 'state', 'module')) {
	      throw new Error('Cerebral operator.toggle: You have to use the STATE or MODULE tag as first argument');
	    }

	    var path = context.resolve.path(target);

	    context[target.type].toggle(path);
	  }

	  toggle.displayName = 'operator.toggle(' + String(target) + ')';

	  return toggle;
	};
	//# sourceMappingURL=toggle.js.map

/***/ }),
/* 198 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (target) {
	  function unset(context) {
	    if (!context.resolve.isTag(target, 'state', 'module')) {
	      throw new Error('Cerebral operator.unset: You have to use the STATE or MODULE tag as first argument');
	    }

	    context[target.type].unset(context.resolve.path(target));
	  }

	  unset.displayName = 'operator.unset(' + String(target) + ')';

	  return unset;
	};
	//# sourceMappingURL=unset.js.map

/***/ }),
/* 199 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (target, value) {
	  function unshift(context) {
	    if (!context.resolve.isTag(target, 'state', 'module')) {
	      throw new Error('Cerebral operator.unshift: You have to use the STATE or MODULE tag as first argument');
	    }

	    context[target.type].unshift(context.resolve.path(target), context.resolve.value(value));
	  }

	  unshift.displayName = 'operator.unshift(' + String(target) + ', ' + String(value) + ')';

	  return unshift;
	};
	//# sourceMappingURL=unshift.js.map

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(['order.', '.name'], ['order.', '.name']),
	    _templateObject2 = _taggedTemplateLiteral(['id'], ['id']),
	    _templateObject3 = _taggedTemplateLiteral(['name'], ['name']);

	var _operators = __webpack_require__(182);

	var _tags = __webpack_require__(125);

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	exports.default = [(0, _operators.set)((0, _tags.state)(_templateObject, (0, _tags.props)(_templateObject2)), (0, _tags.props)(_templateObject3))];

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var uuidv4 = __webpack_require__(173);

	exports.default = [function setName(_ref) {
	  var state = _ref.state,
	      props = _ref.props;

	  var id = props.id;
	  var participants = state.get('participants');
	  participants[id].name = props.name;
	  state.set('participants', participants);
	}];

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var uuidv4 = __webpack_require__(173);

	exports.default = [function setMaxHp(_ref) {
	  var state = _ref.state,
	      props = _ref.props;

	  var id = props.id;
	  var participants = state.get('participants');
	  participants[id].maxHp = parseInt(props.maxHp);
	  state.set('participants', participants);
	}];

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var uuidv4 = __webpack_require__(173);

	exports.default = [function setCurrentHp(_ref) {
	  var state = _ref.state,
	      props = _ref.props;

	  var id = props.id;
	  var participants = state.get('participants');
	  participants[id].currentHp = parseInt(props.currentHp);
	  state.set('participants', participants);
	}];

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var uuidv4 = __webpack_require__(173);

	exports.default = [function applyDamage(_ref) {
	  var state = _ref.state,
	      props = _ref.props;

	  var id = props.id;
	  var participants = state.get('participants');
	  state.increment('participants.' + id + '.hp', -Math.abs(parseInt(props.damage)));
	}];

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var uuidv4 = __webpack_require__(173);

	exports.default = [function applyHealing(_ref) {
	  var state = _ref.state,
	      props = _ref.props;

	  var id = props.id;
	  var participants = state.get('participants');
	  state.increment('participants.' + id + '.hp', +parseInt(props.heal));
	}];

/***/ }),
/* 206 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = [function setTempHp(_ref) {
	  var state = _ref.state,
	      props = _ref.props;

	  var id = props.id;
	  var participants = state.get('participants');
	  participants[id].tempHp = props.tempHp;
	  state.set('participants', participants);
	}];

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var uuidv4 = __webpack_require__(173);

	exports.default = [function setStatus(_ref) {
	  var state = _ref.state,
	      props = _ref.props;

	  var id = props.id;
	  var participants = state.get('participants');
	  participants[id].status = props.status;
	  state.set('participants', participants);
	}];

/***/ }),
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  z-index: 1;\n  display: flex;\n  margin-bottom: 1rem;\n  align-items: center;\n  line-height: 1rem;\n'], ['\n  position: relative;\n  z-index: 1;\n  display: flex;\n  margin-bottom: 1rem;\n  align-items: center;\n  line-height: 1rem;\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n'], ['\n']),
	    _templateObject3 = _taggedTemplateLiteral(['\n  opacity: 0;\n  transition: opacity ease-in-out 0.2s;\n\n  &:focus,\n  ', ':hover & {\n    opacity: 1;\n  }\n'], ['\n  opacity: 0;\n  transition: opacity ease-in-out 0.2s;\n\n  &:focus,\n  ', ':hover & {\n    opacity: 1;\n  }\n']),
	    _templateObject4 = _taggedTemplateLiteral(['\n  align-items: center;\n'], ['\n  align-items: center;\n']),
	    _templateObject5 = _taggedTemplateLiteral(['\n  flex: 1 1 auto;\n  max-width: 30%;\n  overflow: hidden;\n\n  text-align: center;\n\n  ', ' {\n    width: 100%;\n  }\n'], ['\n  flex: 1 1 auto;\n  max-width: 30%;\n  overflow: hidden;\n\n  text-align: center;\n\n  ', ' {\n    width: 100%;\n  }\n']),
	    _templateObject6 = _taggedTemplateLiteral(['\n  text-align: center;\n  line-height: 27px; // matches height of the inputs\n'], ['\n  text-align: center;\n  line-height: 27px; // matches height of the inputs\n']),
	    _templateObject7 = _taggedTemplateLiteral(['\n  padding: 0.5rem 2rem;\n  background: tomato;\n\n  font-size: 16px;\n  color: white;\n\n  ', ' {\n    display: none;\n  }\n\n  &:hover ', ' {\n    display: flex;\n  }\n\n  &:hover ', ' {\n    display: none;\n  }\n\n  ', ' {\n    border-bottom-color: #fff;\n    color: #fff;\n    text-align: center;\n    font-size: 15px;\n  }\n'], ['\n  padding: 0.5rem 2rem;\n  background: tomato;\n\n  font-size: 16px;\n  color: white;\n\n  ', ' {\n    display: none;\n  }\n\n  &:hover ', ' {\n    display: flex;\n  }\n\n  &:hover ', ' {\n    display: none;\n  }\n\n  ', ' {\n    border-bottom-color: #fff;\n    color: #fff;\n    text-align: center;\n    font-size: 15px;\n  }\n']),
	    _templateObject8 = _taggedTemplateLiteral(['participants'], ['participants']),
	    _templateObject9 = _taggedTemplateLiteral(['removeParticipantFromOrder'], ['removeParticipantFromOrder']),
	    _templateObject10 = _taggedTemplateLiteral(['setName'], ['setName']),
	    _templateObject11 = _taggedTemplateLiteral(['setMaxHp'], ['setMaxHp']),
	    _templateObject12 = _taggedTemplateLiteral(['setCurrentHp'], ['setCurrentHp']),
	    _templateObject13 = _taggedTemplateLiteral(['applyDamage'], ['applyDamage']),
	    _templateObject14 = _taggedTemplateLiteral(['applyHealing'], ['applyHealing']),
	    _templateObject15 = _taggedTemplateLiteral(['setTempHp'], ['setTempHp']),
	    _templateObject16 = _taggedTemplateLiteral(['setStatus'], ['setStatus']);

	var _react = __webpack_require__(81);

	var _react2 = _interopRequireDefault(_react);

	var _react3 = __webpack_require__(116);

	var _tags = __webpack_require__(125);

	var _styledComponents = __webpack_require__(165);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _InlineEdit = __webpack_require__(369);

	var _InlineEdit2 = _interopRequireDefault(_InlineEdit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	var Header = _styledComponents2.default.div(_templateObject);

	var Wrap = _styledComponents2.default.div(_templateObject2);

	var HiddenButton = _styledComponents2.default.button(_templateObject3, Header);

	var HealthInputs = _styledComponents2.default.div(_templateObject4);

	var HealthInput = _styledComponents2.default.div(_templateObject5, _InlineEdit2.default);

	var HealthText = _styledComponents2.default.div(_templateObject6);

	var Health = _styledComponents2.default.div(_templateObject7, HealthInputs, HealthInputs, HealthText, _InlineEdit2.default);

	var Participant = function (_React$Component) {
	  _inherits(Participant, _React$Component);

	  function Participant() {
	    _classCallCheck(this, Participant);

	    return _possibleConstructorReturn(this, (Participant.__proto__ || Object.getPrototypeOf(Participant)).apply(this, arguments));
	  }

	  _createClass(Participant, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var uuid = this.props.uuid;
	      var participant = this.props.participants[uuid];

	      return _react2.default.createElement(
	        Wrap,
	        { key: participant.id, style: { marginBottom: '1em' } },
	        _react2.default.createElement(
	          Header,
	          null,
	          _react2.default.createElement(
	            'div',
	            { style: { 'flex': '1 1 auto' } },
	            _react2.default.createElement(
	              'label',
	              { htmlFor: 'setName' },
	              'Name:'
	            ),
	            _react2.default.createElement(_InlineEdit2.default, {
	              id: 'setName',
	              placeholder: 'setName',
	              value: participant.name,
	              onChange: function onChange(event) {
	                return _this2.props.setName({ id: participant.id, name: event.target.value });
	              }
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: { 'flex': '1 1 auto' } },
	            _react2.default.createElement(
	              'label',
	              { htmlFor: 'setStatus' },
	              'Status:'
	            ),
	            _react2.default.createElement(_InlineEdit2.default, {
	              id: 'setStatus',
	              placeholder: 'none',
	              value: participant.status || '',
	              onChange: function onChange(event) {
	                return _this2.props.setStatus({ id: participant.id, status: event.target.value });
	              }
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              HiddenButton,
	              { onClick: function onClick() {
	                  return _this2.props.removeParticipantFromOrder({ uuid: participant.id });
	                } },
	              'Delete'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          Health,
	          null,
	          _react2.default.createElement(
	            HealthText,
	            null,
	            participant.hp,
	            ' ',
	            participant.tempHp && '(' + participant.tempHp + ')',
	            ' / ',
	            participant.maxHp
	          ),
	          _react2.default.createElement(
	            HealthInputs,
	            null,
	            _react2.default.createElement(
	              HealthInput,
	              null,
	              _react2.default.createElement(_InlineEdit2.default, {
	                id: 'setCurrentHp',
	                placeholder: 'Current HP',
	                value: participant.currentHp || 0,
	                onChange: function onChange(event) {
	                  return _this2.props.setCurrentHp({ id: participant.id, currentHp: event.target.value });
	                }
	              })
	            ),
	            _react2.default.createElement(
	              HealthInput,
	              null,
	              '('
	            ),
	            _react2.default.createElement(
	              HealthInput,
	              null,
	              _react2.default.createElement(_InlineEdit2.default, {
	                id: 'setTempHp',
	                placeholder: 'Temporary HP',
	                value: participant.tempHp || 0,
	                onChange: function onChange(event) {
	                  return _this2.props.setTempHp({ id: participant.id, tempHp: event.target.value });
	                }
	              })
	            ),
	            _react2.default.createElement(
	              HealthInput,
	              null,
	              ') /'
	            ),
	            _react2.default.createElement(
	              HealthInput,
	              null,
	              _react2.default.createElement(_InlineEdit2.default, {
	                id: 'setMaxHp',
	                placeholder: 'Max HP',
	                value: participant.maxHp || 0,
	                onChange: function onChange(event) {
	                  return _this2.props.setMaxHp({ id: participant.id, maxHp: event.target.value });
	                }
	              })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Participant;
	}(_react2.default.Component);

	exports.default = (0, _react3.connect)({
	  participants: (0, _tags.state)(_templateObject8),
	  removeParticipantFromOrder: (0, _tags.signal)(_templateObject9),
	  setName: (0, _tags.signal)(_templateObject10),
	  setMaxHp: (0, _tags.signal)(_templateObject11),
	  setCurrentHp: (0, _tags.signal)(_templateObject12),
	  applyDamage: (0, _tags.signal)(_templateObject13),
	  applyHealing: (0, _tags.signal)(_templateObject14),
	  setTempHp: (0, _tags.signal)(_templateObject15),
	  setStatus: (0, _tags.signal)(_templateObject16)
	}, Participant);

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['\n  border: 1px solid #e1e1e1;\n  margin-bottom: 1rem;\n  overflow: hidden;\n'], ['\n  border: 1px solid #e1e1e1;\n  margin-bottom: 1rem;\n  overflow: hidden;\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n  z-index: 1;\n  display: flex;\n  padding: 1rem;\n  align-items: center;\n  background: #fafafa;\n  box-shadow: 0px 1px #f1f1f1;\n  line-height: 1rem;\n'], ['\n  position: relative;\n  z-index: 1;\n  display: flex;\n  padding: 1rem;\n  align-items: center;\n  background: #fafafa;\n  box-shadow: 0px 1px #f1f1f1;\n  line-height: 1rem;\n']),
	    _templateObject3 = _taggedTemplateLiteral(['\n  opacity: 0;\n  transition: opacity ease-in-out 0.2s;\n\n  &:focus,\n  ', ':hover & {\n    opacity: 1;\n  }\n'], ['\n  opacity: 0;\n  transition: opacity ease-in-out 0.2s;\n\n  &:focus,\n  ', ':hover & {\n    opacity: 1;\n  }\n']),
	    _templateObject4 = _taggedTemplateLiteral(['\n  padding: 1rem;\n  background: #fff;\n'], ['\n  padding: 1rem;\n  background: #fff;\n']),
	    _templateObject5 = _taggedTemplateLiteral(['order'], ['order']),
	    _templateObject6 = _taggedTemplateLiteral(['removeOrderGroup'], ['removeOrderGroup']),
	    _templateObject7 = _taggedTemplateLiteral(['setInitiative'], ['setInitiative']),
	    _templateObject8 = _taggedTemplateLiteral(['setOrderName'], ['setOrderName']);

	var _react = __webpack_require__(81);

	var _react2 = _interopRequireDefault(_react);

	var _react3 = __webpack_require__(116);

	var _tags = __webpack_require__(125);

	var _styledComponents = __webpack_require__(165);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _Participant = __webpack_require__(367);

	var _Participant2 = _interopRequireDefault(_Participant);

	var _InlineEdit = __webpack_require__(369);

	var _InlineEdit2 = _interopRequireDefault(_InlineEdit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	var Group = _styledComponents2.default.div(_templateObject);

	var Header = _styledComponents2.default.div(_templateObject2);

	var HiddenButton = _styledComponents2.default.button(_templateObject3, Header);

	var Body = _styledComponents2.default.div(_templateObject4);

	var OrderGroup = function (_React$Component) {
	  _inherits(OrderGroup, _React$Component);

	  function OrderGroup() {
	    _classCallCheck(this, OrderGroup);

	    return _possibleConstructorReturn(this, (OrderGroup.__proto__ || Object.getPrototypeOf(OrderGroup)).apply(this, arguments));
	  }

	  _createClass(OrderGroup, [{
	    key: 'renderSingular',
	    value: function renderSingular() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        Group,
	        { key: this.group.id },
	        _react2.default.createElement(
	          Header,
	          { style: { 'background': '#fff' } },
	          _react2.default.createElement(
	            'div',
	            { style: { 'flex': '1 1 auto' } },
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Initiative:'
	            ),
	            _react2.default.createElement(_InlineEdit2.default, {
	              value: this.group.initiative,
	              onChange: function onChange(event) {
	                return _this2.props.setInitiative({ id: _this2.group.id, initiative: event.target.value });
	              }
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              HiddenButton,
	              { onClick: function onClick() {
	                  return _this2.props.removeOrderGroup({ id: _this2.group.id });
	                } },
	              'Delete'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          Body,
	          null,
	          this.participants.map(function (uuid, idx) {
	            return _react2.default.createElement(_Participant2.default, { uuid: uuid, key: idx });
	          })
	        )
	      );
	    }
	  }, {
	    key: 'renderMultiple',
	    value: function renderMultiple() {
	      var _this3 = this;

	      return _react2.default.createElement(
	        Group,
	        { key: this.group.id },
	        _react2.default.createElement(
	          Header,
	          null,
	          _react2.default.createElement(
	            'div',
	            { style: { 'flex': '1 1 auto' } },
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Initiative:'
	            ),
	            _react2.default.createElement(_InlineEdit2.default, {
	              value: this.group.initiative,
	              onChange: function onChange(event) {
	                return _this3.props.setInitiative({ id: _this3.group.id, initiative: event.target.value });
	              }
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: { 'flex': '1 1 auto' } },
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Group Name:'
	            ),
	            _react2.default.createElement(_InlineEdit2.default, {
	              id: 'orderName',
	              value: this.group.name,
	              onChange: function onChange(event) {
	                return _this3.props.setOrderName({ id: _this3.group.id, name: event.target.value });
	              }
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              HiddenButton,
	              { onClick: function onClick() {
	                  return _this3.props.removeOrderGroup({ id: _this3.group.id });
	                } },
	              'Delete'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          Body,
	          null,
	          this.participants.map(function (uuid, idx) {
	            return _react2.default.createElement(_Participant2.default, { uuid: uuid, key: idx });
	          })
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var id = this.props.id;
	      this.group = this.props.order[id];
	      this.participants = this.group.ids;

	      return this.participants.length === 1 ? this.renderSingular() : this.renderMultiple();
	    }
	  }]);

	  return OrderGroup;
	}(_react2.default.Component);

	exports.default = (0, _react3.connect)({
	  order: (0, _tags.state)(_templateObject5),
	  removeOrderGroup: (0, _tags.signal)(_templateObject6),
	  setInitiative: (0, _tags.signal)(_templateObject7),
	  setOrderName: (0, _tags.signal)(_templateObject8)
	}, OrderGroup);

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  min-height: 1em;\n  padding: 0.5rem;\n  border: none;\n  border-bottom: 1px dashed transparent;\n\n  border-radius: 0;\n  background-color: transparent;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: red;\n\n  &:hover {\n    border-bottom: 1px dashed #e1e1e1;\n  }\n\n  &::-moz-focus-inner {\n    padding: 0;\n    border: 0;\n  }\n'], ['\n  display: inline-block;\n  min-height: 1em;\n  padding: 0.5rem;\n  border: none;\n  border-bottom: 1px dashed transparent;\n\n  border-radius: 0;\n  background-color: transparent;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: red;\n\n  &:hover {\n    border-bottom: 1px dashed #e1e1e1;\n  }\n\n  &::-moz-focus-inner {\n    padding: 0;\n    border: 0;\n  }\n']);

	var _react = __webpack_require__(81);

	var _react2 = _interopRequireDefault(_react);

	var _styledComponents = __webpack_require__(165);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	var InlineEdit = _styledComponents2.default.input(_templateObject);

	exports.default = InlineEdit;

/***/ })
/******/ ]);