'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj }

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break } } catch (err) { _d = true; _e = err } finally { try { if (!_n && _i['return']) _i['return']() } finally { if (_d) throw _e } } return _arr } return function (arr, i) { if (Array.isArray(arr)) { return arr } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i) } else { throw new TypeError('Invalid attempt to destructure non-iterable instance') } } }()

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

var BaseForm = function BaseForm(form) {
  _classCallCheck(this, BaseForm)

  if (form instanceof Element && form.tagName === 'FORM') {
    var data = new FormData(form)
    this.params = {}
    var _iteratorNormalCompletion = true
    var _didIteratorError = false
    var _iteratorError = undefined

    try {
      for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _ref = _step.value

        var _ref2 = _slicedToArray(_ref, 2)

        var k = _ref2[0]
        var v = _ref2[1]

        this.params[k] = v
      }
    } catch (err) {
      _didIteratorError = true
      _iteratorError = err
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return()
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError
        }
      }
    }
  } else if ((typeof form === 'undefined' ? 'undefined' : _typeof(form)) === 'object') {
    this.params = form
  } else {
    throw form + ' is must be instance of \'form tags Eelement\' or \'Object\'.'
  }
}

exports.default = BaseForm
