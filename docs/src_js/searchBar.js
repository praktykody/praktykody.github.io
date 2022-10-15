!(function () {
  var u = {}, m = { EXPIRE_KEY: "docsify.search.expires", INDEX_KEY: "docsify.search.index" };
  function p(e) {
      var n = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
      return String(e).replace(/[&<>"']/g, function (e) {
          return n[e];
      });
  }
  function h(e) {
      return (
          e.text ||
              "table" !== e.type ||
              (e.cells.unshift(e.header),
              (e.text = e.cells
                  .map(function (e) {
                      return e.join(" | ");
                  })
                  .join(" |\n"))),
          e.text
      );
  }
  function f(e) {
      return e.text || "list" !== e.type || (e.text = e.raw), e.text;
  }
  function g(i, e, r, o) {
      void 0 === e && (e = "");
      var s,
          e = window.marked.lexer(e),
          c = window.Docsify.slugify,
          d = {},
          l = "";
      return (
          e.forEach(function (e, n) {
              if ("heading" === e.type && e.depth <= o) {
                  var t = (function (e) {
                          void 0 === e && (e = "");
                          var a = {};
                          return {
                              str: (e =
                                  e &&
                                  e
                                      .replace(/^('|")/, "")
                                      .replace(/('|")$/, "")
                                      .replace(/(?:^|\s):([\w-]+:?)=?([\w-%]+)?/g, function (e, n, t) {
                                          return -1 === n.indexOf(":") ? ((a[n] = (t && t.replace(/&quot;/g, "")) || !0), "") : e;
                                      })
                                      .trim()),
                              config: a,
                          };
                      })(e.text),
                      a = t.str,
                      t = t.config;
                  (s = t.id ? r.toURL(i, { id: c(t.id) }) : r.toURL(i, { id: c(p(e.text)) })),
                      a &&
                          (l = a
                              .replace(/<!-- {docsify-ignore} -->/, "")
                              .replace(/{docsify-ignore}/, "")
                              .replace(/<!-- {docsify-ignore-all} -->/, "")
                              .replace(/{docsify-ignore-all}/, "")
                              .trim()),
                      (d[s] = { slug: s, title: l, body: "" });
              } else {
                  if ((0 === n && ((s = r.toURL(i)), (d[s] = { slug: s, title: "/" !== i ? i.slice(1) : "Home Page", body: e.text || "" })), !s)) return;
                  d[s]
                      ? d[s].body
                          ? ((e.text = h(e)), (e.text = f(e)), (d[s].body += "\n" + (e.text || "")))
                          : ((e.text = h(e)), (e.text = f(e)), (d[s].body = d[s].body ? d[s].body + e.text : e.text))
                      : (d[s] = { slug: s, title: "", body: "" });
              }
          }),
          c.clear(),
          d
      );
  }
  function y(e) {
      return e && e.normalize ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e;
  }
  function r(i, r) {
      var t,
          a,
          n,
          e,
          o = "auto" === i.paths,
          s = o
              ? ((t = r.router),
                (a = []),
                Docsify.dom.findAll(".sidebar-nav a:not(.section-link):not([data-nosearch])").forEach(function (e) {
                    var n = e.href,
                        e = e.getAttribute("href"),
                        n = t.parse(n).path;
                    n && -1 === a.indexOf(n) && !Docsify.util.isAbsolutePath(e) && a.push(n);
                }),
                a)
              : i.paths,
          c = "";
      s.length && o && i.pathNamespaces
          ? ((n = s[0]),
            Array.isArray(i.pathNamespaces)
                ? (c =
                      i.pathNamespaces.filter(function (e) {
                          return n.slice(0, e.length) === e;
                      })[0] || c)
                : i.pathNamespaces instanceof RegExp && (d = n.match(i.pathNamespaces)) && (c = d[0]),
            (e = -1 === s.indexOf(c + "/")),
            (d = -1 === s.indexOf(c + "/README")),
            e && d && s.unshift(c + "/"))
          : -1 === s.indexOf("/") && -1 === s.indexOf("/README") && s.unshift("/");
      var d,
          l = ((d = i.namespace) ? m.EXPIRE_KEY + "/" + d : m.EXPIRE_KEY) + c,
          p = ((d = i.namespace) ? m.INDEX_KEY + "/" + d : m.INDEX_KEY) + c,
          c = localStorage.getItem(l) < Date.now();
      if (((u = JSON.parse(localStorage.getItem(p))), c)) u = {};
      else if (!o) return;
      var h = s.length,
          f = 0;
      s.forEach(function (a) {
          return u[a]
              ? f++
              : void Docsify.get(r.router.getFile(a), !1, r.config.requestHeaders).then(function (e) {
                    var n, t;
                    (u[a] = g(a, e, r.router, i.depth)), h === ++f && ((n = i.maxAge), (t = l), (e = p), localStorage.setItem(t, Date.now() + n), localStorage.setItem(e, JSON.stringify(u)));
                });
      });
  }
  var o, s = "";
  // escape Weird Chars
  function ec(string){
    return string.replaceAll('&amp;', '&')
  }
  function c(e) {
      var n = Docsify.dom.find("div.search"),
          t = Docsify.dom.find(n, ".results-panel"),
          a = Docsify.dom.find(n, ".clear-button"),
          i = Docsify.dom.find(".sidebar-nav"),
          n = Docsify.dom.find(".app-name");
      if (!e) return t.classList.remove("show"), a.classList.remove("show"), (t.innerHTML = ""), void (o.hideOtherSidebarContent && (i && i.classList.remove("hide"), n && n.classList.remove("hide")));
      var e = (function (e) {
        var n = [], t = [];
        Object.keys(u).forEach(function (n) { t = t.concat( Object.keys(u[n]).map(function (e) { return u[n][e]; }) ); });
        var a = (e = e.trim()).split(/[\s\-，\\/]+/);
        1 !== a.length && (a = [].concat(e, a));
        for (var i = 0; i < t.length; i++) !(function (e) {
          var e = t[e], r = 0, o = "", s = "", c = "", d = e.title && e.title.trim(), l = e.body && e.body.trim(), e = e.slug || ""; d &&
          (a.forEach(function (e) {
            var n, t = new RegExp(p(y(e)).replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"), "gi"),
            a = -1, i = -1; (s = d ? p(y(d)) : d), (c = l ? p(y(l)) : l), (a = d ? s.search(t) : -1),
            (i = l ? c.search(t) : -1), (0 <= a || 0 <= i) && ((r += 0 <= a ? 3 : 0 <= i ? 2 : 0),
            i < 0 && (i = 0), (a = (a = n = 0) == (n = i < 11 ? 0 : i - 10) ? 70 : i + e.length + 60), l && a > l.length && (a = l.length),
            (t = "..." + c.substring(n, a).replace(t, function (e) { return '<em class="search-keyword">' + e + "</em>"; }) + "..."), (o += t));
          }),
          0 < r && ((e = { title: s, content: l ? o : "", url: e, score: r }), n.push(e)));
        })(i);
        return n.sort(function (e, n) { return n.score - e.score; });
      })(e),
      r = "";
      console.log()
      e.forEach(function (e) { 
        // console.log(e.title)
        // var encodedStr = rawStr.replace(/[\u00A0-\u9999<>\&]/g, function(i) { return '&#'+i.charCodeAt(0)+';' });
        // e.title = e.title.replace(/[\u00A0-\u9999<>\&]/g, function(i) { return '&#'+i.charCodeAt(0)+';' });
        // e.title = ec(e.title)

        r += `<div class="matching-post">\n<a href="${ec(e.url)}">\n<h2>${ec(e.title)}</h2>\n<p>${ec(e.content)}</p>\n</a>\n</div>`; }),
      t.classList.add("show"), a.classList.add("show"),
      (t.innerHTML = r || '<p class="empty">' + s + "</p>"),
      o.hideOtherSidebarContent && (i && i.classList.add("hide"), n && n.classList.add("hide"));
  }
  function d(e) {
      o = e;
  }
  function l(e, n) {
    var t, a, i = n.router.parse().query.s; d(e), Docsify.dom.style( /*css*/`

      .sidebar {
        padding-top: 0;
      }

      .search h2{
        padding:0 !important;
        margin:10px !important; 
      
      }
      .search {
        margin-bottom: 20px;
        padding: 6px;
        border-bottom: 1px solid #eee;
      }

      .search .input-wrap {
        display: flex;
        align-items: center;
      }

      .search .results-panel {
        display: none;
        background-color:var(--borderColor);
      }

      .search .results-panel.show {
        display: block;
        max-height:calc(100vh - 3rem);
        overflow-y:auto;
        top:3rem;
        left:0;
        width:100%;
        position:absolute;
      }
      @media (min-width: 768px){
        .search .results-panel.show {
          width:70%;
          left:15%;
          max-height:calc(60vh);
        }
      }

      .search input {
        outline: none;
        border: none;
        width: 100%;
        padding: 0 7px;
        line-height: 36px;
        font-size: 14px;
        border: 1px solid transparent;
      }

      .search input:focus {
        box-shadow: 0 0 5px var(--theme-color, #42b983);
        border: 1px solid var(--theme-color, #42b983);
      }

      .search input::-webkit-search-decoration,
      .search input::-webkit-search-cancel-button,
      .search input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
      .search .clear-button {
        cursor: pointer;
        width: 36px;
        text-align: right;
        display: none;
      }

      .search .clear-button.show {
        display: block;
      }

      .search .clear-button svg {
        transform: scale(.5);
      }

      .search h2 {
        font-size: 17px;
        margin: 10px 0;
      }

      .search a {
        text-decoration: none;
        color: inherit;
      }

      .search .matching-post {
        border-bottom: 1px solid #eee;
        padding:0 1.5rem;
      }

      .search .matching-post:last-child {
        border-bottom: 0;
      }

      .search p {
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .search p.empty {
        text-align: center;
      }

      .app-name.hide, .sidebar-nav.hide {
        display: none;
      }

      `),(function (e) {
          void 0 === e && (e = "");
          var n = /*html*/`
            <div class="input-wrap">
              <input type="search" value="${ e }" aria-label="Search text" />
              <div class="clear-button">
                <svg width="26" height="24">
                  <circle cx="12" cy="12" r="11" fill="#ccc" />
                  <path stroke="white" stroke-width="2" d="M8.25,8.25,15.75,15.75" />
                  <path stroke="white" stroke-width="2"d="M8.25,15.75,15.75,8.25" />
                </svg>
              </div>
            </div>
            <div class="results-panel"></div>
            </div>
          `,
        e = Docsify.dom.create("div", n), n = Docsify.dom.find("aside");
        Docsify.dom.toggleClass(e, "search"), Docsify.dom.before(n, e);
      })(i),
      (n = Docsify.dom.find("div.search")),
      (a = Docsify.dom.find(n, "input")),
      (e = Docsify.dom.find(n, ".input-wrap")),
      Docsify.dom.on(n, "click", function (e) {
          return -1 === ["A", "H2", "P", "EM"].indexOf(e.target.tagName) && e.stopPropagation();
      }),
      Docsify.dom.on(a, "input", function (n) {
          clearTimeout(t),
              (t = setTimeout(function (e) {
                  return c(n.target.value.trim());
              }, 100));
      }),
      Docsify.dom.on(e, "click", function (e) {
          "INPUT" !== e.target.tagName && ((a.value = ""), c());
      }),
      i && setTimeout(function (e) {
              return c(i);
      }, 500);
  }
  function v(e, n) {
      var t, a, i, r, o;
      d(e),
          (t = e.placeholder),
          (a = n.route.path),
          (r = Docsify.dom.getNode('.search input[type="search"]')) &&
              ("string" == typeof t ? (r.placeholder = t) : ((i = Object.keys(t).filter(function (e) {
                return -1 < a.indexOf(e);
              })[0]),
                    (r.placeholder = t[i]))),
          (e = e.noData),
          (o = n.route.path),
          (s =
              "string" == typeof e
                  ? e
                  : e[
                        Object.keys(e).filter(function (e) {
                            return -1 < o.indexOf(e);
                        })[0]
                    ]);
  }
  var b = { placeholder: "Type to search", noData: "No Results!", paths: "auto", depth: 2, maxAge: 864e5, hideOtherSidebarContent: !1, namespace: void 0, pathNamespaces: void 0 };
  $docsify.plugins = [].concat(function (e, n) {
      var t = Docsify.util, a = n.config.search || b;
      Array.isArray(a) ? (b.paths = a) : "object" == typeof a &&
            ((b.paths = Array.isArray(a.paths) ? a.paths : "auto"),
            (b.maxAge = (t.isPrimitive(a.maxAge) ? a : b).maxAge),
            (b.placeholder = a.placeholder || b.placeholder),
            (b.noData = a.noData || b.noData),
            (b.depth = a.depth || b.depth),
            (b.hideOtherSidebarContent = a.hideOtherSidebarContent || b.hideOtherSidebarContent),
            (b.namespace = a.namespace || b.namespace),
            (b.pathNamespaces = a.pathNamespaces || b.pathNamespaces));
      var i = "auto" === b.paths;
      e.mounted (function (e) { l(b, n), i || r(b, n); }),
      e.doneEach(function (e) { v(b, n), i && r(b, n); });
  }, $docsify.plugins);

  window.addEventListener('click', e => {
    const rp = document.querySelector('.results-panel')
    if(!rp.classList.contains('show')){ return }
    rp.classList.remove('show')
  })

  window.addEventListener('load', () => {
    document.querySelector('input[type=search]').addEventListener('click', e => {
      document.querySelector('.results-panel').classList.add('show')
    })
  })
})();
