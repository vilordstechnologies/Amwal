/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.3.0
 *
 * Copyright 2016 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Chart=t()}}(function(){var t;return function e(t,n,i){function a(r,s){if(!n[r]){if(!t[r]){var l="function"==typeof require&&require;if(!s&&l)return l(r,!0);if(o)return o(r,!0);var d=new Error("Cannot find module '"+r+"'");throw d.code="MODULE_NOT_FOUND",d}var u=n[r]={exports:{}};t[r][0].call(u.exports,function(e){var n=t[r][1][e];return a(n?n:e)},u,u.exports,e,t,n,i)}return n[r].exports}for(var o="function"==typeof require&&require,r=0;r<i.length;r++)a(i[r]);return a}({1:[function(t,e,n){function i(t){if(t){var e=/^#([a-fA-F0-9]{3})$/,n=/^#([a-fA-F0-9]{6})$/,i=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,a=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,o=/(\w+)/,r=[0,0,0],s=1,l=t.match(e);if(l){l=l[1];for(var d=0;d<r.length;d++)r[d]=parseInt(l[d]+l[d],16)}else if(l=t.match(n)){l=l[1];for(var d=0;d<r.length;d++)r[d]=parseInt(l.slice(2*d,2*d+2),16)}else if(l=t.match(i)){for(var d=0;d<r.length;d++)r[d]=parseInt(l[d+1]);s=parseFloat(l[4])}else if(l=t.match(a)){for(var d=0;d<r.length;d++)r[d]=Math.round(2.55*parseFloat(l[d+1]));s=parseFloat(l[4])}else if(l=t.match(o)){if("transparent"==l[1])return[0,0,0,0];if(r=x[l[1]],!r)return}for(var d=0;d<r.length;d++)r[d]=b(r[d],0,255);return s=s||0==s?b(s,0,1):1,r[3]=s,r}}function a(t){if(t){var e=/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,n=t.match(e);if(n){var i=parseFloat(n[4]),a=b(parseInt(n[1]),0,360),o=b(parseFloat(n[2]),0,100),r=b(parseFloat(n[3]),0,100),s=b(isNaN(i)?1:i,0,1);return[a,o,r,s]}}}function o(t){if(t){var e=/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,n=t.match(e);if(n){var i=parseFloat(n[4]),a=b(parseInt(n[1]),0,360),o=b(parseFloat(n[2]),0,100),r=b(parseFloat(n[3]),0,100),s=b(isNaN(i)?1:i,0,1);return[a,o,r,s]}}}function r(t){var e=i(t);return e&&e.slice(0,3)}function s(t){var e=a(t);return e&&e.slice(0,3)}function l(t){var e=i(t);return e?e[3]:(e=a(t))?e[3]:(e=o(t))?e[3]:void 0}function d(t){return"#"+y(t[0])+y(t[1])+y(t[2])}function u(t,e){return 1>e||t[3]&&t[3]<1?c(t,e):"rgb("+t[0]+", "+t[1]+", "+t[2]+")"}function c(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function h(t,e){if(1>e||t[3]&&t[3]<1)return f(t,e);var n=Math.round(t[0]/255*100),i=Math.round(t[1]/255*100),a=Math.round(t[2]/255*100);return"rgb("+n+"%, "+i+"%, "+a+"%)"}function f(t,e){var n=Math.round(t[0]/255*100),i=Math.round(t[1]/255*100),a=Math.round(t[2]/255*100);return"rgba("+n+"%, "+i+"%, "+a+"%, "+(e||t[3]||1)+")"}function g(t,e){return 1>e||t[3]&&t[3]<1?m(t,e):"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"}function m(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function p(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"}function v(t){return k[t.slice(0,3)]}function b(t,e,n){return Math.min(Math.max(e,t),n)}function y(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}var x=t(5);e.exports={getRgba:i,getHsla:a,getRgb:r,getHsl:s,getHwb:o,getAlpha:l,hexString:d,rgbString:u,rgbaString:c,percentString:h,percentaString:f,hslString:g,hslaString:m,hwbString:p,keyword:v};var k={};for(var S in x)k[x[S]]=S},{5:5}],2:[function(t,e,n){var i=t(4),a=t(1),o=function(t){if(t instanceof o)return t;if(!(this instanceof o))return new o(t);this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1};var e;if("string"==typeof t)if(e=a.getRgba(t))this.setValues("rgb",e);else if(e=a.getHsla(t))this.setValues("hsl",e);else{if(!(e=a.getHwb(t)))throw new Error('Unable to parse color from string "'+t+'"');this.setValues("hwb",e)}else if("object"==typeof t)if(e=t,void 0!==e.r||void 0!==e.red)this.setValues("rgb",e);else if(void 0!==e.l||void 0!==e.lightness)this.setValues("hsl",e);else if(void 0!==e.v||void 0!==e.value)this.setValues("hsv",e);else if(void 0!==e.w||void 0!==e.whiteness)this.setValues("hwb",e);else{if(void 0===e.c&&void 0===e.cyan)throw new Error("Unable to parse color from object "+JSON.stringify(t));this.setValues("cmyk",e)}};o.prototype={rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t%=360,t=0>t?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return a.hexString(this.values.rgb)},rgbString:function(){return a.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return a.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return a.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return a.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return a.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return a.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return a.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],n=0;n<t.length;n++){var i=t[n]/255;e[n]=.03928>=i?i/12.92:Math.pow((i+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),n=t.luminosity();return e>n?(e+.05)/(n+.05):(n+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb,e=(299*t[0]+587*t[1]+114*t[2])/1e3;return 128>e},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;3>e;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,n=(e[0]+t)%360;return e[0]=0>n?360+n:n,this.setValues("hsl",e),this},mix:function(t,e){var n=this,i=t,a=void 0===e?.5:e,o=2*a-1,r=n.alpha()-i.alpha(),s=((o*r===-1?o:(o+r)/(1+o*r))+1)/2,l=1-s;return this.rgb(s*n.red()+l*i.red(),s*n.green()+l*i.green(),s*n.blue()+l*i.blue()).alpha(n.alpha()*a+i.alpha()*(1-a))},toJSON:function(){return this.rgb()},clone:function(){var t,e,n=new o,i=this.values,a=n.values;for(var r in i)i.hasOwnProperty(r)&&(t=i[r],e={}.toString.call(t),"[object Array]"===e?a[r]=t.slice(0):"[object Number]"===e?a[r]=t:console.error("unexpected color value:",t));return n}},o.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},o.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},o.prototype.getValues=function(t){for(var e=this.values,n={},i=0;i<t.length;i++)n[t.charAt(i)]=e[t][i];return 1!==e.alpha&&(n.a=e.alpha),n},o.prototype.setValues=function(t,e){var n,a=this.values,o=this.spaces,r=this.maxes,s=1;if("alpha"===t)s=e;else if(e.length)a[t]=e.slice(0,t.length),s=e[t.length];else if(void 0!==e[t.charAt(0)]){for(n=0;n<t.length;n++)a[t][n]=e[t.charAt(n)];s=e.a}else if(void 0!==e[o[t][0]]){var l=o[t];for(n=0;n<t.length;n++)a[t][n]=e[l[n]];s=e.alpha}if(a.alpha=Math.max(0,Math.min(1,void 0===s?a.alpha:s)),"alpha"===t)return!1;var d;for(n=0;n<t.length;n++)d=Math.max(0,Math.min(r[t][n],a[t][n])),a[t][n]=Math.round(d);for(var u in o)u!==t&&(a[u]=i[t][u](a[t]));return!0},o.prototype.setSpace=function(t,e){var n=e[0];return void 0===n?this.getValues(t):("number"==typeof n&&(n=Array.prototype.slice.call(e)),this.setValues(t,n),this)},o.prototype.setChannel=function(t,e,n){var i=this.values[t];return void 0===n?i[e]:n===i[e]?this:(i[e]=n,this.setValues(t,i),this)},"undefined"!=typeof window&&(window.Color=o),e.exports=o},{1:1,4:4}],3:[function(t,e,n){function i(t){var e,n,i,a=t[0]/255,o=t[1]/255,r=t[2]/255,s=Math.min(a,o,r),l=Math.max(a,o,r),d=l-s;return l==s?e=0:a==l?e=(o-r)/d:o==l?e=2+(r-a)/d:r==l&&(e=4+(a-o)/d),e=Math.min(60*e,360),0>e&&(e+=360),i=(s+l)/2,n=l==s?0:.5>=i?d/(l+s):d/(2-l-s),[e,100*n,100*i]}function a(t){var e,n,i,a=t[0],o=t[1],r=t[2],s=Math.min(a,o,r),l=Math.max(a,o,r),d=l-s;return n=0==l?0:d/l*1e3/10,l==s?e=0:a==l?e=(o-r)/d:o==l?e=2+(r-a)/d:r==l&&(e=4+(a-o)/d),e=Math.min(60*e,360),0>e&&(e+=360),i=l/255*1e3/10,[e,n,i]}function o(t){var e=t[0],n=t[1],a=t[2],o=i(t)[0],r=1/255*Math.min(e,Math.min(n,a)),a=1-1/255*Math.max(e,Math.max(n,a));return[o,100*r,100*a]}function s(t){var e,n,i,a,o=t[0]/255,r=t[1]/255,s=t[2]/255;return a=Math.min(1-o,1-r,1-s),e=(1-o-a)/(1-a)||0,n=(1-r-a)/(1-a)||0,i=(1-s-a)/(1-a)||0,[100*e,100*n,100*i,100*a]}function l(t){return K[JSON.stringify(t)]}function d(t){var e=t[0]/255,n=t[1]/255,i=t[2]/255;e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92;var a=.4124*e+.3576*n+.1805*i,o=.2126*e+.7152*n+.0722*i,r=.0193*e+.1192*n+.9505*i;return[100*a,100*o,100*r]}function u(t){var e,n,i,a=d(t),o=a[0],r=a[1],s=a[2];return o/=95.047,r/=100,s/=108.883,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,s=s>.008856?Math.pow(s,1/3):7.787*s+16/116,e=116*r-16,n=500*(o-r),i=200*(r-s),[e,n,i]}function c(t){return B(u(t))}function h(t){var e,n,i,a,o,r=t[0]/360,s=t[1]/100,l=t[2]/100;if(0==s)return o=255*l,[o,o,o];n=.5>l?l*(1+s):l+s-l*s,e=2*l-n,a=[0,0,0];for(var d=0;3>d;d++)i=r+1/3*-(d-1),0>i&&i++,i>1&&i--,o=1>6*i?e+6*(n-e)*i:1>2*i?n:2>3*i?e+(n-e)*(2/3-i)*6:e,a[d]=255*o;return a}function f(t){var e,n,i=t[0],a=t[1]/100,o=t[2]/100;return 0===o?[0,0,0]:(o*=2,a*=1>=o?o:2-o,n=(o+a)/2,e=2*a/(o+a),[i,100*e,100*n])}function m(t){return o(h(t))}function p(t){return s(h(t))}function v(t){return l(h(t))}function y(t){var e=t[0]/60,n=t[1]/100,i=t[2]/100,a=Math.floor(e)%6,o=e-Math.floor(e),r=255*i*(1-n),s=255*i*(1-n*o),l=255*i*(1-n*(1-o)),i=255*i;switch(a){case 0:return[i,l,r];case 1:return[s,i,r];case 2:return[r,i,l];case 3:return[r,s,i];case 4:return[l,r,i];case 5:return[i,r,s]}}function x(t){var e,n,i=t[0],a=t[1]/100,o=t[2]/100;return n=(2-a)*o,e=a*o,e/=1>=n?n:2-n,e=e||0,n/=2,[i,100*e,100*n]}function k(t){return o(y(t))}function S(t){return s(y(t))}function w(t){return l(y(t))}function _(t){var e,n,i,a,o=t[0]/360,s=t[1]/100,l=t[2]/100,d=s+l;switch(d>1&&(s/=d,l/=d),e=Math.floor(6*o),n=1-l,i=6*o-e,0!=(1&e)&&(i=1-i),a=s+i*(n-s),e){default:case 6:case 0:r=n,g=a,b=s;break;case 1:r=a,g=n,b=s;break;case 2:r=s,g=n,b=a;break;case 3:r=s,g=a,b=n;break;case 4:r=a,g=s,b=n;break;case 5:r=n,g=s,b=a}return[255*r,255*g,255*b]}function M(t){return i(_(t))}function D(t){return a(_(t))}function C(t){return s(_(t))}function T(t){return l(_(t))}function P(t){var e,n,i,a=t[0]/100,o=t[1]/100,r=t[2]/100,s=t[3]/100;return e=1-Math.min(1,a*(1-s)+s),n=1-Math.min(1,o*(1-s)+s),i=1-Math.min(1,r*(1-s)+s),[255*e,255*n,255*i]}function F(t){return i(P(t))}function I(t){return a(P(t))}function A(t){return o(P(t))}function O(t){return l(P(t))}function R(t){var e,n,i,a=t[0]/100,o=t[1]/100,r=t[2]/100;return e=3.2406*a+-1.5372*o+r*-.4986,n=a*-.9689+1.8758*o+.0415*r,i=.0557*a+o*-.204+1.057*r,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:e=12.92*e,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n=12.92*n,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i=12.92*i,e=Math.min(Math.max(0,e),1),n=Math.min(Math.max(0,n),1),i=Math.min(Math.max(0,i),1),[255*e,255*n,255*i]}function W(t){var e,n,i,a=t[0],o=t[1],r=t[2];return a/=95.047,o/=100,r/=108.883,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,e=116*o-16,n=500*(a-o),i=200*(o-r),[e,n,i]}function L(t){return B(W(t))}function V(t){var e,n,i,a,o=t[0],r=t[1],s=t[2];return 8>=o?(n=100*o/903.3,a=7.787*(n/100)+16/116):(n=100*Math.pow((o+16)/116,3),a=Math.pow(n/100,1/3)),e=.008856>=e/95.047?e=95.047*(r/500+a-16/116)/7.787:95.047*Math.pow(r/500+a,3),i=.008859>=i/108.883?i=108.883*(a-s/200-16/116)/7.787:108.883*Math.pow(a-s/200,3),[e,n,i]}function B(t){var e,n,i,a=t[0],o=t[1],r=t[2];return e=Math.atan2(r,o),n=360*e/2/Math.PI,0>n&&(n+=360),i=Math.sqrt(o*o+r*r),[a,i,n]}function Y(t){return R(V(t))}function z(t){var e,n,i,a=t[0],o=t[1],r=t[2];return i=r/360*2*Math.PI,e=o*Math.cos(i),n=o*Math.sin(i),[a,e,n]}function H(t){return V(z(t))}function N(t){return Y(z(t))}function E(t){return X[t]}function U(t){return i(E(t))}function j(t){return a(E(t))}function G(t){return o(E(t))}function q(t){return s(E(t))}function Z(t){return u(E(t))}function J(t){return d(E(t))}e.exports={rgb2hsl:i,rgb2hsv:a,rgb2hwb:o,rgb2cmyk:s,rgb2keyword:l,rgb2xyz:d,rgb2lab:u,rgb2lch:c,hsl2rgb:h,hsl2hsv:f,hsl2hwb:m,hsl2cmyk:p,hsl2keyword:v,hsv2rgb:y,hsv2hsl:x,hsv2hwb:k,hsv2cmyk:S,hsv2keyword:w,hwb2rgb:_,hwb2hsl:M,hwb2hsv:D,hwb2cmyk:C,hwb2keyword:T,cmyk2rgb:P,cmyk2hsl:F,cmyk2hsv:I,cmyk2hwb:A,cmyk2keyword:O,keyword2rgb:E,keyword2hsl:U,keyword2hsv:j,keyword2hwb:G,keyword2cmyk:q,keyword2lab:Z,keyword2xyz:J,xyz2rgb:R,xyz2lab:W,xyz2lch:L,lab2xyz:V,lab2rgb:Y,lab2lch:B,lch2lab:z,lch2xyz:H,lch2rgb:N};var X={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},K={};for(var Q in X)K[JSON.stringify(X[Q])]=Q},{}],4:[function(t,e,n){var i=t(3),a=function(){return new d};for(var o in i){a[o+"Raw"]=function(t){return function(e){return"number"==typeof e&&(e=Array.prototype.slice.call(arguments)),i[t](e)}}(o);var r=/(\w+)2(\w+)/.exec(o),s=r[1],l=r[2];a[s]=a[s]||{},a[s][l]=a[o]=function(t){return function(e){"number"==typeof e&&(e=Array.prototype.slice.call(arguments));var n=i[t](e);if("string"==typeof n||void 0===n)return n;for(var a=0;a<n.length;a++)n[a]=Math.round(n[a]);return n}}(o)}var d=function(){this.convs={}};d.prototype.routeSpace=function(t,e){var n=e[0];return void 0===n?this.getValues(t):("number"==typeof n&&(n=Array.prototype.slice.call(e)),this.setValues(t,n))},d.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this},d.prototype.getValues=function(t){var e=this.convs[t];if(!e){var n=this.space,i=this.convs[n];e=a[n][t](i),this.convs[t]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(t){d.prototype[t]=function(e){return this.routeSpace(t,arguments)}}),e.exports=a},{3:3}],5:[function(t,e,n){e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},{}],6:[function(e,n,i){!function(e,a){"object"==typeof i&&"undefined"!=typeof n?n.exports=a():"function"==typeof t&&t.amd?t(a):e.moment=a()}(this,function(){"use strict";function t(){return mi.apply(null,arguments)}function i(t){mi=t}function a(t){return t instanceof Array||"[object Array]"===Object.prototype.toString.call(t)}function o(t){return null!=t&&"[object Object]"===Object.prototype.toString.call(t)}function r(t){var e;for(e in t)return!1;return!0}function s(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)}function l(t,e){var n,i=[];for(n=0;n<t.length;++n)i.push(e(t[n],n));return i}function d(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function u(t,e){for(var n in e)d(e,n)&&(t[n]=e[n]);return d(e,"toString")&&(t.toString=e.toString),d(e,"valueOf")&&(t.valueOf=e.valueOf),t}function c(t,e,n,i){return be(t,e,n,i,!0).utc()}function h(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function f(t){return null==t._pf&&(t._pf=h()),t._pf}function g(t){if(null==t._isValid){var e=f(t),n=pi.call(e.parsedDateParts,function(t){return null!=t}),i=!isNaN(t._d.getTime())&&e.overflow<0&&!e.empty&&!e.invalidMonth&&!e.invalidWeekday&&!e.nullInput&&!e.invalidFormat&&!e.userInvalidated&&(!e.meridiem||e.meridiem&&n);if(t._strict&&(i=i&&0===e.charsLeftOver&&0===e.unusedTokens.length&&void 0===e.bigHour),null!=Object.isFrozen&&Object.isFrozen(t))return i;t._isValid=i}return t._isValid}function m(t){var e=c(NaN);return null!=t?u(f(e),t):f(e).userInvalidated=!0,e}function p(t){return void 0===t}function v(t,e){var n,i,a;if(p(e._isAMomentObject)||(t._isAMomentObject=e._isAMomentObject),p(e._i)||(t._i=e._i),p(e._f)||(t._f=e._f),p(e._l)||(t._l=e._l),p(e._strict)||(t._strict=e._strict),p(e._tzm)||(t._tzm=e._tzm),p(e._isUTC)||(t._isUTC=e._isUTC),p(e._offset)||(t._offset=e._offset),p(e._pf)||(t._pf=f(e)),p(e._locale)||(t._locale=e._locale),vi.length>0)for(n in vi)i=vi[n],a=e[i],p(a)||(t[i]=a);return t}function b(e){v(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),bi===!1&&(bi=!0,t.updateOffset(this),bi=!1)}function y(t){return t instanceof b||null!=t&&null!=t._isAMomentObject}function x(t){return 0>t?Math.ceil(t)||0:Math.floor(t)}function k(t){var e=+t,n=0;return 0!==e&&isFinite(e)&&(n=x(e)),n}function S(t,e,n){var i,a=Math.min(t.length,e.length),o=Math.abs(t.length-e.length),r=0;for(i=0;a>i;i++)(n&&t[i]!==e[i]||!n&&k(t[i])!==k(e[i]))&&r++;return r+o}function w(e){t.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function _(e,n){var i=!0;return u(function(){if(null!=t.deprecationHandler&&t.deprecationHandler(null,e),i){for(var a,o=[],r=0;r<arguments.length;r++){if(a="","object"==typeof arguments[r]){a+="\n["+r+"] ";for(var s in arguments[0])a+=s+": "+arguments[0][s]+", ";a=a.slice(0,-2)}else a=arguments[r];o.push(a)}w(e+"\nArguments: "+Array.prototype.slice.call(o).join("")+"\n"+(new Error).stack),i=!1}return n.apply(this,arguments)},n)}function M(e,n){null!=t.deprecationHandler&&t.deprecationHandler(e,n),yi[e]||(w(n),yi[e]=!0)}function D(t){return t instanceof Function||"[object Function]"===Object.prototype.toString.call(t)}function C(t){var e,n;for(n in t)e=t[n],D(e)?this[n]=e:this["_"+n]=e;this._config=t,this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function T(t,e){var n,i=u({},t);for(n in e)d(e,n)&&(o(t[n])&&o(e[n])?(i[n]={},u(i[n],t[n]),u(i[n],e[n])):null!=e[n]?i[n]=e[n]:delete i[n]);for(n in t)d(t,n)&&!d(e,n)&&o(t[n])&&(i[n]=u({},i[n]));return i}function P(t){null!=t&&this.set(t)}function F(t,e,n){var i=this._calendar[t]||this._calendar.sameElse;return D(i)?i.call(e,n):i}function I(t){var e=this._longDateFormat[t],n=this._longDateFormat[t.toUpperCase()];return e||!n?e:(this._longDateFormat[t]=n.replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t])}function A(){return this._invalidDate}function O(t){return this._ordinal.replace("%d",t)}function R(t,e,n,i){var a=this._relativeTime[n];return D(a)?a(t,e,n,i):a.replace(/%d/i,t)}function W(t,e){var n=this._relativeTime[t>0?"future":"past"];return D(n)?n(e):n.replace(/%s/i,e)}function L(t,e){var n=t.toLowerCase();Ti[n]=Ti[n+"s"]=Ti[e]=t}function V(t){return"string"==typeof t?Ti[t]||Ti[t.toLowerCase()]:void 0}function B(t){var e,n,i={};for(n in t)d(t,n)&&(e=V(n),e&&(i[e]=t[n]));return i}function Y(t,e){Pi[t]=e}function z(t){var e=[];for(var n in t)e.push({unit:n,priority:Pi[n]});return e.sort(function(t,e){return t.priority-e.priority}),e}function H(e,n){return function(i){return null!=i?(E(this,e,i),t.updateOffset(this,n),this):N(this,e)}}function N(t,e){return t.isValid()?t._d["get"+(t._isUTC?"UTC":"")+e]():NaN}function E(t,e,n){t.isValid()&&t._d["set"+(t._isUTC?"UTC":"")+e](n)}function U(t){return t=V(t),D(this[t])?this[t]():this}function j(t,e){if("object"==typeof t){t=B(t);for(var n=z(t),i=0;i<n.length;i++)this[n[i].unit](t[n[i].unit])}else if(t=V(t),D(this[t]))return this[t](e);return this}function G(t,e,n){var i=""+Math.abs(t),a=e-i.length,o=t>=0;return(o?n?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+i}function q(t,e,n,i){var a=i;"string"==typeof i&&(a=function(){return this[i]()}),t&&(Oi[t]=a),e&&(Oi[e[0]]=function(){return G(a.apply(this,arguments),e[1],e[2])}),n&&(Oi[n]=function(){return this.localeData().ordinal(a.apply(this,arguments),t)})}function Z(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function J(t){var e,n,i=t.match(Fi);for(e=0,n=i.length;n>e;e++)Oi[i[e]]?i[e]=Oi[i[e]]:i[e]=Z(i[e]);return function(e){var a,o="";for(a=0;n>a;a++)o+=i[a]instanceof Function?i[a].call(e,t):i[a];return o}}function X(t,e){return t.isValid()?(e=K(e,t.localeData()),Ai[e]=Ai[e]||J(e),Ai[e](t)):t.localeData().invalidDate()}function K(t,e){function n(t){return e.longDateFormat(t)||t}var i=5;for(Ii.lastIndex=0;i>=0&&Ii.test(t);)t=t.replace(Ii,n),Ii.lastIndex=0,i-=1;return t}function Q(t,e,n){Ki[t]=D(e)?e:function(t,i){return t&&n?n:e}}function $(t,e){return d(Ki,t)?Ki[t](e._strict,e._locale):new RegExp(tt(t))}function tt(t){return et(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,e,n,i,a){return e||n||i||a}))}function et(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function nt(t,e){var n,i=e;for("string"==typeof t&&(t=[t]),"number"==typeof e&&(i=function(t,n){n[e]=k(t)}),n=0;n<t.length;n++)Qi[t[n]]=i}function it(t,e){nt(t,function(t,n,i,a){i._w=i._w||{},e(t,i._w,i,a)})}function at(t,e,n){null!=e&&d(Qi,t)&&Qi[t](e,n._a,n,t)}function ot(t,e){return new Date(Date.UTC(t,e+1,0)).getUTCDate()}function rt(t,e){return t?a(this._months)?this._months[t.month()]:this._months[(this._months.isFormat||la).test(e)?"format":"standalone"][t.month()]:this._months}function st(t,e){return t?a(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[la.test(e)?"format":"standalone"][t.month()]:this._monthsShort}function lt(t,e,n){var i,a,o,r=t.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],i=0;12>i;++i)o=c([2e3,i]),this._shortMonthsParse[i]=this.monthsShort(o,"").toLocaleLowerCase(),this._longMonthsParse[i]=this.months(o,"").toLocaleLowerCase();return n?"MMM"===e?(a=ki.call(this._shortMonthsParse,r),-1!==a?a:null):(a=ki.call(this._longMonthsParse,r),-1!==a?a:null):"MMM"===e?(a=ki.call(this._shortMonthsParse,r),-1!==a?a:(a=ki.call(this._longMonthsParse,r),-1!==a?a:null)):(a=ki.call(this._longMonthsParse,r),-1!==a?a:(a=ki.call(this._shortMonthsParse,r),-1!==a?a:null))}function dt(t,e,n){var i,a,o;if(this._monthsParseExact)return lt.call(this,t,e,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),i=0;12>i;i++){if(a=c([2e3,i]),n&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),n||this._monthsParse[i]||(o="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[i]=new RegExp(o.replace(".",""),"i")),n&&"MMMM"===e&&this._longMonthsParse[i].test(t))return i;if(n&&"MMM"===e&&this._shortMonthsParse[i].test(t))return i;if(!n&&this._monthsParse[i].test(t))return i}}function ut(t,e){var n;if(!t.isValid())return t;if("string"==typeof e)if(/^\d+$/.test(e))e=k(e);else if(e=t.localeData().monthsParse(e),"number"!=typeof e)return t;return n=Math.min(t.date(),ot(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,n),t}function ct(e){return null!=e?(ut(this,e),
t.updateOffset(this,!0),this):N(this,"Month")}function ht(){return ot(this.year(),this.month())}function ft(t){return this._monthsParseExact?(d(this,"_monthsRegex")||mt.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):(d(this,"_monthsShortRegex")||(this._monthsShortRegex=ca),this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex)}function gt(t){return this._monthsParseExact?(d(this,"_monthsRegex")||mt.call(this),t?this._monthsStrictRegex:this._monthsRegex):(d(this,"_monthsRegex")||(this._monthsRegex=ha),this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex)}function mt(){function t(t,e){return e.length-t.length}var e,n,i=[],a=[],o=[];for(e=0;12>e;e++)n=c([2e3,e]),i.push(this.monthsShort(n,"")),a.push(this.months(n,"")),o.push(this.months(n,"")),o.push(this.monthsShort(n,""));for(i.sort(t),a.sort(t),o.sort(t),e=0;12>e;e++)i[e]=et(i[e]),a[e]=et(a[e]);for(e=0;24>e;e++)o[e]=et(o[e]);this._monthsRegex=new RegExp("^("+o.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+i.join("|")+")","i")}function pt(t){return vt(t)?366:365}function vt(t){return t%4===0&&t%100!==0||t%400===0}function bt(){return vt(this.year())}function yt(t,e,n,i,a,o,r){var s=new Date(t,e,n,i,a,o,r);return 100>t&&t>=0&&isFinite(s.getFullYear())&&s.setFullYear(t),s}function xt(t){var e=new Date(Date.UTC.apply(null,arguments));return 100>t&&t>=0&&isFinite(e.getUTCFullYear())&&e.setUTCFullYear(t),e}function kt(t,e,n){var i=7+e-n,a=(7+xt(t,0,i).getUTCDay()-e)%7;return-a+i-1}function St(t,e,n,i,a){var o,r,s=(7+n-i)%7,l=kt(t,i,a),d=1+7*(e-1)+s+l;return 0>=d?(o=t-1,r=pt(o)+d):d>pt(t)?(o=t+1,r=d-pt(t)):(o=t,r=d),{year:o,dayOfYear:r}}function wt(t,e,n){var i,a,o=kt(t.year(),e,n),r=Math.floor((t.dayOfYear()-o-1)/7)+1;return 1>r?(a=t.year()-1,i=r+_t(a,e,n)):r>_t(t.year(),e,n)?(i=r-_t(t.year(),e,n),a=t.year()+1):(a=t.year(),i=r),{week:i,year:a}}function _t(t,e,n){var i=kt(t,e,n),a=kt(t+1,e,n);return(pt(t)-i+a)/7}function Mt(t){return wt(t,this._week.dow,this._week.doy).week}function Dt(){return this._week.dow}function Ct(){return this._week.doy}function Tt(t){var e=this.localeData().week(this);return null==t?e:this.add(7*(t-e),"d")}function Pt(t){var e=wt(this,1,4).week;return null==t?e:this.add(7*(t-e),"d")}function Ft(t,e){return"string"!=typeof t?t:isNaN(t)?(t=e.weekdaysParse(t),"number"==typeof t?t:null):parseInt(t,10)}function It(t,e){return"string"==typeof t?e.weekdaysParse(t)%7||7:isNaN(t)?null:t}function At(t,e){return t?a(this._weekdays)?this._weekdays[t.day()]:this._weekdays[this._weekdays.isFormat.test(e)?"format":"standalone"][t.day()]:this._weekdays}function Ot(t){return t?this._weekdaysShort[t.day()]:this._weekdaysShort}function Rt(t){return t?this._weekdaysMin[t.day()]:this._weekdaysMin}function Wt(t,e,n){var i,a,o,r=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],i=0;7>i;++i)o=c([2e3,1]).day(i),this._minWeekdaysParse[i]=this.weekdaysMin(o,"").toLocaleLowerCase(),this._shortWeekdaysParse[i]=this.weekdaysShort(o,"").toLocaleLowerCase(),this._weekdaysParse[i]=this.weekdays(o,"").toLocaleLowerCase();return n?"dddd"===e?(a=ki.call(this._weekdaysParse,r),-1!==a?a:null):"ddd"===e?(a=ki.call(this._shortWeekdaysParse,r),-1!==a?a:null):(a=ki.call(this._minWeekdaysParse,r),-1!==a?a:null):"dddd"===e?(a=ki.call(this._weekdaysParse,r),-1!==a?a:(a=ki.call(this._shortWeekdaysParse,r),-1!==a?a:(a=ki.call(this._minWeekdaysParse,r),-1!==a?a:null))):"ddd"===e?(a=ki.call(this._shortWeekdaysParse,r),-1!==a?a:(a=ki.call(this._weekdaysParse,r),-1!==a?a:(a=ki.call(this._minWeekdaysParse,r),-1!==a?a:null))):(a=ki.call(this._minWeekdaysParse,r),-1!==a?a:(a=ki.call(this._weekdaysParse,r),-1!==a?a:(a=ki.call(this._shortWeekdaysParse,r),-1!==a?a:null)))}function Lt(t,e,n){var i,a,o;if(this._weekdaysParseExact)return Wt.call(this,t,e,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),i=0;7>i;i++){if(a=c([2e3,1]).day(i),n&&!this._fullWeekdaysParse[i]&&(this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(a,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(a,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(a,"").replace(".",".?")+"$","i")),this._weekdaysParse[i]||(o="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[i]=new RegExp(o.replace(".",""),"i")),n&&"dddd"===e&&this._fullWeekdaysParse[i].test(t))return i;if(n&&"ddd"===e&&this._shortWeekdaysParse[i].test(t))return i;if(n&&"dd"===e&&this._minWeekdaysParse[i].test(t))return i;if(!n&&this._weekdaysParse[i].test(t))return i}}function Vt(t){if(!this.isValid())return null!=t?this:NaN;var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?(t=Ft(t,this.localeData()),this.add(t-e,"d")):e}function Bt(t){if(!this.isValid())return null!=t?this:NaN;var e=(this.day()+7-this.localeData()._week.dow)%7;return null==t?e:this.add(t-e,"d")}function Yt(t){if(!this.isValid())return null!=t?this:NaN;if(null!=t){var e=It(t,this.localeData());return this.day(this.day()%7?e:e-7)}return this.day()||7}function zt(t){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||Et.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):(d(this,"_weekdaysRegex")||(this._weekdaysRegex=ba),this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex)}function Ht(t){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||Et.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(d(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=ya),this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Nt(t){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||Et.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(d(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=xa),this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Et(){function t(t,e){return e.length-t.length}var e,n,i,a,o,r=[],s=[],l=[],d=[];for(e=0;7>e;e++)n=c([2e3,1]).day(e),i=this.weekdaysMin(n,""),a=this.weekdaysShort(n,""),o=this.weekdays(n,""),r.push(i),s.push(a),l.push(o),d.push(i),d.push(a),d.push(o);for(r.sort(t),s.sort(t),l.sort(t),d.sort(t),e=0;7>e;e++)s[e]=et(s[e]),l[e]=et(l[e]),d[e]=et(d[e]);this._weekdaysRegex=new RegExp("^("+d.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+r.join("|")+")","i")}function Ut(){return this.hours()%12||12}function jt(){return this.hours()||24}function Gt(t,e){q(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)})}function qt(t,e){return e._meridiemParse}function Zt(t){return"p"===(t+"").toLowerCase().charAt(0)}function Jt(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"}function Xt(t){return t?t.toLowerCase().replace("_","-"):t}function Kt(t){for(var e,n,i,a,o=0;o<t.length;){for(a=Xt(t[o]).split("-"),e=a.length,n=Xt(t[o+1]),n=n?n.split("-"):null;e>0;){if(i=Qt(a.slice(0,e).join("-")))return i;if(n&&n.length>=e&&S(a,n,!0)>=e-1)break;e--}o++}return null}function Qt(t){var i=null;if(!Ma[t]&&"undefined"!=typeof n&&n&&n.exports)try{i=ka._abbr,e("./locale/"+t),$t(i)}catch(a){}return Ma[t]}function $t(t,e){var n;return t&&(n=p(e)?ne(t):te(t,e),n&&(ka=n)),ka._abbr}function te(t,e){if(null!==e){var n=_a;return e.abbr=t,null!=Ma[t]?(M("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),n=Ma[t]._config):null!=e.parentLocale&&(null!=Ma[e.parentLocale]?n=Ma[e.parentLocale]._config:M("parentLocaleUndefined","specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")),Ma[t]=new P(T(n,e)),$t(t),Ma[t]}return delete Ma[t],null}function ee(t,e){if(null!=e){var n,i=_a;null!=Ma[t]&&(i=Ma[t]._config),e=T(i,e),n=new P(e),n.parentLocale=Ma[t],Ma[t]=n,$t(t)}else null!=Ma[t]&&(null!=Ma[t].parentLocale?Ma[t]=Ma[t].parentLocale:null!=Ma[t]&&delete Ma[t]);return Ma[t]}function ne(t){var e;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return ka;if(!a(t)){if(e=Qt(t))return e;t=[t]}return Kt(t)}function ie(){return xi(Ma)}function ae(t){var e,n=t._a;return n&&-2===f(t).overflow&&(e=n[ta]<0||n[ta]>11?ta:n[ea]<1||n[ea]>ot(n[$i],n[ta])?ea:n[na]<0||n[na]>24||24===n[na]&&(0!==n[ia]||0!==n[aa]||0!==n[oa])?na:n[ia]<0||n[ia]>59?ia:n[aa]<0||n[aa]>59?aa:n[oa]<0||n[oa]>999?oa:-1,f(t)._overflowDayOfYear&&($i>e||e>ea)&&(e=ea),f(t)._overflowWeeks&&-1===e&&(e=ra),f(t)._overflowWeekday&&-1===e&&(e=sa),f(t).overflow=e),t}function oe(t){var e,n,i,a,o,r,s=t._i,l=Da.exec(s)||Ca.exec(s);if(l){for(f(t).iso=!0,e=0,n=Pa.length;n>e;e++)if(Pa[e][1].exec(l[1])){a=Pa[e][0],i=Pa[e][2]!==!1;break}if(null==a)return void(t._isValid=!1);if(l[3]){for(e=0,n=Fa.length;n>e;e++)if(Fa[e][1].exec(l[3])){o=(l[2]||" ")+Fa[e][0];break}if(null==o)return void(t._isValid=!1)}if(!i&&null!=o)return void(t._isValid=!1);if(l[4]){if(!Ta.exec(l[4]))return void(t._isValid=!1);r="Z"}t._f=a+(o||"")+(r||""),ce(t)}else t._isValid=!1}function re(e){var n=Ia.exec(e._i);return null!==n?void(e._d=new Date(+n[1])):(oe(e),void(e._isValid===!1&&(delete e._isValid,t.createFromInputFallback(e))))}function se(t,e,n){return null!=t?t:null!=e?e:n}function le(e){var n=new Date(t.now());return e._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function de(t){var e,n,i,a,o=[];if(!t._d){for(i=le(t),t._w&&null==t._a[ea]&&null==t._a[ta]&&ue(t),t._dayOfYear&&(a=se(t._a[$i],i[$i]),t._dayOfYear>pt(a)&&(f(t)._overflowDayOfYear=!0),n=xt(a,0,t._dayOfYear),t._a[ta]=n.getUTCMonth(),t._a[ea]=n.getUTCDate()),e=0;3>e&&null==t._a[e];++e)t._a[e]=o[e]=i[e];for(;7>e;e++)t._a[e]=o[e]=null==t._a[e]?2===e?1:0:t._a[e];24===t._a[na]&&0===t._a[ia]&&0===t._a[aa]&&0===t._a[oa]&&(t._nextDay=!0,t._a[na]=0),t._d=(t._useUTC?xt:yt).apply(null,o),null!=t._tzm&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[na]=24)}}function ue(t){var e,n,i,a,o,r,s,l;e=t._w,null!=e.GG||null!=e.W||null!=e.E?(o=1,r=4,n=se(e.GG,t._a[$i],wt(ye(),1,4).year),i=se(e.W,1),a=se(e.E,1),(1>a||a>7)&&(l=!0)):(o=t._locale._week.dow,r=t._locale._week.doy,n=se(e.gg,t._a[$i],wt(ye(),o,r).year),i=se(e.w,1),null!=e.d?(a=e.d,(0>a||a>6)&&(l=!0)):null!=e.e?(a=e.e+o,(e.e<0||e.e>6)&&(l=!0)):a=o),1>i||i>_t(n,o,r)?f(t)._overflowWeeks=!0:null!=l?f(t)._overflowWeekday=!0:(s=St(n,i,a,o,r),t._a[$i]=s.year,t._dayOfYear=s.dayOfYear)}function ce(e){if(e._f===t.ISO_8601)return void oe(e);e._a=[],f(e).empty=!0;var n,i,a,o,r,s=""+e._i,l=s.length,d=0;for(a=K(e._f,e._locale).match(Fi)||[],n=0;n<a.length;n++)o=a[n],i=(s.match($(o,e))||[])[0],i&&(r=s.substr(0,s.indexOf(i)),r.length>0&&f(e).unusedInput.push(r),s=s.slice(s.indexOf(i)+i.length),d+=i.length),Oi[o]?(i?f(e).empty=!1:f(e).unusedTokens.push(o),at(o,i,e)):e._strict&&!i&&f(e).unusedTokens.push(o);f(e).charsLeftOver=l-d,s.length>0&&f(e).unusedInput.push(s),e._a[na]<=12&&f(e).bigHour===!0&&e._a[na]>0&&(f(e).bigHour=void 0),f(e).parsedDateParts=e._a.slice(0),f(e).meridiem=e._meridiem,e._a[na]=he(e._locale,e._a[na],e._meridiem),de(e),ae(e)}function he(t,e,n){var i;return null==n?e:null!=t.meridiemHour?t.meridiemHour(e,n):null!=t.isPM?(i=t.isPM(n),i&&12>e&&(e+=12),i||12!==e||(e=0),e):e}function fe(t){var e,n,i,a,o;if(0===t._f.length)return f(t).invalidFormat=!0,void(t._d=new Date(NaN));for(a=0;a<t._f.length;a++)o=0,e=v({},t),null!=t._useUTC&&(e._useUTC=t._useUTC),e._f=t._f[a],ce(e),g(e)&&(o+=f(e).charsLeftOver,o+=10*f(e).unusedTokens.length,f(e).score=o,(null==i||i>o)&&(i=o,n=e));u(t,n||e)}function ge(t){if(!t._d){var e=B(t._i);t._a=l([e.year,e.month,e.day||e.date,e.hour,e.minute,e.second,e.millisecond],function(t){return t&&parseInt(t,10)}),de(t)}}function me(t){var e=new b(ae(pe(t)));return e._nextDay&&(e.add(1,"d"),e._nextDay=void 0),e}function pe(t){var e=t._i,n=t._f;return t._locale=t._locale||ne(t._l),null===e||void 0===n&&""===e?m({nullInput:!0}):("string"==typeof e&&(t._i=e=t._locale.preparse(e)),y(e)?new b(ae(e)):(a(n)?fe(t):s(e)?t._d=e:n?ce(t):ve(t),g(t)||(t._d=null),t))}function ve(e){var n=e._i;void 0===n?e._d=new Date(t.now()):s(n)?e._d=new Date(n.valueOf()):"string"==typeof n?re(e):a(n)?(e._a=l(n.slice(0),function(t){return parseInt(t,10)}),de(e)):"object"==typeof n?ge(e):"number"==typeof n?e._d=new Date(n):t.createFromInputFallback(e)}function be(t,e,n,i,s){var l={};return"boolean"==typeof n&&(i=n,n=void 0),(o(t)&&r(t)||a(t)&&0===t.length)&&(t=void 0),l._isAMomentObject=!0,l._useUTC=l._isUTC=s,l._l=n,l._i=t,l._f=e,l._strict=i,me(l)}function ye(t,e,n,i){return be(t,e,n,i,!1)}function xe(t,e){var n,i;if(1===e.length&&a(e[0])&&(e=e[0]),!e.length)return ye();for(n=e[0],i=1;i<e.length;++i)(!e[i].isValid()||e[i][t](n))&&(n=e[i]);return n}function ke(){var t=[].slice.call(arguments,0);return xe("isBefore",t)}function Se(){var t=[].slice.call(arguments,0);return xe("isAfter",t)}function we(t){var e=B(t),n=e.year||0,i=e.quarter||0,a=e.month||0,o=e.week||0,r=e.day||0,s=e.hour||0,l=e.minute||0,d=e.second||0,u=e.millisecond||0;this._milliseconds=+u+1e3*d+6e4*l+1e3*s*60*60,this._days=+r+7*o,this._months=+a+3*i+12*n,this._data={},this._locale=ne(),this._bubble()}function _e(t){return t instanceof we}function Me(t){return 0>t?-1*Math.round(-1*t):Math.round(t)}function De(t,e){q(t,0,0,function(){var t=this.utcOffset(),n="+";return 0>t&&(t=-t,n="-"),n+G(~~(t/60),2)+e+G(~~t%60,2)})}function Ce(t,e){var n=(e||"").match(t)||[],i=n[n.length-1]||[],a=(i+"").match(Wa)||["-",0,0],o=+(60*a[1])+k(a[2]);return"+"===a[0]?o:-o}function Te(e,n){var i,a;return n._isUTC?(i=n.clone(),a=(y(e)||s(e)?e.valueOf():ye(e).valueOf())-i.valueOf(),i._d.setTime(i._d.valueOf()+a),t.updateOffset(i,!1),i):ye(e).local()}function Pe(t){return 15*-Math.round(t._d.getTimezoneOffset()/15)}function Fe(e,n){var i,a=this._offset||0;return this.isValid()?null!=e?("string"==typeof e?e=Ce(Zi,e):Math.abs(e)<16&&(e=60*e),!this._isUTC&&n&&(i=Pe(this)),this._offset=e,this._isUTC=!0,null!=i&&this.add(i,"m"),a!==e&&(!n||this._changeInProgress?Ge(this,He(e-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,t.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?a:Pe(this):null!=e?this:NaN}function Ie(t,e){return null!=t?("string"!=typeof t&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()}function Ae(t){return this.utcOffset(0,t)}function Oe(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(Pe(this),"m")),this}function Re(){if(this._tzm)this.utcOffset(this._tzm);else if("string"==typeof this._i){var t=Ce(qi,this._i);0===t?this.utcOffset(0,!0):this.utcOffset(Ce(qi,this._i))}return this}function We(t){return this.isValid()?(t=t?ye(t).utcOffset():0,(this.utcOffset()-t)%60===0):!1}function Le(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ve(){if(!p(this._isDSTShifted))return this._isDSTShifted;var t={};if(v(t,this),t=pe(t),t._a){var e=t._isUTC?c(t._a):ye(t._a);this._isDSTShifted=this.isValid()&&S(t._a,e.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Be(){return this.isValid()?!this._isUTC:!1}function Ye(){return this.isValid()?this._isUTC:!1}function ze(){return this.isValid()?this._isUTC&&0===this._offset:!1}function He(t,e){var n,i,a,o=t,r=null;return _e(t)?o={ms:t._milliseconds,d:t._days,M:t._months}:"number"==typeof t?(o={},e?o[e]=t:o.milliseconds=t):(r=La.exec(t))?(n="-"===r[1]?-1:1,o={y:0,d:k(r[ea])*n,h:k(r[na])*n,m:k(r[ia])*n,s:k(r[aa])*n,ms:k(Me(1e3*r[oa]))*n}):(r=Va.exec(t))?(n="-"===r[1]?-1:1,o={y:Ne(r[2],n),M:Ne(r[3],n),w:Ne(r[4],n),d:Ne(r[5],n),h:Ne(r[6],n),m:Ne(r[7],n),s:Ne(r[8],n)}):null==o?o={}:"object"==typeof o&&("from"in o||"to"in o)&&(a=Ue(ye(o.from),ye(o.to)),o={},o.ms=a.milliseconds,o.M=a.months),i=new we(o),_e(t)&&d(t,"_locale")&&(i._locale=t._locale),i}function Ne(t,e){var n=t&&parseFloat(t.replace(",","."));return(isNaN(n)?0:n)*e}function Ee(t,e){var n={milliseconds:0,months:0};return n.months=e.month()-t.month()+12*(e.year()-t.year()),t.clone().add(n.months,"M").isAfter(e)&&--n.months,n.milliseconds=+e-+t.clone().add(n.months,"M"),n}function Ue(t,e){var n;return t.isValid()&&e.isValid()?(e=Te(e,t),t.isBefore(e)?n=Ee(t,e):(n=Ee(e,t),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function je(t,e){return function(n,i){var a,o;return null===i||isNaN(+i)||(M(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),o=n,n=i,i=o),n="string"==typeof n?+n:n,a=He(n,i),Ge(this,a,t),this}}function Ge(e,n,i,a){var o=n._milliseconds,r=Me(n._days),s=Me(n._months);e.isValid()&&(a=null==a?!0:a,o&&e._d.setTime(e._d.valueOf()+o*i),r&&E(e,"Date",N(e,"Date")+r*i),s&&ut(e,N(e,"Month")+s*i),a&&t.updateOffset(e,r||s))}function qe(t,e){var n=t.diff(e,"days",!0);return-6>n?"sameElse":-1>n?"lastWeek":0>n?"lastDay":1>n?"sameDay":2>n?"nextDay":7>n?"nextWeek":"sameElse"}function Ze(e,n){var i=e||ye(),a=Te(i,this).startOf("day"),o=t.calendarFormat(this,a)||"sameElse",r=n&&(D(n[o])?n[o].call(this,i):n[o]);return this.format(r||this.localeData().calendar(o,this,ye(i)))}function Je(){return new b(this)}function Xe(t,e){var n=y(t)?t:ye(t);return this.isValid()&&n.isValid()?(e=V(p(e)?"millisecond":e),"millisecond"===e?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(e).valueOf()):!1}function Ke(t,e){var n=y(t)?t:ye(t);return this.isValid()&&n.isValid()?(e=V(p(e)?"millisecond":e),"millisecond"===e?this.valueOf()<n.valueOf():this.clone().endOf(e).valueOf()<n.valueOf()):!1}function Qe(t,e,n,i){return i=i||"()",("("===i[0]?this.isAfter(t,n):!this.isBefore(t,n))&&(")"===i[1]?this.isBefore(e,n):!this.isAfter(e,n))}function $e(t,e){var n,i=y(t)?t:ye(t);return this.isValid()&&i.isValid()?(e=V(e||"millisecond"),"millisecond"===e?this.valueOf()===i.valueOf():(n=i.valueOf(),this.clone().startOf(e).valueOf()<=n&&n<=this.clone().endOf(e).valueOf())):!1}function tn(t,e){return this.isSame(t,e)||this.isAfter(t,e)}function en(t,e){return this.isSame(t,e)||this.isBefore(t,e)}function nn(t,e,n){var i,a,o,r;return this.isValid()?(i=Te(t,this),i.isValid()?(a=6e4*(i.utcOffset()-this.utcOffset()),e=V(e),"year"===e||"month"===e||"quarter"===e?(r=an(this,i),"quarter"===e?r/=3:"year"===e&&(r/=12)):(o=this-i,r="second"===e?o/1e3:"minute"===e?o/6e4:"hour"===e?o/36e5:"day"===e?(o-a)/864e5:"week"===e?(o-a)/6048e5:o),n?r:x(r)):NaN):NaN}function an(t,e){var n,i,a=12*(e.year()-t.year())+(e.month()-t.month()),o=t.clone().add(a,"months");return 0>e-o?(n=t.clone().add(a-1,"months"),i=(e-o)/(o-n)):(n=t.clone().add(a+1,"months"),i=(e-o)/(n-o)),-(a+i)||0}function on(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function rn(){var t=this.clone().utc();return 0<t.year()&&t.year()<=9999?D(Date.prototype.toISOString)?this.toDate().toISOString():X(t,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):X(t,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function sn(e){e||(e=this.isUtc()?t.defaultFormatUtc:t.defaultFormat);var n=X(this,e);return this.localeData().postformat(n)}function ln(t,e){return this.isValid()&&(y(t)&&t.isValid()||ye(t).isValid())?He({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function dn(t){return this.from(ye(),t)}function un(t,e){return this.isValid()&&(y(t)&&t.isValid()||ye(t).isValid())?He({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function cn(t){return this.to(ye(),t)}function hn(t){var e;return void 0===t?this._locale._abbr:(e=ne(t),null!=e&&(this._locale=e),this)}function fn(){return this._locale}function gn(t){switch(t=V(t)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===t&&this.weekday(0),"isoWeek"===t&&this.isoWeekday(1),"quarter"===t&&this.month(3*Math.floor(this.month()/3)),this}function mn(t){return t=V(t),void 0===t||"millisecond"===t?this:("date"===t&&(t="day"),this.startOf(t).add(1,"isoWeek"===t?"week":t).subtract(1,"ms"))}function pn(){return this._d.valueOf()-6e4*(this._offset||0)}function vn(){return Math.floor(this.valueOf()/1e3)}function bn(){return new Date(this.valueOf())}function yn(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]}function xn(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}}function kn(){return this.isValid()?this.toISOString():null}function Sn(){return g(this)}function wn(){return u({},f(this))}function _n(){return f(this).overflow}function Mn(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Dn(t,e){q(0,[t,t.length],0,e)}function Cn(t){return In.call(this,t,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Tn(t){return In.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)}function Pn(){return _t(this.year(),1,4)}function Fn(){var t=this.localeData()._week;return _t(this.year(),t.dow,t.doy)}function In(t,e,n,i,a){var o;return null==t?wt(this,i,a).year:(o=_t(t,i,a),e>o&&(e=o),An.call(this,t,e,n,i,a))}function An(t,e,n,i,a){var o=St(t,e,n,i,a),r=xt(o.year,0,o.dayOfYear);return this.year(r.getUTCFullYear()),this.month(r.getUTCMonth()),this.date(r.getUTCDate()),this}function On(t){return null==t?Math.ceil((this.month()+1)/3):this.month(3*(t-1)+this.month()%3)}function Rn(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==t?e:this.add(t-e,"d")}function Wn(t,e){e[oa]=k(1e3*("0."+t))}function Ln(){return this._isUTC?"UTC":""}function Vn(){return this._isUTC?"Coordinated Universal Time":""}function Bn(t){return ye(1e3*t)}function Yn(){return ye.apply(null,arguments).parseZone()}function zn(t){return t}function Hn(t,e,n,i){var a=ne(),o=c().set(i,e);return a[n](o,t)}function Nn(t,e,n){if("number"==typeof t&&(e=t,t=void 0),t=t||"",null!=e)return Hn(t,e,n,"month");var i,a=[];for(i=0;12>i;i++)a[i]=Hn(t,i,n,"month");return a}function En(t,e,n,i){"boolean"==typeof t?("number"==typeof e&&(n=e,e=void 0),e=e||""):(e=t,n=e,t=!1,"number"==typeof e&&(n=e,e=void 0),e=e||"");var a=ne(),o=t?a._week.dow:0;if(null!=n)return Hn(e,(n+o)%7,i,"day");var r,s=[];for(r=0;7>r;r++)s[r]=Hn(e,(r+o)%7,i,"day");return s}function Un(t,e){return Nn(t,e,"months")}function jn(t,e){return Nn(t,e,"monthsShort")}function Gn(t,e,n){return En(t,e,n,"weekdays")}function qn(t,e,n){return En(t,e,n,"weekdaysShort")}function Zn(t,e,n){return En(t,e,n,"weekdaysMin")}function Jn(){var t=this._data;return this._milliseconds=Ja(this._milliseconds),this._days=Ja(this._days),this._months=Ja(this._months),t.milliseconds=Ja(t.milliseconds),t.seconds=Ja(t.seconds),t.minutes=Ja(t.minutes),t.hours=Ja(t.hours),t.months=Ja(t.months),t.years=Ja(t.years),this}function Xn(t,e,n,i){var a=He(e,n);return t._milliseconds+=i*a._milliseconds,t._days+=i*a._days,t._months+=i*a._months,t._bubble()}function Kn(t,e){return Xn(this,t,e,1)}function Qn(t,e){return Xn(this,t,e,-1)}function $n(t){return 0>t?Math.floor(t):Math.ceil(t)}function ti(){var t,e,n,i,a,o=this._milliseconds,r=this._days,s=this._months,l=this._data;return o>=0&&r>=0&&s>=0||0>=o&&0>=r&&0>=s||(o+=864e5*$n(ni(s)+r),r=0,s=0),l.milliseconds=o%1e3,t=x(o/1e3),l.seconds=t%60,e=x(t/60),l.minutes=e%60,n=x(e/60),l.hours=n%24,r+=x(n/24),a=x(ei(r)),s+=a,r-=$n(ni(a)),i=x(s/12),s%=12,l.days=r,l.months=s,l.years=i,this}function ei(t){return 4800*t/146097}function ni(t){return 146097*t/4800}function ii(t){var e,n,i=this._milliseconds;if(t=V(t),"month"===t||"year"===t)return e=this._days+i/864e5,n=this._months+ei(e),"month"===t?n:n/12;switch(e=this._days+Math.round(ni(this._months)),t){case"week":return e/7+i/6048e5;case"day":return e+i/864e5;case"hour":return 24*e+i/36e5;case"minute":return 1440*e+i/6e4;case"second":return 86400*e+i/1e3;case"millisecond":return Math.floor(864e5*e)+i;default:throw new Error("Unknown unit "+t)}}function ai(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*k(this._months/12)}function oi(t){return function(){return this.as(t)}}function ri(t){return t=V(t),this[t+"s"]()}function si(t){return function(){return this._data[t]}}function li(){return x(this.days()/7)}function di(t,e,n,i,a){return a.relativeTime(e||1,!!n,t,i)}function ui(t,e,n){var i=He(t).abs(),a=ho(i.as("s")),o=ho(i.as("m")),r=ho(i.as("h")),s=ho(i.as("d")),l=ho(i.as("M")),d=ho(i.as("y")),u=a<fo.s&&["s",a]||1>=o&&["m"]||o<fo.m&&["mm",o]||1>=r&&["h"]||r<fo.h&&["hh",r]||1>=s&&["d"]||s<fo.d&&["dd",s]||1>=l&&["M"]||l<fo.M&&["MM",l]||1>=d&&["y"]||["yy",d];return u[2]=e,u[3]=+t>0,u[4]=n,di.apply(null,u)}function ci(t){return void 0===t?ho:"function"==typeof t?(ho=t,!0):!1}function hi(t,e){return void 0===fo[t]?!1:void 0===e?fo[t]:(fo[t]=e,!0)}function fi(t){var e=this.localeData(),n=ui(this,!t,e);return t&&(n=e.pastFuture(+this,n)),e.postformat(n)}function gi(){var t,e,n,i=go(this._milliseconds)/1e3,a=go(this._days),o=go(this._months);t=x(i/60),e=x(t/60),i%=60,t%=60,n=x(o/12),o%=12;var r=n,s=o,l=a,d=e,u=t,c=i,h=this.asSeconds();return h?(0>h?"-":"")+"P"+(r?r+"Y":"")+(s?s+"M":"")+(l?l+"D":"")+(d||u||c?"T":"")+(d?d+"H":"")+(u?u+"M":"")+(c?c+"S":""):"P0D"}var mi,pi;pi=Array.prototype.some?Array.prototype.some:function(t){for(var e=Object(this),n=e.length>>>0,i=0;n>i;i++)if(i in e&&t.call(this,e[i],i,e))return!0;return!1};var vi=t.momentProperties=[],bi=!1,yi={};t.suppressDeprecationWarnings=!1,t.deprecationHandler=null;var xi;xi=Object.keys?Object.keys:function(t){var e,n=[];for(e in t)d(t,e)&&n.push(e);return n};var ki,Si={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},wi={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},_i="Invalid date",Mi="%d",Di=/\d{1,2}/,Ci={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Ti={},Pi={},Fi=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Ii=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ai={},Oi={},Ri=/\d/,Wi=/\d\d/,Li=/\d{3}/,Vi=/\d{4}/,Bi=/[+-]?\d{6}/,Yi=/\d\d?/,zi=/\d\d\d\d?/,Hi=/\d\d\d\d\d\d?/,Ni=/\d{1,3}/,Ei=/\d{1,4}/,Ui=/[+-]?\d{1,6}/,ji=/\d+/,Gi=/[+-]?\d+/,qi=/Z|[+-]\d\d:?\d\d/gi,Zi=/Z|[+-]\d\d(?::?\d\d)?/gi,Ji=/[+-]?\d+(\.\d{1,3})?/,Xi=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Ki={},Qi={},$i=0,ta=1,ea=2,na=3,ia=4,aa=5,oa=6,ra=7,sa=8;ki=Array.prototype.indexOf?Array.prototype.indexOf:function(t){var e;for(e=0;e<this.length;++e)if(this[e]===t)return e;return-1},q("M",["MM",2],"Mo",function(){return this.month()+1}),q("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)}),q("MMMM",0,0,function(t){return this.localeData().months(this,t)}),L("month","M"),Y("month",8),Q("M",Yi),Q("MM",Yi,Wi),Q("MMM",function(t,e){return e.monthsShortRegex(t)}),Q("MMMM",function(t,e){return e.monthsRegex(t)}),nt(["M","MM"],function(t,e){e[ta]=k(t)-1}),nt(["MMM","MMMM"],function(t,e,n,i){var a=n._locale.monthsParse(t,i,n._strict);null!=a?e[ta]=a:f(n).invalidMonth=t});var la=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,da="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ua="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),ca=Xi,ha=Xi;q("Y",0,0,function(){var t=this.year();return 9999>=t?""+t:"+"+t}),q(0,["YY",2],0,function(){return this.year()%100}),q(0,["YYYY",4],0,"year"),q(0,["YYYYY",5],0,"year"),q(0,["YYYYYY",6,!0],0,"year"),L("year","y"),Y("year",1),Q("Y",Gi),Q("YY",Yi,Wi),Q("YYYY",Ei,Vi),Q("YYYYY",Ui,Bi),Q("YYYYYY",Ui,Bi),nt(["YYYYY","YYYYYY"],$i),nt("YYYY",function(e,n){n[$i]=2===e.length?t.parseTwoDigitYear(e):k(e)}),nt("YY",function(e,n){n[$i]=t.parseTwoDigitYear(e)}),nt("Y",function(t,e){e[$i]=parseInt(t,10)}),t.parseTwoDigitYear=function(t){return k(t)+(k(t)>68?1900:2e3)};var fa=H("FullYear",!0);q("w",["ww",2],"wo","week"),q("W",["WW",2],"Wo","isoWeek"),L("week","w"),L("isoWeek","W"),Y("week",5),Y("isoWeek",5),Q("w",Yi),Q("ww",Yi,Wi),Q("W",Yi),Q("WW",Yi,Wi),it(["w","ww","W","WW"],function(t,e,n,i){e[i.substr(0,1)]=k(t)});var ga={dow:0,doy:6};q("d",0,"do","day"),q("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)}),q("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)}),q("dddd",0,0,function(t){return this.localeData().weekdays(this,t)}),q("e",0,0,"weekday"),q("E",0,0,"isoWeekday"),L("day","d"),L("weekday","e"),L("isoWeekday","E"),Y("day",11),Y("weekday",11),Y("isoWeekday",11),Q("d",Yi),Q("e",Yi),Q("E",Yi),Q("dd",function(t,e){return e.weekdaysMinRegex(t)}),Q("ddd",function(t,e){return e.weekdaysShortRegex(t)}),Q("dddd",function(t,e){return e.weekdaysRegex(t)}),it(["dd","ddd","dddd"],function(t,e,n,i){var a=n._locale.weekdaysParse(t,i,n._strict);null!=a?e.d=a:f(n).invalidWeekday=t}),it(["d","e","E"],function(t,e,n,i){e[i]=k(t)});var ma="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),pa="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),va="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ba=Xi,ya=Xi,xa=Xi;q("H",["HH",2],0,"hour"),q("h",["hh",2],0,Ut),q("k",["kk",2],0,jt),q("hmm",0,0,function(){return""+Ut.apply(this)+G(this.minutes(),2)}),q("hmmss",0,0,function(){return""+Ut.apply(this)+G(this.minutes(),2)+G(this.seconds(),2)}),q("Hmm",0,0,function(){return""+this.hours()+G(this.minutes(),2)}),q("Hmmss",0,0,function(){return""+this.hours()+G(this.minutes(),2)+G(this.seconds(),2)}),Gt("a",!0),Gt("A",!1),L("hour","h"),Y("hour",13),Q("a",qt),Q("A",qt),Q("H",Yi),Q("h",Yi),Q("HH",Yi,Wi),Q("hh",Yi,Wi),Q("hmm",zi),Q("hmmss",Hi),Q("Hmm",zi),Q("Hmmss",Hi),nt(["H","HH"],na),nt(["a","A"],function(t,e,n){n._isPm=n._locale.isPM(t),n._meridiem=t}),nt(["h","hh"],function(t,e,n){e[na]=k(t),f(n).bigHour=!0}),nt("hmm",function(t,e,n){var i=t.length-2;e[na]=k(t.substr(0,i)),e[ia]=k(t.substr(i)),f(n).bigHour=!0}),nt("hmmss",function(t,e,n){var i=t.length-4,a=t.length-2;e[na]=k(t.substr(0,i)),e[ia]=k(t.substr(i,2)),e[aa]=k(t.substr(a)),f(n).bigHour=!0}),nt("Hmm",function(t,e,n){var i=t.length-2;e[na]=k(t.substr(0,i)),e[ia]=k(t.substr(i))}),nt("Hmmss",function(t,e,n){var i=t.length-4,a=t.length-2;e[na]=k(t.substr(0,i)),e[ia]=k(t.substr(i,2)),e[aa]=k(t.substr(a))});var ka,Sa=/[ap]\.?m?\.?/i,wa=H("Hours",!0),_a={calendar:Si,longDateFormat:wi,invalidDate:_i,ordinal:Mi,ordinalParse:Di,relativeTime:Ci,months:da,monthsShort:ua,week:ga,weekdays:ma,weekdaysMin:va,weekdaysShort:pa,meridiemParse:Sa},Ma={},Da=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,Ca=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,Ta=/Z|[+-]\d\d(?::?\d\d)?/,Pa=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Fa=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ia=/^\/?Date\((\-?\d+)/i;
t.createFromInputFallback=_("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))}),t.ISO_8601=function(){};var Aa=_("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=ye.apply(null,arguments);return this.isValid()&&t.isValid()?this>t?this:t:m()}),Oa=_("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=ye.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:m()}),Ra=function(){return Date.now?Date.now():+new Date};De("Z",":"),De("ZZ",""),Q("Z",Zi),Q("ZZ",Zi),nt(["Z","ZZ"],function(t,e,n){n._useUTC=!0,n._tzm=Ce(Zi,t)});var Wa=/([\+\-]|\d\d)/gi;t.updateOffset=function(){};var La=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Va=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;He.fn=we.prototype;var Ba=je(1,"add"),Ya=je(-1,"subtract");t.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",t.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var za=_("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return void 0===t?this.localeData():this.locale(t)});q(0,["gg",2],0,function(){return this.weekYear()%100}),q(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Dn("gggg","weekYear"),Dn("ggggg","weekYear"),Dn("GGGG","isoWeekYear"),Dn("GGGGG","isoWeekYear"),L("weekYear","gg"),L("isoWeekYear","GG"),Y("weekYear",1),Y("isoWeekYear",1),Q("G",Gi),Q("g",Gi),Q("GG",Yi,Wi),Q("gg",Yi,Wi),Q("GGGG",Ei,Vi),Q("gggg",Ei,Vi),Q("GGGGG",Ui,Bi),Q("ggggg",Ui,Bi),it(["gggg","ggggg","GGGG","GGGGG"],function(t,e,n,i){e[i.substr(0,2)]=k(t)}),it(["gg","GG"],function(e,n,i,a){n[a]=t.parseTwoDigitYear(e)}),q("Q",0,"Qo","quarter"),L("quarter","Q"),Y("quarter",7),Q("Q",Ri),nt("Q",function(t,e){e[ta]=3*(k(t)-1)}),q("D",["DD",2],"Do","date"),L("date","D"),Y("date",9),Q("D",Yi),Q("DD",Yi,Wi),Q("Do",function(t,e){return t?e._ordinalParse:e._ordinalParseLenient}),nt(["D","DD"],ea),nt("Do",function(t,e){e[ea]=k(t.match(Yi)[0],10)});var Ha=H("Date",!0);q("DDD",["DDDD",3],"DDDo","dayOfYear"),L("dayOfYear","DDD"),Y("dayOfYear",4),Q("DDD",Ni),Q("DDDD",Li),nt(["DDD","DDDD"],function(t,e,n){n._dayOfYear=k(t)}),q("m",["mm",2],0,"minute"),L("minute","m"),Y("minute",14),Q("m",Yi),Q("mm",Yi,Wi),nt(["m","mm"],ia);var Na=H("Minutes",!1);q("s",["ss",2],0,"second"),L("second","s"),Y("second",15),Q("s",Yi),Q("ss",Yi,Wi),nt(["s","ss"],aa);var Ea=H("Seconds",!1);q("S",0,0,function(){return~~(this.millisecond()/100)}),q(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),q(0,["SSS",3],0,"millisecond"),q(0,["SSSS",4],0,function(){return 10*this.millisecond()}),q(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),q(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),q(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),q(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),q(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),L("millisecond","ms"),Y("millisecond",16),Q("S",Ni,Ri),Q("SS",Ni,Wi),Q("SSS",Ni,Li);var Ua;for(Ua="SSSS";Ua.length<=9;Ua+="S")Q(Ua,ji);for(Ua="S";Ua.length<=9;Ua+="S")nt(Ua,Wn);var ja=H("Milliseconds",!1);q("z",0,0,"zoneAbbr"),q("zz",0,0,"zoneName");var Ga=b.prototype;Ga.add=Ba,Ga.calendar=Ze,Ga.clone=Je,Ga.diff=nn,Ga.endOf=mn,Ga.format=sn,Ga.from=ln,Ga.fromNow=dn,Ga.to=un,Ga.toNow=cn,Ga.get=U,Ga.invalidAt=_n,Ga.isAfter=Xe,Ga.isBefore=Ke,Ga.isBetween=Qe,Ga.isSame=$e,Ga.isSameOrAfter=tn,Ga.isSameOrBefore=en,Ga.isValid=Sn,Ga.lang=za,Ga.locale=hn,Ga.localeData=fn,Ga.max=Oa,Ga.min=Aa,Ga.parsingFlags=wn,Ga.set=j,Ga.startOf=gn,Ga.subtract=Ya,Ga.toArray=yn,Ga.toObject=xn,Ga.toDate=bn,Ga.toISOString=rn,Ga.toJSON=kn,Ga.toString=on,Ga.unix=vn,Ga.valueOf=pn,Ga.creationData=Mn,Ga.year=fa,Ga.isLeapYear=bt,Ga.weekYear=Cn,Ga.isoWeekYear=Tn,Ga.quarter=Ga.quarters=On,Ga.month=ct,Ga.daysInMonth=ht,Ga.week=Ga.weeks=Tt,Ga.isoWeek=Ga.isoWeeks=Pt,Ga.weeksInYear=Fn,Ga.isoWeeksInYear=Pn,Ga.date=Ha,Ga.day=Ga.days=Vt,Ga.weekday=Bt,Ga.isoWeekday=Yt,Ga.dayOfYear=Rn,Ga.hour=Ga.hours=wa,Ga.minute=Ga.minutes=Na,Ga.second=Ga.seconds=Ea,Ga.millisecond=Ga.milliseconds=ja,Ga.utcOffset=Fe,Ga.utc=Ae,Ga.local=Oe,Ga.parseZone=Re,Ga.hasAlignedHourOffset=We,Ga.isDST=Le,Ga.isLocal=Be,Ga.isUtcOffset=Ye,Ga.isUtc=ze,Ga.isUTC=ze,Ga.zoneAbbr=Ln,Ga.zoneName=Vn,Ga.dates=_("dates accessor is deprecated. Use date instead.",Ha),Ga.months=_("months accessor is deprecated. Use month instead",ct),Ga.years=_("years accessor is deprecated. Use year instead",fa),Ga.zone=_("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Ie),Ga.isDSTShifted=_("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Ve);var qa=Ga,Za=P.prototype;Za.calendar=F,Za.longDateFormat=I,Za.invalidDate=A,Za.ordinal=O,Za.preparse=zn,Za.postformat=zn,Za.relativeTime=R,Za.pastFuture=W,Za.set=C,Za.months=rt,Za.monthsShort=st,Za.monthsParse=dt,Za.monthsRegex=gt,Za.monthsShortRegex=ft,Za.week=Mt,Za.firstDayOfYear=Ct,Za.firstDayOfWeek=Dt,Za.weekdays=At,Za.weekdaysMin=Rt,Za.weekdaysShort=Ot,Za.weekdaysParse=Lt,Za.weekdaysRegex=zt,Za.weekdaysShortRegex=Ht,Za.weekdaysMinRegex=Nt,Za.isPM=Zt,Za.meridiem=Jt,$t("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10,n=1===k(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+n}}),t.lang=_("moment.lang is deprecated. Use moment.locale instead.",$t),t.langData=_("moment.langData is deprecated. Use moment.localeData instead.",ne);var Ja=Math.abs,Xa=oi("ms"),Ka=oi("s"),Qa=oi("m"),$a=oi("h"),to=oi("d"),eo=oi("w"),no=oi("M"),io=oi("y"),ao=si("milliseconds"),oo=si("seconds"),ro=si("minutes"),so=si("hours"),lo=si("days"),uo=si("months"),co=si("years"),ho=Math.round,fo={s:45,m:45,h:22,d:26,M:11},go=Math.abs,mo=we.prototype;mo.abs=Jn,mo.add=Kn,mo.subtract=Qn,mo.as=ii,mo.asMilliseconds=Xa,mo.asSeconds=Ka,mo.asMinutes=Qa,mo.asHours=$a,mo.asDays=to,mo.asWeeks=eo,mo.asMonths=no,mo.asYears=io,mo.valueOf=ai,mo._bubble=ti,mo.get=ri,mo.milliseconds=ao,mo.seconds=oo,mo.minutes=ro,mo.hours=so,mo.days=lo,mo.weeks=li,mo.months=uo,mo.years=co,mo.humanize=fi,mo.toISOString=gi,mo.toString=gi,mo.toJSON=gi,mo.locale=hn,mo.localeData=fn,mo.toIsoString=_("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",gi),mo.lang=za,q("X",0,0,"unix"),q("x",0,0,"valueOf"),Q("x",Gi),Q("X",Ji),nt("X",function(t,e,n){n._d=new Date(1e3*parseFloat(t,10))}),nt("x",function(t,e,n){n._d=new Date(k(t))}),t.version="2.15.1",i(ye),t.fn=qa,t.min=ke,t.max=Se,t.now=Ra,t.utc=c,t.unix=Bn,t.months=Un,t.isDate=s,t.locale=$t,t.invalid=m,t.duration=He,t.isMoment=y,t.weekdays=Gn,t.parseZone=Yn,t.localeData=ne,t.isDuration=_e,t.monthsShort=jn,t.weekdaysMin=Zn,t.defineLocale=te,t.updateLocale=ee,t.locales=ie,t.weekdaysShort=qn,t.normalizeUnits=V,t.relativeTimeRounding=ci,t.relativeTimeThreshold=hi,t.calendarFormat=qe,t.prototype=qa;var po=t;return po})},{}],7:[function(t,e,n){var i=t(27)();t(26)(i),t(22)(i),t(25)(i),t(21)(i),t(23)(i),t(24)(i),t(28)(i),t(32)(i),t(30)(i),t(31)(i),t(33)(i),t(29)(i),t(34)(i),t(35)(i),t(36)(i),t(37)(i),t(38)(i),t(41)(i),t(39)(i),t(40)(i),t(42)(i),t(43)(i),t(44)(i),t(15)(i),t(16)(i),t(17)(i),t(18)(i),t(19)(i),t(20)(i),t(8)(i),t(9)(i),t(10)(i),t(11)(i),t(12)(i),t(13)(i),t(14)(i),window.Chart=e.exports=i},{10:10,11:11,12:12,13:13,14:14,15:15,16:16,17:17,18:18,19:19,20:20,21:21,22:22,23:23,24:24,25:25,26:26,27:27,28:28,29:29,30:30,31:31,32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,41:41,42:42,43:43,44:44,8:8,9:9}],8:[function(t,e,n){"use strict";e.exports=function(t){t.Bar=function(e,n){return n.type="bar",new t(e,n)}}},{}],9:[function(t,e,n){"use strict";e.exports=function(t){t.Bubble=function(e,n){return n.type="bubble",new t(e,n)}}},{}],10:[function(t,e,n){"use strict";e.exports=function(t){t.Doughnut=function(e,n){return n.type="doughnut",new t(e,n)}}},{}],11:[function(t,e,n){"use strict";e.exports=function(t){t.Line=function(e,n){return n.type="line",new t(e,n)}}},{}],12:[function(t,e,n){"use strict";e.exports=function(t){t.PolarArea=function(e,n){return n.type="polarArea",new t(e,n)}}},{}],13:[function(t,e,n){"use strict";e.exports=function(t){t.Radar=function(e,n){return n.options=t.helpers.configMerge({aspectRatio:1},n.options),n.type="radar",new t(e,n)}}},{}],14:[function(t,e,n){"use strict";e.exports=function(t){var e={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-1"}],yAxes:[{type:"linear",position:"left",id:"y-axis-1"}]},tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.xLabel+", "+t.yLabel+")"}}}};t.defaults.scatter=e,t.controllers.scatter=t.controllers.line,t.Scatter=function(e,n){return n.type="scatter",new t(e,n)}}},{}],15:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bar={hover:{mode:"label"},scales:{xAxes:[{type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}},t.controllers.bar=t.DatasetController.extend({dataElementType:t.elements.Rectangle,initialize:function(e,n){t.DatasetController.prototype.initialize.call(this,e,n),this.getMeta().bar=!0},getBarCount:function(){var t=this,n=0;return e.each(t.chart.data.datasets,function(e,i){var a=t.chart.getDatasetMeta(i);a.bar&&t.chart.isDatasetVisible(i)&&++n},t),n},update:function(t){var n=this;e.each(n.getMeta().data,function(e,i){n.updateElement(e,i,t)},n)},updateElement:function(t,n,i){var a=this,o=a.getMeta(),r=a.getScaleForId(o.xAxisID),s=a.getScaleForId(o.yAxisID),l=s.getBasePixel(),d=a.chart.options.elements.rectangle,u=t.custom||{},c=a.getDataset();e.extend(t,{_xScale:r,_yScale:s,_datasetIndex:a.index,_index:n,_model:{x:a.calculateBarX(n,a.index),y:i?l:a.calculateBarY(n,a.index),label:a.chart.data.labels[n],datasetLabel:c.label,base:i?l:a.calculateBarBase(a.index,n),width:a.calculateBarWidth(n),backgroundColor:u.backgroundColor?u.backgroundColor:e.getValueAtIndexOrDefault(c.backgroundColor,n,d.backgroundColor),borderSkipped:u.borderSkipped?u.borderSkipped:d.borderSkipped,borderColor:u.borderColor?u.borderColor:e.getValueAtIndexOrDefault(c.borderColor,n,d.borderColor),borderWidth:u.borderWidth?u.borderWidth:e.getValueAtIndexOrDefault(c.borderWidth,n,d.borderWidth)}}),t.pivot()},calculateBarBase:function(t,e){var n=this,i=n.getMeta(),a=n.getScaleForId(i.yAxisID),o=0;if(a.options.stacked){for(var r=n.chart,s=r.data.datasets,l=Number(s[t].data[e]),d=0;t>d;d++){var u=s[d],c=r.getDatasetMeta(d);if(c.bar&&c.yAxisID===a.id&&r.isDatasetVisible(d)){var h=Number(u.data[e]);o+=0>l?Math.min(h,0):Math.max(h,0)}}return a.getPixelForValue(o)}return a.getBasePixel()},getRuler:function(t){var e,n=this,i=n.getMeta(),a=n.getScaleForId(i.xAxisID),o=n.getBarCount();e="category"===a.options.type?a.getPixelForTick(t+1)-a.getPixelForTick(t):a.width/a.ticks.length;var r=e*a.options.categoryPercentage,s=(e-e*a.options.categoryPercentage)/2,l=r/o;if(a.ticks.length!==n.chart.data.labels.length){var d=a.ticks.length/n.chart.data.labels.length;l*=d}var u=l*a.options.barPercentage,c=l-l*a.options.barPercentage;return{datasetCount:o,tickWidth:e,categoryWidth:r,categorySpacing:s,fullBarWidth:l,barWidth:u,barSpacing:c}},calculateBarWidth:function(t){var e=this.getScaleForId(this.getMeta().xAxisID);if(e.options.barThickness)return e.options.barThickness;var n=this.getRuler(t);return e.options.stacked?n.categoryWidth:n.barWidth},getBarIndex:function(t){var e,n,i=0;for(n=0;t>n;++n)e=this.chart.getDatasetMeta(n),e.bar&&this.chart.isDatasetVisible(n)&&++i;return i},calculateBarX:function(t,e){var n=this,i=n.getMeta(),a=n.getScaleForId(i.xAxisID),o=n.getBarIndex(e),r=n.getRuler(t),s=a.getPixelForValue(null,t,e,n.chart.isCombo);return s-=n.chart.isCombo?r.tickWidth/2:0,a.options.stacked?s+r.categoryWidth/2+r.categorySpacing:s+r.barWidth/2+r.categorySpacing+r.barWidth*o+r.barSpacing/2+r.barSpacing*o},calculateBarY:function(t,e){var n=this,i=n.getMeta(),a=n.getScaleForId(i.yAxisID),o=Number(n.getDataset().data[t]);if(a.options.stacked){for(var r=0,s=0,l=0;e>l;l++){var d=n.chart.data.datasets[l],u=n.chart.getDatasetMeta(l);if(u.bar&&u.yAxisID===a.id&&n.chart.isDatasetVisible(l)){var c=Number(d.data[t]);0>c?s+=c||0:r+=c||0}}return 0>o?a.getPixelForValue(s+o):a.getPixelForValue(r+o)}return a.getPixelForValue(o)},draw:function(t){var n=this,i=t||1;e.each(n.getMeta().data,function(t,e){var a=n.getDataset().data[e];null===a||void 0===a||isNaN(a)||t.transition(i).draw()},n)},setHoverStyle:function(t){var n=this.chart.data.datasets[t._datasetIndex],i=t._index,a=t.custom||{},o=t._model;o.backgroundColor=a.hoverBackgroundColor?a.hoverBackgroundColor:e.getValueAtIndexOrDefault(n.hoverBackgroundColor,i,e.getHoverColor(o.backgroundColor)),o.borderColor=a.hoverBorderColor?a.hoverBorderColor:e.getValueAtIndexOrDefault(n.hoverBorderColor,i,e.getHoverColor(o.borderColor)),o.borderWidth=a.hoverBorderWidth?a.hoverBorderWidth:e.getValueAtIndexOrDefault(n.hoverBorderWidth,i,o.borderWidth)},removeHoverStyle:function(t){var n=this.chart.data.datasets[t._datasetIndex],i=t._index,a=t.custom||{},o=t._model,r=this.chart.options.elements.rectangle;o.backgroundColor=a.backgroundColor?a.backgroundColor:e.getValueAtIndexOrDefault(n.backgroundColor,i,r.backgroundColor),o.borderColor=a.borderColor?a.borderColor:e.getValueAtIndexOrDefault(n.borderColor,i,r.borderColor),o.borderWidth=a.borderWidth?a.borderWidth:e.getValueAtIndexOrDefault(n.borderWidth,i,r.borderWidth)}}),t.defaults.horizontalBar={hover:{mode:"label"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{position:"left",type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{callbacks:{title:function(t,e){var n="";return t.length>0&&(t[0].yLabel?n=t[0].yLabel:e.labels.length>0&&t[0].index<e.labels.length&&(n=e.labels[t[0].index])),n},label:function(t,e){var n=e.datasets[t.datasetIndex].label||"";return n+": "+t.xLabel}}}},t.controllers.horizontalBar=t.controllers.bar.extend({updateElement:function(t,n,i){var a=this,o=a.getMeta(),r=a.getScaleForId(o.xAxisID),s=a.getScaleForId(o.yAxisID),l=r.getBasePixel(),d=t.custom||{},u=a.getDataset(),c=a.chart.options.elements.rectangle;e.extend(t,{_xScale:r,_yScale:s,_datasetIndex:a.index,_index:n,_model:{x:i?l:a.calculateBarX(n,a.index),y:a.calculateBarY(n,a.index),label:a.chart.data.labels[n],datasetLabel:u.label,base:i?l:a.calculateBarBase(a.index,n),height:a.calculateBarHeight(n),backgroundColor:d.backgroundColor?d.backgroundColor:e.getValueAtIndexOrDefault(u.backgroundColor,n,c.backgroundColor),borderSkipped:d.borderSkipped?d.borderSkipped:c.borderSkipped,borderColor:d.borderColor?d.borderColor:e.getValueAtIndexOrDefault(u.borderColor,n,c.borderColor),borderWidth:d.borderWidth?d.borderWidth:e.getValueAtIndexOrDefault(u.borderWidth,n,c.borderWidth)},draw:function(){function t(t){return l[(u+t)%4]}var e=this._chart.ctx,n=this._view,i=n.height/2,a=n.y-i,o=n.y+i,r=n.base-(n.base-n.x),s=n.borderWidth/2;n.borderWidth&&(a+=s,o-=s,r+=s),e.beginPath(),e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth;var l=[[n.base,o],[n.base,a],[r,a],[r,o]],d=["bottom","left","top","right"],u=d.indexOf(n.borderSkipped,0);-1===u&&(u=0),e.moveTo.apply(e,t(0));for(var c=1;4>c;c++)e.lineTo.apply(e,t(c));e.fill(),n.borderWidth&&e.stroke()},inRange:function(t,e){var n=this._view,i=!1;return n&&(i=n.x<n.base?e>=n.y-n.height/2&&e<=n.y+n.height/2&&t>=n.x&&t<=n.base:e>=n.y-n.height/2&&e<=n.y+n.height/2&&t>=n.base&&t<=n.x),i}}),t.pivot()},calculateBarBase:function(t,e){var n=this,i=n.getMeta(),a=n.getScaleForId(i.xAxisID),o=0;if(a.options.stacked){for(var r=n.chart,s=r.data.datasets,l=Number(s[t].data[e]),d=0;t>d;d++){var u=s[d],c=r.getDatasetMeta(d);if(c.bar&&c.xAxisID===a.id&&r.isDatasetVisible(d)){var h=Number(u.data[e]);o+=0>l?Math.min(h,0):Math.max(h,0)}}return a.getPixelForValue(o)}return a.getBasePixel()},getRuler:function(t){var e,n=this,i=n.getMeta(),a=n.getScaleForId(i.yAxisID),o=n.getBarCount();e="category"===a.options.type?a.getPixelForTick(t+1)-a.getPixelForTick(t):a.width/a.ticks.length;var r=e*a.options.categoryPercentage,s=(e-e*a.options.categoryPercentage)/2,l=r/o;if(a.ticks.length!==n.chart.data.labels.length){var d=a.ticks.length/n.chart.data.labels.length;l*=d}var u=l*a.options.barPercentage,c=l-l*a.options.barPercentage;return{datasetCount:o,tickHeight:e,categoryHeight:r,categorySpacing:s,fullBarHeight:l,barHeight:u,barSpacing:c}},calculateBarHeight:function(t){var e=this,n=e.getScaleForId(e.getMeta().yAxisID);if(n.options.barThickness)return n.options.barThickness;var i=e.getRuler(t);return n.options.stacked?i.categoryHeight:i.barHeight},calculateBarX:function(t,e){var n=this,i=n.getMeta(),a=n.getScaleForId(i.xAxisID),o=Number(n.getDataset().data[t]);if(a.options.stacked){for(var r=0,s=0,l=0;e>l;l++){var d=n.chart.data.datasets[l],u=n.chart.getDatasetMeta(l);if(u.bar&&u.xAxisID===a.id&&n.chart.isDatasetVisible(l)){var c=Number(d.data[t]);0>c?s+=c||0:r+=c||0}}return 0>o?a.getPixelForValue(s+o):a.getPixelForValue(r+o)}return a.getPixelForValue(o)},calculateBarY:function(t,e){var n=this,i=n.getMeta(),a=n.getScaleForId(i.yAxisID),o=n.getBarIndex(e),r=n.getRuler(t),s=a.getPixelForValue(null,t,e,n.chart.isCombo);return s-=n.chart.isCombo?r.tickHeight/2:0,a.options.stacked?s+r.categoryHeight/2+r.categorySpacing:s+r.barHeight/2+r.categorySpacing+r.barHeight*o+r.barSpacing/2+r.barSpacing*o}})}},{}],16:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bubble={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){return""},label:function(t,e){var n=e.datasets[t.datasetIndex].label||"",i=e.datasets[t.datasetIndex].data[t.index];return n+": ("+i.x+", "+i.y+", "+i.r+")"}}}},t.controllers.bubble=t.DatasetController.extend({dataElementType:t.elements.Point,update:function(t){var n=this,i=n.getMeta(),a=i.data;e.each(a,function(e,i){n.updateElement(e,i,t)})},updateElement:function(n,i,a){var o=this,r=o.getMeta(),s=o.getScaleForId(r.xAxisID),l=o.getScaleForId(r.yAxisID),d=n.custom||{},u=o.getDataset(),c=u.data[i],h=o.chart.options.elements.point,f=o.index;e.extend(n,{_xScale:s,_yScale:l,_datasetIndex:f,_index:i,_model:{x:a?s.getPixelForDecimal(.5):s.getPixelForValue("object"==typeof c?c:NaN,i,f,o.chart.isCombo),y:a?l.getBasePixel():l.getPixelForValue(c,i,f),radius:a?0:d.radius?d.radius:o.getRadius(c),hitRadius:d.hitRadius?d.hitRadius:e.getValueAtIndexOrDefault(u.hitRadius,i,h.hitRadius)}}),t.DatasetController.prototype.removeHoverStyle.call(o,n,h);var g=n._model;g.skip=d.skip?d.skip:isNaN(g.x)||isNaN(g.y),n.pivot()},getRadius:function(t){return t.r||this.chart.options.elements.point.radius},setHoverStyle:function(n){var i=this;t.DatasetController.prototype.setHoverStyle.call(i,n);var a=i.chart.data.datasets[n._datasetIndex],o=n._index,r=n.custom||{},s=n._model;s.radius=r.hoverRadius?r.hoverRadius:e.getValueAtIndexOrDefault(a.hoverRadius,o,i.chart.options.elements.point.hoverRadius)+i.getRadius(a.data[o])},removeHoverStyle:function(e){var n=this;t.DatasetController.prototype.removeHoverStyle.call(n,e,n.chart.options.elements.point);var i=n.chart.data.datasets[e._datasetIndex].data[e._index],a=e.custom||{},o=e._model;o.radius=a.radius?a.radius:n.getRadius(i)}})}},{}],17:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=t.defaults;n.doughnut={animation:{animateRotate:!0,animateScale:!1},aspectRatio:1,hover:{mode:"single"},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var n=t.data,i=n.datasets,a=n.labels;if(i.length)for(var o=0;o<i[0].data.length;++o)e.push('<li><span style="background-color:'+i[0].backgroundColor[o]+'"></span>'),a[o]&&e.push(a[o]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var n=t.data;return n.labels.length&&n.datasets.length?n.labels.map(function(i,a){var o=t.getDatasetMeta(0),r=n.datasets[0],s=o.data[a],l=s&&s.custom||{},d=e.getValueAtIndexOrDefault,u=t.options.elements.arc,c=l.backgroundColor?l.backgroundColor:d(r.backgroundColor,a,u.backgroundColor),h=l.borderColor?l.borderColor:d(r.borderColor,a,u.borderColor),f=l.borderWidth?l.borderWidth:d(r.borderWidth,a,u.borderWidth);return{text:i,fillStyle:c,strokeStyle:h,lineWidth:f,hidden:isNaN(r.data[a])||o.data[a].hidden,index:a}}):[]}},onClick:function(t,e){var n,i,a,o=e.index,r=this.chart;for(n=0,i=(r.data.datasets||[]).length;i>n;++n)a=r.getDatasetMeta(n),a.data[o]&&(a.data[o].hidden=!a.data[o].hidden);r.update()}},cutoutPercentage:50,rotation:Math.PI*-.5,circumference:2*Math.PI,tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+e.datasets[t.datasetIndex].data[t.index]}}}},n.pie=e.clone(n.doughnut),e.extend(n.pie,{cutoutPercentage:0}),t.controllers.doughnut=t.controllers.pie=t.DatasetController.extend({dataElementType:t.elements.Arc,linkScales:e.noop,getRingIndex:function(t){for(var e=0,n=0;t>n;++n)this.chart.isDatasetVisible(n)&&++e;return e},update:function(t){var n=this,i=n.chart,a=i.chartArea,o=i.options,r=o.elements.arc,s=a.right-a.left-r.borderWidth,l=a.bottom-a.top-r.borderWidth,d=Math.min(s,l),u={x:0,y:0},c=n.getMeta(),h=o.cutoutPercentage,f=o.circumference;if(f<2*Math.PI){var g=o.rotation%(2*Math.PI);g+=2*Math.PI*(g>=Math.PI?-1:g<-Math.PI?1:0);var m=g+f,p={x:Math.cos(g),y:Math.sin(g)},v={x:Math.cos(m),y:Math.sin(m)},b=0>=g&&m>=0||g<=2*Math.PI&&2*Math.PI<=m,y=g<=.5*Math.PI&&.5*Math.PI<=m||g<=2.5*Math.PI&&2.5*Math.PI<=m,x=g<=-Math.PI&&-Math.PI<=m||g<=Math.PI&&Math.PI<=m,k=g<=.5*-Math.PI&&.5*-Math.PI<=m||g<=1.5*Math.PI&&1.5*Math.PI<=m,S=h/100,w={x:x?-1:Math.min(p.x*(p.x<0?1:S),v.x*(v.x<0?1:S)),y:k?-1:Math.min(p.y*(p.y<0?1:S),v.y*(v.y<0?1:S))},_={x:b?1:Math.max(p.x*(p.x>0?1:S),v.x*(v.x>0?1:S)),y:y?1:Math.max(p.y*(p.y>0?1:S),v.y*(v.y>0?1:S))},M={width:.5*(_.x-w.x),height:.5*(_.y-w.y)};d=Math.min(s/M.width,l/M.height),u={x:(_.x+w.x)*-.5,y:(_.y+w.y)*-.5}}i.borderWidth=n.getMaxBorderWidth(c.data),i.outerRadius=Math.max((d-i.borderWidth)/2,0),i.innerRadius=Math.max(h?i.outerRadius/100*h:1,0),i.radiusLength=(i.outerRadius-i.innerRadius)/i.getVisibleDatasetCount(),i.offsetX=u.x*i.outerRadius,i.offsetY=u.y*i.outerRadius,c.total=n.calculateTotal(),n.outerRadius=i.outerRadius-i.radiusLength*n.getRingIndex(n.index),n.innerRadius=n.outerRadius-i.radiusLength,e.each(c.data,function(e,i){n.updateElement(e,i,t)})},updateElement:function(t,n,i){var a=this,o=a.chart,r=o.chartArea,s=o.options,l=s.animation,d=(r.left+r.right)/2,u=(r.top+r.bottom)/2,c=s.rotation,h=s.rotation,f=a.getDataset(),g=i&&l.animateRotate?0:t.hidden?0:a.calculateCircumference(f.data[n])*(s.circumference/(2*Math.PI)),m=i&&l.animateScale?0:a.innerRadius,p=i&&l.animateScale?0:a.outerRadius,v=e.getValueAtIndexOrDefault;e.extend(t,{_datasetIndex:a.index,_index:n,_model:{x:d+o.offsetX,y:u+o.offsetY,startAngle:c,endAngle:h,circumference:g,outerRadius:p,innerRadius:m,label:v(f.label,n,o.data.labels[n])}});var b=t._model;this.removeHoverStyle(t),i&&l.animateRotate||(0===n?b.startAngle=s.rotation:b.startAngle=a.getMeta().data[n-1]._model.endAngle,b.endAngle=b.startAngle+b.circumference),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},calculateTotal:function(){var t,n=this.getDataset(),i=this.getMeta(),a=0;return e.each(i.data,function(e,i){t=n.data[i],isNaN(t)||e.hidden||(a+=Math.abs(t))}),a},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?2*Math.PI*(t/e):0},getMaxBorderWidth:function(t){for(var e,n,i=0,a=this.index,o=t.length,r=0;o>r;r++)e=t[r]._model?t[r]._model.borderWidth:0,n=t[r]._chart?t[r]._chart.config.data.datasets[a].hoverBorderWidth:0,i=e>i?e:i,i=n>i?n:i;return i}})}},{}],18:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){return n.getValueOrDefault(t.showLine,e.showLines)}var n=t.helpers;t.defaults.line={showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}},t.controllers.line=t.DatasetController.extend({datasetElementType:t.elements.Line,dataElementType:t.elements.Point,addElementAndReset:function(n){var i=this,a=i.chart.options,o=i.getMeta();t.DatasetController.prototype.addElementAndReset.call(i,n),e(i.getDataset(),a)&&0!==o.dataset._model.tension&&i.updateBezierControlPoints()},update:function(t){var i,a,o,r=this,s=r.getMeta(),l=s.dataset,d=s.data||[],u=r.chart.options,c=u.elements.line,h=r.getScaleForId(s.yAxisID),f=r.getDataset(),g=e(f,u);for(g&&(o=l.custom||{},void 0!==f.tension&&void 0===f.lineTension&&(f.lineTension=f.tension),l._scale=h,l._datasetIndex=r.index,l._children=d,l._model={spanGaps:f.spanGaps?f.spanGaps:u.spanGaps,tension:o.tension?o.tension:n.getValueOrDefault(f.lineTension,c.tension),backgroundColor:o.backgroundColor?o.backgroundColor:f.backgroundColor||c.backgroundColor,borderWidth:o.borderWidth?o.borderWidth:f.borderWidth||c.borderWidth,borderColor:o.borderColor?o.borderColor:f.borderColor||c.borderColor,borderCapStyle:o.borderCapStyle?o.borderCapStyle:f.borderCapStyle||c.borderCapStyle,borderDash:o.borderDash?o.borderDash:f.borderDash||c.borderDash,borderDashOffset:o.borderDashOffset?o.borderDashOffset:f.borderDashOffset||c.borderDashOffset,borderJoinStyle:o.borderJoinStyle?o.borderJoinStyle:f.borderJoinStyle||c.borderJoinStyle,fill:o.fill?o.fill:void 0!==f.fill?f.fill:c.fill,steppedLine:o.steppedLine?o.steppedLine:n.getValueOrDefault(f.steppedLine,c.stepped),cubicInterpolationMode:o.cubicInterpolationMode?o.cubicInterpolationMode:n.getValueOrDefault(f.cubicInterpolationMode,c.cubicInterpolationMode),scaleTop:h.top,scaleBottom:h.bottom,scaleZero:h.getBasePixel()},l.pivot()),i=0,a=d.length;a>i;++i)r.updateElement(d[i],i,t);for(g&&0!==l._model.tension&&r.updateBezierControlPoints(),i=0,a=d.length;a>i;++i)d[i].pivot()},getPointBackgroundColor:function(t,e){var i=this.chart.options.elements.point.backgroundColor,a=this.getDataset(),o=t.custom||{};return o.backgroundColor?i=o.backgroundColor:a.pointBackgroundColor?i=n.getValueAtIndexOrDefault(a.pointBackgroundColor,e,i):a.backgroundColor&&(i=a.backgroundColor),i},getPointBorderColor:function(t,e){var i=this.chart.options.elements.point.borderColor,a=this.getDataset(),o=t.custom||{};return o.borderColor?i=o.borderColor:a.pointBorderColor?i=n.getValueAtIndexOrDefault(a.pointBorderColor,e,i):a.borderColor&&(i=a.borderColor),i},getPointBorderWidth:function(t,e){var i=this.chart.options.elements.point.borderWidth,a=this.getDataset(),o=t.custom||{};return o.borderWidth?i=o.borderWidth:a.pointBorderWidth?i=n.getValueAtIndexOrDefault(a.pointBorderWidth,e,i):a.borderWidth&&(i=a.borderWidth),i},updateElement:function(t,e,i){var a,o,r=this,s=r.getMeta(),l=t.custom||{},d=r.getDataset(),u=r.index,c=d.data[e],h=r.getScaleForId(s.yAxisID),f=r.getScaleForId(s.xAxisID),g=r.chart.options.elements.point,m=r.chart.data.labels||[],p=1===m.length||1===d.data.length||r.chart.isCombo;void 0!==d.radius&&void 0===d.pointRadius&&(d.pointRadius=d.radius),void 0!==d.hitRadius&&void 0===d.pointHitRadius&&(d.pointHitRadius=d.hitRadius),a=f.getPixelForValue("object"==typeof c?c:NaN,e,u,p),o=i?h.getBasePixel():r.calculatePointY(c,e,u),t._xScale=f,t._yScale=h,t._datasetIndex=u,t._index=e,t._model={x:a,y:o,skip:l.skip||isNaN(a)||isNaN(o),radius:l.radius||n.getValueAtIndexOrDefault(d.pointRadius,e,g.radius),pointStyle:l.pointStyle||n.getValueAtIndexOrDefault(d.pointStyle,e,g.pointStyle),backgroundColor:r.getPointBackgroundColor(t,e),borderColor:r.getPointBorderColor(t,e),borderWidth:r.getPointBorderWidth(t,e),tension:s.dataset._model?s.dataset._model.tension:0,steppedLine:s.dataset._model?s.dataset._model.steppedLine:!1,hitRadius:l.hitRadius||n.getValueAtIndexOrDefault(d.pointHitRadius,e,g.hitRadius)}},calculatePointY:function(t,e,n){var i,a,o,r=this,s=r.chart,l=r.getMeta(),d=r.getScaleForId(l.yAxisID),u=0,c=0;if(d.options.stacked){for(i=0;n>i;i++)if(a=s.data.datasets[i],o=s.getDatasetMeta(i),"line"===o.type&&o.yAxisID===d.id&&s.isDatasetVisible(i)){var h=Number(d.getRightValue(a.data[e]));0>h?c+=h||0:u+=h||0}var f=Number(d.getRightValue(t));return 0>f?d.getPixelForValue(c+f):d.getPixelForValue(u+f)}return d.getPixelForValue(t)},updateBezierControlPoints:function(){function t(t,e,n){return Math.max(Math.min(t,n),e)}var e,i,a,o,r,s=this,l=s.getMeta(),d=s.chart.chartArea,u=l.data||[];if(l.dataset._model.spanGaps&&(u=u.filter(function(t){return!t._model.skip})),"monotone"===l.dataset._model.cubicInterpolationMode)n.splineCurveMonotone(u);else for(e=0,i=u.length;i>e;++e)a=u[e],o=a._model,r=n.splineCurve(n.previousItem(u,e)._model,o,n.nextItem(u,e)._model,l.dataset._model.tension),o.controlPointPreviousX=r.previous.x,o.controlPointPreviousY=r.previous.y,o.controlPointNextX=r.next.x,o.controlPointNextY=r.next.y;if(s.chart.options.elements.line.capBezierPoints)for(e=0,i=u.length;i>e;++e)o=u[e]._model,o.controlPointPreviousX=t(o.controlPointPreviousX,d.left,d.right),o.controlPointPreviousY=t(o.controlPointPreviousY,d.top,d.bottom),o.controlPointNextX=t(o.controlPointNextX,d.left,d.right),o.controlPointNextY=t(o.controlPointNextY,d.top,d.bottom)},draw:function(t){var n,i,a=this,o=a.getMeta(),r=o.data||[],s=t||1;for(n=0,i=r.length;i>n;++n)r[n].transition(s);for(e(a.getDataset(),a.chart.options)&&o.dataset.transition(s).draw(),n=0,i=r.length;i>n;++n)r[n].draw()},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,a=t.custom||{},o=t._model;o.radius=a.hoverRadius||n.getValueAtIndexOrDefault(e.pointHoverRadius,i,this.chart.options.elements.point.hoverRadius),o.backgroundColor=a.hoverBackgroundColor||n.getValueAtIndexOrDefault(e.pointHoverBackgroundColor,i,n.getHoverColor(o.backgroundColor)),o.borderColor=a.hoverBorderColor||n.getValueAtIndexOrDefault(e.pointHoverBorderColor,i,n.getHoverColor(o.borderColor)),o.borderWidth=a.hoverBorderWidth||n.getValueAtIndexOrDefault(e.pointHoverBorderWidth,i,o.borderWidth)},removeHoverStyle:function(t){var e=this,i=e.chart.data.datasets[t._datasetIndex],a=t._index,o=t.custom||{},r=t._model;void 0!==i.radius&&void 0===i.pointRadius&&(i.pointRadius=i.radius),r.radius=o.radius||n.getValueAtIndexOrDefault(i.pointRadius,a,e.chart.options.elements.point.radius),r.backgroundColor=e.getPointBackgroundColor(t,a),r.borderColor=e.getPointBorderColor(t,a),r.borderWidth=e.getPointBorderWidth(t,a)}})}},{}],19:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.polarArea={scale:{type:"radialLinear",lineArc:!0,ticks:{beginAtZero:!0}},animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,aspectRatio:1,legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var n=t.data,i=n.datasets,a=n.labels;if(i.length)for(var o=0;o<i[0].data.length;++o)e.push('<li><span style="background-color:'+i[0].backgroundColor[o]+'">'),a[o]&&e.push(a[o]),e.push("</span></li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var n=t.data;return n.labels.length&&n.datasets.length?n.labels.map(function(i,a){var o=t.getDatasetMeta(0),r=n.datasets[0],s=o.data[a],l=s.custom||{},d=e.getValueAtIndexOrDefault,u=t.options.elements.arc,c=l.backgroundColor?l.backgroundColor:d(r.backgroundColor,a,u.backgroundColor),h=l.borderColor?l.borderColor:d(r.borderColor,a,u.borderColor),f=l.borderWidth?l.borderWidth:d(r.borderWidth,a,u.borderWidth);return{
text:i,fillStyle:c,strokeStyle:h,lineWidth:f,hidden:isNaN(r.data[a])||o.data[a].hidden,index:a}}):[]}},onClick:function(t,e){var n,i,a,o=e.index,r=this.chart;for(n=0,i=(r.data.datasets||[]).length;i>n;++n)a=r.getDatasetMeta(n),a.data[o].hidden=!a.data[o].hidden;r.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}},t.controllers.polarArea=t.DatasetController.extend({dataElementType:t.elements.Arc,linkScales:e.noop,update:function(t){var n=this,i=n.chart,a=i.chartArea,o=n.getMeta(),r=i.options,s=r.elements.arc,l=Math.min(a.right-a.left,a.bottom-a.top);i.outerRadius=Math.max((l-s.borderWidth/2)/2,0),i.innerRadius=Math.max(r.cutoutPercentage?i.outerRadius/100*r.cutoutPercentage:1,0),i.radiusLength=(i.outerRadius-i.innerRadius)/i.getVisibleDatasetCount(),n.outerRadius=i.outerRadius-i.radiusLength*n.index,n.innerRadius=n.outerRadius-i.radiusLength,o.count=n.countVisibleElements(),e.each(o.data,function(e,i){n.updateElement(e,i,t)})},updateElement:function(t,n,i){for(var a=this,o=a.chart,r=a.getDataset(),s=o.options,l=s.animation,d=o.scale,u=e.getValueAtIndexOrDefault,c=o.data.labels,h=a.calculateCircumference(r.data[n]),f=d.xCenter,g=d.yCenter,m=0,p=a.getMeta(),v=0;n>v;++v)isNaN(r.data[v])||p.data[v].hidden||++m;var b=s.startAngle,y=t.hidden?0:d.getDistanceFromCenterForValue(r.data[n]),x=b+h*m,k=x+(t.hidden?0:h),S=l.animateScale?0:d.getDistanceFromCenterForValue(r.data[n]);e.extend(t,{_datasetIndex:a.index,_index:n,_scale:d,_model:{x:f,y:g,innerRadius:0,outerRadius:i?S:y,startAngle:i&&l.animateRotate?b:x,endAngle:i&&l.animateRotate?b:k,label:u(c,n,c[n])}}),a.removeHoverStyle(t),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},countVisibleElements:function(){var t=this.getDataset(),n=this.getMeta(),i=0;return e.each(n.data,function(e,n){isNaN(t.data[n])||e.hidden||i++}),i},calculateCircumference:function(t){var e=this.getMeta().count;return e>0&&!isNaN(t)?2*Math.PI/e:0}})}},{}],20:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.radar={scale:{type:"radialLinear"},elements:{line:{tension:0}}},t.controllers.radar=t.DatasetController.extend({datasetElementType:t.elements.Line,dataElementType:t.elements.Point,linkScales:e.noop,addElementAndReset:function(e){t.DatasetController.prototype.addElementAndReset.call(this,e),this.updateBezierControlPoints()},update:function(t){var n=this,i=n.getMeta(),a=i.dataset,o=i.data,r=a.custom||{},s=n.getDataset(),l=n.chart.options.elements.line,d=n.chart.scale;void 0!==s.tension&&void 0===s.lineTension&&(s.lineTension=s.tension),e.extend(i.dataset,{_datasetIndex:n.index,_children:o,_loop:!0,_model:{tension:r.tension?r.tension:e.getValueOrDefault(s.lineTension,l.tension),backgroundColor:r.backgroundColor?r.backgroundColor:s.backgroundColor||l.backgroundColor,borderWidth:r.borderWidth?r.borderWidth:s.borderWidth||l.borderWidth,borderColor:r.borderColor?r.borderColor:s.borderColor||l.borderColor,fill:r.fill?r.fill:void 0!==s.fill?s.fill:l.fill,borderCapStyle:r.borderCapStyle?r.borderCapStyle:s.borderCapStyle||l.borderCapStyle,borderDash:r.borderDash?r.borderDash:s.borderDash||l.borderDash,borderDashOffset:r.borderDashOffset?r.borderDashOffset:s.borderDashOffset||l.borderDashOffset,borderJoinStyle:r.borderJoinStyle?r.borderJoinStyle:s.borderJoinStyle||l.borderJoinStyle,scaleTop:d.top,scaleBottom:d.bottom,scaleZero:d.getBasePosition()}}),i.dataset.pivot(),e.each(o,function(e,i){n.updateElement(e,i,t)},n),n.updateBezierControlPoints()},updateElement:function(t,n,i){var a=this,o=t.custom||{},r=a.getDataset(),s=a.chart.scale,l=a.chart.options.elements.point,d=s.getPointPositionForValue(n,r.data[n]);e.extend(t,{_datasetIndex:a.index,_index:n,_scale:s,_model:{x:i?s.xCenter:d.x,y:i?s.yCenter:d.y,tension:o.tension?o.tension:e.getValueOrDefault(r.tension,a.chart.options.elements.line.tension),radius:o.radius?o.radius:e.getValueAtIndexOrDefault(r.pointRadius,n,l.radius),backgroundColor:o.backgroundColor?o.backgroundColor:e.getValueAtIndexOrDefault(r.pointBackgroundColor,n,l.backgroundColor),borderColor:o.borderColor?o.borderColor:e.getValueAtIndexOrDefault(r.pointBorderColor,n,l.borderColor),borderWidth:o.borderWidth?o.borderWidth:e.getValueAtIndexOrDefault(r.pointBorderWidth,n,l.borderWidth),pointStyle:o.pointStyle?o.pointStyle:e.getValueAtIndexOrDefault(r.pointStyle,n,l.pointStyle),hitRadius:o.hitRadius?o.hitRadius:e.getValueAtIndexOrDefault(r.hitRadius,n,l.hitRadius)}}),t._model.skip=o.skip?o.skip:isNaN(t._model.x)||isNaN(t._model.y)},updateBezierControlPoints:function(){var t=this.chart.chartArea,n=this.getMeta();e.each(n.data,function(i,a){var o=i._model,r=e.splineCurve(e.previousItem(n.data,a,!0)._model,o,e.nextItem(n.data,a,!0)._model,o.tension);o.controlPointPreviousX=Math.max(Math.min(r.previous.x,t.right),t.left),o.controlPointPreviousY=Math.max(Math.min(r.previous.y,t.bottom),t.top),o.controlPointNextX=Math.max(Math.min(r.next.x,t.right),t.left),o.controlPointNextY=Math.max(Math.min(r.next.y,t.bottom),t.top),i.pivot()})},draw:function(t){var n=this.getMeta(),i=t||1;e.each(n.data,function(t){t.transition(i)}),n.dataset.transition(i).draw(),e.each(n.data,function(t){t.draw()})},setHoverStyle:function(t){var n=this.chart.data.datasets[t._datasetIndex],i=t.custom||{},a=t._index,o=t._model;o.radius=i.hoverRadius?i.hoverRadius:e.getValueAtIndexOrDefault(n.pointHoverRadius,a,this.chart.options.elements.point.hoverRadius),o.backgroundColor=i.hoverBackgroundColor?i.hoverBackgroundColor:e.getValueAtIndexOrDefault(n.pointHoverBackgroundColor,a,e.getHoverColor(o.backgroundColor)),o.borderColor=i.hoverBorderColor?i.hoverBorderColor:e.getValueAtIndexOrDefault(n.pointHoverBorderColor,a,e.getHoverColor(o.borderColor)),o.borderWidth=i.hoverBorderWidth?i.hoverBorderWidth:e.getValueAtIndexOrDefault(n.pointHoverBorderWidth,a,o.borderWidth)},removeHoverStyle:function(t){var n=this.chart.data.datasets[t._datasetIndex],i=t.custom||{},a=t._index,o=t._model,r=this.chart.options.elements.point;o.radius=i.radius?i.radius:e.getValueAtIndexOrDefault(n.radius,a,r.radius),o.backgroundColor=i.backgroundColor?i.backgroundColor:e.getValueAtIndexOrDefault(n.pointBackgroundColor,a,r.backgroundColor),o.borderColor=i.borderColor?i.borderColor:e.getValueAtIndexOrDefault(n.pointBorderColor,a,r.borderColor),o.borderWidth=i.borderWidth?i.borderWidth:e.getValueAtIndexOrDefault(n.pointBorderWidth,a,r.borderWidth)}})}},{}],21:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.animation={duration:1e3,easing:"easeOutQuart",onProgress:e.noop,onComplete:e.noop},t.Animation=t.Element.extend({currentStep:null,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),t.animationService={frameDuration:17,animations:[],dropFrames:0,request:null,addAnimation:function(t,e,n,i){var a=this;i||(t.animating=!0);for(var o=0;o<a.animations.length;++o)if(a.animations[o].chartInstance===t)return void(a.animations[o].animationObject=e);a.animations.push({chartInstance:t,animationObject:e}),1===a.animations.length&&a.requestAnimationFrame()},cancelAnimation:function(t){var n=e.findIndex(this.animations,function(e){return e.chartInstance===t});-1!==n&&(this.animations.splice(n,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=e.requestAnimFrame.call(window,function(){t.request=null,t.startDigest()}))},startDigest:function(){var t=this,e=Date.now(),n=0;t.dropFrames>1&&(n=Math.floor(t.dropFrames),t.dropFrames=t.dropFrames%1);for(var i=0;i<t.animations.length;)null===t.animations[i].animationObject.currentStep&&(t.animations[i].animationObject.currentStep=0),t.animations[i].animationObject.currentStep+=1+n,t.animations[i].animationObject.currentStep>t.animations[i].animationObject.numSteps&&(t.animations[i].animationObject.currentStep=t.animations[i].animationObject.numSteps),t.animations[i].animationObject.render(t.animations[i].chartInstance,t.animations[i].animationObject),t.animations[i].animationObject.onAnimationProgress&&t.animations[i].animationObject.onAnimationProgress.call&&t.animations[i].animationObject.onAnimationProgress.call(t.animations[i].chartInstance,t.animations[i]),t.animations[i].animationObject.currentStep===t.animations[i].animationObject.numSteps?(t.animations[i].animationObject.onAnimationComplete&&t.animations[i].animationObject.onAnimationComplete.call&&t.animations[i].animationObject.onAnimationComplete.call(t.animations[i].chartInstance,t.animations[i]),t.animations[i].chartInstance.animating=!1,t.animations.splice(i,1)):++i;var a=Date.now(),o=(a-e)/t.frameDuration;t.dropFrames+=o,t.animations.length>0&&t.requestAnimationFrame()}}}},{}],22:[function(t,e,n){"use strict";e.exports=function(t){var e=t.canvasHelpers={};e.drawPoint=function(t,e,n,i,a){var o,r,s,l,d,u;if("object"==typeof e&&(o=e.toString(),"[object HTMLImageElement]"===o||"[object HTMLCanvasElement]"===o))return void t.drawImage(e,i-e.width/2,a-e.height/2);if(!(isNaN(n)||0>=n)){switch(e){default:t.beginPath(),t.arc(i,a,n,0,2*Math.PI),t.closePath(),t.fill();break;case"triangle":t.beginPath(),r=3*n/Math.sqrt(3),d=r*Math.sqrt(3)/2,t.moveTo(i-r/2,a+d/3),t.lineTo(i+r/2,a+d/3),t.lineTo(i,a-2*d/3),t.closePath(),t.fill();break;case"rect":u=1/Math.SQRT2*n,t.beginPath(),t.fillRect(i-u,a-u,2*u,2*u),t.strokeRect(i-u,a-u,2*u,2*u);break;case"rectRot":u=1/Math.SQRT2*n,t.beginPath(),t.moveTo(i-u,a),t.lineTo(i,a+u),t.lineTo(i+u,a),t.lineTo(i,a-u),t.closePath(),t.fill();break;case"cross":t.beginPath(),t.moveTo(i,a+n),t.lineTo(i,a-n),t.moveTo(i-n,a),t.lineTo(i+n,a),t.closePath();break;case"crossRot":t.beginPath(),s=Math.cos(Math.PI/4)*n,l=Math.sin(Math.PI/4)*n,t.moveTo(i-s,a-l),t.lineTo(i+s,a+l),t.moveTo(i-s,a+l),t.lineTo(i+s,a-l),t.closePath();break;case"star":t.beginPath(),t.moveTo(i,a+n),t.lineTo(i,a-n),t.moveTo(i-n,a),t.lineTo(i+n,a),s=Math.cos(Math.PI/4)*n,l=Math.sin(Math.PI/4)*n,t.moveTo(i-s,a-l),t.lineTo(i+s,a+l),t.moveTo(i-s,a+l),t.lineTo(i+s,a-l),t.closePath();break;case"line":t.beginPath(),t.moveTo(i-n,a),t.lineTo(i+n,a),t.closePath();break;case"dash":t.beginPath(),t.moveTo(i,a),t.lineTo(i+n,a),t.closePath()}t.stroke()}}}},{}],23:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.types={},t.instances={},t.controllers={},t.Controller=function(n){return this.chart=n,this.config=n.config,this.options=this.config.options=e.configMerge(t.defaults.global,t.defaults[this.config.type],this.config.options||{}),this.id=e.uid(),Object.defineProperty(this,"data",{get:function(){return this.config.data}}),t.instances[this.id]=this,this.options.responsive&&this.resize(!0),this.initialize(),this},e.extend(t.Controller.prototype,{initialize:function(){var e=this;return t.plugins.notify("beforeInit",[e]),e.bindEvents(),e.ensureScalesHaveIDs(),e.buildOrUpdateControllers(),e.buildScales(),e.updateLayout(),e.resetElements(),e.initToolTip(),e.update(),t.plugins.notify("afterInit",[e]),e},clear:function(){return e.clear(this.chart),this},stop:function(){return t.animationService.cancelAnimation(this),this},resize:function(n){var i=this,a=i.chart,o=a.canvas,r=e.getMaximumWidth(o),s=a.aspectRatio,l=i.options.maintainAspectRatio&&isNaN(s)===!1&&isFinite(s)&&0!==s?r/s:e.getMaximumHeight(o),d=a.width!==r||a.height!==l;if(!d)return i;o.width=a.width=r,o.height=a.height=l,e.retinaScale(a);var u={width:r,height:l};return t.plugins.notify("resize",[i,u]),i.options.onResize&&i.options.onResize(i,u),n||(i.stop(),i.update(i.options.responsiveAnimationDuration)),i},ensureScalesHaveIDs:function(){var t=this.options,n=t.scales||{},i=t.scale;e.each(n.xAxes,function(t,e){t.id=t.id||"x-axis-"+e}),e.each(n.yAxes,function(t,e){t.id=t.id||"y-axis-"+e}),i&&(i.id=i.id||"scale")},buildScales:function(){var n=this,i=n.options,a=n.scales={},o=[];i.scales&&(o=o.concat((i.scales.xAxes||[]).map(function(t){return{options:t,dtype:"category"}}),(i.scales.yAxes||[]).map(function(t){return{options:t,dtype:"linear"}}))),i.scale&&o.push({options:i.scale,dtype:"radialLinear",isDefault:!0}),e.each(o,function(i){var o=i.options,r=e.getValueOrDefault(o.type,i.dtype),s=t.scaleService.getScaleConstructor(r);if(s){var l=new s({id:o.id,options:o,ctx:n.chart.ctx,chart:n});a[l.id]=l,i.isDefault&&(n.scale=l)}}),t.scaleService.addScalesToLayout(this)},updateLayout:function(){t.layoutService.update(this,this.chart.width,this.chart.height)},buildOrUpdateControllers:function(){var n=this,i=[],a=[];if(e.each(n.data.datasets,function(e,o){var r=n.getDatasetMeta(o);r.type||(r.type=e.type||n.config.type),i.push(r.type),r.controller?r.controller.updateIndex(o):(r.controller=new t.controllers[r.type](n,o),a.push(r.controller))},n),i.length>1)for(var o=1;o<i.length;o++)if(i[o]!==i[o-1]){n.isCombo=!0;break}return a},resetElements:function(){var t=this;e.each(t.data.datasets,function(e,n){t.getDatasetMeta(n).controller.reset()},t)},update:function(n,i){var a=this;t.plugins.notify("beforeUpdate",[a]),a.tooltip._data=a.data;var o=a.buildOrUpdateControllers();e.each(a.data.datasets,function(t,e){a.getDatasetMeta(e).controller.buildOrUpdateElements()},a),t.layoutService.update(a,a.chart.width,a.chart.height),t.plugins.notify("afterScaleUpdate",[a]),e.each(o,function(t){t.reset()}),a.updateDatasets(),t.plugins.notify("afterUpdate",[a]),a.render(n,i)},updateDatasets:function(){var e,n,i=this;if(t.plugins.notify("beforeDatasetsUpdate",[i])){for(e=0,n=i.data.datasets.length;n>e;++e)i.getDatasetMeta(e).controller.update();t.plugins.notify("afterDatasetsUpdate",[i])}},render:function(n,i){var a=this;t.plugins.notify("beforeRender",[a]);var o=a.options.animation;if(o&&("undefined"!=typeof n&&0!==n||"undefined"==typeof n&&0!==o.duration)){var r=new t.Animation;r.numSteps=(n||o.duration)/16.66,r.easing=o.easing,r.render=function(t,n){var i=e.easingEffects[n.easing],a=n.currentStep/n.numSteps,o=i(a);t.draw(o,a,n.currentStep)},r.onAnimationProgress=o.onProgress,r.onAnimationComplete=o.onComplete,t.animationService.addAnimation(a,r,n,i)}else a.draw(),o&&o.onComplete&&o.onComplete.call&&o.onComplete.call(a);return a},draw:function(n){var i=this,a=n||1;i.clear(),t.plugins.notify("beforeDraw",[i,a]),e.each(i.boxes,function(t){t.draw(i.chartArea)},i),i.scale&&i.scale.draw(),t.plugins.notify("beforeDatasetsDraw",[i,a]),e.each(i.data.datasets,function(t,e){i.isDatasetVisible(e)&&i.getDatasetMeta(e).controller.draw(n)},i,!0),t.plugins.notify("afterDatasetsDraw",[i,a]),i.tooltip.transition(a).draw(),t.plugins.notify("afterDraw",[i,a])},getElementAtEvent:function(t){var n=this,i=e.getRelativePosition(t,n.chart),a=[];return e.each(n.data.datasets,function(t,o){if(n.isDatasetVisible(o)){var r=n.getDatasetMeta(o);e.each(r.data,function(t){return t.inRange(i.x,i.y)?(a.push(t),a):void 0})}}),a.slice(0,1)},getElementsAtEvent:function(t){var n=this,i=e.getRelativePosition(t,n.chart),a=[],o=function(){if(n.data.datasets)for(var t=0;t<n.data.datasets.length;t++){var e=n.getDatasetMeta(t);if(n.isDatasetVisible(t))for(var a=0;a<e.data.length;a++)if(e.data[a].inRange(i.x,i.y))return e.data[a]}}.call(n);return o?(e.each(n.data.datasets,function(t,e){if(n.isDatasetVisible(e)){var i=n.getDatasetMeta(e),r=i.data[o._index];r&&!r._view.skip&&a.push(r)}},n),a):a},getElementsAtXAxis:function(t){var n=this,i=e.getRelativePosition(t,n.chart),a=[],o=function(){if(n.data.datasets)for(var t=0;t<n.data.datasets.length;t++){var e=n.getDatasetMeta(t);if(n.isDatasetVisible(t))for(var a=0;a<e.data.length;a++)if(e.data[a].inLabelRange(i.x,i.y))return e.data[a]}}.call(n);return o?(e.each(n.data.datasets,function(t,i){if(n.isDatasetVisible(i)){var r=n.getDatasetMeta(i),s=e.findIndex(r.data,function(t){return o._model.x===t._model.x});-1===s||r.data[s]._view.skip||a.push(r.data[s])}},n),a):a},getElementsAtEventForMode:function(t,e){var n=this;switch(e){case"single":return n.getElementAtEvent(t);case"label":return n.getElementsAtEvent(t);case"dataset":return n.getDatasetAtEvent(t);case"x-axis":return n.getElementsAtXAxis(t);default:return t}},getDatasetAtEvent:function(t){var e=this.getElementAtEvent(t);return e.length>0&&(e=this.getDatasetMeta(e[0]._datasetIndex).data),e},getDatasetMeta:function(t){var e=this,n=e.data.datasets[t];n._meta||(n._meta={});var i=n._meta[e.id];return i||(i=n._meta[e.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null}),i},getVisibleDatasetCount:function(){for(var t=0,e=0,n=this.data.datasets.length;n>e;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroy:function(){var n=this;n.stop(),n.clear(),e.unbindEvents(n,n.events),e.removeResizeListener(n.chart.canvas.parentNode);var i=n.chart.canvas;i.width=n.chart.width,i.height=n.chart.height,void 0!==n.chart.originalDevicePixelRatio&&n.chart.ctx.scale(1/n.chart.originalDevicePixelRatio,1/n.chart.originalDevicePixelRatio),i.style.width=n.chart.originalCanvasStyleWidth,i.style.height=n.chart.originalCanvasStyleHeight,t.plugins.notify("destroy",[n]),delete t.instances[n.id]},toBase64Image:function(){return this.chart.canvas.toDataURL.apply(this.chart.canvas,arguments)},initToolTip:function(){var e=this;e.tooltip=new t.Tooltip({_chart:e.chart,_chartInstance:e,_data:e.data,_options:e.options.tooltips},e)},bindEvents:function(){var t=this;e.bindEvents(t,t.options.events,function(e){t.eventHandler(e)})},updateHoverStyle:function(t,e,n){var i,a,o,r=n?"setHoverStyle":"removeHoverStyle";switch(e){case"single":t=[t[0]];break;case"label":case"dataset":case"x-axis":break;default:return}for(a=0,o=t.length;o>a;++a)i=t[a],i&&this.getDatasetMeta(i._datasetIndex).controller[r](i)},eventHandler:function(t){var n=this,i=n.tooltip,a=n.options||{},o=a.hover,r=a.tooltips;return n.lastActive=n.lastActive||[],n.lastTooltipActive=n.lastTooltipActive||[],"mouseout"===t.type?(n.active=[],n.tooltipActive=[]):(n.active=n.getElementsAtEventForMode(t,o.mode),n.tooltipActive=n.getElementsAtEventForMode(t,r.mode)),o.onHover&&o.onHover.call(n,n.active),n.legend&&n.legend.handleEvent&&n.legend.handleEvent(t),("mouseup"===t.type||"click"===t.type)&&a.onClick&&a.onClick.call(n,t,n.active),n.lastActive.length&&n.updateHoverStyle(n.lastActive,o.mode,!1),n.active.length&&o.mode&&n.updateHoverStyle(n.active,o.mode,!0),(r.enabled||r.custom)&&(i.initialize(),i._active=n.tooltipActive,i.update(!0)),i.pivot(),n.animating||e.arrayEquals(n.active,n.lastActive)&&e.arrayEquals(n.tooltipActive,n.lastTooltipActive)||(n.stop(),(r.enabled||r.custom)&&i.update(!0),n.render(o.animationDuration,!0)),n.lastActive=n.active,n.lastTooltipActive=n.tooltipActive,n}})}},{}],24:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=e.noop;t.DatasetController=function(t,e){this.initialize(t,e)},e.extend(t.DatasetController.prototype,{datasetElementType:null,dataElementType:null,initialize:function(t,e){var n=this;n.chart=t,n.index=e,n.linkScales(),n.addElements()},updateIndex:function(t){this.index=t},linkScales:function(){var t=this,e=t.getMeta(),n=t.getDataset();null===e.xAxisID&&(e.xAxisID=n.xAxisID||t.chart.options.scales.xAxes[0].id),null===e.yAxisID&&(e.yAxisID=n.yAxisID||t.chart.options.scales.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},reset:function(){this.update(!0)},createMetaDataset:function(){var t=this,e=t.datasetElementType;return e&&new e({_chart:t.chart.chart,_datasetIndex:t.index})},createMetaData:function(t){var e=this,n=e.dataElementType;return n&&new n({_chart:e.chart.chart,_datasetIndex:e.index,_index:t})},addElements:function(){var t,e,n=this,i=n.getMeta(),a=n.getDataset().data||[],o=i.data;for(t=0,e=a.length;e>t;++t)o[t]=o[t]||n.createMetaData(i,t);i.dataset=i.dataset||n.createMetaDataset()},addElementAndReset:function(t){var e=this,n=e.createMetaData(t);e.getMeta().data.splice(t,0,n),e.updateElement(n,t,!0)},buildOrUpdateElements:function(){var t=this.getMeta(),e=t.data,n=this.getDataset().data.length,i=e.length;if(i>n)e.splice(n,i-n);else if(n>i)for(var a=i;n>a;++a)this.addElementAndReset(a)},update:n,draw:function(t){var n=t||1;e.each(this.getMeta().data,function(t){t.transition(n).draw()})},removeHoverStyle:function(t,n){var i=this.chart.data.datasets[t._datasetIndex],a=t._index,o=t.custom||{},r=e.getValueAtIndexOrDefault,s=t._model;s.backgroundColor=o.backgroundColor?o.backgroundColor:r(i.backgroundColor,a,n.backgroundColor),s.borderColor=o.borderColor?o.borderColor:r(i.borderColor,a,n.borderColor),s.borderWidth=o.borderWidth?o.borderWidth:r(i.borderWidth,a,n.borderWidth)},setHoverStyle:function(t){var n=this.chart.data.datasets[t._datasetIndex],i=t._index,a=t.custom||{},o=e.getValueAtIndexOrDefault,r=e.getHoverColor,s=t._model;s.backgroundColor=a.hoverBackgroundColor?a.hoverBackgroundColor:o(n.hoverBackgroundColor,i,r(s.backgroundColor)),s.borderColor=a.hoverBorderColor?a.hoverBorderColor:o(n.hoverBorderColor,i,r(s.borderColor)),s.borderWidth=a.hoverBorderWidth?a.hoverBorderWidth:o(n.hoverBorderWidth,i,s.borderWidth)}}),t.DatasetController.extend=e.inherits}},{}],25:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.elements={},t.Element=function(t){e.extend(this,t),this.initialize.apply(this,arguments)},e.extend(t.Element.prototype,{initialize:function(){this.hidden=!1},pivot:function(){var t=this;return t._view||(t._view=e.clone(t._model)),t._start=e.clone(t._view),t},transition:function(t){var n=this;return n._view||(n._view=e.clone(n._model)),1===t?(n._view=n._model,n._start=null,n):(n._start||n.pivot(),e.each(n._model,function(i,a){if("_"===a[0]);else if(n._view.hasOwnProperty(a))if(i===n._view[a]);else if("string"==typeof i)try{var o=e.color(n._model[a]).mix(e.color(n._start[a]),t);n._view[a]=o.rgbString()}catch(r){n._view[a]=i}else if("number"==typeof i){var s=void 0!==n._start[a]&&isNaN(n._start[a])===!1?n._start[a]:0;n._view[a]=(n._model[a]-s)*t+s}else n._view[a]=i;else"number"!=typeof i||isNaN(n._view[a])?n._view[a]=i:n._view[a]=i*t},n),n)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return e.isNumber(this._model.x)&&e.isNumber(this._model.y)}}),t.Element.extend=e.inherits}},{}],26:[function(t,e,n){"use strict";var i=t(2);e.exports=function(t){function e(t,e,n){var i;return"string"==typeof t?(i=parseInt(t,10),-1!==t.indexOf("%")&&(i=i/100*e.parentNode[n])):i=t,i}function n(t){return void 0!==t&&null!==t&&"none"!==t}function a(t,i,a){var o=document.defaultView,r=t.parentNode,s=o.getComputedStyle(t)[i],l=o.getComputedStyle(r)[i],d=n(s),u=n(l),c=Number.POSITIVE_INFINITY;return d||u?Math.min(d?e(s,t,a):c,u?e(l,r,a):c):"none"}var o=t.helpers={};o.each=function(t,e,n,i){var a,r;if(o.isArray(t))if(r=t.length,i)for(a=r-1;a>=0;a--)e.call(n,t[a],a);else for(a=0;r>a;a++)e.call(n,t[a],a);else if("object"==typeof t){var s=Object.keys(t);for(r=s.length,a=0;r>a;a++)e.call(n,t[s[a]],s[a])}},o.clone=function(t){var e={};return o.each(t,function(t,n){o.isArray(t)?e[n]=t.slice(0):"object"==typeof t&&null!==t?e[n]=o.clone(t):e[n]=t}),e},o.extend=function(t){for(var e=function(e,n){t[n]=e},n=1,i=arguments.length;i>n;n++)o.each(arguments[n],e);return t},o.configMerge=function(e){var n=o.clone(e);return o.each(Array.prototype.slice.call(arguments,1),function(e){o.each(e,function(e,i){if("scales"===i)n[i]=o.scaleMerge(n.hasOwnProperty(i)?n[i]:{},e);else if("scale"===i)n[i]=o.configMerge(n.hasOwnProperty(i)?n[i]:{},t.scaleService.getScaleDefaults(e.type),e);else if(n.hasOwnProperty(i)&&o.isArray(n[i])&&o.isArray(e)){var a=n[i];o.each(e,function(t,e){e<a.length?"object"==typeof a[e]&&null!==a[e]&&"object"==typeof t&&null!==t?a[e]=o.configMerge(a[e],t):a[e]=t:a.push(t)})}else n.hasOwnProperty(i)&&"object"==typeof n[i]&&null!==n[i]&&"object"==typeof e?n[i]=o.configMerge(n[i],e):n[i]=e})}),n},o.scaleMerge=function(e,n){var i=o.clone(e);return o.each(n,function(e,n){"xAxes"===n||"yAxes"===n?i.hasOwnProperty(n)?o.each(e,function(e,a){var r=o.getValueOrDefault(e.type,"xAxes"===n?"category":"linear"),s=t.scaleService.getScaleDefaults(r);a>=i[n].length||!i[n][a].type?i[n].push(o.configMerge(s,e)):e.type&&e.type!==i[n][a].type?i[n][a]=o.configMerge(i[n][a],s,e):i[n][a]=o.configMerge(i[n][a],e)}):(i[n]=[],o.each(e,function(e){var a=o.getValueOrDefault(e.type,"xAxes"===n?"category":"linear");i[n].push(o.configMerge(t.scaleService.getScaleDefaults(a),e))})):i.hasOwnProperty(n)&&"object"==typeof i[n]&&null!==i[n]&&"object"==typeof e?i[n]=o.configMerge(i[n],e):i[n]=e}),i},o.getValueAtIndexOrDefault=function(t,e,n){return void 0===t||null===t?n:o.isArray(t)?e<t.length?t[e]:n:t},o.getValueOrDefault=function(t,e){return void 0===t?e:t},o.indexOf=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var n=0,i=t.length;i>n;++n)if(t[n]===e)return n;return-1},o.where=function(t,e){if(o.isArray(t)&&Array.prototype.filter)return t.filter(e);var n=[];return o.each(t,function(t){e(t)&&n.push(t)}),n},o.findIndex=Array.prototype.findIndex?function(t,e,n){return t.findIndex(e,n)}:function(t,e,n){n=void 0===n?t:n;for(var i=0,a=t.length;a>i;++i)if(e.call(n,t[i],i,t))return i;return-1},o.findNextWhere=function(t,e,n){(void 0===n||null===n)&&(n=-1);for(var i=n+1;i<t.length;i++){var a=t[i];if(e(a))return a}},o.findPreviousWhere=function(t,e,n){(void 0===n||null===n)&&(n=t.length);for(var i=n-1;i>=0;i--){var a=t[i];if(e(a))return a}},o.inherits=function(t){var e=this,n=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},i=function(){this.constructor=n};return i.prototype=e.prototype,n.prototype=new i,n.extend=o.inherits,t&&o.extend(n.prototype,t),n.__super__=e.prototype,n},o.noop=function(){},o.uid=function(){var t=0;return function(){return t++}}(),o.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},o.almostEquals=function(t,e,n){return Math.abs(t-e)<n},o.max=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.max(t,e)},Number.NEGATIVE_INFINITY)},o.min=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.min(t,e)},Number.POSITIVE_INFINITY)},o.sign=Math.sign?function(t){return Math.sign(t)}:function(t){return t=+t,0===t||isNaN(t)?t:t>0?1:-1},o.log10=Math.log10?function(t){return Math.log10(t)}:function(t){return Math.log(t)/Math.LN10},o.toRadians=function(t){return t*(Math.PI/180)},o.toDegrees=function(t){return t*(180/Math.PI)},o.getAngleFromPoint=function(t,e){var n=e.x-t.x,i=e.y-t.y,a=Math.sqrt(n*n+i*i),o=Math.atan2(i,n);return o<-.5*Math.PI&&(o+=2*Math.PI),{angle:o,distance:a}},o.aliasPixel=function(t){return t%2===0?0:.5},o.splineCurve=function(t,e,n,i){var a=t.skip?e:t,o=e,r=n.skip?e:n,s=Math.sqrt(Math.pow(o.x-a.x,2)+Math.pow(o.y-a.y,2)),l=Math.sqrt(Math.pow(r.x-o.x,2)+Math.pow(r.y-o.y,2)),d=s/(s+l),u=l/(s+l);d=isNaN(d)?0:d,u=isNaN(u)?0:u;var c=i*d,h=i*u;return{previous:{x:o.x-c*(r.x-a.x),y:o.y-c*(r.y-a.y)},next:{x:o.x+h*(r.x-a.x),y:o.y+h*(r.y-a.y)}}},o.EPSILON=Number.EPSILON||1e-14,o.splineCurveMonotone=function(t){var e,n,i,a,r=(t||[]).map(function(t){return{model:t._model,deltaK:0,mK:0}}),s=r.length;for(e=0;s>e;++e)i=r[e],i.model.skip||(n=e>0?r[e-1]:null,a=s-1>e?r[e+1]:null,a&&!a.model.skip&&(i.deltaK=(a.model.y-i.model.y)/(a.model.x-i.model.x)),!n||n.model.skip?i.mK=i.deltaK:!a||a.model.skip?i.mK=n.deltaK:this.sign(n.deltaK)!==this.sign(i.deltaK)?i.mK=0:i.mK=(n.deltaK+i.deltaK)/2);var l,d,u,c;for(e=0;s-1>e;++e)i=r[e],a=r[e+1],i.model.skip||a.model.skip||(o.almostEquals(i.deltaK,0,this.EPSILON)?i.mK=a.mK=0:(l=i.mK/i.deltaK,d=a.mK/i.deltaK,c=Math.pow(l,2)+Math.pow(d,2),9>=c||(u=3/Math.sqrt(c),i.mK=l*u*i.deltaK,a.mK=d*u*i.deltaK)));var h;for(e=0;s>e;++e)i=r[e],i.model.skip||(n=e>0?r[e-1]:null,a=s-1>e?r[e+1]:null,n&&!n.model.skip&&(h=(i.model.x-n.model.x)/3,i.model.controlPointPreviousX=i.model.x-h,i.model.controlPointPreviousY=i.model.y-h*i.mK),a&&!a.model.skip&&(h=(a.model.x-i.model.x)/3,i.model.controlPointNextX=i.model.x+h,i.model.controlPointNextY=i.model.y+h*i.mK))},o.nextItem=function(t,e,n){return n?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},o.previousItem=function(t,e,n){return n?0>=e?t[t.length-1]:t[e-1]:0>=e?t[0]:t[e-1]},o.niceNum=function(t,e){var n,i=Math.floor(o.log10(t)),a=t/Math.pow(10,i);return n=e?1.5>a?1:3>a?2:7>a?5:10:1>=a?1:2>=a?2:5>=a?5:10,n*Math.pow(10,i)};var r=o.easingEffects={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-1*t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-0.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1)},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-0.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2))},easeInOutSine:function(t){return-0.5*(Math.cos(Math.PI*t/1)-1)},easeInExpo:function(t){return 0===t?1:1*Math.pow(2,10*(t/1-1))},easeOutExpo:function(t){return 1===t?1:1*(-Math.pow(2,-10*t/1)+1)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return t>=1?t:-1*(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-0.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:1===(t/=1)?1:(n||(n=.3),i<Math.abs(1)?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),-(i*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/n)))},easeOutElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:1===(t/=1)?1:(n||(n=.3),i<Math.abs(1)?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),i*Math.pow(2,-10*t)*Math.sin((1*t-e)*(2*Math.PI)/n)+1)},easeInOutElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:2===(t/=.5)?1:(n||(n=1*(.3*1.5)),i<Math.abs(1)?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),1>t?-.5*(i*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/n)):i*Math.pow(2,-10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/n)*.5+1)},easeInBack:function(t){var e=1.70158;return 1*(t/=1)*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return 1*((t=t/1-1)*t*((e+1)*t+e)+1)},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:function(t){return 1-r.easeOutBounce(1-t)},easeOutBounce:function(t){return(t/=1)<1/2.75?1*(7.5625*t*t):2/2.75>t?1*(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1*(7.5625*(t-=2.25/2.75)*t+.9375):1*(7.5625*(t-=2.625/2.75)*t+.984375)},easeInOutBounce:function(t){return.5>t?.5*r.easeInBounce(2*t):.5*r.easeOutBounce(2*t-1)+.5}};o.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),o.cancelAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t,1e3/60)}}(),o.getRelativePosition=function(t,e){var n,i,a=t.originalEvent||t,r=t.currentTarget||t.srcElement,s=r.getBoundingClientRect(),l=a.touches;l&&l.length>0?(n=l[0].clientX,i=l[0].clientY):(n=a.clientX,i=a.clientY);var d=parseFloat(o.getStyle(r,"padding-left")),u=parseFloat(o.getStyle(r,"padding-top")),c=parseFloat(o.getStyle(r,"padding-right")),h=parseFloat(o.getStyle(r,"padding-bottom")),f=s.right-s.left-d-c,g=s.bottom-s.top-u-h;
return n=Math.round((n-s.left-d)/f*r.width/e.currentDevicePixelRatio),i=Math.round((i-s.top-u)/g*r.height/e.currentDevicePixelRatio),{x:n,y:i}},o.addEvent=function(t,e,n){t.addEventListener?t.addEventListener(e,n):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n},o.removeEvent=function(t,e,n){t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=o.noop},o.bindEvents=function(t,e,n){var i=t.events=t.events||{};o.each(e,function(e){i[e]=function(){n.apply(t,arguments)},o.addEvent(t.chart.canvas,e,i[e])})},o.unbindEvents=function(t,e){var n=t.chart.canvas;o.each(e,function(t,e){o.removeEvent(n,e,t)})},o.getConstraintWidth=function(t){return a(t,"max-width","clientWidth")},o.getConstraintHeight=function(t){return a(t,"max-height","clientHeight")},o.getMaximumWidth=function(t){var e=t.parentNode,n=parseInt(o.getStyle(e,"padding-left"),10),i=parseInt(o.getStyle(e,"padding-right"),10),a=e.clientWidth-n-i,r=o.getConstraintWidth(t);return isNaN(r)?a:Math.min(a,r)},o.getMaximumHeight=function(t){var e=t.parentNode,n=parseInt(o.getStyle(e,"padding-top"),10),i=parseInt(o.getStyle(e,"padding-bottom"),10),a=e.clientHeight-n-i,r=o.getConstraintHeight(t);return isNaN(r)?a:Math.min(a,r)},o.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},o.retinaScale=function(t){var e=t.ctx,n=t.canvas,i=n.width,a=n.height,o=t.currentDevicePixelRatio=window.devicePixelRatio||1;1!==o&&(n.height=a*o,n.width=i*o,e.scale(o,o),t.originalDevicePixelRatio=t.originalDevicePixelRatio||o),n.style.width=i+"px",n.style.height=a+"px"},o.clear=function(t){t.ctx.clearRect(0,0,t.width,t.height)},o.fontString=function(t,e,n){return e+" "+t+"px "+n},o.longestText=function(t,e,n,i){i=i||{};var a=i.data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(a=i.data={},r=i.garbageCollect=[],i.font=e),t.font=e;var s=0;o.each(n,function(e){void 0!==e&&null!==e&&o.isArray(e)!==!0?s=o.measureText(t,a,r,s,e):o.isArray(e)&&o.each(e,function(e){void 0===e||null===e||o.isArray(e)||(s=o.measureText(t,a,r,s,e))})});var l=r.length/2;if(l>n.length){for(var d=0;l>d;d++)delete a[r[d]];r.splice(0,l)}return s},o.measureText=function(t,e,n,i,a){var o=e[a];return o||(o=e[a]=t.measureText(a).width,n.push(a)),o>i&&(i=o),i},o.numberOfLabelLines=function(t){var e=1;return o.each(t,function(t){o.isArray(t)&&t.length>e&&(e=t.length)}),e},o.drawRoundedRectangle=function(t,e,n,i,a,o){t.beginPath(),t.moveTo(e+o,n),t.lineTo(e+i-o,n),t.quadraticCurveTo(e+i,n,e+i,n+o),t.lineTo(e+i,n+a-o),t.quadraticCurveTo(e+i,n+a,e+i-o,n+a),t.lineTo(e+o,n+a),t.quadraticCurveTo(e,n+a,e,n+a-o),t.lineTo(e,n+o),t.quadraticCurveTo(e,n,e+o,n),t.closePath()},o.color=function(e){return i?i(e instanceof CanvasGradient?t.defaults.global.defaultColor:e):(console.error("Color.js not found!"),e)},o.addResizeListener=function(t,e){var n=document.createElement("iframe"),i="chartjs-hidden-iframe";n.classlist?n.classlist.add(i):n.setAttribute("class",i),n.tabIndex=-1;var a=n.style;a.width="100%",a.display="block",a.border=0,a.height=0,a.margin=0,a.position="absolute",a.left=0,a.right=0,a.top=0,a.bottom=0,t.insertBefore(n,t.firstChild),(n.contentWindow||n).onresize=function(){return e?e():void 0}},o.removeResizeListener=function(t){var e=t.querySelector(".chartjs-hidden-iframe");e&&e.parentNode.removeChild(e)},o.isArray=Array.isArray?function(t){return Array.isArray(t)}:function(t){return"[object Array]"===Object.prototype.toString.call(t)},o.arrayEquals=function(t,e){var n,i,a,r;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;i>n;++n)if(a=t[n],r=e[n],a instanceof Array&&r instanceof Array){if(!o.arrayEquals(a,r))return!1}else if(a!==r)return!1;return!0},o.callCallback=function(t,e,n){t&&"function"==typeof t.call&&t.apply(n,e)},o.getHoverColor=function(t){return t instanceof CanvasPattern?t:o.color(t).saturate(.5).darken(.1).rgbString()}}},{2:2}],27:[function(t,e,n){"use strict";e.exports=function(){var t=function(e,n){var i=this,a=t.helpers;return i.config=n||{data:{datasets:[]}},e.length&&e[0].getContext&&(e=e[0]),e.getContext&&(e=e.getContext("2d")),i.ctx=e,i.canvas=e.canvas,e.canvas.style.display=e.canvas.style.display||"block",i.width=e.canvas.width||parseInt(a.getStyle(e.canvas,"width"),10)||a.getMaximumWidth(e.canvas),i.height=e.canvas.height||parseInt(a.getStyle(e.canvas,"height"),10)||a.getMaximumHeight(e.canvas),i.aspectRatio=i.width/i.height,(isNaN(i.aspectRatio)||isFinite(i.aspectRatio)===!1)&&(i.aspectRatio=void 0!==n.aspectRatio?n.aspectRatio:2),i.originalCanvasStyleWidth=e.canvas.style.width,i.originalCanvasStyleHeight=e.canvas.style.height,a.retinaScale(i),i.controller=new t.Controller(i),a.addResizeListener(e.canvas.parentNode,function(){i.controller&&i.controller.config.options.responsive&&i.controller.resize()}),i.controller?i.controller:i};return t.defaults={global:{responsive:!0,responsiveAnimationDuration:0,maintainAspectRatio:!0,events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"single",animationDuration:400},onClick:null,defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",showLines:!0,elements:{},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');for(var n=0;n<t.data.datasets.length;n++)e.push('<li><span style="background-color:'+t.data.datasets[n].backgroundColor+'"></span>'),t.data.datasets[n].label&&e.push(t.data.datasets[n].label),e.push("</li>");return e.push("</ul>"),e.join("")}}},t.Chart=t,t}},{}],28:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.layoutService={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),t.boxes.push(e)},removeBox:function(t,e){t.boxes&&t.boxes.splice(t.boxes.indexOf(e),1)},update:function(t,n,i){function a(t){var e,n=t.isHorizontal();n?(e=t.update(t.options.fullWidth?m:k,x),S-=e.height):(e=t.update(y,b),k-=e.width),w.push({horizontal:n,minSize:e,box:t})}function o(t){var n=e.findNextWhere(w,function(e){return e.box===t});if(n)if(t.isHorizontal()){var i={left:_,right:M,top:0,bottom:0};t.update(t.options.fullWidth?m:k,p/2,i)}else t.update(n.minSize.width,S)}function r(t){var n=e.findNextWhere(w,function(e){return e.box===t}),i={left:0,right:0,top:D,bottom:C};n&&t.update(n.minSize.width,S,i)}function s(t){t.isHorizontal()?(t.left=t.options.fullWidth?l:_,t.right=t.options.fullWidth?n-l:_+k,t.top=I,t.bottom=I+t.height,I=t.bottom):(t.left=F,t.right=F+t.width,t.top=D,t.bottom=D+S,F=t.right)}if(t){var l=0,d=0,u=e.where(t.boxes,function(t){return"left"===t.options.position}),c=e.where(t.boxes,function(t){return"right"===t.options.position}),h=e.where(t.boxes,function(t){return"top"===t.options.position}),f=e.where(t.boxes,function(t){return"bottom"===t.options.position}),g=e.where(t.boxes,function(t){return"chartArea"===t.options.position});h.sort(function(t,e){return(e.options.fullWidth?1:0)-(t.options.fullWidth?1:0)}),f.sort(function(t,e){return(t.options.fullWidth?1:0)-(e.options.fullWidth?1:0)});var m=n-2*l,p=i-2*d,v=m/2,b=p/2,y=(n-v)/(u.length+c.length),x=(i-b)/(h.length+f.length),k=m,S=p,w=[];e.each(u.concat(c,h,f),a);var _=l,M=l,D=d,C=d;e.each(u.concat(c),o),e.each(u,function(t){_+=t.width}),e.each(c,function(t){M+=t.width}),e.each(h.concat(f),o),e.each(h,function(t){D+=t.height}),e.each(f,function(t){C+=t.height}),e.each(u.concat(c),r),_=l,M=l,D=d,C=d,e.each(u,function(t){_+=t.width}),e.each(c,function(t){M+=t.width}),e.each(h,function(t){D+=t.height}),e.each(f,function(t){C+=t.height});var T=i-D-C,P=n-_-M;(P!==k||T!==S)&&(e.each(u,function(t){t.height=T}),e.each(c,function(t){t.height=T}),e.each(h,function(t){t.options.fullWidth||(t.width=P)}),e.each(f,function(t){t.options.fullWidth||(t.width=P)}),S=T,k=P);var F=l,I=d;e.each(u.concat(h),s),F+=k,I+=S,e.each(c,s),e.each(f,s),t.chartArea={left:_,top:D,right:_+k,bottom:D+S},e.each(g,function(e){e.left=t.chartArea.left,e.top=t.chartArea.top,e.right=t.chartArea.right,e.bottom=t.chartArea.bottom,e.update(k,S)})}}}}},{}],29:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=e.noop;t.defaults.global.legend={display:!0,position:"top",fullWidth:!0,reverse:!1,onClick:function(t,e){var n=e.datasetIndex,i=this.chart,a=i.getDatasetMeta(n);a.hidden=null===a.hidden?!i.data.datasets[n].hidden:null,i.update()},onHover:null,labels:{boxWidth:40,padding:10,generateLabels:function(t){var n=t.data;return e.isArray(n.datasets)?n.datasets.map(function(n,i){return{text:n.label,fillStyle:e.isArray(n.backgroundColor)?n.backgroundColor[0]:n.backgroundColor,hidden:!t.isDatasetVisible(i),lineCap:n.borderCapStyle,lineDash:n.borderDash,lineDashOffset:n.borderDashOffset,lineJoin:n.borderJoinStyle,lineWidth:n.borderWidth,strokeStyle:n.borderColor,pointStyle:n.pointStyle,datasetIndex:i}},this):[]}}},t.Legend=t.Element.extend({initialize:function(t){e.extend(this,t),this.legendHitBoxes=[],this.doughnutMode=!1},beforeUpdate:n,update:function(t,e,n){var i=this;return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=n,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:n,beforeSetDimensions:n,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:n,beforeBuildLabels:n,buildLabels:function(){var t=this;t.legendItems=t.options.labels.generateLabels.call(t,t.chart),t.options.reverse&&t.legendItems.reverse()},afterBuildLabels:n,beforeFit:n,fit:function(){var n=this,i=n.options,a=i.labels,o=i.display,r=n.ctx,s=t.defaults.global,l=e.getValueOrDefault,d=l(a.fontSize,s.defaultFontSize),u=l(a.fontStyle,s.defaultFontStyle),c=l(a.fontFamily,s.defaultFontFamily),h=e.fontString(d,u,c),f=n.legendHitBoxes=[],g=n.minSize,m=n.isHorizontal();if(m?(g.width=n.maxWidth,g.height=o?10:0):(g.width=o?10:0,g.height=n.maxHeight),o)if(r.font=h,m){var p=n.lineWidths=[0],v=n.legendItems.length?d+a.padding:0;r.textAlign="left",r.textBaseline="top",e.each(n.legendItems,function(t,e){var i=a.usePointStyle?d*Math.sqrt(2):a.boxWidth,o=i+d/2+r.measureText(t.text).width;p[p.length-1]+o+a.padding>=n.width&&(v+=d+a.padding,p[p.length]=n.left),f[e]={left:0,top:0,width:o,height:d},p[p.length-1]+=o+a.padding}),g.height+=v}else{var b=a.padding,y=n.columnWidths=[],x=a.padding,k=0,S=0,w=d+b;e.each(n.legendItems,function(t,e){var n=a.usePointStyle?2*a.boxWidth:a.boxWidth,i=n+d/2+r.measureText(t.text).width;S+w>g.height&&(x+=k+a.padding,y.push(k),k=0,S=0),k=Math.max(k,i),S+=w,f[e]={left:0,top:0,width:i,height:d}}),x+=k,y.push(k),g.width+=x}n.width=g.width,n.height=g.height},afterFit:n,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var n=this,i=n.options,a=i.labels,o=t.defaults.global,r=o.elements.line,s=n.width,l=n.lineWidths;if(i.display){var d,u=n.ctx,c=e.getValueOrDefault,h=c(a.fontColor,o.defaultFontColor),f=c(a.fontSize,o.defaultFontSize),g=c(a.fontStyle,o.defaultFontStyle),m=c(a.fontFamily,o.defaultFontFamily),p=e.fontString(f,g,m);u.textAlign="left",u.textBaseline="top",u.lineWidth=.5,u.strokeStyle=h,u.fillStyle=h,u.font=p;var v=a.boxWidth,b=n.legendHitBoxes,y=function(e,n,a){if(!(isNaN(v)||0>=v)){u.save(),u.fillStyle=c(a.fillStyle,o.defaultColor),u.lineCap=c(a.lineCap,r.borderCapStyle),u.lineDashOffset=c(a.lineDashOffset,r.borderDashOffset),u.lineJoin=c(a.lineJoin,r.borderJoinStyle),u.lineWidth=c(a.lineWidth,r.borderWidth),u.strokeStyle=c(a.strokeStyle,o.defaultColor);var s=0===c(a.lineWidth,r.borderWidth);if(u.setLineDash&&u.setLineDash(c(a.lineDash,r.borderDash)),i.labels&&i.labels.usePointStyle){var l=f*Math.SQRT2/2,d=l/Math.SQRT2,h=e+d,g=n+d;t.canvasHelpers.drawPoint(u,a.pointStyle,l,h,g)}else s||u.strokeRect(e,n,v,f),u.fillRect(e,n,v,f);u.restore()}},x=function(t,e,n,i){u.fillText(n.text,v+f/2+t,e),n.hidden&&(u.beginPath(),u.lineWidth=2,u.moveTo(v+f/2+t,e+f/2),u.lineTo(v+f/2+t+i,e+f/2),u.stroke())},k=n.isHorizontal();d=k?{x:n.left+(s-l[0])/2,y:n.top+a.padding,line:0}:{x:n.left+a.padding,y:n.top+a.padding,line:0};var S=f+a.padding;e.each(n.legendItems,function(t,e){var i=u.measureText(t.text).width,o=a.usePointStyle?f+f/2+i:v+f/2+i,r=d.x,c=d.y;k?r+o>=s&&(c=d.y+=S,d.line++,r=d.x=n.left+(s-l[d.line])/2):c+S>n.bottom&&(r=d.x=r+n.columnWidths[d.line]+a.padding,c=d.y=n.top,d.line++),y(r,c,t),b[e].left=r,b[e].top=c,x(r,c,t,i),k?d.x+=o+a.padding:d.y+=S})}},handleEvent:function(t){var n=this,i=n.options,a="mouseup"===t.type?"click":t.type;if("mousemove"===a){if(!i.onHover)return}else{if("click"!==a)return;if(!i.onClick)return}var o=e.getRelativePosition(t,n.chart.chart),r=o.x,s=o.y;if(r>=n.left&&r<=n.right&&s>=n.top&&s<=n.bottom)for(var l=n.legendHitBoxes,d=0;d<l.length;++d){var u=l[d];if(r>=u.left&&r<=u.left+u.width&&s>=u.top&&s<=u.top+u.height){if("click"===a){i.onClick.call(n,t,n.legendItems[d]);break}if("mousemove"===a){i.onHover.call(n,t,n.legendItems[d]);break}}}}}),t.plugins.register({beforeInit:function(e){var n=e.options,i=n.legend;i&&(e.legend=new t.Legend({ctx:e.chart.ctx,options:i,chart:e}),t.layoutService.addBox(e,e.legend))}})}},{}],30:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers.noop;t.plugins={_plugins:[],register:function(t){var e=this._plugins;[].concat(t).forEach(function(t){-1===e.indexOf(t)&&e.push(t)})},unregister:function(t){var e=this._plugins;[].concat(t).forEach(function(t){var n=e.indexOf(t);-1!==n&&e.splice(n,1)})},clear:function(){this._plugins=[]},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(t,e){var n,i,a=this._plugins,o=a.length;for(n=0;o>n;++n)if(i=a[n],"function"==typeof i[t]&&i[t].apply(i,e||[])===!1)return!1;return!0}},t.PluginBase=t.Element.extend({beforeInit:e,afterInit:e,beforeUpdate:e,afterUpdate:e,beforeDraw:e,afterDraw:e,destroy:e}),t.pluginService=t.plugins}},{}],31:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.scale={display:!0,position:"left",gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{labelString:"",display:!1},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:10,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:function(t){return e.isArray(t)?t:""+t}}},t.Scale=t.Element.extend({beforeUpdate:function(){e.callCallback(this.options.beforeUpdate,[this])},update:function(t,n,i){var a=this;return a.beforeUpdate(),a.maxWidth=t,a.maxHeight=n,a.margins=e.extend({left:0,right:0,top:0,bottom:0},i),a.beforeSetDimensions(),a.setDimensions(),a.afterSetDimensions(),a.beforeDataLimits(),a.determineDataLimits(),a.afterDataLimits(),a.beforeBuildTicks(),a.buildTicks(),a.afterBuildTicks(),a.beforeTickToLabelConversion(),a.convertTicksToLabels(),a.afterTickToLabelConversion(),a.beforeCalculateTickRotation(),a.calculateTickRotation(),a.afterCalculateTickRotation(),a.beforeFit(),a.fit(),a.afterFit(),a.afterUpdate(),a.minSize},afterUpdate:function(){e.callCallback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){e.callCallback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0},afterSetDimensions:function(){e.callCallback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){e.callCallback(this.options.beforeDataLimits,[this])},determineDataLimits:e.noop,afterDataLimits:function(){e.callCallback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){e.callCallback(this.options.beforeBuildTicks,[this])},buildTicks:e.noop,afterBuildTicks:function(){e.callCallback(this.options.afterBuildTicks,[this])},beforeTickToLabelConversion:function(){e.callCallback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this;t.ticks=t.ticks.map(function(e,n,i){return t.options.ticks.userCallback?t.options.ticks.userCallback(e,n,i):t.options.ticks.callback(e,n,i)},t)},afterTickToLabelConversion:function(){e.callCallback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){e.callCallback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var n=this,i=n.ctx,a=t.defaults.global,o=n.options.ticks,r=e.getValueOrDefault(o.fontSize,a.defaultFontSize),s=e.getValueOrDefault(o.fontStyle,a.defaultFontStyle),l=e.getValueOrDefault(o.fontFamily,a.defaultFontFamily),d=e.fontString(r,s,l);i.font=d;var u,c=i.measureText(n.ticks[0]).width,h=i.measureText(n.ticks[n.ticks.length-1]).width;if(n.labelRotation=o.minRotation||0,n.paddingRight=0,n.paddingLeft=0,n.options.display&&n.isHorizontal()){n.paddingRight=h/2+3,n.paddingLeft=c/2+3,n.longestTextCache||(n.longestTextCache={});for(var f,g,m=e.longestText(i,d,n.ticks,n.longestTextCache),p=m,v=n.getPixelForTick(1)-n.getPixelForTick(0)-6;p>v&&n.labelRotation<o.maxRotation;){if(f=Math.cos(e.toRadians(n.labelRotation)),g=Math.sin(e.toRadians(n.labelRotation)),u=f*c,u+r/2>n.yLabelWidth&&(n.paddingLeft=u+r/2),n.paddingRight=r/2,g*m>n.maxHeight){n.labelRotation--;break}n.labelRotation++,p=f*m}}n.margins&&(n.paddingLeft=Math.max(n.paddingLeft-n.margins.left,0),n.paddingRight=Math.max(n.paddingRight-n.margins.right,0))},afterCalculateTickRotation:function(){e.callCallback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){e.callCallback(this.options.beforeFit,[this])},fit:function(){var n=this,i=n.minSize={width:0,height:0},a=n.options,o=t.defaults.global,r=a.ticks,s=a.scaleLabel,l=a.gridLines,d=a.display,u=n.isHorizontal(),c=e.getValueOrDefault(r.fontSize,o.defaultFontSize),h=e.getValueOrDefault(r.fontStyle,o.defaultFontStyle),f=e.getValueOrDefault(r.fontFamily,o.defaultFontFamily),g=e.fontString(c,h,f),m=e.getValueOrDefault(s.fontSize,o.defaultFontSize),p=a.gridLines.tickMarkLength;if(u?i.width=n.isFullWidth()?n.maxWidth-n.margins.left-n.margins.right:n.maxWidth:i.width=d&&l.drawTicks?p:0,u?i.height=d&&l.drawTicks?p:0:i.height=n.maxHeight,s.display&&d&&(u?i.height+=1.5*m:i.width+=1.5*m),r.display&&d){n.longestTextCache||(n.longestTextCache={});var v=e.longestText(n.ctx,g,n.ticks,n.longestTextCache),b=e.numberOfLabelLines(n.ticks),y=.5*c;if(u){n.longestLabelWidth=v;var x=Math.sin(e.toRadians(n.labelRotation))*n.longestLabelWidth+c*b+y*b;i.height=Math.min(n.maxHeight,i.height+x),n.ctx.font=g;var k=n.ctx.measureText(n.ticks[0]).width,S=n.ctx.measureText(n.ticks[n.ticks.length-1]).width,w=Math.cos(e.toRadians(n.labelRotation)),_=Math.sin(e.toRadians(n.labelRotation));n.paddingLeft=0!==n.labelRotation?w*k+3:k/2+3,n.paddingRight=0!==n.labelRotation?_*(c/2)+3:S/2+3}else{var M=n.maxWidth-i.width,D=r.mirror;D?v=0:v+=n.options.ticks.padding,M>v?i.width+=v:i.width=n.maxWidth,n.paddingTop=c/2,n.paddingBottom=c/2}}n.margins&&(n.paddingLeft=Math.max(n.paddingLeft-n.margins.left,0),n.paddingTop=Math.max(n.paddingTop-n.margins.top,0),n.paddingRight=Math.max(n.paddingRight-n.margins.right,0),n.paddingBottom=Math.max(n.paddingBottom-n.margins.bottom,0)),n.width=i.width,n.height=i.height},afterFit:function(){e.callCallback(this.options.afterFit,[this])},isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},isFullWidth:function(){return this.options.fullWidth},getRightValue:function(t){return null===t||"undefined"==typeof t?NaN:"number"==typeof t&&isNaN(t)?NaN:"object"==typeof t?t instanceof Date||t.isValid?t:this.getRightValue(this.isHorizontal()?t.x:t.y):t},getLabelForIndex:e.noop,getPixelForValue:e.noop,getValueForPixel:e.noop,getPixelForTick:function(t,e){var n=this;if(n.isHorizontal()){var i=n.width-(n.paddingLeft+n.paddingRight),a=i/Math.max(n.ticks.length-(n.options.gridLines.offsetGridLines?0:1),1),o=a*t+n.paddingLeft;e&&(o+=a/2);var r=n.left+Math.round(o);return r+=n.isFullWidth()?n.margins.left:0}var s=n.height-(n.paddingTop+n.paddingBottom);return n.top+t*(s/(n.ticks.length-1))},getPixelForDecimal:function(t){var e=this;if(e.isHorizontal()){var n=e.width-(e.paddingLeft+e.paddingRight),i=n*t+e.paddingLeft,a=e.left+Math.round(i);return a+=e.isFullWidth()?e.margins.left:0}return e.top+t*e.height},getBasePixel:function(){var t=this,e=t.min,n=t.max;return t.getPixelForValue(t.beginAtZero?0:0>e&&0>n?n:e>0&&n>0?e:0)},draw:function(n){var i=this,a=i.options;if(a.display){var o,r,s=i.ctx,l=t.defaults.global,d=a.ticks,u=a.gridLines,c=a.scaleLabel,h=0!==i.labelRotation,f=d.autoSkip,g=i.isHorizontal();d.maxTicksLimit&&(r=d.maxTicksLimit);var m=e.getValueOrDefault(d.fontColor,l.defaultFontColor),p=e.getValueOrDefault(d.fontSize,l.defaultFontSize),v=e.getValueOrDefault(d.fontStyle,l.defaultFontStyle),b=e.getValueOrDefault(d.fontFamily,l.defaultFontFamily),y=e.fontString(p,v,b),x=u.tickMarkLength,k=e.getValueOrDefault(u.borderDash,l.borderDash),S=e.getValueOrDefault(u.borderDashOffset,l.borderDashOffset),w=e.getValueOrDefault(c.fontColor,l.defaultFontColor),_=e.getValueOrDefault(c.fontSize,l.defaultFontSize),M=e.getValueOrDefault(c.fontStyle,l.defaultFontStyle),D=e.getValueOrDefault(c.fontFamily,l.defaultFontFamily),C=e.fontString(_,M,D),T=e.toRadians(i.labelRotation),P=Math.cos(T),F=i.longestLabelWidth*P;s.fillStyle=m;var I=[];if(g){if(o=!1,h&&(F/=2),(F+d.autoSkipPadding)*i.ticks.length>i.width-(i.paddingLeft+i.paddingRight)&&(o=1+Math.floor((F+d.autoSkipPadding)*i.ticks.length/(i.width-(i.paddingLeft+i.paddingRight)))),r&&i.ticks.length>r)for(;!o||i.ticks.length/(o||1)>r;)o||(o=1),o+=1;f||(o=!1)}var A="right"===a.position?i.left:i.right-x,O="right"===a.position?i.left+x:i.right,R="bottom"===a.position?i.top:i.bottom-x,W="bottom"===a.position?i.top+x:i.bottom;if(e.each(i.ticks,function(t,r){if(void 0!==t&&null!==t){var s=i.ticks.length===r+1,l=o>1&&r%o>0||r%o===0&&r+o>=i.ticks.length;if((!l||s)&&void 0!==t&&null!==t){var c,f;r===("undefined"!=typeof i.zeroLineIndex?i.zeroLineIndex:0)?(c=u.zeroLineWidth,f=u.zeroLineColor):(c=e.getValueAtIndexOrDefault(u.lineWidth,r),f=e.getValueAtIndexOrDefault(u.color,r));var m,p,v,b,y,w,_,M,D,C,P="middle",F="middle";if(g){h||(F="top"===a.position?"bottom":"top"),P=h?"right":"center";var L=i.getPixelForTick(r)+e.aliasPixel(c);D=i.getPixelForTick(r,u.offsetGridLines)+d.labelOffset,C=h?i.top+12:"top"===a.position?i.bottom-x:i.top+x,m=v=y=_=L,p=R,b=W,w=n.top,M=n.bottom}else{"left"===a.position?d.mirror?(D=i.right+d.padding,P="left"):(D=i.right-d.padding,P="right"):d.mirror?(D=i.left-d.padding,P="right"):(D=i.left+d.padding,P="left");var V=i.getPixelForTick(r);V+=e.aliasPixel(c),C=i.getPixelForTick(r,u.offsetGridLines),m=A,v=O,y=n.left,_=n.right,p=b=w=M=V}I.push({tx1:m,ty1:p,tx2:v,ty2:b,x1:y,y1:w,x2:_,y2:M,labelX:D,labelY:C,glWidth:c,glColor:f,glBorderDash:k,glBorderDashOffset:S,rotation:-1*T,label:t,textBaseline:F,textAlign:P})}}}),e.each(I,function(t){if(u.display&&(s.save(),s.lineWidth=t.glWidth,s.strokeStyle=t.glColor,s.setLineDash&&(s.setLineDash(t.glBorderDash),s.lineDashOffset=t.glBorderDashOffset),s.beginPath(),u.drawTicks&&(s.moveTo(t.tx1,t.ty1),s.lineTo(t.tx2,t.ty2)),u.drawOnChartArea&&(s.moveTo(t.x1,t.y1),s.lineTo(t.x2,t.y2)),s.stroke(),s.restore()),d.display){s.save(),s.translate(t.labelX,t.labelY),s.rotate(t.rotation),s.font=y,s.textBaseline=t.textBaseline,s.textAlign=t.textAlign;var n=t.label;if(e.isArray(n))for(var i=0,a=-(n.length-1)*p*.75;i<n.length;++i)s.fillText(""+n[i],0,a),a+=1.5*p;else s.fillText(n,0,0);s.restore()}}),c.display){var L,V,B=0;if(g)L=i.left+(i.right-i.left)/2,V="bottom"===a.position?i.bottom-_/2:i.top+_/2;else{var Y="left"===a.position;L=Y?i.left+_/2:i.right-_/2,V=i.top+(i.bottom-i.top)/2,B=Y?-.5*Math.PI:.5*Math.PI}s.save(),s.translate(L,V),s.rotate(B),s.textAlign="center",s.textBaseline="middle",s.fillStyle=w,s.font=C,s.fillText(c.labelString,0,0),s.restore()}if(u.drawBorder){s.lineWidth=e.getValueAtIndexOrDefault(u.lineWidth,0),s.strokeStyle=e.getValueAtIndexOrDefault(u.color,0);var z=i.left,H=i.right,N=i.top,E=i.bottom,U=e.aliasPixel(s.lineWidth);g?(N=E="top"===a.position?i.bottom:i.top,N+=U,E+=U):(z=H="left"===a.position?i.right:i.left,z+=U,H+=U),s.beginPath(),s.moveTo(z,N),s.lineTo(H,E),s.stroke()}}}})}},{}],32:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.scaleService={constructors:{},defaults:{},registerScaleType:function(t,n,i){this.constructors[t]=n,this.defaults[t]=e.clone(i)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(n){return this.defaults.hasOwnProperty(n)?e.scaleMerge(t.defaults.scale,this.defaults[n]):{}},updateScaleDefaults:function(t,n){var i=this.defaults;i.hasOwnProperty(t)&&(i[t]=e.extend(i[t],n))},addScalesToLayout:function(n){e.each(n.scales,function(e){t.layoutService.addBox(n,e)})}}}},{}],33:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.title={display:!1,position:"top",fullWidth:!0,fontStyle:"bold",padding:10,text:""};var n=e.noop;t.Title=t.Element.extend({initialize:function(n){var i=this;e.extend(i,n),i.options=e.configMerge(t.defaults.global.title,n.options),i.legendHitBoxes=[]},beforeUpdate:function(){var n=this.chart.options;n&&n.title&&(this.options=e.configMerge(t.defaults.global.title,n.title))},update:function(t,e,n){var i=this;return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=n,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:n,beforeSetDimensions:n,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:n,beforeBuildLabels:n,buildLabels:n,afterBuildLabels:n,beforeFit:n,fit:function(){var n=this,i=e.getValueOrDefault,a=n.options,o=t.defaults.global,r=a.display,s=i(a.fontSize,o.defaultFontSize),l=n.minSize;n.isHorizontal()?(l.width=n.maxWidth,l.height=r?s+2*a.padding:0):(l.width=r?s+2*a.padding:0,l.height=n.maxHeight),n.width=l.width,n.height=l.height},afterFit:n,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var n=this,i=n.ctx,a=e.getValueOrDefault,o=n.options,r=t.defaults.global;if(o.display){var s,l,d=a(o.fontSize,r.defaultFontSize),u=a(o.fontStyle,r.defaultFontStyle),c=a(o.fontFamily,r.defaultFontFamily),h=e.fontString(d,u,c),f=0,g=n.top,m=n.left,p=n.bottom,v=n.right;i.fillStyle=a(o.fontColor,r.defaultFontColor),i.font=h,n.isHorizontal()?(s=m+(v-m)/2,l=g+(p-g)/2):(s="left"===o.position?m+d/2:v-d/2,l=g+(p-g)/2,f=Math.PI*("left"===o.position?-.5:.5)),i.save(),i.translate(s,l),i.rotate(f),i.textAlign="center",i.textBaseline="middle",i.fillText(o.text,0,0),i.restore()}}}),t.plugins.register({beforeInit:function(e){var n=e.options,i=n.title;i&&(e.titleBlock=new t.Title({ctx:e.chart.ctx,options:i,chart:e}),t.layoutService.addBox(e,e.titleBlock))}})}},{}],34:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){return e&&(a.isArray(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function n(t){if(!t.length)return!1;var e,n,i=[],a=[];for(e=0,n=t.length;n>e;++e){var o=t[e];if(o&&o.hasValue()){var r=o.tooltipPosition();i.push(r.x),a.push(r.y)}}var s=0,l=0;for(e=0;e<i.length;++e)i[e]&&(s+=i[e],l+=a[e]);return{x:Math.round(s/i.length),y:Math.round(l/i.length)}}function i(t){var e=t._xScale,n=t._yScale||t._scale,i=t._index,a=t._datasetIndex;return{xLabel:e?e.getLabelForIndex(i,a):"",yLabel:n?n.getLabelForIndex(i,a):"",index:i,datasetIndex:a}}var a=t.helpers;t.defaults.global.tooltips={enabled:!0,custom:null,mode:"single",backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,yAlign:"center",xAlign:"center",caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",callbacks:{beforeTitle:a.noop,title:function(t,e){var n="",i=e.labels,a=i?i.length:0;if(t.length>0){var o=t[0];o.xLabel?n=o.xLabel:a>0&&o.index<a&&(n=i[o.index])}return n},afterTitle:a.noop,beforeBody:a.noop,beforeLabel:a.noop,label:function(t,e){var n=e.datasets[t.datasetIndex].label||"";return n+": "+t.yLabel},labelColor:function(t,e){var n=e.getDatasetMeta(t.datasetIndex),i=n.data[t.index],a=i._view;return{borderColor:a.borderColor,backgroundColor:a.backgroundColor}},afterLabel:a.noop,afterBody:a.noop,beforeFooter:a.noop,footer:a.noop,afterFooter:a.noop}},t.Tooltip=t.Element.extend({initialize:function(){var e=this,n=t.defaults.global,i=e._options,o=a.getValueOrDefault;a.extend(e,{_model:{xPadding:i.xPadding,yPadding:i.yPadding,xAlign:i.xAlign,yAlign:i.yAlign,bodyFontColor:i.bodyFontColor,_bodyFontFamily:o(i.bodyFontFamily,n.defaultFontFamily),_bodyFontStyle:o(i.bodyFontStyle,n.defaultFontStyle),_bodyAlign:i.bodyAlign,bodyFontSize:o(i.bodyFontSize,n.defaultFontSize),bodySpacing:i.bodySpacing,titleFontColor:i.titleFontColor,_titleFontFamily:o(i.titleFontFamily,n.defaultFontFamily),_titleFontStyle:o(i.titleFontStyle,n.defaultFontStyle),titleFontSize:o(i.titleFontSize,n.defaultFontSize),_titleAlign:i.titleAlign,titleSpacing:i.titleSpacing,titleMarginBottom:i.titleMarginBottom,footerFontColor:i.footerFontColor,_footerFontFamily:o(i.footerFontFamily,n.defaultFontFamily),_footerFontStyle:o(i.footerFontStyle,n.defaultFontStyle),footerFontSize:o(i.footerFontSize,n.defaultFontSize),_footerAlign:i.footerAlign,footerSpacing:i.footerSpacing,footerMarginTop:i.footerMarginTop,caretSize:i.caretSize,cornerRadius:i.cornerRadius,backgroundColor:i.backgroundColor,opacity:0,legendColorBackground:i.multiKeyBackground}})},getTitle:function(){var t=this,n=t._options,i=n.callbacks,a=i.beforeTitle.apply(t,arguments),o=i.title.apply(t,arguments),r=i.afterTitle.apply(t,arguments),s=[];return s=e(s,a),s=e(s,o),s=e(s,r)},getBeforeBody:function(){var t=this._options.callbacks.beforeBody.apply(this,arguments);return a.isArray(t)?t:void 0!==t?[t]:[]},getBody:function(t,n){var i=this,o=i._options.callbacks,r=[];return a.each(t,function(t){var a={before:[],lines:[],after:[]};e(a.before,o.beforeLabel.call(i,t,n)),e(a.lines,o.label.call(i,t,n)),e(a.after,o.afterLabel.call(i,t,n)),r.push(a)}),r},getAfterBody:function(){var t=this._options.callbacks.afterBody.apply(this,arguments);return a.isArray(t)?t:void 0!==t?[t]:[]},getFooter:function(){var t=this,n=t._options.callbacks,i=n.beforeFooter.apply(t,arguments),a=n.footer.apply(t,arguments),o=n.afterFooter.apply(t,arguments),r=[];return r=e(r,i),r=e(r,a),r=e(r,o)},update:function(t){var e,o,r=this,s=r._options,l=r._model,d=r._active,u=r._data,c=r._chartInstance;if(d.length){l.opacity=1;var h=[],f=n(d),g=[];for(e=0,o=d.length;o>e;++e)g.push(i(d[e]));s.itemSort&&(g=g.sort(function(t,e){return s.itemSort(t,e,u)})),d.length>1&&a.each(g,function(t){h.push(s.callbacks.labelColor.call(r,t,c))}),a.extend(l,{title:r.getTitle(g,u),beforeBody:r.getBeforeBody(g,u),body:r.getBody(g,u),afterBody:r.getAfterBody(g,u),footer:r.getFooter(g,u),x:Math.round(f.x),y:Math.round(f.y),caretPadding:a.getValueOrDefault(f.padding,2),labelColors:h});var m=r.getTooltipSize(l);r.determineAlignment(m),a.extend(l,r.getBackgroundPoint(l,m))}else r._model.opacity=0;return t&&s.custom&&s.custom.call(r,l),r},getTooltipSize:function(t){var e=this._chart.ctx,n={height:2*t.yPadding,width:0},i=t.body,o=i.reduce(function(t,e){
return t+e.before.length+e.lines.length+e.after.length},0);o+=t.beforeBody.length+t.afterBody.length;var r=t.title.length,s=t.footer.length,l=t.titleFontSize,d=t.bodyFontSize,u=t.footerFontSize;n.height+=r*l,n.height+=(r-1)*t.titleSpacing,n.height+=r?t.titleMarginBottom:0,n.height+=o*d,n.height+=o?(o-1)*t.bodySpacing:0,n.height+=s?t.footerMarginTop:0,n.height+=s*u,n.height+=s?(s-1)*t.footerSpacing:0;var c=0,h=function(t){n.width=Math.max(n.width,e.measureText(t).width+c)};return e.font=a.fontString(l,t._titleFontStyle,t._titleFontFamily),a.each(t.title,h),e.font=a.fontString(d,t._bodyFontStyle,t._bodyFontFamily),a.each(t.beforeBody.concat(t.afterBody),h),c=i.length>1?d+2:0,a.each(i,function(t){a.each(t.before,h),a.each(t.lines,h),a.each(t.after,h)}),c=0,e.font=a.fontString(u,t._footerFontStyle,t._footerFontFamily),a.each(t.footer,h),n.width+=2*t.xPadding,n},determineAlignment:function(t){var e=this,n=e._model,i=e._chart,a=e._chartInstance.chartArea;n.y<t.height?n.yAlign="top":n.y>i.height-t.height&&(n.yAlign="bottom");var o,r,s,l,d,u=(a.left+a.right)/2,c=(a.top+a.bottom)/2;"center"===n.yAlign?(o=function(t){return u>=t},r=function(t){return t>u}):(o=function(e){return e<=t.width/2},r=function(e){return e>=i.width-t.width/2}),s=function(e){return e+t.width>i.width},l=function(e){return e-t.width<0},d=function(t){return c>=t?"top":"bottom"},o(n.x)?(n.xAlign="left",s(n.x)&&(n.xAlign="center",n.yAlign=d(n.y))):r(n.x)&&(n.xAlign="right",l(n.x)&&(n.xAlign="center",n.yAlign=d(n.y)))},getBackgroundPoint:function(t,e){var n={x:t.x,y:t.y},i=t.caretSize,a=t.caretPadding,o=t.cornerRadius,r=t.xAlign,s=t.yAlign,l=i+a,d=o+a;return"right"===r?n.x-=e.width:"center"===r&&(n.x-=e.width/2),"top"===s?n.y+=l:"bottom"===s?n.y-=e.height+l:n.y-=e.height/2,"center"===s?"left"===r?n.x+=l:"right"===r&&(n.x-=l):"left"===r?n.x-=d:"right"===r&&(n.x+=d),n},drawCaret:function(t,e,n){var i,o,r,s,l,d,u=this._view,c=this._chart.ctx,h=u.caretSize,f=u.cornerRadius,g=u.xAlign,m=u.yAlign,p=t.x,v=t.y,b=e.width,y=e.height;"center"===m?("left"===g?(i=p,o=i-h,r=i):(i=p+b,o=i+h,r=i),l=v+y/2,s=l-h,d=l+h):("left"===g?(i=p+f,o=i+h,r=o+h):"right"===g?(i=p+b-f,o=i-h,r=o-h):(o=p+b/2,i=o-h,r=o+h),"top"===m?(s=v,l=s-h,d=s):(s=v+y,l=s+h,d=s));var x=a.color(u.backgroundColor);c.fillStyle=x.alpha(n*x.alpha()).rgbString(),c.beginPath(),c.moveTo(i,s),c.lineTo(o,l),c.lineTo(r,d),c.closePath(),c.fill()},drawTitle:function(t,e,n,i){var o=e.title;if(o.length){n.textAlign=e._titleAlign,n.textBaseline="top";var r=e.titleFontSize,s=e.titleSpacing,l=a.color(e.titleFontColor);n.fillStyle=l.alpha(i*l.alpha()).rgbString(),n.font=a.fontString(r,e._titleFontStyle,e._titleFontFamily);var d,u;for(d=0,u=o.length;u>d;++d)n.fillText(o[d],t.x,t.y),t.y+=r+s,d+1===o.length&&(t.y+=e.titleMarginBottom-s)}},drawBody:function(t,e,n,i){var o=e.bodyFontSize,r=e.bodySpacing,s=e.body;n.textAlign=e._bodyAlign,n.textBaseline="top";var l=a.color(e.bodyFontColor),d=l.alpha(i*l.alpha()).rgbString();n.fillStyle=d,n.font=a.fontString(o,e._bodyFontStyle,e._bodyFontFamily);var u=0,c=function(e){n.fillText(e,t.x+u,t.y),t.y+=o+r};a.each(e.beforeBody,c);var h=s.length>1;u=h?o+2:0,a.each(s,function(r,s){a.each(r.before,c),a.each(r.lines,function(r){h&&(n.fillStyle=a.color(e.legendColorBackground).alpha(i).rgbaString(),n.fillRect(t.x,t.y,o,o),n.strokeStyle=a.color(e.labelColors[s].borderColor).alpha(i).rgbaString(),n.strokeRect(t.x,t.y,o,o),n.fillStyle=a.color(e.labelColors[s].backgroundColor).alpha(i).rgbaString(),n.fillRect(t.x+1,t.y+1,o-2,o-2),n.fillStyle=d),c(r)}),a.each(r.after,c)}),u=0,a.each(e.afterBody,c),t.y-=r},drawFooter:function(t,e,n,i){var o=e.footer;if(o.length){t.y+=e.footerMarginTop,n.textAlign=e._footerAlign,n.textBaseline="top";var r=a.color(e.footerFontColor);n.fillStyle=r.alpha(i*r.alpha()).rgbString(),n.font=a.fontString(e.footerFontSize,e._footerFontStyle,e._footerFontFamily),a.each(o,function(i){n.fillText(i,t.x,t.y),t.y+=e.footerFontSize+e.footerSpacing})}},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var n=this.getTooltipSize(e),i={x:e.x,y:e.y},o=Math.abs(e.opacity<.001)?0:e.opacity;if(this._options.enabled){var r=a.color(e.backgroundColor);t.fillStyle=r.alpha(o*r.alpha()).rgbString(),a.drawRoundedRectangle(t,i.x,i.y,n.width,n.height,e.cornerRadius),t.fill(),this.drawCaret(i,n,o),i.x+=e.xPadding,i.y+=e.yPadding,this.drawTitle(i,e,t,o),this.drawBody(i,e,t,o),this.drawFooter(i,e,t,o)}}}})}},{}],35:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=t.defaults.global;n.elements.arc={backgroundColor:n.defaultColor,borderColor:"#fff",borderWidth:2},t.elements.Arc=t.Element.extend({inLabelRange:function(t){var e=this._view;return e?Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2):!1},inRange:function(t,n){var i=this._view;if(i){for(var a=e.getAngleFromPoint(i,{x:t,y:n}),o=a.angle,r=a.distance,s=i.startAngle,l=i.endAngle;s>l;)l+=2*Math.PI;for(;o>l;)o-=2*Math.PI;for(;s>o;)o+=2*Math.PI;var d=o>=s&&l>=o,u=r>=i.innerRadius&&r<=i.outerRadius;return d&&u}return!1},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,n=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},draw:function(){var t=this._chart.ctx,e=this._view,n=e.startAngle,i=e.endAngle;t.beginPath(),t.arc(e.x,e.y,e.outerRadius,n,i),t.arc(e.x,e.y,e.innerRadius,i,n,!0),t.closePath(),t.strokeStyle=e.borderColor,t.lineWidth=e.borderWidth,t.fillStyle=e.backgroundColor,t.fill(),t.lineJoin="bevel",e.borderWidth&&t.stroke()}})}},{}],36:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=t.defaults.global;t.defaults.global.elements.line={tension:.4,backgroundColor:n.defaultColor,borderWidth:3,borderColor:n.defaultColor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0},t.elements.Line=t.Element.extend({draw:function(){function t(t,e){var n=e._view;e._view.steppedLine===!0?(l.lineTo(n.x,t._view.y),l.lineTo(n.x,n.y)):0===e._view.tension?l.lineTo(n.x,n.y):l.bezierCurveTo(t._view.controlPointNextX,t._view.controlPointNextY,n.controlPointPreviousX,n.controlPointPreviousY,n.x,n.y)}var i=this,a=i._view,o=a.spanGaps,r=a.scaleZero,s=i._loop,l=i._chart.ctx;l.save();var d=i._children.slice(),u=-1;s&&d.length&&d.push(d[0]);var c,h,f,g;if(d.length&&a.fill){for(l.beginPath(),c=0;c<d.length;++c)h=d[c],f=e.previousItem(d,c),g=h._view,0===c?(s?l.moveTo(r.x,r.y):l.moveTo(g.x,r),g.skip||(u=c,l.lineTo(g.x,g.y))):(f=-1===u?f:d[u],g.skip?o||u!==c-1||(s?l.lineTo(r.x,r.y):l.lineTo(f._view.x,r)):(u!==c-1?o&&-1!==u?t(f,h):s?l.lineTo(g.x,g.y):(l.lineTo(g.x,r),l.lineTo(g.x,g.y)):t(f,h),u=c));s||-1===u||l.lineTo(d[u]._view.x,r),l.fillStyle=a.backgroundColor||n.defaultColor,l.closePath(),l.fill()}var m=n.elements.line;for(l.lineCap=a.borderCapStyle||m.borderCapStyle,l.setLineDash&&l.setLineDash(a.borderDash||m.borderDash),l.lineDashOffset=a.borderDashOffset||m.borderDashOffset,l.lineJoin=a.borderJoinStyle||m.borderJoinStyle,l.lineWidth=a.borderWidth||m.borderWidth,l.strokeStyle=a.borderColor||n.defaultColor,l.beginPath(),u=-1,c=0;c<d.length;++c)h=d[c],f=e.previousItem(d,c),g=h._view,0===c?g.skip||(l.moveTo(g.x,g.y),u=c):(f=-1===u?f:d[u],g.skip||(u!==c-1&&!o||-1===u?l.moveTo(g.x,g.y):t(f,h),u=c));l.stroke(),l.restore()}})}},{}],37:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=t.defaults.global,i=n.defaultColor;n.elements.point={radius:3,pointStyle:"circle",backgroundColor:i,borderWidth:1,borderColor:i,hitRadius:1,hoverRadius:4,hoverBorderWidth:1},t.elements.Point=t.Element.extend({inRange:function(t,e){var n=this._view;return n?Math.pow(t-n.x,2)+Math.pow(e-n.y,2)<Math.pow(n.hitRadius+n.radius,2):!1},inLabelRange:function(t){var e=this._view;return e?Math.pow(t-e.x,2)<Math.pow(e.radius+e.hitRadius,2):!1},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(){var a=this._view,o=this._chart.ctx,r=a.pointStyle,s=a.radius,l=a.x,d=a.y;a.skip||(o.strokeStyle=a.borderColor||i,o.lineWidth=e.getValueOrDefault(a.borderWidth,n.elements.point.borderWidth),o.fillStyle=a.backgroundColor||i,t.canvasHelpers.drawPoint(o,r,s,l,d))}})}},{}],38:[function(t,e,n){"use strict";e.exports=function(t){var e=t.defaults.global;e.elements.rectangle={backgroundColor:e.defaultColor,borderWidth:0,borderColor:e.defaultColor,borderSkipped:"bottom"},t.elements.Rectangle=t.Element.extend({draw:function(){function t(t){return l[(u+t)%4]}var e=this._chart.ctx,n=this._view,i=n.width/2,a=n.x-i,o=n.x+i,r=n.base-(n.base-n.y),s=n.borderWidth/2;n.borderWidth&&(a+=s,o-=s,r+=s),e.beginPath(),e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth;var l=[[a,n.base],[a,r],[o,r],[o,n.base]],d=["bottom","left","top","right"],u=d.indexOf(n.borderSkipped,0);-1===u&&(u=0),e.moveTo.apply(e,t(0));for(var c=1;4>c;c++)e.lineTo.apply(e,t(c));e.fill(),n.borderWidth&&e.stroke()},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){var n=this._view;return n?n.y<n.base?t>=n.x-n.width/2&&t<=n.x+n.width/2&&e>=n.y&&e<=n.base:t>=n.x-n.width/2&&t<=n.x+n.width/2&&e>=n.base&&e<=n.y:!1},inLabelRange:function(t){var e=this._view;return e?t>=e.x-e.width/2&&t<=e.x+e.width/2:!1},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}})}},{}],39:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n={position:"bottom"},i=t.Scale.extend({getLabels:function(){var t=this.chart.data;return(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels},determineDataLimits:function(){var t=this,n=t.getLabels();t.minIndex=0,t.maxIndex=n.length-1;var i;void 0!==t.options.ticks.min&&(i=e.indexOf(n,t.options.ticks.min),t.minIndex=-1!==i?i:t.minIndex),void 0!==t.options.ticks.max&&(i=e.indexOf(n,t.options.ticks.max),t.maxIndex=-1!==i?i:t.maxIndex),t.min=n[t.minIndex],t.max=n[t.maxIndex]},buildTicks:function(){var t=this,e=t.getLabels();t.ticks=0===t.minIndex&&t.maxIndex===e.length-1?e:e.slice(t.minIndex,t.maxIndex+1)},getLabelForIndex:function(t,e){var n=this,i=n.chart.data,a=n.isHorizontal();return i.xLabels&&a||i.yLabels&&!a?n.getRightValue(i.datasets[e].data[t]):n.ticks[t]},getPixelForValue:function(t,e,n,i){var a=this,o=Math.max(a.maxIndex+1-a.minIndex-(a.options.gridLines.offsetGridLines?0:1),1);if(void 0!==t&&isNaN(e)){var r=a.getLabels(),s=r.indexOf(t);e=-1!==s?s:e}if(a.isHorizontal()){var l=a.width-(a.paddingLeft+a.paddingRight),d=l/o,u=d*(e-a.minIndex)+a.paddingLeft;return(a.options.gridLines.offsetGridLines&&i||a.maxIndex===a.minIndex&&i)&&(u+=d/2),a.left+Math.round(u)}var c=a.height-(a.paddingTop+a.paddingBottom),h=c/o,f=h*(e-a.minIndex)+a.paddingTop;return a.options.gridLines.offsetGridLines&&i&&(f+=h/2),a.top+Math.round(f)},getPixelForTick:function(t,e){return this.getPixelForValue(this.ticks[t],t+this.minIndex,null,e)},getValueForPixel:function(t){var e,n=this,i=Math.max(n.ticks.length-(n.options.gridLines.offsetGridLines?0:1),1),a=n.isHorizontal(),o=a?n.width-(n.paddingLeft+n.paddingRight):n.height-(n.paddingTop+n.paddingBottom),r=o/i;return t-=a?n.left:n.top,n.options.gridLines.offsetGridLines&&(t-=r/2),t-=a?n.paddingLeft:n.paddingTop,e=0>=t?0:Math.round(t/r)},getBasePixel:function(){return this.bottom}});t.scaleService.registerScaleType("category",i,n)}},{}],40:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n={position:"left",ticks:{callback:function(t,n,i){var a=i.length>3?i[2]-i[1]:i[1]-i[0];Math.abs(a)>1&&t!==Math.floor(t)&&(a=t-Math.floor(t));var o=e.log10(Math.abs(a)),r="";if(0!==t){var s=-1*Math.floor(o);s=Math.max(Math.min(s,20),0),r=t.toFixed(s)}else r="0";return r}}},i=t.LinearScaleBase.extend({determineDataLimits:function(){function t(t){return s?t.xAxisID===n.id:t.yAxisID===n.id}var n=this,i=n.options,a=n.chart,o=a.data,r=o.datasets,s=n.isHorizontal();if(n.min=null,n.max=null,i.stacked){var l={};e.each(r,function(o,r){var s=a.getDatasetMeta(r);void 0===l[s.type]&&(l[s.type]={positiveValues:[],negativeValues:[]});var d=l[s.type].positiveValues,u=l[s.type].negativeValues;a.isDatasetVisible(r)&&t(s)&&e.each(o.data,function(t,e){var a=+n.getRightValue(t);isNaN(a)||s.data[e].hidden||(d[e]=d[e]||0,u[e]=u[e]||0,i.relativePoints?d[e]=100:0>a?u[e]+=a:d[e]+=a)})}),e.each(l,function(t){var i=t.positiveValues.concat(t.negativeValues),a=e.min(i),o=e.max(i);n.min=null===n.min?a:Math.min(n.min,a),n.max=null===n.max?o:Math.max(n.max,o)})}else e.each(r,function(i,o){var r=a.getDatasetMeta(o);a.isDatasetVisible(o)&&t(r)&&e.each(i.data,function(t,e){var i=+n.getRightValue(t);isNaN(i)||r.data[e].hidden||(null===n.min?n.min=i:i<n.min&&(n.min=i),null===n.max?n.max=i:i>n.max&&(n.max=i))})});this.handleTickRangeOptions()},getTickLimit:function(){var n,i=this,a=i.options.ticks;if(i.isHorizontal())n=Math.min(a.maxTicksLimit?a.maxTicksLimit:11,Math.ceil(i.width/50));else{var o=e.getValueOrDefault(a.fontSize,t.defaults.global.defaultFontSize);n=Math.min(a.maxTicksLimit?a.maxTicksLimit:11,Math.ceil(i.height/(2*o)))}return n},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForValue:function(t){var e,n,i=this,a=i.paddingLeft,o=i.paddingBottom,r=i.start,s=+i.getRightValue(t),l=i.end-r;return i.isHorizontal()?(n=i.width-(a+i.paddingRight),e=i.left+n/l*(s-r),Math.round(e+a)):(n=i.height-(i.paddingTop+o),e=i.bottom-o-n/l*(s-r),Math.round(e))},getValueForPixel:function(t){var e=this,n=e.isHorizontal(),i=e.paddingLeft,a=e.paddingBottom,o=n?e.width-(i+e.paddingRight):e.height-(e.paddingTop+a),r=(n?t-e.left-i:e.bottom-a-t)/o;return e.start+(e.end-e.start)*r},getPixelForTick:function(t){return this.getPixelForValue(this.ticksAsNumbers[t])}});t.scaleService.registerScaleType("linear",i,n)}},{}],41:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=e.noop;t.LinearScaleBase=t.Scale.extend({handleTickRangeOptions:function(){var t=this,n=t.options,i=n.ticks;if(i.beginAtZero){var a=e.sign(t.min),o=e.sign(t.max);0>a&&0>o?t.max=0:a>0&&o>0&&(t.min=0)}void 0!==i.min?t.min=i.min:void 0!==i.suggestedMin&&(t.min=Math.min(t.min,i.suggestedMin)),void 0!==i.max?t.max=i.max:void 0!==i.suggestedMax&&(t.max=Math.max(t.max,i.suggestedMax)),t.min===t.max&&(t.max++,i.beginAtZero||t.min--)},getTickLimit:n,handleDirectionalChanges:n,buildTicks:function(){var t=this,n=t.options,i=t.ticks=[],a=n.ticks,o=e.getValueOrDefault,r=t.getTickLimit();r=Math.max(2,r);var s,l=a.fixedStepSize&&a.fixedStepSize>0||a.stepSize&&a.stepSize>0;if(l)s=o(a.fixedStepSize,a.stepSize);else{var d=e.niceNum(t.max-t.min,!1);s=e.niceNum(d/(r-1),!0)}var u=Math.floor(t.min/s)*s,c=Math.ceil(t.max/s)*s,h=(c-u)/s;h=e.almostEquals(h,Math.round(h),s/1e3)?Math.round(h):Math.ceil(h),i.push(void 0!==a.min?a.min:u);for(var f=1;h>f;++f)i.push(u+f*s);i.push(void 0!==a.max?a.max:c),t.handleDirectionalChanges(),t.max=e.max(i),t.min=e.min(i),a.reverse?(i.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max)},convertTicksToLabels:function(){var e=this;e.ticksAsNumbers=e.ticks.slice(),e.zeroLineIndex=e.ticks.indexOf(0),t.Scale.prototype.convertTicksToLabels.call(e)}})}},{}],42:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n={position:"left",ticks:{callback:function(t,n,i){var a=t/Math.pow(10,Math.floor(e.log10(t)));return 0===t?"0":1===a||2===a||5===a||0===n||n===i.length-1?t.toExponential():""}}},i=t.Scale.extend({determineDataLimits:function(){function t(t){return d?t.xAxisID===n.id:t.yAxisID===n.id}var n=this,i=n.options,a=i.ticks,o=n.chart,r=o.data,s=r.datasets,l=e.getValueOrDefault,d=n.isHorizontal();if(n.min=null,n.max=null,n.minNotZero=null,i.stacked){var u={};e.each(s,function(a,r){var s=o.getDatasetMeta(r);o.isDatasetVisible(r)&&t(s)&&(void 0===u[s.type]&&(u[s.type]=[]),e.each(a.data,function(t,e){var a=u[s.type],o=+n.getRightValue(t);isNaN(o)||s.data[e].hidden||(a[e]=a[e]||0,i.relativePoints?a[e]=100:a[e]+=o)}))}),e.each(u,function(t){var i=e.min(t),a=e.max(t);n.min=null===n.min?i:Math.min(n.min,i),n.max=null===n.max?a:Math.max(n.max,a)})}else e.each(s,function(i,a){var r=o.getDatasetMeta(a);o.isDatasetVisible(a)&&t(r)&&e.each(i.data,function(t,e){var i=+n.getRightValue(t);isNaN(i)||r.data[e].hidden||(null===n.min?n.min=i:i<n.min&&(n.min=i),null===n.max?n.max=i:i>n.max&&(n.max=i),0!==i&&(null===n.minNotZero||i<n.minNotZero)&&(n.minNotZero=i))})});n.min=l(a.min,n.min),n.max=l(a.max,n.max),n.min===n.max&&(0!==n.min&&null!==n.min?(n.min=Math.pow(10,Math.floor(e.log10(n.min))-1),n.max=Math.pow(10,Math.floor(e.log10(n.max))+1)):(n.min=1,n.max=10))},buildTicks:function(){for(var t=this,n=t.options,i=n.ticks,a=e.getValueOrDefault,o=t.ticks=[],r=a(i.min,Math.pow(10,Math.floor(e.log10(t.min))));r<t.max;){o.push(r);var s,l;0===r?(s=Math.floor(e.log10(t.minNotZero)),l=Math.round(t.minNotZero/Math.pow(10,s))):(s=Math.floor(e.log10(r)),l=Math.floor(r/Math.pow(10,s))+1),10===l&&(l=1,++s),r=l*Math.pow(10,s)}var d=a(i.max,r);o.push(d),t.isHorizontal()||o.reverse(),t.max=e.max(o),t.min=e.min(o),i.reverse?(o.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max)},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),t.Scale.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t){return this.getPixelForValue(this.tickValues[t])},getPixelForValue:function(t){var n,i,a,o=this,r=o.start,s=+o.getRightValue(t),l=o.paddingTop,d=o.paddingBottom,u=o.paddingLeft,c=o.options,h=c.ticks;return o.isHorizontal()?(a=e.log10(o.end)-e.log10(r),0===s?i=o.left+u:(n=o.width-(u+o.paddingRight),i=o.left+n/a*(e.log10(s)-e.log10(r)),i+=u)):(n=o.height-(l+d),0!==r||h.reverse?0===o.end&&h.reverse?(a=e.log10(o.start)-e.log10(o.minNotZero),i=s===o.end?o.top+l:s===o.minNotZero?o.top+l+.02*n:o.top+l+.02*n+.98*n/a*(e.log10(s)-e.log10(o.minNotZero))):(a=e.log10(o.end)-e.log10(r),n=o.height-(l+d),i=o.bottom-d-n/a*(e.log10(s)-e.log10(r))):(a=e.log10(o.end)-e.log10(o.minNotZero),i=s===r?o.bottom-d:s===o.minNotZero?o.bottom-d-.02*n:o.bottom-d-.02*n-.98*n/a*(e.log10(s)-e.log10(o.minNotZero)))),i},getValueForPixel:function(t){var n,i,a=this,o=e.log10(a.end)-e.log10(a.start);return a.isHorizontal()?(i=a.width-(a.paddingLeft+a.paddingRight),n=a.start*Math.pow(10,(t-a.left-a.paddingLeft)*o/i)):(i=a.height-(a.paddingTop+a.paddingBottom),n=Math.pow(10,(a.bottom-a.paddingBottom-t)*o/i)/a.start),n}});t.scaleService.registerScaleType("logarithmic",i,n)}},{}],43:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=t.defaults.global,i={display:!0,animate:!0,lineArc:!1,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2},pointLabels:{fontSize:10,callback:function(t){return t}}},a=t.LinearScaleBase.extend({getValueCount:function(){return this.chart.data.labels.length},setDimensions:function(){var t=this,i=t.options,a=i.ticks;t.width=t.maxWidth,t.height=t.maxHeight,t.xCenter=Math.round(t.width/2),t.yCenter=Math.round(t.height/2);var o=e.min([t.height,t.width]),r=e.getValueOrDefault(a.fontSize,n.defaultFontSize);t.drawingArea=i.display?o/2-(r/2+a.backdropPaddingY):o/2},determineDataLimits:function(){var t=this,n=t.chart;t.min=null,t.max=null,e.each(n.data.datasets,function(i,a){if(n.isDatasetVisible(a)){var o=n.getDatasetMeta(a);e.each(i.data,function(e,n){var i=+t.getRightValue(e);isNaN(i)||o.data[n].hidden||(null===t.min?t.min=i:i<t.min&&(t.min=i),null===t.max?t.max=i:i>t.max&&(t.max=i))})}}),t.handleTickRangeOptions()},getTickLimit:function(){var t=this.options.ticks,i=e.getValueOrDefault(t.fontSize,n.defaultFontSize);return Math.min(t.maxTicksLimit?t.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*i)))},convertTicksToLabels:function(){var e=this;t.LinearScaleBase.prototype.convertTicksToLabels.call(e),e.pointLabels=e.chart.data.labels.map(e.options.pointLabels.callback,e)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){var t,i,a,o,r,s,l,d,u,c,h,f,g=this.options.pointLabels,m=e.getValueOrDefault(g.fontSize,n.defaultFontSize),p=e.getValueOrDefault(g.fontStyle,n.defaultFontStyle),v=e.getValueOrDefault(g.fontFamily,n.defaultFontFamily),b=e.fontString(m,p,v),y=e.min([this.height/2-m-5,this.width/2]),x=this.width,k=0;for(this.ctx.font=b,i=0;i<this.getValueCount();i++){t=this.getPointPosition(i,y),a=this.ctx.measureText(this.pointLabels[i]?this.pointLabels[i]:"").width+5;var S=this.getIndexAngle(i)+Math.PI/2,w=360*S/(2*Math.PI)%360;0===w||180===w?(o=a/2,t.x+o>x&&(x=t.x+o,r=i),t.x-o<k&&(k=t.x-o,l=i)):180>w?t.x+a>x&&(x=t.x+a,r=i):t.x-a<k&&(k=t.x-a,l=i)}u=k,c=Math.ceil(x-this.width),s=this.getIndexAngle(r),d=this.getIndexAngle(l),h=c/Math.sin(s+Math.PI/2),f=u/Math.sin(d+Math.PI/2),h=e.isNumber(h)?h:0,f=e.isNumber(f)?f:0,this.drawingArea=Math.round(y-(f+h)/2),this.setCenterPoint(f,h)},setCenterPoint:function(t,e){var n=this,i=n.width-e-n.drawingArea,a=t+n.drawingArea;n.xCenter=Math.round((a+i)/2+n.left),n.yCenter=Math.round(n.height/2+n.top)},getIndexAngle:function(t){var e=2*Math.PI/this.getValueCount(),n=this.chart.options&&this.chart.options.startAngle?this.chart.options.startAngle:0,i=n*Math.PI*2/360;return t*e-Math.PI/2+i},getDistanceFromCenterForValue:function(t){var e=this;if(null===t)return 0;var n=e.drawingArea/(e.max-e.min);return e.options.reverse?(e.max-t)*n:(t-e.min)*n},getPointPosition:function(t,e){var n=this,i=n.getIndexAngle(t);return{x:Math.round(Math.cos(i)*e)+n.xCenter,y:Math.round(Math.sin(i)*e)+n.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(){var t=this,e=t.min,n=t.max;return t.getPointPositionForValue(0,t.beginAtZero?0:0>e&&0>n?n:e>0&&n>0?e:0)},draw:function(){var t=this,i=t.options,a=i.gridLines,o=i.ticks,r=i.angleLines,s=i.pointLabels,l=e.getValueOrDefault;if(i.display){var d=t.ctx,u=l(o.fontSize,n.defaultFontSize),c=l(o.fontStyle,n.defaultFontStyle),h=l(o.fontFamily,n.defaultFontFamily),f=e.fontString(u,c,h);if(e.each(t.ticks,function(r,s){if(s>0||i.reverse){var c=t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]),h=t.yCenter-c;if(a.display&&0!==s)if(d.strokeStyle=e.getValueAtIndexOrDefault(a.color,s-1),d.lineWidth=e.getValueAtIndexOrDefault(a.lineWidth,s-1),i.lineArc)d.beginPath(),d.arc(t.xCenter,t.yCenter,c,0,2*Math.PI),d.closePath(),d.stroke();else{d.beginPath();for(var g=0;g<t.getValueCount();g++){var m=t.getPointPosition(g,c);0===g?d.moveTo(m.x,m.y):d.lineTo(m.x,m.y)}d.closePath(),d.stroke()}if(o.display){var p=l(o.fontColor,n.defaultFontColor);if(d.font=f,o.showLabelBackdrop){var v=d.measureText(r).width;d.fillStyle=o.backdropColor,d.fillRect(t.xCenter-v/2-o.backdropPaddingX,h-u/2-o.backdropPaddingY,v+2*o.backdropPaddingX,u+2*o.backdropPaddingY)}d.textAlign="center",d.textBaseline="middle",d.fillStyle=p,d.fillText(r,t.xCenter,h)}}}),!i.lineArc){d.lineWidth=r.lineWidth,d.strokeStyle=r.color;for(var g=t.getDistanceFromCenterForValue(i.reverse?t.min:t.max),m=l(s.fontSize,n.defaultFontSize),p=l(s.fontStyle,n.defaultFontStyle),v=l(s.fontFamily,n.defaultFontFamily),b=e.fontString(m,p,v),y=t.getValueCount()-1;y>=0;y--){if(r.display){var x=t.getPointPosition(y,g);d.beginPath(),d.moveTo(t.xCenter,t.yCenter),d.lineTo(x.x,x.y),d.stroke(),d.closePath()}var k=t.getPointPosition(y,g+5),S=l(s.fontColor,n.defaultFontColor);d.font=b,d.fillStyle=S;var w=t.pointLabels,_=this.getIndexAngle(y)+Math.PI/2,M=360*_/(2*Math.PI)%360;0===M||180===M?d.textAlign="center":180>M?d.textAlign="left":d.textAlign="right",90===M||270===M?d.textBaseline="middle":M>270||90>M?d.textBaseline="bottom":d.textBaseline="top",d.fillText(w[y]?w[y]:"",k.x,k.y)}}}}});t.scaleService.registerScaleType("radialLinear",a,i)}},{}],44:[function(t,e,n){"use strict";var i=t(6);i="function"==typeof i?i:window.moment,e.exports=function(t){var e=t.helpers,n={units:[{name:"millisecond",steps:[1,2,5,10,20,50,100,250,500]},{name:"second",steps:[1,2,5,10,30]},{name:"minute",steps:[1,2,5,10,30]},{name:"hour",steps:[1,2,3,6,12]},{name:"day",steps:[1,2,5]},{name:"week",maxStep:4},{name:"month",maxStep:3},{name:"quarter",maxStep:4},{name:"year",maxStep:!1}]},a={position:"bottom",time:{parser:!1,format:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm:ss a",hour:"MMM D, hA",day:"ll",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"}},ticks:{autoSkip:!1}},o=t.Scale.extend({initialize:function(){if(!i)throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");t.Scale.prototype.initialize.call(this)},getLabelMoment:function(t,e){return null===t||null===e?null:"undefined"!=typeof this.labelMoments[t]?this.labelMoments[t][e]:null},getLabelDiff:function(t,e){var n=this;return null===t||null===e?null:(void 0===n.labelDiffs&&n.buildLabelDiffs(),"undefined"!=typeof n.labelDiffs[t]?n.labelDiffs[t][e]:null)},getMomentStartOf:function(t){var e=this;return"week"===e.options.time.unit&&e.options.time.isoWeekday!==!1?t.clone().startOf("isoWeek").isoWeekday(e.options.time.isoWeekday):t.clone().startOf(e.tickUnit)},determineDataLimits:function(){var t=this;t.labelMoments=[];var n=[];t.chart.data.labels&&t.chart.data.labels.length>0?(e.each(t.chart.data.labels,function(e){var i=t.parseTime(e);i.isValid()&&(t.options.time.round&&i.startOf(t.options.time.round),n.push(i))},t),t.firstTick=i.min.call(t,n),t.lastTick=i.max.call(t,n)):(t.firstTick=null,t.lastTick=null),e.each(t.chart.data.datasets,function(a,o){var r=[],s=t.chart.isDatasetVisible(o);"object"==typeof a.data[0]&&null!==a.data[0]?e.each(a.data,function(e){var n=t.parseTime(t.getRightValue(e));n.isValid()&&(t.options.time.round&&n.startOf(t.options.time.round),r.push(n),s&&(t.firstTick=null!==t.firstTick?i.min(t.firstTick,n):n,t.lastTick=null!==t.lastTick?i.max(t.lastTick,n):n))},t):r=n,t.labelMoments.push(r)},t),t.options.time.min&&(t.firstTick=t.parseTime(t.options.time.min)),t.options.time.max&&(t.lastTick=t.parseTime(t.options.time.max)),t.firstTick=(t.firstTick||i()).clone(),t.lastTick=(t.lastTick||i()).clone()},buildLabelDiffs:function(){var t=this;t.labelDiffs=[];var n=[];t.chart.data.labels&&t.chart.data.labels.length>0&&e.each(t.chart.data.labels,function(e){var i=t.parseTime(e);i.isValid()&&(t.options.time.round&&i.startOf(t.options.time.round),n.push(i.diff(t.firstTick,t.tickUnit,!0)))},t),e.each(t.chart.data.datasets,function(i){var a=[];"object"==typeof i.data[0]&&null!==i.data[0]?e.each(i.data,function(e){var n=t.parseTime(t.getRightValue(e));n.isValid()&&(t.options.time.round&&n.startOf(t.options.time.round),a.push(n.diff(t.firstTick,t.tickUnit,!0)))},t):a=n,t.labelDiffs.push(a)},t)},buildTicks:function(){var i=this;i.ctx.save();var a=e.getValueOrDefault(i.options.ticks.fontSize,t.defaults.global.defaultFontSize),o=e.getValueOrDefault(i.options.ticks.fontStyle,t.defaults.global.defaultFontStyle),r=e.getValueOrDefault(i.options.ticks.fontFamily,t.defaults.global.defaultFontFamily),s=e.fontString(a,o,r);if(i.ctx.font=s,i.ticks=[],i.unitScale=1,i.scaleSizeInUnits=0,i.options.time.unit)i.tickUnit=i.options.time.unit||"day",i.displayFormat=i.options.time.displayFormats[i.tickUnit],i.scaleSizeInUnits=i.lastTick.diff(i.firstTick,i.tickUnit,!0),i.unitScale=e.getValueOrDefault(i.options.time.unitStepSize,1);else{var l=i.isHorizontal()?i.width-(i.paddingLeft+i.paddingRight):i.height-(i.paddingTop+i.paddingBottom),d=i.tickFormatFunction(i.firstTick,0,[]),u=i.ctx.measureText(d).width,c=Math.cos(e.toRadians(i.options.ticks.maxRotation)),h=Math.sin(e.toRadians(i.options.ticks.maxRotation));u=u*c+a*h;var f=l/u;i.tickUnit=i.options.time.minUnit,i.scaleSizeInUnits=i.lastTick.diff(i.firstTick,i.tickUnit,!0),i.displayFormat=i.options.time.displayFormats[i.tickUnit];for(var g=0,m=n.units[g];g<n.units.length;){if(i.unitScale=1,e.isArray(m.steps)&&Math.ceil(i.scaleSizeInUnits/f)<e.max(m.steps)){for(var p=0;p<m.steps.length;++p)if(m.steps[p]>=Math.ceil(i.scaleSizeInUnits/f)){i.unitScale=e.getValueOrDefault(i.options.time.unitStepSize,m.steps[p]);break}break}if(m.maxStep===!1||Math.ceil(i.scaleSizeInUnits/f)<m.maxStep){i.unitScale=e.getValueOrDefault(i.options.time.unitStepSize,Math.ceil(i.scaleSizeInUnits/f));break}++g,m=n.units[g],i.tickUnit=m.name;var v=i.firstTick.diff(i.getMomentStartOf(i.firstTick),i.tickUnit,!0),b=i.getMomentStartOf(i.lastTick.clone().add(1,i.tickUnit)).diff(i.lastTick,i.tickUnit,!0);i.scaleSizeInUnits=i.lastTick.diff(i.firstTick,i.tickUnit,!0)+v+b,i.displayFormat=i.options.time.displayFormats[m.name]}}var y;if(i.options.time.min?y=i.getMomentStartOf(i.firstTick):(i.firstTick=i.getMomentStartOf(i.firstTick),y=i.firstTick),!i.options.time.max){var x=i.getMomentStartOf(i.lastTick),k=x.diff(i.lastTick,i.tickUnit,!0);0>k?i.lastTick=i.getMomentStartOf(i.lastTick.add(1,i.tickUnit)):k>=0&&(i.lastTick=x),i.scaleSizeInUnits=i.lastTick.diff(i.firstTick,i.tickUnit,!0)}i.options.time.displayFormat&&(i.displayFormat=i.options.time.displayFormat),i.ticks.push(i.firstTick.clone());for(var S=1;S<=i.scaleSizeInUnits;++S){var w=y.clone().add(S,i.tickUnit);if(i.options.time.max&&w.diff(i.lastTick,i.tickUnit,!0)>=0)break;S%i.unitScale===0&&i.ticks.push(w)}var _=i.ticks[i.ticks.length-1].diff(i.lastTick,i.tickUnit);(0!==_||0===i.scaleSizeInUnits)&&(i.options.time.max?(i.ticks.push(i.lastTick.clone()),i.scaleSizeInUnits=i.lastTick.diff(i.ticks[0],i.tickUnit,!0)):(i.ticks.push(i.lastTick.clone()),i.scaleSizeInUnits=i.lastTick.diff(i.firstTick,i.tickUnit,!0))),i.ctx.restore(),i.labelDiffs=void 0},getLabelForIndex:function(t,e){var n=this,i=n.chart.data.labels&&t<n.chart.data.labels.length?n.chart.data.labels[t]:"";return"object"==typeof n.chart.data.datasets[e].data[0]&&(i=n.getRightValue(n.chart.data.datasets[e].data[t])),n.options.time.tooltipFormat&&(i=n.parseTime(i).format(n.options.time.tooltipFormat)),i},tickFormatFunction:function(t,n,i){var a=t.format(this.displayFormat),o=this.options.ticks,r=e.getValueOrDefault(o.callback,o.userCallback);return r?r(a,n,i):a},convertTicksToLabels:function(){var t=this;t.tickMoments=t.ticks,t.ticks=t.ticks.map(t.tickFormatFunction,t)},getPixelForValue:function(t,e,n){var i=this,a=null;if(void 0!==e&&void 0!==n&&(a=i.getLabelDiff(n,e)),null===a&&(t&&t.isValid||(t=i.parseTime(i.getRightValue(t))),t&&t.isValid&&t.isValid()&&(a=t.diff(i.firstTick,i.tickUnit,!0))),null!==a){var o=0!==a?a/i.scaleSizeInUnits:a;if(i.isHorizontal()){var r=i.width-(i.paddingLeft+i.paddingRight),s=r*o+i.paddingLeft;return i.left+Math.round(s)}var l=i.height-(i.paddingTop+i.paddingBottom),d=l*o+i.paddingTop;return i.top+Math.round(d)}},getPixelForTick:function(t){return this.getPixelForValue(this.tickMoments[t],null,null)},getValueForPixel:function(t){var e=this,n=e.isHorizontal()?e.width-(e.paddingLeft+e.paddingRight):e.height-(e.paddingTop+e.paddingBottom),a=(t-(e.isHorizontal()?e.left+e.paddingLeft:e.top+e.paddingTop))/n;return a*=e.scaleSizeInUnits,e.firstTick.clone().add(i.duration(a,e.tickUnit).asSeconds(),"seconds")},parseTime:function(t){var e=this;return"string"==typeof e.options.time.parser?i(t,e.options.time.parser):"function"==typeof e.options.time.parser?e.options.time.parser(t):"function"==typeof t.getMonth||"number"==typeof t?i(t):t.isValid&&t.isValid()?t:"string"!=typeof e.options.time.format&&e.options.time.format.call?(console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale"),e.options.time.format(t)):i(t,e.options.time.format)}});t.scaleService.registerScaleType("time",o,a)}},{6:6}]},{},[7])(7)});
// Generated by CoffeeScript 1.4.0
(function() {
  var $;

  $ = window.jQuery || window.Zepto || window.$;

  $.fn.fancySelect = function(opts) {
    var isiOS, settings;
    if (opts == null) {
      opts = {};
    }
    settings = $.extend({
      forceiOS: false,
      includeBlank: false,
      optionTemplate: function(optionEl) {
        return optionEl.text();
      },
      triggerTemplate: function(optionEl) {
        return optionEl.text();
      }
    }, opts);
    isiOS = !!navigator.userAgent.match(/iP(hone|od|ad)/i);
    return this.each(function() {
      var copyOptionsToList, disabled, options, sel, trigger, updateTriggerText, wrapper;
      sel = $(this);
      if (sel.hasClass('fancified') || sel[0].tagName !== 'SELECT') {
        return;
      }
      sel.addClass('fancified');
      sel.css({
        width: 1,
        height: 1,
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0
      });
      sel.wrap('<div class="fancy-select">');
      wrapper = sel.parent();
      if (sel.data('class')) {
        wrapper.addClass(sel.data('class'));
      }
      wrapper.append('<div class="trigger">');
      if (!(isiOS && !settings.forceiOS)) {
        wrapper.append('<ul class="options">');
      }
      trigger = wrapper.find('.trigger');
      options = wrapper.find('.options');
      disabled = sel.prop('disabled');
      if (disabled) {
        wrapper.addClass('disabled');
      }
      updateTriggerText = function() {
        var triggerHtml;
        triggerHtml = settings.triggerTemplate(sel.find(':selected'));
        return trigger.html(triggerHtml);
      };
      sel.on('blur.fs', function() {
        if (trigger.hasClass('open')) {
          return setTimeout(function() {
            return trigger.trigger('close.fs');
          }, 120);
        }
      });
      trigger.on('close.fs', function() {
        trigger.removeClass('open');
        return options.removeClass('open');
      });
      trigger.on('click.fs', function() {
        var offParent, parent;
        if (!disabled) {
          trigger.toggleClass('open');
          if (isiOS && !settings.forceiOS) {
            if (trigger.hasClass('open')) {
              return sel.focus();
            }
          } else {
            if (trigger.hasClass('open')) {
              parent = trigger.parent();
              offParent = parent.offsetParent();
              if ((parent.offset().top + parent.outerHeight() + options.outerHeight() + 20) > $(window).height() + $(window).scrollTop()) {
                options.addClass('overflowing');
              } else {
                options.removeClass('overflowing');
              }
            }
            options.toggleClass('open');
            if (!isiOS) {
              return sel.focus();
            }
          }
        }
      });
      sel.on('enable', function() {
        sel.prop('disabled', false);
        wrapper.removeClass('disabled');
        disabled = false;
        return copyOptionsToList();
      });
      sel.on('disable', function() {
        sel.prop('disabled', true);
        wrapper.addClass('disabled');
        return disabled = true;
      });
      sel.on('change.fs', function(e) {
        if (e.originalEvent && e.originalEvent.isTrusted) {
          return e.stopPropagation();
        } else {
          return updateTriggerText();
        }
      });
      sel.on('keydown', function(e) {
        var hovered, newHovered, w;
        w = e.which;
        hovered = options.find('.hover');
        hovered.removeClass('hover');
        if (!options.hasClass('open')) {
          if (w === 13 || w === 32 || w === 38 || w === 40) {
            e.preventDefault();
            return trigger.trigger('click.fs');
          }
        } else {
          if (w === 38) {
            e.preventDefault();
            if (hovered.length && hovered.index() > 0) {
              hovered.prev().addClass('hover');
            } else {
              options.find('li:last-child').addClass('hover');
            }
          } else if (w === 40) {
            e.preventDefault();
            if (hovered.length && hovered.index() < options.find('li').length - 1) {
              hovered.next().addClass('hover');
            } else {
              options.find('li:first-child').addClass('hover');
            }
          } else if (w === 27) {
            e.preventDefault();
            trigger.trigger('click.fs');
          } else if (w === 13 || w === 32) {
            e.preventDefault();
            hovered.trigger('mousedown.fs');
          } else if (w === 9) {
            if (trigger.hasClass('open')) {
              trigger.trigger('close.fs');
            }
          }
          newHovered = options.find('.hover');
          if (newHovered.length) {
            options.scrollTop(0);
            return options.scrollTop(newHovered.position().top - 12);
          }
        }
      });
      options.on('mousedown.fs', 'li', function(e) {
        var clicked;
        clicked = $(this);
        sel.val(clicked.data('raw-value'));
        if (!isiOS) {
          sel.trigger('blur.fs').trigger('focus.fs');
        }
        options.find('.selected').removeClass('selected');
        clicked.addClass('selected');
        trigger.addClass('selected');
        return sel.val(clicked.data('raw-value')).trigger('change.fs').trigger('blur.fs').trigger('focus.fs');
      });
      options.on('mouseenter.fs', 'li', function() {
        var hovered, nowHovered;
        nowHovered = $(this);
        hovered = options.find('.hover');
        hovered.removeClass('hover');
        return nowHovered.addClass('hover');
      });
      options.on('mouseleave.fs', 'li', function() {
        return options.find('.hover').removeClass('hover');
      });
      copyOptionsToList = function() {
        var selOpts;
        updateTriggerText();
        if (isiOS && !settings.forceiOS) {
          return;
        }
        selOpts = sel.find('option');
        return sel.find('option').each(function(i, opt) {
          var optHtml;
          opt = $(opt);
          if (!opt.prop('disabled') && (opt.val() || settings.includeBlank)) {
            optHtml = settings.optionTemplate(opt);
            if (opt.prop('selected')) {
              return options.append("<li data-raw-value=\"" + (opt.val()) + "\" class=\"selected\">" + optHtml + "</li>");
            } else {
              return options.append("<li data-raw-value=\"" + (opt.val()) + "\">" + optHtml + "</li>");
            }
          }
        });
      };
      sel.on('update.fs', function() {
        wrapper.find('.options').empty();
        return copyOptionsToList();
      });
      return copyOptionsToList();
    });
  };

}).call(this);

/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function f(e){this.img=e}function c(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var f=r[o];this.addImage(f)}}},s.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),f.prototype=new t,f.prototype.check=function(){var e=v[this.img.src]||new c(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});
/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */

!function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}return this.each(function(){var d=a.data(this,b);d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d))})}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],c):c("object"==typeof exports?require("jquery"):a.jQuery)}(window),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):"object"==typeof exports?module.exports=f:a.eventie=f}(window),function(){"use strict";function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if(a instanceof RegExp){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if(a instanceof RegExp)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:e.EventEmitter=a}.call(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):"object"==typeof exports?module.exports=b:a.getStyleProperty=b}(window),function(a,b){function c(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function d(){}function e(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=h.length;c>b;b++){var d=h[b];a[d]=0}return a}function f(b){function d(){if(!m){m=!0;var d=a.getComputedStyle;if(j=function(){var a=d?function(a){return d(a,null)}:function(a){return a.currentStyle};return function(b){var c=a(b);return c||g("Style returned "+c+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),c}}(),k=b("boxSizing")){var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style[k]="border-box";var f=document.body||document.documentElement;f.appendChild(e);var h=j(e);l=200===c(h.width),f.removeChild(e)}}}function f(a){if(d(),"string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var b=j(a);if("none"===b.display)return e();var f={};f.width=a.offsetWidth,f.height=a.offsetHeight;for(var g=f.isBorderBox=!(!k||!b[k]||"border-box"!==b[k]),m=0,n=h.length;n>m;m++){var o=h[m],p=b[o];p=i(a,p);var q=parseFloat(p);f[o]=isNaN(q)?0:q}var r=f.paddingLeft+f.paddingRight,s=f.paddingTop+f.paddingBottom,t=f.marginLeft+f.marginRight,u=f.marginTop+f.marginBottom,v=f.borderLeftWidth+f.borderRightWidth,w=f.borderTopWidth+f.borderBottomWidth,x=g&&l,y=c(b.width);y!==!1&&(f.width=y+(x?0:r+v));var z=c(b.height);return z!==!1&&(f.height=z+(x?0:s+w)),f.innerWidth=f.width-(r+v),f.innerHeight=f.height-(s+w),f.outerWidth=f.width+t,f.outerHeight=f.height+u,f}}function i(b,c){if(a.getComputedStyle||-1===c.indexOf("%"))return c;var d=b.style,e=d.left,f=b.runtimeStyle,g=f&&f.left;return g&&(f.left=b.currentStyle.left),d.left=c,c=d.pixelLeft,d.left=e,g&&(f.left=g),c}var j,k,l,m=!1;return f}var g="undefined"==typeof console?d:function(a){console.error(a)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],f):"object"==typeof exports?module.exports=f(require("desandro-get-style-property")):a.getSize=f(a.getStyleProperty)}(window),function(a){function b(a){"function"==typeof a&&(b.isReady?a():g.push(a))}function c(a){var c="readystatechange"===a.type&&"complete"!==f.readyState;b.isReady||c||d()}function d(){b.isReady=!0;for(var a=0,c=g.length;c>a;a++){var d=g[a];d()}}function e(e){return"complete"===f.readyState?d():(e.bind(f,"DOMContentLoaded",c),e.bind(f,"readystatechange",c),e.bind(a,"load",c)),b}var f=a.document,g=[];b.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],e):"object"==typeof exports?module.exports=e(require("eventie")):a.docReady=e(a.eventie)}(window),function(a){"use strict";function b(a,b){return a[g](b)}function c(a){if(!a.parentNode){var b=document.createDocumentFragment();b.appendChild(a)}}function d(a,b){c(a);for(var d=a.parentNode.querySelectorAll(b),e=0,f=d.length;f>e;e++)if(d[e]===a)return!0;return!1}function e(a,d){return c(a),b(a,d)}var f,g=function(){if(a.matches)return"matches";if(a.matchesSelector)return"matchesSelector";for(var b=["webkit","moz","ms","o"],c=0,d=b.length;d>c;c++){var e=b[c],f=e+"MatchesSelector";if(a[f])return f}}();if(g){var h=document.createElement("div"),i=b(h,"div");f=i?b:e}else f=d;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return f}):"object"==typeof exports?module.exports=f:window.matchesSelector=f}(Element.prototype),function(a,b){"use strict";"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(c,d){return b(a,c,d)}):"object"==typeof exports?module.exports=b(a,require("doc-ready"),require("desandro-matches-selector")):a.fizzyUIUtils=b(a,a.docReady,a.matchesSelector)}(window,function(a,b,c){var d={};d.extend=function(a,b){for(var c in b)a[c]=b[c];return a},d.modulo=function(a,b){return(a%b+b)%b};var e=Object.prototype.toString;d.isArray=function(a){return"[object Array]"==e.call(a)},d.makeArray=function(a){var b=[];if(d.isArray(a))b=a;else if(a&&"number"==typeof a.length)for(var c=0,e=a.length;e>c;c++)b.push(a[c]);else b.push(a);return b},d.indexOf=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},d.removeFrom=function(a,b){var c=d.indexOf(a,b);-1!=c&&a.splice(c,1)},d.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1==a.nodeType&&"string"==typeof a.nodeName},d.setText=function(){function a(a,c){b=b||(void 0!==document.documentElement.textContent?"textContent":"innerText"),a[b]=c}var b;return a}(),d.getParent=function(a,b){for(;a!=document.body;)if(a=a.parentNode,c(a,b))return a},d.getQueryElement=function(a){return"string"==typeof a?document.querySelector(a):a},d.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},d.filterFindElements=function(a,b){a=d.makeArray(a);for(var e=[],f=0,g=a.length;g>f;f++){var h=a[f];if(d.isElement(h))if(b){c(h,b)&&e.push(h);for(var i=h.querySelectorAll(b),j=0,k=i.length;k>j;j++)e.push(i[j])}else e.push(h)}return e},d.debounceMethod=function(a,b,c){var d=a.prototype[b],e=b+"Timeout";a.prototype[b]=function(){var a=this[e];a&&clearTimeout(a);var b=arguments,f=this;this[e]=setTimeout(function(){d.apply(f,b),delete f[e]},c||100)}},d.toDashed=function(a){return a.replace(/(.)([A-Z])/g,function(a,b,c){return b+"-"+c}).toLowerCase()};var f=a.console;return d.htmlInit=function(c,e){b(function(){for(var b=d.toDashed(e),g=document.querySelectorAll(".js-"+b),h="data-"+b+"-options",i=0,j=g.length;j>i;i++){var k,l=g[i],m=l.getAttribute(h);try{k=m&&JSON.parse(m)}catch(n){f&&f.error("Error parsing "+h+" on "+l.nodeName.toLowerCase()+(l.id?"#"+l.id:"")+": "+n);continue}var o=new c(l,k),p=a.jQuery;p&&p.data(l,e,o)}})},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property","fizzy-ui-utils/utils"],function(c,d,e,f){return b(a,c,d,e,f)}):"object"==typeof exports?module.exports=b(a,require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property"),require("fizzy-ui-utils")):(a.Outlayer={},a.Outlayer.Item=b(a,a.EventEmitter,a.getSize,a.getStyleProperty,a.fizzyUIUtils))}(window,function(a,b,c,d,e){"use strict";function f(a){for(var b in a)return!1;return b=null,!0}function g(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}function h(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}var i=a.getComputedStyle,j=i?function(a){return i(a,null)}:function(a){return a.currentStyle},k=d("transition"),l=d("transform"),m=k&&l,n=!!d("perspective"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[k],p=["transform","transition","transitionDuration","transitionProperty"],q=function(){for(var a={},b=0,c=p.length;c>b;b++){var e=p[b],f=d(e);f&&f!==e&&(a[e]=f)}return a}();e.extend(g.prototype,b.prototype),g.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.getSize=function(){this.size=c(this.element)},g.prototype.css=function(a){var b=this.element.style;for(var c in a){var d=q[c]||c;b[d]=a[c]}},g.prototype.getPosition=function(){var a=j(this.element),b=this.layout.options,c=b.isOriginLeft,d=b.isOriginTop,e=a[c?"left":"right"],f=a[d?"top":"bottom"],g=this.layout.size,h=-1!=e.indexOf("%")?parseFloat(e)/100*g.width:parseInt(e,10),i=-1!=f.indexOf("%")?parseFloat(f)/100*g.height:parseInt(f,10);h=isNaN(h)?0:h,i=isNaN(i)?0:i,h-=c?g.paddingLeft:g.paddingRight,i-=d?g.paddingTop:g.paddingBottom,this.position.x=h,this.position.y=i},g.prototype.layoutPosition=function(){var a=this.layout.size,b=this.layout.options,c={},d=b.isOriginLeft?"paddingLeft":"paddingRight",e=b.isOriginLeft?"left":"right",f=b.isOriginLeft?"right":"left",g=this.position.x+a[d];c[e]=this.getXValue(g),c[f]="";var h=b.isOriginTop?"paddingTop":"paddingBottom",i=b.isOriginTop?"top":"bottom",j=b.isOriginTop?"bottom":"top",k=this.position.y+a[h];c[i]=this.getYValue(k),c[j]="",this.css(c),this.emitEvent("layout",[this])},g.prototype.getXValue=function(a){var b=this.layout.options;return b.percentPosition&&!b.isHorizontal?a/this.layout.size.width*100+"%":a+"px"},g.prototype.getYValue=function(a){var b=this.layout.options;return b.percentPosition&&b.isHorizontal?a/this.layout.size.height*100+"%":a+"px"},g.prototype._transitionTo=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(this.setPosition(a,b),g&&!this.isTransitioning)return void this.layoutPosition();var h=a-c,i=b-d,j={};j.transform=this.getTranslate(h,i),this.transition({to:j,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},g.prototype.getTranslate=function(a,b){var c=this.layout.options;return a=c.isOriginLeft?a:-a,b=c.isOriginTop?b:-b,n?"translate3d("+a+"px, "+b+"px, 0)":"translate("+a+"px, "+b+"px)"},g.prototype.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},g.prototype.moveTo=m?g.prototype._transitionTo:g.prototype.goTo,g.prototype.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},g.prototype._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);for(var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)},g.prototype._transition=function(a){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);var b=this._transn;for(var c in a.onTransitionEnd)b.onEnd[c]=a.onTransitionEnd[c];for(c in a.to)b.ingProperties[c]=!0,a.isCleaning&&(b.clean[c]=!0);if(a.from){this.css(a.from);var d=this.element.offsetHeight;d=null}this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0};var r="opacity,"+h(q.transform||"transform");g.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:r,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(o,this,!1))},g.prototype.transition=g.prototype[k?"_transition":"_nonTransition"],g.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},g.prototype.onotransitionend=function(a){this.ontransitionend(a)};var s={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};g.prototype.ontransitionend=function(a){if(a.target===this.element){var b=this._transn,c=s[a.propertyName]||a.propertyName;if(delete b.ingProperties[c],f(b.ingProperties)&&this.disableTransition(),c in b.clean&&(this.element.style[a.propertyName]="",delete b.clean[c]),c in b.onEnd){var d=b.onEnd[c];d.call(this),delete b.onEnd[c]}this.emitEvent("transitionEnd",[this])}},g.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(o,this,!1),this.isTransitioning=!1},g.prototype._removeStyles=function(a){var b={};for(var c in a)b[c]="";this.css(b)};var t={transitionProperty:"",transitionDuration:""};return g.prototype.removeTransitionStyles=function(){this.css(t)},g.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},g.prototype.remove=function(){if(!k||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var a=this;this.once("transitionEnd",function(){a.removeElem()}),this.hide()},g.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("visibleStyle");b[c]=this.onRevealTransitionEnd,this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},g.prototype.getHideRevealTransitionEndProperty=function(a){var b=this.layout.options[a];if(b.opacity)return"opacity";for(var c in b)return c},g.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("hiddenStyle");b[c]=this.onHideTransitionEnd,this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},g.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},g}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","eventEmitter/EventEmitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(c,d,e,f,g){return b(a,c,d,e,f,g)}):"object"==typeof exports?module.exports=b(a,require("eventie"),require("wolfy87-eventemitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):a.Outlayer=b(a,a.eventie,a.EventEmitter,a.getSize,a.fizzyUIUtils,a.Outlayer.Item)}(window,function(a,b,c,d,e,f){"use strict";function g(a,b){var c=e.getQueryElement(a);if(!c)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(c||a)));this.element=c,i&&(this.$element=i(this.element)),this.options=e.extend({},this.constructor.defaults),this.option(b);var d=++k;this.element.outlayerGUID=d,l[d]=this,this._create(),this.options.isInitLayout&&this.layout()}var h=a.console,i=a.jQuery,j=function(){},k=0,l={};return g.namespace="outlayer",g.Item=f,g.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e.extend(g.prototype,c.prototype),g.prototype.option=function(a){e.extend(this.options,a)},g.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},g.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},g.prototype._itemize=function(a){for(var b=this._filterFindItemElements(a),c=this.constructor.Item,d=[],e=0,f=b.length;f>e;e++){var g=b[e],h=new c(g,this);d.push(h)}return d},g.prototype._filterFindItemElements=function(a){return e.filterFindElements(a,this.options.itemSelector)},g.prototype.getItemElements=function(){for(var a=[],b=0,c=this.items.length;c>b;b++)a.push(this.items[b].element);return a},g.prototype.layout=function(){this._resetLayout(),this._manageStamps();var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,a),this._isLayoutInited=!0},g.prototype._init=g.prototype.layout,g.prototype._resetLayout=function(){this.getSize()},g.prototype.getSize=function(){this.size=d(this.element)},g.prototype._getMeasurement=function(a,b){var c,f=this.options[a];f?("string"==typeof f?c=this.element.querySelector(f):e.isElement(f)&&(c=f),this[a]=c?d(c)[b]:f):this[a]=0},g.prototype.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},g.prototype._getItemsForLayout=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];e.isIgnored||b.push(e)}return b},g.prototype._layoutItems=function(a,b){if(this._emitCompleteOnItems("layout",a),a&&a.length){for(var c=[],d=0,e=a.length;e>d;d++){var f=a[d],g=this._getItemLayoutPosition(f);g.item=f,g.isInstant=b||f.isLayoutInstant,c.push(g)}this._processLayoutQueue(c)}},g.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},g.prototype._processLayoutQueue=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];this._positionItem(d.item,d.x,d.y,d.isInstant)}},g.prototype._positionItem=function(a,b,c,d){d?a.goTo(b,c):a.moveTo(b,c)},g.prototype._postLayout=function(){this.resizeContainer()},g.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},g.prototype._getContainerSize=j,g.prototype._setContainerMeasure=function(a,b){if(void 0!==a){var c=this.size;c.isBorderBox&&(a+=b?c.paddingLeft+c.paddingRight+c.borderLeftWidth+c.borderRightWidth:c.paddingBottom+c.paddingTop+c.borderTopWidth+c.borderBottomWidth),a=Math.max(a,0),this.element.style[b?"width":"height"]=a+"px"}},g.prototype._emitCompleteOnItems=function(a,b){function c(){e.dispatchEvent(a+"Complete",null,[b])}function d(){g++,g===f&&c()}var e=this,f=b.length;if(!b||!f)return void c();for(var g=0,h=0,i=b.length;i>h;h++){var j=b[h];j.once(a,d)}},g.prototype.dispatchEvent=function(a,b,c){var d=b?[b].concat(c):c;if(this.emitEvent(a,d),i)if(this.$element=this.$element||i(this.element),b){var e=i.Event(b);e.type=a,this.$element.trigger(e,c)}else this.$element.trigger(a,c)},g.prototype.ignore=function(a){var b=this.getItem(a);b&&(b.isIgnored=!0)},g.prototype.unignore=function(a){var b=this.getItem(a);b&&delete b.isIgnored},g.prototype.stamp=function(a){if(a=this._find(a)){this.stamps=this.stamps.concat(a);for(var b=0,c=a.length;c>b;b++){var d=a[b];this.ignore(d)}}},g.prototype.unstamp=function(a){if(a=this._find(a))for(var b=0,c=a.length;c>b;b++){var d=a[b];e.removeFrom(this.stamps,d),this.unignore(d)}},g.prototype._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=e.makeArray(a)):void 0},g.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var a=0,b=this.stamps.length;b>a;a++){var c=this.stamps[a];this._manageStamp(c)}}},g.prototype._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),b=this.size;this._boundingRect={left:a.left+b.paddingLeft+b.borderLeftWidth,top:a.top+b.paddingTop+b.borderTopWidth,right:a.right-(b.paddingRight+b.borderRightWidth),bottom:a.bottom-(b.paddingBottom+b.borderBottomWidth)}},g.prototype._manageStamp=j,g.prototype._getElementOffset=function(a){var b=a.getBoundingClientRect(),c=this._boundingRect,e=d(a),f={left:b.left-c.left-e.marginLeft,top:b.top-c.top-e.marginTop,right:c.right-b.right-e.marginRight,bottom:c.bottom-b.bottom-e.marginBottom};return f},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.bindResize=function(){this.isResizeBound||(b.bind(a,"resize",this),this.isResizeBound=!0)},g.prototype.unbindResize=function(){this.isResizeBound&&b.unbind(a,"resize",this),this.isResizeBound=!1},g.prototype.onresize=function(){function a(){b.resize(),delete b.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var b=this;this.resizeTimeout=setTimeout(a,100)},g.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},g.prototype.needsResizeLayout=function(){var a=d(this.element),b=this.size&&a;return b&&a.innerWidth!==this.size.innerWidth},g.prototype.addItems=function(a){var b=this._itemize(a);return b.length&&(this.items=this.items.concat(b)),b},g.prototype.appended=function(a){var b=this.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},g.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){var c=this.items.slice(0);this.items=b.concat(c),this._resetLayout(),this._manageStamps(),this.layoutItems(b,!0),this.reveal(b),this.layoutItems(c)}},g.prototype.reveal=function(a){this._emitCompleteOnItems("reveal",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.reveal()}},g.prototype.hide=function(a){this._emitCompleteOnItems("hide",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.hide()}},g.prototype.revealItemElements=function(a){var b=this.getItems(a);this.reveal(b)},g.prototype.hideItemElements=function(a){var b=this.getItems(a);this.hide(b)},g.prototype.getItem=function(a){for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];if(d.element===a)return d}},g.prototype.getItems=function(a){a=e.makeArray(a);for(var b=[],c=0,d=a.length;d>c;c++){var f=a[c],g=this.getItem(f);g&&b.push(g)}return b},g.prototype.remove=function(a){var b=this.getItems(a);if(this._emitCompleteOnItems("remove",b),b&&b.length)for(var c=0,d=b.length;d>c;c++){var f=b[c];f.remove(),e.removeFrom(this.items,f)}},g.prototype.destroy=function(){var a=this.element.style;a.height="",a.position="",a.width="";for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];d.destroy()}this.unbindResize();var e=this.element.outlayerGUID;delete l[e],delete this.element.outlayerGUID,i&&i.removeData(this.element,this.constructor.namespace)},g.data=function(a){a=e.getQueryElement(a);var b=a&&a.outlayerGUID;return b&&l[b]},g.create=function(a,b){function c(){g.apply(this,arguments)}return Object.create?c.prototype=Object.create(g.prototype):e.extend(c.prototype,g.prototype),c.prototype.constructor=c,c.defaults=e.extend({},g.defaults),e.extend(c.defaults,b),c.prototype.settings={},c.namespace=a,c.data=g.data,c.Item=function(){f.apply(this,arguments)},c.Item.prototype=new f,e.htmlInit(c,a),i&&i.bridget&&i.bridget(a,c),c},g.Item=f,g}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],b):"object"==typeof exports?module.exports=b(require("outlayer")):(a.Isotope=a.Isotope||{},a.Isotope.Item=b(a.Outlayer))}(window,function(a){"use strict";function b(){a.Item.apply(this,arguments)}b.prototype=new a.Item,b.prototype._create=function(){this.id=this.layout.itemGUID++,a.Item.prototype._create.call(this),this.sortData={}},b.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var a=this.layout.options.getSortData,b=this.layout._sorters;for(var c in a){var d=b[c];this.sortData[c]=d(this.element,this)}}};var c=b.prototype.destroy;return b.prototype.destroy=function(){c.apply(this,arguments),this.css({display:""})},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],b):"object"==typeof exports?module.exports=b(require("get-size"),require("outlayer")):(a.Isotope=a.Isotope||{},a.Isotope.LayoutMode=b(a.getSize,a.Outlayer))}(window,function(a,b){"use strict";function c(a){this.isotope=a,a&&(this.options=a.options[this.namespace],this.element=a.element,this.items=a.filteredItems,this.size=a.size)}return function(){function a(a){return function(){return b.prototype[a].apply(this.isotope,arguments)}}for(var d=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],e=0,f=d.length;f>e;e++){var g=d[e];c.prototype[g]=a(g)}}(),c.prototype.needsVerticalResizeLayout=function(){var b=a(this.isotope.element),c=this.isotope.size&&b;return c&&b.innerHeight!=this.isotope.size.innerHeight},c.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},c.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},c.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},c.prototype.getSegmentSize=function(a,b){var c=a+b,d="outer"+b;if(this._getMeasurement(c,d),!this[c]){var e=this.getFirstItemSize();this[c]=e&&e[d]||this.isotope.size["inner"+b]}},c.prototype.getFirstItemSize=function(){var b=this.isotope.filteredItems[0];return b&&b.element&&a(b.element)},c.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},c.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},c.modes={},c.create=function(a,b){function d(){c.apply(this,arguments)}return d.prototype=new c,b&&(d.options=b),d.prototype.namespace=a,c.modes[a]=d,d},c}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size","fizzy-ui-utils/utils"],b):"object"==typeof exports?module.exports=b(require("outlayer"),require("get-size"),require("fizzy-ui-utils")):a.Masonry=b(a.Outlayer,a.getSize,a.fizzyUIUtils)}(window,function(a,b,c){var d=a.create("masonry");return d.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var a=this.cols;for(this.colYs=[];a--;)this.colYs.push(0);this.maxY=0},d.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],c=a&&a.element;this.columnWidth=c&&b(c).outerWidth||this.containerWidth}var d=this.columnWidth+=this.gutter,e=this.containerWidth+this.gutter,f=e/d,g=d-e%d,h=g&&1>g?"round":"floor";f=Math[h](f),this.cols=Math.max(f,1)},d.prototype.getContainerWidth=function(){var a=this.options.isFitWidth?this.element.parentNode:this.element,c=b(a);this.containerWidth=c&&c.innerWidth},d.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth%this.columnWidth,d=b&&1>b?"round":"ceil",e=Math[d](a.size.outerWidth/this.columnWidth);e=Math.min(e,this.cols);for(var f=this._getColGroup(e),g=Math.min.apply(Math,f),h=c.indexOf(f,g),i={x:this.columnWidth*h,y:g},j=g+a.size.outerHeight,k=this.cols+1-f.length,l=0;k>l;l++)this.colYs[h+l]=j;return i},d.prototype._getColGroup=function(a){if(2>a)return this.colYs;for(var b=[],c=this.cols+1-a,d=0;c>d;d++){var e=this.colYs.slice(d,d+a);b[d]=Math.max.apply(Math,e)}return b},d.prototype._manageStamp=function(a){var c=b(a),d=this._getElementOffset(a),e=this.options.isOriginLeft?d.left:d.right,f=e+c.outerWidth,g=Math.floor(e/this.columnWidth);g=Math.max(0,g);var h=Math.floor(f/this.columnWidth);h-=f%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var i=(this.options.isOriginTop?d.top:d.bottom)+c.outerHeight,j=g;h>=j;j++)this.colYs[j]=Math.max(i,this.colYs[j])},d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this.options.isFitWidth&&(a.width=this._getContainerFitWidth()),a},d.prototype._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},d.prototype.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!==this.containerWidth},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],b):"object"==typeof exports?module.exports=b(require("../layout-mode"),require("masonry-layout")):b(a.Isotope.LayoutMode,a.Masonry)}(window,function(a,b){"use strict";function c(a,b){for(var c in b)a[c]=b[c];return a}var d=a.create("masonry"),e=d.prototype._getElementOffset,f=d.prototype.layout,g=d.prototype._getMeasurement;
c(d.prototype,b.prototype),d.prototype._getElementOffset=e,d.prototype.layout=f,d.prototype._getMeasurement=g;var h=d.prototype.measureColumns;d.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,h.call(this)};var i=d.prototype._manageStamp;return d.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,i.apply(this,arguments)},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],b):"object"==typeof exports?module.exports=b(require("../layout-mode")):b(a.Isotope.LayoutMode)}(window,function(a){"use strict";var b=a.create("fitRows");return b.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},b.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth+this.gutter,c=this.isotope.size.innerWidth+this.gutter;0!==this.x&&b+this.x>c&&(this.x=0,this.y=this.maxY);var d={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+a.size.outerHeight),this.x+=b,d},b.prototype._getContainerSize=function(){return{height:this.maxY}},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],b):"object"==typeof exports?module.exports=b(require("../layout-mode")):b(a.Isotope.LayoutMode)}(window,function(a){"use strict";var b=a.create("vertical",{horizontalAlignment:0});return b.prototype._resetLayout=function(){this.y=0},b.prototype._getItemLayoutPosition=function(a){a.getSize();var b=(this.isotope.size.innerWidth-a.size.outerWidth)*this.options.horizontalAlignment,c=this.y;return this.y+=a.size.outerHeight,{x:b,y:c}},b.prototype._getContainerSize=function(){return{height:this.y}},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","fizzy-ui-utils/utils","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],function(c,d,e,f,g,h){return b(a,c,d,e,f,g,h)}):"object"==typeof exports?module.exports=b(a,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("./item"),require("./layout-mode"),require("./layout-modes/masonry"),require("./layout-modes/fit-rows"),require("./layout-modes/vertical")):a.Isotope=b(a,a.Outlayer,a.getSize,a.matchesSelector,a.fizzyUIUtils,a.Isotope.Item,a.Isotope.LayoutMode)}(window,function(a,b,c,d,e,f,g){function h(a,b){return function(c,d){for(var e=0,f=a.length;f>e;e++){var g=a[e],h=c.sortData[g],i=d.sortData[g];if(h>i||i>h){var j=void 0!==b[g]?b[g]:b,k=j?1:-1;return(h>i?1:-1)*k}}return 0}}var i=a.jQuery,j=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+|\s+$/g,"")},k=document.documentElement,l=k.textContent?function(a){return a.textContent}:function(a){return a.innerText},m=b.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});m.Item=f,m.LayoutMode=g,m.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),b.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var a in g.modes)this._initLayoutMode(a)},m.prototype.reloadItems=function(){this.itemGUID=0,b.prototype.reloadItems.call(this)},m.prototype._itemize=function(){for(var a=b.prototype._itemize.apply(this,arguments),c=0,d=a.length;d>c;c++){var e=a[c];e.id=this.itemGUID++}return this._updateItemsSortData(a),a},m.prototype._initLayoutMode=function(a){var b=g.modes[a],c=this.options[a]||{};this.options[a]=b.options?e.extend(b.options,c):c,this.modes[a]=new b(this)},m.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?void this.arrange():void this._layout()},m.prototype._layout=function(){var a=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,a),this._isLayoutInited=!0},m.prototype.arrange=function(a){function b(){d.reveal(c.needReveal),d.hide(c.needHide)}this.option(a),this._getIsInstant();var c=this._filter(this.items);this.filteredItems=c.matches;var d=this;this._bindArrangeComplete(),this._isInstant?this._noTransition(b):b(),this._sort(),this._layout()},m.prototype._init=m.prototype.arrange,m.prototype._getIsInstant=function(){var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=a,a},m.prototype._bindArrangeComplete=function(){function a(){b&&c&&d&&e.dispatchEvent("arrangeComplete",null,[e.filteredItems])}var b,c,d,e=this;this.once("layoutComplete",function(){b=!0,a()}),this.once("hideComplete",function(){c=!0,a()}),this.once("revealComplete",function(){d=!0,a()})},m.prototype._filter=function(a){var b=this.options.filter;b=b||"*";for(var c=[],d=[],e=[],f=this._getFilterTest(b),g=0,h=a.length;h>g;g++){var i=a[g];if(!i.isIgnored){var j=f(i);j&&c.push(i),j&&i.isHidden?d.push(i):j||i.isHidden||e.push(i)}}return{matches:c,needReveal:d,needHide:e}},m.prototype._getFilterTest=function(a){return i&&this.options.isJQueryFiltering?function(b){return i(b.element).is(a)}:"function"==typeof a?function(b){return a(b.element)}:function(b){return d(b.element,a)}},m.prototype.updateSortData=function(a){var b;a?(a=e.makeArray(a),b=this.getItems(a)):b=this.items,this._getSorters(),this._updateItemsSortData(b)},m.prototype._getSorters=function(){var a=this.options.getSortData;for(var b in a){var c=a[b];this._sorters[b]=n(c)}},m.prototype._updateItemsSortData=function(a){for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.updateSortData()}};var n=function(){function a(a){if("string"!=typeof a)return a;var c=j(a).split(" "),d=c[0],e=d.match(/^\[(.+)\]$/),f=e&&e[1],g=b(f,d),h=m.sortDataParsers[c[1]];return a=h?function(a){return a&&h(g(a))}:function(a){return a&&g(a)}}function b(a,b){var c;return c=a?function(b){return b.getAttribute(a)}:function(a){var c=a.querySelector(b);return c&&l(c)}}return a}();m.sortDataParsers={parseInt:function(a){return parseInt(a,10)},parseFloat:function(a){return parseFloat(a)}},m.prototype._sort=function(){var a=this.options.sortBy;if(a){var b=[].concat.apply(a,this.sortHistory),c=h(b,this.options.sortAscending);this.filteredItems.sort(c),a!=this.sortHistory[0]&&this.sortHistory.unshift(a)}},m.prototype._mode=function(){var a=this.options.layoutMode,b=this.modes[a];if(!b)throw new Error("No layout mode: "+a);return b.options=this.options[a],b},m.prototype._resetLayout=function(){b.prototype._resetLayout.call(this),this._mode()._resetLayout()},m.prototype._getItemLayoutPosition=function(a){return this._mode()._getItemLayoutPosition(a)},m.prototype._manageStamp=function(a){this._mode()._manageStamp(a)},m.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},m.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},m.prototype.appended=function(a){var b=this.addItems(a);if(b.length){var c=this._filterRevealAdded(b);this.filteredItems=this.filteredItems.concat(c)}},m.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){this._resetLayout(),this._manageStamps();var c=this._filterRevealAdded(b);this.layoutItems(this.filteredItems),this.filteredItems=c.concat(this.filteredItems),this.items=b.concat(this.items)}},m.prototype._filterRevealAdded=function(a){var b=this._filter(a);return this.hide(b.needHide),this.reveal(b.matches),this.layoutItems(b.matches,!0),b.matches},m.prototype.insert=function(a){var b=this.addItems(a);if(b.length){var c,d,e=b.length;for(c=0;e>c;c++)d=b[c],this.element.appendChild(d.element);var f=this._filter(b).matches;for(c=0;e>c;c++)b[c].isLayoutInstant=!0;for(this.arrange(),c=0;e>c;c++)delete b[c].isLayoutInstant;this.reveal(f)}};var o=m.prototype.remove;return m.prototype.remove=function(a){a=e.makeArray(a);var b=this.getItems(a);o.call(this,a);var c=b&&b.length;if(c)for(var d=0;c>d;d++){var f=b[d];e.removeFrom(this.filteredItems,f)}},m.prototype.shuffle=function(){for(var a=0,b=this.items.length;b>a;a++){var c=this.items[a];c.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},m.prototype._noTransition=function(a){var b=this.options.transitionDuration;this.options.transitionDuration=0;var c=a.call(this);return this.options.transitionDuration=b,c},m.prototype.getFilteredItemElements=function(){for(var a=[],b=0,c=this.filteredItems.length;c>b;b++)a.push(this.filteredItems[b].element);return a},m});
/* ===========================================================
 * bootstrap-tooltip.js v2.1.1
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function (jQuery) {

  "use strict"; // jshint ;_;


 /* TOOLTIP PUBLIC CLASS DEFINITION
  * =============================== */

  var Tooltip = function (element, options) {
    this.init('tooltip', element, options)
  }

  Tooltip.prototype = {

    constructor: Tooltip

  , init: function (type, element, options) {
      var eventIn
        , eventOut

      this.type = type
      this.jQueryelement = jQuery(element)
      this.options = this.getOptions(options)
      this.enabled = true

      if (this.options.trigger == 'click') {
        this.jQueryelement.on('click.' + this.type, this.options.selector, jQuery.proxy(this.toggle, this))
      } else if (this.options.trigger != 'manual') {
        eventIn = this.options.trigger == 'hover' ? 'mouseenter' : 'focus'
        eventOut = this.options.trigger == 'hover' ? 'mouseleave' : 'blur'
        this.jQueryelement.on(eventIn + '.' + this.type, this.options.selector, jQuery.proxy(this.enter, this))
        this.jQueryelement.on(eventOut + '.' + this.type, this.options.selector, jQuery.proxy(this.leave, this))
      }

      this.options.selector ?
        (this._options = jQuery.extend({}, this.options, { trigger: 'manual', selector: '' })) :
        this.fixTitle()
    }

  , getOptions: function (options) {
      options = jQuery.extend({}, jQuery.fn[this.type].defaults, options, this.jQueryelement.data())

      if (options.delay && typeof options.delay == 'number') {
        options.delay = {
          show: options.delay
        , hide: options.delay
        }
      }

      return options
    }

  , enter: function (e) {
      var self = jQuery(e.currentTarget)[this.type](this._options).data(this.type)

      if (!self.options.delay || !self.options.delay.show) return self.show()

      clearTimeout(this.timeout)
      self.hoverState = 'in'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'in') self.show()
      }, self.options.delay.show)
    }

  , leave: function (e) {
      var self = jQuery(e.currentTarget)[this.type](this._options).data(this.type)

      if (this.timeout) clearTimeout(this.timeout)
      if (!self.options.delay || !self.options.delay.hide) return self.hide()

      self.hoverState = 'out'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'out') self.hide()
      }, self.options.delay.hide)
    }

  , show: function () {
      var jQuerytip
        , inside
        , pos
        , actualWidth
        , actualHeight
        , placement
        , tp

      if (this.hasContent() && this.enabled) {
        jQuerytip = this.tip()
        this.setContent()

        if (this.options.animation) {
          jQuerytip.addClass('fade')
        }

        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, jQuerytip[0], this.jQueryelement[0]) :
          this.options.placement

        inside = /in/.test(placement)

        jQuerytip
          .remove()
          .css({ top: 0, left: 0, display: 'block' })
          .appendTo(inside ? this.jQueryelement : document.body)

        pos = this.getPosition(inside)

        actualWidth = jQuerytip[0].offsetWidth
        actualHeight = jQuerytip[0].offsetHeight

        switch (inside ? placement.split(' ')[1] : placement) {
          case 'bottom':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'top':
            tp = {top: pos.top - actualHeight + this.options.offsetTop, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
            break
        }

        jQuerytip
          .css(tp)
          .addClass(placement)
          .addClass('in')
      }
    }

  , setContent: function () {
      var jQuerytip = this.tip()
        , title = this.getTitle()

      jQuerytip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
      jQuerytip.removeClass('fade in top bottom left right')
    }

  , hide: function () {
      var that = this
        , jQuerytip = this.tip()

      jQuerytip.removeClass('in')

      function removeWithAnimation() {
        var timeout = setTimeout(function () {
          jQuerytip.off(jQuery.support.transition.end).remove()
        }, 500)

        jQuerytip.one(jQuery.support.transition.end, function () {
          clearTimeout(timeout)
          jQuerytip.remove()
        })
      }

      jQuery.support.transition && this.jQuerytip.hasClass('fade') ?
        removeWithAnimation() :
        jQuerytip.remove()

      return this
    }

  , fixTitle: function () {
      var jQuerye = this.jQueryelement
      if (jQuerye.attr('title') || typeof(jQuerye.attr('data-original-title')) != 'string') {
        jQuerye.attr('data-original-title', jQuerye.attr('title') || '').removeAttr('title')
      }
    }

  , hasContent: function () {
      return this.getTitle()
    }

  , getPosition: function (inside) {
      return jQuery.extend({}, (inside ? {top: 0, left: 0} : this.jQueryelement.offset()), {
        width: this.jQueryelement[0].offsetWidth
      , height: this.jQueryelement[0].offsetHeight
      })
    }

  , getTitle: function () {
      var title
        , jQuerye = this.jQueryelement
        , o = this.options

      title = jQuerye.attr('data-original-title')
        || (typeof o.title == 'function' ? o.title.call(jQuerye[0]) :  o.title)

      return title
    }

  , tip: function () {
      return this.jQuerytip = this.jQuerytip || jQuery(this.options.template)
    }

  , validate: function () {
      if (!this.jQueryelement[0].parentNode) {
        this.hide()
        this.jQueryelement = null
        this.options = null
      }
    }

  , enable: function () {
      this.enabled = true
    }

  , disable: function () {
      this.enabled = false
    }

  , toggleEnabled: function () {
      this.enabled = !this.enabled
    }

  , toggle: function () {
      this[this.tip().hasClass('in') ? 'hide' : 'show']()
    }

  , destroy: function () {
      this.hide().jQueryelement.off('.' + this.type).removeData(this.type)
    }

  }


 /* TOOLTIP PLUGIN DEFINITION
  * ========================= */

  jQuery.fn.tooltip = function ( option ) {
    return this.each(function () {
      var jQuerythis = jQuery(this)
        , data = jQuerythis.data('tooltip')
        , options = typeof option == 'object' && option
      if (!data) jQuerythis.data('tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  jQuery.fn.tooltip.Constructor = Tooltip

  jQuery.fn.tooltip.defaults = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover'
  , title: ''
  , delay: 0
  , html: true
  , offsetTop: 0
  }

}(window.jQuery);
/*!
 * The Final Countdown for jQuery v2.0.4 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2014 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function(factory) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], factory);
    } else {
        factory(jQuery);
    }
})(function($) {
    "use strict";
    var PRECISION = 100;
    var instances = [], matchers = [];
    matchers.push(/^[0-9]*$/.source);
    matchers.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);
    matchers.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);
    matchers = new RegExp(matchers.join("|"));
    function parseDateString(dateString) {
        if (dateString instanceof Date) {
            return dateString;
        }
        if (String(dateString).match(matchers)) {
            if (String(dateString).match(/^[0-9]*$/)) {
                dateString = Number(dateString);
            }
            if (String(dateString).match(/\-/)) {
                dateString = String(dateString).replace(/\-/g, "/");
            }
            return new Date(dateString);
        } else {
            throw new Error("Couldn't cast `" + dateString + "` to a date object.");
        }
    }
    var DIRECTIVE_KEY_MAP = {
        Y: "years",
        m: "months",
        w: "weeks",
        d: "days",
        D: "totalDays",
        H: "hours",
        M: "minutes",
        S: "seconds"
    };
    function strftime(offsetObject) {
        return function(format) {
            var directives = format.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (directives) {
                for (var i = 0, len = directives.length; i < len; ++i) {
                    var directive = directives[i].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/), regexp = new RegExp(directive[0]), modifier = directive[1] || "", plural = directive[3] || "", value = null;
                    directive = directive[2];
                    if (DIRECTIVE_KEY_MAP.hasOwnProperty(directive)) {
                        value = DIRECTIVE_KEY_MAP[directive];
                        value = Number(offsetObject[value]);
                    }
                    if (value !== null) {
                        if (modifier === "!") {
                            value = pluralize(plural, value);
                        }
                        if (modifier === "") {
                            if (value < 10) {
                                value = "0" + value.toString();
                            }
                        }
                        format = format.replace(regexp, value.toString());
                    }
                }
            }
            format = format.replace(/%%/, "%");
            return format;
        };
    }
    function pluralize(format, count) {
        var plural = "s", singular = "";
        if (format) {
            format = format.replace(/(:|;|\s)/gi, "").split(/\,/);
            if (format.length === 1) {
                plural = format[0];
            } else {
                singular = format[0];
                plural = format[1];
            }
        }
        if (Math.abs(count) === 1) {
            return singular;
        } else {
            return plural;
        }
    }
    var Countdown = function(el, finalDate, callback) {
        this.el = el;
        this.$el = $(el);
        this.interval = null;
        this.offset = {};
        this.instanceNumber = instances.length;
        instances.push(this);
        this.$el.data("countdown-instance", this.instanceNumber);
        if (callback) {
            this.$el.on("update.countdown", callback);
            this.$el.on("stoped.countdown", callback);
            this.$el.on("finish.countdown", callback);
        }
        this.setFinalDate(finalDate);
        this.start();
    };
    $.extend(Countdown.prototype, {
        start: function() {
            if (this.interval !== null) {
                clearInterval(this.interval);
            }
            var self = this;
            this.update();
            this.interval = setInterval(function() {
                self.update.call(self);
            }, PRECISION);
        },
        stop: function() {
            clearInterval(this.interval);
            this.interval = null;
            this.dispatchEvent("stoped");
        },
        pause: function() {
            this.stop.call(this);
        },
        resume: function() {
            this.start.call(this);
        },
        remove: function() {
            this.stop();
            instances[this.instanceNumber] = null;
            delete this.$el.data().countdownInstance;
        },
        setFinalDate: function(value) {
            this.finalDate = parseDateString(value);
        },
        update: function() {
            if (this.$el.closest("html").length === 0) {
                this.remove();
                return;
            }
            this.totalSecsLeft = this.finalDate.getTime() - new Date().getTime();
            this.totalSecsLeft = Math.ceil(this.totalSecsLeft / 1e3);
            this.totalSecsLeft = this.totalSecsLeft < 0 ? 0 : this.totalSecsLeft;
            this.offset = {
                seconds: this.totalSecsLeft % 60,
                minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30),
                years: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 365)
            };
            if (this.totalSecsLeft === 0) {
                this.stop();
                this.dispatchEvent("finish");
            } else {
                this.dispatchEvent("update");
            }
        },
        dispatchEvent: function(eventName) {
            var event = $.Event(eventName + ".countdown");
            event.finalDate = this.finalDate;
            event.offset = $.extend({}, this.offset);
            event.strftime = strftime(this.offset);
            this.$el.trigger(event);
        }
    });
    $.fn.countdown = function() {
        var argumentsArray = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            var instanceNumber = $(this).data("countdown-instance");
            if (instanceNumber !== undefined) {
                var instance = instances[instanceNumber], method = argumentsArray[0];
                if (Countdown.prototype.hasOwnProperty(method)) {
                    instance[method].apply(instance, argumentsArray.slice(1));
                } else if (String(method).match(/^[$A-Z_][0-9A-Z_$]*$/i) === null) {
                    instance.setFinalDate.call(instance, method);
                    instance.start();
                } else {
                    $.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, method));
                }
            } else {
                new Countdown(this, argumentsArray[0], argumentsArray[1]);
            }
        });
    };
});
/*!
 * jquery.counterup.js 1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Date: Nov 26, 2013
 */
(function( $ ){
	"use strict";

	$.fn.counterUp = function( options ) {

		// Defaults
		var settings = $.extend({
			'time': 400,
			'delay': 10
		}, options);

		return this.each(function(){

			// Store the object
			var $this = $(this);
			var $settings = settings;

			var counterUpper = function() {
				var nums = [];
				var divisions = $settings.time / $settings.delay;
				var num = $this.text();
				var isComma = /[0-9]+,[0-9]+/.test(num);
				num = num.replace(/,/g, '');
				var isInt = /^[0-9]+$/.test(num);
				var isFloat = /^[0-9]+\.[0-9]+$/.test(num);
				var decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;

				// Generate list of incremental numbers to display
				for (var i = divisions; i >= 1; i--) {

					// Preserve as int if input was int
					var newNum = parseInt(num / divisions * i);

					// Preserve float if input was float
					if (isFloat) {
						newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
					}

					// Preserve commas if input had commas
					if (isComma) {
						while (/(\d+)(\d{3})/.test(newNum.toString())) {
							newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
						}
					}

					nums.unshift(newNum);
				}

				$this.data('counterup-nums', nums);
				$this.text('0');

				// Updates the number until we're done
				var f = function() {
					$this.text($this.data('counterup-nums').shift());
					if ($this.data('counterup-nums').length) {
						setTimeout($this.data('counterup-func'), $settings.delay);
					} else {
						delete $this.data('counterup-nums');
						$this.data('counterup-nums', null);
						$this.data('counterup-func', null);
					}
				};
				$this.data('counterup-func', f);

				// Start the count up
				setTimeout($this.data('counterup-func'), $settings.delay);
			};

			// Perform counts when the element gets into view
			$this.waypoint(counterUpper, { offset: '100%', triggerOnce: true });
		});

	};

})( jQuery );

/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

;(function( $ ){

  'use strict';

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null,
      ignore: null
    };

    if(!document.getElementById('fit-vids-style')) {
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement("div");
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        'iframe[src*="player.vimeo.com"]',
        'iframe[src*="youtube.com"]',
        'iframe[src*="youtube-nocookie.com"]',
        'iframe[src*="kickstarter.com"][src*="video.html"]',
        'object',
        'embed'
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var ignoreList = '.fitvidsignore';

      if(settings.ignore) {
        ignoreList = ignoreList + ', ' + settings.ignore;
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not('object object'); // SwfObj conflict patch
      $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

      $allVideos.each(function(count){
        var $this = $(this);
        if($this.parents(ignoreList).length > 0) {
          return; // Disable FitVids on this video.
        }
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width'))))
        {
          $this.attr('height', 9);
          $this.attr('width', 16);
        }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + count;
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+'%');
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
;(function (factory) { 
if (typeof define === 'function' && define.amd) { 
 // AMD. Register as an anonymous module. 
 define(['jquery'], factory); 
 } else if (typeof exports === 'object') { 
 // Node/CommonJS 
 factory(require('jquery')); 
 } else { 
 // Browser globals 
 factory(window.jQuery || window.Zepto); 
 } 
 }(function($) { 

/*>>core*/
/**
 * 
 * Magnific Popup Core JS file
 * 
 */


/**
 * Private static constants
 */
var CLOSE_EVENT = 'Close',
	BEFORE_CLOSE_EVENT = 'BeforeClose',
	AFTER_CLOSE_EVENT = 'AfterClose',
	BEFORE_APPEND_EVENT = 'BeforeAppend',
	MARKUP_PARSE_EVENT = 'MarkupParse',
	OPEN_EVENT = 'Open',
	CHANGE_EVENT = 'Change',
	NS = 'mfp',
	EVENT_NS = '.' + NS,
	READY_CLASS = 'mfp-ready',
	REMOVING_CLASS = 'mfp-removing',
	PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


/**
 * Private vars 
 */
/*jshint -W079 */
var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
	MagnificPopup = function(){},
	_isJQ = !!(window.jQuery),
	_prevStatus,
	_window = $(window),
	_document,
	_prevContentType,
	_wrapClasses,
	_currPopupType;


/**
 * Private functions
 */
var _mfpOn = function(name, f) {
		mfp.ev.on(NS + name + EVENT_NS, f);
	},
	_getEl = function(className, appendTo, html, raw) {
		var el = document.createElement('div');
		el.className = 'mfp-'+className;
		if(html) {
			el.innerHTML = html;
		}
		if(!raw) {
			el = $(el);
			if(appendTo) {
				el.appendTo(appendTo);
			}
		} else if(appendTo) {
			appendTo.appendChild(el);
		}
		return el;
	},
	_mfpTrigger = function(e, data) {
		mfp.ev.triggerHandler(NS + e, data);

		if(mfp.st.callbacks) {
			// converts "mfpEventName" to "eventName" callback and triggers it if it's present
			e = e.charAt(0).toLowerCase() + e.slice(1);
			if(mfp.st.callbacks[e]) {
				mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
			}
		}
	},
	_getCloseBtn = function(type) {
		if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {
			mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );
			_currPopupType = type;
		}
		return mfp.currTemplate.closeBtn;
	},
	// Initialize Magnific Popup only when called at least once
	_checkInstance = function() {
		if(!$.magnificPopup.instance) {
			/*jshint -W020 */
			mfp = new MagnificPopup();
			mfp.init();
			$.magnificPopup.instance = mfp;
		}
	},
	// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
	supportsTransitions = function() {
		var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
			v = ['ms','O','Moz','Webkit']; // 'v' for vendor

		if( s['transition'] !== undefined ) {
			return true; 
		}
			
		while( v.length ) {
			if( v.pop() + 'Transition' in s ) {
				return true;
			}
		}
				
		return false;
	};



/**
 * Public functions
 */
MagnificPopup.prototype = {

	constructor: MagnificPopup,

	/**
	 * Initializes Magnific Popup plugin. 
	 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
	 */
	init: function() {
		var appVersion = navigator.appVersion;
		mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
		mfp.isAndroid = (/android/gi).test(appVersion);
		mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
		mfp.supportsTransition = supportsTransitions();

		// We disable fixed positioned lightbox on devices that don't handle it nicely.
		// If you know a better way of detecting this - let me know.
		mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );
		_document = $(document);

		mfp.popupsCache = {};
	},

	/**
	 * Opens popup
	 * @param  data [description]
	 */
	open: function(data) {

		var i;

		if(data.isObj === false) { 
			// convert jQuery collection to array to avoid conflicts later
			mfp.items = data.items.toArray();

			mfp.index = 0;
			var items = data.items,
				item;
			for(i = 0; i < items.length; i++) {
				item = items[i];
				if(item.parsed) {
					item = item.el[0];
				}
				if(item === data.el[0]) {
					mfp.index = i;
					break;
				}
			}
		} else {
			mfp.items = $.isArray(data.items) ? data.items : [data.items];
			mfp.index = data.index || 0;
		}

		// if popup is already opened - we just update the content
		if(mfp.isOpen) {
			mfp.updateItemHTML();
			return;
		}
		
		mfp.types = []; 
		_wrapClasses = '';
		if(data.mainEl && data.mainEl.length) {
			mfp.ev = data.mainEl.eq(0);
		} else {
			mfp.ev = _document;
		}

		if(data.key) {
			if(!mfp.popupsCache[data.key]) {
				mfp.popupsCache[data.key] = {};
			}
			mfp.currTemplate = mfp.popupsCache[data.key];
		} else {
			mfp.currTemplate = {};
		}



		mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data ); 
		mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

		if(mfp.st.modal) {
			mfp.st.closeOnContentClick = false;
			mfp.st.closeOnBgClick = false;
			mfp.st.showCloseBtn = false;
			mfp.st.enableEscapeKey = false;
		}
		

		// Building markup
		// main containers are created only once
		if(!mfp.bgOverlay) {

			// Dark overlay
			mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {
				mfp.close();
			});

			mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {
				if(mfp._checkIfClose(e.target)) {
					mfp.close();
				}
			});

			mfp.container = _getEl('container', mfp.wrap);
		}

		mfp.contentContainer = _getEl('content');
		if(mfp.st.preloader) {
			mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
		}


		// Initializing modules
		var modules = $.magnificPopup.modules;
		for(i = 0; i < modules.length; i++) {
			var n = modules[i];
			n = n.charAt(0).toUpperCase() + n.slice(1);
			mfp['init'+n].call(mfp);
		}
		_mfpTrigger('BeforeOpen');


		if(mfp.st.showCloseBtn) {
			// Close button
			if(!mfp.st.closeBtnInside) {
				mfp.wrap.append( _getCloseBtn() );
			} else {
				_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
					values.close_replaceWith = _getCloseBtn(item.type);
				});
				_wrapClasses += ' mfp-close-btn-in';
			}
		}

		if(mfp.st.alignTop) {
			_wrapClasses += ' mfp-align-top';
		}

	

		if(mfp.fixedContentPos) {
			mfp.wrap.css({
				overflow: mfp.st.overflowY,
				overflowX: 'hidden',
				overflowY: mfp.st.overflowY
			});
		} else {
			mfp.wrap.css({ 
				top: _window.scrollTop(),
				position: 'absolute'
			});
		}
		if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {
			mfp.bgOverlay.css({
				height: _document.height(),
				position: 'absolute'
			});
		}

		

		if(mfp.st.enableEscapeKey) {
			// Close on ESC key
			_document.on('keyup' + EVENT_NS, function(e) {
				if(e.keyCode === 27) {
					mfp.close();
				}
			});
		}

		_window.on('resize' + EVENT_NS, function() {
			mfp.updateSize();
		});


		if(!mfp.st.closeOnContentClick) {
			_wrapClasses += ' mfp-auto-cursor';
		}
		
		if(_wrapClasses)
			mfp.wrap.addClass(_wrapClasses);


		// this triggers recalculation of layout, so we get it once to not to trigger twice
		var windowHeight = mfp.wH = _window.height();

		
		var windowStyles = {};

		if( mfp.fixedContentPos ) {
            if(mfp._hasScrollBar(windowHeight)){
                var s = mfp._getScrollbarSize();
                if(s) {
                    windowStyles.marginRight = s;
                }
            }
        }

		if(mfp.fixedContentPos) {
			if(!mfp.isIE7) {
				windowStyles.overflow = 'hidden';
			} else {
				// ie7 double-scroll bug
				$('body, html').css('overflow', 'hidden');
			}
		}

		
		
		var classesToadd = mfp.st.mainClass;
		if(mfp.isIE7) {
			classesToadd += ' mfp-ie7';
		}
		if(classesToadd) {
			mfp._addClassToMFP( classesToadd );
		}

		// add content
		mfp.updateItemHTML();

		_mfpTrigger('BuildControls');

		// remove scrollbar, add margin e.t.c
		$('html').css(windowStyles);
		
		// add everything to DOM
		mfp.bgOverlay.add(mfp.wrap).prependTo( mfp.st.prependTo || $(document.body) );

		// Save last focused element
		mfp._lastFocusedEl = document.activeElement;
		
		// Wait for next cycle to allow CSS transition
		setTimeout(function() {
			
			if(mfp.content) {
				mfp._addClassToMFP(READY_CLASS);
				mfp._setFocus();
			} else {
				// if content is not defined (not loaded e.t.c) we add class only for BG
				mfp.bgOverlay.addClass(READY_CLASS);
			}
			
			// Trap the focus in popup
			_document.on('focusin' + EVENT_NS, mfp._onFocusIn);

		}, 16);

		mfp.isOpen = true;
		mfp.updateSize(windowHeight);
		_mfpTrigger(OPEN_EVENT);

		return data;
	},

	/**
	 * Closes the popup
	 */
	close: function() {
		if(!mfp.isOpen) return;
		_mfpTrigger(BEFORE_CLOSE_EVENT);

		mfp.isOpen = false;
		// for CSS3 animation
		if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {
			mfp._addClassToMFP(REMOVING_CLASS);
			setTimeout(function() {
				mfp._close();
			}, mfp.st.removalDelay);
		} else {
			mfp._close();
		}
	},

	/**
	 * Helper for close() function
	 */
	_close: function() {
		_mfpTrigger(CLOSE_EVENT);

		var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

		mfp.bgOverlay.detach();
		mfp.wrap.detach();
		mfp.container.empty();

		if(mfp.st.mainClass) {
			classesToRemove += mfp.st.mainClass + ' ';
		}

		mfp._removeClassFromMFP(classesToRemove);

		if(mfp.fixedContentPos) {
			var windowStyles = {marginRight: ''};
			if(mfp.isIE7) {
				$('body, html').css('overflow', '');
			} else {
				windowStyles.overflow = '';
			}
			$('html').css(windowStyles);
		}
		
		_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
		mfp.ev.off(EVENT_NS);

		// clean up DOM elements that aren't removed
		mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
		mfp.bgOverlay.attr('class', 'mfp-bg');
		mfp.container.attr('class', 'mfp-container');

		// remove close button from target element
		if(mfp.st.showCloseBtn &&
		(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
			if(mfp.currTemplate.closeBtn)
				mfp.currTemplate.closeBtn.detach();
		}


		if(mfp.st.autoFocusLast && mfp._lastFocusedEl) {
			$(mfp._lastFocusedEl).focus(); // put tab focus back
		}
		mfp.currItem = null;	
		mfp.content = null;
		mfp.currTemplate = null;
		mfp.prevHeight = 0;

		_mfpTrigger(AFTER_CLOSE_EVENT);
	},
	
	updateSize: function(winHeight) {

		if(mfp.isIOS) {
			// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
			var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
			var height = window.innerHeight * zoomLevel;
			mfp.wrap.css('height', height);
			mfp.wH = height;
		} else {
			mfp.wH = winHeight || _window.height();
		}
		// Fixes #84: popup incorrectly positioned with position:relative on body
		if(!mfp.fixedContentPos) {
			mfp.wrap.css('height', mfp.wH);
		}

		_mfpTrigger('Resize');

	},

	/**
	 * Set content of popup based on current index
	 */
	updateItemHTML: function() {
		var item = mfp.items[mfp.index];

		// Detach and perform modifications
		mfp.contentContainer.detach();

		if(mfp.content)
			mfp.content.detach();

		if(!item.parsed) {
			item = mfp.parseEl( mfp.index );
		}

		var type = item.type;

		_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
		// BeforeChange event works like so:
		// _mfpOn('BeforeChange', function(e, prevType, newType) { });

		mfp.currItem = item;

		if(!mfp.currTemplate[type]) {
			var markup = mfp.st[type] ? mfp.st[type].markup : false;

			// allows to modify markup
			_mfpTrigger('FirstMarkupParse', markup);

			if(markup) {
				mfp.currTemplate[type] = $(markup);
			} else {
				// if there is no markup found we just define that template is parsed
				mfp.currTemplate[type] = true;
			}
		}

		if(_prevContentType && _prevContentType !== item.type) {
			mfp.container.removeClass('mfp-'+_prevContentType+'-holder');
		}

		var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
		mfp.appendContent(newContent, type);

		item.preloaded = true;

		_mfpTrigger(CHANGE_EVENT, item);
		_prevContentType = item.type;

		// Append container back after its content changed
		mfp.container.prepend(mfp.contentContainer);

		_mfpTrigger('AfterChange');
	},


	/**
	 * Set HTML content of popup
	 */
	appendContent: function(newContent, type) {
		mfp.content = newContent;

		if(newContent) {
			if(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
				mfp.currTemplate[type] === true) {
				// if there is no markup, we just append close button element inside
				if(!mfp.content.find('.mfp-close').length) {
					mfp.content.append(_getCloseBtn());
				}
			} else {
				mfp.content = newContent;
			}
		} else {
			mfp.content = '';
		}

		_mfpTrigger(BEFORE_APPEND_EVENT);
		mfp.container.addClass('mfp-'+type+'-holder');

		mfp.contentContainer.append(mfp.content);
	},


	/**
	 * Creates Magnific Popup data object based on given data
	 * @param  {int} index Index of item to parse
	 */
	parseEl: function(index) {
		var item = mfp.items[index],
			type;

		if(item.tagName) {
			item = { el: $(item) };
		} else {
			type = item.type;
			item = { data: item, src: item.src };
		}

		if(item.el) {
			var types = mfp.types;

			// check for 'mfp-TYPE' class
			for(var i = 0; i < types.length; i++) {
				if( item.el.hasClass('mfp-'+types[i]) ) {
					type = types[i];
					break;
				}
			}

			item.src = item.el.attr('data-mfp-src');
			if(!item.src) {
				item.src = item.el.attr('href');
			}
		}

		item.type = type || mfp.st.type || 'inline';
		item.index = index;
		item.parsed = true;
		mfp.items[index] = item;
		_mfpTrigger('ElementParse', item);

		return mfp.items[index];
	},


	/**
	 * Initializes single popup or a group of popups
	 */
	addGroup: function(el, options) {
		var eHandler = function(e) {
			e.mfpEl = this;
			mfp._openClick(e, el, options);
		};

		if(!options) {
			options = {};
		}

		var eName = 'click.magnificPopup';
		options.mainEl = el;

		if(options.items) {
			options.isObj = true;
			el.off(eName).on(eName, eHandler);
		} else {
			options.isObj = false;
			if(options.delegate) {
				el.off(eName).on(eName, options.delegate , eHandler);
			} else {
				options.items = el;
				el.off(eName).on(eName, eHandler);
			}
		}
	},
	_openClick: function(e, el, options) {
		var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


		if(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ) ) {
			return;
		}

		var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

		if(disableOn) {
			if($.isFunction(disableOn)) {
				if( !disableOn.call(mfp) ) {
					return true;
				}
			} else { // else it's number
				if( _window.width() < disableOn ) {
					return true;
				}
			}
		}

		if(e.type) {
			e.preventDefault();

			// This will prevent popup from closing if element is inside and popup is already opened
			if(mfp.isOpen) {
				e.stopPropagation();
			}
		}

		options.el = $(e.mfpEl);
		if(options.delegate) {
			options.items = el.find(options.delegate);
		}
		mfp.open(options);
	},


	/**
	 * Updates text on preloader
	 */
	updateStatus: function(status, text) {

		if(mfp.preloader) {
			if(_prevStatus !== status) {
				mfp.container.removeClass('mfp-s-'+_prevStatus);
			}

			if(!text && status === 'loading') {
				text = mfp.st.tLoading;
			}

			var data = {
				status: status,
				text: text
			};
			// allows to modify status
			_mfpTrigger('UpdateStatus', data);

			status = data.status;
			text = data.text;

			mfp.preloader.html(text);

			mfp.preloader.find('a').on('click', function(e) {
				e.stopImmediatePropagation();
			});

			mfp.container.addClass('mfp-s-'+status);
			_prevStatus = status;
		}
	},


	/*
		"Private" helpers that aren't private at all
	 */
	// Check to close popup or not
	// "target" is an element that was clicked
	_checkIfClose: function(target) {

		if($(target).hasClass(PREVENT_CLOSE_CLASS)) {
			return;
		}

		var closeOnContent = mfp.st.closeOnContentClick;
		var closeOnBg = mfp.st.closeOnBgClick;

		if(closeOnContent && closeOnBg) {
			return true;
		} else {

			// We close the popup if click is on close button or on preloader. Or if there is no content.
			if(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {
				return true;
			}

			// if click is outside the content
			if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {
				if(closeOnBg) {
					// last check, if the clicked element is in DOM, (in case it's removed onclick)
					if( $.contains(document, target) ) {
						return true;
					}
				}
			} else if(closeOnContent) {
				return true;
			}

		}
		return false;
	},
	_addClassToMFP: function(cName) {
		mfp.bgOverlay.addClass(cName);
		mfp.wrap.addClass(cName);
	},
	_removeClassFromMFP: function(cName) {
		this.bgOverlay.removeClass(cName);
		mfp.wrap.removeClass(cName);
	},
	_hasScrollBar: function(winHeight) {
		return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );
	},
	_setFocus: function() {
		(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
	},
	_onFocusIn: function(e) {
		if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {
			mfp._setFocus();
			return false;
		}
	},
	_parseMarkup: function(template, values, item) {
		var arr;
		if(item.data) {
			values = $.extend(item.data, values);
		}
		_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );

		$.each(values, function(key, value) {
			if(value === undefined || value === false) {
				return true;
			}
			arr = key.split('_');
			if(arr.length > 1) {
				var el = template.find(EVENT_NS + '-'+arr[0]);

				if(el.length > 0) {
					var attr = arr[1];
					if(attr === 'replaceWith') {
						if(el[0] !== value[0]) {
							el.replaceWith(value);
						}
					} else if(attr === 'img') {
						if(el.is('img')) {
							el.attr('src', value);
						} else {
							el.replaceWith( $('<img>').attr('src', value).attr('class', el.attr('class')) );
						}
					} else {
						el.attr(arr[1], value);
					}
				}

			} else {
				template.find(EVENT_NS + '-'+key).html(value);
			}
		});
	},

	_getScrollbarSize: function() {
		// thx David
		if(mfp.scrollbarSize === undefined) {
			var scrollDiv = document.createElement("div");
			scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
			document.body.appendChild(scrollDiv);
			mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
			document.body.removeChild(scrollDiv);
		}
		return mfp.scrollbarSize;
	}

}; /* MagnificPopup core prototype end */




/**
 * Public static functions
 */
$.magnificPopup = {
	instance: null,
	proto: MagnificPopup.prototype,
	modules: [],

	open: function(options, index) {
		_checkInstance();

		if(!options) {
			options = {};
		} else {
			options = $.extend(true, {}, options);
		}

		options.isObj = true;
		options.index = index || 0;
		return this.instance.open(options);
	},

	close: function() {
		return $.magnificPopup.instance && $.magnificPopup.instance.close();
	},

	registerModule: function(name, module) {
		if(module.options) {
			$.magnificPopup.defaults[name] = module.options;
		}
		$.extend(this.proto, module.proto);
		this.modules.push(name);
	},

	defaults: {

		// Info about options is in docs:
		// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

		disableOn: 0,

		key: null,

		midClick: false,

		mainClass: '',

		preloader: true,

		focus: '', // CSS selector of input to focus after popup is opened

		closeOnContentClick: false,

		closeOnBgClick: true,

		closeBtnInside: true,

		showCloseBtn: true,

		enableEscapeKey: true,

		modal: false,

		alignTop: false,

		removalDelay: 0,

		prependTo: null,

		fixedContentPos: 'auto',

		fixedBgPos: 'auto',

		overflowY: 'auto',

		closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',

		tClose: 'Close (Esc)',

		tLoading: 'Loading...',

		autoFocusLast: true

	}
};



$.fn.magnificPopup = function(options) {
	_checkInstance();

	var jqEl = $(this);

	// We call some API method of first param is a string
	if (typeof options === "string" ) {

		if(options === 'open') {
			var items,
				itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
				index = parseInt(arguments[1], 10) || 0;

			if(itemOpts.items) {
				items = itemOpts.items[index];
			} else {
				items = jqEl;
				if(itemOpts.delegate) {
					items = items.find(itemOpts.delegate);
				}
				items = items.eq( index );
			}
			mfp._openClick({mfpEl:items}, jqEl, itemOpts);
		} else {
			if(mfp.isOpen)
				mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
		}

	} else {
		// clone options obj
		options = $.extend(true, {}, options);

		/*
		 * As Zepto doesn't support .data() method for objects
		 * and it works only in normal browsers
		 * we assign "options" object directly to the DOM element. FTW!
		 */
		if(_isJQ) {
			jqEl.data('magnificPopup', options);
		} else {
			jqEl[0].magnificPopup = options;
		}

		mfp.addGroup(jqEl, options);

	}
	return jqEl;
};

/*>>core*/

/*>>inline*/

var INLINE_NS = 'inline',
	_hiddenClass,
	_inlinePlaceholder,
	_lastInlineElement,
	_putInlineElementsBack = function() {
		if(_lastInlineElement) {
			_inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();
			_lastInlineElement = null;
		}
	};

$.magnificPopup.registerModule(INLINE_NS, {
	options: {
		hiddenClass: 'hide', // will be appended with `mfp-` prefix
		markup: '',
		tNotFound: 'Content not found'
	},
	proto: {

		initInline: function() {
			mfp.types.push(INLINE_NS);

			_mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {
				_putInlineElementsBack();
			});
		},

		getInline: function(item, template) {

			_putInlineElementsBack();

			if(item.src) {
				var inlineSt = mfp.st.inline,
					el = $(item.src);

				if(el.length) {

					// If target element has parent - we replace it with placeholder and put it back after popup is closed
					var parent = el[0].parentNode;
					if(parent && parent.tagName) {
						if(!_inlinePlaceholder) {
							_hiddenClass = inlineSt.hiddenClass;
							_inlinePlaceholder = _getEl(_hiddenClass);
							_hiddenClass = 'mfp-'+_hiddenClass;
						}
						// replace target inline element with placeholder
						_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
					}

					mfp.updateStatus('ready');
				} else {
					mfp.updateStatus('error', inlineSt.tNotFound);
					el = $('<div>');
				}

				item.inlineElement = el;
				return el;
			}

			mfp.updateStatus('ready');
			mfp._parseMarkup(template, {}, item);
			return template;
		}
	}
});

/*>>inline*/

/*>>ajax*/
var AJAX_NS = 'ajax',
	_ajaxCur,
	_removeAjaxCursor = function() {
		if(_ajaxCur) {
			$(document.body).removeClass(_ajaxCur);
		}
	},
	_destroyAjaxRequest = function() {
		_removeAjaxCursor();
		if(mfp.req) {
			mfp.req.abort();
		}
	};

$.magnificPopup.registerModule(AJAX_NS, {

	options: {
		settings: null,
		cursor: 'mfp-ajax-cur',
		tError: '<a href="%url%">The content</a> could not be loaded.'
	},

	proto: {
		initAjax: function() {
			mfp.types.push(AJAX_NS);
			_ajaxCur = mfp.st.ajax.cursor;

			_mfpOn(CLOSE_EVENT+'.'+AJAX_NS, _destroyAjaxRequest);
			_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
		},
		getAjax: function(item) {

			if(_ajaxCur) {
				$(document.body).addClass(_ajaxCur);
			}

			mfp.updateStatus('loading');

			var opts = $.extend({
				url: item.src,
				success: function(data, textStatus, jqXHR) {
					var temp = {
						data:data,
						xhr:jqXHR
					};

					_mfpTrigger('ParseAjax', temp);

					mfp.appendContent( $(temp.data), AJAX_NS );

					item.finished = true;

					_removeAjaxCursor();

					mfp._setFocus();

					setTimeout(function() {
						mfp.wrap.addClass(READY_CLASS);
					}, 16);

					mfp.updateStatus('ready');

					_mfpTrigger('AjaxContentAdded');
				},
				error: function() {
					_removeAjaxCursor();
					item.finished = item.loadError = true;
					mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
				}
			}, mfp.st.ajax.settings);

			mfp.req = $.ajax(opts);

			return '';
		}
	}
});

/*>>ajax*/

/*>>image*/
var _imgInterval,
	_getTitle = function(item) {
		if(item.data && item.data.title !== undefined)
			return item.data.title;

		var src = mfp.st.image.titleSrc;

		if(src) {
			if($.isFunction(src)) {
				return src.call(mfp, item);
			} else if(item.el) {
				return item.el.attr(src) || '';
			}
		}
		return '';
	};

$.magnificPopup.registerModule('image', {

	options: {
		markup: '<div class="mfp-figure">'+
					'<div class="mfp-close"></div>'+
					'<figure>'+
						'<div class="mfp-img"></div>'+
						'<figcaption>'+
							'<div class="mfp-bottom-bar">'+
								'<div class="mfp-title"></div>'+
								'<div class="mfp-counter"></div>'+
							'</div>'+
						'</figcaption>'+
					'</figure>'+
				'</div>',
		cursor: 'mfp-zoom-out-cur',
		titleSrc: 'title',
		verticalFit: true,
		tError: '<a href="%url%">The image</a> could not be loaded.'
	},

	proto: {
		initImage: function() {
			var imgSt = mfp.st.image,
				ns = '.image';

			mfp.types.push('image');

			_mfpOn(OPEN_EVENT+ns, function() {
				if(mfp.currItem.type === 'image' && imgSt.cursor) {
					$(document.body).addClass(imgSt.cursor);
				}
			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(imgSt.cursor) {
					$(document.body).removeClass(imgSt.cursor);
				}
				_window.off('resize' + EVENT_NS);
			});

			_mfpOn('Resize'+ns, mfp.resizeImage);
			if(mfp.isLowIE) {
				_mfpOn('AfterChange', mfp.resizeImage);
			}
		},
		resizeImage: function() {
			var item = mfp.currItem;
			if(!item || !item.img) return;

			if(mfp.st.image.verticalFit) {
				var decr = 0;
				// fix box-sizing in ie7/8
				if(mfp.isLowIE) {
					decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'),10);
				}
				item.img.css('max-height', mfp.wH-decr);
			}
		},
		_onImageHasSize: function(item) {
			if(item.img) {

				item.hasSize = true;

				if(_imgInterval) {
					clearInterval(_imgInterval);
				}

				item.isCheckingImgSize = false;

				_mfpTrigger('ImageHasSize', item);

				if(item.imgHidden) {
					if(mfp.content)
						mfp.content.removeClass('mfp-loading');

					item.imgHidden = false;
				}

			}
		},

		/**
		 * Function that loops until the image has size to display elements that rely on it asap
		 */
		findImageSize: function(item) {

			var counter = 0,
				img = item.img[0],
				mfpSetInterval = function(delay) {

					if(_imgInterval) {
						clearInterval(_imgInterval);
					}
					// decelerating interval that checks for size of an image
					_imgInterval = setInterval(function() {
						if(img.naturalWidth > 0) {
							mfp._onImageHasSize(item);
							return;
						}

						if(counter > 200) {
							clearInterval(_imgInterval);
						}

						counter++;
						if(counter === 3) {
							mfpSetInterval(10);
						} else if(counter === 40) {
							mfpSetInterval(50);
						} else if(counter === 100) {
							mfpSetInterval(500);
						}
					}, delay);
				};

			mfpSetInterval(1);
		},

		getImage: function(item, template) {

			var guard = 0,

				// image load complete handler
				onLoadComplete = function() {
					if(item) {
						if (item.img[0].complete) {
							item.img.off('.mfploader');

							if(item === mfp.currItem){
								mfp._onImageHasSize(item);

								mfp.updateStatus('ready');
							}

							item.hasSize = true;
							item.loaded = true;

							_mfpTrigger('ImageLoadComplete');

						}
						else {
							// if image complete check fails 200 times (20 sec), we assume that there was an error.
							guard++;
							if(guard < 200) {
								setTimeout(onLoadComplete,100);
							} else {
								onLoadError();
							}
						}
					}
				},

				// image error handler
				onLoadError = function() {
					if(item) {
						item.img.off('.mfploader');
						if(item === mfp.currItem){
							mfp._onImageHasSize(item);
							mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
						}

						item.hasSize = true;
						item.loaded = true;
						item.loadError = true;
					}
				},
				imgSt = mfp.st.image;


			var el = template.find('.mfp-img');
			if(el.length) {
				var img = document.createElement('img');
				img.className = 'mfp-img';
				if(item.el && item.el.find('img').length) {
					img.alt = item.el.find('img').attr('alt');
				}
				item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
				img.src = item.src;

				// without clone() "error" event is not firing when IMG is replaced by new IMG
				// TODO: find a way to avoid such cloning
				if(el.is('img')) {
					item.img = item.img.clone();
				}

				img = item.img[0];
				if(img.naturalWidth > 0) {
					item.hasSize = true;
				} else if(!img.width) {
					item.hasSize = false;
				}
			}

			mfp._parseMarkup(template, {
				title: _getTitle(item),
				img_replaceWith: item.img
			}, item);

			mfp.resizeImage();

			if(item.hasSize) {
				if(_imgInterval) clearInterval(_imgInterval);

				if(item.loadError) {
					template.addClass('mfp-loading');
					mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
				} else {
					template.removeClass('mfp-loading');
					mfp.updateStatus('ready');
				}
				return template;
			}

			mfp.updateStatus('loading');
			item.loading = true;

			if(!item.hasSize) {
				item.imgHidden = true;
				template.addClass('mfp-loading');
				mfp.findImageSize(item);
			}

			return template;
		}
	}
});

/*>>image*/

/*>>zoom*/
var hasMozTransform,
	getHasMozTransform = function() {
		if(hasMozTransform === undefined) {
			hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
		}
		return hasMozTransform;
	};

$.magnificPopup.registerModule('zoom', {

	options: {
		enabled: false,
		easing: 'ease-in-out',
		duration: 300,
		opener: function(element) {
			return element.is('img') ? element : element.find('img');
		}
	},

	proto: {

		initZoom: function() {
			var zoomSt = mfp.st.zoom,
				ns = '.zoom',
				image;

			if(!zoomSt.enabled || !mfp.supportsTransition) {
				return;
			}

			var duration = zoomSt.duration,
				getElToAnimate = function(image) {
					var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
						transition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,
						cssObj = {
							position: 'fixed',
							zIndex: 9999,
							left: 0,
							top: 0,
							'-webkit-backface-visibility': 'hidden'
						},
						t = 'transition';

					cssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;

					newImg.css(cssObj);
					return newImg;
				},
				showMainContent = function() {
					mfp.content.css('visibility', 'visible');
				},
				openTimeout,
				animatedImg;

			_mfpOn('BuildControls'+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);
					mfp.content.css('visibility', 'hidden');

					// Basically, all code below does is clones existing image, puts in on top of the current one and animated it

					image = mfp._getItemToZoom();

					if(!image) {
						showMainContent();
						return;
					}

					animatedImg = getElToAnimate(image);

					animatedImg.css( mfp._getOffset() );

					mfp.wrap.append(animatedImg);

					openTimeout = setTimeout(function() {
						animatedImg.css( mfp._getOffset( true ) );
						openTimeout = setTimeout(function() {

							showMainContent();

							setTimeout(function() {
								animatedImg.remove();
								image = animatedImg = null;
								_mfpTrigger('ZoomAnimationEnded');
							}, 16); // avoid blink when switching images

						}, duration); // this timeout equals animation duration

					}, 16); // by adding this timeout we avoid short glitch at the beginning of animation


					// Lots of timeouts...
				}
			});
			_mfpOn(BEFORE_CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);

					mfp.st.removalDelay = duration;

					if(!image) {
						image = mfp._getItemToZoom();
						if(!image) {
							return;
						}
						animatedImg = getElToAnimate(image);
					}

					animatedImg.css( mfp._getOffset(true) );
					mfp.wrap.append(animatedImg);
					mfp.content.css('visibility', 'hidden');

					setTimeout(function() {
						animatedImg.css( mfp._getOffset() );
					}, 16);
				}

			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {
					showMainContent();
					if(animatedImg) {
						animatedImg.remove();
					}
					image = null;
				}
			});
		},

		_allowZoom: function() {
			return mfp.currItem.type === 'image';
		},

		_getItemToZoom: function() {
			if(mfp.currItem.hasSize) {
				return mfp.currItem.img;
			} else {
				return false;
			}
		},

		// Get element postion relative to viewport
		_getOffset: function(isLarge) {
			var el;
			if(isLarge) {
				el = mfp.currItem.img;
			} else {
				el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
			}

			var offset = el.offset();
			var paddingTop = parseInt(el.css('padding-top'),10);
			var paddingBottom = parseInt(el.css('padding-bottom'),10);
			offset.top -= ( $(window).scrollTop() - paddingTop );


			/*

			Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

			 */
			var obj = {
				width: el.width(),
				// fix Zepto height+padding issue
				height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
			};

			// I hate to do this, but there is no another option
			if( getHasMozTransform() ) {
				obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
			} else {
				obj.left = offset.left;
				obj.top = offset.top;
			}
			return obj;
		}

	}
});



/*>>zoom*/

/*>>iframe*/

var IFRAME_NS = 'iframe',
	_emptyPage = '//about:blank',

	_fixIframeBugs = function(isShowing) {
		if(mfp.currTemplate[IFRAME_NS]) {
			var el = mfp.currTemplate[IFRAME_NS].find('iframe');
			if(el.length) {
				// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
				if(!isShowing) {
					el[0].src = _emptyPage;
				}

				// IE8 black screen bug fix
				if(mfp.isIE8) {
					el.css('display', isShowing ? 'block' : 'none');
				}
			}
		}
	};

$.magnificPopup.registerModule(IFRAME_NS, {

	options: {
		markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+
				'</div>',

		srcAction: 'iframe_src',

		// we don't care and support only one default type of URL by default
		patterns: {
			youtube: {
				index: 'youtube.com',
				id: 'v=',
				src: '//www.youtube.com/embed/%id%?autoplay=1'
			},
			vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			},
			gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			}
		}
	},

	proto: {
		initIframe: function() {
			mfp.types.push(IFRAME_NS);

			_mfpOn('BeforeChange', function(e, prevType, newType) {
				if(prevType !== newType) {
					if(prevType === IFRAME_NS) {
						_fixIframeBugs(); // iframe if removed
					} else if(newType === IFRAME_NS) {
						_fixIframeBugs(true); // iframe is showing
					}
				}// else {
					// iframe source is switched, don't do anything
				//}
			});

			_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
				_fixIframeBugs();
			});
		},

		getIframe: function(item, template) {
			var embedSrc = item.src;
			var iframeSt = mfp.st.iframe;

			$.each(iframeSt.patterns, function() {
				if(embedSrc.indexOf( this.index ) > -1) {
					if(this.id) {
						if(typeof this.id === 'string') {
							embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);
						} else {
							embedSrc = this.id.call( this, embedSrc );
						}
					}
					embedSrc = this.src.replace('%id%', embedSrc );
					return false; // break;
				}
			});

			var dataObj = {};
			if(iframeSt.srcAction) {
				dataObj[iframeSt.srcAction] = embedSrc;
			}
			mfp._parseMarkup(template, dataObj, item);

			mfp.updateStatus('ready');

			return template;
		}
	}
});



/*>>iframe*/

/*>>gallery*/
/**
 * Get looped index depending on number of slides
 */
var _getLoopedId = function(index) {
		var numSlides = mfp.items.length;
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	_replaceCurrTotal = function(text, curr, total) {
		return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
	};

$.magnificPopup.registerModule('gallery', {

	options: {
		enabled: false,
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
		preload: [0,2],
		navigateByImgClick: true,
		arrows: true,

		tPrev: 'Previous (Left arrow key)',
		tNext: 'Next (Right arrow key)',
		tCounter: '%curr% of %total%'
	},

	proto: {
		initGallery: function() {

			var gSt = mfp.st.gallery,
				ns = '.mfp-gallery';

			mfp.direction = true; // true - next, false - prev

			if(!gSt || !gSt.enabled ) return false;

			_wrapClasses += ' mfp-gallery';

			_mfpOn(OPEN_EVENT+ns, function() {

				if(gSt.navigateByImgClick) {
					mfp.wrap.on('click'+ns, '.mfp-img', function() {
						if(mfp.items.length > 1) {
							mfp.next();
							return false;
						}
					});
				}

				_document.on('keydown'+ns, function(e) {
					if (e.keyCode === 37) {
						mfp.prev();
					} else if (e.keyCode === 39) {
						mfp.next();
					}
				});
			});

			_mfpOn('UpdateStatus'+ns, function(e, data) {
				if(data.text) {
					data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
				}
			});

			_mfpOn(MARKUP_PARSE_EVENT+ns, function(e, element, values, item) {
				var l = mfp.items.length;
				values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
			});

			_mfpOn('BuildControls' + ns, function() {
				if(mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
					var markup = gSt.arrowMarkup,
						arrowLeft = mfp.arrowLeft = $( markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left') ).addClass(PREVENT_CLOSE_CLASS),
						arrowRight = mfp.arrowRight = $( markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right') ).addClass(PREVENT_CLOSE_CLASS);

					arrowLeft.click(function() {
						mfp.prev();
					});
					arrowRight.click(function() {
						mfp.next();
					});

					mfp.container.append(arrowLeft.add(arrowRight));
				}
			});

			_mfpOn(CHANGE_EVENT+ns, function() {
				if(mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

				mfp._preloadTimeout = setTimeout(function() {
					mfp.preloadNearbyImages();
					mfp._preloadTimeout = null;
				}, 16);
			});


			_mfpOn(CLOSE_EVENT+ns, function() {
				_document.off(ns);
				mfp.wrap.off('click'+ns);
				mfp.arrowRight = mfp.arrowLeft = null;
			});

		},
		next: function() {
			mfp.direction = true;
			mfp.index = _getLoopedId(mfp.index + 1);
			mfp.updateItemHTML();
		},
		prev: function() {
			mfp.direction = false;
			mfp.index = _getLoopedId(mfp.index - 1);
			mfp.updateItemHTML();
		},
		goTo: function(newIndex) {
			mfp.direction = (newIndex >= mfp.index);
			mfp.index = newIndex;
			mfp.updateItemHTML();
		},
		preloadNearbyImages: function() {
			var p = mfp.st.gallery.preload,
				preloadBefore = Math.min(p[0], mfp.items.length),
				preloadAfter = Math.min(p[1], mfp.items.length),
				i;

			for(i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
				mfp._preloadItem(mfp.index+i);
			}
			for(i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
				mfp._preloadItem(mfp.index-i);
			}
		},
		_preloadItem: function(index) {
			index = _getLoopedId(index);

			if(mfp.items[index].preloaded) {
				return;
			}

			var item = mfp.items[index];
			if(!item.parsed) {
				item = mfp.parseEl( index );
			}

			_mfpTrigger('LazyLoad', item);

			if(item.type === 'image') {
				item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
					item.hasSize = true;
				}).on('error.mfploader', function() {
					item.hasSize = true;
					item.loadError = true;
					_mfpTrigger('LazyLoadError', item);
				}).attr('src', item.src);
			}


			item.preloaded = true;
		}
	}
});

/*>>gallery*/

/*>>retina*/

var RETINA_NS = 'retina';

$.magnificPopup.registerModule(RETINA_NS, {
	options: {
		replaceSrc: function(item) {
			return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
		},
		ratio: 1 // Function or number.  Set to 1 to disable.
	},
	proto: {
		initRetina: function() {
			if(window.devicePixelRatio > 1) {

				var st = mfp.st.retina,
					ratio = st.ratio;

				ratio = !isNaN(ratio) ? ratio : ratio();

				if(ratio > 1) {
					_mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
						item.img.css({
							'max-width': item.img[0].naturalWidth / ratio,
							'width': '100%'
						});
					});
					_mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
						item.src = st.replaceSrc(item, ratio);
					});
				}
			}

		}
	}
});

/*>>retina*/
 _checkInstance(); }));
/**
 * jQuery Tabs plugin 1.0.0
 *
 * @author Theme Alien
 */
( function( $ ) {
	$.fn.tabs = function() {
		return this.each( function() {
			var $element = $( this ),
				$nav     = $element.find( '.tabs-nav' ),
				$tabs    = $nav.find( 'a' ),
				$panels  = $element.find( '.tabs-panel' );

			$tabs.filter( ':first' ).addClass( 'active' );
			$tabs.filter( ':first' ).parent().addClass( 'active' );
			$panels.filter( ':first' ).addClass( 'active' );

			$tabs.on( 'click', function( e ) {
				e.preventDefault();

				var $tab = $( this ),
					index = $tab.parent().index();

				if ( $tab.hasClass( 'active' ) ) {
					return;
				}

				$tabs.removeClass( 'active' );
				$tab.addClass( 'active' );
				$nav.find( 'li' ).removeClass( 'active' );
				$tab.parent().addClass( 'active' );
				$panels.removeClass( 'active' );
				$panels.filter( ':eq(' + index + ')' ).addClass( 'active' );
			} );
		} );
	}

	/* Init tabs */
	$( function() {
		$( '.tabs' ).tabs();
	} );
} )( jQuery );

/*
 *	jQuery OwlCarousel v1.31
 *
 *	Copyright (c) 2013 Bartosz Wojciechowski
 *	http://www.owlgraphic.com/owlcarousel/
 *
 *	Licensed under MIT
 *
 */

if ( typeof Object.create !== "function" ) {
	Object.create = function( obj ) {
		function F() {};
		F.prototype = obj;
		return new F();
	};
}
(function( $, window, document, undefined ) {

	var Carousel = {
		init :function(options, el){
			var base = this;

			base.$elem = $(el);

			// options passed via js override options passed via data attributes
			base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);

			base.userOptions = options;
			base.loadContent();
		},

		loadContent : function(){
			var base = this;

			if (typeof base.options.beforeInit === "function") {
				base.options.beforeInit.apply(this,[base.$elem]);
			}

			if (typeof base.options.jsonPath === "string") {
				var url = base.options.jsonPath;

				function getData(data) {
					if (typeof base.options.jsonSuccess === "function") {
						base.options.jsonSuccess.apply(this,[data]);
					} else {
						var content = "";
						for(var i in data["owl"]){
							content += data["owl"][i]["item"];
						}
						base.$elem.html(content);
					}
					base.logIn();
				}
				$.getJSON(url,getData);
			} else {
				base.logIn();
			}
		},

		logIn : function(action){
			var base = this;

			base.$elem.data("owl-originalStyles", base.$elem.attr("style"))
					  .data("owl-originalClasses", base.$elem.attr("class"));

			base.$elem.css({opacity: 0});
			base.orignalItems = base.options.items;
			base.checkBrowser();
			base.wrapperWidth = 0;
			base.checkVisible;
			base.setVars();
		},

		setVars : function(){
			var base = this;
			if(base.$elem.children().length === 0){return false;}
			base.baseClass();
			base.eventTypes();
			base.$userItems = base.$elem.children();
			base.itemsAmount = base.$userItems.length;
			base.wrapItems();
			base.$owlItems = base.$elem.find(".owl-item");
			base.$owlWrapper = base.$elem.find(".owl-wrapper");
			base.playDirection = "next";
			base.prevItem = 0;
			base.prevArr = [0];
			base.currentItem = 0;
			base.customEvents();
			base.onStartup();
		},

		onStartup : function(){
			var base = this;
			base.updateItems();
			base.calculateAll();
			base.buildControls();
			base.updateControls();
			base.response();
			base.moveEvents();
			base.stopOnHover();
			base.owlStatus();

			if(base.options.transitionStyle !== false){
				base.transitionTypes(base.options.transitionStyle);
			}
			if(base.options.autoPlay === true){
				base.options.autoPlay = 5000;
			}
			base.play();

			base.$elem.find(".owl-wrapper").css("display","block");

			if(!base.$elem.is(":visible")){
				base.watchVisibility();
			} else {
				base.$elem.css("opacity",1);
			}
			base.onstartup = false;
			base.eachMoveUpdate();
			if (typeof base.options.afterInit === "function") {
				base.options.afterInit.apply(this,[base.$elem]);
			}
		},

		eachMoveUpdate : function(){
			var base = this;

			if(base.options.lazyLoad === true){
				base.lazyLoad();
			}
			if(base.options.autoHeight === true){
				base.autoHeight();
			}
			base.onVisibleItems();

			if (typeof base.options.afterAction === "function") {
				base.options.afterAction.apply(this,[base.$elem]);
			}
		},

		updateVars : function(){
			var base = this;
			if(typeof base.options.beforeUpdate === "function") {
				base.options.beforeUpdate.apply(this,[base.$elem]);
			}
			base.watchVisibility();
			base.updateItems();
			base.calculateAll();
			base.updatePosition();
			base.updateControls();
			base.eachMoveUpdate();
			if(typeof base.options.afterUpdate === "function") {
				base.options.afterUpdate.apply(this,[base.$elem]);
			}
		},

		reload : function(elements){
			var base = this;
			setTimeout(function(){
				base.updateVars();
			},0);
		},

		watchVisibility : function(){
			var base = this;

			if(base.$elem.is(":visible") === false){
				base.$elem.css({opacity: 0});
				clearInterval(base.autoPlayInterval);
				clearInterval(base.checkVisible);
			} else {
				return false;
			}
			base.checkVisible = setInterval(function(){
				if (base.$elem.is(":visible")) {
					base.reload();
					base.$elem.animate({opacity: 1},200);
					clearInterval(base.checkVisible);
				}
			}, 500);
		},

		wrapItems : function(){
			var base = this;
			base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");
			base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
			base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
			base.$elem.css("display","block");
		},

		baseClass : function(){
			var base = this;
			var hasBaseClass = base.$elem.hasClass(base.options.baseClass);
			var hasThemeClass = base.$elem.hasClass(base.options.theme);

			if(!hasBaseClass){
				base.$elem.addClass(base.options.baseClass);
			}

			if(!hasThemeClass){
				base.$elem.addClass(base.options.theme);
			}
		},

		updateItems : function(){
			var base = this;

			if(base.options.responsive === false){
				return false;
			}
			if(base.options.singleItem === true){
				base.options.items = base.orignalItems = 1;
				base.options.itemsCustom = false;
				base.options.itemsDesktop = false;
				base.options.itemsDesktopSmall = false;
				base.options.itemsTablet = false;
				base.options.itemsTabletSmall = false;
				base.options.itemsMobile = false;
				return false;
			}

			var width = $(base.options.responsiveBaseWidth).width();

			if(width > (base.options.itemsDesktop[0] || base.orignalItems) ){
				base.options.items = base.orignalItems;
			}

			if(typeof(base.options.itemsCustom) !== 'undefined' && base.options.itemsCustom !== false){
				//Reorder array by screen size
				base.options.itemsCustom.sort(function(a,b){return a[0]-b[0];});
				for(var i in base.options.itemsCustom){
					if(typeof(base.options.itemsCustom[i]) !== 'undefined' && base.options.itemsCustom[i][0] <= width){
						base.options.items = base.options.itemsCustom[i][1];
					}
				}
			} else {

				if(width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false){
					base.options.items = base.options.itemsDesktop[1];
				}

				if(width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false){
					base.options.items = base.options.itemsDesktopSmall[1];
				}

				if(width <= base.options.itemsTablet[0]  && base.options.itemsTablet !== false){
					base.options.items = base.options.itemsTablet[1];
				}

				if(width <= base.options.itemsTabletSmall[0]  && base.options.itemsTabletSmall !== false){
					base.options.items = base.options.itemsTabletSmall[1];
				}

				if(width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false){
					base.options.items = base.options.itemsMobile[1];
				}
			}

			//if number of items is less than declared
			if(base.options.items > base.itemsAmount && base.options.itemsScaleUp === true){
				base.options.items = base.itemsAmount;
			}
		},

		response : function(){
			var base = this,
				smallDelay;
			if(base.options.responsive !== true){
				return false;
			}
			var lastWindowWidth = $(window).width();

			base.resizer = function(){
				if($(window).width() !== lastWindowWidth){
					if(base.options.autoPlay !== false){
						clearInterval(base.autoPlayInterval);
					}
					clearTimeout(smallDelay);
					smallDelay = setTimeout(function(){
						lastWindowWidth = $(window).width();
						base.updateVars();
					},base.options.responsiveRefreshRate);
				}
			};
			$(window).resize(base.resizer);
		},

		updatePosition : function(){
			var base = this;
			base.jumpTo(base.currentItem);
			if(base.options.autoPlay !== false){
				base.checkAp();
			}
		},

		appendItemsSizes : function(){
			var base = this;

			var roundPages = 0;
			var lastItem = base.itemsAmount - base.options.items;

			base.$owlItems.each(function(index){
				var $this = $(this);
				$this
					.css({"width": base.itemWidth})
					.data("owl-item",Number(index));

				if(index % base.options.items === 0 || index === lastItem){
					if(!(index > lastItem)){
						roundPages +=1;
					}
				}
				$this.data("owl-roundPages",roundPages);
			});
		},

		appendWrapperSizes : function(){
			var base = this,
				width = base.$owlItems.length * base.itemWidth,
				cssObj;

			base.options['direction']=="rtl" ? cssObj = {"right":0,direction:"rtl"} : cssObj = {"left":0};
			base.$owlWrapper.css({"width": width});
			base.$owlWrapper.css(cssObj);

			base.appendItemsSizes();
		},

		calculateAll : function(){
			var base = this;
			base.calculateWidth();
			base.appendWrapperSizes();
			base.loops();
			base.max();
		},

		calculateWidth : function(){
			var base = this;
			base.itemWidth = Math.round(base.$elem.width()/base.options.items);
		},

		max : function(){
			var base = this;
			var maximum = ((base.itemsAmount * base.itemWidth) - base.options.items * base.itemWidth) * -1;
			if(base.options.items > base.itemsAmount){
				base.maximumItem = 0;
				maximum = 0;
				base.maximumPixels = 0;
			} else {
				base.maximumItem = base.itemsAmount - base.options.items;
				base.maximumPixels = maximum;
			}
			return maximum;
		},

		min : function(){
			return 0;
		},

		loops : function(){
			var base = this;

			base.positionsInArray = [0];
			base.pagesInArray = [];
			var prev = 0;
			var elWidth = 0;

			for(var i = 0; i<base.itemsAmount; i++){
				elWidth += base.itemWidth;
				base.positionsInArray.push(-elWidth);

				if(base.options.scrollPerPage === true){
					var item = $(base.$owlItems[i]);
					var roundPageNum = item.data("owl-roundPages");
					if(roundPageNum !== prev){
						base.pagesInArray[prev] = base.positionsInArray[i];
						prev = roundPageNum;
					}
				}
			}
		},

		buildControls : function(){
			var base = this;
			if(base.options.navigation === true || base.options.pagination === true){
				base.owlControls = $("<div class=\"owl-controls\"/>").toggleClass("clickable", !base.browser.isTouch).appendTo(base.$elem);
			}
			if(base.options.pagination === true){
				base.buildPagination();
			}
			if(base.options.navigation === true){
				base.buildButtons();
			}
		},

		buildButtons : function(){
			var base = this;
			var buttonsWrapper = $("<div class=\"owl-buttons\"/>");
			base.owlControls.append(buttonsWrapper);

			base.buttonPrev = $("<div/>",{
				"class" : "owl-prev",
				"html" : base.options.navigationText[0] || ""
				});

			base.buttonNext = $("<div/>",{
				"class" : "owl-next",
				"html" : base.options.navigationText[1] || ""
				});

			buttonsWrapper
			.append(base.buttonPrev)
			.append(base.buttonNext);

			buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function(event){
				event.preventDefault();
			});

			buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function(event){
				event.preventDefault();
				if($(this).hasClass("owl-next")){
					base.next();
				} else{
					base.prev();
				}
			});
		},

		buildPagination : function(){
			var base = this;

			base.paginationWrapper = $("<div class=\"owl-pagination\"/>");
			base.owlControls.append(base.paginationWrapper);

			base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(event){
				event.preventDefault();
				if(Number($(this).data("owl-page")) !== base.currentItem){
					base.goTo( Number($(this).data("owl-page")), true);
				}
			});
		},

		updatePagination : function(){
			var base = this;
			if(base.options.pagination === false){
				return false;
			}

			base.paginationWrapper.html("");

			var counter = 0;
			var lastPage = base.itemsAmount - base.itemsAmount % base.options.items;

			for(var i = 0; i<base.itemsAmount; i++){
				if(i % base.options.items === 0){
					counter +=1;
					if(lastPage === i){
						var lastItem = base.itemsAmount - base.options.items;
					}
					var paginationButton = $("<div/>",{
						"class" : "owl-page"
						});
					var paginationButtonInner = $("<span></span>",{
						"text": base.options.paginationNumbers === true ? counter : "",
						"class": base.options.paginationNumbers === true ? "owl-numbers" : ""
					});
					paginationButton.append(paginationButtonInner);

					paginationButton.data("owl-page",lastPage === i ? lastItem : i);
					paginationButton.data("owl-roundPages",counter);

					base.paginationWrapper.append(paginationButton);
				}
			}
			base.checkPagination();
		},
		checkPagination : function(){
			var base = this;
			if(base.options.pagination === false){
				return false;
			}
			base.paginationWrapper.find(".owl-page").each(function(i,v){
				if($(this).data("owl-roundPages") === $(base.$owlItems[base.currentItem]).data("owl-roundPages") ){
					base.paginationWrapper
						.find(".owl-page")
						.removeClass("active");
					$(this).addClass("active");
				}
			});
		},

		checkNavigation : function(){
			var base = this;

			if(base.options.navigation === false){
				return false;
			}
			if(base.options.rewindNav === false){
				if(base.currentItem === 0 && base.maximumItem === 0){
					base.buttonPrev.addClass("disabled");
					base.buttonNext.addClass("disabled");
				} else if(base.currentItem === 0 && base.maximumItem !== 0){
					base.buttonPrev.addClass("disabled");
					base.buttonNext.removeClass("disabled");
				} else if (base.currentItem === base.maximumItem){
					base.buttonPrev.removeClass("disabled");
					base.buttonNext.addClass("disabled");
				} else if(base.currentItem !== 0 && base.currentItem !== base.maximumItem){
					base.buttonPrev.removeClass("disabled");
					base.buttonNext.removeClass("disabled");
				}
			}
		},

		updateControls : function(){
			var base = this;
			base.updatePagination();
			base.checkNavigation();
			if(base.owlControls){
				if(base.options.items >= base.itemsAmount){
					base.owlControls.hide();
				} else {
					base.owlControls.show();
				}
			}
		},

		destroyControls : function(){
			var base = this;
			if(base.owlControls){
				base.owlControls.remove();
			}
		},

		next : function(speed){
			var base = this;

			if(base.isTransition){
				return false;
			}

			base.currentItem += base.options.scrollPerPage === true ? base.options.items : 1;
			if(base.currentItem > base.maximumItem + (base.options.scrollPerPage == true ? (base.options.items - 1) : 0)){
				if(base.options.rewindNav === true){
					base.currentItem = 0;
					speed = "rewind";
				} else {
					base.currentItem = base.maximumItem;
					return false;
				}
			}
			base.goTo(base.currentItem,speed);
		},

		prev : function(speed){
			var base = this;

			if(base.isTransition){
				return false;
			}

			if(base.options.scrollPerPage === true && base.currentItem > 0 && base.currentItem < base.options.items){
				base.currentItem = 0;
			} else {
				base.currentItem -= base.options.scrollPerPage === true ? base.options.items : 1;
			}
			if(base.currentItem < 0){
				if(base.options.rewindNav === true){
					base.currentItem = base.maximumItem;
					speed = "rewind";
				} else {
					base.currentItem =0;
					return false;
				}
			}
			base.goTo(base.currentItem,speed);
		},

		goTo : function(position,speed,drag){
			var base = this;

			if(base.isTransition){
				return false;
			}
			if(typeof base.options.beforeMove === "function") {
				base.options.beforeMove.apply(this,[base.$elem]);
			}
			if(position >= base.maximumItem){
				position = base.maximumItem;
			}
			else if( position <= 0 ){
				position = 0;
			}

			base.currentItem = base.owl.currentItem = position;
			if( base.options.transitionStyle !== false && drag !== "drag" && base.options.items === 1 && base.browser.support3d === true){
				base.swapSpeed(0);
				if(base.browser.support3d === true){
					base.transition3d(base.positionsInArray[position]);
				} else {
					base.css2slide(base.positionsInArray[position],1);
				}
				base.afterGo();
				base.singleItemTransition();

				return false;
			}
			var goToPixel = base.positionsInArray[position];

			if(base.browser.support3d === true){
				base.isCss3Finish = false;

				if(speed === true){
					base.swapSpeed("paginationSpeed");
					setTimeout(function() {
						base.isCss3Finish = true;
					}, base.options.paginationSpeed);

				} else if(speed === "rewind" ){
					base.swapSpeed(base.options.rewindSpeed);
					setTimeout(function() {
						base.isCss3Finish = true;
					}, base.options.rewindSpeed);

				} else {
					base.swapSpeed("slideSpeed");
					setTimeout(function() {
						base.isCss3Finish = true;
					}, base.options.slideSpeed);
				}
				base.transition3d(goToPixel);
			} else {
				if(speed === true){
					base.css2slide(goToPixel, base.options.paginationSpeed);
				} else if(speed === "rewind" ){
					base.css2slide(goToPixel, base.options.rewindSpeed);
				} else {
					base.css2slide(goToPixel, base.options.slideSpeed);
				}
			}
			base.afterGo();
		},

		jumpTo : function(position){
			var base = this;
			if(typeof base.options.beforeMove === "function") {
				base.options.beforeMove.apply(this,[base.$elem]);
			}
			if(position >= base.maximumItem || position === -1){
				position = base.maximumItem;
			}
			else if( position <= 0 ){
				position = 0;
			}
			base.swapSpeed(0);
			if(base.browser.support3d === true){
				base.transition3d(base.positionsInArray[position]);
			} else {
				base.css2slide(base.positionsInArray[position],1);
			}
			base.currentItem = base.owl.currentItem = position;
			base.afterGo();
		},

		afterGo : function(){
			var base = this;

			base.prevArr.push(base.currentItem);
			base.prevItem = base.owl.prevItem = base.prevArr[base.prevArr.length -2];
			base.prevArr.shift(0);

			if(base.prevItem !== base.currentItem){
				base.checkPagination();
				base.checkNavigation();
				base.eachMoveUpdate();

				if(base.options.autoPlay !== false){
					base.checkAp();
				}
			}
			if(typeof base.options.afterMove === "function" && base.prevItem !== base.currentItem) {
				base.options.afterMove.apply(this,[base.$elem]);
			}
		},

		stop : function(){
			var base = this;
			base.apStatus = "stop";
			clearInterval(base.autoPlayInterval);
		},

		checkAp : function(){
			var base = this;
			if(base.apStatus !== "stop"){
				base.play();
			}
		},

		play : function(){
			var base = this;
			base.apStatus = "play";
			if(base.options.autoPlay === false){
				return false;
			}
			clearInterval(base.autoPlayInterval);
			base.autoPlayInterval = setInterval(function(){
				base.next(true);
			},base.options.autoPlay);
		},

		swapSpeed : function(action){
			var base = this;
			if(action === "slideSpeed"){
				base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed));
			} else if(action === "paginationSpeed" ){
				base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed));
			} else if(typeof action !== "string"){
				base.$owlWrapper.css(base.addCssSpeed(action));
			}
		},

		addCssSpeed : function(speed){
			var base = this;
			return {
				"-webkit-transition": "all "+ speed +"ms ease",
				"-moz-transition": "all "+ speed +"ms ease",
				"-o-transition": "all "+ speed +"ms ease",
				"transition": "all "+ speed +"ms ease"
			};
		},

		removeTransition : function(){
			return {
				"-webkit-transition": "",
				"-moz-transition": "",
				"-o-transition": "",
				"transition": ""
			};
		},

		doTranslate : function(pixels){
			var base = this;
			base.options['direction']=="rtl" ? pixels=-pixels : pixels=pixels ;
			return {
				"-webkit-transform": "translate3d("+pixels+"px, 0px, 0px)",
				"-moz-transform": "translate3d("+pixels+"px, 0px, 0px)",
				"-o-transform": "translate3d("+pixels+"px, 0px, 0px)",
				"-ms-transform": "translate3d("+pixels+"px, 0px, 0px)",
				"transform": "translate3d("+pixels+"px, 0px,0px)"
			};
		},

		transition3d : function(value){
			var base = this;
			base.$owlWrapper.css(base.doTranslate(value));
		},

		css2move : function(value){
			var base = this, cssObj;

			base.options['direction']=="rtl" ? cssObj = {"right":value} : cssObj = {"left":value};
			base.$owlWrapper.css(cssObj);
		},

		css2slide : function(value,speed){
			var base = this, cssObj;
			base.options['direction']=="rtl" ? cssObj = {"right":value} : cssObj = {"left":value};

			base.isCssFinish = false;
			base.$owlWrapper.stop(true,true).animate(cssObj, {
				duration : speed || base.options.slideSpeed ,
				complete : function(){
					base.isCssFinish = true;
				}
			});
		},

		checkBrowser : function(){
			var base = this;

			//Check 3d support
			var	translate3D = "translate3d(0px, 0px, 0px)",
				tempElem = document.createElement("div");

			tempElem.style.cssText= "  -moz-transform:"    + translate3D +
								  "; -ms-transform:"     + translate3D +
								  "; -o-transform:"      + translate3D +
								  "; -webkit-transform:" + translate3D +
								  "; transform:"         + translate3D;
			var	regex = /translate3d\(0px, 0px, 0px\)/g,
				asSupport = tempElem.style.cssText.match(regex),
				support3d = (asSupport !== null && asSupport.length === 1);

			var isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints;

			base.browser = {
				"support3d" : support3d,
				"isTouch" : isTouch
			};
		},

		moveEvents : function(){
			var base = this;
			if(base.options.mouseDrag !== false || base.options.touchDrag !== false){
				base.gestures();
				base.disabledEvents();
			}
		},

		eventTypes : function(){
			var base = this;
			var types = ["s","e","x"];

			base.ev_types = {};

			if(base.options.mouseDrag === true && base.options.touchDrag === true){
				types = [
					"touchstart.owl mousedown.owl",
					"touchmove.owl mousemove.owl",
					"touchend.owl touchcancel.owl mouseup.owl"
				];
			} else if(base.options.mouseDrag === false && base.options.touchDrag === true){
				types = [
					"touchstart.owl",
					"touchmove.owl",
					"touchend.owl touchcancel.owl"
				];
			} else if(base.options.mouseDrag === true && base.options.touchDrag === false){
				types = [
					"mousedown.owl",
					"mousemove.owl",
					"mouseup.owl"
				];
			}

			base.ev_types["start"] = types[0];
			base.ev_types["move"] = types[1];
			base.ev_types["end"] = types[2];
		},

		disabledEvents :  function(){
			var base = this;
			base.$elem.on("dragstart.owl", function(event) { event.preventDefault();});
			base.$elem.on("mousedown.disableTextSelect", function(e) {
				return $(e.target).is('input, textarea, select, option');
			});
		},

		gestures : function(){
			var base = this;

			var locals = {
				offsetX : 0,
				offsetY : 0,
				baseElWidth : 0,
				relativePos : 0,
				position: null,
				minSwipe : null,
				maxSwipe: null,
				sliding : null,
				dargging: null,
				targetElement : null
			};

			base.isCssFinish = true;

			function getTouches(event){
				if(event.touches){
					return {
						x : event.touches[0].pageX,
						y : event.touches[0].pageY
					};
				} else {
					if(event.pageX !== undefined){
						return {
							x : event.pageX,
							y : event.pageY
						};
					} else {
						return {
							x : event.clientX,
							y : event.clientY
						};
					}
				}
			}

			function swapEvents(type){
				if(type === "on"){
					$(document).on(base.ev_types["move"], dragMove);
					$(document).on(base.ev_types["end"], dragEnd);
				} else if(type === "off"){
					$(document).off(base.ev_types["move"]);
					$(document).off(base.ev_types["end"]);
				}
			}

			function dragStart(event) {
				var event = event.originalEvent || event || window.event;

				if (event.which === 3) {
					return false;
				}
				if(base.itemsAmount <= base.options.items){
					return;
				}
				if(base.isCssFinish === false && !base.options.dragBeforeAnimFinish ){
					return false;
				}
				if(base.isCss3Finish === false && !base.options.dragBeforeAnimFinish ){
					return false;
				}

				if(base.options.autoPlay !== false){
					clearInterval(base.autoPlayInterval);
				}

				if(base.browser.isTouch !== true && !base.$owlWrapper.hasClass("grabbing")){
					base.$owlWrapper.addClass("grabbing");
				}

				base.newPosX = 0;
				base.newRelativeX = 0;

				$(this).css(base.removeTransition());
				/*Bilal*/
				var position = $(this).position();

                if(base.options['direction']=="rtl") {
                	positionRight = base.$owlItems.eq(0).width()*base.currentItem;
                	locals.relativePos = positionRight;
                	locals.offsetX = -getTouches(event).x + positionRight;
                }
                else {
                	locals.relativePos = position.left;
                	locals.offsetX = getTouches(event).x - position.left;
                }

				locals.offsetY = getTouches(event).y - position.top;

				swapEvents("on");

				locals.sliding = false;
				locals.targetElement = event.target || event.srcElement;
			}

			function dragMove(event){
				var event = event.originalEvent || event || window.event;

				if(base.options['direction']=="rtl") {
					base.newPosX = -getTouches(event).x - locals.offsetX;
					base.newPosY = getTouches(event).y - locals.offsetY;
					base.newRelativeX = base.newPosX + locals.relativePos;
				}
				else {
					base.newPosX = getTouches(event).x - locals.offsetX;
					base.newPosY = getTouches(event).y - locals.offsetY;
					base.newRelativeX = base.newPosX - locals.relativePos;
				}

				if (typeof base.options.startDragging === "function" && locals.dragging !== true && base.newRelativeX !== 0) {
					locals.dragging = true;
					base.options.startDragging.apply(base,[base.$elem]);
				}

				if(base.newRelativeX > 8 || base.newRelativeX < -8 && base.browser.isTouch === true){
					event.preventDefault ? event.preventDefault() : event.returnValue = false;
					locals.sliding = true;
				}

				if((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false){
					$(document).off("touchmove.owl");
				}

				var minSwipe = function(){
					return  base.newRelativeX / 5;
				};
				var maxSwipe = function(){
					return  base.maximumPixels + base.newRelativeX / 5;
				};

				base.newPosX = Math.max(Math.min( base.newPosX, minSwipe() ), maxSwipe() );
				if(base.browser.support3d === true){
					base.transition3d(base.newPosX);
				} else {
					base.css2move(base.newPosX);
				}
			}

			function dragEnd(event){
				var event = event.originalEvent || event || window.event;
				event.target = event.target || event.srcElement;

				locals.dragging = false;

				if(base.browser.isTouch !== true){
					base.$owlWrapper.removeClass("grabbing");
				}

				if(base.options['direction']=="rtl") {
					if (base.newRelativeX < 0) { base.dragDirection = base.owl.dragDirection = "right"; }
					else { base.dragDirection = base.owl.dragDirection = "left"; }
				}
				else {
					if (base.newRelativeX < 0) { base.dragDirection = base.owl.dragDirection = "left"; }
					else { base.dragDirection = base.owl.dragDirection = "right"; }
				}

				if(base.newRelativeX !== 0){
					var newPosition = base.getNewPosition();
					base.goTo(newPosition,false,"drag");
					if(locals.targetElement === event.target && base.browser.isTouch !== true){
						$(event.target).on("click.disable", function(ev){
							ev.stopImmediatePropagation();
							ev.stopPropagation();
							ev.preventDefault();
							$(event.target).off("click.disable");
						});
						var handlers = $._data(event.target, "events")["click"];
						var owlStopEvent = handlers.pop();
						handlers.splice(0, 0, owlStopEvent);
					}
				}
				swapEvents("off");
			}
			base.$elem.on(base.ev_types["start"], ".owl-wrapper", dragStart);
		},

		getNewPosition : function(){
			var base = this,
				newPosition;

			newPosition = base.closestItem();

			if(newPosition>base.maximumItem){
				base.currentItem = base.maximumItem;
				newPosition  = base.maximumItem;
			} else if( base.newPosX >=0 ){
				newPosition = 0;
				base.currentItem = 0;
			}
			return newPosition;
		},
		closestItem : function(){
			var base = this,
				array = base.options.scrollPerPage === true ? base.pagesInArray : base.positionsInArray,
				goal = base.newPosX,
				closest = null;

			$.each(array, function(i,v){
				if( goal - (base.itemWidth/20) > array[i+1] && goal - (base.itemWidth/20)< v && base.moveDirection() === "left") {
					closest = v;
					if(base.options.scrollPerPage === true){
						base.currentItem = $.inArray(closest, base.positionsInArray);
					} else {
						base.currentItem = i;
					}
				}
				else if (goal + (base.itemWidth/20) < v && goal + (base.itemWidth/20) > (array[i+1] || array[i]-base.itemWidth) && base.moveDirection() === "right"){
					if(base.options.scrollPerPage === true){
						closest = array[i+1] || array[array.length-1];
						base.currentItem = $.inArray(closest, base.positionsInArray);
					} else {
						closest = array[i+1];
						base.currentItem = i+1;
					}
				}
			});
			return base.currentItem;
		},

		moveDirection : function(){
			var base = this,
				direction;
			if(base.newRelativeX < 0 ){
				direction = "right";
				base.playDirection = "next";
			} else {
				direction = "left";
				base.playDirection = "prev";
			}
			return direction
		},

		customEvents : function(){
			var base = this;
			base.$elem.on("owl.next",function(){
				base.next();
			});
			base.$elem.on("owl.prev",function(){
				base.prev();
			});
			base.$elem.on("owl.play",function(event,speed){
				base.options.autoPlay = speed;
				base.play();
				base.hoverStatus = "play";
			});
			base.$elem.on("owl.stop",function(){
				base.stop();
				base.hoverStatus = "stop";
			});
			base.$elem.on("owl.goTo",function(event,item){
				base.goTo(item);
			});
			base.$elem.on("owl.jumpTo",function(event,item){
				base.jumpTo(item);
			});
		},

		stopOnHover : function(){
			var base = this;
			if(base.options.stopOnHover === true && base.browser.isTouch !== true && base.options.autoPlay !== false){
				base.$elem.on("mouseover", function(){
					base.stop();
				});
				base.$elem.on("mouseout", function(){
					if(base.hoverStatus !== "stop"){
						base.play();
					}
				});
			}
		},

		lazyLoad : function(){
			var base = this;

			if(base.options.lazyLoad === false){
				return false;
			}
			for(var i=0; i<base.itemsAmount; i++){
				var $item = $(base.$owlItems[i]);

				if($item.data("owl-loaded") === "loaded"){
					continue;
				}

				var	itemNumber = $item.data("owl-item"),
					$lazyImg = $item.find(".lazyOwl"),
					follow;

				if( typeof $lazyImg.data("src") !== "string"){
					$item.data("owl-loaded","loaded");
					continue;
				}
				if($item.data("owl-loaded") === undefined){
					$lazyImg.hide();
					$item.addClass("loading").data("owl-loaded","checked");
				}
				if(base.options.lazyFollow === true){
					follow = itemNumber >= base.currentItem;
				} else {
					follow = true;
				}
				if(follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length){
					base.lazyPreload($item,$lazyImg);
				}
			}
		},

		lazyPreload : function($item,$lazyImg){
			var base = this,
				iterations = 0;
				if ($lazyImg.prop("tagName") === "DIV") {
					$lazyImg.css("background-image", "url(" + $lazyImg.data("src")+ ")" );
					var isBackgroundImg=true;
				} else {
					$lazyImg[0].src = $lazyImg.data("src");
				}
				checkLazyImage();

			function checkLazyImage(){
				iterations += 1;
				if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
					showImage();
				} else if(iterations <= 100){//if image loads in less than 10 seconds
					setTimeout(checkLazyImage,100);
				} else {
					showImage();
				}
			}
			function showImage(){
				$item.data("owl-loaded", "loaded").removeClass("loading");
				$lazyImg.removeAttr("data-src");
				base.options.lazyEffect === "fade" ? $lazyImg.fadeIn(400) : $lazyImg.show();
				if(typeof base.options.afterLazyLoad === "function") {
					base.options.afterLazyLoad.apply(this,[base.$elem]);
				}
			}
		},

		autoHeight : function(){
			var base = this;
			var $currentimg = $(base.$owlItems[base.currentItem]).find("img");

			if($currentimg.get(0) !== undefined ){
				var iterations = 0;
				checkImage();
			} else {
				addHeight();
			}
			function checkImage(){
				iterations += 1;
				if ( base.completeImg($currentimg.get(0)) ) {
					addHeight();
				} else if(iterations <= 100){ //if image loads in less than 10 seconds
					setTimeout(checkImage,100);
				} else {
					base.wrapperOuter.css("height", ""); //Else remove height attribute
				}
			}

			function addHeight(){
				var $currentItem = $(base.$owlItems[base.currentItem]).height();
				base.wrapperOuter.css("height",$currentItem+"px");
				if(!base.wrapperOuter.hasClass("autoHeight")){
					setTimeout(function(){
						base.wrapperOuter.addClass("autoHeight");
					},0);
				}
			}
		},

		completeImg : function(img) {
		    if (!img.complete) {
		        return false;
		    }
		    if (typeof img.naturalWidth !== "undefined" && img.naturalWidth == 0) {
		        return false;
		    }
		    return true;
		},

		onVisibleItems : function(){
			var base = this;

			if(base.options.addClassActive === true){
				base.$owlItems.removeClass("active");
			}
			base.visibleItems = [];
			for(var i=base.currentItem; i<base.currentItem + base.options.items; i++){
				base.visibleItems.push(i);

				if(base.options.addClassActive === true){
					$(base.$owlItems[i]).addClass("active");
				}
			}
			base.owl.visibleItems = base.visibleItems;
		},

		transitionTypes : function(className){
			var base = this;
			//Currently available: "fade","backSlide","goDown","fadeUp"
			base.outClass = "owl-"+className+"-out";
			base.inClass = "owl-"+className+"-in";
		},

		singleItemTransition : function(){
			var base = this;
			base.isTransition = true;

			var outClass = base.outClass,
				inClass = base.inClass,
				$currentItem = base.$owlItems.eq(base.currentItem),
				$prevItem = base.$owlItems.eq(base.prevItem),
				prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem],
				origin = Math.abs(base.positionsInArray[base.currentItem])+base.itemWidth/2;

            base.$owlWrapper
	            .addClass('owl-origin')
	            .css({
	            	"-webkit-transform-origin" : origin+"px",
	            	"-moz-perspective-origin" : origin+"px",
	            	"perspective-origin" : origin+"px"
	            });
	        function transStyles(prevPos,zindex){
				return {
					"position" : "relative",
					"left" : prevPos+"px"
				};
			}

	        var animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';

			$prevItem
			.css(transStyles(prevPos,10))
			.addClass(outClass)
			.on(animEnd, function() {
				base.endPrev = true;
				$prevItem.off(animEnd);
		    	base.clearTransStyle($prevItem,outClass);
			});

			$currentItem
			.addClass(inClass)
			.on(animEnd, function() {
				base.endCurrent = true;
				$currentItem.off(animEnd);
		    	base.clearTransStyle($currentItem,inClass);
		    });
		},

		clearTransStyle : function(item,classToRemove){
			var base = this;
			item.css({
					"position" : "",
					"left" : ""
				})
				.removeClass(classToRemove);
			if(base.endPrev && base.endCurrent){
				base.$owlWrapper.removeClass('owl-origin');
				base.endPrev = false;
				base.endCurrent = false;
				base.isTransition = false;
			}
		},

		owlStatus : function(){
			var base = this;
			base.owl = {
				"userOptions"	: base.userOptions,
				"baseElement" 	: base.$elem,
				"userItems"		: base.$userItems,
				"owlItems"		: base.$owlItems,
				"currentItem"	: base.currentItem,
				"prevItem"		: base.prevItem,
				"visibleItems"	: base.visibleItems,
				"isTouch" 		: base.browser.isTouch,
				"browser"		: base.browser,
				"dragDirection" : base.dragDirection
			};
		},

		clearEvents : function(){
			var base = this;
			base.$elem.off(".owl owl mousedown.disableTextSelect");
			$(document).off(".owl owl");
			$(window).off("resize", base.resizer);
		},

		unWrap : function(){
			var base = this;
			if(base.$elem.children().length !== 0){
				base.$owlWrapper.unwrap();
				base.$userItems.unwrap().unwrap();
				if(base.owlControls){
					base.owlControls.remove();
				}
			}
			base.clearEvents();
			base.$elem
				.attr("style", base.$elem.data("owl-originalStyles") || "")
				.attr("class", base.$elem.data("owl-originalClasses"));
		},

		destroy : function(){
			var base = this;
			base.stop();
			clearInterval(base.checkVisible);
			base.unWrap();
			base.$elem.removeData();
		},

		reinit : function(newOptions){
			var base = this;
			var options = $.extend({}, base.userOptions, newOptions);
		 	base.unWrap();
		 	base.init(options,base.$elem);
		},

		addItem : function(htmlString,targetPosition){
			var base = this,
				position;

			if(!htmlString){return false;}

			if(base.$elem.children().length === 0){
				base.$elem.append(htmlString);
				base.setVars();
				return false;
			}
			base.unWrap();
			if(targetPosition === undefined || targetPosition === -1){
				position = -1;
			} else {
				position = targetPosition;
			}
			if(position >= base.$userItems.length || position === -1){
				base.$userItems.eq(-1).after(htmlString);
			} else {
				base.$userItems.eq(position).before(htmlString);
			}

			base.setVars();
		},

		removeItem : function(targetPosition){
			var base = this,
				position;

			if(base.$elem.children().length === 0){return false;}

			if(targetPosition === undefined || targetPosition === -1){
				position = -1;
			} else {
				position = targetPosition;
			}

			base.unWrap();
			base.$userItems.eq(position).remove();
			base.setVars();
		}

	};

	$.fn.owlCarousel = function( options ){
		return this.each(function() {
			if($(this).data("owl-init") === true){
				return false;
			}
			$(this).data("owl-init", true);
			var carousel = Object.create( Carousel );
			carousel.init( options, this );
			$.data( this, "owlCarousel", carousel );
		});
	};

	$.fn.owlCarousel.options = {
		direction:'ltr',

		items : 5,
		itemsCustom : false,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [979,3],
		itemsTablet : [768,2],
		itemsTabletSmall : false,
		itemsMobile : [479,1],
		singleItem : false,
		itemsScaleUp : false,

		slideSpeed : 200,
		paginationSpeed : 800,
		rewindSpeed : 1000,

		autoPlay : false,
		stopOnHover : false,

		navigation : false,
		navigationText : ["prev","next"],
		rewindNav : true,
		scrollPerPage : false,

		pagination : true,
		paginationNumbers : false,

		responsive : true,
		responsiveRefreshRate : 200,
		responsiveBaseWidth	: window,


		baseClass : "owl-carousel",
		theme : "owl-theme",

		lazyLoad : false,
		lazyFollow : true,
		lazyEffect : "fade",

		autoHeight : false,

		jsonPath : false,
		jsonSuccess : false,

		dragBeforeAnimFinish : true,
		mouseDrag : true,
		touchDrag : true,

		addClassActive : false,
		transitionStyle : false,

		beforeUpdate : false,
		afterUpdate : false,
		beforeInit : false,
		afterInit : false,
		beforeMove : false,
		afterMove : false,
		afterAction : false,
		startDragging : false,
		afterLazyLoad: false

	};
})( jQuery, window, document );
