(function (_0x585dx1) {
    'use strict';

    function _0x585dx2() {
        this['init'] = function () {
            _0x585dx3['init']();
            _0x585dxa['init']();
            _0x585dx29['init']();
            _0x585dx13();
        };
        var _0x585dx3 = {
            imgLoaded: function (_0x585dx4, _0x585dx5, _0x585dx6) {
                var _0x585dx7 = _0x585dx4['length'];
                var _0x585dx8 = 0;
                if (_0x585dx7 <= 0) {
                    if (typeof _0x585dx5 === 'function') {
                        _0x585dx5()
                    }
                };
                _0x585dx4['each'](function () {
                    var _0x585dx9 = new Image;
                    _0x585dx9['onload'] = function () {
                        if (typeof _0x585dx6 === 'function') {
                            _0x585dx6()
                        };
                        _0x585dx8++;
                        if (_0x585dx8 >= _0x585dx7) {
                            if (typeof _0x585dx5 === 'function') {
                                _0x585dx5()
                            }
                        };
                    };
                    _0x585dx9['onerror'] = function () {
                        console['warn']('Could not load image')
                    };
                    _0x585dx9['src'] = _0x585dx1(this)['attr']('src');
                });
            },
            init: function () {
                this['imgLoaded'](_0x585dx1('img'), function () {
                    _0x585dx1('body')['addClass']('');
                    setTimeout(function () {
                        _0x585dx1('.preloader')['remove']()
                    }, 2000);
                    setTimeout(function () {
                        _0x585dx1('.ani')['removeClass']('ani')
                    }, 100);
                });
                this['bindControls']();
            },
            bindControls: function () { }
        };
        var _0x585dxa = {
            init: function () {
                this['bindControls']()
            },
            ajax: function (_0x585dxb) {
                var _0x585dxc = {
                    email: _0x585dxb
                };
                _0x585dx1['ajax']({
                    type: 'POST',
                    url: ajaxSettings['url'],
                    data: _0x585dxc,
                    success: function (_0x585dxc) {
                        ajaxSettings['success'](_0x585dxc)
                    },
                    error: function (_0x585dxd) {
                        ajaxSettings['error'](_0x585dxd)
                    },
                    dataType: ajaxSettings['dataType']
                });
            },
            bindControls: function () {
                var _0x585dxe = this;
                var _0x585dxf = false;
                _0x585dx1('.subscribe button')['on']('click', function (_0x585dx10) {
                    if (_0x585dxf === true) {
                        return
                    };
                    var _0x585dx11 = _0x585dx1('.subscribe input[type="email"]');
                    if (_0x585dx11['val']() == '') {
                        _0x585dx10['preventDefault']();
                        return false;
                    };
                    if (Boolean(_0x585dx11[0]['checkValidity']) && (!_0x585dx11[0]['checkValidity']())) {
                        _0x585dx10['preventDefault']();
                        return false;
                    };
                    _0x585dxf = true;
                    _0x585dx1('.subscribe .sub-slide')['animate']({
                        left: 40
                    }, {
                            easing: 'easeInOutExpo',
                            duration: 1250,
                            complete: function () {
                                _0x585dxe['ajax'](_0x585dx11['val']());
                                var _0x585dx12 = this;
                                _0x585dx1('.subscribe input')['fadeTo'](0, 0);
                                _0x585dx1('.subscribe p')['fadeTo'](500, 1);
                                setTimeout(function () {
                                    _0x585dx1('.subscribe p')['fadeTo'](500, 0, function () {
                                        _0x585dx1(this)['hide']()
                                    });
                                    _0x585dx1('.subscribe input')['val']('');
                                    _0x585dx1(_0x585dx12)['animate']({
                                        left: -1 * _0x585dx1(_0x585dx12)['width']() + 40
                                    }, {
                                            easing: 'easeInOutExpo',
                                            duration: 1000,
                                            complete: function () {
                                                _0x585dx1('.subscribe input')['fadeTo'](500, 1);
                                                _0x585dxf = false;
                                            }
                                        });
                                }, 1000);
                            }
                        });
                });
            }
        };
        var _0x585dx13 = function () {
            _0x585dx1(function () {
                var _0x585dx9 = new Image();
                //_0x585dx9['src'] = 'img/flake.png';
                var _0x585dx14 = false;
                var _0x585dx15 = [];

                function _0x585dx16(_0x585dx17) {
                    _0x585dx1['extend'](this, {
                        x: 0,
                        y: 0,
                        z: 0
                    }, _0x585dx17)
                }
                _0x585dx16['prototype']['fromscreen'] = function (_0x585dx18, _0x585dx19) {
                    if (_0x585dx18['z'] !== this['z'] || !this['scalar']) {
                        this['scalar'] = -_0x585dx19['z'] / (-_0x585dx19['z'] + _0x585dx18['z'])
                    };
                    this['x'] = -Math['round']((-_0x585dx19['x'] + _0x585dx18['x']) * this['scalar']);
                    this['y'] = -Math['round']((-_0x585dx19['y'] + _0x585dx18['y']) * this['scalar']);
                    this['z'] = _0x585dx18['z'];
                    this['s'] = this['scalar'];
                    this['scale'] = Math['floor'](Math['random']() * 40 + 1);
                };
                _0x585dx16['prototype']['toscreen'] = function (_0x585dx19) {
                    if (!this['scalar']) {
                        this['scalar'] = -_0x585dx19['z'] / (-_0x585dx19['z'] + this['z'])
                    };
                    return {
                        x: Math['round'](_0x585dx19['x'] - (this['x'] / this['scalar'])),
                        y: Math['round'](_0x585dx19['y'] - (this['y'] / this['scalar'])),
                        z: this['z'],
                        s: this['scalar']
                    };
                };

                function _0x585dx1a(_0x585dx1b, _0x585dx17) {
                    var _0x585dx1c = this;
                    _0x585dx1c['$el'] = _0x585dx1b;
                    _0x585dx1c['canvas'] = _0x585dx1c['$el']['is']('canvas');
                    _0x585dx1c['opts'] = _0x585dx1['extend'](_0x585dx1c, {
                        minopacity: 0.4,
                        color: '#fff',
                        focalpoint: {
                            x: _0x585dx1c['$el'][0]['width'] / 2,
                            y: _0x585dx1c['$el'][0]['height'] / 2,
                            z: -100
                        }
                    }, _0x585dx17);
                    this['init_context']();
                }
                _0x585dx1a['prototype']['init_context'] = function () {
                    if (this['canvas']) {
                        this['context'] = _0x585dx1(this.$el)[0]['getContext']('2d');
                        this['context']['fillStyle'] = this['opts']['color'];
                    }
                };
                _0x585dx1a['prototype']['clear'] = function () {
                    if (this['canvas']) {
                        this['context']['clearRect'](0, 0, this['$el'][0]['width'], this['$el'][0]['height'])
                    }
                };
                _0x585dx1a['prototype']['add'] = function (_0x585dx18) {
                    var _0x585dx1d = _0x585dx18['toscreen'](this['opts']['focalpoint']);
                    var _0x585dx1e = false;
                    if (_0x585dx1d['x'] < -150) {
                        _0x585dx1e = true;
                        _0x585dx1d['x'] = this['$el'][0]['width'] - 4;
                    } else {
                        if (_0x585dx1d['x'] > this['$el'][0]['width']) {
                            _0x585dx1e = true;
                            _0x585dx1d['x'] = -150;
                        }
                    };
                    if (_0x585dx1d['y'] < -150) {
                        _0x585dx1e = true;
                        _0x585dx1d['y'] = this['$el'][0]['height'] - 4;
                    } else {
                        if (_0x585dx1d['y'] > this['$el'][0]['height']) {
                            _0x585dx1e = true;
                            _0x585dx1d['y'] = -150;
                        }
                    };
                    if (_0x585dx1d['z'] < 0) {
                        _0x585dx1e = true;
                        _0x585dx1d['z'] = this['opts']['depth'] - 4;
                    } else {
                        if (_0x585dx1d['z'] > this['opts']['depth']) {
                            _0x585dx1e = true;
                            _0x585dx1d['z'] = 4;
                        }
                    };
                    if (_0x585dx1e) {
                        _0x585dx18['fromscreen'](_0x585dx1d, this['opts']['focalpoint']);
                        _0x585dx1d = _0x585dx18['toscreen'](this['opts']['focalpoint']);
                    };
                    if (this['canvas']) {
                        this['context']['globalAlpha'] = this['opts']['minopacity'] + ((1 - this['opts']['minopacity']) * (_0x585dx1d['z'] / this['depth']));
                        this['context']['beginPath']();
                        this['context']['drawImage'](_0x585dx9, _0x585dx1d['x'], _0x585dx1d['y'], _0x585dx18['scale'], _0x585dx18['scale']);
                        this['context']['closePath']();
                        this['context']['fill']();
                    } else {
                        this['$el']['append'](_0x585dx18['$el']['css']({
                            left: _0x585dx1d['x'],
                            top: _0x585dx1d['y'],
                            backtround: this['opts']['color'],
                            opacity: this['opts']['minopacity'] + ((1 - this['opts']['minopacity']) * (_0x585dx1d['z'] / this['depth']))
                        }))
                    };
                };
                _0x585dx1a['prototype']['draw'] = function (_0x585dx1f) {
                    var _0x585dx1c = this;
                    _0x585dx1c['clear']();
                    for (var _0x585dx20 = 0; _0x585dx20 < _0x585dx1f['length']; _0x585dx20++) {
                        _0x585dx1c['add'](_0x585dx1f[_0x585dx20])
                    };
                };

                function _0x585dx21(_0x585dx1b, _0x585dx17) {
                    var _0x585dx1c = this;
                    _0x585dx1c['$el'] = _0x585dx1b;
                    _0x585dx1c['opts'] = _0x585dx1['extend'](true, {
                        speed: 60,
                        depth: 1000,
                        count: _0x585dx1(window)['width']() * 0.1
                    }, _0x585dx17);
                    _0x585dx1c['particles'] = [];
                    _0x585dx1c['screen'] = new _0x585dx1a(_0x585dx1c.$el, _0x585dx1c['opts']);
                    for (var _0x585dx20 = 0; _0x585dx20 < _0x585dx1c['opts']['count']; _0x585dx20++) {
                        var _0x585dx18 = new _0x585dx16({
                            $el: _0x585dx1c['screen']['canvas'] ? null : _0x585dx1('<div class="particle"></div>')
                        });
                        _0x585dx18['fromscreen']({
                            x: Math['round'](Math['random']() * _0x585dx1c['$el'][0]['width']),
                            y: Math['round'](Math['random']() * _0x585dx1c['$el'][0]['height']),
                            z: Math['round'](Math['pow'](Math['random'](), 4) * _0x585dx1c['screen']['depth'])
                        }, _0x585dx1c['screen']['opts']['focalpoint']);
                        _0x585dx1c['particles']['push'](_0x585dx18);
                    };
                    clearInterval(_0x585dx14);
                    _0x585dx14 = setInterval(function () {
                        for (var _0x585dx20 = 0; _0x585dx20 < _0x585dx1c['opts']['count']; _0x585dx20++) {
                            if (isNaN(_0x585dx15[_0x585dx20])) {
                                _0x585dx15[_0x585dx20] = 0
                            };
                            var _0x585dx22 = Math['floor'](Math['random']() * 100) + 1;
                            if (_0x585dx22 > 45) {
                                _0x585dx15[_0x585dx20] += _0x585dx15[_0x585dx20] >= 0.5 ? 0 : 0.03
                            } else {
                                _0x585dx15[_0x585dx20] += _0x585dx15[_0x585dx20] <= -0.5 ? 0 : -0.03
                            };
                            var _0x585dx18 = _0x585dx1c['particles'][_0x585dx20];
                            _0x585dx18['y'] -= 0.5;
                            _0x585dx18['x'] -= _0x585dx15[_0x585dx20];
                            _0x585dx18['z'] += 0.1;
                        };
                        _0x585dx1c['screen']['draw'](_0x585dx1c['particles']);
                    }, Math['floor'](1000 / _0x585dx1c['opts']['speed']));
                }
                var _0x585dx23 = function (_0x585dx5, _0x585dx24) {
                    var _0x585dx25;
                    _0x585dx24 = _0x585dx24 ? _0x585dx24 : 10;
                    _0x585dx1(window)['on']('resize', function () {
                        clearTimeout(_0x585dx25);
                        _0x585dx25 = setTimeout(function () {
                            if (typeof _0x585dx5 === 'function') {
                                _0x585dx5['call']()
                            }
                        }, _0x585dx24);
                    });
                };
                var _0x585dx18;

                //function _0x585dx26() {
                //    var _0x585dx27 = _0x585dx1(window),
                //        _0x585dx28 = _0x585dx1('#snow');
                //    _0x585dx28[0]['width'] = _0x585dx27['width']();
                //    _0x585dx28[0]['height'] = _0x585dx27['height']();
                //    _0x585dx18 = new _0x585dx21(_0x585dx28);
                //}
                //_0x585dx26();
                _0x585dx23(function () {
                    //_0x585dx26()
                }, 100);
            })
        };
        var _0x585dx29 = {
            zbe: {
                d: '',
                h: '',
                m: '',
                s: ''
            },
            settings: {
                startdate: '0',
                enddate: '0',
                total: 0,
                weeks: 0,
                tdays: 0,
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
                clock: '',
                callback: function () { }
            },
            init: function () {
                if (typeof Counter_Settings !== 'undefined') {
                    _0x585dx29['settings']['startdate'] = Counter_Settings['startdate'];
                    _0x585dx29['settings']['enddate'] = Counter_Settings['enddate'];
                    _0x585dx29['settings']['callback'] = Counter_Settings['callback'];
                };
                _0x585dx29['zbe']['d'] = _0x585dx1('.days canvas')['zbCanvas']();
                _0x585dx29['zbe']['h'] = _0x585dx1('.hours canvas')['zbCanvas']();
                _0x585dx29['zbe']['m'] = _0x585dx1('.minutes canvas')['zbCanvas']();
                _0x585dx29['zbe']['s'] = _0x585dx1('.seconds canvas')['zbCanvas']();
                var windowSize = $(window).width();

                if (windowSize <= 767) {
                    var _0x585dx2a = {
                        diameter: 80,
                        color: '#ffe400',
                        degreeStart: 0,
                        degreeEnd: 360,
                        lineWidth: 3
                    };
                } else {
                    var _0x585dx2a = {
                        diameter: 120,
                        color: '#ffe400',
                        degreeStart: 0,
                        degreeEnd: 360,
                        lineWidth: 3
                    };
                }

              
                _0x585dx29['zbe']['d']['circle']['draw'](_0x585dx2a);
                _0x585dx29['zbe']['h']['circle']['draw'](_0x585dx2a);
                _0x585dx29['zbe']['m']['circle']['draw'](_0x585dx2a);
                _0x585dx29['zbe']['s']['circle']['draw'](_0x585dx2a);
                this['start']();
            },
            calc: function () {
                _0x585dx29['settings']['now'] = Math['floor'](new Date()) / 1000;
                _0x585dx29['settings']['tdays'] = Math['floor']((_0x585dx29['settings']['enddate'] - _0x585dx29['settings']['now']) / 86400);
                _0x585dx29['settings']['weeks'] = Math['floor'](_0x585dx29['settings']['tdays'] / 7);
                _0x585dx29['settings']['days'] = _0x585dx29['settings']['tdays'] - _0x585dx29['settings']['weeks'] * 7;
                _0x585dx29['settings']['hours'] = Math['floor']((_0x585dx29['settings']['enddate'] - _0x585dx29['settings']['now']) % 86400 / 3600);
                _0x585dx29['settings']['minutes'] = Math['floor']((_0x585dx29['settings']['enddate'] - _0x585dx29['settings']['now']) % 86400 % 3600 / 60);
                _0x585dx29['settings']['seconds'] = Math['floor']((_0x585dx29['settings']['enddate'] - _0x585dx29['settings']['now']) % 86400 % 3600 % 60);
                _0x585dx29['settings']['thours'] = Math['floor']((_0x585dx29['settings']['enddate'] - _0x585dx29['settings']['startdate']) / 3600);
                _0x585dx29['settings']['ahours'] = Math['floor']((_0x585dx29['settings']['enddate'] - _0x585dx29['settings']['now']) / 3600);
                _0x585dx29['settings']['tminutes'] = Math['floor']((_0x585dx29['settings']['enddate'] - _0x585dx29['settings']['startdate']) / 60);
                _0x585dx29['settings']['aminutes'] = Math['floor']((_0x585dx29['settings']['enddate'] - _0x585dx29['settings']['now']) / 60);
            },
            set: function () {
                if (_0x585dx29['settings']['now'] >= _0x585dx29['settings']['enddate']) {
                    this['stop']()
                } else {
                    if (_0x585dx1('.days .num')['text']() != _0x585dx29['settings']['tdays']) {
                        _0x585dx1('.days .num')['text'](_0x585dx29['settings']['tdays']);
                        var _0x585dx2b = 360 / Math['floor'](_0x585dx29['settings']['total']);
                        _0x585dx29['zbe']['d']['circle']['draw']({
                            degreeEnd: 360 - (_0x585dx29['settings']['tdays'] * _0x585dx2b)
                        });
                    };
                    if (_0x585dx1('.hours .num')['text']() != _0x585dx29['settings']['hours']) {
                        _0x585dx1('.hours .num')['text'](_0x585dx29['settings']['hours']);
                        _0x585dx29['zbe']['h']['circle']['draw']({
                            degreeEnd: 15 * (24 - _0x585dx29['settings']['hours'])
                        });
                    };
                    if (_0x585dx1('.minutes .num')['text']() != _0x585dx29['settings']['minutes']) {
                        _0x585dx1('.minutes .num')['text'](_0x585dx29['settings']['minutes']);
                        _0x585dx29['zbe']['m']['circle']['draw']({
                            degreeEnd: 6 * (60 - _0x585dx29['settings']['minutes'])
                        });
                    };
                    _0x585dx1('.seconds .num')['text'](_0x585dx29['settings']['seconds']);
                    _0x585dx29['zbe']['s']['circle']['draw']({
                        degreeEnd: 6 * (60 - _0x585dx29['settings']['seconds'])
                    });
                }
            },
            stop: function () {
                clearInterval(_0x585dx29['settings']['clock']);
                _0x585dx1('.days .num')['text']('0');
                _0x585dx29['zbe']['d']['circle']['draw']({
                    degreeEnd: 360
                });
                _0x585dx1('.hours .num')['text']('0');
                _0x585dx29['zbe']['h']['circle']['draw']({
                    degreeEnd: 360
                });
                _0x585dx1('.minutes .num')['text']('0');
                _0x585dx29['zbe']['m']['circle']['draw']({
                    degreeEnd: 360
                });
                _0x585dx1('.seconds .num')['text']('0');
                _0x585dx29['zbe']['s']['circle']['draw']({
                    degreeEnd: 360
                });
                if (typeof _0x585dx29['settings']['callback'] === 'function') {
                    _0x585dx29['settings']['callback']()
                };
            },
            start: function () {
                _0x585dx29['settings']['startdate'] = Math['floor'](new Date(_0x585dx29['settings']['startdate'])) / 1000;
                _0x585dx29['settings']['enddate'] = Math['floor'](new Date(_0x585dx29['settings']['enddate'])) / 1000;
                _0x585dx29['settings']['total'] = Math['floor']((_0x585dx29['settings']['enddate'] - _0x585dx29['settings']['startdate']) / 86400);
                _0x585dx29['settings']['clock'] = setInterval(function () {
                    _0x585dx29['calc']();
                    _0x585dx29['set']();
                }, 1000);
                this['calc']();
                this['set']();
            }
        };
    }
    _0x585dx1(document)['ready'](function () {
        new _0x585dx2()['init']()
    });
})(jQuery);