!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define(e)
    : ((t =
        'undefined' != typeof globalThis ? globalThis : t || self).MiniSandbox =
        e());
})(this, function () {
  'use strict';
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */ function t(
    t,
    e,
    i,
    n
  ) {
    return new (i || (i = Promise))(function (r, s) {
      function o(t) {
        try {
          l(n.next(t));
        } catch (t) {
          s(t);
        }
      }
      function a(t) {
        try {
          l(n.throw(t));
        } catch (t) {
          s(t);
        }
      }
      function l(t) {
        var e;
        t.done
          ? r(t.value)
          : ((e = t.value),
            e instanceof i
              ? e
              : new i(function (t) {
                  t(e);
                })).then(o, a);
      }
      l((n = n.apply(t, e || [])).next());
    });
  }
  let e =
    'lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o'
      .split(',')
      .map((t) => (t ? parseInt(t, 36) : 1));
  for (let t = 1; t < e.length; t++) e[t] += e[t - 1];
  function i(t) {
    for (let i = 1; i < e.length; i += 2) if (e[i] > t) return e[i - 1] <= t;
    return !1;
  }
  function n(t) {
    return t >= 127462 && t <= 127487;
  }
  function r(t, e, i = !0, n = !0) {
    return (i ? s : o)(t, e, n);
  }
  function s(t, e, r) {
    if (e == t.length) return e;
    e && a(t.charCodeAt(e)) && l(t.charCodeAt(e - 1)) && e--;
    let s = h(t, e);
    for (e += u(s); e < t.length; ) {
      let o = h(t, e);
      if (8205 == s || 8205 == o || (r && i(o))) (e += u(o)), (s = o);
      else {
        if (!n(o)) break;
        {
          let i = 0,
            r = e - 2;
          for (; r >= 0 && n(h(t, r)); ) i++, (r -= 2);
          if (i % 2 == 0) break;
          e += 2;
        }
      }
    }
    return e;
  }
  function o(t, e, i) {
    for (; e > 0; ) {
      let n = s(t, e - 2, i);
      if (n < e) return n;
      e--;
    }
    return 0;
  }
  function a(t) {
    return t >= 56320 && t < 57344;
  }
  function l(t) {
    return t >= 55296 && t < 56320;
  }
  function h(t, e) {
    let i = t.charCodeAt(e);
    if (!l(i) || e + 1 == t.length) return i;
    let n = t.charCodeAt(e + 1);
    return a(n) ? n - 56320 + ((i - 55296) << 10) + 65536 : i;
  }
  function c(t) {
    return t <= 65535
      ? String.fromCharCode(t)
      : ((t -= 65536),
        String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)));
  }
  function u(t) {
    return t < 65536 ? 1 : 2;
  }
  function d(t, e, i = t.length) {
    let n = 0;
    for (let s = 0; s < i; )
      9 == t.charCodeAt(s) ? ((n += e - (n % e)), s++) : (n++, (s = r(t, s)));
    return n;
  }
  function f(t, e, i, n) {
    for (let n = 0, s = 0; ; ) {
      if (s >= e) return n;
      if (n == t.length) break;
      (s += 9 == t.charCodeAt(n) ? i - (s % i) : 1), (n = r(t, n));
    }
    return !0 === n ? -1 : t.length;
  }
  class O {
    constructor() {}
    lineAt(t) {
      if (t < 0 || t > this.length)
        throw new RangeError(
          `Invalid position ${t} in document of length ${this.length}`
        );
      return this.lineInner(t, !1, 1, 0);
    }
    line(t) {
      if (t < 1 || t > this.lines)
        throw new RangeError(
          `Invalid line number ${t} in ${this.lines}-line document`
        );
      return this.lineInner(t, !0, 1, 0);
    }
    replace(t, e, i) {
      let n = [];
      return (
        this.decompose(0, t, n, 2),
        i.length && i.decompose(0, i.length, n, 3),
        this.decompose(e, this.length, n, 1),
        m.from(n, this.length - (e - t) + i.length)
      );
    }
    append(t) {
      return this.replace(this.length, this.length, t);
    }
    slice(t, e = this.length) {
      let i = [];
      return this.decompose(t, e, i, 0), m.from(i, e - t);
    }
    eq(t) {
      if (t == this) return !0;
      if (t.length != this.length || t.lines != this.lines) return !1;
      let e = this.scanIdentical(t, 1),
        i = this.length - this.scanIdentical(t, -1),
        n = new b(this),
        r = new b(t);
      for (let t = e, s = e; ; ) {
        if (
          (n.next(t),
          r.next(t),
          (t = 0),
          n.lineBreak != r.lineBreak || n.done != r.done || n.value != r.value)
        )
          return !1;
        if (((s += n.value.length), n.done || s >= i)) return !0;
      }
    }
    iter(t = 1) {
      return new b(this, t);
    }
    iterRange(t, e = this.length) {
      return new v(this, t, e);
    }
    iterLines(t, e) {
      let i;
      if (null == t) i = this.iter();
      else {
        null == e && (e = this.lines + 1);
        let n = this.line(t).from;
        i = this.iterRange(
          n,
          Math.max(
            n,
            e == this.lines + 1 ? this.length : e <= 1 ? 0 : this.line(e - 1).to
          )
        );
      }
      return new y(i);
    }
    toString() {
      return this.sliceString(0);
    }
    toJSON() {
      let t = [];
      return this.flatten(t), t;
    }
    static of(t) {
      if (0 == t.length)
        throw new RangeError('A document must have at least one line');
      return 1 != t.length || t[0]
        ? t.length <= 32
          ? new p(t)
          : m.from(p.split(t, []))
        : O.empty;
    }
  }
  class p extends O {
    constructor(
      t,
      e = (function (t) {
        let e = -1;
        for (let i of t) e += i.length + 1;
        return e;
      })(t)
    ) {
      super(), (this.text = t), (this.length = e);
    }
    get lines() {
      return this.text.length;
    }
    get children() {
      return null;
    }
    lineInner(t, e, i, n) {
      for (let r = 0; ; r++) {
        let s = this.text[r],
          o = n + s.length;
        if ((e ? i : o) >= t) return new w(n, o, i, s);
        (n = o + 1), i++;
      }
    }
    decompose(t, e, i, n) {
      let r =
        t <= 0 && e >= this.length
          ? this
          : new p(
              Q(this.text, t, e),
              Math.min(e, this.length) - Math.max(0, t)
            );
      if (1 & n) {
        let t = i.pop(),
          e = g(r.text, t.text.slice(), 0, r.length);
        if (e.length <= 32) i.push(new p(e, t.length + r.length));
        else {
          let t = e.length >> 1;
          i.push(new p(e.slice(0, t)), new p(e.slice(t)));
        }
      } else i.push(r);
    }
    replace(t, e, i) {
      if (!(i instanceof p)) return super.replace(t, e, i);
      let n = g(this.text, g(i.text, Q(this.text, 0, t)), e),
        r = this.length + i.length - (e - t);
      return n.length <= 32 ? new p(n, r) : m.from(p.split(n, []), r);
    }
    sliceString(t, e = this.length, i = '\n') {
      let n = '';
      for (let r = 0, s = 0; r <= e && s < this.text.length; s++) {
        let o = this.text[s],
          a = r + o.length;
        r > t && s && (n += i),
          t < a && e > r && (n += o.slice(Math.max(0, t - r), e - r)),
          (r = a + 1);
      }
      return n;
    }
    flatten(t) {
      for (let e of this.text) t.push(e);
    }
    scanIdentical() {
      return 0;
    }
    static split(t, e) {
      let i = [],
        n = -1;
      for (let r of t)
        i.push(r),
          (n += r.length + 1),
          32 == i.length && (e.push(new p(i, n)), (i = []), (n = -1));
      return n > -1 && e.push(new p(i, n)), e;
    }
  }
  class m extends O {
    constructor(t, e) {
      super(), (this.children = t), (this.length = e), (this.lines = 0);
      for (let e of t) this.lines += e.lines;
    }
    lineInner(t, e, i, n) {
      for (let r = 0; ; r++) {
        let s = this.children[r],
          o = n + s.length,
          a = i + s.lines - 1;
        if ((e ? a : o) >= t) return s.lineInner(t, e, i, n);
        (n = o + 1), (i = a + 1);
      }
    }
    decompose(t, e, i, n) {
      for (let r = 0, s = 0; s <= e && r < this.children.length; r++) {
        let o = this.children[r],
          a = s + o.length;
        if (t <= a && e >= s) {
          let r = n & ((s <= t ? 1 : 0) | (a >= e ? 2 : 0));
          s >= t && a <= e && !r ? i.push(o) : o.decompose(t - s, e - s, i, r);
        }
        s = a + 1;
      }
    }
    replace(t, e, i) {
      if (i.lines < this.lines)
        for (let n = 0, r = 0; n < this.children.length; n++) {
          let s = this.children[n],
            o = r + s.length;
          if (t >= r && e <= o) {
            let a = s.replace(t - r, e - r, i),
              l = this.lines - s.lines + a.lines;
            if (a.lines < l >> 4 && a.lines > l >> 6) {
              let r = this.children.slice();
              return (r[n] = a), new m(r, this.length - (e - t) + i.length);
            }
            return super.replace(r, o, a);
          }
          r = o + 1;
        }
      return super.replace(t, e, i);
    }
    sliceString(t, e = this.length, i = '\n') {
      let n = '';
      for (let r = 0, s = 0; r < this.children.length && s <= e; r++) {
        let o = this.children[r],
          a = s + o.length;
        s > t && r && (n += i),
          t < a && e > s && (n += o.sliceString(t - s, e - s, i)),
          (s = a + 1);
      }
      return n;
    }
    flatten(t) {
      for (let e of this.children) e.flatten(t);
    }
    scanIdentical(t, e) {
      if (!(t instanceof m)) return 0;
      let i = 0,
        [n, r, s, o] =
          e > 0
            ? [0, 0, this.children.length, t.children.length]
            : [this.children.length - 1, t.children.length - 1, -1, -1];
      for (; ; n += e, r += e) {
        if (n == s || r == o) return i;
        let a = this.children[n],
          l = t.children[r];
        if (a != l) return i + a.scanIdentical(l, e);
        i += a.length + 1;
      }
    }
    static from(t, e = t.reduce((t, e) => t + e.length + 1, -1)) {
      let i = 0;
      for (let e of t) i += e.lines;
      if (i < 32) {
        let i = [];
        for (let e of t) e.flatten(i);
        return new p(i, e);
      }
      let n = Math.max(32, i >> 5),
        r = n << 1,
        s = n >> 1,
        o = [],
        a = 0,
        l = -1,
        h = [];
      function c(t) {
        let e;
        if (t.lines > r && t instanceof m) for (let e of t.children) c(e);
        else
          t.lines > s && (a > s || !a)
            ? (u(), o.push(t))
            : t instanceof p &&
              a &&
              (e = h[h.length - 1]) instanceof p &&
              t.lines + e.lines <= 32
            ? ((a += t.lines),
              (l += t.length + 1),
              (h[h.length - 1] = new p(
                e.text.concat(t.text),
                e.length + 1 + t.length
              )))
            : (a + t.lines > n && u(),
              (a += t.lines),
              (l += t.length + 1),
              h.push(t));
      }
      function u() {
        0 != a &&
          (o.push(1 == h.length ? h[0] : m.from(h, l)),
          (l = -1),
          (a = h.length = 0));
      }
      for (let e of t) c(e);
      return u(), 1 == o.length ? o[0] : new m(o, e);
    }
  }
  function g(t, e, i = 0, n = 1e9) {
    for (let r = 0, s = 0, o = !0; s < t.length && r <= n; s++) {
      let a = t[s],
        l = r + a.length;
      l >= i &&
        (l > n && (a = a.slice(0, n - r)),
        r < i && (a = a.slice(i - r)),
        o ? ((e[e.length - 1] += a), (o = !1)) : e.push(a)),
        (r = l + 1);
    }
    return e;
  }
  function Q(t, e, i) {
    return g(t, [''], e, i);
  }
  O.empty = new p([''], 0);
  class b {
    constructor(t, e = 1) {
      (this.dir = e),
        (this.done = !1),
        (this.lineBreak = !1),
        (this.value = ''),
        (this.nodes = [t]),
        (this.offsets = [
          e > 0 ? 1 : (t instanceof p ? t.text.length : t.children.length) << 1,
        ]);
    }
    nextInner(t, e) {
      for (this.done = this.lineBreak = !1; ; ) {
        let i = this.nodes.length - 1,
          n = this.nodes[i],
          r = this.offsets[i],
          s = r >> 1,
          o = n instanceof p ? n.text.length : n.children.length;
        if (s == (e > 0 ? o : 0)) {
          if (0 == i) return (this.done = !0), (this.value = ''), this;
          e > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
        } else if ((1 & r) == (e > 0 ? 0 : 1)) {
          if (((this.offsets[i] += e), 0 == t))
            return (this.lineBreak = !0), (this.value = '\n'), this;
          t--;
        } else if (n instanceof p) {
          let r = n.text[s + (e < 0 ? -1 : 0)];
          if (((this.offsets[i] += e), r.length > Math.max(0, t)))
            return (
              (this.value =
                0 == t ? r : e > 0 ? r.slice(t) : r.slice(0, r.length - t)),
              this
            );
          t -= r.length;
        } else {
          let r = n.children[s + (e < 0 ? -1 : 0)];
          t > r.length
            ? ((t -= r.length), (this.offsets[i] += e))
            : (e < 0 && this.offsets[i]--,
              this.nodes.push(r),
              this.offsets.push(
                e > 0
                  ? 1
                  : (r instanceof p ? r.text.length : r.children.length) << 1
              ));
        }
      }
    }
    next(t = 0) {
      return (
        t < 0 && (this.nextInner(-t, -this.dir), (t = this.value.length)),
        this.nextInner(t, this.dir)
      );
    }
  }
  class v {
    constructor(t, e, i) {
      (this.value = ''),
        (this.done = !1),
        (this.cursor = new b(t, e > i ? -1 : 1)),
        (this.pos = e > i ? t.length : 0),
        (this.from = Math.min(e, i)),
        (this.to = Math.max(e, i));
    }
    nextInner(t, e) {
      if (e < 0 ? this.pos <= this.from : this.pos >= this.to)
        return (this.value = ''), (this.done = !0), this;
      t += Math.max(0, e < 0 ? this.pos - this.to : this.from - this.pos);
      let i = e < 0 ? this.pos - this.from : this.to - this.pos;
      t > i && (t = i), (i -= t);
      let { value: n } = this.cursor.next(t);
      return (
        (this.pos += (n.length + t) * e),
        (this.value =
          n.length <= i ? n : e < 0 ? n.slice(n.length - i) : n.slice(0, i)),
        (this.done = !this.value),
        this
      );
    }
    next(t = 0) {
      return (
        t < 0
          ? (t = Math.max(t, this.from - this.pos))
          : t > 0 && (t = Math.min(t, this.to - this.pos)),
        this.nextInner(t, this.cursor.dir)
      );
    }
    get lineBreak() {
      return this.cursor.lineBreak && '' != this.value;
    }
  }
  class y {
    constructor(t) {
      (this.inner = t),
        (this.afterBreak = !0),
        (this.value = ''),
        (this.done = !1);
    }
    next(t = 0) {
      let { done: e, lineBreak: i, value: n } = this.inner.next(t);
      return (
        e
          ? ((this.done = !0), (this.value = ''))
          : i
          ? this.afterBreak
            ? (this.value = '')
            : ((this.afterBreak = !0), this.next())
          : ((this.value = n), (this.afterBreak = !1)),
        this
      );
    }
    get lineBreak() {
      return !1;
    }
  }
  'undefined' != typeof Symbol &&
    ((O.prototype[Symbol.iterator] = function () {
      return this.iter();
    }),
    (b.prototype[Symbol.iterator] =
      v.prototype[Symbol.iterator] =
      y.prototype[Symbol.iterator] =
        function () {
          return this;
        }));
  class w {
    constructor(t, e, i, n) {
      (this.from = t), (this.to = e), (this.number = i), (this.text = n);
    }
    get length() {
      return this.to - this.from;
    }
  }
  const x = /\r\n?|\n/;
  var k = (function (t) {
    return (
      (t[(t.Simple = 0)] = 'Simple'),
      (t[(t.TrackDel = 1)] = 'TrackDel'),
      (t[(t.TrackBefore = 2)] = 'TrackBefore'),
      (t[(t.TrackAfter = 3)] = 'TrackAfter'),
      t
    );
  })(k || (k = {}));
  class S {
    constructor(t) {
      this.sections = t;
    }
    get length() {
      let t = 0;
      for (let e = 0; e < this.sections.length; e += 2) t += this.sections[e];
      return t;
    }
    get newLength() {
      let t = 0;
      for (let e = 0; e < this.sections.length; e += 2) {
        let i = this.sections[e + 1];
        t += i < 0 ? this.sections[e] : i;
      }
      return t;
    }
    get empty() {
      return (
        0 == this.sections.length ||
        (2 == this.sections.length && this.sections[1] < 0)
      );
    }
    iterGaps(t) {
      for (let e = 0, i = 0, n = 0; e < this.sections.length; ) {
        let r = this.sections[e++],
          s = this.sections[e++];
        s < 0 ? (t(i, n, r), (n += r)) : (n += s), (i += r);
      }
    }
    iterChangedRanges(t, e = !1) {
      R(this, t, e);
    }
    get invertedDesc() {
      let t = [];
      for (let e = 0; e < this.sections.length; ) {
        let i = this.sections[e++],
          n = this.sections[e++];
        n < 0 ? t.push(i, n) : t.push(n, i);
      }
      return new S(t);
    }
    composeDesc(t) {
      return this.empty ? t : t.empty ? this : C(this, t);
    }
    mapDesc(t, e = !1) {
      return t.empty ? this : W(this, t, e);
    }
    mapPos(t, e = -1, i = k.Simple) {
      let n = 0,
        r = 0;
      for (let s = 0; s < this.sections.length; ) {
        let o = this.sections[s++],
          a = this.sections[s++],
          l = n + o;
        if (a < 0) {
          if (l > t) return r + (t - n);
          r += o;
        } else {
          if (
            i != k.Simple &&
            l >= t &&
            ((i == k.TrackDel && n < t && l > t) ||
              (i == k.TrackBefore && n < t) ||
              (i == k.TrackAfter && l > t))
          )
            return null;
          if (l > t || (l == t && e < 0 && !o))
            return t == n || e < 0 ? r : r + a;
          r += a;
        }
        n = l;
      }
      if (t > n)
        throw new RangeError(
          `Position ${t} is out of range for changeset of length ${n}`
        );
      return r;
    }
    touchesRange(t, e = t) {
      for (let i = 0, n = 0; i < this.sections.length && n <= e; ) {
        let r = n + this.sections[i++];
        if (this.sections[i++] >= 0 && n <= e && r >= t)
          return !(n < t && r > e) || 'cover';
        n = r;
      }
      return !1;
    }
    toString() {
      let t = '';
      for (let e = 0; e < this.sections.length; ) {
        let i = this.sections[e++],
          n = this.sections[e++];
        t += (t ? ' ' : '') + i + (n >= 0 ? ':' + n : '');
      }
      return t;
    }
    toJSON() {
      return this.sections;
    }
    static fromJSON(t) {
      if (
        !Array.isArray(t) ||
        t.length % 2 ||
        t.some((t) => 'number' != typeof t)
      )
        throw new RangeError('Invalid JSON representation of ChangeDesc');
      return new S(t);
    }
  }
  class $ extends S {
    constructor(t, e) {
      super(t), (this.inserted = e);
    }
    apply(t) {
      if (this.length != t.length)
        throw new RangeError(
          'Applying change set to a document with the wrong length'
        );
      return (
        R(this, (e, i, n, r, s) => (t = t.replace(n, n + (i - e), s)), !1), t
      );
    }
    mapDesc(t, e = !1) {
      return W(this, t, e, !0);
    }
    invert(t) {
      let e = this.sections.slice(),
        i = [];
      for (let n = 0, r = 0; n < e.length; n += 2) {
        let s = e[n],
          o = e[n + 1];
        if (o >= 0) {
          (e[n] = o), (e[n + 1] = s);
          let a = n >> 1;
          for (; i.length < a; ) i.push(O.empty);
          i.push(s ? t.slice(r, r + s) : O.empty);
        }
        r += s;
      }
      return new $(e, i);
    }
    compose(t) {
      return this.empty ? t : t.empty ? this : C(this, t, !0);
    }
    map(t, e = !1) {
      return t.empty ? this : W(this, t, e, !0);
    }
    iterChanges(t, e = !1) {
      R(this, t, e);
    }
    get desc() {
      return new S(this.sections);
    }
    filter(t) {
      let e = [],
        i = [],
        n = [],
        r = new A(this);
      t: for (let s = 0, o = 0; ; ) {
        let a = s == t.length ? 1e9 : t[s++];
        for (; o < a || (o == a && 0 == r.len); ) {
          if (r.done) break t;
          let t = Math.min(r.len, a - o);
          T(n, t, -1);
          let s = -1 == r.ins ? -1 : 0 == r.off ? r.ins : 0;
          T(e, t, s), s > 0 && P(i, e, r.text), r.forward(t), (o += t);
        }
        let l = t[s++];
        for (; o < l; ) {
          if (r.done) break t;
          let t = Math.min(r.len, l - o);
          T(e, t, -1),
            T(n, t, -1 == r.ins ? -1 : 0 == r.off ? r.ins : 0),
            r.forward(t),
            (o += t);
        }
      }
      return { changes: new $(e, i), filtered: new S(n) };
    }
    toJSON() {
      let t = [];
      for (let e = 0; e < this.sections.length; e += 2) {
        let i = this.sections[e],
          n = this.sections[e + 1];
        n < 0
          ? t.push(i)
          : 0 == n
          ? t.push([i])
          : t.push([i].concat(this.inserted[e >> 1].toJSON()));
      }
      return t;
    }
    static of(t, e, i) {
      let n = [],
        r = [],
        s = 0,
        o = null;
      function a(t = !1) {
        if (!t && !n.length) return;
        s < e && T(n, e - s, -1);
        let i = new $(n, r);
        (o = o ? o.compose(i.map(o)) : i), (n = []), (r = []), (s = 0);
      }
      return (
        (function t(l) {
          if (Array.isArray(l)) for (let e of l) t(e);
          else if (l instanceof $) {
            if (l.length != e)
              throw new RangeError(
                `Mismatched change set length (got ${l.length}, expected ${e})`
              );
            a(), (o = o ? o.compose(l.map(o)) : l);
          } else {
            let { from: t, to: o = t, insert: h } = l;
            if (t > o || t < 0 || o > e)
              throw new RangeError(
                `Invalid change range ${t} to ${o} (in doc of length ${e})`
              );
            let c = h
                ? 'string' == typeof h
                  ? O.of(h.split(i || x))
                  : h
                : O.empty,
              u = c.length;
            if (t == o && 0 == u) return;
            t < s && a(),
              t > s && T(n, t - s, -1),
              T(n, o - t, u),
              P(r, n, c),
              (s = o);
          }
        })(t),
        a(!o),
        o
      );
    }
    static empty(t) {
      return new $(t ? [t, -1] : [], []);
    }
    static fromJSON(t) {
      if (!Array.isArray(t))
        throw new RangeError('Invalid JSON representation of ChangeSet');
      let e = [],
        i = [];
      for (let n = 0; n < t.length; n++) {
        let r = t[n];
        if ('number' == typeof r) e.push(r, -1);
        else {
          if (
            !Array.isArray(r) ||
            'number' != typeof r[0] ||
            r.some((t, e) => e && 'string' != typeof t)
          )
            throw new RangeError('Invalid JSON representation of ChangeSet');
          if (1 == r.length) e.push(r[0], 0);
          else {
            for (; i.length < n; ) i.push(O.empty);
            (i[n] = O.of(r.slice(1))), e.push(r[0], i[n].length);
          }
        }
      }
      return new $(e, i);
    }
  }
  function T(t, e, i, n = !1) {
    if (0 == e && i <= 0) return;
    let r = t.length - 2;
    r >= 0 && i <= 0 && i == t[r + 1]
      ? (t[r] += e)
      : 0 == e && 0 == t[r]
      ? (t[r + 1] += i)
      : n
      ? ((t[r] += e), (t[r + 1] += i))
      : t.push(e, i);
  }
  function P(t, e, i) {
    if (0 == i.length) return;
    let n = (e.length - 2) >> 1;
    if (n < t.length) t[t.length - 1] = t[t.length - 1].append(i);
    else {
      for (; t.length < n; ) t.push(O.empty);
      t.push(i);
    }
  }
  function R(t, e, i) {
    let n = t.inserted;
    for (let r = 0, s = 0, o = 0; o < t.sections.length; ) {
      let a = t.sections[o++],
        l = t.sections[o++];
      if (l < 0) (r += a), (s += a);
      else {
        let h = r,
          c = s,
          u = O.empty;
        for (
          ;
          (h += a),
            (c += l),
            l && n && (u = u.append(n[(o - 2) >> 1])),
            !(i || o == t.sections.length || t.sections[o + 1] < 0);

        )
          (a = t.sections[o++]), (l = t.sections[o++]);
        e(r, h, s, c, u), (r = h), (s = c);
      }
    }
  }
  function W(t, e, i, n = !1) {
    let r = [],
      s = n ? [] : null,
      o = new A(t),
      a = new A(e);
    for (let t = 0, e = 0; ; )
      if (-1 == o.ins) (t += o.len), o.next();
      else if (-1 == a.ins && e < t) {
        let i = Math.min(a.len, t - e);
        a.forward(i), T(r, i, -1), (e += i);
      } else if (
        a.ins >= 0 &&
        (o.done ||
          e < t ||
          (e == t && (a.len < o.len || (a.len == o.len && !i))))
      ) {
        for (T(r, a.ins, -1); t > e && !o.done && t + o.len < e + a.len; )
          (t += o.len), o.next();
        (e += a.len), a.next();
      } else {
        if (!(o.ins >= 0)) {
          if (o.done && a.done) return s ? new $(r, s) : new S(r);
          throw new Error('Mismatched change set lengths');
        }
        {
          let i = 0,
            n = t + o.len;
          for (;;)
            if (a.ins >= 0 && e > t && e + a.len < n)
              (i += a.ins), (e += a.len), a.next();
            else {
              if (!(-1 == a.ins && e < n)) break;
              {
                let t = Math.min(a.len, n - e);
                (i += t), a.forward(t), (e += t);
              }
            }
          T(r, i, o.ins), s && P(s, r, o.text), (t = n), o.next();
        }
      }
  }
  function C(t, e, i = !1) {
    let n = [],
      r = i ? [] : null,
      s = new A(t),
      o = new A(e);
    for (let t = !1; ; ) {
      if (s.done && o.done) return r ? new $(n, r) : new S(n);
      if (0 == s.ins) T(n, s.len, 0, t), s.next();
      else if (0 != o.len || o.done) {
        if (s.done || o.done) throw new Error('Mismatched change set lengths');
        {
          let e = Math.min(s.len2, o.len),
            i = n.length;
          if (-1 == s.ins) {
            let i = -1 == o.ins ? -1 : o.off ? 0 : o.ins;
            T(n, e, i, t), r && i && P(r, n, o.text);
          } else
            -1 == o.ins
              ? (T(n, s.off ? 0 : s.len, e, t), r && P(r, n, s.textBit(e)))
              : (T(n, s.off ? 0 : s.len, o.off ? 0 : o.ins, t),
                r && !o.off && P(r, n, o.text));
          (t = (s.ins > e || (o.ins >= 0 && o.len > e)) && (t || n.length > i)),
            s.forward2(e),
            o.forward(e);
        }
      } else T(n, 0, o.ins, t), r && P(r, n, o.text), o.next();
    }
  }
  class A {
    constructor(t) {
      (this.set = t), (this.i = 0), this.next();
    }
    next() {
      let { sections: t } = this.set;
      this.i < t.length
        ? ((this.len = t[this.i++]), (this.ins = t[this.i++]))
        : ((this.len = 0), (this.ins = -2)),
        (this.off = 0);
    }
    get done() {
      return -2 == this.ins;
    }
    get len2() {
      return this.ins < 0 ? this.len : this.ins;
    }
    get text() {
      let { inserted: t } = this.set,
        e = (this.i - 2) >> 1;
      return e >= t.length ? O.empty : t[e];
    }
    textBit(t) {
      let { inserted: e } = this.set,
        i = (this.i - 2) >> 1;
      return i >= e.length && !t
        ? O.empty
        : e[i].slice(this.off, null == t ? void 0 : this.off + t);
    }
    forward(t) {
      t == this.len ? this.next() : ((this.len -= t), (this.off += t));
    }
    forward2(t) {
      -1 == this.ins
        ? this.forward(t)
        : t == this.ins
        ? this.next()
        : ((this.ins -= t), (this.off += t));
    }
  }
  class X {
    constructor(t, e, i) {
      (this.from = t), (this.to = e), (this.flags = i);
    }
    get anchor() {
      return 16 & this.flags ? this.to : this.from;
    }
    get head() {
      return 16 & this.flags ? this.from : this.to;
    }
    get empty() {
      return this.from == this.to;
    }
    get assoc() {
      return 4 & this.flags ? -1 : 8 & this.flags ? 1 : 0;
    }
    get bidiLevel() {
      let t = 3 & this.flags;
      return 3 == t ? null : t;
    }
    get goalColumn() {
      let t = this.flags >> 5;
      return 33554431 == t ? void 0 : t;
    }
    map(t, e = -1) {
      let i, n;
      return (
        this.empty
          ? (i = n = t.mapPos(this.from, e))
          : ((i = t.mapPos(this.from, 1)), (n = t.mapPos(this.to, -1))),
        i == this.from && n == this.to ? this : new X(i, n, this.flags)
      );
    }
    extend(t, e = t) {
      if (t <= this.anchor && e >= this.anchor) return Z.range(t, e);
      let i = Math.abs(t - this.anchor) > Math.abs(e - this.anchor) ? t : e;
      return Z.range(this.anchor, i);
    }
    eq(t) {
      return this.anchor == t.anchor && this.head == t.head;
    }
    toJSON() {
      return { anchor: this.anchor, head: this.head };
    }
    static fromJSON(t) {
      if (!t || 'number' != typeof t.anchor || 'number' != typeof t.head)
        throw new RangeError('Invalid JSON representation for SelectionRange');
      return Z.range(t.anchor, t.head);
    }
  }
  class Z {
    constructor(t, e = 0) {
      (this.ranges = t), (this.mainIndex = e);
    }
    map(t, e = -1) {
      return t.empty
        ? this
        : Z.create(
            this.ranges.map((i) => i.map(t, e)),
            this.mainIndex
          );
    }
    eq(t) {
      if (
        this.ranges.length != t.ranges.length ||
        this.mainIndex != t.mainIndex
      )
        return !1;
      for (let e = 0; e < this.ranges.length; e++)
        if (!this.ranges[e].eq(t.ranges[e])) return !1;
      return !0;
    }
    get main() {
      return this.ranges[this.mainIndex];
    }
    asSingle() {
      return 1 == this.ranges.length ? this : new Z([this.main]);
    }
    addRange(t, e = !0) {
      return Z.create([t].concat(this.ranges), e ? 0 : this.mainIndex + 1);
    }
    replaceRange(t, e = this.mainIndex) {
      let i = this.ranges.slice();
      return (i[e] = t), Z.create(i, this.mainIndex);
    }
    toJSON() {
      return {
        ranges: this.ranges.map((t) => t.toJSON()),
        main: this.mainIndex,
      };
    }
    static fromJSON(t) {
      if (
        !t ||
        !Array.isArray(t.ranges) ||
        'number' != typeof t.main ||
        t.main >= t.ranges.length
      )
        throw new RangeError('Invalid JSON representation for EditorSelection');
      return new Z(
        t.ranges.map((t) => X.fromJSON(t)),
        t.main
      );
    }
    static single(t, e = t) {
      return new Z([Z.range(t, e)], 0);
    }
    static create(t, e = 0) {
      if (0 == t.length)
        throw new RangeError('A selection needs at least one range');
      for (let i = 0, n = 0; n < t.length; n++) {
        let r = t[n];
        if (r.empty ? r.from <= i : r.from < i) return M(t.slice(), e);
        i = r.to;
      }
      return new Z(t, e);
    }
    static cursor(t, e = 0, i, n) {
      return new X(
        t,
        t,
        (0 == e ? 0 : e < 0 ? 4 : 8) |
          (null == i ? 3 : Math.min(2, i)) |
          ((null != n ? n : 33554431) << 5)
      );
    }
    static range(t, e, i) {
      let n = (null != i ? i : 33554431) << 5;
      return e < t ? new X(e, t, 24 | n) : new X(t, e, n | (e > t ? 4 : 0));
    }
  }
  function M(t, e = 0) {
    let i = t[e];
    t.sort((t, e) => t.from - e.from), (e = t.indexOf(i));
    for (let i = 1; i < t.length; i++) {
      let n = t[i],
        r = t[i - 1];
      if (n.empty ? n.from <= r.to : n.from < r.to) {
        let s = r.from,
          o = Math.max(n.to, r.to);
        i <= e && e--,
          t.splice(--i, 2, n.anchor > n.head ? Z.range(o, s) : Z.range(s, o));
      }
    }
    return new Z(t, e);
  }
  function _(t, e) {
    for (let i of t.ranges)
      if (i.to > e)
        throw new RangeError('Selection points outside of document');
  }
  let L = 0;
  class D {
    constructor(t, e, i, n, r) {
      (this.combine = t),
        (this.compareInput = e),
        (this.compare = i),
        (this.isStatic = n),
        (this.extensions = r),
        (this.id = L++),
        (this.default = t([]));
    }
    static define(t = {}) {
      return new D(
        t.combine || ((t) => t),
        t.compareInput || ((t, e) => t === e),
        t.compare || (t.combine ? (t, e) => t === e : E),
        !!t.static,
        t.enables
      );
    }
    of(t) {
      return new z([], this, 0, t);
    }
    compute(t, e) {
      if (this.isStatic) throw new Error("Can't compute a static facet");
      return new z(t, this, 1, e);
    }
    computeN(t, e) {
      if (this.isStatic) throw new Error("Can't compute a static facet");
      return new z(t, this, 2, e);
    }
    from(t, e) {
      return e || (e = (t) => t), this.compute([t], (i) => e(i.field(t)));
    }
  }
  function E(t, e) {
    return t == e || (t.length == e.length && t.every((t, i) => t === e[i]));
  }
  class z {
    constructor(t, e, i, n) {
      (this.dependencies = t),
        (this.facet = e),
        (this.type = i),
        (this.value = n),
        (this.id = L++);
    }
    dynamicSlot(t) {
      var e;
      let i = this.value,
        n = this.facet.compareInput,
        r = this.id,
        s = t[r] >> 1,
        o = 2 == this.type,
        a = !1,
        l = !1,
        h = [];
      for (let i of this.dependencies)
        'doc' == i
          ? (a = !0)
          : 'selection' == i
          ? (l = !0)
          : 0 == (1 & (null !== (e = t[i.id]) && void 0 !== e ? e : 1)) &&
            h.push(t[i.id]);
      return {
        create: (t) => ((t.values[s] = i(t)), 1),
        update(t, e) {
          if (
            (a && e.docChanged) ||
            (l && (e.docChanged || e.selection)) ||
            h.some((e) => (1 & it(t, e)) > 0)
          ) {
            let e = i(t);
            if (o ? !q(e, t.values[s], n) : !n(e, t.values[s]))
              return (t.values[s] = e), 1;
          }
          return 0;
        },
        reconfigure(t, e) {
          let a = i(t),
            l = e.config.address[r];
          if (null != l) {
            let i = nt(e, l);
            if (o ? q(a, i, n) : n(a, i)) return (t.values[s] = i), 0;
          }
          return (t.values[s] = a), 1;
        },
      };
    }
  }
  function q(t, e, i) {
    if (t.length != e.length) return !1;
    for (let n = 0; n < t.length; n++) if (!i(t[n], e[n])) return !1;
    return !0;
  }
  function j(t, e, i) {
    let n = i.map((e) => t[e.id]),
      r = i.map((t) => t.type),
      s = n.filter((t) => !(1 & t)),
      o = t[e.id] >> 1;
    function a(t) {
      let i = [];
      for (let e = 0; e < n.length; e++) {
        let s = nt(t, n[e]);
        if (2 == r[e]) for (let t of s) i.push(t);
        else i.push(s);
      }
      return e.combine(i);
    }
    return {
      create(t) {
        for (let e of n) it(t, e);
        return (t.values[o] = a(t)), 1;
      },
      update(t, i) {
        if (!s.some((e) => 1 & it(t, e))) return 0;
        let n = a(t);
        return e.compare(n, t.values[o]) ? 0 : ((t.values[o] = n), 1);
      },
      reconfigure(t, r) {
        let s = n.some((e) => 1 & it(t, e)),
          l = r.config.facets[e.id],
          h = r.facet(e);
        if (l && !s && E(i, l)) return (t.values[o] = h), 0;
        let c = a(t);
        return e.compare(c, h)
          ? ((t.values[o] = h), 0)
          : ((t.values[o] = c), 1);
      },
    };
  }
  const V = D.define({ static: !0 });
  class Y {
    constructor(t, e, i, n, r) {
      (this.id = t),
        (this.createF = e),
        (this.updateF = i),
        (this.compareF = n),
        (this.spec = r),
        (this.provides = void 0);
    }
    static define(t) {
      let e = new Y(
        L++,
        t.create,
        t.update,
        t.compare || ((t, e) => t === e),
        t
      );
      return t.provide && (e.provides = t.provide(e)), e;
    }
    create(t) {
      let e = t.facet(V).find((t) => t.field == this);
      return ((null == e ? void 0 : e.create) || this.createF)(t);
    }
    slot(t) {
      let e = t[this.id] >> 1;
      return {
        create: (t) => ((t.values[e] = this.create(t)), 1),
        update: (t, i) => {
          let n = t.values[e],
            r = this.updateF(n, i);
          return this.compareF(n, r) ? 0 : ((t.values[e] = r), 1);
        },
        reconfigure: (t, i) =>
          null != i.config.address[this.id]
            ? ((t.values[e] = i.field(this)), 0)
            : ((t.values[e] = this.create(t)), 1),
      };
    }
    init(t) {
      return [this, V.of({ field: this, create: t })];
    }
    get extension() {
      return this;
    }
  }
  const U = 4,
    G = 3,
    I = 2,
    N = 1,
    B = 0;
  function F(t) {
    return (e) => new J(e, t);
  }
  const H = {
    lowest: F(U),
    low: F(G),
    default: F(I),
    high: F(N),
    highest: F(B),
    fallback: F(U),
    extend: F(N),
    override: F(B),
  };
  class J {
    constructor(t, e) {
      (this.inner = t), (this.prec = e);
    }
  }
  class K {
    of(t) {
      return new tt(this, t);
    }
    reconfigure(t) {
      return K.reconfigure.of({ compartment: this, extension: t });
    }
    get(t) {
      return t.config.compartments.get(this);
    }
  }
  class tt {
    constructor(t, e) {
      (this.compartment = t), (this.inner = e);
    }
  }
  class et {
    constructor(t, e, i, n, r, s) {
      for (
        this.base = t,
          this.compartments = e,
          this.dynamicSlots = i,
          this.address = n,
          this.staticValues = r,
          this.facets = s,
          this.statusTemplate = [];
        this.statusTemplate.length < i.length;

      )
        this.statusTemplate.push(0);
    }
    staticFacet(t) {
      let e = this.address[t.id];
      return null == e ? t.default : this.staticValues[e >> 1];
    }
    static resolve(t, e, i) {
      let n = [],
        r = Object.create(null),
        s = new Map();
      for (let i of (function (t, e, i) {
        let n = [[], [], [], [], []],
          r = new Map();
        function s(t, o) {
          let a = r.get(t);
          if (null != a) {
            if (a >= o) return;
            let e = n[a].indexOf(t);
            e > -1 && n[a].splice(e, 1),
              t instanceof tt && i.delete(t.compartment);
          }
          if ((r.set(t, o), Array.isArray(t))) for (let e of t) s(e, o);
          else if (t instanceof tt) {
            if (i.has(t.compartment))
              throw new RangeError(
                'Duplicate use of compartment in extensions'
              );
            let n = e.get(t.compartment) || t.inner;
            i.set(t.compartment, n), s(n, o);
          } else if (t instanceof J) s(t.inner, t.prec);
          else if (t instanceof Y) n[o].push(t), t.provides && s(t.provides, o);
          else if (t instanceof z)
            n[o].push(t), t.facet.extensions && s(t.facet.extensions, o);
          else {
            let e = t.extension;
            if (!e)
              throw new Error(
                `Unrecognized extension value in extension set (${t}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`
              );
            s(e, o);
          }
        }
        return s(t, I), n.reduce((t, e) => t.concat(e));
      })(t, e, s))
        i instanceof Y
          ? n.push(i)
          : (r[i.facet.id] || (r[i.facet.id] = [])).push(i);
      let o = Object.create(null),
        a = [],
        l = [];
      for (let t of n) (o[t.id] = l.length << 1), l.push((e) => t.slot(e));
      let h = null == i ? void 0 : i.config.facets;
      for (let t in r) {
        let e = r[t],
          n = e[0].facet,
          s = (h && h[t]) || [];
        if (e.every((t) => 0 == t.type))
          if (((o[n.id] = (a.length << 1) | 1), E(s, e))) a.push(i.facet(n));
          else {
            let t = n.combine(e.map((t) => t.value));
            a.push(i && n.compare(t, i.facet(n)) ? i.facet(n) : t);
          }
        else {
          for (let t of e)
            0 == t.type
              ? ((o[t.id] = (a.length << 1) | 1), a.push(t.value))
              : ((o[t.id] = l.length << 1), l.push((e) => t.dynamicSlot(e)));
          (o[n.id] = l.length << 1), l.push((t) => j(t, n, e));
        }
      }
      let c = l.map((t) => t(o));
      return new et(t, s, c, o, a, r);
    }
  }
  function it(t, e) {
    if (1 & e) return 2;
    let i = e >> 1,
      n = t.status[i];
    if (4 == n)
      throw new Error('Cyclic dependency between fields and/or facets');
    if (2 & n) return n;
    t.status[i] = 4;
    let r = t.computeSlot(t, t.config.dynamicSlots[i]);
    return (t.status[i] = 2 | r);
  }
  function nt(t, e) {
    return 1 & e ? t.config.staticValues[e >> 1] : t.values[e >> 1];
  }
  const rt = D.define(),
    st = D.define({ combine: (t) => t.some((t) => t), static: !0 }),
    ot = D.define({ combine: (t) => (t.length ? t[0] : void 0), static: !0 }),
    at = D.define(),
    lt = D.define(),
    ht = D.define(),
    ct = D.define({ combine: (t) => !!t.length && t[0] });
  class ut {
    constructor(t, e) {
      (this.type = t), (this.value = e);
    }
    static define() {
      return new dt();
    }
  }
  class dt {
    of(t) {
      return new ut(this, t);
    }
  }
  class ft {
    constructor(t) {
      this.map = t;
    }
    of(t) {
      return new Ot(this, t);
    }
  }
  class Ot {
    constructor(t, e) {
      (this.type = t), (this.value = e);
    }
    map(t) {
      let e = this.type.map(this.value, t);
      return void 0 === e
        ? void 0
        : e == this.value
        ? this
        : new Ot(this.type, e);
    }
    is(t) {
      return this.type == t;
    }
    static define(t = {}) {
      return new ft(t.map || ((t) => t));
    }
    static mapEffects(t, e) {
      if (!t.length) return t;
      let i = [];
      for (let n of t) {
        let t = n.map(e);
        t && i.push(t);
      }
      return i;
    }
  }
  (Ot.reconfigure = Ot.define()), (Ot.appendConfig = Ot.define());
  class pt {
    constructor(t, e, i, n, r, s) {
      (this.startState = t),
        (this.changes = e),
        (this.selection = i),
        (this.effects = n),
        (this.annotations = r),
        (this.scrollIntoView = s),
        (this._doc = null),
        (this._state = null),
        i && _(i, e.newLength),
        r.some((t) => t.type == pt.time) ||
          (this.annotations = r.concat(pt.time.of(Date.now())));
    }
    get newDoc() {
      return this._doc || (this._doc = this.changes.apply(this.startState.doc));
    }
    get newSelection() {
      return this.selection || this.startState.selection.map(this.changes);
    }
    get state() {
      return this._state || this.startState.applyTransaction(this), this._state;
    }
    annotation(t) {
      for (let e of this.annotations) if (e.type == t) return e.value;
    }
    get docChanged() {
      return !this.changes.empty;
    }
    get reconfigured() {
      return this.startState.config != this.state.config;
    }
    isUserEvent(t) {
      let e = this.annotation(pt.userEvent);
      return !(
        !e ||
        !(
          e == t ||
          (e.length > t.length &&
            e.slice(0, t.length) == t &&
            '.' == e[t.length])
        )
      );
    }
  }
  function mt(t, e) {
    let i = [];
    for (let n = 0, r = 0; ; ) {
      let s, o;
      if (n < t.length && (r == e.length || e[r] >= t[n]))
        (s = t[n++]), (o = t[n++]);
      else {
        if (!(r < e.length)) return i;
        (s = e[r++]), (o = e[r++]);
      }
      !i.length || i[i.length - 1] < s
        ? i.push(s, o)
        : i[i.length - 1] < o && (i[i.length - 1] = o);
    }
  }
  function gt(t, e, i) {
    var n;
    let r, s, o;
    return (
      i
        ? ((r = e.changes),
          (s = $.empty(e.changes.length)),
          (o = t.changes.compose(e.changes)))
        : ((r = e.changes.map(t.changes)),
          (s = t.changes.mapDesc(e.changes, !0)),
          (o = t.changes.compose(r))),
      {
        changes: o,
        selection: e.selection
          ? e.selection.map(s)
          : null === (n = t.selection) || void 0 === n
          ? void 0
          : n.map(r),
        effects: Ot.mapEffects(t.effects, r).concat(
          Ot.mapEffects(e.effects, s)
        ),
        annotations: t.annotations.length
          ? t.annotations.concat(e.annotations)
          : e.annotations,
        scrollIntoView: t.scrollIntoView || e.scrollIntoView,
      }
    );
  }
  function Qt(t, e, i) {
    let n = e.selection,
      r = yt(e.annotations);
    return (
      e.userEvent && (r = r.concat(pt.userEvent.of(e.userEvent))),
      {
        changes:
          e.changes instanceof $
            ? e.changes
            : $.of(e.changes || [], i, t.facet(ot)),
        selection: n && (n instanceof Z ? n : Z.single(n.anchor, n.head)),
        effects: yt(e.effects),
        annotations: r,
        scrollIntoView: !!e.scrollIntoView,
      }
    );
  }
  function bt(t, e, i) {
    let n = Qt(t, e.length ? e[0] : {}, t.doc.length);
    e.length && !1 === e[0].filter && (i = !1);
    for (let r = 1; r < e.length; r++) {
      !1 === e[r].filter && (i = !1);
      let s = !!e[r].sequential;
      n = gt(n, Qt(t, e[r], s ? n.changes.newLength : t.doc.length), s);
    }
    let r = new pt(
      t,
      n.changes,
      n.selection,
      n.effects,
      n.annotations,
      n.scrollIntoView
    );
    return (function (t) {
      let e = t.startState,
        i = e.facet(ht),
        n = t;
      for (let r = i.length - 1; r >= 0; r--) {
        let s = i[r](t);
        s &&
          Object.keys(s).length &&
          (n = gt(t, Qt(e, s, t.changes.newLength), !0));
      }
      return n == t
        ? t
        : new pt(
            e,
            t.changes,
            t.selection,
            n.effects,
            n.annotations,
            n.scrollIntoView
          );
    })(
      i
        ? (function (t) {
            let e = t.startState,
              i = !0;
            for (let n of e.facet(at)) {
              let e = n(t);
              if (!1 === e) {
                i = !1;
                break;
              }
              Array.isArray(e) && (i = !0 === i ? e : mt(i, e));
            }
            if (!0 !== i) {
              let n, r;
              if (!1 === i)
                (r = t.changes.invertedDesc), (n = $.empty(e.doc.length));
              else {
                let e = t.changes.filter(i);
                (n = e.changes), (r = e.filtered.invertedDesc);
              }
              t = new pt(
                e,
                n,
                t.selection && t.selection.map(r),
                Ot.mapEffects(t.effects, r),
                t.annotations,
                t.scrollIntoView
              );
            }
            let n = e.facet(lt);
            for (let i = n.length - 1; i >= 0; i--) {
              let r = n[i](t);
              t =
                r instanceof pt
                  ? r
                  : Array.isArray(r) && 1 == r.length && r[0] instanceof pt
                  ? r[0]
                  : bt(e, yt(r), !1);
            }
            return t;
          })(r)
        : r
    );
  }
  (pt.time = ut.define()),
    (pt.userEvent = ut.define()),
    (pt.addToHistory = ut.define()),
    (pt.remote = ut.define());
  const vt = [];
  function yt(t) {
    return null == t ? vt : Array.isArray(t) ? t : [t];
  }
  var wt = (function (t) {
    return (
      (t[(t.Word = 0)] = 'Word'),
      (t[(t.Space = 1)] = 'Space'),
      (t[(t.Other = 2)] = 'Other'),
      t
    );
  })(wt || (wt = {}));
  const xt =
    /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
  let kt;
  try {
    kt = new RegExp('[\\p{Alphabetic}\\p{Number}_]', 'u');
  } catch (t) {}
  function St(t) {
    return (e) => {
      if (!/\S/.test(e)) return wt.Space;
      if (
        (function (t) {
          if (kt) return kt.test(t);
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            if (
              /\w/.test(i) ||
              (i > '' && (i.toUpperCase() != i.toLowerCase() || xt.test(i)))
            )
              return !0;
          }
          return !1;
        })(e)
      )
        return wt.Word;
      for (let i = 0; i < t.length; i++)
        if (e.indexOf(t[i]) > -1) return wt.Word;
      return wt.Other;
    };
  }
  class $t {
    constructor(t, e, i, n, r, s) {
      (this.config = t),
        (this.doc = e),
        (this.selection = i),
        (this.values = n),
        (this.status = t.statusTemplate.slice()),
        (this.computeSlot = r),
        s && (s._state = this);
      for (let t = 0; t < this.config.dynamicSlots.length; t++)
        it(this, t << 1);
      this.computeSlot = null;
    }
    field(t, e = !0) {
      let i = this.config.address[t.id];
      if (null != i) return it(this, i), nt(this, i);
      if (e) throw new RangeError('Field is not present in this state');
    }
    update(...t) {
      return bt(this, t, !0);
    }
    applyTransaction(t) {
      let e,
        i = this.config,
        { base: n, compartments: r } = i;
      for (let e of t.effects)
        e.is(K.reconfigure)
          ? (i &&
              ((r = new Map()),
              i.compartments.forEach((t, e) => r.set(e, t)),
              (i = null)),
            r.set(e.value.compartment, e.value.extension))
          : e.is(Ot.reconfigure)
          ? ((i = null), (n = e.value))
          : e.is(Ot.appendConfig) && ((i = null), (n = yt(n).concat(e.value)));
      if (i) e = t.startState.values.slice();
      else {
        (i = et.resolve(n, r, this)),
          (e = new $t(
            i,
            this.doc,
            this.selection,
            i.dynamicSlots.map(() => null),
            (t, e) => e.reconfigure(t, this),
            null
          ).values);
      }
      new $t(i, t.newDoc, t.newSelection, e, (e, i) => i.update(e, t), t);
    }
    replaceSelection(t) {
      return (
        'string' == typeof t && (t = this.toText(t)),
        this.changeByRange((e) => ({
          changes: { from: e.from, to: e.to, insert: t },
          range: Z.cursor(e.from + t.length),
        }))
      );
    }
    changeByRange(t) {
      let e = this.selection,
        i = t(e.ranges[0]),
        n = this.changes(i.changes),
        r = [i.range],
        s = yt(i.effects);
      for (let i = 1; i < e.ranges.length; i++) {
        let o = t(e.ranges[i]),
          a = this.changes(o.changes),
          l = a.map(n);
        for (let t = 0; t < i; t++) r[t] = r[t].map(l);
        let h = n.mapDesc(a, !0);
        r.push(o.range.map(h)),
          (n = n.compose(l)),
          (s = Ot.mapEffects(s, l).concat(Ot.mapEffects(yt(o.effects), h)));
      }
      return { changes: n, selection: Z.create(r, e.mainIndex), effects: s };
    }
    changes(t = []) {
      return t instanceof $
        ? t
        : $.of(t, this.doc.length, this.facet($t.lineSeparator));
    }
    toText(t) {
      return O.of(t.split(this.facet($t.lineSeparator) || x));
    }
    sliceDoc(t = 0, e = this.doc.length) {
      return this.doc.sliceString(t, e, this.lineBreak);
    }
    facet(t) {
      let e = this.config.address[t.id];
      return null == e ? t.default : (it(this, e), nt(this, e));
    }
    toJSON(t) {
      let e = { doc: this.sliceDoc(), selection: this.selection.toJSON() };
      if (t)
        for (let i in t) {
          let n = t[i];
          n instanceof Y && (e[i] = n.spec.toJSON(this.field(t[i]), this));
        }
      return e;
    }
    static fromJSON(t, e = {}, i) {
      if (!t || 'string' != typeof t.doc)
        throw new RangeError('Invalid JSON representation for EditorState');
      let n = [];
      if (i)
        for (let e in i) {
          let r = i[e],
            s = t[e];
          n.push(r.init((t) => r.spec.fromJSON(s, t)));
        }
      return $t.create({
        doc: t.doc,
        selection: Z.fromJSON(t.selection),
        extensions: e.extensions ? n.concat([e.extensions]) : n,
      });
    }
    static create(t = {}) {
      let e = et.resolve(t.extensions || [], new Map()),
        i =
          t.doc instanceof O
            ? t.doc
            : O.of((t.doc || '').split(e.staticFacet($t.lineSeparator) || x)),
        n = t.selection
          ? t.selection instanceof Z
            ? t.selection
            : Z.single(t.selection.anchor, t.selection.head)
          : Z.single(0);
      return (
        _(n, i.length),
        e.staticFacet(st) || (n = n.asSingle()),
        new $t(
          e,
          i,
          n,
          e.dynamicSlots.map(() => null),
          (t, e) => e.create(t),
          null
        )
      );
    }
    get tabSize() {
      return this.facet($t.tabSize);
    }
    get lineBreak() {
      return this.facet($t.lineSeparator) || '\n';
    }
    get readOnly() {
      return this.facet(ct);
    }
    phrase(t) {
      for (let e of this.facet($t.phrases))
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      return t;
    }
    languageDataAt(t, e, i = -1) {
      let n = [];
      for (let r of this.facet(rt))
        for (let s of r(this, e, i))
          Object.prototype.hasOwnProperty.call(s, t) && n.push(s[t]);
      return n;
    }
    charCategorizer(t) {
      return St(this.languageDataAt('wordChars', t).join(''));
    }
    wordAt(t) {
      let { text: e, from: i, length: n } = this.doc.lineAt(t),
        s = this.charCategorizer(t),
        o = t - i,
        a = t - i;
      for (; o > 0; ) {
        let t = r(e, o, !1);
        if (s(e.slice(t, o)) != wt.Word) break;
        o = t;
      }
      for (; a < n; ) {
        let t = r(e, a);
        if (s(e.slice(a, t)) != wt.Word) break;
        a = t;
      }
      return o == a ? null : Z.range(o + i, a + i);
    }
  }
  function Tt(t, e, i = {}) {
    let n = {};
    for (let e of t)
      for (let t of Object.keys(e)) {
        let r = e[t],
          s = n[t];
        if (void 0 === s) n[t] = r;
        else if (s === r || void 0 === r);
        else {
          if (!Object.hasOwnProperty.call(i, t))
            throw new Error('Config merge conflict for field ' + t);
          n[t] = i[t](s, r);
        }
      }
    for (let t in e) void 0 === n[t] && (n[t] = e[t]);
    return n;
  }
  ($t.allowMultipleSelections = st),
    ($t.tabSize = D.define({ combine: (t) => (t.length ? t[0] : 4) })),
    ($t.lineSeparator = ot),
    ($t.readOnly = ct),
    ($t.phrases = D.define()),
    ($t.languageData = rt),
    ($t.changeFilter = at),
    ($t.transactionFilter = lt),
    ($t.transactionExtender = ht),
    (K.reconfigure = Ot.define());
  const Pt = 'undefined' == typeof Symbol ? '__ͼ' : Symbol.for('ͼ'),
    Rt =
      'undefined' == typeof Symbol
        ? '__styleSet' + Math.floor(1e8 * Math.random())
        : Symbol('styleSet'),
    Wt =
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
        ? window
        : {};
  class Ct {
    constructor(t, e) {
      this.rules = [];
      let { finish: i } = e || {};
      function n(t) {
        return /^@/.test(t) ? [t] : t.split(/,\s*/);
      }
      function r(t, e, s, o) {
        let a = [],
          l = /^@(\w+)\b/.exec(t[0]),
          h = l && 'keyframes' == l[1];
        if (l && null == e) return s.push(t[0] + ';');
        for (let i in e) {
          let o = e[i];
          if (/&/.test(i))
            r(
              i
                .split(/,\s*/)
                .map((e) => t.map((t) => e.replace(/&/, t)))
                .reduce((t, e) => t.concat(e)),
              o,
              s
            );
          else if (o && 'object' == typeof o) {
            if (!l)
              throw new RangeError(
                'The value of a property (' +
                  i +
                  ') should be a primitive value.'
              );
            r(n(i), o, a, h);
          } else
            null != o &&
              a.push(
                i
                  .replace(/_.*/, '')
                  .replace(/[A-Z]/g, (t) => '-' + t.toLowerCase()) +
                  ': ' +
                  o +
                  ';'
              );
        }
        (a.length || h) &&
          s.push(
            (!i || l || o ? t : t.map(i)).join(', ') + ' {' + a.join(' ') + '}'
          );
      }
      for (let e in t) r(n(e), t[e], this.rules);
    }
    getRules() {
      return this.rules.join('\n');
    }
    static newName() {
      let t = Wt[Pt] || 1;
      return (Wt[Pt] = t + 1), 'ͼ' + t.toString(36);
    }
    static mount(t, e) {
      (t[Rt] || new Xt(t)).mount(Array.isArray(e) ? e : [e]);
    }
  }
  let At = null;
  class Xt {
    constructor(t) {
      if (
        !t.head &&
        t.adoptedStyleSheets &&
        'undefined' != typeof CSSStyleSheet
      ) {
        if (At)
          return (
            (t.adoptedStyleSheets = [At.sheet].concat(t.adoptedStyleSheets)),
            (t[Rt] = At)
          );
        (this.sheet = new CSSStyleSheet()),
          (t.adoptedStyleSheets = [this.sheet].concat(t.adoptedStyleSheets)),
          (At = this);
      } else {
        this.styleTag = (t.ownerDocument || t).createElement('style');
        let e = t.head || t;
        e.insertBefore(this.styleTag, e.firstChild);
      }
      (this.modules = []), (t[Rt] = this);
    }
    mount(t) {
      let e = this.sheet,
        i = 0,
        n = 0;
      for (let r = 0; r < t.length; r++) {
        let s = t[r],
          o = this.modules.indexOf(s);
        if (
          (o < n && o > -1 && (this.modules.splice(o, 1), n--, (o = -1)),
          -1 == o)
        ) {
          if ((this.modules.splice(n++, 0, s), e))
            for (let t = 0; t < s.rules.length; t++)
              e.insertRule(s.rules[t], i++);
        } else {
          for (; n < o; ) i += this.modules[n++].rules.length;
          (i += s.rules.length), n++;
        }
      }
      if (!e) {
        let t = '';
        for (let e = 0; e < this.modules.length; e++)
          t += this.modules[e].getRules() + '\n';
        this.styleTag.textContent = t;
      }
    }
  }
  class Zt {
    eq(t) {
      return this == t;
    }
    range(t, e = t) {
      return new Mt(t, e, this);
    }
  }
  (Zt.prototype.startSide = Zt.prototype.endSide = 0),
    (Zt.prototype.point = !1),
    (Zt.prototype.mapMode = k.TrackDel);
  class Mt {
    constructor(t, e, i) {
      (this.from = t), (this.to = e), (this.value = i);
    }
  }
  function _t(t, e) {
    return t.from - e.from || t.value.startSide - e.value.startSide;
  }
  class Lt {
    constructor(t, e, i, n) {
      (this.from = t), (this.to = e), (this.value = i), (this.maxPoint = n);
    }
    get length() {
      return this.to[this.to.length - 1];
    }
    findIndex(t, e, i, n = 0) {
      let r = i ? this.to : this.from;
      for (let s = n, o = r.length; ; ) {
        if (s == o) return s;
        let n = (s + o) >> 1,
          a =
            r[n] - t ||
            (i ? this.value[n].endSide : this.value[n].startSide) - e;
        if (n == s) return a >= 0 ? s : o;
        a >= 0 ? (o = n) : (s = n + 1);
      }
    }
    between(t, e, i, n) {
      for (
        let r = this.findIndex(e, -1e9, !0), s = this.findIndex(i, 1e9, !1, r);
        r < s;
        r++
      )
        if (!1 === n(this.from[r] + t, this.to[r] + t, this.value[r]))
          return !1;
    }
    map(t, e) {
      let i = [],
        n = [],
        r = [],
        s = -1,
        o = -1;
      for (let a = 0; a < this.value.length; a++) {
        let l,
          h,
          c = this.value[a],
          u = this.from[a] + t,
          d = this.to[a] + t;
        if (u == d) {
          let t = e.mapPos(u, c.startSide, c.mapMode);
          if (null == t) continue;
          if (
            ((l = h = t),
            c.startSide != c.endSide && ((h = e.mapPos(u, c.endSide)), h < l))
          )
            continue;
        } else if (
          ((l = e.mapPos(u, c.startSide)),
          (h = e.mapPos(d, c.endSide)),
          l > h || (l == h && c.startSide > 0 && c.endSide <= 0))
        )
          continue;
        (h - l || c.endSide - c.startSide) < 0 ||
          (s < 0 && (s = l),
          c.point && (o = Math.max(o, h - l)),
          i.push(c),
          n.push(l - s),
          r.push(h - s));
      }
      return { mapped: i.length ? new Lt(n, r, i, o) : null, pos: s };
    }
  }
  class Dt {
    constructor(t, e, i = Dt.empty, n) {
      (this.chunkPos = t),
        (this.chunk = e),
        (this.nextLayer = i),
        (this.maxPoint = n);
    }
    get length() {
      let t = this.chunk.length - 1;
      return t < 0 ? 0 : Math.max(this.chunkEnd(t), this.nextLayer.length);
    }
    get size() {
      if (this.isEmpty) return 0;
      let t = this.nextLayer.size;
      for (let e of this.chunk) t += e.value.length;
      return t;
    }
    chunkEnd(t) {
      return this.chunkPos[t] + this.chunk[t].length;
    }
    update(t) {
      let {
          add: e = [],
          sort: i = !1,
          filterFrom: n = 0,
          filterTo: r = this.length,
        } = t,
        s = t.filter;
      if (0 == e.length && !s) return this;
      if ((i && (e = e.slice().sort(_t)), this.isEmpty))
        return e.length ? Dt.of(e) : this;
      let o = new qt(this, null, -1).goto(0),
        a = 0,
        l = [],
        h = new Et();
      for (; o.value || a < e.length; )
        if (
          a < e.length &&
          (o.from - e[a].from || o.startSide - e[a].value.startSide) >= 0
        ) {
          let t = e[a++];
          h.addInner(t.from, t.to, t.value) || l.push(t);
        } else
          1 == o.rangeIndex &&
          o.chunkIndex < this.chunk.length &&
          (a == e.length || this.chunkEnd(o.chunkIndex) < e[a].from) &&
          (!s ||
            n > this.chunkEnd(o.chunkIndex) ||
            r < this.chunkPos[o.chunkIndex]) &&
          h.addChunk(this.chunkPos[o.chunkIndex], this.chunk[o.chunkIndex])
            ? o.nextChunk()
            : ((!s || n > o.to || r < o.from || s(o.from, o.to, o.value)) &&
                (h.addInner(o.from, o.to, o.value) ||
                  l.push(new Mt(o.from, o.to, o.value))),
              o.next());
      return h.finishInner(
        this.nextLayer.isEmpty && !l.length
          ? Dt.empty
          : this.nextLayer.update({
              add: l,
              filter: s,
              filterFrom: n,
              filterTo: r,
            })
      );
    }
    map(t) {
      if (t.empty || this.isEmpty) return this;
      let e = [],
        i = [],
        n = -1;
      for (let r = 0; r < this.chunk.length; r++) {
        let s = this.chunkPos[r],
          o = this.chunk[r],
          a = t.touchesRange(s, s + o.length);
        if (!1 === a)
          (n = Math.max(n, o.maxPoint)), e.push(o), i.push(t.mapPos(s));
        else if (!0 === a) {
          let { mapped: r, pos: a } = o.map(s, t);
          r && ((n = Math.max(n, r.maxPoint)), e.push(r), i.push(a));
        }
      }
      let r = this.nextLayer.map(t);
      return 0 == e.length ? r : new Dt(i, e, r, n);
    }
    between(t, e, i) {
      if (!this.isEmpty) {
        for (let n = 0; n < this.chunk.length; n++) {
          let r = this.chunkPos[n],
            s = this.chunk[n];
          if (
            e >= r &&
            t <= r + s.length &&
            !1 === s.between(r, t - r, e - r, i)
          )
            return;
        }
        this.nextLayer.between(t, e, i);
      }
    }
    iter(t = 0) {
      return jt.from([this]).goto(t);
    }
    get isEmpty() {
      return this.nextLayer == this;
    }
    static iter(t, e = 0) {
      return jt.from(t).goto(e);
    }
    static compare(t, e, i, n, r = -1) {
      let s = t.filter(
          (t) => t.maxPoint > 0 || (!t.isEmpty && t.maxPoint >= r)
        ),
        o = e.filter((t) => t.maxPoint > 0 || (!t.isEmpty && t.maxPoint >= r)),
        a = zt(s, o, i),
        l = new Yt(s, a, r),
        h = new Yt(o, a, r);
      i.iterGaps((t, e, i) => Ut(l, t, h, e, i, n)),
        i.empty && 0 == i.length && Ut(l, 0, h, 0, 0, n);
    }
    static eq(t, e, i = 0, n) {
      null == n && (n = 1e9);
      let r = t.filter((t) => !t.isEmpty && e.indexOf(t) < 0),
        s = e.filter((e) => !e.isEmpty && t.indexOf(e) < 0);
      if (r.length != s.length) return !1;
      if (!r.length) return !0;
      let o = zt(r, s),
        a = new Yt(r, o, 0).goto(i),
        l = new Yt(s, o, 0).goto(i);
      for (;;) {
        if (
          a.to != l.to ||
          !Gt(a.active, l.active) ||
          (a.point && (!l.point || !a.point.eq(l.point)))
        )
          return !1;
        if (a.to > n) return !0;
        a.next(), l.next();
      }
    }
    static spans(t, e, i, n, r = -1) {
      var s;
      let o = new Yt(
          t,
          null,
          r,
          null === (s = n.filterPoint) || void 0 === s ? void 0 : s.bind(n)
        ).goto(e),
        a = e,
        l = o.openStart;
      for (;;) {
        let t = Math.min(o.to, i);
        if (
          (o.point
            ? (n.point(a, t, o.point, o.activeForPoint(o.to), l),
              (l = o.openEnd(t) + (o.to > t ? 1 : 0)))
            : t > a && (n.span(a, t, o.active, l), (l = o.openEnd(t))),
          o.to > i)
        )
          break;
        (a = o.to), o.next();
      }
      return l;
    }
    static of(t, e = !1) {
      let i = new Et();
      for (let n of t instanceof Mt
        ? [t]
        : e
        ? (function (t) {
            if (t.length > 1)
              for (let e = t[0], i = 1; i < t.length; i++) {
                let n = t[i];
                if (_t(e, n) > 0) return t.slice().sort(_t);
                e = n;
              }
            return t;
          })(t)
        : t)
        i.add(n.from, n.to, n.value);
      return i.finish();
    }
  }
  (Dt.empty = new Dt([], [], null, -1)), (Dt.empty.nextLayer = Dt.empty);
  class Et {
    constructor() {
      (this.chunks = []),
        (this.chunkPos = []),
        (this.chunkStart = -1),
        (this.last = null),
        (this.lastFrom = -1e9),
        (this.lastTo = -1e9),
        (this.from = []),
        (this.to = []),
        (this.value = []),
        (this.maxPoint = -1),
        (this.setMaxPoint = -1),
        (this.nextLayer = null);
    }
    finishChunk(t) {
      this.chunks.push(new Lt(this.from, this.to, this.value, this.maxPoint)),
        this.chunkPos.push(this.chunkStart),
        (this.chunkStart = -1),
        (this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint)),
        (this.maxPoint = -1),
        t && ((this.from = []), (this.to = []), (this.value = []));
    }
    add(t, e, i) {
      this.addInner(t, e, i) ||
        (this.nextLayer || (this.nextLayer = new Et())).add(t, e, i);
    }
    addInner(t, e, i) {
      let n = t - this.lastTo || i.startSide - this.last.endSide;
      if (
        n <= 0 &&
        (t - this.lastFrom || i.startSide - this.last.startSide) < 0
      )
        throw new Error(
          'Ranges must be added sorted by `from` position and `startSide`'
        );
      return (
        !(n < 0) &&
        (250 == this.from.length && this.finishChunk(!0),
        this.chunkStart < 0 && (this.chunkStart = t),
        this.from.push(t - this.chunkStart),
        this.to.push(e - this.chunkStart),
        (this.last = i),
        (this.lastFrom = t),
        (this.lastTo = e),
        this.value.push(i),
        i.point && (this.maxPoint = Math.max(this.maxPoint, e - t)),
        !0)
      );
    }
    addChunk(t, e) {
      if ((t - this.lastTo || e.value[0].startSide - this.last.endSide) < 0)
        return !1;
      this.from.length && this.finishChunk(!0),
        (this.setMaxPoint = Math.max(this.setMaxPoint, e.maxPoint)),
        this.chunks.push(e),
        this.chunkPos.push(t);
      let i = e.value.length - 1;
      return (
        (this.last = e.value[i]),
        (this.lastFrom = e.from[i] + t),
        (this.lastTo = e.to[i] + t),
        !0
      );
    }
    finish() {
      return this.finishInner(Dt.empty);
    }
    finishInner(t) {
      if ((this.from.length && this.finishChunk(!1), 0 == this.chunks.length))
        return t;
      let e = new Dt(
        this.chunkPos,
        this.chunks,
        this.nextLayer ? this.nextLayer.finishInner(t) : t,
        this.setMaxPoint
      );
      return (this.from = null), e;
    }
  }
  function zt(t, e, i) {
    let n = new Map();
    for (let e of t)
      for (let t = 0; t < e.chunk.length; t++)
        e.chunk[t].maxPoint <= 0 && n.set(e.chunk[t], e.chunkPos[t]);
    let r = new Set();
    for (let t of e)
      for (let e = 0; e < t.chunk.length; e++) {
        let s = n.get(t.chunk[e]);
        null == s ||
          (i ? i.mapPos(s) : s) != t.chunkPos[e] ||
          (null == i ? void 0 : i.touchesRange(s, s + t.chunk[e].length)) ||
          r.add(t.chunk[e]);
      }
    return r;
  }
  class qt {
    constructor(t, e, i, n = 0) {
      (this.layer = t), (this.skip = e), (this.minPoint = i), (this.rank = n);
    }
    get startSide() {
      return this.value ? this.value.startSide : 0;
    }
    get endSide() {
      return this.value ? this.value.endSide : 0;
    }
    goto(t, e = -1e9) {
      return (
        (this.chunkIndex = this.rangeIndex = 0), this.gotoInner(t, e, !1), this
      );
    }
    gotoInner(t, e, i) {
      for (; this.chunkIndex < this.layer.chunk.length; ) {
        let e = this.layer.chunk[this.chunkIndex];
        if (
          !(
            (this.skip && this.skip.has(e)) ||
            this.layer.chunkEnd(this.chunkIndex) < t ||
            e.maxPoint < this.minPoint
          )
        )
          break;
        this.chunkIndex++, (i = !1);
      }
      if (this.chunkIndex < this.layer.chunk.length) {
        let n = this.layer.chunk[this.chunkIndex].findIndex(
          t - this.layer.chunkPos[this.chunkIndex],
          e,
          !0
        );
        (!i || this.rangeIndex < n) && this.setRangeIndex(n);
      }
      this.next();
    }
    forward(t, e) {
      (this.to - t || this.endSide - e) < 0 && this.gotoInner(t, e, !0);
    }
    next() {
      for (;;) {
        if (this.chunkIndex == this.layer.chunk.length) {
          (this.from = this.to = 1e9), (this.value = null);
          break;
        }
        {
          let t = this.layer.chunkPos[this.chunkIndex],
            e = this.layer.chunk[this.chunkIndex],
            i = t + e.from[this.rangeIndex];
          if (
            ((this.from = i),
            (this.to = t + e.to[this.rangeIndex]),
            (this.value = e.value[this.rangeIndex]),
            this.setRangeIndex(this.rangeIndex + 1),
            this.minPoint < 0 ||
              (this.value.point && this.to - this.from >= this.minPoint))
          )
            break;
        }
      }
    }
    setRangeIndex(t) {
      if (t == this.layer.chunk[this.chunkIndex].value.length) {
        if ((this.chunkIndex++, this.skip))
          for (
            ;
            this.chunkIndex < this.layer.chunk.length &&
            this.skip.has(this.layer.chunk[this.chunkIndex]);

          )
            this.chunkIndex++;
        this.rangeIndex = 0;
      } else this.rangeIndex = t;
    }
    nextChunk() {
      this.chunkIndex++, (this.rangeIndex = 0), this.next();
    }
    compare(t) {
      return (
        this.from - t.from ||
        this.startSide - t.startSide ||
        this.to - t.to ||
        this.endSide - t.endSide
      );
    }
  }
  class jt {
    constructor(t) {
      this.heap = t;
    }
    static from(t, e = null, i = -1) {
      let n = [];
      for (let r = 0; r < t.length; r++)
        for (let s = t[r]; !s.isEmpty; s = s.nextLayer)
          s.maxPoint >= i && n.push(new qt(s, e, i, r));
      return 1 == n.length ? n[0] : new jt(n);
    }
    get startSide() {
      return this.value ? this.value.startSide : 0;
    }
    goto(t, e = -1e9) {
      for (let i of this.heap) i.goto(t, e);
      for (let t = this.heap.length >> 1; t >= 0; t--) Vt(this.heap, t);
      return this.next(), this;
    }
    forward(t, e) {
      for (let i of this.heap) i.forward(t, e);
      for (let t = this.heap.length >> 1; t >= 0; t--) Vt(this.heap, t);
      (this.to - t || this.value.endSide - e) < 0 && this.next();
    }
    next() {
      if (0 == this.heap.length)
        (this.from = this.to = 1e9), (this.value = null), (this.rank = -1);
      else {
        let t = this.heap[0];
        (this.from = t.from),
          (this.to = t.to),
          (this.value = t.value),
          (this.rank = t.rank),
          t.value && t.next(),
          Vt(this.heap, 0);
      }
    }
  }
  function Vt(t, e) {
    for (let i = t[e]; ; ) {
      let n = 1 + (e << 1);
      if (n >= t.length) break;
      let r = t[n];
      if (
        (n + 1 < t.length && r.compare(t[n + 1]) >= 0 && ((r = t[n + 1]), n++),
        i.compare(r) < 0)
      )
        break;
      (t[n] = i), (t[e] = r), (e = n);
    }
  }
  class Yt {
    constructor(t, e, i, n = () => !0) {
      (this.minPoint = i),
        (this.filterPoint = n),
        (this.active = []),
        (this.activeTo = []),
        (this.activeRank = []),
        (this.minActive = -1),
        (this.point = null),
        (this.pointFrom = 0),
        (this.pointRank = 0),
        (this.to = -1e9),
        (this.endSide = 0),
        (this.openStart = -1),
        (this.cursor = jt.from(t, e, i));
    }
    goto(t, e = -1e9) {
      return (
        this.cursor.goto(t, e),
        (this.active.length =
          this.activeTo.length =
          this.activeRank.length =
            0),
        (this.minActive = -1),
        (this.to = t),
        (this.endSide = e),
        (this.openStart = -1),
        this.next(),
        this
      );
    }
    forward(t, e) {
      for (
        ;
        this.minActive > -1 &&
        (this.activeTo[this.minActive] - t ||
          this.active[this.minActive].endSide - e) < 0;

      )
        this.removeActive(this.minActive);
      this.cursor.forward(t, e);
    }
    removeActive(t) {
      It(this.active, t),
        It(this.activeTo, t),
        It(this.activeRank, t),
        (this.minActive = Bt(this.active, this.activeTo));
    }
    addActive(t) {
      let e = 0,
        { value: i, to: n, rank: r } = this.cursor;
      for (; e < this.activeRank.length && this.activeRank[e] <= r; ) e++;
      Nt(this.active, e, i),
        Nt(this.activeTo, e, n),
        Nt(this.activeRank, e, r),
        t && Nt(t, e, this.cursor.from),
        (this.minActive = Bt(this.active, this.activeTo));
    }
    next() {
      let t = this.to,
        e = this.point;
      this.point = null;
      let i = this.openStart < 0 ? [] : null,
        n = 0;
      for (;;) {
        let r = this.minActive;
        if (
          r > -1 &&
          (this.activeTo[r] - this.cursor.from ||
            this.active[r].endSide - this.cursor.startSide) < 0
        ) {
          if (this.activeTo[r] > t) {
            (this.to = this.activeTo[r]),
              (this.endSide = this.active[r].endSide);
            break;
          }
          this.removeActive(r), i && It(i, r);
        } else {
          if (!this.cursor.value) {
            this.to = this.endSide = 1e9;
            break;
          }
          if (this.cursor.from > t) {
            (this.to = this.cursor.from),
              (this.endSide = this.cursor.startSide);
            break;
          }
          {
            let r = this.cursor.value;
            if (r.point)
              if (
                e &&
                this.cursor.to == this.to &&
                this.cursor.from < this.cursor.to
              )
                this.cursor.next();
              else {
                if (
                  this.filterPoint(
                    this.cursor.from,
                    this.cursor.to,
                    this.cursor.value,
                    this.cursor.rank
                  )
                ) {
                  (this.point = r),
                    (this.pointFrom = this.cursor.from),
                    (this.pointRank = this.cursor.rank),
                    (this.to = this.cursor.to),
                    (this.endSide = r.endSide),
                    this.cursor.from < t && (n = 1),
                    this.cursor.next(),
                    this.to > t && this.forward(this.to, this.endSide);
                  break;
                }
                this.cursor.next();
              }
            else this.addActive(i), this.cursor.next();
          }
        }
      }
      if (i) {
        let e = 0;
        for (; e < i.length && i[e] < t; ) e++;
        this.openStart = e + n;
      }
    }
    activeForPoint(t) {
      if (!this.active.length) return this.active;
      let e = [];
      for (
        let i = this.active.length - 1;
        i >= 0 && !(this.activeRank[i] < this.pointRank);
        i--
      )
        (this.activeTo[i] > t ||
          (this.activeTo[i] == t &&
            this.active[i].endSide >= this.point.endSide)) &&
          e.push(this.active[i]);
      return e.reverse();
    }
    openEnd(t) {
      let e = 0;
      for (
        let i = this.activeTo.length - 1;
        i >= 0 && this.activeTo[i] > t;
        i--
      )
        e++;
      return e;
    }
  }
  function Ut(t, e, i, n, r, s) {
    t.goto(e), i.goto(n);
    let o = n + r,
      a = n,
      l = n - e;
    for (;;) {
      let e = t.to + l - i.to || t.endSide - i.endSide,
        n = e < 0 ? t.to + l : i.to,
        r = Math.min(n, o);
      if (
        (t.point || i.point
          ? (t.point &&
              i.point &&
              (t.point == i.point || t.point.eq(i.point)) &&
              Gt(t.activeForPoint(t.to + l), i.activeForPoint(i.to))) ||
            s.comparePoint(a, r, t.point, i.point)
          : r > a &&
            !Gt(t.active, i.active) &&
            s.compareRange(a, r, t.active, i.active),
        n > o)
      )
        break;
      (a = n), e <= 0 && t.next(), e >= 0 && i.next();
    }
  }
  function Gt(t, e) {
    if (t.length != e.length) return !1;
    for (let i = 0; i < t.length; i++)
      if (t[i] != e[i] && !t[i].eq(e[i])) return !1;
    return !0;
  }
  function It(t, e) {
    for (let i = e, n = t.length - 1; i < n; i++) t[i] = t[i + 1];
    t.pop();
  }
  function Nt(t, e, i) {
    for (let i = t.length - 1; i >= e; i--) t[i + 1] = t[i];
    t[e] = i;
  }
  function Bt(t, e) {
    let i = -1,
      n = 1e9;
    for (let r = 0; r < e.length; r++)
      (e[r] - n || t[r].endSide - t[i].endSide) < 0 && ((i = r), (n = e[r]));
    return i;
  }
  for (
    var Ft = {
        8: 'Backspace',
        9: 'Tab',
        10: 'Enter',
        12: 'NumLock',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        44: 'PrintScreen',
        45: 'Insert',
        46: 'Delete',
        59: ';',
        61: '=',
        91: 'Meta',
        92: 'Meta',
        106: '*',
        107: '+',
        108: ',',
        109: '-',
        110: '.',
        111: '/',
        144: 'NumLock',
        145: 'ScrollLock',
        160: 'Shift',
        161: 'Shift',
        162: 'Control',
        163: 'Control',
        164: 'Alt',
        165: 'Alt',
        173: '-',
        186: ';',
        187: '=',
        188: ',',
        189: '-',
        190: '.',
        191: '/',
        192: '`',
        219: '[',
        220: '\\',
        221: ']',
        222: "'",
        229: 'q',
      },
      Ht = {
        48: ')',
        49: '!',
        50: '@',
        51: '#',
        52: '$',
        53: '%',
        54: '^',
        55: '&',
        56: '*',
        57: '(',
        59: ':',
        61: '+',
        173: '_',
        186: ':',
        187: '+',
        188: '<',
        189: '_',
        190: '>',
        191: '?',
        192: '~',
        219: '{',
        220: '|',
        221: '}',
        222: '"',
        229: 'Q',
      },
      Jt =
        'undefined' != typeof navigator &&
        /Chrome\/(\d+)/.exec(navigator.userAgent),
      Kt =
        'undefined' != typeof navigator &&
        /Apple Computer/.test(navigator.vendor),
      te =
        'undefined' != typeof navigator &&
        /Gecko\/\d+/.test(navigator.userAgent),
      ee = 'undefined' != typeof navigator && /Mac/.test(navigator.platform),
      ie =
        'undefined' != typeof navigator &&
        /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(
          navigator.userAgent
        ),
      ne = (Jt && (ee || +Jt[1] < 57)) || (te && ee),
      re = 0;
    re < 10;
    re++
  )
    Ft[48 + re] = Ft[96 + re] = String(re);
  for (re = 1; re <= 24; re++) Ft[re + 111] = 'F' + re;
  for (re = 65; re <= 90; re++)
    (Ft[re] = String.fromCharCode(re + 32)), (Ht[re] = String.fromCharCode(re));
  for (var se in Ft) Ht.hasOwnProperty(se) || (Ht[se] = Ft[se]);
  function oe(t) {
    let e;
    return (
      (e = 11 == t.nodeType ? (t.getSelection ? t : t.ownerDocument) : t),
      e.getSelection()
    );
  }
  function ae(t, e) {
    return !!e && t.contains(1 != e.nodeType ? e.parentNode : e);
  }
  function le(t, e) {
    if (!e.anchorNode) return !1;
    try {
      return ae(t, e.anchorNode);
    } catch (t) {
      return !1;
    }
  }
  function he(t) {
    return 3 == t.nodeType
      ? ye(t, 0, t.nodeValue.length).getClientRects()
      : 1 == t.nodeType
      ? t.getClientRects()
      : [];
  }
  function ce(t, e, i, n) {
    return !!i && (de(t, e, i, n, -1) || de(t, e, i, n, 1));
  }
  function ue(t) {
    for (var e = 0; ; e++) if (!(t = t.previousSibling)) return e;
  }
  function de(t, e, i, n, r) {
    for (;;) {
      if (t == i && e == n) return !0;
      if (e == (r < 0 ? 0 : fe(t))) {
        if ('DIV' == t.nodeName) return !1;
        let i = t.parentNode;
        if (!i || 1 != i.nodeType) return !1;
        (e = ue(t) + (r < 0 ? 0 : 1)), (t = i);
      } else {
        if (1 != t.nodeType) return !1;
        if (
          1 == (t = t.childNodes[e + (r < 0 ? -1 : 0)]).nodeType &&
          'false' == t.contentEditable
        )
          return !1;
        e = r < 0 ? fe(t) : 0;
      }
    }
  }
  function fe(t) {
    return 3 == t.nodeType ? t.nodeValue.length : t.childNodes.length;
  }
  const Oe = { left: 0, right: 0, top: 0, bottom: 0 };
  function pe(t, e) {
    let i = e ? t.left : t.right;
    return { left: i, right: i, top: t.top, bottom: t.bottom };
  }
  function me(t) {
    return { left: 0, right: t.innerWidth, top: 0, bottom: t.innerHeight };
  }
  class ge {
    constructor() {
      (this.anchorNode = null),
        (this.anchorOffset = 0),
        (this.focusNode = null),
        (this.focusOffset = 0);
    }
    eq(t) {
      return (
        this.anchorNode == t.anchorNode &&
        this.anchorOffset == t.anchorOffset &&
        this.focusNode == t.focusNode &&
        this.focusOffset == t.focusOffset
      );
    }
    setRange(t) {
      this.set(t.anchorNode, t.anchorOffset, t.focusNode, t.focusOffset);
    }
    set(t, e, i, n) {
      (this.anchorNode = t),
        (this.anchorOffset = e),
        (this.focusNode = i),
        (this.focusOffset = n);
    }
  }
  let Qe,
    be = null;
  function ve(t) {
    if (t.setActive) return t.setActive();
    if (be) return t.focus(be);
    let e = [];
    for (
      let i = t;
      i && (e.push(i, i.scrollTop, i.scrollLeft), i != i.ownerDocument);
      i = i.parentNode
    );
    if (
      (t.focus(
        null == be
          ? {
              get preventScroll() {
                return (be = { preventScroll: !0 }), !0;
              },
            }
          : void 0
      ),
      !be)
    ) {
      be = !1;
      for (let t = 0; t < e.length; ) {
        let i = e[t++],
          n = e[t++],
          r = e[t++];
        i.scrollTop != n && (i.scrollTop = n),
          i.scrollLeft != r && (i.scrollLeft = r);
      }
    }
  }
  function ye(t, e, i = e) {
    let n = Qe || (Qe = document.createRange());
    return n.setEnd(t, i), n.setStart(t, e), n;
  }
  function we(t, e, i) {
    let n = { key: e, code: e, keyCode: i, which: i, cancelable: !0 },
      r = new KeyboardEvent('keydown', n);
    (r.synthetic = !0), t.dispatchEvent(r);
    let s = new KeyboardEvent('keyup', n);
    return (
      (s.synthetic = !0),
      t.dispatchEvent(s),
      r.defaultPrevented || s.defaultPrevented
    );
  }
  function xe(t) {
    for (; t.attributes.length; ) t.removeAttributeNode(t.attributes[0]);
  }
  class ke {
    constructor(t, e, i = !0) {
      (this.node = t), (this.offset = e), (this.precise = i);
    }
    static before(t, e) {
      return new ke(t.parentNode, ue(t), e);
    }
    static after(t, e) {
      return new ke(t.parentNode, ue(t) + 1, e);
    }
  }
  const Se = [];
  class $e {
    constructor() {
      (this.parent = null), (this.dom = null), (this.dirty = 2);
    }
    get editorView() {
      if (!this.parent)
        throw new Error('Accessing view in orphan content view');
      return this.parent.editorView;
    }
    get overrideDOMText() {
      return null;
    }
    get posAtStart() {
      return this.parent ? this.parent.posBefore(this) : 0;
    }
    get posAtEnd() {
      return this.posAtStart + this.length;
    }
    posBefore(t) {
      let e = this.posAtStart;
      for (let i of this.children) {
        if (i == t) return e;
        e += i.length + i.breakAfter;
      }
      throw new RangeError('Invalid child in posBefore');
    }
    posAfter(t) {
      return this.posBefore(t) + t.length;
    }
    coordsAt(t, e) {
      return null;
    }
    sync(t) {
      if (2 & this.dirty) {
        let e = this.dom,
          i = e.firstChild;
        for (let n of this.children) {
          if (n.dirty) {
            if (!n.dom && i) {
              let t = $e.get(i);
              (t && (t.parent || t.constructor != n.constructor)) ||
                n.reuseDOM(i);
            }
            n.sync(t), (n.dirty = 0);
          }
          if (
            (t && !t.written && t.node == e && i != n.dom && (t.written = !0),
            n.dom.parentNode == e)
          ) {
            for (; i && i != n.dom; ) i = Te(i);
            i = n.dom.nextSibling;
          } else e.insertBefore(n.dom, i);
        }
        for (i && t && t.node == e && (t.written = !0); i; ) i = Te(i);
      } else if (1 & this.dirty) for (let e of this.children) e.dirty && (e.sync(t), (e.dirty = 0));
    }
    reuseDOM(t) {}
    localPosFromDOM(t, e) {
      let i;
      if (t == this.dom) i = this.dom.childNodes[e];
      else {
        let n = 0 == fe(t) ? 0 : 0 == e ? -1 : 1;
        for (;;) {
          let e = t.parentNode;
          if (e == this.dom) break;
          0 == n &&
            e.firstChild != e.lastChild &&
            (n = t == e.firstChild ? -1 : 1),
            (t = e);
        }
        i = n < 0 ? t : t.nextSibling;
      }
      if (i == this.dom.firstChild) return 0;
      for (; i && !$e.get(i); ) i = i.nextSibling;
      if (!i) return this.length;
      for (let t = 0, e = 0; ; t++) {
        let n = this.children[t];
        if (n.dom == i) return e;
        e += n.length + n.breakAfter;
      }
    }
    domBoundsAround(t, e, i = 0) {
      let n = -1,
        r = -1,
        s = -1,
        o = -1;
      for (let a = 0, l = i, h = i; a < this.children.length; a++) {
        let i = this.children[a],
          c = l + i.length;
        if (l < t && c > e) return i.domBoundsAround(t, e, l);
        if (
          (c >= t && -1 == n && ((n = a), (r = l)),
          l > e && i.dom.parentNode == this.dom)
        ) {
          (s = a), (o = h);
          break;
        }
        (h = c), (l = c + i.breakAfter);
      }
      return {
        from: r,
        to: o < 0 ? i + this.length : o,
        startDOM:
          (n ? this.children[n - 1].dom.nextSibling : null) ||
          this.dom.firstChild,
        endDOM:
          s < this.children.length && s >= 0 ? this.children[s].dom : null,
      };
    }
    markDirty(t = !1) {
      (this.dirty |= 2), this.markParentsDirty(t);
    }
    markParentsDirty(t) {
      for (let e = this.parent; e; e = e.parent) {
        if ((t && (e.dirty |= 2), 1 & e.dirty)) return;
        (e.dirty |= 1), (t = !1);
      }
    }
    setParent(t) {
      this.parent != t &&
        ((this.parent = t), this.dirty && this.markParentsDirty(!0));
    }
    setDOM(t) {
      this.dom && (this.dom.cmView = null), (this.dom = t), (t.cmView = this);
    }
    get rootView() {
      for (let t = this; ; ) {
        let e = t.parent;
        if (!e) return t;
        t = e;
      }
    }
    replaceChildren(t, e, i = Se) {
      this.markDirty();
      for (let i = t; i < e; i++) {
        let t = this.children[i];
        t.parent == this && t.destroy();
      }
      this.children.splice(t, e - t, ...i);
      for (let t = 0; t < i.length; t++) i[t].setParent(this);
    }
    ignoreMutation(t) {
      return !1;
    }
    ignoreEvent(t) {
      return !1;
    }
    childCursor(t = this.length) {
      return new Pe(this.children, t, this.children.length);
    }
    childPos(t, e = 1) {
      return this.childCursor().findPos(t, e);
    }
    toString() {
      let t = this.constructor.name.replace('View', '');
      return (
        t +
        (this.children.length
          ? '(' + this.children.join() + ')'
          : this.length
          ? '[' + ('Text' == t ? this.text : this.length) + ']'
          : '') +
        (this.breakAfter ? '#' : '')
      );
    }
    static get(t) {
      return t.cmView;
    }
    get isEditable() {
      return !0;
    }
    merge(t, e, i, n, r, s) {
      return !1;
    }
    become(t) {
      return !1;
    }
    getSide() {
      return 0;
    }
    destroy() {
      this.parent = null;
    }
  }
  function Te(t) {
    let e = t.nextSibling;
    return t.parentNode.removeChild(t), e;
  }
  $e.prototype.breakAfter = 0;
  class Pe {
    constructor(t, e, i) {
      (this.children = t), (this.pos = e), (this.i = i), (this.off = 0);
    }
    findPos(t, e = 1) {
      for (;;) {
        if (
          t > this.pos ||
          (t == this.pos &&
            (e > 0 || 0 == this.i || this.children[this.i - 1].breakAfter))
        )
          return (this.off = t - this.pos), this;
        let i = this.children[--this.i];
        this.pos -= i.length + i.breakAfter;
      }
    }
  }
  function Re(t, e, i, n, r, s, o, a, l) {
    let { children: h } = t,
      c = h.length ? h[e] : null,
      u = s.length ? s[s.length - 1] : null,
      d = u ? u.breakAfter : o;
    if (
      !(
        e == n &&
        c &&
        !o &&
        !d &&
        s.length < 2 &&
        c.merge(i, r, s.length ? u : null, 0 == i, a, l)
      )
    ) {
      if (n < h.length) {
        let t = h[n];
        t && r < t.length
          ? (e == n && ((t = t.split(r)), (r = 0)),
            !d && u && t.merge(0, r, u, !0, 0, l)
              ? (s[s.length - 1] = t)
              : (r && t.merge(0, r, null, !1, 0, l), s.push(t)))
          : (null == t ? void 0 : t.breakAfter) &&
            (u ? (u.breakAfter = 1) : (o = 1)),
          n++;
      }
      for (
        c &&
        ((c.breakAfter = o),
        i > 0 &&
          (!o && s.length && c.merge(i, c.length, s[0], !1, a, 0)
            ? (c.breakAfter = s.shift().breakAfter)
            : (i < c.length ||
                (c.children.length &&
                  0 == c.children[c.children.length - 1].length)) &&
              c.merge(i, c.length, null, !1, a, 0),
          e++));
        e < n && s.length;

      )
        if (h[n - 1].become(s[s.length - 1]))
          n--, s.pop(), (l = s.length ? 0 : a);
        else {
          if (!h[e].become(s[0])) break;
          e++, s.shift(), (a = s.length ? 0 : l);
        }
      !s.length &&
        e &&
        n < h.length &&
        !h[e - 1].breakAfter &&
        h[n].merge(0, 0, h[e - 1], !1, a, l) &&
        e--,
        (e < n || s.length) && t.replaceChildren(e, n, s);
    }
  }
  function We(t, e, i, n, r, s) {
    let o = t.childCursor(),
      { i: a, off: l } = o.findPos(i, 1),
      { i: h, off: c } = o.findPos(e, -1),
      u = e - i;
    for (let t of n) u += t.length;
    (t.length += u), Re(t, h, c, a, l, n, 0, r, s);
  }
  let Ce =
      'undefined' != typeof navigator
        ? navigator
        : { userAgent: '', vendor: '', platform: '' },
    Ae =
      'undefined' != typeof document
        ? document
        : { documentElement: { style: {} } };
  const Xe = /Edge\/(\d+)/.exec(Ce.userAgent),
    Ze = /MSIE \d/.test(Ce.userAgent),
    Me = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Ce.userAgent),
    _e = !!(Ze || Me || Xe),
    Le = !_e && /gecko\/(\d+)/i.test(Ce.userAgent),
    De = !_e && /Chrome\/(\d+)/.exec(Ce.userAgent),
    Ee = 'webkitFontSmoothing' in Ae.documentElement.style,
    ze = !_e && /Apple Computer/.test(Ce.vendor),
    qe = ze && (/Mobile\/\w+/.test(Ce.userAgent) || Ce.maxTouchPoints > 2);
  var je = {
    mac: qe || /Mac/.test(Ce.platform),
    windows: /Win/.test(Ce.platform),
    linux: /Linux|X11/.test(Ce.platform),
    ie: _e,
    ie_version: Ze ? Ae.documentMode || 6 : Me ? +Me[1] : Xe ? +Xe[1] : 0,
    gecko: Le,
    gecko_version: Le ? +(/Firefox\/(\d+)/.exec(Ce.userAgent) || [0, 0])[1] : 0,
    chrome: !!De,
    chrome_version: De ? +De[1] : 0,
    ios: qe,
    android: /Android\b/.test(Ce.userAgent),
    webkit: Ee,
    safari: ze,
    webkit_version: Ee
      ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1]
      : 0,
    tabSize:
      null != Ae.documentElement.style.tabSize ? 'tab-size' : '-moz-tab-size',
  };
  class Ve extends $e {
    constructor(t) {
      super(), (this.text = t);
    }
    get length() {
      return this.text.length;
    }
    createDOM(t) {
      this.setDOM(t || document.createTextNode(this.text));
    }
    sync(t) {
      this.dom || this.createDOM(),
        this.dom.nodeValue != this.text &&
          (t && t.node == this.dom && (t.written = !0),
          (this.dom.nodeValue = this.text));
    }
    reuseDOM(t) {
      3 == t.nodeType && this.createDOM(t);
    }
    merge(t, e, i) {
      return (
        (!i ||
          (i instanceof Ve && !(this.length - (e - t) + i.length > 256))) &&
        ((this.text =
          this.text.slice(0, t) + (i ? i.text : '') + this.text.slice(e)),
        this.markDirty(),
        !0)
      );
    }
    split(t) {
      let e = new Ve(this.text.slice(t));
      return (this.text = this.text.slice(0, t)), this.markDirty(), e;
    }
    localPosFromDOM(t, e) {
      return t == this.dom ? e : e ? this.text.length : 0;
    }
    domAtPos(t) {
      return new ke(this.dom, t);
    }
    domBoundsAround(t, e, i) {
      return {
        from: i,
        to: i + this.length,
        startDOM: this.dom,
        endDOM: this.dom.nextSibling,
      };
    }
    coordsAt(t, e) {
      return Ue(this.dom, t, e);
    }
  }
  class Ye extends $e {
    constructor(t, e = [], i = 0) {
      super(), (this.mark = t), (this.children = e), (this.length = i);
      for (let t of e) t.setParent(this);
    }
    setAttrs(t) {
      if (
        (xe(t),
        this.mark.class && (t.className = this.mark.class),
        this.mark.attrs)
      )
        for (let e in this.mark.attrs) t.setAttribute(e, this.mark.attrs[e]);
      return t;
    }
    reuseDOM(t) {
      t.nodeName == this.mark.tagName.toUpperCase() &&
        (this.setDOM(t), (this.dirty |= 6));
    }
    sync(t) {
      this.dom
        ? 4 & this.dirty && this.setAttrs(this.dom)
        : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))),
        super.sync(t);
    }
    merge(t, e, i, n, r, s) {
      return (
        (!i ||
          !(
            !(i instanceof Ye && i.mark.eq(this.mark)) ||
            (t && r <= 0) ||
            (e < this.length && s <= 0)
          )) &&
        (We(this, t, e, i ? i.children : [], r - 1, s - 1),
        this.markDirty(),
        !0)
      );
    }
    split(t) {
      let e = [],
        i = 0,
        n = -1,
        r = 0;
      for (let s of this.children) {
        let o = i + s.length;
        o > t && e.push(i < t ? s.split(t - i) : s),
          n < 0 && i >= t && (n = r),
          (i = o),
          r++;
      }
      let s = this.length - t;
      return (
        (this.length = t),
        n > -1 && ((this.children.length = n), this.markDirty()),
        new Ye(this.mark, e, s)
      );
    }
    domAtPos(t) {
      return Be(this.dom, this.children, t);
    }
    coordsAt(t, e) {
      return He(this, t, e);
    }
  }
  function Ue(t, e, i) {
    let n = t.nodeValue.length;
    e > n && (e = n);
    let r = e,
      s = e,
      o = 0;
    (0 == e && i < 0) || (e == n && i >= 0)
      ? je.chrome || je.gecko || (e ? (r--, (o = 1)) : (s++, (o = -1)))
      : i < 0
      ? r--
      : s++;
    let a = ye(t, r, s).getClientRects();
    if (!a.length) return Oe;
    let l = a[(o ? o < 0 : i >= 0) ? 0 : a.length - 1];
    return (
      je.safari &&
        !o &&
        0 == l.width &&
        (l = Array.prototype.find.call(a, (t) => t.width) || l),
      o ? pe(l, o < 0) : l || null
    );
  }
  class Ge extends $e {
    constructor(t, e, i) {
      super(), (this.widget = t), (this.length = e), (this.side = i);
    }
    static create(t, e, i) {
      return new (t.customView || Ge)(t, e, i);
    }
    split(t) {
      let e = Ge.create(this.widget, this.length - t, this.side);
      return (this.length -= t), e;
    }
    sync() {
      (this.dom && this.widget.updateDOM(this.dom)) ||
        (this.setDOM(this.widget.toDOM(this.editorView)),
        (this.dom.contentEditable = 'false'));
    }
    getSide() {
      return this.side;
    }
    merge(t, e, i, n, r, s) {
      return (
        !(
          i &&
          (!(i instanceof Ge && this.widget.compare(i.widget)) ||
            (t > 0 && r <= 0) ||
            (e < this.length && s <= 0))
        ) && ((this.length = t + (i ? i.length : 0) + (this.length - e)), !0)
      );
    }
    become(t) {
      return (
        t.length == this.length &&
        t instanceof Ge &&
        t.side == this.side &&
        this.widget.constructor == t.widget.constructor &&
        (this.widget.eq(t.widget) || this.markDirty(!0),
        (this.widget = t.widget),
        !0)
      );
    }
    ignoreMutation() {
      return !0;
    }
    ignoreEvent(t) {
      return this.widget.ignoreEvent(t);
    }
    get overrideDOMText() {
      if (0 == this.length) return O.empty;
      let t = this;
      for (; t.parent; ) t = t.parent;
      let e = t.editorView,
        i = e && e.state.doc,
        n = this.posAtStart;
      return i ? i.slice(n, n + this.length) : O.empty;
    }
    domAtPos(t) {
      return 0 == t
        ? ke.before(this.dom)
        : ke.after(this.dom, t == this.length);
    }
    domBoundsAround() {
      return null;
    }
    coordsAt(t, e) {
      let i = this.dom.getClientRects(),
        n = null;
      if (!i.length) return Oe;
      for (
        let e = t > 0 ? i.length - 1 : 0;
        (n = i[e]), !(t > 0 ? 0 == e : e == i.length - 1 || n.top < n.bottom);
        e += t > 0 ? -1 : 1
      );
      return (0 == t && e > 0) || (t == this.length && e <= 0)
        ? n
        : pe(n, 0 == t);
    }
    get isEditable() {
      return !1;
    }
    destroy() {
      super.destroy(), this.dom && this.widget.destroy(this.dom);
    }
  }
  class Ie extends Ge {
    domAtPos(t) {
      return new ke(this.widget.text, t);
    }
    sync() {
      this.setDOM(this.widget.toDOM());
    }
    localPosFromDOM(t, e) {
      return e ? (3 == t.nodeType ? Math.min(e, this.length) : this.length) : 0;
    }
    ignoreMutation() {
      return !1;
    }
    get overrideDOMText() {
      return null;
    }
    coordsAt(t, e) {
      return Ue(this.widget.text, t, e);
    }
    get isEditable() {
      return !0;
    }
  }
  class Ne extends $e {
    constructor(t) {
      super(), (this.side = t);
    }
    get length() {
      return 0;
    }
    merge() {
      return !1;
    }
    become(t) {
      return t instanceof Ne && t.side == this.side;
    }
    split() {
      return new Ne(this.side);
    }
    sync() {
      if (!this.dom) {
        let t = document.createElement('img');
        (t.className = 'cm-widgetBuffer'), this.setDOM(t);
      }
    }
    getSide() {
      return this.side;
    }
    domAtPos(t) {
      return ke.before(this.dom);
    }
    localPosFromDOM() {
      return 0;
    }
    domBoundsAround() {
      return null;
    }
    coordsAt(t) {
      return this.dom.getBoundingClientRect();
    }
    get overrideDOMText() {
      return O.empty;
    }
  }
  function Be(t, e, i) {
    let n = 0;
    for (let r = 0; n < e.length; n++) {
      let s = e[n],
        o = r + s.length;
      if (!(o == r && s.getSide() <= 0)) {
        if (i > r && i < o && s.dom.parentNode == t) return s.domAtPos(i - r);
        if (i <= r) break;
        r = o;
      }
    }
    for (; n > 0; n--) {
      let i = e[n - 1].dom;
      if (i.parentNode == t) return ke.after(i);
    }
    return new ke(t, 0);
  }
  function Fe(t, e, i) {
    let n,
      { children: r } = t;
    i > 0 &&
    e instanceof Ye &&
    r.length &&
    (n = r[r.length - 1]) instanceof Ye &&
    n.mark.eq(e.mark)
      ? Fe(n, e.children[0], i - 1)
      : (r.push(e), e.setParent(t)),
      (t.length += e.length);
  }
  function He(t, e, i) {
    for (let n = 0, r = 0; r < t.children.length; r++) {
      let s,
        o = t.children[r],
        a = n + o.length;
      if (
        (i <= 0 || a == t.length || o.getSide() > 0 ? a >= e : a > e) &&
        (e < a ||
          r + 1 == t.children.length ||
          (s = t.children[r + 1]).length ||
          s.getSide() > 0)
      ) {
        let t = 0;
        if (a == n) {
          if (o.getSide() <= 0) continue;
          t = i = -o.getSide();
        }
        let r = o.coordsAt(Math.max(0, e - n), i);
        return t && r ? pe(r, i < 0) : r;
      }
      n = a;
    }
    let n = t.dom.lastChild;
    if (!n) return t.dom.getBoundingClientRect();
    let r = he(n);
    return r[r.length - 1] || null;
  }
  function Je(t, e) {
    for (let i in t)
      'class' == i && e.class
        ? (e.class += ' ' + t.class)
        : 'style' == i && e.style
        ? (e.style += ';' + t.style)
        : (e[i] = t[i]);
    return e;
  }
  function Ke(t, e) {
    if (t == e) return !0;
    if (!t || !e) return !1;
    let i = Object.keys(t),
      n = Object.keys(e);
    if (i.length != n.length) return !1;
    for (let r of i) if (-1 == n.indexOf(r) || t[r] !== e[r]) return !1;
    return !0;
  }
  function ti(t, e, i) {
    if (e) for (let n in e) (i && n in i) || t.removeAttribute(n);
    if (i) for (let n in i) (e && e[n] == i[n]) || t.setAttribute(n, i[n]);
  }
  Ve.prototype.children = Ge.prototype.children = Ne.prototype.children = Se;
  class ei {
    eq(t) {
      return !1;
    }
    updateDOM(t) {
      return !1;
    }
    compare(t) {
      return this == t || (this.constructor == t.constructor && this.eq(t));
    }
    get estimatedHeight() {
      return -1;
    }
    ignoreEvent(t) {
      return !0;
    }
    get customView() {
      return null;
    }
    destroy(t) {}
  }
  var ii = (function (t) {
    return (
      (t[(t.Text = 0)] = 'Text'),
      (t[(t.WidgetBefore = 1)] = 'WidgetBefore'),
      (t[(t.WidgetAfter = 2)] = 'WidgetAfter'),
      (t[(t.WidgetRange = 3)] = 'WidgetRange'),
      t
    );
  })(ii || (ii = {}));
  class ni extends Zt {
    constructor(t, e, i, n) {
      super(),
        (this.startSide = t),
        (this.endSide = e),
        (this.widget = i),
        (this.spec = n);
    }
    get heightRelevant() {
      return !1;
    }
    static mark(t) {
      return new ri(t);
    }
    static widget(t) {
      let e = t.side || 0,
        i = !!t.block;
      return (
        (e += i ? (e > 0 ? 3e8 : -4e8) : e > 0 ? 1e8 : -1e8),
        new oi(t, e, e, i, t.widget || null, !1)
      );
    }
    static replace(t) {
      let e = !!t.block,
        { start: i, end: n } = ai(t, e);
      return new oi(
        t,
        (i ? (e ? -3e8 : -1) : 4e8) - 1,
        1 + (n ? (e ? 2e8 : 1) : -5e8),
        e,
        t.widget || null,
        !0
      );
    }
    static line(t) {
      return new si(t);
    }
    static set(t, e = !1) {
      return Dt.of(t, e);
    }
    hasHeight() {
      return !!this.widget && this.widget.estimatedHeight > -1;
    }
  }
  ni.none = Dt.empty;
  class ri extends ni {
    constructor(t) {
      let { start: e, end: i } = ai(t);
      super(e ? -1 : 4e8, i ? 1 : -5e8, null, t),
        (this.tagName = t.tagName || 'span'),
        (this.class = t.class || ''),
        (this.attrs = t.attributes || null);
    }
    eq(t) {
      return (
        this == t ||
        (t instanceof ri &&
          this.tagName == t.tagName &&
          this.class == t.class &&
          Ke(this.attrs, t.attrs))
      );
    }
    range(t, e = t) {
      if (t >= e) throw new RangeError('Mark decorations may not be empty');
      return super.range(t, e);
    }
  }
  ri.prototype.point = !1;
  class si extends ni {
    constructor(t) {
      super(-2e8, -2e8, null, t);
    }
    eq(t) {
      return t instanceof si && Ke(this.spec.attributes, t.spec.attributes);
    }
    range(t, e = t) {
      if (e != t)
        throw new RangeError('Line decoration ranges must be zero-length');
      return super.range(t, e);
    }
  }
  (si.prototype.mapMode = k.TrackBefore), (si.prototype.point = !0);
  class oi extends ni {
    constructor(t, e, i, n, r, s) {
      super(e, i, r, t),
        (this.block = n),
        (this.isReplace = s),
        (this.mapMode = n
          ? e <= 0
            ? k.TrackBefore
            : k.TrackAfter
          : k.TrackDel);
    }
    get type() {
      return this.startSide < this.endSide
        ? ii.WidgetRange
        : this.startSide <= 0
        ? ii.WidgetBefore
        : ii.WidgetAfter;
    }
    get heightRelevant() {
      return this.block || (!!this.widget && this.widget.estimatedHeight >= 5);
    }
    eq(t) {
      return (
        t instanceof oi &&
        (function (t, e) {
          return t == e || !!(t && e && t.compare(e));
        })(this.widget, t.widget) &&
        this.block == t.block &&
        this.startSide == t.startSide &&
        this.endSide == t.endSide
      );
    }
    range(t, e = t) {
      if (
        this.isReplace &&
        (t > e || (t == e && this.startSide > 0 && this.endSide <= 0))
      )
        throw new RangeError('Invalid range for replacement decoration');
      if (!this.isReplace && e != t)
        throw new RangeError(
          'Widget decorations can only have zero-length ranges'
        );
      return super.range(t, e);
    }
  }
  function ai(t, e = !1) {
    let { inclusiveStart: i, inclusiveEnd: n } = t;
    return (
      null == i && (i = t.inclusive),
      null == n && (n = t.inclusive),
      { start: null != i ? i : e, end: null != n ? n : e }
    );
  }
  function li(t, e, i, n = 0) {
    let r = i.length - 1;
    r >= 0 && i[r] + n >= t ? (i[r] = Math.max(i[r], e)) : i.push(t, e);
  }
  oi.prototype.point = !0;
  class hi extends $e {
    constructor() {
      super(...arguments),
        (this.children = []),
        (this.length = 0),
        (this.prevAttrs = void 0),
        (this.attrs = null),
        (this.breakAfter = 0);
    }
    merge(t, e, i, n, r, s) {
      if (i) {
        if (!(i instanceof hi)) return !1;
        this.dom || i.transferDOM(this);
      }
      return (
        n && this.setDeco(i ? i.attrs : null),
        We(this, t, e, i ? i.children : [], r, s),
        !0
      );
    }
    split(t) {
      let e = new hi();
      if (((e.breakAfter = this.breakAfter), 0 == this.length)) return e;
      let { i: i, off: n } = this.childPos(t);
      n &&
        (e.append(this.children[i].split(n), 0),
        this.children[i].merge(n, this.children[i].length, null, !1, 0, 0),
        i++);
      for (let t = i; t < this.children.length; t++)
        e.append(this.children[t], 0);
      for (; i > 0 && 0 == this.children[i - 1].length; )
        this.children[--i].destroy();
      return (this.children.length = i), this.markDirty(), (this.length = t), e;
    }
    transferDOM(t) {
      this.dom &&
        (t.setDOM(this.dom),
        (t.prevAttrs = void 0 === this.prevAttrs ? this.attrs : this.prevAttrs),
        (this.prevAttrs = void 0),
        (this.dom = null));
    }
    setDeco(t) {
      Ke(this.attrs, t) ||
        (this.dom && ((this.prevAttrs = this.attrs), this.markDirty()),
        (this.attrs = t));
    }
    append(t, e) {
      Fe(this, t, e);
    }
    addLineDeco(t) {
      let e = t.spec.attributes,
        i = t.spec.class;
      e && (this.attrs = Je(e, this.attrs || {})),
        i && (this.attrs = Je({ class: i }, this.attrs || {}));
    }
    domAtPos(t) {
      return Be(this.dom, this.children, t);
    }
    reuseDOM(t) {
      'DIV' == t.nodeName && (this.setDOM(t), (this.dirty |= 6));
    }
    sync(t) {
      var e;
      this.dom
        ? 4 & this.dirty &&
          (xe(this.dom),
          (this.dom.className = 'cm-line'),
          (this.prevAttrs = this.attrs ? null : void 0))
        : (this.setDOM(document.createElement('div')),
          (this.dom.className = 'cm-line'),
          (this.prevAttrs = this.attrs ? null : void 0)),
        void 0 !== this.prevAttrs &&
          (ti(this.dom, this.prevAttrs, this.attrs),
          this.dom.classList.add('cm-line'),
          (this.prevAttrs = void 0)),
        super.sync(t);
      let i = this.dom.lastChild;
      for (; i && $e.get(i) instanceof Ye; ) i = i.lastChild;
      if (
        !i ||
        ('BR' != i.nodeName &&
          0 ==
            (null === (e = $e.get(i)) || void 0 === e
              ? void 0
              : e.isEditable) &&
          (!je.ios || !this.children.some((t) => t instanceof Ve)))
      ) {
        let t = document.createElement('BR');
        (t.cmIgnore = !0), this.dom.appendChild(t);
      }
    }
    measureTextSize() {
      if (0 == this.children.length || this.length > 20) return null;
      let t = 0;
      for (let e of this.children) {
        if (!(e instanceof Ve)) return null;
        let i = he(e.dom);
        if (1 != i.length) return null;
        t += i[0].width;
      }
      return {
        lineHeight: this.dom.getBoundingClientRect().height,
        charWidth: t / this.length,
      };
    }
    coordsAt(t, e) {
      return He(this, t, e);
    }
    become(t) {
      return !1;
    }
    get type() {
      return ii.Text;
    }
    static find(t, e) {
      for (let i = 0, n = 0; i < t.children.length; i++) {
        let r = t.children[i],
          s = n + r.length;
        if (s >= e) {
          if (r instanceof hi) return r;
          if (s > e) break;
        }
        n = s + r.breakAfter;
      }
      return null;
    }
  }
  class ci extends $e {
    constructor(t, e, i) {
      super(),
        (this.widget = t),
        (this.length = e),
        (this.type = i),
        (this.breakAfter = 0);
    }
    merge(t, e, i, n, r, s) {
      return (
        !(
          i &&
          (!(i instanceof ci && this.widget.compare(i.widget)) ||
            (t > 0 && r <= 0) ||
            (e < this.length && s <= 0))
        ) && ((this.length = t + (i ? i.length : 0) + (this.length - e)), !0)
      );
    }
    domAtPos(t) {
      return 0 == t
        ? ke.before(this.dom)
        : ke.after(this.dom, t == this.length);
    }
    split(t) {
      let e = this.length - t;
      this.length = t;
      let i = new ci(this.widget, e, this.type);
      return (i.breakAfter = this.breakAfter), i;
    }
    get children() {
      return Se;
    }
    sync() {
      (this.dom && this.widget.updateDOM(this.dom)) ||
        (this.setDOM(this.widget.toDOM(this.editorView)),
        (this.dom.contentEditable = 'false'));
    }
    get overrideDOMText() {
      return this.parent
        ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd)
        : O.empty;
    }
    domBoundsAround() {
      return null;
    }
    become(t) {
      return (
        t instanceof ci &&
        t.type == this.type &&
        t.widget.constructor == this.widget.constructor &&
        (t.widget.eq(this.widget) || this.markDirty(!0),
        (this.widget = t.widget),
        (this.length = t.length),
        (this.breakAfter = t.breakAfter),
        !0)
      );
    }
    ignoreMutation() {
      return !0;
    }
    ignoreEvent(t) {
      return this.widget.ignoreEvent(t);
    }
    destroy() {
      super.destroy(), this.dom && this.widget.destroy(this.dom);
    }
  }
  class ui {
    constructor(t, e, i, n) {
      (this.doc = t),
        (this.pos = e),
        (this.end = i),
        (this.disallowBlockEffectsBelow = n),
        (this.content = []),
        (this.curLine = null),
        (this.breakAtStart = 0),
        (this.pendingBuffer = 0),
        (this.atCursorPos = !0),
        (this.openStart = -1),
        (this.openEnd = -1),
        (this.text = ''),
        (this.textOff = 0),
        (this.cursor = t.iter()),
        (this.skip = e);
    }
    posCovered() {
      if (0 == this.content.length)
        return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
      let t = this.content[this.content.length - 1];
      return !(t.breakAfter || (t instanceof ci && t.type == ii.WidgetBefore));
    }
    getLine() {
      return (
        this.curLine ||
          (this.content.push((this.curLine = new hi())),
          (this.atCursorPos = !0)),
        this.curLine
      );
    }
    flushBuffer(t) {
      this.pendingBuffer &&
        (this.curLine.append(di(new Ne(-1), t), t.length),
        (this.pendingBuffer = 0));
    }
    addBlockWidget(t) {
      this.flushBuffer([]), (this.curLine = null), this.content.push(t);
    }
    finish(t) {
      t ? (this.pendingBuffer = 0) : this.flushBuffer([]),
        this.posCovered() || this.getLine();
    }
    buildText(t, e, i) {
      for (; t > 0; ) {
        if (this.textOff == this.text.length) {
          let { value: e, lineBreak: i, done: n } = this.cursor.next(this.skip);
          if (((this.skip = 0), n))
            throw new Error(
              'Ran out of text content when drawing inline views'
            );
          if (i) {
            this.posCovered() || this.getLine(),
              this.content.length
                ? (this.content[this.content.length - 1].breakAfter = 1)
                : (this.breakAtStart = 1),
              this.flushBuffer([]),
              (this.curLine = null),
              t--;
            continue;
          }
          (this.text = e), (this.textOff = 0);
        }
        let n = Math.min(this.text.length - this.textOff, t, 512);
        this.flushBuffer(e.slice(0, i)),
          this.getLine().append(
            di(new Ve(this.text.slice(this.textOff, this.textOff + n)), e),
            i
          ),
          (this.atCursorPos = !0),
          (this.textOff += n),
          (t -= n),
          (i = 0);
      }
    }
    span(t, e, i, n) {
      this.buildText(e - t, i, n),
        (this.pos = e),
        this.openStart < 0 && (this.openStart = n);
    }
    point(t, e, i, n, r) {
      let s = e - t;
      if (i instanceof oi)
        if (i.block) {
          let { type: t } = i;
          t != ii.WidgetAfter || this.posCovered() || this.getLine(),
            this.addBlockWidget(new ci(i.widget || new fi('div'), s, t));
        } else {
          let o = Ge.create(i.widget || new fi('span'), s, i.startSide),
            a =
              this.atCursorPos &&
              !o.isEditable &&
              r <= n.length &&
              (t < e || i.startSide > 0),
            l = !o.isEditable && (t < e || i.startSide <= 0),
            h = this.getLine();
          2 != this.pendingBuffer || a || (this.pendingBuffer = 0),
            this.flushBuffer(n),
            a &&
              (h.append(di(new Ne(1), n), r),
              (r = n.length + Math.max(0, r - n.length))),
            h.append(di(o, n), r),
            (this.atCursorPos = l),
            (this.pendingBuffer = l ? (t < e ? 1 : 2) : 0);
        }
      else
        this.doc.lineAt(this.pos).from == this.pos &&
          this.getLine().addLineDeco(i);
      s &&
        (this.textOff + s <= this.text.length
          ? (this.textOff += s)
          : ((this.skip += s - (this.text.length - this.textOff)),
            (this.text = ''),
            (this.textOff = 0)),
        (this.pos = e)),
        this.openStart < 0 && (this.openStart = r);
    }
    filterPoint(t, e, i, n) {
      if (n < this.disallowBlockEffectsBelow && i instanceof oi) {
        if (i.block)
          throw new RangeError(
            'Block decorations may not be specified via plugins'
          );
        if (e > this.doc.lineAt(this.pos).to)
          throw new RangeError(
            'Decorations that replace line breaks may not be specified via plugins'
          );
      }
      return !0;
    }
    static build(t, e, i, n, r) {
      let s = new ui(t, e, i, r);
      return (
        (s.openEnd = Dt.spans(n, e, i, s)),
        s.openStart < 0 && (s.openStart = s.openEnd),
        s.finish(s.openEnd),
        s
      );
    }
  }
  function di(t, e) {
    for (let i of e) t = new Ye(i, [t], t.length);
    return t;
  }
  class fi extends ei {
    constructor(t) {
      super(), (this.tag = t);
    }
    eq(t) {
      return t.tag == this.tag;
    }
    toDOM() {
      return document.createElement(this.tag);
    }
    updateDOM(t) {
      return t.nodeName.toLowerCase() == this.tag;
    }
  }
  const Oi = [],
    pi = D.define(),
    mi = D.define(),
    gi = D.define(),
    Qi = D.define(),
    bi = D.define(),
    vi = D.define(),
    yi = Ot.define({ map: (t, e) => t.map(e) }),
    wi = Ot.define({ map: (t, e) => t.map(e) });
  class xi {
    constructor(t, e = 'nearest', i = 'nearest', n = 5, r = 5) {
      (this.range = t),
        (this.y = e),
        (this.x = i),
        (this.yMargin = n),
        (this.xMargin = r);
    }
    map(t) {
      return t.empty
        ? this
        : new xi(this.range.map(t), this.y, this.x, this.yMargin, this.xMargin);
    }
  }
  const ki = Ot.define({ map: (t, e) => t.map(e) });
  function Si(t, e, i) {
    let n = t.facet(Qi);
    n.length
      ? n[0](e)
      : window.onerror
      ? window.onerror(String(e), i, void 0, void 0, e)
      : i
      ? console.error(i + ':', e)
      : console.error(e);
  }
  const $i = D.define({ combine: (t) => !t.length || t[0] });
  class Ti {
    constructor(t, e) {
      (this.field = t), (this.get = e);
    }
  }
  class Pi {
    from(t) {
      return new Ti(this, t);
    }
    static define() {
      return new Pi();
    }
  }
  (Pi.decorations = Pi.define()),
    (Pi.atomicRanges = Pi.define()),
    (Pi.scrollMargins = Pi.define());
  let Ri = 0;
  const Wi = D.define();
  class Ci {
    constructor(t, e, i) {
      (this.id = t),
        (this.create = e),
        (this.fields = i),
        (this.extension = Wi.of(this));
    }
    static define(t, e) {
      let { eventHandlers: i, provide: n, decorations: r } = e || {},
        s = [];
      if (n) for (let t of Array.isArray(n) ? n : [n]) s.push(t);
      return (
        i && s.push(Ai.from((t) => ({ plugin: t, handlers: i }))),
        r && s.push(Pi.decorations.from(r)),
        new Ci(Ri++, t, s)
      );
    }
    static fromClass(t, e) {
      return Ci.define((e) => new t(e), e);
    }
  }
  const Ai = Pi.define();
  class Xi {
    constructor(t) {
      (this.spec = t), (this.mustUpdate = null), (this.value = null);
    }
    takeField(t, e) {
      if (this.spec)
        for (let { field: i, get: n } of this.spec.fields)
          i == t && e.push(n(this.value));
    }
    update(t) {
      if (this.value) {
        if (this.mustUpdate) {
          let t = this.mustUpdate;
          if (((this.mustUpdate = null), this.value.update))
            try {
              this.value.update(t);
            } catch (e) {
              if (
                (Si(t.state, e, 'CodeMirror plugin crashed'),
                this.value.destroy)
              )
                try {
                  this.value.destroy();
                } catch (t) {}
              this.deactivate();
            }
        }
      } else if (this.spec)
        try {
          this.value = this.spec.create(t);
        } catch (e) {
          Si(t.state, e, 'CodeMirror plugin crashed'), this.deactivate();
        }
      return this;
    }
    destroy(t) {
      var e;
      if (null === (e = this.value) || void 0 === e ? void 0 : e.destroy)
        try {
          this.value.destroy();
        } catch (e) {
          Si(t.state, e, 'CodeMirror plugin crashed');
        }
    }
    deactivate() {
      this.spec = this.value = null;
    }
  }
  const Zi = D.define(),
    Mi = D.define(),
    _i = D.define(),
    Li = D.define();
  class Di {
    constructor(t, e, i, n) {
      (this.fromA = t), (this.toA = e), (this.fromB = i), (this.toB = n);
    }
    join(t) {
      return new Di(
        Math.min(this.fromA, t.fromA),
        Math.max(this.toA, t.toA),
        Math.min(this.fromB, t.fromB),
        Math.max(this.toB, t.toB)
      );
    }
    addToSet(t) {
      let e = t.length,
        i = this;
      for (; e > 0; e--) {
        let n = t[e - 1];
        if (!(n.fromA > i.toA)) {
          if (n.toA < i.fromA) break;
          (i = i.join(n)), t.splice(e - 1, 1);
        }
      }
      return t.splice(e, 0, i), t;
    }
    static extendWithRanges(t, e) {
      if (0 == e.length) return t;
      let i = [];
      for (let n = 0, r = 0, s = 0, o = 0; ; n++) {
        let a = n == t.length ? null : t[n],
          l = s - o,
          h = a ? a.fromB : 1e9;
        for (; r < e.length && e[r] < h; ) {
          let t = e[r],
            n = e[r + 1],
            s = Math.max(o, t),
            a = Math.min(h, n);
          if ((s <= a && new Di(s + l, a + l, s, a).addToSet(i), n > h)) break;
          r += 2;
        }
        if (!a) return i;
        new Di(a.fromA, a.toA, a.fromB, a.toB).addToSet(i),
          (s = a.toA),
          (o = a.toB);
      }
    }
  }
  class Ei {
    constructor(t, e, i = Oi) {
      (this.view = t),
        (this.state = e),
        (this.transactions = i),
        (this.flags = 0),
        (this.startState = t.state),
        (this.changes = $.empty(this.startState.doc.length));
      for (let t of i) this.changes = this.changes.compose(t.changes);
      let n = [];
      this.changes.iterChangedRanges((t, e, i, r) =>
        n.push(new Di(t, e, i, r))
      ),
        (this.changedRanges = n);
      let r = t.hasFocus;
      r != t.inputState.notifiedFocused &&
        ((t.inputState.notifiedFocused = r), (this.flags |= 1));
    }
    get viewportChanged() {
      return (4 & this.flags) > 0;
    }
    get heightChanged() {
      return (2 & this.flags) > 0;
    }
    get geometryChanged() {
      return this.docChanged || (10 & this.flags) > 0;
    }
    get focusChanged() {
      return (1 & this.flags) > 0;
    }
    get docChanged() {
      return !this.changes.empty;
    }
    get selectionSet() {
      return this.transactions.some((t) => t.selection);
    }
    get empty() {
      return 0 == this.flags && 0 == this.transactions.length;
    }
  }
  var zi = (function (t) {
    return (t[(t.LTR = 0)] = 'LTR'), (t[(t.RTL = 1)] = 'RTL'), t;
  })(zi || (zi = {}));
  const qi = zi.LTR,
    ji = zi.RTL;
  function Vi(t) {
    let e = [];
    for (let i = 0; i < t.length; i++) e.push(1 << +t[i]);
    return e;
  }
  const Yi = Vi(
      '88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008'
    ),
    Ui = Vi(
      '4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333'
    ),
    Gi = Object.create(null),
    Ii = [];
  for (let t of ['()', '[]', '{}']) {
    let e = t.charCodeAt(0),
      i = t.charCodeAt(1);
    (Gi[e] = i), (Gi[i] = -e);
  }
  const Ni = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
  class Bi {
    constructor(t, e, i) {
      (this.from = t), (this.to = e), (this.level = i);
    }
    get dir() {
      return this.level % 2 ? ji : qi;
    }
    side(t, e) {
      return (this.dir == e) == t ? this.to : this.from;
    }
    static find(t, e, i, n) {
      let r = -1;
      for (let s = 0; s < t.length; s++) {
        let o = t[s];
        if (o.from <= e && o.to >= e) {
          if (o.level == i) return s;
          (r < 0 ||
            (0 != n
              ? n < 0
                ? o.from < e
                : o.to > e
              : t[r].level > o.level)) &&
            (r = s);
        }
      }
      if (r < 0) throw new RangeError('Index out of range');
      return r;
    }
  }
  const Fi = [];
  function Hi(t) {
    return [new Bi(0, t, 0)];
  }
  let Ji = '';
  function Ki(t, e, i, n, s) {
    var o;
    let a = n.head - t.from,
      l = -1;
    if (0 == a) {
      if (!s || !t.length) return null;
      e[0].level != i && ((a = e[0].side(!1, i)), (l = 0));
    } else if (a == t.length) {
      if (s) return null;
      let t = e[e.length - 1];
      t.level != i && ((a = t.side(!0, i)), (l = e.length - 1));
    }
    l < 0 &&
      (l = Bi.find(
        e,
        a,
        null !== (o = n.bidiLevel) && void 0 !== o ? o : -1,
        n.assoc
      ));
    let h = e[l];
    a == h.side(s, i) && ((h = e[(l += s ? 1 : -1)]), (a = h.side(!s, i)));
    let c = s == (h.dir == i),
      u = r(t.text, a, c);
    if (
      ((Ji = t.text.slice(Math.min(a, u), Math.max(a, u))), u != h.side(s, i))
    )
      return Z.cursor(u + t.from, c ? -1 : 1, h.level);
    let d = l == (s ? e.length - 1 : 0) ? null : e[l + (s ? 1 : -1)];
    return d || h.level == i
      ? d && d.level < h.level
        ? Z.cursor(d.side(!s, i) + t.from, s ? 1 : -1, d.level)
        : Z.cursor(u + t.from, s ? -1 : 1, h.level)
      : Z.cursor(s ? t.to : t.from, s ? -1 : 1, i);
  }
  const tn = '￿';
  class en {
    constructor(t, e) {
      (this.points = t),
        (this.text = ''),
        (this.lineSeparator = e.facet($t.lineSeparator));
    }
    append(t) {
      this.text += t;
    }
    lineBreak() {
      this.text += tn;
    }
    readRange(t, e) {
      if (!t) return this;
      let i = t.parentNode;
      for (let n = t; ; ) {
        this.findPointBefore(i, n), this.readNode(n);
        let t = n.nextSibling;
        if (t == e) break;
        let r = $e.get(n),
          s = $e.get(t);
        (r && s
          ? r.breakAfter
          : (r ? r.breakAfter : nn(n)) ||
            (nn(t) && ('BR' != n.nodeName || n.cmIgnore))) && this.lineBreak(),
          (n = t);
      }
      return this.findPointBefore(i, e), this;
    }
    readTextNode(t) {
      let e = t.nodeValue;
      for (let i of this.points)
        i.node == t &&
          (i.pos = this.text.length + Math.min(i.offset, e.length));
      for (let i = 0, n = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
        let r,
          s = -1,
          o = 1;
        if (
          (this.lineSeparator
            ? ((s = e.indexOf(this.lineSeparator, i)),
              (o = this.lineSeparator.length))
            : (r = n.exec(e)) && ((s = r.index), (o = r[0].length)),
          this.append(e.slice(i, s < 0 ? e.length : s)),
          s < 0)
        )
          break;
        if ((this.lineBreak(), o > 1))
          for (let e of this.points)
            e.node == t && e.pos > this.text.length && (e.pos -= o - 1);
        i = s + o;
      }
    }
    readNode(t) {
      if (t.cmIgnore) return;
      let e = $e.get(t),
        i = e && e.overrideDOMText;
      if (null != i) {
        this.findPointInside(t, i.length);
        for (let t = i.iter(); !t.next().done; )
          t.lineBreak ? this.lineBreak() : this.append(t.value);
      } else 3 == t.nodeType ? this.readTextNode(t) : 'BR' == t.nodeName ? t.nextSibling && this.lineBreak() : 1 == t.nodeType && this.readRange(t.firstChild, null);
    }
    findPointBefore(t, e) {
      for (let i of this.points)
        i.node == t &&
          t.childNodes[i.offset] == e &&
          (i.pos = this.text.length);
    }
    findPointInside(t, e) {
      for (let i of this.points)
        (3 == t.nodeType ? i.node == t : t.contains(i.node)) &&
          (i.pos = this.text.length + Math.min(e, i.offset));
    }
  }
  function nn(t) {
    return (
      1 == t.nodeType &&
      /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(t.nodeName)
    );
  }
  class rn {
    constructor(t, e) {
      (this.node = t), (this.offset = e), (this.pos = -1);
    }
  }
  class sn extends $e {
    constructor(t) {
      super(),
        (this.view = t),
        (this.compositionDeco = ni.none),
        (this.decorations = []),
        (this.pluginDecorationLength = 0),
        (this.minWidth = 0),
        (this.minWidthFrom = 0),
        (this.minWidthTo = 0),
        (this.impreciseAnchor = null),
        (this.impreciseHead = null),
        (this.forceSelection = !1),
        (this.lastUpdate = Date.now()),
        this.setDOM(t.contentDOM),
        (this.children = [new hi()]),
        this.children[0].setParent(this),
        this.updateDeco(),
        this.updateInner([new Di(0, 0, 0, t.state.doc.length)], 0);
    }
    get root() {
      return this.view.root;
    }
    get editorView() {
      return this.view;
    }
    get length() {
      return this.view.state.doc.length;
    }
    update(t) {
      let e = t.changedRanges;
      this.minWidth > 0 &&
        e.length &&
        (e.every(
          ({ fromA: t, toA: e }) => e < this.minWidthFrom || t > this.minWidthTo
        )
          ? ((this.minWidthFrom = t.changes.mapPos(this.minWidthFrom, 1)),
            (this.minWidthTo = t.changes.mapPos(this.minWidthTo, 1)))
          : (this.minWidth = this.minWidthFrom = this.minWidthTo = 0)),
        this.view.inputState.composing < 0
          ? (this.compositionDeco = ni.none)
          : (t.transactions.length || this.dirty) &&
            (this.compositionDeco = (function (t, e) {
              let i = an(t);
              if (!i) return ni.none;
              let { from: n, to: r, node: s, text: o } = i,
                a = e.mapPos(n, 1),
                l = Math.max(a, e.mapPos(r, -1)),
                { state: h } = t,
                c =
                  3 == s.nodeType
                    ? s.nodeValue
                    : new en([], h).readRange(s.firstChild, null).text;
              if (l - a < c.length)
                if (
                  h.doc.sliceString(
                    a,
                    Math.min(h.doc.length, a + c.length),
                    tn
                  ) == c
                )
                  l = a + c.length;
                else {
                  if (h.doc.sliceString(Math.max(0, l - c.length), l, tn) != c)
                    return ni.none;
                  a = l - c.length;
                }
              else if (h.doc.sliceString(a, l, tn) != c) return ni.none;
              return ni.set(ni.replace({ widget: new ln(s, o) }).range(a, l));
            })(this.view, t.changes)),
        (je.ie || je.chrome) &&
          !this.compositionDeco.size &&
          t &&
          t.state.doc.lines != t.startState.doc.lines &&
          (this.forceSelection = !0);
      let i = (function (t, e, i) {
        let n = new cn();
        return Dt.compare(t, e, i, n), n.changes;
      })(this.decorations, this.updateDeco(), t.changes);
      return (
        (e = Di.extendWithRanges(e, i)),
        (0 != this.dirty || 0 != e.length) &&
          (this.updateInner(e, t.startState.doc.length),
          t.transactions.length && (this.lastUpdate = Date.now()),
          !0)
      );
    }
    updateInner(t, e) {
      (this.view.viewState.mustMeasureContent = !0), this.updateChildren(t, e);
      let { observer: i } = this.view;
      i.ignore(() => {
        (this.dom.style.height = this.view.viewState.contentHeight + 'px'),
          (this.dom.style.minWidth = this.minWidth ? this.minWidth + 'px' : '');
        let t =
          je.chrome || je.ios
            ? { node: i.selectionRange.focusNode, written: !1 }
            : void 0;
        this.sync(t),
          (this.dirty = 0),
          t &&
            (t.written || i.selectionRange.focusNode != t.node) &&
            (this.forceSelection = !0),
          (this.dom.style.height = '');
      });
      let n = [];
      if (
        this.view.viewport.from ||
        this.view.viewport.to < this.view.state.doc.length
      )
        for (let t of this.children)
          t instanceof ci && t.widget instanceof on && n.push(t.dom);
      i.updateGaps(n);
    }
    updateChildren(t, e) {
      let i = this.childCursor(e);
      for (let e = t.length - 1; ; e--) {
        let n = e >= 0 ? t[e] : null;
        if (!n) break;
        let { fromA: r, toA: s, fromB: o, toB: a } = n,
          {
            content: l,
            breakAtStart: h,
            openStart: c,
            openEnd: u,
          } = ui.build(
            this.view.state.doc,
            o,
            a,
            this.decorations,
            this.pluginDecorationLength
          ),
          { i: d, off: f } = i.findPos(s, 1),
          { i: O, off: p } = i.findPos(r, -1);
        Re(this, O, p, d, f, l, h, c, u);
      }
    }
    updateSelection(t = !1, e = !1) {
      if (
        (t && this.view.observer.readSelectionRange(),
        (!e && !this.mayControlSelection()) ||
          (je.ios && this.view.inputState.rapidCompositionStart))
      )
        return;
      let i = this.forceSelection;
      this.forceSelection = !1;
      let n = this.view.state.selection.main,
        r = this.domAtPos(n.anchor),
        s = n.empty ? r : this.domAtPos(n.head);
      if (
        je.gecko &&
        n.empty &&
        1 == (o = r).node.nodeType &&
        o.node.firstChild &&
        (0 == o.offset ||
          'false' == o.node.childNodes[o.offset - 1].contentEditable) &&
        (o.offset == o.node.childNodes.length ||
          'false' == o.node.childNodes[o.offset].contentEditable)
      ) {
        let t = document.createTextNode('');
        this.view.observer.ignore(() =>
          r.node.insertBefore(t, r.node.childNodes[r.offset] || null)
        ),
          (r = s = new ke(t, 0)),
          (i = !0);
      }
      var o;
      let a = this.view.observer.selectionRange;
      (!i &&
        a.focusNode &&
        ce(r.node, r.offset, a.anchorNode, a.anchorOffset) &&
        ce(s.node, s.offset, a.focusNode, a.focusOffset)) ||
        (this.view.observer.ignore(() => {
          je.android &&
            je.chrome &&
            this.dom.contains(a.focusNode) &&
            (function (t, e) {
              for (let i = t; i && i != e; i = i.assignedSlot || i.parentNode)
                if (1 == i.nodeType && 'false' == i.contentEditable) return !0;
              return !1;
            })(a.focusNode, this.dom) &&
            (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
          let t = oe(this.root);
          if (n.empty) {
            if (je.gecko) {
              let t =
                ((e = r.node),
                (i = r.offset),
                1 != e.nodeType
                  ? 0
                  : (i && 'false' == e.childNodes[i - 1].contentEditable
                      ? 1
                      : 0) |
                    (i < e.childNodes.length &&
                    'false' == e.childNodes[i].contentEditable
                      ? 2
                      : 0));
              if (t && 3 != t) {
                let e = hn(r.node, r.offset, 1 == t ? 1 : -1);
                e && (r = new ke(e, 1 == t ? 0 : e.nodeValue.length));
              }
            }
            t.collapse(r.node, r.offset),
              null != n.bidiLevel &&
                null != a.cursorBidiLevel &&
                (a.cursorBidiLevel = n.bidiLevel);
          } else if (t.extend)
            t.collapse(r.node, r.offset), t.extend(s.node, s.offset);
          else {
            let e = document.createRange();
            n.anchor > n.head && ([r, s] = [s, r]),
              e.setEnd(s.node, s.offset),
              e.setStart(r.node, r.offset),
              t.removeAllRanges(),
              t.addRange(e);
          }
          var e, i;
        }),
        this.view.observer.setSelectionRange(r, s)),
        (this.impreciseAnchor = r.precise
          ? null
          : new ke(a.anchorNode, a.anchorOffset)),
        (this.impreciseHead = s.precise
          ? null
          : new ke(a.focusNode, a.focusOffset));
    }
    enforceCursorAssoc() {
      if (this.compositionDeco.size) return;
      let t = this.view.state.selection.main,
        e = oe(this.root);
      if (!t.empty || !t.assoc || !e.modify) return;
      let i = hi.find(this, t.head);
      if (!i) return;
      let n = i.posAtStart;
      if (t.head == n || t.head == n + i.length) return;
      let r = this.coordsAt(t.head, -1),
        s = this.coordsAt(t.head, 1);
      if (!r || !s || r.bottom > s.top) return;
      let o = this.domAtPos(t.head + t.assoc);
      e.collapse(o.node, o.offset),
        e.modify('move', t.assoc < 0 ? 'forward' : 'backward', 'lineboundary');
    }
    mayControlSelection() {
      return this.view.state.facet($i)
        ? this.root.activeElement == this.dom
        : le(this.dom, this.view.observer.selectionRange);
    }
    nearest(t) {
      for (let e = t; e; ) {
        let t = $e.get(e);
        if (t && t.rootView == this) return t;
        e = e.parentNode;
      }
      return null;
    }
    posFromDOM(t, e) {
      let i = this.nearest(t);
      if (!i)
        throw new RangeError(
          'Trying to find position for a DOM position outside of the document'
        );
      return i.localPosFromDOM(t, e) + i.posAtStart;
    }
    domAtPos(t) {
      let { i: e, off: i } = this.childCursor().findPos(t, -1);
      for (; e < this.children.length - 1; ) {
        let t = this.children[e];
        if (i < t.length || t instanceof hi) break;
        e++, (i = 0);
      }
      return this.children[e].domAtPos(i);
    }
    coordsAt(t, e) {
      for (let i = this.length, n = this.children.length - 1; ; n--) {
        let r = this.children[n],
          s = i - r.breakAfter - r.length;
        if (
          t > s ||
          (t == s &&
            r.type != ii.WidgetBefore &&
            r.type != ii.WidgetAfter &&
            (!n ||
              2 == e ||
              this.children[n - 1].breakAfter ||
              (this.children[n - 1].type == ii.WidgetBefore && e > -2)))
        )
          return r.coordsAt(t - s, e);
        i = s;
      }
    }
    measureVisibleLineHeights() {
      let t = [],
        { from: e, to: i } = this.view.viewState.viewport,
        n = this.view.contentDOM.clientWidth,
        r = n > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
        s = -1;
      for (let o = 0, a = 0; a < this.children.length; a++) {
        let l = this.children[a],
          h = o + l.length;
        if (h > i) break;
        if (o >= e) {
          let e = l.dom.getBoundingClientRect();
          if ((t.push(e.height), r)) {
            let t = l.dom.lastChild,
              i = t ? he(t) : [];
            if (i.length) {
              let t = i[i.length - 1],
                r =
                  this.view.textDirection == zi.LTR
                    ? t.right - e.left
                    : e.right - t.left;
              r > s &&
                ((s = r),
                (this.minWidth = n),
                (this.minWidthFrom = o),
                (this.minWidthTo = h));
            }
          }
        }
        o = h + l.breakAfter;
      }
      return t;
    }
    measureTextSize() {
      for (let t of this.children)
        if (t instanceof hi) {
          let e = t.measureTextSize();
          if (e) return e;
        }
      let t,
        e,
        i = document.createElement('div');
      return (
        (i.className = 'cm-line'),
        (i.textContent = 'abc def ghi jkl mno pqr stu'),
        this.view.observer.ignore(() => {
          this.dom.appendChild(i);
          let n = he(i.firstChild)[0];
          (t = i.getBoundingClientRect().height),
            (e = n ? n.width / 27 : 7),
            i.remove();
        }),
        { lineHeight: t, charWidth: e }
      );
    }
    childCursor(t = this.length) {
      let e = this.children.length;
      return e && (t -= this.children[--e].length), new Pe(this.children, t, e);
    }
    computeBlockGapDeco() {
      let t = [],
        e = this.view.viewState;
      for (let i = 0, n = 0; ; n++) {
        let r = n == e.viewports.length ? null : e.viewports[n],
          s = r ? r.from - 1 : this.length;
        if (s > i) {
          let n = e.lineBlockAt(s).bottom - e.lineBlockAt(i).top;
          t.push(
            ni
              .replace({ widget: new on(n), block: !0, inclusive: !0 })
              .range(i, s)
          );
        }
        if (!r) break;
        i = r.to + 1;
      }
      return ni.set(t);
    }
    updateDeco() {
      let t = this.view.pluginField(Pi.decorations);
      return (
        (this.pluginDecorationLength = t.length),
        (this.decorations = [
          ...t,
          ...this.view.state.facet(_i),
          this.compositionDeco,
          this.computeBlockGapDeco(),
          this.view.viewState.lineGapDeco,
        ])
      );
    }
    scrollIntoView(t) {
      let e,
        { range: i } = t,
        n = this.coordsAt(
          i.head,
          i.empty ? i.assoc : i.head > i.anchor ? -1 : 1
        );
      if (!n) return;
      !i.empty &&
        (e = this.coordsAt(i.anchor, i.anchor > i.head ? -1 : 1)) &&
        (n = {
          left: Math.min(n.left, e.left),
          top: Math.min(n.top, e.top),
          right: Math.max(n.right, e.right),
          bottom: Math.max(n.bottom, e.bottom),
        });
      let r = 0,
        s = 0,
        o = 0,
        a = 0;
      for (let t of this.view.pluginField(Pi.scrollMargins))
        if (t) {
          let { left: e, right: i, top: n, bottom: l } = t;
          null != e && (r = Math.max(r, e)),
            null != i && (s = Math.max(s, i)),
            null != n && (o = Math.max(o, n)),
            null != l && (a = Math.max(a, l));
        }
      let l = {
        left: n.left - r,
        top: n.top - o,
        right: n.right + s,
        bottom: n.bottom + a,
      };
      !(function (t, e, i, n, r, s, o, a) {
        let l = t.ownerDocument,
          h = l.defaultView;
        for (let c = t; c; )
          if (1 == c.nodeType) {
            let t,
              u = c == l.body;
            if (u) t = me(h);
            else {
              if (
                c.scrollHeight <= c.clientHeight &&
                c.scrollWidth <= c.clientWidth
              ) {
                c = c.parentNode;
                continue;
              }
              let e = c.getBoundingClientRect();
              t = {
                left: e.left,
                right: e.left + c.clientWidth,
                top: e.top,
                bottom: e.top + c.clientHeight,
              };
            }
            let d = 0,
              f = 0;
            if ('nearest' == r)
              e.top < t.top
                ? ((f = -(t.top - e.top + o)),
                  i > 0 &&
                    e.bottom > t.bottom + f &&
                    (f = e.bottom - t.bottom + f + o))
                : e.bottom > t.bottom &&
                  ((f = e.bottom - t.bottom + o),
                  i < 0 && e.top - f < t.top && (f = -(t.top + f - e.top + o)));
            else {
              let n = e.bottom - e.top,
                s = t.bottom - t.top;
              f =
                ('center' == r && n <= s
                  ? e.top + n / 2 - s / 2
                  : 'start' == r || ('center' == r && i < 0)
                  ? e.top - o
                  : e.bottom - s + o) - t.top;
            }
            if (
              ('nearest' == n
                ? e.left < t.left
                  ? ((d = -(t.left - e.left + s)),
                    i > 0 &&
                      e.right > t.right + d &&
                      (d = e.right - t.right + d + s))
                  : e.right > t.right &&
                    ((d = e.right - t.right + s),
                    i < 0 &&
                      e.left < t.left + d &&
                      (d = -(t.left + d - e.left + s)))
                : (d =
                    ('center' == n
                      ? e.left + (e.right - e.left) / 2 - (t.right - t.left) / 2
                      : ('start' == n) == a
                      ? e.left - s
                      : e.right - (t.right - t.left) + s) - t.left),
              d || f)
            )
              if (u) h.scrollBy(d, f);
              else {
                if (f) {
                  let t = c.scrollTop;
                  (c.scrollTop += f), (f = c.scrollTop - t);
                }
                if (d) {
                  let t = c.scrollLeft;
                  (c.scrollLeft += d), (d = c.scrollLeft - t);
                }
                e = {
                  left: e.left - d,
                  top: e.top - f,
                  right: e.right - d,
                  bottom: e.bottom - f,
                };
              }
            if (u) break;
            (c = c.assignedSlot || c.parentNode), (n = r = 'nearest');
          } else {
            if (11 != c.nodeType) break;
            c = c.host;
          }
      })(
        this.view.scrollDOM,
        l,
        i.head < i.anchor ? -1 : 1,
        t.x,
        t.y,
        t.xMargin,
        t.yMargin,
        this.view.textDirection == zi.LTR
      );
    }
  }
  class on extends ei {
    constructor(t) {
      super(), (this.height = t);
    }
    toDOM() {
      let t = document.createElement('div');
      return this.updateDOM(t), t;
    }
    eq(t) {
      return t.height == this.height;
    }
    updateDOM(t) {
      return (t.style.height = this.height + 'px'), !0;
    }
    get estimatedHeight() {
      return this.height;
    }
  }
  function an(t) {
    let e = t.observer.selectionRange,
      i = e.focusNode && hn(e.focusNode, e.focusOffset, 0);
    if (!i) return null;
    let n = t.docView.nearest(i);
    if (!n) return null;
    if (n instanceof hi) {
      let t = i;
      for (; t.parentNode != n.dom; ) t = t.parentNode;
      let e = t.previousSibling;
      for (; e && !$e.get(e); ) e = e.previousSibling;
      let r = e ? $e.get(e).posAtEnd : n.posAtStart;
      return { from: r, to: r, node: t, text: i };
    }
    {
      for (;;) {
        let { parent: t } = n;
        if (!t) return null;
        if (t instanceof hi) break;
        n = t;
      }
      let t = n.posAtStart;
      return { from: t, to: t + n.length, node: n.dom, text: i };
    }
  }
  class ln extends ei {
    constructor(t, e) {
      super(), (this.top = t), (this.text = e);
    }
    eq(t) {
      return this.top == t.top && this.text == t.text;
    }
    toDOM() {
      return this.top;
    }
    ignoreEvent() {
      return !1;
    }
    get customView() {
      return Ie;
    }
  }
  function hn(t, e, i) {
    for (;;) {
      if (3 == t.nodeType) return t;
      if (1 == t.nodeType && e > 0 && i <= 0) e = fe((t = t.childNodes[e - 1]));
      else {
        if (!(1 == t.nodeType && e < t.childNodes.length && i >= 0))
          return null;
        (t = t.childNodes[e]), (e = 0);
      }
    }
  }
  class cn {
    constructor() {
      this.changes = [];
    }
    compareRange(t, e) {
      li(t, e, this.changes);
    }
    comparePoint(t, e) {
      li(t, e, this.changes);
    }
  }
  function un(t, e) {
    return e.left > t ? e.left - t : Math.max(0, t - e.right);
  }
  function dn(t, e) {
    return e.top > t ? e.top - t : Math.max(0, t - e.bottom);
  }
  function fn(t, e) {
    return t.top < e.bottom - 1 && t.bottom > e.top + 1;
  }
  function On(t, e) {
    return e < t.top
      ? { top: e, left: t.left, right: t.right, bottom: t.bottom }
      : t;
  }
  function pn(t, e) {
    return e > t.bottom
      ? { top: t.top, left: t.left, right: t.right, bottom: e }
      : t;
  }
  function mn(t, e, i) {
    let n, r, s, o, a, l, h, c;
    for (let u = t.firstChild; u; u = u.nextSibling) {
      let t = he(u);
      for (let d = 0; d < t.length; d++) {
        let f = t[d];
        r && fn(r, f) && (f = On(pn(f, r.bottom), r.top));
        let O = un(e, f),
          p = dn(i, f);
        if (0 == O && 0 == p)
          return 3 == u.nodeType ? gn(u, e, i) : mn(u, e, i);
        (!n || o > p || (o == p && s > O)) &&
          ((n = u), (r = f), (s = O), (o = p)),
          0 == O
            ? i > f.bottom && (!h || h.bottom < f.bottom)
              ? ((a = u), (h = f))
              : i < f.top && (!c || c.top > f.top) && ((l = u), (c = f))
            : h && fn(h, f)
            ? (h = pn(h, f.bottom))
            : c && fn(c, f) && (c = On(c, f.top));
      }
    }
    if (
      (h && h.bottom >= i
        ? ((n = a), (r = h))
        : c && c.top <= i && ((n = l), (r = c)),
      !n)
    )
      return { node: t, offset: 0 };
    let u = Math.max(r.left, Math.min(r.right, e));
    return 3 == n.nodeType
      ? gn(n, u, i)
      : s || 'true' != n.contentEditable
      ? {
          node: t,
          offset:
            Array.prototype.indexOf.call(t.childNodes, n) +
            (e >= (r.left + r.right) / 2 ? 1 : 0),
        }
      : mn(n, u, i);
  }
  function gn(t, e, i) {
    let n = t.nodeValue.length,
      r = -1,
      s = 1e9,
      o = 0;
    for (let a = 0; a < n; a++) {
      let n = ye(t, a, a + 1).getClientRects();
      for (let l = 0; l < n.length; l++) {
        let h = n[l];
        if (h.top == h.bottom) continue;
        o || (o = e - h.left);
        let c = (h.top > i ? h.top - i : i - h.bottom) - 1;
        if (h.left - 1 <= e && h.right + 1 >= e && c < s) {
          let i = e >= (h.left + h.right) / 2,
            n = i;
          if (je.chrome || je.gecko) {
            ye(t, a).getBoundingClientRect().left == h.right && (n = !i);
          }
          if (c <= 0) return { node: t, offset: a + (n ? 1 : 0) };
          (r = a + (n ? 1 : 0)), (s = c);
        }
      }
    }
    return { node: t, offset: r > -1 ? r : o > 0 ? t.nodeValue.length : 0 };
  }
  function Qn(t, { x: e, y: i }, n, r = -1) {
    var s;
    let o,
      a = t.contentDOM.getBoundingClientRect(),
      l = a.top + t.viewState.paddingTop,
      { docHeight: h } = t.viewState,
      c = i - l;
    if (c < 0) return 0;
    if (c > h) return t.state.doc.length;
    for (
      let e = t.defaultLineHeight / 2, i = !1;
      (o = t.elementAtHeight(c)), o.type != ii.Text;

    )
      for (; (c = r > 0 ? o.bottom + e : o.top - e), !(c >= 0 && c <= h); ) {
        if (i) return n ? null : 0;
        (i = !0), (r = -r);
      }
    i = l + c;
    let u = o.from;
    if (u < t.viewport.from)
      return 0 == t.viewport.from ? 0 : n ? null : bn(t, a, o, e, i);
    if (u > t.viewport.to)
      return t.viewport.to == t.state.doc.length
        ? t.state.doc.length
        : n
        ? null
        : bn(t, a, o, e, i);
    let d = t.dom.ownerDocument,
      f = t.root.elementFromPoint ? t.root : d,
      O = f.elementFromPoint(e, i);
    O && !t.contentDOM.contains(O) && (O = null),
      O ||
        ((e = Math.max(a.left + 1, Math.min(a.right - 1, e))),
        (O = f.elementFromPoint(e, i)),
        O && !t.contentDOM.contains(O) && (O = null));
    let p,
      m = -1;
    if (
      O &&
      0 !=
        (null === (s = t.docView.nearest(O)) || void 0 === s
          ? void 0
          : s.isEditable)
    )
      if (d.caretPositionFromPoint) {
        let t = d.caretPositionFromPoint(e, i);
        t && ({ offsetNode: p, offset: m } = t);
      } else if (d.caretRangeFromPoint) {
        let t = d.caretRangeFromPoint(e, i);
        t &&
          (({ startContainer: p, startOffset: m } = t),
          je.safari &&
            (function (t, e, i) {
              let n;
              if (3 != t.nodeType || e != (n = t.nodeValue.length)) return !1;
              for (let e = t.nextSibling; e; e = e.nextSibling)
                if (1 != e.nodeType || 'BR' != e.nodeName) return !1;
              return ye(t, n - 1, n).getBoundingClientRect().left > i;
            })(p, m, e) &&
            (p = void 0));
      }
    if (!p || !t.docView.dom.contains(p)) {
      let n = hi.find(t.docView, u);
      if (!n) return c > o.top + o.height / 2 ? o.to : o.from;
      ({ node: p, offset: m } = mn(n.dom, e, i));
    }
    return t.docView.posFromDOM(p, m);
  }
  function bn(t, e, i, n, r) {
    let s = Math.round((n - e.left) * t.defaultCharacterWidth);
    if (t.lineWrapping && i.height > 1.5 * t.defaultLineHeight) {
      s +=
        Math.floor((r - i.top) / t.defaultLineHeight) *
        t.viewState.heightOracle.lineLength;
    }
    let o = t.state.sliceDoc(i.from, i.to);
    return i.from + f(o, s, t.state.tabSize);
  }
  function vn(t, e, i, n) {
    let r = t.state.doc.lineAt(e.head),
      s = t.bidiSpans(r);
    for (let o = e, a = null; ; ) {
      let e = Ki(r, s, t.textDirection, o, i),
        l = Ji;
      if (!e) {
        if (r.number == (i ? t.state.doc.lines : 1)) return o;
        (l = '\n'),
          (r = t.state.doc.line(r.number + (i ? 1 : -1))),
          (s = t.bidiSpans(r)),
          (e = Z.cursor(i ? r.from : r.to));
      }
      if (a) {
        if (!a(l)) return o;
      } else {
        if (!n) return e;
        a = n(l);
      }
      o = e;
    }
  }
  function yn(t, e, i) {
    let n = t.pluginField(Pi.atomicRanges);
    for (;;) {
      let t = !1;
      for (let r of n)
        r.between(i.from - 1, i.from + 1, (n, r, s) => {
          i.from > n &&
            i.from < r &&
            ((i = e.from > i.from ? Z.cursor(n, 1) : Z.cursor(r, -1)),
            (t = !0));
        });
      if (!t) return i;
    }
  }
  class wn {
    constructor(t) {
      (this.lastKeyCode = 0),
        (this.lastKeyTime = 0),
        (this.pendingIOSKey = void 0),
        (this.lastSelectionOrigin = null),
        (this.lastSelectionTime = 0),
        (this.lastEscPress = 0),
        (this.lastContextMenu = 0),
        (this.scrollHandlers = []),
        (this.registeredEvents = []),
        (this.customHandlers = []),
        (this.composing = -1),
        (this.compositionFirstChange = null),
        (this.compositionEndedAt = 0),
        (this.rapidCompositionStart = !1),
        (this.mouseSelection = null);
      for (let e in Tn) {
        let i = Tn[e];
        t.contentDOM.addEventListener(e, (n) => {
          ('keydown' == e && this.keydown(t, n)) ||
            ($n(t, n) &&
              !this.ignoreDuringComposition(n) &&
              (this.mustFlushObserver(n) && t.observer.forceFlush(),
              this.runCustomHandlers(e, t, n) ? n.preventDefault() : i(t, n)));
        }),
          this.registeredEvents.push(e);
      }
      (this.notifiedFocused = t.hasFocus),
        this.ensureHandlers(t),
        je.safari && t.contentDOM.addEventListener('input', () => null);
    }
    setSelectionOrigin(t) {
      (this.lastSelectionOrigin = t), (this.lastSelectionTime = Date.now());
    }
    ensureHandlers(t) {
      let e = (this.customHandlers = t.pluginField(Ai));
      for (let i of e)
        for (let e in i.handlers)
          this.registeredEvents.indexOf(e) < 0 &&
            'scroll' != e &&
            (this.registeredEvents.push(e),
            t.contentDOM.addEventListener(e, (i) => {
              $n(t, i) && this.runCustomHandlers(e, t, i) && i.preventDefault();
            }));
    }
    runCustomHandlers(t, e, i) {
      for (let n of this.customHandlers) {
        let r = n.handlers[t];
        if (r)
          try {
            if (r.call(n.plugin, i, e) || i.defaultPrevented) return !0;
          } catch (t) {
            Si(e.state, t);
          }
      }
      return !1;
    }
    runScrollHandlers(t, e) {
      for (let i of this.customHandlers) {
        let n = i.handlers.scroll;
        if (n)
          try {
            n.call(i.plugin, e, t);
          } catch (e) {
            Si(t.state, e);
          }
      }
    }
    keydown(t, e) {
      if (
        ((this.lastKeyCode = e.keyCode),
        (this.lastKeyTime = Date.now()),
        this.screenKeyEvent(t, e))
      )
        return !0;
      if (
        je.android &&
        je.chrome &&
        !e.synthetic &&
        (13 == e.keyCode || 8 == e.keyCode)
      )
        return t.observer.delayAndroidKey(e.key, e.keyCode), !0;
      let i;
      return (
        !(
          !je.ios ||
          !(i = xn.find((t) => t.keyCode == e.keyCode)) ||
          e.ctrlKey ||
          e.altKey ||
          e.metaKey ||
          e.synthetic
        ) &&
        ((this.pendingIOSKey = i),
        setTimeout(() => this.flushIOSKey(t), 250),
        !0)
      );
    }
    flushIOSKey(t) {
      let e = this.pendingIOSKey;
      return (
        !!e &&
        ((this.pendingIOSKey = void 0), we(t.contentDOM, e.key, e.keyCode))
      );
    }
    ignoreDuringComposition(t) {
      return (
        !!/^key/.test(t.type) &&
        (this.composing > 0 ||
          (!!(je.safari && Date.now() - this.compositionEndedAt < 500) &&
            ((this.compositionEndedAt = 0), !0)))
      );
    }
    screenKeyEvent(t, e) {
      let i = 9 == e.keyCode && Date.now() < this.lastEscPress + 2e3;
      return (
        27 == e.keyCode
          ? (this.lastEscPress = Date.now())
          : kn.indexOf(e.keyCode) < 0 && (this.lastEscPress = 0),
        i
      );
    }
    mustFlushObserver(t) {
      return (
        ('keydown' == t.type && 229 != t.keyCode) ||
        ('compositionend' == t.type && !je.ios)
      );
    }
    startMouseSelection(t) {
      this.mouseSelection && this.mouseSelection.destroy(),
        (this.mouseSelection = t);
    }
    update(t) {
      this.mouseSelection && this.mouseSelection.update(t),
        t.transactions.length &&
          (this.lastKeyCode = this.lastSelectionTime = 0);
    }
    destroy() {
      this.mouseSelection && this.mouseSelection.destroy();
    }
  }
  const xn = [
      { key: 'Backspace', keyCode: 8, inputType: 'deleteContentBackward' },
      { key: 'Enter', keyCode: 13, inputType: 'insertParagraph' },
      { key: 'Delete', keyCode: 46, inputType: 'deleteContentForward' },
    ],
    kn = [16, 17, 18, 20, 91, 92, 224, 225];
  class Sn {
    constructor(t, e, i, n) {
      (this.view = t),
        (this.style = i),
        (this.mustSelect = n),
        (this.lastEvent = e);
      let r = t.contentDOM.ownerDocument;
      r.addEventListener('mousemove', (this.move = this.move.bind(this))),
        r.addEventListener('mouseup', (this.up = this.up.bind(this))),
        (this.extend = e.shiftKey),
        (this.multiple =
          t.state.facet($t.allowMultipleSelections) &&
          (function (t, e) {
            let i = t.state.facet(pi);
            return i.length ? i[0](e) : je.mac ? e.metaKey : e.ctrlKey;
          })(t, e)),
        (this.dragMove = (function (t, e) {
          let i = t.state.facet(mi);
          return i.length ? i[0](e) : je.mac ? !e.altKey : !e.ctrlKey;
        })(t, e)),
        (this.dragging =
          !(
            !(function (t, e) {
              let { main: i } = t.state.selection;
              if (i.empty) return !1;
              let n = oe(t.root);
              if (0 == n.rangeCount) return !0;
              let r = n.getRangeAt(0).getClientRects();
              for (let t = 0; t < r.length; t++) {
                let i = r[t];
                if (
                  i.left <= e.clientX &&
                  i.right >= e.clientX &&
                  i.top <= e.clientY &&
                  i.bottom >= e.clientY
                )
                  return !0;
              }
              return !1;
            })(t, e) || 1 != zn(e)
          ) && null),
        !1 === this.dragging && (e.preventDefault(), this.select(e));
    }
    move(t) {
      if (0 == t.buttons) return this.destroy();
      !1 === this.dragging && this.select((this.lastEvent = t));
    }
    up(t) {
      null == this.dragging && this.select(this.lastEvent),
        this.dragging || t.preventDefault(),
        this.destroy();
    }
    destroy() {
      let t = this.view.contentDOM.ownerDocument;
      t.removeEventListener('mousemove', this.move),
        t.removeEventListener('mouseup', this.up),
        (this.view.inputState.mouseSelection = null);
    }
    select(t) {
      let e = this.style.get(t, this.extend, this.multiple);
      (!this.mustSelect &&
        e.eq(this.view.state.selection) &&
        e.main.assoc == this.view.state.selection.main.assoc) ||
        this.view.dispatch({
          selection: e,
          userEvent: 'select.pointer',
          scrollIntoView: !0,
        }),
        (this.mustSelect = !1);
    }
    update(t) {
      t.docChanged &&
        this.dragging &&
        (this.dragging = this.dragging.map(t.changes)),
        this.style.update(t) &&
          setTimeout(() => this.select(this.lastEvent), 20);
    }
  }
  function $n(t, e) {
    if (!e.bubbles) return !0;
    if (e.defaultPrevented) return !1;
    for (let i, n = e.target; n != t.contentDOM; n = n.parentNode)
      if (!n || 11 == n.nodeType || ((i = $e.get(n)) && i.ignoreEvent(e)))
        return !1;
    return !0;
  }
  const Tn = Object.create(null),
    Pn = (je.ie && je.ie_version < 15) || (je.ios && je.webkit_version < 604);
  function Rn(t, e) {
    let i,
      { state: n } = t,
      r = 1,
      s = n.toText(e),
      o = s.lines == n.selection.ranges.length,
      a =
        null != jn &&
        n.selection.ranges.every((t) => t.empty) &&
        jn == s.toString();
    if (a) {
      let t = -1;
      i = n.changeByRange((i) => {
        let a = n.doc.lineAt(i.from);
        if (a.from == t) return { range: i };
        t = a.from;
        let l = n.toText((o ? s.line(r++).text : e) + n.lineBreak);
        return {
          changes: { from: a.from, insert: l },
          range: Z.cursor(i.from + l.length),
        };
      });
    } else
      i = o
        ? n.changeByRange((t) => {
            let e = s.line(r++);
            return {
              changes: { from: t.from, to: t.to, insert: e.text },
              range: Z.cursor(t.from + e.length),
            };
          })
        : n.replaceSelection(s);
    t.dispatch(i, { userEvent: 'input.paste', scrollIntoView: !0 });
  }
  Tn.keydown = (t, e) => {
    t.inputState.setSelectionOrigin('select');
  };
  let Wn = 0;
  function Cn(t, e, i, n) {
    if (1 == n) return Z.cursor(e, i);
    if (2 == n)
      return (function (t, e, i = 1) {
        let n = t.charCategorizer(e),
          s = t.doc.lineAt(e),
          o = e - s.from;
        if (0 == s.length) return Z.cursor(e);
        0 == o ? (i = 1) : o == s.length && (i = -1);
        let a = o,
          l = o;
        i < 0 ? (a = r(s.text, o, !1)) : (l = r(s.text, o));
        let h = n(s.text.slice(a, l));
        for (; a > 0; ) {
          let t = r(s.text, a, !1);
          if (n(s.text.slice(t, a)) != h) break;
          a = t;
        }
        for (; l < s.length; ) {
          let t = r(s.text, l);
          if (n(s.text.slice(l, t)) != h) break;
          l = t;
        }
        return Z.range(a + s.from, l + s.from);
      })(t.state, e, i);
    {
      let i = hi.find(t.docView, e),
        n = t.state.doc.lineAt(i ? i.posAtEnd : e),
        r = i ? i.posAtStart : n.from,
        s = i ? i.posAtEnd : n.to;
      return s < t.state.doc.length && s == n.to && s++, Z.range(r, s);
    }
  }
  (Tn.touchstart = (t, e) => {
    (Wn = Date.now()), t.inputState.setSelectionOrigin('select.pointer');
  }),
    (Tn.touchmove = (t) => {
      t.inputState.setSelectionOrigin('select.pointer');
    }),
    (Tn.mousedown = (t, e) => {
      if ((t.observer.flush(), Wn > Date.now() - 2e3 && 1 == zn(e))) return;
      let i = null;
      for (let n of t.state.facet(gi)) if (((i = n(t, e)), i)) break;
      if (
        (i ||
          0 != e.button ||
          (i = (function (t, e) {
            let i = Mn(t, e),
              n = zn(e),
              r = t.state.selection,
              s = i,
              o = e;
            return {
              update(t) {
                t.docChanged &&
                  (i && (i.pos = t.changes.mapPos(i.pos)),
                  (r = r.map(t.changes)),
                  (o = null));
              },
              get(e, a, l) {
                let h;
                if (
                  (o && e.clientX == o.clientX && e.clientY == o.clientY
                    ? (h = s)
                    : ((h = s = Mn(t, e)), (o = e)),
                  !h || !i)
                )
                  return r;
                let c = Cn(t, h.pos, h.bias, n);
                if (i.pos != h.pos && !a) {
                  let e = Cn(t, i.pos, i.bias, n),
                    r = Math.min(e.from, c.from),
                    s = Math.max(e.to, c.to);
                  c = r < c.from ? Z.range(r, s) : Z.range(s, r);
                }
                return a
                  ? r.replaceRange(r.main.extend(c.from, c.to))
                  : l
                  ? r.addRange(c)
                  : Z.create([c]);
              },
            };
          })(t, e)),
        i)
      ) {
        let n = t.root.activeElement != t.contentDOM;
        n && t.observer.ignore(() => ve(t.contentDOM)),
          t.inputState.startMouseSelection(new Sn(t, e, i, n));
      }
    });
  let An = (t, e) => t >= e.top && t <= e.bottom,
    Xn = (t, e, i) => An(e, i) && t >= i.left && t <= i.right;
  function Zn(t, e, i, n) {
    let r = hi.find(t.docView, e);
    if (!r) return 1;
    let s = e - r.posAtStart;
    if (0 == s) return 1;
    if (s == r.length) return -1;
    let o = r.coordsAt(s, -1);
    if (o && Xn(i, n, o)) return -1;
    let a = r.coordsAt(s, 1);
    return a && Xn(i, n, a) ? 1 : o && An(n, o) ? -1 : 1;
  }
  function Mn(t, e) {
    let i = t.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
    return { pos: i, bias: Zn(t, i, e.clientX, e.clientY) };
  }
  const _n = je.ie && je.ie_version <= 11;
  let Ln = null,
    Dn = 0,
    En = 0;
  function zn(t) {
    if (!_n) return t.detail;
    let e = Ln,
      i = En;
    return (
      (Ln = t),
      (En = Date.now()),
      (Dn =
        !e ||
        (i > Date.now() - 400 &&
          Math.abs(e.clientX - t.clientX) < 2 &&
          Math.abs(e.clientY - t.clientY) < 2)
          ? (Dn + 1) % 3
          : 1)
    );
  }
  function qn(t, e, i, n) {
    if (!i) return;
    let r = t.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
    e.preventDefault();
    let { mouseSelection: s } = t.inputState,
      o =
        n && s && s.dragging && s.dragMove
          ? { from: s.dragging.from, to: s.dragging.to }
          : null,
      a = { from: r, insert: i },
      l = t.state.changes(o ? [o, a] : a);
    t.focus(),
      t.dispatch({
        changes: l,
        selection: { anchor: l.mapPos(r, -1), head: l.mapPos(r, 1) },
        userEvent: o ? 'move.drop' : 'input.drop',
      });
  }
  (Tn.dragstart = (t, e) => {
    let {
        selection: { main: i },
      } = t.state,
      { mouseSelection: n } = t.inputState;
    n && (n.dragging = i),
      e.dataTransfer &&
        (e.dataTransfer.setData('Text', t.state.sliceDoc(i.from, i.to)),
        (e.dataTransfer.effectAllowed = 'copyMove'));
  }),
    (Tn.drop = (t, e) => {
      if (!e.dataTransfer) return;
      if (t.state.readOnly) return e.preventDefault();
      let i = e.dataTransfer.files;
      if (i && i.length) {
        e.preventDefault();
        let n = Array(i.length),
          r = 0,
          s = () => {
            ++r == i.length &&
              qn(t, e, n.filter((t) => null != t).join(t.state.lineBreak), !1);
          };
        for (let t = 0; t < i.length; t++) {
          let e = new FileReader();
          (e.onerror = s),
            (e.onload = () => {
              /[\x00-\x08\x0e-\x1f]{2}/.test(e.result) || (n[t] = e.result),
                s();
            }),
            e.readAsText(i[t]);
        }
      } else qn(t, e, e.dataTransfer.getData('Text'), !0);
    }),
    (Tn.paste = (t, e) => {
      if (t.state.readOnly) return e.preventDefault();
      t.observer.flush();
      let i = Pn ? null : e.clipboardData;
      i
        ? (Rn(t, i.getData('text/plain')), e.preventDefault())
        : (function (t) {
            let e = t.dom.parentNode;
            if (!e) return;
            let i = e.appendChild(document.createElement('textarea'));
            (i.style.cssText = 'position: fixed; left: -10000px; top: 10px'),
              i.focus(),
              setTimeout(() => {
                t.focus(), i.remove(), Rn(t, i.value);
              }, 50);
          })(t);
    });
  let jn = null;
  function Vn(t, e) {
    if (t.docView.compositionDeco.size) {
      t.inputState.rapidCompositionStart = e;
      try {
        t.update([]);
      } finally {
        t.inputState.rapidCompositionStart = !1;
      }
    }
  }
  (Tn.copy = Tn.cut =
    (t, e) => {
      let {
        text: i,
        ranges: n,
        linewise: r,
      } = (function (t) {
        let e = [],
          i = [],
          n = !1;
        for (let n of t.selection.ranges)
          n.empty || (e.push(t.sliceDoc(n.from, n.to)), i.push(n));
        if (!e.length) {
          let r = -1;
          for (let { from: n } of t.selection.ranges) {
            let s = t.doc.lineAt(n);
            s.number > r &&
              (e.push(s.text),
              i.push({ from: s.from, to: Math.min(t.doc.length, s.to + 1) })),
              (r = s.number);
          }
          n = !0;
        }
        return { text: e.join(t.lineBreak), ranges: i, linewise: n };
      })(t.state);
      if (!i && !r) return;
      jn = r ? i : null;
      let s = Pn ? null : e.clipboardData;
      s
        ? (e.preventDefault(), s.clearData(), s.setData('text/plain', i))
        : (function (t, e) {
            let i = t.dom.parentNode;
            if (!i) return;
            let n = i.appendChild(document.createElement('textarea'));
            (n.style.cssText = 'position: fixed; left: -10000px; top: 10px'),
              (n.value = e),
              n.focus(),
              (n.selectionEnd = e.length),
              (n.selectionStart = 0),
              setTimeout(() => {
                n.remove(), t.focus();
              }, 50);
          })(t, i),
        'cut' != e.type ||
          t.state.readOnly ||
          t.dispatch({
            changes: n,
            scrollIntoView: !0,
            userEvent: 'delete.cut',
          });
    }),
    (Tn.focus = Tn.blur =
      (t) => {
        setTimeout(() => {
          t.hasFocus != t.inputState.notifiedFocused && t.update([]);
        }, 10);
      }),
    (Tn.beforeprint = (t) => {
      (t.viewState.printing = !0),
        t.requestMeasure(),
        setTimeout(() => {
          (t.viewState.printing = !1), t.requestMeasure();
        }, 2e3);
    }),
    (Tn.compositionstart = Tn.compositionupdate =
      (t) => {
        null == t.inputState.compositionFirstChange &&
          (t.inputState.compositionFirstChange = !0),
          t.inputState.composing < 0 &&
            ((t.inputState.composing = 0),
            t.docView.compositionDeco.size && (t.observer.flush(), Vn(t, !0)));
      }),
    (Tn.compositionend = (t) => {
      (t.inputState.composing = -1),
        (t.inputState.compositionEndedAt = Date.now()),
        (t.inputState.compositionFirstChange = null),
        setTimeout(() => {
          t.inputState.composing < 0 && Vn(t, !1);
        }, 50);
    }),
    (Tn.contextmenu = (t) => {
      t.inputState.lastContextMenu = Date.now();
    }),
    (Tn.beforeinput = (t, e) => {
      var i;
      let n;
      if (
        je.chrome &&
        je.android &&
        (n = xn.find((t) => t.inputType == e.inputType)) &&
        (t.observer.delayAndroidKey(n.key, n.keyCode),
        'Backspace' == n.key || 'Delete' == n.key)
      ) {
        let e =
          (null === (i = window.visualViewport) || void 0 === i
            ? void 0
            : i.height) || 0;
        setTimeout(() => {
          var i;
          ((null === (i = window.visualViewport) || void 0 === i
            ? void 0
            : i.height) || 0) >
            e + 10 &&
            t.hasFocus &&
            (t.contentDOM.blur(), t.focus());
        }, 100);
      }
    });
  const Yn = ['pre-wrap', 'normal', 'pre-line', 'break-spaces'];
  class Un {
    constructor() {
      (this.doc = O.empty),
        (this.lineWrapping = !1),
        (this.direction = zi.LTR),
        (this.heightSamples = {}),
        (this.lineHeight = 14),
        (this.charWidth = 7),
        (this.lineLength = 30),
        (this.heightChanged = !1);
    }
    heightForGap(t, e) {
      let i = this.doc.lineAt(e).number - this.doc.lineAt(t).number + 1;
      return (
        this.lineWrapping &&
          (i += Math.ceil(
            (e - t - i * this.lineLength * 0.5) / this.lineLength
          )),
        this.lineHeight * i
      );
    }
    heightForLine(t) {
      if (!this.lineWrapping) return this.lineHeight;
      return (
        (1 +
          Math.max(
            0,
            Math.ceil((t - this.lineLength) / (this.lineLength - 5))
          )) *
        this.lineHeight
      );
    }
    setDoc(t) {
      return (this.doc = t), this;
    }
    mustRefreshForStyle(t, e) {
      return Yn.indexOf(t) > -1 != this.lineWrapping || this.direction != e;
    }
    mustRefreshForHeights(t) {
      let e = !1;
      for (let i = 0; i < t.length; i++) {
        let n = t[i];
        n < 0
          ? i++
          : this.heightSamples[Math.floor(10 * n)] ||
            ((e = !0), (this.heightSamples[Math.floor(10 * n)] = !0));
      }
      return e;
    }
    refresh(t, e, i, n, r, s) {
      let o = Yn.indexOf(t) > -1,
        a =
          Math.round(i) != Math.round(this.lineHeight) ||
          this.lineWrapping != o ||
          this.direction != e;
      if (
        ((this.lineWrapping = o),
        (this.direction = e),
        (this.lineHeight = i),
        (this.charWidth = n),
        (this.lineLength = r),
        a)
      ) {
        this.heightSamples = {};
        for (let t = 0; t < s.length; t++) {
          let e = s[t];
          e < 0 ? t++ : (this.heightSamples[Math.floor(10 * e)] = !0);
        }
      }
      return a;
    }
  }
  class Gn {
    constructor(t, e) {
      (this.from = t), (this.heights = e), (this.index = 0);
    }
    get more() {
      return this.index < this.heights.length;
    }
  }
  class In {
    constructor(t, e, i, n, r) {
      (this.from = t),
        (this.length = e),
        (this.top = i),
        (this.height = n),
        (this.type = r);
    }
    get to() {
      return this.from + this.length;
    }
    get bottom() {
      return this.top + this.height;
    }
    join(t) {
      let e = (Array.isArray(this.type) ? this.type : [this]).concat(
        Array.isArray(t.type) ? t.type : [t]
      );
      return new In(
        this.from,
        this.length + t.length,
        this.top,
        this.height + t.height,
        e
      );
    }
    moveY(t) {
      return t
        ? new In(
            this.from,
            this.length,
            this.top + t,
            this.height,
            Array.isArray(this.type)
              ? this.type.map((e) => e.moveY(t))
              : this.type
          )
        : this;
    }
  }
  var Nn = (function (t) {
    return (
      (t[(t.ByPos = 0)] = 'ByPos'),
      (t[(t.ByHeight = 1)] = 'ByHeight'),
      (t[(t.ByPosNoHeight = 2)] = 'ByPosNoHeight'),
      t
    );
  })(Nn || (Nn = {}));
  const Bn = 0.001;
  class Fn {
    constructor(t, e, i = 2) {
      (this.length = t), (this.height = e), (this.flags = i);
    }
    get outdated() {
      return (2 & this.flags) > 0;
    }
    set outdated(t) {
      this.flags = (t ? 2 : 0) | (-3 & this.flags);
    }
    setHeight(t, e) {
      this.height != e &&
        (Math.abs(this.height - e) > Bn && (t.heightChanged = !0),
        (this.height = e));
    }
    replace(t, e, i) {
      return Fn.of(i);
    }
    decomposeLeft(t, e) {
      e.push(this);
    }
    decomposeRight(t, e) {
      e.push(this);
    }
    applyChanges(t, e, i, n) {
      let r = this;
      for (let s = n.length - 1; s >= 0; s--) {
        let { fromA: o, toA: a, fromB: l, toB: h } = n[s],
          c = r.lineAt(o, Nn.ByPosNoHeight, e, 0, 0),
          u = c.to >= a ? c : r.lineAt(a, Nn.ByPosNoHeight, e, 0, 0);
        for (h += u.to - a, a = u.to; s > 0 && c.from <= n[s - 1].toA; )
          (o = n[s - 1].fromA),
            (l = n[s - 1].fromB),
            s--,
            o < c.from && (c = r.lineAt(o, Nn.ByPosNoHeight, e, 0, 0));
        (l += c.from - o), (o = c.from);
        let d = ir.build(i, t, l, h);
        r = r.replace(o, a, d);
      }
      return r.updateHeight(i, 0);
    }
    static empty() {
      return new Jn(0, 0);
    }
    static of(t) {
      if (1 == t.length) return t[0];
      let e = 0,
        i = t.length,
        n = 0,
        r = 0;
      for (;;)
        if (e == i)
          if (n > 2 * r) {
            let r = t[e - 1];
            r.break
              ? t.splice(--e, 1, r.left, null, r.right)
              : t.splice(--e, 1, r.left, r.right),
              (i += 1 + r.break),
              (n -= r.size);
          } else {
            if (!(r > 2 * n)) break;
            {
              let e = t[i];
              e.break
                ? t.splice(i, 1, e.left, null, e.right)
                : t.splice(i, 1, e.left, e.right),
                (i += 2 + e.break),
                (r -= e.size);
            }
          }
        else if (n < r) {
          let i = t[e++];
          i && (n += i.size);
        } else {
          let e = t[--i];
          e && (r += e.size);
        }
      let s = 0;
      return (
        null == t[e - 1] ? ((s = 1), e--) : null == t[e] && ((s = 1), i++),
        new tr(Fn.of(t.slice(0, e)), s, Fn.of(t.slice(i)))
      );
    }
  }
  Fn.prototype.size = 1;
  class Hn extends Fn {
    constructor(t, e, i) {
      super(t, e), (this.type = i);
    }
    blockAt(t, e, i, n) {
      return new In(n, this.length, i, this.height, this.type);
    }
    lineAt(t, e, i, n, r) {
      return this.blockAt(0, i, n, r);
    }
    forEachLine(t, e, i, n, r, s) {
      s(this.blockAt(0, i, n, r));
    }
    updateHeight(t, e = 0, i = !1, n) {
      return (
        n && n.from <= e && n.more && this.setHeight(t, n.heights[n.index++]),
        (this.outdated = !1),
        this
      );
    }
    toString() {
      return `block(${this.length})`;
    }
  }
  class Jn extends Hn {
    constructor(t, e) {
      super(t, e, ii.Text), (this.collapsed = 0), (this.widgetHeight = 0);
    }
    replace(t, e, i) {
      let n = i[0];
      return 1 == i.length &&
        (n instanceof Jn || (n instanceof Kn && 4 & n.flags)) &&
        Math.abs(this.length - n.length) < 10
        ? (n instanceof Kn
            ? (n = new Jn(n.length, this.height))
            : (n.height = this.height),
          this.outdated || (n.outdated = !1),
          n)
        : Fn.of(i);
    }
    updateHeight(t, e = 0, i = !1, n) {
      return (
        n && n.from <= e && n.more
          ? this.setHeight(t, n.heights[n.index++])
          : (i || this.outdated) &&
            this.setHeight(
              t,
              Math.max(
                this.widgetHeight,
                t.heightForLine(this.length - this.collapsed)
              )
            ),
        (this.outdated = !1),
        this
      );
    }
    toString() {
      return `line(${
        this.length
      }${this.collapsed ? -this.collapsed : ''}${this.widgetHeight ? ':' + this.widgetHeight : ''})`;
    }
  }
  class Kn extends Fn {
    constructor(t) {
      super(t, 0);
    }
    lines(t, e) {
      let i = t.lineAt(e).number,
        n = t.lineAt(e + this.length).number;
      return {
        firstLine: i,
        lastLine: n,
        lineHeight: this.height / (n - i + 1),
      };
    }
    blockAt(t, e, i, n) {
      let { firstLine: r, lastLine: s, lineHeight: o } = this.lines(e, n),
        a = Math.max(0, Math.min(s - r, Math.floor((t - i) / o))),
        { from: l, length: h } = e.line(r + a);
      return new In(l, h, i + o * a, o, ii.Text);
    }
    lineAt(t, e, i, n, r) {
      if (e == Nn.ByHeight) return this.blockAt(t, i, n, r);
      if (e == Nn.ByPosNoHeight) {
        let { from: e, to: n } = i.lineAt(t);
        return new In(e, n - e, 0, 0, ii.Text);
      }
      let { firstLine: s, lineHeight: o } = this.lines(i, r),
        { from: a, length: l, number: h } = i.lineAt(t);
      return new In(a, l, n + o * (h - s), o, ii.Text);
    }
    forEachLine(t, e, i, n, r, s) {
      let { firstLine: o, lineHeight: a } = this.lines(i, r);
      for (let l = Math.max(t, r), h = Math.min(r + this.length, e); l <= h; ) {
        let e = i.lineAt(l);
        l == t && (n += a * (e.number - o)),
          s(new In(e.from, e.length, n, a, ii.Text)),
          (n += a),
          (l = e.to + 1);
      }
    }
    replace(t, e, i) {
      let n = this.length - e;
      if (n > 0) {
        let t = i[i.length - 1];
        t instanceof Kn
          ? (i[i.length - 1] = new Kn(t.length + n))
          : i.push(null, new Kn(n - 1));
      }
      if (t > 0) {
        let e = i[0];
        e instanceof Kn
          ? (i[0] = new Kn(t + e.length))
          : i.unshift(new Kn(t - 1), null);
      }
      return Fn.of(i);
    }
    decomposeLeft(t, e) {
      e.push(new Kn(t - 1), null);
    }
    decomposeRight(t, e) {
      e.push(null, new Kn(this.length - t - 1));
    }
    updateHeight(t, e = 0, i = !1, n) {
      let r = e + this.length;
      if (n && n.from <= e + this.length && n.more) {
        let i = [],
          s = Math.max(e, n.from),
          o = -1,
          a = t.heightChanged;
        for (
          n.from > e && i.push(new Kn(n.from - e - 1).updateHeight(t, e));
          s <= r && n.more;

        ) {
          let e = t.doc.lineAt(s).length;
          i.length && i.push(null);
          let r = n.heights[n.index++];
          -1 == o ? (o = r) : Math.abs(r - o) >= Bn && (o = -2);
          let a = new Jn(e, r);
          (a.outdated = !1), i.push(a), (s += e + 1);
        }
        s <= r && i.push(null, new Kn(r - s).updateHeight(t, s));
        let l = Fn.of(i);
        return (
          (t.heightChanged =
            a ||
            o < 0 ||
            Math.abs(l.height - this.height) >= Bn ||
            Math.abs(o - this.lines(t.doc, e).lineHeight) >= Bn),
          l
        );
      }
      return (
        (i || this.outdated) &&
          (this.setHeight(t, t.heightForGap(e, e + this.length)),
          (this.outdated = !1)),
        this
      );
    }
    toString() {
      return `gap(${this.length})`;
    }
  }
  class tr extends Fn {
    constructor(t, e, i) {
      super(
        t.length + e + i.length,
        t.height + i.height,
        e | (t.outdated || i.outdated ? 2 : 0)
      ),
        (this.left = t),
        (this.right = i),
        (this.size = t.size + i.size);
    }
    get break() {
      return 1 & this.flags;
    }
    blockAt(t, e, i, n) {
      let r = i + this.left.height;
      return t < r
        ? this.left.blockAt(t, e, i, n)
        : this.right.blockAt(t, e, r, n + this.left.length + this.break);
    }
    lineAt(t, e, i, n, r) {
      let s = n + this.left.height,
        o = r + this.left.length + this.break,
        a = e == Nn.ByHeight ? t < s : t < o,
        l = a
          ? this.left.lineAt(t, e, i, n, r)
          : this.right.lineAt(t, e, i, s, o);
      if (this.break || (a ? l.to < o : l.from > o)) return l;
      let h = e == Nn.ByPosNoHeight ? Nn.ByPosNoHeight : Nn.ByPos;
      return a
        ? l.join(this.right.lineAt(o, h, i, s, o))
        : this.left.lineAt(o, h, i, n, r).join(l);
    }
    forEachLine(t, e, i, n, r, s) {
      let o = n + this.left.height,
        a = r + this.left.length + this.break;
      if (this.break)
        t < a && this.left.forEachLine(t, e, i, n, r, s),
          e >= a && this.right.forEachLine(t, e, i, o, a, s);
      else {
        let l = this.lineAt(a, Nn.ByPos, i, n, r);
        t < l.from && this.left.forEachLine(t, l.from - 1, i, n, r, s),
          l.to >= t && l.from <= e && s(l),
          e > l.to && this.right.forEachLine(l.to + 1, e, i, o, a, s);
      }
    }
    replace(t, e, i) {
      let n = this.left.length + this.break;
      if (e < n) return this.balanced(this.left.replace(t, e, i), this.right);
      if (t > this.left.length)
        return this.balanced(this.left, this.right.replace(t - n, e - n, i));
      let r = [];
      t > 0 && this.decomposeLeft(t, r);
      let s = r.length;
      for (let t of i) r.push(t);
      if ((t > 0 && er(r, s - 1), e < this.length)) {
        let t = r.length;
        this.decomposeRight(e, r), er(r, t);
      }
      return Fn.of(r);
    }
    decomposeLeft(t, e) {
      let i = this.left.length;
      if (t <= i) return this.left.decomposeLeft(t, e);
      e.push(this.left),
        this.break && (i++, t >= i && e.push(null)),
        t > i && this.right.decomposeLeft(t - i, e);
    }
    decomposeRight(t, e) {
      let i = this.left.length,
        n = i + this.break;
      if (t >= n) return this.right.decomposeRight(t - n, e);
      t < i && this.left.decomposeRight(t, e),
        this.break && t < n && e.push(null),
        e.push(this.right);
    }
    balanced(t, e) {
      return t.size > 2 * e.size || e.size > 2 * t.size
        ? Fn.of(this.break ? [t, null, e] : [t, e])
        : ((this.left = t),
          (this.right = e),
          (this.height = t.height + e.height),
          (this.outdated = t.outdated || e.outdated),
          (this.size = t.size + e.size),
          (this.length = t.length + this.break + e.length),
          this);
    }
    updateHeight(t, e = 0, i = !1, n) {
      let { left: r, right: s } = this,
        o = e + r.length + this.break,
        a = null;
      return (
        n && n.from <= e + r.length && n.more
          ? (a = r = r.updateHeight(t, e, i, n))
          : r.updateHeight(t, e, i),
        n && n.from <= o + s.length && n.more
          ? (a = s = s.updateHeight(t, o, i, n))
          : s.updateHeight(t, o, i),
        a
          ? this.balanced(r, s)
          : ((this.height = this.left.height + this.right.height),
            (this.outdated = !1),
            this)
      );
    }
    toString() {
      return this.left + (this.break ? ' ' : '-') + this.right;
    }
  }
  function er(t, e) {
    let i, n;
    null == t[e] &&
      (i = t[e - 1]) instanceof Kn &&
      (n = t[e + 1]) instanceof Kn &&
      t.splice(e - 1, 3, new Kn(i.length + 1 + n.length));
  }
  class ir {
    constructor(t, e) {
      (this.pos = t),
        (this.oracle = e),
        (this.nodes = []),
        (this.lineStart = -1),
        (this.lineEnd = -1),
        (this.covering = null),
        (this.writtenTo = t);
    }
    get isCovered() {
      return (
        this.covering && this.nodes[this.nodes.length - 1] == this.covering
      );
    }
    span(t, e) {
      if (this.lineStart > -1) {
        let t = Math.min(e, this.lineEnd),
          i = this.nodes[this.nodes.length - 1];
        i instanceof Jn
          ? (i.length += t - this.pos)
          : (t > this.pos || !this.isCovered) &&
            this.nodes.push(new Jn(t - this.pos, -1)),
          (this.writtenTo = t),
          e > t &&
            (this.nodes.push(null), this.writtenTo++, (this.lineStart = -1));
      }
      this.pos = e;
    }
    point(t, e, i) {
      if (t < e || i.heightRelevant) {
        let n = i.widget ? i.widget.estimatedHeight : 0;
        n < 0 && (n = this.oracle.lineHeight);
        let r = e - t;
        i.block
          ? this.addBlock(new Hn(r, n, i.type))
          : (r || n >= 5) && this.addLineDeco(n, r);
      } else e > t && this.span(t, e);
      this.lineEnd > -1 &&
        this.lineEnd < this.pos &&
        (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
    }
    enterLine() {
      if (this.lineStart > -1) return;
      let { from: t, to: e } = this.oracle.doc.lineAt(this.pos);
      (this.lineStart = t),
        (this.lineEnd = e),
        this.writtenTo < t &&
          ((this.writtenTo < t - 1 ||
            null == this.nodes[this.nodes.length - 1]) &&
            this.nodes.push(this.blankContent(this.writtenTo, t - 1)),
          this.nodes.push(null)),
        this.pos > t && this.nodes.push(new Jn(this.pos - t, -1)),
        (this.writtenTo = this.pos);
    }
    blankContent(t, e) {
      let i = new Kn(e - t);
      return this.oracle.doc.lineAt(t).to == e && (i.flags |= 4), i;
    }
    ensureLine() {
      this.enterLine();
      let t = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
      if (t instanceof Jn) return t;
      let e = new Jn(0, -1);
      return this.nodes.push(e), e;
    }
    addBlock(t) {
      this.enterLine(),
        t.type != ii.WidgetAfter || this.isCovered || this.ensureLine(),
        this.nodes.push(t),
        (this.writtenTo = this.pos = this.pos + t.length),
        t.type != ii.WidgetBefore && (this.covering = t);
    }
    addLineDeco(t, e) {
      let i = this.ensureLine();
      (i.length += e),
        (i.collapsed += e),
        (i.widgetHeight = Math.max(i.widgetHeight, t)),
        (this.writtenTo = this.pos = this.pos + e);
    }
    finish(t) {
      let e = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
      !(this.lineStart > -1) || e instanceof Jn || this.isCovered
        ? (this.writtenTo < this.pos || null == e) &&
          this.nodes.push(this.blankContent(this.writtenTo, this.pos))
        : this.nodes.push(new Jn(0, -1));
      let i = t;
      for (let t of this.nodes)
        t instanceof Jn && t.updateHeight(this.oracle, i),
          (i += t ? t.length : 1);
      return this.nodes;
    }
    static build(t, e, i, n) {
      let r = new ir(i, t);
      return Dt.spans(e, i, n, r, 0), r.finish(i);
    }
  }
  class nr {
    constructor() {
      this.changes = [];
    }
    compareRange() {}
    comparePoint(t, e, i, n) {
      (t < e || (i && i.heightRelevant) || (n && n.heightRelevant)) &&
        li(t, e, this.changes, 5);
    }
  }
  class rr {
    constructor(t, e, i) {
      (this.from = t), (this.to = e), (this.size = i);
    }
    static same(t, e) {
      if (t.length != e.length) return !1;
      for (let i = 0; i < t.length; i++) {
        let n = t[i],
          r = e[i];
        if (n.from != r.from || n.to != r.to || n.size != r.size) return !1;
      }
      return !0;
    }
    draw(t) {
      return ni
        .replace({ widget: new sr(this.size, t) })
        .range(this.from, this.to);
    }
  }
  class sr extends ei {
    constructor(t, e) {
      super(), (this.size = t), (this.vertical = e);
    }
    eq(t) {
      return t.size == this.size && t.vertical == this.vertical;
    }
    toDOM() {
      let t = document.createElement('div');
      return (
        this.vertical
          ? (t.style.height = this.size + 'px')
          : ((t.style.width = this.size + 'px'),
            (t.style.height = '2px'),
            (t.style.display = 'inline-block')),
        t
      );
    }
    get estimatedHeight() {
      return this.vertical ? this.size : -1;
    }
  }
  class or {
    constructor(t) {
      (this.state = t),
        (this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0,
        }),
        (this.inView = !0),
        (this.paddingTop = 0),
        (this.paddingBottom = 0),
        (this.contentDOMWidth = 0),
        (this.contentDOMHeight = 0),
        (this.editorHeight = 0),
        (this.editorWidth = 0),
        (this.heightOracle = new Un()),
        (this.scaler = fr),
        (this.scrollTarget = null),
        (this.printing = !1),
        (this.mustMeasureContent = !0),
        (this.visibleRanges = []),
        (this.mustEnforceCursorAssoc = !1),
        (this.heightMap = Fn.empty().applyChanges(
          t.facet(_i),
          O.empty,
          this.heightOracle.setDoc(t.doc),
          [new Di(0, 0, 0, t.doc.length)]
        )),
        (this.viewport = this.getViewport(0, null)),
        this.updateViewportLines(),
        this.updateForViewport(),
        (this.lineGaps = this.ensureLineGaps([])),
        (this.lineGapDeco = ni.set(this.lineGaps.map((t) => t.draw(!1)))),
        this.computeVisibleRanges();
    }
    updateForViewport() {
      let t = [this.viewport],
        { main: e } = this.state.selection;
      for (let i = 0; i <= 1; i++) {
        let n = i ? e.head : e.anchor;
        if (!t.some(({ from: t, to: e }) => n >= t && n <= e)) {
          let { from: e, to: i } = this.lineBlockAt(n);
          t.push(new ar(e, i));
        }
      }
      (this.viewports = t.sort((t, e) => t.from - e.from)),
        (this.scaler =
          this.heightMap.height <= 7e6
            ? fr
            : new Or(this.heightOracle.doc, this.heightMap, this.viewports));
    }
    updateViewportLines() {
      (this.viewportLines = []),
        this.heightMap.forEachLine(
          this.viewport.from,
          this.viewport.to,
          this.state.doc,
          0,
          0,
          (t) => {
            this.viewportLines.push(
              1 == this.scaler.scale ? t : pr(t, this.scaler)
            );
          }
        );
    }
    update(t, e = null) {
      let i = this.state;
      this.state = t.state;
      let n = this.state.facet(_i),
        r = t.changedRanges,
        s = Di.extendWithRanges(
          r,
          (function (t, e, i) {
            let n = new nr();
            return Dt.compare(t, e, i, n, 0), n.changes;
          })(
            t.startState.facet(_i),
            n,
            t ? t.changes : $.empty(this.state.doc.length)
          )
        ),
        o = this.heightMap.height;
      (this.heightMap = this.heightMap.applyChanges(
        n,
        i.doc,
        this.heightOracle.setDoc(this.state.doc),
        s
      )),
        this.heightMap.height != o && (t.flags |= 2);
      let a = s.length
        ? this.mapViewport(this.viewport, t.changes)
        : this.viewport;
      ((e && (e.range.head < a.from || e.range.head > a.to)) ||
        !this.viewportIsAppropriate(a)) &&
        (a = this.getViewport(0, e));
      let l =
        !t.changes.empty ||
        2 & t.flags ||
        a.from != this.viewport.from ||
        a.to != this.viewport.to;
      (this.viewport = a),
        this.updateForViewport(),
        l && this.updateViewportLines(),
        (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) &&
          this.updateLineGaps(
            this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t.changes))
          ),
        (t.flags |= this.computeVisibleRanges()),
        e && (this.scrollTarget = e),
        !this.mustEnforceCursorAssoc &&
          t.selectionSet &&
          t.view.lineWrapping &&
          t.state.selection.main.empty &&
          t.state.selection.main.assoc &&
          (this.mustEnforceCursorAssoc = !0);
    }
    measure(t) {
      let e = t.contentDOM,
        i = window.getComputedStyle(e),
        n = this.heightOracle,
        r = i.whiteSpace,
        s = 'rtl' == i.direction ? zi.RTL : zi.LTR,
        o = this.heightOracle.mustRefreshForStyle(r, s),
        a =
          o ||
          this.mustMeasureContent ||
          this.contentDOMHeight != e.clientHeight,
        l = 0,
        h = 0;
      if (
        (this.editorWidth != t.scrollDOM.clientWidth &&
          (n.lineWrapping && (a = !0),
          (this.editorWidth = t.scrollDOM.clientWidth),
          (l |= 8)),
        a)
      ) {
        (this.mustMeasureContent = !1),
          (this.contentDOMHeight = e.clientHeight);
        let t = parseInt(i.paddingTop) || 0,
          n = parseInt(i.paddingBottom) || 0;
        (this.paddingTop == t && this.paddingBottom == n) ||
          ((l |= 8), (this.paddingTop = t), (this.paddingBottom = n));
      }
      let c = this.printing
          ? { top: -1e8, bottom: 1e8, left: -1e8, right: 1e8 }
          : (function (t, e) {
              let i = t.getBoundingClientRect(),
                n = Math.max(0, i.left),
                r = Math.min(innerWidth, i.right),
                s = Math.max(0, i.top),
                o = Math.min(innerHeight, i.bottom),
                a = t.ownerDocument.body;
              for (let e = t.parentNode; e && e != a; )
                if (1 == e.nodeType) {
                  let t = e,
                    i = window.getComputedStyle(t);
                  if (
                    (t.scrollHeight > t.clientHeight ||
                      t.scrollWidth > t.clientWidth) &&
                    'visible' != i.overflow
                  ) {
                    let e = t.getBoundingClientRect();
                    (n = Math.max(n, e.left)),
                      (r = Math.min(r, e.right)),
                      (s = Math.max(s, e.top)),
                      (o = Math.min(o, e.bottom));
                  }
                  e =
                    'absolute' == i.position || 'fixed' == i.position
                      ? t.offsetParent
                      : t.parentNode;
                } else {
                  if (11 != e.nodeType) break;
                  e = e.host;
                }
              return {
                left: n - i.left,
                right: Math.max(n, r) - i.left,
                top: s - (i.top + e),
                bottom: Math.max(s, o) - (i.top + e),
              };
            })(e, this.paddingTop),
        u = c.top - this.pixelViewport.top,
        d = c.bottom - this.pixelViewport.bottom;
      this.pixelViewport = c;
      let f =
        this.pixelViewport.bottom > this.pixelViewport.top &&
        this.pixelViewport.right > this.pixelViewport.left;
      if (
        (f != this.inView && ((this.inView = f), f && (a = !0)), !this.inView)
      )
        return 0;
      let O = e.clientWidth;
      if (
        ((this.contentDOMWidth == O &&
          this.editorHeight == t.scrollDOM.clientHeight) ||
          ((this.contentDOMWidth = O),
          (this.editorHeight = t.scrollDOM.clientHeight),
          (l |= 8)),
        a)
      ) {
        let e = t.docView.measureVisibleLineHeights();
        if (
          (n.mustRefreshForHeights(e) && (o = !0),
          o ||
            (n.lineWrapping &&
              Math.abs(O - this.contentDOMWidth) > n.charWidth))
        ) {
          let { lineHeight: i, charWidth: a } = t.docView.measureTextSize();
          (o = n.refresh(r, s, i, a, O / a, e)),
            o && ((t.docView.minWidth = 0), (l |= 8));
        }
        u > 0 && d > 0
          ? (h = Math.max(u, d))
          : u < 0 && d < 0 && (h = Math.min(u, d)),
          (n.heightChanged = !1),
          (this.heightMap = this.heightMap.updateHeight(
            n,
            0,
            o,
            new Gn(this.viewport.from, e)
          )),
          n.heightChanged && (l |= 2);
      }
      let p =
        !this.viewportIsAppropriate(this.viewport, h) ||
        (this.scrollTarget &&
          (this.scrollTarget.range.head < this.viewport.from ||
            this.scrollTarget.range.head > this.viewport.to));
      return (
        p && (this.viewport = this.getViewport(h, this.scrollTarget)),
        this.updateForViewport(),
        (2 & l || p) && this.updateViewportLines(),
        (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) &&
          this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps)),
        (l |= this.computeVisibleRanges()),
        this.mustEnforceCursorAssoc &&
          ((this.mustEnforceCursorAssoc = !1), t.docView.enforceCursorAssoc()),
        l
      );
    }
    get visibleTop() {
      return this.scaler.fromDOM(this.pixelViewport.top);
    }
    get visibleBottom() {
      return this.scaler.fromDOM(this.pixelViewport.bottom);
    }
    getViewport(t, e) {
      let i = 0.5 - Math.max(-0.5, Math.min(0.5, t / 1e3 / 2)),
        n = this.heightMap,
        r = this.state.doc,
        { visibleTop: s, visibleBottom: o } = this,
        a = new ar(
          n.lineAt(s - 1e3 * i, Nn.ByHeight, r, 0, 0).from,
          n.lineAt(o + 1e3 * (1 - i), Nn.ByHeight, r, 0, 0).to
        );
      if (e) {
        let { head: t } = e.range;
        if (t < a.from || t > a.to) {
          let i,
            s = Math.min(
              this.editorHeight,
              this.pixelViewport.bottom - this.pixelViewport.top
            ),
            o = n.lineAt(t, Nn.ByPos, r, 0, 0);
          (i =
            'center' == e.y
              ? (o.top + o.bottom) / 2 - s / 2
              : 'start' == e.y || ('nearest' == e.y && t < a.from)
              ? o.top
              : o.bottom - s),
            (a = new ar(
              n.lineAt(i - 500, Nn.ByHeight, r, 0, 0).from,
              n.lineAt(i + s + 500, Nn.ByHeight, r, 0, 0).to
            ));
        }
      }
      return a;
    }
    mapViewport(t, e) {
      let i = e.mapPos(t.from, -1),
        n = e.mapPos(t.to, 1);
      return new ar(
        this.heightMap.lineAt(i, Nn.ByPos, this.state.doc, 0, 0).from,
        this.heightMap.lineAt(n, Nn.ByPos, this.state.doc, 0, 0).to
      );
    }
    viewportIsAppropriate({ from: t, to: e }, i = 0) {
      if (!this.inView) return !0;
      let { top: n } = this.heightMap.lineAt(t, Nn.ByPos, this.state.doc, 0, 0),
        { bottom: r } = this.heightMap.lineAt(
          e,
          Nn.ByPos,
          this.state.doc,
          0,
          0
        ),
        { visibleTop: s, visibleBottom: o } = this;
      return (
        (0 == t || n <= s - Math.max(10, Math.min(-i, 250))) &&
        (e == this.state.doc.length ||
          r >= o + Math.max(10, Math.min(i, 250))) &&
        n > s - 2e3 &&
        r < o + 2e3
      );
    }
    mapLineGaps(t, e) {
      if (!t.length || e.empty) return t;
      let i = [];
      for (let n of t)
        e.touchesRange(n.from, n.to) ||
          i.push(new rr(e.mapPos(n.from), e.mapPos(n.to), n.size));
      return i;
    }
    ensureLineGaps(t) {
      let e = [];
      if (this.heightOracle.direction != zi.LTR) return e;
      for (let i of this.viewportLines) {
        if (i.length < 4e3) continue;
        let n,
          r,
          s = lr(i.from, i.to, this.state);
        if (s.total < 4e3) continue;
        if (this.heightOracle.lineWrapping) {
          let t =
            (2e3 / this.heightOracle.lineLength) * this.heightOracle.lineHeight;
          (n = hr(s, (this.visibleTop - i.top - t) / i.height)),
            (r = hr(s, (this.visibleBottom - i.top + t) / i.height));
        } else {
          let t = s.total * this.heightOracle.charWidth,
            e = 2e3 * this.heightOracle.charWidth;
          (n = hr(s, (this.pixelViewport.left - e) / t)),
            (r = hr(s, (this.pixelViewport.right + e) / t));
        }
        let o = [];
        n > i.from && o.push({ from: i.from, to: n }),
          r < i.to && o.push({ from: r, to: i.to });
        let a = this.state.selection.main;
        a.from >= i.from && a.from <= i.to && ur(o, a.from - 10, a.from + 10),
          !a.empty &&
            a.to >= i.from &&
            a.to <= i.to &&
            ur(o, a.to - 10, a.to + 10);
        for (let { from: n, to: r } of o)
          r - n > 1e3 &&
            e.push(
              dr(
                t,
                (t) =>
                  t.from >= i.from &&
                  t.to <= i.to &&
                  Math.abs(t.from - n) < 1e3 &&
                  Math.abs(t.to - r) < 1e3
              ) || new rr(n, r, this.gapSize(i, n, r, s))
            );
      }
      return e;
    }
    gapSize(t, e, i, n) {
      let r = cr(n, i) - cr(n, e);
      return this.heightOracle.lineWrapping
        ? t.height * r
        : n.total * this.heightOracle.charWidth * r;
    }
    updateLineGaps(t) {
      rr.same(t, this.lineGaps) ||
        ((this.lineGaps = t),
        (this.lineGapDeco = ni.set(
          t.map((t) => t.draw(this.heightOracle.lineWrapping))
        )));
    }
    computeVisibleRanges() {
      let t = this.state.facet(_i);
      this.lineGaps.length && (t = t.concat(this.lineGapDeco));
      let e = [];
      Dt.spans(
        t,
        this.viewport.from,
        this.viewport.to,
        {
          span(t, i) {
            e.push({ from: t, to: i });
          },
          point() {},
        },
        20
      );
      let i =
        e.length != this.visibleRanges.length ||
        this.visibleRanges.some(
          (t, i) => t.from != e[i].from || t.to != e[i].to
        );
      return (this.visibleRanges = e), i ? 4 : 0;
    }
    lineBlockAt(t) {
      return (
        (t >= this.viewport.from &&
          t <= this.viewport.to &&
          this.viewportLines.find((e) => e.from <= t && e.to >= t)) ||
        pr(
          this.heightMap.lineAt(t, Nn.ByPos, this.state.doc, 0, 0),
          this.scaler
        )
      );
    }
    lineBlockAtHeight(t) {
      return pr(
        this.heightMap.lineAt(
          this.scaler.fromDOM(t),
          Nn.ByHeight,
          this.state.doc,
          0,
          0
        ),
        this.scaler
      );
    }
    elementAtHeight(t) {
      return pr(
        this.heightMap.blockAt(this.scaler.fromDOM(t), this.state.doc, 0, 0),
        this.scaler
      );
    }
    get docHeight() {
      return this.scaler.toDOM(this.heightMap.height);
    }
    get contentHeight() {
      return this.docHeight + this.paddingTop + this.paddingBottom;
    }
  }
  class ar {
    constructor(t, e) {
      (this.from = t), (this.to = e);
    }
  }
  function lr(t, e, i) {
    let n = [],
      r = t,
      s = 0;
    return (
      Dt.spans(
        i.facet(_i),
        t,
        e,
        {
          span() {},
          point(t, e) {
            t > r && (n.push({ from: r, to: t }), (s += t - r)), (r = e);
          },
        },
        20
      ),
      r < e && (n.push({ from: r, to: e }), (s += e - r)),
      { total: s, ranges: n }
    );
  }
  function hr({ total: t, ranges: e }, i) {
    if (i <= 0) return e[0].from;
    if (i >= 1) return e[e.length - 1].to;
    let n = Math.floor(t * i);
    for (let t = 0; ; t++) {
      let { from: i, to: r } = e[t],
        s = r - i;
      if (n <= s) return i + n;
      n -= s;
    }
  }
  function cr(t, e) {
    let i = 0;
    for (let { from: n, to: r } of t.ranges) {
      if (e <= r) {
        i += e - n;
        break;
      }
      i += r - n;
    }
    return i / t.total;
  }
  function ur(t, e, i) {
    for (let n = 0; n < t.length; n++) {
      let r = t[n];
      if (r.from < i && r.to > e) {
        let s = [];
        r.from < e && s.push({ from: r.from, to: e }),
          r.to > i && s.push({ from: i, to: r.to }),
          t.splice(n, 1, ...s),
          (n += s.length - 1);
      }
    }
  }
  function dr(t, e) {
    for (let i of t) if (e(i)) return i;
  }
  const fr = { toDOM: (t) => t, fromDOM: (t) => t, scale: 1 };
  class Or {
    constructor(t, e, i) {
      let n = 0,
        r = 0,
        s = 0;
      (this.viewports = i.map(({ from: i, to: r }) => {
        let s = e.lineAt(i, Nn.ByPos, t, 0, 0).top,
          o = e.lineAt(r, Nn.ByPos, t, 0, 0).bottom;
        return (
          (n += o - s),
          { from: i, to: r, top: s, bottom: o, domTop: 0, domBottom: 0 }
        );
      })),
        (this.scale = (7e6 - n) / (e.height - n));
      for (let t of this.viewports)
        (t.domTop = s + (t.top - r) * this.scale),
          (s = t.domBottom = t.domTop + (t.bottom - t.top)),
          (r = t.bottom);
    }
    toDOM(t) {
      for (let e = 0, i = 0, n = 0; ; e++) {
        let r = e < this.viewports.length ? this.viewports[e] : null;
        if (!r || t < r.top) return n + (t - i) * this.scale;
        if (t <= r.bottom) return r.domTop + (t - r.top);
        (i = r.bottom), (n = r.domBottom);
      }
    }
    fromDOM(t) {
      for (let e = 0, i = 0, n = 0; ; e++) {
        let r = e < this.viewports.length ? this.viewports[e] : null;
        if (!r || t < r.domTop) return i + (t - n) / this.scale;
        if (t <= r.domBottom) return r.top + (t - r.domTop);
        (i = r.bottom), (n = r.domBottom);
      }
    }
  }
  function pr(t, e) {
    if (1 == e.scale) return t;
    let i = e.toDOM(t.top),
      n = e.toDOM(t.bottom);
    return new In(
      t.from,
      t.length,
      i,
      n - i,
      Array.isArray(t.type) ? t.type.map((t) => pr(t, e)) : t.type
    );
  }
  const mr = D.define({ combine: (t) => t.join(' ') }),
    gr = D.define({ combine: (t) => t.indexOf(!0) > -1 }),
    Qr = Ct.newName(),
    br = Ct.newName(),
    vr = Ct.newName(),
    yr = { '&light': '.' + br, '&dark': '.' + vr };
  function wr(t, e, i) {
    return new Ct(e, {
      finish: (e) =>
        /&/.test(e)
          ? e.replace(/&\w*/, (e) => {
              if ('&' == e) return t;
              if (!i || !i[e])
                throw new RangeError(`Unsupported selector: ${e}`);
              return i[e];
            })
          : t + ' ' + e,
    });
  }
  const xr = wr(
      '.' + Qr,
      {
        '&.cm-editor': {
          position: 'relative !important',
          boxSizing: 'border-box',
          '&.cm-focused': { outline: '1px dotted #212121' },
          display: 'flex !important',
          flexDirection: 'column',
        },
        '.cm-scroller': {
          display: 'flex !important',
          alignItems: 'flex-start !important',
          fontFamily: 'monospace',
          lineHeight: 1.4,
          height: '100%',
          overflowX: 'auto',
          position: 'relative',
          zIndex: 0,
        },
        '.cm-content': {
          margin: 0,
          flexGrow: 2,
          minHeight: '100%',
          display: 'block',
          whiteSpace: 'pre',
          wordWrap: 'normal',
          boxSizing: 'border-box',
          padding: '4px 0',
          outline: 'none',
          color: 'black',
          '&[contenteditable=true]': {
            WebkitUserModify: 'read-write-plaintext-only',
          },
        },
        '.cm-lineWrapping': {
          whiteSpace_fallback: 'pre-wrap',
          whiteSpace: 'break-spaces',
          wordBreak: 'break-word',
          overflowWrap: 'anywhere',
        },
        '&light .cm-content': { caretColor: 'black' },
        '&dark .cm-content': { caretColor: 'white' },
        '.cm-line': { display: 'block', padding: '0 2px 0 4px' },
        '.cm-selectionLayer': { zIndex: -1, contain: 'size style' },
        '.cm-selectionBackground': { position: 'absolute' },
        '&light .cm-selectionBackground': { background: '#d9d9d9' },
        '&dark .cm-selectionBackground': { background: '#222' },
        '&light.cm-focused .cm-selectionBackground': { background: '#d7d4f0' },
        '&dark.cm-focused .cm-selectionBackground': { background: '#233' },
        '.cm-cursorLayer': {
          zIndex: 100,
          contain: 'size style',
          pointerEvents: 'none',
        },
        '&.cm-focused .cm-cursorLayer': {
          animation: 'steps(1) cm-blink 1.2s infinite',
        },
        '@keyframes cm-blink': {
          '0%': {},
          '50%': { visibility: 'hidden' },
          '100%': {},
        },
        '@keyframes cm-blink2': {
          '0%': {},
          '50%': { visibility: 'hidden' },
          '100%': {},
        },
        '.cm-cursor, .cm-dropCursor': {
          position: 'absolute',
          borderLeft: '1.2px solid black',
          marginLeft: '-0.6px',
          pointerEvents: 'none',
        },
        '.cm-cursor': { display: 'none' },
        '&dark .cm-cursor': { borderLeftColor: '#444' },
        '&.cm-focused .cm-cursor': { display: 'block' },
        '&light .cm-activeLine': { backgroundColor: '#f3f9ff' },
        '&dark .cm-activeLine': { backgroundColor: '#223039' },
        '&light .cm-specialChar': { color: 'red' },
        '&dark .cm-specialChar': { color: '#f78' },
        '.cm-tab': {
          display: 'inline-block',
          overflow: 'hidden',
          verticalAlign: 'bottom',
        },
        '.cm-widgetBuffer': { verticalAlign: 'text-bottom', height: '1em' },
        '.cm-placeholder': {
          color: '#888',
          display: 'inline-block',
          verticalAlign: 'top',
        },
        '.cm-button': {
          verticalAlign: 'middle',
          color: 'inherit',
          fontSize: '70%',
          padding: '.2em 1em',
          borderRadius: '1px',
        },
        '&light .cm-button': {
          backgroundImage: 'linear-gradient(#eff1f5, #d9d9df)',
          border: '1px solid #888',
          '&:active': { backgroundImage: 'linear-gradient(#b4b4b4, #d0d3d6)' },
        },
        '&dark .cm-button': {
          backgroundImage: 'linear-gradient(#393939, #111)',
          border: '1px solid #888',
          '&:active': { backgroundImage: 'linear-gradient(#111, #333)' },
        },
        '.cm-textfield': {
          verticalAlign: 'middle',
          color: 'inherit',
          fontSize: '70%',
          border: '1px solid silver',
          padding: '.2em .5em',
        },
        '&light .cm-textfield': { backgroundColor: 'white' },
        '&dark .cm-textfield': {
          border: '1px solid #555',
          backgroundColor: 'inherit',
        },
      },
      yr
    ),
    kr = {
      childList: !0,
      characterData: !0,
      subtree: !0,
      attributes: !0,
      characterDataOldValue: !0,
    },
    Sr = je.ie && je.ie_version <= 11;
  class $r {
    constructor(t, e, i) {
      (this.view = t),
        (this.onChange = e),
        (this.onScrollChanged = i),
        (this.active = !1),
        (this.selectionRange = new ge()),
        (this.selectionChanged = !1),
        (this.delayedFlush = -1),
        (this.resizeTimeout = -1),
        (this.queue = []),
        (this.delayedAndroidKey = null),
        (this.scrollTargets = []),
        (this.intersection = null),
        (this.resize = null),
        (this.intersecting = !1),
        (this.gapIntersection = null),
        (this.gaps = []),
        (this.parentCheck = -1),
        (this.dom = t.contentDOM),
        (this.observer = new MutationObserver((e) => {
          for (let t of e) this.queue.push(t);
          ((je.ie && je.ie_version <= 11) || (je.ios && t.composing)) &&
          e.some(
            (t) =>
              ('childList' == t.type && t.removedNodes.length) ||
              ('characterData' == t.type &&
                t.oldValue.length > t.target.nodeValue.length)
          )
            ? this.flushSoon()
            : this.flush();
        })),
        Sr &&
          (this.onCharData = (t) => {
            this.queue.push({
              target: t.target,
              type: 'characterData',
              oldValue: t.prevValue,
            }),
              this.flushSoon();
          }),
        (this.onSelectionChange = this.onSelectionChange.bind(this)),
        'function' == typeof ResizeObserver &&
          ((this.resize = new ResizeObserver(() => {
            this.view.docView.lastUpdate < Date.now() - 75 &&
              this.resizeTimeout < 0 &&
              (this.resizeTimeout = setTimeout(() => {
                (this.resizeTimeout = -1), this.view.requestMeasure();
              }, 50));
          })),
          this.resize.observe(t.scrollDOM)),
        this.start(),
        (this.onScroll = this.onScroll.bind(this)),
        window.addEventListener('scroll', this.onScroll),
        'function' == typeof IntersectionObserver &&
          ((this.intersection = new IntersectionObserver((t) => {
            this.parentCheck < 0 &&
              (this.parentCheck = setTimeout(
                this.listenForScroll.bind(this),
                1e3
              )),
              t.length > 0 &&
                t[t.length - 1].intersectionRatio > 0 != this.intersecting &&
                ((this.intersecting = !this.intersecting),
                this.intersecting != this.view.inView &&
                  this.onScrollChanged(document.createEvent('Event')));
          }, {})),
          this.intersection.observe(this.dom),
          (this.gapIntersection = new IntersectionObserver((t) => {
            t.length > 0 &&
              t[t.length - 1].intersectionRatio > 0 &&
              this.onScrollChanged(document.createEvent('Event'));
          }, {}))),
        this.listenForScroll(),
        this.readSelectionRange(),
        this.dom.ownerDocument.addEventListener(
          'selectionchange',
          this.onSelectionChange
        );
    }
    onScroll(t) {
      this.intersecting && this.flush(!1), this.onScrollChanged(t);
    }
    updateGaps(t) {
      if (
        this.gapIntersection &&
        (t.length != this.gaps.length || this.gaps.some((e, i) => e != t[i]))
      ) {
        this.gapIntersection.disconnect();
        for (let e of t) this.gapIntersection.observe(e);
        this.gaps = t;
      }
    }
    onSelectionChange(t) {
      if (!this.readSelectionRange() || this.delayedAndroidKey) return;
      let { view: e } = this,
        i = this.selectionRange;
      if (e.state.facet($i) ? e.root.activeElement != this.dom : !le(e.dom, i))
        return;
      let n = i.anchorNode && e.docView.nearest(i.anchorNode);
      (n && n.ignoreEvent(t)) ||
        (((je.ie && je.ie_version <= 11) || (je.android && je.chrome)) &&
        !e.state.selection.main.empty &&
        i.focusNode &&
        ce(i.focusNode, i.focusOffset, i.anchorNode, i.anchorOffset)
          ? this.flushSoon()
          : this.flush(!1));
    }
    readSelectionRange() {
      let { root: t } = this.view,
        e = oe(t),
        i =
          (je.safari &&
            11 == t.nodeType &&
            (function () {
              let t = document.activeElement;
              for (; t && t.shadowRoot; ) t = t.shadowRoot.activeElement;
              return t;
            })() == this.view.contentDOM &&
            (function (t) {
              let e = null;
              function i(t) {
                t.preventDefault(),
                  t.stopImmediatePropagation(),
                  (e = t.getTargetRanges()[0]);
              }
              if (
                (t.contentDOM.addEventListener('beforeinput', i, !0),
                document.execCommand('indent'),
                t.contentDOM.removeEventListener('beforeinput', i, !0),
                !e)
              )
                return null;
              let n = e.startContainer,
                r = e.startOffset,
                s = e.endContainer,
                o = e.endOffset,
                a = t.docView.domAtPos(t.state.selection.main.anchor);
              ce(a.node, a.offset, s, o) && ([n, r, s, o] = [s, o, n, r]);
              return {
                anchorNode: n,
                anchorOffset: r,
                focusNode: s,
                focusOffset: o,
              };
            })(this.view)) ||
          e;
      return (
        !this.selectionRange.eq(i) &&
        (this.selectionRange.setRange(i), (this.selectionChanged = !0))
      );
    }
    setSelectionRange(t, e) {
      this.selectionRange.set(t.node, t.offset, e.node, e.offset),
        (this.selectionChanged = !1);
    }
    listenForScroll() {
      this.parentCheck = -1;
      let t = 0,
        e = null;
      for (let i = this.dom; i; )
        if (1 == i.nodeType)
          !e && t < this.scrollTargets.length && this.scrollTargets[t] == i
            ? t++
            : e || (e = this.scrollTargets.slice(0, t)),
            e && e.push(i),
            (i = i.assignedSlot || i.parentNode);
        else {
          if (11 != i.nodeType) break;
          i = i.host;
        }
      if (
        (t < this.scrollTargets.length &&
          !e &&
          (e = this.scrollTargets.slice(0, t)),
        e)
      ) {
        for (let t of this.scrollTargets)
          t.removeEventListener('scroll', this.onScroll);
        for (let t of (this.scrollTargets = e))
          t.addEventListener('scroll', this.onScroll);
      }
    }
    ignore(t) {
      if (!this.active) return t();
      try {
        return this.stop(), t();
      } finally {
        this.start(), this.clear();
      }
    }
    start() {
      this.active ||
        (this.observer.observe(this.dom, kr),
        Sr &&
          this.dom.addEventListener(
            'DOMCharacterDataModified',
            this.onCharData
          ),
        (this.active = !0));
    }
    stop() {
      this.active &&
        ((this.active = !1),
        this.observer.disconnect(),
        Sr &&
          this.dom.removeEventListener(
            'DOMCharacterDataModified',
            this.onCharData
          ));
    }
    clear() {
      this.processRecords(),
        (this.queue.length = 0),
        (this.selectionChanged = !1);
    }
    delayAndroidKey(t, e) {
      this.delayedAndroidKey ||
        requestAnimationFrame(() => {
          let t = this.delayedAndroidKey;
          this.delayedAndroidKey = null;
          let e = this.view.state;
          we(this.view.contentDOM, t.key, t.keyCode)
            ? this.processRecords()
            : this.flush(),
            this.view.state == e && this.view.update([]);
        }),
        (this.delayedAndroidKey && 'Enter' != t) ||
          (this.delayedAndroidKey = { key: t, keyCode: e });
    }
    flushSoon() {
      this.delayedFlush < 0 &&
        (this.delayedFlush = window.setTimeout(() => {
          (this.delayedFlush = -1), this.flush();
        }, 20));
    }
    forceFlush() {
      this.delayedFlush >= 0 &&
        (window.clearTimeout(this.delayedFlush),
        (this.delayedFlush = -1),
        this.flush());
    }
    processRecords() {
      let t = this.queue;
      for (let e of this.observer.takeRecords()) t.push(e);
      t.length && (this.queue = []);
      let e = -1,
        i = -1,
        n = !1;
      for (let r of t) {
        let t = this.readMutation(r);
        t &&
          (t.typeOver && (n = !0),
          -1 == e
            ? ({ from: e, to: i } = t)
            : ((e = Math.min(t.from, e)), (i = Math.max(t.to, i))));
      }
      return { from: e, to: i, typeOver: n };
    }
    flush(t = !0) {
      if (this.delayedFlush >= 0 || this.delayedAndroidKey) return;
      t && this.readSelectionRange();
      let { from: e, to: i, typeOver: n } = this.processRecords(),
        r = this.selectionChanged && le(this.dom, this.selectionRange);
      if (e < 0 && !r) return;
      this.selectionChanged = !1;
      let s = this.view.state;
      this.onChange(e, i, n), this.view.state == s && this.view.update([]);
    }
    readMutation(t) {
      let e = this.view.docView.nearest(t.target);
      if (!e || e.ignoreMutation(t)) return null;
      if (
        (e.markDirty('attributes' == t.type),
        'attributes' == t.type && (e.dirty |= 4),
        'childList' == t.type)
      ) {
        let i = Tr(e, t.previousSibling || t.target.previousSibling, -1),
          n = Tr(e, t.nextSibling || t.target.nextSibling, 1);
        return {
          from: i ? e.posAfter(i) : e.posAtStart,
          to: n ? e.posBefore(n) : e.posAtEnd,
          typeOver: !1,
        };
      }
      return 'characterData' == t.type
        ? {
            from: e.posAtStart,
            to: e.posAtEnd,
            typeOver: t.target.nodeValue == t.oldValue,
          }
        : null;
    }
    destroy() {
      var t, e, i;
      this.stop(),
        null === (t = this.intersection) || void 0 === t || t.disconnect(),
        null === (e = this.gapIntersection) || void 0 === e || e.disconnect(),
        null === (i = this.resize) || void 0 === i || i.disconnect();
      for (let t of this.scrollTargets)
        t.removeEventListener('scroll', this.onScroll);
      window.removeEventListener('scroll', this.onScroll),
        this.dom.ownerDocument.removeEventListener(
          'selectionchange',
          this.onSelectionChange
        ),
        clearTimeout(this.parentCheck),
        clearTimeout(this.resizeTimeout);
    }
  }
  function Tr(t, e, i) {
    for (; e; ) {
      let n = $e.get(e);
      if (n && n.parent == t) return n;
      let r = e.parentNode;
      e = r != t.dom ? r : i > 0 ? e.nextSibling : e.previousSibling;
    }
    return null;
  }
  function Pr(t, e, i, n) {
    let r,
      s,
      o = t.state.selection.main;
    if (e > -1) {
      let n = t.docView.domBoundsAround(e, i, 0);
      if (!n || t.state.readOnly) return;
      let { from: a, to: l } = n,
        h =
          t.docView.impreciseHead || t.docView.impreciseAnchor
            ? []
            : (function (t) {
                let e = [];
                if (t.root.activeElement != t.contentDOM) return e;
                let {
                  anchorNode: i,
                  anchorOffset: n,
                  focusNode: r,
                  focusOffset: s,
                } = t.observer.selectionRange;
                i &&
                  (e.push(new rn(i, n)),
                  (r == i && s == n) || e.push(new rn(r, s)));
                return e;
              })(t),
        c = new en(h, t.state);
      c.readRange(n.startDOM, n.endDOM);
      let u = o.from,
        d = null;
      ((8 === t.inputState.lastKeyCode &&
        t.inputState.lastKeyTime > Date.now() - 100) ||
        (je.android && c.text.length < l - a)) &&
        ((u = o.to), (d = 'end'));
      let f = (function (t, e, i, n) {
        let r = Math.min(t.length, e.length),
          s = 0;
        for (; s < r && t.charCodeAt(s) == e.charCodeAt(s); ) s++;
        if (s == r && t.length == e.length) return null;
        let o = t.length,
          a = e.length;
        for (; o > 0 && a > 0 && t.charCodeAt(o - 1) == e.charCodeAt(a - 1); )
          o--, a--;
        if ('end' == n) {
          i -= o + Math.max(0, s - Math.min(o, a)) - s;
        }
        if (o < s && t.length < e.length) {
          (s -= i <= s && i >= o ? s - i : 0), (a = s + (a - o)), (o = s);
        } else if (a < s) {
          (s -= i <= s && i >= a ? s - i : 0), (o = s + (o - a)), (a = s);
        }
        return { from: s, toA: o, toB: a };
      })(t.state.doc.sliceString(a, l, tn), c.text, u - a, d);
      f &&
        (je.chrome &&
          13 == t.inputState.lastKeyCode &&
          f.toB == f.from + 2 &&
          '￿￿' == c.text.slice(f.from, f.toB) &&
          f.toB--,
        (r = {
          from: a + f.from,
          to: a + f.toA,
          insert: O.of(c.text.slice(f.from, f.toB).split(tn)),
        })),
        (s = (function (t, e) {
          if (0 == t.length) return null;
          let i = t[0].pos,
            n = 2 == t.length ? t[1].pos : i;
          return i > -1 && n > -1 ? Z.single(i + e, n + e) : null;
        })(h, a));
    } else if (t.hasFocus || !t.state.facet($i)) {
      let e = t.observer.selectionRange,
        { impreciseHead: i, impreciseAnchor: n } = t.docView,
        r =
          (i && i.node == e.focusNode && i.offset == e.focusOffset) ||
          !ae(t.contentDOM, e.focusNode)
            ? t.state.selection.main.head
            : t.docView.posFromDOM(e.focusNode, e.focusOffset),
        a =
          (n && n.node == e.anchorNode && n.offset == e.anchorOffset) ||
          !ae(t.contentDOM, e.anchorNode)
            ? t.state.selection.main.anchor
            : t.docView.posFromDOM(e.anchorNode, e.anchorOffset);
      (r == o.head && a == o.anchor) || (s = Z.single(a, r));
    }
    if (r || s)
      if (
        (!r && n && !o.empty && s && s.main.empty
          ? (r = {
              from: o.from,
              to: o.to,
              insert: t.state.doc.slice(o.from, o.to),
            })
          : r &&
            r.from >= o.from &&
            r.to <= o.to &&
            (r.from != o.from || r.to != o.to) &&
            o.to - o.from - (r.to - r.from) <= 4 &&
            (r = {
              from: o.from,
              to: o.to,
              insert: t.state.doc
                .slice(o.from, r.from)
                .append(r.insert)
                .append(t.state.doc.slice(r.to, o.to)),
            }),
        r)
      ) {
        let e = t.state;
        if (je.ios && t.inputState.flushIOSKey(t)) return;
        if (
          je.android &&
          ((r.from == o.from &&
            r.to == o.to &&
            1 == r.insert.length &&
            2 == r.insert.lines &&
            we(t.contentDOM, 'Enter', 13)) ||
            (r.from == o.from - 1 &&
              r.to == o.to &&
              0 == r.insert.length &&
              we(t.contentDOM, 'Backspace', 8)) ||
            (r.from == o.from &&
              r.to == o.to + 1 &&
              0 == r.insert.length &&
              we(t.contentDOM, 'Delete', 46)))
        )
          return;
        let i,
          n = r.insert.toString();
        if (t.state.facet(vi).some((e) => e(t, r.from, r.to, n))) return;
        if (
          (t.inputState.composing >= 0 && t.inputState.composing++,
          r.from >= o.from &&
            r.to <= o.to &&
            r.to - r.from >= (o.to - o.from) / 3 &&
            (!s || (s.main.empty && s.main.from == r.from + r.insert.length)) &&
            t.inputState.composing < 0)
        ) {
          let n = o.from < r.from ? e.sliceDoc(o.from, r.from) : '',
            s = o.to > r.to ? e.sliceDoc(r.to, o.to) : '';
          i = e.replaceSelection(
            t.state.toText(
              n + r.insert.sliceString(0, void 0, t.state.lineBreak) + s
            )
          );
        } else {
          let n = e.changes(r),
            a =
              s && !e.selection.main.eq(s.main) && s.main.to <= n.newLength
                ? s.main
                : void 0;
          if (
            e.selection.ranges.length > 1 &&
            t.inputState.composing >= 0 &&
            r.to <= o.to &&
            r.to >= o.to - 10
          ) {
            let s = t.state.sliceDoc(r.from, r.to),
              l = an(t) || t.state.doc.lineAt(o.head),
              h = o.to - r.to,
              c = o.to - o.from;
            i = e.changeByRange((i) => {
              if (i.from == o.from && i.to == o.to)
                return { changes: n, range: a || i.map(n) };
              let u = i.to - h,
                d = u - s.length;
              if (
                i.to - i.from != c ||
                t.state.sliceDoc(d, u) != s ||
                (l && i.to >= l.from && i.from <= l.to)
              )
                return { range: i };
              let f = e.changes({ from: d, to: u, insert: r.insert }),
                O = i.to - o.to;
              return {
                changes: f,
                range: a
                  ? Z.range(Math.max(0, a.anchor + O), Math.max(0, a.head + O))
                  : i.map(f),
              };
            });
          } else
            i = { changes: n, selection: a && e.selection.replaceRange(a) };
        }
        let a = 'input.type';
        t.composing &&
          ((a += '.compose'),
          t.inputState.compositionFirstChange &&
            ((a += '.start'), (t.inputState.compositionFirstChange = !1))),
          t.dispatch(i, { scrollIntoView: !0, userEvent: a });
      } else if (s && !s.main.eq(o)) {
        let e = !1,
          i = 'select';
        t.inputState.lastSelectionTime > Date.now() - 50 &&
          ('select' == t.inputState.lastSelectionOrigin && (e = !0),
          (i = t.inputState.lastSelectionOrigin)),
          t.dispatch({ selection: s, scrollIntoView: e, userEvent: i });
      }
  }
  class Rr {
    constructor(t = {}) {
      (this.plugins = []),
        (this.pluginMap = new Map()),
        (this.editorAttrs = {}),
        (this.contentAttrs = {}),
        (this.bidiCache = []),
        (this.destroyed = !1),
        (this.updateState = 2),
        (this.measureScheduled = -1),
        (this.measureRequests = []),
        (this.contentDOM = document.createElement('div')),
        (this.scrollDOM = document.createElement('div')),
        (this.scrollDOM.tabIndex = -1),
        (this.scrollDOM.className = 'cm-scroller'),
        this.scrollDOM.appendChild(this.contentDOM),
        (this.announceDOM = document.createElement('div')),
        (this.announceDOM.style.cssText = 'position: absolute; top: -10000px'),
        this.announceDOM.setAttribute('aria-live', 'polite'),
        (this.dom = document.createElement('div')),
        this.dom.appendChild(this.announceDOM),
        this.dom.appendChild(this.scrollDOM),
        (this._dispatch = t.dispatch || ((t) => this.update([t]))),
        (this.dispatch = this.dispatch.bind(this)),
        (this.root =
          t.root ||
          (function (t) {
            for (; t; ) {
              if (t && (9 == t.nodeType || (11 == t.nodeType && t.host)))
                return t;
              t = t.assignedSlot || t.parentNode;
            }
            return null;
          })(t.parent) ||
          document),
        (this.viewState = new or(t.state || $t.create())),
        (this.plugins = this.state.facet(Wi).map((t) => new Xi(t)));
      for (let t of this.plugins) t.update(this);
      (this.observer = new $r(
        this,
        (t, e, i) => {
          Pr(this, t, e, i);
        },
        (t) => {
          this.inputState.runScrollHandlers(this, t),
            this.observer.intersecting && this.measure();
        }
      )),
        (this.inputState = new wn(this)),
        (this.docView = new sn(this)),
        this.mountStyles(),
        this.updateAttrs(),
        (this.updateState = 0),
        window.addEventListener('resize', () => {
          -1 == Ar && (Ar = setTimeout(Xr, 50));
        }),
        this.requestMeasure(),
        t.parent && t.parent.appendChild(this.dom);
    }
    get state() {
      return this.viewState.state;
    }
    get viewport() {
      return this.viewState.viewport;
    }
    get visibleRanges() {
      return this.viewState.visibleRanges;
    }
    get inView() {
      return this.viewState.inView;
    }
    get composing() {
      return this.inputState.composing > 0;
    }
    get compositionStarted() {
      return this.inputState.composing >= 0;
    }
    dispatch(...t) {
      this._dispatch(
        1 == t.length && t[0] instanceof pt ? t[0] : this.state.update(...t)
      );
    }
    update(t) {
      if (0 != this.updateState)
        throw new Error(
          'Calls to EditorView.update are not allowed while an update is in progress'
        );
      let e,
        i = !1,
        n = this.state;
      for (let e of t) {
        if (e.startState != n)
          throw new RangeError(
            "Trying to update state with a transaction that doesn't start from the previous state."
          );
        n = e.state;
      }
      if (this.destroyed) return void (this.viewState.state = n);
      if (n.facet($t.phrases) != this.state.facet($t.phrases))
        return this.setState(n);
      e = new Ei(this, n, t);
      let r = this.viewState.scrollTarget;
      try {
        this.updateState = 2;
        for (let e of t) {
          if ((r && (r = r.map(e.changes)), e.scrollIntoView)) {
            let { main: t } = e.state.selection;
            r = new xi(
              t.empty ? t : Z.cursor(t.head, t.head > t.anchor ? -1 : 1)
            );
          }
          for (let t of e.effects)
            t.is(yi)
              ? (r = new xi(t.value))
              : t.is(wi)
              ? (r = new xi(t.value, 'center'))
              : t.is(ki) && (r = t.value);
        }
        this.viewState.update(e, r),
          (this.bidiCache = Mr.update(this.bidiCache, e.changes)),
          e.empty || (this.updatePlugins(e), this.inputState.update(e)),
          (i = this.docView.update(e)),
          this.state.facet(Li) != this.styleModules && this.mountStyles(),
          this.updateAttrs(),
          this.showAnnouncements(t),
          this.docView.updateSelection(
            i,
            t.some((t) => t.isUserEvent('select.pointer'))
          );
      } finally {
        this.updateState = 0;
      }
      if (
        (e.startState.facet(mr) != e.state.facet(mr) &&
          (this.viewState.mustMeasureContent = !0),
        (i ||
          r ||
          this.viewState.mustEnforceCursorAssoc ||
          this.viewState.mustMeasureContent) &&
          this.requestMeasure(),
        !e.empty)
      )
        for (let t of this.state.facet(bi)) t(e);
    }
    setState(t) {
      if (0 != this.updateState)
        throw new Error(
          'Calls to EditorView.setState are not allowed while an update is in progress'
        );
      if (this.destroyed) return void (this.viewState.state = t);
      this.updateState = 2;
      let e = this.hasFocus;
      try {
        for (let t of this.plugins) t.destroy(this);
        (this.viewState = new or(t)),
          (this.plugins = t.facet(Wi).map((t) => new Xi(t))),
          this.pluginMap.clear();
        for (let t of this.plugins) t.update(this);
        (this.docView = new sn(this)),
          this.inputState.ensureHandlers(this),
          this.mountStyles(),
          this.updateAttrs(),
          (this.bidiCache = []);
      } finally {
        this.updateState = 0;
      }
      e && this.focus(), this.requestMeasure();
    }
    updatePlugins(t) {
      let e = t.startState.facet(Wi),
        i = t.state.facet(Wi);
      if (e != i) {
        let n = [];
        for (let r of i) {
          let i = e.indexOf(r);
          if (i < 0) n.push(new Xi(r));
          else {
            let e = this.plugins[i];
            (e.mustUpdate = t), n.push(e);
          }
        }
        for (let e of this.plugins) e.mustUpdate != t && e.destroy(this);
        (this.plugins = n),
          this.pluginMap.clear(),
          this.inputState.ensureHandlers(this);
      } else for (let e of this.plugins) e.mustUpdate = t;
      for (let t = 0; t < this.plugins.length; t++)
        this.plugins[t].update(this);
    }
    measure(t = !0) {
      if (this.destroyed) return;
      this.measureScheduled > -1 && cancelAnimationFrame(this.measureScheduled),
        (this.measureScheduled = 0),
        t && this.observer.flush();
      let e = null;
      try {
        for (let t = 0; ; t++) {
          this.updateState = 1;
          let i = this.viewport,
            n = this.viewState.measure(this);
          if (
            !n &&
            !this.measureRequests.length &&
            null == this.viewState.scrollTarget
          )
            break;
          if (t > 5) {
            console.warn(
              this.measureRequests.length
                ? 'Measure loop restarted more than 5 times'
                : 'Viewport failed to stabilize'
            );
            break;
          }
          let r = [];
          4 & n || ([this.measureRequests, r] = [r, this.measureRequests]);
          let s = r.map((t) => {
              try {
                return t.read(this);
              } catch (t) {
                return Si(this.state, t), Zr;
              }
            }),
            o = new Ei(this, this.state),
            a = !1,
            l = !1;
          (o.flags |= n),
            e ? (e.flags |= n) : (e = o),
            (this.updateState = 2),
            o.empty ||
              (this.updatePlugins(o),
              this.inputState.update(o),
              this.updateAttrs(),
              (a = this.docView.update(o)));
          for (let t = 0; t < r.length; t++)
            if (s[t] != Zr)
              try {
                let e = r[t];
                e.write && e.write(s[t], this);
              } catch (t) {
                Si(this.state, t);
              }
          if (
            (this.viewState.scrollTarget &&
              (this.docView.scrollIntoView(this.viewState.scrollTarget),
              (this.viewState.scrollTarget = null),
              (l = !0)),
            a && this.docView.updateSelection(!0),
            this.viewport.from == i.from &&
              this.viewport.to == i.to &&
              !l &&
              0 == this.measureRequests.length)
          )
            break;
        }
      } finally {
        (this.updateState = 0), (this.measureScheduled = -1);
      }
      if (e && !e.empty) for (let t of this.state.facet(bi)) t(e);
    }
    get themeClasses() {
      return (
        Qr + ' ' + (this.state.facet(gr) ? vr : br) + ' ' + this.state.facet(mr)
      );
    }
    updateAttrs() {
      let t = _r(this, Zi, {
          class:
            'cm-editor' +
            (this.hasFocus ? ' cm-focused ' : ' ') +
            this.themeClasses,
        }),
        e = {
          spellcheck: 'false',
          autocorrect: 'off',
          autocapitalize: 'off',
          translate: 'no',
          contenteditable: this.state.facet($i) ? 'true' : 'false',
          class: 'cm-content',
          style: `${je.tabSize}: ${this.state.tabSize}`,
          role: 'textbox',
          'aria-multiline': 'true',
        };
      this.state.readOnly && (e['aria-readonly'] = 'true'),
        _r(this, Mi, e),
        this.observer.ignore(() => {
          ti(this.contentDOM, this.contentAttrs, e),
            ti(this.dom, this.editorAttrs, t);
        }),
        (this.editorAttrs = t),
        (this.contentAttrs = e);
    }
    showAnnouncements(t) {
      let e = !0;
      for (let i of t)
        for (let t of i.effects)
          if (t.is(Rr.announce)) {
            e && (this.announceDOM.textContent = ''),
              (e = !1),
              (this.announceDOM.appendChild(
                document.createElement('div')
              ).textContent = t.value);
          }
    }
    mountStyles() {
      (this.styleModules = this.state.facet(Li)),
        Ct.mount(this.root, this.styleModules.concat(xr).reverse());
    }
    readMeasured() {
      if (2 == this.updateState)
        throw new Error(
          "Reading the editor layout isn't allowed during an update"
        );
      0 == this.updateState && this.measureScheduled > -1 && this.measure(!1);
    }
    requestMeasure(t) {
      if (
        (this.measureScheduled < 0 &&
          (this.measureScheduled = requestAnimationFrame(() => this.measure())),
        t)
      ) {
        if (null != t.key)
          for (let e = 0; e < this.measureRequests.length; e++)
            if (this.measureRequests[e].key === t.key)
              return void (this.measureRequests[e] = t);
        this.measureRequests.push(t);
      }
    }
    pluginField(t) {
      let e = [];
      for (let i of this.plugins) i.update(this).takeField(t, e);
      return e;
    }
    plugin(t) {
      let e = this.pluginMap.get(t);
      return (
        (void 0 === e || (e && e.spec != t)) &&
          this.pluginMap.set(
            t,
            (e = this.plugins.find((e) => e.spec == t) || null)
          ),
        e && e.update(this).value
      );
    }
    get documentTop() {
      return (
        this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop
      );
    }
    get documentPadding() {
      return {
        top: this.viewState.paddingTop,
        bottom: this.viewState.paddingBottom,
      };
    }
    blockAtHeight(t, e) {
      let i = Cr(e, this);
      return this.elementAtHeight(t - i).moveY(i);
    }
    elementAtHeight(t) {
      return this.readMeasured(), this.viewState.elementAtHeight(t);
    }
    visualLineAtHeight(t, e) {
      let i = Cr(e, this);
      return this.lineBlockAtHeight(t - i).moveY(i);
    }
    lineBlockAtHeight(t) {
      return this.readMeasured(), this.viewState.lineBlockAtHeight(t);
    }
    viewportLines(t, e) {
      let i = Cr(e, this);
      for (let e of this.viewportLineBlocks) t(e.moveY(i));
    }
    get viewportLineBlocks() {
      return this.viewState.viewportLines;
    }
    visualLineAt(t, e = 0) {
      return this.lineBlockAt(t).moveY(e + this.viewState.paddingTop);
    }
    lineBlockAt(t) {
      return this.viewState.lineBlockAt(t);
    }
    get contentHeight() {
      return this.viewState.contentHeight;
    }
    moveByChar(t, e, i) {
      return yn(this, t, vn(this, t, e, i));
    }
    moveByGroup(t, e) {
      return yn(
        this,
        t,
        vn(this, t, e, (e) =>
          (function (t, e, i) {
            let n = t.state.charCategorizer(e),
              r = n(i);
            return (t) => {
              let e = n(t);
              return r == wt.Space && (r = e), r == e;
            };
          })(this, t.head, e)
        )
      );
    }
    moveToLineBoundary(t, e, i = !0) {
      return (function (t, e, i, n) {
        let r = t.state.doc.lineAt(e.head),
          s =
            n && t.lineWrapping
              ? t.coordsAtPos(
                  e.assoc < 0 && e.head > r.from ? e.head - 1 : e.head
                )
              : null;
        if (s) {
          let e = t.dom.getBoundingClientRect(),
            n = t.posAtCoords({
              x: i == (t.textDirection == zi.LTR) ? e.right - 1 : e.left + 1,
              y: (s.top + s.bottom) / 2,
            });
          if (null != n) return Z.cursor(n, i ? -1 : 1);
        }
        let o = hi.find(t.docView, e.head),
          a = o ? (i ? o.posAtEnd : o.posAtStart) : i ? r.to : r.from;
        return Z.cursor(a, i ? -1 : 1);
      })(this, t, e, i);
    }
    moveVertically(t, e, i) {
      return yn(
        this,
        t,
        (function (t, e, i, n) {
          let r = e.head,
            s = i ? 1 : -1;
          if (r == (i ? t.state.doc.length : 0)) return Z.cursor(r, e.assoc);
          let o,
            a = e.goalColumn,
            l = t.contentDOM.getBoundingClientRect(),
            h = t.coordsAtPos(r),
            c = t.documentTop;
          if (h)
            null == a && (a = h.left - l.left), (o = s < 0 ? h.top : h.bottom);
          else {
            let e = t.viewState.lineBlockAt(r - c);
            null == a &&
              (a = Math.min(
                l.right - l.left,
                t.defaultCharacterWidth * (r - e.from)
              )),
              (o = (s < 0 ? e.top : e.bottom) + c);
          }
          let u = l.left + a,
            d = null != n ? n : t.defaultLineHeight >> 1;
          for (let i = 0; ; i += 10) {
            let n = o + (d + i) * s,
              h = Qn(t, { x: u, y: n }, !1, s);
            if (n < l.top || n > l.bottom || (s < 0 ? h < r : h > r))
              return Z.cursor(h, e.assoc, void 0, a);
          }
        })(this, t, e, i)
      );
    }
    scrollPosIntoView(t) {
      this.dispatch({ effects: yi.of(Z.cursor(t)) });
    }
    domAtPos(t) {
      return this.docView.domAtPos(t);
    }
    posAtDOM(t, e = 0) {
      return this.docView.posFromDOM(t, e);
    }
    posAtCoords(t, e = !0) {
      return this.readMeasured(), Qn(this, t, e);
    }
    coordsAtPos(t, e = 1) {
      this.readMeasured();
      let i = this.docView.coordsAt(t, e);
      if (!i || i.left == i.right) return i;
      let n = this.state.doc.lineAt(t),
        r = this.bidiSpans(n);
      return pe(i, (r[Bi.find(r, t - n.from, -1, e)].dir == zi.LTR) == e > 0);
    }
    get defaultCharacterWidth() {
      return this.viewState.heightOracle.charWidth;
    }
    get defaultLineHeight() {
      return this.viewState.heightOracle.lineHeight;
    }
    get textDirection() {
      return this.viewState.heightOracle.direction;
    }
    get lineWrapping() {
      return this.viewState.heightOracle.lineWrapping;
    }
    bidiSpans(t) {
      if (t.length > Wr) return Hi(t.length);
      let e = this.textDirection;
      for (let i of this.bidiCache)
        if (i.from == t.from && i.dir == e) return i.order;
      let i = (function (t, e) {
        let i = t.length,
          n = e == qi ? 1 : 2,
          r = e == qi ? 2 : 1;
        if (!t || (1 == n && !Ni.test(t))) return Hi(i);
        for (let e = 0, r = n, o = n; e < i; e++) {
          let i =
            (s = t.charCodeAt(e)) <= 247
              ? Yi[s]
              : 1424 <= s && s <= 1524
              ? 2
              : 1536 <= s && s <= 1785
              ? Ui[s - 1536]
              : 1774 <= s && s <= 2220
              ? 4
              : (8192 <= s && s <= 8203) || 8204 == s
              ? 256
              : 1;
          512 == i ? (i = r) : 8 == i && 4 == o && (i = 16),
            (Fi[e] = 4 == i ? 2 : i),
            7 & i && (o = i),
            (r = i);
        }
        var s;
        for (let t = 0, e = n, r = n; t < i; t++) {
          let n = Fi[t];
          if (128 == n)
            t < i - 1 && e == Fi[t + 1] && 24 & e
              ? (n = Fi[t] = e)
              : (Fi[t] = 256);
          else if (64 == n) {
            let n = t + 1;
            for (; n < i && 64 == Fi[n]; ) n++;
            let s =
              (t && 8 == e) || (n < i && 8 == Fi[n]) ? (1 == r ? 1 : 8) : 256;
            for (let e = t; e < n; e++) Fi[e] = s;
            t = n - 1;
          } else 8 == n && 1 == r && (Fi[t] = 1);
          (e = n), 7 & n && (r = n);
        }
        for (let e, s, o, a = 0, l = 0, h = 0; a < i; a++)
          if ((s = Gi[(e = t.charCodeAt(a))]))
            if (s < 0) {
              for (let t = l - 3; t >= 0; t -= 3)
                if (Ii[t + 1] == -s) {
                  let e = Ii[t + 2],
                    i = 2 & e ? n : 4 & e ? (1 & e ? r : n) : 0;
                  i && (Fi[a] = Fi[Ii[t]] = i), (l = t);
                  break;
                }
            } else {
              if (189 == Ii.length) break;
              (Ii[l++] = a), (Ii[l++] = e), (Ii[l++] = h);
            }
          else if (2 == (o = Fi[a]) || 1 == o) {
            let t = o == n;
            h = t ? 0 : 1;
            for (let e = l - 3; e >= 0; e -= 3) {
              let i = Ii[e + 2];
              if (2 & i) break;
              if (t) Ii[e + 2] |= 2;
              else {
                if (4 & i) break;
                Ii[e + 2] |= 4;
              }
            }
          }
        for (let t = 0; t < i; t++)
          if (256 == Fi[t]) {
            let e = t + 1;
            for (; e < i && 256 == Fi[e]; ) e++;
            let r = 1 == (t ? Fi[t - 1] : n),
              s = r == (1 == (e < i ? Fi[e] : n)) ? (r ? 1 : 2) : n;
            for (let i = t; i < e; i++) Fi[i] = s;
            t = e - 1;
          }
        let o = [];
        if (1 == n)
          for (let t = 0; t < i; ) {
            let e = t,
              n = 1 != Fi[t++];
            for (; t < i && n == (1 != Fi[t]); ) t++;
            if (n)
              for (let i = t; i > e; ) {
                let t = i,
                  n = 2 != Fi[--i];
                for (; i > e && n == (2 != Fi[i - 1]); ) i--;
                o.push(new Bi(i, t, n ? 2 : 1));
              }
            else o.push(new Bi(e, t, 0));
          }
        else
          for (let t = 0; t < i; ) {
            let e = t,
              n = 2 == Fi[t++];
            for (; t < i && n == (2 == Fi[t]); ) t++;
            o.push(new Bi(e, t, n ? 1 : 2));
          }
        return o;
      })(t.text, this.textDirection);
      return this.bidiCache.push(new Mr(t.from, t.to, e, i)), i;
    }
    get hasFocus() {
      var t;
      return (
        (document.hasFocus() ||
          (je.safari &&
            (null === (t = this.inputState) || void 0 === t
              ? void 0
              : t.lastContextMenu) >
              Date.now() - 3e4)) &&
        this.root.activeElement == this.contentDOM
      );
    }
    focus() {
      this.observer.ignore(() => {
        ve(this.contentDOM), this.docView.updateSelection();
      });
    }
    destroy() {
      for (let t of this.plugins) t.destroy(this);
      (this.plugins = []),
        this.inputState.destroy(),
        this.dom.remove(),
        this.observer.destroy(),
        this.measureScheduled > -1 &&
          cancelAnimationFrame(this.measureScheduled),
        (this.destroyed = !0);
    }
    static scrollIntoView(t, e = {}) {
      return ki.of(
        new xi(
          'number' == typeof t ? Z.cursor(t) : t,
          e.y,
          e.x,
          e.yMargin,
          e.xMargin
        )
      );
    }
    static domEventHandlers(t) {
      return Ci.define(() => ({}), { eventHandlers: t });
    }
    static theme(t, e) {
      let i = Ct.newName(),
        n = [mr.of(i), Li.of(wr(`.${i}`, t))];
      return e && e.dark && n.push(gr.of(!0)), n;
    }
    static baseTheme(t) {
      return H.lowest(Li.of(wr('.' + Qr, t, yr)));
    }
  }
  (Rr.scrollTo = yi),
    (Rr.centerOn = wi),
    (Rr.styleModule = Li),
    (Rr.inputHandler = vi),
    (Rr.exceptionSink = Qi),
    (Rr.updateListener = bi),
    (Rr.editable = $i),
    (Rr.mouseSelectionStyle = gi),
    (Rr.dragMovesSelection = mi),
    (Rr.clickAddsSelectionRange = pi),
    (Rr.decorations = _i),
    (Rr.darkTheme = gr),
    (Rr.contentAttributes = Mi),
    (Rr.editorAttributes = Zi),
    (Rr.lineWrapping = Rr.contentAttributes.of({ class: 'cm-lineWrapping' })),
    (Rr.announce = Ot.define());
  const Wr = 4096;
  function Cr(t, e) {
    return (
      (null == t ? e.contentDOM.getBoundingClientRect().top : t) +
      e.viewState.paddingTop
    );
  }
  let Ar = -1;
  function Xr() {
    Ar = -1;
    let t = document.querySelectorAll('.cm-content');
    for (let e = 0; e < t.length; e++) {
      let i = $e.get(t[e]);
      i && i.editorView.requestMeasure();
    }
  }
  const Zr = {};
  class Mr {
    constructor(t, e, i, n) {
      (this.from = t), (this.to = e), (this.dir = i), (this.order = n);
    }
    static update(t, e) {
      if (e.empty) return t;
      let i = [],
        n = t.length ? t[t.length - 1].dir : zi.LTR;
      for (let r = Math.max(0, t.length - 10); r < t.length; r++) {
        let s = t[r];
        s.dir != n ||
          e.touchesRange(s.from, s.to) ||
          i.push(
            new Mr(e.mapPos(s.from, 1), e.mapPos(s.to, -1), s.dir, s.order)
          );
      }
      return i;
    }
  }
  function _r(t, e, i) {
    for (let n = t.state.facet(e), r = n.length - 1; r >= 0; r--) {
      let e = n[r],
        s = 'function' == typeof e ? e(t) : e;
      s && Je(s, i);
    }
    return i;
  }
  const Lr = je.mac ? 'mac' : je.windows ? 'win' : je.linux ? 'linux' : 'key';
  function Dr(t, e, i) {
    return (
      e.altKey && (t = 'Alt-' + t),
      e.ctrlKey && (t = 'Ctrl-' + t),
      e.metaKey && (t = 'Meta-' + t),
      !1 !== i && e.shiftKey && (t = 'Shift-' + t),
      t
    );
  }
  const Er = Rr.domEventHandlers({
      keydown: (t, e) => Yr(jr(e.state), t, e, 'editor'),
    }),
    zr = D.define({ enables: Er }),
    qr = new WeakMap();
  function jr(t) {
    let e = t.facet(zr),
      i = qr.get(e);
    return (
      i ||
        qr.set(
          e,
          (i = (function (t, e = Lr) {
            let i = Object.create(null),
              n = Object.create(null),
              r = (t, e) => {
                let i = n[t];
                if (null == i) n[t] = e;
                else if (i != e)
                  throw new Error(
                    'Key binding ' +
                      t +
                      ' is used both as a regular binding and as a multi-stroke prefix'
                  );
              },
              s = (t, n, s, o) => {
                let a = i[t] || (i[t] = Object.create(null)),
                  l = n.split(/ (?!$)/).map((t) =>
                    (function (t, e) {
                      const i = t.split(/-(?!$)/);
                      let n,
                        r,
                        s,
                        o,
                        a = i[i.length - 1];
                      'Space' == a && (a = ' ');
                      for (let t = 0; t < i.length - 1; ++t) {
                        const a = i[t];
                        if (/^(cmd|meta|m)$/i.test(a)) o = !0;
                        else if (/^a(lt)?$/i.test(a)) n = !0;
                        else if (/^(c|ctrl|control)$/i.test(a)) r = !0;
                        else if (/^s(hift)?$/i.test(a)) s = !0;
                        else {
                          if (!/^mod$/i.test(a))
                            throw new Error('Unrecognized modifier name: ' + a);
                          'mac' == e ? (o = !0) : (r = !0);
                        }
                      }
                      return (
                        n && (a = 'Alt-' + a),
                        r && (a = 'Ctrl-' + a),
                        o && (a = 'Meta-' + a),
                        s && (a = 'Shift-' + a),
                        a
                      );
                    })(t, e)
                  );
                for (let e = 1; e < l.length; e++) {
                  let i = l.slice(0, e).join(' ');
                  r(i, !0),
                    a[i] ||
                      (a[i] = {
                        preventDefault: !0,
                        commands: [
                          (e) => {
                            let n = (Vr = { view: e, prefix: i, scope: t });
                            return (
                              setTimeout(() => {
                                Vr == n && (Vr = null);
                              }, 4e3),
                              !0
                            );
                          },
                        ],
                      });
                }
                let h = l.join(' ');
                r(h, !1);
                let c = a[h] || (a[h] = { preventDefault: !1, commands: [] });
                c.commands.push(s), o && (c.preventDefault = !0);
              };
            for (let i of t) {
              let t = i[e] || i.key;
              if (t)
                for (let e of i.scope ? i.scope.split(' ') : ['editor'])
                  s(e, t, i.run, i.preventDefault),
                    i.shift && s(e, 'Shift-' + t, i.shift, i.preventDefault);
            }
            return i;
          })(e.reduce((t, e) => t.concat(e), [])))
        ),
      i
    );
  }
  let Vr = null;
  function Yr(t, e, i, n) {
    let r = (function (t) {
        var e =
          (!(
            (ne && (t.ctrlKey || t.altKey || t.metaKey)) ||
            ((Kt || ie) && t.shiftKey && t.key && 1 == t.key.length)
          ) &&
            t.key) ||
          (t.shiftKey ? Ht : Ft)[t.keyCode] ||
          t.key ||
          'Unidentified';
        return (
          'Esc' == e && (e = 'Escape'),
          'Del' == e && (e = 'Delete'),
          'Left' == e && (e = 'ArrowLeft'),
          'Up' == e && (e = 'ArrowUp'),
          'Right' == e && (e = 'ArrowRight'),
          'Down' == e && (e = 'ArrowDown'),
          e
        );
      })(e),
      s = 1 == r.length && ' ' != r,
      o = '',
      a = !1;
    Vr &&
      Vr.view == i &&
      Vr.scope == n &&
      ((o = Vr.prefix + ' '), (a = kn.indexOf(e.keyCode) < 0) && (Vr = null));
    let l,
      h = (t) => {
        if (t) {
          for (let e of t.commands) if (e(i)) return !0;
          t.preventDefault && (a = !0);
        }
        return !1;
      },
      c = t[n];
    if (c) {
      if (h(c[o + Dr(r, e, !s)])) return !0;
      if (
        s &&
        (e.shiftKey || e.altKey || e.metaKey) &&
        (l = Ft[e.keyCode]) &&
        l != r
      ) {
        if (h(c[o + Dr(l, e, !0)])) return !0;
      } else if (s && e.shiftKey && h(c[o + Dr(r, e, !0)])) return !0;
    }
    return a;
  }
  const Ur = !je.ios,
    Gr = D.define({
      combine: (t) =>
        Tt(
          t,
          { cursorBlinkRate: 1200, drawRangeCursor: !0 },
          {
            cursorBlinkRate: (t, e) => Math.min(t, e),
            drawRangeCursor: (t, e) => t || e,
          }
        ),
    });
  function Ir(t = {}) {
    return [Gr.of(t), Br, Hr];
  }
  class Nr {
    constructor(t, e, i, n, r) {
      (this.left = t),
        (this.top = e),
        (this.width = i),
        (this.height = n),
        (this.className = r);
    }
    draw() {
      let t = document.createElement('div');
      return (t.className = this.className), this.adjust(t), t;
    }
    adjust(t) {
      (t.style.left = this.left + 'px'),
        (t.style.top = this.top + 'px'),
        this.width >= 0 && (t.style.width = this.width + 'px'),
        (t.style.height = this.height + 'px');
    }
    eq(t) {
      return (
        this.left == t.left &&
        this.top == t.top &&
        this.width == t.width &&
        this.height == t.height &&
        this.className == t.className
      );
    }
  }
  const Br = Ci.fromClass(
      class {
        constructor(t) {
          (this.view = t),
            (this.rangePieces = []),
            (this.cursors = []),
            (this.measureReq = {
              read: this.readPos.bind(this),
              write: this.drawSel.bind(this),
            }),
            (this.selectionLayer = t.scrollDOM.appendChild(
              document.createElement('div')
            )),
            (this.selectionLayer.className = 'cm-selectionLayer'),
            this.selectionLayer.setAttribute('aria-hidden', 'true'),
            (this.cursorLayer = t.scrollDOM.appendChild(
              document.createElement('div')
            )),
            (this.cursorLayer.className = 'cm-cursorLayer'),
            this.cursorLayer.setAttribute('aria-hidden', 'true'),
            t.requestMeasure(this.measureReq),
            this.setBlinkRate();
        }
        setBlinkRate() {
          this.cursorLayer.style.animationDuration =
            this.view.state.facet(Gr).cursorBlinkRate + 'ms';
        }
        update(t) {
          let e = t.startState.facet(Gr) != t.state.facet(Gr);
          (e || t.selectionSet || t.geometryChanged || t.viewportChanged) &&
            this.view.requestMeasure(this.measureReq),
            t.transactions.some((t) => t.scrollIntoView) &&
              (this.cursorLayer.style.animationName =
                'cm-blink' == this.cursorLayer.style.animationName
                  ? 'cm-blink2'
                  : 'cm-blink'),
            e && this.setBlinkRate();
        }
        readPos() {
          let { state: t } = this.view,
            e = t.facet(Gr),
            i = t.selection.ranges
              .map((t) =>
                t.empty
                  ? []
                  : (function (t, e) {
                      if (e.to <= t.viewport.from || e.from >= t.viewport.to)
                        return [];
                      let i = Math.max(e.from, t.viewport.from),
                        n = Math.min(e.to, t.viewport.to),
                        r = t.textDirection == zi.LTR,
                        s = t.contentDOM,
                        o = s.getBoundingClientRect(),
                        a = Jr(t),
                        l = window.getComputedStyle(s.firstChild),
                        h =
                          o.left +
                          parseInt(l.paddingLeft) +
                          Math.min(0, parseInt(l.textIndent)),
                        c = o.right - parseInt(l.paddingRight),
                        u = ts(t, i),
                        d = ts(t, n),
                        f = u.type == ii.Text ? u : null,
                        O = d.type == ii.Text ? d : null;
                      t.lineWrapping &&
                        (f && (f = Kr(t, i, f)), O && (O = Kr(t, n, O)));
                      if (f && O && f.from == O.from)
                        return m(g(e.from, e.to, f));
                      {
                        let i = f ? g(e.from, null, f) : Q(u, !1),
                          n = O ? g(null, e.to, O) : Q(d, !0),
                          r = [];
                        return (
                          (f || u).to < (O || d).from - 1
                            ? r.push(p(h, i.bottom, c, n.top))
                            : i.bottom < n.top &&
                              t.elementAtHeight((i.bottom + n.top) / 2).type ==
                                ii.Text &&
                              (i.bottom = n.top = (i.bottom + n.top) / 2),
                          m(i).concat(r).concat(m(n))
                        );
                      }
                      function p(t, e, i, n) {
                        return new Nr(
                          t - a.left,
                          e - a.top - 0.01,
                          i - t,
                          n - e + 0.01,
                          'cm-selectionBackground'
                        );
                      }
                      function m({ top: t, bottom: e, horizontal: i }) {
                        let n = [];
                        for (let r = 0; r < i.length; r += 2)
                          n.push(p(i[r], t, i[r + 1], e));
                        return n;
                      }
                      function g(e, i, n) {
                        let s = 1e9,
                          o = -1e9,
                          a = [];
                        function l(e, i, l, u, d) {
                          let f = t.coordsAtPos(e, e == n.to ? -2 : 2),
                            O = t.coordsAtPos(l, l == n.from ? 2 : -2);
                          (s = Math.min(f.top, O.top, s)),
                            (o = Math.max(f.bottom, O.bottom, o)),
                            d == zi.LTR
                              ? a.push(
                                  r && i ? h : f.left,
                                  r && u ? c : O.right
                                )
                              : a.push(
                                  !r && u ? h : O.left,
                                  !r && i ? c : f.right
                                );
                        }
                        let u = null != e ? e : n.from,
                          d = null != i ? i : n.to;
                        for (let n of t.visibleRanges)
                          if (n.to > u && n.from < d)
                            for (
                              let r = Math.max(n.from, u),
                                s = Math.min(n.to, d);
                              ;

                            ) {
                              let n = t.state.doc.lineAt(r);
                              for (let o of t.bidiSpans(n)) {
                                let t = o.from + n.from,
                                  a = o.to + n.from;
                                if (t >= s) break;
                                a > r &&
                                  l(
                                    Math.max(t, r),
                                    null == e && t <= u,
                                    Math.min(a, s),
                                    null == i && a >= d,
                                    o.dir
                                  );
                              }
                              if (((r = n.to + 1), r >= s)) break;
                            }
                        return (
                          0 == a.length &&
                            l(u, null == e, d, null == i, t.textDirection),
                          { top: s, bottom: o, horizontal: a }
                        );
                      }
                      function Q(t, e) {
                        let i = o.top + (e ? t.top : t.bottom);
                        return { top: i, bottom: i, horizontal: [] };
                      }
                    })(this.view, t)
              )
              .reduce((t, e) => t.concat(e)),
            n = [];
          for (let i of t.selection.ranges) {
            let r = i == t.selection.main;
            if (i.empty ? !r || Ur : e.drawRangeCursor) {
              let t = es(this.view, i, r);
              t && n.push(t);
            }
          }
          return { rangePieces: i, cursors: n };
        }
        drawSel({ rangePieces: t, cursors: e }) {
          if (
            t.length != this.rangePieces.length ||
            t.some((t, e) => !t.eq(this.rangePieces[e]))
          ) {
            this.selectionLayer.textContent = '';
            for (let e of t) this.selectionLayer.appendChild(e.draw());
            this.rangePieces = t;
          }
          if (
            e.length != this.cursors.length ||
            e.some((t, e) => !t.eq(this.cursors[e]))
          ) {
            let t = this.cursorLayer.children;
            if (t.length !== e.length) {
              this.cursorLayer.textContent = '';
              for (const t of e) this.cursorLayer.appendChild(t.draw());
            } else e.forEach((e, i) => e.adjust(t[i]));
            this.cursors = e;
          }
        }
        destroy() {
          this.selectionLayer.remove(), this.cursorLayer.remove();
        }
      }
    ),
    Fr = {
      '.cm-line': {
        '& ::selection': { backgroundColor: 'transparent !important' },
        '&::selection': { backgroundColor: 'transparent !important' },
      },
    };
  Ur && (Fr['.cm-line'].caretColor = 'transparent !important');
  const Hr = H.highest(Rr.theme(Fr));
  function Jr(t) {
    let e = t.scrollDOM.getBoundingClientRect();
    return {
      left:
        (t.textDirection == zi.LTR
          ? e.left
          : e.right - t.scrollDOM.clientWidth) - t.scrollDOM.scrollLeft,
      top: e.top - t.scrollDOM.scrollTop,
    };
  }
  function Kr(t, e, i) {
    let n = Z.cursor(e);
    return {
      from: Math.max(i.from, t.moveToLineBoundary(n, !1, !0).from),
      to: Math.min(i.to, t.moveToLineBoundary(n, !0, !0).from),
      type: ii.Text,
    };
  }
  function ts(t, e) {
    let i = t.lineBlockAt(e);
    if (Array.isArray(i.type))
      for (let t of i.type)
        if (t.to > e || (t.to == e && (t.to == i.to || t.type == ii.Text)))
          return t;
    return i;
  }
  function es(t, e, i) {
    let n = t.coordsAtPos(e.head, e.assoc || 1);
    if (!n) return null;
    let r = Jr(t);
    return new Nr(
      n.left - r.left,
      n.top - r.top,
      -1,
      n.bottom - n.top,
      i ? 'cm-cursor cm-cursor-primary' : 'cm-cursor cm-cursor-secondary'
    );
  }
  const is = Ot.define({ map: (t, e) => (null == t ? null : e.mapPos(t)) }),
    ns = Y.define({
      create: () => null,
      update: (t, e) => (
        null != t && (t = e.changes.mapPos(t)),
        e.effects.reduce((t, e) => (e.is(is) ? e.value : t), t)
      ),
    }),
    rs = Ci.fromClass(
      class {
        constructor(t) {
          (this.view = t),
            (this.cursor = null),
            (this.measureReq = {
              read: this.readPos.bind(this),
              write: this.drawCursor.bind(this),
            });
        }
        update(t) {
          var e;
          let i = t.state.field(ns);
          null == i
            ? null != this.cursor &&
              (null === (e = this.cursor) || void 0 === e || e.remove(),
              (this.cursor = null))
            : (this.cursor ||
                ((this.cursor = this.view.scrollDOM.appendChild(
                  document.createElement('div')
                )),
                (this.cursor.className = 'cm-dropCursor')),
              (t.startState.field(ns) != i ||
                t.docChanged ||
                t.geometryChanged) &&
                this.view.requestMeasure(this.measureReq));
        }
        readPos() {
          let t = this.view.state.field(ns),
            e = null != t && this.view.coordsAtPos(t);
          if (!e) return null;
          let i = this.view.scrollDOM.getBoundingClientRect();
          return {
            left: e.left - i.left + this.view.scrollDOM.scrollLeft,
            top: e.top - i.top + this.view.scrollDOM.scrollTop,
            height: e.bottom - e.top,
          };
        }
        drawCursor(t) {
          this.cursor &&
            (t
              ? ((this.cursor.style.left = t.left + 'px'),
                (this.cursor.style.top = t.top + 'px'),
                (this.cursor.style.height = t.height + 'px'))
              : (this.cursor.style.left = '-100000px'));
        }
        destroy() {
          this.cursor && this.cursor.remove();
        }
        setDropPos(t) {
          this.view.state.field(ns) != t &&
            this.view.dispatch({ effects: is.of(t) });
        }
      },
      {
        eventHandlers: {
          dragover(t) {
            this.setDropPos(
              this.view.posAtCoords({ x: t.clientX, y: t.clientY })
            );
          },
          dragleave(t) {
            (t.target != this.view.contentDOM &&
              this.view.contentDOM.contains(t.relatedTarget)) ||
              this.setDropPos(null);
          },
          dragend() {
            this.setDropPos(null);
          },
          drop() {
            this.setDropPos(null);
          },
        },
      }
    );
  function ss() {
    return [ns, rs];
  }
  function os(t, e, i, n, r) {
    e.lastIndex = 0;
    for (
      let s, o = t.iterRange(i, n), a = i;
      !o.next().done;
      a += o.value.length
    )
      if (!o.lineBreak)
        for (; (s = e.exec(o.value)); )
          r(a + s.index, a + s.index + s[0].length, s);
  }
  class as {
    constructor(t) {
      let { regexp: e, decoration: i, boundary: n, maxLength: r = 1e3 } = t;
      if (!e.global)
        throw new RangeError(
          "The regular expression given to MatchDecorator should have its 'g' flag set"
        );
      (this.regexp = e),
        (this.getDeco = 'function' == typeof i ? i : () => i),
        (this.boundary = n),
        (this.maxLength = r);
    }
    createDeco(t) {
      let e = new Et();
      for (let { from: i, to: n } of (function (t, e) {
        let i = t.visibleRanges;
        if (
          1 == i.length &&
          i[0].from == t.viewport.from &&
          i[0].to == t.viewport.to
        )
          return i;
        let n = [];
        for (let { from: r, to: s } of i)
          (r = Math.max(t.state.doc.lineAt(r).from, r - e)),
            (s = Math.min(t.state.doc.lineAt(s).to, s + e)),
            n.length && n[n.length - 1].to >= r
              ? (n[n.length - 1].to = s)
              : n.push({ from: r, to: s });
        return n;
      })(t, this.maxLength))
        os(t.state.doc, this.regexp, i, n, (i, n, r) =>
          e.add(i, n, this.getDeco(r, t, i))
        );
      return e.finish();
    }
    updateDeco(t, e) {
      let i = 1e9,
        n = -1;
      return (
        t.docChanged &&
          t.changes.iterChanges((e, r, s, o) => {
            o > t.view.viewport.from &&
              s < t.view.viewport.to &&
              ((i = Math.min(s, i)), (n = Math.max(o, n)));
          }),
        t.viewportChanged || n - i > 1e3
          ? this.createDeco(t.view)
          : n > -1
          ? this.updateRange(t.view, e.map(t.changes), i, n)
          : e
      );
    }
    updateRange(t, e, i, n) {
      for (let r of t.visibleRanges) {
        let s = Math.max(r.from, i),
          o = Math.min(r.to, n);
        if (o > s) {
          let i = t.state.doc.lineAt(s),
            n = i.to < o ? t.state.doc.lineAt(o) : i,
            a = Math.max(r.from, i.from),
            l = Math.min(r.to, n.to);
          if (this.boundary) {
            for (; s > i.from; s--)
              if (this.boundary.test(i.text[s - 1 - i.from])) {
                a = s;
                break;
              }
            for (; o < n.to; o++)
              if (this.boundary.test(n.text[o - n.from])) {
                l = o;
                break;
              }
          }
          let h,
            c = [];
          if (i == n)
            for (
              this.regexp.lastIndex = a - i.from;
              (h = this.regexp.exec(i.text)) && h.index < l - i.from;

            ) {
              let e = h.index + i.from;
              c.push(this.getDeco(h, t, e).range(e, e + h[0].length));
            }
          else
            os(t.state.doc, this.regexp, a, l, (e, i, n) =>
              c.push(this.getDeco(n, t, e).range(e, i))
            );
          e = e.update({
            filterFrom: a,
            filterTo: l,
            filter: (t, e) => t < a || e > l,
            add: c,
          });
        }
      }
      return e;
    }
  }
  const ls = null != /x/.unicode ? 'gu' : 'g',
    hs = new RegExp('[\0-\b\n--­؜​‎‏\u2028\u2029‭‮\ufeff￹-￼]', ls),
    cs = {
      0: 'null',
      7: 'bell',
      8: 'backspace',
      10: 'newline',
      11: 'vertical tab',
      13: 'carriage return',
      27: 'escape',
      8203: 'zero width space',
      8204: 'zero width non-joiner',
      8205: 'zero width joiner',
      8206: 'left-to-right mark',
      8207: 'right-to-left mark',
      8232: 'line separator',
      8237: 'left-to-right override',
      8238: 'right-to-left override',
      8233: 'paragraph separator',
      65279: 'zero width no-break space',
      65532: 'object replacement',
    };
  let us = null;
  const ds = D.define({
    combine(t) {
      let e = Tt(t, { render: null, specialChars: hs, addSpecialChars: null });
      return (
        (e.replaceTabs = !(function () {
          var t;
          if (null == us && 'undefined' != typeof document && document.body) {
            let e = document.body.style;
            us =
              null !=
              (null !== (t = e.tabSize) && void 0 !== t ? t : e.MozTabSize);
          }
          return us || !1;
        })()) &&
          (e.specialChars = new RegExp('\t|' + e.specialChars.source, ls)),
        e.addSpecialChars &&
          (e.specialChars = new RegExp(
            e.specialChars.source + '|' + e.addSpecialChars.source,
            ls
          )),
        e
      );
    },
  });
  function fs(t = {}) {
    return [
      ds.of(t),
      Os ||
        (Os = Ci.fromClass(
          class {
            constructor(t) {
              (this.view = t),
                (this.decorations = ni.none),
                (this.decorationCache = Object.create(null)),
                (this.decorator = this.makeDecorator(t.state.facet(ds))),
                (this.decorations = this.decorator.createDeco(t));
            }
            makeDecorator(t) {
              return new as({
                regexp: t.specialChars,
                decoration: (e, i, n) => {
                  let { doc: r } = i.state,
                    s = h(e[0], 0);
                  if (9 == s) {
                    let t = r.lineAt(n),
                      e = i.state.tabSize,
                      s = d(t.text, e, n - t.from);
                    return ni.replace({
                      widget: new ms(
                        (e - (s % e)) * this.view.defaultCharacterWidth
                      ),
                    });
                  }
                  return (
                    this.decorationCache[s] ||
                    (this.decorationCache[s] = ni.replace({
                      widget: new ps(t, s),
                    }))
                  );
                },
                boundary: t.replaceTabs ? void 0 : /[^]/,
              });
            }
            update(t) {
              let e = t.state.facet(ds);
              t.startState.facet(ds) != e
                ? ((this.decorator = this.makeDecorator(e)),
                  (this.decorations = this.decorator.createDeco(t.view)))
                : (this.decorations = this.decorator.updateDeco(
                    t,
                    this.decorations
                  ));
            }
          },
          { decorations: (t) => t.decorations }
        )),
    ];
  }
  let Os = null;
  class ps extends ei {
    constructor(t, e) {
      super(), (this.options = t), (this.code = e);
    }
    eq(t) {
      return t.code == this.code;
    }
    toDOM(t) {
      let e = (function (t) {
          return t >= 32 ? '•' : 10 == t ? '␤' : String.fromCharCode(9216 + t);
        })(this.code),
        i =
          t.state.phrase('Control character') +
          ' ' +
          (cs[this.code] || '0x' + this.code.toString(16)),
        n = this.options.render && this.options.render(this.code, i, e);
      if (n) return n;
      let r = document.createElement('span');
      return (
        (r.textContent = e),
        (r.title = i),
        r.setAttribute('aria-label', i),
        (r.className = 'cm-specialChar'),
        r
      );
    }
    ignoreEvent() {
      return !1;
    }
  }
  class ms extends ei {
    constructor(t) {
      super(), (this.width = t);
    }
    eq(t) {
      return t.width == this.width;
    }
    toDOM() {
      let t = document.createElement('span');
      return (
        (t.textContent = '\t'),
        (t.className = 'cm-tab'),
        (t.style.width = this.width + 'px'),
        t
      );
    }
    ignoreEvent() {
      return !1;
    }
  }
  function gs() {
    return bs;
  }
  const Qs = ni.line({ class: 'cm-activeLine' }),
    bs = Ci.fromClass(
      class {
        constructor(t) {
          this.decorations = this.getDeco(t);
        }
        update(t) {
          (t.docChanged || t.selectionSet) &&
            (this.decorations = this.getDeco(t.view));
        }
        getDeco(t) {
          let e = -1,
            i = [];
          for (let n of t.state.selection.ranges) {
            if (!n.empty) return ni.none;
            let r = t.lineBlockAt(n.head);
            r.from > e && (i.push(Qs.range(r.from)), (e = r.from));
          }
          return ni.set(i);
        }
      },
      { decorations: (t) => t.decorations }
    ),
    vs = ut.define(),
    ys = ut.define(),
    ws = D.define(),
    xs = D.define({
      combine: (t) =>
        Tt(
          t,
          { minDepth: 100, newGroupDelay: 500 },
          { minDepth: Math.max, newGroupDelay: Math.min }
        ),
    });
  const ks = Y.define({
    create: () => zs.empty,
    update(t, e) {
      let i = e.state.facet(xs),
        n = e.annotation(vs);
      if (n) {
        let r = e.docChanged
            ? Z.single(
                (function (t) {
                  let e = 0;
                  return t.iterChangedRanges((t, i) => (e = i)), e;
                })(e.changes)
              )
            : void 0,
          s = Cs.fromTransaction(e, r),
          o = n.side,
          a = 0 == o ? t.undone : t.done;
        return (
          (a = s
            ? As(a, a.length, i.minDepth, s)
            : Ms(a, e.startState.selection)),
          new zs(0 == o ? n.rest : a, 0 == o ? a : n.rest)
        );
      }
      let r = e.annotation(ys);
      if (
        (('full' != r && 'before' != r) || (t = t.isolate()),
        !1 === e.annotation(pt.addToHistory))
      )
        return e.changes.empty ? t : t.addMapping(e.changes.desc);
      let s = Cs.fromTransaction(e),
        o = e.annotation(pt.time),
        a = e.annotation(pt.userEvent);
      return (
        s
          ? (t = t.addChanges(s, o, a, i.newGroupDelay, i.minDepth))
          : e.selection &&
            (t = t.addSelection(e.startState.selection, o, a, i.newGroupDelay)),
        ('full' != r && 'after' != r) || (t = t.isolate()),
        t
      );
    },
    toJSON: (t) => ({
      done: t.done.map((t) => t.toJSON()),
      undone: t.undone.map((t) => t.toJSON()),
    }),
    fromJSON: (t) => new zs(t.done.map(Cs.fromJSON), t.undone.map(Cs.fromJSON)),
  });
  function Ss(t = {}) {
    return [
      ks,
      xs.of(t),
      Rr.domEventHandlers({
        beforeinput(t, e) {
          let i =
            'historyUndo' == t.inputType
              ? Ts
              : 'historyRedo' == t.inputType
              ? Ps
              : null;
          return !!i && (t.preventDefault(), i(e));
        },
      }),
    ];
  }
  function $s(t, e) {
    return function ({ state: i, dispatch: n }) {
      if (!e && i.readOnly) return !1;
      let r = i.field(ks, !1);
      if (!r) return !1;
      let s = r.pop(t, i, e);
      return !!s && (n(s), !0);
    };
  }
  const Ts = $s(0, !1),
    Ps = $s(1, !1),
    Rs = $s(0, !0),
    Ws = $s(1, !0);
  class Cs {
    constructor(t, e, i, n, r) {
      (this.changes = t),
        (this.effects = e),
        (this.mapped = i),
        (this.startSelection = n),
        (this.selectionsAfter = r);
    }
    setSelAfter(t) {
      return new Cs(
        this.changes,
        this.effects,
        this.mapped,
        this.startSelection,
        t
      );
    }
    toJSON() {
      var t, e, i;
      return {
        changes:
          null === (t = this.changes) || void 0 === t ? void 0 : t.toJSON(),
        mapped:
          null === (e = this.mapped) || void 0 === e ? void 0 : e.toJSON(),
        startSelection:
          null === (i = this.startSelection) || void 0 === i
            ? void 0
            : i.toJSON(),
        selectionsAfter: this.selectionsAfter.map((t) => t.toJSON()),
      };
    }
    static fromJSON(t) {
      return new Cs(
        t.changes && $.fromJSON(t.changes),
        [],
        t.mapped && S.fromJSON(t.mapped),
        t.startSelection && Z.fromJSON(t.startSelection),
        t.selectionsAfter.map(Z.fromJSON)
      );
    }
    static fromTransaction(t, e) {
      let i = Zs;
      for (let e of t.startState.facet(ws)) {
        let n = e(t);
        n.length && (i = i.concat(n));
      }
      return !i.length && t.changes.empty
        ? null
        : new Cs(
            t.changes.invert(t.startState.doc),
            i,
            void 0,
            e || t.startState.selection,
            Zs
          );
    }
    static selection(t) {
      return new Cs(void 0, Zs, void 0, void 0, t);
    }
  }
  function As(t, e, i, n) {
    let r = e + 1 > i + 20 ? e - i - 1 : 0,
      s = t.slice(r, e);
    return s.push(n), s;
  }
  function Xs(t, e) {
    return t.length ? (e.length ? t.concat(e) : t) : e;
  }
  const Zs = [];
  function Ms(t, e) {
    if (t.length) {
      let i = t[t.length - 1],
        n = i.selectionsAfter.slice(
          Math.max(0, i.selectionsAfter.length - 200)
        );
      return n.length && n[n.length - 1].eq(e)
        ? t
        : (n.push(e), As(t, t.length - 1, 1e9, i.setSelAfter(n)));
    }
    return [Cs.selection([e])];
  }
  function _s(t) {
    let e = t[t.length - 1],
      i = t.slice();
    return (
      (i[t.length - 1] = e.setSelAfter(
        e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)
      )),
      i
    );
  }
  function Ls(t, e) {
    if (!t.length) return t;
    let i = t.length,
      n = Zs;
    for (; i; ) {
      let r = Ds(t[i - 1], e, n);
      if ((r.changes && !r.changes.empty) || r.effects.length) {
        let e = t.slice(0, i);
        return (e[i - 1] = r), e;
      }
      (e = r.mapped), i--, (n = r.selectionsAfter);
    }
    return n.length ? [Cs.selection(n)] : Zs;
  }
  function Ds(t, e, i) {
    let n = Xs(
      t.selectionsAfter.length ? t.selectionsAfter.map((t) => t.map(e)) : Zs,
      i
    );
    if (!t.changes) return Cs.selection(n);
    let r = t.changes.map(e),
      s = e.mapDesc(t.changes, !0),
      o = t.mapped ? t.mapped.composeDesc(s) : s;
    return new Cs(
      r,
      Ot.mapEffects(t.effects, e),
      o,
      t.startSelection.map(s),
      n
    );
  }
  const Es = /^(input\.type|delete)($|\.)/;
  class zs {
    constructor(t, e, i = 0, n) {
      (this.done = t),
        (this.undone = e),
        (this.prevTime = i),
        (this.prevUserEvent = n);
    }
    isolate() {
      return this.prevTime ? new zs(this.done, this.undone) : this;
    }
    addChanges(t, e, i, n, r) {
      let s = this.done,
        o = s[s.length - 1];
      return (
        (s =
          o &&
          o.changes &&
          !o.changes.empty &&
          t.changes &&
          (!i || Es.test(i)) &&
          ((!o.selectionsAfter.length &&
            e - this.prevTime < n &&
            (function (t, e) {
              let i = [],
                n = !1;
              return (
                t.iterChangedRanges((t, e) => i.push(t, e)),
                e.iterChangedRanges((t, e, r, s) => {
                  for (let t = 0; t < i.length; ) {
                    let e = i[t++],
                      o = i[t++];
                    s >= e && r <= o && (n = !0);
                  }
                }),
                n
              );
            })(o.changes, t.changes)) ||
            'input.type.compose' == i)
            ? As(
                s,
                s.length - 1,
                r,
                new Cs(
                  t.changes.compose(o.changes),
                  Xs(t.effects, o.effects),
                  o.mapped,
                  o.startSelection,
                  Zs
                )
              )
            : As(s, s.length, r, t)),
        new zs(s, Zs, e, i)
      );
    }
    addSelection(t, e, i, n) {
      let r = this.done.length
        ? this.done[this.done.length - 1].selectionsAfter
        : Zs;
      return r.length > 0 &&
        e - this.prevTime < n &&
        i == this.prevUserEvent &&
        i &&
        /^select($|\.)/.test(i) &&
        (function (t, e) {
          return (
            t.ranges.length == e.ranges.length &&
            0 === t.ranges.filter((t, i) => t.empty != e.ranges[i].empty).length
          );
        })(r[r.length - 1], t)
        ? this
        : new zs(Ms(this.done, t), this.undone, e, i);
    }
    addMapping(t) {
      return new zs(
        Ls(this.done, t),
        Ls(this.undone, t),
        this.prevTime,
        this.prevUserEvent
      );
    }
    pop(t, e, i) {
      let n = 0 == t ? this.done : this.undone;
      if (0 == n.length) return null;
      let r = n[n.length - 1];
      if (i && r.selectionsAfter.length)
        return e.update({
          selection: r.selectionsAfter[r.selectionsAfter.length - 1],
          annotations: vs.of({ side: t, rest: _s(n) }),
          userEvent: 0 == t ? 'select.undo' : 'select.redo',
          scrollIntoView: !0,
        });
      if (r.changes) {
        let i = 1 == n.length ? Zs : n.slice(0, n.length - 1);
        return (
          r.mapped && (i = Ls(i, r.mapped)),
          e.update({
            changes: r.changes,
            selection: r.startSelection,
            effects: r.effects,
            annotations: vs.of({ side: t, rest: i }),
            filter: !1,
            userEvent: 0 == t ? 'undo' : 'redo',
            scrollIntoView: !0,
          })
        );
      }
      return null;
    }
  }
  zs.empty = new zs(Zs, Zs);
  const qs = [
      { key: 'Mod-z', run: Ts, preventDefault: !0 },
      { key: 'Mod-y', mac: 'Mod-Shift-z', run: Ps, preventDefault: !0 },
      { key: 'Mod-u', run: Rs, preventDefault: !0 },
      { key: 'Alt-u', mac: 'Mod-Shift-u', run: Ws, preventDefault: !0 },
    ],
    js = 1024;
  let Vs = 0;
  class Ys {
    constructor(t, e) {
      (this.from = t), (this.to = e);
    }
  }
  class Us {
    constructor(t = {}) {
      (this.id = Vs++),
        (this.perNode = !!t.perNode),
        (this.deserialize =
          t.deserialize ||
          (() => {
            throw new Error(
              "This node type doesn't define a deserialize function"
            );
          }));
    }
    add(t) {
      if (this.perNode)
        throw new RangeError("Can't add per-node props to node types");
      return (
        'function' != typeof t && (t = Ns.match(t)),
        (e) => {
          let i = t(e);
          return void 0 === i ? null : [this, i];
        }
      );
    }
  }
  (Us.closedBy = new Us({ deserialize: (t) => t.split(' ') })),
    (Us.openedBy = new Us({ deserialize: (t) => t.split(' ') })),
    (Us.group = new Us({ deserialize: (t) => t.split(' ') })),
    (Us.contextHash = new Us({ perNode: !0 })),
    (Us.lookAhead = new Us({ perNode: !0 })),
    (Us.mounted = new Us({ perNode: !0 }));
  class Gs {
    constructor(t, e, i) {
      (this.tree = t), (this.overlay = e), (this.parser = i);
    }
  }
  const Is = Object.create(null);
  class Ns {
    constructor(t, e, i, n = 0) {
      (this.name = t), (this.props = e), (this.id = i), (this.flags = n);
    }
    static define(t) {
      let e = t.props && t.props.length ? Object.create(null) : Is,
        i =
          (t.top ? 1 : 0) |
          (t.skipped ? 2 : 0) |
          (t.error ? 4 : 0) |
          (null == t.name ? 8 : 0),
        n = new Ns(t.name || '', e, t.id, i);
      if (t.props)
        for (let i of t.props)
          if ((Array.isArray(i) || (i = i(n)), i)) {
            if (i[0].perNode)
              throw new RangeError(
                "Can't store a per-node prop on a node type"
              );
            e[i[0].id] = i[1];
          }
      return n;
    }
    prop(t) {
      return this.props[t.id];
    }
    get isTop() {
      return (1 & this.flags) > 0;
    }
    get isSkipped() {
      return (2 & this.flags) > 0;
    }
    get isError() {
      return (4 & this.flags) > 0;
    }
    get isAnonymous() {
      return (8 & this.flags) > 0;
    }
    is(t) {
      if ('string' == typeof t) {
        if (this.name == t) return !0;
        let e = this.prop(Us.group);
        return !!e && e.indexOf(t) > -1;
      }
      return this.id == t;
    }
    static match(t) {
      let e = Object.create(null);
      for (let i in t) for (let n of i.split(' ')) e[n] = t[i];
      return (t) => {
        for (let i = t.prop(Us.group), n = -1; n < (i ? i.length : 0); n++) {
          let r = e[n < 0 ? t.name : i[n]];
          if (r) return r;
        }
      };
    }
  }
  Ns.none = new Ns('', Object.create(null), 0, 8);
  class Bs {
    constructor(t) {
      this.types = t;
      for (let e = 0; e < t.length; e++)
        if (t[e].id != e)
          throw new RangeError(
            'Node type ids should correspond to array positions when creating a node set'
          );
    }
    extend(...t) {
      let e = [];
      for (let i of this.types) {
        let n = null;
        for (let e of t) {
          let t = e(i);
          t && (n || (n = Object.assign({}, i.props)), (n[t[0].id] = t[1]));
        }
        e.push(n ? new Ns(i.name, n, i.id, i.flags) : i);
      }
      return new Bs(e);
    }
  }
  const Fs = new WeakMap(),
    Hs = new WeakMap();
  class Js {
    constructor(t, e, i, n, r) {
      if (
        ((this.type = t),
        (this.children = e),
        (this.positions = i),
        (this.length = n),
        (this.props = null),
        r && r.length)
      ) {
        this.props = Object.create(null);
        for (let [t, e] of r) this.props['number' == typeof t ? t : t.id] = e;
      }
    }
    toString() {
      let t = this.prop(Us.mounted);
      if (t && !t.overlay) return t.tree.toString();
      let e = '';
      for (let t of this.children) {
        let i = t.toString();
        i && (e && (e += ','), (e += i));
      }
      return this.type.name
        ? (/\W/.test(this.type.name) && !this.type.isError
            ? JSON.stringify(this.type.name)
            : this.type.name) + (e.length ? '(' + e + ')' : '')
        : e;
    }
    cursor(t, e = 0) {
      let i = (null != t && Fs.get(this)) || this.topNode,
        n = new lo(i);
      return null != t && (n.moveTo(t, e), Fs.set(this, n._tree)), n;
    }
    fullCursor() {
      return new lo(this.topNode, 1);
    }
    get topNode() {
      return new ro(this, 0, 0, null);
    }
    resolve(t, e = 0) {
      let i = no(Fs.get(this) || this.topNode, t, e, !1);
      return Fs.set(this, i), i;
    }
    resolveInner(t, e = 0) {
      let i = no(Hs.get(this) || this.topNode, t, e, !0);
      return Hs.set(this, i), i;
    }
    iterate(t) {
      let { enter: e, leave: i, from: n = 0, to: r = this.length } = t;
      for (let t = this.cursor(), s = () => t.node; ; ) {
        let o = !1;
        if (
          t.from <= r &&
          t.to >= n &&
          (t.type.isAnonymous || !1 !== e(t.type, t.from, t.to, s))
        ) {
          if (t.firstChild()) continue;
          t.type.isAnonymous || (o = !0);
        }
        for (
          ;
          o && i && i(t.type, t.from, t.to, s),
            (o = t.type.isAnonymous),
            !t.nextSibling();

        ) {
          if (!t.parent()) return;
          o = !0;
        }
      }
    }
    prop(t) {
      return t.perNode
        ? this.props
          ? this.props[t.id]
          : void 0
        : this.type.prop(t);
    }
    get propValues() {
      let t = [];
      if (this.props) for (let e in this.props) t.push([+e, this.props[e]]);
      return t;
    }
    balance(t = {}) {
      return this.children.length <= 8
        ? this
        : fo(
            Ns.none,
            this.children,
            this.positions,
            0,
            this.children.length,
            0,
            this.length,
            (t, e, i) => new Js(this.type, t, e, i, this.propValues),
            t.makeTree || ((t, e, i) => new Js(Ns.none, t, e, i))
          );
    }
    static build(t) {
      return (function (t) {
        var e;
        let {
            buffer: i,
            nodeSet: n,
            maxBufferLength: r = js,
            reused: s = [],
            minRepeatType: o = n.types.length,
          } = t,
          a = Array.isArray(i) ? new Ks(i, i.length) : i,
          l = n.types,
          h = 0,
          c = 0;
        function u(t, e, i, g, Q) {
          let { id: b, start: v, end: y, size: w } = a,
            x = c;
          for (; w < 0; ) {
            if ((a.next(), -1 == w)) {
              let e = s[b];
              return i.push(e), void g.push(v - t);
            }
            if (-3 == w) return void (h = b);
            if (-4 == w) return void (c = b);
            throw new RangeError(`Unrecognized record size: ${w}`);
          }
          let k,
            S,
            $ = l[b],
            T = v - t;
          if (y - v <= r && (S = p(a.pos - e, Q))) {
            let e = new Uint16Array(S.size - S.skip),
              i = a.pos - S.size,
              r = e.length;
            for (; a.pos > i; ) r = m(S.start, e, r);
            (k = new to(e, y - S.start, n)), (T = S.start - t);
          } else {
            let t = a.pos - w;
            a.next();
            let e = [],
              i = [],
              n = b >= o ? b : -1,
              s = 0,
              l = y;
            for (; a.pos > t; )
              n >= 0 && a.id == n && a.size >= 0
                ? (a.end <= l - r &&
                    (f(e, i, v, s, a.end, l, n, x),
                    (s = e.length),
                    (l = a.end)),
                  a.next())
                : u(v, t, e, i, n);
            if (
              (n >= 0 && s > 0 && s < e.length && f(e, i, v, s, v, l, n, x),
              e.reverse(),
              i.reverse(),
              n > -1 && s > 0)
            ) {
              let t = d($);
              k = fo($, e, i, 0, e.length, 0, y - v, t, t);
            } else k = O($, e, i, y - v, x - y);
          }
          i.push(k), g.push(T);
        }
        function d(t) {
          return (e, i, n) => {
            let r,
              s,
              o = 0,
              a = e.length - 1;
            if (a >= 0 && (r = e[a]) instanceof Js) {
              if (!a && r.type == t && r.length == n) return r;
              (s = r.prop(Us.lookAhead)) && (o = i[a] + r.length + s);
            }
            return O(t, e, i, n, o);
          };
        }
        function f(t, e, i, r, s, o, a, l) {
          let h = [],
            c = [];
          for (; t.length > r; ) h.push(t.pop()), c.push(e.pop() + i - s);
          t.push(O(n.types[a], h, c, o - s, l - o)), e.push(s - i);
        }
        function O(t, e, i, n, r = 0, s) {
          if (h) {
            let t = [Us.contextHash, h];
            s = s ? [t].concat(s) : [t];
          }
          if (r > 25) {
            let t = [Us.lookAhead, r];
            s = s ? [t].concat(s) : [t];
          }
          return new Js(t, e, i, n, s);
        }
        function p(t, e) {
          let i = a.fork(),
            n = 0,
            s = 0,
            l = 0,
            h = i.end - r,
            c = { size: 0, start: 0, skip: 0 };
          t: for (let r = i.pos - t; i.pos > r; ) {
            let t = i.size;
            if (i.id == e && t >= 0) {
              (c.size = n),
                (c.start = s),
                (c.skip = l),
                (l += 4),
                (n += 4),
                i.next();
              continue;
            }
            let a = i.pos - t;
            if (t < 0 || a < r || i.start < h) break;
            let u = i.id >= o ? 4 : 0,
              d = i.start;
            for (i.next(); i.pos > a; ) {
              if (i.size < 0) {
                if (-3 != i.size) break t;
                u += 4;
              } else i.id >= o && (u += 4);
              i.next();
            }
            (s = d), (n += t), (l += u);
          }
          return (
            (e < 0 || n == t) && ((c.size = n), (c.start = s), (c.skip = l)),
            c.size > 4 ? c : void 0
          );
        }
        function m(t, e, i) {
          let { id: n, start: r, end: s, size: l } = a;
          if ((a.next(), l >= 0 && n < o)) {
            let o = i;
            if (l > 4) {
              let n = a.pos - (l - 4);
              for (; a.pos > n; ) i = m(t, e, i);
            }
            (e[--i] = o), (e[--i] = s - t), (e[--i] = r - t), (e[--i] = n);
          } else -3 == l ? (h = n) : -4 == l && (c = n);
          return i;
        }
        let g = [],
          Q = [];
        for (; a.pos > 0; ) u(t.start || 0, t.bufferStart || 0, g, Q, -1);
        let b =
          null !== (e = t.length) && void 0 !== e
            ? e
            : g.length
            ? Q[0] + g[0].length
            : 0;
        return new Js(l[t.topID], g.reverse(), Q.reverse(), b);
      })(t);
    }
  }
  Js.empty = new Js(Ns.none, [], [], 0);
  class Ks {
    constructor(t, e) {
      (this.buffer = t), (this.index = e);
    }
    get id() {
      return this.buffer[this.index - 4];
    }
    get start() {
      return this.buffer[this.index - 3];
    }
    get end() {
      return this.buffer[this.index - 2];
    }
    get size() {
      return this.buffer[this.index - 1];
    }
    get pos() {
      return this.index;
    }
    next() {
      this.index -= 4;
    }
    fork() {
      return new Ks(this.buffer, this.index);
    }
  }
  class to {
    constructor(t, e, i) {
      (this.buffer = t), (this.length = e), (this.set = i);
    }
    get type() {
      return Ns.none;
    }
    toString() {
      let t = [];
      for (let e = 0; e < this.buffer.length; )
        t.push(this.childString(e)), (e = this.buffer[e + 3]);
      return t.join(',');
    }
    childString(t) {
      let e = this.buffer[t],
        i = this.buffer[t + 3],
        n = this.set.types[e],
        r = n.name;
      if (
        (/\W/.test(r) && !n.isError && (r = JSON.stringify(r)), i == (t += 4))
      )
        return r;
      let s = [];
      for (; t < i; ) s.push(this.childString(t)), (t = this.buffer[t + 3]);
      return r + '(' + s.join(',') + ')';
    }
    findChild(t, e, i, n, r) {
      let { buffer: s } = this,
        o = -1;
      for (
        let a = t;
        a != e && !(eo(r, n, s[a + 1], s[a + 2]) && ((o = a), i > 0));
        a = s[a + 3]
      );
      return o;
    }
    slice(t, e, i, n) {
      let r = this.buffer,
        s = new Uint16Array(e - t);
      for (let n = t, o = 0; n < e; )
        (s[o++] = r[n++]),
          (s[o++] = r[n++] - i),
          (s[o++] = r[n++] - i),
          (s[o++] = r[n++] - t);
      return new to(s, n - i, this.set);
    }
  }
  function eo(t, e, i, n) {
    switch (t) {
      case -2:
        return i < e;
      case -1:
        return n >= e && i < e;
      case 0:
        return i < e && n > e;
      case 1:
        return i <= e && n > e;
      case 2:
        return n > e;
      case 4:
        return !0;
    }
  }
  function io(t, e) {
    let i = t.childBefore(e);
    for (; i; ) {
      let e = i.lastChild;
      if (!e || e.to != i.to) break;
      e.type.isError && e.from == e.to
        ? ((t = i), (i = e.prevSibling))
        : (i = e);
    }
    return t;
  }
  function no(t, e, i, n) {
    for (
      var r;
      t.from == t.to ||
      (i < 1 ? t.from >= e : t.from > e) ||
      (i > -1 ? t.to <= e : t.to < e);

    ) {
      let e = !n && t instanceof ro && t.index < 0 ? null : t.parent;
      if (!e) return t;
      t = e;
    }
    if (n)
      for (let n = t, s = n.parent; s; n = s, s = n.parent)
        n instanceof ro &&
          n.index < 0 &&
          (null === (r = s.enter(e, i, !0)) || void 0 === r
            ? void 0
            : r.from) != n.from &&
          (t = s);
    for (;;) {
      let r = t.enter(e, i, n);
      if (!r) return t;
      t = r;
    }
  }
  class ro {
    constructor(t, e, i, n) {
      (this.node = t), (this._from = e), (this.index = i), (this._parent = n);
    }
    get type() {
      return this.node.type;
    }
    get name() {
      return this.node.type.name;
    }
    get from() {
      return this._from;
    }
    get to() {
      return this._from + this.node.length;
    }
    nextChild(t, e, i, n, r = 0) {
      for (let s = this; ; ) {
        for (
          let { children: o, positions: a } = s.node, l = e > 0 ? o.length : -1;
          t != l;
          t += e
        ) {
          let l = o[t],
            h = a[t] + s._from;
          if (eo(n, i, h, h + l.length))
            if (l instanceof to) {
              if (2 & r) continue;
              let o = l.findChild(0, l.buffer.length, e, i - h, n);
              if (o > -1) return new ao(new oo(s, l, t, h), null, o);
            } else if (1 & r || !l.type.isAnonymous || ho(l)) {
              let o;
              if (!(1 & r) && l.props && (o = l.prop(Us.mounted)) && !o.overlay)
                return new ro(o.tree, h, t, s);
              let a = new ro(l, h, t, s);
              return 1 & r || !a.type.isAnonymous
                ? a
                : a.nextChild(e < 0 ? l.children.length - 1 : 0, e, i, n);
            }
        }
        if (1 & r || !s.type.isAnonymous) return null;
        if (
          ((t =
            s.index >= 0
              ? s.index + e
              : e < 0
              ? -1
              : s._parent.node.children.length),
          (s = s._parent),
          !s)
        )
          return null;
      }
    }
    get firstChild() {
      return this.nextChild(0, 1, 0, 4);
    }
    get lastChild() {
      return this.nextChild(this.node.children.length - 1, -1, 0, 4);
    }
    childAfter(t) {
      return this.nextChild(0, 1, t, 2);
    }
    childBefore(t) {
      return this.nextChild(this.node.children.length - 1, -1, t, -2);
    }
    enter(t, e, i = !0, n = !0) {
      let r;
      if (i && (r = this.node.prop(Us.mounted)) && r.overlay) {
        let i = t - this.from;
        for (let { from: t, to: n } of r.overlay)
          if ((e > 0 ? t <= i : t < i) && (e < 0 ? n >= i : n > i))
            return new ro(r.tree, r.overlay[0].from + this.from, -1, this);
      }
      return this.nextChild(0, 1, t, e, n ? 0 : 2);
    }
    nextSignificantParent() {
      let t = this;
      for (; t.type.isAnonymous && t._parent; ) t = t._parent;
      return t;
    }
    get parent() {
      return this._parent ? this._parent.nextSignificantParent() : null;
    }
    get nextSibling() {
      return this._parent && this.index >= 0
        ? this._parent.nextChild(this.index + 1, 1, 0, 4)
        : null;
    }
    get prevSibling() {
      return this._parent && this.index >= 0
        ? this._parent.nextChild(this.index - 1, -1, 0, 4)
        : null;
    }
    get cursor() {
      return new lo(this);
    }
    get tree() {
      return this.node;
    }
    toTree() {
      return this.node;
    }
    resolve(t, e = 0) {
      return no(this, t, e, !1);
    }
    resolveInner(t, e = 0) {
      return no(this, t, e, !0);
    }
    enterUnfinishedNodesBefore(t) {
      return io(this, t);
    }
    getChild(t, e = null, i = null) {
      let n = so(this, t, e, i);
      return n.length ? n[0] : null;
    }
    getChildren(t, e = null, i = null) {
      return so(this, t, e, i);
    }
    toString() {
      return this.node.toString();
    }
  }
  function so(t, e, i, n) {
    let r = t.cursor,
      s = [];
    if (!r.firstChild()) return s;
    if (null != i) for (; !r.type.is(i); ) if (!r.nextSibling()) return s;
    for (;;) {
      if (null != n && r.type.is(n)) return s;
      if ((r.type.is(e) && s.push(r.node), !r.nextSibling()))
        return null == n ? s : [];
    }
  }
  class oo {
    constructor(t, e, i, n) {
      (this.parent = t), (this.buffer = e), (this.index = i), (this.start = n);
    }
  }
  class ao {
    constructor(t, e, i) {
      (this.context = t),
        (this._parent = e),
        (this.index = i),
        (this.type = t.buffer.set.types[t.buffer.buffer[i]]);
    }
    get name() {
      return this.type.name;
    }
    get from() {
      return this.context.start + this.context.buffer.buffer[this.index + 1];
    }
    get to() {
      return this.context.start + this.context.buffer.buffer[this.index + 2];
    }
    child(t, e, i) {
      let { buffer: n } = this.context,
        r = n.findChild(
          this.index + 4,
          n.buffer[this.index + 3],
          t,
          e - this.context.start,
          i
        );
      return r < 0 ? null : new ao(this.context, this, r);
    }
    get firstChild() {
      return this.child(1, 0, 4);
    }
    get lastChild() {
      return this.child(-1, 0, 4);
    }
    childAfter(t) {
      return this.child(1, t, 2);
    }
    childBefore(t) {
      return this.child(-1, t, -2);
    }
    enter(t, e, i, n = !0) {
      if (!n) return null;
      let { buffer: r } = this.context,
        s = r.findChild(
          this.index + 4,
          r.buffer[this.index + 3],
          e > 0 ? 1 : -1,
          t - this.context.start,
          e
        );
      return s < 0 ? null : new ao(this.context, this, s);
    }
    get parent() {
      return this._parent || this.context.parent.nextSignificantParent();
    }
    externalSibling(t) {
      return this._parent
        ? null
        : this.context.parent.nextChild(this.context.index + t, t, 0, 4);
    }
    get nextSibling() {
      let { buffer: t } = this.context,
        e = t.buffer[this.index + 3];
      return e <
        (this._parent ? t.buffer[this._parent.index + 3] : t.buffer.length)
        ? new ao(this.context, this._parent, e)
        : this.externalSibling(1);
    }
    get prevSibling() {
      let { buffer: t } = this.context,
        e = this._parent ? this._parent.index + 4 : 0;
      return this.index == e
        ? this.externalSibling(-1)
        : new ao(
            this.context,
            this._parent,
            t.findChild(e, this.index, -1, 0, 4)
          );
    }
    get cursor() {
      return new lo(this);
    }
    get tree() {
      return null;
    }
    toTree() {
      let t = [],
        e = [],
        { buffer: i } = this.context,
        n = this.index + 4,
        r = i.buffer[this.index + 3];
      if (r > n) {
        let s = i.buffer[this.index + 1],
          o = i.buffer[this.index + 2];
        t.push(i.slice(n, r, s, o)), e.push(0);
      }
      return new Js(this.type, t, e, this.to - this.from);
    }
    resolve(t, e = 0) {
      return no(this, t, e, !1);
    }
    resolveInner(t, e = 0) {
      return no(this, t, e, !0);
    }
    enterUnfinishedNodesBefore(t) {
      return io(this, t);
    }
    toString() {
      return this.context.buffer.childString(this.index);
    }
    getChild(t, e = null, i = null) {
      let n = so(this, t, e, i);
      return n.length ? n[0] : null;
    }
    getChildren(t, e = null, i = null) {
      return so(this, t, e, i);
    }
  }
  class lo {
    constructor(t, e = 0) {
      if (
        ((this.mode = e),
        (this.buffer = null),
        (this.stack = []),
        (this.index = 0),
        (this.bufferNode = null),
        t instanceof ro)
      )
        this.yieldNode(t);
      else {
        (this._tree = t.context.parent), (this.buffer = t.context);
        for (let e = t._parent; e; e = e._parent) this.stack.unshift(e.index);
        (this.bufferNode = t), this.yieldBuf(t.index);
      }
    }
    get name() {
      return this.type.name;
    }
    yieldNode(t) {
      return (
        !!t &&
        ((this._tree = t),
        (this.type = t.type),
        (this.from = t.from),
        (this.to = t.to),
        !0)
      );
    }
    yieldBuf(t, e) {
      this.index = t;
      let { start: i, buffer: n } = this.buffer;
      return (
        (this.type = e || n.set.types[n.buffer[t]]),
        (this.from = i + n.buffer[t + 1]),
        (this.to = i + n.buffer[t + 2]),
        !0
      );
    }
    yield(t) {
      return (
        !!t &&
        (t instanceof ro
          ? ((this.buffer = null), this.yieldNode(t))
          : ((this.buffer = t.context), this.yieldBuf(t.index, t.type)))
      );
    }
    toString() {
      return this.buffer
        ? this.buffer.buffer.childString(this.index)
        : this._tree.toString();
    }
    enterChild(t, e, i) {
      if (!this.buffer)
        return this.yield(
          this._tree.nextChild(
            t < 0 ? this._tree.node.children.length - 1 : 0,
            t,
            e,
            i,
            this.mode
          )
        );
      let { buffer: n } = this.buffer,
        r = n.findChild(
          this.index + 4,
          n.buffer[this.index + 3],
          t,
          e - this.buffer.start,
          i
        );
      return !(r < 0) && (this.stack.push(this.index), this.yieldBuf(r));
    }
    firstChild() {
      return this.enterChild(1, 0, 4);
    }
    lastChild() {
      return this.enterChild(-1, 0, 4);
    }
    childAfter(t) {
      return this.enterChild(1, t, 2);
    }
    childBefore(t) {
      return this.enterChild(-1, t, -2);
    }
    enter(t, e, i = !0, n = !0) {
      return this.buffer
        ? !!n && this.enterChild(1, t, e)
        : this.yield(this._tree.enter(t, e, i && !(1 & this.mode), n));
    }
    parent() {
      if (!this.buffer)
        return this.yieldNode(
          1 & this.mode ? this._tree._parent : this._tree.parent
        );
      if (this.stack.length) return this.yieldBuf(this.stack.pop());
      let t =
        1 & this.mode
          ? this.buffer.parent
          : this.buffer.parent.nextSignificantParent();
      return (this.buffer = null), this.yieldNode(t);
    }
    sibling(t) {
      if (!this.buffer)
        return (
          !!this._tree._parent &&
          this.yield(
            this._tree.index < 0
              ? null
              : this._tree._parent.nextChild(
                  this._tree.index + t,
                  t,
                  0,
                  4,
                  this.mode
                )
          )
        );
      let { buffer: e } = this.buffer,
        i = this.stack.length - 1;
      if (t < 0) {
        let t = i < 0 ? 0 : this.stack[i] + 4;
        if (this.index != t)
          return this.yieldBuf(e.findChild(t, this.index, -1, 0, 4));
      } else {
        let t = e.buffer[this.index + 3];
        if (t < (i < 0 ? e.buffer.length : e.buffer[this.stack[i] + 3]))
          return this.yieldBuf(t);
      }
      return (
        i < 0 &&
        this.yield(
          this.buffer.parent.nextChild(
            this.buffer.index + t,
            t,
            0,
            4,
            this.mode
          )
        )
      );
    }
    nextSibling() {
      return this.sibling(1);
    }
    prevSibling() {
      return this.sibling(-1);
    }
    atLastNode(t) {
      let e,
        i,
        { buffer: n } = this;
      if (n) {
        if (t > 0) {
          if (this.index < n.buffer.buffer.length) return !1;
        } else
          for (let t = 0; t < this.index; t++)
            if (n.buffer.buffer[t + 3] < this.index) return !1;
        ({ index: e, parent: i } = n);
      } else ({ index: e, _parent: i } = this._tree);
      for (; i; { index: e, _parent: i } = i)
        if (e > -1)
          for (
            let n = e + t, r = t < 0 ? -1 : i.node.children.length;
            n != r;
            n += t
          ) {
            let t = i.node.children[n];
            if (
              1 & this.mode ||
              t instanceof to ||
              !t.type.isAnonymous ||
              ho(t)
            )
              return !1;
          }
      return !0;
    }
    move(t, e) {
      if (e && this.enterChild(t, 0, 4)) return !0;
      for (;;) {
        if (this.sibling(t)) return !0;
        if (this.atLastNode(t) || !this.parent()) return !1;
      }
    }
    next(t = !0) {
      return this.move(1, t);
    }
    prev(t = !0) {
      return this.move(-1, t);
    }
    moveTo(t, e = 0) {
      for (
        ;
        (this.from == this.to ||
          (e < 1 ? this.from >= t : this.from > t) ||
          (e > -1 ? this.to <= t : this.to < t)) &&
        this.parent();

      );
      for (; this.enterChild(1, t, e); );
      return this;
    }
    get node() {
      if (!this.buffer) return this._tree;
      let t = this.bufferNode,
        e = null,
        i = 0;
      if (t && t.context == this.buffer)
        t: for (let n = this.index, r = this.stack.length; r >= 0; ) {
          for (let s = t; s; s = s._parent)
            if (s.index == n) {
              if (n == this.index) return s;
              (e = s), (i = r + 1);
              break t;
            }
          n = this.stack[--r];
        }
      for (let t = i; t < this.stack.length; t++)
        e = new ao(this.buffer, e, this.stack[t]);
      return (this.bufferNode = new ao(this.buffer, e, this.index));
    }
    get tree() {
      return this.buffer ? null : this._tree.node;
    }
  }
  function ho(t) {
    return t.children.some(
      (t) => t instanceof to || !t.type.isAnonymous || ho(t)
    );
  }
  const co = new WeakMap();
  function uo(t, e) {
    if (!t.isAnonymous || e instanceof to || e.type != t) return 1;
    let i = co.get(e);
    if (null == i) {
      i = 1;
      for (let n of e.children) {
        if (n.type != t || !(n instanceof Js)) {
          i = 1;
          break;
        }
        i += uo(t, n);
      }
      co.set(e, i);
    }
    return i;
  }
  function fo(t, e, i, n, r, s, o, a, l) {
    let h = 0;
    for (let i = n; i < r; i++) h += uo(t, e[i]);
    let c = Math.ceil((1.5 * h) / 8),
      u = [],
      d = [];
    return (
      (function e(i, n, r, o, a) {
        for (let h = r; h < o; ) {
          let r = h,
            f = n[h],
            O = uo(t, i[h]);
          for (h++; h < o; h++) {
            let e = uo(t, i[h]);
            if (O + e >= c) break;
            O += e;
          }
          if (h == r + 1) {
            if (O > c) {
              let t = i[r];
              e(t.children, t.positions, 0, t.children.length, n[r] + a);
              continue;
            }
            u.push(i[r]);
          } else {
            let e = n[h - 1] + i[h - 1].length - f;
            u.push(fo(t, i, n, r, h, f, e, null, l));
          }
          d.push(f + a - s);
        }
      })(e, i, n, r, 0),
      (a || l)(u, d, o)
    );
  }
  class Oo {
    constructor(t, e, i, n, r = !1, s = !1) {
      (this.from = t),
        (this.to = e),
        (this.tree = i),
        (this.offset = n),
        (this.open = (r ? 1 : 0) | (s ? 2 : 0));
    }
    get openStart() {
      return (1 & this.open) > 0;
    }
    get openEnd() {
      return (2 & this.open) > 0;
    }
    static addTree(t, e = [], i = !1) {
      let n = [new Oo(0, t.length, t, 0, !1, i)];
      for (let i of e) i.to > t.length && n.push(i);
      return n;
    }
    static applyChanges(t, e, i = 128) {
      if (!e.length) return t;
      let n = [],
        r = 1,
        s = t.length ? t[0] : null;
      for (let o = 0, a = 0, l = 0; ; o++) {
        let h = o < e.length ? e[o] : null,
          c = h ? h.fromA : 1e9;
        if (c - a >= i)
          for (; s && s.from < c; ) {
            let e = s;
            if (a >= e.from || c <= e.to || l) {
              let t = Math.max(e.from, a) - l,
                i = Math.min(e.to, c) - l;
              e =
                t >= i ? null : new Oo(t, i, e.tree, e.offset + l, o > 0, !!h);
            }
            if ((e && n.push(e), s.to > c)) break;
            s = r < t.length ? t[r++] : null;
          }
        if (!h) break;
        (a = h.toA), (l = h.toA - h.toB);
      }
      return n;
    }
  }
  class po {
    startParse(t, e, i) {
      return (
        'string' == typeof t && (t = new mo(t)),
        (i = i
          ? i.length
            ? i.map((t) => new Ys(t.from, t.to))
            : [new Ys(0, 0)]
          : [new Ys(0, t.length)]),
        this.createParse(t, e || [], i)
      );
    }
    parse(t, e, i) {
      let n = this.startParse(t, e, i);
      for (;;) {
        let t = n.advance();
        if (t) return t;
      }
    }
  }
  class mo {
    constructor(t) {
      this.string = t;
    }
    get length() {
      return this.string.length;
    }
    chunk(t) {
      return this.string.slice(t);
    }
    get lineChunks() {
      return !1;
    }
    read(t, e) {
      return this.string.slice(t, e);
    }
  }
  class go {
    constructor(t, e, i, n, r) {
      (this.parser = t),
        (this.parse = e),
        (this.overlay = i),
        (this.target = n),
        (this.ranges = r);
    }
  }
  class Qo {
    constructor(t, e, i, n, r, s, o) {
      (this.parser = t),
        (this.predicate = e),
        (this.mounts = i),
        (this.index = n),
        (this.start = r),
        (this.target = s),
        (this.prev = o),
        (this.depth = 0),
        (this.ranges = []);
    }
  }
  const bo = new Us({ perNode: !0 });
  class vo {
    constructor(t, e, i, n, r) {
      (this.nest = e),
        (this.input = i),
        (this.fragments = n),
        (this.ranges = r),
        (this.inner = []),
        (this.innerDone = 0),
        (this.baseTree = null),
        (this.stoppedAt = null),
        (this.baseParse = t);
    }
    advance() {
      if (this.baseParse) {
        let t = this.baseParse.advance();
        if (!t) return null;
        if (
          ((this.baseParse = null),
          (this.baseTree = t),
          this.startInner(),
          null != this.stoppedAt)
        )
          for (let t of this.inner) t.parse.stopAt(this.stoppedAt);
      }
      if (this.innerDone == this.inner.length) {
        let t = this.baseTree;
        return (
          null != this.stoppedAt &&
            (t = new Js(
              t.type,
              t.children,
              t.positions,
              t.length,
              t.propValues.concat([[bo, this.stoppedAt]])
            )),
          t
        );
      }
      let t = this.inner[this.innerDone],
        e = t.parse.advance();
      if (e) {
        this.innerDone++;
        let i = Object.assign(Object.create(null), t.target.props);
        (i[Us.mounted.id] = new Gs(e, t.overlay, t.parser)),
          (t.target.props = i);
      }
      return null;
    }
    get parsedPos() {
      if (this.baseParse) return 0;
      let t = this.input.length;
      for (let e = this.innerDone; e < this.inner.length; e++)
        this.inner[e].ranges[0].from < t &&
          (t = Math.min(t, this.inner[e].parse.parsedPos));
      return t;
    }
    stopAt(t) {
      if (((this.stoppedAt = t), this.baseParse)) this.baseParse.stopAt(t);
      else
        for (let e = this.innerDone; e < this.inner.length; e++)
          this.inner[e].parse.stopAt(t);
    }
    startInner() {
      let t = new So(this.fragments),
        e = null,
        i = null,
        n = new lo(new ro(this.baseTree, this.ranges[0].from, 0, null), 1);
      t: for (let r, s; null == this.stoppedAt || n.from < this.stoppedAt; ) {
        let o,
          a = !0;
        if (t.hasNode(n)) {
          if (e) {
            let t = e.mounts.find(
              (t) =>
                t.frag.from <= n.from && t.frag.to >= n.to && t.mount.overlay
            );
            if (t)
              for (let i of t.mount.overlay) {
                let r = i.from + t.pos,
                  s = i.to + t.pos;
                r >= n.from && s <= n.to && e.ranges.push({ from: r, to: s });
              }
          }
          a = !1;
        } else if (i && (s = yo(i.ranges, n.from, n.to))) a = 2 != s;
        else if (
          !n.type.isAnonymous &&
          n.from < n.to &&
          (r = this.nest(n, this.input))
        ) {
          n.tree || xo(n);
          let s = t.findMounts(n.from, r.parser);
          if ('function' == typeof r.overlay)
            e = new Qo(
              r.parser,
              r.overlay,
              s,
              this.inner.length,
              n.from,
              n.tree,
              e
            );
          else {
            let t = $o(this.ranges, r.overlay || [new Ys(n.from, n.to)]);
            t.length &&
              this.inner.push(
                new go(
                  r.parser,
                  r.parser.startParse(this.input, Po(s, t), t),
                  r.overlay
                    ? r.overlay.map(
                        (t) => new Ys(t.from - n.from, t.to - n.from)
                      )
                    : null,
                  n.tree,
                  t
                )
              ),
              r.overlay
                ? t.length && (i = { ranges: t, depth: 0, prev: i })
                : (a = !1);
          }
        } else
          e &&
            (o = e.predicate(n)) &&
            (!0 === o && (o = new Ys(n.from, n.to)),
            o.from < o.to && e.ranges.push(o));
        if (a && n.firstChild()) e && e.depth++, i && i.depth++;
        else
          for (; !n.nextSibling(); ) {
            if (!n.parent()) break t;
            if (e && !--e.depth) {
              let t = $o(this.ranges, e.ranges);
              t.length &&
                this.inner.splice(
                  e.index,
                  0,
                  new go(
                    e.parser,
                    e.parser.startParse(this.input, Po(e.mounts, t), t),
                    e.ranges.map(
                      (t) => new Ys(t.from - e.start, t.to - e.start)
                    ),
                    e.target,
                    t
                  )
                ),
                (e = e.prev);
            }
            i && !--i.depth && (i = i.prev);
          }
      }
    }
  }
  function yo(t, e, i) {
    for (let n of t) {
      if (n.from >= i) break;
      if (n.to > e) return n.from <= e && n.to >= i ? 2 : 1;
    }
    return 0;
  }
  function wo(t, e, i, n, r, s) {
    if (e < i) {
      let o = t.buffer[e + 1],
        a = t.buffer[i - 2];
      n.push(t.slice(e, i, o, a)), r.push(o - s);
    }
  }
  function xo(t) {
    let { node: e } = t,
      i = 0;
    do {
      t.parent(), i++;
    } while (!t.tree);
    let n = 0,
      r = t.tree,
      s = 0;
    for (
      ;
      (s = r.positions[n] + t.from),
        !(s <= e.from && s + r.children[n].length >= e.to);
      n++
    );
    let o = r.children[n],
      a = o.buffer;
    r.children[n] = (function t(i, n, r, l, h) {
      let c = i;
      for (; a[c + 2] + s <= e.from; ) c = a[c + 3];
      let u = [],
        d = [];
      wo(o, i, c, u, d, l);
      let f = a[c + 1],
        O = a[c + 2],
        p = f + s == e.from && O + s == e.to && a[c] == e.type.id;
      return (
        u.push(
          p ? e.toTree() : t(c + 4, a[c + 3], o.set.types[a[c]], f, O - f)
        ),
        d.push(f - l),
        wo(o, a[c + 3], n, u, d, l),
        new Js(r, u, d, h)
      );
    })(0, a.length, Ns.none, 0, o.length);
    for (let n = 0; n <= i; n++) t.childAfter(e.from);
  }
  class ko {
    constructor(t, e) {
      (this.offset = e), (this.done = !1), (this.cursor = t.fullCursor());
    }
    moveTo(t) {
      let { cursor: e } = this,
        i = t - this.offset;
      for (; !this.done && e.from < i; )
        (e.to >= t && e.enter(i, 1, !1, !1)) || e.next(!1) || (this.done = !0);
    }
    hasNode(t) {
      if (
        (this.moveTo(t.from),
        !this.done &&
          this.cursor.from + this.offset == t.from &&
          this.cursor.tree)
      )
        for (let e = this.cursor.tree; ; ) {
          if (e == t.tree) return !0;
          if (
            !(
              e.children.length &&
              0 == e.positions[0] &&
              e.children[0] instanceof Js
            )
          )
            break;
          e = e.children[0];
        }
      return !1;
    }
  }
  class So {
    constructor(t) {
      var e;
      if (
        ((this.fragments = t), (this.curTo = 0), (this.fragI = 0), t.length)
      ) {
        let i = (this.curFrag = t[0]);
        (this.curTo =
          null !== (e = i.tree.prop(bo)) && void 0 !== e ? e : i.to),
          (this.inner = new ko(i.tree, -i.offset));
      } else this.curFrag = this.inner = null;
    }
    hasNode(t) {
      for (; this.curFrag && t.from >= this.curTo; ) this.nextFrag();
      return (
        this.curFrag &&
        this.curFrag.from <= t.from &&
        this.curTo >= t.to &&
        this.inner.hasNode(t)
      );
    }
    nextFrag() {
      var t;
      if ((this.fragI++, this.fragI == this.fragments.length))
        this.curFrag = this.inner = null;
      else {
        let e = (this.curFrag = this.fragments[this.fragI]);
        (this.curTo =
          null !== (t = e.tree.prop(bo)) && void 0 !== t ? t : e.to),
          (this.inner = new ko(e.tree, -e.offset));
      }
    }
    findMounts(t, e) {
      var i;
      let n = [];
      if (this.inner) {
        this.inner.cursor.moveTo(t, 1);
        for (let t = this.inner.cursor.node; t; t = t.parent) {
          let r =
            null === (i = t.tree) || void 0 === i ? void 0 : i.prop(Us.mounted);
          if (r && r.parser == e)
            for (let e = this.fragI; e < this.fragments.length; e++) {
              let i = this.fragments[e];
              if (i.from >= t.to) break;
              i.tree == this.curFrag.tree &&
                n.push({ frag: i, pos: t.from - i.offset, mount: r });
            }
        }
      }
      return n;
    }
  }
  function $o(t, e) {
    let i = null,
      n = e;
    for (let r = 1, s = 0; r < t.length; r++) {
      let o = t[r - 1].to,
        a = t[r].from;
      for (; s < n.length; s++) {
        let t = n[s];
        if (t.from >= a) break;
        t.to <= o ||
          (i || (n = i = e.slice()),
          t.from < o
            ? ((i[s] = new Ys(t.from, o)),
              t.to > a && i.splice(s + 1, 0, new Ys(a, t.to)))
            : t.to > a
            ? (i[s--] = new Ys(a, t.to))
            : i.splice(s--, 1));
      }
    }
    return n;
  }
  function To(t, e, i, n) {
    let r = 0,
      s = 0,
      o = !1,
      a = !1,
      l = -1e9,
      h = [];
    for (;;) {
      let c = r == t.length ? 1e9 : o ? t[r].to : t[r].from,
        u = s == e.length ? 1e9 : a ? e[s].to : e[s].from;
      if (o != a) {
        let t = Math.max(l, i),
          e = Math.min(c, u, n);
        t < e && h.push(new Ys(t, e));
      }
      if (((l = Math.min(c, u)), 1e9 == l)) break;
      c == l && (o ? ((o = !1), r++) : (o = !0)),
        u == l && (a ? ((a = !1), s++) : (a = !0));
    }
    return h;
  }
  function Po(t, e) {
    let i = [];
    for (let { pos: n, mount: r, frag: s } of t) {
      let t = n + (r.overlay ? r.overlay[0].from : 0),
        o = t + r.tree.length,
        a = Math.max(s.from, t),
        l = Math.min(s.to, o);
      if (r.overlay) {
        let o = r.overlay.map((t) => new Ys(t.from + n, t.to + n)),
          h = To(e, o, a, l);
        for (let e = 0, n = a; ; e++) {
          let o = e == h.length,
            a = o ? l : h[e].from;
          if (
            (a > n && i.push(new Oo(n, a, r.tree, -t, s.from >= n, s.to <= a)),
            o)
          )
            break;
          n = h[e].to;
        }
      } else i.push(new Oo(a, l, r.tree, -t, s.from >= t, s.to <= o));
    }
    return i;
  }
  const Ro = new Us();
  class Wo {
    constructor(t, e, i, n = []) {
      (this.data = t),
        (this.topNode = i),
        $t.prototype.hasOwnProperty('tree') ||
          Object.defineProperty($t.prototype, 'tree', {
            get() {
              return Xo(this);
            },
          }),
        (this.parser = e),
        (this.extension = [
          qo.of(this),
          $t.languageData.of((t, e, i) => t.facet(Co(t, e, i))),
        ].concat(n));
    }
    isActiveAt(t, e, i = -1) {
      return Co(t, e, i) == this.data;
    }
    findRegions(t) {
      let e = t.facet(qo);
      if ((null == e ? void 0 : e.data) == this.data)
        return [{ from: 0, to: t.doc.length }];
      if (!e || !e.allowsNesting) return [];
      let i = [],
        n = (t, e) => {
          if (t.prop(Ro) == this.data)
            return void i.push({ from: e, to: e + t.length });
          let r = t.prop(Us.mounted);
          if (r) {
            if (r.tree.prop(Ro) == this.data) {
              if (r.overlay)
                for (let t of r.overlay)
                  i.push({ from: t.from + e, to: t.to + e });
              else i.push({ from: e, to: e + t.length });
              return;
            }
            if (r.overlay) {
              let t = i.length;
              if ((n(r.tree, r.overlay[0].from + e), i.length > t)) return;
            }
          }
          for (let i = 0; i < t.children.length; i++) {
            let r = t.children[i];
            r instanceof Js && n(r, t.positions[i] + e);
          }
        };
      return n(Xo(t), 0), i;
    }
    get allowsNesting() {
      return !0;
    }
  }
  function Co(t, e, i) {
    let n = t.facet(qo);
    if (!n) return null;
    let r = n.data;
    if (n.allowsNesting)
      for (let n = Xo(t).topNode; n; n = n.enter(e, i, !0, !1))
        r = n.type.prop(Ro) || r;
    return r;
  }
  Wo.setState = Ot.define();
  class Ao extends Wo {
    constructor(t, e) {
      super(t, e, e.topNode), (this.parser = e);
    }
    static define(t) {
      let e =
        ((i = t.languageData),
        D.define({ combine: i ? (t) => t.concat(i) : void 0 }));
      var i;
      return new Ao(
        e,
        t.parser.configure({ props: [Ro.add((t) => (t.isTop ? e : void 0))] })
      );
    }
    configure(t) {
      return new Ao(this.data, this.parser.configure(t));
    }
    get allowsNesting() {
      return this.parser.wrappers.length > 0;
    }
  }
  function Xo(t) {
    let e = t.field(Wo.state, !1);
    return e ? e.tree : Js.empty;
  }
  class Zo {
    constructor(t, e = t.length) {
      (this.doc = t),
        (this.length = e),
        (this.cursorPos = 0),
        (this.string = ''),
        (this.cursor = t.iter());
    }
    syncTo(t) {
      return (
        (this.string = this.cursor.next(t - this.cursorPos).value),
        (this.cursorPos = t + this.string.length),
        this.cursorPos - this.string.length
      );
    }
    chunk(t) {
      return this.syncTo(t), this.string;
    }
    get lineChunks() {
      return !0;
    }
    read(t, e) {
      let i = this.cursorPos - this.string.length;
      return t < i || e >= this.cursorPos
        ? this.doc.sliceString(t, e)
        : this.string.slice(t - i, e - i);
    }
  }
  let Mo = null;
  class _o {
    constructor(t, e, i = [], n, r, s, o, a) {
      (this.parser = t),
        (this.state = e),
        (this.fragments = i),
        (this.tree = n),
        (this.treeLen = r),
        (this.viewport = s),
        (this.skipped = o),
        (this.scheduleOn = a),
        (this.parse = null),
        (this.tempSkipped = []);
    }
    startParse() {
      return this.parser.startParse(new Zo(this.state.doc), this.fragments);
    }
    work(t, e) {
      return (
        null != e && e >= this.state.doc.length && (e = void 0),
        this.tree != Js.empty &&
        this.isDone(null != e ? e : this.state.doc.length)
          ? (this.takeTree(), !0)
          : this.withContext(() => {
              var i;
              let n = Date.now() + t;
              for (
                this.parse || (this.parse = this.startParse()),
                  null != e &&
                    (null == this.parse.stoppedAt ||
                      this.parse.stoppedAt > e) &&
                    e < this.state.doc.length &&
                    this.parse.stopAt(e);
                ;

              ) {
                let t = this.parse.advance();
                if (t) {
                  if (
                    ((this.fragments = this.withoutTempSkipped(
                      Oo.addTree(
                        t,
                        this.fragments,
                        null != this.parse.stoppedAt
                      )
                    )),
                    (this.treeLen =
                      null !== (i = this.parse.stoppedAt) && void 0 !== i
                        ? i
                        : this.state.doc.length),
                    (this.tree = t),
                    (this.parse = null),
                    !(this.treeLen < (null != e ? e : this.state.doc.length)))
                  )
                    return !0;
                  this.parse = this.startParse();
                }
                if (Date.now() > n) return !1;
              }
            })
      );
    }
    takeTree() {
      let t, e;
      this.parse &&
        (t = this.parse.parsedPos) >= this.treeLen &&
        ((null == this.parse.stoppedAt || this.parse.stoppedAt > t) &&
          this.parse.stopAt(t),
        this.withContext(() => {
          for (; !(e = this.parse.advance()); );
        }),
        (this.treeLen = t),
        (this.tree = e),
        (this.fragments = this.withoutTempSkipped(
          Oo.addTree(this.tree, this.fragments, !0)
        )),
        (this.parse = null));
    }
    withContext(t) {
      let e = Mo;
      Mo = this;
      try {
        return t();
      } finally {
        Mo = e;
      }
    }
    withoutTempSkipped(t) {
      for (let e; (e = this.tempSkipped.pop()); ) t = Lo(t, e.from, e.to);
      return t;
    }
    changes(t, e) {
      let { fragments: i, tree: n, treeLen: r, viewport: s, skipped: o } = this;
      if ((this.takeTree(), !t.empty)) {
        let e = [];
        if (
          (t.iterChangedRanges((t, i, n, r) =>
            e.push({ fromA: t, toA: i, fromB: n, toB: r })
          ),
          (i = Oo.applyChanges(i, e)),
          (n = Js.empty),
          (r = 0),
          (s = { from: t.mapPos(s.from, -1), to: t.mapPos(s.to, 1) }),
          this.skipped.length)
        ) {
          o = [];
          for (let e of this.skipped) {
            let i = t.mapPos(e.from, 1),
              n = t.mapPos(e.to, -1);
            i < n && o.push({ from: i, to: n });
          }
        }
      }
      return new _o(this.parser, e, i, n, r, s, o, this.scheduleOn);
    }
    updateViewport(t) {
      if (this.viewport.from == t.from && this.viewport.to == t.to) return !1;
      this.viewport = t;
      let e = this.skipped.length;
      for (let e = 0; e < this.skipped.length; e++) {
        let { from: i, to: n } = this.skipped[e];
        i < t.to &&
          n > t.from &&
          ((this.fragments = Lo(this.fragments, i, n)),
          this.skipped.splice(e--, 1));
      }
      return !(this.skipped.length >= e) && (this.reset(), !0);
    }
    reset() {
      this.parse && (this.takeTree(), (this.parse = null));
    }
    skipUntilInView(t, e) {
      this.skipped.push({ from: t, to: e });
    }
    static getSkippingParser(t) {
      return new (class extends po {
        createParse(e, i, n) {
          let r = n[0].from,
            s = n[n.length - 1].to,
            o = {
              parsedPos: r,
              advance() {
                let e = Mo;
                if (e) {
                  for (let t of n) e.tempSkipped.push(t);
                  t &&
                    (e.scheduleOn = e.scheduleOn
                      ? Promise.all([e.scheduleOn, t])
                      : t);
                }
                return (this.parsedPos = s), new Js(Ns.none, [], [], s - r);
              },
              stoppedAt: null,
              stopAt() {},
            };
          return o;
        }
      })();
    }
    isDone(t) {
      t = Math.min(t, this.state.doc.length);
      let e = this.fragments;
      return this.treeLen >= t && e.length && 0 == e[0].from && e[0].to >= t;
    }
    static get() {
      return Mo;
    }
  }
  function Lo(t, e, i) {
    return Oo.applyChanges(t, [{ fromA: e, toA: i, fromB: e, toB: i }]);
  }
  class Do {
    constructor(t) {
      (this.context = t), (this.tree = t.tree);
    }
    apply(t) {
      if (!t.docChanged) return this;
      let e = this.context.changes(t.changes, t.state),
        i =
          this.context.treeLen == t.startState.doc.length
            ? void 0
            : Math.max(t.changes.mapPos(this.context.treeLen), e.viewport.to);
      return e.work(20, i) || e.takeTree(), new Do(e);
    }
    static init(t) {
      let e = Math.min(3e3, t.doc.length),
        i = new _o(
          t.facet(qo).parser,
          t,
          [],
          Js.empty,
          0,
          { from: 0, to: e },
          [],
          null
        );
      return i.work(20, e) || i.takeTree(), new Do(i);
    }
  }
  Wo.state = Y.define({
    create: Do.init,
    update(t, e) {
      for (let t of e.effects) if (t.is(Wo.setState)) return t.value;
      return e.startState.facet(qo) != e.state.facet(qo)
        ? Do.init(e.state)
        : t.apply(e);
    },
  });
  let Eo = (t) => {
    let e = setTimeout(() => t(), 500);
    return () => clearTimeout(e);
  };
  'undefined' != typeof requestIdleCallback &&
    (Eo = (t) => {
      let e = -1,
        i = setTimeout(() => {
          e = requestIdleCallback(t, { timeout: 400 });
        }, 100);
      return () => (e < 0 ? clearTimeout(i) : cancelIdleCallback(e));
    });
  const zo = Ci.fromClass(
      class {
        constructor(t) {
          (this.view = t),
            (this.working = null),
            (this.workScheduled = 0),
            (this.chunkEnd = -1),
            (this.chunkBudget = -1),
            (this.work = this.work.bind(this)),
            this.scheduleWork();
        }
        update(t) {
          let e = this.view.state.field(Wo.state).context;
          (e.updateViewport(t.view.viewport) ||
            this.view.viewport.to > e.treeLen) &&
            this.scheduleWork(),
            t.docChanged &&
              (this.view.hasFocus && (this.chunkBudget += 50),
              this.scheduleWork()),
            this.checkAsyncSchedule(e);
        }
        scheduleWork() {
          if (this.working) return;
          let { state: t } = this.view,
            e = t.field(Wo.state);
          (e.tree == e.context.tree && e.context.isDone(t.doc.length)) ||
            (this.working = Eo(this.work));
        }
        work(t) {
          this.working = null;
          let e = Date.now();
          if (
            (this.chunkEnd < e &&
              (this.chunkEnd < 0 || this.view.hasFocus) &&
              ((this.chunkEnd = e + 3e4), (this.chunkBudget = 3e3)),
            this.chunkBudget <= 0)
          )
            return;
          let {
              state: i,
              viewport: { to: n },
            } = this.view,
            r = i.field(Wo.state);
          if (r.tree == r.context.tree && r.context.isDone(n + 1e5)) return;
          let s = Math.min(
              this.chunkBudget,
              100,
              t ? Math.max(25, t.timeRemaining() - 5) : 1e9
            ),
            o = r.context.treeLen < n && i.doc.length > n + 1e3,
            a = r.context.work(s, n + (o ? 0 : 1e5));
          (this.chunkBudget -= Date.now() - e),
            (a || this.chunkBudget <= 0) &&
              (r.context.takeTree(),
              this.view.dispatch({
                effects: Wo.setState.of(new Do(r.context)),
              })),
            this.chunkBudget > 0 && (!a || o) && this.scheduleWork(),
            this.checkAsyncSchedule(r.context);
        }
        checkAsyncSchedule(t) {
          t.scheduleOn &&
            (this.workScheduled++,
            t.scheduleOn
              .then(() => this.scheduleWork())
              .catch((t) => Si(this.view.state, t))
              .then(() => this.workScheduled--),
            (t.scheduleOn = null));
        }
        destroy() {
          this.working && this.working();
        }
        isWorking() {
          return this.working || this.workScheduled > 0;
        }
      },
      {
        eventHandlers: {
          focus() {
            this.scheduleWork();
          },
        },
      }
    ),
    qo = D.define({
      combine: (t) => (t.length ? t[0] : null),
      enables: [Wo.state, zo],
    });
  class jo {
    constructor(t, e = []) {
      (this.language = t), (this.support = e), (this.extension = [t, e]);
    }
  }
  const Vo = D.define(),
    Yo = D.define({
      combine: (t) => {
        if (!t.length) return '  ';
        if (!/^(?: +|\t+)$/.test(t[0]))
          throw new Error('Invalid indent unit: ' + JSON.stringify(t[0]));
        return t[0];
      },
    });
  function Uo(t) {
    let e = t.facet(Yo);
    return 9 == e.charCodeAt(0) ? t.tabSize * e.length : e.length;
  }
  function Go(t, e) {
    let i = '',
      n = t.tabSize;
    if (9 == t.facet(Yo).charCodeAt(0)) for (; e >= n; ) (i += '\t'), (e -= n);
    for (let t = 0; t < e; t++) i += ' ';
    return i;
  }
  function Io(t, e) {
    t instanceof $t && (t = new No(t));
    for (let i of t.state.facet(Vo)) {
      let n = i(t, e);
      if (null != n) return n;
    }
    let i = Xo(t.state);
    return i
      ? (function (t, e, i) {
          return Ho(e.resolveInner(i).enterUnfinishedNodesBefore(i), i, t);
        })(t, i, e)
      : null;
  }
  class No {
    constructor(t, e = {}) {
      (this.state = t), (this.options = e), (this.unit = Uo(t));
    }
    lineAt(t, e = 1) {
      let i = this.state.doc.lineAt(t),
        { simulateBreak: n } = this.options;
      return null != n && n >= i.from && n <= i.to
        ? (e < 0 ? n < t : n <= t)
          ? { text: i.text.slice(n - i.from), from: n }
          : { text: i.text.slice(0, n - i.from), from: i.from }
        : i;
    }
    textAfterPos(t, e = 1) {
      if (this.options.simulateDoubleBreak && t == this.options.simulateBreak)
        return '';
      let { text: i, from: n } = this.lineAt(t, e);
      return i.slice(t - n, Math.min(i.length, t + 100 - n));
    }
    column(t, e = 1) {
      let { text: i, from: n } = this.lineAt(t, e),
        r = this.countColumn(i, t - n),
        s = this.options.overrideIndentation
          ? this.options.overrideIndentation(n)
          : -1;
      return s > -1 && (r += s - this.countColumn(i, i.search(/\S|$/))), r;
    }
    countColumn(t, e = t.length) {
      return d(t, this.state.tabSize, e);
    }
    lineIndent(t, e = 1) {
      let { text: i, from: n } = this.lineAt(t, e),
        r = this.options.overrideIndentation;
      if (r) {
        let t = r(n);
        if (t > -1) return t;
      }
      return this.countColumn(i, i.search(/\S|$/));
    }
    get simulatedBreak() {
      return this.options.simulateBreak || null;
    }
  }
  const Bo = new Us();
  function Fo(t) {
    let e = t.type.prop(Bo);
    if (e) return e;
    let i,
      n = t.firstChild;
    if (n && (i = n.type.prop(Us.closedBy))) {
      let e = t.lastChild,
        n = e && i.indexOf(e.name) > -1;
      return (t) =>
        ia(
          t,
          !0,
          1,
          void 0,
          n &&
            !(function (t) {
              return (
                t.pos == t.options.simulateBreak &&
                t.options.simulateDoubleBreak
              );
            })(t)
            ? e.from
            : void 0
        );
    }
    return null == t.parent ? Jo : null;
  }
  function Ho(t, e, i) {
    for (; t; t = t.parent) {
      let n = Fo(t);
      if (n) return n(new Ko(i, e, t));
    }
    return null;
  }
  function Jo() {
    return 0;
  }
  class Ko extends No {
    constructor(t, e, i) {
      super(t.state, t.options),
        (this.base = t),
        (this.pos = e),
        (this.node = i);
    }
    get textAfter() {
      return this.textAfterPos(this.pos);
    }
    get baseIndent() {
      let t = this.state.doc.lineAt(this.node.from);
      for (;;) {
        let e = this.node.resolve(t.from);
        for (; e.parent && e.parent.from == e.from; ) e = e.parent;
        if (ta(e, this.node)) break;
        t = this.state.doc.lineAt(e.from);
      }
      return this.lineIndent(t.from);
    }
    continue() {
      let t = this.node.parent;
      return t ? Ho(t, this.pos, this.base) : 0;
    }
  }
  function ta(t, e) {
    for (let i = e; i; i = i.parent) if (t == i) return !0;
    return !1;
  }
  function ea({ closing: t, align: e = !0, units: i = 1 }) {
    return (n) => ia(n, e, i, t);
  }
  function ia(t, e, i, n, r) {
    let s = t.textAfter,
      o = s.match(/^\s*/)[0].length,
      a = (n && s.slice(o, o + n.length) == n) || r == t.pos + o,
      l = e
        ? (function (t) {
            let e = t.node,
              i = e.childAfter(e.from),
              n = e.lastChild;
            if (!i) return null;
            let r = t.options.simulateBreak,
              s = t.state.doc.lineAt(i.from),
              o = null == r || r <= s.from ? s.to : Math.min(s.to, r);
            for (let t = i.to; ; ) {
              let r = e.childAfter(t);
              if (!r || r == n) return null;
              if (!r.type.isSkipped) return r.from < o ? i : null;
              t = r.to;
            }
          })(t)
        : null;
    return l
      ? a
        ? t.column(l.from)
        : t.column(l.to)
      : t.baseIndent + (a ? 0 : t.unit * i);
  }
  function na({ except: t, units: e = 1 } = {}) {
    return (i) => {
      let n = t && t.test(i.textAfter);
      return i.baseIndent + (n ? 0 : e * i.unit);
    };
  }
  function ra() {
    return $t.transactionFilter.of((t) => {
      if (!t.docChanged || !t.isUserEvent('input.type')) return t;
      let e = t.startState.languageDataAt(
        'indentOnInput',
        t.startState.selection.main.head
      );
      if (!e.length) return t;
      let i = t.newDoc,
        { head: n } = t.newSelection.main,
        r = i.lineAt(n);
      if (n > r.from + 200) return t;
      let s = i.sliceString(r.from, n);
      if (!e.some((t) => t.test(s))) return t;
      let { state: o } = t,
        a = -1,
        l = [];
      for (let { head: t } of o.selection.ranges) {
        let e = o.doc.lineAt(t);
        if (e.from == a) continue;
        a = e.from;
        let i = Io(o, e.from);
        if (null == i) continue;
        let n = /^\s*/.exec(e.text)[0],
          r = Go(o, i);
        n != r && l.push({ from: e.from, to: e.from + n.length, insert: r });
      }
      return l.length ? [t, { changes: l, sequential: !0 }] : t;
    });
  }
  const sa = D.define(),
    oa = new Us();
  function aa(t) {
    let e = t.firstChild,
      i = t.lastChild;
    return e && e.to < i.from
      ? { from: e.to, to: i.type.isError ? t.to : i.from }
      : null;
  }
  function la(t, e, i) {
    for (let n of t.facet(sa)) {
      let r = n(t, e, i);
      if (r) return r;
    }
    return (function (t, e, i) {
      let n = Xo(t);
      if (0 == n.length) return null;
      let r = null;
      for (let s = n.resolveInner(i); s; s = s.parent) {
        if (s.to <= i || s.from > i) continue;
        if (r && s.from < e) break;
        let n = s.type.prop(oa);
        if (n) {
          let o = n(s, t);
          o && o.from <= i && o.from >= e && o.to > i && (r = o);
        }
      }
      return r;
    })(t, e, i);
  }
  class ha extends Zt {
    compare(t) {
      return this == t || (this.constructor == t.constructor && this.eq(t));
    }
    eq(t) {
      return !1;
    }
    destroy(t) {}
  }
  (ha.prototype.elementClass = ''),
    (ha.prototype.toDOM = void 0),
    (ha.prototype.mapMode = k.TrackBefore),
    (ha.prototype.startSide = ha.prototype.endSide = -1),
    (ha.prototype.point = !0);
  const ca = D.define(),
    ua = {
      class: '',
      renderEmptyElements: !1,
      elementStyle: '',
      markers: () => Dt.empty,
      lineMarker: () => null,
      lineMarkerChange: null,
      initialSpacer: null,
      updateSpacer: null,
      domEventHandlers: {},
    },
    da = D.define();
  function fa(t) {
    return [ma(), da.of(Object.assign(Object.assign({}, ua), t))];
  }
  const Oa = Rr.baseTheme({
      '.cm-gutters': {
        display: 'flex',
        height: '100%',
        boxSizing: 'border-box',
        left: 0,
        zIndex: 200,
      },
      '&light .cm-gutters': {
        backgroundColor: '#f5f5f5',
        color: '#999',
        borderRight: '1px solid #ddd',
      },
      '&dark .cm-gutters': { backgroundColor: '#333338', color: '#ccc' },
      '.cm-gutter': {
        display: 'flex !important',
        flexDirection: 'column',
        flexShrink: 0,
        boxSizing: 'border-box',
        minHeight: '100%',
        overflow: 'hidden',
      },
      '.cm-gutterElement': { boxSizing: 'border-box' },
      '.cm-lineNumbers .cm-gutterElement': {
        padding: '0 3px 0 5px',
        minWidth: '20px',
        textAlign: 'right',
        whiteSpace: 'nowrap',
      },
      '&light .cm-activeLineGutter': { backgroundColor: '#e2f2ff' },
      '&dark .cm-activeLineGutter': { backgroundColor: '#222227' },
    }),
    pa = D.define({ combine: (t) => t.some((t) => t) });
  function ma(t) {
    let e = [ga, Oa];
    return t && !1 === t.fixed && e.push(pa.of(!0)), e;
  }
  const ga = Ci.fromClass(
    class {
      constructor(t) {
        (this.view = t),
          (this.prevViewport = t.viewport),
          (this.dom = document.createElement('div')),
          (this.dom.className = 'cm-gutters'),
          this.dom.setAttribute('aria-hidden', 'true'),
          (this.dom.style.minHeight = this.view.contentHeight + 'px'),
          (this.gutters = t.state.facet(da).map((e) => new ya(t, e)));
        for (let t of this.gutters) this.dom.appendChild(t.dom);
        (this.fixed = !t.state.facet(pa)),
          this.fixed && (this.dom.style.position = 'sticky'),
          this.syncGutters(!1),
          t.scrollDOM.insertBefore(this.dom, t.contentDOM);
      }
      update(t) {
        if (this.updateGutters(t)) {
          let e = this.prevViewport,
            i = t.view.viewport,
            n = Math.min(e.to, i.to) - Math.max(e.from, i.from);
          this.syncGutters(n < 0.8 * (i.to - i.from));
        }
        t.geometryChanged &&
          (this.dom.style.minHeight = this.view.contentHeight + 'px'),
          this.view.state.facet(pa) != !this.fixed &&
            ((this.fixed = !this.fixed),
            (this.dom.style.position = this.fixed ? 'sticky' : '')),
          (this.prevViewport = t.view.viewport);
      }
      syncGutters(t) {
        let e = this.dom.nextSibling;
        t && this.dom.remove();
        let i = Dt.iter(this.view.state.facet(ca), this.view.viewport.from),
          n = [],
          r = this.gutters.map(
            (t) => new va(t, this.view.viewport, -this.view.documentPadding.top)
          );
        for (let t of this.view.viewportLineBlocks) {
          let e;
          if (Array.isArray(t.type)) {
            for (let i of t.type)
              if (i.type == ii.Text) {
                e = i;
                break;
              }
          } else e = t.type == ii.Text ? t : void 0;
          if (e) {
            n.length && (n = []), ba(i, n, t.from);
            for (let t of r) t.line(this.view, e, n);
          }
        }
        for (let t of r) t.finish();
        t && this.view.scrollDOM.insertBefore(this.dom, e);
      }
      updateGutters(t) {
        let e = t.startState.facet(da),
          i = t.state.facet(da),
          n =
            t.docChanged ||
            t.heightChanged ||
            t.viewportChanged ||
            !Dt.eq(
              t.startState.facet(ca),
              t.state.facet(ca),
              t.view.viewport.from,
              t.view.viewport.to
            );
        if (e == i) for (let e of this.gutters) e.update(t) && (n = !0);
        else {
          n = !0;
          let r = [];
          for (let n of i) {
            let i = e.indexOf(n);
            i < 0
              ? r.push(new ya(this.view, n))
              : (this.gutters[i].update(t), r.push(this.gutters[i]));
          }
          for (let t of this.gutters)
            t.dom.remove(), r.indexOf(t) < 0 && t.destroy();
          for (let t of r) this.dom.appendChild(t.dom);
          this.gutters = r;
        }
        return n;
      }
      destroy() {
        for (let t of this.gutters) t.destroy();
        this.dom.remove();
      }
    },
    {
      provide: Pi.scrollMargins.from((t) =>
        0 != t.gutters.length && t.fixed
          ? t.view.textDirection == zi.LTR
            ? { left: t.dom.offsetWidth }
            : { right: t.dom.offsetWidth }
          : null
      ),
    }
  );
  function Qa(t) {
    return Array.isArray(t) ? t : [t];
  }
  function ba(t, e, i) {
    for (; t.value && t.from <= i; ) t.from == i && e.push(t.value), t.next();
  }
  class va {
    constructor(t, e, i) {
      (this.gutter = t),
        (this.height = i),
        (this.localMarkers = []),
        (this.i = 0),
        (this.cursor = Dt.iter(t.markers, e.from));
    }
    line(t, e, i) {
      this.localMarkers.length && (this.localMarkers = []),
        ba(this.cursor, this.localMarkers, e.from);
      let n = i.length ? this.localMarkers.concat(i) : this.localMarkers,
        r = this.gutter.config.lineMarker(t, e, n);
      r && n.unshift(r);
      let s = this.gutter;
      if (0 == n.length && !s.config.renderEmptyElements) return;
      let o = e.top - this.height;
      if (this.i == s.elements.length) {
        let i = new wa(t, e.height, o, n);
        s.elements.push(i), s.dom.appendChild(i.dom);
      } else s.elements[this.i].update(t, e.height, o, n);
      (this.height = e.bottom), this.i++;
    }
    finish() {
      let t = this.gutter;
      for (; t.elements.length > this.i; ) {
        let e = t.elements.pop();
        t.dom.removeChild(e.dom), e.destroy();
      }
    }
  }
  class ya {
    constructor(t, e) {
      (this.view = t),
        (this.config = e),
        (this.elements = []),
        (this.spacer = null),
        (this.dom = document.createElement('div')),
        (this.dom.className =
          'cm-gutter' + (this.config.class ? ' ' + this.config.class : ''));
      for (let i in e.domEventHandlers)
        this.dom.addEventListener(i, (n) => {
          let r = t.lineBlockAtHeight(n.clientY - t.documentTop);
          e.domEventHandlers[i](t, r, n) && n.preventDefault();
        });
      (this.markers = Qa(e.markers(t))),
        e.initialSpacer &&
          ((this.spacer = new wa(t, 0, 0, [e.initialSpacer(t)])),
          this.dom.appendChild(this.spacer.dom),
          (this.spacer.dom.style.cssText +=
            'visibility: hidden; pointer-events: none'));
    }
    update(t) {
      let e = this.markers;
      if (
        ((this.markers = Qa(this.config.markers(t.view))),
        this.spacer && this.config.updateSpacer)
      ) {
        let e = this.config.updateSpacer(this.spacer.markers[0], t);
        e != this.spacer.markers[0] && this.spacer.update(t.view, 0, 0, [e]);
      }
      let i = t.view.viewport;
      return (
        !Dt.eq(this.markers, e, i.from, i.to) ||
        (!!this.config.lineMarkerChange && this.config.lineMarkerChange(t))
      );
    }
    destroy() {
      for (let t of this.elements) t.destroy();
    }
  }
  class wa {
    constructor(t, e, i, n) {
      (this.height = -1),
        (this.above = 0),
        (this.markers = []),
        (this.dom = document.createElement('div')),
        this.update(t, e, i, n);
    }
    update(t, e, i, n) {
      this.height != e && (this.dom.style.height = (this.height = e) + 'px'),
        this.above != i &&
          (this.dom.style.marginTop = (this.above = i) ? i + 'px' : ''),
        (function (t, e) {
          if (t.length != e.length) return !1;
          for (let i = 0; i < t.length; i++) if (!t[i].compare(e[i])) return !1;
          return !0;
        })(this.markers, n) || this.setMarkers(t, n);
    }
    setMarkers(t, e) {
      let i = 'cm-gutterElement',
        n = this.dom.firstChild;
      for (let r = 0, s = 0; ; ) {
        let o = s,
          a = r < e.length ? e[r++] : null,
          l = !1;
        if (a) {
          let t = a.elementClass;
          t && (i += ' ' + t);
          for (let t = s; t < this.markers.length; t++)
            if (this.markers[t].compare(a)) {
              (o = t), (l = !0);
              break;
            }
        } else o = this.markers.length;
        for (; s < o; ) {
          let t = this.markers[s++];
          if (t.toDOM) {
            t.destroy(n);
            let e = n.nextSibling;
            n.remove(), (n = e);
          }
        }
        if (!a) break;
        a.toDOM &&
          (l ? (n = n.nextSibling) : this.dom.insertBefore(a.toDOM(t), n)),
          l && s++;
      }
      (this.dom.className = i), (this.markers = e);
    }
    destroy() {
      this.setMarkers(null, []);
    }
  }
  const xa = D.define(),
    ka = D.define({
      combine: (t) =>
        Tt(
          t,
          { formatNumber: String, domEventHandlers: {} },
          {
            domEventHandlers(t, e) {
              let i = Object.assign({}, t);
              for (let t in e) {
                let n = i[t],
                  r = e[t];
                i[t] = n ? (t, e, i) => n(t, e, i) || r(t, e, i) : r;
              }
              return i;
            },
          }
        ),
    });
  class Sa extends ha {
    constructor(t) {
      super(), (this.number = t);
    }
    eq(t) {
      return this.number == t.number;
    }
    toDOM() {
      return document.createTextNode(this.number);
    }
  }
  function $a(t, e) {
    return t.state.facet(ka).formatNumber(e, t.state);
  }
  const Ta = da.compute([ka], (t) => ({
    class: 'cm-lineNumbers',
    renderEmptyElements: !1,
    markers: (t) => t.state.facet(xa),
    lineMarker: (t, e, i) =>
      i.some((t) => t.toDOM)
        ? null
        : new Sa($a(t, t.state.doc.lineAt(e.from).number)),
    lineMarkerChange: (t) => t.startState.facet(ka) != t.state.facet(ka),
    initialSpacer: (t) => new Sa($a(t, Ra(t.state.doc.lines))),
    updateSpacer(t, e) {
      let i = $a(e.view, Ra(e.view.state.doc.lines));
      return i == t.number ? t : new Sa(i);
    },
    domEventHandlers: t.facet(ka).domEventHandlers,
  }));
  function Pa(t = {}) {
    return [ka.of(t), ma(), Ta];
  }
  function Ra(t) {
    let e = 9;
    for (; e < t; ) e = 10 * e + 9;
    return e;
  }
  const Wa = new (class extends ha {
      constructor() {
        super(...arguments), (this.elementClass = 'cm-activeLineGutter');
      }
    })(),
    Ca = ca.compute(['selection'], (t) => {
      let e = [],
        i = -1;
      for (let n of t.selection.ranges)
        if (n.empty) {
          let r = t.doc.lineAt(n.head).from;
          r > i && ((i = r), e.push(Wa.range(r)));
        }
      return Dt.of(e);
    });
  function Aa() {
    return Ca;
  }
  function Xa(t, e) {
    let i = e.mapPos(t.from, 1),
      n = e.mapPos(t.to, -1);
    return i >= n ? void 0 : { from: i, to: n };
  }
  const Za = Ot.define({ map: Xa }),
    Ma = Ot.define({ map: Xa });
  function _a(t) {
    let e = [];
    for (let { head: i } of t.state.selection.ranges)
      e.some((t) => t.from <= i && t.to >= i) || e.push(t.lineBlockAt(i));
    return e;
  }
  const La = Y.define({
    create: () => ni.none,
    update(t, e) {
      t = t.map(e.changes);
      for (let i of e.effects)
        i.is(Za) && !Ea(t, i.value.from, i.value.to)
          ? (t = t.update({ add: [Ga.range(i.value.from, i.value.to)] }))
          : i.is(Ma) &&
            (t = t.update({
              filter: (t, e) => i.value.from != t || i.value.to != e,
              filterFrom: i.value.from,
              filterTo: i.value.to,
            }));
      if (e.selection) {
        let i = !1,
          { head: n } = e.selection.main;
        t.between(n, n, (t, e) => {
          t < n && e > n && (i = !0);
        }),
          i &&
            (t = t.update({
              filterFrom: n,
              filterTo: n,
              filter: (t, e) => e <= n || t >= n,
            }));
      }
      return t;
    },
    provide: (t) => Rr.decorations.from(t),
  });
  function Da(t, e, i) {
    var n;
    let r = null;
    return (
      null === (n = t.field(La, !1)) ||
        void 0 === n ||
        n.between(e, i, (t, e) => {
          (!r || r.from > t) && (r = { from: t, to: e });
        }),
      r
    );
  }
  function Ea(t, e, i) {
    let n = !1;
    return (
      t.between(e, e, (t, r) => {
        t == e && r == i && (n = !0);
      }),
      n
    );
  }
  function za(t, e) {
    return t.field(La, !1) ? e : e.concat(Ot.appendConfig.of(Ua()));
  }
  function qa(t, e, i = !0) {
    let n = t.state.doc.lineAt(e.from).number,
      r = t.state.doc.lineAt(e.to).number;
    return Rr.announce.of(
      `${t.state.phrase(
        i ? 'Folded lines' : 'Unfolded lines'
      )} ${n} ${t.state.phrase('to')} ${r}.`
    );
  }
  const ja = [
      {
        key: 'Ctrl-Shift-[',
        mac: 'Cmd-Alt-[',
        run: (t) => {
          for (let e of _a(t)) {
            let i = la(t.state, e.from, e.to);
            if (i)
              return (
                t.dispatch({ effects: za(t.state, [Za.of(i), qa(t, i)]) }), !0
              );
          }
          return !1;
        },
      },
      {
        key: 'Ctrl-Shift-]',
        mac: 'Cmd-Alt-]',
        run: (t) => {
          if (!t.state.field(La, !1)) return !1;
          let e = [];
          for (let i of _a(t)) {
            let n = Da(t.state, i.from, i.to);
            n && e.push(Ma.of(n), qa(t, n, !1));
          }
          return e.length && t.dispatch({ effects: e }), e.length > 0;
        },
      },
      {
        key: 'Ctrl-Alt-[',
        run: (t) => {
          let { state: e } = t,
            i = [];
          for (let n = 0; n < e.doc.length; ) {
            let r = t.lineBlockAt(n),
              s = la(e, r.from, r.to);
            s && i.push(Za.of(s)), (n = (s ? t.lineBlockAt(s.to) : r).to + 1);
          }
          return (
            i.length && t.dispatch({ effects: za(t.state, i) }), !!i.length
          );
        },
      },
      {
        key: 'Ctrl-Alt-]',
        run: (t) => {
          let e = t.state.field(La, !1);
          if (!e || !e.size) return !1;
          let i = [];
          return (
            e.between(0, t.state.doc.length, (t, e) => {
              i.push(Ma.of({ from: t, to: e }));
            }),
            t.dispatch({ effects: i }),
            !0
          );
        },
      },
    ],
    Va = { placeholderDOM: null, placeholderText: '…' },
    Ya = D.define({ combine: (t) => Tt(t, Va) });
  function Ua(t) {
    let e = [La, Fa];
    return t && e.push(Ya.of(t)), e;
  }
  const Ga = ni.replace({
      widget: new (class extends ei {
        toDOM(t) {
          let { state: e } = t,
            i = e.facet(Ya),
            n = (e) => {
              let i = t.lineBlockAt(t.posAtDOM(e.target)),
                n = Da(t.state, i.from, i.to);
              n && t.dispatch({ effects: Ma.of(n) }), e.preventDefault();
            };
          if (i.placeholderDOM) return i.placeholderDOM(t, n);
          let r = document.createElement('span');
          return (
            (r.textContent = i.placeholderText),
            r.setAttribute('aria-label', e.phrase('folded code')),
            (r.title = e.phrase('unfold')),
            (r.className = 'cm-foldPlaceholder'),
            (r.onclick = n),
            r
          );
        }
      })(),
    }),
    Ia = {
      openText: '⌄',
      closedText: '›',
      markerDOM: null,
      domEventHandlers: {},
    };
  class Na extends ha {
    constructor(t, e) {
      super(), (this.config = t), (this.open = e);
    }
    eq(t) {
      return this.config == t.config && this.open == t.open;
    }
    toDOM(t) {
      if (this.config.markerDOM) return this.config.markerDOM(this.open);
      let e = document.createElement('span');
      return (
        (e.textContent = this.open
          ? this.config.openText
          : this.config.closedText),
        (e.title = t.state.phrase(this.open ? 'Fold line' : 'Unfold line')),
        e
      );
    }
  }
  function Ba(t = {}) {
    let e = Object.assign(Object.assign({}, Ia), t),
      i = new Na(e, !0),
      n = new Na(e, !1),
      r = Ci.fromClass(
        class {
          constructor(t) {
            (this.from = t.viewport.from),
              (this.markers = this.buildMarkers(t));
          }
          update(t) {
            (t.docChanged ||
              t.viewportChanged ||
              t.startState.facet(qo) != t.state.facet(qo) ||
              t.startState.field(La, !1) != t.state.field(La, !1)) &&
              (this.markers = this.buildMarkers(t.view));
          }
          buildMarkers(t) {
            let e = new Et();
            for (let r of t.viewportLineBlocks) {
              let s = Da(t.state, r.from, r.to)
                ? n
                : la(t.state, r.from, r.to)
                ? i
                : null;
              s && e.add(r.from, r.from, s);
            }
            return e.finish();
          }
        }
      ),
      { domEventHandlers: s } = e;
    return [
      r,
      fa({
        class: 'cm-foldGutter',
        markers(t) {
          var e;
          return (
            (null === (e = t.plugin(r)) || void 0 === e ? void 0 : e.markers) ||
            Dt.empty
          );
        },
        initialSpacer: () => new Na(e, !1),
        domEventHandlers: Object.assign(Object.assign({}, s), {
          click: (t, e, i) => {
            if (s.click && s.click(t, e, i)) return !0;
            let n = Da(t.state, e.from, e.to);
            if (n) return t.dispatch({ effects: Ma.of(n) }), !0;
            let r = la(t.state, e.from, e.to);
            return !!r && (t.dispatch({ effects: Za.of(r) }), !0);
          },
        }),
      }),
      Ua(),
    ];
  }
  const Fa = Rr.baseTheme({
      '.cm-foldPlaceholder': {
        backgroundColor: '#eee',
        border: '1px solid #ddd',
        color: '#888',
        borderRadius: '.2em',
        margin: '0 1px',
        padding: '0 1px',
        cursor: 'pointer',
      },
      '.cm-foldGutter span': { padding: '0 1px', cursor: 'pointer' },
    }),
    Ha = Rr.baseTheme({
      '&.cm-focused .cm-matchingBracket': { backgroundColor: '#328c8252' },
      '&.cm-focused .cm-nonmatchingBracket': { backgroundColor: '#bb555544' },
    }),
    Ja = '()[]{}',
    Ka = D.define({
      combine: (t) =>
        Tt(t, { afterCursor: !0, brackets: Ja, maxScanDistance: 1e4 }),
    }),
    tl = ni.mark({ class: 'cm-matchingBracket' }),
    el = ni.mark({ class: 'cm-nonmatchingBracket' }),
    il = Y.define({
      create: () => ni.none,
      update(t, e) {
        if (!e.docChanged && !e.selection) return t;
        let i = [],
          n = e.state.facet(Ka);
        for (let t of e.state.selection.ranges) {
          if (!t.empty) continue;
          let r =
            ol(e.state, t.head, -1, n) ||
            (t.head > 0 && ol(e.state, t.head - 1, 1, n)) ||
            (n.afterCursor &&
              (ol(e.state, t.head, 1, n) ||
                (t.head < e.state.doc.length &&
                  ol(e.state, t.head + 1, -1, n))));
          if (!r) continue;
          let s = r.matched ? tl : el;
          i.push(s.range(r.start.from, r.start.to)),
            r.end && i.push(s.range(r.end.from, r.end.to));
        }
        return ni.set(i, !0);
      },
      provide: (t) => Rr.decorations.from(t),
    }),
    nl = [il, Ha];
  function rl(t = {}) {
    return [Ka.of(t), nl];
  }
  function sl(t, e, i) {
    let n = t.prop(e < 0 ? Us.openedBy : Us.closedBy);
    if (n) return n;
    if (1 == t.name.length) {
      let n = i.indexOf(t.name);
      if (n > -1 && n % 2 == (e < 0 ? 1 : 0)) return [i[n + e]];
    }
    return null;
  }
  function ol(t, e, i, n = {}) {
    let r = n.maxScanDistance || 1e4,
      s = n.brackets || Ja,
      o = Xo(t),
      a = o.resolveInner(e, i);
    for (let n = a; n; n = n.parent) {
      let r = sl(n.type, i, s);
      if (r && n.from < n.to) return al(t, e, i, n, r, s);
    }
    return (function (t, e, i, n, r, s, o) {
      let a = i < 0 ? t.sliceDoc(e - 1, e) : t.sliceDoc(e, e + 1),
        l = o.indexOf(a);
      if (l < 0 || (l % 2 == 0) != i > 0) return null;
      let h = { from: i < 0 ? e - 1 : e, to: i > 0 ? e + 1 : e },
        c = t.doc.iterRange(e, i > 0 ? t.doc.length : 0),
        u = 0;
      for (let t = 0; !c.next().done && t <= s; ) {
        let s = c.value;
        i < 0 && (t += s.length);
        let a = e + t * i;
        for (
          let t = i > 0 ? 0 : s.length - 1, e = i > 0 ? s.length : -1;
          t != e;
          t += i
        ) {
          let e = o.indexOf(s[t]);
          if (!(e < 0 || n.resolve(a + t, 1).type != r))
            if ((e % 2 == 0) == i > 0) u++;
            else {
              if (1 == u)
                return {
                  start: h,
                  end: { from: a + t, to: a + t + 1 },
                  matched: e >> 1 == l >> 1,
                };
              u--;
            }
        }
        i > 0 && (t += s.length);
      }
      return c.done ? { start: h, matched: !1 } : null;
    })(t, e, i, o, a.type, r, s);
  }
  function al(t, e, i, n, r, s) {
    let o = n.parent,
      a = { from: n.from, to: n.to },
      l = 0,
      h = null == o ? void 0 : o.cursor;
    if (h && (i < 0 ? h.childBefore(n.from) : h.childAfter(n.to)))
      do {
        if (i < 0 ? h.to <= n.from : h.from >= n.to) {
          if (0 == l && r.indexOf(h.type.name) > -1 && h.from < h.to)
            return { start: a, end: { from: h.from, to: h.to }, matched: !0 };
          if (sl(h.type, i, s)) l++;
          else if (sl(h.type, -i, s) && (l--, 0 == l))
            return {
              start: a,
              end: h.from == h.to ? void 0 : { from: h.from, to: h.to },
              matched: !1,
            };
        }
      } while (i < 0 ? h.prevSibling() : h.nextSibling());
    return { start: a, matched: !1 };
  }
  function ll(t, e) {
    return Z.create(t.ranges.map(e), t.mainIndex);
  }
  function hl(t, e) {
    return t.update({ selection: e, scrollIntoView: !0, userEvent: 'select' });
  }
  function cl({ state: t, dispatch: e }, i) {
    let n = ll(t.selection, i);
    return !n.eq(t.selection) && (e(hl(t, n)), !0);
  }
  function ul(t, e) {
    return Z.cursor(e ? t.to : t.from);
  }
  function dl(t, e) {
    return cl(t, (i) => (i.empty ? t.moveByChar(i, e) : ul(i, e)));
  }
  const fl = (t) => dl(t, t.textDirection != zi.LTR),
    Ol = (t) => dl(t, t.textDirection == zi.LTR);
  function pl(t, e) {
    return cl(t, (i) => (i.empty ? t.moveByGroup(i, e) : ul(i, e)));
  }
  function ml(t, e, i) {
    if (e.type.prop(i)) return !0;
    let n = e.to - e.from;
    return (
      (n && (n > 2 || /[^\s,.;:]/.test(t.sliceDoc(e.from, e.to)))) ||
      e.firstChild
    );
  }
  function gl(t, e, i) {
    let n,
      r,
      s = Xo(t).resolveInner(e.head),
      o = i ? Us.closedBy : Us.openedBy;
    for (let n = e.head; ; ) {
      let e = i ? s.childAfter(n) : s.childBefore(n);
      if (!e) break;
      ml(t, e, o) ? (s = e) : (n = i ? e.to : e.from);
    }
    return (
      (r =
        s.type.prop(o) &&
        (n = i ? ol(t, s.from, 1) : ol(t, s.to, -1)) &&
        n.matched
          ? i
            ? n.end.to
            : n.end.from
          : i
          ? s.to
          : s.from),
      Z.cursor(r, i ? -1 : 1)
    );
  }
  function Ql(t, e) {
    return cl(t, (i) => {
      if (!i.empty) return ul(i, e);
      let n = t.moveVertically(i, e);
      return n.head != i.head ? n : t.moveToLineBoundary(i, e);
    });
  }
  const bl = (t) => Ql(t, !1),
    vl = (t) => Ql(t, !0);
  function yl(t, e) {
    let { state: i } = t,
      n = ll(i.selection, (i) =>
        i.empty ? t.moveVertically(i, e, t.dom.clientHeight) : ul(i, e)
      );
    if (n.eq(i.selection)) return !1;
    let r = t.coordsAtPos(i.selection.main.head),
      s = t.scrollDOM.getBoundingClientRect();
    return (
      t.dispatch(hl(i, n), {
        effects:
          r && r.top > s.top && r.bottom < s.bottom
            ? Rr.scrollIntoView(n.main.head, {
                y: 'start',
                yMargin: r.top - s.top,
              })
            : void 0,
      }),
      !0
    );
  }
  const wl = (t) => yl(t, !1),
    xl = (t) => yl(t, !0);
  function kl(t, e, i) {
    let n = t.lineBlockAt(e.head),
      r = t.moveToLineBoundary(e, i);
    if (
      (r.head == e.head &&
        r.head != (i ? n.to : n.from) &&
        (r = t.moveToLineBoundary(e, i, !1)),
      !i && r.head == n.from && n.length)
    ) {
      let i = /^\s*/.exec(
        t.state.sliceDoc(n.from, Math.min(n.from + 100, n.to))
      )[0].length;
      i && e.head != n.from + i && (r = Z.cursor(n.from + i));
    }
    return r;
  }
  const Sl = (t) => cl(t, (e) => kl(t, e, !0)),
    $l = (t) => cl(t, (e) => kl(t, e, !1));
  function Tl(t, e) {
    let i = ll(t.state.selection, (t) => {
      let i = e(t);
      return Z.range(t.anchor, i.head, i.goalColumn);
    });
    return !i.eq(t.state.selection) && (t.dispatch(hl(t.state, i)), !0);
  }
  function Pl(t, e) {
    return Tl(t, (i) => t.moveByChar(i, e));
  }
  const Rl = (t) => Pl(t, t.textDirection != zi.LTR),
    Wl = (t) => Pl(t, t.textDirection == zi.LTR);
  function Cl(t, e) {
    return Tl(t, (i) => t.moveByGroup(i, e));
  }
  function Al(t, e) {
    return Tl(t, (i) => t.moveVertically(i, e));
  }
  const Xl = (t) => Al(t, !1),
    Zl = (t) => Al(t, !0);
  function Ml(t, e) {
    return Tl(t, (i) => t.moveVertically(i, e, t.dom.clientHeight));
  }
  const _l = (t) => Ml(t, !1),
    Ll = (t) => Ml(t, !0),
    Dl = (t) => Tl(t, (e) => kl(t, e, !0)),
    El = (t) => Tl(t, (e) => kl(t, e, !1)),
    zl = ({ state: t, dispatch: e }) => (e(hl(t, { anchor: 0 })), !0),
    ql = ({ state: t, dispatch: e }) => (
      e(hl(t, { anchor: t.doc.length })), !0
    ),
    jl = ({ state: t, dispatch: e }) => (
      e(hl(t, { anchor: t.selection.main.anchor, head: 0 })), !0
    ),
    Vl = ({ state: t, dispatch: e }) => (
      e(hl(t, { anchor: t.selection.main.anchor, head: t.doc.length })), !0
    );
  function Yl({ state: t, dispatch: e }, i) {
    if (t.readOnly) return !1;
    let n = 'delete.selection',
      r = t.changeByRange((t) => {
        let { from: e, to: r } = t;
        if (e == r) {
          let t = i(e);
          t < e ? (n = 'delete.backward') : t > e && (n = 'delete.forward'),
            (e = Math.min(e, t)),
            (r = Math.max(r, t));
        }
        return e == r
          ? { range: t }
          : { changes: { from: e, to: r }, range: Z.cursor(e) };
      });
    return (
      !r.changes.empty &&
      (e(t.update(r, { scrollIntoView: !0, userEvent: n })), !0)
    );
  }
  function Ul(t, e, i) {
    if (t instanceof Rr)
      for (let n of t.pluginField(Pi.atomicRanges))
        n.between(e, e, (t, n) => {
          t < e && n > e && (e = i ? n : t);
        });
    return e;
  }
  const Gl = (t, e) =>
      Yl(t, (i) => {
        let n,
          s,
          { state: o } = t,
          a = o.doc.lineAt(i);
        if (
          !e &&
          i > a.from &&
          i < a.from + 200 &&
          !/[^ \t]/.test((n = a.text.slice(0, i - a.from)))
        ) {
          if ('\t' == n[n.length - 1]) return i - 1;
          let t = d(n, o.tabSize) % Uo(o) || Uo(o);
          for (let e = 0; e < t && ' ' == n[n.length - 1 - e]; e++) i--;
          s = i;
        } else
          (s = r(a.text, i - a.from, e, e) + a.from),
            s == i && a.number != (e ? o.doc.lines : 1) && (s += e ? 1 : -1);
        return Ul(t, s, e);
      }),
    Il = (t) => Gl(t, !1),
    Nl = (t) => Gl(t, !0),
    Bl = (t, e) =>
      Yl(t, (i) => {
        let n = i,
          { state: s } = t,
          o = s.doc.lineAt(n),
          a = s.charCategorizer(n);
        for (let t = null; ; ) {
          if (n == (e ? o.to : o.from)) {
            n == i && o.number != (e ? s.doc.lines : 1) && (n += e ? 1 : -1);
            break;
          }
          let l = r(o.text, n - o.from, e) + o.from,
            h = o.text.slice(Math.min(n, l) - o.from, Math.max(n, l) - o.from),
            c = a(h);
          if (null != t && c != t) break;
          (' ' == h && n == i) || (t = c), (n = l);
        }
        return Ul(t, n, e);
      }),
    Fl = (t) => Bl(t, !1),
    Hl = (t) =>
      Yl(t, (e) => {
        let i = t.lineBlockAt(e).to;
        return Ul(t, e < i ? i : Math.min(t.state.doc.length, e + 1), !0);
      });
  function Jl(t) {
    let e = [],
      i = -1;
    for (let n of t.selection.ranges) {
      let r = t.doc.lineAt(n.from),
        s = t.doc.lineAt(n.to);
      if (
        (n.empty || n.to != s.from || (s = t.doc.lineAt(n.to - 1)),
        i >= r.number)
      ) {
        let t = e[e.length - 1];
        (t.to = s.to), t.ranges.push(n);
      } else e.push({ from: r.from, to: s.to, ranges: [n] });
      i = s.number + 1;
    }
    return e;
  }
  function Kl(t, e, i) {
    if (t.readOnly) return !1;
    let n = [],
      r = [];
    for (let e of Jl(t)) {
      if (i ? e.to == t.doc.length : 0 == e.from) continue;
      let s = t.doc.lineAt(i ? e.to + 1 : e.from - 1),
        o = s.length + 1;
      if (i) {
        n.push(
          { from: e.to, to: s.to },
          { from: e.from, insert: s.text + t.lineBreak }
        );
        for (let i of e.ranges)
          r.push(
            Z.range(
              Math.min(t.doc.length, i.anchor + o),
              Math.min(t.doc.length, i.head + o)
            )
          );
      } else {
        n.push(
          { from: s.from, to: e.from },
          { from: e.to, insert: t.lineBreak + s.text }
        );
        for (let t of e.ranges) r.push(Z.range(t.anchor - o, t.head - o));
      }
    }
    return (
      !!n.length &&
      (e(
        t.update({
          changes: n,
          scrollIntoView: !0,
          selection: Z.create(r, t.selection.mainIndex),
          userEvent: 'move.line',
        })
      ),
      !0)
    );
  }
  function th(t, e, i) {
    if (t.readOnly) return !1;
    let n = [];
    for (let e of Jl(t))
      i
        ? n.push({
            from: e.from,
            insert: t.doc.slice(e.from, e.to) + t.lineBreak,
          })
        : n.push({
            from: e.to,
            insert: t.lineBreak + t.doc.slice(e.from, e.to),
          });
    return (
      e(
        t.update({
          changes: n,
          scrollIntoView: !0,
          userEvent: 'input.copyline',
        })
      ),
      !0
    );
  }
  const eh = nh(!1),
    ih = nh(!0);
  function nh(t) {
    return ({ state: e, dispatch: i }) => {
      if (e.readOnly) return !1;
      let n = e.changeByRange((i) => {
        let { from: n, to: r } = i,
          s = e.doc.lineAt(n),
          o =
            !t &&
            n == r &&
            (function (t, e) {
              if (/\(\)|\[\]|\{\}/.test(t.sliceDoc(e - 1, e + 1)))
                return { from: e, to: e };
              let i,
                n = Xo(t).resolveInner(e),
                r = n.childBefore(e),
                s = n.childAfter(e);
              return r &&
                s &&
                r.to <= e &&
                s.from >= e &&
                (i = r.type.prop(Us.closedBy)) &&
                i.indexOf(s.name) > -1 &&
                t.doc.lineAt(r.to).from == t.doc.lineAt(s.from).from
                ? { from: r.to, to: s.from }
                : null;
            })(e, n);
        t && (n = r = (r <= s.to ? s : e.doc.lineAt(r)).to);
        let a = new No(e, { simulateBreak: n, simulateDoubleBreak: !!o }),
          l = Io(a, n);
        for (
          null == l && (l = /^\s*/.exec(e.doc.lineAt(n).text)[0].length);
          r < s.to && /\s/.test(s.text[r - s.from]);

        )
          r++;
        o
          ? ({ from: n, to: r } = o)
          : n > s.from &&
            n < s.from + 100 &&
            !/\S/.test(s.text.slice(0, n)) &&
            (n = s.from);
        let h = ['', Go(e, l)];
        return (
          o && h.push(Go(e, a.lineIndent(s.from, -1))),
          {
            changes: { from: n, to: r, insert: O.of(h) },
            range: Z.cursor(n + 1 + h[1].length),
          }
        );
      });
      return i(e.update(n, { scrollIntoView: !0, userEvent: 'input' })), !0;
    };
  }
  function rh(t, e) {
    let i = -1;
    return t.changeByRange((n) => {
      let r = [];
      for (let s = n.from; s <= n.to; ) {
        let o = t.doc.lineAt(s);
        o.number > i &&
          (n.empty || n.to > o.from) &&
          (e(o, r, n), (i = o.number)),
          (s = o.to + 1);
      }
      let s = t.changes(r);
      return {
        changes: r,
        range: Z.range(s.mapPos(n.anchor, 1), s.mapPos(n.head, 1)),
      };
    });
  }
  const sh = ({ state: t, dispatch: e }) =>
      !t.readOnly &&
      (e(
        t.update(
          rh(t, (e, i) => {
            i.push({ from: e.from, insert: t.facet(Yo) });
          }),
          { userEvent: 'input.indent' }
        )
      ),
      !0),
    oh = ({ state: t, dispatch: e }) =>
      !t.readOnly &&
      (e(
        t.update(
          rh(t, (e, i) => {
            let n = /^\s*/.exec(e.text)[0];
            if (!n) return;
            let r = d(n, t.tabSize),
              s = 0,
              o = Go(t, Math.max(0, r - Uo(t)));
            for (
              ;
              s < n.length &&
              s < o.length &&
              n.charCodeAt(s) == o.charCodeAt(s);

            )
              s++;
            i.push({
              from: e.from + s,
              to: e.from + n.length,
              insert: o.slice(s),
            });
          }),
          { userEvent: 'delete.dedent' }
        )
      ),
      !0),
    ah = [
      { key: 'ArrowLeft', run: fl, shift: Rl, preventDefault: !0 },
      {
        key: 'Mod-ArrowLeft',
        mac: 'Alt-ArrowLeft',
        run: (t) => pl(t, t.textDirection != zi.LTR),
        shift: (t) => Cl(t, t.textDirection != zi.LTR),
      },
      { mac: 'Cmd-ArrowLeft', run: $l, shift: El },
      { key: 'ArrowRight', run: Ol, shift: Wl, preventDefault: !0 },
      {
        key: 'Mod-ArrowRight',
        mac: 'Alt-ArrowRight',
        run: (t) => pl(t, t.textDirection == zi.LTR),
        shift: (t) => Cl(t, t.textDirection == zi.LTR),
      },
      { mac: 'Cmd-ArrowRight', run: Sl, shift: Dl },
      { key: 'ArrowUp', run: bl, shift: Xl, preventDefault: !0 },
      { mac: 'Cmd-ArrowUp', run: zl, shift: jl },
      { mac: 'Ctrl-ArrowUp', run: wl, shift: _l },
      { key: 'ArrowDown', run: vl, shift: Zl, preventDefault: !0 },
      { mac: 'Cmd-ArrowDown', run: ql, shift: Vl },
      { mac: 'Ctrl-ArrowDown', run: xl, shift: Ll },
      { key: 'PageUp', run: wl, shift: _l },
      { key: 'PageDown', run: xl, shift: Ll },
      { key: 'Home', run: $l, shift: El },
      { key: 'Mod-Home', run: zl, shift: jl },
      { key: 'End', run: Sl, shift: Dl },
      { key: 'Mod-End', run: ql, shift: Vl },
      { key: 'Enter', run: eh },
      {
        key: 'Mod-a',
        run: ({ state: t, dispatch: e }) => (
          e(
            t.update({
              selection: { anchor: 0, head: t.doc.length },
              userEvent: 'select',
            })
          ),
          !0
        ),
      },
      { key: 'Backspace', run: Il, shift: Il },
      { key: 'Delete', run: Nl },
      { key: 'Mod-Backspace', mac: 'Alt-Backspace', run: Fl },
      { key: 'Mod-Delete', mac: 'Alt-Delete', run: (t) => Bl(t, !0) },
      {
        mac: 'Mod-Backspace',
        run: (t) =>
          Yl(t, (e) => {
            let i = t.lineBlockAt(e).from;
            return Ul(t, e > i ? i : Math.max(0, e - 1), !1);
          }),
      },
      { mac: 'Mod-Delete', run: Hl },
    ].concat(
      [
        { key: 'Ctrl-b', run: fl, shift: Rl, preventDefault: !0 },
        { key: 'Ctrl-f', run: Ol, shift: Wl },
        { key: 'Ctrl-p', run: bl, shift: Xl },
        { key: 'Ctrl-n', run: vl, shift: Zl },
        {
          key: 'Ctrl-a',
          run: (t) => cl(t, (e) => Z.cursor(t.lineBlockAt(e.head).from, 1)),
          shift: (t) => Tl(t, (e) => Z.cursor(t.lineBlockAt(e.head).from)),
        },
        {
          key: 'Ctrl-e',
          run: (t) => cl(t, (e) => Z.cursor(t.lineBlockAt(e.head).to, -1)),
          shift: (t) => Tl(t, (e) => Z.cursor(t.lineBlockAt(e.head).to)),
        },
        { key: 'Ctrl-d', run: Nl },
        { key: 'Ctrl-h', run: Il },
        { key: 'Ctrl-k', run: Hl },
        { key: 'Ctrl-Alt-h', run: Fl },
        {
          key: 'Ctrl-o',
          run: ({ state: t, dispatch: e }) => {
            if (t.readOnly) return !1;
            let i = t.changeByRange((t) => ({
              changes: { from: t.from, to: t.to, insert: O.of(['', '']) },
              range: Z.cursor(t.from),
            }));
            return (
              e(t.update(i, { scrollIntoView: !0, userEvent: 'input' })), !0
            );
          },
        },
        {
          key: 'Ctrl-t',
          run: ({ state: t, dispatch: e }) => {
            if (t.readOnly) return !1;
            let i = t.changeByRange((e) => {
              if (!e.empty || 0 == e.from || e.from == t.doc.length)
                return { range: e };
              let i = e.from,
                n = t.doc.lineAt(i),
                s = i == n.from ? i - 1 : r(n.text, i - n.from, !1) + n.from,
                o = i == n.to ? i + 1 : r(n.text, i - n.from, !0) + n.from;
              return {
                changes: {
                  from: s,
                  to: o,
                  insert: t.doc.slice(i, o).append(t.doc.slice(s, i)),
                },
                range: Z.cursor(o),
              };
            });
            return (
              !i.changes.empty &&
              (e(
                t.update(i, { scrollIntoView: !0, userEvent: 'move.character' })
              ),
              !0)
            );
          },
        },
        { key: 'Ctrl-v', run: xl },
      ].map((t) => ({ mac: t.key, run: t.run, shift: t.shift }))
    ),
    lh = [
      {
        key: 'Alt-ArrowLeft',
        mac: 'Ctrl-ArrowLeft',
        run: (t) => cl(t, (e) => gl(t.state, e, t.textDirection != zi.LTR)),
        shift: (t) => Tl(t, (e) => gl(t.state, e, t.textDirection != zi.LTR)),
      },
      {
        key: 'Alt-ArrowRight',
        mac: 'Ctrl-ArrowRight',
        run: (t) => cl(t, (e) => gl(t.state, e, t.textDirection == zi.LTR)),
        shift: (t) => Tl(t, (e) => gl(t.state, e, t.textDirection == zi.LTR)),
      },
      { key: 'Alt-ArrowUp', run: ({ state: t, dispatch: e }) => Kl(t, e, !1) },
      {
        key: 'Shift-Alt-ArrowUp',
        run: ({ state: t, dispatch: e }) => th(t, e, !1),
      },
      {
        key: 'Alt-ArrowDown',
        run: ({ state: t, dispatch: e }) => Kl(t, e, !0),
      },
      {
        key: 'Shift-Alt-ArrowDown',
        run: ({ state: t, dispatch: e }) => th(t, e, !0),
      },
      {
        key: 'Escape',
        run: ({ state: t, dispatch: e }) => {
          let i = t.selection,
            n = null;
          return (
            i.ranges.length > 1
              ? (n = Z.create([i.main]))
              : i.main.empty || (n = Z.create([Z.cursor(i.main.head)])),
            !!n && (e(hl(t, n)), !0)
          );
        },
      },
      { key: 'Mod-Enter', run: ih },
      {
        key: 'Alt-l',
        mac: 'Ctrl-l',
        run: ({ state: t, dispatch: e }) => {
          let i = Jl(t).map(({ from: e, to: i }) =>
            Z.range(e, Math.min(i + 1, t.doc.length))
          );
          return (
            e(t.update({ selection: Z.create(i), userEvent: 'select' })), !0
          );
        },
      },
      {
        key: 'Mod-i',
        run: ({ state: t, dispatch: e }) => {
          let i = ll(t.selection, (e) => {
            var i;
            let n = Xo(t).resolveInner(e.head, 1);
            for (
              ;
              !(
                (n.from < e.from && n.to >= e.to) ||
                (n.to > e.to && n.from <= e.from)
              ) &&
              (null === (i = n.parent) || void 0 === i ? void 0 : i.parent);

            )
              n = n.parent;
            return Z.range(n.to, n.from);
          });
          return e(hl(t, i)), !0;
        },
        preventDefault: !0,
      },
      { key: 'Mod-[', run: oh },
      { key: 'Mod-]', run: sh },
      {
        key: 'Mod-Alt-\\',
        run: ({ state: t, dispatch: e }) => {
          if (t.readOnly) return !1;
          let i = Object.create(null),
            n = new No(t, {
              overrideIndentation: (t) => {
                let e = i[t];
                return null == e ? -1 : e;
              },
            }),
            r = rh(t, (e, r, s) => {
              let o = Io(n, e.from);
              if (null == o) return;
              /\S/.test(e.text) || (o = 0);
              let a = /^\s*/.exec(e.text)[0],
                l = Go(t, o);
              (a != l || s.from < e.from + a.length) &&
                ((i[e.from] = o),
                r.push({ from: e.from, to: e.from + a.length, insert: l }));
            });
          return r.changes.empty || e(t.update(r, { userEvent: 'indent' })), !0;
        },
      },
      {
        key: 'Shift-Mod-k',
        run: (t) => {
          if (t.state.readOnly) return !1;
          let { state: e } = t,
            i = e.changes(
              Jl(e).map(
                ({ from: t, to: i }) => (
                  t > 0 ? t-- : i < e.doc.length && i++, { from: t, to: i }
                )
              )
            ),
            n = ll(e.selection, (e) => t.moveVertically(e, !0)).map(i);
          return (
            t.dispatch({
              changes: i,
              selection: n,
              scrollIntoView: !0,
              userEvent: 'delete.line',
            }),
            !0
          );
        },
      },
      {
        key: 'Shift-Mod-\\',
        run: ({ state: t, dispatch: e }) =>
          (function (t, e, i) {
            let n = !1,
              r = ll(t.selection, (e) => {
                let r =
                  ol(t, e.head, -1) ||
                  ol(t, e.head, 1) ||
                  (e.head > 0 && ol(t, e.head - 1, 1)) ||
                  (e.head < t.doc.length && ol(t, e.head + 1, -1));
                if (!r || !r.end) return e;
                n = !0;
                let s = r.start.from == e.head ? r.end.to : r.end.from;
                return i ? Z.range(e.anchor, s) : Z.cursor(s);
              });
            return !!n && (e(hl(t, r)), !0);
          })(t, e, !1),
      },
    ].concat(ah),
    hh = { key: 'Tab', run: sh, shift: oh },
    ch = { brackets: ['(', '[', '{', "'", '"'], before: ')]}\'":;>' },
    uh = Ot.define({
      map(t, e) {
        let i = e.mapPos(t, -1, k.TrackAfter);
        return null == i ? void 0 : i;
      },
    }),
    dh = Ot.define({ map: (t, e) => e.mapPos(t) }),
    fh = new (class extends Zt {})();
  (fh.startSide = 1), (fh.endSide = -1);
  const Oh = Y.define({
    create: () => Dt.empty,
    update(t, e) {
      if (e.selection) {
        let i = e.state.doc.lineAt(e.selection.main.head).from,
          n = e.startState.doc.lineAt(e.startState.selection.main.head).from;
        i != e.changes.mapPos(n, -1) && (t = Dt.empty);
      }
      t = t.map(e.changes);
      for (let i of e.effects)
        i.is(uh)
          ? (t = t.update({ add: [fh.range(i.value, i.value + 1)] }))
          : i.is(dh) && (t = t.update({ filter: (t) => t != i.value }));
      return t;
    },
  });
  function ph() {
    return [vh, Oh];
  }
  const mh = '()[]{}<>';
  function gh(t) {
    for (let e = 0; e < mh.length; e += 2)
      if (mh.charCodeAt(e) == t) return mh.charAt(e + 1);
    return c(t < 128 ? t : t + 1);
  }
  function Qh(t, e) {
    return t.languageDataAt('closeBrackets', e)[0] || ch;
  }
  const bh =
      'object' == typeof navigator && /Android\b/.test(navigator.userAgent),
    vh = Rr.inputHandler.of((t, e, i, n) => {
      if ((bh ? t.composing : t.compositionStarted) || t.state.readOnly)
        return !1;
      let r = t.state.selection.main;
      if (
        n.length > 2 ||
        (2 == n.length && 1 == u(h(n, 0))) ||
        e != r.from ||
        i != r.to
      )
        return !1;
      let s = (function (t, e) {
        let i = Qh(t, t.selection.main.head),
          n = i.brackets || ch.brackets;
        for (let r of n) {
          let s = gh(h(r, 0));
          if (e == r)
            return s == r
              ? $h(t, r, n.indexOf(r + r + r) > -1)
              : kh(t, r, s, i.before || ch.before);
          if (e == s && wh(t, t.selection.main.from)) return Sh(t, r, s);
        }
        return null;
      })(t.state, n);
      return !!s && (t.dispatch(s), !0);
    }),
    yh = [
      {
        key: 'Backspace',
        run: ({ state: t, dispatch: e }) => {
          if (t.readOnly) return !1;
          let i = Qh(t, t.selection.main.head).brackets || ch.brackets,
            n = null,
            r = t.changeByRange((e) => {
              if (e.empty) {
                let n = (function (t, e) {
                  let i = t.sliceString(e - 2, e);
                  return u(h(i, 0)) == i.length ? i : i.slice(1);
                })(t.doc, e.head);
                for (let r of i)
                  if (r == n && xh(t.doc, e.head) == gh(h(r, 0)))
                    return {
                      changes: {
                        from: e.head - r.length,
                        to: e.head + r.length,
                      },
                      range: Z.cursor(e.head - r.length),
                      userEvent: 'delete.backward',
                    };
              }
              return { range: (n = e) };
            });
          return n || e(t.update(r, { scrollIntoView: !0 })), !n;
        },
      },
    ];
  function wh(t, e) {
    let i = !1;
    return (
      t.field(Oh).between(0, t.doc.length, (t) => {
        t == e && (i = !0);
      }),
      i
    );
  }
  function xh(t, e) {
    let i = t.sliceString(e, e + 2);
    return i.slice(0, u(h(i, 0)));
  }
  function kh(t, e, i, n) {
    let r = null,
      s = t.changeByRange((s) => {
        if (!s.empty)
          return {
            changes: [
              { insert: e, from: s.from },
              { insert: i, from: s.to },
            ],
            effects: uh.of(s.to + e.length),
            range: Z.range(s.anchor + e.length, s.head + e.length),
          };
        let o = xh(t.doc, s.head);
        return !o || /\s/.test(o) || n.indexOf(o) > -1
          ? {
              changes: { insert: e + i, from: s.head },
              effects: uh.of(s.head + e.length),
              range: Z.cursor(s.head + e.length),
            }
          : { range: (r = s) };
      });
    return r
      ? null
      : t.update(s, { scrollIntoView: !0, userEvent: 'input.type' });
  }
  function Sh(t, e, i) {
    let n = null,
      r = t.selection.ranges.map((e) =>
        e.empty && xh(t.doc, e.head) == i
          ? Z.cursor(e.head + i.length)
          : (n = e)
      );
    return n
      ? null
      : t.update({
          selection: Z.create(r, t.selection.mainIndex),
          scrollIntoView: !0,
          effects: t.selection.ranges.map(({ from: t }) => dh.of(t)),
        });
  }
  function $h(t, e, i) {
    let n = null,
      r = t.changeByRange((r) => {
        if (!r.empty)
          return {
            changes: [
              { insert: e, from: r.from },
              { insert: e, from: r.to },
            ],
            effects: uh.of(r.to + e.length),
            range: Z.range(r.anchor + e.length, r.head + e.length),
          };
        let s = r.head,
          o = xh(t.doc, s);
        if (o == e) {
          if (Th(t, s))
            return {
              changes: { insert: e + e, from: s },
              effects: uh.of(s + e.length),
              range: Z.cursor(s + e.length),
            };
          if (wh(t, s)) {
            let n = i && t.sliceDoc(s, s + 3 * e.length) == e + e + e;
            return {
              range: Z.cursor(s + e.length * (n ? 3 : 1)),
              effects: dh.of(s),
            };
          }
        } else {
          if (
            i &&
            t.sliceDoc(s - 2 * e.length, s) == e + e &&
            Th(t, s - 2 * e.length)
          )
            return {
              changes: { insert: e + e + e + e, from: s },
              effects: uh.of(s + e.length),
              range: Z.cursor(s + e.length),
            };
          if (t.charCategorizer(s)(o) != wt.Word) {
            let i = t.sliceDoc(s - 1, s);
            if (
              i != e &&
              t.charCategorizer(s)(i) != wt.Word &&
              !(function (t, e, i) {
                let n = Xo(t).resolveInner(e, -1);
                for (let r = 0; r < 5; r++) {
                  if (t.sliceDoc(n.from, n.from + i.length) == i) return !0;
                  let r = n.to == e && n.parent;
                  if (!r) break;
                  n = r;
                }
                return !1;
              })(t, s, e)
            )
              return {
                changes: { insert: e + e, from: s },
                effects: uh.of(s + e.length),
                range: Z.cursor(s + e.length),
              };
          }
        }
        return { range: (n = r) };
      });
    return n
      ? null
      : t.update(r, { scrollIntoView: !0, userEvent: 'input.type' });
  }
  function Th(t, e) {
    let i = Xo(t).resolveInner(e + 1);
    return i.parent && i.from == e;
  }
  const Ph = D.define({
    combine(t) {
      let e, i;
      for (let n of t) (e = e || n.topContainer), (i = i || n.bottomContainer);
      return { topContainer: e, bottomContainer: i };
    },
  });
  function Rh(t, e) {
    let i = t.plugin(Wh),
      n = i ? i.specs.indexOf(e) : -1;
    return n > -1 ? i.panels[n] : null;
  }
  const Wh = Ci.fromClass(
    class {
      constructor(t) {
        (this.input = t.state.facet(Zh)),
          (this.specs = this.input.filter((t) => t)),
          (this.panels = this.specs.map((e) => e(t)));
        let e = t.state.facet(Ph);
        (this.top = new Ch(t, !0, e.topContainer)),
          (this.bottom = new Ch(t, !1, e.bottomContainer)),
          this.top.sync(this.panels.filter((t) => t.top)),
          this.bottom.sync(this.panels.filter((t) => !t.top));
        for (let t of this.panels)
          t.dom.classList.add('cm-panel'), t.mount && t.mount();
      }
      update(t) {
        let e = t.state.facet(Ph);
        this.top.container != e.topContainer &&
          (this.top.sync([]), (this.top = new Ch(t.view, !0, e.topContainer))),
          this.bottom.container != e.bottomContainer &&
            (this.bottom.sync([]),
            (this.bottom = new Ch(t.view, !1, e.bottomContainer))),
          this.top.syncClasses(),
          this.bottom.syncClasses();
        let i = t.state.facet(Zh);
        if (i != this.input) {
          let e = i.filter((t) => t),
            n = [],
            r = [],
            s = [],
            o = [];
          for (let i of e) {
            let e,
              a = this.specs.indexOf(i);
            a < 0
              ? ((e = i(t.view)), o.push(e))
              : ((e = this.panels[a]), e.update && e.update(t)),
              n.push(e),
              (e.top ? r : s).push(e);
          }
          (this.specs = e),
            (this.panels = n),
            this.top.sync(r),
            this.bottom.sync(s);
          for (let t of o)
            t.dom.classList.add('cm-panel'), t.mount && t.mount();
        } else for (let e of this.panels) e.update && e.update(t);
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([]);
      }
    },
    {
      provide: Pi.scrollMargins.from((t) => ({
        top: t.top.scrollMargin(),
        bottom: t.bottom.scrollMargin(),
      })),
    }
  );
  class Ch {
    constructor(t, e, i) {
      (this.view = t),
        (this.top = e),
        (this.container = i),
        (this.dom = void 0),
        (this.classes = ''),
        (this.panels = []),
        this.syncClasses();
    }
    sync(t) {
      for (let e of this.panels) e.destroy && t.indexOf(e) < 0 && e.destroy();
      (this.panels = t), this.syncDOM();
    }
    syncDOM() {
      if (0 == this.panels.length)
        return void (this.dom && (this.dom.remove(), (this.dom = void 0)));
      if (!this.dom) {
        (this.dom = document.createElement('div')),
          (this.dom.className = this.top
            ? 'cm-panels cm-panels-top'
            : 'cm-panels cm-panels-bottom'),
          (this.dom.style[this.top ? 'top' : 'bottom'] = '0');
        let t = this.container || this.view.dom;
        t.insertBefore(this.dom, this.top ? t.firstChild : null);
      }
      let t = this.dom.firstChild;
      for (let e of this.panels)
        if (e.dom.parentNode == this.dom) {
          for (; t != e.dom; ) t = Ah(t);
          t = t.nextSibling;
        } else this.dom.insertBefore(e.dom, t);
      for (; t; ) t = Ah(t);
    }
    scrollMargin() {
      return !this.dom || this.container
        ? 0
        : Math.max(
            0,
            this.top
              ? this.dom.getBoundingClientRect().bottom -
                  Math.max(0, this.view.scrollDOM.getBoundingClientRect().top)
              : Math.min(
                  innerHeight,
                  this.view.scrollDOM.getBoundingClientRect().bottom
                ) - this.dom.getBoundingClientRect().top
          );
    }
    syncClasses() {
      if (this.container && this.classes != this.view.themeClasses) {
        for (let t of this.classes.split(' '))
          t && this.container.classList.remove(t);
        for (let t of (this.classes = this.view.themeClasses).split(' '))
          t && this.container.classList.add(t);
      }
    }
  }
  function Ah(t) {
    let e = t.nextSibling;
    return t.remove(), e;
  }
  const Xh = Rr.baseTheme({
      '.cm-panels': {
        boxSizing: 'border-box',
        position: 'sticky',
        left: 0,
        right: 0,
      },
      '&light .cm-panels': { backgroundColor: '#f5f5f5', color: 'black' },
      '&light .cm-panels-top': { borderBottom: '1px solid #ddd' },
      '&light .cm-panels-bottom': { borderTop: '1px solid #ddd' },
      '&dark .cm-panels': { backgroundColor: '#333338', color: 'white' },
    }),
    Zh = D.define({ enables: [Wh, Xh] });
  function Mh() {
    var t = arguments[0];
    'string' == typeof t && (t = document.createElement(t));
    var e = 1,
      i = arguments[1];
    if (i && 'object' == typeof i && null == i.nodeType && !Array.isArray(i)) {
      for (var n in i)
        if (Object.prototype.hasOwnProperty.call(i, n)) {
          var r = i[n];
          'string' == typeof r ? t.setAttribute(n, r) : null != r && (t[n] = r);
        }
      e++;
    }
    for (; e < arguments.length; e++) _h(t, arguments[e]);
    return t;
  }
  function _h(t, e) {
    if ('string' == typeof e) t.appendChild(document.createTextNode(e));
    else if (null == e);
    else if (null != e.nodeType) t.appendChild(e);
    else {
      if (!Array.isArray(e))
        throw new RangeError('Unsupported child node: ' + e);
      for (var i = 0; i < e.length; i++) _h(t, e[i]);
    }
  }
  const Lh =
    'function' == typeof String.prototype.normalize
      ? (t) => t.normalize('NFKD')
      : (t) => t;
  class Dh {
    constructor(t, e, i = 0, n = t.length, r) {
      (this.value = { from: 0, to: 0 }),
        (this.done = !1),
        (this.matches = []),
        (this.buffer = ''),
        (this.bufferPos = 0),
        (this.iter = t.iterRange(i, n)),
        (this.bufferStart = i),
        (this.normalize = r ? (t) => r(Lh(t)) : Lh),
        (this.query = this.normalize(e));
    }
    peek() {
      if (this.bufferPos == this.buffer.length) {
        if (
          ((this.bufferStart += this.buffer.length),
          this.iter.next(),
          this.iter.done)
        )
          return -1;
        (this.bufferPos = 0), (this.buffer = this.iter.value);
      }
      return h(this.buffer, this.bufferPos);
    }
    next() {
      for (; this.matches.length; ) this.matches.pop();
      return this.nextOverlapping();
    }
    nextOverlapping() {
      for (;;) {
        let t = this.peek();
        if (t < 0) return (this.done = !0), this;
        let e = c(t),
          i = this.bufferStart + this.bufferPos;
        this.bufferPos += u(t);
        let n = this.normalize(e);
        for (let t = 0, r = i; ; t++) {
          let s = n.charCodeAt(t),
            o = this.match(s, r);
          if (o) return (this.value = o), this;
          if (t == n.length - 1) break;
          r == i && t < e.length && e.charCodeAt(t) == s && r++;
        }
      }
    }
    match(t, e) {
      let i = null;
      for (let n = 0; n < this.matches.length; n += 2) {
        let r = this.matches[n],
          s = !1;
        this.query.charCodeAt(r) == t &&
          (r == this.query.length - 1
            ? (i = { from: this.matches[n + 1], to: e + 1 })
            : (this.matches[n]++, (s = !0))),
          s || (this.matches.splice(n, 2), (n -= 2));
      }
      return (
        this.query.charCodeAt(0) == t &&
          (1 == this.query.length
            ? (i = { from: e, to: e + 1 })
            : this.matches.push(1, e)),
        i
      );
    }
  }
  'undefined' != typeof Symbol &&
    (Dh.prototype[Symbol.iterator] = function () {
      return this;
    });
  const Eh = { from: -1, to: -1, match: /.*/.exec('') },
    zh = 'gm' + (null == /x/.unicode ? '' : 'u');
  class qh {
    constructor(t, e, i, n = 0, r = t.length) {
      if (
        ((this.to = r),
        (this.curLine = ''),
        (this.done = !1),
        (this.value = Eh),
        /\\[sWDnr]|\n|\r|\[\^/.test(e))
      )
        return new Yh(t, e, i, n, r);
      (this.re = new RegExp(
        e,
        zh + ((null == i ? void 0 : i.ignoreCase) ? 'i' : '')
      )),
        (this.iter = t.iter());
      let s = t.lineAt(n);
      (this.curLineStart = s.from),
        (this.matchPos = n),
        this.getLine(this.curLineStart);
    }
    getLine(t) {
      this.iter.next(t),
        this.iter.lineBreak
          ? (this.curLine = '')
          : ((this.curLine = this.iter.value),
            this.curLineStart + this.curLine.length > this.to &&
              (this.curLine = this.curLine.slice(
                0,
                this.to - this.curLineStart
              )),
            this.iter.next());
    }
    nextLine() {
      (this.curLineStart = this.curLineStart + this.curLine.length + 1),
        this.curLineStart > this.to ? (this.curLine = '') : this.getLine(0);
    }
    next() {
      for (let t = this.matchPos - this.curLineStart; ; ) {
        this.re.lastIndex = t;
        let e = this.matchPos <= this.to && this.re.exec(this.curLine);
        if (e) {
          let i = this.curLineStart + e.index,
            n = i + e[0].length;
          if (
            ((this.matchPos = n + (i == n ? 1 : 0)),
            i == this.curLine.length && this.nextLine(),
            i < n || i > this.value.to)
          )
            return (this.value = { from: i, to: n, match: e }), this;
          t = this.matchPos - this.curLineStart;
        } else {
          if (!(this.curLineStart + this.curLine.length < this.to))
            return (this.done = !0), this;
          this.nextLine(), (t = 0);
        }
      }
    }
  }
  const jh = new WeakMap();
  class Vh {
    constructor(t, e) {
      (this.from = t), (this.text = e);
    }
    get to() {
      return this.from + this.text.length;
    }
    static get(t, e, i) {
      let n = jh.get(t);
      if (!n || n.from >= i || n.to <= e) {
        let n = new Vh(e, t.sliceString(e, i));
        return jh.set(t, n), n;
      }
      if (n.from == e && n.to == i) return n;
      let { text: r, from: s } = n;
      return (
        s > e && ((r = t.sliceString(e, s) + r), (s = e)),
        n.to < i && (r += t.sliceString(n.to, i)),
        jh.set(t, new Vh(s, r)),
        new Vh(e, r.slice(e - s, i - s))
      );
    }
  }
  class Yh {
    constructor(t, e, i, n, r) {
      (this.text = t),
        (this.to = r),
        (this.done = !1),
        (this.value = Eh),
        (this.matchPos = n),
        (this.re = new RegExp(
          e,
          zh + ((null == i ? void 0 : i.ignoreCase) ? 'i' : '')
        )),
        (this.flat = Vh.get(t, n, this.chunkEnd(n + 5e3)));
    }
    chunkEnd(t) {
      return t >= this.to ? this.to : this.text.lineAt(t).to;
    }
    next() {
      for (;;) {
        let t = (this.re.lastIndex = this.matchPos - this.flat.from),
          e = this.re.exec(this.flat.text);
        if (
          (e &&
            !e[0] &&
            e.index == t &&
            ((this.re.lastIndex = t + 1), (e = this.re.exec(this.flat.text))),
          e &&
            this.flat.to < this.to &&
            e.index + e[0].length > this.flat.text.length - 10 &&
            (e = null),
          e)
        ) {
          let t = this.flat.from + e.index,
            i = t + e[0].length;
          return (
            (this.value = { from: t, to: i, match: e }),
            (this.matchPos = i + (t == i ? 1 : 0)),
            this
          );
        }
        if (this.flat.to == this.to) return (this.done = !0), this;
        this.flat = Vh.get(
          this.text,
          this.flat.from,
          this.chunkEnd(this.flat.from + 2 * this.flat.text.length)
        );
      }
    }
  }
  function Uh(t) {
    let e = Mh('input', { class: 'cm-textfield', name: 'line' });
    function i() {
      let i = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(e.value);
      if (!i) return;
      let { state: n } = t,
        r = n.doc.lineAt(n.selection.main.head),
        [, s, o, a, l] = i,
        h = a ? +a.slice(1) : 0,
        c = o ? +o : r.number;
      if (o && l) {
        let t = c / 100;
        s && (t = t * ('-' == s ? -1 : 1) + r.number / n.doc.lines),
          (c = Math.round(n.doc.lines * t));
      } else o && s && (c = c * ('-' == s ? -1 : 1) + r.number);
      let u = n.doc.line(Math.max(1, Math.min(n.doc.lines, c)));
      t.dispatch({
        effects: Gh.of(!1),
        selection: Z.cursor(u.from + Math.max(0, Math.min(h, u.length))),
        scrollIntoView: !0,
      }),
        t.focus();
    }
    return {
      dom: Mh(
        'form',
        {
          class: 'cm-gotoLine',
          onkeydown: (e) => {
            27 == e.keyCode
              ? (e.preventDefault(),
                t.dispatch({ effects: Gh.of(!1) }),
                t.focus())
              : 13 == e.keyCode && (e.preventDefault(), i());
          },
          onsubmit: (t) => {
            t.preventDefault(), i();
          },
        },
        Mh('label', t.state.phrase('Go to line'), ': ', e),
        ' ',
        Mh(
          'button',
          { class: 'cm-button', type: 'submit' },
          t.state.phrase('go')
        )
      ),
      pos: -10,
    };
  }
  'undefined' != typeof Symbol &&
    (qh.prototype[Symbol.iterator] = Yh.prototype[Symbol.iterator] =
      function () {
        return this;
      });
  const Gh = Ot.define(),
    Ih = Y.define({
      create: () => !0,
      update(t, e) {
        for (let i of e.effects) i.is(Gh) && (t = i.value);
        return t;
      },
      provide: (t) => Zh.from(t, (t) => (t ? Uh : null)),
    }),
    Nh = Rr.baseTheme({
      '.cm-panel.cm-gotoLine': {
        padding: '2px 6px 4px',
        '& label': { fontSize: '80%' },
      },
    }),
    Bh = {
      highlightWordAroundCursor: !1,
      minSelectionLength: 1,
      maxMatches: 100,
    },
    Fh = D.define({
      combine: (t) =>
        Tt(t, Bh, {
          highlightWordAroundCursor: (t, e) => t || e,
          minSelectionLength: Math.min,
          maxMatches: Math.min,
        }),
    });
  function Hh(t) {
    let e = [ec, tc];
    return t && e.push(Fh.of(t)), e;
  }
  const Jh = ni.mark({ class: 'cm-selectionMatch' }),
    Kh = ni.mark({ class: 'cm-selectionMatch cm-selectionMatch-main' }),
    tc = Ci.fromClass(
      class {
        constructor(t) {
          this.decorations = this.getDeco(t);
        }
        update(t) {
          (t.selectionSet || t.docChanged || t.viewportChanged) &&
            (this.decorations = this.getDeco(t.view));
        }
        getDeco(t) {
          let e = t.state.facet(Fh),
            { state: i } = t,
            n = i.selection;
          if (n.ranges.length > 1) return ni.none;
          let r,
            s = n.main,
            o = null;
          if (s.empty) {
            if (!e.highlightWordAroundCursor) return ni.none;
            let t = i.wordAt(s.head);
            if (!t) return ni.none;
            (o = i.charCategorizer(s.head)), (r = i.sliceDoc(t.from, t.to));
          } else {
            let t = s.to - s.from;
            if (t < e.minSelectionLength || t > 200) return ni.none;
            if (((r = i.sliceDoc(s.from, s.to).trim()), !r)) return ni.none;
          }
          let a = [];
          for (let n of t.visibleRanges) {
            let t = new Dh(i.doc, r, n.from, n.to);
            for (; !t.next().done; ) {
              let { from: n, to: r } = t.value;
              if (
                (!o ||
                  ((0 == n || o(i.sliceDoc(n - 1, n)) != wt.Word) &&
                    (r == i.doc.length ||
                      o(i.sliceDoc(r, r + 1)) != wt.Word))) &&
                (o && n <= s.from && r >= s.to
                  ? a.push(Kh.range(n, r))
                  : (n >= s.to || r <= s.from) && a.push(Jh.range(n, r)),
                a.length > e.maxMatches)
              )
                return ni.none;
            }
          }
          return ni.set(a);
        }
      },
      { decorations: (t) => t.decorations }
    ),
    ec = Rr.baseTheme({
      '.cm-selectionMatch': { backgroundColor: '#99ff7780' },
      '.cm-searchMatch .cm-selectionMatch': { backgroundColor: 'transparent' },
    });
  const ic = D.define({
    combine(t) {
      var e;
      return {
        top: t.reduce((t, e) => (null != t ? t : e.top), void 0) || !1,
        caseSensitive:
          t.reduce(
            (t, e) => (null != t ? t : e.caseSensitive || e.matchCase),
            void 0
          ) || !1,
        createPanel:
          (null === (e = t.find((t) => t.createPanel)) || void 0 === e
            ? void 0
            : e.createPanel) || ((t) => new Sc(t)),
      };
    },
  });
  class nc {
    constructor(t) {
      (this.search = t.search),
        (this.caseSensitive = !!t.caseSensitive),
        (this.regexp = !!t.regexp),
        (this.replace = t.replace || ''),
        (this.valid =
          !!this.search &&
          (!this.regexp ||
            (function (t) {
              try {
                return new RegExp(t, zh), !0;
              } catch (t) {
                return !1;
              }
            })(this.search)));
    }
    eq(t) {
      return (
        this.search == t.search &&
        this.replace == t.replace &&
        this.caseSensitive == t.caseSensitive &&
        this.regexp == t.regexp
      );
    }
    create() {
      return this.regexp ? new oc(this) : new sc(this);
    }
  }
  class rc {
    constructor(t) {
      this.spec = t;
    }
  }
  class sc extends rc {
    constructor(t) {
      super(t),
        (this.unquoted = t.search.replace(/\\([nrt\\])/g, (t, e) =>
          'n' == e ? '\n' : 'r' == e ? '\r' : 't' == e ? '\t' : '\\'
        ));
    }
    cursor(t, e = 0, i = t.length) {
      return new Dh(
        t,
        this.unquoted,
        e,
        i,
        this.spec.caseSensitive ? void 0 : (t) => t.toLowerCase()
      );
    }
    nextMatch(t, e, i) {
      let n = this.cursor(t, i).nextOverlapping();
      return (
        n.done && (n = this.cursor(t, 0, e).nextOverlapping()),
        n.done ? null : n.value
      );
    }
    prevMatchInRange(t, e, i) {
      for (let n = i; ; ) {
        let i = Math.max(e, n - 1e4 - this.unquoted.length),
          r = this.cursor(t, i, n),
          s = null;
        for (; !r.nextOverlapping().done; ) s = r.value;
        if (s) return s;
        if (i == e) return null;
        n -= 1e4;
      }
    }
    prevMatch(t, e, i) {
      return (
        this.prevMatchInRange(t, 0, e) || this.prevMatchInRange(t, i, t.length)
      );
    }
    getReplacement(t) {
      return this.spec.replace;
    }
    matchAll(t, e) {
      let i = this.cursor(t),
        n = [];
      for (; !i.next().done; ) {
        if (n.length >= e) return null;
        n.push(i.value);
      }
      return n;
    }
    highlight(t, e, i, n) {
      let r = this.cursor(
        t,
        Math.max(0, e - this.unquoted.length),
        Math.min(i + this.unquoted.length, t.length)
      );
      for (; !r.next().done; ) n(r.value.from, r.value.to);
    }
  }
  class oc extends rc {
    cursor(t, e = 0, i = t.length) {
      return new qh(
        t,
        this.spec.search,
        this.spec.caseSensitive ? void 0 : { ignoreCase: !0 },
        e,
        i
      );
    }
    nextMatch(t, e, i) {
      let n = this.cursor(t, i).next();
      return (
        n.done && (n = this.cursor(t, 0, e).next()), n.done ? null : n.value
      );
    }
    prevMatchInRange(t, e, i) {
      for (let n = 1; ; n++) {
        let r = Math.max(e, i - 1e4 * n),
          s = this.cursor(t, r, i),
          o = null;
        for (; !s.next().done; ) o = s.value;
        if (o && (r == e || o.from > r + 10)) return o;
        if (r == e) return null;
      }
    }
    prevMatch(t, e, i) {
      return (
        this.prevMatchInRange(t, 0, e) || this.prevMatchInRange(t, i, t.length)
      );
    }
    getReplacement(t) {
      return this.spec.replace.replace(/\$([$&\d+])/g, (e, i) =>
        '$' == i
          ? '$'
          : '&' == i
          ? t.match[0]
          : '0' != i && +i < t.match.length
          ? t.match[i]
          : e
      );
    }
    matchAll(t, e) {
      let i = this.cursor(t),
        n = [];
      for (; !i.next().done; ) {
        if (n.length >= e) return null;
        n.push(i.value);
      }
      return n;
    }
    highlight(t, e, i, n) {
      let r = this.cursor(t, Math.max(0, e - 250), Math.min(i + 250, t.length));
      for (; !r.next().done; ) n(r.value.from, r.value.to);
    }
  }
  const ac = Ot.define(),
    lc = Ot.define(),
    hc = Y.define({
      create: (t) => new cc(yc(t).create(), null),
      update(t, e) {
        for (let i of e.effects)
          i.is(ac)
            ? (t = new cc(i.value.create(), t.panel))
            : i.is(lc) && (t = new cc(t.query, i.value ? vc : null));
        return t;
      },
      provide: (t) => Zh.from(t, (t) => t.panel),
    });
  class cc {
    constructor(t, e) {
      (this.query = t), (this.panel = e);
    }
  }
  const uc = ni.mark({ class: 'cm-searchMatch' }),
    dc = ni.mark({ class: 'cm-searchMatch cm-searchMatch-selected' }),
    fc = Ci.fromClass(
      class {
        constructor(t) {
          (this.view = t),
            (this.decorations = this.highlight(t.state.field(hc)));
        }
        update(t) {
          let e = t.state.field(hc);
          (e != t.startState.field(hc) || t.docChanged || t.selectionSet) &&
            (this.decorations = this.highlight(e));
        }
        highlight({ query: t, panel: e }) {
          if (!e || !t.spec.valid) return ni.none;
          let { view: i } = this,
            n = new Et();
          for (let e = 0, r = i.visibleRanges, s = r.length; e < s; e++) {
            let { from: o, to: a } = r[e];
            for (; e < s - 1 && a > r[e + 1].from - 500; ) a = r[++e].to;
            t.highlight(i.state.doc, o, a, (t, e) => {
              let r = i.state.selection.ranges.some(
                (i) => i.from == t && i.to == e
              );
              n.add(t, e, r ? dc : uc);
            });
          }
          return n.finish();
        }
      },
      { decorations: (t) => t.decorations }
    );
  function Oc(t) {
    return (e) => {
      let i = e.state.field(hc, !1);
      return i && i.query.spec.valid ? t(e, i) : wc(e);
    };
  }
  const pc = Oc((t, { query: e }) => {
      let { from: i, to: n } = t.state.selection.main,
        r = e.nextMatch(t.state.doc, i, n);
      return (
        !(!r || (r.from == i && r.to == n)) &&
        (t.dispatch({
          selection: { anchor: r.from, head: r.to },
          scrollIntoView: !0,
          effects: Pc(t, r),
          userEvent: 'select.search',
        }),
        !0)
      );
    }),
    mc = Oc((t, { query: e }) => {
      let { state: i } = t,
        { from: n, to: r } = i.selection.main,
        s = e.prevMatch(i.doc, n, r);
      return (
        !!s &&
        (t.dispatch({
          selection: { anchor: s.from, head: s.to },
          scrollIntoView: !0,
          effects: Pc(t, s),
          userEvent: 'select.search',
        }),
        !0)
      );
    }),
    gc = Oc((t, { query: e }) => {
      let i = e.matchAll(t.state.doc, 1e3);
      return (
        !(!i || !i.length) &&
        (t.dispatch({
          selection: Z.create(i.map((t) => Z.range(t.from, t.to))),
          userEvent: 'select.search.matches',
        }),
        !0)
      );
    }),
    Qc = Oc((t, { query: e }) => {
      let { state: i } = t,
        { from: n, to: r } = i.selection.main;
      if (i.readOnly) return !1;
      let s = e.nextMatch(i.doc, n, n);
      if (!s) return !1;
      let o,
        a,
        l = [];
      if (
        (s.from == n &&
          s.to == r &&
          ((a = i.toText(e.getReplacement(s))),
          l.push({ from: s.from, to: s.to, insert: a }),
          (s = e.nextMatch(i.doc, s.from, s.to))),
        s)
      ) {
        let t =
          0 == l.length || l[0].from >= s.to ? 0 : s.to - s.from - a.length;
        o = { anchor: s.from - t, head: s.to - t };
      }
      return (
        t.dispatch({
          changes: l,
          selection: o,
          scrollIntoView: !!o,
          effects: s ? Pc(t, s) : void 0,
          userEvent: 'input.replace',
        }),
        !0
      );
    }),
    bc = Oc((t, { query: e }) => {
      if (t.state.readOnly) return !1;
      let i = e.matchAll(t.state.doc, 1e9).map((t) => {
        let { from: i, to: n } = t;
        return { from: i, to: n, insert: e.getReplacement(t) };
      });
      return (
        !!i.length &&
        (t.dispatch({ changes: i, userEvent: 'input.replace.all' }), !0)
      );
    });
  function vc(t) {
    return t.state.facet(ic).createPanel(t);
  }
  function yc(t, e) {
    var i;
    let n = t.selection.main,
      r = n.empty || n.to > n.from + 100 ? '' : t.sliceDoc(n.from, n.to),
      s =
        null !== (i = null == e ? void 0 : e.caseSensitive) && void 0 !== i
          ? i
          : t.facet(ic).caseSensitive;
    return e && !r
      ? e
      : new nc({ search: r.replace(/\n/g, '\\n'), caseSensitive: s });
  }
  const wc = (t) => {
      let e = t.state.field(hc, !1);
      if (e && e.panel) {
        let i = Rh(t, vc);
        if (!i) return !1;
        let n = i.dom.querySelector('[name=search]');
        if (n != t.root.activeElement) {
          let i = yc(t.state, e.query.spec);
          i.valid && t.dispatch({ effects: ac.of(i) }), n.focus(), n.select();
        }
      } else
        t.dispatch({
          effects: [
            lc.of(!0),
            e ? ac.of(yc(t.state, e.query.spec)) : Ot.appendConfig.of(Wc),
          ],
        });
      return !0;
    },
    xc = (t) => {
      let e = t.state.field(hc, !1);
      if (!e || !e.panel) return !1;
      let i = Rh(t, vc);
      return (
        i && i.dom.contains(t.root.activeElement) && t.focus(),
        t.dispatch({ effects: lc.of(!1) }),
        !0
      );
    },
    kc = [
      { key: 'Mod-f', run: wc, scope: 'editor search-panel' },
      {
        key: 'F3',
        run: pc,
        shift: mc,
        scope: 'editor search-panel',
        preventDefault: !0,
      },
      {
        key: 'Mod-g',
        run: pc,
        shift: mc,
        scope: 'editor search-panel',
        preventDefault: !0,
      },
      { key: 'Escape', run: xc, scope: 'editor search-panel' },
      {
        key: 'Mod-Shift-l',
        run: ({ state: t, dispatch: e }) => {
          let i = t.selection;
          if (i.ranges.length > 1 || i.main.empty) return !1;
          let { from: n, to: r } = i.main,
            s = [],
            o = 0;
          for (let e = new Dh(t.doc, t.sliceDoc(n, r)); !e.next().done; ) {
            if (s.length > 1e3) return !1;
            e.value.from == n && (o = s.length),
              s.push(Z.range(e.value.from, e.value.to));
          }
          return (
            e(
              t.update({
                selection: Z.create(s, o),
                userEvent: 'select.search.matches',
              })
            ),
            !0
          );
        },
      },
      {
        key: 'Alt-g',
        run: (t) => {
          let e = Rh(t, Uh);
          if (!e) {
            let i = [Gh.of(!0)];
            null == t.state.field(Ih, !1) &&
              i.push(Ot.appendConfig.of([Ih, Nh])),
              t.dispatch({ effects: i }),
              (e = Rh(t, Uh));
          }
          return e && e.dom.querySelector('input').focus(), !0;
        },
      },
      {
        key: 'Mod-d',
        run: ({ state: t, dispatch: e }) => {
          let { ranges: i } = t.selection;
          if (i.some((t) => t.from === t.to))
            return (({ state: t, dispatch: e }) => {
              let { selection: i } = t,
                n = Z.create(
                  i.ranges.map((e) => t.wordAt(e.head) || Z.cursor(e.head)),
                  i.mainIndex
                );
              return !n.eq(i) && (e(t.update({ selection: n })), !0);
            })({ state: t, dispatch: e });
          let n = t.sliceDoc(i[0].from, i[0].to);
          if (t.selection.ranges.some((e) => t.sliceDoc(e.from, e.to) != n))
            return !1;
          let r = (function (t, e) {
            let { main: i, ranges: n } = t.selection,
              r = t.wordAt(i.head),
              s = r && r.from == i.from && r.to == i.to;
            for (let i = !1, r = new Dh(t.doc, e, n[n.length - 1].to); ; ) {
              if ((r.next(), !r.done)) {
                if (i && n.some((t) => t.from == r.value.from)) continue;
                if (s) {
                  let e = t.wordAt(r.value.from);
                  if (!e || e.from != r.value.from || e.to != r.value.to)
                    continue;
                }
                return r.value;
              }
              if (i) return null;
              (r = new Dh(t.doc, e, 0, Math.max(0, n[n.length - 1].from - 1))),
                (i = !0);
            }
          })(t, n);
          return (
            !!r &&
            (e(
              t.update({
                selection: t.selection.addRange(Z.range(r.from, r.to), !1),
                effects: Rr.scrollIntoView(r.to),
              })
            ),
            !0)
          );
        },
        preventDefault: !0,
      },
    ];
  class Sc {
    constructor(t) {
      this.view = t;
      let e = (this.query = t.state.field(hc).query.spec);
      function i(t, e, i) {
        return Mh(
          'button',
          { class: 'cm-button', name: t, onclick: e, type: 'button' },
          i
        );
      }
      (this.commit = this.commit.bind(this)),
        (this.searchField = Mh('input', {
          value: e.search,
          placeholder: $c(t, 'Find'),
          'aria-label': $c(t, 'Find'),
          class: 'cm-textfield',
          name: 'search',
          onchange: this.commit,
          onkeyup: this.commit,
        })),
        (this.replaceField = Mh('input', {
          value: e.replace,
          placeholder: $c(t, 'Replace'),
          'aria-label': $c(t, 'Replace'),
          class: 'cm-textfield',
          name: 'replace',
          onchange: this.commit,
          onkeyup: this.commit,
        })),
        (this.caseField = Mh('input', {
          type: 'checkbox',
          name: 'case',
          checked: e.caseSensitive,
          onchange: this.commit,
        })),
        (this.reField = Mh('input', {
          type: 'checkbox',
          name: 're',
          checked: e.regexp,
          onchange: this.commit,
        })),
        (this.dom = Mh(
          'div',
          { onkeydown: (t) => this.keydown(t), class: 'cm-search' },
          [
            this.searchField,
            i('next', () => pc(t), [$c(t, 'next')]),
            i('prev', () => mc(t), [$c(t, 'previous')]),
            i('select', () => gc(t), [$c(t, 'all')]),
            Mh('label', null, [this.caseField, $c(t, 'match case')]),
            Mh('label', null, [this.reField, $c(t, 'regexp')]),
            ...(t.state.readOnly
              ? []
              : [
                  Mh('br'),
                  this.replaceField,
                  i('replace', () => Qc(t), [$c(t, 'replace')]),
                  i('replaceAll', () => bc(t), [$c(t, 'replace all')]),
                  Mh(
                    'button',
                    {
                      name: 'close',
                      onclick: () => xc(t),
                      'aria-label': $c(t, 'close'),
                      type: 'button',
                    },
                    ['×']
                  ),
                ]),
          ]
        ));
    }
    commit() {
      let t = new nc({
        search: this.searchField.value,
        caseSensitive: this.caseField.checked,
        regexp: this.reField.checked,
        replace: this.replaceField.value,
      });
      t.eq(this.query) ||
        ((this.query = t), this.view.dispatch({ effects: ac.of(t) }));
    }
    keydown(t) {
      var e, i, n;
      (e = this.view),
        (i = t),
        (n = 'search-panel'),
        Yr(jr(e.state), i, e, n)
          ? t.preventDefault()
          : 13 == t.keyCode && t.target == this.searchField
          ? (t.preventDefault(), (t.shiftKey ? mc : pc)(this.view))
          : 13 == t.keyCode &&
            t.target == this.replaceField &&
            (t.preventDefault(), Qc(this.view));
    }
    update(t) {
      for (let e of t.transactions)
        for (let t of e.effects)
          t.is(ac) && !t.value.eq(this.query) && this.setQuery(t.value);
    }
    setQuery(t) {
      (this.query = t),
        (this.searchField.value = t.search),
        (this.replaceField.value = t.replace),
        (this.caseField.checked = t.caseSensitive),
        (this.reField.checked = t.regexp);
    }
    mount() {
      this.searchField.select();
    }
    get pos() {
      return 80;
    }
    get top() {
      return this.view.state.facet(ic).top;
    }
  }
  function $c(t, e) {
    return t.state.phrase(e);
  }
  const Tc = /[\s\.,:;?!]/;
  function Pc(t, { from: e, to: i }) {
    let n = t.state.doc.lineAt(e).from,
      r = t.state.doc.lineAt(i).to,
      s = Math.max(n, e - 30),
      o = Math.min(r, i + 30),
      a = t.state.sliceDoc(s, o);
    if (s != n)
      for (let t = 0; t < 30; t++)
        if (!Tc.test(a[t + 1]) && Tc.test(a[t])) {
          a = a.slice(t);
          break;
        }
    if (o != r)
      for (let t = a.length - 1; t > a.length - 30; t--)
        if (!Tc.test(a[t - 1]) && Tc.test(a[t])) {
          a = a.slice(0, t);
          break;
        }
    return Rr.announce.of(
      `${t.state.phrase('current match')}. ${a} ${t.state.phrase('on line')} ${
        t.state.doc.lineAt(e).number
      }`
    );
  }
  const Rc = Rr.baseTheme({
      '.cm-panel.cm-search': {
        padding: '2px 6px 4px',
        position: 'relative',
        '& [name=close]': {
          position: 'absolute',
          top: '0',
          right: '4px',
          backgroundColor: 'inherit',
          border: 'none',
          font: 'inherit',
          padding: 0,
          margin: 0,
        },
        '& input, & button, & label': { margin: '.2em .6em .2em 0' },
        '& input[type=checkbox]': { marginRight: '.2em' },
        '& label': { fontSize: '80%', whiteSpace: 'pre' },
      },
      '&light .cm-searchMatch': { backgroundColor: '#ffff0054' },
      '&dark .cm-searchMatch': { backgroundColor: '#00ffff8a' },
      '&light .cm-searchMatch-selected': { backgroundColor: '#ff6a0054' },
      '&dark .cm-searchMatch-selected': { backgroundColor: '#ff00ff8a' },
    }),
    Wc = [hc, H.lowest(fc), Rc],
    Cc =
      'undefined' != typeof navigator &&
      !/Edge\/(\d+)/.exec(navigator.userAgent) &&
      /Apple Computer/.test(navigator.vendor) &&
      (/Mobile\/\w+/.test(navigator.userAgent) || navigator.maxTouchPoints > 2),
    Ac = '-10000px';
  class Xc {
    constructor(t, e, i) {
      (this.facet = e),
        (this.createTooltipView = i),
        (this.input = t.state.facet(e)),
        (this.tooltips = this.input.filter((t) => t)),
        (this.tooltipViews = this.tooltips.map(i));
    }
    update(t) {
      let e = t.state.facet(this.facet),
        i = e.filter((t) => t);
      if (e === this.input) {
        for (let e of this.tooltipViews) e.update && e.update(t);
        return !1;
      }
      let n = [];
      for (let e = 0; e < i.length; e++) {
        let r = i[e],
          s = -1;
        if (r) {
          for (let t = 0; t < this.tooltips.length; t++) {
            let e = this.tooltips[t];
            e && e.create == r.create && (s = t);
          }
          if (s < 0) n[e] = this.createTooltipView(r);
          else {
            let i = (n[e] = this.tooltipViews[s]);
            i.update && i.update(t);
          }
        }
      }
      for (let t of this.tooltipViews) n.indexOf(t) < 0 && t.dom.remove();
      return (this.input = e), (this.tooltips = i), (this.tooltipViews = n), !0;
    }
  }
  function Zc() {
    return { top: 0, left: 0, bottom: innerHeight, right: innerWidth };
  }
  const Mc = D.define({
      combine: (t) => {
        var e, i, n;
        return {
          position: Cc
            ? 'absolute'
            : (null === (e = t.find((t) => t.position)) || void 0 === e
                ? void 0
                : e.position) || 'fixed',
          parent:
            (null === (i = t.find((t) => t.parent)) || void 0 === i
              ? void 0
              : i.parent) || null,
          tooltipSpace:
            (null === (n = t.find((t) => t.tooltipSpace)) || void 0 === n
              ? void 0
              : n.tooltipSpace) || Zc,
        };
      },
    }),
    _c = Ci.fromClass(
      class {
        constructor(t) {
          var e;
          (this.view = t),
            (this.inView = !0),
            (this.lastTransaction = 0),
            (this.measureTimeout = -1);
          let i = t.state.facet(Mc);
          (this.position = i.position),
            (this.parent = i.parent),
            (this.classes = t.themeClasses),
            this.createContainer(),
            (this.measureReq = {
              read: this.readMeasure.bind(this),
              write: this.writeMeasure.bind(this),
              key: this,
            }),
            (this.manager = new Xc(t, Ec, (t) => this.createTooltip(t))),
            (this.intersectionObserver =
              'function' == typeof IntersectionObserver
                ? new IntersectionObserver(
                    (t) => {
                      Date.now() > this.lastTransaction - 50 &&
                        t.length > 0 &&
                        t[t.length - 1].intersectionRatio < 1 &&
                        this.measureSoon();
                    },
                    { threshold: [1] }
                  )
                : null),
            this.observeIntersection(),
            null === (e = t.dom.ownerDocument.defaultView) ||
              void 0 === e ||
              e.addEventListener(
                'resize',
                (this.measureSoon = this.measureSoon.bind(this))
              ),
            this.maybeMeasure();
        }
        createContainer() {
          this.parent
            ? ((this.container = document.createElement('div')),
              (this.container.style.position = 'relative'),
              (this.container.className = this.view.themeClasses),
              this.parent.appendChild(this.container))
            : (this.container = this.view.dom);
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let t of this.manager.tooltipViews)
              this.intersectionObserver.observe(t.dom);
          }
        }
        measureSoon() {
          this.measureTimeout < 0 &&
            (this.measureTimeout = setTimeout(() => {
              (this.measureTimeout = -1), this.maybeMeasure();
            }, 50));
        }
        update(t) {
          t.transactions.length && (this.lastTransaction = Date.now());
          let e = this.manager.update(t);
          e && this.observeIntersection();
          let i = e || t.geometryChanged,
            n = t.state.facet(Mc);
          if (n.position != this.position) {
            this.position = n.position;
            for (let t of this.manager.tooltipViews)
              t.dom.style.position = this.position;
            i = !0;
          }
          if (n.parent != this.parent) {
            this.parent && this.container.remove(),
              (this.parent = n.parent),
              this.createContainer();
            for (let t of this.manager.tooltipViews)
              this.container.appendChild(t.dom);
            i = !0;
          } else
            this.parent &&
              this.view.themeClasses != this.classes &&
              (this.classes = this.container.className =
                this.view.themeClasses);
          i && this.maybeMeasure();
        }
        createTooltip(t) {
          let e = t.create(this.view);
          if (
            (e.dom.classList.add('cm-tooltip'),
            t.arrow && !e.dom.querySelector('.cm-tooltip > .cm-tooltip-arrow'))
          ) {
            let t = document.createElement('div');
            (t.className = 'cm-tooltip-arrow'), e.dom.appendChild(t);
          }
          return (
            (e.dom.style.position = this.position),
            (e.dom.style.top = Ac),
            this.container.appendChild(e.dom),
            e.mount && e.mount(this.view),
            e
          );
        }
        destroy() {
          var t, e;
          null === (t = this.view.dom.ownerDocument.defaultView) ||
            void 0 === t ||
            t.removeEventListener('resize', this.measureSoon);
          for (let { dom: t } of this.manager.tooltipViews) t.remove();
          null === (e = this.intersectionObserver) ||
            void 0 === e ||
            e.disconnect(),
            clearTimeout(this.measureTimeout);
        }
        readMeasure() {
          let t = this.view.dom.getBoundingClientRect();
          return {
            editor: t,
            parent: this.parent ? this.container.getBoundingClientRect() : t,
            pos: this.manager.tooltips.map((t) => this.view.coordsAtPos(t.pos)),
            size: this.manager.tooltipViews.map(({ dom: t }) =>
              t.getBoundingClientRect()
            ),
            space: this.view.state.facet(Mc).tooltipSpace(this.view),
          };
        }
        writeMeasure(t) {
          let { editor: e, space: i } = t,
            n = [];
          for (let r = 0; r < this.manager.tooltips.length; r++) {
            let s = this.manager.tooltips[r],
              o = this.manager.tooltipViews[r],
              { dom: a } = o,
              l = t.pos[r],
              h = t.size[r];
            if (
              !l ||
              l.bottom <= Math.max(e.top, i.top) ||
              l.top >= Math.min(e.bottom, i.bottom) ||
              l.right < Math.max(e.left, i.left) - 0.1 ||
              l.left > Math.min(e.right, i.right) + 0.1
            ) {
              a.style.top = Ac;
              continue;
            }
            let c = s.arrow ? o.dom.querySelector('.cm-tooltip-arrow') : null,
              u = c ? 7 : 0,
              d = h.right - h.left,
              f = h.bottom - h.top,
              O = o.offset || Dc,
              p = this.view.textDirection == zi.LTR,
              m =
                h.width > i.right - i.left
                  ? p
                    ? i.left
                    : i.right - h.width
                  : p
                  ? Math.min(l.left - (c ? 14 : 0) + O.x, i.right - d)
                  : Math.max(i.left, l.left - d + (c ? 14 : 0) - O.x),
              g = !!s.above;
            !s.strictSide &&
              (g
                ? l.top - (h.bottom - h.top) - O.y < i.top
                : l.bottom + (h.bottom - h.top) + O.y > i.bottom) &&
              g == i.bottom - l.bottom > l.top - i.top &&
              (g = !g);
            let Q = g ? l.top - f - u - O.y : l.bottom + u + O.y,
              b = m + d;
            if (!0 !== o.overlap)
              for (let t of n)
                t.left < b &&
                  t.right > m &&
                  t.top < Q + f &&
                  t.bottom > Q &&
                  (Q = g ? t.top - f - 2 - u : t.bottom + u + 2);
            'absolute' == this.position
              ? ((a.style.top = Q - t.parent.top + 'px'),
                (a.style.left = m - t.parent.left + 'px'))
              : ((a.style.top = Q + 'px'), (a.style.left = m + 'px')),
              c &&
                (c.style.left =
                  l.left + (p ? O.x : -O.x) - (m + 14 - 7) + 'px'),
              !0 !== o.overlap &&
                n.push({ left: m, top: Q, right: b, bottom: Q + f }),
              a.classList.toggle('cm-tooltip-above', g),
              a.classList.toggle('cm-tooltip-below', !g),
              o.positioned && o.positioned();
          }
        }
        maybeMeasure() {
          if (
            this.manager.tooltips.length &&
            (this.view.inView && this.view.requestMeasure(this.measureReq),
            this.inView != this.view.inView &&
              ((this.inView = this.view.inView), !this.inView))
          )
            for (let t of this.manager.tooltipViews) t.dom.style.top = Ac;
        }
      },
      {
        eventHandlers: {
          scroll() {
            this.maybeMeasure();
          },
        },
      }
    ),
    Lc = Rr.baseTheme({
      '.cm-tooltip': { zIndex: 100 },
      '&light .cm-tooltip': {
        border: '1px solid #bbb',
        backgroundColor: '#f5f5f5',
      },
      '&light .cm-tooltip-section:not(:first-child)': {
        borderTop: '1px solid #bbb',
      },
      '&dark .cm-tooltip': { backgroundColor: '#333338', color: 'white' },
      '.cm-tooltip-arrow': {
        height: '7px',
        width: '14px',
        position: 'absolute',
        zIndex: -1,
        overflow: 'hidden',
        '&:before, &:after': {
          content: "''",
          position: 'absolute',
          width: 0,
          height: 0,
          borderLeft: '7px solid transparent',
          borderRight: '7px solid transparent',
        },
        '.cm-tooltip-above &': {
          bottom: '-7px',
          '&:before': { borderTop: '7px solid #bbb' },
          '&:after': { borderTop: '7px solid #f5f5f5', bottom: '1px' },
        },
        '.cm-tooltip-below &': {
          top: '-7px',
          '&:before': { borderBottom: '7px solid #bbb' },
          '&:after': { borderBottom: '7px solid #f5f5f5', top: '1px' },
        },
      },
      '&dark .cm-tooltip .cm-tooltip-arrow': {
        '&:before': { borderTopColor: '#333338', borderBottomColor: '#333338' },
        '&:after': {
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent',
        },
      },
    }),
    Dc = { x: 0, y: 0 },
    Ec = D.define({ enables: [_c, Lc] }),
    zc = D.define();
  class qc {
    constructor(t) {
      (this.view = t),
        (this.mounted = !1),
        (this.dom = document.createElement('div')),
        this.dom.classList.add('cm-tooltip-hover'),
        (this.manager = new Xc(t, zc, (t) => this.createHostedView(t)));
    }
    static create(t) {
      return new qc(t);
    }
    createHostedView(t) {
      let e = t.create(this.view);
      return (
        e.dom.classList.add('cm-tooltip-section'),
        this.dom.appendChild(e.dom),
        this.mounted && e.mount && e.mount(this.view),
        e
      );
    }
    mount(t) {
      for (let e of this.manager.tooltipViews) e.mount && e.mount(t);
      this.mounted = !0;
    }
    positioned() {
      for (let t of this.manager.tooltipViews) t.positioned && t.positioned();
    }
    update(t) {
      this.manager.update(t);
    }
  }
  const jc = Ec.compute([zc], (t) => {
    let e = t.facet(zc).filter((t) => t);
    return 0 === e.length
      ? null
      : {
          pos: Math.min(...e.map((t) => t.pos)),
          end: Math.max(...e.filter((t) => null != t.end).map((t) => t.end)),
          create: qc.create,
          above: e[0].above,
          arrow: e.some((t) => t.arrow),
        };
  });
  class Vc {
    constructor(t, e, i, n, r) {
      (this.view = t),
        (this.source = e),
        (this.field = i),
        (this.setHover = n),
        (this.hoverTime = r),
        (this.hoverTimeout = -1),
        (this.restartTimeout = -1),
        (this.pending = null),
        (this.lastMove = { x: 0, y: 0, target: t.dom, time: 0 }),
        (this.checkHover = this.checkHover.bind(this)),
        t.dom.addEventListener(
          'mouseleave',
          (this.mouseleave = this.mouseleave.bind(this))
        ),
        t.dom.addEventListener(
          'mousemove',
          (this.mousemove = this.mousemove.bind(this))
        );
    }
    update() {
      this.pending &&
        ((this.pending = null),
        clearTimeout(this.restartTimeout),
        (this.restartTimeout = setTimeout(() => this.startHover(), 20)));
    }
    get active() {
      return this.view.state.field(this.field);
    }
    checkHover() {
      if (((this.hoverTimeout = -1), this.active)) return;
      let t = Date.now() - this.lastMove.time;
      t < this.hoverTime
        ? (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - t))
        : this.startHover();
    }
    startHover() {
      var t;
      clearTimeout(this.restartTimeout);
      let { lastMove: e } = this,
        i = this.view.contentDOM.contains(e.target)
          ? this.view.posAtCoords(e)
          : null;
      if (null == i) return;
      let n = this.view.coordsAtPos(i);
      if (
        null == n ||
        e.y < n.top ||
        e.y > n.bottom ||
        e.x < n.left - this.view.defaultCharacterWidth ||
        e.x > n.right + this.view.defaultCharacterWidth
      )
        return;
      let r = this.view
          .bidiSpans(this.view.state.doc.lineAt(i))
          .find((t) => t.from <= i && t.to >= i),
        s = r && r.dir == zi.RTL ? -1 : 1,
        o = this.source(this.view, i, e.x < n.left ? -s : s);
      if (null === (t = o) || void 0 === t ? void 0 : t.then) {
        let t = (this.pending = { pos: i });
        o.then(
          (e) => {
            this.pending == t &&
              ((this.pending = null),
              e && this.view.dispatch({ effects: this.setHover.of(e) }));
          },
          (t) => Si(this.view.state, t, 'hover tooltip')
        );
      } else o && this.view.dispatch({ effects: this.setHover.of(o) });
    }
    mousemove(t) {
      var e;
      (this.lastMove = {
        x: t.clientX,
        y: t.clientY,
        target: t.target,
        time: Date.now(),
      }),
        this.hoverTimeout < 0 &&
          (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
      let i = this.active;
      if (
        (i &&
          !(function (t) {
            for (let e = t; e; e = e.parentNode)
              if (1 == e.nodeType && e.classList.contains('cm-tooltip'))
                return !0;
            return !1;
          })(this.lastMove.target)) ||
        this.pending
      ) {
        let { pos: n } = i || this.pending,
          r = null !== (e = null == i ? void 0 : i.end) && void 0 !== e ? e : n;
        (n == r
          ? this.view.posAtCoords(this.lastMove) == n
          : (function (t, e, i, n, r, s) {
              let o = document.createRange(),
                a = t.domAtPos(e),
                l = t.domAtPos(i);
              o.setEnd(l.node, l.offset), o.setStart(a.node, a.offset);
              let h = o.getClientRects();
              o.detach();
              for (let t = 0; t < h.length; t++) {
                let e = h[t];
                if (
                  Math.max(e.top - r, r - e.bottom, e.left - n, n - e.right) <=
                  s
                )
                  return !0;
              }
              return !1;
            })(this.view, n, r, t.clientX, t.clientY, 6)) ||
          (this.view.dispatch({ effects: this.setHover.of(null) }),
          (this.pending = null));
      }
    }
    mouseleave() {
      clearTimeout(this.hoverTimeout),
        (this.hoverTimeout = -1),
        this.active && this.view.dispatch({ effects: this.setHover.of(null) });
    }
    destroy() {
      clearTimeout(this.hoverTimeout),
        this.view.dom.removeEventListener('mouseleave', this.mouseleave),
        this.view.dom.removeEventListener('mousemove', this.mousemove);
    }
  }
  function Yc(t, e = {}) {
    let i = Ot.define(),
      n = Y.define({
        create: () => null,
        update(t, n) {
          if (t && e.hideOnChange && (n.docChanged || n.selection)) return null;
          for (let t of n.effects) {
            if (t.is(i)) return t.value;
            if (t.is(Uc)) return null;
          }
          if (t && n.docChanged) {
            let e = n.changes.mapPos(t.pos, -1, k.TrackDel);
            if (null == e) return null;
            let i = Object.assign(Object.create(null), t);
            return (
              (i.pos = e), null != t.end && (i.end = n.changes.mapPos(t.end)), i
            );
          }
          return t;
        },
        provide: (t) => zc.from(t),
      });
    return [n, Ci.define((r) => new Vc(r, t, n, i, e.hoverTime || 300)), jc];
  }
  const Uc = Ot.define();
  class Gc {
    constructor(t, e, i) {
      (this.state = t),
        (this.pos = e),
        (this.explicit = i),
        (this.abortListeners = []);
    }
    tokenBefore(t) {
      let e = Xo(this.state).resolveInner(this.pos, -1);
      for (; e && t.indexOf(e.name) < 0; ) e = e.parent;
      return e
        ? {
            from: e.from,
            to: this.pos,
            text: this.state.sliceDoc(e.from, this.pos),
            type: e.type,
          }
        : null;
    }
    matchBefore(t) {
      let e = this.state.doc.lineAt(this.pos),
        i = Math.max(e.from, this.pos - 250),
        n = e.text.slice(i - e.from, this.pos - e.from),
        r = n.search(Hc(t, !1));
      return r < 0 ? null : { from: i + r, to: this.pos, text: n.slice(r) };
    }
    get aborted() {
      return null == this.abortListeners;
    }
    addEventListener(t, e) {
      'abort' == t && this.abortListeners && this.abortListeners.push(e);
    }
  }
  function Ic(t) {
    let e = Object.keys(t).join(''),
      i = /\w/.test(e);
    return (
      i && (e = e.replace(/\w/g, '')),
      `[${i ? '\\w' : ''}${e.replace(/[^\w\s]/g, '\\$&')}]`
    );
  }
  function Nc(t) {
    let e = t.map((t) => ('string' == typeof t ? { label: t } : t)),
      [i, n] = e.every((t) => /^\w+$/.test(t.label))
        ? [/\w*$/, /\w+$/]
        : (function (t) {
            let e = Object.create(null),
              i = Object.create(null);
            for (let { label: n } of t) {
              e[n[0]] = !0;
              for (let t = 1; t < n.length; t++) i[n[t]] = !0;
            }
            let n = Ic(e) + Ic(i) + '*$';
            return [new RegExp('^' + n), new RegExp(n)];
          })(e);
    return (t) => {
      let r = t.matchBefore(n);
      return r || t.explicit
        ? { from: r ? r.from : t.pos, options: e, span: i }
        : null;
    };
  }
  class Bc {
    constructor(t, e, i) {
      (this.completion = t), (this.source = e), (this.match = i);
    }
  }
  function Fc(t) {
    return t.selection.main.head;
  }
  function Hc(t, e) {
    var i;
    let { source: n } = t,
      r = e && '^' != n[0],
      s = '$' != n[n.length - 1];
    return r || s
      ? new RegExp(
          `${r ? '^' : ''}(?:${n})${s ? '$' : ''}`,
          null !== (i = t.flags) && void 0 !== i ? i : t.ignoreCase ? 'i' : ''
        )
      : t;
  }
  const Jc = ut.define();
  function Kc(t, e) {
    let i = e.completion.apply || e.completion.label,
      n = e.source;
    'string' == typeof i
      ? t.dispatch({
          changes: { from: n.from, to: n.to, insert: i },
          selection: { anchor: n.from + i.length },
          userEvent: 'input.complete',
          annotations: Jc.of(e.completion),
        })
      : i(t, e.completion, n.from, n.to);
  }
  const tu = new WeakMap();
  function eu(t) {
    if (!Array.isArray(t)) return t;
    let e = tu.get(t);
    return e || tu.set(t, (e = Nc(t))), e;
  }
  class iu {
    constructor(t) {
      (this.pattern = t),
        (this.chars = []),
        (this.folded = []),
        (this.any = []),
        (this.precise = []),
        (this.byWord = []);
      for (let e = 0; e < t.length; ) {
        let i = h(t, e),
          n = u(i);
        this.chars.push(i);
        let r = t.slice(e, e + n),
          s = r.toUpperCase();
        this.folded.push(h(s == r ? r.toLowerCase() : s, 0)), (e += n);
      }
      this.astral = t.length != this.chars.length;
    }
    match(t) {
      if (0 == this.pattern.length) return [0];
      if (t.length < this.pattern.length) return null;
      let { chars: e, folded: i, any: n, precise: r, byWord: s } = this;
      if (1 == e.length) {
        let n = h(t, 0);
        return n == e[0] ? [0, 0, u(n)] : n == i[0] ? [-200, 0, u(n)] : null;
      }
      let o = t.indexOf(this.pattern);
      if (0 == o) return [0, 0, this.pattern.length];
      let a = e.length,
        l = 0;
      if (o < 0) {
        for (let r = 0, s = Math.min(t.length, 200); r < s && l < a; ) {
          let s = h(t, r);
          (s != e[l] && s != i[l]) || (n[l++] = r), (r += u(s));
        }
        if (l < a) return null;
      }
      let d = 0,
        f = 0,
        O = !1,
        p = 0,
        m = -1,
        g = -1,
        Q = /[a-z]/.test(t),
        b = !0;
      for (let n = 0, l = Math.min(t.length, 200), v = 0; n < l && f < a; ) {
        let l = h(t, n);
        o < 0 &&
          (d < a && l == e[d] && (r[d++] = n),
          p < a &&
            (l == e[p] || l == i[p]
              ? (0 == p && (m = n), (g = n + 1), p++)
              : (p = 0)));
        let y,
          w =
            l < 255
              ? (l >= 48 && l <= 57) || (l >= 97 && l <= 122)
                ? 2
                : l >= 65 && l <= 90
                ? 1
                : 0
              : (y = c(l)) != y.toLowerCase()
              ? 1
              : y != y.toUpperCase()
              ? 2
              : 0;
        (!n || (1 == w && Q) || (0 == v && 0 != w)) &&
          (e[f] == l || (i[f] == l && (O = !0))
            ? (s[f++] = n)
            : s.length && (b = !1)),
          (v = w),
          (n += u(l));
      }
      return f == a && 0 == s[0] && b
        ? this.result((O ? -200 : 0) - 100, s, t)
        : p == a && 0 == m
        ? [-200 - t.length, 0, g]
        : o > -1
        ? [-700 - t.length, o, o + this.pattern.length]
        : p == a
        ? [-900 - t.length, m, g]
        : f == a
        ? this.result((O ? -200 : 0) - 100 - 700 + (b ? 0 : -1100), s, t)
        : 2 == e.length
        ? null
        : this.result((n[0] ? -700 : 0) - 200 - 1100, n, t);
    }
    result(t, e, i) {
      let n = [t - i.length],
        r = 1;
      for (let t of e) {
        let e = t + (this.astral ? u(h(i, t)) : 1);
        r > 1 && n[r - 1] == t ? (n[r - 1] = e) : ((n[r++] = t), (n[r++] = e));
      }
      return n;
    }
  }
  const nu = D.define({
    combine: (t) =>
      Tt(
        t,
        {
          activateOnTyping: !0,
          override: null,
          maxRenderedOptions: 100,
          defaultKeymap: !0,
          optionClass: () => '',
          aboveCursor: !1,
          icons: !0,
          addToOptions: [],
        },
        {
          defaultKeymap: (t, e) => t && e,
          icons: (t, e) => t && e,
          optionClass: (t, e) => (i) =>
            (function (t, e) {
              return t ? (e ? t + ' ' + e : t) : e;
            })(t(i), e(i)),
          addToOptions: (t, e) => t.concat(e),
        }
      ),
  });
  function ru(t, e, i) {
    if (t <= i) return { from: 0, to: t };
    if (e <= t >> 1) {
      let t = Math.floor(e / i);
      return { from: t * i, to: (t + 1) * i };
    }
    let n = Math.floor((t - e) / i);
    return { from: t - (n + 1) * i, to: t - n * i };
  }
  class su {
    constructor(t, e) {
      (this.view = t),
        (this.stateField = e),
        (this.info = null),
        (this.placeInfo = {
          read: () => this.measureInfo(),
          write: (t) => this.positionInfo(t),
          key: this,
        });
      let i = t.state.field(e),
        { options: n, selected: r } = i.open,
        s = t.state.facet(nu);
      (this.optionContent = (function (t) {
        let e = t.addToOptions.slice();
        return (
          t.icons &&
            e.push({
              render(t) {
                let e = document.createElement('div');
                return (
                  e.classList.add('cm-completionIcon'),
                  t.type &&
                    e.classList.add(
                      ...t.type
                        .split(/\s+/g)
                        .map((t) => 'cm-completionIcon-' + t)
                    ),
                  e.setAttribute('aria-hidden', 'true'),
                  e
                );
              },
              position: 20,
            }),
          e.push(
            {
              render(t, e, i) {
                let n = document.createElement('span');
                n.className = 'cm-completionLabel';
                let { label: r } = t,
                  s = 0;
                for (let t = 1; t < i.length; ) {
                  let e = i[t++],
                    o = i[t++];
                  e > s &&
                    n.appendChild(document.createTextNode(r.slice(s, e)));
                  let a = n.appendChild(document.createElement('span'));
                  a.appendChild(document.createTextNode(r.slice(e, o))),
                    (a.className = 'cm-completionMatchedText'),
                    (s = o);
                }
                return (
                  s < r.length &&
                    n.appendChild(document.createTextNode(r.slice(s))),
                  n
                );
              },
              position: 50,
            },
            {
              render(t) {
                if (!t.detail) return null;
                let e = document.createElement('span');
                return (
                  (e.className = 'cm-completionDetail'),
                  (e.textContent = t.detail),
                  e
                );
              },
              position: 80,
            }
          ),
          e.sort((t, e) => t.position - e.position).map((t) => t.render)
        );
      })(s)),
        (this.optionClass = s.optionClass),
        (this.range = ru(n.length, r, s.maxRenderedOptions)),
        (this.dom = document.createElement('div')),
        (this.dom.className = 'cm-tooltip-autocomplete'),
        this.dom.addEventListener('mousedown', (e) => {
          for (let i, r = e.target; r && r != this.dom; r = r.parentNode)
            if (
              'LI' == r.nodeName &&
              (i = /-(\d+)$/.exec(r.id)) &&
              +i[1] < n.length
            )
              return Kc(t, n[+i[1]]), void e.preventDefault();
        }),
        (this.list = this.dom.appendChild(
          this.createListBox(n, i.id, this.range)
        )),
        this.list.addEventListener('scroll', () => {
          this.info && this.view.requestMeasure(this.placeInfo);
        });
    }
    mount() {
      this.updateSel();
    }
    update(t) {
      t.state.field(this.stateField) != t.startState.field(this.stateField) &&
        this.updateSel();
    }
    positioned() {
      this.info && this.view.requestMeasure(this.placeInfo);
    }
    updateSel() {
      let t = this.view.state.field(this.stateField),
        e = t.open;
      if (
        ((e.selected < this.range.from || e.selected >= this.range.to) &&
          ((this.range = ru(
            e.options.length,
            e.selected,
            this.view.state.facet(nu).maxRenderedOptions
          )),
          this.list.remove(),
          (this.list = this.dom.appendChild(
            this.createListBox(e.options, t.id, this.range)
          )),
          this.list.addEventListener('scroll', () => {
            this.info && this.view.requestMeasure(this.placeInfo);
          })),
        this.updateSelectedOption(e.selected))
      ) {
        this.info && (this.info.remove(), (this.info = null));
        let t = e.options[e.selected];
        t.completion.info &&
          ((this.info = this.dom.appendChild(
            (function (t, e) {
              let i = document.createElement('div');
              i.className = 'cm-tooltip cm-completionInfo';
              let { info: n } = t.completion;
              if ('string' == typeof n) i.textContent = n;
              else {
                let r = n(t.completion);
                r.then
                  ? r.then(
                      (t) => i.appendChild(t),
                      (t) => Si(e.state, t, 'completion info')
                    )
                  : i.appendChild(r);
              }
              return i;
            })(t, this.view)
          )),
          this.view.requestMeasure(this.placeInfo));
      }
    }
    updateSelectedOption(t) {
      let e = null;
      for (
        let i = this.list.firstChild, n = this.range.from;
        i;
        i = i.nextSibling, n++
      )
        n == t
          ? i.hasAttribute('aria-selected') ||
            (i.setAttribute('aria-selected', 'true'), (e = i))
          : i.hasAttribute('aria-selected') &&
            i.removeAttribute('aria-selected');
      return (
        e &&
          (function (t, e) {
            let i = t.getBoundingClientRect(),
              n = e.getBoundingClientRect();
            n.top < i.top
              ? (t.scrollTop -= i.top - n.top)
              : n.bottom > i.bottom && (t.scrollTop += n.bottom - i.bottom);
          })(this.list, e),
        e
      );
    }
    measureInfo() {
      let t = this.dom.querySelector('[aria-selected]');
      if (!t || !this.info) return null;
      let e = this.dom.getBoundingClientRect(),
        i = this.info.getBoundingClientRect(),
        n = t.getBoundingClientRect();
      if (
        n.top > Math.min(innerHeight, e.bottom) - 10 ||
        n.bottom < Math.max(0, e.top) + 10
      )
        return null;
      let r = Math.max(0, Math.min(n.top, innerHeight - i.height)) - e.top,
        s = this.view.textDirection == zi.RTL,
        o = e.left,
        a = innerWidth - e.right;
      return (
        s && o < Math.min(i.width, a)
          ? (s = !1)
          : !s && a < Math.min(i.width, o) && (s = !0),
        { top: r, left: s }
      );
    }
    positionInfo(t) {
      this.info &&
        ((this.info.style.top = (t ? t.top : -1e6) + 'px'),
        t &&
          (this.info.classList.toggle('cm-completionInfo-left', t.left),
          this.info.classList.toggle('cm-completionInfo-right', !t.left)));
    }
    createListBox(t, e, i) {
      const n = document.createElement('ul');
      (n.id = e), n.setAttribute('role', 'listbox');
      for (let r = i.from; r < i.to; r++) {
        let { completion: i, match: s } = t[r];
        const o = n.appendChild(document.createElement('li'));
        (o.id = e + '-' + r), o.setAttribute('role', 'option');
        let a = this.optionClass(i);
        a && (o.className = a);
        for (let t of this.optionContent) {
          let e = t(i, this.view.state, s);
          e && o.appendChild(e);
        }
      }
      return (
        i.from && n.classList.add('cm-completionListIncompleteTop'),
        i.to < t.length && n.classList.add('cm-completionListIncompleteBottom'),
        n
      );
    }
  }
  function ou(t) {
    return (
      100 * (t.boost || 0) +
      (t.apply ? 10 : 0) +
      (t.info ? 5 : 0) +
      (t.type ? 1 : 0)
    );
  }
  class au {
    constructor(t, e, i, n, r) {
      (this.options = t),
        (this.attrs = e),
        (this.tooltip = i),
        (this.timestamp = n),
        (this.selected = r);
    }
    setSelected(t, e) {
      return t == this.selected || t >= this.options.length
        ? this
        : new au(this.options, cu(e, t), this.tooltip, this.timestamp, t);
    }
    static build(t, e, i, n, r) {
      let s = (function (t, e) {
        let i = [],
          n = 0;
        for (let r of t)
          if (r.hasResult())
            if (!1 === r.result.filter)
              for (let t of r.result.options) i.push(new Bc(t, r, [1e9 - n++]));
            else {
              let t,
                n = new iu(e.sliceDoc(r.from, r.to));
              for (let e of r.result.options)
                (t = n.match(e.label)) &&
                  (null != e.boost && (t[0] += e.boost),
                  i.push(new Bc(e, r, t)));
            }
        i.sort(du);
        let r = [],
          s = null;
        for (let t of i.sort(du)) {
          if (300 == r.length) break;
          s &&
          s.label == t.completion.label &&
          s.detail == t.completion.detail &&
          s.type == t.completion.type &&
          s.apply == t.completion.apply
            ? ou(t.completion) > ou(s) && (r[r.length - 1] = t)
            : r.push(t),
            (s = t.completion);
        }
        return r;
      })(t, e);
      if (!s.length) return null;
      let o = 0;
      if (n && n.selected) {
        let t = n.options[n.selected].completion;
        for (let e = 0; e < s.length && !o; e++)
          s[e].completion == t && (o = e);
      }
      return new au(
        s,
        cu(i, o),
        {
          pos: t.reduce(
            (t, e) => (e.hasResult() ? Math.min(t, e.from) : t),
            1e8
          ),
          create: ((a = vu), (t) => new su(t, a)),
          above: r.aboveCursor,
        },
        n ? n.timestamp : Date.now(),
        o
      );
      var a;
    }
    map(t) {
      return new au(
        this.options,
        this.attrs,
        Object.assign(Object.assign({}, this.tooltip), {
          pos: t.mapPos(this.tooltip.pos),
        }),
        this.timestamp,
        this.selected
      );
    }
  }
  class lu {
    constructor(t, e, i) {
      (this.active = t), (this.id = e), (this.open = i);
    }
    static start() {
      return new lu(
        uu,
        'cm-ac-' + Math.floor(2e6 * Math.random()).toString(36),
        null
      );
    }
    update(t) {
      let { state: e } = t,
        i = e.facet(nu),
        n = (i.override || e.languageDataAt('autocomplete', Fc(e)).map(eu)).map(
          (e) => {
            let n =
              this.active.find((t) => t.source == e) ||
              new Ou(e, this.active.some((t) => 0 != t.state) ? 1 : 0);
            return n.update(t, i);
          }
        );
      n.length == this.active.length &&
        n.every((t, e) => t == this.active[e]) &&
        (n = this.active);
      let r =
        t.selection ||
        n.some((e) => e.hasResult() && t.changes.touchesRange(e.from, e.to)) ||
        !(function (t, e) {
          if (t == e) return !0;
          for (let i = 0, n = 0; ; ) {
            for (; i < t.length && !t[i].hasResult; ) i++;
            for (; n < e.length && !e[n].hasResult; ) n++;
            let r = i == t.length,
              s = n == e.length;
            if (r || s) return r == s;
            if (t[i++].result != e[n++].result) return !1;
          }
        })(n, this.active)
          ? au.build(n, e, this.id, this.open, i)
          : this.open && t.docChanged
          ? this.open.map(t.changes)
          : this.open;
      !r &&
        n.every((t) => 1 != t.state) &&
        n.some((t) => t.hasResult()) &&
        (n = n.map((t) => (t.hasResult() ? new Ou(t.source, 0) : t)));
      for (let e of t.effects)
        e.is(bu) && (r = r && r.setSelected(e.value, this.id));
      return n == this.active && r == this.open ? this : new lu(n, this.id, r);
    }
    get tooltip() {
      return this.open ? this.open.tooltip : null;
    }
    get attrs() {
      return this.open ? this.open.attrs : hu;
    }
  }
  const hu = { 'aria-autocomplete': 'list', 'aria-expanded': 'false' };
  function cu(t, e) {
    return {
      'aria-autocomplete': 'list',
      'aria-expanded': 'true',
      'aria-activedescendant': t + '-' + e,
      'aria-controls': t,
    };
  }
  const uu = [];
  function du(t, e) {
    let i = e.match[0] - t.match[0];
    return i || t.completion.label.localeCompare(e.completion.label);
  }
  function fu(t) {
    return t.isUserEvent('input.type')
      ? 'input'
      : t.isUserEvent('delete.backward')
      ? 'delete'
      : null;
  }
  class Ou {
    constructor(t, e, i = -1) {
      (this.source = t), (this.state = e), (this.explicitPos = i);
    }
    hasResult() {
      return !1;
    }
    update(t, e) {
      let i = fu(t),
        n = this;
      i
        ? (n = n.handleUserEvent(t, i, e))
        : t.docChanged
        ? (n = n.handleChange(t))
        : t.selection && 0 != n.state && (n = new Ou(n.source, 0));
      for (let e of t.effects)
        if (e.is(mu)) n = new Ou(n.source, 1, e.value ? Fc(t.state) : -1);
        else if (e.is(gu)) n = new Ou(n.source, 0);
        else if (e.is(Qu))
          for (let t of e.value) t.source == n.source && (n = t);
      return n;
    }
    handleUserEvent(t, e, i) {
      return 'delete' != e && i.activateOnTyping
        ? new Ou(this.source, 1)
        : this.map(t.changes);
    }
    handleChange(t) {
      return t.changes.touchesRange(Fc(t.startState))
        ? new Ou(this.source, 0)
        : this.map(t.changes);
    }
    map(t) {
      return t.empty || this.explicitPos < 0
        ? this
        : new Ou(this.source, this.state, t.mapPos(this.explicitPos));
    }
  }
  class pu extends Ou {
    constructor(t, e, i, n, r, s) {
      super(t, 2, e),
        (this.result = i),
        (this.from = n),
        (this.to = r),
        (this.span = s);
    }
    hasResult() {
      return !0;
    }
    handleUserEvent(t, e, i) {
      let n = t.changes.mapPos(this.from),
        r = t.changes.mapPos(this.to, 1),
        s = Fc(t.state);
      if (
        (this.explicitPos < 0 ? s <= n : s < this.from) ||
        s > r ||
        ('delete' == e && Fc(t.startState) == this.from)
      )
        return new Ou(this.source, 'input' == e && i.activateOnTyping ? 1 : 0);
      let o = this.explicitPos < 0 ? -1 : t.changes.mapPos(this.explicitPos);
      return this.span && (n == r || this.span.test(t.state.sliceDoc(n, r)))
        ? new pu(this.source, o, this.result, n, r, this.span)
        : new Ou(this.source, 1, o);
    }
    handleChange(t) {
      return t.changes.touchesRange(this.from, this.to)
        ? new Ou(this.source, 0)
        : this.map(t.changes);
    }
    map(t) {
      return t.empty
        ? this
        : new pu(
            this.source,
            this.explicitPos < 0 ? -1 : t.mapPos(this.explicitPos),
            this.result,
            t.mapPos(this.from),
            t.mapPos(this.to, 1),
            this.span
          );
    }
  }
  const mu = Ot.define(),
    gu = Ot.define(),
    Qu = Ot.define({ map: (t, e) => t.map((t) => t.map(e)) }),
    bu = Ot.define(),
    vu = Y.define({
      create: () => lu.start(),
      update: (t, e) => t.update(e),
      provide: (t) => [
        Ec.from(t, (t) => t.tooltip),
        Rr.contentAttributes.from(t, (t) => t.attrs),
      ],
    });
  function yu(t, e = 'option') {
    return (i) => {
      let n = i.state.field(vu, !1);
      if (!n || !n.open || Date.now() - n.open.timestamp < 75) return !1;
      let r,
        s = 1;
      'page' == e &&
        (r = (function (t, e) {
          let i = t.plugin(_c);
          if (!i) return null;
          let n = i.manager.tooltips.indexOf(e);
          return n < 0 ? null : i.manager.tooltipViews[n];
        })(i, n.open.tooltip)) &&
        (s = Math.max(
          2,
          Math.floor(
            r.dom.offsetHeight / r.dom.querySelector('li').offsetHeight
          ) - 1
        ));
      let o = n.open.selected + s * (t ? 1 : -1),
        { length: a } = n.open.options;
      return (
        o < 0
          ? (o = 'page' == e ? 0 : a - 1)
          : o >= a && (o = 'page' == e ? a - 1 : 0),
        i.dispatch({ effects: bu.of(o) }),
        !0
      );
    };
  }
  class wu {
    constructor(t, e) {
      (this.active = t),
        (this.context = e),
        (this.time = Date.now()),
        (this.updates = []),
        (this.done = void 0);
    }
  }
  const xu = Ci.fromClass(
      class {
        constructor(t) {
          (this.view = t),
            (this.debounceUpdate = -1),
            (this.running = []),
            (this.debounceAccept = -1),
            (this.composing = 0);
          for (let e of t.state.field(vu).active)
            1 == e.state && this.startQuery(e);
        }
        update(t) {
          let e = t.state.field(vu);
          if (!t.selectionSet && !t.docChanged && t.startState.field(vu) == e)
            return;
          let i = t.transactions.some(
            (t) => (t.selection || t.docChanged) && !fu(t)
          );
          for (let e = 0; e < this.running.length; e++) {
            let n = this.running[e];
            if (
              i ||
              (n.updates.length + t.transactions.length > 50 &&
                n.time - Date.now() > 1e3)
            ) {
              for (let t of n.context.abortListeners)
                try {
                  t();
                } catch (t) {
                  Si(this.view.state, t);
                }
              (n.context.abortListeners = null), this.running.splice(e--, 1);
            } else n.updates.push(...t.transactions);
          }
          if (
            (this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate),
            (this.debounceUpdate = e.active.some(
              (t) =>
                1 == t.state &&
                !this.running.some((e) => e.active.source == t.source)
            )
              ? setTimeout(() => this.startUpdate(), 50)
              : -1),
            0 != this.composing)
          )
            for (let e of t.transactions)
              'input' == fu(e)
                ? (this.composing = 2)
                : 2 == this.composing && e.selection && (this.composing = 3);
        }
        startUpdate() {
          this.debounceUpdate = -1;
          let { state: t } = this.view,
            e = t.field(vu);
          for (let t of e.active)
            1 != t.state ||
              this.running.some((e) => e.active.source == t.source) ||
              this.startQuery(t);
        }
        startQuery(t) {
          let { state: e } = this.view,
            i = Fc(e),
            n = new Gc(e, i, t.explicitPos == i),
            r = new wu(t, n);
          this.running.push(r),
            Promise.resolve(t.source(n)).then(
              (t) => {
                r.context.aborted ||
                  ((r.done = t || null), this.scheduleAccept());
              },
              (t) => {
                this.view.dispatch({ effects: gu.of(null) }),
                  Si(this.view.state, t);
              }
            );
        }
        scheduleAccept() {
          this.running.every((t) => void 0 !== t.done)
            ? this.accept()
            : this.debounceAccept < 0 &&
              (this.debounceAccept = setTimeout(() => this.accept(), 50));
        }
        accept() {
          var t;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept),
            (this.debounceAccept = -1);
          let e = [],
            i = this.view.state.facet(nu);
          for (let n = 0; n < this.running.length; n++) {
            let r = this.running[n];
            if (void 0 === r.done) continue;
            if ((this.running.splice(n--, 1), r.done)) {
              let n = new pu(
                r.active.source,
                r.active.explicitPos,
                r.done,
                r.done.from,
                null !== (t = r.done.to) && void 0 !== t
                  ? t
                  : Fc(
                      r.updates.length
                        ? r.updates[0].startState
                        : this.view.state
                    ),
                r.done.span && !1 !== r.done.filter ? Hc(r.done.span, !0) : null
              );
              for (let t of r.updates) n = n.update(t, i);
              if (n.hasResult()) {
                e.push(n);
                continue;
              }
            }
            let s = this.view.state
              .field(vu)
              .active.find((t) => t.source == r.active.source);
            if (s && 1 == s.state)
              if (null == r.done) {
                let t = new Ou(r.active.source, 0);
                for (let e of r.updates) t = t.update(e, i);
                1 != t.state && e.push(t);
              } else this.startQuery(s);
          }
          e.length && this.view.dispatch({ effects: Qu.of(e) });
        }
      },
      {
        eventHandlers: {
          compositionstart() {
            this.composing = 1;
          },
          compositionend() {
            3 == this.composing &&
              setTimeout(() => this.view.dispatch({ effects: mu.of(!1) }), 20),
              (this.composing = 0);
          },
        },
      }
    ),
    ku = Rr.baseTheme({
      '.cm-tooltip.cm-tooltip-autocomplete': {
        '& > ul': {
          fontFamily: 'monospace',
          whiteSpace: 'nowrap',
          overflow: 'hidden auto',
          maxWidth_fallback: '700px',
          maxWidth: 'min(700px, 95vw)',
          minWidth: '250px',
          maxHeight: '10em',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          '& > li': {
            overflowX: 'hidden',
            textOverflow: 'ellipsis',
            cursor: 'pointer',
            padding: '1px 3px',
            lineHeight: 1.2,
          },
        },
      },
      '&light .cm-tooltip-autocomplete ul li[aria-selected]': {
        background: '#17c',
        color: 'white',
      },
      '&dark .cm-tooltip-autocomplete ul li[aria-selected]': {
        background: '#347',
        color: 'white',
      },
      '.cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after':
        {
          content: '"···"',
          opacity: 0.5,
          display: 'block',
          textAlign: 'center',
        },
      '.cm-tooltip.cm-completionInfo': {
        position: 'absolute',
        padding: '3px 9px',
        width: 'max-content',
        maxWidth: '300px',
      },
      '.cm-completionInfo.cm-completionInfo-left': { right: '100%' },
      '.cm-completionInfo.cm-completionInfo-right': { left: '100%' },
      '&light .cm-snippetField': { backgroundColor: '#00000022' },
      '&dark .cm-snippetField': { backgroundColor: '#ffffff22' },
      '.cm-snippetFieldPosition': {
        verticalAlign: 'text-top',
        width: 0,
        height: '1.15em',
        margin: '0 -0.7px -.7em',
        borderLeft: '1.4px dotted #888',
      },
      '.cm-completionMatchedText': { textDecoration: 'underline' },
      '.cm-completionDetail': { marginLeft: '0.5em', fontStyle: 'italic' },
      '.cm-completionIcon': {
        fontSize: '90%',
        width: '.8em',
        display: 'inline-block',
        textAlign: 'center',
        paddingRight: '.6em',
        opacity: '0.6',
      },
      '.cm-completionIcon-function, .cm-completionIcon-method': {
        '&:after': { content: "'ƒ'" },
      },
      '.cm-completionIcon-class': { '&:after': { content: "'○'" } },
      '.cm-completionIcon-interface': { '&:after': { content: "'◌'" } },
      '.cm-completionIcon-variable': { '&:after': { content: "'𝑥'" } },
      '.cm-completionIcon-constant': { '&:after': { content: "'𝐶'" } },
      '.cm-completionIcon-type': { '&:after': { content: "'𝑡'" } },
      '.cm-completionIcon-enum': { '&:after': { content: "'∪'" } },
      '.cm-completionIcon-property': { '&:after': { content: "'□'" } },
      '.cm-completionIcon-keyword': { '&:after': { content: "'🔑︎'" } },
      '.cm-completionIcon-namespace': { '&:after': { content: "'▢'" } },
      '.cm-completionIcon-text': {
        '&:after': {
          content: "'abc'",
          fontSize: '50%',
          verticalAlign: 'middle',
        },
      },
    });
  class Su {
    constructor(t, e, i, n) {
      (this.field = t), (this.line = e), (this.from = i), (this.to = n);
    }
  }
  class $u {
    constructor(t, e, i) {
      (this.field = t), (this.from = e), (this.to = i);
    }
    map(t) {
      let e = t.mapPos(this.from, -1, k.TrackDel),
        i = t.mapPos(this.to, 1, k.TrackDel);
      return null == e || null == i ? null : new $u(this.field, e, i);
    }
  }
  class Tu {
    constructor(t, e) {
      (this.lines = t), (this.fieldPositions = e);
    }
    instantiate(t, e) {
      let i = [],
        n = [e],
        r = t.doc.lineAt(e),
        s = /^\s*/.exec(r.text)[0];
      for (let r of this.lines) {
        if (i.length) {
          let i = s,
            o = /^\t*/.exec(r)[0].length;
          for (let e = 0; e < o; e++) i += t.facet(Yo);
          n.push(e + i.length - o), (r = i + r.slice(o));
        }
        i.push(r), (e += r.length + 1);
      }
      let o = this.fieldPositions.map(
        (t) => new $u(t.field, n[t.line] + t.from, n[t.line] + t.to)
      );
      return { text: i, ranges: o };
    }
    static parse(t) {
      let e,
        i = [],
        n = [],
        r = [];
      for (let s of t.split(/\r\n?|\n/)) {
        for (; (e = /[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(s)); ) {
          let t = e[1] ? +e[1] : null,
            o = e[2] || e[3] || '',
            a = -1;
          for (let e = 0; e < i.length; e++)
            (null != t ? i[e].seq == t : o && i[e].name == o) && (a = e);
          if (a < 0) {
            let e = 0;
            for (
              ;
              e < i.length && (null == t || (null != i[e].seq && i[e].seq < t));

            )
              e++;
            i.splice(e, 0, { seq: t, name: o }), (a = e);
            for (let t of r) t.field >= a && t.field++;
          }
          r.push(new Su(a, n.length, e.index, e.index + o.length)),
            (s = s.slice(0, e.index) + o + s.slice(e.index + e[0].length));
        }
        n.push(s);
      }
      return new Tu(n, r);
    }
  }
  let Pu = ni.widget({
      widget: new (class extends ei {
        toDOM() {
          let t = document.createElement('span');
          return (t.className = 'cm-snippetFieldPosition'), t;
        }
        ignoreEvent() {
          return !1;
        }
      })(),
    }),
    Ru = ni.mark({ class: 'cm-snippetField' });
  class Wu {
    constructor(t, e) {
      (this.ranges = t),
        (this.active = e),
        (this.deco = ni.set(
          t.map((t) => (t.from == t.to ? Pu : Ru).range(t.from, t.to))
        ));
    }
    map(t) {
      let e = [];
      for (let i of this.ranges) {
        let n = i.map(t);
        if (!n) return null;
        e.push(n);
      }
      return new Wu(e, this.active);
    }
    selectionInsideField(t) {
      return t.ranges.every((t) =>
        this.ranges.some(
          (e) => e.field == this.active && e.from <= t.from && e.to >= t.to
        )
      );
    }
  }
  const Cu = Ot.define({ map: (t, e) => t && t.map(e) }),
    Au = Ot.define(),
    Xu = Y.define({
      create: () => null,
      update(t, e) {
        for (let i of e.effects) {
          if (i.is(Cu)) return i.value;
          if (i.is(Au) && t) return new Wu(t.ranges, i.value);
        }
        return (
          t && e.docChanged && (t = t.map(e.changes)),
          t &&
            e.selection &&
            !t.selectionInsideField(e.selection) &&
            (t = null),
          t
        );
      },
      provide: (t) => Rr.decorations.from(t, (t) => (t ? t.deco : ni.none)),
    });
  function Zu(t, e) {
    return Z.create(
      t.filter((t) => t.field == e).map((t) => Z.range(t.from, t.to))
    );
  }
  function Mu(t) {
    let e = Tu.parse(t);
    return (t, i, n, r) => {
      let { text: s, ranges: o } = e.instantiate(t.state, n),
        a = { changes: { from: n, to: r, insert: O.of(s) } };
      if ((o.length && (a.selection = Zu(o, 0)), o.length > 1)) {
        let e = new Wu(o, 0),
          i = (a.effects = [Cu.of(e)]);
        void 0 === t.state.field(Xu, !1) &&
          i.push(Ot.appendConfig.of([Xu, Eu, qu, ku]));
      }
      t.dispatch(t.state.update(a));
    };
  }
  function _u(t) {
    return ({ state: e, dispatch: i }) => {
      let n = e.field(Xu, !1);
      if (!n || (t < 0 && 0 == n.active)) return !1;
      let r = n.active + t,
        s = t > 0 && !n.ranges.some((e) => e.field == r + t);
      return (
        i(
          e.update({
            selection: Zu(n.ranges, r),
            effects: Cu.of(s ? null : new Wu(n.ranges, r)),
          })
        ),
        !0
      );
    };
  }
  const Lu = [
      { key: 'Tab', run: _u(1), shift: _u(-1) },
      {
        key: 'Escape',
        run: ({ state: t, dispatch: e }) =>
          !!t.field(Xu, !1) && (e(t.update({ effects: Cu.of(null) })), !0),
      },
    ],
    Du = D.define({ combine: (t) => (t.length ? t[0] : Lu) }),
    Eu = H.highest(zr.compute([Du], (t) => t.facet(Du)));
  function zu(t, e) {
    return Object.assign(Object.assign({}, e), { apply: Mu(t) });
  }
  const qu = Rr.domEventHandlers({
    mousedown(t, e) {
      let i,
        n = e.state.field(Xu, !1);
      if (!n || null == (i = e.posAtCoords({ x: t.clientX, y: t.clientY })))
        return !1;
      let r = n.ranges.find((t) => t.from <= i && t.to >= i);
      return (
        !(!r || r.field == n.active) &&
        (e.dispatch({
          selection: Zu(n.ranges, r.field),
          effects: Cu.of(
            n.ranges.some((t) => t.field > r.field)
              ? new Wu(n.ranges, r.field)
              : null
          ),
        }),
        !0)
      );
    },
  });
  function ju(t = {}) {
    return [vu, nu.of(t), xu, Yu, ku];
  }
  const Vu = [
      {
        key: 'Ctrl-Space',
        run: (t) =>
          !!t.state.field(vu, !1) && (t.dispatch({ effects: mu.of(!0) }), !0),
      },
      {
        key: 'Escape',
        run: (t) => {
          let e = t.state.field(vu, !1);
          return (
            !(!e || !e.active.some((t) => 0 != t.state)) &&
            (t.dispatch({ effects: gu.of(null) }), !0)
          );
        },
      },
      { key: 'ArrowDown', run: yu(!0) },
      { key: 'ArrowUp', run: yu(!1) },
      { key: 'PageDown', run: yu(!0, 'page') },
      { key: 'PageUp', run: yu(!1, 'page') },
      {
        key: 'Enter',
        run: (t) => {
          let e = t.state.field(vu, !1);
          return (
            !(
              t.state.readOnly ||
              !e ||
              !e.open ||
              Date.now() - e.open.timestamp < 75
            ) && (Kc(t, e.open.options[e.open.selected]), !0)
          );
        },
      },
    ],
    Yu = H.highest(
      zr.computeN([nu], (t) => (t.facet(nu).defaultKeymap ? [Vu] : []))
    );
  function Uu(t, e) {
    return ({ state: i, dispatch: n }) => {
      if (i.readOnly) return !1;
      let r = t(e, i);
      return !!r && (n(i.update(r)), !0);
    };
  }
  const Gu = Uu(Ju, 0),
    Iu = Uu(Hu, 0),
    Nu = Uu(
      (t, e) =>
        Hu(
          t,
          e,
          (function (t) {
            let e = [];
            for (let i of t.selection.ranges) {
              let n = t.doc.lineAt(i.from),
                r = i.to <= n.to ? n : t.doc.lineAt(i.to),
                s = e.length - 1;
              s >= 0 && e[s].to > n.from
                ? (e[s].to = r.to)
                : e.push({ from: n.from, to: r.to });
            }
            return e;
          })(e)
        ),
      0
    ),
    Bu = [
      {
        key: 'Mod-/',
        run: (t) => {
          let e = Fu(t.state);
          return e.line ? Gu(t) : !!e.block && Nu(t);
        },
      },
      { key: 'Alt-A', run: Iu },
    ];
  function Fu(t, e = t.selection.main.head) {
    let i = t.languageDataAt('commentTokens', e);
    return i.length ? i[0] : {};
  }
  function Hu(t, e, i = e.selection.ranges) {
    let n = i.map((t) => Fu(e, t.from).block);
    if (!n.every((t) => t)) return null;
    let r = i.map((t, i) =>
      (function (t, { open: e, close: i }, n, r) {
        let s,
          o,
          a = t.sliceDoc(n - 50, n),
          l = t.sliceDoc(r, r + 50),
          h = /\s*$/.exec(a)[0].length,
          c = /^\s*/.exec(l)[0].length,
          u = a.length - h;
        if (a.slice(u - e.length, u) == e && l.slice(c, c + i.length) == i)
          return {
            open: { pos: n - h, margin: h && 1 },
            close: { pos: r + c, margin: c && 1 },
          };
        r - n <= 100
          ? (s = o = t.sliceDoc(n, r))
          : ((s = t.sliceDoc(n, n + 50)), (o = t.sliceDoc(r - 50, r)));
        let d = /^\s*/.exec(s)[0].length,
          f = /\s*$/.exec(o)[0].length,
          O = o.length - f - i.length;
        return s.slice(d, d + e.length) == e && o.slice(O, O + i.length) == i
          ? {
              open: {
                pos: n + d + e.length,
                margin: /\s/.test(s.charAt(d + e.length)) ? 1 : 0,
              },
              close: {
                pos: r - f - i.length,
                margin: /\s/.test(o.charAt(O - 1)) ? 1 : 0,
              },
            }
          : null;
      })(e, n[i], t.from, t.to)
    );
    if (2 != t && !r.every((t) => t))
      return {
        changes: e.changes(
          i.map((t, e) =>
            r[e]
              ? []
              : [
                  { from: t.from, insert: n[e].open + ' ' },
                  { from: t.to, insert: ' ' + n[e].close },
                ]
          )
        ),
      };
    if (1 != t && r.some((t) => t)) {
      let t = [];
      for (let e, i = 0; i < r.length; i++)
        if ((e = r[i])) {
          let r = n[i],
            { open: s, close: o } = e;
          t.push(
            { from: s.pos - r.open.length, to: s.pos + s.margin },
            { from: o.pos - o.margin, to: o.pos + r.close.length }
          );
        }
      return { changes: t };
    }
    return null;
  }
  function Ju(t, e, i = e.selection.ranges) {
    let n = [],
      r = -1;
    for (let { from: t, to: s } of i) {
      let i = n.length,
        o = 1e9;
      for (let i = t; i <= s; ) {
        let a = e.doc.lineAt(i);
        if (a.from > r && (t == s || s > a.from)) {
          r = a.from;
          let t = Fu(e, i).line;
          if (!t) continue;
          let s = /^\s*/.exec(a.text)[0].length,
            l = s == a.length,
            h = a.text.slice(s, s + t.length) == t ? s : -1;
          s < a.text.length && s < o && (o = s),
            n.push({
              line: a,
              comment: h,
              token: t,
              indent: s,
              empty: l,
              single: !1,
            });
        }
        i = a.to + 1;
      }
      if (o < 1e9)
        for (let t = i; t < n.length; t++)
          n[t].indent < n[t].line.text.length && (n[t].indent = o);
      n.length == i + 1 && (n[i].single = !0);
    }
    if (2 != t && n.some((t) => t.comment < 0 && (!t.empty || t.single))) {
      let t = [];
      for (let { line: e, token: i, indent: r, empty: s, single: o } of n)
        (!o && s) || t.push({ from: e.from + r, insert: i + ' ' });
      let i = e.changes(t);
      return { changes: i, selection: e.selection.map(i, 1) };
    }
    if (1 != t && n.some((t) => t.comment >= 0)) {
      let t = [];
      for (let { line: e, comment: i, token: r } of n)
        if (i >= 0) {
          let n = e.from + i,
            s = n + r.length;
          ' ' == e.text[s - e.from] && s++, t.push({ from: n, to: s });
        }
      return { changes: t };
    }
    return null;
  }
  const Ku = 2e3;
  function td(t, e) {
    let i = t.posAtCoords({ x: e.clientX, y: e.clientY }, !1),
      n = t.state.doc.lineAt(i),
      r = i - n.from,
      s =
        r > Ku
          ? -1
          : r == n.length
          ? (function (t, e) {
              let i = t.coordsAtPos(t.viewport.from);
              return i
                ? Math.round(Math.abs((i.left - e) / t.defaultCharacterWidth))
                : -1;
            })(t, e.clientX)
          : d(n.text, t.state.tabSize, i - n.from);
    return { line: n.number, col: s, off: r };
  }
  function ed(t, e) {
    let i = td(t, e),
      n = t.state.selection;
    return i
      ? {
          update(t) {
            if (t.docChanged) {
              let e = t.changes.mapPos(t.startState.doc.line(i.line).from),
                r = t.state.doc.lineAt(e);
              (i = {
                line: r.number,
                col: i.col,
                off: Math.min(i.off, r.length),
              }),
                (n = n.map(t.changes));
            }
          },
          get(e, r, s) {
            let o = td(t, e);
            if (!o) return n;
            let a = (function (t, e, i) {
              let n = Math.min(e.line, i.line),
                r = Math.max(e.line, i.line),
                s = [];
              if (e.off > Ku || i.off > Ku || e.col < 0 || i.col < 0) {
                let o = Math.min(e.off, i.off),
                  a = Math.max(e.off, i.off);
                for (let e = n; e <= r; e++) {
                  let i = t.doc.line(e);
                  i.length <= a && s.push(Z.range(i.from + o, i.to + a));
                }
              } else {
                let o = Math.min(e.col, i.col),
                  a = Math.max(e.col, i.col);
                for (let e = n; e <= r; e++) {
                  let i = t.doc.line(e),
                    n = f(i.text, o, t.tabSize, !0);
                  if (n > -1) {
                    let e = f(i.text, a, t.tabSize);
                    s.push(Z.range(i.from + n, i.from + e));
                  }
                }
              }
              return s;
            })(t.state, i, o);
            return a.length
              ? s
                ? Z.create(a.concat(n.ranges))
                : Z.create(a)
              : n;
          },
        }
      : null;
  }
  function id(t) {
    let e =
      (null == t ? void 0 : t.eventFilter) ||
      ((t) => t.altKey && 0 == t.button);
    return Rr.mouseSelectionStyle.of((t, i) => (e(i) ? ed(t, i) : null));
  }
  let nd = 0;
  class rd {
    constructor(t, e, i) {
      (this.set = t), (this.base = e), (this.modified = i), (this.id = nd++);
    }
    static define(t) {
      if (null == t ? void 0 : t.base)
        throw new Error('Can not derive from a modified tag');
      let e = new rd([], null, []);
      if ((e.set.push(e), t)) for (let i of t.set) e.set.push(i);
      return e;
    }
    static defineModifier() {
      let t = new od();
      return (e) =>
        e.modified.indexOf(t) > -1
          ? e
          : od.get(
              e.base || e,
              e.modified.concat(t).sort((t, e) => t.id - e.id)
            );
    }
  }
  let sd = 0;
  class od {
    constructor() {
      (this.instances = []), (this.id = sd++);
    }
    static get(t, e) {
      if (!e.length) return t;
      let i = e[0].instances.find(
        (i) =>
          i.base == t &&
          (function (t, e) {
            return t.length == e.length && t.every((t, i) => t == e[i]);
          })(e, i.modified)
      );
      if (i) return i;
      let n = [],
        r = new rd(n, t, e);
      for (let t of e) t.instances.push(r);
      let s = ad(e);
      for (let e of t.set) for (let t of s) n.push(od.get(e, t));
      return r;
    }
  }
  function ad(t) {
    let e = [t];
    for (let i = 0; i < t.length; i++)
      for (let n of ad(t.slice(0, i).concat(t.slice(i + 1)))) e.push(n);
    return e;
  }
  function ld(t) {
    let e = Object.create(null);
    for (let i in t) {
      let n = t[i];
      Array.isArray(n) || (n = [n]);
      for (let t of i.split(' '))
        if (t) {
          let i = [],
            r = 2,
            s = t;
          for (let e = 0; ; ) {
            if ('...' == s && e > 0 && e + 3 == t.length) {
              r = 1;
              break;
            }
            let n = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(s);
            if (!n) throw new RangeError('Invalid path: ' + t);
            if (
              (i.push(
                '*' == n[0] ? null : '"' == n[0][0] ? JSON.parse(n[0]) : n[0]
              ),
              (e += n[0].length),
              e == t.length)
            )
              break;
            let o = t[e++];
            if (e == t.length && '!' == o) {
              r = 0;
              break;
            }
            if ('/' != o) throw new RangeError('Invalid path: ' + t);
            s = t.slice(e);
          }
          let o = i.length - 1,
            a = i[o];
          if (!a) throw new RangeError('Invalid path: ' + t);
          let l = new fd(n, r, o > 0 ? i.slice(0, o) : null);
          e[a] = l.sort(e[a]);
        }
    }
    return hd.add(e);
  }
  const hd = new Us(),
    cd = D.define({ combine: (t) => (t.length ? Od.combinedMatch(t) : null) }),
    ud = D.define({ combine: (t) => (t.length ? t[0].match : null) });
  function dd(t) {
    return t.facet(cd) || t.facet(ud);
  }
  class fd {
    constructor(t, e, i, n) {
      (this.tags = t), (this.mode = e), (this.context = i), (this.next = n);
    }
    sort(t) {
      return !t || t.depth < this.depth
        ? ((this.next = t), this)
        : ((t.next = this.sort(t.next)), t);
    }
    get depth() {
      return this.context ? this.context.length : 0;
    }
  }
  class Od {
    constructor(t, e) {
      let i;
      function n(t) {
        let e = Ct.newName();
        return ((i || (i = Object.create(null)))['.' + e] = t), e;
      }
      (this.map = Object.create(null)),
        (this.all = 'string' == typeof e.all ? e.all : e.all ? n(e.all) : null);
      for (let e of t) {
        let t =
            (e.class || n(Object.assign({}, e, { tag: null }))) +
            (this.all ? ' ' + this.all : ''),
          i = e.tag;
        if (Array.isArray(i)) for (let e of i) this.map[e.id] = t;
        else this.map[i.id] = t;
      }
      (this.module = i ? new Ct(i) : null),
        (this.scope = e.scope || null),
        (this.match = this.match.bind(this));
      let r = [md];
      this.module && r.push(Rr.styleModule.of(this.module)),
        (this.extension = r.concat(cd.of(this))),
        (this.fallback = r.concat(ud.of(this)));
    }
    match(t, e) {
      if (this.scope && e != this.scope) return null;
      for (let e of t.set) {
        let i = this.map[e.id];
        if (void 0 !== i) return e != t && (this.map[t.id] = i), i;
      }
      return (this.map[t.id] = this.all);
    }
    static combinedMatch(t) {
      if (1 == t.length) return t[0].match;
      let e = t.some((t) => t.scope) ? void 0 : Object.create(null);
      return (i, n) => {
        let r = e && e[i.id];
        if (void 0 !== r) return r;
        let s = null;
        for (let e of t) {
          let t = e.match(i, n);
          t && (s = s ? s + ' ' + t : t);
        }
        return e && (e[i.id] = s), s;
      };
    }
    static define(t, e) {
      return new Od(t, e || {});
    }
    static get(t, e, i) {
      let n = dd(t);
      return n && n(e, i || Ns.none);
    }
  }
  class pd {
    constructor(t) {
      (this.markCache = Object.create(null)),
        (this.tree = Xo(t.state)),
        (this.decorations = this.buildDeco(t, dd(t.state)));
    }
    update(t) {
      let e = Xo(t.state),
        i = dd(t.state),
        n = i != t.startState.facet(cd);
      e.length < t.view.viewport.to && !n && e.type == this.tree.type
        ? (this.decorations = this.decorations.map(t.changes))
        : (e != this.tree || t.viewportChanged || n) &&
          ((this.tree = e), (this.decorations = this.buildDeco(t.view, i)));
    }
    buildDeco(t, e) {
      if (!e || !this.tree.length) return ni.none;
      let i = new Et();
      for (let { from: n, to: r } of t.visibleRanges)
        bd(this.tree, n, r, e, (t, e, n) => {
          i.add(
            t,
            e,
            this.markCache[n] || (this.markCache[n] = ni.mark({ class: n }))
          );
        });
      return i.finish();
    }
  }
  const md = H.high(Ci.fromClass(pd, { decorations: (t) => t.decorations })),
    gd = [''];
  class Qd {
    constructor(t, e, i) {
      (this.at = t), (this.style = e), (this.span = i), (this.class = '');
    }
    startSpan(t, e) {
      e != this.class &&
        (this.flush(t), t > this.at && (this.at = t), (this.class = e));
    }
    flush(t) {
      t > this.at && this.class && this.span(this.at, t, this.class);
    }
    highlightRange(t, e, i, n, r, s) {
      let { type: o, from: a, to: l } = t;
      if (a >= i || l <= e) return;
      (gd[r] = o.name), o.isTop && (s = o);
      let h = n,
        c = o.prop(hd),
        u = !1;
      for (; c; ) {
        if (!c.context || vd(c.context, gd, r)) {
          for (let t of c.tags) {
            let e = this.style(t, s);
            e &&
              (h && (h += ' '),
              (h += e),
              1 == c.mode
                ? (n += (n ? ' ' : '') + e)
                : 0 == c.mode && (u = !0));
          }
          break;
        }
        c = c.next;
      }
      if ((this.startSpan(t.from, h), u)) return;
      let d = t.tree && t.tree.prop(Us.mounted);
      if (d && d.overlay) {
        let o = t.node.enter(d.overlay[0].from + a, 1),
          c = t.firstChild();
        for (let u = 0, f = a; ; u++) {
          let O = u < d.overlay.length ? d.overlay[u] : null,
            p = O ? O.from + a : l,
            m = Math.max(e, f),
            g = Math.min(i, p);
          if (m < g && c)
            for (
              ;
              t.from < g &&
              (this.highlightRange(t, m, g, n, r + 1, s),
              this.startSpan(Math.min(i, t.to), h),
              !(t.to >= p) && t.nextSibling());

            );
          if (!O || p > i) break;
          (f = O.to + a),
            f > e &&
              (this.highlightRange(
                o.cursor,
                Math.max(e, O.from + a),
                Math.min(i, f),
                n,
                r,
                d.tree.type
              ),
              this.startSpan(f, h));
        }
        c && t.parent();
      } else if (t.firstChild()) {
        do {
          if (!(t.to <= e)) {
            if (t.from >= i) break;
            this.highlightRange(t, e, i, n, r + 1, s),
              this.startSpan(Math.min(i, t.to), h);
          }
        } while (t.nextSibling());
        t.parent();
      }
    }
  }
  function bd(t, e, i, n, r) {
    let s = new Qd(e, n, r);
    s.highlightRange(t.cursor(), e, i, '', 0, t.type), s.flush(i);
  }
  function vd(t, e, i) {
    if (t.length > i - 1) return !1;
    for (let n = i - 1, r = t.length - 1; r >= 0; r--, n--) {
      let i = t[r];
      if (i && i != e[n]) return !1;
    }
    return !0;
  }
  const yd = rd.define,
    wd = yd(),
    xd = yd(),
    kd = yd(xd),
    Sd = yd(xd),
    $d = yd(),
    Td = yd($d),
    Pd = yd($d),
    Rd = yd(),
    Wd = yd(Rd),
    Cd = yd(),
    Ad = yd(),
    Xd = yd(),
    Zd = yd(Xd),
    Md = yd(),
    _d = {
      comment: wd,
      lineComment: yd(wd),
      blockComment: yd(wd),
      docComment: yd(wd),
      name: xd,
      variableName: yd(xd),
      typeName: kd,
      tagName: yd(kd),
      propertyName: Sd,
      attributeName: yd(Sd),
      className: yd(xd),
      labelName: yd(xd),
      namespace: yd(xd),
      macroName: yd(xd),
      literal: $d,
      string: Td,
      docString: yd(Td),
      character: yd(Td),
      attributeValue: yd(Td),
      number: Pd,
      integer: yd(Pd),
      float: yd(Pd),
      bool: yd($d),
      regexp: yd($d),
      escape: yd($d),
      color: yd($d),
      url: yd($d),
      keyword: Cd,
      self: yd(Cd),
      null: yd(Cd),
      atom: yd(Cd),
      unit: yd(Cd),
      modifier: yd(Cd),
      operatorKeyword: yd(Cd),
      controlKeyword: yd(Cd),
      definitionKeyword: yd(Cd),
      moduleKeyword: yd(Cd),
      operator: Ad,
      derefOperator: yd(Ad),
      arithmeticOperator: yd(Ad),
      logicOperator: yd(Ad),
      bitwiseOperator: yd(Ad),
      compareOperator: yd(Ad),
      updateOperator: yd(Ad),
      definitionOperator: yd(Ad),
      typeOperator: yd(Ad),
      controlOperator: yd(Ad),
      punctuation: Xd,
      separator: yd(Xd),
      bracket: Zd,
      angleBracket: yd(Zd),
      squareBracket: yd(Zd),
      paren: yd(Zd),
      brace: yd(Zd),
      content: Rd,
      heading: Wd,
      heading1: yd(Wd),
      heading2: yd(Wd),
      heading3: yd(Wd),
      heading4: yd(Wd),
      heading5: yd(Wd),
      heading6: yd(Wd),
      contentSeparator: yd(Rd),
      list: yd(Rd),
      quote: yd(Rd),
      emphasis: yd(Rd),
      strong: yd(Rd),
      link: yd(Rd),
      monospace: yd(Rd),
      strikethrough: yd(Rd),
      inserted: yd(),
      deleted: yd(),
      changed: yd(),
      invalid: yd(),
      meta: Md,
      documentMeta: yd(Md),
      annotation: yd(Md),
      processingInstruction: yd(Md),
      definition: rd.defineModifier(),
      constant: rd.defineModifier(),
      function: rd.defineModifier(),
      standard: rd.defineModifier(),
      local: rd.defineModifier(),
      special: rd.defineModifier(),
    },
    Ld = Od.define([
      { tag: _d.link, textDecoration: 'underline' },
      { tag: _d.heading, textDecoration: 'underline', fontWeight: 'bold' },
      { tag: _d.emphasis, fontStyle: 'italic' },
      { tag: _d.strong, fontWeight: 'bold' },
      { tag: _d.strikethrough, textDecoration: 'line-through' },
      { tag: _d.keyword, color: '#708' },
      {
        tag: [_d.atom, _d.bool, _d.url, _d.contentSeparator, _d.labelName],
        color: '#219',
      },
      { tag: [_d.literal, _d.inserted], color: '#164' },
      { tag: [_d.string, _d.deleted], color: '#a11' },
      { tag: [_d.regexp, _d.escape, _d.special(_d.string)], color: '#e40' },
      { tag: _d.definition(_d.variableName), color: '#00f' },
      { tag: _d.local(_d.variableName), color: '#30a' },
      { tag: [_d.typeName, _d.namespace], color: '#085' },
      { tag: _d.className, color: '#167' },
      { tag: [_d.special(_d.variableName), _d.macroName], color: '#256' },
      { tag: _d.definition(_d.propertyName), color: '#00c' },
      { tag: _d.comment, color: '#940' },
      { tag: _d.meta, color: '#7a757a' },
      { tag: _d.invalid, color: '#f00' },
    ]);
  class Dd {
    constructor(t, e, i) {
      (this.from = t), (this.to = e), (this.diagnostic = i);
    }
  }
  class Ed {
    constructor(t, e, i) {
      (this.diagnostics = t), (this.panel = e), (this.selected = i);
    }
    static init(t, e, i) {
      let n = ni.set(
        t.map((t) =>
          t.from == t.to ||
          (t.from == t.to - 1 && i.doc.lineAt(t.from).to == t.from)
            ? ni.widget({ widget: new Jd(t), diagnostic: t }).range(t.from)
            : ni
                .mark({
                  attributes: {
                    class: 'cm-lintRange cm-lintRange-' + t.severity,
                  },
                  diagnostic: t,
                })
                .range(t.from, t.to)
        ),
        !0
      );
      return new Ed(n, e, zd(n));
    }
  }
  function zd(t, e = null, i = 0) {
    let n = null;
    return (
      t.between(i, 1e9, (t, i, { spec: r }) => {
        if (!e || r.diagnostic == e)
          return (n = new Dd(t, i, r.diagnostic)), !1;
      }),
      n
    );
  }
  const qd = Ot.define(),
    jd = Ot.define(),
    Vd = Ot.define(),
    Yd = Y.define({
      create: () => new Ed(ni.none, null, null),
      update(t, e) {
        if (e.docChanged) {
          let i = t.diagnostics.map(e.changes),
            n = null;
          if (t.selected) {
            let r = e.changes.mapPos(t.selected.from, 1);
            n = zd(i, t.selected.diagnostic, r) || zd(i, null, r);
          }
          t = new Ed(i, t.panel, n);
        }
        for (let i of e.effects)
          i.is(qd)
            ? (t = Ed.init(i.value, t.panel, e.state))
            : i.is(jd)
            ? (t = new Ed(t.diagnostics, i.value ? tf.open : null, t.selected))
            : i.is(Vd) && (t = new Ed(t.diagnostics, t.panel, i.value));
        return t;
      },
      provide: (t) => [
        Zh.from(t, (t) => t.panel),
        Rr.decorations.from(t, (t) => t.diagnostics),
      ],
    }),
    Ud = ni.mark({ class: 'cm-lintRange cm-lintRange-active' });
  function Gd(t, e, i) {
    let { diagnostics: n } = t.state.field(Yd),
      r = [],
      s = 2e8,
      o = 0;
    return (
      n.between(
        e - (i < 0 ? 1 : 0),
        e + (i > 0 ? 1 : 0),
        (t, n, { spec: a }) => {
          e >= t &&
            e <= n &&
            (t == n || ((e > t || i > 0) && (e < n || i < 0))) &&
            (r.push(a.diagnostic), (s = Math.min(t, s)), (o = Math.max(n, o)));
        }
      ),
      r.length
        ? {
            pos: s,
            end: o,
            above: t.state.doc.lineAt(s).to < o,
            create: () => ({ dom: Id(t, r) }),
          }
        : null
    );
  }
  function Id(t, e) {
    return Mh(
      'ul',
      { class: 'cm-tooltip-lint' },
      e.map((e) => Hd(t, e, !1))
    );
  }
  const Nd = (t) => {
      let e = t.state.field(Yd, !1);
      return !(!e || !e.panel) && (t.dispatch({ effects: jd.of(!1) }), !0);
    },
    Bd = [
      {
        key: 'Mod-Shift-m',
        run: (t) => {
          let e = t.state.field(Yd, !1);
          var i, n;
          (e && e.panel) ||
            t.dispatch({
              effects:
                ((i = t.state),
                (n = [jd.of(!0)]),
                i.field(Yd, !1)
                  ? n
                  : n.concat(
                      Ot.appendConfig.of([
                        Yd,
                        Rr.decorations.compute([Yd], (t) => {
                          let { selected: e, panel: i } = t.field(Yd);
                          return e && i && e.from != e.to
                            ? ni.set([Ud.range(e.from, e.to)])
                            : ni.none;
                        }),
                        Yc(Gd),
                        nf,
                      ])
                    )),
            });
          let r = Rh(t, tf.open);
          return r && r.dom.querySelector('.cm-panel-lint ul').focus(), !0;
        },
      },
      {
        key: 'F8',
        run: (t) => {
          let e = t.state.field(Yd, !1);
          if (!e) return !1;
          let i = t.state.selection.main,
            n = e.diagnostics.iter(i.to + 1);
          return (
            !(
              !n.value &&
              ((n = e.diagnostics.iter(0)),
              !n.value || (n.from == i.from && n.to == i.to))
            ) &&
            (t.dispatch({
              selection: { anchor: n.from, head: n.to },
              scrollIntoView: !0,
            }),
            !0)
          );
        },
      },
    ];
  function Fd(t) {
    let e = [];
    if (t)
      t: for (let { name: i } of t) {
        for (let t = 0; t < i.length; t++) {
          let n = i[t];
          if (
            /[a-zA-Z]/.test(n) &&
            !e.some((t) => t.toLowerCase() == n.toLowerCase())
          ) {
            e.push(n);
            continue t;
          }
        }
        e.push('');
      }
    return e;
  }
  function Hd(t, e, i) {
    var n;
    let r = i ? Fd(e.actions) : [];
    return Mh(
      'li',
      { class: 'cm-diagnostic cm-diagnostic-' + e.severity },
      Mh('span', { class: 'cm-diagnosticText' }, e.message),
      null === (n = e.actions) || void 0 === n
        ? void 0
        : n.map((i, n) => {
            let s = (n) => {
                n.preventDefault();
                let r = zd(t.state.field(Yd).diagnostics, e);
                r && i.apply(t, r.from, r.to);
              },
              { name: o } = i,
              a = r[n] ? o.indexOf(r[n]) : -1,
              l =
                a < 0
                  ? o
                  : [o.slice(0, a), Mh('u', o.slice(a, a + 1)), o.slice(a + 1)];
            return Mh(
              'button',
              {
                type: 'button',
                class: 'cm-diagnosticAction',
                onclick: s,
                onmousedown: s,
                'aria-label': ` Action: ${o}${
                  a < 0 ? '' : ` (access key "${r[n]})"`
                }.`,
              },
              l
            );
          }),
      e.source && Mh('div', { class: 'cm-diagnosticSource' }, e.source)
    );
  }
  class Jd extends ei {
    constructor(t) {
      super(), (this.diagnostic = t);
    }
    eq(t) {
      return t.diagnostic == this.diagnostic;
    }
    toDOM() {
      return Mh('span', {
        class: 'cm-lintPoint cm-lintPoint-' + this.diagnostic.severity,
      });
    }
  }
  class Kd {
    constructor(t, e) {
      (this.diagnostic = e),
        (this.id =
          'item_' + Math.floor(4294967295 * Math.random()).toString(16)),
        (this.dom = Hd(t, e, !0)),
        (this.dom.id = this.id),
        this.dom.setAttribute('role', 'option');
    }
  }
  class tf {
    constructor(t) {
      (this.view = t), (this.items = []);
      (this.list = Mh('ul', {
        tabIndex: 0,
        role: 'listbox',
        'aria-label': this.view.state.phrase('Diagnostics'),
        onkeydown: (e) => {
          if (27 == e.keyCode) Nd(this.view), this.view.focus();
          else if (38 == e.keyCode || 33 == e.keyCode)
            this.moveSelection(
              (this.selectedIndex - 1 + this.items.length) % this.items.length
            );
          else if (40 == e.keyCode || 34 == e.keyCode)
            this.moveSelection((this.selectedIndex + 1) % this.items.length);
          else if (36 == e.keyCode) this.moveSelection(0);
          else if (35 == e.keyCode) this.moveSelection(this.items.length - 1);
          else if (13 == e.keyCode) this.view.focus();
          else {
            if (
              !(e.keyCode >= 65 && e.keyCode <= 90 && this.selectedIndex >= 0)
            )
              return;
            {
              let { diagnostic: i } = this.items[this.selectedIndex],
                n = Fd(i.actions);
              for (let r = 0; r < n.length; r++)
                if (n[r].toUpperCase().charCodeAt(0) == e.keyCode) {
                  let e = zd(this.view.state.field(Yd).diagnostics, i);
                  e && i.actions[r].apply(t, e.from, e.to);
                }
            }
          }
          e.preventDefault();
        },
        onclick: (t) => {
          for (let e = 0; e < this.items.length; e++)
            this.items[e].dom.contains(t.target) && this.moveSelection(e);
        },
      })),
        (this.dom = Mh(
          'div',
          { class: 'cm-panel-lint' },
          this.list,
          Mh(
            'button',
            {
              type: 'button',
              name: 'close',
              'aria-label': this.view.state.phrase('close'),
              onclick: () => Nd(this.view),
            },
            '×'
          )
        )),
        this.update();
    }
    get selectedIndex() {
      let t = this.view.state.field(Yd).selected;
      if (!t) return -1;
      for (let e = 0; e < this.items.length; e++)
        if (this.items[e].diagnostic == t.diagnostic) return e;
      return -1;
    }
    update() {
      let { diagnostics: t, selected: e } = this.view.state.field(Yd),
        i = 0,
        n = !1,
        r = null;
      for (
        t.between(0, this.view.state.doc.length, (t, s, { spec: o }) => {
          let a,
            l = -1;
          for (let t = i; t < this.items.length; t++)
            if (this.items[t].diagnostic == o.diagnostic) {
              l = t;
              break;
            }
          l < 0
            ? ((a = new Kd(this.view, o.diagnostic)),
              this.items.splice(i, 0, a),
              (n = !0))
            : ((a = this.items[l]),
              l > i && (this.items.splice(i, l - i), (n = !0))),
            e && a.diagnostic == e.diagnostic
              ? a.dom.hasAttribute('aria-selected') ||
                (a.dom.setAttribute('aria-selected', 'true'), (r = a))
              : a.dom.hasAttribute('aria-selected') &&
                a.dom.removeAttribute('aria-selected'),
            i++;
        });
        i < this.items.length &&
        !(1 == this.items.length && this.items[0].diagnostic.from < 0);

      )
        (n = !0), this.items.pop();
      0 == this.items.length &&
        (this.items.push(
          new Kd(this.view, {
            from: -1,
            to: -1,
            severity: 'info',
            message: this.view.state.phrase('No diagnostics'),
          })
        ),
        (n = !0)),
        r
          ? (this.list.setAttribute('aria-activedescendant', r.id),
            this.view.requestMeasure({
              key: this,
              read: () => ({
                sel: r.dom.getBoundingClientRect(),
                panel: this.list.getBoundingClientRect(),
              }),
              write: ({ sel: t, panel: e }) => {
                t.top < e.top
                  ? (this.list.scrollTop -= e.top - t.top)
                  : t.bottom > e.bottom &&
                    (this.list.scrollTop += t.bottom - e.bottom);
              },
            }))
          : this.selectedIndex < 0 &&
            this.list.removeAttribute('aria-activedescendant'),
        n && this.sync();
    }
    sync() {
      let t = this.list.firstChild;
      function e() {
        let e = t;
        (t = e.nextSibling), e.remove();
      }
      for (let i of this.items)
        if (i.dom.parentNode == this.list) {
          for (; t != i.dom; ) e();
          t = i.dom.nextSibling;
        } else this.list.insertBefore(i.dom, t);
      for (; t; ) e();
    }
    moveSelection(t) {
      if (this.selectedIndex < 0) return;
      let e = zd(
        this.view.state.field(Yd).diagnostics,
        this.items[t].diagnostic
      );
      e &&
        this.view.dispatch({
          selection: { anchor: e.from, head: e.to },
          scrollIntoView: !0,
          effects: Vd.of(e),
        });
    }
    static open(t) {
      return new tf(t);
    }
  }
  function ef(t) {
    return (function (t, e = 'viewBox="0 0 40 40"') {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(t)}</svg>')`;
    })(
      `<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${t}" fill="none" stroke-width=".7"/>`,
      'width="6" height="3"'
    );
  }
  const nf = Rr.baseTheme({
      '.cm-diagnostic': {
        padding: '3px 6px 3px 8px',
        marginLeft: '-1px',
        display: 'block',
        whiteSpace: 'pre-wrap',
      },
      '.cm-diagnostic-error': { borderLeft: '5px solid #d11' },
      '.cm-diagnostic-warning': { borderLeft: '5px solid orange' },
      '.cm-diagnostic-info': { borderLeft: '5px solid #999' },
      '.cm-diagnosticAction': {
        font: 'inherit',
        border: 'none',
        padding: '2px 4px',
        backgroundColor: '#444',
        color: 'white',
        borderRadius: '3px',
        marginLeft: '8px',
      },
      '.cm-diagnosticSource': { fontSize: '70%', opacity: 0.7 },
      '.cm-lintRange': {
        backgroundPosition: 'left bottom',
        backgroundRepeat: 'repeat-x',
        paddingBottom: '0.7px',
      },
      '.cm-lintRange-error': { backgroundImage: ef('#d11') },
      '.cm-lintRange-warning': { backgroundImage: ef('orange') },
      '.cm-lintRange-info': { backgroundImage: ef('#999') },
      '.cm-lintRange-active': { backgroundColor: '#ffdd9980' },
      '.cm-tooltip-lint': { padding: 0, margin: 0 },
      '.cm-lintPoint': {
        position: 'relative',
        '&:after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: '-2px',
          borderLeft: '3px solid transparent',
          borderRight: '3px solid transparent',
          borderBottom: '4px solid #d11',
        },
      },
      '.cm-lintPoint-warning': { '&:after': { borderBottomColor: 'orange' } },
      '.cm-lintPoint-info': { '&:after': { borderBottomColor: '#999' } },
      '.cm-panel.cm-panel-lint': {
        position: 'relative',
        '& ul': {
          maxHeight: '100px',
          overflowY: 'auto',
          '& [aria-selected]': {
            backgroundColor: '#ddd',
            '& u': { textDecoration: 'underline' },
          },
          '&:focus [aria-selected]': {
            background_fallback: '#bdf',
            backgroundColor: 'Highlight',
            color_fallback: 'white',
            color: 'HighlightText',
          },
          '& u': { textDecoration: 'none' },
          padding: 0,
          margin: 0,
        },
        '& [name=close]': {
          position: 'absolute',
          top: '0',
          right: '2px',
          background: 'inherit',
          border: 'none',
          font: 'inherit',
          padding: 0,
          margin: 0,
        },
      },
    }),
    rf = [
      Pa(),
      Aa(),
      fs(),
      Ss(),
      Ba(),
      Ir(),
      ss(),
      $t.allowMultipleSelections.of(!0),
      ra(),
      Ld.fallback,
      rl(),
      ph(),
      ju(),
      id(),
      gs(),
      Hh(),
      zr.of([...yh, ...lh, ...kc, ...qs, ...ja, ...Bu, ...Vu, ...Bd]),
    ];
  class sf {
    constructor(t, e, i, n, r, s, o, a, l, h = 0, c) {
      (this.p = t),
        (this.stack = e),
        (this.state = i),
        (this.reducePos = n),
        (this.pos = r),
        (this.score = s),
        (this.buffer = o),
        (this.bufferBase = a),
        (this.curContext = l),
        (this.lookAhead = h),
        (this.parent = c);
    }
    toString() {
      return `[${this.stack
        .filter((t, e) => e % 3 == 0)
        .concat(this.state)}]@${this.pos}${this.score ? '!' + this.score : ''}`;
    }
    static start(t, e, i = 0) {
      let n = t.parser.context;
      return new sf(
        t,
        [],
        e,
        i,
        i,
        0,
        [],
        0,
        n ? new of(n, n.start) : null,
        0,
        null
      );
    }
    get context() {
      return this.curContext ? this.curContext.context : null;
    }
    pushState(t, e) {
      this.stack.push(this.state, e, this.bufferBase + this.buffer.length),
        (this.state = t);
    }
    reduce(t) {
      let e = t >> 19,
        i = 65535 & t,
        { parser: n } = this.p,
        r = n.dynamicPrecedence(i);
      if ((r && (this.score += r), 0 == e))
        return (
          this.pushState(n.getGoto(this.state, i, !0), this.reducePos),
          i < n.minRepeatTerm &&
            this.storeNode(i, this.reducePos, this.reducePos, 4, !0),
          void this.reduceContext(i, this.reducePos)
        );
      let s = this.stack.length - 3 * (e - 1) - (262144 & t ? 6 : 0),
        o = this.stack[s - 2],
        a = this.stack[s - 1],
        l = this.bufferBase + this.buffer.length - a;
      if (i < n.minRepeatTerm || 131072 & t) {
        let t = n.stateFlag(this.state, 1) ? this.pos : this.reducePos;
        this.storeNode(i, o, t, l + 4, !0);
      }
      if (262144 & t) this.state = this.stack[s];
      else {
        let t = this.stack[s - 3];
        this.state = n.getGoto(t, i, !0);
      }
      for (; this.stack.length > s; ) this.stack.pop();
      this.reduceContext(i, o);
    }
    storeNode(t, e, i, n = 4, r = !1) {
      if (0 == t) {
        let t = this,
          n = this.buffer.length;
        if (
          (0 == n &&
            t.parent &&
            ((n = t.bufferBase - t.parent.bufferBase), (t = t.parent)),
          n > 0 && 0 == t.buffer[n - 4] && t.buffer[n - 1] > -1)
        ) {
          if (e == i) return;
          if (t.buffer[n - 2] >= e) return void (t.buffer[n - 2] = i);
        }
      }
      if (r && this.pos != i) {
        let r = this.buffer.length;
        if (r > 0 && 0 != this.buffer[r - 4])
          for (; r > 0 && this.buffer[r - 2] > i; )
            (this.buffer[r] = this.buffer[r - 4]),
              (this.buffer[r + 1] = this.buffer[r - 3]),
              (this.buffer[r + 2] = this.buffer[r - 2]),
              (this.buffer[r + 3] = this.buffer[r - 1]),
              (r -= 4),
              n > 4 && (n -= 4);
        (this.buffer[r] = t),
          (this.buffer[r + 1] = e),
          (this.buffer[r + 2] = i),
          (this.buffer[r + 3] = n);
      } else this.buffer.push(t, e, i, n);
    }
    shift(t, e, i) {
      let n = this.pos;
      if (131072 & t) this.pushState(65535 & t, this.pos);
      else if (0 == (262144 & t)) {
        let r = t,
          { parser: s } = this.p;
        (i > this.pos || e <= s.maxNode) &&
          ((this.pos = i), s.stateFlag(r, 1) || (this.reducePos = i)),
          this.pushState(r, n),
          this.shiftContext(e, n),
          e <= s.maxNode && this.buffer.push(e, n, i, 4);
      } else
        (this.pos = i),
          this.shiftContext(e, n),
          e <= this.p.parser.maxNode && this.buffer.push(e, n, i, 4);
    }
    apply(t, e, i) {
      65536 & t ? this.reduce(t) : this.shift(t, e, i);
    }
    useNode(t, e) {
      let i = this.p.reused.length - 1;
      (i < 0 || this.p.reused[i] != t) && (this.p.reused.push(t), i++);
      let n = this.pos;
      (this.reducePos = this.pos = n + t.length),
        this.pushState(e, n),
        this.buffer.push(i, n, this.reducePos, -1),
        this.curContext &&
          this.updateContext(
            this.curContext.tracker.reuse(
              this.curContext.context,
              t,
              this,
              this.p.stream.reset(this.pos - t.length)
            )
          );
    }
    split() {
      let t = this,
        e = t.buffer.length;
      for (; e > 0 && t.buffer[e - 2] > t.reducePos; ) e -= 4;
      let i = t.buffer.slice(e),
        n = t.bufferBase + e;
      for (; t && n == t.bufferBase; ) t = t.parent;
      return new sf(
        this.p,
        this.stack.slice(),
        this.state,
        this.reducePos,
        this.pos,
        this.score,
        i,
        n,
        this.curContext,
        this.lookAhead,
        t
      );
    }
    recoverByDelete(t, e) {
      let i = t <= this.p.parser.maxNode;
      i && this.storeNode(t, this.pos, e, 4),
        this.storeNode(0, this.pos, e, i ? 8 : 4),
        (this.pos = this.reducePos = e),
        (this.score -= 190);
    }
    canShift(t) {
      for (let e = new lf(this); ; ) {
        let i =
          this.p.parser.stateSlot(e.state, 4) ||
          this.p.parser.hasAction(e.state, t);
        if (0 == (65536 & i)) return !0;
        if (0 == i) return !1;
        e.reduce(i);
      }
    }
    recoverByInsert(t) {
      if (this.stack.length >= 300) return [];
      let e = this.p.parser.nextStates(this.state);
      if (e.length > 8 || this.stack.length >= 120) {
        let i = [];
        for (let n, r = 0; r < e.length; r += 2)
          (n = e[r + 1]) != this.state &&
            this.p.parser.hasAction(n, t) &&
            i.push(e[r], n);
        if (this.stack.length < 120)
          for (let t = 0; i.length < 8 && t < e.length; t += 2) {
            let n = e[t + 1];
            i.some((t, e) => 1 & e && t == n) || i.push(e[t], n);
          }
        e = i;
      }
      let i = [];
      for (let t = 0; t < e.length && i.length < 4; t += 2) {
        let n = e[t + 1];
        if (n == this.state) continue;
        let r = this.split();
        r.storeNode(0, r.pos, r.pos, 4, !0),
          r.pushState(n, this.pos),
          r.shiftContext(e[t], this.pos),
          (r.score -= 200),
          i.push(r);
      }
      return i;
    }
    forceReduce() {
      let t = this.p.parser.stateSlot(this.state, 5);
      if (0 == (65536 & t)) return !1;
      let { parser: e } = this.p;
      if (!e.validAction(this.state, t)) {
        let i = t >> 19,
          n = 65535 & t,
          r = this.stack.length - 3 * i;
        if (r < 0 || e.getGoto(this.stack[r], n, !1) < 0) return !1;
        this.storeNode(0, this.reducePos, this.reducePos, 4, !0),
          (this.score -= 100);
      }
      return this.reduce(t), !0;
    }
    forceAll() {
      for (; !this.p.parser.stateFlag(this.state, 2); )
        if (!this.forceReduce()) {
          this.storeNode(0, this.pos, this.pos, 4, !0);
          break;
        }
      return this;
    }
    get deadEnd() {
      if (3 != this.stack.length) return !1;
      let { parser: t } = this.p;
      return (
        65535 == t.data[t.stateSlot(this.state, 1)] &&
        !t.stateSlot(this.state, 4)
      );
    }
    restart() {
      (this.state = this.stack[0]), (this.stack.length = 0);
    }
    sameState(t) {
      if (this.state != t.state || this.stack.length != t.stack.length)
        return !1;
      for (let e = 0; e < this.stack.length; e += 3)
        if (this.stack[e] != t.stack[e]) return !1;
      return !0;
    }
    get parser() {
      return this.p.parser;
    }
    dialectEnabled(t) {
      return this.p.parser.dialect.flags[t];
    }
    shiftContext(t, e) {
      this.curContext &&
        this.updateContext(
          this.curContext.tracker.shift(
            this.curContext.context,
            t,
            this,
            this.p.stream.reset(e)
          )
        );
    }
    reduceContext(t, e) {
      this.curContext &&
        this.updateContext(
          this.curContext.tracker.reduce(
            this.curContext.context,
            t,
            this,
            this.p.stream.reset(e)
          )
        );
    }
    emitContext() {
      let t = this.buffer.length - 1;
      (t < 0 || -3 != this.buffer[t]) &&
        this.buffer.push(
          this.curContext.hash,
          this.reducePos,
          this.reducePos,
          -3
        );
    }
    emitLookAhead() {
      let t = this.buffer.length - 1;
      (t < 0 || -4 != this.buffer[t]) &&
        this.buffer.push(this.lookAhead, this.reducePos, this.reducePos, -4);
    }
    updateContext(t) {
      if (t != this.curContext.context) {
        let e = new of(this.curContext.tracker, t);
        e.hash != this.curContext.hash && this.emitContext(),
          (this.curContext = e);
      }
    }
    setLookAhead(t) {
      t > this.lookAhead && (this.emitLookAhead(), (this.lookAhead = t));
    }
    close() {
      this.curContext && this.curContext.tracker.strict && this.emitContext(),
        this.lookAhead > 0 && this.emitLookAhead();
    }
  }
  class of {
    constructor(t, e) {
      (this.tracker = t),
        (this.context = e),
        (this.hash = t.strict ? t.hash(e) : 0);
    }
  }
  var af;
  !(function (t) {
    (t[(t.Insert = 200)] = 'Insert'),
      (t[(t.Delete = 190)] = 'Delete'),
      (t[(t.Reduce = 100)] = 'Reduce'),
      (t[(t.MaxNext = 4)] = 'MaxNext'),
      (t[(t.MaxInsertStackDepth = 300)] = 'MaxInsertStackDepth'),
      (t[(t.DampenInsertStackDepth = 120)] = 'DampenInsertStackDepth');
  })(af || (af = {}));
  class lf {
    constructor(t) {
      (this.start = t),
        (this.state = t.state),
        (this.stack = t.stack),
        (this.base = this.stack.length);
    }
    reduce(t) {
      let e = 65535 & t,
        i = t >> 19;
      0 == i
        ? (this.stack == this.start.stack && (this.stack = this.stack.slice()),
          this.stack.push(this.state, 0, 0),
          (this.base += 3))
        : (this.base -= 3 * (i - 1));
      let n = this.start.p.parser.getGoto(this.stack[this.base - 3], e, !0);
      this.state = n;
    }
  }
  class hf {
    constructor(t, e, i) {
      (this.stack = t),
        (this.pos = e),
        (this.index = i),
        (this.buffer = t.buffer),
        0 == this.index && this.maybeNext();
    }
    static create(t, e = t.bufferBase + t.buffer.length) {
      return new hf(t, e, e - t.bufferBase);
    }
    maybeNext() {
      let t = this.stack.parent;
      null != t &&
        ((this.index = this.stack.bufferBase - t.bufferBase),
        (this.stack = t),
        (this.buffer = t.buffer));
    }
    get id() {
      return this.buffer[this.index - 4];
    }
    get start() {
      return this.buffer[this.index - 3];
    }
    get end() {
      return this.buffer[this.index - 2];
    }
    get size() {
      return this.buffer[this.index - 1];
    }
    next() {
      (this.index -= 4), (this.pos -= 4), 0 == this.index && this.maybeNext();
    }
    fork() {
      return new hf(this.stack, this.pos, this.index);
    }
  }
  class cf {
    constructor() {
      (this.start = -1),
        (this.value = -1),
        (this.end = -1),
        (this.extended = -1),
        (this.lookAhead = 0),
        (this.mask = 0),
        (this.context = 0);
    }
  }
  const uf = new cf();
  class df {
    constructor(t, e) {
      (this.input = t),
        (this.ranges = e),
        (this.chunk = ''),
        (this.chunkOff = 0),
        (this.chunk2 = ''),
        (this.chunk2Pos = 0),
        (this.next = -1),
        (this.token = uf),
        (this.rangeIndex = 0),
        (this.pos = this.chunkPos = e[0].from),
        (this.range = e[0]),
        (this.end = e[e.length - 1].to),
        this.readNext();
    }
    resolveOffset(t, e) {
      let i = this.range,
        n = this.rangeIndex,
        r = this.pos + t;
      for (; r < i.from; ) {
        if (!n) return null;
        let t = this.ranges[--n];
        (r -= i.from - t.to), (i = t);
      }
      for (; e < 0 ? r > i.to : r >= i.to; ) {
        if (n == this.ranges.length - 1) return null;
        let t = this.ranges[++n];
        (r += t.from - i.to), (i = t);
      }
      return r;
    }
    peek(t) {
      let e,
        i,
        n = this.chunkOff + t;
      if (n >= 0 && n < this.chunk.length)
        (e = this.pos + t), (i = this.chunk.charCodeAt(n));
      else {
        let n = this.resolveOffset(t, 1);
        if (null == n) return -1;
        if (
          ((e = n),
          e >= this.chunk2Pos && e < this.chunk2Pos + this.chunk2.length)
        )
          i = this.chunk2.charCodeAt(e - this.chunk2Pos);
        else {
          let t = this.rangeIndex,
            n = this.range;
          for (; n.to <= e; ) n = this.ranges[++t];
          (this.chunk2 = this.input.chunk((this.chunk2Pos = e))),
            e + this.chunk2.length > n.to &&
              (this.chunk2 = this.chunk2.slice(0, n.to - e)),
            (i = this.chunk2.charCodeAt(0));
        }
      }
      return e >= this.token.lookAhead && (this.token.lookAhead = e + 1), i;
    }
    acceptToken(t, e = 0) {
      let i = e ? this.resolveOffset(e, -1) : this.pos;
      if (null == i || i < this.token.start)
        throw new RangeError('Token end out of bounds');
      (this.token.value = t), (this.token.end = i);
    }
    getChunk() {
      if (
        this.pos >= this.chunk2Pos &&
        this.pos < this.chunk2Pos + this.chunk2.length
      ) {
        let { chunk: t, chunkPos: e } = this;
        (this.chunk = this.chunk2),
          (this.chunkPos = this.chunk2Pos),
          (this.chunk2 = t),
          (this.chunk2Pos = e),
          (this.chunkOff = this.pos - this.chunkPos);
      } else {
        (this.chunk2 = this.chunk), (this.chunk2Pos = this.chunkPos);
        let t = this.input.chunk(this.pos),
          e = this.pos + t.length;
        (this.chunk =
          e > this.range.to ? t.slice(0, this.range.to - this.pos) : t),
          (this.chunkPos = this.pos),
          (this.chunkOff = 0);
      }
    }
    readNext() {
      return this.chunkOff >= this.chunk.length &&
        (this.getChunk(), this.chunkOff == this.chunk.length)
        ? (this.next = -1)
        : (this.next = this.chunk.charCodeAt(this.chunkOff));
    }
    advance(t = 1) {
      for (this.chunkOff += t; this.pos + t >= this.range.to; ) {
        if (this.rangeIndex == this.ranges.length - 1) return this.setDone();
        (t -= this.range.to - this.pos),
          (this.range = this.ranges[++this.rangeIndex]),
          (this.pos = this.range.from);
      }
      return (
        (this.pos += t),
        this.pos >= this.token.lookAhead &&
          (this.token.lookAhead = this.pos + 1),
        this.readNext()
      );
    }
    setDone() {
      return (
        (this.pos = this.chunkPos = this.end),
        (this.range = this.ranges[(this.rangeIndex = this.ranges.length - 1)]),
        (this.chunk = ''),
        (this.next = -1)
      );
    }
    reset(t, e) {
      if (
        (e
          ? ((this.token = e),
            (e.start = t),
            (e.lookAhead = t + 1),
            (e.value = e.extended = -1))
          : (this.token = uf),
        this.pos != t)
      ) {
        if (((this.pos = t), t == this.end)) return this.setDone(), this;
        for (; t < this.range.from; )
          this.range = this.ranges[--this.rangeIndex];
        for (; t >= this.range.to; )
          this.range = this.ranges[++this.rangeIndex];
        t >= this.chunkPos && t < this.chunkPos + this.chunk.length
          ? (this.chunkOff = t - this.chunkPos)
          : ((this.chunk = ''), (this.chunkOff = 0)),
          this.readNext();
      }
      return this;
    }
    read(t, e) {
      if (t >= this.chunkPos && e <= this.chunkPos + this.chunk.length)
        return this.chunk.slice(t - this.chunkPos, e - this.chunkPos);
      if (t >= this.chunk2Pos && e <= this.chunk2Pos + this.chunk2.length)
        return this.chunk2.slice(t - this.chunk2Pos, e - this.chunk2Pos);
      if (t >= this.range.from && e <= this.range.to)
        return this.input.read(t, e);
      let i = '';
      for (let n of this.ranges) {
        if (n.from >= e) break;
        n.to > t &&
          (i += this.input.read(Math.max(n.from, t), Math.min(n.to, e)));
      }
      return i;
    }
  }
  class ff {
    constructor(t, e) {
      (this.data = t), (this.id = e);
    }
    token(t, e) {
      !(function (t, e, i, n) {
        let r = 0,
          s = 1 << n,
          { parser: o } = i.p,
          { dialect: a } = o;
        t: for (; 0 != (s & t[r]); ) {
          let i = t[r + 1];
          for (let n = r + 3; n < i; n += 2)
            if ((t[n + 1] & s) > 0) {
              let i = t[n];
              if (
                a.allows(i) &&
                (-1 == e.token.value ||
                  e.token.value == i ||
                  o.overrides(i, e.token.value))
              ) {
                e.acceptToken(i);
                break;
              }
            }
          for (let n = e.next, s = 0, o = t[r + 2]; s < o; ) {
            let a = (s + o) >> 1,
              l = i + a + (a << 1),
              h = t[l],
              c = t[l + 1];
            if (n < h) o = a;
            else {
              if (!(n >= c)) {
                (r = t[l + 2]), e.advance();
                continue t;
              }
              s = a + 1;
            }
          }
          break;
        }
      })(this.data, t, e, this.id);
    }
  }
  ff.prototype.contextual = ff.prototype.fallback = ff.prototype.extend = !1;
  class Of {
    constructor(t, e = {}) {
      (this.token = t),
        (this.contextual = !!e.contextual),
        (this.fallback = !!e.fallback),
        (this.extend = !!e.extend);
    }
  }
  function pf(t, e = Uint16Array) {
    if ('string' != typeof t) return t;
    let i = null;
    for (let n = 0, r = 0; n < t.length; ) {
      let s = 0;
      for (;;) {
        let e = t.charCodeAt(n++),
          i = !1;
        if (126 == e) {
          s = 65535;
          break;
        }
        e >= 92 && e--, e >= 34 && e--;
        let r = e - 32;
        if ((r >= 46 && ((r -= 46), (i = !0)), (s += r), i)) break;
        s *= 46;
      }
      i ? (i[r++] = s) : (i = new e(s));
    }
    return i;
  }
  const mf = 'undefined' != typeof process && /\bparse\b/.test(process.env.LOG);
  let gf = null;
  var Qf, bf;
  function vf(t, e, i) {
    let n = t.fullCursor();
    for (n.moveTo(e); ; )
      if (!(i < 0 ? n.childBefore(e) : n.childAfter(e)))
        for (;;) {
          if ((i < 0 ? n.to < e : n.from > e) && !n.type.isError)
            return i < 0
              ? Math.max(0, Math.min(n.to - 1, e - 25))
              : Math.min(t.length, Math.max(n.from + 1, e + 25));
          if (i < 0 ? n.prevSibling() : n.nextSibling()) break;
          if (!n.parent()) return i < 0 ? 0 : t.length;
        }
  }
  !(function (t) {
    t[(t.Margin = 25)] = 'Margin';
  })(Qf || (Qf = {}));
  class yf {
    constructor(t, e) {
      (this.fragments = t),
        (this.nodeSet = e),
        (this.i = 0),
        (this.fragment = null),
        (this.safeFrom = -1),
        (this.safeTo = -1),
        (this.trees = []),
        (this.start = []),
        (this.index = []),
        this.nextFragment();
    }
    nextFragment() {
      let t = (this.fragment =
        this.i == this.fragments.length ? null : this.fragments[this.i++]);
      if (t) {
        for (
          this.safeFrom = t.openStart
            ? vf(t.tree, t.from + t.offset, 1) - t.offset
            : t.from,
            this.safeTo = t.openEnd
              ? vf(t.tree, t.to + t.offset, -1) - t.offset
              : t.to;
          this.trees.length;

        )
          this.trees.pop(), this.start.pop(), this.index.pop();
        this.trees.push(t.tree),
          this.start.push(-t.offset),
          this.index.push(0),
          (this.nextStart = this.safeFrom);
      } else this.nextStart = 1e9;
    }
    nodeAt(t) {
      if (t < this.nextStart) return null;
      for (; this.fragment && this.safeTo <= t; ) this.nextFragment();
      if (!this.fragment) return null;
      for (;;) {
        let e = this.trees.length - 1;
        if (e < 0) return this.nextFragment(), null;
        let i = this.trees[e],
          n = this.index[e];
        if (n == i.children.length) {
          this.trees.pop(), this.start.pop(), this.index.pop();
          continue;
        }
        let r = i.children[n],
          s = this.start[e] + i.positions[n];
        if (s > t) return (this.nextStart = s), null;
        if (r instanceof Js) {
          if (s == t) {
            if (s < this.safeFrom) return null;
            let t = s + r.length;
            if (t <= this.safeTo) {
              let e = r.prop(Us.lookAhead);
              if (!e || t + e < this.fragment.to) return r;
            }
          }
          this.index[e]++,
            s + r.length >= Math.max(this.safeFrom, t) &&
              (this.trees.push(r), this.start.push(s), this.index.push(0));
        } else this.index[e]++, (this.nextStart = s + r.length);
      }
    }
  }
  class wf {
    constructor(t, e) {
      (this.stream = e),
        (this.tokens = []),
        (this.mainToken = null),
        (this.actions = []),
        (this.tokens = t.tokenizers.map((t) => new cf()));
    }
    getActions(t) {
      let e = 0,
        i = null,
        { parser: n } = t.p,
        { tokenizers: r } = n,
        s = n.stateSlot(t.state, 3),
        o = t.curContext ? t.curContext.hash : 0,
        a = 0;
      for (let n = 0; n < r.length; n++) {
        if (0 == ((1 << n) & s)) continue;
        let l = r[n],
          h = this.tokens[n];
        if (
          (!i || l.fallback) &&
          ((l.contextual ||
            h.start != t.pos ||
            h.mask != s ||
            h.context != o) &&
            (this.updateCachedToken(h, l, t), (h.mask = s), (h.context = o)),
          h.lookAhead > h.end + 25 && (a = Math.max(h.lookAhead, a)),
          0 != h.value)
        ) {
          let n = e;
          if (
            (h.extended > -1 && (e = this.addActions(t, h.extended, h.end, e)),
            (e = this.addActions(t, h.value, h.end, e)),
            !l.extend && ((i = h), e > n))
          )
            break;
        }
      }
      for (; this.actions.length > e; ) this.actions.pop();
      return (
        a && t.setLookAhead(a),
        i ||
          t.pos != this.stream.end ||
          ((i = new cf()),
          (i.value = t.p.parser.eofTerm),
          (i.start = i.end = t.pos),
          (e = this.addActions(t, i.value, i.end, e))),
        (this.mainToken = i),
        this.actions
      );
    }
    getMainToken(t) {
      if (this.mainToken) return this.mainToken;
      let e = new cf(),
        { pos: i, p: n } = t;
      return (
        (e.start = i),
        (e.end = Math.min(i + 1, n.stream.end)),
        (e.value = i == n.stream.end ? n.parser.eofTerm : 0),
        e
      );
    }
    updateCachedToken(t, e, i) {
      if ((e.token(this.stream.reset(i.pos, t), i), t.value > -1)) {
        let { parser: e } = i.p;
        for (let n = 0; n < e.specialized.length; n++)
          if (e.specialized[n] == t.value) {
            let r = e.specializers[n](this.stream.read(t.start, t.end), i);
            if (r >= 0 && i.p.parser.dialect.allows(r >> 1)) {
              0 == (1 & r) ? (t.value = r >> 1) : (t.extended = r >> 1);
              break;
            }
          }
      } else (t.value = 0), (t.end = Math.min(i.p.stream.end, i.pos + 1));
    }
    putAction(t, e, i, n) {
      for (let e = 0; e < n; e += 3) if (this.actions[e] == t) return n;
      return (
        (this.actions[n++] = t),
        (this.actions[n++] = e),
        (this.actions[n++] = i),
        n
      );
    }
    addActions(t, e, i, n) {
      let { state: r } = t,
        { parser: s } = t.p,
        { data: o } = s;
      for (let t = 0; t < 2; t++)
        for (let a = s.stateSlot(r, t ? 2 : 1); ; a += 3) {
          if (65535 == o[a]) {
            if (1 != o[a + 1]) {
              0 == n &&
                2 == o[a + 1] &&
                (n = this.putAction(Rf(o, a + 2), e, i, n));
              break;
            }
            a = Rf(o, a + 2);
          }
          o[a] == e && (n = this.putAction(Rf(o, a + 1), e, i, n));
        }
      return n;
    }
  }
  !(function (t) {
    (t[(t.Distance = 5)] = 'Distance'),
      (t[(t.MaxRemainingPerStep = 3)] = 'MaxRemainingPerStep'),
      (t[(t.MinBufferLengthPrune = 500)] = 'MinBufferLengthPrune'),
      (t[(t.ForceReduceLimit = 10)] = 'ForceReduceLimit'),
      (t[(t.CutDepth = 15e3)] = 'CutDepth'),
      (t[(t.CutTo = 9e3)] = 'CutTo');
  })(bf || (bf = {}));
  class xf {
    constructor(t, e, i, n) {
      (this.parser = t),
        (this.input = e),
        (this.ranges = n),
        (this.recovering = 0),
        (this.nextStackID = 9812),
        (this.minStackPos = 0),
        (this.reused = []),
        (this.stoppedAt = null),
        (this.stream = new df(e, n)),
        (this.tokens = new wf(t, this.stream)),
        (this.topTerm = t.top[1]);
      let { from: r } = n[0];
      (this.stacks = [sf.start(this, t.top[0], r)]),
        (this.fragments =
          i.length && this.stream.end - r > 4 * t.bufferLength
            ? new yf(i, t.nodeSet)
            : null);
    }
    get parsedPos() {
      return this.minStackPos;
    }
    advance() {
      let t,
        e,
        i = this.stacks,
        n = this.minStackPos,
        r = (this.stacks = []);
      for (let s = 0; s < i.length; s++) {
        let o = i[s];
        for (;;) {
          if (((this.tokens.mainToken = null), o.pos > n)) r.push(o);
          else {
            if (this.advanceStack(o, r, i)) continue;
            {
              t || ((t = []), (e = [])), t.push(o);
              let i = this.tokens.getMainToken(o);
              e.push(i.value, i.end);
            }
          }
          break;
        }
      }
      if (!r.length) {
        let e =
          t &&
          (function (t) {
            let e = null;
            for (let i of t) {
              let t = i.p.stoppedAt;
              (i.pos == i.p.stream.end || (null != t && i.pos > t)) &&
                i.p.parser.stateFlag(i.state, 2) &&
                (!e || e.score < i.score) &&
                (e = i);
            }
            return e;
          })(t);
        if (e) return this.stackToTree(e);
        if (this.parser.strict)
          throw (
            (mf &&
              t &&
              console.log(
                'Stuck with token ' +
                  (this.tokens.mainToken
                    ? this.parser.getName(this.tokens.mainToken.value)
                    : 'none')
              ),
            new SyntaxError('No parse at ' + n))
          );
        this.recovering || (this.recovering = 5);
      }
      if (this.recovering && t) {
        let i =
          null != this.stoppedAt && t[0].pos > this.stoppedAt
            ? t[0]
            : this.runRecovery(t, e, r);
        if (i) return this.stackToTree(i.forceAll());
      }
      if (this.recovering) {
        let t = 1 == this.recovering ? 1 : 3 * this.recovering;
        if (r.length > t)
          for (r.sort((t, e) => e.score - t.score); r.length > t; ) r.pop();
        r.some((t) => t.reducePos > n) && this.recovering--;
      } else if (r.length > 1)
        t: for (let t = 0; t < r.length - 1; t++) {
          let e = r[t];
          for (let i = t + 1; i < r.length; i++) {
            let n = r[i];
            if (
              e.sameState(n) ||
              (e.buffer.length > 500 && n.buffer.length > 500)
            ) {
              if (
                !((e.score - n.score || e.buffer.length - n.buffer.length) > 0)
              ) {
                r.splice(t--, 1);
                continue t;
              }
              r.splice(i--, 1);
            }
          }
        }
      this.minStackPos = r[0].pos;
      for (let t = 1; t < r.length; t++)
        r[t].pos < this.minStackPos && (this.minStackPos = r[t].pos);
      return null;
    }
    stopAt(t) {
      if (null != this.stoppedAt && this.stoppedAt < t)
        throw new RangeError("Can't move stoppedAt forward");
      this.stoppedAt = t;
    }
    advanceStack(t, e, i) {
      let n = t.pos,
        { parser: r } = this,
        s = mf ? this.stackID(t) + ' -> ' : '';
      if (null != this.stoppedAt && n > this.stoppedAt)
        return t.forceReduce() ? t : null;
      if (this.fragments) {
        let e = t.curContext && t.curContext.tracker.strict,
          i = e ? t.curContext.hash : 0;
        for (let o = this.fragments.nodeAt(n); o; ) {
          let n =
            this.parser.nodeSet.types[o.type.id] == o.type
              ? r.getGoto(t.state, o.type.id)
              : -1;
          if (n > -1 && o.length && (!e || (o.prop(Us.contextHash) || 0) == i))
            return (
              t.useNode(o, n),
              mf &&
                console.log(
                  s +
                    this.stackID(t) +
                    ` (via reuse of ${r.getName(o.type.id)})`
                ),
              !0
            );
          if (
            !(o instanceof Js) ||
            0 == o.children.length ||
            o.positions[0] > 0
          )
            break;
          let a = o.children[0];
          if (!(a instanceof Js && 0 == o.positions[0])) break;
          o = a;
        }
      }
      let o = r.stateSlot(t.state, 4);
      if (o > 0)
        return (
          t.reduce(o),
          mf &&
            console.log(
              s +
                this.stackID(t) +
                ` (via always-reduce ${r.getName(65535 & o)})`
            ),
          !0
        );
      if (t.stack.length >= 15e3)
        for (; t.stack.length > 9e3 && t.forceReduce(); );
      let a = this.tokens.getActions(t);
      for (let o = 0; o < a.length; ) {
        let l = a[o++],
          h = a[o++],
          c = a[o++],
          u = o == a.length || !i,
          d = u ? t : t.split();
        if (
          (d.apply(l, h, c),
          mf &&
            console.log(
              s +
                this.stackID(d) +
                ` (via ${
                  0 == (65536 & l)
                    ? 'shift'
                    : `reduce of ${r.getName(65535 & l)}`
                } for ${r.getName(h)} @ ${n}${d == t ? '' : ', split'})`
            ),
          u)
        )
          return !0;
        d.pos > n ? e.push(d) : i.push(d);
      }
      return !1;
    }
    advanceFully(t, e) {
      let i = t.pos;
      for (;;) {
        if (!this.advanceStack(t, null, null)) return !1;
        if (t.pos > i) return kf(t, e), !0;
      }
    }
    runRecovery(t, e, i) {
      let n = null,
        r = !1;
      for (let s = 0; s < t.length; s++) {
        let o = t[s],
          a = e[s << 1],
          l = e[1 + (s << 1)],
          h = mf ? this.stackID(o) + ' -> ' : '';
        if (o.deadEnd) {
          if (r) continue;
          if (
            ((r = !0),
            o.restart(),
            mf && console.log(h + this.stackID(o) + ' (restarted)'),
            this.advanceFully(o, i))
          )
            continue;
        }
        let c = o.split(),
          u = h;
        for (let t = 0; c.forceReduce() && t < 10; t++) {
          if (
            (mf && console.log(u + this.stackID(c) + ' (via force-reduce)'),
            this.advanceFully(c, i))
          )
            break;
          mf && (u = this.stackID(c) + ' -> ');
        }
        for (let t of o.recoverByInsert(a))
          mf && console.log(h + this.stackID(t) + ' (via recover-insert)'),
            this.advanceFully(t, i);
        this.stream.end > o.pos
          ? (l == o.pos && (l++, (a = 0)),
            o.recoverByDelete(a, l),
            mf &&
              console.log(
                h +
                  this.stackID(o) +
                  ` (via recover-delete ${this.parser.getName(a)})`
              ),
            kf(o, i))
          : (!n || n.score < o.score) && (n = o);
      }
      return n;
    }
    stackToTree(t) {
      return (
        t.close(),
        Js.build({
          buffer: hf.create(t),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.ranges[0].from,
          length: t.pos - this.ranges[0].from,
          minRepeatType: this.parser.minRepeatTerm,
        })
      );
    }
    stackID(t) {
      let e = (gf || (gf = new WeakMap())).get(t);
      return (
        e || gf.set(t, (e = String.fromCodePoint(this.nextStackID++))), e + t
      );
    }
  }
  function kf(t, e) {
    for (let i = 0; i < e.length; i++) {
      let n = e[i];
      if (n.pos == t.pos && n.sameState(t))
        return void (e[i].score < t.score && (e[i] = t));
    }
    e.push(t);
  }
  class Sf {
    constructor(t, e, i) {
      (this.source = t), (this.flags = e), (this.disabled = i);
    }
    allows(t) {
      return !this.disabled || 0 == this.disabled[t];
    }
  }
  const $f = (t) => t;
  class Tf {
    constructor(t) {
      (this.start = t.start),
        (this.shift = t.shift || $f),
        (this.reduce = t.reduce || $f),
        (this.reuse = t.reuse || $f),
        (this.hash = t.hash || (() => 0)),
        (this.strict = !1 !== t.strict);
    }
  }
  class Pf extends po {
    constructor(t) {
      if ((super(), (this.wrappers = []), 13 != t.version))
        throw new RangeError(
          `Parser version (${t.version}) doesn't match runtime version (13)`
        );
      let e = t.nodeNames.split(' ');
      this.minRepeatTerm = e.length;
      for (let i = 0; i < t.repeatNodeCount; i++) e.push('');
      let i = Object.keys(t.topRules).map((e) => t.topRules[e][1]),
        n = [];
      for (let t = 0; t < e.length; t++) n.push([]);
      function r(t, e, i) {
        n[t].push([e, e.deserialize(String(i))]);
      }
      if (t.nodeProps)
        for (let e of t.nodeProps) {
          let t = e[0];
          for (let i = 1; i < e.length; ) {
            let n = e[i++];
            if (n >= 0) r(n, t, e[i++]);
            else {
              let s = e[i + -n];
              for (let o = -n; o > 0; o--) r(e[i++], t, s);
              i++;
            }
          }
        }
      (this.nodeSet = new Bs(
        e.map((e, r) =>
          Ns.define({
            name: r >= this.minRepeatTerm ? void 0 : e,
            id: r,
            props: n[r],
            top: i.indexOf(r) > -1,
            error: 0 == r,
            skipped: t.skippedNodes && t.skippedNodes.indexOf(r) > -1,
          })
        )
      )),
        (this.strict = !1),
        (this.bufferLength = js);
      let s = pf(t.tokenData);
      if (
        ((this.context = t.context),
        (this.specialized = new Uint16Array(
          t.specialized ? t.specialized.length : 0
        )),
        (this.specializers = []),
        t.specialized)
      )
        for (let e = 0; e < t.specialized.length; e++)
          (this.specialized[e] = t.specialized[e].term),
            (this.specializers[e] = t.specialized[e].get);
      (this.states = pf(t.states, Uint32Array)),
        (this.data = pf(t.stateData)),
        (this.goto = pf(t.goto)),
        (this.maxTerm = t.maxTerm),
        (this.tokenizers = t.tokenizers.map((t) =>
          'number' == typeof t ? new ff(s, t) : t
        )),
        (this.topRules = t.topRules),
        (this.dialects = t.dialects || {}),
        (this.dynamicPrecedences = t.dynamicPrecedences || null),
        (this.tokenPrecTable = t.tokenPrec),
        (this.termNames = t.termNames || null),
        (this.maxNode = this.nodeSet.types.length - 1),
        (this.dialect = this.parseDialect()),
        (this.top = this.topRules[Object.keys(this.topRules)[0]]);
    }
    createParse(t, e, i) {
      let n = new xf(this, t, e, i);
      for (let r of this.wrappers) n = r(n, t, e, i);
      return n;
    }
    getGoto(t, e, i = !1) {
      let n = this.goto;
      if (e >= n[0]) return -1;
      for (let r = n[e + 1]; ; ) {
        let e = n[r++],
          s = 1 & e,
          o = n[r++];
        if (s && i) return o;
        for (let i = r + (e >> 1); r < i; r++) if (n[r] == t) return o;
        if (s) return -1;
      }
    }
    hasAction(t, e) {
      let i = this.data;
      for (let n = 0; n < 2; n++)
        for (let r, s = this.stateSlot(t, n ? 2 : 1); ; s += 3) {
          if (65535 == (r = i[s])) {
            if (1 != i[s + 1]) {
              if (2 == i[s + 1]) return Rf(i, s + 2);
              break;
            }
            r = i[(s = Rf(i, s + 2))];
          }
          if (r == e || 0 == r) return Rf(i, s + 1);
        }
      return 0;
    }
    stateSlot(t, e) {
      return this.states[6 * t + e];
    }
    stateFlag(t, e) {
      return (this.stateSlot(t, 0) & e) > 0;
    }
    validAction(t, e) {
      if (e == this.stateSlot(t, 4)) return !0;
      for (let i = this.stateSlot(t, 1); ; i += 3) {
        if (65535 == this.data[i]) {
          if (1 != this.data[i + 1]) return !1;
          i = Rf(this.data, i + 2);
        }
        if (e == Rf(this.data, i + 1)) return !0;
      }
    }
    nextStates(t) {
      let e = [];
      for (let i = this.stateSlot(t, 1); ; i += 3) {
        if (65535 == this.data[i]) {
          if (1 != this.data[i + 1]) break;
          i = Rf(this.data, i + 2);
        }
        if (0 == (1 & this.data[i + 2])) {
          let t = this.data[i + 1];
          e.some((e, i) => 1 & i && e == t) || e.push(this.data[i], t);
        }
      }
      return e;
    }
    overrides(t, e) {
      let i = Wf(this.data, this.tokenPrecTable, e);
      return i < 0 || Wf(this.data, this.tokenPrecTable, t) < i;
    }
    configure(t) {
      let e = Object.assign(Object.create(Pf.prototype), this);
      if ((t.props && (e.nodeSet = this.nodeSet.extend(...t.props)), t.top)) {
        let i = this.topRules[t.top];
        if (!i) throw new RangeError(`Invalid top rule name ${t.top}`);
        e.top = i;
      }
      return (
        t.tokenizers &&
          (e.tokenizers = this.tokenizers.map((e) => {
            let i = t.tokenizers.find((t) => t.from == e);
            return i ? i.to : e;
          })),
        t.contextTracker && (e.context = t.contextTracker),
        t.dialect && (e.dialect = this.parseDialect(t.dialect)),
        null != t.strict && (e.strict = t.strict),
        t.wrap && (e.wrappers = e.wrappers.concat(t.wrap)),
        null != t.bufferLength && (e.bufferLength = t.bufferLength),
        e
      );
    }
    getName(t) {
      return this.termNames
        ? this.termNames[t]
        : String((t <= this.maxNode && this.nodeSet.types[t].name) || t);
    }
    get eofTerm() {
      return this.maxNode + 1;
    }
    get topNode() {
      return this.nodeSet.types[this.top[1]];
    }
    dynamicPrecedence(t) {
      let e = this.dynamicPrecedences;
      return null == e ? 0 : e[t] || 0;
    }
    parseDialect(t) {
      let e = Object.keys(this.dialects),
        i = e.map(() => !1);
      if (t)
        for (let n of t.split(' ')) {
          let t = e.indexOf(n);
          t >= 0 && (i[t] = !0);
        }
      let n = null;
      for (let t = 0; t < e.length; t++)
        if (!i[t])
          for (let i, r = this.dialects[e[t]]; 65535 != (i = this.data[r++]); )
            (n || (n = new Uint8Array(this.maxTerm + 1)))[i] = 1;
      return new Sf(t, i, n);
    }
    static deserialize(t) {
      return new Pf(t);
    }
  }
  function Rf(t, e) {
    return t[e] | (t[e + 1] << 16);
  }
  function Wf(t, e, i) {
    for (let n, r = e; 65535 != (n = t[r]); r++) if (n == i) return r - e;
    return -1;
  }
  const Cf = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      command: !0,
      embed: !0,
      frame: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
      menuitem: !0,
    },
    Af = {
      dd: !0,
      li: !0,
      optgroup: !0,
      option: !0,
      p: !0,
      rp: !0,
      rt: !0,
      tbody: !0,
      td: !0,
      tfoot: !0,
      th: !0,
      tr: !0,
    },
    Xf = {
      dd: { dd: !0, dt: !0 },
      dt: { dd: !0, dt: !0 },
      li: { li: !0 },
      option: { option: !0, optgroup: !0 },
      optgroup: { optgroup: !0 },
      p: {
        address: !0,
        article: !0,
        aside: !0,
        blockquote: !0,
        dir: !0,
        div: !0,
        dl: !0,
        fieldset: !0,
        footer: !0,
        form: !0,
        h1: !0,
        h2: !0,
        h3: !0,
        h4: !0,
        h5: !0,
        h6: !0,
        header: !0,
        hgroup: !0,
        hr: !0,
        menu: !0,
        nav: !0,
        ol: !0,
        p: !0,
        pre: !0,
        section: !0,
        table: !0,
        ul: !0,
      },
      rp: { rp: !0, rt: !0 },
      rt: { rp: !0, rt: !0 },
      tbody: { tbody: !0, tfoot: !0 },
      td: { td: !0, th: !0 },
      tfoot: { tbody: !0 },
      th: { td: !0, th: !0 },
      thead: { tbody: !0, tfoot: !0 },
      tr: { tr: !0 },
    };
  function Zf(t) {
    return 9 == t || 10 == t || 13 == t || 32 == t;
  }
  let Mf = null,
    _f = null,
    Lf = 0;
  function Df(t, e) {
    let i = t.pos + e;
    if (Lf == i && _f == t) return Mf;
    let n = t.peek(e);
    for (; Zf(n); ) n = t.peek(++e);
    let r = '';
    for (
      ;
      45 == (s = n) ||
      46 == s ||
      58 == s ||
      (s >= 65 && s <= 90) ||
      95 == s ||
      (s >= 97 && s <= 122) ||
      s >= 161;

    )
      (r += String.fromCharCode(n)), (n = t.peek(++e));
    var s;
    return (
      (_f = t),
      (Lf = i),
      (Mf = r ? r.toLowerCase() : n == Ef || n == zf ? void 0 : null)
    );
  }
  const Ef = 63,
    zf = 33;
  function qf(t, e) {
    (this.name = t), (this.parent = e), (this.hash = e ? e.hash : 0);
    for (let e = 0; e < t.length; e++)
      this.hash += (this.hash << 4) + t.charCodeAt(e) + (t.charCodeAt(e) << 8);
  }
  const jf = [4, 8, 5, 6, 7],
    Vf = new Tf({
      start: null,
      shift: (t, e, i, n) =>
        jf.indexOf(e) > -1 ? new qf(Df(n, 1) || '', t) : t,
      reduce: (t, e) => (18 == e && t ? t.parent : t),
      reuse(t, e, i, n) {
        let r = e.type.id;
        return 4 == r || 35 == r ? new qf(Df(n, 1) || '', t) : t;
      },
      hash: (t) => (t ? t.hash : 0),
      strict: !1,
    }),
    Yf = new Of(
      (t, e) => {
        if (60 != t.next)
          return void (t.next < 0 && e.context && t.acceptToken(56));
        t.advance();
        let i = 47 == t.next;
        i && t.advance();
        let n = Df(t, 0);
        if (void 0 === n) return;
        if (!n) return t.acceptToken(i ? 12 : 4);
        let r = e.context ? e.context.name : null;
        if (i) {
          if (n == r) return t.acceptToken(9);
          if (r && Af[r]) return t.acceptToken(56, -2);
          if (e.dialectEnabled(0)) return t.acceptToken(10);
          for (let t = e.context; t; t = t.parent) if (t.name == n) return;
          t.acceptToken(11);
        } else {
          if ('script' == n) return t.acceptToken(5);
          if ('style' == n) return t.acceptToken(6);
          if ('textarea' == n) return t.acceptToken(7);
          if (Cf.hasOwnProperty(n)) return t.acceptToken(8);
          r && Xf[r] && Xf[r][n] ? t.acceptToken(56, -1) : t.acceptToken(4);
        }
      },
      { contextual: !0 }
    ),
    Uf = new Of((t) => {
      for (let e = 0, i = 0; ; i++) {
        if (t.next < 0) {
          i && t.acceptToken(57);
          break;
        }
        if (t.next == '--\x3e'.charCodeAt(e)) {
          if ((e++, 3 == e)) {
            i > 3 && t.acceptToken(57, -2);
            break;
          }
        } else e = 0;
        t.advance();
      }
    });
  function Gf(t, e, i) {
    let n = 2 + t.length;
    return new Of((r) => {
      for (let s = 0, o = 0, a = 0; ; a++) {
        if (r.next < 0) {
          a && r.acceptToken(e);
          break;
        }
        if (
          (0 == s && 60 == r.next) ||
          (1 == s && 47 == r.next) ||
          (s >= 2 && s < n && r.next == t.charCodeAt(s - 2))
        )
          s++, o++;
        else if ((2 != s && s != n) || !Zf(r.next)) {
          if (s == n && 62 == r.next) {
            a > o ? r.acceptToken(e, -o) : r.acceptToken(i, -(o - 2));
            break;
          }
          if ((10 == r.next || 13 == r.next) && a) {
            r.acceptToken(e, 1);
            break;
          }
          s = o = 0;
        } else o++;
        r.advance();
      }
    });
  }
  const If = Gf('script', 53, 1),
    Nf = Gf('style', 54, 2),
    Bf = Gf('textarea', 55, 3),
    Ff = Pf.deserialize({
      version: 13,
      states:
        ",xOVOxOOO!WQ!bO'#CoO!]Q!bO'#CyO!bQ!bO'#C|O!gQ!bO'#DPO!lQ!bO'#DRO!qOXO'#CnO!|OYO'#CnO#XO[O'#CnO$eOxO'#CnOOOW'#Cn'#CnO$lO!rO'#DSO$tQ!bO'#DUO$yQ!bO'#DVOOOW'#Dj'#DjOOOW'#DX'#DXQVOxOOO%OQ#tO,59ZO%WQ#tO,59eO%`Q#tO,59hO%hQ#tO,59kO%pQ#tO,59mOOOX'#D]'#D]O%xOXO'#CwO&TOXO,59YOOOY'#D^'#D^O&]OYO'#CzO&hOYO,59YOOO['#D_'#D_O&pO[O'#C}O&{O[O,59YOOOW'#D`'#D`O'TOxO,59YO'[Q!bO'#DQOOOW,59Y,59YOOO`'#Da'#DaO'aO!rO,59nOOOW,59n,59nO'iQ!bO,59pO'nQ!bO,59qOOOW-E7V-E7VO'sQ#tO'#CqOOQO'#DY'#DYO(OQ#tO1G.uOOOX1G.u1G.uO(WQ#tO1G/POOOY1G/P1G/PO(`Q#tO1G/SOOO[1G/S1G/SO(hQ#tO1G/VOOOW1G/V1G/VO(pQ#tO1G/XOOOW1G/X1G/XOOOX-E7Z-E7ZO(xQ!bO'#CxOOOW1G.t1G.tOOOY-E7[-E7[O(}Q!bO'#C{OOO[-E7]-E7]O)SQ!bO'#DOOOOW-E7^-E7^O)XQ!bO,59lOOO`-E7_-E7_OOOW1G/Y1G/YOOOW1G/[1G/[OOOW1G/]1G/]O)^Q&jO,59]OOQO-E7W-E7WOOOX7+$a7+$aOOOY7+$k7+$kOOO[7+$n7+$nOOOW7+$q7+$qOOOW7+$s7+$sO)iQ!bO,59dO)nQ!bO,59gO)sQ!bO,59jOOOW1G/W1G/WO)xO,UO'#CtO*WO7[O'#CtOOQO1G.w1G.wOOOW1G/O1G/OOOOW1G/R1G/ROOOW1G/U1G/UOOOO'#DZ'#DZO*fO,UO,59`OOQO,59`,59`OOOO'#D['#D[O*tO7[O,59`OOOO-E7X-E7XOOQO1G.z1G.zOOOO-E7Y-E7Y",
      stateData:
        '+[~O!]OS~OSSOTPOUQOVROWTOY]OZ[O[^O^^O_^O`^Oa^Ow^Oz_O!cZO~OdaO~OdbO~OdcO~OddO~OdeO~O!VfOPkP!YkP~O!WiOQnP!YnP~O!XlORqP!YqP~OSSOTPOUQOVROWTOXqOY]OZ[O[^O^^O_^O`^Oa^Ow^O!cZO~O!YrO~P#dO!ZsO!duO~OdvO~OdwO~OfyOj|O~OfyOj!OO~OfyOj!QO~OfyOj!SO~OfyOj!UO~O!VfOPkX!YkX~OP!WO!Y!XO~O!WiOQnX!YnX~OQ!ZO!Y!XO~O!XlORqX!YqX~OR!]O!Y!XO~O!Y!XO~P#dOd!_O~O!ZsO!d!aO~Oj!bO~Oj!cO~Og!dOfeXjeX~OfyOj!fO~OfyOj!gO~OfyOj!hO~OfyOj!iO~OfyOj!jO~Od!kO~Od!lO~Od!mO~Oj!nO~Oi!qO!_!oO!a!pO~Oj!rO~Oj!sO~Oj!tO~O_!uO`!uO!_!wO!`!uO~O_!xO`!xO!a!wO!b!xO~O_!uO`!uO!_!{O!`!uO~O_!xO`!xO!a!{O!b!xO~O`_a!cwz!c~',
      goto: '%o!_PPPPPPPPPPPPPPPPPP!`!fP!lPP!xPP!{#O#R#X#[#_#e#h#k#q#w!`P!`!`P#}$T$k$q$w$}%T%Z%aPPPPPPPP%gX^OX`pXUOX`pezabcde{}!P!R!TR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ}bQ!PcQ!RdQ!TeZ!e{}!P!R!TQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp',
      nodeNames:
        '⚠ StartCloseTag StartCloseTag StartCloseTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue EndTag ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl',
      maxTerm: 66,
      context: Vf,
      nodeProps: [
        [
          Us.closedBy,
          -11,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          'EndTag',
          -4,
          19,
          29,
          32,
          35,
          'CloseTag',
        ],
        [
          Us.group,
          -9,
          12,
          15,
          16,
          17,
          18,
          38,
          39,
          40,
          41,
          'Entity',
          14,
          'Entity TextContent',
          -3,
          27,
          30,
          33,
          'TextContent Entity',
        ],
        [
          Us.openedBy,
          26,
          'StartTag StartCloseTag',
          -4,
          28,
          31,
          34,
          36,
          'OpenTag',
        ],
      ],
      skippedNodes: [0],
      repeatNodeCount: 9,
      tokenData:
        "!#b!aR!WOX$kXY)sYZ)sZ]$k]^)s^p$kpq)sqr$krs*zsv$kvw+dwx2yx}$k}!O3f!O!P$k!P!Q7_!Q![$k![!]8u!]!^$k!^!_>b!_!`!!p!`!a8T!a!c$k!c!}8u!}#R$k#R#S8u#S#T$k#T#o8u#o$f$k$f$g&R$g%W$k%W%o8u%o%p$k%p&a8u&a&b$k&b1p8u1p4U$k4U4d8u4d4e$k4e$IS8u$IS$I`$k$I`$Ib8u$Ib$Kh$k$Kh%#t8u%#t&/x$k&/x&Et8u&Et&FV$k&FV;'S8u;'S;:j<t;:j?&r$k?&r?Ah8u?Ah?BY$k?BY?Mn8u?Mn~$k!Z$vc^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g~$k!R&[V^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&Rq&xT^P!bpOv&qwx'Xx!^&q!^!_'g!_~&qP'^R^POv'Xw!^'X!_~'Xp'lQ!bpOv'gx~'ga'yU^P!``Or'rrs'Xsv'rw!^'r!^!_(]!_~'r`(bR!``Or(]sv(]w~(]!Q(rT!``!bpOr(krs'gsv(kwx(]x~(kW)WXiWOX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!a*O^^P!``!bp!]^OX&RXY)sYZ)sZ]&R]^)s^p&Rpq)sqr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!Z+TT!_h^P!bpOv&qwx'Xx!^&q!^!_'g!_~&q!Z+kbiWaPOX,sXZ.QZ],s]^.Q^p,sqr,srs.Qst/]tw,swx.Qx!P,s!P!Q.Q!Q!],s!]!^)R!^!a.Q!a$f,s$f$g.Q$g~,s!Z,xbiWOX,sXZ.QZ],s]^.Q^p,sqr,srs.Qst)Rtw,swx.Qx!P,s!P!Q.Q!Q!],s!]!^.i!^!a.Q!a$f,s$f$g.Q$g~,s!R.TTOp.Qqs.Qt!].Q!]!^.d!^~.Q!R.iO_!R!Z.pXiW_!ROX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!Z/baiWOX0gXZ1qZ]0g]^1q^p0gqr0grs1qsw0gwx1qx!P0g!P!Q1q!Q!]0g!]!^)R!^!a1q!a$f0g$f$g1q$g~0g!Z0laiWOX0gXZ1qZ]0g]^1q^p0gqr0grs1qsw0gwx1qx!P0g!P!Q1q!Q!]0g!]!^2V!^!a1q!a$f0g$f$g1q$g~0g!R1tSOp1qq!]1q!]!^2Q!^~1q!R2VO`!R!Z2^XiW`!ROX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!Z3SU!ax^P!``Or'rrs'Xsv'rw!^'r!^!_(]!_~'r!]3qe^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx}$k}!O5S!O!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g~$k!]5_d^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!`&R!`!a6m!a$f$k$f$g&R$g~$k!T6xV^P!``!bp!dQOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!X7hX^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_!`&R!`!a8T!a~&R!X8`VjU^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!a9U!YfSdQ^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx}$k}!O8u!O!P8u!P!Q&R!Q![8u![!]8u!]!^$k!^!_(k!_!a&R!a!c$k!c!}8u!}#R$k#R#S8u#S#T$k#T#o8u#o$f$k$f$g&R$g$}$k$}%O8u%O%W$k%W%o8u%o%p$k%p&a8u&a&b$k&b1p8u1p4U8u4U4d8u4d4e$k4e$IS8u$IS$I`$k$I`$Ib8u$Ib$Je$k$Je$Jg8u$Jg$Kh$k$Kh%#t8u%#t&/x$k&/x&Et8u&Et&FV$k&FV;'S8u;'S;:j<t;:j?&r$k?&r?Ah8u?Ah?BY$k?BY?Mn8u?Mn~$k!a=Pe^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g;=`$k;=`<%l8u<%l~$k!R>iW!``!bpOq(kqr?Rrs'gsv(kwx(]x!a(k!a!bKj!b~(k!R?YZ!``!bpOr(krs'gsv(kwx(]x}(k}!O?{!O!f(k!f!gAR!g#W(k#W#XGz#X~(k!R@SV!``!bpOr(krs'gsv(kwx(]x}(k}!O@i!O~(k!R@rT!``!bp!cPOr(krs'gsv(kwx(]x~(k!RAYV!``!bpOr(krs'gsv(kwx(]x!q(k!q!rAo!r~(k!RAvV!``!bpOr(krs'gsv(kwx(]x!e(k!e!fB]!f~(k!RBdV!``!bpOr(krs'gsv(kwx(]x!v(k!v!wBy!w~(k!RCQV!``!bpOr(krs'gsv(kwx(]x!{(k!{!|Cg!|~(k!RCnV!``!bpOr(krs'gsv(kwx(]x!r(k!r!sDT!s~(k!RD[V!``!bpOr(krs'gsv(kwx(]x!g(k!g!hDq!h~(k!RDxW!``!bpOrDqrsEbsvDqvwEvwxFfx!`Dq!`!aGb!a~DqqEgT!bpOvEbvxEvx!`Eb!`!aFX!a~EbPEyRO!`Ev!`!aFS!a~EvPFXOzPqF`Q!bpzPOv'gx~'gaFkV!``OrFfrsEvsvFfvwEvw!`Ff!`!aGQ!a~FfaGXR!``zPOr(]sv(]w~(]!RGkT!``!bpzPOr(krs'gsv(kwx(]x~(k!RHRV!``!bpOr(krs'gsv(kwx(]x#c(k#c#dHh#d~(k!RHoV!``!bpOr(krs'gsv(kwx(]x#V(k#V#WIU#W~(k!RI]V!``!bpOr(krs'gsv(kwx(]x#h(k#h#iIr#i~(k!RIyV!``!bpOr(krs'gsv(kwx(]x#m(k#m#nJ`#n~(k!RJgV!``!bpOr(krs'gsv(kwx(]x#d(k#d#eJ|#e~(k!RKTV!``!bpOr(krs'gsv(kwx(]x#X(k#X#YDq#Y~(k!RKqW!``!bpOrKjrsLZsvKjvwLowxNPx!aKj!a!b! g!b~KjqL`T!bpOvLZvxLox!aLZ!a!bM^!b~LZPLrRO!aLo!a!bL{!b~LoPMORO!`Lo!`!aMX!a~LoPM^OwPqMcT!bpOvLZvxLox!`LZ!`!aMr!a~LZqMyQ!bpwPOv'gx~'gaNUV!``OrNPrsLosvNPvwLow!aNP!a!bNk!b~NPaNpV!``OrNPrsLosvNPvwLow!`NP!`!a! V!a~NPa! ^R!``wPOr(]sv(]w~(]!R! nW!``!bpOrKjrsLZsvKjvwLowxNPx!`Kj!`!a!!W!a~Kj!R!!aT!``!bpwPOr(krs'gsv(kwx(]x~(k!V!!{VgS^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R",
      tokenizers: [If, Nf, Bf, Yf, Uf, 0, 1, 2, 3, 4, 5],
      topRules: { Document: [0, 13] },
      dialects: { noMatch: 0 },
      tokenPrec: 464,
    });
  function Hf(t, e) {
    let i = Object.create(null);
    for (let n of t.firstChild.getChildren('Attribute')) {
      let t = n.getChild('AttributeName'),
        r =
          n.getChild('AttributeValue') || n.getChild('UnquotedAttributeValue');
      t &&
        (i[e.read(t.from, t.to)] = r
          ? 'AttributeValue' == r.name
            ? e.read(r.from + 1, r.to - 1)
            : e.read(r.from, r.to)
          : '');
    }
    return i;
  }
  function Jf(t, e, i) {
    let n;
    for (let r of i)
      if (!r.attrs || r.attrs(n || (n = Hf(t.node.parent, e))))
        return { parser: r.parser };
    return null;
  }
  function Kf(t) {
    let e = [],
      i = [],
      n = [];
    for (let r of t) {
      let t =
        'script' == r.tag
          ? e
          : 'style' == r.tag
          ? i
          : 'textarea' == r.tag
          ? n
          : null;
      if (!t)
        throw new RangeError(
          'Only script, style, and textarea tags can host nested parsers'
        );
      t.push(r);
    }
    return (
      (r = (t, r) => {
        let s = t.type.id;
        return 27 == s
          ? Jf(t, r, e)
          : 30 == s
          ? Jf(t, r, i)
          : 33 == s
          ? Jf(t, r, n)
          : null;
      }),
      (t, e, i, n) => new vo(t, r, e, i, n)
    );
    var r;
  }
  const tO = [
    9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197,
    8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288,
  ];
  function eO(t) {
    return (t >= 65 && t <= 90) || (t >= 97 && t <= 122) || t >= 161;
  }
  const iO = new Of((t, e) => {
      for (let n = !1, r = 0, s = 0; ; s++) {
        let { next: o } = t;
        if (
          !(eO(o) || 45 == o || 95 == o || (n && ((i = o), i >= 48 && i <= 57)))
        ) {
          n && t.acceptToken(40 == o ? 94 : 2 == r && e.canShift(2) ? 2 : 95);
          break;
        }
        !n && (45 != o || s > 0) && (n = !0),
          r === s && 45 == o && r++,
          t.advance();
      }
      var i;
    }),
    nO = new Of((t) => {
      if (tO.includes(t.peek(-1))) {
        let { next: e } = t;
        (eO(e) ||
          95 == e ||
          35 == e ||
          46 == e ||
          91 == e ||
          58 == e ||
          45 == e) &&
          t.acceptToken(93);
      }
    }),
    rO = new Of((t) => {
      if (!tO.includes(t.peek(-1))) {
        let { next: e } = t;
        if ((37 == e && (t.advance(), t.acceptToken(1)), eO(e))) {
          do {
            t.advance();
          } while (eO(t.next));
          t.acceptToken(1);
        }
      }
    }),
    sO = {
      __proto__: null,
      lang: 32,
      'nth-child': 32,
      'nth-last-child': 32,
      'nth-of-type': 32,
      dir: 32,
      url: 60,
      'url-prefix': 60,
      domain: 60,
      regexp: 60,
      selector: 134,
    },
    oO = {
      __proto__: null,
      '@import': 114,
      '@media': 138,
      '@charset': 142,
      '@namespace': 146,
      '@keyframes': 152,
      '@supports': 164,
    },
    aO = { __proto__: null, not: 128, only: 128, from: 158, to: 160 },
    lO = Pf.deserialize({
      version: 13,
      states:
        "7WOYQ[OOOOQP'#Cd'#CdOOQP'#Cc'#CcO!ZQ[O'#CfO!}QXO'#CaO#UQ[O'#ChO#aQ[O'#DPO#fQ[O'#DTOOQP'#Ec'#EcO#kQdO'#DeO$VQ[O'#DrO#kQdO'#DtO$hQ[O'#DvO$sQ[O'#DyO$xQ[O'#EPO%WQ[O'#EROOQS'#Eb'#EbOOQS'#ES'#ESQYQ[OOOOQP'#Cg'#CgOOQP,59Q,59QO!ZQ[O,59QO%_Q[O'#EVO%yQWO,58{O&RQ[O,59SO#aQ[O,59kO#fQ[O,59oO%_Q[O,59sO%_Q[O,59uO%_Q[O,59vO'bQ[O'#D`OOQS,58{,58{OOQP'#Ck'#CkOOQO'#C}'#C}OOQP,59S,59SO'iQWO,59SO'nQWO,59SOOQP'#DR'#DROOQP,59k,59kOOQO'#DV'#DVO'sQ`O,59oOOQS'#Cp'#CpO#kQdO'#CqO'{QvO'#CsO)VQtO,5:POOQO'#Cx'#CxO'iQWO'#CwO)kQWO'#CyOOQS'#Ef'#EfOOQO'#Dh'#DhO)pQ[O'#DoO*OQWO'#EiO$xQ[O'#DmO*^QWO'#DpOOQO'#Ej'#EjO%|QWO,5:^O*cQpO,5:`OOQS'#Dx'#DxO*kQWO,5:bO*pQ[O,5:bOOQO'#D{'#D{O*xQWO,5:eO*}QWO,5:kO+VQWO,5:mOOQS-E8Q-E8QOOQP1G.l1G.lO+yQXO,5:qOOQO-E8T-E8TOOQS1G.g1G.gOOQP1G.n1G.nO'iQWO1G.nO'nQWO1G.nOOQP1G/V1G/VO,WQ`O1G/ZO,qQXO1G/_O-XQXO1G/aO-oQXO1G/bO.VQXO'#CdO.zQWO'#DaOOQS,59z,59zO/PQWO,59zO/XQ[O,59zO/`QdO'#CoO/gQ[O'#DOOOQP1G/Z1G/ZO#kQdO1G/ZO/nQpO,59]OOQS,59_,59_O#kQdO,59aO/vQWO1G/kOOQS,59c,59cO/{Q!bO,59eO0TQWO'#DhO0`QWO,5:TO0eQWO,5:ZO$xQ[O,5:VO$xQ[O'#EYO0mQWO,5;TO0xQWO,5:XO%_Q[O,5:[OOQS1G/x1G/xOOQS1G/z1G/zOOQS1G/|1G/|O1ZQWO1G/|O1`QdO'#D|OOQS1G0P1G0POOQS1G0V1G0VOOQS1G0X1G0XOOQP7+$Y7+$YOOQP7+$u7+$uO#kQdO7+$uO#kQdO,59{O1nQ[O'#EXO1xQWO1G/fOOQS1G/f1G/fO1xQWO1G/fO2QQtO'#ETO2uQdO'#EeO3PQWO,59ZO3UQXO'#EhO3]QWO,59jO3bQpO7+$uOOQS1G.w1G.wOOQS1G.{1G.{OOQS7+%V7+%VO3jQWO1G/PO#kQdO1G/oOOQO1G/u1G/uOOQO1G/q1G/qO3oQWO,5:tOOQO-E8W-E8WO3}QXO1G/vOOQS7+%h7+%hO4UQYO'#CsO%|QWO'#EZO4^QdO,5:hOOQS,5:h,5:hO4lQpO<<HaO4tQtO1G/gOOQO,5:s,5:sO5XQ[O,5:sOOQO-E8V-E8VOOQS7+%Q7+%QO5cQWO7+%QOOQS-E8R-E8RO#kQdO'#EUO5kQWO,5;POOQT1G.u1G.uO5sQWO,5;SOOQP1G/U1G/UOOQP<<Ha<<HaOOQS7+$k7+$kO5{QdO7+%ZOOQO7+%b7+%bOOQS,5:u,5:uOOQS-E8X-E8XOOQS1G0S1G0SOOQPAN={AN={O6SQtO'#EWO#kQdO'#EWO6}QdO7+%ROOQO7+%R7+%ROOQO1G0_1G0_OOQS<<Hl<<HlO7_QdO,5:pOOQO-E8S-E8SOOQO<<Hu<<HuO7iQtO,5:rOOQS-E8U-E8UOOQO<<Hm<<Hm",
      stateData:
        '8j~O#TOSROS~OUWOXWO]TO^TOtUOxVO!Y_O!ZXO!gYO!iZO!k[O!n]O!t^O#RPO#WRO~O#RcO~O]hO^hOpfOtiOxjO|kO!PmO#PlO#WeO~O!RnO~P!`O`sO#QqO#RpO~O#RuO~O#RwO~OQ!QObzOf!QOh!QOn!PO#Q}O#RyO#Z{O~Ob!SO!b!UO!e!VO#R!RO!R#]P~Oh![On!PO#R!ZO~O#R!^O~Ob!SO!b!UO!e!VO#R!RO~O!W#]P~P$VOUWOXWO]TO^TOtUOxVO#RPO#WRO~OpfO!RnO~O`!hO#QqO#RpO~OQ!pOUWOXWO]TO^TOtUOxVO!Y_O!ZXO!gYO!iZO!k[O!n]O!t^O#R!oO#WRO~O!Q!qO~P&^Ob!tO~Ob!uO~Ov!vOz!wO~OP!yObgXjgX!WgX!bgX!egX#RgXagXQgXfgXhgXngXpgX#QgX#ZgXvgX!QgX!VgX~Ob!SOj!zO!b!UO!e!VO#R!RO!W#]P~Ob!}O~Ob!SO!b!UO!e!VO#R#OO~Op#SO!`#RO!R#]X!W#]X~Ob#VO~Oj!zO!W#XO~O!W#YO~Oh#ZOn!PO~O!R#[O~O!RnO!`#RO~O!RnO!W#_O~O]hO^hOtiOxjO|kO!PmO#PlO#WeO~Op!ya!R!yaa!ya~P+_Ov#aOz#bO~O]hO^hOtiOxjO#WeO~Op{i|{i!P{i!R{i#P{ia{i~P,`Op}i|}i!P}i!R}i#P}ia}i~P,`Op!Oi|!Oi!P!Oi!R!Oi#P!Oia!Oi~P,`O]WX]!UX^WXpWXtWXxWX|WX!PWX!RWX#PWX#WWX~O]#cO~O!Q#fO!W#dO~O!Q#fO~P&^Oa#XP~P#kOa#[P~P%_Oa#nOj!zO~O!W#pO~Oh#qOo#qO~O]!^Xa![X!`![X~O]#rO~Oa#sO!`#RO~Op#SO!R#]a!W#]a~O!`#ROp!aa!R!aa!W!aaa!aa~O!W#xO~O!Q#|O!q#zO!r#zO#Z#yO~O!Q!{X!W!{X~P&^O!Q$SO!W#dO~Oj!zOQ!wXa!wXb!wXf!wXh!wXn!wXp!wX#Q!wX#R!wX#Z!wX~Op$VOa#XX~P#kOa$XO~Oa#[X~P!`Oa$ZO~Oj!zOv$[O~Oa$]O~O!`#ROp!|a!R!|a!W!|a~Oa$_O~P+_OP!yO!RgX~O!Q$bO!q#zO!r#zO#Z#yO~Oj!zOv$cO~Oj!zOp$eO!V$gO!Q!Ti!W!Ti~P#kO!Q!{a!W!{a~P&^O!Q$iO!W#dO~Op$VOa#Xa~OpfOa#[a~Oa$lO~P#kOj!zOQ!zXb!zXf!zXh!zXn!zXp!zX!Q!zX!V!zX!W!zX#Q!zX#R!zX#Z!zX~Op$eO!V$oO!Q!Tq!W!Tq~P#kOa!xap!xa~P#kOj!zOQ!zab!zaf!zah!zan!zap!za!Q!za!V!za!W!za#Q!za#R!za#Z!za~Oo#Zj!Pj~',
      goto: ",O#_PPPPP#`P#h#vP#h$U#hPP$[PPP$b$k$kP$}P$kP$k%e%wPPP&a&g#hP&mP#hP&sP#hP#h#hPPP&y']'iPP#`PP'o'o'y'oP'oP'o'oP#`P#`P#`P'|#`P(P(SPP#`P#`(V(e(s(y)T)Z)e)kPPPPPP)q)yP*e*hP+^+a+j]`Obn!s#d$QiWObfklmn!s!u#V#d$QiQObfklmn!s!u#V#d$QQdRR!ceQrTR!ghQ!gsQ!|!OR#`!hq!QXZz!t!w!z#b#c#i#r$O$V$^$e$f$jp!QXZz!t!w!z#b#c#i#r$O$V$^$e$f$jT#z#[#{q!OXZz!t!w!z#b#c#i#r$O$V$^$e$f$jp!QXZz!t!w!z#b#c#i#r$O$V$^$e$f$jQ![[R#Z!]QtTR!ihQ!gtR#`!iQvUR!jiQxVR!kjQoSQ!fgQ#W!XQ#^!`Q#_!aR$`#zQ!rnQ#g!sQ$P#dR$h$QX!pn!s#d$Qa!WY^_|!S!U#R#SR#P!SR!][R!_]R#]!_QbOU!bb!s$QQ!snR$Q#dQ#i!tU$U#i$^$jQ$^#rR$j$VQ$W#iR$k$WQgSS!eg$YR$Y#kQ$f$OR$n$fQ#e!rS$R#e$TR$T#gQ#T!TR#v#TQ#{#[R$a#{]aObn!s#d$Q[SObn!s#d$QQ!dfQ!lkQ!mlQ!nmQ#k!uR#w#VR#j!tQ|XQ!YZQ!xz[#h!t#i#r$V$^$jQ#m!wQ#o!zQ#}#bQ$O#cS$d$O$fR$m$eR#l!uQ!XYQ!a_R!{|U!TY_|Q!`^Q#Q!SQ#U!UQ#t#RR#u#S",
      nodeNames:
        '⚠ Unit VariableName Comment StyleSheet RuleSet UniversalSelector TagSelector TagName NestingSelector ClassSelector ClassName PseudoClassSelector : :: PseudoClassName PseudoClassName ) ( ArgList ValueName ParenthesizedValue ColorLiteral NumberLiteral StringLiteral BinaryExpression BinOp CallExpression Callee CallLiteral CallTag ParenthesizedContent , PseudoClassName ArgList IdSelector # IdName ] AttributeSelector [ AttributeName MatchOp ChildSelector ChildOp DescendantSelector SiblingSelector SiblingOp } { Block Declaration PropertyName Important ; ImportStatement AtKeyword import KeywordQuery FeatureQuery FeatureName BinaryQuery LogicOp UnaryQuery UnaryQueryOp ParenthesizedQuery SelectorQuery selector MediaStatement media CharsetStatement charset NamespaceStatement namespace NamespaceName KeyframesStatement keyframes KeyframeName KeyframeList from to SupportsStatement supports AtRule',
      maxTerm: 106,
      nodeProps: [
        [Us.openedBy, 17, '(', 48, '{'],
        [Us.closedBy, 18, ')', 49, '}'],
      ],
      skippedNodes: [0, 3],
      repeatNodeCount: 8,
      tokenData:
        'Ay~R![OX$wX^%]^p$wpq%]qr(crs+}st,otu2Uuv$wvw2rwx2}xy3jyz3uz{3z{|4_|}8U}!O8a!O!P8x!P!Q9Z!Q![;e![!]<Y!]!^<x!^!_$w!_!`=T!`!a=`!a!b$w!b!c>O!c!}$w!}#O?[#O#P$w#P#Q?g#Q#R2U#R#T$w#T#U?r#U#c$w#c#d@q#d#o$w#o#pAQ#p#q2U#q#rA]#r#sAh#s#y$w#y#z%]#z$f$w$f$g%]$g#BY$w#BY#BZ%]#BZ$IS$w$IS$I_%]$I_$I|$w$I|$JO%]$JO$JT$w$JT$JU%]$JU$KV$w$KV$KW%]$KW&FU$w&FU&FV%]&FV~$wW$zQOy%Qz~%QW%VQoWOy%Qz~%Q~%bf#T~OX%QX^&v^p%Qpq&vqy%Qz#y%Q#y#z&v#z$f%Q$f$g&v$g#BY%Q#BY#BZ&v#BZ$IS%Q$IS$I_&v$I_$I|%Q$I|$JO&v$JO$JT%Q$JT$JU&v$JU$KV%Q$KV$KW&v$KW&FU%Q&FU&FV&v&FV~%Q~&}f#T~oWOX%QX^&v^p%Qpq&vqy%Qz#y%Q#y#z&v#z$f%Q$f$g&v$g#BY%Q#BY#BZ&v#BZ$IS%Q$IS$I_&v$I_$I|%Q$I|$JO&v$JO$JT%Q$JT$JU&v$JU$KV%Q$KV$KW&v$KW&FU%Q&FU&FV&v&FV~%Q^(fSOy%Qz#]%Q#]#^(r#^~%Q^(wSoWOy%Qz#a%Q#a#b)T#b~%Q^)YSoWOy%Qz#d%Q#d#e)f#e~%Q^)kSoWOy%Qz#c%Q#c#d)w#d~%Q^)|SoWOy%Qz#f%Q#f#g*Y#g~%Q^*_SoWOy%Qz#h%Q#h#i*k#i~%Q^*pSoWOy%Qz#T%Q#T#U*|#U~%Q^+RSoWOy%Qz#b%Q#b#c+_#c~%Q^+dSoWOy%Qz#h%Q#h#i+p#i~%Q^+wQ!VUoWOy%Qz~%Q~,QUOY+}Zr+}rs,ds#O+}#O#P,i#P~+}~,iOh~~,lPO~+}_,tWtPOy%Qz!Q%Q!Q![-^![!c%Q!c!i-^!i#T%Q#T#Z-^#Z~%Q^-cWoWOy%Qz!Q%Q!Q![-{![!c%Q!c!i-{!i#T%Q#T#Z-{#Z~%Q^.QWoWOy%Qz!Q%Q!Q![.j![!c%Q!c!i.j!i#T%Q#T#Z.j#Z~%Q^.qWfUoWOy%Qz!Q%Q!Q![/Z![!c%Q!c!i/Z!i#T%Q#T#Z/Z#Z~%Q^/bWfUoWOy%Qz!Q%Q!Q![/z![!c%Q!c!i/z!i#T%Q#T#Z/z#Z~%Q^0PWoWOy%Qz!Q%Q!Q![0i![!c%Q!c!i0i!i#T%Q#T#Z0i#Z~%Q^0pWfUoWOy%Qz!Q%Q!Q![1Y![!c%Q!c!i1Y!i#T%Q#T#Z1Y#Z~%Q^1_WoWOy%Qz!Q%Q!Q![1w![!c%Q!c!i1w!i#T%Q#T#Z1w#Z~%Q^2OQfUoWOy%Qz~%QY2XSOy%Qz!_%Q!_!`2e!`~%QY2lQzQoWOy%Qz~%QX2wQXPOy%Qz~%Q~3QUOY2}Zw2}wx,dx#O2}#O#P3d#P~2}~3gPO~2}_3oQbVOy%Qz~%Q~3zOa~_4RSUPjSOy%Qz!_%Q!_!`2e!`~%Q_4fUjS!PPOy%Qz!O%Q!O!P4x!P!Q%Q!Q![7_![~%Q^4}SoWOy%Qz!Q%Q!Q![5Z![~%Q^5bWoW#ZUOy%Qz!Q%Q!Q![5Z![!g%Q!g!h5z!h#X%Q#X#Y5z#Y~%Q^6PWoWOy%Qz{%Q{|6i|}%Q}!O6i!O!Q%Q!Q![6z![~%Q^6nSoWOy%Qz!Q%Q!Q![6z![~%Q^7RSoW#ZUOy%Qz!Q%Q!Q![6z![~%Q^7fYoW#ZUOy%Qz!O%Q!O!P5Z!P!Q%Q!Q![7_![!g%Q!g!h5z!h#X%Q#X#Y5z#Y~%Q_8ZQpVOy%Qz~%Q^8fUjSOy%Qz!O%Q!O!P4x!P!Q%Q!Q![7_![~%Q_8}S#WPOy%Qz!Q%Q!Q![5Z![~%Q~9`RjSOy%Qz{9i{~%Q~9nSoWOy9iyz9zz{:o{~9i~9}ROz9zz{:W{~9z~:ZTOz9zz{:W{!P9z!P!Q:j!Q~9z~:oOR~~:tUoWOy9iyz9zz{:o{!P9i!P!Q;W!Q~9i~;_QR~oWOy%Qz~%Q^;jY#ZUOy%Qz!O%Q!O!P5Z!P!Q%Q!Q![7_![!g%Q!g!h5z!h#X%Q#X#Y5z#Y~%QX<_S]POy%Qz![%Q![!]<k!]~%QX<rQ^PoWOy%Qz~%Q_<}Q!WVOy%Qz~%QY=YQzQOy%Qz~%QX=eS|POy%Qz!`%Q!`!a=q!a~%QX=xQ|PoWOy%Qz~%QX>RUOy%Qz!c%Q!c!}>e!}#T%Q#T#o>e#o~%QX>lY!YPoWOy%Qz}%Q}!O>e!O!Q%Q!Q![>e![!c%Q!c!}>e!}#T%Q#T#o>e#o~%QX?aQxPOy%Qz~%Q^?lQvUOy%Qz~%QX?uSOy%Qz#b%Q#b#c@R#c~%QX@WSoWOy%Qz#W%Q#W#X@d#X~%QX@kQ!`PoWOy%Qz~%QX@tSOy%Qz#f%Q#f#g@d#g~%QXAVQ!RPOy%Qz~%Q_AbQ!QVOy%Qz~%QZAmS!PPOy%Qz!_%Q!_!`2e!`~%Q',
      tokenizers: [nO, rO, iO, 0, 1, 2, 3],
      topRules: { StyleSheet: [0, 4] },
      specialized: [
        { term: 94, get: (t) => sO[t] || -1 },
        { term: 56, get: (t) => oO[t] || -1 },
        { term: 95, get: (t) => aO[t] || -1 },
      ],
      tokenPrec: 1078,
    });
  let hO = null;
  function cO() {
    if (!hO && 'object' == typeof document && document.body) {
      let t = [];
      for (let e in document.body.style)
        /[A-Z]|^-|^(item|length)$/.test(e) || t.push(e);
      hO = t.sort().map((t) => ({ type: 'property', label: t }));
    }
    return hO || [];
  }
  const uO = [
      'active',
      'after',
      'before',
      'checked',
      'default',
      'disabled',
      'empty',
      'enabled',
      'first-child',
      'first-letter',
      'first-line',
      'first-of-type',
      'focus',
      'hover',
      'in-range',
      'indeterminate',
      'invalid',
      'lang',
      'last-child',
      'last-of-type',
      'link',
      'not',
      'nth-child',
      'nth-last-child',
      'nth-last-of-type',
      'nth-of-type',
      'only-of-type',
      'only-child',
      'optional',
      'out-of-range',
      'placeholder',
      'read-only',
      'read-write',
      'required',
      'root',
      'selection',
      'target',
      'valid',
      'visited',
    ].map((t) => ({ type: 'class', label: t })),
    dO = [
      'above',
      'absolute',
      'activeborder',
      'additive',
      'activecaption',
      'after-white-space',
      'ahead',
      'alias',
      'all',
      'all-scroll',
      'alphabetic',
      'alternate',
      'always',
      'antialiased',
      'appworkspace',
      'asterisks',
      'attr',
      'auto',
      'auto-flow',
      'avoid',
      'avoid-column',
      'avoid-page',
      'avoid-region',
      'axis-pan',
      'background',
      'backwards',
      'baseline',
      'below',
      'bidi-override',
      'blink',
      'block',
      'block-axis',
      'bold',
      'bolder',
      'border',
      'border-box',
      'both',
      'bottom',
      'break',
      'break-all',
      'break-word',
      'bullets',
      'button',
      'button-bevel',
      'buttonface',
      'buttonhighlight',
      'buttonshadow',
      'buttontext',
      'calc',
      'capitalize',
      'caps-lock-indicator',
      'caption',
      'captiontext',
      'caret',
      'cell',
      'center',
      'checkbox',
      'circle',
      'cjk-decimal',
      'clear',
      'clip',
      'close-quote',
      'col-resize',
      'collapse',
      'color',
      'color-burn',
      'color-dodge',
      'column',
      'column-reverse',
      'compact',
      'condensed',
      'contain',
      'content',
      'contents',
      'content-box',
      'context-menu',
      'continuous',
      'copy',
      'counter',
      'counters',
      'cover',
      'crop',
      'cross',
      'crosshair',
      'currentcolor',
      'cursive',
      'cyclic',
      'darken',
      'dashed',
      'decimal',
      'decimal-leading-zero',
      'default',
      'default-button',
      'dense',
      'destination-atop',
      'destination-in',
      'destination-out',
      'destination-over',
      'difference',
      'disc',
      'discard',
      'disclosure-closed',
      'disclosure-open',
      'document',
      'dot-dash',
      'dot-dot-dash',
      'dotted',
      'double',
      'down',
      'e-resize',
      'ease',
      'ease-in',
      'ease-in-out',
      'ease-out',
      'element',
      'ellipse',
      'ellipsis',
      'embed',
      'end',
      'ethiopic-abegede-gez',
      'ethiopic-halehame-aa-er',
      'ethiopic-halehame-gez',
      'ew-resize',
      'exclusion',
      'expanded',
      'extends',
      'extra-condensed',
      'extra-expanded',
      'fantasy',
      'fast',
      'fill',
      'fill-box',
      'fixed',
      'flat',
      'flex',
      'flex-end',
      'flex-start',
      'footnotes',
      'forwards',
      'from',
      'geometricPrecision',
      'graytext',
      'grid',
      'groove',
      'hand',
      'hard-light',
      'help',
      'hidden',
      'hide',
      'higher',
      'highlight',
      'highlighttext',
      'horizontal',
      'hsl',
      'hsla',
      'hue',
      'icon',
      'ignore',
      'inactiveborder',
      'inactivecaption',
      'inactivecaptiontext',
      'infinite',
      'infobackground',
      'infotext',
      'inherit',
      'initial',
      'inline',
      'inline-axis',
      'inline-block',
      'inline-flex',
      'inline-grid',
      'inline-table',
      'inset',
      'inside',
      'intrinsic',
      'invert',
      'italic',
      'justify',
      'keep-all',
      'landscape',
      'large',
      'larger',
      'left',
      'level',
      'lighter',
      'lighten',
      'line-through',
      'linear',
      'linear-gradient',
      'lines',
      'list-item',
      'listbox',
      'listitem',
      'local',
      'logical',
      'loud',
      'lower',
      'lower-hexadecimal',
      'lower-latin',
      'lower-norwegian',
      'lowercase',
      'ltr',
      'luminosity',
      'manipulation',
      'match',
      'matrix',
      'matrix3d',
      'medium',
      'menu',
      'menutext',
      'message-box',
      'middle',
      'min-intrinsic',
      'mix',
      'monospace',
      'move',
      'multiple',
      'multiple_mask_images',
      'multiply',
      'n-resize',
      'narrower',
      'ne-resize',
      'nesw-resize',
      'no-close-quote',
      'no-drop',
      'no-open-quote',
      'no-repeat',
      'none',
      'normal',
      'not-allowed',
      'nowrap',
      'ns-resize',
      'numbers',
      'numeric',
      'nw-resize',
      'nwse-resize',
      'oblique',
      'opacity',
      'open-quote',
      'optimizeLegibility',
      'optimizeSpeed',
      'outset',
      'outside',
      'outside-shape',
      'overlay',
      'overline',
      'padding',
      'padding-box',
      'painted',
      'page',
      'paused',
      'perspective',
      'pinch-zoom',
      'plus-darker',
      'plus-lighter',
      'pointer',
      'polygon',
      'portrait',
      'pre',
      'pre-line',
      'pre-wrap',
      'preserve-3d',
      'progress',
      'push-button',
      'radial-gradient',
      'radio',
      'read-only',
      'read-write',
      'read-write-plaintext-only',
      'rectangle',
      'region',
      'relative',
      'repeat',
      'repeating-linear-gradient',
      'repeating-radial-gradient',
      'repeat-x',
      'repeat-y',
      'reset',
      'reverse',
      'rgb',
      'rgba',
      'ridge',
      'right',
      'rotate',
      'rotate3d',
      'rotateX',
      'rotateY',
      'rotateZ',
      'round',
      'row',
      'row-resize',
      'row-reverse',
      'rtl',
      'run-in',
      'running',
      's-resize',
      'sans-serif',
      'saturation',
      'scale',
      'scale3d',
      'scaleX',
      'scaleY',
      'scaleZ',
      'screen',
      'scroll',
      'scrollbar',
      'scroll-position',
      'se-resize',
      'self-start',
      'self-end',
      'semi-condensed',
      'semi-expanded',
      'separate',
      'serif',
      'show',
      'single',
      'skew',
      'skewX',
      'skewY',
      'skip-white-space',
      'slide',
      'slider-horizontal',
      'slider-vertical',
      'sliderthumb-horizontal',
      'sliderthumb-vertical',
      'slow',
      'small',
      'small-caps',
      'small-caption',
      'smaller',
      'soft-light',
      'solid',
      'source-atop',
      'source-in',
      'source-out',
      'source-over',
      'space',
      'space-around',
      'space-between',
      'space-evenly',
      'spell-out',
      'square',
      'start',
      'static',
      'status-bar',
      'stretch',
      'stroke',
      'stroke-box',
      'sub',
      'subpixel-antialiased',
      'svg_masks',
      'super',
      'sw-resize',
      'symbolic',
      'symbols',
      'system-ui',
      'table',
      'table-caption',
      'table-cell',
      'table-column',
      'table-column-group',
      'table-footer-group',
      'table-header-group',
      'table-row',
      'table-row-group',
      'text',
      'text-bottom',
      'text-top',
      'textarea',
      'textfield',
      'thick',
      'thin',
      'threeddarkshadow',
      'threedface',
      'threedhighlight',
      'threedlightshadow',
      'threedshadow',
      'to',
      'top',
      'transform',
      'translate',
      'translate3d',
      'translateX',
      'translateY',
      'translateZ',
      'transparent',
      'ultra-condensed',
      'ultra-expanded',
      'underline',
      'unidirectional-pan',
      'unset',
      'up',
      'upper-latin',
      'uppercase',
      'url',
      'var',
      'vertical',
      'vertical-text',
      'view-box',
      'visible',
      'visibleFill',
      'visiblePainted',
      'visibleStroke',
      'visual',
      'w-resize',
      'wait',
      'wave',
      'wider',
      'window',
      'windowframe',
      'windowtext',
      'words',
      'wrap',
      'wrap-reverse',
      'x-large',
      'x-small',
      'xor',
      'xx-large',
      'xx-small',
    ]
      .map((t) => ({ type: 'keyword', label: t }))
      .concat(
        [
          'aliceblue',
          'antiquewhite',
          'aqua',
          'aquamarine',
          'azure',
          'beige',
          'bisque',
          'black',
          'blanchedalmond',
          'blue',
          'blueviolet',
          'brown',
          'burlywood',
          'cadetblue',
          'chartreuse',
          'chocolate',
          'coral',
          'cornflowerblue',
          'cornsilk',
          'crimson',
          'cyan',
          'darkblue',
          'darkcyan',
          'darkgoldenrod',
          'darkgray',
          'darkgreen',
          'darkkhaki',
          'darkmagenta',
          'darkolivegreen',
          'darkorange',
          'darkorchid',
          'darkred',
          'darksalmon',
          'darkseagreen',
          'darkslateblue',
          'darkslategray',
          'darkturquoise',
          'darkviolet',
          'deeppink',
          'deepskyblue',
          'dimgray',
          'dodgerblue',
          'firebrick',
          'floralwhite',
          'forestgreen',
          'fuchsia',
          'gainsboro',
          'ghostwhite',
          'gold',
          'goldenrod',
          'gray',
          'grey',
          'green',
          'greenyellow',
          'honeydew',
          'hotpink',
          'indianred',
          'indigo',
          'ivory',
          'khaki',
          'lavender',
          'lavenderblush',
          'lawngreen',
          'lemonchiffon',
          'lightblue',
          'lightcoral',
          'lightcyan',
          'lightgoldenrodyellow',
          'lightgray',
          'lightgreen',
          'lightpink',
          'lightsalmon',
          'lightseagreen',
          'lightskyblue',
          'lightslategray',
          'lightsteelblue',
          'lightyellow',
          'lime',
          'limegreen',
          'linen',
          'magenta',
          'maroon',
          'mediumaquamarine',
          'mediumblue',
          'mediumorchid',
          'mediumpurple',
          'mediumseagreen',
          'mediumslateblue',
          'mediumspringgreen',
          'mediumturquoise',
          'mediumvioletred',
          'midnightblue',
          'mintcream',
          'mistyrose',
          'moccasin',
          'navajowhite',
          'navy',
          'oldlace',
          'olive',
          'olivedrab',
          'orange',
          'orangered',
          'orchid',
          'palegoldenrod',
          'palegreen',
          'paleturquoise',
          'palevioletred',
          'papayawhip',
          'peachpuff',
          'peru',
          'pink',
          'plum',
          'powderblue',
          'purple',
          'rebeccapurple',
          'red',
          'rosybrown',
          'royalblue',
          'saddlebrown',
          'salmon',
          'sandybrown',
          'seagreen',
          'seashell',
          'sienna',
          'silver',
          'skyblue',
          'slateblue',
          'slategray',
          'snow',
          'springgreen',
          'steelblue',
          'tan',
          'teal',
          'thistle',
          'tomato',
          'turquoise',
          'violet',
          'wheat',
          'white',
          'whitesmoke',
          'yellow',
          'yellowgreen',
        ].map((t) => ({ type: 'constant', label: t }))
      ),
    fO = [
      'a',
      'abbr',
      'address',
      'article',
      'aside',
      'b',
      'bdi',
      'bdo',
      'blockquote',
      'body',
      'br',
      'button',
      'canvas',
      'caption',
      'cite',
      'code',
      'col',
      'colgroup',
      'dd',
      'del',
      'details',
      'dfn',
      'dialog',
      'div',
      'dl',
      'dt',
      'em',
      'figcaption',
      'figure',
      'footer',
      'form',
      'header',
      'hgroup',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'hr',
      'html',
      'i',
      'iframe',
      'img',
      'input',
      'ins',
      'kbd',
      'label',
      'legend',
      'li',
      'main',
      'meter',
      'nav',
      'ol',
      'output',
      'p',
      'pre',
      'ruby',
      'section',
      'select',
      'small',
      'source',
      'span',
      'strong',
      'sub',
      'summary',
      'sup',
      'table',
      'tbody',
      'td',
      'template',
      'textarea',
      'tfoot',
      'th',
      'thead',
      'tr',
      'u',
      'ul',
    ].map((t) => ({ type: 'type', label: t })),
    OO = /^[\w-]*/,
    pO = Ao.define({
      parser: lO.configure({
        props: [
          Bo.add({ Declaration: na() }),
          oa.add({ Block: aa }),
          ld({
            'import charset namespace keyframes': _d.definitionKeyword,
            'media supports': _d.controlKeyword,
            'from to selector': _d.keyword,
            NamespaceName: _d.namespace,
            KeyframeName: _d.labelName,
            TagName: _d.tagName,
            ClassName: _d.className,
            PseudoClassName: _d.constant(_d.className),
            IdName: _d.labelName,
            'FeatureName PropertyName': _d.propertyName,
            AttributeName: _d.attributeName,
            NumberLiteral: _d.number,
            KeywordQuery: _d.keyword,
            UnaryQueryOp: _d.operatorKeyword,
            'CallTag ValueName': _d.atom,
            VariableName: _d.variableName,
            Callee: _d.operatorKeyword,
            Unit: _d.unit,
            'UniversalSelector NestingSelector': _d.definitionOperator,
            AtKeyword: _d.keyword,
            MatchOp: _d.compareOperator,
            'ChildOp SiblingOp, LogicOp': _d.logicOperator,
            BinOp: _d.arithmeticOperator,
            Important: _d.modifier,
            Comment: _d.blockComment,
            ParenthesizedContent: _d.special(_d.name),
            ColorLiteral: _d.color,
            StringLiteral: _d.string,
            ':': _d.punctuation,
            'PseudoOp #': _d.derefOperator,
            '; ,': _d.separator,
            '( )': _d.paren,
            '[ ]': _d.squareBracket,
            '{ }': _d.brace,
          }),
        ],
      }),
      languageData: {
        commentTokens: { block: { open: '/*', close: '*/' } },
        indentOnInput: /^\s*\}$/,
        wordChars: '-',
      },
    }),
    mO = pO.data.of({
      autocomplete: (t) => {
        let { state: e, pos: i } = t,
          n = Xo(e).resolveInner(i, -1);
        if ('PropertyName' == n.name)
          return { from: n.from, options: cO(), span: OO };
        if ('ValueName' == n.name)
          return { from: n.from, options: dO, span: OO };
        if ('PseudoClassName' == n.name)
          return { from: n.from, options: uO, span: OO };
        if ('TagName' == n.name) {
          for (let { parent: t } = n; t; t = t.parent)
            if ('Block' == t.name)
              return { from: n.from, options: cO(), span: OO };
          return { from: n.from, options: fO, span: OO };
        }
        if (!t.explicit) return null;
        let r = n.resolve(i),
          s = r.childBefore(i);
        return s && ':' == s.name && 'PseudoClassSelector' == r.name
          ? { from: i, options: uO, span: OO }
          : (s && ':' == s.name && 'Declaration' == r.name) ||
            'ArgList' == r.name
          ? { from: i, options: dO, span: OO }
          : 'Block' == r.name
          ? { from: i, options: cO(), span: OO }
          : null;
      },
    });
  function gO() {
    return new jo(pO, mO);
  }
  const QO = 280,
    bO = [
      9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197,
      8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288,
    ],
    vO = new Tf({
      start: !1,
      shift: (t, e) => (5 == e || 6 == e || 284 == e ? t : 285 == e),
      strict: !1,
    }),
    yO = new Of(
      (t, e) => {
        let { next: i } = t;
        (125 == i || -1 == i || e.context) &&
          e.canShift(282) &&
          t.acceptToken(282);
      },
      { contextual: !0, fallback: !0 }
    ),
    wO = new Of(
      (t, e) => {
        let i,
          { next: n } = t;
        bO.indexOf(n) > -1 ||
          ((47 != n || (47 != (i = t.peek(1)) && 42 != i)) &&
            125 != n &&
            59 != n &&
            -1 != n &&
            !e.context &&
            e.canShift(279) &&
            t.acceptToken(279));
      },
      { contextual: !0 }
    ),
    xO = new Of(
      (t, e) => {
        let { next: i } = t;
        if ((43 == i || 45 == i) && (t.advance(), i == t.next)) {
          t.advance();
          let i = !e.context && e.canShift(1);
          t.acceptToken(i ? 1 : 2);
        }
      },
      { contextual: !0 }
    ),
    kO = new Of((t) => {
      for (let e = !1, i = 0; ; i++) {
        let { next: n } = t;
        if (n < 0) {
          i && t.acceptToken(QO);
          break;
        }
        if (96 == n) {
          i ? t.acceptToken(QO) : t.acceptToken(281, 1);
          break;
        }
        if (123 == n && e) {
          1 == i ? t.acceptToken(3, 1) : t.acceptToken(QO, -1);
          break;
        }
        if (10 == n && i) {
          t.advance(), t.acceptToken(QO);
          break;
        }
        92 == n && t.advance(), (e = 36 == n), t.advance();
      }
    });
  const SO = {
      __proto__: null,
      export: 18,
      as: 23,
      from: 29,
      default: 32,
      async: 37,
      function: 38,
      this: 48,
      true: 56,
      false: 56,
      void: 66,
      typeof: 70,
      null: 86,
      super: 88,
      new: 122,
      await: 139,
      yield: 141,
      delete: 142,
      class: 152,
      extends: 154,
      public: 197,
      private: 197,
      protected: 197,
      readonly: 199,
      instanceof: 220,
      in: 222,
      const: 224,
      import: 256,
      keyof: 307,
      unique: 311,
      infer: 317,
      is: 351,
      abstract: 371,
      implements: 373,
      type: 375,
      let: 378,
      var: 380,
      interface: 387,
      enum: 391,
      namespace: 397,
      module: 399,
      declare: 403,
      global: 407,
      for: 428,
      of: 437,
      while: 440,
      with: 444,
      do: 448,
      if: 452,
      else: 454,
      switch: 458,
      case: 464,
      try: 470,
      catch: 472,
      finally: 474,
      return: 478,
      throw: 482,
      break: 486,
      continue: 490,
      debugger: 494,
    },
    $O = {
      __proto__: null,
      async: 109,
      get: 111,
      set: 113,
      public: 161,
      private: 161,
      protected: 161,
      static: 163,
      abstract: 165,
      override: 167,
      readonly: 173,
      new: 355,
    },
    TO = { __proto__: null, '<': 129 },
    PO = Pf.deserialize({
      version: 13,
      states:
        "$1jO`QYOOO'QQ!LdO'#ChO'XOSO'#DVO)dQYO'#D]O)tQYO'#DhO){QYO'#DrO-xQYO'#DxOOQO'#E]'#E]O.]QWO'#E[O.bQWO'#E[OOQ!LS'#Ef'#EfO0aQ!LdO'#IrO2wQ!LdO'#IsO3eQWO'#EzO3jQpO'#FaOOQ!LS'#FS'#FSO3rO!bO'#FSO4QQWO'#FhO5_QWO'#FgOOQ!LS'#Is'#IsOOQ!LQ'#Ir'#IrOOQQ'#J['#J[O5dQWO'#HnO5iQ!LYO'#HoOOQQ'#If'#IfOOQQ'#Hp'#HpQ`QYOOO){QYO'#DjO5qQWO'#G[O5vQ#tO'#CmO6UQWO'#EZO6aQWO'#EgO6fQ#tO'#FRO7QQWO'#G[O7VQWO'#G`O7bQWO'#G`O7pQWO'#GcO7pQWO'#GdO7pQWO'#GfO5qQWO'#GiO8aQWO'#GlO9oQWO'#CdO:PQWO'#GyO:XQWO'#HPO:XQWO'#HRO`QYO'#HTO:XQWO'#HVO:XQWO'#HYO:^QWO'#H`O:cQ!LZO'#HdO){QYO'#HfO:nQ!LZO'#HhO:yQ!LZO'#HjO5iQ!LYO'#HlO){QYO'#DWOOOS'#Hr'#HrO;UOSO,59qOOQ!LS,59q,59qO=gQbO'#ChO=qQYO'#HsO>UQWO'#ItO@TQbO'#ItO'dQYO'#ItO@[QWO,59wO@rQ&jO'#DbOAkQWO'#E]OAxQWO'#JPOBTQWO'#JOOBTQWO'#JOOB]QWO,5:yOBbQWO'#I}OBiQWO'#DyO5vQ#tO'#EZOBwQWO'#EZOCSQ`O'#FROOQ!LS,5:S,5:SOC[QYO,5:SOEYQ!LdO,5:^OEvQWO,5:dOFaQ!LYO'#I|O7VQWO'#I{OFhQWO'#I{OFpQWO,5:xOFuQWO'#I{OGTQYO,5:vOITQWO'#EWOJ_QWO,5:vOKnQWO'#DlOKuQYO'#DqOLPQ&jO,5;PO){QYO,5;POOQQ'#Er'#ErOOQQ'#Et'#EtO){QYO,5;RO){QYO,5;RO){QYO,5;RO){QYO,5;RO){QYO,5;RO){QYO,5;RO){QYO,5;RO){QYO,5;RO){QYO,5;RO){QYO,5;RO){QYO,5;ROOQQ'#Ex'#ExOLXQYO,5;cOOQ!LS,5;h,5;hOOQ!LS,5;i,5;iONXQWO,5;iOOQ!LS,5;j,5;jO){QYO'#H}ON^Q!LYO,5<TONxQWO,5;RO){QYO,5;fO! bQpO'#JTO! PQpO'#JTO! iQpO'#JTO! zQpO,5;qOOOO,5;{,5;{O!!YQYO'#FcOOOO'#H|'#H|O3rO!bO,5;nO!!aQpO'#FeOOQ!LS,5;n,5;nO!!}Q,UO'#CrOOQ!LS'#Cu'#CuO!#bQWO'#CuO!#gOSO'#CyO!$TQ#tO,5<QO!$[QWO,5<SO!%hQWO'#FrO!%uQWO'#FsO!%zQWO'#FwO!&|Q&jO'#F{O!'oQ,UO'#IoOOQ!LS'#Io'#IoO!'yQWO'#InO!(XQWO'#ImOOQ!LS'#Cs'#CsOOQ!LS'#C|'#C|O!(aQWO'#DOOJdQWO'#FjOJdQWO'#FlO!(fQWO'#FnO!(kQWO'#FoO!(pQWO'#FuOJdQWO'#FzO!(uQWO'#E^O!)^QWO,5<RO`QYO,5>YOOQQ'#Ii'#IiOOQQ,5>Z,5>ZOOQQ-E;n-E;nO!+YQ!LdO,5:UOOQ!LQ'#Cp'#CpO!+yQ#tO,5<vOOQO'#Cf'#CfO!,[QWO'#CqO!,dQ!LYO'#IjO5_QWO'#IjO:^QWO,59XO!,rQpO,59XO!,zQ#tO,59XO5vQ#tO,59XO!-VQWO,5:vO!-_QWO'#GxO!-mQWO'#J`O){QYO,5;kO!-uQ&jO,5;mO!-zQWO,5=cO!.PQWO,5=cO!.UQWO,5=cO5iQ!LYO,5=cO5qQWO,5<vO!.dQWO'#E_O!.xQ&jO'#E`OOQ!LQ'#I}'#I}O!/ZQ!LYO'#J]O5iQ!LYO,5<zO7pQWO,5=QOOQO'#Cr'#CrO!/fQpO,5<}O!/nQ#tO,5=OO!/yQWO,5=QO!0OQ`O,5=TO:^QWO'#GnO5qQWO'#GpO!0WQWO'#GpO5vQ#tO'#GsO!0]QWO'#GsOOQQ,5=W,5=WO!0bQWO'#GtO!0jQWO'#CmO!0oQWO,59OO!0yQWO,59OO!2{QYO,59OOOQQ,59O,59OO!3YQ!LYO,59OO){QYO,59OO!3eQYO'#G{OOQQ'#G|'#G|OOQQ'#G}'#G}O`QYO,5=eO!3uQWO,5=eO){QYO'#DxO`QYO,5=kO`QYO,5=mO!3zQWO,5=oO`QYO,5=qO!4PQWO,5=tO!4UQYO,5=zOOQQ,5>O,5>OO){QYO,5>OO5iQ!LYO,5>QOOQQ,5>S,5>SO!8VQWO,5>SOOQQ,5>U,5>UO!8VQWO,5>UOOQQ,5>W,5>WO!8[Q`O,59rOOOS-E;p-E;pOOQ!LS1G/]1G/]O!8aQbO,5>_O'dQYO,5>_OOQO,5>d,5>dO!8kQYO'#HsOOQO-E;q-E;qO!8xQWO,5?`O!9QQbO,5?`O!9XQWO,5?jOOQ!LS1G/c1G/cO!9aQpO'#DTOOQO'#Iv'#IvO){QYO'#IvO!:OQpO'#IvO!:mQpO'#DcO!;OQ&jO'#DcO!=ZQYO'#DcO!=bQWO'#IuO!=jQWO,59|O!=oQWO'#EaO!=}QWO'#JQO!>VQWO,5:zO!>mQ&jO'#DcO){QYO,5?kO!>wQWO'#HxOOQO-E;v-E;vO!9XQWO,5?jOOQ!LQ1G0e1G0eO!@TQ&jO'#D|OOQ!LS,5:e,5:eO){QYO,5:eOITQWO,5:eO!@[QWO,5:eO:^QWO,5:uO!,rQpO,5:uO!,zQ#tO,5:uO5vQ#tO,5:uOOQ!LS1G/n1G/nOOQ!LS1G0O1G0OOOQ!LQ'#EV'#EVO){QYO,5?hO!@gQ!LYO,5?hO!@xQ!LYO,5?hO!APQWO,5?gO!AXQWO'#HzO!APQWO,5?gOOQ!LQ1G0d1G0dO7VQWO,5?gOOQ!LS1G0b1G0bO!AsQ!LdO1G0bO!BdQ!LbO,5:rOOQ!LS'#Fq'#FqO!CQQ!LdO'#IoOGTQYO1G0bO!EPQ#tO'#IwO!EZQWO,5:WO!E`QbO'#IxO){QYO'#IxO!EjQWO,5:]OOQ!LS'#DT'#DTOOQ!LS1G0k1G0kO!EoQWO1G0kO!HQQ!LdO1G0mO!HXQ!LdO1G0mO!JlQ!LdO1G0mO!JsQ!LdO1G0mO!LzQ!LdO1G0mO!M_Q!LdO1G0mO#!OQ!LdO1G0mO#!VQ!LdO1G0mO#$jQ!LdO1G0mO#$qQ!LdO1G0mO#&fQ!LdO1G0mO#)`Q7^O'#ChO#+ZQ7^O1G0}O#-UQ7^O'#IsOOQ!LS1G1T1G1TO#-iQ!LdO,5>iOOQ!LQ-E;{-E;{O#.YQ!LdO1G0mOOQ!LS1G0m1G0mO#0[Q!LdO1G1QO#0{QpO,5;sO#1QQpO,5;tO#1VQpO'#F[O#1kQWO'#FZOOQO'#JU'#JUOOQO'#H{'#H{O#1pQpO1G1]OOQ!LS1G1]1G1]OOOO1G1f1G1fO#2OQ7^O'#IrO#2YQWO,5;}OLXQYO,5;}OOOO-E;z-E;zOOQ!LS1G1Y1G1YOOQ!LS,5<P,5<PO#2_QpO,5<POOQ!LS,59a,59aOITQWO'#C{OOOS'#Hq'#HqO#2dOSO,59eOOQ!LS,59e,59eO){QYO1G1lO!(kQWO'#IPO#2oQWO,5<eOOQ!LS,5<b,5<bOOQO'#GV'#GVOJdQWO,5<pOOQO'#GX'#GXOJdQWO,5<rOJdQWO,5<tOOQO1G1n1G1nO#2zQ`O'#CpO#3_Q`O,5<^O#3fQWO'#JXO5qQWO'#JXO#3tQWO,5<`OJdQWO,5<_O#3yQ`O'#FqO#4WQ`O'#JYO#4bQWO'#JYOITQWO'#JYO#4gQWO,5<cOOQ!LQ'#Dg'#DgO#4lQWO'#FtO#4wQpO'#F|O!&wQ&jO'#F|O!&wQ&jO'#GOO#5YQWO'#GPO!(pQWO'#GSOOQO'#IR'#IRO#5_Q&jO,5<gOOQ!LS,5<g,5<gO#5fQ&jO'#F|O#5tQ&jO'#F}O#5|Q&jO'#F}OOQ!LS,5<u,5<uOJdQWO,5?YOJdQWO,5?YO#6RQWO'#ISO#6^QWO,5?XOOQ!LS'#Ch'#ChO#7QQ#tO,59jOOQ!LS,59j,59jO#7sQ#tO,5<UO#8fQ#tO,5<WO#8pQWO,5<YOOQ!LS,5<Z,5<ZO#8uQWO,5<aO#8zQ#tO,5<fOGTQYO1G1mO#9[QWO1G1mOOQQ1G3t1G3tOOQ!LS1G/p1G/pONXQWO1G/pOOQQ1G2b1G2bOITQWO1G2bO){QYO1G2bOITQWO1G2bO#9aQWO1G2bO#9oQWO,59]O#:xQWO'#EWOOQ!LQ,5?U,5?UO#;SQ!LYO,5?UOOQQ1G.s1G.sO:^QWO1G.sO!,rQpO1G.sO!,zQ#tO1G.sO#;bQWO1G0bO#;gQWO'#ChO#;rQWO'#JaO#;zQWO,5=dO#<PQWO'#JaO#<UQWO'#JaO#<^QWO'#I[O#<lQWO,5?zO#<tQbO1G1VOOQ!LS1G1X1G1XO5qQWO1G2}O#<{QWO1G2}O#=QQWO1G2}O#=VQWO1G2}OOQQ1G2}1G2}O#=[Q#tO1G2bO7VQWO'#JOO7VQWO'#EaO7VQWO'#IUO#=mQ!LYO,5?wOOQQ1G2f1G2fO!/yQWO1G2lOITQWO1G2iO#=xQWO1G2iOOQQ1G2j1G2jOITQWO1G2jO#=}QWO1G2jO#>VQ&jO'#GhOOQQ1G2l1G2lO!&wQ&jO'#IWO!0OQ`O1G2oOOQQ1G2o1G2oOOQQ,5=Y,5=YO#>_Q#tO,5=[O5qQWO,5=[O#5YQWO,5=_O5_QWO,5=_O!,rQpO,5=_O!,zQ#tO,5=_O5vQ#tO,5=_O#>pQWO'#J_O#>{QWO,5=`OOQQ1G.j1G.jO#?QQ!LYO1G.jO#?]QWO1G.jO#?bQWO1G.jO5iQ!LYO1G.jO#?jQbO,5?|O#?tQWO,5?|O#@PQYO,5=gO#@WQWO,5=gO7VQWO,5?|OOQQ1G3P1G3PO`QYO1G3POOQQ1G3V1G3VOOQQ1G3X1G3XO:XQWO1G3ZO#@]QYO1G3]O#DWQYO'#H[OOQQ1G3`1G3`O:^QWO1G3fO#DeQWO1G3fO5iQ!LYO1G3jOOQQ1G3l1G3lOOQ!LQ'#Fx'#FxO5iQ!LYO1G3nO5iQ!LYO1G3pOOOS1G/^1G/^O#DmQ`O,5<TO#DuQbO1G3yOOQO1G4O1G4OO){QYO,5>_O#EPQWO1G4zO#EXQWO1G5UO#EaQWO,5?bOLXQYO,5:{O7VQWO,5:{O:^QWO,59}OLXQYO,59}O!,rQpO,59}O#EfQ7^O,59}OOQO,5:{,5:{O#EpQ&jO'#HtO#FWQWO,5?aOOQ!LS1G/h1G/hO#F`Q&jO'#HyO#FtQWO,5?lOOQ!LQ1G0f1G0fO!;OQ&jO,59}O#F|QbO1G5VO7VQWO,5>dOOQ!LQ'#ES'#ESO#GWQ!LrO'#ETO!?{Q&jO'#D}OOQO'#Hw'#HwO#GrQ&jO,5:hOOQ!LS,5:h,5:hO#GyQ&jO'#D}O#H[Q&jO'#D}O#HcQ&jO'#EYO#HfQ&jO'#ETO#HsQ&jO'#ETO!?{Q&jO'#ETO#IWQWO1G0PO#I]Q`O1G0POOQ!LS1G0P1G0PO){QYO1G0POITQWO1G0POOQ!LS1G0a1G0aO:^QWO1G0aO!,rQpO1G0aO!,zQ#tO1G0aO#IdQ!LdO1G5SO){QYO1G5SO#ItQ!LYO1G5SO#JVQWO1G5RO7VQWO,5>fOOQO,5>f,5>fO#J_QWO,5>fOOQO-E;x-E;xO#JVQWO1G5RO#JmQ!LdO,59jO#LlQ!LdO,5<UO#NnQ!LdO,5<WO$!pQ!LdO,5<fOOQ!LS7+%|7+%|O$$xQ!LdO7+%|O$%iQWO'#HuO$%sQWO,5?cOOQ!LS1G/r1G/rO$%{QYO'#HvO$&YQWO,5?dO$&bQbO,5?dOOQ!LS1G/w1G/wOOQ!LS7+&V7+&VO$&lQ7^O,5:^O){QYO7+&iO$&vQ7^O,5:UOOQO1G1_1G1_OOQO1G1`1G1`O$'TQMhO,5;vOLXQYO,5;uOOQO-E;y-E;yOOQ!LS7+&w7+&wOOOO7+'Q7+'QOOOO1G1i1G1iO$'`QWO1G1iOOQ!LS1G1k1G1kO$'eQ`O,59gOOOS-E;o-E;oOOQ!LS1G/P1G/PO$'lQ!LdO7+'WOOQ!LS,5>k,5>kO$(]QWO,5>kOOQ!LS1G2P1G2PP$(bQWO'#IPPOQ!LS-E;}-E;}O$)RQ#tO1G2[O$)tQ#tO1G2^O$*OQ#tO1G2`OOQ!LS1G1x1G1xO$*VQWO'#IOO$*eQWO,5?sO$*eQWO,5?sO$*mQWO,5?sO$*xQWO,5?sOOQO1G1z1G1zO$+WQ#tO1G1yO$+hQWO'#IQO$+xQWO,5?tOITQWO,5?tO$,QQ`O,5?tOOQ!LS1G1}1G1}O5iQ!LYO,5<hO5iQ!LYO,5<iO$,[QWO,5<iO#5TQWO,5<iO!,rQpO,5<hO$,aQWO,5<jO5iQ!LYO,5<kO$,[QWO,5<nOOQO-E<P-E<POOQ!LS1G2R1G2RO!&wQ&jO,5<hO$,iQWO,5<iO!&wQ&jO,5<jO!&wQ&jO,5<iO$,tQ#tO1G4tO$-OQ#tO1G4tOOQO,5>n,5>nOOQO-E<Q-E<QO!-uQ&jO,59lO){QYO,59lO$-]QWO1G1tOJdQWO1G1{O$-bQ!LdO7+'XOOQ!LS7+'X7+'XOGTQYO7+'XOOQ!LS7+%[7+%[O$.RQ`O'#JZO#IWQWO7+'|O$.]QWO7+'|O$.eQ`O7+'|OOQQ7+'|7+'|OITQWO7+'|O){QYO7+'|OITQWO7+'|OOQO1G.w1G.wO$.oQ!LbO'#ChO$/PQ!LbO,5<lO$/nQWO,5<lOOQ!LQ1G4p1G4pOOQQ7+$_7+$_O:^QWO7+$_O!,rQpO7+$_OGTQYO7+%|O$/sQWO'#IZO$0UQWO,5?{OOQO1G3O1G3OO5qQWO,5?{O$0UQWO,5?{O$0^QWO,5?{OOQO,5>v,5>vOOQO-E<Y-E<YOOQ!LS7+&q7+&qO$0cQWO7+(iO5iQ!LYO7+(iO5qQWO7+(iO$0hQWO7+(iO$0mQWO7+'|OOQ!LQ,5>p,5>pOOQ!LQ-E<S-E<SOOQQ7+(W7+(WO$0{Q!LbO7+(TOITQWO7+(TO$1VQ`O7+(UOOQQ7+(U7+(UOITQWO7+(UO$1^QWO'#J^O$1iQWO,5=SOOQO,5>r,5>rOOQO-E<U-E<UOOQQ7+(Z7+(ZO$2cQ&jO'#GqOOQQ1G2v1G2vOITQWO1G2vO){QYO1G2vOITQWO1G2vO$2jQWO1G2vO$2xQ#tO1G2vO5iQ!LYO1G2yO#5YQWO1G2yO5_QWO1G2yO!,rQpO1G2yO!,zQ#tO1G2yO$3ZQWO'#IYO$3fQWO,5?yO$3nQ&jO,5?yOOQ!LQ1G2z1G2zOOQQ7+$U7+$UO$3vQWO7+$UO5iQ!LYO7+$UO$3{QWO7+$UO){QYO1G5hO){QYO1G5iO$4QQYO1G3RO$4XQWO1G3RO$4^QYO1G3RO$4eQ!LYO1G5hOOQQ7+(k7+(kO5iQ!LYO7+(uO`QYO7+(wOOQQ'#Jd'#JdOOQQ'#I]'#I]O$4oQYO,5=vOOQQ,5=v,5=vO){QYO'#H]O$4|QWO'#H_OOQQ7+)Q7+)QO$5RQYO7+)QO7VQWO7+)QOOQQ7+)U7+)UOOQQ7+)Y7+)YOOQQ7+)[7+)[OOQO1G4|1G4|O$9PQ7^O1G0gO$9ZQWO1G0gOOQO1G/i1G/iO$9fQ7^O1G/iO:^QWO1G/iOLXQYO'#DcOOQO,5>`,5>`OOQO-E;r-E;rOOQO,5>e,5>eOOQO-E;w-E;wO!,rQpO1G/iO:^QWO,5:iOOQO,5:o,5:oO){QYO,5:oO$9pQ!LYO,5:oO$9{Q!LYO,5:oO!,rQpO,5:iOOQO-E;u-E;uOOQ!LS1G0S1G0SO!?{Q&jO,5:iO$:ZQ&jO,5:iO$:lQ!LrO,5:oO$;WQ&jO,5:iO!?{Q&jO,5:oOOQO,5:t,5:tO$;_Q&jO,5:oO$;lQ!LYO,5:oOOQ!LS7+%k7+%kO#IWQWO7+%kO#I]Q`O7+%kOOQ!LS7+%{7+%{O:^QWO7+%{O!,rQpO7+%{O$<QQ!LdO7+*nO){QYO7+*nOOQO1G4Q1G4QO7VQWO1G4QO$<bQWO7+*mO$<jQ!LdO1G2[O$>lQ!LdO1G2^O$@nQ!LdO1G1yO$BvQ#tO,5>aOOQO-E;s-E;sO$CQQbO,5>bO){QYO,5>bOOQO-E;t-E;tO$C[QWO1G5OO$CdQ7^O1G0bO$EkQ7^O1G0mO$ErQ7^O1G0mO$GsQ7^O1G0mO$GzQ7^O1G0mO$IoQ7^O1G0mO$JSQ7^O1G0mO$LaQ7^O1G0mO$LhQ7^O1G0mO$NiQ7^O1G0mO$NpQ7^O1G0mO%!eQ7^O1G0mO%!xQ!LdO<<JTO%#iQ7^O1G0mO%%XQ7^O'#IoO%'UQ7^O1G1QOLXQYO'#F^OOQO'#JV'#JVOOQO1G1b1G1bO%'cQWO1G1aO%'hQ7^O,5>iOOOO7+'T7+'TOOOS1G/R1G/ROOQ!LS1G4V1G4VOJdQWO7+'zO%'rQWO,5>jO5qQWO,5>jOOQO-E;|-E;|O%(QQWO1G5_O%(QQWO1G5_O%(YQWO1G5_O%(eQ`O,5>lO%(oQWO,5>lOITQWO,5>lOOQO-E<O-E<OO%(tQ`O1G5`O%)OQWO1G5`OOQO1G2S1G2SOOQO1G2T1G2TO5iQ!LYO1G2TO$,[QWO1G2TO5iQ!LYO1G2SO%)WQWO1G2UOITQWO1G2UOOQO1G2V1G2VO5iQ!LYO1G2YO!,rQpO1G2SO#5TQWO1G2TO%)]QWO1G2UO%)eQWO1G2TOJdQWO7+*`OOQ!LS1G/W1G/WO%)pQWO1G/WOOQ!LS7+'`7+'`O%)uQ#tO7+'gO%*VQ!LdO<<JsOOQ!LS<<Js<<JsOITQWO'#ITO%*vQWO,5?uOOQQ<<Kh<<KhOITQWO<<KhO#IWQWO<<KhO%+OQWO<<KhO%+WQ`O<<KhOITQWO1G2WOOQQ<<Gy<<GyO:^QWO<<GyO%+bQ!LdO<<IhOOQ!LS<<Ih<<IhOOQO,5>u,5>uO%,RQWO,5>uO%,WQWO,5>uOOQO-E<X-E<XO%,`QWO1G5gO%,`QWO1G5gO5qQWO1G5gO%,hQWO<<LTOOQQ<<LT<<LTO%,mQWO<<LTO5iQ!LYO<<LTO){QYO<<KhOITQWO<<KhOOQQ<<Ko<<KoO$0{Q!LbO<<KoOOQQ<<Kp<<KpO$1VQ`O<<KpO%,rQ&jO'#IVO%,}QWO,5?xOLXQYO,5?xOOQQ1G2n1G2nO#GWQ!LrO'#ETO!?{Q&jO'#GrOOQO'#IX'#IXO%-VQ&jO,5=]OOQQ,5=],5=]O%-^Q&jO'#ETO%-iQ&jO'#ETO%.QQ&jO'#ETO%.[Q&jO'#GrO%.mQWO7+(bO%.rQWO7+(bO%.zQ`O7+(bOOQQ7+(b7+(bOITQWO7+(bO){QYO7+(bOITQWO7+(bO%/UQWO7+(bOOQQ7+(e7+(eO5iQ!LYO7+(eO#5YQWO7+(eO5_QWO7+(eO!,rQpO7+(eO%/dQWO,5>tOOQO-E<W-E<WOOQO'#Gu'#GuO%/oQWO1G5eO5iQ!LYO<<GpOOQQ<<Gp<<GpO%/wQWO<<GpO%/|QWO7++SO%0RQWO7++TOOQQ7+(m7+(mO%0WQWO7+(mO%0]QYO7+(mO%0dQWO7+(mO){QYO7++SO){QYO7++TOOQQ<<La<<LaOOQQ<<Lc<<LcOOQQ-E<Z-E<ZOOQQ1G3b1G3bO%0iQWO,5=wOOQQ,5=y,5=yO:^QWO<<LlO%0nQWO<<LlOLXQYO7+&ROOQO7+%T7+%TO%0sQ7^O1G5VO:^QWO7+%TOOQO1G0T1G0TO%0}Q!LdO1G0ZOOQO1G0Z1G0ZO){QYO1G0ZO%1XQ!LYO1G0ZO:^QWO1G0TO!,rQpO1G0TO!?{Q&jO1G0TO%1dQ!LYO1G0ZO%1rQ&jO1G0TO%2TQ!LYO1G0ZO%2iQ!LrO1G0ZO%2sQ&jO1G0TO!?{Q&jO1G0ZOOQ!LS<<IV<<IVOOQ!LS<<Ig<<IgO:^QWO<<IgO%2zQ!LdO<<NYOOQO7+)l7+)lO%3[Q!LdO7+'gO%5dQbO1G3|O%5nQ7^O7+%|O%5{Q7^O,59jO%7xQ7^O,5<UO%9uQ7^O,5<WO%;rQ7^O,5<fO%=bQ7^O7+'WO%=oQ7^O7+'XO%=|QWO,5;xOOQO7+&{7+&{O%>RQ#tO<<KfOOQO1G4U1G4UO%>cQWO1G4UO%>nQWO1G4UO%>|QWO7+*yO%>|QWO7+*yOITQWO1G4WO%?UQ`O1G4WO%?`QWO7+*zOOQO7+'o7+'oO5iQ!LYO7+'oOOQO7+'n7+'nO$,[QWO7+'pO%?hQ`O7+'pOOQO7+'t7+'tO5iQ!LYO7+'nO$,[QWO7+'oO%?oQWO7+'pOITQWO7+'pO#5TQWO7+'oO%?tQ#tO<<MzOOQ!LS7+$r7+$rO%@OQ`O,5>oOOQO-E<R-E<RO#IWQWOANASOOQQANASANASOITQWOANASO%@YQ!LbO7+'rOOQQAN=eAN=eO5qQWO1G4aOOQO1G4a1G4aO%@gQWO1G4aO%@lQWO7++RO%@lQWO7++RO5iQ!LYOANAoO%@tQWOANAoOOQQANAoANAoO%@yQWOANASO%ARQ`OANASOOQQANAZANAZOOQQANA[ANA[O%A]QWO,5>qOOQO-E<T-E<TO%AhQ7^O1G5dO#5YQWO,5=^O5_QWO,5=^O!,rQpO,5=^OOQO-E<V-E<VOOQQ1G2w1G2wO$:lQ!LrO,5:oO!?{Q&jO,5=^O%ArQ&jO,5=^O%BTQ&jO,5:oOOQQ<<K|<<K|OITQWO<<K|O%.mQWO<<K|O%B_QWO<<K|O%BgQ`O<<K|O){QYO<<K|OITQWO<<K|OOQQ<<LP<<LPO5iQ!LYO<<LPO#5YQWO<<LPO5_QWO<<LPO%BqQ&jO1G4`O%ByQWO7++POOQQAN=[AN=[O5iQ!LYOAN=[OOQQ<<Nn<<NnOOQQ<<No<<NoOOQQ<<LX<<LXO%CRQWO<<LXO%CWQYO<<LXO%C_QWO<<NnO%CdQWO<<NoOOQQ1G3c1G3cOOQQANBWANBWO:^QWOANBWO%CiQ7^O<<ImOOQO<<Ho<<HoOOQO7+%u7+%uO%0}Q!LdO7+%uO){QYO7+%uOOQO7+%o7+%oO:^QWO7+%oO!,rQpO7+%oO%CsQ!LYO7+%uO!?{Q&jO7+%oO%DOQ!LYO7+%uO%D^Q&jO7+%oO%DoQ!LYO7+%uOOQ!LSAN?RAN?RO%ETQ!LdO<<KfO%G]Q7^O<<JTO%GjQ7^O1G1yO%IYQ7^O1G2[O%KVQ7^O1G2^O%MSQ7^O<<JsO%MaQ7^O<<IhOOQO1G1d1G1dOOQO7+)p7+)pO%MnQWO7+)pO%MyQWO<<NeO%NRQ`O7+)rOOQO<<KZ<<KZO5iQ!LYO<<K[O$,[QWO<<K[OOQO<<KY<<KYO5iQ!LYO<<KZO%N]Q`O<<K[O$,[QWO<<KZOOQQG26nG26nO#IWQWOG26nOOQO7+){7+){O5qQWO7+){O%NdQWO<<NmOOQQG27ZG27ZO5iQ!LYOG27ZOITQWOG26nOLXQYO1G4]O%NlQWO7++OO5iQ!LYO1G2xO#5YQWO1G2xO5_QWO1G2xO!,rQpO1G2xO!?{Q&jO1G2xO%2iQ!LrO1G0ZO%NtQ&jO1G2xO%.mQWOANAhOOQQANAhANAhOITQWOANAhO& VQWOANAhO& _Q`OANAhOOQQANAkANAkO5iQ!LYOANAkO#5YQWOANAkOOQO'#Gv'#GvOOQO7+)z7+)zOOQQG22vG22vOOQQANAsANAsO& iQWOANAsOOQQANDYANDYOOQQANDZANDZO& nQYOG27rOOQO<<Ia<<IaO%0}Q!LdO<<IaOOQO<<IZ<<IZO:^QWO<<IZO){QYO<<IaO!,rQpO<<IZO&%lQ!LYO<<IaO!?{Q&jO<<IZO&%wQ!LYO<<IaO&&VQ7^O7+'gOOQO<<M[<<M[OOQOAN@vAN@vO5iQ!LYOAN@vOOQOAN@uAN@uO$,[QWOAN@vO5iQ!LYOAN@uOOQQLD,YLD,YOOQO<<Mg<<MgOOQQLD,uLD,uO#IWQWOLD,YO&'uQ7^O7+)wOOQO7+(d7+(dO5iQ!LYO7+(dO#5YQWO7+(dO5_QWO7+(dO!,rQpO7+(dO!?{Q&jO7+(dOOQQG27SG27SO%.mQWOG27SOITQWOG27SOOQQG27VG27VO5iQ!LYOG27VOOQQG27_G27_O:^QWOLD-^OOQOAN>{AN>{OOQOAN>uAN>uO%0}Q!LdOAN>{O:^QWOAN>uO){QYOAN>{O!,rQpOAN>uO&(PQ!LYOAN>{O&([Q7^O<<KfOOQOG26bG26bO5iQ!LYOG26bOOQOG26aG26aOOQQ!$( t!$( tOOQO<<LO<<LOO5iQ!LYO<<LOO#5YQWO<<LOO5_QWO<<LOO!,rQpO<<LOOOQQLD,nLD,nO%.mQWOLD,nOOQQLD,qLD,qOOQQ!$(!x!$(!xOOQOG24gG24gOOQOG24aG24aO%0}Q!LdOG24gO:^QWOG24aO){QYOG24gOOQOLD+|LD+|OOQOANAjANAjO5iQ!LYOANAjO#5YQWOANAjO5_QWOANAjOOQQ!$(!Y!$(!YOOQOLD*RLD*ROOQOLD){LD){O%0}Q!LdOLD*ROOQOG27UG27UO5iQ!LYOG27UO#5YQWOG27UOOQO!$'Mm!$'MmOOQOLD,pLD,pO5iQ!LYOLD,pOOQO!$(![!$(![OLXQYO'#DrO&)zQbO'#IrOLXQYO'#DjO&*RQ!LdO'#ChO&*lQbO'#ChO&*|QYO,5:vOLXQYO,5;ROLXQYO,5;ROLXQYO,5;ROLXQYO,5;ROLXQYO,5;ROLXQYO,5;ROLXQYO,5;ROLXQYO,5;ROLXQYO,5;ROLXQYO,5;ROLXQYO,5;ROLXQYO'#H}O&,|QWO,5<TO&.`QWO,5;ROLXQYO,5;fO!(aQWO'#DOO!(aQWO'#DOOITQWO'#FjO&-UQWO'#FjOITQWO'#FlO&-UQWO'#FlOITQWO'#FzO&-UQWO'#FzOLXQYO,5?kO&*|QYO1G0bO&.gQ7^O'#ChOLXQYO1G1lOITQWO,5<pO&-UQWO,5<pOITQWO,5<rO&-UQWO,5<rOITQWO,5<_O&-UQWO,5<_O&*|QYO1G1mOLXQYO7+&iOITQWO1G1{O&-UQWO1G1{O&*|QYO7+'XO&*|QYO7+%|OITQWO7+'zO&-UQWO7+'zO&.qQWO'#E[O&.vQWO'#E[O&/OQWO'#EzO&/TQWO'#EgO&/YQWO'#JPO&/eQWO'#I}O&/pQWO,5:vO&/uQ#tO,5<QO&/|QWO'#FsO&0RQWO'#FsO&0WQWO,5<RO&0`QWO,5:vO&0hQ7^O1G0}O&0oQWO,5<aO&0tQWO,5<aO&0yQWO1G1mO&1OQWO1G0bO&1TQ#tO1G2`O&1[Q#tO1G2`O4QQWO'#FhO5_QWO'#FgOBwQWO'#EZOLXQYO,5;cO!(pQWO'#FuO!(pQWO'#FuOJdQWO,5<tOJdQWO,5<t",
      stateData:
        "&2X~O'WOS'XOSTOSUOS~OPTOQTOXyO]cO_hObnOcmOhcOjTOkcOlcOqTOsTOxRO{cO|cO}cO!TSO!_kO!dUO!gTO!hTO!iTO!jTO!kTO!nlO#dsO#tpO#x^O%PqO%RtO%TrO%UrO%XuO%ZvO%^wO%_wO%axO%nzO%t{O%v|O%x}O%z!OO%}!PO&T!QO&X!RO&Z!SO&]!TO&_!UO&a!VO'ZPO'dQO'mYO'zaO~OP[XZ[X_[Xj[Xu[Xv[Xx[X!R[X!a[X!b[X!d[X!j[X!{[X#WdX#[[X#][X#^[X#_[X#`[X#a[X#b[X#c[X#e[X#g[X#i[X#j[X#o[X'U[X'd[X'n[X'u[X'v[X~O!]$lX~P$zOR!WO'S!XO'T!ZO~OPTOQTO]cOb!kOc!jOhcOjTOkcOlcOqTOsTOxRO{cO|cO}cO!T!bO!_kO!dUO!gTO!hTO!iTO!jTO!kTO!n!iO#t!lO#x^O'Z![O'dQO'mYO'zaO~O!Q!`O!R!]O!O'hP!O'rP~P'dO!S!mO~P`OPTOQTO]cOb!kOc!jOhcOjTOkcOlcOqTOsTOxRO{cO|cO}cO!T!bO!_kO!dUO!gTO!hTO!iTO!jTO!kTO!n!iO#t!lO#x^O'Z9YO'dQO'mYO'zaO~OPTOQTO]cOb!kOc!jOhcOjTOkcOlcOqTOsTOxRO{cO|cO}cO!T!bO!_kO!dUO!gTO!hTO!iTO!jTO!kTO!n!iO#t!lO#x^O'dQO'mYO'zaO~O!Q!rO#U!uO#V!rO'Z9ZO!c'oP~P+{O#W!vO~O!]!wO#W!vO~OP#^OZ#dOj#ROu!{Ov!{Ox!|O!R#bO!a#TO!b!yO!d!zO!j#^O#[#PO#]#QO#^#QO#_#QO#`#SO#a#TO#b#TO#c#TO#e#UO#g#WO#i#YO#j#ZO'dQO'n#[O'u!}O'v#OO~O_'fX'U'fX!c'fX!O'fX!T'fX%Q'fX!]'fX~P.jO!{#eO#o#eOP'gXZ'gX_'gXj'gXu'gXv'gXx'gX!R'gX!a'gX!b'gX!d'gX!j'gX#['gX#]'gX#^'gX#_'gX#`'gX#a'gX#b'gX#e'gX#g'gX#i'gX#j'gX'd'gX'n'gX'u'gX'v'gX~O#c'gX'U'gX!O'gX!c'gXn'gX!T'gX%Q'gX!]'gX~P0zO!{#eO~O#z#fO$R#jO~O!T#kO#x^O$U#lO$W#nO~O]#qOh$OOj#rOk#qOl#qOq$POs$QOx#xO!T#yO!_$VO!d#vO#V$WO#t$TO$_$RO$a$SO$d$UO'Z#pO'd#sO'_'aP~O!d$XO~O!]$ZO~O_$[O'U$[O~O'Z$`O~O!d$XO'Z$`O'[$bO'`$cO~Oc$iO!d$XO'Z$`O~O#c#TO~O]$rOu$nO!T$kO!d$mO%R$qO'Z$`O'[$bO^(SP~O!n$sO~Ox$tO!T$uO'Z$`O~Ox$tO!T$uO%Z$yO'Z$`O~O'Z$zO~O#dsO%RtO%TrO%UrO%XuO%ZvO%^wO%_wO~Ob%TOc%SO!n%QO%P%RO%c%PO~P7uOb%WOcmO!T%VO!nlO#dsO%PqO%TrO%UrO%XuO%ZvO%^wO%_wO%axO~O`%ZO!{%^O%R%XO'[$bO~P8tO!d%_O!g%cO~O!d%dO~O!TSO~O_$[O'R%lO'U$[O~O_$[O'R%oO'U$[O~O_$[O'R%qO'U$[O~OR!WO'S!XO'T%uO~OP[XZ[Xj[Xu[Xv[Xx[X!R[X!RdX!a[X!b[X!d[X!j[X!{[X!{dX#WdX#[[X#][X#^[X#_[X#`[X#a[X#b[X#c[X#e[X#g[X#i[X#j[X#o[X'd[X'n[X'u[X'v[X~O!O[X!OdX~P;aO!Q%wO!O&gX!O&lX!R&gX!R&lX~P'dO!R%yO!O'hX~OP#^OZ#dOj#ROu!{Ov!{Ox!|O!R%yO!a#TO!b!yO!d!zO!j#^O#[#PO#]#QO#^#QO#_#QO#`#SO#a#TO#b#TO#c#TO#e#UO#g#WO#i#YO#j#ZO'dQO'n#[O'u!}O'v#OO~O!O'hX~P>^O!O&OO~Ox&RO!W&]O!X&UO!Y&UO'[$bO~O]&SOk&SO!Q&VO'e&PO!S'iP!S'tP~P@aO!O'qX!R'qX!]'qX!c'qX'n'qX~O!{'qX#W#PX!S'qX~PAYO!{&^O!O'sX!R'sX~O!R&_O!O'rX~O!O&bO~O!{#eO~PAYOS&fO!T&cO!o&eO'Z$`O~Oc&kO!d$XO'Z$`O~Ou$nO!d$mO~O!S&lO~P`Ou!{Ov!{Ox!|O!b!yO!d!zO'dQOP!faZ!faj!fa!R!fa!a!fa!j!fa#[!fa#]!fa#^!fa#_!fa#`!fa#a!fa#b!fa#c!fa#e!fa#g!fa#i!fa#j!fa'n!fa'u!fa'v!fa~O_!fa'U!fa!O!fa!c!fan!fa!T!fa%Q!fa!]!fa~PCcO!c&mO~O!]!wO!{&oO'n&nO!R'pX_'pX'U'pX~O!c'pX~PE{O!R&sO!c'oX~O!c&uO~Ox$tO!T$uO#V&vO'Z$`O~OPTOQTO]cOb!kOc!jOhcOjTOkcOlcOqTOsTOxRO{cO|cO}cO!TSO!_kO!dUO!gTO!hTO!iTO!jTO!kTO!n!iO#t!lO#x^O'Z9YO'dQO'mYO'zaO~O]#qOh$OOj#rOk#qOl#qOq$POs9lOx#xO!T#yO!_:oO!d#vO#V9rO#t$TO$_9nO$a9pO$d$UO'Z&zO'd#sO~O#W&|O~O]#qOh$OOj#rOk#qOl#qOq$POs$QOx#xO!T#yO!_$VO!d#vO#V$WO#t$TO$_$RO$a$SO$d$UO'Z&zO'd#sO~O'_'kP~PJdO!Q'QO!c'lP~P){O'e'SO'mYO~OP9VOQ9VO]cOb:mOc!jOhcOj9VOkcOlcOq9VOs9VOxRO{cO|cO}cO!T!bO!_9XO!dUO!g9VO!h9VO!i9VO!j9VO!k9VO!n!iO#t!lO#x^O'Z'bO'dQO'mYO'z:kO~O!d!zO~O!R#bO_$]a'U$]a!c$]a!O$]a!T$]a%Q$]a!]$]a~O#d'iO~PITO!]'kO!T'wX#w'wX#z'wX$R'wX~Ou'lO~P! POu'lO!T'wX#w'wX#z'wX$R'wX~O!T'nO#w'rO#z'mO$R'sO~O!Q'vO~PLXO#z#fO$R'yO~Ou$eXx$eX!b$eX'n$eX'u$eX'v$eX~OSfX!RfX!{fX'_fX'_$eX~P!!iOk'{O~OR'|O'S'}O'T(PO~Ou(ROx(SO'n#[O'u(UO'v(WO~O'_(QO~P!#rO'_(ZO~O]#qOh$OOj#rOk#qOl#qOq$POs9lOx#xO!T#yO!_:oO!d#vO#V9rO#t$TO$_9nO$a9pO$d$UO'd#sO~O!Q(_O'Z([O!c'{P~P!$aO#W(aO~O!Q(eO'Z(bO!O'|P~P!$aO_(nOj(sOx(kO!W(qO!X(jO!Y(jO!d(hO!x(rO$w(mO'[$bO'e(gO~O!S(pO~P!&XO!b!yOu'cXx'cX'n'cX'u'cX'v'cX!R'cX!{'cX~O'_'cX#m'cX~P!'TOS(vO!{(uO!R'bX'_'bX~O!R(wO'_'aX~O'Z(yO~O!d)OO~O'Z&zO~O!d(hO~Ox$tO!Q!rO!T$uO#U!uO#V!rO'Z$`O!c'oP~O!]!wO#W)SO~OP#^OZ#dOj#ROu!{Ov!{Ox!|O!a#TO!b!yO!d!zO!j#^O#[#PO#]#QO#^#QO#_#QO#`#SO#a#TO#b#TO#c#TO#e#UO#g#WO#i#YO#j#ZO'dQO'n#[O'u!}O'v#OO~O_!^a!R!^a'U!^a!O!^a!c!^an!^a!T!^a%Q!^a!]!^a~P!)fOS)[O!T&cO!o)ZO%Q)YO'`$cO~O'Z$zO'_'aP~O!])_O!T'^X_'^X'U'^X~O!d$XO'`$cO~O!d$XO'Z$`O'`$cO~O!]!wO#W&|O~O])jO%R)kO'Z)gO!S(TP~O!R)lO^(SX~O'e'SO~OZ)pO~O^)qO~O!T$kO'Z$`O'[$bO^(SP~Ox$tO!Q)vO!R&_O!T$uO'Z$`O!O'rP~O]&YOk&YO!Q)wO'e'SO!S'tP~O!R)xO_(PX'U(PX~O!{)|O'`$cO~OS*PO!T#yO'`$cO~O!T*RO~Ou*TO!TSO~O!n*YO~Oc*_O~O'Z(yO!S(RP~Oc$iO~O%RtO'Z$zO~P8tOZ*eO^*dO~OPTOQTO]cObnOcmOhcOjTOkcOlcOqTOsTOxRO{cO|cO}cO!_kO!dUO!gTO!hTO!iTO!jTO!kTO!nlO#x^O%PqO'dQO'mYO'zaO~O!T!bO#t!lO'Z9YO~P!1RO^*dO_$[O'U$[O~O_*iO#d*kO%T*kO%U*kO~P){O!d%_O~O%t*pO~O!T*rO~O&U*uO&V*tOP&SaQ&SaX&Sa]&Sa_&Sab&Sac&Sah&Saj&Sak&Sal&Saq&Sas&Sax&Sa{&Sa|&Sa}&Sa!T&Sa!_&Sa!d&Sa!g&Sa!h&Sa!i&Sa!j&Sa!k&Sa!n&Sa#d&Sa#t&Sa#x&Sa%P&Sa%R&Sa%T&Sa%U&Sa%X&Sa%Z&Sa%^&Sa%_&Sa%a&Sa%n&Sa%t&Sa%v&Sa%x&Sa%z&Sa%}&Sa&T&Sa&X&Sa&Z&Sa&]&Sa&_&Sa&a&Sa'Q&Sa'Z&Sa'd&Sa'm&Sa'z&Sa!S&Sa%{&Sa`&Sa&Q&Sa~O'Z*xO~On*{O~O!O&ga!R&ga~P!)fO!Q+PO!O&gX!R&gX~P){O!R%yO!O'ha~O!O'ha~P>^O!R&_O!O'ra~O!RwX!R!ZX!SwX!S!ZX!]wX!]!ZX!d!ZX!{wX'`!ZX~O!]+UO!{+TO!R#TX!R'jX!S#TX!S'jX!]'jX!d'jX'`'jX~O!]+WO!d$XO'`$cO!R!VX!S!VX~O]&QOk&QOx&RO'e(gO~OP9VOQ9VO]cOb:mOc!jOhcOj9VOkcOlcOq9VOs9VOxRO{cO|cO}cO!T!bO!_9XO!dUO!g9VO!h9VO!i9VO!j9VO!k9VO!n!iO#t!lO#x^O'dQO'mYO'z:kO~O'Z9vO~P!;^O!R+[O!S'iX~O!S+^O~O!]+UO!{+TO!R#TX!S#TX~O!R+_O!S'tX~O!S+aO~O]&QOk&QOx&RO'[$bO'e(gO~O!X+bO!Y+bO~P!>[Ox$tO!Q+dO!T$uO'Z$`O!O&lX!R&lX~O_+hO!W+kO!X+gO!Y+gO!r+oO!s+mO!t+nO!u+lO!x+pO'[$bO'e(gO'm+eO~O!S+jO~P!?]OS+uO!T&cO!o+tO~O!{+{O!R'pa!c'pa_'pa'U'pa~O!]!wO~P!@gO!R&sO!c'oa~Ox$tO!Q,OO!T$uO#U,QO#V,OO'Z$`O!R&nX!c&nX~O_#Oi!R#Oi'U#Oi!O#Oi!c#Oin#Oi!T#Oi%Q#Oi!]#Oi~P!)fO#W!za!R!za!c!za!{!za!T!za_!za'U!za!O!za~P!#rO#W'cXP'cXZ'cX_'cXj'cXv'cX!a'cX!d'cX!j'cX#['cX#]'cX#^'cX#_'cX#`'cX#a'cX#b'cX#c'cX#e'cX#g'cX#i'cX#j'cX'U'cX'd'cX!c'cX!O'cX!T'cXn'cX%Q'cX!]'cX~P!'TO!R,ZO'_'kX~P!#rO'_,]O~O!R,^O!c'lX~P!)fO!c,aO~O!O,bO~OP#^Ou!{Ov!{Ox!|O!b!yO!d!zO!j#^O'dQOZ#Zi_#Zij#Zi!R#Zi!a#Zi#]#Zi#^#Zi#_#Zi#`#Zi#a#Zi#b#Zi#c#Zi#e#Zi#g#Zi#i#Zi#j#Zi'U#Zi'n#Zi'u#Zi'v#Zi!O#Zi!c#Zin#Zi!T#Zi%Q#Zi!]#Zi~O#[#Zi~P!EtO#[#PO~P!EtOP#^Ou!{Ov!{Ox!|O!b!yO!d!zO!j#^O#[#PO#]#QO#^#QO#_#QO'dQOZ#Zi_#Zi!R#Zi!a#Zi#`#Zi#a#Zi#b#Zi#c#Zi#e#Zi#g#Zi#i#Zi#j#Zi'U#Zi'n#Zi'u#Zi'v#Zi!O#Zi!c#Zin#Zi!T#Zi%Q#Zi!]#Zi~Oj#Zi~P!H`Oj#RO~P!H`OP#^Oj#ROu!{Ov!{Ox!|O!b!yO!d!zO!j#^O#[#PO#]#QO#^#QO#_#QO#`#SO'dQO_#Zi!R#Zi#e#Zi#g#Zi#i#Zi#j#Zi'U#Zi'n#Zi'u#Zi'v#Zi!O#Zi!c#Zin#Zi!T#Zi%Q#Zi!]#Zi~OZ#Zi!a#Zi#a#Zi#b#Zi#c#Zi~P!JzOZ#dO!a#TO#a#TO#b#TO#c#TO~P!JzOP#^OZ#dOj#ROu!{Ov!{Ox!|O!a#TO!b!yO!d!zO!j#^O#[#PO#]#QO#^#QO#_#QO#`#SO#a#TO#b#TO#c#TO#e#UO'dQO_#Zi!R#Zi#g#Zi#i#Zi#j#Zi'U#Zi'n#Zi'v#Zi!O#Zi!c#Zin#Zi!T#Zi%Q#Zi!]#Zi~O'u#Zi~P!MrO'u!}O~P!MrOP#^OZ#dOj#ROu!{Ov!{Ox!|O!a#TO!b!yO!d!zO!j#^O#[#PO#]#QO#^#QO#_#QO#`#SO#a#TO#b#TO#c#TO#e#UO#g#WO'dQO'u!}O_#Zi!R#Zi#i#Zi#j#Zi'U#Zi'n#Zi!O#Zi!c#Zin#Zi!T#Zi%Q#Zi!]#Zi~O'v#Zi~P#!^O'v#OO~P#!^OP#^OZ#dOj#ROu!{Ov!{Ox!|O!a#TO!b!yO!d!zO!j#^O#[#PO#]#QO#^#QO#_#QO#`#SO#a#TO#b#TO#c#TO#e#UO#g#WO#i#YO'dQO'u!}O'v#OO~O_#Zi!R#Zi#j#Zi'U#Zi'n#Zi!O#Zi!c#Zin#Zi!T#Zi%Q#Zi!]#Zi~P#$xOP[XZ[Xj[Xu[Xv[Xx[X!a[X!b[X!d[X!j[X!{[X#WdX#[[X#][X#^[X#_[X#`[X#a[X#b[X#c[X#e[X#g[X#i[X#j[X#o[X'd[X'n[X'u[X'v[X!R[X!S[X~O#m[X~P#']OP#^OZ9jOj9_Ou!{Ov!{Ox!|O!a9aO!b!yO!d!zO!j#^O#[9]O#]9^O#^9^O#_9^O#`9`O#a9aO#b9aO#c9aO#e9bO#g9dO#i9fO#j9gO'dQO'n#[O'u!}O'v#OO~O#m,dO~P#)gOP'gXZ'gXj'gXu'gXv'gXx'gX!a'gX!b'gX!d'gX!j'gX#['gX#]'gX#^'gX#_'gX#`'gX#a'gX#b'gX#e'gX#g'gX#i'gX#j'gX'd'gX'n'gX'u'gX'v'gX!R'gX~O!{9kO#o9kO#c'gX#m'gX!S'gX~P#+bO_&qa!R&qa'U&qa!c&qan&qa!O&qa!T&qa%Q&qa!]&qa~P!)fOP#ZiZ#Zi_#Zij#Ziv#Zi!R#Zi!a#Zi!b#Zi!d#Zi!j#Zi#[#Zi#]#Zi#^#Zi#_#Zi#`#Zi#a#Zi#b#Zi#c#Zi#e#Zi#g#Zi#i#Zi#j#Zi'U#Zi'd#Zi!O#Zi!c#Zin#Zi!T#Zi%Q#Zi!]#Zi~P!#rO_#ni!R#ni'U#ni!O#ni!c#nin#ni!T#ni%Q#ni!]#ni~P!)fO#z,fO~O#z,gO~O!]'kO!{,hO!T$OX#w$OX#z$OX$R$OX~O!Q,iO~O!T'nO#w,kO#z'mO$R,lO~O!R9hO!S'fX~P#)gO!S,mO~O$R,oO~OR'|O'S'}O'T,rO~O],uOk,uO!O,vO~O!RdX!]dX!cdX!c$eX'ndX~P!!iO!c,|O~P!#rO!R,}O!]!wO'n&nO!c'{X~O!c-SO~O!O$eX!R$eX!]$lX~P!!iO!R-UO!O'|X~P!#rO!]-WO~O!O-YO~O!Q(_O'Z$`O!c'{P~Oj-^O!]!wO!d$XO'`$cO'n&nO~O!])_O~O!S-dO~P!&XO!X-eO!Y-eO'[$bO'e(gO~Ox-gO'e(gO~O!x-hO~O'Z$zO!R&vX'_&vX~O!R(wO'_'aa~Ou-mOv-mOx-nO'nra'ura'vra!Rra!{ra~O'_ra#mra~P#6fOu(ROx(SO'n$^a'u$^a'v$^a!R$^a!{$^a~O'_$^a#m$^a~P#7[Ou(ROx(SO'n$`a'u$`a'v$`a!R$`a!{$`a~O'_$`a#m$`a~P#7}O]-oO~O#W-pO~O'_$na!R$na#m$na!{$na~P!#rO#W-sO~OS-|O!T&cO!o-{O%Q-zO~O'_-}O~O]#qOj#rOk#qOl#qOq$POs9lOx#xO!T#yO!_:oO!d#vO#V9rO#t$TO$_9nO$a9pO$d$UO'd#sO~Oh.PO'Z.OO~P#9tO!])_O!T'^a_'^a'U'^a~O#W.VO~OZ[X!RdX!SdX~O!R.WO!S(TX~O!S.YO~OZ.ZO~O].]O'Z)gO~O!T$kO'Z$`O^'OX!R'OX~O!R)lO^(Sa~O!c.`O~P!)fO].bO~OZ.cO~O^.dO~OS-|O!T&cO!o-{O%Q-zO'`$cO~O!R)xO_(Pa'U(Pa~O!{.jO~OS.mO!T#yO~O'e'SO!S(QP~OS.wO!T.sO!o.vO%Q.uO'`$cO~OZ/RO!R/PO!S(RX~O!S/SO~O^/UO_$[O'U$[O~O]/VO~O]/WO'Z(yO~O#c/XO%r/YO~P0zO!{#eO#c/XO%r/YO~O_/ZO~P){O_/]O~O%{/aOP%yiQ%yiX%yi]%yi_%yib%yic%yih%yij%yik%yil%yiq%yis%yix%yi{%yi|%yi}%yi!T%yi!_%yi!d%yi!g%yi!h%yi!i%yi!j%yi!k%yi!n%yi#d%yi#t%yi#x%yi%P%yi%R%yi%T%yi%U%yi%X%yi%Z%yi%^%yi%_%yi%a%yi%n%yi%t%yi%v%yi%x%yi%z%yi%}%yi&T%yi&X%yi&Z%yi&]%yi&_%yi&a%yi'Q%yi'Z%yi'd%yi'm%yi'z%yi!S%yi`%yi&Q%yi~O`/gO!S/eO&Q/fO~P`O!TSO!d/jO~O!R#bOn$]a~O!O&gi!R&gi~P!)fO!R%yO!O'hi~O!R&_O!O'ri~O!O/nO~O!R!Va!S!Va~P#)gO]&QOk&QO!Q/tO'e(gO!R&hX!S&hX~P@aO!R+[O!S'ia~O]&YOk&YO!Q)wO'e'SO!R&mX!S&mX~O!R+_O!S'ta~O!O'si!R'si~P!)fO_$[O!]!wO!d$XO!j0OO!{/|O'U$[O'`$cO'n&nO~O!S0RO~P!?]O!X0SO!Y0SO'[$bO'e(gO'm+eO~O!W0TO~P#GyO!TSO!W0TO!u0VO!x0WO~P#GyO!W0TO!s0YO!t0YO!u0VO!x0WO~P#GyO!T&cO~O!T&cO~P!#rO!R'pi!c'pi_'pi'U'pi~P!)fO!{0cO!R'pi!c'pi_'pi'U'pi~O!R&sO!c'oi~Ox$tO!T$uO#V0eO'Z$`O~O#WraPraZra_rajra!ara!bra!dra!jra#[ra#]ra#^ra#_ra#`ra#ara#bra#cra#era#gra#ira#jra'Ura'dra!cra!Ora!Tranra%Qra!]ra~P#6fO#W$^aP$^aZ$^a_$^aj$^av$^a!a$^a!b$^a!d$^a!j$^a#[$^a#]$^a#^$^a#_$^a#`$^a#a$^a#b$^a#c$^a#e$^a#g$^a#i$^a#j$^a'U$^a'd$^a!c$^a!O$^a!T$^an$^a%Q$^a!]$^a~P#7[O#W$`aP$`aZ$`a_$`aj$`av$`a!a$`a!b$`a!d$`a!j$`a#[$`a#]$`a#^$`a#_$`a#`$`a#a$`a#b$`a#c$`a#e$`a#g$`a#i$`a#j$`a'U$`a'd$`a!c$`a!O$`a!T$`an$`a%Q$`a!]$`a~P#7}O#W$naP$naZ$na_$naj$nav$na!R$na!a$na!b$na!d$na!j$na#[$na#]$na#^$na#_$na#`$na#a$na#b$na#c$na#e$na#g$na#i$na#j$na'U$na'd$na!c$na!O$na!T$na!{$nan$na%Q$na!]$na~P!#rO_#Oq!R#Oq'U#Oq!O#Oq!c#Oqn#Oq!T#Oq%Q#Oq!]#Oq~P!)fO!R&iX'_&iX~PJdO!R,ZO'_'ka~O!Q0mO!R&jX!c&jX~P){O!R,^O!c'la~O!R,^O!c'la~P!)fO#m!fa!S!fa~PCcO#m!^a!R!^a!S!^a~P#)gO!T1QO#x^O$P1RO~O!S1VO~On1WO~P!#rO_$Yq!R$Yq'U$Yq!O$Yq!c$Yqn$Yq!T$Yq%Q$Yq!]$Yq~P!)fO!O1XO~O],uOk,uO~Ou(ROx(SO'v(WO'n$xi'u$xi!R$xi!{$xi~O'_$xi#m$xi~P$(jOu(ROx(SO'n$zi'u$zi'v$zi!R$zi!{$zi~O'_$zi#m$zi~P$)]O#m1YO~P!#rO!Q1[O'Z$`O!R&rX!c&rX~O!R,}O!c'{a~O!R,}O!]!wO!c'{a~O!R,}O!]!wO'n&nO!c'{a~O'_$gi!R$gi#m$gi!{$gi~P!#rO!Q1cO'Z(bO!O&tX!R&tX~P!$aO!R-UO!O'|a~O!R-UO!O'|a~P!#rO!]!wO~O!]!wO#c1mO~Oj1qO!]!wO'n&nO~O!R'bi'_'bi~P!#rO!{1tO!R'bi'_'bi~P!#rO!c1wO~O_$Zq!R$Zq'U$Zq!O$Zq!c$Zqn$Zq!T$Zq%Q$Zq!]$Zq~P!)fO!R1{O!T'}X~P!#rO!T&cO%Q2OO~O!T&cO%Q2OO~P!#rO!T$eX$u[X_$eX'U$eX~P!!iO$u2SOugXxgX!TgX'ngX'ugX'vgX_gX'UgX~O$u2SO~O]2YO%R2ZO'Z)gO!R&}X!S&}X~O!R.WO!S(Ta~OZ2_O~O^2`O~O]2cO~OS2eO!T&cO!o2dO%Q2OO~O_$[O'U$[O~P!#rO!T#yO~P!#rO!R2jO!{2lO!S(QX~O!S2mO~Ox(kO!W2vO!X2oO!Y2oO!r2uO!s2tO!t2tO!x2sO'[$bO'e(gO'm+eO~O!S2rO~P$1nOS2}O!T.sO!o2|O%Q2{O~OS2}O!T.sO!o2|O%Q2{O'`$cO~O'Z(yO!R&|X!S&|X~O!R/PO!S(Ra~O]3XO'e3WO~O]3YO~O^3[O~O!c3_O~P){O_3aO~O_3aO~P){O#c3cO%r3dO~PE{O`/gO!S3hO&Q/fO~P`O!]3jO~O&V3kOP&SqQ&SqX&Sq]&Sq_&Sqb&Sqc&Sqh&Sqj&Sqk&Sql&Sqq&Sqs&Sqx&Sq{&Sq|&Sq}&Sq!T&Sq!_&Sq!d&Sq!g&Sq!h&Sq!i&Sq!j&Sq!k&Sq!n&Sq#d&Sq#t&Sq#x&Sq%P&Sq%R&Sq%T&Sq%U&Sq%X&Sq%Z&Sq%^&Sq%_&Sq%a&Sq%n&Sq%t&Sq%v&Sq%x&Sq%z&Sq%}&Sq&T&Sq&X&Sq&Z&Sq&]&Sq&_&Sq&a&Sq'Q&Sq'Z&Sq'd&Sq'm&Sq'z&Sq!S&Sq%{&Sq`&Sq&Q&Sq~O!R#Ti!S#Ti~P#)gO!{3mO!R#Ti!S#Ti~O!R!Vi!S!Vi~P#)gO_$[O!{3tO'U$[O~O_$[O!]!wO!{3tO'U$[O~O!X3xO!Y3xO'[$bO'e(gO'm+eO~O_$[O!]!wO!d$XO!j3yO!{3tO'U$[O'`$cO'n&nO~O!W3zO~P$:ZO!W3zO!u3}O!x4OO~P$:ZO_$[O!]!wO!j3yO!{3tO'U$[O'n&nO~O!R'pq!c'pq_'pq'U'pq~P!)fO!R&sO!c'oq~O#W$xiP$xiZ$xi_$xij$xiv$xi!a$xi!b$xi!d$xi!j$xi#[$xi#]$xi#^$xi#_$xi#`$xi#a$xi#b$xi#c$xi#e$xi#g$xi#i$xi#j$xi'U$xi'd$xi!c$xi!O$xi!T$xin$xi%Q$xi!]$xi~P$(jO#W$ziP$ziZ$zi_$zij$ziv$zi!a$zi!b$zi!d$zi!j$zi#[$zi#]$zi#^$zi#_$zi#`$zi#a$zi#b$zi#c$zi#e$zi#g$zi#i$zi#j$zi'U$zi'd$zi!c$zi!O$zi!T$zin$zi%Q$zi!]$zi~P$)]O#W$giP$giZ$gi_$gij$giv$gi!R$gi!a$gi!b$gi!d$gi!j$gi#[$gi#]$gi#^$gi#_$gi#`$gi#a$gi#b$gi#c$gi#e$gi#g$gi#i$gi#j$gi'U$gi'd$gi!c$gi!O$gi!T$gi!{$gin$gi%Q$gi!]$gi~P!#rO!R&ia'_&ia~P!#rO!R&ja!c&ja~P!)fO!R,^O!c'li~O#m#Oi!R#Oi!S#Oi~P#)gOP#^Ou!{Ov!{Ox!|O!b!yO!d!zO!j#^O'dQOZ#Zij#Zi!a#Zi#]#Zi#^#Zi#_#Zi#`#Zi#a#Zi#b#Zi#c#Zi#e#Zi#g#Zi#i#Zi#j#Zi#m#Zi'n#Zi'u#Zi'v#Zi!R#Zi!S#Zi~O#[#Zi~P$CqO#[9]O~P$CqOP#^Ou!{Ov!{Ox!|O!b!yO!d!zO!j#^O#[9]O#]9^O#^9^O#_9^O'dQOZ#Zi!a#Zi#`#Zi#a#Zi#b#Zi#c#Zi#e#Zi#g#Zi#i#Zi#j#Zi#m#Zi'n#Zi'u#Zi'v#Zi!R#Zi!S#Zi~Oj#Zi~P$EyOj9_O~P$EyOP#^Oj9_Ou!{Ov!{Ox!|O!b!yO!d!zO!j#^O#[9]O#]9^O#^9^O#_9^O#`9`O'dQO#e#Zi#g#Zi#i#Zi#j#Zi#m#Zi'n#Zi'u#Zi'v#Zi!R#Zi!S#Zi~OZ#Zi!a#Zi#a#Zi#b#Zi#c#Zi~P$HROZ9jO!a9aO#a9aO#b9aO#c9aO~P$HROP#^OZ9jOj9_Ou!{Ov!{Ox!|O!a9aO!b!yO!d!zO!j#^O#[9]O#]9^O#^9^O#_9^O#`9`O#a9aO#b9aO#c9aO#e9bO'dQO#g#Zi#i#Zi#j#Zi#m#Zi'n#Zi'v#Zi!R#Zi!S#Zi~O'u#Zi~P$JgO'u!}O~P$JgOP#^OZ9jOj9_Ou!{Ov!{Ox!|O!a9aO!b!yO!d!zO!j#^O#[9]O#]9^O#^9^O#_9^O#`9`O#a9aO#b9aO#c9aO#e9bO#g9dO'dQO'u!}O#i#Zi#j#Zi#m#Zi'n#Zi!R#Zi!S#Zi~O'v#Zi~P$LoO'v#OO~P$LoOP#^OZ9jOj9_Ou!{Ov!{Ox!|O!a9aO!b!yO!d!zO!j#^O#[9]O#]9^O#^9^O#_9^O#`9`O#a9aO#b9aO#c9aO#e9bO#g9dO#i9fO'dQO'u!}O'v#OO~O#j#Zi#m#Zi'n#Zi!R#Zi!S#Zi~P$NwO_#ky!R#ky'U#ky!O#ky!c#kyn#ky!T#ky%Q#ky!]#ky~P!)fOP#ZiZ#Zij#Ziv#Zi!a#Zi!b#Zi!d#Zi!j#Zi#[#Zi#]#Zi#^#Zi#_#Zi#`#Zi#a#Zi#b#Zi#c#Zi#e#Zi#g#Zi#i#Zi#j#Zi#m#Zi'd#Zi!R#Zi!S#Zi~P!#rO!b!yOP'cXZ'cXj'cXu'cXv'cXx'cX!a'cX!d'cX!j'cX#['cX#]'cX#^'cX#_'cX#`'cX#a'cX#b'cX#c'cX#e'cX#g'cX#i'cX#j'cX#m'cX'd'cX'n'cX'u'cX'v'cX!R'cX!S'cX~O#m#ni!R#ni!S#ni~P#)gO!S4`O~O!R&qa!S&qa~P#)gO!]!wO'n&nO!R&ra!c&ra~O!R,}O!c'{i~O!R,}O!]!wO!c'{i~O!O&ta!R&ta~P!#rO!]4gO~O!R-UO!O'|i~P!#rO!R-UO!O'|i~O!O4mO~O!]!wO#c4sO~Oj4tO!]!wO'n&nO~O!O4vO~O'_$iq!R$iq#m$iq!{$iq~P!#rO_$Zy!R$Zy'U$Zy!O$Zy!c$Zyn$Zy!T$Zy%Q$Zy!]$Zy~P!)fO!R1{O!T'}a~O!T&cO%Q4{O~O!T&cO%Q4{O~P!#rO_#Oy!R#Oy'U#Oy!O#Oy!c#Oyn#Oy!T#Oy%Q#Oy!]#Oy~P!)fOZ5OO~O]5QO'Z)gO~O!R.WO!S(Ti~O]5TO~O^5UO~O'e'SO!R&yX!S&yX~O!R2jO!S(Qa~O!S5cO~P$1nOx-gO'e(gO'm+eO~O!W5fO!X5eO!Y5eO!x0WO'[$bO'e(gO'm+eO~O!s5gO!t5gO~P%-iO!X5eO!Y5eO'[$bO'e(gO'm+eO~O!T.sO~O!T.sO%Q5iO~O!T.sO%Q5iO~P!#rOS5nO!T.sO!o5mO%Q5iO~OZ5sO!R&|a!S&|a~O!R/PO!S(Ri~O]5vO~O!c5wO~O!c5xO~O!c5yO~O!c5yO~P){O_5{O~O!]6OO~O!c6QO~O!R'si!S'si~P#)gO_$[O'U$[O~P!)fO_$[O!{6VO'U$[O~O_$[O!]!wO!{6VO'U$[O~O!X6[O!Y6[O'[$bO'e(gO'm+eO~O_$[O!]!wO!j6]O!{6VO'U$[O'n&nO~O!d$XO'`$cO~P%2TO!W6^O~P%1rO!R'py!c'py_'py'U'py~P!)fO#W$iqP$iqZ$iq_$iqj$iqv$iq!R$iq!a$iq!b$iq!d$iq!j$iq#[$iq#]$iq#^$iq#_$iq#`$iq#a$iq#b$iq#c$iq#e$iq#g$iq#i$iq#j$iq'U$iq'd$iq!c$iq!O$iq!T$iq!{$iqn$iq%Q$iq!]$iq~P!#rO!R&ji!c&ji~P!)fO#m#Oq!R#Oq!S#Oq~P#)gOu-mOv-mOx-nOPraZrajra!ara!bra!dra!jra#[ra#]ra#^ra#_ra#`ra#ara#bra#cra#era#gra#ira#jra#mra'dra'nra'ura'vra!Rra!Sra~Ou(ROx(SOP$^aZ$^aj$^av$^a!a$^a!b$^a!d$^a!j$^a#[$^a#]$^a#^$^a#_$^a#`$^a#a$^a#b$^a#c$^a#e$^a#g$^a#i$^a#j$^a#m$^a'd$^a'n$^a'u$^a'v$^a!R$^a!S$^a~Ou(ROx(SOP$`aZ$`aj$`av$`a!a$`a!b$`a!d$`a!j$`a#[$`a#]$`a#^$`a#_$`a#`$`a#a$`a#b$`a#c$`a#e$`a#g$`a#i$`a#j$`a#m$`a'd$`a'n$`a'u$`a'v$`a!R$`a!S$`a~OP$naZ$naj$nav$na!a$na!b$na!d$na!j$na#[$na#]$na#^$na#_$na#`$na#a$na#b$na#c$na#e$na#g$na#i$na#j$na#m$na'd$na!R$na!S$na~P!#rO#m$Yq!R$Yq!S$Yq~P#)gO#m$Zq!R$Zq!S$Zq~P#)gO!S6hO~O'_$|y!R$|y#m$|y!{$|y~P!#rO!]!wO!R&ri!c&ri~O!]!wO'n&nO!R&ri!c&ri~O!R,}O!c'{q~O!O&ti!R&ti~P!#rO!R-UO!O'|q~O!O6oO~P!#rO!O6oO~O!R'by'_'by~P!#rO!R&wa!T&wa~P!#rO!T$tq_$tq'U$tq~P!#rOZ6wO~O!R.WO!S(Tq~O]6zO~O!T&cO%Q6{O~O!T&cO%Q6{O~P!#rO!{6|O!R&ya!S&ya~O!R2jO!S(Qi~P#)gO!X7SO!Y7SO'[$bO'e(gO'm+eO~O!W7UO!x4OO~P%ArO!T.sO%Q7XO~O!T.sO%Q7XO~P!#rO]7`O'e7_O~O!R/PO!S(Rq~O!c7bO~O!c7bO~P){O!c7dO~O!c7eO~O!R#Ty!S#Ty~P#)gO_$[O!{7kO'U$[O~O_$[O!]!wO!{7kO'U$[O~O!X7nO!Y7nO'[$bO'e(gO'm+eO~O_$[O!]!wO!j7oO!{7kO'U$[O'n&nO~O#W$|yP$|yZ$|y_$|yj$|yv$|y!R$|y!a$|y!b$|y!d$|y!j$|y#[$|y#]$|y#^$|y#_$|y#`$|y#a$|y#b$|y#c$|y#e$|y#g$|y#i$|y#j$|y'U$|y'd$|y!c$|y!O$|y!T$|y!{$|yn$|y%Q$|y!]$|y~P!#rO#m#ky!R#ky!S#ky~P#)gOP$giZ$gij$giv$gi!a$gi!b$gi!d$gi!j$gi#[$gi#]$gi#^$gi#_$gi#`$gi#a$gi#b$gi#c$gi#e$gi#g$gi#i$gi#j$gi#m$gi'd$gi!R$gi!S$gi~P!#rOu(ROx(SO'v(WOP$xiZ$xij$xiv$xi!a$xi!b$xi!d$xi!j$xi#[$xi#]$xi#^$xi#_$xi#`$xi#a$xi#b$xi#c$xi#e$xi#g$xi#i$xi#j$xi#m$xi'd$xi'n$xi'u$xi!R$xi!S$xi~Ou(ROx(SOP$ziZ$zij$ziv$zi!a$zi!b$zi!d$zi!j$zi#[$zi#]$zi#^$zi#_$zi#`$zi#a$zi#b$zi#c$zi#e$zi#g$zi#i$zi#j$zi#m$zi'd$zi'n$zi'u$zi'v$zi!R$zi!S$zi~O#m$Zy!R$Zy!S$Zy~P#)gO#m#Oy!R#Oy!S#Oy~P#)gO!]!wO!R&rq!c&rq~O!R,}O!c'{y~O!O&tq!R&tq~P!#rO!O7uO~P!#rO!R.WO!S(Ty~O!R2jO!S(Qq~O!X8RO!Y8RO'[$bO'e(gO'm+eO~O!T.sO%Q8UO~O!T.sO%Q8UO~P!#rO!c8XO~O&V8YOP&S!ZQ&S!ZX&S!Z]&S!Z_&S!Zb&S!Zc&S!Zh&S!Zj&S!Zk&S!Zl&S!Zq&S!Zs&S!Zx&S!Z{&S!Z|&S!Z}&S!Z!T&S!Z!_&S!Z!d&S!Z!g&S!Z!h&S!Z!i&S!Z!j&S!Z!k&S!Z!n&S!Z#d&S!Z#t&S!Z#x&S!Z%P&S!Z%R&S!Z%T&S!Z%U&S!Z%X&S!Z%Z&S!Z%^&S!Z%_&S!Z%a&S!Z%n&S!Z%t&S!Z%v&S!Z%x&S!Z%z&S!Z%}&S!Z&T&S!Z&X&S!Z&Z&S!Z&]&S!Z&_&S!Z&a&S!Z'Q&S!Z'Z&S!Z'd&S!Z'm&S!Z'z&S!Z!S&S!Z%{&S!Z`&S!Z&Q&S!Z~O_$[O!{8_O'U$[O~O_$[O!]!wO!{8_O'U$[O~OP$iqZ$iqj$iqv$iq!a$iq!b$iq!d$iq!j$iq#[$iq#]$iq#^$iq#_$iq#`$iq#a$iq#b$iq#c$iq#e$iq#g$iq#i$iq#j$iq#m$iq'd$iq!R$iq!S$iq~P!#rO!R&yq!S&yq~P#)gO_$[O!{8tO'U$[O~OP$|yZ$|yj$|yv$|y!a$|y!b$|y!d$|y!j$|y#[$|y#]$|y#^$|y#_$|y#`$|y#a$|y#b$|y#c$|y#e$|y#g$|y#i$|y#j$|y#m$|y'd$|y!R$|y!S$|y~P!#rOn'fX~P.jOn[X!O[X!c[X%r[X!T[X%Q[X!][X~P$zO!]dX!c[X!cdX'ndX~P;aOP9VOQ9VO]cOb:mOc!jOhcOj9VOkcOlcOq9VOs9VOxRO{cO|cO}cO!TSO!_9XO!dUO!g9VO!h9VO!i9VO!j9VO!k9VO!n!iO#t!lO#x^O'Z'bO'dQO'mYO'z:kO~O!R9hO!S$]a~O]#qOh$OOj#rOk#qOl#qOq$POs9mOx#xO!T#yO!_:pO!d#vO#V9sO#t$TO$_9oO$a9qO$d$UO'Z&zO'd#sO~O#d'iO~P&-UO!S[X!SdX~P;aO#W9[O~O!]!wO#W9[O~O!{9kO~O#c9aO~O!{9tO!R'sX!S'sX~O!{9kO!R'qX!S'qX~O#W9uO~O'_9wO~P!#rO#W9|O~O#W9}O~O!]!wO#W:OO~O!]!wO#W9uO~O#m:PO~P#)gO#W:QO~O#W:RO~O#W:SO~O#W:TO~O#m:UO~P!#rO#m:VO~P!#rO#x~!b!r!t!u#U#V'z$_$a$d$u%P%Q%R%X%Z%^%_%a%c~UT#x'z#]}'W'X#z'W'Z'e~",
      goto: "#Ed(XPPPPPPPP(YP(jP*^PPPP-uPP.[3n5b5uP5uPPP5uP7c5uP5uP7gPP7lP8Q<cPPPP<gPPPP<g?XPPP?_AjP<gPDTPPPPE{<gPPPPPGt<gPPJuKrPPPPKvM`PMhNiPKr<g<g!#p!&k!+^!+^!.mPPP!.t!1j<gPPPPPPPPPP!4aP!5rPP<g!7PP<gP<g<g<g<gP<g!9dPP!<]P!?Q!?Y!?^!?^P!<YP!?b!?bP!BVP!BZ<g<g!Ba!ET5uP5uP5u5uP!FW5u5u!HO5u!JQ5u!Kr5u5u!L`!NY!NY!N^!NY!NfP!NYP5u# b5u#!l5u5u-uPPP##yPP#$c#$cP#$cP#$x#$cPP#%OP#$uP#$u#%bMd#$u#&P#&V#&Y(Y#&](YP#&d#&d#&dP(YP(YP(YP(YPP(YP#&j#&mP#&m(YPPP(YP(YP(YP(YP(YP(Y(Y#&q#&{#'R#'X#'g#'m#'s#'}#(T#(d#(j#(x#)O#)U#)d#)y#+]#+k#+q#+w#+}#,T#,_#,e#,k#,u#-X#-_PPPPPPPP#-ePP#.X#2VPP#3m#3t#3|PP#8Y#:m#@i#@l#@o#@z#@}PP#AQ#AU#As#Bj#Bn#CSPP#CW#C^#CbP#Ce#Ci#Cl#D[#Dr#Dw#Dz#D}#ET#EW#E[#E`mhOSj}!n$Z%b%e%f%h*m*r/a/dQ$hmQ$opQ%YyS&U!b+[Q&j!jS(j#y(oQ)e$iQ)r$qQ*^%SQ+b&]S+g&c+iQ+y&kQ-e(qQ/O*_Y0S+k+l+m+n+oS2o.s2qU3x0T0V0YU5e2t2u2vS6[3z3}S7S5f5gQ7n6^R8R7U$p[ORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#b#e$Z$m%Z%^%b%d%e%f%h%l%w%y&R&^&e&o&|'Q(Q)S)Z*i*m*r+P+t+{,^,d-n-s-{.V.v/X/Y/Z/]/a/d/f/|0c0m2d2|3a3c3d3t5m5{6V7k8_8t!j'd#]#k&V'v+T+W,i/t1Q2l3m6|9V9X9[9]9^9_9`9a9b9c9d9e9f9g9h9k9t9u9w:O:P:S:T:nQ(z$QQ)j$kQ*`%VQ*g%_Q,T9lQ.Q)_Q.])kQ/W*eQ2Y.WQ3U/PQ4X9mR5Q2ZpeOSjy}!n$Z%X%b%e%f%h*m*r/a/dR*b%Z&WVOSTjkn}!S!W!k!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#]#b#e#k$Z$m%Z%^%_%b%d%e%f%h%l%y&R&^&e&o&|'Q'v(Q)S)Z*i*m*r+P+T+W+t+{,^,d,i-n-s-{.V.v/X/Y/Z/]/a/d/f/t/|0c0m1Q2d2l2|3a3c3d3m3t5m5{6V6|7k8_8t9V9X9[9]9^9_9`9a9b9c9d9e9f9g9h9k9t9u9w:O:P:S:T:m:n[!cRU!]!`%w&VQ$alQ$gmS$lp$qv$vrs!r!u$X$t&_&s&v)v)w)x*k+U+d,O,Q/j0eQ%OwQ&g!iQ&i!jS(^#v(hS)d$h$iQ)h$kQ)u$sQ*X%QQ*]%SS+x&j&kQ-R(_Q.U)eQ.[)kQ.^)lQ.a)pQ.y*YS.}*^*_Q0a+yQ1Z,}Q2X.WQ2].ZQ2b.cQ3T/OQ4d1[Q5P2ZQ5S2_Q6v5OR7x6w!Y$em!j$g$h$i&T&i&j&k(i)d)e+X+f+x+y-_.U/y0P0U0a1p3w3|6Y7l8`Q)]$aQ)}${Q*Q$|Q*[%SQ.e)uQ.x*XU.|*]*^*_Q3O.yS3S.}/OQ5`2nQ5r3TS7Q5a5dS8P7R7TQ8j8QR8y8kW#|a$c(w:kS${t%XQ$|uQ$}vR){$y$V#{a!w!y#d#v#x$R$S$W&f'|(V(X(Y(a(e(u(v)Y)[)_)|*P+u,Z-U-W-p-z-|.j.m.u.w1Y1c1m1t1{2O2S2e2{2}4g4s4{5i5n6{7X8U9j9n9o9p9q9r9s9x9y9z9{9|9}:Q:R:U:V:k:q:rT'}#s(OV({$Q9l9mU&Y!b$u+_Q'T!{Q)o$nQ.n*RQ1u-mR5[2j&^cORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#]#b#e#k$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&V&^&e&o&|'Q'v(Q)S)Z*i*m*r+P+T+W+t+{,^,d,i-n-s-{.V.v/X/Y/Z/]/a/d/f/t/|0c0m1Q2d2l2|3a3c3d3m3t5m5{6V6|7k8_8t9V9X9[9]9^9_9`9a9b9c9d9e9f9g9h9k9t9u9w:O:P:S:T:n$]#aZ!_!o$_%v%|&x'P'V'W'X'Y'Z'[']'^'_'`'a'c'f'j't)n*}+Y+c+z,Y,`,c,e,s-q/o/r0b0l0p0q0r0s0t0u0v0w0x0y0z0{0|1P1U1y2V3o3r4S4V4W4]4^5^6R6U6b6f6g7h7{8]8r8}9W:dT!XQ!Y&_cORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#]#b#e#k$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&V&^&e&o&|'Q'v(Q)S)Z*i*m*r+P+T+W+t+{,^,d,i-n-s-{.V.v/X/Y/Z/]/a/d/f/t/|0c0m1Q2d2l2|3a3c3d3m3t5m5{6V6|7k8_8t9V9X9[9]9^9_9`9a9b9c9d9e9f9g9h9k9t9u9w:O:P:S:T:nQ&W!bR/u+[Y&Q!b&U&]+[+bS(i#y(oS+f&c+iS-_(j(qQ-`(kQ-f(rQ.p*TU0P+g+k+lU0U+m+n+oS0Z+p2sQ1p-eQ1r-gQ1s-hS2n.s2qU3w0S0T0VQ3{0WQ3|0YS5a2o2vS5d2t2uU6Y3x3z3}Q6_4OS7R5e5fQ7T5gS7l6[6^S8Q7S7UQ8`7nR8k8RlhOSj}!n$Z%b%e%f%h*m*r/a/dQ%j!QS&w!v9[Q)b$fQ*V%OQ*W%PQ+v&hS,X&|9uS-r)S:OQ.S)cQ.r*UQ/h*tQ/i*uQ/q+VQ0X+mQ0_+wS1z-s:SQ2T.TS2W.V:TQ3n/sQ3q/zQ4Q0`Q4}2UQ6P3kQ6S3pQ6W3vQ6`4RQ7f6QQ7i6XQ8[7jQ8o8YQ8q8^R8|8s$W#`Z!_!o%v%|&x'P'V'W'X'Y'Z'[']'^'_'`'a'c'f'j't)n*}+Y+c+z,Y,`,c,s-q/o/r0b0l0p0q0r0s0t0u0v0w0x0y0z0{0|1P1U1y2V3o3r4S4V4W4]4^5^6R6U6b6f6g7h7{8]8r8}9W:dU(t#z&{1OT)W$_,e$W#_Z!_!o%v%|&x'P'V'W'X'Y'Z'[']'^'_'`'a'c'f'j't)n*}+Y+c+z,Y,`,c,s-q/o/r0b0l0p0q0r0s0t0u0v0w0x0y0z0{0|1P1U1y2V3o3r4S4V4W4]4^5^6R6U6b6f6g7h7{8]8r8}9W:dQ'e#`S)V$_,eR-t)W&^cORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#]#b#e#k$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&V&^&e&o&|'Q'v(Q)S)Z*i*m*r+P+T+W+t+{,^,d,i-n-s-{.V.v/X/Y/Z/]/a/d/f/t/|0c0m1Q2d2l2|3a3c3d3m3t5m5{6V6|7k8_8t9V9X9[9]9^9_9`9a9b9c9d9e9f9g9h9k9t9u9w:O:P:S:T:nQ%e{Q%f|Q%h!OQ%i!PR/`*pQ&d!iQ)X$aQ+s&gS-y)])uS0[+q+rW1}-v-w-x.eS4P0]0^U4z2P2Q2RU6t4y5W5XQ7w6uR8f7zT+h&c+iS+f&c+iU0P+g+k+lU0U+m+n+oS0Z+p2sS2n.s2qU3w0S0T0VQ3{0WQ3|0YS5a2o2vS5d2t2uU6Y3x3z3}Q6_4OS7R5e5fQ7T5gS7l6[6^S8Q7S7UQ8`7nR8k8RS+h&c+iT2p.s2qS&q!q/^Q-Q(^Q-](iS0O+f2nQ1`-RS1j-^-fU3y0U0Z5dQ4c1ZS4q1q1sU6]3{3|7TQ6j4dQ6s4tR7o6_Q!xXS&p!q/^Q)T$YQ)`$dQ)f$jQ+|&qQ-P(^Q-[(iQ-a(lQ.R)aQ.z*ZS/}+f2nS1_-Q-RS1i-]-fQ1l-`Q1o-bQ3Q.{W3u0O0U0Z5dQ4b1ZQ4f1`S4k1j1sQ4r1rQ5p3RW6Z3y3{3|7TS6i4c4dQ6n4mQ6q4qQ7O5_Q7]5qS7m6]6_Q7q6jQ7s6oQ7v6sQ7}7PQ8W7^Q8a7oQ8d7uQ8h8OQ8w8iQ9P8xQ9T9QQ:^:XQ:g:bR:h:c$rWORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#b#e$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&^&e&o&|'Q(Q)S)Z*i*m*r+P+t+{,^,d-n-s-{.V.v/X/Y/Z/]/a/d/f/|0c0m2d2|3a3c3d3t5m5{6V7k8_8tS!xn!k!j:W#]#k&V'v+T+W,i/t1Q2l3m6|9V9X9[9]9^9_9`9a9b9c9d9e9f9g9h9k9t9u9w:O:P:S:T:nR:^:m$rXORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#b#e$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&^&e&o&|'Q(Q)S)Z*i*m*r+P+t+{,^,d-n-s-{.V.v/X/Y/Z/]/a/d/f/|0c0m2d2|3a3c3d3t5m5{6V7k8_8tQ$Yb!Y$dm!j$g$h$i&T&i&j&k(i)d)e+X+f+x+y-_.U/y0P0U0a1p3w3|6Y7l8`S$jn!kQ)a$eQ*Z%SW.{*[*]*^*_U3R.|.}/OQ5_2nS5q3S3TU7P5`5a5dQ7^5rU8O7Q7R7TS8i8P8QS8x8j8kQ9Q8y!j:X#]#k&V'v+T+W,i/t1Q2l3m6|9V9X9[9]9^9_9`9a9b9c9d9e9f9g9h9k9t9u9w:O:P:S:T:nQ:b:lR:c:m$f]OSTjk}!S!W!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#b#e$Z$m%Z%^%b%d%e%f%h%l%y&R&^&e&o&|'Q(Q)S)Z*i*m*r+P+t+{,^,d-n-s-{.V.v/X/Y/Z/]/a/d/f/|0c0m2d2|3a3c3d3t5m5{6V7k8_8tY!hRU!]!`%wv$vrs!r!u$X$t&_&s&v)v)w)x*k+U+d,O,Q/j0eQ*h%_!h:Y#]#k'v+T+W,i/t1Q2l3m6|9V9X9[9]9^9_9`9a9b9c9d9e9f9g9h9k9t9u9w:O:P:S:T:nR:]&VS&Z!b$uR/w+_$p[ORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#b#e$Z$m%Z%^%b%d%e%f%h%l%w%y&R&^&e&o&|'Q(Q)S)Z*i*m*r+P+t+{,^,d-n-s-{.V.v/X/Y/Z/]/a/d/f/|0c0m2d2|3a3c3d3t5m5{6V7k8_8t!j'd#]#k&V'v+T+W,i/t1Q2l3m6|9V9X9[9]9^9_9`9a9b9c9d9e9f9g9h9k9t9u9w:O:P:S:T:nR*g%_$roORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#b#e$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&^&e&o&|'Q(Q)S)Z*i*m*r+P+t+{,^,d-n-s-{.V.v/X/Y/Z/]/a/d/f/|0c0m2d2|3a3c3d3t5m5{6V7k8_8tQ'T!{!k:Z#]#k&V'v+T+W,i/t1Q2l3m6|9V9X9[9]9^9_9`9a9b9c9d9e9f9g9h9k9t9u9w:O:P:S:T:n!h#VZ!_$_%v%|&x'P'^'_'`'a'f'j)n*}+c+z,Y,`,s-q0b0l0|1y2V3r4S4V6U7h8]8r8}9W!R9c'c't+Y,e/o/r0p0x0y0z0{1P1U3o4W4]4^5^6R6b6f6g7{:d!d#XZ!_$_%v%|&x'P'`'a'f'j)n*}+c+z,Y,`,s-q0b0l0|1y2V3r4S4V6U7h8]8r8}9W}9e'c't+Y,e/o/r0p0z0{1P1U3o4W4]4^5^6R6b6f6g7{:d!`#]Z!_$_%v%|&x'P'f'j)n*}+c+z,Y,`,s-q0b0l0|1y2V3r4S4V6U7h8]8r8}9Wl(Y#t&})R,{-T-i-j0j1x4a4u:_:i:jx:n'c't+Y,e/o/r0p1P1U3o4W4]4^5^6R6b6f6g7{:d!`:q&y'h(](c+r,W,p-X-u-x.i.k0^0i1a1e2R2g2i2y4U4h4n4w4|5X5l6a6l6r7ZZ:r0}4[6c7p8b&^cORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#]#b#e#k$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&V&^&e&o&|'Q'v(Q)S)Z*i*m*r+P+T+W+t+{,^,d,i-n-s-{.V.v/X/Y/Z/]/a/d/f/t/|0c0m1Q2d2l2|3a3c3d3m3t5m5{6V6|7k8_8t9V9X9[9]9^9_9`9a9b9c9d9e9f9g9h9k9t9u9w:O:P:S:T:nS#l`#mR1R,h&e_ORSTU`jk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#]#b#e#k#m$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&V&^&e&o&|'Q'v(Q)S)Z*i*m*r+P+T+W+t+{,^,d,h,i-n-s-{.V.v/X/Y/Z/]/a/d/f/t/|0c0m1Q2d2l2|3a3c3d3m3t5m5{6V6|7k8_8t9V9X9[9]9^9_9`9a9b9c9d9e9f9g9h9k9t9u9w:O:P:S:T:nS#g^#nT'm#i'qT#h^#nT'o#i'q&e`ORSTU`jk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#]#b#e#k#m$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&V&^&e&o&|'Q'v(Q)S)Z*i*m*r+P+T+W+t+{,^,d,h,i-n-s-{.V.v/X/Y/Z/]/a/d/f/t/|0c0m1Q2d2l2|3a3c3d3m3t5m5{6V6|7k8_8t9V9X9[9]9^9_9`9a9b9c9d9e9f9g9h9k9t9u9w:O:P:S:T:nT#l`#mQ#o`R'x#m$rbORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#b#e$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&^&e&o&|'Q(Q)S)Z*i*m*r+P+t+{,^,d-n-s-{.V.v/X/Y/Z/]/a/d/f/|0c0m2d2|3a3c3d3t5m5{6V7k8_8t!k:l#]#k&V'v+T+W,i/t1Q2l3m6|9V9X9[9]9^9_9`9a9b9c9d9e9f9g9h9k9t9u9w:O:P:S:T:n#RdOSUj}!S!W!n!|#k$Z%Z%^%_%b%d%e%f%h%l&R&e'v)Z*i*m*r+t,i-n-{.v/X/Y/Z/]/a/d/f1Q2d2|3a3c3d5m5{t#za!y$R$S$W(V(X(Y(a(u(v,Z-p1Y1t:k:q:r!|&{!w#d#v#x&f'|(e)Y)[)_)|*P+u-U-W-z-|.j.m.u.w1c1m1{2O2S2e2{2}4g4s4{5i5n6{7X8U9n9p9r9x9z9|:Q:UQ)P$UQ,t(Rc1O9j9o9q9s9y9{9}:R:Vt#wa!y$R$S$W(V(X(Y(a(u(v,Z-p1Y1t:k:q:rS(l#y(oQ)Q$VQ-b(m!|:`!w#d#v#x&f'|(e)Y)[)_)|*P+u-U-W-z-|.j.m.u.w1c1m1{2O2S2e2{2}4g4s4{5i5n6{7X8U9n9p9r9x9z9|:Q:Ub:a9j9o9q9s9y9{9}:R:VQ:e:oR:f:pt#za!y$R$S$W(V(X(Y(a(u(v,Z-p1Y1t:k:q:r!|&{!w#d#v#x&f'|(e)Y)[)_)|*P+u-U-W-z-|.j.m.u.w1c1m1{2O2S2e2{2}4g4s4{5i5n6{7X8U9n9p9r9x9z9|:Q:Uc1O9j9o9q9s9y9{9}:R:VlfOSj}!n$Z%b%e%f%h*m*r/a/dQ(d#xQ*y%oQ*z%qR1b-U$U#{a!w!y#d#v#x$R$S$W&f'|(V(X(Y(a(e(u(v)Y)[)_)|*P+u,Z-U-W-p-z-|.j.m.u.w1Y1c1m1t1{2O2S2e2{2}4g4s4{5i5n6{7X8U9j9n9o9p9q9r9s9x9y9z9{9|9}:Q:R:U:V:k:q:rQ*O$|Q.l*QQ2h.kR5Z2iT(n#y(oS(n#y(oT2p.s2qQ)`$dQ-a(lQ.R)aQ.z*ZQ3Q.{Q5p3RQ7O5_Q7]5qQ7}7PQ8W7^Q8h8OQ8w8iQ9P8xR9T9Ql(V#t&})R,{-T-i-j0j1x4a4u:_:i:j!`9x&y'h(](c+r,W,p-X-u-x.i.k0^0i1a1e2R2g2i2y4U4h4n4w4|5X5l6a6l6r7ZZ9y0}4[6c7p8bn(X#t&})R,y,{-T-i-j0j1x4a4u:_:i:j!b9z&y'h(](c+r,W,p-X-u-x.i.k0^0g0i1a1e2R2g2i2y4U4h4n4w4|5X5l6a6l6r7Z]9{0}4[6c6d7p8bpeOSjy}!n$Z%X%b%e%f%h*m*r/a/dQ%UxR*i%_peOSjy}!n$Z%X%b%e%f%h*m*r/a/dR%UxQ*S$}R.h){qeOSjy}!n$Z%X%b%e%f%h*m*r/a/dQ.t*XS2z.x.yW5h2w2x2y3OU7W5j5k5lU8S7V7Y7ZQ8l8TR8z8mQ%]yR*c%XR3X/RR7`5sS$lp$qR.^)lQ%bzR*m%cR*s%iT/b*r/dQjOQ!nST$^j!nQ(O#sR,q(OQ!YQR%t!YQ!^RU%z!^%{+QQ%{!_R+Q%|Q+]&WR/v+]Q,[&}R0k,[Q,_'PS0n,_0oR0o,`Q+i&cR0Q+iS!eR$tU&`!e&a+RQ&a!fR+R%}Q+`&ZR/x+`Q&t!sQ+}&rU,R&t+}0fR0f,SQ'q#iR,j'qQ#m`R'w#mQ#cZU'g#c*|9iQ*|9WR9i'tQ-O(^W1]-O1^4e6kU1^-P-Q-RS4e1_1`R6k4f#q(T#t&y&}'h(](c(|(})R+r,U,V,W,p,y,z,{-T-X-i-j-u-x.i.k0^0g0h0i0j0}1a1e1x2R2g2i2y4U4Y4Z4[4a4h4n4u4w4|5X5l6a6c6d6e6l6r7Z7p8b:_:i:jQ-V(cU1d-V1f4iQ1f-XR4i1eQ(o#yR-c(oQ(x#}R-l(xQ1|-uR4x1|Q)y$wR.g)yQ2k.nS5]2k6}R6}5^Q*U%OR.q*UQ2q.sR5b2qQ/Q*`S3V/Q5tR5t3XQ.X)hW2[.X2^5R6xQ2^.[Q5R2]R6x5SQ)m$lR._)mQ/d*rR3g/dWiOSj!nQ%g}Q)U$ZQ*l%bQ*n%eQ*o%fQ*q%hQ/_*mS/b*r/dR3f/aQ$]gQ%k!RQ%n!TQ%p!UQ%r!VQ)t$rQ)z$xQ*b%]Q*w%mS/T*c*fQ/k*vQ/l*yQ/m*zS/{+f2nQ1g-ZQ1h-[Q1n-aQ2a.bQ2f.iQ3P.zQ3Z/VQ3e/`Y3s/}0O0U0Z5dQ4j1iQ4l1kQ4o1oQ5V2cQ5Y2gQ5o3QQ5u3Y[6T3r3u3y3{3|7TQ6m4kQ6p4pQ6y5TQ7[5pQ7a5vW7g6U6Z6]6_Q7r6nQ7t6qQ7y6zQ7|7OQ8V7]U8Z7h7m7oQ8c7sQ8e7vQ8g7}Q8n8WS8p8]8aQ8u8dQ8v8hQ8{8rQ9O8wQ9R8}Q9S9PR9U9TQ$fmQ&h!jU)c$g$h$iQ+V&TU+w&i&j&kQ-Z(iS.T)d)eQ/s+XQ/z+fS0`+x+yQ1k-_Q2U.UQ3p/yS3v0P0UQ4R0aQ4p1pS6X3w3|Q7j6YQ8^7lR8s8`S#ua:kR)^$cU#}a$c:kR-k(wQ#taS&y!w)_Q&}!yQ'h#dQ(]#vQ(c#xQ(|$RQ(}$SQ)R$WQ+r&fQ,U9nQ,V9pQ,W9rQ,p'|Q,y(VQ,z(XQ,{(YQ-T(aQ-X(eQ-i(uQ-j(vd-u)Y-z.u2O2{4{5i6{7X8UQ-x)[Q.i)|Q.k*PQ0^+uQ0g9xQ0h9zQ0i9|Q0j,ZQ0}9jQ1a-UQ1e-WQ1x-pQ2R-|Q2g.jQ2i.mQ2y.wQ4U:QQ4Y9oQ4Z9qQ4[9sQ4a1YQ4h1cQ4n1mQ4u1tQ4w1{Q4|2SQ5X2eQ5l2}Q6a:UQ6c9}Q6d9yQ6e9{Q6l4gQ6r4sQ7Z5nQ7p:RQ8b:VQ:_:kQ:i:qR:j:rlgOSj}!n$Z%b%e%f%h*m*r/a/dS!pU%dQ%m!SQ%s!WQ'U!|Q'u#kS*f%Z%^Q*j%_Q*v%lQ+S&RQ+q&eQ,n'vQ-w)ZQ/[*iQ0]+tQ1T,iQ1v-nQ2Q-{Q2x.vQ3]/XQ3^/YQ3`/ZQ3b/]Q3i/fQ4_1QQ5W2dQ5k2|Q5z3aQ5|3cQ5}3dQ7Y5mR7c5{!vZOSUj}!S!n!|$Z%Z%^%_%b%d%e%f%h%l&R&e)Z*i*m*r+t-n-{.v/X/Y/Z/]/a/d/f2d2|3a3c3d5m5{Q!_RQ!oTQ$_kS%v!]%yQ%|!`Q&x!vQ'P!zQ'V#PQ'W#QQ'X#RQ'Y#SQ'Z#TQ'[#UQ']#VQ'^#WQ'_#XQ'`#YQ'a#ZQ'c#]Q'f#bQ'j#eW't#k'v,i1QQ)n$mS*}%w+PS+Y&V/tQ+c&^Q+z&oQ,Y&|Q,`'QQ,c9VQ,e9XQ,s(QQ-q)SQ/o+TQ/r+WQ0b+{Q0l,^Q0p9[Q0q9]Q0r9^Q0s9_Q0t9`Q0u9aQ0v9bQ0w9cQ0x9dQ0y9eQ0z9fQ0{9gQ0|,dQ1P9kQ1U9hQ1y-sQ2V.VQ3o9tQ3r/|Q4S0cQ4V0mQ4W9uQ4]9wQ4^:OQ5^2lQ6R3mQ6U3tQ6b:PQ6f:SQ6g:TQ7h6VQ7{6|Q8]7kQ8r8_Q8}8tQ9W!WR:d:nR!aRR&X!bS&T!b+[S+X&U&]R/y+bR'O!yR'R!zT!tU$XS!sU$XU$wrs*kS&r!r!uQ,P&sQ,S&vQ.f)xS0d,O,QR4T0e`!dR!]!`$t%w&_)v+dh!qUrs!r!u$X&s&v)x,O,Q0eQ/^*kQ/p+UQ3l/jT:[&V)wT!gR$tS!fR$tS%x!]&_S%}!`)vS+O%w+dT+Z&V)wT&[!b$uQ#i^R'z#nT'p#i'qR1S,hT(`#v(hR(f#xQ-v)YQ2P-zQ2w.uQ4y2OQ5j2{Q6u4{Q7V5iQ7z6{Q8T7XR8m8UlhOSj}!n$Z%b%e%f%h*m*r/a/dQ%[yR*b%XV$xrs*kR.o*RR*a%VQ$ppR)s$qR)i$kT%`z%cT%az%cT/c*r/d",
      nodeNames:
        '⚠ ArithOp ArithOp InterpolationStart extends LineComment BlockComment Script ExportDeclaration export Star as VariableName String from ; default FunctionDeclaration async function VariableDefinition TypeParamList TypeDefinition ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation VoidType void TypeofType typeof MemberExpression . ?. PropertyName [ TemplateString Interpolation null super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewExpression new TypeArgList CompareOp < ) ( ArgList UnaryExpression await yield delete LogicOp BitOp ParenthesizedExpression ClassExpression class extends ClassBody MethodDeclaration Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression PrivatePropertyName BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof in const CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXStartTag JSXSelfClosingTag JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast ArrowFunction TypeParamList SequenceExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature CallSignature TypePredicate is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody MethodDeclaration AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try catch finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement',
      maxTerm: 330,
      context: vO,
      nodeProps: [
        [
          Us.closedBy,
          3,
          'InterpolationEnd',
          40,
          ']',
          51,
          '}',
          66,
          ')',
          132,
          'JSXSelfCloseEndTag JSXEndTag',
          146,
          'JSXEndTag',
        ],
        [
          Us.group,
          -26,
          8,
          15,
          17,
          58,
          184,
          188,
          191,
          192,
          194,
          197,
          200,
          211,
          213,
          219,
          221,
          223,
          225,
          228,
          234,
          238,
          240,
          242,
          244,
          246,
          248,
          249,
          'Statement',
          -30,
          12,
          13,
          24,
          27,
          28,
          41,
          43,
          44,
          45,
          47,
          52,
          60,
          68,
          74,
          75,
          91,
          92,
          101,
          103,
          119,
          122,
          124,
          125,
          126,
          127,
          129,
          130,
          148,
          149,
          151,
          'Expression',
          -22,
          23,
          25,
          29,
          32,
          34,
          152,
          154,
          156,
          157,
          159,
          160,
          161,
          163,
          164,
          165,
          167,
          168,
          169,
          178,
          180,
          182,
          183,
          'Type',
          -3,
          79,
          85,
          90,
          'ClassItem',
        ],
        [
          Us.openedBy,
          30,
          'InterpolationStart',
          46,
          '[',
          50,
          '{',
          65,
          '(',
          131,
          'JSXStartTag',
          141,
          'JSXStartTag JSXStartCloseTag',
        ],
      ],
      skippedNodes: [0, 5, 6],
      repeatNodeCount: 28,
      tokenData:
        "!C}~R!`OX%TXY%cYZ'RZ[%c[]%T]^'R^p%Tpq%cqr'crs(kst0htu2`uv4pvw5ewx6cxy<yyz=Zz{=k{|>k|}?O}!O>k!O!P?`!P!QCl!Q!R!0[!R![!1q![!]!7s!]!^!8V!^!_!8g!_!`!9d!`!a!:[!a!b!<R!b!c%T!c!}2`!}#O!=d#O#P%T#P#Q!=t#Q#R!>U#R#S2`#S#T!>i#T#o2`#o#p!>y#p#q!?O#q#r!?f#r#s!?x#s$f%T$f$g%c$g#BY2`#BY#BZ!@Y#BZ$IS2`$IS$I_!@Y$I_$I|2`$I|$I}!Bq$I}$JO!Bq$JO$JT2`$JT$JU!@Y$JU$KV2`$KV$KW!@Y$KW&FU2`&FU&FV!@Y&FV?HT2`?HT?HU!@Y?HU~2`W%YR$UWO!^%T!_#o%T#p~%T,T%jg$UW'W+{OX%TXY%cYZ%TZ[%c[p%Tpq%cq!^%T!_#o%T#p$f%T$f$g%c$g#BY%T#BY#BZ%c#BZ$IS%T$IS$I_%c$I_$JT%T$JT$JU%c$JU$KV%T$KV$KW%c$KW&FU%T&FU&FV%c&FV?HT%T?HT?HU%c?HU~%T,T'YR$UW'X+{O!^%T!_#o%T#p~%T$T'jS$UW!j#{O!^%T!_!`'v!`#o%T#p~%T$O'}S#e#v$UWO!^%T!_!`(Z!`#o%T#p~%T$O(bR#e#v$UWO!^%T!_#o%T#p~%T'u(rZ$UW]!ROY(kYZ)eZr(krs*rs!^(k!^!_+U!_#O(k#O#P-b#P#o(k#o#p+U#p~(k&r)jV$UWOr)ers*Ps!^)e!^!_*a!_#o)e#o#p*a#p~)e&r*WR$P&j$UWO!^%T!_#o%T#p~%T&j*dROr*ars*ms~*a&j*rO$P&j'u*{R$P&j$UW]!RO!^%T!_#o%T#p~%T'm+ZV]!ROY+UYZ*aZr+Urs+ps#O+U#O#P+w#P~+U'm+wO$P&j]!R'm+zROr+Urs,Ts~+U'm,[U$P&j]!ROY,nZr,nrs-Vs#O,n#O#P-[#P~,n!R,sU]!ROY,nZr,nrs-Vs#O,n#O#P-[#P~,n!R-[O]!R!R-_PO~,n'u-gV$UWOr(krs-|s!^(k!^!_+U!_#o(k#o#p+U#p~(k'u.VZ$P&j$UW]!ROY.xYZ%TZr.xrs/rs!^.x!^!_,n!_#O.x#O#P0S#P#o.x#o#p,n#p~.x!Z/PZ$UW]!ROY.xYZ%TZr.xrs/rs!^.x!^!_,n!_#O.x#O#P0S#P#o.x#o#p,n#p~.x!Z/yR$UW]!RO!^%T!_#o%T#p~%T!Z0XT$UWO!^.x!^!_,n!_#o.x#o#p,n#p~.xy0mZ$UWOt%Ttu1`u!^%T!_!c%T!c!}1`!}#R%T#R#S1`#S#T%T#T#o1`#p$g%T$g~1`y1g]$UW'mqOt%Ttu1`u!Q%T!Q![1`![!^%T!_!c%T!c!}1`!}#R%T#R#S1`#S#T%T#T#o1`#p$g%T$g~1`&i2k_$UW#zS'Z%k'epOt%Ttu2`u}%T}!O3j!O!Q%T!Q![2`![!^%T!_!c%T!c!}2`!}#R%T#R#S2`#S#T%T#T#o2`#p$g%T$g~2`[3q_$UW#zSOt%Ttu3ju}%T}!O3j!O!Q%T!Q![3j![!^%T!_!c%T!c!}3j!}#R%T#R#S3j#S#T%T#T#o3j#p$g%T$g~3j$O4wS#^#v$UWO!^%T!_!`5T!`#o%T#p~%T$O5[R$UW#o#vO!^%T!_#o%T#p~%T%r5lU'v%j$UWOv%Tvw6Ow!^%T!_!`5T!`#o%T#p~%T$O6VS$UW#i#vO!^%T!_!`5T!`#o%T#p~%T'u6jZ$UW]!ROY6cYZ7]Zw6cwx*rx!^6c!^!_8T!_#O6c#O#P:T#P#o6c#o#p8T#p~6c&r7bV$UWOw7]wx*Px!^7]!^!_7w!_#o7]#o#p7w#p~7]&j7zROw7wwx*mx~7w'm8YV]!ROY8TYZ7wZw8Twx+px#O8T#O#P8o#P~8T'm8rROw8Twx8{x~8T'm9SU$P&j]!ROY9fZw9fwx-Vx#O9f#O#P9}#P~9f!R9kU]!ROY9fZw9fwx-Vx#O9f#O#P9}#P~9f!R:QPO~9f'u:YV$UWOw6cwx:ox!^6c!^!_8T!_#o6c#o#p8T#p~6c'u:xZ$P&j$UW]!ROY;kYZ%TZw;kwx/rx!^;k!^!_9f!_#O;k#O#P<e#P#o;k#o#p9f#p~;k!Z;rZ$UW]!ROY;kYZ%TZw;kwx/rx!^;k!^!_9f!_#O;k#O#P<e#P#o;k#o#p9f#p~;k!Z<jT$UWO!^;k!^!_9f!_#o;k#o#p9f#p~;k%V=QR!d$}$UWO!^%T!_#o%T#p~%TZ=bR!cR$UWO!^%T!_#o%T#p~%T%R=tU'[!R#_#v$UWOz%Tz{>W{!^%T!_!`5T!`#o%T#p~%T$O>_S#[#v$UWO!^%T!_!`5T!`#o%T#p~%T$u>rSj$m$UWO!^%T!_!`5T!`#o%T#p~%T&i?VR!R&a$UWO!^%T!_#o%T#p~%T&i?gVu%n$UWO!O%T!O!P?|!P!Q%T!Q![@r![!^%T!_#o%T#p~%Ty@RT$UWO!O%T!O!P@b!P!^%T!_#o%T#p~%Ty@iR!Qq$UWO!^%T!_#o%T#p~%Ty@yZ$UWkqO!Q%T!Q![@r![!^%T!_!g%T!g!hAl!h#R%T#R#S@r#S#X%T#X#YAl#Y#o%T#p~%TyAqZ$UWO{%T{|Bd|}%T}!OBd!O!Q%T!Q![CO![!^%T!_#R%T#R#SCO#S#o%T#p~%TyBiV$UWO!Q%T!Q![CO![!^%T!_#R%T#R#SCO#S#o%T#p~%TyCVV$UWkqO!Q%T!Q![CO![!^%T!_#R%T#R#SCO#S#o%T#p~%T,TCs`$UW#]#vOYDuYZ%TZzDuz{Jl{!PDu!P!Q!-e!Q!^Du!^!_Fx!_!`!.^!`!a!/]!a!}Du!}#OHq#O#PJQ#P#oDu#o#pFx#p~DuXD|[$UW}POYDuYZ%TZ!PDu!P!QEr!Q!^Du!^!_Fx!_!}Du!}#OHq#O#PJQ#P#oDu#o#pFx#p~DuXEy_$UW}PO!^%T!_#Z%T#Z#[Er#[#]%T#]#^Er#^#a%T#a#bEr#b#g%T#g#hEr#h#i%T#i#jEr#j#m%T#m#nEr#n#o%T#p~%TPF}V}POYFxZ!PFx!P!QGd!Q!}Fx!}#OG{#O#PHh#P~FxPGiU}P#Z#[Gd#]#^Gd#a#bGd#g#hGd#i#jGd#m#nGdPHOTOYG{Z#OG{#O#PH_#P#QFx#Q~G{PHbQOYG{Z~G{PHkQOYFxZ~FxXHvY$UWOYHqYZ%TZ!^Hq!^!_G{!_#OHq#O#PIf#P#QDu#Q#oHq#o#pG{#p~HqXIkV$UWOYHqYZ%TZ!^Hq!^!_G{!_#oHq#o#pG{#p~HqXJVV$UWOYDuYZ%TZ!^Du!^!_Fx!_#oDu#o#pFx#p~Du,TJs^$UW}POYJlYZKoZzJlz{NQ{!PJl!P!Q!,R!Q!^Jl!^!_!!]!_!}Jl!}#O!'|#O#P!+a#P#oJl#o#p!!]#p~Jl,TKtV$UWOzKoz{LZ{!^Ko!^!_M]!_#oKo#o#pM]#p~Ko,TL`X$UWOzKoz{LZ{!PKo!P!QL{!Q!^Ko!^!_M]!_#oKo#o#pM]#p~Ko,TMSR$UWU+{O!^%T!_#o%T#p~%T+{M`ROzM]z{Mi{~M]+{MlTOzM]z{Mi{!PM]!P!QM{!Q~M]+{NQOU+{,TNX^$UW}POYJlYZKoZzJlz{NQ{!PJl!P!Q! T!Q!^Jl!^!_!!]!_!}Jl!}#O!'|#O#P!+a#P#oJl#o#p!!]#p~Jl,T! ^_$UWU+{}PO!^%T!_#Z%T#Z#[Er#[#]%T#]#^Er#^#a%T#a#bEr#b#g%T#g#hEr#h#i%T#i#jEr#j#m%T#m#nEr#n#o%T#p~%T+{!!bY}POY!!]YZM]Zz!!]z{!#Q{!P!!]!P!Q!&x!Q!}!!]!}#O!$`#O#P!&f#P~!!]+{!#VY}POY!!]YZM]Zz!!]z{!#Q{!P!!]!P!Q!#u!Q!}!!]!}#O!$`#O#P!&f#P~!!]+{!#|UU+{}P#Z#[Gd#]#^Gd#a#bGd#g#hGd#i#jGd#m#nGd+{!$cWOY!$`YZM]Zz!$`z{!${{#O!$`#O#P!&S#P#Q!!]#Q~!$`+{!%OYOY!$`YZM]Zz!$`z{!${{!P!$`!P!Q!%n!Q#O!$`#O#P!&S#P#Q!!]#Q~!$`+{!%sTU+{OYG{Z#OG{#O#PH_#P#QFx#Q~G{+{!&VTOY!$`YZM]Zz!$`z{!${{~!$`+{!&iTOY!!]YZM]Zz!!]z{!#Q{~!!]+{!&}_}POzM]z{Mi{#ZM]#Z#[!&x#[#]M]#]#^!&x#^#aM]#a#b!&x#b#gM]#g#h!&x#h#iM]#i#j!&x#j#mM]#m#n!&x#n~M],T!(R[$UWOY!'|YZKoZz!'|z{!(w{!^!'|!^!_!$`!_#O!'|#O#P!*o#P#QJl#Q#o!'|#o#p!$`#p~!'|,T!(|^$UWOY!'|YZKoZz!'|z{!(w{!P!'|!P!Q!)x!Q!^!'|!^!_!$`!_#O!'|#O#P!*o#P#QJl#Q#o!'|#o#p!$`#p~!'|,T!*PY$UWU+{OYHqYZ%TZ!^Hq!^!_G{!_#OHq#O#PIf#P#QDu#Q#oHq#o#pG{#p~Hq,T!*tX$UWOY!'|YZKoZz!'|z{!(w{!^!'|!^!_!$`!_#o!'|#o#p!$`#p~!'|,T!+fX$UWOYJlYZKoZzJlz{NQ{!^Jl!^!_!!]!_#oJl#o#p!!]#p~Jl,T!,Yc$UW}POzKoz{LZ{!^Ko!^!_M]!_#ZKo#Z#[!,R#[#]Ko#]#^!,R#^#aKo#a#b!,R#b#gKo#g#h!,R#h#iKo#i#j!,R#j#mKo#m#n!,R#n#oKo#o#pM]#p~Ko,T!-lV$UWT+{OY!-eYZ%TZ!^!-e!^!_!.R!_#o!-e#o#p!.R#p~!-e+{!.WQT+{OY!.RZ~!.R$P!.g[$UW#o#v}POYDuYZ%TZ!PDu!P!QEr!Q!^Du!^!_Fx!_!}Du!}#OHq#O#PJQ#P#oDu#o#pFx#p~Du]!/f[#wS$UW}POYDuYZ%TZ!PDu!P!QEr!Q!^Du!^!_Fx!_!}Du!}#OHq#O#PJQ#P#oDu#o#pFx#p~Duy!0cd$UWkqO!O%T!O!P@r!P!Q%T!Q![!1q![!^%T!_!g%T!g!hAl!h#R%T#R#S!1q#S#U%T#U#V!3X#V#X%T#X#YAl#Y#b%T#b#c!2w#c#d!4m#d#l%T#l#m!5{#m#o%T#p~%Ty!1x_$UWkqO!O%T!O!P@r!P!Q%T!Q![!1q![!^%T!_!g%T!g!hAl!h#R%T#R#S!1q#S#X%T#X#YAl#Y#b%T#b#c!2w#c#o%T#p~%Ty!3OR$UWkqO!^%T!_#o%T#p~%Ty!3^W$UWO!Q%T!Q!R!3v!R!S!3v!S!^%T!_#R%T#R#S!3v#S#o%T#p~%Ty!3}Y$UWkqO!Q%T!Q!R!3v!R!S!3v!S!^%T!_#R%T#R#S!3v#S#b%T#b#c!2w#c#o%T#p~%Ty!4rV$UWO!Q%T!Q!Y!5X!Y!^%T!_#R%T#R#S!5X#S#o%T#p~%Ty!5`X$UWkqO!Q%T!Q!Y!5X!Y!^%T!_#R%T#R#S!5X#S#b%T#b#c!2w#c#o%T#p~%Ty!6QZ$UWO!Q%T!Q![!6s![!^%T!_!c%T!c!i!6s!i#R%T#R#S!6s#S#T%T#T#Z!6s#Z#o%T#p~%Ty!6z]$UWkqO!Q%T!Q![!6s![!^%T!_!c%T!c!i!6s!i#R%T#R#S!6s#S#T%T#T#Z!6s#Z#b%T#b#c!2w#c#o%T#p~%T%w!7|R!]V$UW#m%hO!^%T!_#o%T#p~%T!P!8^R_w$UWO!^%T!_#o%T#p~%T+c!8rR'`d!a%Y#x&s'zP!P!Q!8{!^!_!9Q!_!`!9_W!9QO$WW#v!9VP#`#v!_!`!9Y#v!9_O#o#v#v!9dO#a#v%w!9kT!{%o$UWO!^%T!_!`'v!`!a!9z!a#o%T#p~%T$P!:RR#W#w$UWO!^%T!_#o%T#p~%T%w!:gT'_!s#a#v$RS$UWO!^%T!_!`!:v!`!a!;W!a#o%T#p~%T$O!:}R#a#v$UWO!^%T!_#o%T#p~%T$O!;_T#`#v$UWO!^%T!_!`5T!`!a!;n!a#o%T#p~%T$O!;uS#`#v$UWO!^%T!_!`5T!`#o%T#p~%T%w!<YV'n%o$UWO!O%T!O!P!<o!P!^%T!_!a%T!a!b!=P!b#o%T#p~%T$`!<vRv$W$UWO!^%T!_#o%T#p~%T$O!=WS$UW#j#vO!^%T!_!`5T!`#o%T#p~%T&e!=kRx&]$UWO!^%T!_#o%T#p~%TZ!={R!OR$UWO!^%T!_#o%T#p~%T$O!>]S#g#v$UWO!^%T!_!`5T!`#o%T#p~%T$P!>pR$UW'd#wO!^%T!_#o%T#p~%T~!?OO!T~%r!?VT'u%j$UWO!^%T!_!`5T!`#o%T#p#q!=P#q~%T$u!?oR!S$knQ$UWO!^%T!_#o%T#p~%TX!@PR!kP$UWO!^%T!_#o%T#p~%T,T!@gr$UW'W+{#zS'Z%k'epOX%TXY%cYZ%TZ[%c[p%Tpq%cqt%Ttu2`u}%T}!O3j!O!Q%T!Q![2`![!^%T!_!c%T!c!}2`!}#R%T#R#S2`#S#T%T#T#o2`#p$f%T$f$g%c$g#BY2`#BY#BZ!@Y#BZ$IS2`$IS$I_!@Y$I_$JT2`$JT$JU!@Y$JU$KV2`$KV$KW!@Y$KW&FU2`&FU&FV!@Y&FV?HT2`?HT?HU!@Y?HU~2`,T!CO_$UW'X+{#zS'Z%k'epOt%Ttu2`u}%T}!O3j!O!Q%T!Q![2`![!^%T!_!c%T!c!}2`!}#R%T#R#S2`#S#T%T#T#o2`#p$g%T$g~2`",
      tokenizers: [wO, xO, kO, 0, 1, 2, 3, 4, 5, 6, 7, 8, yO],
      topRules: { Script: [0, 7] },
      dialects: { jsx: 11335, ts: 11337 },
      dynamicPrecedences: { 149: 1, 176: 1 },
      specialized: [
        {
          term: 287,
          get: (t, e) =>
            (function (t, e) {
              return 'extends' == t && e.dialectEnabled(1) ? 4 : -1;
            })(t, e) << 1,
        },
        { term: 287, get: (t) => SO[t] || -1 },
        { term: 297, get: (t) => $O[t] || -1 },
        { term: 63, get: (t) => TO[t] || -1 },
      ],
      tokenPrec: 11358,
    }),
    RO = [
      zu('function ${name}(${params}) {\n\t${}\n}', {
        label: 'function',
        detail: 'definition',
        type: 'keyword',
      }),
      zu(
        'for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}',
        { label: 'for', detail: 'loop', type: 'keyword' }
      ),
      zu('for (let ${name} of ${collection}) {\n\t${}\n}', {
        label: 'for',
        detail: 'of loop',
        type: 'keyword',
      }),
      zu('try {\n\t${}\n} catch (${error}) {\n\t${}\n}', {
        label: 'try',
        detail: 'block',
        type: 'keyword',
      }),
      zu('class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}', {
        label: 'class',
        detail: 'definition',
        type: 'keyword',
      }),
      zu('import {${names}} from "${module}"\n${}', {
        label: 'import',
        detail: 'named',
        type: 'keyword',
      }),
      zu('import ${name} from "${module}"\n${}', {
        label: 'import',
        detail: 'default',
        type: 'keyword',
      }),
    ],
    WO = Ao.define({
      parser: PO.configure({
        props: [
          Bo.add({
            IfStatement: na({ except: /^\s*({|else\b)/ }),
            TryStatement: na({ except: /^\s*({|catch\b|finally\b)/ }),
            LabeledStatement: (t) => t.baseIndent,
            SwitchBody: (t) => {
              let e = t.textAfter,
                i = /^\s*\}/.test(e),
                n = /^\s*(case|default)\b/.test(e);
              return t.baseIndent + (i ? 0 : n ? 1 : 2) * t.unit;
            },
            Block: ea({ closing: '}' }),
            ArrowFunction: (t) => t.baseIndent + t.unit,
            'TemplateString BlockComment': () => -1,
            'Statement Property': na({ except: /^{/ }),
            JSXElement(t) {
              let e = /^\s*<\//.test(t.textAfter);
              return t.lineIndent(t.node.from) + (e ? 0 : t.unit);
            },
            JSXEscape(t) {
              let e = /\s*\}/.test(t.textAfter);
              return t.lineIndent(t.node.from) + (e ? 0 : t.unit);
            },
            'JSXOpenTag JSXSelfClosingTag': (t) =>
              t.column(t.node.from) + t.unit,
          }),
          oa.add({
            'Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression':
              aa,
            BlockComment: (t) => ({ from: t.from + 2, to: t.to - 2 }),
          }),
          ld({
            'get set async static': _d.modifier,
            'for while do if else switch try catch finally return throw break continue default case':
              _d.controlKeyword,
            'in of await yield void typeof delete instanceof':
              _d.operatorKeyword,
            'let var const function class extends': _d.definitionKeyword,
            'import export from': _d.moduleKeyword,
            'with debugger as new': _d.keyword,
            TemplateString: _d.special(_d.string),
            Super: _d.atom,
            BooleanLiteral: _d.bool,
            this: _d.self,
            null: _d.null,
            Star: _d.modifier,
            VariableName: _d.variableName,
            'CallExpression/VariableName TaggedTemplateExpression/VariableName':
              _d.function(_d.variableName),
            VariableDefinition: _d.definition(_d.variableName),
            Label: _d.labelName,
            PropertyName: _d.propertyName,
            PrivatePropertyName: _d.special(_d.propertyName),
            'CallExpression/MemberExpression/PropertyName': _d.function(
              _d.propertyName
            ),
            'FunctionDeclaration/VariableDefinition': _d.function(
              _d.definition(_d.variableName)
            ),
            'ClassDeclaration/VariableDefinition': _d.definition(_d.className),
            PropertyDefinition: _d.definition(_d.propertyName),
            PrivatePropertyDefinition: _d.definition(
              _d.special(_d.propertyName)
            ),
            UpdateOp: _d.updateOperator,
            LineComment: _d.lineComment,
            BlockComment: _d.blockComment,
            Number: _d.number,
            String: _d.string,
            ArithOp: _d.arithmeticOperator,
            LogicOp: _d.logicOperator,
            BitOp: _d.bitwiseOperator,
            CompareOp: _d.compareOperator,
            RegExp: _d.regexp,
            Equals: _d.definitionOperator,
            'Arrow : Spread': _d.punctuation,
            '( )': _d.paren,
            '[ ]': _d.squareBracket,
            '{ }': _d.brace,
            'InterpolationStart InterpolationEnd': _d.special(_d.brace),
            '.': _d.derefOperator,
            ', ;': _d.separator,
            TypeName: _d.typeName,
            TypeDefinition: _d.definition(_d.typeName),
            'type enum interface implements namespace module declare':
              _d.definitionKeyword,
            'abstract global Privacy readonly override': _d.modifier,
            'is keyof unique infer': _d.operatorKeyword,
            JSXAttributeValue: _d.attributeValue,
            JSXText: _d.content,
            'JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag':
              _d.angleBracket,
            'JSXIdentifier JSXNameSpacedName': _d.tagName,
            'JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName':
              _d.attributeName,
          }),
        ],
      }),
      languageData: {
        closeBrackets: { brackets: ['(', '[', '{', "'", '"', '`'] },
        commentTokens: { line: '//', block: { open: '/*', close: '*/' } },
        indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
        wordChars: '$',
      },
    }),
    CO = WO.configure({ dialect: 'ts' }),
    AO = WO.configure({ dialect: 'jsx' }),
    XO = WO.configure({ dialect: 'jsx ts' });
  function ZO(t = {}) {
    let e = t.jsx ? (t.typescript ? XO : AO) : t.typescript ? CO : WO;
    return new jo(
      e,
      WO.data.of({
        autocomplete:
          ((i = ['LineComment', 'BlockComment', 'String']),
          (n = Nc(RO)),
          (t) => {
            for (let e = Xo(t.state).resolveInner(t.pos, -1); e; e = e.parent)
              if (i.indexOf(e.name) > -1) return null;
            return n(t);
          }),
      })
    );
    var i, n;
  }
  const MO = ['_blank', '_self', '_top', '_parent'],
    _O = ['ascii', 'utf-8', 'utf-16', 'latin1', 'latin1'],
    LO = ['get', 'post', 'put', 'delete'],
    DO = [
      'application/x-www-form-urlencoded',
      'multipart/form-data',
      'text/plain',
    ],
    EO = ['true', 'false'],
    zO = {},
    qO = {
      a: {
        attrs: {
          href: null,
          ping: null,
          type: null,
          media: null,
          target: MO,
          hreflang: null,
        },
      },
      abbr: zO,
      acronym: zO,
      address: zO,
      applet: zO,
      area: {
        attrs: {
          alt: null,
          coords: null,
          href: null,
          target: null,
          ping: null,
          media: null,
          hreflang: null,
          type: null,
          shape: ['default', 'rect', 'circle', 'poly'],
        },
      },
      article: zO,
      aside: zO,
      audio: {
        attrs: {
          src: null,
          mediagroup: null,
          crossorigin: ['anonymous', 'use-credentials'],
          preload: ['none', 'metadata', 'auto'],
          autoplay: ['autoplay'],
          loop: ['loop'],
          controls: ['controls'],
        },
      },
      b: zO,
      base: { attrs: { href: null, target: MO } },
      basefont: zO,
      bdi: zO,
      bdo: zO,
      big: zO,
      blockquote: { attrs: { cite: null } },
      body: zO,
      br: zO,
      button: {
        attrs: {
          form: null,
          formaction: null,
          name: null,
          value: null,
          autofocus: ['autofocus'],
          disabled: ['autofocus'],
          formenctype: DO,
          formmethod: LO,
          formnovalidate: ['novalidate'],
          formtarget: MO,
          type: ['submit', 'reset', 'button'],
        },
      },
      canvas: { attrs: { width: null, height: null } },
      caption: zO,
      center: zO,
      cite: zO,
      code: zO,
      col: { attrs: { span: null } },
      colgroup: { attrs: { span: null } },
      command: {
        attrs: {
          type: ['command', 'checkbox', 'radio'],
          label: null,
          icon: null,
          radiogroup: null,
          command: null,
          title: null,
          disabled: ['disabled'],
          checked: ['checked'],
        },
      },
      data: { attrs: { value: null } },
      datagrid: { attrs: { disabled: ['disabled'], multiple: ['multiple'] } },
      datalist: { attrs: { data: null } },
      dd: zO,
      del: { attrs: { cite: null, datetime: null } },
      details: { attrs: { open: ['open'] } },
      dfn: zO,
      dir: zO,
      div: zO,
      dl: zO,
      dt: zO,
      em: zO,
      embed: { attrs: { src: null, type: null, width: null, height: null } },
      eventsource: { attrs: { src: null } },
      fieldset: { attrs: { disabled: ['disabled'], form: null, name: null } },
      figcaption: zO,
      figure: zO,
      font: zO,
      footer: zO,
      form: {
        attrs: {
          action: null,
          name: null,
          'accept-charset': _O,
          autocomplete: ['on', 'off'],
          enctype: DO,
          method: LO,
          novalidate: ['novalidate'],
          target: MO,
        },
      },
      frame: zO,
      frameset: zO,
      h1: zO,
      h2: zO,
      h3: zO,
      h4: zO,
      h5: zO,
      h6: zO,
      head: {
        children: [
          'title',
          'base',
          'link',
          'style',
          'meta',
          'script',
          'noscript',
          'command',
        ],
      },
      header: zO,
      hgroup: zO,
      hr: zO,
      html: { attrs: { manifest: null } },
      i: zO,
      iframe: {
        attrs: {
          src: null,
          srcdoc: null,
          name: null,
          width: null,
          height: null,
          sandbox: [
            'allow-top-navigation',
            'allow-same-origin',
            'allow-forms',
            'allow-scripts',
          ],
          seamless: ['seamless'],
        },
      },
      img: {
        attrs: {
          alt: null,
          src: null,
          ismap: null,
          usemap: null,
          width: null,
          height: null,
          crossorigin: ['anonymous', 'use-credentials'],
        },
      },
      input: {
        attrs: {
          alt: null,
          dirname: null,
          form: null,
          formaction: null,
          height: null,
          list: null,
          max: null,
          maxlength: null,
          min: null,
          name: null,
          pattern: null,
          placeholder: null,
          size: null,
          src: null,
          step: null,
          value: null,
          width: null,
          accept: ['audio/*', 'video/*', 'image/*'],
          autocomplete: ['on', 'off'],
          autofocus: ['autofocus'],
          checked: ['checked'],
          disabled: ['disabled'],
          formenctype: DO,
          formmethod: LO,
          formnovalidate: ['novalidate'],
          formtarget: MO,
          multiple: ['multiple'],
          readonly: ['readonly'],
          required: ['required'],
          type: [
            'hidden',
            'text',
            'search',
            'tel',
            'url',
            'email',
            'password',
            'datetime',
            'date',
            'month',
            'week',
            'time',
            'datetime-local',
            'number',
            'range',
            'color',
            'checkbox',
            'radio',
            'file',
            'submit',
            'image',
            'reset',
            'button',
          ],
        },
      },
      ins: { attrs: { cite: null, datetime: null } },
      kbd: zO,
      keygen: {
        attrs: {
          challenge: null,
          form: null,
          name: null,
          autofocus: ['autofocus'],
          disabled: ['disabled'],
          keytype: ['RSA'],
        },
      },
      label: { attrs: { for: null, form: null } },
      legend: zO,
      li: { attrs: { value: null } },
      link: {
        attrs: {
          href: null,
          type: null,
          hreflang: null,
          media: null,
          sizes: ['all', '16x16', '16x16 32x32', '16x16 32x32 64x64'],
        },
      },
      map: { attrs: { name: null } },
      mark: zO,
      menu: { attrs: { label: null, type: ['list', 'context', 'toolbar'] } },
      meta: {
        attrs: {
          content: null,
          charset: _O,
          name: [
            'viewport',
            'application-name',
            'author',
            'description',
            'generator',
            'keywords',
          ],
          'http-equiv': [
            'content-language',
            'content-type',
            'default-style',
            'refresh',
          ],
        },
      },
      meter: {
        attrs: {
          value: null,
          min: null,
          low: null,
          high: null,
          max: null,
          optimum: null,
        },
      },
      nav: zO,
      noframes: zO,
      noscript: zO,
      object: {
        attrs: {
          data: null,
          type: null,
          name: null,
          usemap: null,
          form: null,
          width: null,
          height: null,
          typemustmatch: ['typemustmatch'],
        },
      },
      ol: {
        attrs: {
          reversed: ['reversed'],
          start: null,
          type: ['1', 'a', 'A', 'i', 'I'],
        },
        children: ['li', 'script', 'template', 'ul', 'ol'],
      },
      optgroup: { attrs: { disabled: ['disabled'], label: null } },
      option: {
        attrs: {
          disabled: ['disabled'],
          label: null,
          selected: ['selected'],
          value: null,
        },
      },
      output: { attrs: { for: null, form: null, name: null } },
      p: zO,
      param: { attrs: { name: null, value: null } },
      pre: zO,
      progress: { attrs: { value: null, max: null } },
      q: { attrs: { cite: null } },
      rp: zO,
      rt: zO,
      ruby: zO,
      s: zO,
      samp: zO,
      script: {
        attrs: {
          type: ['text/javascript'],
          src: null,
          async: ['async'],
          defer: ['defer'],
          charset: _O,
        },
      },
      section: zO,
      select: {
        attrs: {
          form: null,
          name: null,
          size: null,
          autofocus: ['autofocus'],
          disabled: ['disabled'],
          multiple: ['multiple'],
        },
      },
      small: zO,
      source: { attrs: { src: null, type: null, media: null } },
      span: zO,
      strike: zO,
      strong: zO,
      style: { attrs: { type: ['text/css'], media: null, scoped: null } },
      sub: zO,
      summary: zO,
      sup: zO,
      table: zO,
      tbody: zO,
      td: { attrs: { colspan: null, rowspan: null, headers: null } },
      textarea: {
        attrs: {
          dirname: null,
          form: null,
          maxlength: null,
          name: null,
          placeholder: null,
          rows: null,
          cols: null,
          autofocus: ['autofocus'],
          disabled: ['disabled'],
          readonly: ['readonly'],
          required: ['required'],
          wrap: ['soft', 'hard'],
        },
      },
      tfoot: zO,
      th: {
        attrs: {
          colspan: null,
          rowspan: null,
          headers: null,
          scope: ['row', 'col', 'rowgroup', 'colgroup'],
        },
      },
      thead: zO,
      time: { attrs: { datetime: null } },
      title: zO,
      tr: zO,
      track: {
        attrs: {
          src: null,
          label: null,
          default: null,
          kind: [
            'subtitles',
            'captions',
            'descriptions',
            'chapters',
            'metadata',
          ],
          srclang: null,
        },
      },
      tt: zO,
      u: zO,
      ul: { children: ['li', 'script', 'template', 'ul', 'ol'] },
      var: zO,
      video: {
        attrs: {
          src: null,
          poster: null,
          width: null,
          height: null,
          crossorigin: ['anonymous', 'use-credentials'],
          preload: ['auto', 'metadata', 'none'],
          autoplay: ['autoplay'],
          mediagroup: ['movie'],
          muted: ['muted'],
          controls: ['controls'],
        },
      },
      wbr: zO,
    },
    jO = {
      accesskey: null,
      class: null,
      contenteditable: EO,
      contextmenu: null,
      dir: ['ltr', 'rtl', 'auto'],
      draggable: ['true', 'false', 'auto'],
      dropzone: ['copy', 'move', 'link', 'string:', 'file:'],
      hidden: ['hidden'],
      id: null,
      inert: ['inert'],
      itemid: null,
      itemprop: null,
      itemref: null,
      itemscope: ['itemscope'],
      itemtype: null,
      lang: [
        'ar',
        'bn',
        'de',
        'en-GB',
        'en-US',
        'es',
        'fr',
        'hi',
        'id',
        'ja',
        'pa',
        'pt',
        'ru',
        'tr',
        'zh',
      ],
      spellcheck: EO,
      autocorrect: EO,
      autocapitalize: EO,
      style: null,
      tabindex: null,
      title: null,
      translate: ['yes', 'no'],
      onclick: null,
      rel: [
        'stylesheet',
        'alternate',
        'author',
        'bookmark',
        'help',
        'license',
        'next',
        'nofollow',
        'noreferrer',
        'prefetch',
        'prev',
        'search',
        'tag',
      ],
      role: 'alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer'.split(
        ' '
      ),
      'aria-activedescendant': null,
      'aria-atomic': EO,
      'aria-autocomplete': ['inline', 'list', 'both', 'none'],
      'aria-busy': EO,
      'aria-checked': ['true', 'false', 'mixed', 'undefined'],
      'aria-controls': null,
      'aria-describedby': null,
      'aria-disabled': EO,
      'aria-dropeffect': null,
      'aria-expanded': ['true', 'false', 'undefined'],
      'aria-flowto': null,
      'aria-grabbed': ['true', 'false', 'undefined'],
      'aria-haspopup': EO,
      'aria-hidden': EO,
      'aria-invalid': ['true', 'false', 'grammar', 'spelling'],
      'aria-label': null,
      'aria-labelledby': null,
      'aria-level': null,
      'aria-live': ['off', 'polite', 'assertive'],
      'aria-multiline': EO,
      'aria-multiselectable': EO,
      'aria-owns': null,
      'aria-posinset': null,
      'aria-pressed': ['true', 'false', 'mixed', 'undefined'],
      'aria-readonly': EO,
      'aria-relevant': null,
      'aria-required': EO,
      'aria-selected': ['true', 'false', 'undefined'],
      'aria-setsize': null,
      'aria-sort': ['ascending', 'descending', 'none', 'other'],
      'aria-valuemax': null,
      'aria-valuemin': null,
      'aria-valuenow': null,
      'aria-valuetext': null,
    },
    VO = Object.keys(qO),
    YO = Object.keys(jO);
  function UO(t, e, i = t.length) {
    if (!e) return '';
    let n = e.firstChild,
      r = n && n.getChild('TagName');
    return r ? t.sliceString(r.from, Math.min(r.to, i)) : '';
  }
  function GO(t, e = !1) {
    for (let i = t.parent; i; i = i.parent)
      if ('Element' == i.name) {
        if (!e) return i;
        e = !1;
      }
    return null;
  }
  function IO(t, e) {
    let i = qO[UO(t, GO(e, !0))];
    return (null == i ? void 0 : i.children) || VO;
  }
  function NO(t, e) {
    let i = [];
    for (let n = e; (n = GO(n)); ) {
      let r = UO(t, n);
      if (r && 'CloseTag' == n.lastChild.name) break;
      r &&
        i.indexOf(r) < 0 &&
        ('EndTag' == e.name || e.from >= n.firstChild.to) &&
        i.push(r);
    }
    return i;
  }
  const BO = /^[:\-\.\w\u00b7-\uffff]+$/;
  function FO(t, e, i, n) {
    let r = /\s*>/.test(t.sliceDoc(n, n + 5)) ? '' : '>';
    return {
      from: i,
      to: n,
      options: IO(t.doc, e)
        .map((t) => ({ label: t, type: 'type' }))
        .concat(
          NO(t.doc, e).map((t, e) => ({
            label: '/' + t,
            apply: '/' + t + r,
            type: 'type',
            boost: 99 - e,
          }))
        ),
      span: /^\/?[:\-\.\w\u00b7-\uffff]*$/,
    };
  }
  function HO(t, e, i, n) {
    let r = /\s*>/.test(t.sliceDoc(n, n + 5)) ? '' : '>';
    return {
      from: i,
      to: n,
      options: NO(t.doc, e).map((t, e) => ({
        label: t,
        apply: t + r,
        type: 'type',
        boost: 99 - e,
      })),
      span: BO,
    };
  }
  const JO = Ao.define({
      parser: Ff.configure({
        props: [
          Bo.add({
            Element(t) {
              let e = /^(\s*)(<\/)?/.exec(t.textAfter);
              return t.node.to <= t.pos + e[0].length
                ? t.continue()
                : t.lineIndent(t.node.from) + (e[2] ? 0 : t.unit);
            },
            'OpenTag CloseTag SelfClosingTag': (t) =>
              t.column(t.node.from) + t.unit,
            Document(t) {
              if (t.pos + /\s*/.exec(t.textAfter)[0].length < t.node.to)
                return t.continue();
              let e,
                i = null;
              for (let e = t.node; ; ) {
                let t = e.lastChild;
                if (!t || 'Element' != t.name || t.to != e.to) break;
                i = e = t;
              }
              return i &&
                (!(e = i.lastChild) ||
                  ('CloseTag' != e.name && 'SelfClosingTag' != e.name))
                ? t.lineIndent(i.from) + t.unit
                : null;
            },
          }),
          oa.add({
            Element(t) {
              let e = t.firstChild,
                i = t.lastChild;
              return e && 'OpenTag' == e.name
                ? { from: e.to, to: 'CloseTag' == i.name ? i.from : t.to }
                : null;
            },
          }),
          ld({
            'Text RawText': _d.content,
            'StartTag StartCloseTag SelfCloserEndTag EndTag SelfCloseEndTag':
              _d.angleBracket,
            TagName: _d.tagName,
            'MismatchedCloseTag/TagName': [_d.tagName, _d.invalid],
            AttributeName: _d.attributeName,
            'AttributeValue UnquotedAttributeValue': _d.attributeValue,
            Is: _d.definitionOperator,
            'EntityReference CharacterReference': _d.character,
            Comment: _d.blockComment,
            ProcessingInst: _d.processingInstruction,
            DoctypeDecl: _d.documentMeta,
          }),
        ],
        wrap: Kf([
          {
            tag: 'script',
            attrs: (t) =>
              !t.type ||
              /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(
                t.type
              ),
            parser: WO.parser,
          },
          {
            tag: 'style',
            attrs: (t) =>
              (!t.lang || 'css' == t.lang) &&
              (!t.type || /^(text\/)?(x-)?(stylesheet|css)$/i.test(t.type)),
            parser: pO.parser,
          },
        ]),
      }),
      languageData: {
        commentTokens: { block: { open: '\x3c!--', close: '--\x3e' } },
        indentOnInput: /^\s*<\/\w+\W$/,
        wordChars: '-._',
      },
    }),
    KO = JO.data.of({
      autocomplete: function (t) {
        let { state: e, pos: i } = t,
          n = Xo(e).resolveInner(i),
          r = n.resolve(i, -1);
        for (let t, e = i; n == r && (t = r.childBefore(e)); ) {
          let i = t.lastChild;
          if (!i || !i.type.isError || i.from < i.to) break;
          (n = r = t), (e = i.from);
        }
        return 'TagName' == r.name
          ? r.parent && /CloseTag$/.test(r.parent.name)
            ? HO(e, r, r.from, i)
            : FO(e, r, r.from, i)
          : 'StartTag' == r.name
          ? FO(e, r, i, i)
          : 'StartCloseTag' == r.name || 'IncompleteCloseTag' == r.name
          ? HO(e, r, i, i)
          : (t.explicit &&
              ('OpenTag' == r.name || 'SelfClosingTag' == r.name)) ||
            'AttributeName' == r.name
          ? (function (t, e, i, n) {
              let r = GO(e),
                s = r ? qO[UO(t.doc, r)] : null;
              return {
                from: i,
                to: n,
                options: (s && s.attrs
                  ? Object.keys(s.attrs).concat(YO)
                  : YO
                ).map((t) => ({ label: t, type: 'property' })),
                span: BO,
              };
            })(e, r, 'AttributeName' == r.name ? r.from : i, i)
          : 'Is' == r.name ||
            'AttributeValue' == r.name ||
            'UnquotedAttributeValue' == r.name
          ? (function (t, e, i, n) {
              var r;
              let s,
                o =
                  null === (r = e.parent) || void 0 === r
                    ? void 0
                    : r.getChild('AttributeName'),
                a = [];
              if (o) {
                let r = t.sliceDoc(o.from, o.to),
                  l = jO[r];
                if (!l) {
                  let i = GO(e),
                    n = i ? qO[UO(t.doc, i)] : null;
                  l = (null == n ? void 0 : n.attrs) && n.attrs[r];
                }
                if (l) {
                  let e = t.sliceDoc(i, n).toLowerCase(),
                    r = '"',
                    o = '"';
                  /^['"]/.test(e)
                    ? ((s = '"' == e[0] ? /^[^"]*$/ : /^[^']*$/),
                      (r = ''),
                      (o = t.sliceDoc(n, n + 1) == e[0] ? '' : e[0]),
                      (e = e.slice(1)),
                      i++)
                    : (s = /^[^\s<>='"]*$/);
                  for (let t of l)
                    a.push({ label: t, apply: r + t + o, type: 'constant' });
                }
              }
              return { from: i, to: n, options: a, span: s };
            })(e, r, 'Is' == r.name ? i : r.from, i)
          : !t.explicit ||
            ('Element' != n.name && 'Text' != n.name && 'Document' != n.name)
          ? null
          : (function (t, e, i) {
              let n = [],
                r = 0;
              for (let i of IO(t.doc, e))
                n.push({ label: '<' + i, type: 'type' });
              for (let i of NO(t.doc, e))
                n.push({
                  label: '</' + i + '>',
                  type: 'type',
                  boost: 99 - r++,
                });
              return {
                from: i,
                to: i,
                options: n,
                span: /^<\/?[:\-\.\w\u00b7-\uffff]*$/,
              };
            })(e, r, i);
      },
    });
  function tp(t = {}) {
    let e = JO;
    return (
      !1 === t.matchClosingTags && (e = e.configure({ dialect: 'noMatch' })),
      new jo(e, [
        KO,
        !1 !== t.autoCloseTags ? ep : [],
        ZO().support,
        gO().support,
      ])
    );
  }
  const ep = Rr.inputHandler.of((t, e, i, n) => {
    if (
      t.composing ||
      t.state.readOnly ||
      e != i ||
      ('>' != n && '/' != n) ||
      !JO.isActiveAt(t.state, e, -1)
    )
      return !1;
    let { state: r } = t,
      s = r.changeByRange((t) => {
        var e, i, s;
        let o,
          { head: a } = t,
          l = Xo(r).resolveInner(a, -1);
        if (
          (('TagName' != l.name && 'StartTag' != l.name) || (l = l.parent),
          '>' == n && 'OpenTag' == l.name)
        ) {
          if (
            'CloseTag' !=
              (null ===
                (i =
                  null === (e = l.parent) || void 0 === e
                    ? void 0
                    : e.lastChild) || void 0 === i
                ? void 0
                : i.name) &&
            (o = UO(r.doc, l.parent, a))
          )
            return {
              range: Z.cursor(a + 1),
              changes: { from: a, insert: `></${o}>` },
            };
        } else if ('/' == n && 'OpenTag' == l.name) {
          let t = l.parent,
            e = null == t ? void 0 : t.parent;
          if (
            t.from == a - 1 &&
            'CloseTag' !=
              (null === (s = e.lastChild) || void 0 === s ? void 0 : s.name) &&
            (o = UO(r.doc, e, a))
          ) {
            let t = `/${o}>`;
            return {
              range: Z.cursor(a + t.length),
              changes: { from: a, insert: t },
            };
          }
        }
        return { range: t };
      });
    return (
      !s.changes.empty &&
      (t.dispatch(s, { userEvent: 'input.type', scrollIntoView: !0 }), !0)
    );
  });
  var ip = { exports: {} };
  !(function (t) {
    var e = (function () {
      var t = String.fromCharCode,
        e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
        i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
        n = {};
      function r(t, e) {
        if (!n[t]) {
          n[t] = {};
          for (var i = 0; i < t.length; i++) n[t][t.charAt(i)] = i;
        }
        return n[t][e];
      }
      var s = {
        compressToBase64: function (t) {
          if (null == t) return '';
          var i = s._compress(t, 6, function (t) {
            return e.charAt(t);
          });
          switch (i.length % 4) {
            default:
              return i;
            case 1:
              return i + '===';
            case 2:
              return i + '==';
            case 3:
              return i + '=';
          }
        },
        decompressFromBase64: function (t) {
          return null == t
            ? ''
            : '' == t
            ? null
            : s._decompress(t.length, 32, function (i) {
                return r(e, t.charAt(i));
              });
        },
        compressToUTF16: function (e) {
          return null == e
            ? ''
            : s._compress(e, 15, function (e) {
                return t(e + 32);
              }) + ' ';
        },
        decompressFromUTF16: function (t) {
          return null == t
            ? ''
            : '' == t
            ? null
            : s._decompress(t.length, 16384, function (e) {
                return t.charCodeAt(e) - 32;
              });
        },
        compressToUint8Array: function (t) {
          for (
            var e = s.compress(t),
              i = new Uint8Array(2 * e.length),
              n = 0,
              r = e.length;
            n < r;
            n++
          ) {
            var o = e.charCodeAt(n);
            (i[2 * n] = o >>> 8), (i[2 * n + 1] = o % 256);
          }
          return i;
        },
        decompressFromUint8Array: function (e) {
          if (null == e) return s.decompress(e);
          for (var i = new Array(e.length / 2), n = 0, r = i.length; n < r; n++)
            i[n] = 256 * e[2 * n] + e[2 * n + 1];
          var o = [];
          return (
            i.forEach(function (e) {
              o.push(t(e));
            }),
            s.decompress(o.join(''))
          );
        },
        compressToEncodedURIComponent: function (t) {
          return null == t
            ? ''
            : s._compress(t, 6, function (t) {
                return i.charAt(t);
              });
        },
        decompressFromEncodedURIComponent: function (t) {
          return null == t
            ? ''
            : '' == t
            ? null
            : ((t = t.replace(/ /g, '+')),
              s._decompress(t.length, 32, function (e) {
                return r(i, t.charAt(e));
              }));
        },
        compress: function (e) {
          return s._compress(e, 16, function (e) {
            return t(e);
          });
        },
        _compress: function (t, e, i) {
          if (null == t) return '';
          var n,
            r,
            s,
            o = {},
            a = {},
            l = '',
            h = '',
            c = '',
            u = 2,
            d = 3,
            f = 2,
            O = [],
            p = 0,
            m = 0;
          for (s = 0; s < t.length; s += 1)
            if (
              ((l = t.charAt(s)),
              Object.prototype.hasOwnProperty.call(o, l) ||
                ((o[l] = d++), (a[l] = !0)),
              (h = c + l),
              Object.prototype.hasOwnProperty.call(o, h))
            )
              c = h;
            else {
              if (Object.prototype.hasOwnProperty.call(a, c)) {
                if (c.charCodeAt(0) < 256) {
                  for (n = 0; n < f; n++)
                    (p <<= 1),
                      m == e - 1 ? ((m = 0), O.push(i(p)), (p = 0)) : m++;
                  for (r = c.charCodeAt(0), n = 0; n < 8; n++)
                    (p = (p << 1) | (1 & r)),
                      m == e - 1 ? ((m = 0), O.push(i(p)), (p = 0)) : m++,
                      (r >>= 1);
                } else {
                  for (r = 1, n = 0; n < f; n++)
                    (p = (p << 1) | r),
                      m == e - 1 ? ((m = 0), O.push(i(p)), (p = 0)) : m++,
                      (r = 0);
                  for (r = c.charCodeAt(0), n = 0; n < 16; n++)
                    (p = (p << 1) | (1 & r)),
                      m == e - 1 ? ((m = 0), O.push(i(p)), (p = 0)) : m++,
                      (r >>= 1);
                }
                0 == --u && ((u = Math.pow(2, f)), f++), delete a[c];
              } else
                for (r = o[c], n = 0; n < f; n++)
                  (p = (p << 1) | (1 & r)),
                    m == e - 1 ? ((m = 0), O.push(i(p)), (p = 0)) : m++,
                    (r >>= 1);
              0 == --u && ((u = Math.pow(2, f)), f++),
                (o[h] = d++),
                (c = String(l));
            }
          if ('' !== c) {
            if (Object.prototype.hasOwnProperty.call(a, c)) {
              if (c.charCodeAt(0) < 256) {
                for (n = 0; n < f; n++)
                  (p <<= 1),
                    m == e - 1 ? ((m = 0), O.push(i(p)), (p = 0)) : m++;
                for (r = c.charCodeAt(0), n = 0; n < 8; n++)
                  (p = (p << 1) | (1 & r)),
                    m == e - 1 ? ((m = 0), O.push(i(p)), (p = 0)) : m++,
                    (r >>= 1);
              } else {
                for (r = 1, n = 0; n < f; n++)
                  (p = (p << 1) | r),
                    m == e - 1 ? ((m = 0), O.push(i(p)), (p = 0)) : m++,
                    (r = 0);
                for (r = c.charCodeAt(0), n = 0; n < 16; n++)
                  (p = (p << 1) | (1 & r)),
                    m == e - 1 ? ((m = 0), O.push(i(p)), (p = 0)) : m++,
                    (r >>= 1);
              }
              0 == --u && ((u = Math.pow(2, f)), f++), delete a[c];
            } else
              for (r = o[c], n = 0; n < f; n++)
                (p = (p << 1) | (1 & r)),
                  m == e - 1 ? ((m = 0), O.push(i(p)), (p = 0)) : m++,
                  (r >>= 1);
            0 == --u && ((u = Math.pow(2, f)), f++);
          }
          for (r = 2, n = 0; n < f; n++)
            (p = (p << 1) | (1 & r)),
              m == e - 1 ? ((m = 0), O.push(i(p)), (p = 0)) : m++,
              (r >>= 1);
          for (;;) {
            if (((p <<= 1), m == e - 1)) {
              O.push(i(p));
              break;
            }
            m++;
          }
          return O.join('');
        },
        decompress: function (t) {
          return null == t
            ? ''
            : '' == t
            ? null
            : s._decompress(t.length, 32768, function (e) {
                return t.charCodeAt(e);
              });
        },
        _decompress: function (e, i, n) {
          var r,
            s,
            o,
            a,
            l,
            h,
            c,
            u = [],
            d = 4,
            f = 4,
            O = 3,
            p = '',
            m = [],
            g = { val: n(0), position: i, index: 1 };
          for (r = 0; r < 3; r += 1) u[r] = r;
          for (o = 0, l = Math.pow(2, 2), h = 1; h != l; )
            (a = g.val & g.position),
              (g.position >>= 1),
              0 == g.position && ((g.position = i), (g.val = n(g.index++))),
              (o |= (a > 0 ? 1 : 0) * h),
              (h <<= 1);
          switch (o) {
            case 0:
              for (o = 0, l = Math.pow(2, 8), h = 1; h != l; )
                (a = g.val & g.position),
                  (g.position >>= 1),
                  0 == g.position && ((g.position = i), (g.val = n(g.index++))),
                  (o |= (a > 0 ? 1 : 0) * h),
                  (h <<= 1);
              c = t(o);
              break;
            case 1:
              for (o = 0, l = Math.pow(2, 16), h = 1; h != l; )
                (a = g.val & g.position),
                  (g.position >>= 1),
                  0 == g.position && ((g.position = i), (g.val = n(g.index++))),
                  (o |= (a > 0 ? 1 : 0) * h),
                  (h <<= 1);
              c = t(o);
              break;
            case 2:
              return '';
          }
          for (u[3] = c, s = c, m.push(c); ; ) {
            if (g.index > e) return '';
            for (o = 0, l = Math.pow(2, O), h = 1; h != l; )
              (a = g.val & g.position),
                (g.position >>= 1),
                0 == g.position && ((g.position = i), (g.val = n(g.index++))),
                (o |= (a > 0 ? 1 : 0) * h),
                (h <<= 1);
            switch ((c = o)) {
              case 0:
                for (o = 0, l = Math.pow(2, 8), h = 1; h != l; )
                  (a = g.val & g.position),
                    (g.position >>= 1),
                    0 == g.position &&
                      ((g.position = i), (g.val = n(g.index++))),
                    (o |= (a > 0 ? 1 : 0) * h),
                    (h <<= 1);
                (u[f++] = t(o)), (c = f - 1), d--;
                break;
              case 1:
                for (o = 0, l = Math.pow(2, 16), h = 1; h != l; )
                  (a = g.val & g.position),
                    (g.position >>= 1),
                    0 == g.position &&
                      ((g.position = i), (g.val = n(g.index++))),
                    (o |= (a > 0 ? 1 : 0) * h),
                    (h <<= 1);
                (u[f++] = t(o)), (c = f - 1), d--;
                break;
              case 2:
                return m.join('');
            }
            if ((0 == d && ((d = Math.pow(2, O)), O++), u[c])) p = u[c];
            else {
              if (c !== f) return null;
              p = s + s.charAt(0);
            }
            m.push(p),
              (u[f++] = s + p.charAt(0)),
              (s = p),
              0 == --d && ((d = Math.pow(2, O)), O++);
          }
        },
      };
      return s;
    })();
    null != t && (t.exports = e);
  })(ip);
  const np = (t, e = 300) => {
      const i = { timer: 0, immediate: !1 };
      return function (n = !1) {
        (i.immediate = n),
          i.timer && window.clearTimeout(i.timer),
          (i.timer = window.setTimeout(
            () => {
              t.apply(this, arguments),
                clearTimeout(i.timer),
                (i.timer = 0),
                (i.immediate = !1);
            },
            i.immediate ? 0 : e
          ));
      };
    },
    rp = (t = window.location.search) => {
      const e = {},
        i = t.split('?')[1];
      return i
        ? (i.split('&').forEach((t) => {
            const i = t.indexOf('=');
            e[t.slice(0, i)] = t.slice(i + 1);
          }),
          e)
        : e;
    },
    sp = (t, e) =>
      e
        ? {
            style: `<style>${t || ''}</style>`,
            script: `<script>${t || ''}<\/script>`,
          }[e]
        : t,
    op = (t) => encodeURIComponent(ip.exports.compressToEncodedURIComponent(t)),
    ap = (t) =>
      ip.exports.decompressFromEncodedURIComponent(decodeURIComponent(t)) || '';
  var lp = navigator.userAgent,
    hp = 'Win32' === navigator.platform || 'Windows' === navigator.platform,
    cp =
      'Mac68K' === navigator.platform ||
      'MacPPC' === navigator.platform ||
      'Macintosh' === navigator.platform ||
      'MacIntel' === navigator.platform,
    up = 'X11' === navigator.platform && !hp && !cp,
    dp = String(navigator.platform).indexOf('Linux') > -1,
    fp = lp.indexOf('Windows NT 5.0') > -1 || lp.indexOf('Windows 2000') > -1,
    Op = lp.indexOf('Windows NT 5.1') > -1 || lp.indexOf('Windows XP') > -1,
    pp = lp.indexOf('Windows NT 5.2') > -1 || lp.indexOf('Windows 2003') > -1,
    mp = lp.indexOf('Windows NT 6.0') > -1 || lp.indexOf('Windows Vista') > -1,
    gp = lp.indexOf('Windows NT 6.1') > -1 || lp.indexOf('Windows 7') > -1,
    Qp = lp.indexOf('Windows NT 8') > -1 || lp.indexOf('Windows 8') > -1,
    bp = lp.indexOf('Windows NT 10') > -1 || lp.indexOf('Windows 10') > -1,
    vp = [],
    yp = [];
  function wp(t, e) {
    if (t && 'undefined' != typeof document) {
      var i,
        n = !0 === e.prepend ? 'prepend' : 'append',
        r = !0 === e.singleTag,
        s =
          'string' == typeof e.container
            ? document.querySelector(e.container)
            : document.getElementsByTagName('head')[0];
      if (r) {
        var o = vp.indexOf(s);
        -1 === o && ((o = vp.push(s) - 1), (yp[o] = {})),
          (i = yp[o] && yp[o][n] ? yp[o][n] : (yp[o][n] = a()));
      } else i = a();
      65279 === t.charCodeAt(0) && (t = t.substring(1)),
        i.styleSheet
          ? (i.styleSheet.cssText += t)
          : i.appendChild(document.createTextNode(t));
    }
    function a() {
      var t = document.createElement('style');
      if ((t.setAttribute('type', 'text/css'), e.attributes))
        for (var i = Object.keys(e.attributes), r = 0; r < i.length; r++)
          t.setAttribute(i[r], e.attributes[i[r]]);
      var o = 'prepend' === n ? 'afterbegin' : 'beforeend';
      return s.insertAdjacentElement(o, t), t;
    }
  }
  wp(
    "/**\n * 基础样式\n */\n.right-menu-list {\n  width: auto;\n  z-index: 9999999;\n  position: fixed;\n  display: block;\n  box-sizing: border-box;\n  user-select: none;\n}\n.right-menu-list li {\n  display: block;\n  list-style: none;\n  cursor: default;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  position: relative;\n}\n.right-menu-list li.skeleton::before {\n  content: '.';\n  display: inline-block;\n  width: 100%;\n  border-radius: 3px;\n  background-image: linear-gradient(-45deg, #ccc 40%, #fff 55%, #ccc 63%);\n  background-size: 400% auto;\n  background-repeat: no-repeat;\n  position: relative;\n  color: transparent;\n  animation: skeleton-animation 2s ease infinite;\n}\n.right-menu-list li.skeleton:hover {\n  color: transparent;\n  background-color: transparent;\n}\n.right-menu-list li.menu-hr {\n  height: 0;\n  border-bottom: 1px solid #ccc;\n}\n.right-menu-list li.menu-hr:hover {\n  background-color: transparent !important;\n}\n.right-menu-list li.menu-ul::after {\n  content: '▸';\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  right: 0px;\n}\n@keyframes skeleton-animation {\n  0% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0 50%;\n  }\n}\n",
    {}
  ),
    wp(
      '/**\n * mac主题色\n */\n.theme-mac {\n  min-width: 180px;\n  max-width: 300px;\n  color: var(--font-color);\n  font-size: 13px;\n  margin: 0;\n  padding: 5px 4px;\n  border: 0.5px solid var(--border-color);\n  border-radius: 5px;\n  background-color: var(--bg-color);\n  box-shadow: 0 2px 12px 0 var(--shadow-color);\n}\n.theme-mac li {\n  padding: 2.5px 26px 2.5px 8px;\n  border-radius: 3px;\n}\n.theme-mac li:hover {\n  color: var(--active-font-color);\n  background-color: var(--active-bg-color);\n}\n.theme-mac li.skeleton {\n  padding: 2.5px 8px;\n}\n.theme-mac li.skeleton::before {\n  background-image: linear-gradient(-45deg, var(--menu-skeleton-color) 40%, var(--menu-skeleton-acitve-color) 55%, var(--menu-skeleton-color) 63%);\n}\n.theme-mac li.menu-hr {\n  border-bottom: 1px solid var(--split-boder-color);\n  padding: 0;\n  margin: 5px 8px;\n}\n.theme-mac li.menu-disabled {\n  color: var(--disabled-font-color);\n}\n.theme-mac li.menu-disabled:hover {\n  color: var(--active-disabled-font-color);\n  background-color: var(--active-disabled-bg-color);\n}\n.theme-light {\n  --shadow-color: rgba(0, 0, 0, 0.2);\n  --active-shadow-color: rgba(0, 0, 0, 0.2);\n  --border-color: #cdcdcd;\n  --active-border-color: #cdcdcd;\n  --font-color: #222;\n  --active-font-color: #fff;\n  --bg-color: #eae8e9;\n  --active-bg-color: #68a1f9;\n  --disabled-font-color: #a8a8a8;\n  --active-disabled-font-color: #a8a8a8;\n  --disabled-bg-color: #eae8e9;\n  --active-disabled-bg-color: #eae8e9;\n  --split-boder-color: #d0cecf;\n  --menu-skeleton-color: #f5f5f5;\n  --menu-skeleton-acitve-color: #fff;\n}\n.theme-dark {\n  --shadow-color: #040405;\n  --active-shadow-color: #040405;\n  --border-color: #525253;\n  --active-border-color: #525253;\n  --font-color: #eaeaea;\n  --active-font-color: #fff;\n  --bg-color: #262628;\n  --active-bg-color: #68a1f9;\n  --disabled-font-color: #656668;\n  --active-disabled-font-color: #656668;\n  --disabled-bg-color: #262628;\n  --active-disabled-bg-color: #262628;\n  --split-boder-color: #494a4c;\n  --menu-skeleton-color: #4c4c4f;\n  --menu-skeleton-acitve-color: #444;\n}\n',
      {}
    ),
    wp(
      '/**\n * win10主题色\n */\n.theme-win10 {\n  min-width: 260px;\n  max-width: 500px;\n  color: #202124;\n  font-size: 14px;\n  margin: 0;\n  padding: 5px 0px;\n  border: 0.5px solid #dadce0;\n  border-radius: 0px;\n  background-color: #fff;\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  letter-spacing: 0.5px;\n}\n.theme-win10 li {\n  padding: 7px 40px;\n  border-radius: 0px;\n}\n.theme-win10 li:hover {\n  color: #202124;\n  background-color: #e8e8e9;\n}\n.theme-win10 li.menu-hr {\n  border-bottom: 1px solid #dadce0;\n  padding: 0;\n  margin: 5px 0px;\n}\n.theme-win10 li.menu-disabled {\n  color: #ccc;\n}\n.theme-win10 li.menu-disabled:hover {\n  color: #ccc;\n  background-color: #fff;\n}\n.theme-win10 li.menu-ul::after {\n  color: #626365;\n  font-size: 20px;\n  position: absolute;\n  right: 17px;\n}\n',
      {}
    );
  var xp = (function () {
      var t = {
        isWin10: bp,
        isMac: cp,
        isWin7: gp,
        isWin8: Qp,
        isWin2003: pp,
        isWin2000: fp,
        isWinXP: Op,
        isWinVista: mp,
        isWin: hp,
        isUnix: up,
        isLinux: dp,
      };
      for (var e in t) if (t[e]) return e;
      return 'isMac';
    })(),
    kp = ['class', 'style'],
    Sp = { class: ' ', style: ';' },
    $p = function (t) {
      var e, i;
      return (
        (null === (i = (e = t).getBoundingClientRect) || void 0 === i
          ? void 0
          : i.call(e)) || t
      );
    },
    Tp = function (t) {
      window.event ? (window.event.cancelBubble = !0) : t.stopPropagation(),
        t.preventDefault ? t.preventDefault() : (window.event.returnValue = !1);
    },
    Pp = function (t, e) {
      var i = {};
      return (
        kp.forEach(function (n) {
          t[n] && (i[n] = t[n]),
            e[n] && (i[n] ? (i[n] += Sp[n] + e[n]) : (i[n] = e[n]));
        }),
        i
      );
    },
    Rp = function (t, e, i) {
      void 0 === i && (i = 1);
      var n,
        r = $p(e),
        s = r.width,
        o = r.height,
        a = $p(t),
        l = a.x,
        h = a.y,
        c = a.width,
        u = void 0 === c ? 0 : c,
        d = a.height,
        f = void 0 === d ? 0 : d,
        O = i;
      switch (
        ('parentElement' in t &&
          t.parentElement &&
          (O = e.direction = t.parentElement.direction || O),
        O)
      ) {
        case -1:
          n = (function () {
            var t = l - s;
            return t < 0 && ((t = l + u), (e.direction = 1)), t;
          })();
          break;
        case 1:
          n = (function () {
            var t = l + u;
            return (
              e.offsetWidth + t > window.innerWidth &&
                ((t = l - s), (e.direction = -1)),
              t
            );
          })();
          break;
        default:
          throw new Error('Unsupported direction: ' + i);
      }
      var p = (function () {
        var t = h;
        return e.offsetHeight + t > window.innerHeight && (t = h + f - o), t;
      })();
      !(function (t, e, i) {
        (t.style.left = e + 'px'), (t.style.top = i + 'px');
      })(e, n, p);
    },
    Wp = function (t) {
      return 'string' == typeof t ? t : t + 'px';
    },
    Cp = window.matchMedia('(prefers-color-scheme: dark)'),
    Ap = function (t) {
      switch (t) {
        case 'light':
          return 'theme-light';
        case 'dark':
          return 'theme-dark';
        default:
          return Cp.matches ? 'theme-dark' : 'theme-light';
      }
    },
    Xp = (function () {
      function t(t, e) {
        var i = this;
        (this.version = '0.0.8'),
          (this.menu = null),
          (this.eventList = []),
          (this.menuStyle = { 'min-width': '', 'max-width': '' });
        var n = (this.config = 'string' == typeof t ? { el: t } : t);
        (n.theme = n.theme || xp.toLowerCase().replace(/is/, '') || 'mac'),
          0 === n.theme.indexOf('theme-') && (n.theme = n.theme.slice(6)),
          n.minWidth && (this.menuStyle['min-width'] = Wp(n.minWidth)),
          n.maxWidth && (this.menuStyle['max-width'] = Wp(n.maxWidth));
        var r = 'string' == typeof n.el ? document.querySelector(n.el) : n.el;
        null == r ||
          r.addEventListener(n.mode || 'contextmenu', function (t) {
            var r = 'function' == typeof e ? e(t, n) : e;
            i.init(t, r);
          });
      }
      return (
        (t.prototype.init = function (t, e) {
          var i, n;
          /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */ return (function (
            t,
            e,
            i,
            n
          ) {
            return new (i || (i = Promise))(function (r, s) {
              function o(t) {
                try {
                  l(n.next(t));
                } catch (t) {
                  s(t);
                }
              }
              function a(t) {
                try {
                  l(n.throw(t));
                } catch (t) {
                  s(t);
                }
              }
              function l(t) {
                var e;
                t.done
                  ? r(t.value)
                  : ((e = t.value),
                    e instanceof i
                      ? e
                      : new i(function (t) {
                          t(e);
                        })).then(o, a);
              }
              l((n = n.apply(t, e || [])).next());
            });
          })(this, void 0, void 0, function () {
            var r, s, o;
            return (function (t, e) {
              var i,
                n,
                r,
                s,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (s = { next: a(0), throw: a(1), return: a(2) }),
                'function' == typeof Symbol &&
                  (s[Symbol.iterator] = function () {
                    return this;
                  }),
                s
              );
              function a(s) {
                return function (a) {
                  return (function (s) {
                    if (i)
                      throw new TypeError('Generator is already executing.');
                    for (; o; )
                      try {
                        if (
                          ((i = 1),
                          n &&
                            (r =
                              2 & s[0]
                                ? n.return
                                : s[0]
                                ? n.throw || ((r = n.return) && r.call(n), 0)
                                : n.next) &&
                            !(r = r.call(n, s[1])).done)
                        )
                          return r;
                        switch (
                          ((n = 0), r && (s = [2 & s[0], r.value]), s[0])
                        ) {
                          case 0:
                          case 1:
                            r = s;
                            break;
                          case 4:
                            return o.label++, { value: s[1], done: !1 };
                          case 5:
                            o.label++, (n = s[1]), (s = [0]);
                            continue;
                          case 7:
                            (s = o.ops.pop()), o.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (r =
                                  (r = o.trys).length > 0 && r[r.length - 1]) ||
                                (6 !== s[0] && 2 !== s[0])
                              )
                            ) {
                              o = 0;
                              continue;
                            }
                            if (
                              3 === s[0] &&
                              (!r || (s[1] > r[0] && s[1] < r[3]))
                            ) {
                              o.label = s[1];
                              break;
                            }
                            if (6 === s[0] && o.label < r[1]) {
                              (o.label = r[1]), (r = s);
                              break;
                            }
                            if (r && o.label < r[2]) {
                              (o.label = r[2]), o.ops.push(s);
                              break;
                            }
                            r[2] && o.ops.pop(), o.trys.pop();
                            continue;
                        }
                        s = e.call(t, o);
                      } catch (t) {
                        (s = [6, t]), (n = 0);
                      } finally {
                        i = r = 0;
                      }
                    if (5 & s[0]) throw s[1];
                    return { value: s[0] ? s[1] : void 0, done: !0 };
                  })([s, a]);
                };
              }
            })(this, function (a) {
              switch (a.label) {
                case 0:
                  return (
                    null === (i = this.config.beforeInit) ||
                      void 0 === i ||
                      i.call(this),
                    Tp(t),
                    this.destroyMenu(),
                    this.initSkeleton(t),
                    (r = !1),
                    (s = function () {
                      return (r = !0);
                    }),
                    document.addEventListener('mousedown', s),
                    [4, Promise.resolve(e)]
                  );
                case 1:
                  return (
                    (o = a.sent()),
                    document.removeEventListener('mousedown', s),
                    r ||
                      (this.destroyMenu(),
                      (this.menu = this.renderMenu(o)),
                      this.initMenu(t, this.menu),
                      null === (n = this.config.afterInit) ||
                        void 0 === n ||
                        n.call(this)),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.initMenu = function (t, e) {
          var i = this;
          document.body.appendChild(e),
            Rp(t, e, 1),
            e.addEventListener('contextmenu', Tp),
            this.addEvent(window, 'blur', this.destroyMenu.bind(this)),
            this.addEvent(window, 'resize', this.destroyMenu.bind(this)),
            this.addEvent(document, 'mousedown', function (t) {
              var n;
              (null === (n = t.path) || void 0 === n
                ? void 0
                : n.some(function (t) {
                    return t === e;
                  })) || i.destroyMenu();
            });
        }),
        (t.prototype.initSkeleton = function (t) {
          var e = this,
            i = new Array(3).fill(null).map(function () {
              return e.createDom('li', { class: 'skeleton' });
            }),
            n = this.createDom(
              'ul',
              {
                class:
                  'right-menu-list theme-' +
                  this.config.theme +
                  ' ' +
                  Ap(this.config.theme),
                style: this.menuStyle,
              },
              i
            );
          this.initMenu(t, n);
        }),
        (t.prototype.destroyMenu = function () {
          var t = document.querySelectorAll('.right-menu-list');
          t &&
            t.forEach(function (t) {
              var e;
              null === (e = t.parentNode) || void 0 === e || e.removeChild(t);
            }),
            this.removeEvent(),
            (this.menu = null);
        }),
        (t.prototype.addEvent = function (t, e, i) {
          t.addEventListener(e, i), this.eventList.push([t, e, i]);
        }),
        (t.prototype.removeEvent = function () {
          for (; this.eventList.length; ) {
            var t = this.eventList.shift(),
              e = t[0],
              i = t[1],
              n = t[2];
            e.removeEventListener(i, n);
          }
        }),
        (t.prototype.renderMenu = function (t) {
          var e = this,
            i = t.map(function (t) {
              switch (t.type) {
                case 'hr':
                  return e.createHr(t);
                case 'li':
                  return e.createLi(t);
                case 'ul':
                  return e.createUl(t);
                default:
                  throw new Error('未知的 type 类型 => ' + t.type);
              }
            });
          return this.createDom(
            'ul',
            {
              class:
                'right-menu-list theme-' +
                this.config.theme +
                ' ' +
                Ap(this.config.theme),
              style: this.menuStyle,
            },
            i
          );
        }),
        (t.prototype.createDom = function (t, e, i) {
          void 0 === t && (t = 'ul'),
            void 0 === e && (e = {}),
            void 0 === i && (i = []);
          var n = document.createElement(t);
          return (
            Object.keys(e).forEach(function (t) {
              var i = e[t];
              if (i) {
                var r = '';
                switch (t) {
                  case 'style':
                    r = (function (t) {
                      if ('string' == typeof t) return t;
                      var e = [];
                      return (
                        Object.keys(t).forEach(function (i) {
                          t[i] &&
                            e.push(
                              i.replace(/[A-Z]/g, function (t, e) {
                                return (e ? '-' : '') + t.toLowerCase();
                              }) +
                                ': ' +
                                t[i]
                            );
                        }),
                        e.join('; ')
                      );
                    })(i);
                    break;
                  case 'class':
                    r = i;
                }
                n.setAttribute(t, r);
              }
            }),
            i.forEach(function (t) {
              'string' == typeof t
                ? (n.innerHTML += t)
                : 1 === t.nodeType && n.appendChild(t);
            }),
            n
          );
        }),
        (t.prototype.createHr = function (t) {
          return this.createDom('li', Pp(t, { class: 'menu-hr' }));
        }),
        (t.prototype.createLi = function (t) {
          var e = this,
            i = this.createDom('span', {}, [String(t.text)]),
            n = {
              class: [
                t.disabled ? 'menu-disabled' : '',
                'ul' === t.type ? 'menu-ul' : '',
              ].join(' '),
            },
            r = this.createDom('li', Pp(t, n), [i]);
          return (
            !t.disabled &&
              'li' === t.type &&
              t.callback &&
              r.addEventListener('mousedown', function (i) {
                t.callback(i), e.destroyMenu();
              }),
            r
          );
        }),
        (t.prototype.createUl = function (t) {
          var e = this.createLi(t);
          if (t.children && t.children.length) {
            var i = this.renderMenu(t.children);
            e.addEventListener('mouseenter', function (t) {
              e.appendChild(i), Rp(e, i);
            }),
              e.addEventListener('mouseleave', function (t) {
                if (t.toElement) {
                  for (var n = t.toElement; n; ) {
                    if (n === i) return;
                    n = n.parentNode;
                  }
                  e.removeChild(i);
                }
              });
          }
          return e;
        }),
        t
      );
    })(),
    Zp = '0.3.18';
  const Mp = {
    reset:
      '<svg width="24" height="24" viewBox="0 1 24 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3623 15.529L8.94804 16.9432L3.99829 11.9934L8.94804 7.0437L10.3623 8.45791L7.86379 10.9564H16.0018C18.2109 10.9564 20.0018 12.7472 20.0018 14.9564V16.9564H18.0018V14.9564C18.0018 13.8518 17.1063 12.9564 16.0018 12.9564H7.78965L10.3623 15.529Z" fill="currentColor" /></svg>',
    reload:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1459 11.0499L12.9716 9.05752L15.3462 8.84977C14.4471 7.98322 13.2242 7.4503 11.8769 7.4503C9.11547 7.4503 6.87689 9.68888 6.87689 12.4503C6.87689 15.2117 9.11547 17.4503 11.8769 17.4503C13.6977 17.4503 15.2911 16.4771 16.1654 15.0224L18.1682 15.5231C17.0301 17.8487 14.6405 19.4503 11.8769 19.4503C8.0109 19.4503 4.87689 16.3163 4.87689 12.4503C4.87689 8.58431 8.0109 5.4503 11.8769 5.4503C13.8233 5.4503 15.5842 6.24474 16.853 7.52706L16.6078 4.72412L18.6002 4.5498L19.1231 10.527L13.1459 11.0499Z" fill="currentColor" /></svg>',
    'top-layout':
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 11H6V9H18V11Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M2 16C2 17.6569 3.34315 19 5 19H19C20.6569 19 22 17.6569 22 16V8C22 6.34315 20.6569 5 19 5H5C3.34315 5 2 6.34315 2 8V16ZM5 17H19C19.5523 17 20 16.5523 20 16V8C20 7.44772 19.5523 7 19 7H5C4.44772 7 4 7.44771 4 8V16C4 16.5523 4.44772 17 5 17Z" fill="currentColor" /></svg>',
    'left-layout':
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 9H6V15H8V9Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M2 8C2 6.34315 3.34315 5 5 5H19C20.6569 5 22 6.34315 22 8V16C22 17.6569 20.6569 19 19 19H5C3.34315 19 2 17.6569 2 16V8ZM5 7H19C19.5523 7 20 7.44771 20 8V16C20 16.5523 19.5523 17 19 17H5C4.44772 17 4 16.5523 4 16V8C4 7.44772 4.44772 7 5 7Z" fill="currentColor" /></svg>',
    'right-layout':
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 9H18V15H16V9Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M22 8C22 6.34315 20.6569 5 19 5H5C3.34315 5 2 6.34315 2 8V16C2 17.6569 3.34315 19 5 19H19C20.6569 19 22 17.6569 22 16V8ZM19 7H5C4.44772 7 4 7.44771 4 8V16C4 16.5523 4.44772 17 5 17H19C19.5523 17 20 16.5523 20 16V8C20 7.44772 19.5523 7 19 7Z" fill="currentColor" /></svg>',
    'bottom-layout':
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 13H6V15H18V13Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M2 8C2 6.34315 3.34315 5 5 5H19C20.6569 5 22 6.34315 22 8V16C22 17.6569 20.6569 19 19 19H5C3.34315 19 2 17.6569 2 16V8ZM5 7H19C19.5523 7 20 7.44771 20 8V16C20 16.5523 19.5523 17 19 17H5C4.44772 17 4 16.5523 4 16V8C4 7.44772 4.44772 7 5 7Z" fill="currentColor" /></svg>',
  };
  function _p() {
    const t = ['100%', '0%'].indexOf(this.defaultConfig.editorRange) > -1;
    return [
      { type: 'li', text: '重置', callback: () => this.reset() },
      { type: 'li', text: '另存为...', disabled: !0, callback: () => {} },
      { type: 'hr' },
      {
        type: 'ul',
        text: '外观',
        children: [
          {
            type: 'li',
            text: '放大',
            callback: () => {
              const t = ~~this.editorEl.style.fontSize.replace(/[a-z]/g, '');
              this.setStyle(this.editorEl, { 'font-size': `${t + 1}px` });
            },
          },
          {
            type: 'li',
            text: '缩小',
            callback: () => {
              const t = ~~this.editorEl.style.fontSize.replace(/[a-z]/g, '');
              this.setStyle(this.editorEl, { 'font-size': t - 1 + 'px' });
            },
          },
          {
            type: 'li',
            text: '重置缩放',
            callback: () =>
              this.setStyle(this.editorEl, { 'font-size': '14px' }),
          },
        ],
      },
      {
        type: 'ul',
        text: '布局',
        disabled: t,
        children: t
          ? []
          : [
              {
                type: 'li',
                text: '左右布局',
                callback: () => {
                  -1 === this.defaultConfig.direction.indexOf('row') &&
                    this.triggleDirection('row');
                },
              },
              {
                type: 'li',
                text: '上下布局',
                callback: () => {
                  -1 === this.defaultConfig.direction.indexOf('column') &&
                    this.triggleDirection('column');
                },
              },
              {
                type: 'li',
                text: '翻转布局',
                callback: () => {
                  const t = {
                    row: 'row-reverse',
                    'row-reverse': 'row',
                    column: 'column-reverse',
                    'column-reverse': 'column',
                  }[this.defaultConfig.direction];
                  this.triggleDirection(t);
                },
              },
            ],
      },
      {
        type: 'li',
        text: '切换主题',
        disabled: !0,
        callback: () => this.triggleTheme(),
      },
      { type: 'hr' },
      {
        type: 'ul',
        text: '调试工具',
        children: [
          {
            type: 'li',
            text: '打印 JSON 字符串',
            callback: () => console.log(this.getJSONString()),
          },
        ],
      },
      {
        type: 'ul',
        text: '关于 Mini Sandbox',
        children: [
          {
            type: 'li',
            text: 'version@0.3.18',
            disabled: !0,
            callback: () => {},
          },
          { type: 'hr' },
          {
            type: 'li',
            text: '官方文档',
            callback: () =>
              window.open('https://buuing.github.io/mini-sandbox'),
          },
          {
            type: 'li',
            text: 'Github 仓库',
            callback: () =>
              window.open('https://github.com/buuing/mini-sandbox'),
          },
          {
            type: 'li',
            text: 'Bug 反馈',
            callback: () =>
              window.open('https://github.com/buuing/mini-sandbox/issues'),
          },
          { type: 'hr' },
          {
            type: 'li',
            text: '📋 开源协议 MIT License',
            callback: () =>
              window.open(
                'https://github.com/buuing/mini-sandbox/blob/master/LICENSE'
              ),
          },
        ],
      },
    ];
  }
  const Lp = function (e, i) {
      return t(this, void 0, void 0, function* () {
        const { publicConfig: t } = this,
          n = [...t.head, ...i.head].map(([t, e, i]) => {
            let n = '';
            for (const t in e) n += ` ${t}="${e[t]}"`;
            return `<${t}${n}>${i}</${t}>`;
          });
        return `\n    <head>\n      <meta charset="UTF-8" />\n      <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n      <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n      <title>Mini Sandbox</title>\n      ${n}\n    </head>\n    <body>\n      ${e}\n    </body>\n  `;
      });
    },
    Dp = /\:\/\/.*/;
  function Ep(e) {
    return t(this, void 0, void 0, function* () {
      const { publicConfig: t } = this;
      return [
        ...(yield Promise.all(
          (t.cssLibs || []).map((t) => this.getResource(t))
        )),
        ...(yield Promise.all(
          (e.cssLibs || []).map((t) => this.getResource(t))
        )),
        t.css,
        e.css || '',
      ]
        .filter((t) => !!t)
        .map((t) => sp(t, 'style'));
    });
  }
  function zp(e) {
    var i;
    return t(this, void 0, void 0, function* () {
      const { publicConfig: t } = this,
        n =
          (null === (i = e.jsLibs) || void 0 === i
            ? void 0
            : i.filter((t) => Dp.test(t))) || [];
      return [
        ...(yield Promise.all(
          (t.jsLibs || []).map((t) => this.getResource(t))
        )),
        ...(yield Promise.all(n.map((t) => this.getResource(t)))),
      ]
        .filter((t) => !!t)
        .map((t) => sp(t, 'script'));
    });
  }
  function qp(e) {
    var i;
    return t(this, void 0, void 0, function* () {
      const t =
        (null === (i = e.jsLibs) || void 0 === i
          ? void 0
          : i.find((t) => !Dp.test(t))) || '';
      return t && (yield this.getResource(t));
    });
  }
  function jp(t) {
    return t.importMap || this.publicConfig.importMap || {};
  }
  const Vp = function (e, i) {
    return t(this, void 0, void 0, function* () {
      const t = yield Ep.call(this, i),
        n = yield zp.call(this, i),
        r = yield qp.call(this, i),
        s = {};
      this.fileList
        .filter((t) => 'esm' === t.module)
        .forEach((t) => {
          s[t.filename] = t.value;
        });
      const o = jp.call(this, i);
      return (
        (e = e.replace(/<script.*(type\=["module"|'module']).*>/, (t) =>
          t.replace(/type=["module"|'module']/, () => 'type="module-shim"')
        )),
        (e = `\n    ${t.join('\n')}\n    ${n.join('\n')}\n    <script>${((
          t = {}
        ) =>
          `\n    var __originPath__ = window.location.origin + window.location.pathname\n    var __publicPath__ = __originPath__.slice(0, __originPath__.lastIndexOf('/') + 1)\n    var __esModules__ = ${JSON.stringify(
            t
          )}\n    var __files__ = {}\n    for (const name in __esModules__) {\n      __files__[__publicPath__ + name] = __esModules__[name]\n    }\n    __esModules__ = null\n    window.esmsInitOptions = {\n      shimMode: true,\n      // polyfillEnable: ['css-modules', 'json-modules'],\n      fetch: async (url, options) => {\n        const content = __files__[url]\n        if (content) {\n          return new Response(new Blob([content], { type: 'application/javascript' }))\n        }\n        if (!parent.ldqResource) parent.ldqResource = {}\n        if (!parent.ldqResource[url]) {\n          parent.ldqResource[url] = new Promise(async (resolve, reject) => {\n            try {\n              const res = await fetch(url, options)\n              const source = await res.text()\n              resolve(source)\n            } catch (err) {\n              reject(err)\n            }\n          })\n        }\n        return new Promise((resolve, reject) => {\n          parent.ldqResource[url].then(source => {\n            const res = new Response(new Blob([source], { type: 'application/javascript' }))\n            resolve(res)\n          }).catch(err => {\n            reject(err)\n          })\n        })\n      },\n      disableCache: (url, options, source) => {\n        if (__files__[url]) return true\n      }\n    }\n  `)(
          s
        )}<\/script>\n    <script async>${yield this.getResource(
          'https://unpkg.com/mini-sandbox@0.3.17/es-module-shims.js'
        )}<\/script>\n    ${
          i.importMap
            ? '<script type="importmap-shim">' + JSON.stringify(o) + '</script>'
            : ''
        }\n    ${e}\n    <script>\n      !(function () { ${
          this.publicConfig.js
        } })();\n      !(function () { ${i.js} })();\n    <\/script>\n    ${
          r ? '<script type="module-shim">' + r + '</script>' : ''
        }\n  `),
        yield Lp.call(this, e, i)
      );
    });
  };
  var Yp = [],
    Up = [];
  function Gp(t, e) {
    if (t && 'undefined' != typeof document) {
      var i,
        n = !0 === e.prepend ? 'prepend' : 'append',
        r = !0 === e.singleTag,
        s =
          'string' == typeof e.container
            ? document.querySelector(e.container)
            : document.getElementsByTagName('head')[0];
      if (r) {
        var o = Yp.indexOf(s);
        -1 === o && ((o = Yp.push(s) - 1), (Up[o] = {})),
          (i = Up[o] && Up[o][n] ? Up[o][n] : (Up[o][n] = a()));
      } else i = a();
      65279 === t.charCodeAt(0) && (t = t.substring(1)),
        i.styleSheet
          ? (i.styleSheet.cssText += t)
          : i.appendChild(document.createTextNode(t));
    }
    function a() {
      var t = document.createElement('style');
      if ((t.setAttribute('type', 'text/css'), e.attributes))
        for (var i = Object.keys(e.attributes), r = 0; r < i.length; r++)
          t.setAttribute(i[r], e.attributes[i[r]]);
      var o = 'prepend' === n ? 'afterbegin' : 'beforeend';
      return s.insertAdjacentElement(o, t), t;
    }
  }
  Gp(
    '.sandbox-theme-light {\n  --bgColor: #f1f4ff;\n  --fontColor: #9baacf;\n}\n.sandbox-theme-dark {\n  --bgColor: #000;\n}\n',
    {}
  );
  Gp(
    ".mini-sandbox {\n  --white: #eee;\n  --greyLight-1: #E4EBF5;\n  --greyLight-2: #c8d0e7;\n  --greyLight-3: #bec8e4;\n  --greyDark: #9baacf;\n  background-color: #fff;\n  overflow: hidden;\n  box-shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2), -0.2rem -0.2rem 0.5rem var(--white);\n}\n.mini-sandbox .sandbox-head {\n  display: flex;\n  align-items: center;\n  height: 36px;\n  font-size: 14px;\n  background: var(--bgColor);\n  user-select: none;\n  overflow: hidden;\n  padding: 0 8px;\n}\n.mini-sandbox .sandbox-head .sandbox-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 3px 4px;\n  margin: 0 4px;\n  cursor: pointer;\n  border-radius: 5px;\n}\n.mini-sandbox .sandbox-head .sandbox-icon > svg {\n  color: #9baacf;\n  width: 20px;\n  height: 20px;\n}\n.mini-sandbox .sandbox-head .sandbox-icon.icon-active:hover {\n  box-shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2), -0.2rem -0.2rem 0.5rem var(--white);\n}\n.mini-sandbox .sandbox-head .sandbox-icon.icon-active:active {\n  box-shadow: inset 0.2rem 0.2rem 0.5rem var(--greyLight-2), inset -0.2rem -0.2rem 0.5rem var(--white);\n}\n.mini-sandbox .sandbox-head .sandbox-setting {\n  margin-left: -3px;\n  line-height: 36px;\n  text-align: center;\n  font-size: 20px;\n  color: var(--fontColor);\n  cursor: pointer;\n  font-weight: 300;\n}\n.mini-sandbox .sandbox-head .sandbox-tab {\n  height: 100%;\n  flex: 1;\n  padding: 0 20px 0 0px;\n  display: flex;\n  align-items: flex-end;\n}\n.mini-sandbox .sandbox-head .sandbox-tab .sandbox-tab-item {\n  height: 82%;\n  display: flex;\n  align-items: center;\n  padding: 0px 15px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.mini-sandbox .sandbox-head .sandbox-tab .sandbox-tab-item .sandbox-icon {\n  float: right;\n  width: 12px;\n  height: 12px;\n  margin-right: -8px;\n}\n.mini-sandbox .sandbox-head .sandbox-tab .sandbox-tab-active {\n color:black;\n  position: relative;\n  background: #FFFFFF;\n  border-radius: 6px 6px 0 0;\n  box-shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2), -0.2rem -0.2rem 0.5rem var(--white);\n}\n.mini-sandbox .sandbox-head .sandbox-tab .sandbox-tab-active::before {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  left: -6px;\n  bottom: 0;\n  background: url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 100c55.228 0 100-44.772 100-100v100H0z' fill='%23FFFFFF'/%3E%3C/svg%3E\");\n  background-size: 6px 6px;\n}\n.mini-sandbox .sandbox-head .sandbox-tab .sandbox-tab-active::after {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  right: -6px;\n  bottom: 0;\n  background: url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M100 100C44.772 100 0 55.228 0 0v100h100z' fill='%23FFFFFF'/%3E%3C/svg%3E\");\n  background-size: 6px 6px;\n}\n.mini-sandbox .sandbox-body {\n  display: flex;\n  height: calc(100% - 36px);\n}\n.mini-sandbox iframe,\n.mini-sandbox .cm-editor {\n  width: 100%;\n  height: 100%;\n  outline: none !important;\n  overflow: auto;\n}\n.mini-sandbox .sandbox-code {\n  width: 50%;\n  max-width: 100vw;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n}\n.mini-sandbox .sandbox-gutter {\n  width: 5px;\n  border-left: 1px solid var(--bgColor);\n  border-right: 1px solid var(--bgColor);\n  background-color: #f7f8fa;\n  cursor: col-resize;\n  box-sizing: border-box;\n}\n.mini-sandbox .sandbox-gutter:active,\n.mini-sandbox .sandbox-gutter:hover {\n  background-color: var(--bgColor);\n}\n.mini-sandbox .sandbox-gutter.no-dragging {\n  cursor: auto;\n}\n.mini-sandbox .sandbox-gutter.no-dragging:active,\n.mini-sandbox .sandbox-gutter.no-dragging:hover {\n  background-color: #f7f8fa;\n}\n.mini-sandbox .sandbox-render {\n  overflow: hidden;\n  height: 100%;\n  flex: 1;\n  position: relative;\n  box-sizing: border-box;\n}\n.mini-sandbox .sandbox-render > iframe {\n  margin: 0;\n  border: 0 none;\n}\n.mini-sandbox .sandbox-render .sandbox-loading {\n  position: absolute;\n  left: 0;\n  top: 36px;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.9);\n  display: none;\n}\n.mini-sandbox .sandbox-render .sandbox-loading::before {\n  content: 'loading...';\n  display: block;\n  margin: auto;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 20px;\n  height: 20px;\n  color: var(--fontColor);\n}\n.mini-sandbox .sandbox-mask {\n  cursor: col-resize;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: none;\n  background-color: rgba(0, 0, 0, 0);\n}\n.mini-sandbox .cm-gutters {\n  background-color: var(--bgColor);\n  border: 0 none;\n}\n",
    {}
  );
  const Ip = new K();
  class Np {
    constructor(t = {}) {
      var e, i, n;
      (this.version = Zp),
        (this.files = {}),
        (this.fileIndex = 0),
        (this.loading = !1),
        (this.isClick = !1),
        (this.ldqResource = []),
        this.initOptions(t),
        (e = this),
        (i = 'currFile'),
        (n = () => this.fileList[this.fileIndex]),
        Object.defineProperty(e, i, {
          set: () => {
            throw new Error('Assignment to constant variable.');
          },
          get: n,
        }),
        (this.run = np(this.render, this.defaultConfig.autoRunInterval).bind(
          this
        )),
        this.init().then(() => {
          var t, e;
          null === (e = (t = this.events).onLoad) || void 0 === e || e.call(t);
        });
    }
    initOptions(t) {
      const e = rp();
      if (
        ((this.loaders = Object.assign({ '.html': [Vp] }, t.loaders)),
        (this.templateTypeSet = new Set(
          Object.keys(this.loaders).concat('.html')
        )),
        (this.fileIndex = 0),
        (this.fileList = Object.keys(t.files || {}).map((i) => {
          const n = t.files[i],
            r = ap(e[n.urlField || '']),
            s = Object.assign(
              Object.assign(
                {
                  defaultValue: '',
                  cssLibs: [],
                  jsLibs: [],
                  css: '',
                  js: '',
                  head: [],
                  body: [],
                  urlField: '',
                  title: '',
                  module: '',
                  template: !0,
                  hidden: !1,
                },
                n
              ),
              {
                filename: i.lastIndexOf('.') > -1 ? i : i + '.html',
                value: r || n.defaultValue || '',
                type: '',
              }
            );
          return (
            (s.type = s.filename.slice(s.filename.lastIndexOf('.'))),
            !this.currTemplate &&
              this.templateTypeSet.has(s.type) &&
              (this.currTemplate = s),
            (this.files[i] = s),
            s
          );
        })),
        (this.publicConfig = Object.assign(
          { cssLibs: [], jsLibs: [], css: '', js: '', head: [], body: [] },
          t.publicConfig
        )),
        (this.defaultConfig = Object.assign(
          {
            theme: 'light',
            autoRun: !0,
            autoRunInterval: 300,
            height: '300px',
            editorRange: '50%',
            renderRange: 'auto',
            draggable: !0,
            direction: 'row',
            toolbar: ['reset', 'reload'],
          },
          t.defaultConfig
        )),
        (this.events = Object.assign(
          {
            onFocus: () => {},
            onBlur: () => {},
            onChange: () => {},
            onLoad: () => {},
          },
          t.events
        )),
        !t.el)
      )
        throw new Error('缺少配置项 => el 属性');
      if (
        ((this.el =
          'string' == typeof t.el ? document.querySelector(t.el) : t.el),
        !this.el)
      )
        throw new Error(`获取元素失败 => ${t.el}`);
    }
    init() {
      return t(this, void 0, void 0, function* () {
        this.initDom(),
          this.initEvent(),
          this.initCodeMirror(),
          this.initMenu(),
          this.triggleTheme();
        const t = this.currFile,
          e = rp()[t.urlField];
        e
          ? this.setValue(ap(e))
          : t.defaultValue
          ? this.reset()
          : this.render(),
          this.changeLang();
      });
    }
    reset() {
      this.setValue(this.currFile.defaultValue);
    }
    initDom() {
      const { el: t, defaultConfig: e } = this;
      this.addClass(t, 'mini-sandbox'),
        t.setAttribute('package', 'mini-sandbox@0.3.18'),
        this.setStyle(t, { height: e.height });
      const i = e.toolbar
        .map(
          (t, e) =>
            `<span class="sandbox-icon icon-active sandbox-icon-${t}" title="${t}" style="order: ${e}">${Mp[t]}</span>`
        )
        .join('\n');
      (t.innerHTML = `\n      <div class="sandbox-head">\n        <div class="sandbox-setting">\n          <span class="sandbox-icon icon-active">\n            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 14C9.55228 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12C8.44771 12 8 12.4477 8 13C8 13.5523 8.44771 14 9 14Z" fill="currentColor" /><path d="M16 13C16 13.5523 15.5523 14 15 14C14.4477 14 14 13.5523 14 13C14 12.4477 14.4477 12 15 12C15.5523 12 16 12.4477 16 13Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 11.1637 19.8717 10.3574 19.6337 9.59973C18.7991 9.82556 17.9212 9.94604 17.0152 9.94604C13.2921 9.94604 10.0442 7.91139 8.32277 4.89334C5.75469 6.22486 4 8.90751 4 12C4 16.4183 7.58172 20 12 20Z" fill="currentColor" /></svg>\n          <span>\n        </div>\n        &ensp;\n        <div class="sandbox-tab">\n          ${this.fileList
        .filter((t) => !t.hidden)
        .map(
          (t, e) =>
            `\n              <div class="${
              'sandbox-tab-item' +
              (this.fileIndex === e ? ' sandbox-tab-active' : '')
            }" data-index="${e}">\n                <span>${
              t.title || t.filename
            }</span>\n                \x3c!-- <span class="sandbox-icon icon-close">\n                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor" /></svg>\n                </span> --\x3e\n              </div>\n            `
        )
        .join(
          '\n'
        )}\n        </div>\n        ${i}\n      </div>\n      <div class="sandbox-body">\n        <div class="sandbox-code" style="width: ${
        e.editorRange
      }"></div>\n        <div class="sandbox-gutter"></div>\n        <div class="sandbox-render">\n          <iframe></iframe>\n          <div class="sandbox-loading"></div>\n        </div>\n      </div>\n      <div class="sandbox-mask"></div>\n    `),
        (this.iframe = t.querySelector('iframe')),
        (this.loadEl = t.querySelector('.sandbox-loading')),
        (this.codeEl = t.querySelector('.sandbox-code')),
        (this.lineEl = t.querySelector('.sandbox-gutter')),
        (this.bodyEl = t.querySelector('.sandbox-body')),
        this.triggleDirection(e.direction);
      const n = (e, i) => {
        var n;
        null === (n = t.querySelector(e)) ||
          void 0 === n ||
          n.addEventListener('click', i);
      };
      n('.sandbox-icon-reset', () => {
        this.reset(), this.run(!0);
      }),
        n('.sandbox-icon-reload', () => this.run(!0)),
        n('.sandbox-icon-left-layout', () => this.triggleDirection('row')),
        n('.sandbox-icon-right-layout', () =>
          this.triggleDirection('row-reverse')
        ),
        n('.sandbox-icon-top-layout', () => this.triggleDirection('column')),
        n('.sandbox-icon-bottom-layout', () =>
          this.triggleDirection('column-reverse')
        );
      const r = t.querySelector('.sandbox-tab');
      r.addEventListener('click', (t) => {
        const e = ((t) => {
            if (t.path) return t.path;
            const e = [];
            let i = t.target;
            for (; i && i.parentNode; ) e.push(i), (i = i.parentNode);
            return e.push(document, window), e;
          })(t),
          i = e.find((t) => 'sandbox-tab-item' === t.className);
        if (i) {
          (this.fileIndex = Number(i.getAttribute('data-index'))),
            this.changeTab();
          const t = r.children;
          for (const e of t) e.className = 'sandbox-tab-item';
          this.addClass(i, 'sandbox-tab-active');
        }
      });
    }
    initMenu() {
      new Xp(
        {
          el: this.el.querySelector('.sandbox-setting'),
          theme: 'mac',
          mode: 'click',
        },
        _p.call(this)
      );
    }
    initEvent() {
      const { el: t, codeEl: e, defaultConfig: i } = this;
      if (!i.draggable) return void this.addClass(this.lineEl, 'no-dragging');
      const n = t.querySelector('.sandbox-mask');
      let r, s, o, a, l, h;
      this.lineEl.addEventListener('mousedown', (t) => {
        (l = t.offsetX), (h = t.offsetY), (this.isClick = !0);
        const {
          x: e,
          y: i,
          width: c,
          height: u,
        } = this.bodyEl.getBoundingClientRect();
        (r = c), (s = u), (o = e), (a = i), (n.style.display = 'block');
      }),
        t.addEventListener('mouseup', (t) => {
          (this.isClick = !1), (n.style.display = 'none');
        }),
        t.addEventListener('mousemove', (t) => {
          if (!this.isClick) return;
          let n = 0.5;
          switch (i.direction) {
            case 'row':
              (n = (t.clientX - o - l) / r), (e.style.width = 100 * n + '%');
              break;
            case 'row-reverse':
              (n = 1 - (t.clientX - o + l) / r),
                (e.style.width = 100 * n + '%');
              break;
            case 'column':
              (n = (t.clientY - a - h) / s), (e.style.height = 100 * n + '%');
              break;
            case 'column-reverse':
              (n = 1 - (t.clientY - a + h) / s),
                (e.style.height = 100 * n + '%');
          }
        });
    }
    handleChange() {
      var t;
      const { defaultConfig: e, events: i } = this,
        n = this.currFile,
        r = this.getValue(),
        s = op(r);
      (n.value = r),
        n.urlField &&
          ((t) => {
            const e = rp(),
              i = [];
            for (const i in t) e[i] = t[i];
            for (const t in e) i.push(`${t}=${e[t]}`);
            const n = '?' + i.join('&');
            history.pushState(null, '', n);
          })({ [n.urlField]: s }),
        e.autoRun && this.run(),
        null === (t = i.onChange) || void 0 === t || t.call(i);
    }
    initCodeMirror() {
      const t = Rr.updateListener.of((t) => {
        t.docChanged && this.handleChange();
      });
      (this.editor = new Rr({
        state: $t.create({ extensions: [rf, zr.of([hh]), Ip.of([]), t] }),
        parent: this.codeEl,
      })),
        (this.editorEl = this.el.querySelector('.cm-editor')),
        this.setStyle(this.editorEl, { 'font-size': '14px' });
    }
    changeTab() {
      const t = this.currFile;
      this.templateTypeSet.has(t.type) &&
        !0 === t.template &&
        (this.currTemplate = t),
        this.changeLang(),
        this.setValue(t.value || t.defaultValue);
    }
    changeLang() {
      const t = this.currFile,
        e =
          {
            '.html': tp(),
            '.css': gO(),
            '.js': ZO(),
            '.vue': tp(),
            '.jsx': ZO({ jsx: !0 }),
            '.ts': ZO({ typescript: !0 }),
          }[t.type] || [];
      this.editor.dispatch({ effects: Ip.reconfigure(e) });
    }
    setValue(t) {
      this.editor.dispatch({
        changes: { from: 0, to: this.editor.state.doc.length, insert: t },
      }),
        this.run();
    }
    getValue() {
      return this.editor.state.doc.toString();
    }
    getJSONString() {
      return JSON.stringify(this.getValue()).replace(
        /<\/script>/g,
        '<\\/script>'
      );
    }
    setCode(t) {
      return this.setValue(ap(t));
    }
    getCode(t) {
      return op(t || this.getValue());
    }
    setStyle(t, e) {
      for (const i in e) t.style[i] = e[i];
    }
    addClass(t, e) {
      t.classList.add(e);
    }
    getResource(e) {
      return t(this, void 0, void 0, function* () {
        window.ldqResource || (window.ldqResource = {});
        const t = window.ldqResource,
          i = this.files[e];
        return (
          i && (t[e] = i.value),
          t[e] || (t[e] = ((t) => fetch(t).then((t) => t.text()))(e)),
          t[e]
        );
      });
    }
    triggleLoading(t) {
      this.loadEl.style.display = t ? 'block' : 'none';
    }
    triggleTheme(t = this.defaultConfig.theme) {
      this.el.classList.value.indexOf('sandbox-theme-light') > -1 ||
        this.el.classList.add('sandbox-theme-light');
    }
    triggleDirection(t = 'row') {
      const { codeEl: e, defaultConfig: i } = this,
        n = ['100%', '0%'].indexOf(i.editorRange) > -1 ? '0px' : '5px',
        r = this.el.querySelector('.sandbox-render');
      if (t.indexOf('row') > -1)
        this.setStyle(e, { width: i.editorRange, height: '100%' }),
          this.setStyle(r, { width: i.renderRange, height: '100%' }),
          this.setStyle(this.lineEl, { width: n, height: '100%' });
      else {
        if (!(t.indexOf('column') > -1)) return;
        this.setStyle(e, { width: '100%', height: i.editorRange }),
          this.setStyle(r, { width: '100%', height: i.renderRange }),
          this.setStyle(this.lineEl, { width: '100%', height: n });
      }
      (i.direction = t), this.setStyle(this.bodyEl, { 'flex-direction': t });
    }
    render(e = !1) {
      var i;
      return t(this, void 0, void 0, function* () {
        const { loaders: t, iframe: n, currTemplate: r } = this;
        if (!r) return;
        const s = r.value;
        this.triggleLoading(!0),
          (e || ['.html', '.vue'].indexOf(r.type) > -1) &&
            (yield new Promise((t) => {
              var e;
              const i = () => {
                t(), n.removeEventListener('load', i);
              };
              n.addEventListener('load', i),
                null === (e = n.contentWindow) ||
                  void 0 === e ||
                  e.location.reload();
            }));
        const o =
          null === (i = this.iframe.contentWindow) || void 0 === i
            ? void 0
            : i.document;
        if (!o) return;
        const a = t[r.type];
        let l = Array.isArray(a) ? a : [a];
        l = l
          .slice()
          .reverse()
          .filter((t) => 'function' == typeof t);
        let h = s;
        for (const t of l) h = yield Promise.resolve(t.call(this, h, r));
        o.open(), o.write(h), o.close(), this.triggleLoading(!1);
      });
    }
  }
  return (Np.version = Zp), (Np.encode = op), (Np.decode = ap), Np;
});
