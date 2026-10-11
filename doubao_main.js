"use strict";
(self.webpackChunkai = self.webpackChunkai || []).push([["56909"], {
    98148: function (M, e, t) {
        t.d(e, {
            y: function () {
                return D
            }, r: function () {
                return N
            }
        });
        var n = t(76693), i = t(98959), a = t(47335),
            c = ["utm_source", "utm_medium", "utm_term", "utm_campaign", "utm_content"];

        function u(M, e, t, n, i, a, c) {
            try {
                var u = M[a](c), N = u.value
            } catch (M) {
                t(M);
                return
            }
            u.done ? e(N) : Promise.resolve(N).then(n, i)
        }

        function N() {
            var M = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = M.openMode;
            !function (M) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "self";
                if ("self" === e) return window.location.assign(M);
                window.open(M, "_blank") || window.location.assign(M)
            }(function () {
                var M = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = "https://".concat((0, n.WH)().aiSite), t = new URLSearchParams;
                return t.set("redirectURI", function () {
                    var M = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = M.hashKey,
                        t = e ? "#".concat(e) : window.location.hash;
                    return "".concat(window.location.pathname).concat(window.location.search).concat(t)
                }(M)), t.set("params", function () {
                    var M = new URLSearchParams, e = function () {
                        if ("undefined" == typeof window) return {};
                        try {
                            return (0, a.xN)()
                        } catch (M) {
                            console.error("[common-utils] get login utm failed:", M)
                        }
                        return {}
                    }();
                    M.set("scenario", "aihub");
                    var t = !0, n = !1, i = void 0;
                    try {
                        for (var u, N = c[Symbol.iterator](); !(t = (u = N.next()).done); t = !0) {
                            var D = u.value, r = e[D];
                            r && M.set(D, r)
                        }
                    } catch (M) {
                        n = !0, i = M
                    } finally {
                        try {
                            t || null == N.return || N.return()
                        } finally {
                            if (n) throw i
                        }
                    }
                    return M.toString()
                }()), "".concat(e, "/signin/login?").concat(t.toString())
            }(M), void 0 === e ? "self" : e)
        }

        function D() {
            return r.apply(this, arguments)
        }

        function r() {
            var M;
            return M = function () {
                var M, e, t, a, c, u, D = arguments;
                return function (M, e) {
                    var t, n, i, a, c = {
                        label: 0, sent: function () {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        }, trys: [], ops: []
                    };
                    return a = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
                        return this
                    }), a;

                    function u(a) {
                        return function (u) {
                            var N = [a, u];
                            if (t) throw TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (t = 1, n && (i = 2 & N[0] ? n.return : N[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, N[1])).done) return i;
                                switch (n = 0, i && (N = [2 & N[0], i.value]), N[0]) {
                                    case 0:
                                    case 1:
                                        i = N;
                                        break;
                                    case 4:
                                        return c.label++, {value: N[1], done: !1};
                                    case 5:
                                        c.label++, n = N[1], N = [0];
                                        continue;
                                    case 7:
                                        N = c.ops.pop(), c.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = c.trys).length > 0 && i[i.length - 1]) && (6 === N[0] || 2 === N[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === N[0] && (!i || N[1] > i[0] && N[1] < i[3])) {
                                            c.label = N[1];
                                            break
                                        }
                                        if (6 === N[0] && c.label < i[1]) {
                                            c.label = i[1], i = N;
                                            break
                                        }
                                        if (i && c.label < i[2]) {
                                            c.label = i[2], c.ops.push(N);
                                            break
                                        }
                                        i[2] && c.ops.pop(), c.trys.pop();
                                        continue
                                }
                                N = e.call(M, c)
                            } catch (M) {
                                N = [6, M], n = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & N[0]) throw N[1];
                            return {value: N[0] ? N[1] : void 0, done: !0}
                        }
                    }
                }(this, function (r) {
                    switch (r.label) {
                        case 0:
                            M = D.length > 0 && void 0 !== D[0] ? D[0] : {}, e = "https://".concat((0, n.WH)().aiSite), r.label = 1;
                        case 1:
                            return r.trys.push([1, 3, , 4]), [4, (0, i.W)("".concat(e, "/signin/status/identity"), {
                                method: "GET",
                                credentials: "include"
                            })];
                        case 2:
                            if (!(null == (u = r.sent()) || null == (a = u.ResponseMetadata) || null == (t = a.Error) ? void 0 : t.Code) && ((null == u || null == (c = u.Result) ? void 0 : c.AccountId) || -1) > 0) return [2, !0];
                            return [3, 4];
                        case 3:
                            return console.error("[ai-utils] ensureLogin identity request failed:", r.sent()), [3, 4];
                        case 4:
                            return N(M), [2, !1]
                    }
                })
            }, (r = function () {
                var e = this, t = arguments;
                return new Promise(function (n, i) {
                    var a = M.apply(e, t);

                    function c(M) {
                        u(a, n, i, c, N, "next", M)
                    }

                    function N(M) {
                        u(a, n, i, c, N, "throw", M)
                    }

                    c(void 0)
                })
            }).apply(this, arguments)
        }
    }, 90171: function (M, e, t) {
        function n(M, e) {
            (null == e || e > M.length) && (e = M.length);
            for (var t = 0, n = Array(e); t < e; t++) n[t] = M[t];
            return n
        }

        t.d(e, {
            S: function () {
                return a
            }, w: function () {
                return c
            }
        });
        var i = "account_id", a = function (M) {
            for (var e, t, i = arguments.length, a = Array(i > 1 ? i - 1 : 0), c = 1; c < i; c++) a[c - 1] = arguments[c];
            "undefined" != typeof window && (null == (e = window) ? void 0 : e.Slardar) && (t = window).Slardar.apply(t, [M].concat(function (M) {
                if (Array.isArray(M)) return n(M)
            }(a) || function (M) {
                if ("undefined" != typeof Symbol && null != M[Symbol.iterator] || null != M["@@iterator"]) return Array.from(M)
            }(a) || function (M, e) {
                if (M) {
                    if ("string" == typeof M) return n(M, void 0);
                    var t = Object.prototype.toString.call(M).slice(8, -1);
                    if ("Object" === t && M.constructor && (t = M.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return n(M, e)
                }
            }(a) || function () {
                throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()))
        }, c = function (M) {
            if ("undefined" != typeof window && (null == (e = window) ? void 0 : e.Slardar)) {
                var e, t = null == M ? "" : String(M);
                if (t) return void window.Slardar("context.set", i, t);
                window.Slardar("context.delete", i)
            }
        }
    }, 35098: function (M, e, t) {
        t.d(e, {
            z: function () {
                return N
            }
        });
        var n = t(98804), i = {}, a = function (M, e) {
            if (!e.trim()) throw Error("[ai-utils][opentop] ".concat(M, " is required."))
        }, c = function (M) {
            if ("get" !== M && "post" !== M) throw Error('[ai-utils][opentop] method must be "get" or "post".');
            return M
        }, u = function (M) {
            var e, t, n, i = c(M.method), a = null != (e = M.isRawData) && e,
                u = null != (t = M.isJson) ? t : "post" === i && !a;
            return {method: i, isRawData: a, isJson: u, reportErrorToSlardar: null == (n = M.reportErrorToSlardar) || n}
        };

        function N(M) {
            var e, t, c = M.region || "cn-beijing", N = M.actionKey || M.action, D = u(M), r = D.method,
                l = D.isRawData, o = D.isJson, I = D.reportErrorToSlardar;
            a("targetService", M.targetService), a("action", M.action), a("actionKey", N), a("version", M.version), a("region", c);
            var j = (e = {}, t = {
                    Action: M.action,
                    Version: M.version,
                    method: r,
                    region: c,
                    isRawData: l
                }, N in e ? Object.defineProperty(e, N, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[N] = t, e), g = M.headers ? {headers: M.headers} : void 0, z = (0, n.a)(M.targetService, j, {
                    Version: M.version,
                    method: r,
                    region: c,
                    isJson: o,
                    urlPrefix: M.urlPrefix,
                    axiosOptions: g,
                    reportErrorToSlardar: I
                }), y = {throwBizError: !0, query: M.query, isJson: o, isRawData: l, reportErrorToSlardar: I},
                A = void 0 === M.params ? i : M.params;
            return z[N](A, y)
        }
    }, 98959: function (M, e, t) {
        function n(M, e) {
            (null == e || e > M.length) && (e = M.length);
            for (var t = 0, n = Array(e); t < e; t++) n[t] = M[t];
            return n
        }

        function i(M, e) {
            return null != e && "undefined" != typeof Symbol && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](M) : M instanceof e
        }

        function a(M) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {}, n = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function (M) {
                    return Object.getOwnPropertyDescriptor(t, M).enumerable
                }))), n.forEach(function (e) {
                    var n;
                    n = t[e], e in M ? Object.defineProperty(M, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : M[e] = n
                })
            }
            return M
        }

        function c(M, e) {
            return function (M) {
                if (Array.isArray(M)) return M
            }(M) || function (M, e) {
                var t, n, i = null == M ? null : "undefined" != typeof Symbol && M[Symbol.iterator] || M["@@iterator"];
                if (null != i) {
                    var a = [], c = !0, u = !1;
                    try {
                        for (i = i.call(M); !(c = (t = i.next()).done) && (a.push(t.value), !e || a.length !== e); c = !0) ;
                    } catch (M) {
                        u = !0, n = M
                    } finally {
                        try {
                            c || null == i.return || i.return()
                        } finally {
                            if (u) throw n
                        }
                    }
                    return a
                }
            }(M, e) || function (M, e) {
                if (M) {
                    if ("string" == typeof M) return n(M, e);
                    var t = Object.prototype.toString.call(M).slice(8, -1);
                    if ("Object" === t && M.constructor && (t = M.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return n(M, e)
                }
            }(M, e) || function () {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        t.d(e, {
            W: function () {
                return N
            }
        });
        var u = {POST: !0, PUT: !0, PATCH: !0};

        function N(M) {
            var e, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.query, N = t.method,
                D = t.body, r = t.headers, l = t.type, o = void 0 === l ? "json" : l, I = t.reqType,
                j = void 0 === I ? "json" : I, g = function (M, e) {
                    if (null == M) return {};
                    var t, n, i = function (M, e) {
                        if (null == M) return {};
                        var t, n, i = {}, a = Object.keys(M);
                        for (n = 0; n < a.length; n++) t = a[n], e.indexOf(t) >= 0 || (i[t] = M[t]);
                        return i
                    }(M, e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(M);
                        for (n = 0; n < a.length; n++) t = a[n], !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(M, t) && (i[t] = M[t])
                    }
                    return i
                }(t, ["query", "method", "body", "headers", "type", "reqType"]), z = function (M) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, t = c(M.split("?"), 2),
                        n = t[0], i = t[1], a = new URLSearchParams(void 0 === i ? "" : i);
                    Object.entries(e).forEach(function (M) {
                        var e = c(M, 2), t = e[0], n = e[1];
                        null != n && a.set(t, String(n))
                    });
                    var u = a.toString();
                    return u ? "".concat(n, "?").concat(u) : n
                }(M, n), y = (N || "GET").toUpperCase(), A = a({}, r);
            return u[y] && null != D && ("form" === j && i(D, FormData) ? (e = D, delete A["Content-Type"]) : "text" === j ? (A["Content-Type"] = A["Content-Type"] || "text/plain", e = "string" == typeof D ? D : JSON.stringify(D)) : "string" == typeof D || i(D, Blob) || i(D, ArrayBuffer) || i(D, URLSearchParams) || i(D, FormData) ? e = D : (A["Content-Type"] = A["Content-Type"] || "application/json", e = JSON.stringify(D))), fetch(z, a({
                method: y,
                headers: a({accept: "text" === o ? "text/plain" : "application/json"}, A),
                body: e
            }, g)).then(function (M) {
                return "text" === o ? M.text() : M.json()
            })
        }
    }, 20745: function (M, e, t) {
        t(97458), t(52983), e.Z = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI2Ml8yNTQ2KSI+CjxwYXRoIGQ9Ik0xNS4yNDQ3IDEuNTE0MjhMMTQuNDg3NiAwLjc1NzEzNkMxNC40NTkgMC43Mjg1NjQgMTQuNDIzMyAwLjcxNjA2NCAxNC4zODU4IDAuNzE2MDY0QzE0LjM0ODMgMC43MTYwNjQgMTQuMzEyNiAwLjczMDM1IDE0LjI4NCAwLjc1NzEzNkwxMi45MjUxIDIuMTE2MDZDMTIuMzM0MyAxLjcxNTggMTEuNjM2OSAxLjUwMjQgMTAuOTIzMyAxLjUwMzU2QzEwLjAwOSAxLjUwMzU2IDkuMDk0NyAxLjg1MTc4IDguMzk2NDggMi41NDk5OUw2LjU3Njg0IDQuMzY5NjRDNi41NTAyNSA0LjM5NjQ5IDYuNTM1MzQgNC40MzI3NCA2LjUzNTM0IDQuNDcwNTNDNi41MzUzNCA0LjUwODMxIDYuNTUwMjUgNC41NDQ1NyA2LjU3Njg0IDQuNTcxNDJMMTEuNDI4NiA5LjQyMzIxQzExLjQ1NzIgOS40NTE3OCAxMS40OTI5IDkuNDY0MjggMTEuNTMwNCA5LjQ2NDI4QzExLjU2NjEgOS40NjQyOCAxMS42MDM2IDkuNDQ5OTkgMTEuNjMyMiA5LjQyMzIxTDEzLjQ1MTggNy42MDM1NkMxNC42ODIyIDYuMzcxNDIgMTQuODI2OCA0LjQ2NjA2IDEzLjg4NTggMy4wNzY3OEwxNS4yNDQ3IDEuNzE3ODVDMTUuMzAwMSAxLjY2MDcxIDE1LjMwMDEgMS41Njk2NCAxNS4yNDQ3IDEuNTE0MjhaTTEyLjU5MTEgNi43NDQ2NEwxMS41MzA0IDcuODA1MzVMOC4xOTQ3IDQuNDY5NjRMOS4yNTU0MSAzLjQwODkyQzkuNzAwMDUgMi45NjQyOCAxMC4yOTI5IDIuNzE3ODUgMTAuOTIzMyAyLjcxNzg1QzExLjU1MzYgMi43MTc4NSAxMi4xNDQ3IDIuOTYyNDkgMTIuNTkxMSAzLjQwODkyQzEzLjAzNTggMy44NTM1NiAxMy4yODIyIDQuNDQ2NDIgMTMuMjgyMiA1LjA3Njc4QzEzLjI4MjIgNS43MDcxNCAxMy4wMzU4IDYuMjk4MjEgMTIuNTkxMSA2Ljc0NDY0Wk05LjE5NDcgOC42MTk2NEM5LjE2Nzg1IDguNTkzMDUgOS4xMzE1OSA4LjU3ODE0IDkuMDkzODEgOC41NzgxNEM5LjA1NjAyIDguNTc4MTQgOS4wMTk3NiA4LjU5MzA1IDguOTkyOTEgOC42MTk2NEw3LjgwMzYzIDkuODA4OTJMNi4xOTExMyA4LjE5NjQyTDcuMzgyMiA3LjAwNTM1QzcuNDM3NTYgNi45NDk5OSA3LjQzNzU2IDYuODU4OTIgNy4zODIyIDYuODAzNTZMNi43MzIyIDYuMTUzNTZDNi43MDUzNSA2LjEyNjk4IDYuNjY5MDkgNi4xMTIwNiA2LjYzMTMxIDYuMTEyMDZDNi41OTM1MiA2LjExMjA2IDYuNTU3MjYgNi4xMjY5OCA2LjUzMDQxIDYuMTUzNTZMNS4zMzkzNCA3LjM0NDY0TDQuNTcxNDggNi41NzY3OEM0LjU1ODE1IDYuNTYzNDQgNC41NDIyNyA2LjU1MjkyIDQuNTI0NzggNi41NDU4N0M0LjUwNzI5IDYuNTM4ODEgNC40ODg1NSA2LjUzNTM1IDQuNDY5NyA2LjUzNTcxQzQuNDMzOTggNi41MzU3MSA0LjM5NjQ4IDYuNTQ5OTkgNC4zNjc5MSA2LjU3Njc4TDIuNTUwMDYgOC4zOTY0MkMxLjMxOTcgOS42Mjg1NiAxLjE3NTA2IDExLjUzMzkgMi4xMTYxMyAxMi45MjMyTDAuNzU3MTk4IDE0LjI4MjFDMC43MzA2MTIgMTQuMzA5IDAuNzE1Njk4IDE0LjM0NTIgMC43MTU2OTggMTQuMzgzQzAuNzE1Njk4IDE0LjQyMDggMC43MzA2MTIgMTQuNDU3MSAwLjc1NzE5OCAxNC40ODM5TDEuNTE0MzQgMTUuMjQxMUMxLjU0MjkxIDE1LjI2OTYgMS41Nzg2MyAxNS4yODIxIDEuNjE2MTMgMTUuMjgyMUMxLjY1MzYzIDE1LjI4MjEgMS42ODkzNCAxNS4yNjc5IDEuNzE3OTEgMTUuMjQxMUwzLjA3Njg0IDEzLjg4MjFDMy42Nzg2MyAxNC4yOTExIDQuMzc4NjMgMTQuNDk0NiA1LjA3ODYzIDE0LjQ5NDZDNS45OTI5MSAxNC40OTQ2IDYuOTA3MiAxNC4xNDY0IDcuNjA1NDEgMTMuNDQ4Mkw5LjQyNTA2IDExLjYyODZDOS40ODA0MSAxMS41NzMyIDkuNDgwNDEgMTEuNDgyMSA5LjQyNTA2IDExLjQyNjhMOC42NTcyIDEwLjY1ODlMOS44NDgyNyA5LjQ2Nzg1QzkuOTAzNjMgOS40MTI0OSA5LjkwMzYzIDkuMzIxNDIgOS44NDgyNyA5LjI2NjA2TDkuMTk0NyA4LjYxOTY0Wk02Ljc0NDcgMTIuNTkxMUM2LjUyNjE0IDEyLjgxMDcgNi4yNjYyMiAxMi45ODQ5IDUuOTc5OTQgMTMuMTAzNUM1LjY5MzY2IDEzLjIyMjIgNS4zODY3MiAxMy4yODI5IDUuMDc2ODQgMTMuMjgyMUM0LjQ0NjQ4IDEzLjI4MjEgMy44NTU0MSAxMy4wMzc1IDMuNDA4OTggMTIuNTkxMUMzLjE4OTMxIDEyLjM3MjUgMy4wMTUxMyAxMi4xMTI2IDIuODk2NTEgMTEuODI2M0MyLjc3Nzg5IDExLjU0IDIuNzE3MTkgMTEuMjMzMSAyLjcxNzkxIDEwLjkyMzJDMi43MTc5MSAxMC4yOTI5IDIuOTYyNTYgOS43MDE3OCAzLjQwODk4IDkuMjU1MzVMNC40Njk3IDguMTk0NjRMNy44MDU0MSAxMS41MzA0TDYuNzQ0NyAxMi41OTExWiIgZmlsbD0iIzBDMEQwRSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzI2Ml8yNTQ2Ij4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
    }, 64877: function (M, e, t) {
        t(97458), t(52983), e.Z = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNNC4wMTIgMTYuNzM3QTIuMDA1IDIuMDA1IDAgMCAxIDMgMTVWNWMwLTEuMS45LTIgMi0yaDEwYy43NSAwIDEuMTU4LjM4NSAxLjUgMSIgc3Ryb2tlPSIjMTAxMDEzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik03IDkuNjY3QTIuNjY3IDIuNjY3IDAgMCAxIDkuNjY3IDdoOC42NjZBMi42NjcgMi42NjcgMCAwIDEgMjEgOS42Njd2OC42NjZBMi42NjcgMi42NjcgMCAwIDEgMTguMzMzIDIxSDkuNjY3QTIuNjY3IDIuNjY3IDAgMCAxIDcgMTguMzMzVjkuNjY3WiIgc3Ryb2tlPSIjMTAxMDEzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
    }, 11193: function (M, e, t) {
        t(97458), t(52983), e.Z = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuNSA5SDEzLjYiIHN0cm9rZT0iI0FFQjNDMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMC4yMDAyIDUuNDAwMDJMMTMuODAwMiA5LjAwMDAyTDEwLjIwMDIgMTIuNiIgc3Ryb2tlPSIjQUVCM0MwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
    }, 65401: function (M, e, t) {
        t(97458), t(52983), e.Z = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjc1IDIuMjVINC4yNUMzLjE0NTQzIDIuMjUgMi4yNSAzLjE0NTQzIDIuMjUgNC4yNVYxMy43NUMyLjI1IDE0Ljg1NDYgMy4xNDU0MyAxNS43NSA0LjI1IDE1Ljc1SDEzLjc1QzE0Ljg1NDYgMTUuNzUgMTUuNzUgMTQuODU0NiAxNS43NSAxMy43NVY0LjI1QzE1Ljc1IDMuMTQ1NDMgMTQuODU0NiAyLjI1IDEzLjc1IDIuMjVaIiBzdHJva2U9IiMxNTE2MUQiLz4KPHBhdGggZD0iTTYuMTAwMSAxMS44VjYuMTk5OTUiIHN0cm9rZT0iIzE1MTYxRCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik05IDEzVjUiIHN0cm9rZT0iIzE1MTYxRCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMS44OTk5IDEwLjZWNy40MDAwMiIgc3Ryb2tlPSIjMTUxNjFEIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg=="
    }, 46547: function (M, e, t) {
        t(97458), t(52983), e.Z = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjc1IDIuMjVINC4yNUMzLjE0NTQzIDIuMjUgMi4yNSAzLjE0NTQzIDIuMjUgNC4yNVYxMy43NUMyLjI1IDE0Ljg1NDYgMy4xNDU0MyAxNS43NSA0LjI1IDE1Ljc1SDEzLjc1QzE0Ljg1NDYgMTUuNzUgMTUuNzUgMTQuODU0NiAxNS43NSAxMy43NVY0LjI1QzE1Ljc1IDMuMTQ1NDMgMTQuODU0NiAyLjI1IDEzLjc1IDIuMjVaIiBzdHJva2U9IiMxNTE2MUQiLz4KPHBhdGggZD0iTTEyLjUgNi41QzEzLjA1MjMgNi41IDEzLjUgNi4wNTIyOCAxMy41IDUuNUMxMy41IDQuOTQ3NzIgMTMuMDUyMyA0LjUgMTIuNSA0LjVDMTEuOTQ3NyA0LjUgMTEuNSA0Ljk0NzcyIDExLjUgNS41QzExLjUgNi4wNTIyOCAxMS45NDc3IDYuNSAxMi41IDYuNVoiIGZpbGw9IiMxNTE2MUQiLz4KPHBhdGggZD0iTTQuMTAwMSAxMy42TDcuMTUwMSAxMC4yNUw5LjIwMDEgMTIuMjVMMTAuOTAwMSAxMC40NUwxNC4xMDAxIDEzLjYiIHN0cm9rZT0iIzE1MTYxRCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
    }, 70668: function (M, e, t) {
        t(97458), t(52983), e.Z = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjc1IDIuMjVINC4yNUMzLjE0NTQzIDIuMjUgMi4yNSAzLjE0NTQzIDIuMjUgNC4yNVYxMy43NUMyLjI1IDE0Ljg1NDYgMy4xNDU0MyAxNS43NSA0LjI1IDE1Ljc1SDEzLjc1QzE0Ljg1NDYgMTUuNzUgMTUuNzUgMTQuODU0NiAxNS43NSAxMy43NVY0LjI1QzE1Ljc1IDMuMTQ1NDMgMTQuODU0NiAyLjI1IDEzLjc1IDIuMjVaIiBzdHJva2U9IiMxNTE2MUQiLz4KPHBhdGggZD0iTTUgNS42OTk5NUgxMyIgc3Ryb2tlPSIjMTUxNjFEIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTkgNS45MDAwMlYxMyIgc3Ryb2tlPSIjMTUxNjFEIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg=="
    }, 92269: function (M, e, t) {
        t(97458), t(52983), e.Z = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjc1IDIuMjVINC4yNUMzLjE0NTQzIDIuMjUgMi4yNSAzLjE0NTQzIDIuMjUgNC4yNVYxMy43NUMyLjI1IDE0Ljg1NDYgMy4xNDU0MyAxNS43NSA0LjI1IDE1Ljc1SDEzLjc1QzE0Ljg1NDYgMTUuNzUgMTUuNzUgMTQuODU0NiAxNS43NSAxMy43NVY0LjI1QzE1Ljc1IDMuMTQ1NDMgMTQuODU0NiAyLjI1IDEzLjc1IDIuMjVaIiBzdHJva2U9IiMxNTE2MUQiLz4KPHBhdGggZD0iTTcuMjAwMiA2LjgwODAxQzcuMjAwMiA2LjQxNDA2IDcuNjM0NiA2LjE3NDg1IDcuOTY3NTIgNi4zODU0N0wxMS40MzIzIDguNTc3NDlDMTEuNzQyNSA4Ljc3Mzc2IDExLjc0MjUgOS4yMjYyOSAxMS40MzIzIDkuNDIyNTZMNy45Njc1MiAxMS42MTQ2QzcuNjM0NiAxMS44MjUyIDcuMjAwMiAxMS41ODYgNy4yMDAyIDExLjE5MlY2LjgwODAxWiIgc3Ryb2tlPSIjMTUxNjFEIi8+Cjwvc3ZnPgo="
    }, 48417: function (M, e, t) {
        t.d(e, {
            df: function () {
                return T
            }, an: function () {
                return L
            }, ar: function () {
                return x
            }
        });
        var n = t(44023), i = t(3149), a = t(82111), c = t(23144), u = t(98546);
        t(12590), t(98347), t(66818), t(91813), t(46643);
        var N = t(98959), D = t(76693), r = [{
                label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                value: "\u6587\u672C\u3001\u56FE\u50CF\u3001\u89C6\u9891 / \u6587\u672C"
            }, {
                label: "\u63A8\u7406\u8F93\u5165",
                value: "\u4EE5\u63A7\u5236\u53F0\u4E3A\u51C6"
            }, {label: "\u63A8\u7406\u8F93\u51FA", value: "\u4EE5\u63A7\u5236\u53F0\u4E3A\u51C6"}], l = [{
                label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                value: "\u6587\u672C\u3001\u56FE\u50CF\u3001\u89C6\u9891 / \u89C6\u9891"
            }, {
                label: "\u6A21\u578B\u9650\u5236",
                value: "\u6309\u6A21\u578B\u7248\u672C\u914D\u7F6E"
            }, {label: "\u6A21\u578B\u4EF7\u683C", value: "\u6309\u63A7\u5236\u53F0\u8BA1\u8D39"}], o = [{
                label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                value: "\u6587\u672C\u3001\u56FE\u50CF / \u56FE\u50CF"
            }, {
                label: "\u6A21\u578B\u9650\u5236",
                value: "\u6309\u6A21\u578B\u7248\u672C\u914D\u7F6E"
            }, {label: "\u6A21\u578B\u4EF7\u683C", value: "\u6309\u63A7\u5236\u53F0\u8BA1\u8D39"}], I = [{
                label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                value: "\u97F3\u9891\u3001\u6587\u672C / \u6587\u672C\u3001\u97F3\u9891"
            }, {
                label: "\u6A21\u578B\u9650\u5236",
                value: "\u6309\u6A21\u578B\u7248\u672C\u914D\u7F6E"
            }, {label: "\u6A21\u578B\u4EF7\u683C", value: "\u6309\u63A7\u5236\u53F0\u8BA1\u8D39"}], j = t(94720),
            g = (0, D.dU)(), z = g === D.tE.BOE || g === D.tE.STABLE, y = (0, a._)((0, i._)({}, j.yK), {
                title: j.yK.title,
                primaryCta: (0, a._)((0, i._)({}, j.yK.primaryCta), {text: j.yK.primaryCta.text}),
                secondaryCta: (0, a._)((0, i._)({}, j.yK.secondaryCta), {text: j.yK.secondaryCta.text})
            }), A = {
                ensureLogin: !0,
                ensureAuth: !1,
                defaultTheme: "default",
                defaultPaySuccessConfig: {hideConsoleButton: !0}
            }, T = {
                codingPlan: {title: "", textSub: []},
                flagshipModels: [{
                    chip: "Doubao-Seed-2.1-Pro",
                    name: "\u8C46\u5305\u5927\u6A21\u578B 2.1 Pro\u9996\u9875\u7528\u7684",
                    tag: "\u6307\u4EE4\u7CBE\u51C6 | \u8FD0\u52A8\u8868\u73B0\u5927\u5E45\u63D0\u5347",
                    specs: [{
                        label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                        value: "\u6587\u672C\u3001\u56FE\u50CF / \u6587\u672C"
                    }, {
                        label: "\u63A8\u7406\u8F93\u5165",
                        value: "6.00 \u5143/\u767E\u4E07 tokens"
                    }, {label: "\u63A8\u7406\u8F93\u51FA", value: "30.00 \u5143/\u767E\u4E07 tokens"}]
                }, {
                    chip: "Doubao-Seedance-2.0",
                    name: "\u8C46\u5305\u89C6\u9891\u751F\u6210\u6A21\u578B 2.0",
                    tag: "\u6307\u4EE4\u7CBE\u51C6 | \u8FD0\u52A8\u8868\u73B0\u5927\u5E45\u63D0\u5347",
                    specs: [{
                        label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                        value: "\u6587\u672C\u3001\u56FE\u50CF\u3001\u97F3\u9891\u3001\u89C6\u9891 / \u89C6\u9891"
                    }, {
                        label: "\u5305\u542B\u89C6\u9891\u8F93\u5165",
                        value: "28 \u5143/\u767E\u4E07 tokens"
                    }, {label: "\u4E0D\u542B\u89C6\u9891\u8F93\u5165", value: "46 \u5143/\u767E\u4E07 tokens"}]
                }, {
                    chip: "Doubao-Seedream-5.0",
                    name: "\u8C46\u5305\u56FE\u50CF\u521B\u4F5C\u6A21\u578B 5.0",
                    tag: "\u66F4\u667A\u80FD\u53EF\u63A7\u521B\u4F5C | \u642D\u8F7D\u8054\u7F51\u68C0\u7D22",
                    specs: [{
                        label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                        value: "\u6587\u672C\u3001\u56FE\u50CF / \u56FE\u50CF"
                    }, {label: "\u6587\u751F\u56FE", value: "0.22 \u5143/\u5F20"}, {
                        label: "\u56FE\u751F\u56FE",
                        value: "0.22 \u5143/\u5F20"
                    }]
                }, {
                    chip: "Doubao-Speech-Recognition-2.0",
                    name: "\u8C46\u5305\u8BED\u97F3\u8BC6\u522B\u6A21\u578B 2.0",
                    tag: "\u6DF7\u5408\u8BED\u8A00\u7CBE\u51C6\u8BC6\u522B | \u97F3\u9891\u6DF1\u5EA6\u89E3\u6790",
                    specs: [{
                        label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                        value: "\u97F3\u9891 / \u6587\u672C"
                    }, {
                        label: "\u5F55\u97F3\u6587\u4EF6\u8BC6\u522B",
                        value: "0.8 \u5143/\u5C0F\u65F6"
                    }, {label: "\u6D41\u5F0F\u8BED\u97F3\u8BC6\u522B", value: "1.0 \u5143/\u5C0F\u65F6"}]
                }],
                modelCatalog: [{
                    title: "\u8BED\u8A00\u6A21\u578B",
                    sub: "\u8986\u76D6\u4EE3\u7801\u3001\u591A\u6A21\u6001\u7406\u89E3\u3001\u7ED3\u6784\u5316\u751F\u6210\u4E0E\u6210\u672C\u4F18\u5316\u7B49\u573A\u666F",
                    models: [{
                        chip: "Doubao-Seed-2.1-Pro",
                        name: "\u8C46\u5305\u5927\u6A21\u578B 2.1 Pro",
                        tag: "\u6307\u4EE4\u7CBE\u51C6 | \u8FD0\u52A8\u8868\u73B0\u5927\u5E45\u63D0\u5347",
                        specs: r
                    }, {
                        chip: "Doubao-Seed-2.1-Turbo",
                        name: "\u8C46\u5305\u5927\u6A21\u578B 2.1 Turbo",
                        tag: "\u6548\u679C\u4E0E\u6210\u672C\u5747\u8861\uFF0C\u5168\u9762\u5347\u7EA7\u7F16\u7A0B\u3001\u667A\u80FD\u4F53\u4E0E\u591A\u6A21\u6001\u80FD\u529B",
                        specs: r
                    }, {
                        chip: "Doubao-Seed-Evolving",
                        name: "\u8C46\u5305\u5927\u6A21\u578B Evolving",
                        tag: "\u5468\u7EA7\u5347\u7EA7\uFF0CAgent \u80FD\u529B\u6301\u7EED\u8FDB\u5316",
                        specs: r
                    }, {
                        chip: "Doubao-Seed-2.0-Lite",
                        name: "\u8C46\u5305\u5927\u6A21\u578B 2.0 Lite",
                        tag: "\u8C46\u5305\u9996\u6B3E\u5168\u6A21\u6001\u7406\u89E3\u6A21\u578B\uFF0C\u97F3\u89C6\u56FE\u6587\u7EDF\u4E00\u7406\u89E3",
                        specs: r
                    }, {
                        chip: "Doubao-Seed-2.0-Mini",
                        name: "\u8C46\u5305\u5927\u6A21\u578B 2.0 Mini",
                        tag: "\u4F4E\u65F6\u5EF6\u3001\u4F4E\u6210\u672C\uFF0C\u5177\u5907\u56DB\u6863\u4F4D\u601D\u8003\u4E0E\u591A\u6A21\u6001\u7406\u89E3\u80FD\u529B",
                        specs: r
                    }]
                }, {
                    title: "\u89C6\u9891\u751F\u6210\u6A21\u578B",
                    sub: "\u652F\u6301\u591A\u6A21\u6001\u53C2\u8003\u3001\u89C6\u9891\u7F16\u8F91\u3001\u89C6\u9891\u5EF6\u957F\u548C\u53D9\u4E8B\u751F\u6210",
                    models: [{
                        chip: "Doubao-Seedance-2.0",
                        name: "\u8C46\u5305\u89C6\u9891\u751F\u6210\u6A21\u578B 2.0",
                        tag: "\u591A\u6A21\u6001\u53C2\u8003\uFF5C\u89C6\u9891\u7F16\u8F91\uFF5C\u89C6\u9891\u5EF6\u957F",
                        specs: l
                    }, {
                        chip: "Doubao-Seedance-1.5-Pro",
                        name: "\u8C46\u5305\u89C6\u9891\u751F\u6210\u6A21\u578B 1.5 Pro",
                        tag: "\u97F3\u753B\u540C\u6B65\uFF5C\u6307\u4EE4\u9075\u5FAA\uFF5C\u53D9\u4E8B\u5F20\u529B",
                        specs: l
                    }, {
                        chip: "Doubao-Seedance-1.0-Pro",
                        name: "\u8C46\u5305\u89C6\u9891\u751F\u6210\u6A21\u578B 1.0 Pro",
                        tag: "\u9996\u5C3E\u5E27\uFF5C\u591A\u955C\u5934\uFF5C\u6307\u4EE4\u9075\u5FAA",
                        specs: l
                    }, {
                        chip: "Doubao-Seedance-1.0-Pro-Fast",
                        name: "\u8C46\u5305\u89C6\u9891\u751F\u6210\u6A21\u578B 1.0 Pro Fast",
                        tag: "\u66F4\u5FEB\u901F\u5EA6\uFF5C\u6210\u672C\u4F18\u5316",
                        specs: l
                    }]
                }, {
                    title: "\u56FE\u50CF\u751F\u6210\u6A21\u578B",
                    sub: "\u9762\u5411\u5F3A\u610F\u56FE\u7406\u89E3\u3001\u5199\u5B9E\u6548\u679C\u3001\u901A\u7528\u751F\u56FE\u4E0E\u6CDB\u5A31\u4E50\u573A\u666F",
                    models: [{
                        chip: "Doubao-Seedream-5.0-Lite",
                        name: "\u8C46\u5305\u56FE\u50CF\u521B\u4F5C\u6A21\u578B 5.0 Lite",
                        tag: "\u5F3A\u610F\u56FE\u7406\u89E3\uFF5C\u6548\u679C\u6700\u4F73\uFF5C\u751F\u4EA7\u529B\u5DE5\u5177",
                        specs: o
                    }, {
                        chip: "Doubao-Seedream-4.5",
                        name: "\u8C46\u5305\u56FE\u50CF\u521B\u4F5C\u6A21\u578B 4.5",
                        tag: "\u5199\u5B9E\u6548\u679C\uFF5C\u9AD8\u4E00\u81F4\u6027\uFF5C\u901A\u7528\u751F\u56FE",
                        specs: o
                    }, {
                        chip: "Doubao-Seedream-4.0",
                        name: "\u8C46\u5305\u56FE\u50CF\u521B\u4F5C\u6A21\u578B 4.0",
                        tag: "\u751F\u56FE\u8FC5\u901F\uFF5C\u4F4E\u6210\u672C\uFF5C\u6CDB\u5A31\u4E50",
                        specs: o
                    }]
                }, {
                    title: "\u8BED\u97F3\u6A21\u578B",
                    sub: "\u8986\u76D6\u8BED\u97F3\u5408\u6210\u3001\u8BC6\u522B\u3001\u590D\u523B\u3001\u5B9E\u65F6\u8BED\u97F3\u3001\u64AD\u5BA2\u548C\u540C\u58F0\u4F20\u8BD1",
                    models: [{
                        chip: "Doubao-Audio-Generation-1.0",
                        name: "Doubao-\u97F3\u9891\u751F\u6210-1.0",
                        tag: "\u5168\u8981\u7D20\u5F71\u89C6\u7EA7\u97F3\u9891\u751F\u6210",
                        specs: I
                    }, {
                        chip: "Doubao-Voice-Podcast",
                        name: "Doubao-\u8BED\u97F3\u64AD\u5BA2",
                        tag: "\u5BF9\u8BDD\u81EA\u7136\uFF0C\u79D2\u7EA7\u521B\u4F5C",
                        specs: I
                    }, {
                        chip: "Doubao-Streaming-Speech-Recognition",
                        name: "Doubao-\u6D41\u5F0F\u8BED\u97F3\u8BC6\u522B",
                        tag: "\u652F\u6301\u6D41\u5F0F\u8BED\u97F3\u8BC6\u522B",
                        specs: I
                    }, {
                        chip: "Doubao-Voice-Design",
                        name: "Doubao-\u97F3\u8272\u8BBE\u8BA1",
                        tag: "\u652F\u6301\u901A\u8FC7\u6587\u672C\u6216\u56FE\u7247\u5FEB\u901F\u751F\u6210\u5B9A\u5236\u5316\u97F3\u8272",
                        specs: I
                    }, {
                        chip: "Doubao-Recording-Recognition-2.0",
                        name: "Doubao-\u5F55\u97F3\u6587\u4EF6\u8BC6\u522B2.0",
                        tag: "\u652F\u6301\u591A\u6A21\u6001\u4FE1\u606F\u7406\u89E3\u80FD\u529B",
                        specs: I
                    }, {
                        chip: "Doubao-Realtime-Voice",
                        name: "Doubao-\u5B9E\u65F6\u8BED\u97F3\u4EA4\u4E92",
                        tag: "\u66F4\u62DF\u4EBA\u548C\u66F4\u4F4E\u65F6\u5EF6\u7684\u8BED\u97F3\u5BF9\u8BDD\u6548\u679C",
                        specs: I
                    }]
                }],
                agentPlans: [{
                    tier: "Small",
                    price: "9.90",
                    unit: "\u5143/\u6708",
                    listPrice: "40.00 \u5143/\u6708",
                    badge: "",
                    featured: !1,
                    features: ["\u9002\u5408\u4E2A\u4EBA\u4F53\u9A8C\u4E0E\u8F7B\u91CF\u5F00\u53D1", "\u6BCF\u6708 20,000 Agent \u71C3\u6599\u503C", "\u4E3B\u6D41\u70ED\u95E8\u7F16\u7A0B\u6A21\u578B\u96C6\u5408", "Seedream 5.0 Lite\u3001\u5411\u91CF\u5316\u6A21\u578B", "\u8054\u7F51\u641C\u7D22\u4E13\u5C5E Harness \u5F00\u7BB1\u5373\u7528"]
                }, {
                    tier: "Medium",
                    price: "49.90",
                    unit: "\u5143/\u6708",
                    listPrice: "200.00 \u5143/\u6708",
                    badge: "\u9650\u65F6\u7279\u60E0",
                    featured: !0,
                    features: ["Agent \u63A2\u7D22\u4E0E\u5E94\u7528", "\u514D\u8D39\u8D60\u9001 ArkClaw \u8F7B\u91CF\u7248", "\u65E5\u5E38\u9AD8\u9891\u989D\u5EA6 5\xd7 Small \u7528\u91CF", "\u4EAB\u53D7 Small \u5957\u9910\u6240\u6709\u6743\u76CA", "\u9886\u5148\u652F\u6301 Seedance 2.0 \u7CFB\u5217", "\u591A\u6A21\u6001\u53CA\u8054\u7F51\u641C\u7D22 Harness \u5347\u7EA7"]
                }, {
                    tier: "Large",
                    price: "500.00",
                    unit: "\u5143/\u6708",
                    listPrice: "",
                    badge: "",
                    featured: !1,
                    features: ["\u591A\u6A21\u6001 & Harness \u6DF1\u5EA6\u5E94\u7528", "\u514D\u8D39\u8D60\u9001 ArkClaw \u8F7B\u91CF\u7248", "\u590D\u6742\u91CD\u5EA6\u5F00\u53D1 12.5\xd7 Small \u7528\u91CF", "\u4EAB\u53D7 Medium \u5957\u9910\u6240\u6709\u6743\u76CA", "\u9886\u5148\u652F\u6301 Seedance 2.0", "\u9AD8\u9636\u591A\u6A21\u6001\u53CA\u8054\u7F51\u641C\u7D22 Harness"]
                }, {
                    tier: "Max",
                    price: "1000.00",
                    unit: "\u5143/\u6708",
                    listPrice: "",
                    badge: "",
                    featured: !1,
                    features: ["\u591A\u6A21\u6001 & Harness \u751F\u4EA7\u7EA7\u5E94\u7528", "\u514D\u8D39\u8D60\u9001 ArkClaw \u8F7B\u91CF\u7248", "\u9876\u914D\u65D7\u8230\u989D\u5EA6 25\xd7 Small \u7528\u91CF", "\u4EAB\u53D7 Large \u5957\u9910\u6240\u6709\u6743\u76CA", "\u9886\u5148\u652F\u6301 Seedance 2.0 \u7CFB\u5217", "\u6781\u81F4\u591A\u6A21\u6001\u53CA\u8054\u7F51\u641C\u7D22 Harness"]
                }],
                install: {
                    textSub: "",
                    cardTitle: "",
                    installCommand: "",
                    mainButton: "",
                    mainLink: "",
                    secondaryButton: "",
                    secondaryLink: "",
                    proofs: []
                },
                codingPlans: [{
                    tier: "Lite Plan",
                    price: "9.90",
                    listPrice: "40.00 \u5143/\u6708",
                    featured: !1,
                    features: ["\u6EE1\u8DB3\u4E2A\u4EBA\u5F00\u53D1\u8005\u8F7B\u91CF\u5316\u9700\u6C42", "\u6A21\u578B\uFF1ADoubao\u3001GLM\u3001DeepSeek\u3001Kimi\u3001MiniMax \u7B49", "\u9002\u914D\uFF1A\u652F\u6301\u81EA\u7531\u5207\u6362\u6A21\u578B\uFF0C\u6216\u5F00\u542F Auto \u6A21\u5F0F", "\u5DE5\u5177\uFF1AClaude Code\u3001Cursor \u7B49\u4E3B\u6D41\u7F16\u7A0B\u5DE5\u5177"]
                }, {
                    tier: "Pro Plan",
                    price: "49.90",
                    listPrice: "200.00 \u5143/\u6708",
                    featured: !0,
                    features: ["5 \u500D\u4E8E Lite \u5957\u9910\u7684\u7528\u91CF", "\u80FD\u529B\uFF1A\u4EAB\u53D7 Lite \u5957\u9910\u7684\u6240\u6709\u80FD\u529B\u548C\u6743\u76CA", "\u9002\u914D\uFF1A\u6EE1\u8DB3\u9AD8\u9636\u7528\u6237\u7684\u5927\u89C4\u6A21\u7F16\u7A0B\u9700\u6C42", "\u5347\u7EA7\uFF1A\u7528\u91CF\u4E3A Claude Max \u6570\u500D\uFF0CLite \u5957\u9910 5 \u500D"]
                }],
                codingSubContent: [],
                scenarios: [["\u6A21\u578B API", "\u8986\u76D6\u6587\u672C\u3001\u56FE\u50CF\u3001\u89C6\u9891\u3001\u8BED\u97F3\u3001\u591A\u6A21\u6001\u63A8\u7406\uFF0C\u7EDF\u4E00 API Key \u8C03\u7528\u5E76\u6309\u9700\u6269\u5C55\u3002"], ["\u5F00\u53D1\u5DE5\u5177\u589E\u5F3A", "Codex\u3001Claude Code\u3001TRAE\u3001OpenClaw \u7B49\u5DE5\u5177\u901A\u8FC7\u6280\u80FD\u5305\u63A5\u5165\u706B\u5C71\u5F15\u64CE\u6A21\u578B\u80FD\u529B\u3002"], ["Agent Harness", "\u8054\u7F51\u641C\u7D22\u3001\u591A\u6A21\u6001\u5904\u7406\u3001\u5411\u91CF\u5316\u6A21\u578B\u548C\u5E94\u7528\u6A21\u677F\u5F00\u7BB1\u5373\u7528\uFF0C\u652F\u6491 Agent \u63A2\u7D22\u4E0E\u751F\u4EA7\u5316\u3002"]].map(function (M) {
                    var e = (0, c._)(M, 2);
                    return {title: e[0], description: e[1]}
                }),
                docs: [["\u5FEB\u901F\u5F00\u59CB", "\u5B89\u88C5 CLI\u3001\u521B\u5EFA API Key\u3001\u9009\u62E9\u6A21\u578B\u5E76\u5B8C\u6210\u9996\u6B21\u8C03\u7528\u3002"], ["\u5BF9\u8BDD API", "\u517C\u5BB9\u4E3B\u6D41 chat completions \u5F62\u6001\uFF0C\u652F\u6301\u591A\u8F6E\u4E0A\u4E0B\u6587\u548C\u5DE5\u5177\u8C03\u7528\u3002"], ["\u7528\u91CF\u4E0E\u8D26\u5355", "\u67E5\u770B API\u3001Agent Plan\u3001Coding Plan \u7684\u6D88\u8017\u3001\u8BA2\u9605\u548C\u4F59\u989D\u3002"]].map(function (M) {
                    var e = (0, c._)(M, 2);
                    return {title: e[0], description: e[1]}
                }),
                hero: y,
                flagshipModelsSection: j.nW,
                fastPayReturnResumeData: A,
                abTestInfo: null
            }, s = function (M) {
                var e, t, n, c, u, N, D, r, l, o, I = {
                    title: (null == M || null == (e = M.install) ? void 0 : e.cardTitle) || y.title,
                    subtitle: (null == M || null == (t = M.install) ? void 0 : t.textSub) || y.subtitle,
                    command: (null == M || null == (n = M.install) ? void 0 : n.installCommand) || "npm i @volcengine/ark-cli@latest -g",
                    copyIcon: y.copyIcon,
                    primaryCta: {
                        text: (null == M || null == (c = M.install) ? void 0 : c.mainButton) || y.primaryCta.text,
                        href: (null == M || null == (u = M.install) ? void 0 : u.mainLink) || y.primaryCta.href
                    },
                    secondaryCta: {
                        text: (null == M || null == (N = M.install) ? void 0 : N.secondaryButton) || y.secondaryCta.text,
                        href: (null == M || null == (D = M.install) ? void 0 : D.secondaryLink) || y.secondaryCta.href
                    },
                    cliTips: (null == M || null == (r = M.install) ? void 0 : r.cliTips) || y.cliTips,
                    proofs: (null == M || null == (l = M.install) ? void 0 : l.proofs) || y.proofs,
                    jmpProofs: (null == M || null == (o = M.install) ? void 0 : o.jmpProofs) || y.jmpProofs
                }, g = (null == M ? void 0 : M.indexModel) ? {
                    id: "models",
                    title: M.indexModel.cardTitle || j.nW.title,
                    subtitle: M.indexModel.textSub || j.nW.subtitle,
                    models: M.indexModel.modelCrads || j.nW.models,
                    apiButton: M.indexModel.apiButton || j.nW.apiButton,
                    promos: M.squareBenefitPromo || j.nW.promos
                } : j.nW;
                return (0, a._)((0, i._)({}, T), {
                    codingPlanSection: null == M ? void 0 : M.codingPlanSection,
                    codingPlan: (null == M ? void 0 : M.codingPlan) || T.codingPlan,
                    agentPlanSection: null == M ? void 0 : M.agentPlanSection,
                    fastPayReturnResumeData: (null == M ? void 0 : M.fastPayReturnResumeData) || A,
                    install: (null == M ? void 0 : M.install) || T.install,
                    hero: I,
                    flagshipModelsSection: g
                })
            }, d = function () {
                return z ? "https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_950/bee_prod_950_bee_publish_17348.json" : "https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_950/bee_prod_950_bee_publish_17390.json"
            }, L = function (M) {
                return (0, n._)(function () {
                    var e, t, n, c;
                    return (0, u._)(this, function (u) {
                        switch (u.label) {
                            case 0:
                                if (!z) return [3, 5];
                                u.label = 1;
                            case 1:
                                return u.trys.push([1, 3, , 4]), [4, (0, N.W)(d())];
                            case 2:
                                return [2, s(u.sent())];
                            case 3:
                                return console.error("[home] getHomePageData CDN request error, fallback to default:", u.sent()), [3, 4];
                            case 4:
                                return [2, T];
                            case 5:
                                e = "https://".concat((0, D.WH)().aiSite, "/api/bee/getJson?key=AiHub"), t = (0, a._)((0, i._)({}, M), {"x-use-bff-version": "1"}), u.label = 6;
                            case 6:
                                return u.trys.push([6, 8, , 9]), [4, (0, N.W)(e, {headers: t})];
                            case 7:
                                if (c = null == (n = u.sent()) ? void 0 : n.Result) return [2, s(c)];
                                return [3, 9];
                            case 8:
                                return console.error("[home] getHomePageData TCC request error, fallback to CDN:", u.sent()), [3, 9];
                            case 9:
                                return u.trys.push([9, 11, , 12]), [4, (0, N.W)(d())];
                            case 10:
                                return [2, s(u.sent())];
                            case 11:
                                return console.error("[home] getHomePageData CDN request error, fallback to default:", u.sent()), [3, 12];
                            case 12:
                                return [2, T]
                        }
                    })
                })()
            };

        function x(M) {
            return {cliType: "a"}
        }
    }, 94720: function (M, e, t) {
        t.d(e, {
            nW: function () {
                return o
            }, yK: function () {
                return r
            }, g8: function () {
                return I
            }
        }), t(97458), t(52983);
        var n = t(20745), i = t(64877), a = t(11193), c = t(65401), u = t(46547), N = t(70668), D = t(92269), r = {
            title: "\u8C46\u5305\u5927\u6A21\u578B API \u670D\u52A1\u5E73\u53F0--",
            subtitle: "\u5168\u6808 AI \u6A21\u578B\u5373\u5F00\u5373\u7528\uFF0C\u52A9\u529B\u5F00\u53D1\u8005\u5FEB\u901F\u63A5\u5165\u3001\u9AD8\u6548\u8C03\u7528\u5404\u7C7B\u6A21\u578B\u80FD\u529B\u642D\u5EFA\u5E94\u7528--",
            command: "npx -y @volcengine/skills-setup@latest--",
            cliIcon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNOS4xNjYwMiAxNUgxNy40OTkzVjE2LjY2NjdIOS4xNjYwMlYxNVoiIGZpbGw9IiMwQzBEMEUiLz4KICA8cGF0aCBkPSJNNi44MTA2IDEwLjAwMTZMMi41NzIyNyA1Ljc2MzI5TDMuNzUwNiA0LjU4NDk2TDkuMTY3MjcgMTAuMDAxNkwzLjgyMjI3IDE1LjM0NjZMMi42NDM5NCAxNC4xNjgzTDYuODEwNiAxMC4wMDE2WiIgZmlsbD0iIzBDMEQwRSIvPgo8L3N2Zz4K",
            copyIcon: i.Z,
            primaryCta: {text: "API \u63A5\u5165", href: "#models"},
            secondaryCta: {text: "\u8BA2\u9605\u5957\u9910", href: "#agent-plan"},
            cliTips: "# \u5728\u7EC8\u7AEF\u6216 Agent \u4E2D\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u7528 Skills \u8F85\u52A9\u5B8C\u6210\u9009\u578B\u3001\u5F00\u901A\u3001\u8FD0\u7EF4\u4E0E\u90E8\u7F72",
            proofs: [{
                icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDE1LjIwODNWMTcuNzA4M00xMi43MDgzIDUuMjA4MjlWMi4yOTE2M003LjI5MTY4IDUuMjA4MjlWMi4yOTE2M00xNi4wNDE3IDExLjg3NVY2Ljg3NDk2QzE2LjA0MTcgNS45NTQ0OCAxNS4yOTU1IDUuMjA4MjkgMTQuMzc1IDUuMjA4MjlINS42MjUwMUM0LjcwNDU0IDUuMjA4MjkgMy45NTgzNCA1Ljk1NDQ4IDMuOTU4MzQgNi44NzQ5NkwzLjk1ODM0IDExLjg3NUMzLjk1ODM0IDEzLjcxNTkgNS40NTA3MyAxNS4yMDgzIDcuMjkxNjggMTUuMjA4M0gxMi43MDgzQzE0LjU0OTMgMTUuMjA4MyAxNi4wNDE3IDEzLjcxNTkgMTYuMDQxNyAxMS44NzVaIiBzdHJva2U9IiMxQUQ5ODAiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=",
                label: "\u4E00\u952E\u63A5\u5165 AI \u4E91--",
                type: "primary"
            }, {
                icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjEyNzkgNi40NjA5NFYxMy41MzgxTDEwIDE3LjA3NjJMMy44NzIwNyAxMy41MzgxVjYuNDYwOTRMMTAgMi45MjI4NUwxNi4xMjc5IDYuNDYwOTRaIiBzdHJva2U9IiMxQUQ5ODAiIHN0cm9rZS13aWR0aD0iMS42Ii8+CjxwYXRoIGQ9Ik03LjUgOS44MTQ4Nkw5LjM2MDQ3IDExLjY2NjdMMTIuNSA4LjMzMzM3IiBzdHJva2U9IiMxQUQ5ODAiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=",
                label: "\u90E8\u7F72\u8FD0\u7EF4\u81EA\u95ED\u73AF",
                type: "primary"
            }, {
                icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMTY2OTkgMTVIMTcuNTAwM1YxNi42NjY3SDkuMTY2OTlWMTVaIiBmaWxsPSIjMUFEOTgwIi8+CjxwYXRoIGQ9Ik02LjgwOTYyIDEwLjAwMTZMMi41NzEyOSA1Ljc2MzI5TDMuNzQ5NjIgNC41ODQ5Nkw5LjE2NjI5IDEwLjAwMTZMMy44MjEyOSAxNS4zNDY2TDIuNjQyOTYgMTQuMTY4M0w2LjgwOTYyIDEwLjAwMTZaIiBmaWxsPSIjMUFEOTgwIi8+Cjwvc3ZnPgo=",
                label: "\u652F\u6301\u4E3B\u6D41 Agent",
                type: "primary"
            }],
            jmpProofs: [{
                icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMTAgOC4xMzMyNUMxMCA2LjQ1MzA5IDEwIDUuNjEzMDIgMTAuMzI3IDQuOTcxMjhDMTAuNjE0NiA0LjQwNjc5IDExLjA3MzUgMy45NDc4NSAxMS42MzggMy42NjAyM0MxMi4yNzk4IDMuMzMzMjUgMTMuMTE5OCAzLjMzMzI1IDE0LjggMy4zMzMyNUgxNS4xQzE1Ljk0MDEgMy4zMzMyNSAxNi4zNjAxIDMuMzMzMjUgMTYuNjgxIDMuNDk2NzRDMTYuOTYzMiAzLjY0MDU1IDE3LjE5MjcgMy44NzAwMiAxNy4zMzY1IDQuMTUyMjdDMTcuNSA0LjQ3MzEzIDE3LjUgNC44OTMxNyAxNy41IDUuNzMzMjVWMTIuMTgzM0MxNy41IDEzLjAyMzMgMTcuNSAxMy40NDM0IDE3LjMzNjUgMTMuNzY0MkMxNy4xOTI3IDE0LjA0NjUgMTYuOTYzMiAxNC4yNzYgMTYuNjgxIDE0LjQxOThDMTYuMzYwMSAxNC41ODMzIDE1Ljk0MDEgMTQuNTgzMyAxNS4xIDE0LjU4MzNIMTQuMDY4OUMxMy4xMjk3IDE0LjU4MzMgMTIuNjYwMSAxNC41ODMzIDEyLjIzMzggMTQuNzEyN0MxMS44NTY0IDE0LjgyNzMgMTEuNTA1NCAxNS4wMTUyIDExLjIwMDcgMTUuMjY1NkMxMC44NTY1IDE1LjU0ODUgMTAuNTk2IDE1LjkzOTIgMTAuMDc1IDE2LjcyMDdMMTAgMTYuODMzM0w5LjkyNDk2IDE2LjcyMDdDOS40MDM5OCAxNS45MzkyIDkuMTQzNDkgMTUuNTQ4NSA4Ljc5OTMzIDE1LjI2NTZDOC40OTQ2NCAxNS4wMTUyIDguMTQzNTcgMTQuODI3MyA3Ljc2NjIgMTQuNzEyN0M3LjMzOTk0IDE0LjU4MzMgNi44NzAzMyAxNC41ODMzIDUuOTMxMTIgMTQuNTgzM0g0LjlDNC4wNTk5MiAxNC41ODMzIDMuNjM5ODggMTQuNTgzMyAzLjMxOTAxIDE0LjQxOThDMy4wMzY3NyAxNC4yNzYgMi44MDczIDE0LjA0NjUgMi42NjM0OSAxMy43NjQyQzIuNSAxMy40NDM0IDIuNSAxMy4wMjMzIDIuNSAxMi4xODMzVjUuNzMzMjVDMi41IDQuODkzMTcgMi41IDQuNDczMTMgMi42NjM0OSA0LjE1MjI3QzIuODA3MyAzLjg3MDAyIDMuMDM2NzcgMy42NDA1NSAzLjMxOTAxIDMuNDk2NzRDMy42Mzk4OCAzLjMzMzI1IDQuMDU5OTIgMy4zMzMyNSA0LjkgMy4zMzMyNUg1LjJDNi44ODAxNiAzLjMzMzI1IDcuNzIwMjQgMy4zMzMyNSA4LjM2MTk3IDMuNjYwMjNDOC45MjY0NiAzLjk0Nzg1IDkuMzg1NCA0LjQwNjc5IDkuNjczMDIgNC45NzEyOEMxMCA1LjYxMzAyIDEwIDYuNDUzMDkgMTAgOC4xMzMyNVpNMTAgMTYuODMzM1Y4LjEzMzI1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",
                label: "\u66F4\u591A\u80FD\u529B",
                href: "https://docs.volcengine.com/docs/88782",
                type: "more"
            }, {
                icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNOS43NDQyOCAxLjk2NTA5QzUuNjA3MDggMS45NjUwOSAxLjc0NjU4IDUuNjU3MzEgMS43NDY1OCAxMC4yMTFDMS43NDY1OCAxMy44NTQ5IDQuMjMzMTYgMTYuOTQ1MSA3LjUwOTU4IDE4LjAzNTNDNy45MjIyOCAxOC4xMTE4IDguMTM1MzUgMTcuODU2MSA4LjEzNTM1IDE3LjYzODdDOC4xMzUzNSAxNy40NDE0IDguMTU4MzMgMTYuNzkyMSA4LjE1NTI2IDE2LjEwMzZDNS44NjEzMyAxNi42MDI5IDUuMzkzNjUgMTUuMTMwMyA1LjM5MzY1IDE1LjEzMDNDNS4wMTgxNCAxNC4xNzcgNC40ODUzOSAxMy45MjM0IDQuNDg1MzkgMTMuOTIzNEMzLjczNzQ3IDEzLjQxMSA0LjU0NjY4IDEzLjQyMzEgNC41NDY2OCAxMy40MjMxQzUuMzc0MDYgMTMuNDgwNCA1LjgxMTkxIDE0LjI3MTcgNS44MTE5MSAxNC4yNzE3QzYuNTQ3NjUgMTUuNTMyOSA3Ljc0MjQyIDE1LjE2NzUgOC4yMTI1NCAxNC45NTcxQzguMjg3MDcgMTQuNDI0NiA4LjUwMDkgMTQuMDYwMiA4LjczNjQ0IDEzLjg1NDlDNi45MDQ0OCAxMy42NDY2IDQuOTgwMTMgMTIuOTM4OSA0Ljk4MDEzIDkuNzc5MjZDNC45ODAxMyA4Ljg3OTQzIDUuMzAyMzcgOC4xNDM1NiA1LjgyODc1IDcuNTY1NzRDNS43NDMyMSA3LjM1NzQyIDUuNDYxNDYgNi41MTk5NSA1LjkwODM4IDUuMzgzNDZDNS45MDgzOCA1LjM4MzQ2IDYuNjAwOTcgNS4xNjIwNSA4LjE3NzE4IDYuMjI5MDhDOC44MzQ0OCA2LjA0Njg1IDkuNTQwMTQgNS45NTUyMSAxMC4yNDA3IDUuOTUyMjNDMTAuOTQxMyA1Ljk1NTIzIDExLjY0NzkgNi4wNDY4NSAxMi4zMDYyIDYuMjI5MDhDMTMuODgwNiA1LjE2MjA3IDE0LjU3MiA1LjM4MzQ2IDE0LjU3MiA1LjM4MzQ2QzE1LjAyIDYuNTE5OTUgMTQuNzM5MiA3LjM1ODQ2IDE0LjY1MzcgNy41NjU3NEMxNS4xODIgOC4xNDM1NiAxNS41MDIyIDguODc5NDMgMTUuNTAyMiA5Ljc3OTI2QzE1LjUwMjIgMTIuOTQ2IDEzLjU3MjUgMTMuNjQzNSAxMS43MzY2IDEzLjg0NjlDMTIuMDMyNSAxNC4xMDI1IDEyLjI5NjIgMTQuNjA0OCAxMi4yOTYyIDE1LjM3MzhDMTIuMjk2MiAxNi40NzcgMTIuMjg3MiAxNy4zNjQ5IDEyLjI4NzIgMTcuNjM2NkMxMi4yODcyIDE3Ljg1NjEgMTIuNDM1MSAxOC4xMTI4IDEyLjg1MzkgMTguMDMyMkMxNi4xMjgzIDE2Ljk0MDEgMTguMjM5IDEzLjg0OTkgMTguMjM5IDEwLjIwOTFDMTguMjM5IDUuNjU1MjcgMTMuODYxNSAxLjk2MzEzIDkuNzQ0MjggMS45NjMxM1YxLjk2NTA5WiIgZmlsbD0iIzNGM0YzRiIvPgo8L3N2Zz4K",
                label: "Github",
                href: "https://github.com/volcengine/volcengine-skills",
                type: "github"
            }]
        }, l = {
            apiDark: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI1NV8yNDg2KSI+CjxwYXRoIGQ9Ik0xNS4yNDQ3IDEuNTE0MjhMMTQuNDg3NiAwLjc1NzEzNkMxNC40NTkgMC43Mjg1NjQgMTQuNDIzMyAwLjcxNjA2NCAxNC4zODU4IDAuNzE2MDY0QzE0LjM0ODMgMC43MTYwNjQgMTQuMzEyNiAwLjczMDM1IDE0LjI4NCAwLjc1NzEzNkwxMi45MjUxIDIuMTE2MDZDMTIuMzM0MyAxLjcxNTggMTEuNjM2OSAxLjUwMjQgMTAuOTIzMyAxLjUwMzU2QzEwLjAwOSAxLjUwMzU2IDkuMDk0NyAxLjg1MTc4IDguMzk2NDggMi41NDk5OUw2LjU3Njg0IDQuMzY5NjRDNi41NTAyNSA0LjM5NjQ5IDYuNTM1MzQgNC40MzI3NCA2LjUzNTM0IDQuNDcwNTNDNi41MzUzNCA0LjUwODMxIDYuNTUwMjUgNC41NDQ1NyA2LjU3Njg0IDQuNTcxNDJMMTEuNDI4NiA5LjQyMzIxQzExLjQ1NzIgOS40NTE3OCAxMS40OTI5IDkuNDY0MjggMTEuNTMwNCA5LjQ2NDI4QzExLjU2NjEgOS40NjQyOCAxMS42MDM2IDkuNDQ5OTkgMTEuNjMyMiA5LjQyMzIxTDEzLjQ1MTggNy42MDM1NkMxNC42ODIyIDYuMzcxNDIgMTQuODI2OCA0LjQ2NjA2IDEzLjg4NTggMy4wNzY3OEwxNS4yNDQ3IDEuNzE3ODVDMTUuMzAwMSAxLjY2MDcxIDE1LjMwMDEgMS41Njk2NCAxNS4yNDQ3IDEuNTE0MjhaTTEyLjU5MTEgNi43NDQ2NEwxMS41MzA0IDcuODA1MzVMOC4xOTQ3IDQuNDY5NjRMOS4yNTU0MSAzLjQwODkyQzkuNzAwMDUgMi45NjQyOCAxMC4yOTI5IDIuNzE3ODUgMTAuOTIzMyAyLjcxNzg1QzExLjU1MzYgMi43MTc4NSAxMi4xNDQ3IDIuOTYyNDkgMTIuNTkxMSAzLjQwODkyQzEzLjAzNTggMy44NTM1NiAxMy4yODIyIDQuNDQ2NDIgMTMuMjgyMiA1LjA3Njc4QzEzLjI4MjIgNS43MDcxNCAxMy4wMzU4IDYuMjk4MjEgMTIuNTkxMSA2Ljc0NDY0Wk05LjE5NDcgOC42MTk2NEM5LjE2Nzg1IDguNTkzMDUgOS4xMzE1OSA4LjU3ODE0IDkuMDkzODEgOC41NzgxNEM5LjA1NjAyIDguNTc4MTQgOS4wMTk3NiA4LjU5MzA1IDguOTkyOTEgOC42MTk2NEw3LjgwMzYzIDkuODA4OTJMNi4xOTExMyA4LjE5NjQyTDcuMzgyMiA3LjAwNTM1QzcuNDM3NTYgNi45NDk5OSA3LjQzNzU2IDYuODU4OTIgNy4zODIyIDYuODAzNTZMNi43MzIyIDYuMTUzNTZDNi43MDUzNSA2LjEyNjk4IDYuNjY5MDkgNi4xMTIwNiA2LjYzMTMxIDYuMTEyMDZDNi41OTM1MiA2LjExMjA2IDYuNTU3MjYgNi4xMjY5OCA2LjUzMDQxIDYuMTUzNTZMNS4zMzkzNCA3LjM0NDY0TDQuNTcxNDggNi41NzY3OEM0LjU1ODE1IDYuNTYzNDQgNC41NDIyNyA2LjU1MjkyIDQuNTI0NzggNi41NDU4N0M0LjUwNzI5IDYuNTM4ODEgNC40ODg1NSA2LjUzNTM1IDQuNDY5NyA2LjUzNTcxQzQuNDMzOTggNi41MzU3MSA0LjM5NjQ4IDYuNTQ5OTkgNC4zNjc5MSA2LjU3Njc4TDIuNTUwMDYgOC4zOTY0MkMxLjMxOTcgOS42Mjg1NiAxLjE3NTA2IDExLjUzMzkgMi4xMTYxMyAxMi45MjMyTDAuNzU3MTk4IDE0LjI4MjFDMC43MzA2MTIgMTQuMzA5IDAuNzE1Njk4IDE0LjM0NTIgMC43MTU2OTggMTQuMzgzQzAuNzE1Njk4IDE0LjQyMDggMC43MzA2MTIgMTQuNDU3MSAwLjc1NzE5OCAxNC40ODM5TDEuNTE0MzQgMTUuMjQxMUMxLjU0MjkxIDE1LjI2OTYgMS41Nzg2MyAxNS4yODIxIDEuNjE2MTMgMTUuMjgyMUMxLjY1MzYzIDE1LjI4MjEgMS42ODkzNCAxNS4yNjc5IDEuNzE3OTEgMTUuMjQxMUwzLjA3Njg0IDEzLjg4MjFDMy42Nzg2MyAxNC4yOTExIDQuMzc4NjMgMTQuNDk0NiA1LjA3ODYzIDE0LjQ5NDZDNS45OTI5MSAxNC40OTQ2IDYuOTA3MiAxNC4xNDY0IDcuNjA1NDEgMTMuNDQ4Mkw5LjQyNTA2IDExLjYyODZDOS40ODA0MSAxMS41NzMyIDkuNDgwNDEgMTEuNDgyMSA5LjQyNTA2IDExLjQyNjhMOC42NTcyIDEwLjY1ODlMOS44NDgyNyA5LjQ2Nzg1QzkuOTAzNjMgOS40MTI0OSA5LjkwMzYzIDkuMzIxNDIgOS44NDgyNyA5LjI2NjA2TDkuMTk0NyA4LjYxOTY0Wk02Ljc0NDcgMTIuNTkxMUM2LjUyNjE0IDEyLjgxMDcgNi4yNjYyMiAxMi45ODQ5IDUuOTc5OTQgMTMuMTAzNUM1LjY5MzY2IDEzLjIyMjIgNS4zODY3MiAxMy4yODI5IDUuMDc2ODQgMTMuMjgyMUM0LjQ0NjQ4IDEzLjI4MjEgMy44NTU0MSAxMy4wMzc1IDMuNDA4OTggMTIuNTkxMUMzLjE4OTMxIDEyLjM3MjUgMy4wMTUxMyAxMi4xMTI2IDIuODk2NTEgMTEuODI2M0MyLjc3Nzg5IDExLjU0IDIuNzE3MTkgMTEuMjMzMSAyLjcxNzkxIDEwLjkyMzJDMi43MTc5MSAxMC4yOTI5IDIuOTYyNTYgOS43MDE3OCAzLjQwODk4IDkuMjU1MzVMNC40Njk3IDguMTk0NjRMNy44MDU0MSAxMS41MzA0TDYuNzQ0NyAxMi41OTExWiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8yNTVfMjQ4NiI+CjxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",
            apiLight: n.Z,
            modelDoubao: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIzLjY5OTMgNC4wMDAwNkMyNC44OTM4IDMuOTkxMSAyNi4wMjc4IDQuMzExNzUgMjYuODU4MSA1LjE0MTk5QzI3LjY4ODUgNS45NzIzIDI4LjAwOSA3LjEwNjMxIDI4LjAwMDEgOC4zMDA4NEMyNy45OTExIDkuNDkwMzggMjcuNjU5NCAxMC44MjA1IDI3LjA5MzggMTIuMTk0MUMyNi41OTM1IDEzLjQwOSAyNS44OTM4IDE0LjY5NDggMjUuMDIyMiAxNi4wMDAxQzI1Ljg5MzggMTcuMzA1MyAyNi41OTM1IDE4LjU5MTEgMjcuMDkzOCAxOS44MDZDMjcuNjU5NCAyMS4xNzk2IDI3Ljk5MTEgMjIuNTA5OCAyOC4wMDAxIDIzLjY5OTNDMjguMDA5IDI0Ljg5MzggMjcuNjg4NSAyNi4wMjc4IDI2Ljg1ODEgMjYuODU4MUMyNi4wMjc4IDI3LjY4ODUgMjQuODkzOCAyOC4wMDkgMjMuNjk5MyAyOC4wMDAxQzIyLjUwOTggMjcuOTkxMSAyMS4xNzk2IDI3LjY1OTQgMTkuODA2IDI3LjA5MzhDMTguNTkxMSAyNi41OTM1IDE3LjMwNTMgMjUuODkzOCAxNi4wMDAxIDI1LjAyMjJDMTQuNjk0OCAyNS44OTM4IDEzLjQwOSAyNi41OTM1IDEyLjE5NDEgMjcuMDkzOEMxMC44MjA1IDI3LjY1OTQgOS40OTAzNCAyNy45OTExIDguMzAwODQgMjguMDAwMUM3LjEwNjMxIDI4LjAwOSA1Ljk3MjMgMjcuNjg4NSA1LjE0MTk5IDI2Ljg1ODFDNC4zMTE3NSAyNi4wMjc4IDMuOTkxMSAyNC44OTM4IDQuMDAwMDYgMjMuNjk5M0M0LjAwOTA4IDIyLjUwOTggNC4zNDA3NyAyMS4xNzk1IDQuOTA2MzEgMTkuODA2QzUuNDA2NTQgMTguNTkxMyA2LjEwNTIgMTcuMzA1MSA2Ljk3NjYyIDE2LjAwMDFDNi4xMDUyIDE0LjY5NSA1LjQwNjU0IDEzLjQwODggNC45MDYzMSAxMi4xOTQxQzQuMzQwNzQgMTAuODIwNiA0LjAwOTA1IDkuNDkwMzMgNC4wMDAwNiA4LjMwMDg0QzMuOTkxMSA3LjEwNjMxIDQuMzExNjcgNS45NzIzIDUuMTQxOTkgNS4xNDE5OUM1Ljk3MjMgNC4zMTE2NyA3LjEwNjMxIDMuOTkxMSA4LjMwMDg0IDQuMDAwMDZDOS40OTAzMyA0LjAwOTA1IDEwLjgyMDYgNC4zNDA3NCAxMi4xOTQxIDQuOTA2MzFDMTMuNDA4OCA1LjQwNjU0IDE0LjY5NSA2LjEwNTIgMTYuMDAwMSA2Ljk3NjYyQzE3LjMwNTEgNi4xMDUyMSAxOC41OTEzIDUuNDA2NTMgMTkuODA2IDQuOTA2MzFDMjEuMTc5NiA0LjM0MDc0IDIyLjUwOTggNC4wMDkwNSAyMy42OTkzIDQuMDAwMDZaTTguMjM0NDMgMTcuNzM4M0M3LjYyMDE0IDE4LjcyMTIgNy4xMjQ0MyAxOS42NzQ1IDYuNzU2NTcgMjAuNTY3OEM2LjI1MDYxIDIxLjc5NjUgNi4wMDY0MyAyMi44NjUxIDYuMDAwMDYgMjMuNzE0OUM1Ljk5Mzc0IDI0LjU1OTcgNi4yMTg0NSAyNS4xMDY0IDYuNTU2MDUgMjUuNDQ0MUM2Ljg5MzY4IDI1Ljc4MTcgNy40NDA1IDI2LjAwNjMgOC4yODUyMiAyNi4wMDAxQzkuMTM1MDQgMjUuOTkzNyAxMC4yMDM2IDI1Ljc1MDggMTEuNDMyNCAyNS4yNDQ5QzEyLjMyNTcgMjQuODc3IDEzLjI3NzYgMjQuMzc4NyAxNC4yNjA1IDIzLjc2NDRDMTMuMTgyMyAyMi45MjYgMTIuMTA2NyAyMS45NzkxIDExLjA2MzkgMjAuOTM2M0MxMC4wMjA1IDE5Ljg5MjkgOS4wNzMwNCAxOC44MTcgOC4yMzQ0MyAxNy43MzgzWk0yMy43NjQ0IDE3LjczOTZDMjIuOTI2IDE4LjgxNzkgMjEuOTc5MSAxOS44OTQ3IDIwLjkzNjMgMjAuOTM3NkMxOS44OTMzIDIxLjk4MDQgMTguODE2NiAyMi45MjYxIDE3LjczODMgMjMuNzY0NEMxOC43MjE0IDI0LjM3ODggMTkuNjc0MyAyNC44NzU2IDIwLjU2NzggMjUuMjQzNUMyMS43OTY1IDI1Ljc0OTUgMjIuODY1MSAyNS45OTM3IDIzLjcxNDkgMjYuMDAwMUMyNC41NTk2IDI2LjAwNjMgMjUuMTA2NCAyNS43ODE3IDI1LjQ0NDEgMjUuNDQ0MUMyNS43ODE3IDI1LjEwNjQgMjYuMDA2MyAyNC41NTk2IDI2LjAwMDEgMjMuNzE0OUMyNS45OTM3IDIyLjg2NTEgMjUuNzQ5NSAyMS43OTY1IDI1LjI0MzUgMjAuNTY3OEMyNC44NzU3IDE5LjY3NDYgMjQuMzc4NiAxOC43MjI0IDIzLjc2NDQgMTcuNzM5NlpNMTYuMDAwMSA5LjQyNDU0QzE0LjgyNjkgMTAuMjk1OCAxMy42MzcgMTEuMzE4OSAxMi40Nzc5IDEyLjQ3NzlDMTEuMzE4NyAxMy42MzcyIDEwLjI5NDYgMTQuODI2OCA5LjQyMzI0IDE2LjAwMDFDMTAuMjk0NiAxNy4xNzM0IDExLjMxODcgMTguMzYyOSAxMi40Nzc5IDE5LjUyMjJDMTMuNjM3IDIwLjY4MTMgMTQuODI2OSAyMS43MDQzIDE2LjAwMDEgMjIuNTc1NkMxNy4xNzMyIDIxLjcwNDMgMTguMzYzMiAyMC42ODEyIDE5LjUyMjIgMTkuNTIyMkMyMC42ODEzIDE4LjM2MzEgMjEuNzA0MyAxNy4xNzMyIDIyLjU3NTYgMTYuMDAwMUMyMS43MDQzIDE0LjgyNjkgMjAuNjgxMyAxMy42MzcgMTkuNTIyMiAxMi40Nzc5QzE4LjM2MzEgMTEuMzE4OSAxNy4xNzMyIDEwLjI5NTggMTYuMDAwMSA5LjQyNDU0Wk04LjI4NTIyIDYuMDAwMDZDNy40NDA0NyA1Ljk5Mzc3IDYuODkzNjkgNi4yMTg0MSA2LjU1NjA1IDYuNTU2MDVDNi4yMTg0MSA2Ljg5MzY5IDUuOTkzNzcgNy40NDA0NyA2LjAwMDA2IDguMjg1MjJDNi4wMDY0MyA5LjEzNTA1IDYuMjUwNjEgMTAuMjAzNiA2Ljc1NjU3IDExLjQzMjRDNy4xMjQzMSAxMi4zMjU0IDcuNjIwNDEgMTMuMjc4IDguMjM0NDMgMTQuMjYwNUM5LjA3Mjg3IDEzLjE4MjEgMTAuMDIwOCAxMi4xMDY5IDExLjA2MzkgMTEuMDYzOUMxMi4xMDY5IDEwLjAyMDggMTMuMTgyMSA5LjA3Mjg5IDE0LjI2MDUgOC4yMzQ0M0MxMy4yNzggNy42MjA0MSAxMi4zMjU0IDcuMTI0MzEgMTEuNDMyNCA2Ljc1NjU3QzEwLjIwMzYgNi4yNTA2MSA5LjEzNTA1IDYuMDA2NDMgOC4yODUyMiA2LjAwMDA2Wk0yMy43MTQ5IDYuMDAwMDZDMjIuODY1MSA2LjAwNjQzIDIxLjc5NjUgNi4yNTA2MSAyMC41Njc4IDYuNzU2NTdDMTkuNjc0NSA3LjEyNDQyIDE4LjcyMTIgNy42MjAxNSAxNy43MzgzIDguMjM0NDNDMTguODE3IDkuMDczMDQgMTkuODkyOSAxMC4wMjA1IDIwLjkzNjMgMTEuMDYzOUMyMS45NzkxIDEyLjEwNjcgMjIuOTI2IDEzLjE4MjMgMjMuNzY0NCAxNC4yNjA1QzI0LjM3ODYgMTMuMjc3NyAyNC44NzU3IDEyLjMyNTUgMjUuMjQzNSAxMS40MzI0QzI1Ljc0OTUgMTAuMjAzNiAyNS45OTM3IDkuMTM1MDUgMjYuMDAwMSA4LjI4NTIyQzI2LjAwNjMgNy40NDA1OSAyNS43ODE3IDYuODkzNjYgMjUuNDQ0MSA2LjU1NjA1QzI1LjEwNjQgNi4yMTg0NyAyNC41NTk2IDUuOTkzNzcgMjMuNzE0OSA2LjAwMDA2WiIgZmlsbD0iIzEwMTAxMyIvPgo8L3N2Zz4K",
            modelVideo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuMzMzMzcgNi42NjY2N1Y1SDguMDAwMDRIMTMuNjY2N1Y2LjY2NjY3IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNy45OTk5NiA1VjE1TTcuOTk5OTYgMTVINi4zMzMzN003Ljk5OTk2IDE1SDkuNjY2NzEiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik03LjY2NjYzIDIxVjI0LjMzMzNDNy42NjY2MyAyNS44MDYxIDguODYwNTMgMjcgMTAuMzMzMyAyN0gyNC4zMzMzQzI1LjgwNjEgMjcgMjcgMjUuODA2MSAyNyAyNC4zMzMzVjEwLjMzMzNDMjcgOC44NjA1MyAyNS44MDYxIDcuNjY2NjMgMjQuMzMzMyA3LjY2NjYzSDE5LjY2NjYiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNC42NjY2IDIwLjcwMjlWMTMuOTYzN0MxNC42NjY2IDEzLjE0NjQgMTUuNTkzOCAxMi42NzQzIDE2LjI1NDggMTMuMTU1TDIwLjg4OCAxNi41MjQ1QzIxLjQzNyAxNi45MjM5IDIxLjQzNyAxNy43NDI2IDIwLjg4OCAxOC4xNDIxTDE2LjI1NDggMjEuNTExNUMxNS41OTM4IDIxLjk5MjMgMTQuNjY2NiAyMS41MjAxIDE0LjY2NjYgMjAuNzAyOVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=",
            modelImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2LjYzNzQgMjAuMjY4NkwyMS45MzE5IDE1LjU2NDNDMjEuNjY1MyAxNS4yOTc4IDIxLjUwNjUgMTUuMTM4NiAyMS4zNzkxIDE1LjAzMDVDMjEuMjYwNiAxNC45Mjk5IDIxLjIzNDUgMTQuOTMxMiAyMS4yNTcgMTQuOTM4NUMyMS4xOTIzIDE0LjkxNzUgMjEuMTIyOCAxNC45MTc1IDIxLjA1ODEgMTQuOTM4NUMyMS4wODA2IDE0LjkzMTIgMjEuMDU0NCAxNC45Mjk5IDIwLjkzNTkgMTUuMDMwNUMyMC44MDg2IDE1LjEzODYgMjAuNjQ5NyAxNS4yOTc4IDIwLjM4MzEgMTUuNTY0M0w5LjMxNjQxIDI2LjYzMTFDOS42ODQyIDI2LjYzNTQgMTAuMTAyMiAyNi42Mzc0IDEwLjU4NDQgMjYuNjM3NEgyMS40MTU3TDIyLjgzNDcgMjYuNjMxMUMyMy4yMzgzIDI2LjYyNDggMjMuNTc5IDI2LjYxMjYgMjMuODc3MyAyNi41ODgzQzI0LjQ2MjUgMjYuNTQwNSAyNC43OTg3IDI2LjQ1MTEgMjUuMDUzNCAyNi4zMjEzQzI1LjU5OTIgMjYuMDQzMiAyNi4wNDMyIDI1LjU5OTIgMjYuMzIxMyAyNS4wNTMzQzI2LjQ1MTEgMjQuNzk4NyAyNi41NDA1IDI0LjQ2MjQgMjYuNTg4MyAyMy44NzczQzI2LjYzNyAyMy4yODA4IDI2LjYzNzQgMjIuNTE0NiAyNi42Mzc0IDIxLjQxNTZWMjAuMjY4NlpNMTMuMDk4OSAxMS40ODcyQzEzLjA5ODkgMTAuNTk3MSAxMi4zNzczIDkuODc1NDcgMTEuNDg3MiA5Ljg3NTQ3QzEwLjU5NzEgOS44NzU0NyA5Ljg3NTQ4IDEwLjU5NzEgOS44NzU0OCAxMS40ODcyQzkuODc1NDggMTIuMzc3MyAxMC41OTcxIDEzLjA5ODkgMTEuNDg3MiAxMy4wOTg5QzEyLjM3NzMgMTMuMDk4OSAxMy4wOTg5IDEyLjM3NzMgMTMuMDk4OSAxMS40ODcyWk0yNi42Mzc0IDEwLjU4NDRDMjYuNjM3NCA5LjQ4NTM4IDI2LjYzNyA4LjcxOTE5IDI2LjU4ODMgOC4xMjI3M0MyNi41NDA1IDcuNTM3NTggMjYuNDUxMSA3LjIwMTM0IDI2LjMyMTMgNi45NDY2N0MyNi4wNDMyIDYuNDAwOCAyNS41OTkyIDUuOTU2ODQgMjUuMDUzNCA1LjY3ODdDMjQuNzk4NyA1LjU0ODk2IDI0LjQ2MjUgNS40NTk1NyAyMy44NzczIDUuNDExNzZDMjMuMjgwOCA1LjM2MzAzIDIyLjUxNDcgNS4zNjI2NiAyMS40MTU3IDUuMzYyNjZIMTAuNTg0NEM5LjQ4NTM4IDUuMzYyNjYgOC43MTkxOSA1LjM2MzAzIDguMTIyNzMgNS40MTE3NkM3LjUzNzU4IDUuNDU5NTcgNy4yMDEzNCA1LjU0ODk2IDYuOTQ2NjggNS42Nzg3QzYuNDAwOCA1Ljk1Njg0IDUuOTU2ODQgNi40MDA4IDUuNjc4NzEgNi45NDY2N0M1LjU0ODk2IDcuMjAxMzQgNS40NTk1OCA3LjUzNzU4IDUuNDExNzYgOC4xMjI3M0M1LjM2MzAzIDguNzE5MTkgNS4zNjI2NiA5LjQ4NTM4IDUuMzYyNjYgMTAuNTg0NFYyMS40MTU2QzUuMzYyNjYgMjIuNTE0NiA1LjM2MzAzIDIzLjI4MDggNS40MTE3NiAyMy44NzczQzUuNDU5NTggMjQuNDYyNCA1LjU0ODk2IDI0Ljc5ODcgNS42Nzg3MSAyNS4wNTMzQzUuOTU2ODQgMjUuNTk5MiA2LjQwMDggMjYuMDQzMiA2Ljk0NjY4IDI2LjMyMTNDNi45Nzg2NyAyNi4zMzc2IDcuMDEzNzYgMjYuMzQ5MSA3LjA0ODY3IDI2LjM2NDFDNy4xNDUyMiAyNi4xNTE5IDcuMjc2MjYgMjUuOTg2IDcuMzY5NzUgMjUuODc0M0M3LjU0NDMyIDI1LjY2NTggNy43ODgzMiAyNS40MjE4IDguMDUwOTYgMjUuMTU5MUwxOS4wMTQ0IDE0LjE5NTZDMTkuMjU4NCAxMy45NTE2IDE5LjQ4MjggMTMuNzI3MSAxOS42ODQzIDEzLjU1NkMxOS44OTQ0IDEzLjM3NzcgMjAuMTQzMyAxMy4yMDE5IDIwLjQ2IDEzLjA5ODlDMjAuOTEzMSAxMi45NTE3IDIxLjQwMTkgMTIuOTUxNyAyMS44NTUxIDEzLjA5ODlDMjIuMTcxOCAxMy4yMDE5IDIyLjQyMDcgMTMuMzc3NyAyMi42MzA3IDEzLjU1NkMyMi44MzIzIDEzLjcyNzEgMjMuMDU2NiAxMy45NTE2IDIzLjMwMDYgMTQuMTk1NkwyNi42Mzc0IDE3LjUzMjRWMTAuNTg0NFpNMTUuMDMzIDExLjQ4NzJDMTUuMDMzIDEzLjQ0NTUgMTMuNDQ1NSAxNS4wMzMgMTEuNDg3MiAxNS4wMzNDOS41Mjg5MSAxNS4wMzMgNy45NDE0MSAxMy40NDU1IDcuOTQxNDEgMTEuNDg3MkM3Ljk0MTQxIDkuNTI4OTEgOS41Mjg5MSA3Ljk0MTQxIDExLjQ4NzIgNy45NDE0MUMxMy40NDU1IDcuOTQxNDEgMTUuMDMzIDkuNTI4OTEgMTUuMDMzIDExLjQ4NzJaTTI4LjU3MTQgMjEuNDE1NkwyOC41NjUxIDIyLjg2NDlDMjguNTU4MyAyMy4yOTk3IDI4LjU0NDQgMjMuNjg3OSAyOC41MTYgMjQuMDM0N0MyOC40NTg1IDI0LjczOTUgMjguMzM1NyAyNS4zNTgyIDI4LjA0MzkgMjUuOTMxQzI3LjU4MDMgMjYuODQwOCAyNi44NDA4IDI3LjU4MDMgMjUuOTMxIDI4LjA0MzhDMjUuMzU4MyAyOC4zMzU3IDI0LjczOTUgMjguNDU4NCAyNC4wMzQ3IDI4LjUxNkMyMy42ODc5IDI4LjU0NDQgMjMuMjk5OCAyOC41NTgyIDIyLjg2NDkgMjguNTY1MUwyMS40MTU3IDI4LjU3MTRIOS40NjQ5OUM5LjA5MzU2IDI4LjU3MTQgOC43NDg2OSAyOC41NzI4IDguNDc3ODEgMjguNTQ4OEM4LjQ2NTIzIDI4LjU0NzcgOC40NTIzIDI4LjU0NSA4LjQzODc4IDI4LjU0MzdDOC4yNzI5OSAyOC41MzYzIDguMTE1MjYgMjguNTI4MyA3Ljk2NTMzIDI4LjUxNkM3LjI2MDU1IDI4LjQ1ODQgNi42NDE3OCAyOC4zMzU3IDYuMDY5MDQgMjguMDQzOEM1LjE1OTI1IDI3LjU4MDMgNC40MTk3NCAyNi44NDA4IDMuOTU2MTggMjUuOTMxQzMuNjY0MzcgMjUuMzU4MiAzLjU0MTU4IDI0LjczOTUgMy40ODM5OSAyNC4wMzQ3QzMuNDI3MzQgMjMuMzQxMiAzLjQyODU5IDIyLjQ4MjcgMy40Mjg1OSAyMS40MTU2VjEwLjU4NDRDMy40Mjg1OSA5LjUxNzMxIDMuNDI3MzQgOC42NTg4IDMuNDgzOTkgNy45NjUzM0MzLjU0MTU4IDcuMjYwNTUgMy42NjQzNyA2LjY0MTc4IDMuOTU2MTggNi4wNjkwNEM0LjQxOTc0IDUuMTU5MjUgNS4xNTkyNSA0LjQxOTc0IDYuMDY5MDQgMy45NTYxOEM2LjY0MTc4IDMuNjY0MzcgNy4yNjA1NSAzLjU0MTU4IDcuOTY1MzMgMy40ODM5OUM4LjY1ODggMy40MjczNCA5LjUxNzMxIDMuNDI4NTkgMTAuNTg0NCAzLjQyODU5SDIxLjQxNTdDMjIuNDgyNyAzLjQyODU5IDIzLjM0MTIgMy40MjczNCAyNC4wMzQ3IDMuNDgzOTlDMjQuNzM5NSAzLjU0MTU4IDI1LjM1ODIgMy42NjQzNyAyNS45MzEgMy45NTYxOEMyNi44NDA4IDQuNDE5NzQgMjcuNTgwMyA1LjE1OTI1IDI4LjA0MzkgNi4wNjkwNEMyOC4zMzU3IDYuNjQxNzggMjguNDU4NSA3LjI2MDU1IDI4LjUxNiA3Ljk2NTMzQzI4LjU3MjcgOC42NTg4IDI4LjU3MTQgOS41MTczMSAyOC41NzE0IDEwLjU4NDRWMjEuNDE1NloiIGZpbGw9IiMwQzBEMEUiLz4KPC9zdmc+Cg==",
            modelSpeech: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjUzMzEgMS4zMzM2OEMxMi4wMDMgMS4zMzM5NiAxMi44OTU1IDIuNTE4MTEgMTMuNDQ4NSAzLjU3OTc3QzE0LjAzMjEgNC43MDAzOCAxNC40ODU4IDYuMTYyNzMgMTQuOTA0MiA3LjUwMTY1QzE1LjMzOTkgOC44OTU5OSAxNS43NDA1IDEwLjE2NzQgMTYuMjI0NSAxMS4wOTY3QzE2LjczOTIgMTIuMDg0OCAxNy4xMjg0IDEyLjI2NzMgMTcuMzY2NCAxMi4yNjczQzE3LjgyNTUgMTIuMjY3MSAxOC4yMDc2IDEyLjA1OTUgMTguNjA5OSAxMS41NjY4QzE5LjAzNzcgMTEuMDQyOSAxOS4zOTU3IDEwLjMwNzIgMTkuNzg1NyA5LjQ0MDQ1QzIwLjE0OTIgOC42MzI2NiAyMC41NTU1IDcuNjcxMTcgMjEuMDU2NSA2LjkzNzg1QzIxLjU2NDQgNi4xOTQ2MiAyMi4zMzk1IDUuNDMzOTQgMjMuNTE2MiA1LjQzMzk0QzI0Ljc0NjQgNS40MzQwNiAyNS41MjAyIDYuMzA1NDcgMjYuMDA5NyA3LjEyOTI1QzI2LjUwNjcgNy45NjU3MiAyNi45MDE1IDkuMDcxNTQgMjcuMjc1MyAxMC4xMDk3QzI3LjY2NSAxMS4xOTIzIDI4LjA0ODUgMTIuMjU1MSAyOC41MzMxIDEzLjE3NDhDMjkuMDE4OCAxNC4wOTY2IDI5LjU1MjcgMTQuNzY1NiAzMC4xODAyIDE1LjE0MjNDMzAuNDkzIDE1LjMzIDMwLjY3ODQgMTUuNjczNiAzMC42NjQ2IDE2LjAzODFDMzAuNjUwNiAxNi40MDI4IDMwLjQzOSAxNi43MzE3IDMwLjExMjUgMTYuODk0OUMyOS4zMjY3IDE3LjI4NzkgMjguNzI4IDE3Ljk2MTUgMjguMjMyMyAxOC44NDhDMjcuNzMxNSAxOS43NDM4IDI3LjM3MjYgMjAuNzg4IDI3LjAzMDUgMjEuODU3MUMyNi43MDUxIDIyLjg3MzkgMjYuMzc0NSAyMy45ODkzIDI1LjkzOTQgMjQuODIzM0MyNS41MDQ1IDI1LjY1NjUgMjQuNzc2OCAyNi41NjY2IDIzLjUxNjIgMjYuNTY2OEMyMi4zMzk1IDI2LjU2NjggMjEuNTY0NCAyNS44MDYxIDIxLjA1NjUgMjUuMDYyOEMyMC41NTU1IDI0LjMyOTUgMjAuMTQ5MiAyMy4zNjggMTkuNzg1NyAyMi41NjAyQzE5LjM5NTcgMjEuNjkzNSAxOS4wMzc3IDIwLjk1NzggMTguNjA5OSAyMC40MzM5QzE4LjIwNzYgMTkuOTQxMiAxNy44MjU1IDE5LjczMzYgMTcuMzY2NCAxOS43MzM0QzE3LjEyODQgMTkuNzMzNCAxNi43MzkyIDE5LjkxNTkgMTYuMjI0NSAyMC45MDRDMTUuNzQwNSAyMS44MzMzIDE1LjMzOTkgMjMuMTA0NyAxNC45MDQyIDI0LjQ5OUMxNC40ODU4IDI1LjgzOCAxNC4wMzIxIDI3LjMwMDMgMTMuNDQ4NSAyOC40MjA5QzEyLjg5NTUgMjkuNDgyNiAxMi4wMDMgMzAuNjY2NyAxMC41MzMxIDMwLjY2N0M5Ljc5NDA5IDMwLjY2NyA5LjE3OTUyIDMwLjM0NSA4LjY5NDU2IDI5LjkwNEM4LjIyMjk0IDI5LjQ3NTEgNy44MzYyNSAyOC45MDM2IDcuNTA3MDYgMjguMjk3MkM2Ljg1MjA5IDI3LjA5MDcgNi4yOTE2IDI1LjQ4ODcgNS43NDUzNCAyMy45MzM5QzUuMTg0NjUgMjIuMzM4MSA0LjYyOTgxIDIwLjc1OTIgMy45NzA2IDE5LjQ1MDlDMy4yOTc0NCAxOC4xMTQ5IDIuNjA3OTUgMTcuMjU2MSAxLjg4NTk3IDE2Ljg5NDlDMS41NDcxOCAxNi43MjU1IDEuMzMyNTggMTYuMzc5MSAxLjMzMjU4IDE2LjAwMDNDMS4zMzI1OCAxNS42MjE2IDEuNTQ3MTggMTUuMjc1MiAxLjg4NTk3IDE1LjEwNThDMi42MDc5NSAxNC43NDQ2IDMuMjk3NDQgMTMuODg1OCAzLjk3MDYgMTIuNTQ5OEM0LjYyOTgxIDExLjI0MTQgNS4xODQ2NSA5LjY2MjU4IDUuNzQ1MzQgOC4wNjY3NUM2LjI5MTYgNi41MTIwMiA2Ljg1MjA5IDQuOTEwMDEgNy41MDcwNiAzLjcwMzQ3QzcuODM2MjUgMy4wOTcwNyA4LjIyMjk0IDIuNTI1NjEgOC42OTQ1NiAyLjA5NjdDOS4xNzk1MiAxLjY1NTcgOS43OTQwOSAxLjMzMzY4IDEwLjUzMzEgMS4zMzM2OFpNMTAuNTMzMSAzLjMzMzY4QzEwLjQxOCAzLjMzMzY4IDEwLjI2MiAzLjM3NDkzIDEwLjAzOTYgMy41NzcxN0M5LjgwNDA0IDMuNzkxNjEgOS41NDQwNCA0LjE0MzY1IDkuMjY0ODcgNC42NTc5QzguNzAyNzMgNS42OTM0OSA4LjE5NjE2IDcuMTI0IDcuNjMyMDYgOC43Mjk1MUM3LjA4MjQ0IDEwLjI5MzggNi40ODQ0MSAxMi4wMDM0IDUuNzU1NzYgMTMuNDQ5NkM1LjI4MzggMTQuMzg2MiA0LjcxNTI2IDE1LjI5NzUgNC4wMDE4NSAxNi4wMDAzQzQuNzE1MjYgMTYuNzAzMSA1LjI4MzggMTcuNjE0NSA1Ljc1NTc2IDE4LjU1MTFDNi40ODQ0MSAxOS45OTczIDcuMDgyNDQgMjEuNzA2OSA3LjYzMjA2IDIzLjI3MTJDOC4xOTYxNiAyNC44NzY3IDguNzAyNzMgMjYuMzA3MiA5LjI2NDg3IDI3LjM0MjhDOS41NDQwNCAyNy44NTcgOS44MDQwNCAyOC4yMDkxIDEwLjAzOTYgMjguNDIzNUMxMC4yNjIgMjguNjI1OCAxMC40MTggMjguNjY3IDEwLjUzMzEgMjguNjY3QzEwLjc3MTIgMjguNjY2NyAxMS4xNTk0IDI4LjQ4MzkgMTEuNjczNyAyNy40OTY0QzEyLjE1NzcgMjYuNTY3MiAxMi41NTk3IDI1LjI5NjkgMTIuOTk1MyAyMy45MDI3QzEzLjQxMzggMjIuNTYzNyAxMy44NjYxIDIxLjEwMDIgMTQuNDQ5OCAxOS45Nzk1QzE1LjAwMjggMTguOTE3NyAxNS44OTYyIDE3LjczMzQgMTcuMzY2NCAxNy43MzM0QzE4LjYxNDkgMTcuNzMzNiAxOS41MTQ0IDE4LjM4MDMgMjAuMTU4MSAxOS4xNjgzQzIwLjc3NjUgMTkuOTI1NiAyMS4yMzAxIDIwLjg5ODcgMjEuNjA4NiAyMS43Mzk5QzIyLjAxMzggMjIuNjQwMiAyMi4zMzMyIDIzLjM4NzQgMjIuNzA3NiAyMy45MzUyQzIzLjA3NTIgMjQuNDczMyAyMy4zMjYyIDI0LjU2NjggMjMuNTE2MiAyNC41NjY4QzIzLjYyMTkgMjQuNTY2NyAyMy44MzM2IDI0LjUzNyAyNC4xNjcyIDIzLjg5NzVDMjQuNTAwNyAyMy4yNTgxIDI0Ljc2NzcgMjIuMzY2IDI1LjEyNTYgMjEuMjQ3N0MyNS40NjY4IDIwLjE4MTQgMjUuODc2NyAxOC45NjE2IDI2LjQ4NjIgMTcuODcxNEMyNi44ODEzIDE3LjE2NSAyNy4zNzU3IDE2LjQ4NTYgMjguMDEzNiAxNS45MjIyQzI3LjUwOCAxNS4zNzkzIDI3LjEwMTQgMTQuNzQ4MiAyNi43NjM2IDE0LjEwNzFDMjYuMjAxOCAxMy4wNDEgMjUuNzcyOCAxMS44Mzk3IDI1LjM5MzggMTAuNzg2OEMyNC45OTg5IDkuNjg5NzkgMjQuNjY4IDguNzg4MzEgMjQuMjg5NiA4LjE1MTM5QzIzLjkwMzkgNy41MDIyIDIzLjY1MjUgNy40MzQwMyAyMy41MTYyIDcuNDMzOTRDMjMuMzI2MiA3LjQzMzk0IDIzLjA3NTIgNy41Mjc0MyAyMi43MDc2IDguMDY1NDVDMjIuMzMzMiA4LjYxMzMgMjIuMDEzOCA5LjM2MDQ1IDIxLjYwODYgMTAuMjYwOEMyMS4yMzAxIDExLjEwMiAyMC43NzY1IDEyLjA3NTEgMjAuMTU4MSAxMi44MzI0QzE5LjUxNDQgMTMuNjIwNCAxOC42MTQ5IDE0LjI2NzEgMTcuMzY2NCAxNC4yNjczQzE1Ljg5NjIgMTQuMjY3MyAxNS4wMDI4IDEzLjA4MjkgMTQuNDQ5OCAxMi4wMjEyQzEzLjg2NjEgMTAuOTAwNSAxMy40MTM4IDkuNDM2OTkgMTIuOTk1MyA4LjA5OEMxMi41NTk3IDYuNzAzODIgMTIuMTU3NyA1LjQzMzQ5IDExLjY3MzcgNC41MDQyNUMxMS4xNTk0IDMuNTE2NzkgMTAuNzcxMiAzLjMzMzk0IDEwLjUzMzEgMy4zMzM2OFoiIGZpbGw9IiMwQzBEMEUiLz4KPC9zdmc+Cg==",
            specText: N.Z,
            specImage: u.Z,
            specAudio: c.Z,
            specVideo: D.Z,
            specArrow: a.Z,
            subscribeDark: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguODIxMjkgMi4yMjAwOUw3LjgwMDQ0IDMuMjQwOTJDNy40ODc4OCAzLjU1MzQ4IDcuMDYzOTYgMy43MjkwNyA2LjYyMTkzIDMuNzI5MDdINS4zOTU2M0M0LjQ3NTE1IDMuNzI5MDcgMy43Mjg5NiA0LjQ3NTI2IDMuNzI4OTYgNS4zOTU3NFY2LjYyMjA1QzMuNzI4OTYgNy4wNjQwOCAzLjU1MzM2IDcuNDg4IDMuMjQwOCA3LjgwMDU2TDIuMjE5OTcgOC44MjEzN0MxLjU2OTA5IDkuNDcyMjkgMS41NjkwOSAxMC41Mjc1IDIuMjE5OTcgMTEuMTc4NUwzLjI0MDggMTIuMTk5M0MzLjU1MzM2IDEyLjUxMTggMy43Mjg5NiAxMi45MzU3IDMuNzI4OTYgMTMuMzc3OFYxNC42MDRDMy43Mjg5NiAxNS41MjQ1IDQuNDc1MTUgMTYuMjcwNyA1LjM5NTYzIDE2LjI3MDdINi42MjE5M0M3LjA2Mzk2IDE2LjI3MDcgNy40ODc4OCAxNi40NDY0IDcuODAwNDQgMTYuNzU4OUw4LjgyMTI5IDE3Ljc3OTdDOS40NzIxMyAxOC40MzA2IDEwLjUyNzUgMTguNDMwNiAxMS4xNzgzIDE3Ljc3OTdMMTIuMTk5MSAxNi43NTg5QzEyLjUxMTcgMTYuNDQ2NCAxMi45MzU2IDE2LjI3MDcgMTMuMzc3NiAxNi4yNzA3SDE0LjYwNEMxNS41MjQ1IDE2LjI3MDcgMTYuMjcwNiAxNS41MjQ1IDE2LjI3MDYgMTQuNjA0VjEzLjM3NzhDMTYuMjcwNiAxMi45MzU3IDE2LjQ0NjIgMTIuNTExOCAxNi43NTg4IDEyLjE5OTNMMTcuNzc5NiAxMS4xNzg1QzE4LjQzMDUgMTAuNTI3NSAxOC40MzA1IDkuNDcyMjkgMTcuNzc5NiA4LjgyMTM3TDE2Ljc1ODggNy44MDA1NkMxNi40NDYyIDcuNDg4IDE2LjI3MDYgNy4wNjQwOCAxNi4yNzA2IDYuNjIyMDVWNS4zOTU3NEMxNi4yNzA2IDQuNDc1MjYgMTUuNTI0NSAzLjcyOTA3IDE0LjYwNCAzLjcyOTA3SDEzLjM3NzZDMTIuOTM1NiAzLjcyOTA3IDEyLjUxMTcgMy41NTM0OCAxMi4xOTkxIDMuMjQwOTFMMTEuMTc4MyAyLjIyMDA5QzEwLjUyNzUgMS41NjkyMSA5LjQ3MjEzIDEuNTY5MjEgOC44MjEyOSAyLjIyMDA5WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTcuMjMzMDMgMTAuOTEwOEw5LjA5MzYyIDEyLjU1TDEyLjM0OTcgNy44NjY3IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",
            subscribeLight: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguODIxMjkgMi4yMjAwOUw3LjgwMDQ0IDMuMjQwOTJDNy40ODc4OCAzLjU1MzQ4IDcuMDYzOTYgMy43MjkwNyA2LjYyMTkzIDMuNzI5MDdINS4zOTU2M0M0LjQ3NTE1IDMuNzI5MDcgMy43Mjg5NiA0LjQ3NTI2IDMuNzI4OTYgNS4zOTU3NFY2LjYyMjA1QzMuNzI4OTYgNy4wNjQwOCAzLjU1MzM2IDcuNDg4IDMuMjQwOCA3LjgwMDU2TDIuMjE5OTcgOC44MjEzN0MxLjU2OTA5IDkuNDcyMjkgMS41NjkwOSAxMC41Mjc1IDIuMjE5OTcgMTEuMTc4NUwzLjI0MDggMTIuMTk5M0MzLjU1MzM2IDEyLjUxMTggMy43Mjg5NiAxMi45MzU3IDMuNzI4OTYgMTMuMzc3OFYxNC42MDRDMy43Mjg5NiAxNS41MjQ1IDQuNDc1MTUgMTYuMjcwNyA1LjM5NTYzIDE2LjI3MDdINi42MjE5M0M3LjA2Mzk2IDE2LjI3MDcgNy40ODc4OCAxNi40NDY0IDcuODAwNDQgMTYuNzU4OUw4LjgyMTI5IDE3Ljc3OTdDOS40NzIxMyAxOC40MzA2IDEwLjUyNzUgMTguNDMwNiAxMS4xNzgzIDE3Ljc3OTdMMTIuMTk5MSAxNi43NTg5QzEyLjUxMTcgMTYuNDQ2NCAxMi45MzU2IDE2LjI3MDcgMTMuMzc3NiAxNi4yNzA3SDE0LjYwNEMxNS41MjQ1IDE2LjI3MDcgMTYuMjcwNiAxNS41MjQ1IDE2LjI3MDYgMTQuNjA0VjEzLjM3NzhDMTYuMjcwNiAxMi45MzU3IDE2LjQ0NjIgMTIuNTExOCAxNi43NTg4IDEyLjE5OTNMMTcuNzc5NiAxMS4xNzg1QzE4LjQzMDUgMTAuNTI3NSAxOC40MzA1IDkuNDcyMjkgMTcuNzc5NiA4LjgyMTM3TDE2Ljc1ODggNy44MDA1NkMxNi40NDYyIDcuNDg4IDE2LjI3MDYgNy4wNjQwOCAxNi4yNzA2IDYuNjIyMDVWNS4zOTU3NEMxNi4yNzA2IDQuNDc1MjYgMTUuNTI0NSAzLjcyOTA3IDE0LjYwNCAzLjcyOTA3SDEzLjM3NzZDMTIuOTM1NiAzLjcyOTA3IDEyLjUxMTcgMy41NTM0OCAxMi4xOTkxIDMuMjQwOTFMMTEuMTc4MyAyLjIyMDA5QzEwLjUyNzUgMS41NjkyMSA5LjQ3MjEzIDEuNTY5MjEgOC44MjEyOSAyLjIyMDA5WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTcuMjMzMDMgMTAuOTEwOEw5LjA5MzYyIDEyLjU1TDEyLjM0OTcgNy44NjY3IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
        }, o = {
            id: "models",
            title: "\u65D7\u8230\u6A21\u578B\u6309\u91CF\u8BA1\u8D39",
            subtitle: "\u4F7F\u7528\u5F00\u653E\u5E73\u53F0 API Key \u8C03\u7528\uFF0C\u6309\u5B9E\u9645\u7528\u91CF\u6D88\u8017\u8D26\u6237\u4F59\u989D",
            models: [{
                icon: l.modelDoubao,
                id: "doubao-seed-2-1-pro-260628",
                chip: "doubao-seed-2-1-pro-260628",
                name: "Doubao-Seed-2.1-pro",
                desc: "\u9762\u5411\u751F\u4EA7\u7EA7\u4EFB\u52A1\uFF0C\u5168\u9762\u5347\u7EA7\u7F16\u7A0B\u3001\u667A\u80FD\u4F53\u4E0E\u591A\u6A21\u6001\u80FD\u529B",
                specs: [{
                    label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                    value: "\u6587\u672C\u3001\u56FE\u50CF\u3001\u89C6\u9891 / \u6587\u672C"
                }, {
                    label: "\u8F93\u5165\u4EF7\u683C",
                    value: "6",
                    tip: "\u5143/\u767E\u4E07 tokens"
                }, {
                    label: "\u8F93\u51FA\u4EF7\u683C",
                    value: "30",
                    tip: "\u5143/\u767E\u4E07 tokens"
                }, {label: "\u4E0A\u4E0B\u6587\u7A97\u53E3", value: "256k"}, {
                    label: "\u6700\u5927\u8F93\u51FA",
                    value: "256k"
                }]
            }, {
                icon: l.modelVideo,
                id: "doubao-seedance-2-0-260128",
                chip: "doubao-seedance-2-0-260128",
                name: "Doubao Seedance 2.0",
                desc: "\u8D85\u5F3A\u7684\u53C2\u8003\u4E00\u81F4\u6027\uFF0C\u6781\u81F4\u62DF\u771F\u7684\u89C6\u542C\u7A33\u5B9A\u6027",
                specs: [{
                    label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                    value: "\u6587\u672C\u3001\u56FE\u50CF\u3001\u89C6\u9891\u3001\u97F3\u9891 / \u89C6\u9891"
                }, {
                    label: "\u8F93\u5165\u4EF7\u683C",
                    value: "16-31",
                    tip: "\u5143/\u767E\u4E07 tokens"
                }, {
                    label: "\u8F93\u51FA\u4EF7\u683C",
                    value: "26-51",
                    tip: "\u5143/\u767E\u4E07 tokens"
                }, {label: "\u89C6\u9891\u5206\u8FA8\u7387", value: "480, 720, 1080"}, {
                    label: "RPM",
                    value: "0.6,0.015",
                    tip: "k"
                }]
            }, {
                icon: l.modelImage,
                id: "doubao-seedream-5-0-pro-260628",
                chip: "doubao-seedream-5-0-pro-260628",
                name: "Doubao-Seedream-5.0-pro",
                desc: "\u7CBE\u51C6\u56FE\u50CF\u7F16\u8F91\uFF0C\u89E3\u9501\u56FE\u5C42\u81EA\u7531",
                specs: [{
                    label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                    value: "\u6587\u672C\u3001\u56FE\u50CF / \u56FE\u50CF"
                }, {
                    label: "\u8F93\u5165\u4EF7\u683C",
                    value: "0.02",
                    tip: "\u5143/\u5F20"
                }, {label: "\u8F93\u51FA\u4EF7\u683C", value: "0.3", tip: "\u5143/\u5F20"}, {
                    label: "IPM",
                    value: "500"
                }]
            }, {
                icon: l.modelSpeech,
                id: "doubao-streaming-asr",
                chip: "Doubao-Seed-ASR-Stream",
                name: "Doubao-\u6D41\u5F0F\u8BED\u97F3\u8BC6\u522B\u672C\u5730",
                desc: "\u8C46\u5305\u8BED\u97F3\u8BC6\u522B\u6A21\u578B\uFF0C\u652F\u6301\u6D41\u5F0F\u8BED\u97F3\u8BC6\u522B",
                specs: [{
                    label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                    value: "\u97F3\u9891 / \u6587\u672C"
                }, {
                    label: "\u63A8\u7406\u5B9A\u4EF7",
                    value: "4.5",
                    tip: "\u5143/\u5C0F\u65F6"
                }, {label: "\u6A21\u578B\u9650\u5236", value: "QPS 10"}]
            }],
            promos: [{
                presentation: "marketing",
                variant: "resource",
                title: "\u52A0\u5165\u8282\u7701\u8BA1\u5212",
                headline: [{
                    type: "default",
                    text: "\u65D7\u8230\u6A21\u578B\u6309\u91CF\u8BA1\u8D39 \u65B0\u5BA2\u4E13\u4EAB"
                }, {type: "headline", text: "5\u6298\u7684"}, {type: "default", text: "\u4F18\u60E0"}],
                benefits: [{
                    infos: [{type: "title", text: "\u989D\u5EA6\u518D\u7FFB\u500D-"}, {
                        type: "text",
                        text: "19\u5143\u5F9738\u5143\u989D\u5EA6\uFF0C\u6216100\u5143\u5F97200\u5143\u989D\u5EA6\uFF0C\u8D2D\u4E70\u540E\u5373\u65F6\u751F\u6548\uFF0C\u5F00\u901A\u6A21\u578B\u540E\uFF0C\u6309\u91CF\u4F7F\u7528\u5373\u53EF\u62B5\u6263"
                    }]
                }, {
                    infos: [{type: "title", text: "\u8DE8\u6A21\u578B\u62B5\u6263"}, {
                        type: "text",
                        text: "\u9664 Seedance 2.0 \u7CFB\u5217\u5916\uFF0C\u5176\u4ED6\u6A21\u578B\u5747\u652F\u6301\u989D\u5EA6\u62B5\u6263"
                    }, {type: "linkLabel", text: "\u67E5\u770B\u53EF\u62B5\u6263\u8303\u56F4"}]
                }],
                offersTitle: "\u65B0\u5BA2\u4E13\u4EAB\uFF5C\u4E8C\u9009\u4E00",
                offers: [{
                    title: "\u4F18\u60E0\u4E00",
                    text: "\u5B9E\u4ED819\u5143\u5F9738\u5143\u989D\u5EA6"
                }, {title: "\u4F18\u60E0\u4E8C", text: "\u5B9E\u4ED8100\u5143\u5F97200\u5143\u989D\u5EA6"}],
                ctaLabel: "\u7ACB\u5373\u83B7\u53D6"
            }, {
                presentation: "marketing",
                variant: "purchased",
                title: "AI \u8282\u7701\u8BA1\u5212\u5DF2\u751F\u6548\uFF0C\u4F7F\u7528\u6A21\u578B\u65F6\u5C06\u81EA\u52A8\u62B5\u6263\u989D\u5EA6\uFF0CSeedance 2.0 \u7CFB\u5217\u6682\u4E0D\u652F\u6301\u7684",
                descriptionLabel: "\u67E5\u770B\u89C4\u5219\u8BE6\u60C5"
            }],
            apiButton: {icon: l.apiLight, label: "API \u63A5\u5165"}
        }, I = {
            id: "agent-plan",
            title: "Agent Plan",
            subtitle: [{
                type: "text",
                text: "\u5957\u9910\u7528\u91CF\u900F\u660E\u5316\uFF0C\u67E5\u770B"
            }, {
                type: "link",
                text: "\u5957\u9910\u8BE6\u60C5",
                href: "https://www.volcengine.com/docs/82379/2366394?lang=zh#c90d28c2"
            }, {
                type: "text",
                text: "\uFF0CSmall \u548C Medium \u5957\u9910\u9650\u65F6\u6298\u6263\uFF0C\u540D\u989D\u6709\u9650\uFF0C\u5148\u5230\u5148\u5F97\uFF0C\u8BE6\u89C1"
            }, {
                type: "link",
                text: "\u6298\u6263\u89C4\u5219",
                href: "https://www.volcengine.com/docs/82379/2525063?lang=zh"
            }, {
                type: "text",
                text: "\uFF0CGLM-5.2 \u7B49\u70ED\u95E8\u6A21\u578B\u9650\u65F6\u52A0\u91CF2.5\u500D\uFF0C\u8BE6\u89C1"
            }, {
                type: "link",
                text: "\u52A0\u91CF\u89C4\u5219",
                href: "https://www.volcengine.com/docs/82379/2533565?lang=zh"
            }],
            tabs: [{
                label: "\u8FDE\u7EED\u5305\u6708",
                discount: "2.5\u6298",
                cards: [{
                    id: "Agent_Plan_Small_month",
                    tier: "Small",
                    ctaIcon: l.subscribeDark,
                    ctaHoverIcon: l.subscribeLight,
                    price: {unit: "\u5143/\u6708", amount: "9.90", list: "40.00"},
                    features: ["\u6BCF\u6708 20,000 Agent \u71C3\u6599\u503C", "\u652F\u6301\u4E3B\u6D41\u70ED\u95E8\u7F16\u7A0B\u6A21\u578B", "Seedream 5.0 lite\u3001\u5411\u91CF\u5316\u6A21\u578B", "\u8054\u7F51\u641C\u7D22 Harness \u5F00\u7BB1\u5373\u7528"]
                }, {
                    id: "Agent_Plan_Medium_month",
                    tier: "Medium",
                    badge: "\u8282\u770116%",
                    featured: !0,
                    ctaIcon: l.subscribeDark,
                    ctaHoverIcon: l.subscribeLight,
                    price: {unit: "\u5143/\u6708", amount: "49.90", list: "200.00"},
                    features: ["Agent \u63A2\u7D22\u4E0E\u5E94\u7528", "\u514D\u8D39\u8D60\u9001 ArkClaw \u8F7B\u91CF\u7248", "\u65E5\u5E38\u9AD8\u9891\u989D\u5EA6 5\xd7 Small \u7528\u91CF", "\u9886\u5148\u652F\u6301 Seedance 2.0 \u7CFB\u5217", "\u591A\u6A21\u6001\u53CA\u8054\u7F51\u641C\u7D22 Harness \u5347\u7EA7"]
                }, {
                    id: "Agent_Plan_Large_month",
                    tier: "Large",
                    ctaIcon: l.subscribeDark,
                    ctaHoverIcon: l.subscribeLight,
                    price: {unit: "\u5143/\u6708", amount: "500.00", list: "2000.00"},
                    features: ["\u591A\u6A21\u6001 & Harness \u6DF1\u5EA6\u5E94\u7528", "\u514D\u8D39\u8D60\u9001 ArkClaw \u8F7B\u91CF\u7248", "\u590D\u6742\u91CD\u5EA6\u5F00\u53D1 12.5\xd7 Small \u7528\u91CF", "\u9AD8\u9636\u591A\u6A21\u6001\u53CA\u8054\u7F51\u641C\u7D22 Harness"]
                }, {
                    id: "Agent_Plan_Max_month",
                    tier: "Max",
                    soldOut: !0,
                    ctaIcon: l.subscribeDark,
                    ctaHoverIcon: l.subscribeLight,
                    price: {unit: "\u5143/\u6708", amount: "1000.00", list: "4000.00"},
                    features: ["\u591A\u6A21\u6001&Harness\u751F\u4EA7\u7EA7\u5E94\u7528", "\u514D\u8D39\u8D60\u9001 ArkClaw \u8F7B\u91CF\u7248", "\u9876\u914D\u65D7\u8230\u989D\u5EA6 25\xd7 Small \u7528\u91CF", "\u6781\u81F4\u591A\u6A21\u6001\u53CA\u8054\u7F51\u641C\u7D22 Harness"]
                }]
            }, {
                label: "\u8FDE\u7EED\u5305\u5B63",
                discount: "4.9\u6298",
                cards: [{
                    id: "Agent_Plan_Small_quarter",
                    tier: "Small",
                    ctaIcon: l.subscribeDark,
                    ctaHoverIcon: l.subscribeLight,
                    price: {unit: "\u5143/\u5B63", amount: "29.70", list: "120.00"},
                    features: ["\u6BCF\u6708 20,000 Agent \u71C3\u6599\u503C", "\u652F\u6301\u4E3B\u6D41\u70ED\u95E8\u7F16\u7A0B\u6A21\u578B", "Seedream 5.0 lite\u3001\u5411\u91CF\u5316\u6A21\u578B", "\u8054\u7F51\u641C\u7D22 Harness \u5F00\u7BB1\u5373\u7528"]
                }, {
                    id: "Agent_Plan_Medium_quarter",
                    tier: "Medium",
                    badge: "\u8282\u770116%",
                    featured: !0,
                    ctaIcon: l.subscribeDark,
                    ctaHoverIcon: l.subscribeLight,
                    price: {unit: "\u5143/\u5B63", amount: "149.70", list: "600.00"},
                    features: ["Agent \u63A2\u7D22\u4E0E\u5E94\u7528", "\u514D\u8D39\u8D60\u9001 ArkClaw \u8F7B\u91CF\u7248", "\u65E5\u5E38\u9AD8\u9891\u989D\u5EA6 5\xd7 Small \u7528\u91CF", "\u9886\u5148\u652F\u6301 Seedance 2.0 \u7CFB\u5217", "\u591A\u6A21\u6001\u53CA\u8054\u7F51\u641C\u7D22 Harness \u5347\u7EA7"]
                }, {
                    id: "Agent_Plan_Large_quarter",
                    tier: "Large",
                    ctaIcon: l.subscribeDark,
                    ctaHoverIcon: l.subscribeLight,
                    price: {unit: "\u5143/\u5B63", amount: "1500.00", list: "6000.00"},
                    features: ["\u591A\u6A21\u6001 & Harness \u6DF1\u5EA6\u5E94\u7528", "\u514D\u8D39\u8D60\u9001 ArkClaw \u8F7B\u91CF\u7248", "\u590D\u6742\u91CD\u5EA6\u5F00\u53D1 12.5\xd7 Small \u7528\u91CF", "\u9AD8\u9636\u591A\u6A21\u6001\u53CA\u8054\u7F51\u641C\u7D22 Harness"]
                }, {
                    id: "Agent_Plan_Max_quarter",
                    tier: "Max",
                    soldOut: !0,
                    ctaIcon: l.subscribeDark,
                    ctaHoverIcon: l.subscribeLight,
                    price: {unit: "\u5143/\u5B63", amount: "3000.00", list: "12000.00"},
                    features: ["\u591A\u6A21\u6001&Harness\u751F\u4EA7\u7EA7\u5E94\u7528", "\u514D\u8D39\u8D60\u9001 ArkClaw \u8F7B\u91CF\u7248", "\u9876\u914D\u65D7\u8230\u989D\u5EA6 25\xd7 Small \u7528\u91CF", "\u6781\u81F4\u591A\u6A21\u6001\u53CA\u8054\u7F51\u641C\u7D22 Harness"]
                }]
            }, {
                label: "\u8FDE\u7EED\u5305\u5E74",
                discount: "8.7\u6298",
                cards: [{
                    id: "Agent_Plan_Small_year",
                    tier: "Small",
                    ctaIcon: l.subscribeDark,
                    ctaHoverIcon: l.subscribeLight,
                    price: {unit: "\u5143/\u5E74", amount: "118.80", list: "480.00"},
                    features: ["\u6BCF\u6708 20,000 Agent \u71C3\u6599\u503C", "\u652F\u6301\u4E3B\u6D41\u70ED\u95E8\u7F16\u7A0B\u6A21\u578B", "Seedream 5.0 lite\u3001\u5411\u91CF\u5316\u6A21\u578B", "\u8054\u7F51\u641C\u7D22 Harness \u5F00\u7BB1\u5373\u7528"]
                }, {
                    id: "Agent_Plan_Medium_year",
                    tier: "Medium",
                    badge: "\u8282\u770116%",
                    featured: !0,
                    ctaIcon: l.subscribeDark,
                    ctaHoverIcon: l.subscribeLight,
                    price: {unit: "\u5143/\u5E74", amount: "598.80", list: "2400.00"},
                    features: ["Agent \u63A2\u7D22\u4E0E\u5E94\u7528", "\u514D\u8D39\u8D60\u9001 ArkClaw \u8F7B\u91CF\u7248", "\u65E5\u5E38\u9AD8\u9891\u989D\u5EA6 5\xd7 Small \u7528\u91CF", "\u9886\u5148\u652F\u6301 Seedance 2.0 \u7CFB\u5217", "\u591A\u6A21\u6001\u53CA\u8054\u7F51\u641C\u7D22 Harness \u5347\u7EA7"]
                }, {
                    id: "Agent_Plan_Large_year",
                    tier: "Large",
                    ctaIcon: l.subscribeDark,
                    ctaHoverIcon: l.subscribeLight,
                    price: {unit: "\u5143/\u5E74", amount: "6000.00", list: "24000.00"},
                    features: ["\u591A\u6A21\u6001 & Harness \u6DF1\u5EA6\u5E94\u7528", "\u514D\u8D39\u8D60\u9001 ArkClaw \u8F7B\u91CF\u7248", "\u590D\u6742\u91CD\u5EA6\u5F00\u53D1 12.5\xd7 Small \u7528\u91CF", "\u9AD8\u9636\u591A\u6A21\u6001\u53CA\u8054\u7F51\u641C\u7D22 Harness"]
                }, {
                    id: "Agent_Plan_Max_year",
                    tier: "Max",
                    soldOut: !0,
                    ctaIcon: l.subscribeDark,
                    ctaHoverIcon: l.subscribeLight,
                    price: {unit: "\u5143/\u5E74", amount: "12000.00", list: "48000.00"},
                    features: ["\u591A\u6A21\u6001&Harness\u751F\u4EA7\u7EA7\u5E94\u7528", "\u514D\u8D39\u8D60\u9001 ArkClaw \u8F7B\u91CF\u7248", "\u9876\u914D\u65D7\u8230\u989D\u5EA6 25\xd7 Small \u7528\u91CF", "\u6781\u81F4\u591A\u6A21\u6001\u53CA\u8054\u7F51\u641C\u7D22 Harness"]
                }]
            }]
        };
        l.subscribeDark, l.subscribeLight, l.subscribeDark, l.subscribeLight, l.subscribeDark, l.subscribeLight, l.subscribeDark, l.subscribeLight, l.subscribeDark, l.subscribeLight, l.subscribeDark, l.subscribeLight, l.subscribeDark, l.subscribeLight
    }, 68244: function (M, e, t) {
        t.d(e, {
            wZ: function () {
                return r
            }, Kl: function () {
                return I
            }, yY: function () {
                return g
            }, cA: function () {
                return o
            }, mK: function () {
                return l
            }, a8: function () {
                return j
            }
        });
        var n = t(20745);
        t(97458), t(52983);
        var i = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNTM5OV82NjkzKSIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPHBhdGggZD0iTTIyLjIwNTEgMjAuNzY0QzIyLjc5MiAxOS43NDc0IDI0LjI1OTcgMTkuNzQ3NCAyNC44NDY3IDIwLjc2NEwzMS4xMjk5IDMxLjY0NzhMMzQuMDI0NCAyNi42MzUxQzM0LjcyODggMjUuNDE1NSAzNi40ODk5IDI1LjQxNTUgMzcuMTk0MyAyNi42MzUxTDQzLjkyOTcgMzguMzAxMUM0NC42MzMxIDM5LjUyMDggNDMuNzUyNyA0MS4wNDU4IDQyLjM0NDcgNDEuMDQ2M0gzMy45NDQzQzMzLjkzNSA0MS4wNDY0IDMzLjkyNTMgNDEuMDQ4MiAzMy45MTYgNDEuMDQ4MkgxMy4xMzU3QzExLjk2MTggNDEuMDQ4MiAxMS4yMjg2IDM5Ljc3NjggMTEuODE1NCAzOC43NjAxTDIyLjIwNTEgMjAuNzY0Wk0zNy41NDk4IDE1LjE2OTNDMzcuNzI2NSAxNC42NzgxIDM4LjQyMDkgMTQuNjc4MSAzOC41OTc2IDE1LjE2OTNDMzkuMjQyOSAxNi45Njc4IDQwLjcwMjggMTguMzU0MSA0Mi41MzIyIDE4LjkwNTZDNDMuMDcxMiAxOS4wNjgyIDQzLjA3MTIgMTkuODMyIDQyLjUzMjIgMTkuOTk0NUM0MC43MDI4IDIwLjU0NjEgMzkuMjQyOSAyMS45MzI0IDM4LjU5NzYgMjMuNzMwOEMzOC40MjEgMjQuMjIyMiAzNy43MjY1IDI0LjIyMjEgMzcuNTQ5OCAyMy43MzA4TDM3LjQ1MzEgMjMuNDYzM0MzNi44NjI1IDIxLjgxNzIgMzUuNTg2OCAyMC41MDc5IDMzLjk1NiAxOS44NzYzQzMzLjU2NjMgMTkuNzI1NCAzMy41NjYzIDE5LjE3NDcgMzMuOTU2IDE5LjAyMzhDMzUuNTg2NiAxOC4zOTI0IDM2Ljg2MjUgMTcuMDgzNiAzNy40NTMxIDE1LjQzNzlMMzcuNTQ5OCAxNS4xNjkzWiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzUzOTlfNjY5MykiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl81Mzk5XzY2OTMiIHgxPSIzLjUiIHkxPSIyLjMzMzM0IiB4Mj0iNjMuMzcxNiIgeTI9IjMwLjM4MjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0VENkVDNiIgc3RvcC1vcGFjaXR5PSIwLjA2Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzg5NUVGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfNTM5OV82NjkzIiB4MT0iMTEuNjEyMyIgeTE9IjE0LjYzMTIiIHgyPSI0My4xNjU1IiB5Mj0iNDIuNzQ0NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRUQ2RUM2Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzg5NUVGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=",
            a = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNTQwMF82NzM5KSIgZmlsbC1vcGFjaXR5PSIwLjEyIi8+CjxwYXRoIGQ9Ik0yOCAxMFY0NiIgc3Ryb2tlPSJ1cmwoI3BhaW50MV9saW5lYXJfNTQwMF82NzM5KSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtZGFzaGFycmF5PSI0IDQiLz4KPHBhdGggZD0iTTI4IDEzLjYyNkMzMC45MTE1IDEzLjYyNiAyOC45MTIxIDI1LjY0NDQgMzEuODIzMiAyNS42NDU1QzMxLjg4MjUgMjUuNjQ1NSAzMS45NDE2IDI1LjY0MDEgMzIgMjUuNjMxOFYzMC4zNjcyQzMxLjk0MTYgMzAuMzU4OSAzMS44ODI0IDMwLjM1NDUgMzEuODIzMiAzMC4zNTQ1QzI4LjkxMjIgMzAuMzU1NiAzMC45MTE1IDQyLjM3NCAyOCA0Mi4zNzRDMjUuMDg4NyA0Mi4zNzMxIDI1LjA4ODMgMzAuMzU0NSAyMi4xNzY4IDMwLjM1NDVDMTkuNzk1IDMwLjM1NSAyMC4wNTk0IDM3LjIyMTYgMTcuOTQyNCAzNy4yMjI3QzE1LjgyNDkgMzcuMjIyNyAxNi4wODkgMzAuMzU1MSAxMy43MDcgMzAuMzU0NUMxMS44NTQyIDMwLjM1NDUgMTIuMTE4NSAzMy40ODU0IDEwLjAwMSAzMy40ODU0VjIyLjUxNDZDMTIuMTE4NiAyMi41MTQ2IDExLjg1NDIgMjUuNjQ1NSAxMy43MDcgMjUuNjQ1NUMxNi4wODkgMjUuNjQ0OSAxNS44MjQ5IDE4Ljc3NzMgMTcuOTQyNCAxOC43NzczQzIwLjA1OTQgMTguNzc4NCAxOS43OTUgMjUuNjQ1IDIyLjE3NjggMjUuNjQ1NUMyNS4wODgzIDI1LjY0NTUgMjUuMDg4NyAxMy42MjY5IDI4IDEzLjYyNlpNNDQuOTI4NyAyMUM0NS41MjAzIDIxLjAwMDEgNDUuOTk5OSAyMS40Nzk3IDQ2IDIyLjA3MTNWMjQuMDExN0M0NiAyNC41NDI3IDQ1LjYxMzMgMjQuOTgxNSA0NS4xMDY0IDI1LjA2NjRMNDQuMDY3NCAyNC43MjU2QzQzLjA5NzYgMjQuNDA3MiA0Mi4zMzcgMjMuNjQ3MiA0Mi4wMTc2IDIyLjY3NzdMNDEuNjU3MiAyMS41ODU5TDQxLjI0NzEgMjIuODMyQzQwLjk1NjUgMjMuNzEzNiA0MC4yOTg2IDI0LjQyNjQgMzkuNDQzNCAyNC43ODcxTDM4LjczNTQgMjUuMDg1OUwzOS40NDM0IDI1LjM4MzhDNDAuMTA4NyAyNS42NjQ0IDQwLjY1MzYgMjYuMTU4OSA0MSAyNi43NzkzVjMzLjkyODdDNDEgMzQuNTIwNCA0MC41MjA0IDM0Ljk5OTkgMzkuOTI4NyAzNUgzOC4wNzEzQzM3LjQ3OTYgMzQuOTk5OSAzNyAzNC41MjA0IDM3IDMzLjkyODdWMjYuMTU1M0MzNyAyNS41NjM2IDM2LjUyMDQgMjUuMDgzMSAzNS45Mjg3IDI1LjA4M0gzMy4wNzEzQzMyLjQ3OTYgMjUuMDgyOSAzMiAyNC42MDM0IDMyIDI0LjAxMTdWMjIuMDcxM0MzMi4wMDAxIDIxLjQ3OTcgMzIuNDc5NyAyMS4wMDAxIDMzLjA3MTMgMjFINDQuOTI4N1oiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl81NDAwXzY3MzkpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfNTQwMF82NzM5IiB4MT0iLTAuMDAxNTE3MDMiIHkxPSItNC4xNDEzNiIgeDI9IjY2LjExMTQiIHkyPSI1My4xOTk5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNFOEZGNzQiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA5MkMxIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl81NDAwXzY3MzkiIHgxPSIyOC41IiB5MT0iMTAiIHgyPSIyOC41IiB5Mj0iNDYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzkzRDc5MSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzN0FDQUYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyXzU0MDBfNjczOSIgeDE9IjEwIiB5MT0iMTQiIHgyPSI0Mi4zMDk3IiB5Mj0iNDAuMzA3OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRThGRjc0Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwOTJDMSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=",
            c = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNTQwMF82NzA1KSIgZmlsbC1vcGFjaXR5PSIwLjEyIi8+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF81NDAwXzY3MDUpIj4KPHBhdGggZD0iTTE3Ljk0MTcgMTguNzc2OUMyMC4wNTkzIDE4Ljc3NjkgMTkuNzk0NiAyNS42NDUyIDIyLjE3NjggMjUuNjQ1MkMyNS4wODg1IDI1LjY0NTIgMjUuMDg4NSAxMy42MjU3IDI4LjAwMDEgMTMuNjI1N0MzMC45MTE4IDEzLjYyNTcgMzAuOTExOCAyNS42NDUyIDMzLjgyMzUgMjUuNjQ1MkMzNi4yMDU3IDI1LjY0NTIgMzUuOTQxIDE4Ljc3NjkgMzguMDU4NiAxOC43NzY5QzQwLjE3NjEgMTguNzc2OSAzOS45MTE1IDI1LjY0NTIgNDIuMjkzNyAyNS42NDUyQzQ0LjE0NjYgMjUuNjQ1MiA0My44ODE5IDIyLjUxNDMgNDUuOTk5NSAyMi41MTQzVjMzLjQ4NUM0My44ODE5IDMzLjQ4NSA0NC4xNDY2IDMwLjM1NDEgNDIuMjkzNyAzMC4zNTQxQzM5LjkxMTUgMzAuMzU0MSA0MC4xNzYxIDM3LjIyMjMgMzguMDU4NiAzNy4yMjIzQzM1Ljk0MSAzNy4yMjIzIDM2LjIwNTcgMzAuMzU0MSAzMy44MjM1IDMwLjM1NDFDMzAuOTExOCAzMC4zNTQxIDMwLjkxMTggNDIuMzczNSAyOC4wMDAxIDQyLjM3MzVDMjUuMDg4NSA0Mi4zNzM1IDI1LjA4ODUgMzAuMzU0MSAyMi4xNzY4IDMwLjM1NDFDMTkuNzk0NiAzMC4zNTQxIDIwLjA1OTMgMzcuMjIyMyAxNy45NDE3IDM3LjIyMjNDMTUuODI0MSAzNy4yMjIzIDE2LjA4ODggMzAuMzU0MSAxMy43MDY2IDMwLjM1NDFDMTEuODUzNyAzMC4zNTQxIDEyLjExODQgMzMuNDg1IDEwLjAwMDggMzMuNDg1VjIyLjUxNDNDMTIuMTE4NCAyMi41MTQzIDExLjg1MzcgMjUuNjQ1MiAxMy43MDY2IDI1LjY0NTJDMTYuMDg4OCAyNS42NDUyIDE1LjgyNDEgMTguNzc2OSAxNy45NDE3IDE4Ljc3NjlaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXJfNTQwMF82NzA1KSIvPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfNTQwMF82NzA1IiB4MT0iLTAuMDAxNTE3MDMiIHkxPSItNC4xNDEzNiIgeDI9IjY2LjExMTQiIHkyPSI1My4xOTk5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNFOEZGNzQiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA5MkMxIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl81NDAwXzY3MDUiIHgxPSI5Ljk5OTg0IiB5MT0iMTMuOTk5OCIgeDI9IjQyLjMwOTIiIHkyPSI0MC4zMDc0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNFOEZGNzQiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA5MkMxIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNTQwMF82NzA1Ij4KPHJlY3Qgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuMDAwMiA5Ljk5OTYzKSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
            u = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNTM5OV82Njc5KSIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPHBhdGggZD0iTTQwLjk4NzcgMTUuMTY1OEM0Mi42NDk4IDE1LjE2NiA0My45OTc1IDE2LjUxMzUgNDMuOTk3NSAxOC4xNzU1VjM3LjgyNjlDNDMuOTk2OSAzOS40ODg1IDQyLjY0OTQgNDAuODM2NCA0MC45ODc3IDQwLjgzNjdIMTUuMDA3M0MxMy4zNDU2IDQwLjgzNjQgMTEuOTk3MSAzOS40ODg1IDExLjk5NjUgMzcuODI2OVYxOC4xNzU1QzExLjk5NjUgMTYuNTEzNSAxMy4zNDUyIDE1LjE2NiAxNS4wMDczIDE1LjE2NThINDAuOTg3N1pNMjUuNTk0MiAyMy40Njg1QzI0Ljg3IDIzLjEwNjYgMjQuMDE4MiAyMy42MzI1IDI0LjAxOCAyNC40NDIxVjMxLjU1NjRDMjQuMDE4NSAzMi4zNjU2IDI0Ljg3MDIgMzIuODkyNCAyNS41OTQyIDMyLjUzMUwzMi43MDg0IDI4Ljk3MzRDMzMuNTEwNCAyOC41NzE4IDMzLjUxMDMgMjcuNDI2OSAzMi43MDg0IDI3LjAyNTFMMjUuNTk0MiAyMy40Njg1WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzUzOTlfNjY3OSkiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl81Mzk5XzY2NzkiIHgxPSIzLjUiIHkxPSIyLjMzMzM0IiB4Mj0iNjMuMzcxNiIgeTI9IjMwLjM4MjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0JFOTJGRiIgc3RvcC1vcGFjaXR5PSIwLjA2Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzZDNDFGOSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfNTM5OV82Njc5IiB4MT0iOC4zNjc5NyIgeTE9IjQuNDI0MjQiIHgyPSI1Ni41ODA4IiB5Mj0iNDIuNjQ0NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjQkU5MkZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzZDNDFGOSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=",
            N = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNTM5OV82NjM1KSIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPHBhdGggZD0iTTM2LjE0NTIgMjhDMzcuMTAwMiAyOC4wMDAxIDM4LjI2NzggMjguNDI4MiAzOS40NjU1IDI5LjE3ODdMMzkuNTAxNiAyOS4xOTkyTDM5LjUzNzggMjkuMTc3OEM0MC43MzY4IDI4LjQyNjUgNDEuOTA0IDI4LjAwMTIgNDIuODU5IDI4LjAwMUM0My41MTEzIDI4LjAwMSA0NC4wNTA1IDI4LjIwMjMgNDQuNDI1NCAyOC41NzcyQzQ1LjEwNjEgMjkuMjU4NSA0NS4xOTYxIDMwLjQyMTIgNDQuNjM2NCAzMS44ODA5QzQ0LjQxNzUgMzIuNDMzMSA0NC4xNDYgMzIuOTYzOSA0My44MjY4IDMzLjQ2NDlMNDMuODA1MyAzMy41MDFMNDMuODI4OCAzMy41MzcxQzQ0LjE0NzkgMzQuMDM4NSA0NC40MTgzIDM0LjU2OTggNDQuNjM1NCAzNS4xMjMxQzQ1LjE2MTIgMzYuNDg5MSA0NS4xMTU3IDM3LjU5NzMgNDQuNTQ3NSAzOC4yOTAxTDQ0LjQyNTQgMzguNDIyOVYzOC40MjM4QzQ0LjA1MTMgMzguNzk4NiA0My41MTMgMzkuMDAwOCA0Mi44NjEgMzkuMDAxQzQxLjkwNTggMzkuMDAxIDQwLjczNjMgMzguNTczNyAzOS41Mzc4IDM3LjgyMjNMMzkuNTAzNiAzNy44MDA4TDM5LjQ2NTUgMzcuODIyM0MzOC4yNjY0IDM4LjU3MjggMzcuMDk5NyAzOSAzNi4xNDMyIDM5QzM1LjQ5MjUgMzguOTk5OSAzNC45NTMyIDM4Ljc5NzggMzQuNTc5NyAzOC40MjI5QzMzLjg5OTMgMzcuNzQyMiAzMy44MTA2IDM2LjU3ODMgMzQuMzcwOCAzNS4xMjExQzM0LjU2ODggMzQuNjA2MiAzNC44NDM0IDM0LjA3MTYgMzUuMTc5NCAzMy41MzYxTDM1LjIwMDggMzMuNTAxTDM1LjE3ODQgMzMuNDYyOUMzNC44NTg4IDMyLjk2MTUgMzQuNTg5MyAzMi40MzEyIDM0LjM3MDggMzEuODc4OUMzMy44MTA0IDMwLjQyMTUgMzMuOTAwNyAyOS4yNTc2IDM0LjU3OTcgMjguNTc2MkMzNC45NTMzIDI4LjIwMTMgMzUuNDkyOSAyOCAzNi4xNDUyIDI4Wk0zNS43NjMzIDM0LjQ3MzZDMzUuNTgxNSAzNC43OTU1IDM1LjQyMzEgMzUuMTMxMSAzNS4yODg3IDM1LjQ3NTZWMzUuNDczNkMzNS4wOTM2IDM1Ljk3OTEgMzQuOTkzNyAzNi40NDE1IDM0Ljk4NzkgMzYuODI2MkMzNC45ODIzIDM3LjIwODkgMzUuMDczNyAzNy41Mjg2IDM1LjI3NiAzNy43Mjk1QzM1LjQ3MDYgMzcuOTI1MyAzNS43NjgyIDM4LjAxNjYgMzYuMTQ1MiAzOC4wMTY2QzM2LjgxMyAzOC4wMTY1IDM3LjY1MjUgMzcuNzMwOSAzOC41MjkgMzcuMjM5M0wzOC42MTY5IDM3LjE4ODVMMzguNTM3OCAzNy4xMjdDMzcuNTQxNiAzNi4zNTcgMzYuNjQ2NiAzNS40NjI5IDM1Ljg3NjYgMzQuNDY2OEwzNS44MTUxIDM0LjM4NjdMMzUuNzYzMyAzNC40NzM2Wk00My4xMjk1IDM0LjQ2NjhDNDIuMzYwOCAzNS40NjM0IDQxLjQ2NjcgMzYuMzU2OSA0MC40NzA0IDM3LjEyNkw0MC4zODkzIDM3LjE4ODVMNDAuNDc4MiAzNy4yMzkzQzQxLjM1NDYgMzcuNzMxNiA0Mi4xOTM1IDM4LjAxNjYgNDIuODYyIDM4LjAxNjZDNDMuMjM4MSAzOC4wMTY2IDQzLjUzNTQgMzcuOTI1MyA0My43MzIxIDM3LjcyOTVDNDMuOTMzIDM3LjUyNzkgNDQuMDIyOSAzNy4yMDkgNDQuMDE3MiAzNi44MjYyQzQ0LjAxMjkgMzYuNDQxNSA0My45MTE4IDM1Ljk3OTcgNDMuNzE3NCAzNS40NzU2QzQzLjU4MTYgMzUuMTMxMSA0My40MjQzIDM0Ljc5NTUgNDMuMjQxOSAzNC40NzM2TDQzLjE5MiAzNC4zODY3TDQzLjEyOTUgMzQuNDY2OFpNMzkuNDYzNSAzMC40MTk5QzM4LjI4NzcgMzEuMjYwNiAzNy4yNTcxIDMyLjI4OTEgMzYuNDEzNyAzMy40NjI5TDM2LjM4NTQgMzMuNTAxTDM2LjQxMzcgMzMuNTQwMUMzNy4yNTg4IDM0LjcxMjEgMzguMjg4OCAzNS43Mzk4IDM5LjQ2MzUgMzYuNTgxMUwzOS41MDM2IDM2LjYwODRMMzkuNTQxNyAzNi41ODExVjM2LjU4MkM0MC43MTggMzUuNzQxOCA0MS43NDkzIDM0LjcxMzcgNDIuNTkzNCAzMy41NDAxTDQyLjYyMTcgMzMuNTAxTDQyLjU5MzQgMzMuNDYyOUM0MS43NDc5IDMyLjI5MDUgNDAuNzE2OSAzMS4yNjMzIDM5LjU0MTcgMzAuNDIxOUwzOS41MDM2IDMwLjM5MjZMMzkuNDYzNSAzMC40MTk5Wk0yNS4zOTIyIDE5LjI4NDJDMjUuODAxMSAxOC43MTg2IDI2LjY0MzUgMTguNzE4NiAyNy4wNTI0IDE5LjI4NDJMMzIuMzU2MSAyNi42Mjc5QzMyLjUzOTcgMjYuODgxOCAzMi45MTYgMjYuODg2OSAzMy4xMDcxIDI2LjYzODdMMzQuOTkwOSAyNC4xOTE0QzM1LjQwMDkgMjMuNjU4NSAzNi4yMDQ5IDIzLjY1ODQgMzYuNjE0OSAyNC4xOTE0TDM5LjU4NDYgMjguMDUyOEMzOS41NTg0IDI4LjA2NzMgMzkuNTMxNyAyOC4wODA5IDM5LjUwNTUgMjguMDk1N0MzOC4zNzgyIDI3LjQ1ODYgMzcuMjExIDI3LjA1MTEgMzYuMTUwMSAyNy4wNTA4QzM1LjMwMzMgMjcuMDUwOSAzNC41MDA1IDI3LjMxNDYgMzMuOTExOCAyNy45MDUzQzMyLjgzNDUgMjguOTg2MiAzMi44Nzg2IDMwLjYzMTcgMzMuNDg3OSAzMi4yMTc4VjMyLjIxODhMMzMuNDkwOSAzMi4yMjY2TDMzLjQ5MTkgMzIuMjI4NUMzMy42NjQ3IDMyLjY2NTEgMzMuODY3MyAzMy4wOTAyIDM0LjA5ODMgMzMuNUMzMy44NTc5IDMzLjkyNDkgMzMuNjUyNCAzNC4zNTQzIDMzLjQ4ODkgMzQuNzc5M0MzMy4zMTUyIDM1LjIzMTMgMzMuMTg5NiAzNS42ODg2IDMzLjEyMDggMzYuMTM1OEgyNy44ODI1QzI3Ljg3OCAzNi4xMzU3IDI3Ljg3MzMgMzYuMTM0OSAyNy44Njg4IDM2LjEzNDhIMTUuMjI1M0MxNC4zOTAyIDM2LjEzNDQgMTMuOTA2NyAzNS4xODggMTQuMzk1MiAzNC41MTA4TDI1LjM5MjIgMTkuMjg0MlpNMzkuNjA2MSAzMi4yNjY2QzM5Ljc3MzQgMzIuMjgxMyAzOS45MzY3IDMyLjMyOTYgNDAuMDg0NiAzMi40MDkyQzQwLjM2OTUgMzIuNTU1NiA0MC41ODYgMzIuODA3MSA0MC42ODkxIDMzLjExMDRDNDAuNzkyMSAzMy40MTM3IDQwLjc3MzEgMzMuNzQ1NSA0MC42MzY0IDM0LjAzNTJDNDAuNDk5NiAzNC4zMjQ2IDQwLjI1NjIgMzQuNTQ5OSAzOS45NTY3IDM0LjY2MzFDMzkuNjU3IDM0Ljc3NjIgMzkuMzI1IDM0Ljc2ODUgMzkuMDMwOSAzNC42NDE2TDM5LjAzMTkgMzQuNjQzNkMzOC44NzY0IDM0LjU4MDIgMzguNzM0NyAzNC40ODQ5IDM4LjYxNjkgMzQuMzY1M0MzOC40OTkzIDM0LjI0NTggMzguNDA3MyAzNC4xMDM0IDM4LjM0NjMgMzMuOTQ3M0MzOC4yODU0IDMzLjc5MDkgMzguMjU2NiAzMy42MjI5IDM4LjI2MjQgMzMuNDU1MUMzOC4yNjgyIDMzLjI4NzQgMzguMzA4MSAzMy4xMjI1IDM4LjM3OTUgMzIuOTcwN0MzOC40NTExIDMyLjgxODkgMzguNTUyNyAzMi42ODI2IDM4LjY3ODQgMzIuNTcxM0MzOC44MDQxIDMyLjQ2MDEgMzguOTUxNiAzMi4zNzU4IDM5LjExMSAzMi4zMjMzQzM5LjI3MDMgMzIuMjcwOCAzOS40MzkgMzIuMjUyIDM5LjYwNjEgMzIuMjY2NlpNMzYuMTQ1MiAyOC45ODU0QzM1LjgxNTQgMjguOTg1NCAzNS41NDY4IDI5LjA1NTYgMzUuMzUzMiAyOS4yMDQxTDM1LjI3NTEgMjkuMjczNUMzNS4wNzQyIDI5LjQ3NTEgMzQuOTgyMyAyOS43OTI0IDM0Ljk4NzkgMzAuMTc1OEMzNC45OTIzIDMwLjU2MDYgMzUuMDk0MyAzMS4wMjI5IDM1LjI4ODcgMzEuNTI2NEMzNS40MTI1IDMxLjg1NDYgMzUuNTc2NyAzMi4xODk5IDM1Ljc2NjMgMzIuNTI3NEwzNS44MTUxIDMyLjYxNTNMMzUuODc1NiAzMi41MzUyQzM2LjY0NTIgMzEuNTM4NyAzNy41NDAxIDMwLjY0NDMgMzguNTM2OCAyOS44NzVMMzguNjE2OSAyOS44MTI1TDM4LjUyOSAyOS43NjI3QzM3LjY1MzEgMjkuMjcwNCAzNi44MTMgMjguOTg1NCAzNi4xNDUyIDI4Ljk4NTRaTTQyLjg2MiAyOC45ODU0QzQyLjE5MzQgMjguOTg1NCA0MS4zNTQ0IDI5LjI3MTYgNDAuNDc3MiAyOS43NjQ3TDQwLjM4ODMgMjkuODEzNUw0MC40NzA0IDI5Ljg3NUM0MS40NjY3IDMwLjY0NDMgNDIuMzYwOSAzMS41Mzg0IDQzLjEyOTUgMzIuNTM1Mkw0My4xOTAxIDMyLjYxNTNMNDMuMjQxOSAzMi41MjgzQzQzLjM3NzYgMzIuMjg3IDQzLjUwMTQgMzIuMDM4NiA0My42MTIgMzEuNzg0Mkw0My43MTc0IDMxLjUyNzRDNDMuOTExMiAzMS4wMjMxIDQ0LjAxMjkgMzAuNTYwNiA0NC4wMTcyIDMwLjE3NThDNDQuMDIyOSAyOS43OTI2IDQzLjkzMjUgMjkuNDc1MSA0My43MzExIDI5LjI3MzVDNDMuNTM2NiAyOS4wNzc1IDQzLjIzODkgMjguOTg1NCA0Mi44NjIgMjguOTg1NFoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl81Mzk5XzY2MzUpIi8+CjxwYXRoIGQ9Ik0xMS45NjY4IDM5QzEyLjA5MzMgMzkgMTIuMjE5IDM5LjAyNDkgMTIuMzM1OSAzOS4wNzMyQzEyLjQ1MjkgMzkuMTIxNyAxMi41NTk5IDM5LjE5MjcgMTIuNjQ5NCAzOS4yODIyQzEyLjczODkgMzkuMzcxNyAxMi44MSAzOS40Nzg4IDEyLjg1ODQgMzkuNTk1N0MxMi45MDY3IDM5LjcxMjQgMTIuOTMxNiAzOS44Mzc2IDEyLjkzMTYgMzkuOTYzOVY0Mi42MzM4QzEyLjkzMTYgNDIuODc1NCAxMy4xMjc1IDQzLjA3MTMgMTMuMzY5MSA0My4wNzEzSDE2LjAzODFDMTYuMTY0NiA0My4wNzEzIDE2LjI5MDMgNDMuMDk2MiAxNi40MDcyIDQzLjE0NDVDMTYuNTI0MiA0My4xOTMgMTYuNjMxMSA0My4yNjQgMTYuNzIwNyA0My4zNTM1QzE2LjgxMDMgNDMuNDQzMSAxNi44ODEyIDQzLjU1IDE2LjkyOTcgNDMuNjY3QzE2Ljk3ODEgNDMuNzgzOSAxNy4wMDI5IDQzLjkwOTYgMTcuMDAyOSA0NC4wMzYxQzE3LjAwMjkgNDQuMTYyNSAxNi45NzggNDQuMjg3NiAxNi45Mjk3IDQ0LjQwNDNDMTYuODgxMiA0NC41MjEzIDE2LjgxMDIgNDQuNjI4MiAxNi43MjA3IDQ0LjcxNzhDMTYuNjMxMSA0NC44MDczIDE2LjUyNDIgNDQuODc4MyAxNi40MDcyIDQ0LjkyNjhDMTYuMjkwMyA0NC45NzUxIDE2LjE2NDYgNDUgMTYuMDM4MSA0NUgxMi4yODkxQzExLjk0ODEgNDUgMTEuNjIxIDQ0Ljg2NDIgMTEuMzc5OSA0NC42MjNDMTEuMTM4OCA0NC4zODE5IDExLjAwMjkgNDQuMDU0OSAxMS4wMDI5IDQzLjcxMzlWMzkuOTYzOUMxMS4wMDMgMzkuNzA4MyAxMS4xMDQ0IDM5LjQ2MyAxMS4yODUyIDM5LjI4MjJDMTEuNDY1OSAzOS4xMDE1IDExLjcxMTIgMzkuMDAwMSAxMS45NjY4IDM5Wk00NC4wMzYxIDQwQzQ0LjI5MTcgNDAuMDAwMSA0NC41MzcgNDAuMTAxNSA0NC43MTc4IDQwLjI4MjJDNDQuODk4NSA0MC40NjMgNDQuOTk5OSA0MC43MDgzIDQ1IDQwLjk2MzlWNDMuNzEzOUM0NSA0NC4wNTQ5IDQ0Ljg2NDIgNDQuMzgxOSA0NC42MjMgNDQuNjIzQzQ0LjM4MTkgNDQuODY0MiA0NC4wNTQ4IDQ1IDQzLjcxMzkgNDVIMzkuOTY0OEMzOS44MzgzIDQ1IDM5LjcxMjYgNDQuOTc1MSAzOS41OTU3IDQ0LjkyNjhDMzkuNDc4NyA0NC44NzgzIDM5LjM3MTggNDQuODA3MyAzOS4yODIyIDQ0LjcxNzhDMzkuMTkyNyA0NC42MjgyIDM5LjEyMTcgNDQuNTIxMyAzOS4wNzMyIDQ0LjQwNDNDMzkuMDI1IDQ0LjI4NzYgMzkuMDAwMSA0NC4xNjI1IDM5IDQ0LjAzNjFDMzkgNDMuOTA5NiAzOS4wMjQ5IDQzLjc4MzkgMzkuMDczMiA0My42NjdDMzkuMTIxNyA0My41NSAzOS4xOTI3IDQzLjQ0MzEgMzkuMjgyMiA0My4zNTM1QzM5LjM3MTggNDMuMjY0IDM5LjQ3ODcgNDMuMTkzIDM5LjU5NTcgNDMuMTQ0NUMzOS43MTI2IDQzLjA5NjIgMzkuODM4MyA0My4wNzEzIDM5Ljk2NDggNDMuMDcxM0g0Mi42MzM4QzQyLjg3NTQgNDMuMDcxMyA0My4wNzEzIDQyLjg3NTQgNDMuMDcxMyA0Mi42MzM4VjQwLjk2MzlDNDMuMDcxMyA0MC44Mzc2IDQzLjA5NjMgNDAuNzEyNCA0My4xNDQ1IDQwLjU5NTdDNDMuMTkzIDQwLjQ3ODggNDMuMjY0IDQwLjM3MTcgNDMuMzUzNSA0MC4yODIyQzQzLjQ0MzEgNDAuMTkyNyA0My41NSA0MC4xMjE3IDQzLjY2NyA0MC4wNzMyQzQzLjc4MzkgNDAuMDI0OSA0My45MDk2IDQwIDQ0LjAzNjEgNDBaTTE2LjAzODEgMTFDMTYuMTY0NiAxMSAxNi4yOTAzIDExLjAyNDkgMTYuNDA3MiAxMS4wNzMyQzE2LjUyNDIgMTEuMTIxNyAxNi42MzExIDExLjE5MjcgMTYuNzIwNyAxMS4yODIyQzE2LjgxMDIgMTEuMzcxOCAxNi44ODEyIDExLjQ3ODcgMTYuOTI5NyAxMS41OTU3QzE2Ljk3OCAxMS43MTI0IDE3LjAwMjkgMTEuODM3NSAxNy4wMDI5IDExLjk2MzlDMTcuMDAyOSAxMi4wOTA0IDE2Ljk3ODEgMTIuMjE2MSAxNi45Mjk3IDEyLjMzM0MxNi44ODEyIDEyLjQ1IDE2LjgxMDMgMTIuNTU2OSAxNi43MjA3IDEyLjY0NjVDMTYuNjMxMSAxMi43MzYgMTYuNTI0MiAxMi44MDcgMTYuNDA3MiAxMi44NTU1QzE2LjI5MDMgMTIuOTAzOCAxNi4xNjQ2IDEyLjkyODcgMTYuMDM4MSAxMi45Mjg3SDEzLjM2OTFDMTMuMTI3NSAxMi45Mjg3IDEyLjkzMTYgMTMuMTI0NiAxMi45MzE2IDEzLjM2NjJWMTYuMDM2MUMxMi45MzE2IDE2LjE2MjQgMTIuOTA2NyAxNi4yODc2IDEyLjg1ODQgMTYuNDA0M0MxMi44MSAxNi41MjEyIDEyLjczODkgMTYuNjI4MyAxMi42NDk0IDE2LjcxNzhDMTIuNTU5OSAxNi44MDczIDEyLjQ1MjkgMTYuODc4MyAxMi4zMzU5IDE2LjkyNjhDMTIuMjE5IDE2Ljk3NTEgMTIuMDkzMyAxNyAxMS45NjY4IDE3QzExLjcxMTIgMTYuOTk5OSAxMS40NjU5IDE2Ljg5ODUgMTEuMjg1MiAxNi43MTc4QzExLjEwNDQgMTYuNTM3IDExLjAwMyAxNi4yOTE3IDExLjAwMjkgMTYuMDM2MVYxMi4yODYxQzExLjAwMjkgMTEuOTQ1MSAxMS4xMzg4IDExLjYxODEgMTEuMzc5OSAxMS4zNzdDMTEuNjIxIDExLjEzNTggMTEuOTQ4MSAxMSAxMi4yODkxIDExSDE2LjAzODFaTTQzLjcxMzkgMTFDNDQuMDU0OCAxMSA0NC4zODE5IDExLjEzNTggNDQuNjIzIDExLjM3N0M0NC44NjQyIDExLjYxODEgNDUgMTEuOTQ1MSA0NSAxMi4yODYxVjE2LjAzNjFDNDQuOTk5OSAxNi4yOTE3IDQ0Ljg5ODUgMTYuNTM3IDQ0LjcxNzggMTYuNzE3OEM0NC41MzcgMTYuODk4NSA0NC4yOTE3IDE2Ljk5OTkgNDQuMDM2MSAxN0M0My45MDk2IDE3IDQzLjc4MzkgMTYuOTc1MSA0My42NjcgMTYuOTI2OEM0My41NSAxNi44NzgzIDQzLjQ0MzEgMTYuODA3MyA0My4zNTM1IDE2LjcxNzhDNDMuMjY0IDE2LjYyODMgNDMuMTkzIDE2LjUyMTIgNDMuMTQ0NSAxNi40MDQzQzQzLjA5NjMgMTYuMjg3NiA0My4wNzEzIDE2LjE2MjQgNDMuMDcxMyAxNi4wMzYxVjEzLjM2NjJDNDMuMDcxMyAxMy4xMjQ2IDQyLjg3NTQgMTIuOTI4NyA0Mi42MzM4IDEyLjkyODdIMzkuOTY0OEMzOS44MzgzIDEyLjkyODcgMzkuNzEyNiAxMi45MDM4IDM5LjU5NTcgMTIuODU1NUMzOS40Nzg3IDEyLjgwNyAzOS4zNzE4IDEyLjczNiAzOS4yODIyIDEyLjY0NjVDMzkuMTkyNyAxMi41NTY5IDM5LjEyMTcgMTIuNDUgMzkuMDczMiAxMi4zMzNDMzkuMDI0OSAxMi4yMTYxIDM5IDEyLjA5MDQgMzkgMTEuOTYzOUMzOS4wMDAxIDExLjgzNzUgMzkuMDI1IDExLjcxMjQgMzkuMDczMiAxMS41OTU3QzM5LjEyMTcgMTEuNDc4NyAzOS4xOTI3IDExLjM3MTggMzkuMjgyMiAxMS4yODIyQzM5LjM3MTggMTEuMTkyNyAzOS40Nzg3IDExLjEyMTcgMzkuNTk1NyAxMS4wNzMyQzM5LjcxMjYgMTEuMDI0OSAzOS44MzgzIDExIDM5Ljk2NDggMTFINDMuNzEzOVoiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl81Mzk5XzY2MzUpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfNTM5OV82NjM1IiB4MT0iMy41IiB5MT0iMi4zMzMzNCIgeDI9IjYzLjM3MTYiIHkyPSIzMC4zODIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNENkUwRkMiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNDY1MUZBIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl81Mzk5XzY2MzUiIHgxPSIxNC4xOTkzIiB5MT0iMTguODYiIHgyPSIzNi44NzUzIiB5Mj0iNDUuMjY5NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjOTc3OEZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzI2NDJGNyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXJfNTM5OV82NjM1IiB4MT0iMTEuMDAyOSIgeTE9IjExIiB4Mj0iNDkuMzA2MyIgeTI9IjM5LjEzOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjOTc3OEZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzI2NDJGNyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=",
            D = {icon: n.Z, label: "API \u63A5\u5165"}, r = {
                title: "\u6A21\u578B\u5E7F\u573A",
                subtitle: "\u53D1\u73B0\u9002\u5408\u4F60\u7684 AI \u6A21\u578B\uFF0C\u5E76\u5FEB\u901F\u63A5\u5165\u4E1A\u52A1-"
            }, l = !1, o = "mockLogin", I = {
                text: "AI \u8282\u7701\u8BA1\u5212\u5DF2\u751F\u6548\uFF0C\u4F7F\u7528\u6A21\u578B\u65F6\u5C06\u81EA\u52A8\u62B5\u6263\u989D\u5EA6\uFF0CSeedance 2.0 \u7CFB\u5217\u6682\u4E0D\u652F\u6301",
                linkLabel: "\u67E5\u770B\u89C4\u5219\u8BE6\u60C5"
            }, j = [{id: 0x1c546528c0f, modelId: "doubao-seedance-2-0"}, {
                id: 0x1c546528c11,
                modelId: "doubao-seedance-2-0-mini"
            }, {id: 0x1c546528c10, modelId: "doubao-seedance-2-0-fast"}], g = [{
                id: "language-models",
                title: "\u8BED\u8A00\u6A21\u578B",
                subtitle: "\u6DF1\u5EA6\u601D\u8003\uFF5C\u91C7\u7528\u5148\u601D\u8003\u3001\u518D\u56DE\u7B54\u7684\u8F93\u51FA\u6A21\u5F0F\uFF0C\u6A21\u578B\u80FD\u529B\u663E\u8457\u589E\u5F3A",
                models: [{
                    icon: N,
                    name: "Doubao-Seed-Evolving",
                    id: "doubao-seed-evolving-latest-version",
                    modelId: "doubao-seed-evolving",
                    desc: "Seed \u6700\u65B0 Coding & Agent \u6A21\u578B\uFF0C\u6301\u7EED\u5347\u7EA7--",
                    chip: "Doubao-Seed-Evolving",
                    specs: [{
                        label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                        value: "\u6587\u672C\u3001\u56FE\u50CF\u3001\u89C6\u9891 / \u6587\u672C"
                    }, {
                        label: "\u8F93\u5165\u4EF7\u683C",
                        value: "6 \u5143/\u767E\u4E07 tokens"
                    }, {
                        label: "\u8F93\u51FA\u4EF7\u683C",
                        value: "30 \u5143/\u767E\u4E07 tokens"
                    }, {label: "\u4E0A\u4E0B\u6587\u7A97\u53E3", value: "256k"}, {
                        label: "\u6700\u5927\u8F93\u51FA",
                        value: "256k"
                    }]
                }, {
                    icon: N,
                    name: "Doubao-Seed-2.1-pro",
                    id: "doubao-seed-2-1-pro-260628",
                    modelId: "doubao-seed-2-1-pro",
                    desc: "\u9762\u5411\u751F\u4EA7\u7EA7\u4EFB\u52A1\uFF0C\u5168\u9762\u5347\u7EA7\u7F16\u7A0B\u3001\u667A\u80FD\u4F53\u4E0E\u591A\u6A21\u6001\u80FD\u529B",
                    chip: "Doubao-Seed-2.1-pro",
                    specs: [{
                        label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                        value: "\u6587\u672C\u3001\u56FE\u50CF\u3001\u89C6\u9891 / \u6587\u672C"
                    }, {
                        label: "\u8F93\u5165\u4EF7\u683C",
                        value: "6 \u5143/\u767E\u4E07 tokens"
                    }, {
                        label: "\u8F93\u51FA\u4EF7\u683C",
                        value: "30 \u5143/\u767E\u4E07 tokens"
                    }, {label: "\u4E0A\u4E0B\u6587\u7A97\u53E3", value: "256k"}, {
                        label: "\u6700\u5927\u8F93\u51FA",
                        value: "256k"
                    }]
                }, {
                    icon: N,
                    name: "Doubao-Seed-2.1-turbo",
                    id: "doubao-seed-2-1-turbo-260628",
                    modelId: "doubao-seed-2-1-turbo",
                    desc: "\u6548\u679C\u4E0E\u6210\u672C\u5747\u8861\uFF0C\u5168\u9762\u5347\u7EA7\u7F16\u7A0B\u3001\u667A\u80FD\u4F53\u4E0E\u591A\u6A21\u6001\u80FD\u529B",
                    chip: "Doubao-Seed-2.1-turbo",
                    specs: [{
                        label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                        value: "\u6587\u672C\u3001\u56FE\u50CF\u3001\u89C6\u9891 / \u6587\u672C"
                    }, {
                        label: "\u8F93\u5165\u4EF7\u683C",
                        value: "3 \u5143/\u767E\u4E07 tokens"
                    }, {
                        label: "\u8F93\u51FA\u4EF7\u683C",
                        value: "15 \u5143/\u767E\u4E07 tokens"
                    }, {label: "\u4E0A\u4E0B\u6587\u7A97\u53E3", value: "256k"}, {
                        label: "\u6700\u5927\u8F93\u51FA",
                        value: "256k"
                    }]
                }, {
                    icon: N,
                    name: "Doubao-Seed-2.0-lite",
                    id: "doubao-seed-2-0-lite-260428",
                    modelId: "doubao-seed-2-0-lite",
                    desc: "\u8C46\u5305\u9996\u6B3E\u5168\u6A21\u6001\u7406\u89E3\u6A21\u578B\uFF0C\u97F3\u89C6\u56FE\u6587\u7EDF\u4E00\u7406\u89E3",
                    chip: "Doubao-Seed-2.0-lite",
                    specs: [{
                        label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                        value: "\u6587\u672C\u3001\u56FE\u50CF\u3001\u97F3\u9891\u3001\u89C6\u9891 / \u6587\u672C"
                    }, {
                        label: "\u63A8\u7406\u8F93\u5165",
                        value: "0.6-1.8 \u5143/\u767E\u4E07 tokens"
                    }, {
                        label: "\u63A8\u7406\u8F93\u51FA",
                        value: "3.6-10.8 \u5143/\u767E\u4E07 tokens"
                    }, {label: "\u4E0A\u4E0B\u6587\u7A97\u53E3", value: "256k"}, {
                        label: "\u6700\u5927\u8F93\u51FA",
                        value: "128k"
                    }]
                }, {
                    icon: N,
                    name: "Doubao-Seed-2.0-mini",
                    id: "doubao-seed-2-0-mini-260428",
                    modelId: "doubao-seed-2-0-mini",
                    desc: "\u4F4E\u65F6\u5EF6\u3001\u4F4E\u6210\u672C\u3001\u56DB\u6863\u4F4D\u601D\u8003\u4E0E\u591A\u6A21\u6001\u7406\u89E3\u80FD\u529B",
                    chip: "Doubao-Seed-2.0-mini",
                    specs: [{
                        label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                        value: "\u6587\u672C\u3001\u56FE\u50CF\u3001\u97F3\u9891\u3001\u89C6\u9891 / \u6587\u672C"
                    }, {
                        label: "\u63A8\u7406\u8F93\u5165",
                        value: "0.2-0.8 \u5143/\u767E\u4E07 tokens"
                    }, {
                        label: "\u63A8\u7406\u8F93\u51FA",
                        value: "2-8 \u5143/\u767E\u4E07 tokens"
                    }, {label: "\u4E0A\u4E0B\u6587\u7A97\u53E3", value: "256k"}, {
                        label: "\u6700\u5927\u8F93\u51FA",
                        value: "128k"
                    }]
                }, {
                    icon: N,
                    name: "GLM-5.2",
                    id: "glm-5-2-260617",
                    modelId: "glm-5-2",
                    desc: "GLM-5.2 \u7F16\u7801\u80FD\u529B\u5927\u5E45\u5347\u7EA7\uFF0C\u9002\u5408\u590D\u6742\u5F00\u53D1",
                    chip: "GLM-5.2",
                    specs: [{
                        label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                        value: "\u6587\u672C / \u6587\u672C"
                    }, {
                        label: "\u8F93\u5165\u4EF7\u683C",
                        value: "8 \u5143/\u767E\u4E07 tokens"
                    }, {
                        label: "\u8F93\u51FA\u4EF7\u683C",
                        value: "28 \u5143/\u767E\u4E07 tokens"
                    }, {label: "\u4E0A\u4E0B\u6587\u7A97\u53E3", value: "1024k"}, {
                        label: "\u6700\u5927\u8F93\u51FA",
                        value: "128k"
                    }]
                }, {
                    icon: N,
                    name: "DeepSeek-V4-pro",
                    id: "deepseek-v4-pro-260425",
                    modelId: "deepseek-v4-pro",
                    desc: "\u5168\u65B0\u65D7\u8230\u6DF7\u5408\u63A8\u7406\u6A21\u578B\uFF0C\u63A8\u7406\u7CBE\u5EA6\u4E0E\u54CD\u5E94\u901F\u5EA6\u663E\u8457\u63D0\u5347",
                    chip: "DeepSeek-V4-pro",
                    specs: [{
                        label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                        value: "\u6587\u672C / \u6587\u672C"
                    }, {
                        label: "\u8F93\u5165\u4EF7\u683C",
                        value: "12 \u5143/\u767E\u4E07 tokens"
                    }, {
                        label: "\u8F93\u51FA\u4EF7\u683C",
                        value: "24 \u5143/\u767E\u4E07 tokens"
                    }, {label: "\u4E0A\u4E0B\u6587\u7A97\u53E3", value: "1024k"}, {
                        label: "\u6700\u5927\u8F93\u51FA",
                        value: "384k"
                    }]
                }, {
                    icon: N,
                    name: "DeepSeek-V4-flash",
                    id: "deepseek-v4-flash-260425",
                    modelId: "deepseek-v4-flash",
                    desc: "\u5168\u65B0\u65D7\u8230\u6DF7\u5408\u63A8\u7406\u6A21\u578B\uFF0C\u63A8\u7406\u7CBE\u5EA6\u4E0E\u54CD\u5E94\u901F\u5EA6\u663E\u8457\u63D0\u5347",
                    chip: "DeepSeek-V4-flash",
                    specs: [{
                        label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                        value: "\u6587\u672C / \u6587\u672C"
                    }, {
                        label: "\u8F93\u5165\u4EF7\u683C",
                        value: "1 \u5143/\u767E\u4E07 tokens"
                    }, {
                        label: "\u8F93\u51FA\u4EF7\u683C",
                        value: "2 \u5143/\u767E\u4E07 tokens"
                    }, {label: "\u4E0A\u4E0B\u6587\u7A97\u53E3", value: "1024k"}, {
                        label: "\u6700\u5927\u8F93\u51FA",
                        value: "384k"
                    }]
                }],
                apiButton: D
            }, {
                id: "video-models",
                title: "\u89C6\u9891\u751F\u6210\u6A21\u578B",
                subtitle: "\u57FA\u4E8E\u6587\u5B57\u4E0E\u56FE\u7247\uFF0C\u751F\u6210\u9AD8\u6E05\u6D41\u7545\u7684\u5F71\u89C6\u7EA7\u89C6\u9891",
                models: [{
                    icon: u,
                    name: "Doubao Seedance 2.0",
                    id: "doubao-seedance-2-0-260128",
                    modelId: "doubao-seedance-2-0",
                    desc: "\u8D85\u5F3A\u7684\u53C2\u8003\u4E00\u81F4\u6027\uFF0C\u6781\u81F4\u62DF\u771F\u7684\u89C6\u542C\u7A33\u5B9A\u6027",
                    chip: "Doubao Seedance 2.0",
                    specs: [{
                        label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                        value: "\u6587\u672C\u3001\u56FE\u50CF\u3001\u89C6\u9891\u3001\u97F3\u9891 / \u89C6\u9891"
                    }, {
                        label: "\u8F93\u5165\u4EF7\u683C",
                        value: "16-31 \u5143/\u767E\u4E07 tokens"
                    }, {
                        label: "\u8F93\u51FA\u4EF7\u683C",
                        value: "26-51 \u5143/\u767E\u4E07 tokens"
                    }, {label: "\u89C6\u9891\u5206\u8FA8\u7387", value: "480, 720, 1080"}, {
                        label: "RPM",
                        value: "0.6,0.015 k"
                    }]
                }, {
                    icon: u,
                    name: "Doubao Seedance 2.0 fast",
                    id: "doubao-seedance-2-0-fast-260128",
                    modelId: "doubao-seedance-2-0-fast",
                    desc: "\u97F3\u89C6\u56FE\u6587\u53C2\u8003\uFF0C\u66F4\u5FEB\uFF0C\u7EE7\u627F 2.0 \u6838\u5FC3\u4F18\u52BF",
                    chip: "Doubao Seedance 2.0 fast",
                    specs: [{
                        label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                        value: "\u6587\u672C\u3001\u56FE\u50CF\u3001\u89C6\u9891\u3001\u97F3\u9891 / \u89C6\u9891"
                    }, {
                        label: "\u8F93\u5165\u4EF7\u683C",
                        value: "14 \u5143/\u767E\u4E07 tokens"
                    }, {
                        label: "\u8F93\u51FA\u4EF7\u683C",
                        value: "23 \u5143/\u767E\u4E07 tokens"
                    }, {label: "\u89C6\u9891\u5206\u8FA8\u7387", value: "480, 720"}, {label: "RPM", value: "0.6k"}]
                }, {
                    icon: u,
                    name: "Doubao-Seedance-2.0-mini",
                    id: "doubao-seedance-2-0-mini-260615",
                    modelId: "doubao-seedance-2-0-mini",
                    desc: "\u97F3\u89C6\u56FE\u6587\u53C2\u8003\uFF0C\u9AD8\u6027\u4EF7\u6BD4",
                    chip: "Doubao-Seedance-2.0-mini",
                    specs: [{
                        label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                        value: "\u6587\u672C\u3001\u56FE\u50CF\u3001\u89C6\u9891\u3001\u97F3\u9891 / \u89C6\u9891"
                    }, {
                        label: "\u8F93\u5165\u4EF7\u683C",
                        value: "22 \u5143/\u767E\u4E07 tokens"
                    }, {
                        label: "\u8F93\u51FA\u4EF7\u683C",
                        value: "37 \u5143/\u767E\u4E07 tokens"
                    }, {label: "\u89C6\u9891\u5206\u8FA8\u7387", value: "480, 720"}, {label: "RPM", value: "0.6k"}]
                }],
                compact: !0,
                apiButton: D
            }, {
                id: "image-models",
                title: "\u56FE\u50CF\u751F\u6210\u6A21\u578B",
                subtitle: "\u57FA\u4E8E\u6587\u5B57\u4E0E\u56FE\u7247\uFF0C\u751F\u6210\u9AD8\u6E05\u7EC6\u817B\u7684\u89C6\u89C9\u5185\u5BB9",
                models: [{
                    icon: i,
                    name: "Doubao-Seedream-5.0-pro",
                    id: "doubao-seedream-5-0-pro-260628",
                    modelId: "doubao-seedream-5-0-pro",
                    desc: "\u7CBE\u51C6\u56FE\u50CF\u7F16\u8F91\uFF0C\u89E3\u9501\u56FE\u5C42\u81EA\u7531",
                    chip: "Doubao-Seedream-5.0-pro",
                    specs: [{
                        label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                        value: "\u6587\u672C\u3001\u56FE\u50CF / \u56FE\u50CF"
                    }, {label: "\u8F93\u5165\u4EF7\u683C", value: "0.02 \u5143/\u5F20"}, {
                        label: "\u8F93\u51FA\u4EF7\u683C",
                        value: "0.3 \u5143/\u5F20"
                    }, {label: "IPM", value: "500"}]
                }, {
                    icon: i,
                    name: "Doubao Seedream 5.0 Lite",
                    id: "doubao-seedream-5-0-260128",
                    modelId: "doubao-seedream-5-0",
                    desc: "\u66F4\u667A\u80FD\u53EF\u63A7\u521B\u4F5C\uFF0C\u5B9E\u65F6\u68C0\u7D22\uFF0C\u66F4\u5F3A\u4E00\u81F4\u6027\u4FDD\u6301",
                    chip: "Doubao Seedream 5.0 Lite",
                    specs: [{
                        label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                        value: "\u6587\u672C\u3001\u56FE\u50CF / \u56FE\u50CF"
                    }, {label: "\u6587\u751F\u56FE", value: "0.22 \u5143/\u5F20"}, {
                        label: "\u56FE\u751F\u56FE",
                        value: "0.22 \u5143/\u5F20"
                    }, {label: "IPM", value: "500"}]
                }, {
                    icon: i,
                    name: "Doubao-Seedream-4.5",
                    id: "doubao-seedream-4-5-251128",
                    modelId: "doubao-seedream-4-5",
                    desc: "\u591A\u56FE\u7A33\u5B9A\u878D\u5408\uFF0C\u8D85\u5F3A\u7F16\u8F91\u4E00\u81F4\u6027\uFF0C4k \u8D85\u9AD8\u6E05",
                    chip: "Doubao-Seedream-4.5",
                    specs: [{
                        label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                        value: "\u6587\u672C\u3001\u56FE\u50CF / \u56FE\u50CF"
                    }, {label: "\u8F93\u5165\u4EF7\u683C", value: "0.25 \u5143/\u5F20"}, {
                        label: "\u8F93\u51FA\u4EF7\u683C",
                        value: "0.25 \u5143/\u5F20"
                    }]
                }],
                compact: !0,
                apiButton: D
            }, {
                id: "speech-models",
                title: "\u8BED\u97F3\u6A21\u578B",
                subtitle: "\u5177\u5907\u8BED\u97F3\u8BC6\u522B\u3001\u5408\u6210\u7B49\u5B9E\u65F6\u4EA4\u4E92\u7684\u8BED\u97F3\u80FD\u529B",
                models: [{
                    icon: c,
                    name: "Doubao-\u97F3\u9891\u751F\u6210-1.0",
                    id: "doubao-audio-generation-1-0",
                    modelId: "doubao-audio-generation-1-0",
                    chip: "Doubao-Seed-Audio-1.0",
                    desc: "\u5168\u8981\u7D20\u5F71\u89C6\u7EA7\u97F3\u9891\u751F\u62103",
                    specs: [{
                        label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                        value: "\u6587\u672C\u3001\u56FE\u50CF\u3001\u97F3\u9891 / \u97F3\u9891"
                    }, {label: "\u6A21\u578B\u9650\u5236", value: "QPS 5"}]
                }, {
                    icon: c,
                    name: "Doubao-\u8BED\u97F3\u64AD\u5BA2",
                    id: "doubao-speech-podcast",
                    modelId: "doubao-speech-podcast",
                    chip: "Doubao-Seed-Podcast",
                    desc: "\u5BF9\u8BDD\u81EA\u7136\uFF0C\u79D2\u7EA7\u521B\u4F5C",
                    specs: [{
                        label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                        value: "\u6587\u672C / \u97F3\u9891"
                    }, {
                        label: "\u8F93\u5165\u4EF7\u683C",
                        value: "120 \u5143/\u767E\u4E07 token"
                    }, {
                        label: "\u8F93\u51FA\u4EF7\u683C",
                        value: "100 \u5143/\u767E\u4E07 token"
                    }, {label: "\u6A21\u578B\u9650\u5236", value: "QPM 60 / TPM 100000"}]
                }, {
                    icon: c,
                    name: "Doubao-\u97F3\u8272\u8BBE\u8BA1",
                    id: "doubao-voice-design",
                    modelId: "doubao-voice-design",
                    chip: "Doubao-Seed-ICL-2.0",
                    desc: "\u652F\u6301\u901A\u8FC7\u6587\u672C\u6216\u56FE\u7247\u5FEB\u901F\u751F\u6210\u5B9A\u5236\u5316\u97F3\u8272",
                    specs: [{
                        label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                        value: "\u6587\u672C\u3001\u56FE\u50CF / \u97F3\u9891"
                    }, {
                        label: "\u63A8\u7406\u5B9A\u4EF7",
                        value: "3 \u5143/\u4E07\u5B57\u7B26"
                    }, {label: "\u6A21\u578B\u9650\u5236", value: "QPS 10"}]
                }, {
                    icon: a,
                    name: "Doubao-\u6D41\u5F0F\u8BED\u97F3\u8BC6\u522B",
                    id: "doubao-streaming-asr",
                    modelId: "doubao-streaming-asr",
                    chip: "Doubao-Seed-ASR-Stream",
                    desc: "\u8C46\u5305\u8BED\u97F3\u8BC6\u522B\u6A21\u578B\uFF0C\u652F\u6301\u6D41\u5F0F\u8BED\u97F3\u8BC6\u522B",
                    specs: [{
                        label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                        value: "\u97F3\u9891 / \u6587\u672C"
                    }, {
                        label: "\u63A8\u7406\u5B9A\u4EF7",
                        value: "4.5 \u5143/\u5C0F\u65F6"
                    }, {label: "\u6A21\u578B\u9650\u5236", value: "QPS 10"}]
                }, {
                    icon: a,
                    name: "Doubao-\u5F55\u97F3\u6587\u4EF6\u8BC6\u522B2.0",
                    id: "doubao-recording-file-asr-2-0",
                    modelId: "doubao-recording-file-asr-2-0",
                    chip: "Doubao-Seed-ASR-File-2.0",
                    desc: "\u652F\u6301\u591A\u6A21\u6001\u4FE1\u606F\u7406\u89E3\u80FD\u529B",
                    specs: [{
                        label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                        value: "\u97F3\u9891 / \u6587\u672C"
                    }, {
                        label: "\u63A8\u7406\u5B9A\u4EF7",
                        value: "0.8 \u5143/\u5C0F\u65F6"
                    }, {label: "\u6A21\u578B\u9650\u5236", value: "QPS 20"}]
                }, {
                    icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNTQwMF82NzE5KSIgZmlsbC1vcGFjaXR5PSIwLjEyIi8+CjxwYXRoIGQ9Ik0xMi4wNSAzNy45OTk2QzEyLjE4NzkgMzcuOTk5NiAxMi4zMjQ5IDM4LjAyNjkgMTIuNDUyMyAzOC4wNzk3QzEyLjU3OTUgMzguMTMyNCAxMi42OTQ4IDM4LjIxIDEyLjc5MjIgMzguMzA3M0MxMi44ODk3IDM4LjQwNDggMTIuOTY3OSAzOC41MjA3IDEzLjAyMDcgMzguNjQ4MUMxMy4wNzMzIDM4Ljc3NTMgMTMuMDk5NyAzOC45MTE4IDEzLjA5OTggMzkuMDQ5NFY0Mi40NjI1QzEzLjEgNDIuNzAzOSAxMy4yOTU5IDQyLjg5OTggMTMuNTM3MyA0Mi45SDE2Ljk1MDRDMTcuMDg4MSA0Mi45IDE3LjIyNDUgNDIuOTI2NSAxNy4zNTE3IDQyLjk3OTFDMTcuNDc5MiA0My4wMzE5IDE3LjU5NSA0My4xMTAxIDE3LjY5MjYgNDMuMjA3NkMxNy43ODk5IDQzLjMwNSAxNy44Njc0IDQzLjQyMDMgMTcuOTIwMSA0My41NDc1QzE3Ljk3MjkgNDMuNjc0OSAxOC4wMDAyIDQzLjgxMTkgMTguMDAwMiA0My45NDk4QzE4LjAwMDIgNDQuMDg3NiAxNy45NzI4IDQ0LjIyMzkgMTcuOTIwMSA0NC4zNTEyQzE3Ljg2NzMgNDQuNDc4NiAxNy43OTAxIDQ0LjU5NDUgMTcuNjkyNiA0NC42OTJDMTcuNTk1IDQ0Ljc4OTUgMTcuNDc5MiA0NC44NjY4IDE3LjM1MTcgNDQuOTE5NkMxNy4yMjQ1IDQ0Ljk3MjMgMTcuMDg4MSA0NC45OTk2IDE2Ljk1MDQgNDQuOTk5NkgxMi40MDA2QzEyLjAyOTMgNDQuOTk5NiAxMS42NzI5IDQ0Ljg1MiAxMS40MTAzIDQ0LjU4OTVDMTEuMTQ3OCA0NC4zMjY5IDExLjAwMDIgNDMuOTcwNSAxMS4wMDAyIDQzLjU5OTJWMzkuMDQ5NEMxMS4wMDAzIDM4Ljc3MTEgMTEuMTExIDM4LjUwNDEgMTEuMzA3OCAzOC4zMDczQzExLjUwNDcgMzguMTEwNCAxMS43NzE2IDM3Ljk5OTcgMTIuMDUgMzcuOTk5NlpNNDMuOTUwNCAzNy45OTk2QzQ0LjIyODcgMzcuOTk5NyA0NC40OTU3IDM4LjExMDQgNDQuNjkyNiAzOC4zMDczQzQ0Ljg4OTQgMzguNTA0MSA0NS4wMDAxIDM4Ljc3MTEgNDUuMDAwMiAzOS4wNDk0VjQzLjU5OTJDNDUuMDAwMiA0My45NzA1IDQ0Ljg1MjYgNDQuMzI2OSA0NC41OSA0NC41ODk1QzQ0LjMyNzUgNDQuODUyIDQzLjk3MTEgNDQuOTk5NiA0My41OTk4IDQ0Ljk5OTZIMzkuMDVDMzguOTEyMiA0NC45OTk2IDM4Ljc3NTkgNDQuOTcyMyAzOC42NDg2IDQ0LjkxOTZDMzguNTIxMiA0NC44NjY4IDM4LjQwNTMgNDQuNzg5NSAzOC4zMDc4IDQ0LjY5MkMzOC4yMTAzIDQ0LjU5NDUgMzguMTMzIDQ0LjQ3ODYgMzguMDgwMyA0NC4zNTEyQzM4LjAyNzYgNDQuMjIzOSAzOC4wMDAyIDQ0LjA4NzYgMzguMDAwMiA0My45NDk4QzM4LjAwMDIgNDMuODExOSAzOC4wMjc1IDQzLjY3NDkgMzguMDgwMyA0My41NDc1QzM4LjEzMyA0My40MjAzIDM4LjIxMDUgNDMuMzA1IDM4LjMwNzggNDMuMjA3NkMzOC40MDUzIDQzLjExMDEgMzguNTIxMiA0My4wMzE5IDM4LjY0ODYgNDIuOTc5MUMzOC43NzU4IDQyLjkyNjUgMzguOTEyMyA0Mi45IDM5LjA1IDQyLjlINDIuNDYzMUM0Mi43MDQ0IDQyLjg5OTggNDIuOTAwNCA0Mi43MDM5IDQyLjkwMDYgNDIuNDYyNVYzOS4wNDk0QzQyLjkwMDYgMzguOTExOCA0Mi45MjcgMzguNzc1MyA0Mi45Nzk3IDM4LjY0ODFDNDMuMDMyNCAzOC41MjA3IDQzLjExMDcgMzguNDA0OCA0My4yMDgyIDM4LjMwNzNDNDMuMzA1NiAzOC4yMSA0My40MjA5IDM4LjEzMjQgNDMuNTQ4IDM4LjA3OTdDNDMuNjc1NCAzOC4wMjY5IDQzLjgxMjUgMzcuOTk5NiA0My45NTA0IDM3Ljk5OTZaTTI4LjAwMDIgMTYuOTk4N0MzMC4yNjQ5IDE2Ljk5ODcgMzAuMjY0OSAyNi4xOTY2IDMyLjUyOTUgMjYuMTk2OUMzNC4zODIzIDI2LjE5NjkgMzQuMTc2NiAyMC45NDE2IDM1LjgyMzQgMjAuOTQxQzM3LjQ3MDQgMjAuOTQxIDM3LjI2NDkgMjYuMTk2IDM5LjExNzQgMjYuMTk2OUM0MC41NTg1IDI2LjE5NjkgNDAuMzUzMSAyMy44MDE0IDQyLjAwMDIgMjMuODAxNFYzMi4xOTY5QzQwLjM1MzEgMzIuMTk2OSA0MC41NTg1IDI5LjgwMDQgMzkuMTE3NCAyOS44MDA0QzM3LjI2NDkgMjkuODAxMyAzNy40NzA0IDM1LjA1NzMgMzUuODIzNCAzNS4wNTczQzM0LjE3NjYgMzUuMDU2NyAzNC4zODIzIDI5LjgwMDQgMzIuNTI5NSAyOS44MDA0QzMwLjI2NDkgMjkuODAwNyAzMC4yNjQ5IDM4Ljk5ODcgMjguMDAwMiAzOC45OTg3QzI1LjczNTUgMzguOTk4NyAyNS43MzU1IDI5LjgwMDcgMjMuNDcwOSAyOS44MDA0QzIxLjYxOCAyOS44MDA0IDIxLjgyMzcgMzUuMDU2NyAyMC4xNzY5IDM1LjA1NzNDMTguNTMgMzUuMDU3MyAxOC43MzU1IDI5LjgwMTMgMTYuODgzIDI5LjgwMDRDMTUuNDQxOCAyOS44MDA0IDE1LjY0NzIgMzIuMTk2OSAxNC4wMDAyIDMyLjE5NjlWMjMuODAxNEMxNS42NDcyIDIzLjgwMTQgMTUuNDQxOCAyNi4xOTY5IDE2Ljg4MyAyNi4xOTY5QzE4LjczNTUgMjYuMTk2IDE4LjUzIDIwLjk0MSAyMC4xNzY5IDIwLjk0MUMyMS44MjM3IDIwLjk0MTYgMjEuNjE4IDI2LjE5NjkgMjMuNDcwOSAyNi4xOTY5QzI1LjczNTUgMjYuMTk2NiAyNS43MzU1IDE2Ljk5ODcgMjguMDAwMiAxNi45OTg3Wk0xNi45NTA0IDEwLjk5OTZDMTcuMDg4MSAxMC45OTk3IDE3LjIyNDUgMTEuMDI3IDE3LjM1MTcgMTEuMDc5N0MxNy40NzkyIDExLjEzMjUgMTcuNTk1IDExLjIwOTcgMTcuNjkyNiAxMS4zMDczQzE3Ljc5MDEgMTEuNDA0NyAxNy44NjczIDExLjUyMDcgMTcuOTIwMSAxMS42NDgxQzE3Ljk3MjggMTEuNzc1NCAxOC4wMDAyIDExLjkxMTcgMTguMDAwMiAxMi4wNDk0QzE4LjAwMDIgMTIuMTg3MyAxNy45NzI5IDEyLjMyNDQgMTcuOTIwMSAxMi40NTE4QzE3Ljg2NzQgMTIuNTc5IDE3Ljc4OTkgMTIuNjk0MyAxNy42OTI2IDEyLjc5MTZDMTcuNTk1IDEyLjg4OTEgMTcuNDc5MiAxMi45Njc0IDE3LjM1MTcgMTMuMDIwMUMxNy4yMjQ1IDEzLjA3MjggMTcuMDg4MSAxMy4wOTkyIDE2Ljk1MDQgMTMuMDk5MkgxMy41MzczQzEzLjI5NTkgMTMuMDk5NCAxMy4xIDEzLjI5NTQgMTMuMDk5OCAxMy41MzY3VjE2Ljk0OThDMTMuMDk5NyAxNy4wODc1IDEzLjA3MzMgMTcuMjI0IDEzLjAyMDcgMTcuMzUxMkMxMi45Njc5IDE3LjQ3ODYgMTIuODg5NyAxNy41OTQ1IDEyLjc5MjIgMTcuNjkyQzEyLjY5NDggMTcuNzg5MyAxMi41Nzk1IDE3Ljg2NjggMTIuNDUyMyAxNy45MTk2QzEyLjMyNDkgMTcuOTcyMyAxMi4xODc5IDE3Ljk5OTYgMTIuMDUgMTcuOTk5NkMxMS43NzE2IDE3Ljk5OTYgMTEuNTA0NyAxNy44ODg4IDExLjMwNzggMTcuNjkyQzExLjExMSAxNy40OTUyIDExLjAwMDMgMTcuMjI4MiAxMS4wMDAyIDE2Ljk0OThWMTIuNEMxMS4wMDAyIDEyLjAyODcgMTEuMTQ3OCAxMS42NzIzIDExLjQxMDMgMTEuNDA5OEMxMS42NzI5IDExLjE0NzIgMTIuMDI5MyAxMC45OTk2IDEyLjQwMDYgMTAuOTk5NkgxNi45NTA0Wk00My41OTk4IDEwLjk5OTZDNDMuOTcxMSAxMC45OTk2IDQ0LjMyNzUgMTEuMTQ3MiA0NC41OSAxMS40MDk4QzQ0Ljg1MjYgMTEuNjcyMyA0NS4wMDAyIDEyLjAyODcgNDUuMDAwMiAxMi40VjE2Ljk0OThDNDUuMDAwMSAxNy4yMjgyIDQ0Ljg4OTQgMTcuNDk1MiA0NC42OTI2IDE3LjY5MkM0NC40OTU3IDE3Ljg4ODggNDQuMjI4NyAxNy45OTk2IDQzLjk1MDQgMTcuOTk5NkM0My44MTI1IDE3Ljk5OTYgNDMuNjc1NCAxNy45NzIzIDQzLjU0OCAxNy45MTk2QzQzLjQyMDkgMTcuODY2OCA0My4zMDU2IDE3Ljc4OTMgNDMuMjA4MiAxNy42OTJDNDMuMTEwNyAxNy41OTQ1IDQzLjAzMjQgMTcuNDc4NiA0Mi45Nzk3IDE3LjM1MTJDNDIuOTI3IDE3LjIyNCA0Mi45MDA2IDE3LjA4NzUgNDIuOTAwNiAxNi45NDk4VjEzLjUzNjdDNDIuOTAwNCAxMy4yOTU0IDQyLjcwNDQgMTMuMDk5NCA0Mi40NjMxIDEzLjA5OTJIMzkuMDVDMzguOTEyMyAxMy4wOTkyIDM4Ljc3NTggMTMuMDcyOCAzOC42NDg2IDEzLjAyMDFDMzguNTIxMiAxMi45Njc0IDM4LjQwNTMgMTIuODg5MSAzOC4zMDc4IDEyLjc5MTZDMzguMjEwNSAxMi42OTQzIDM4LjEzMyAxMi41NzkgMzguMDgwMyAxMi40NTE4QzM4LjAyNzUgMTIuMzI0NCAzOC4wMDAyIDEyLjE4NzMgMzguMDAwMiAxMi4wNDk0QzM4LjAwMDIgMTEuOTExNyAzOC4wMjc2IDExLjc3NTQgMzguMDgwMyAxMS42NDgxQzM4LjEzMyAxMS41MjA3IDM4LjIxMDMgMTEuNDA0NyAzOC4zMDc4IDExLjMwNzNDMzguNDA1MyAxMS4yMDk3IDM4LjUyMTIgMTEuMTMyNSAzOC42NDg2IDExLjA3OTdDMzguNzc1OSAxMS4wMjcgMzguOTEyMiAxMC45OTk3IDM5LjA1IDEwLjk5OTZINDMuNTk5OFoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl81NDAwXzY3MTkpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfNTQwMF82NzE5IiB4MT0iLTAuMDAxNTE3MDMiIHkxPSItNC4xNDEzNiIgeDI9IjY2LjExMTQiIHkyPSI1My4xOTk5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNFOEZGNzQiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA5MkMxIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl81NDAwXzY3MTkiIHgxPSItMC40OTk4MTciIHkxPSItMS41MDAzNiIgeDI9IjQ0LjY0NTMiIHkyPSI0OS41MjU1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNFOEZGNzQiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA5MkMxIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==",
                    name: "Doubao-\u5B9E\u65F6\u8BED\u97F3\u4EA4\u4E92",
                    id: "doubao-realtime-voice",
                    modelId: "doubao-realtime-voice",
                    chip: "Doubao-Seed-RealtimeVoice",
                    desc: "\u8C46\u5305\u5B9E\u65F6\u8BED\u97F3\u6A21\u578B\uFF0C\u66F4\u62DF\u4EBA\u548C\u66F4\u4F4E\u65F6\u5EF6\u7684\u8BED\u97F3\u5BF9\u8BDD\u6548\u679C",
                    specs: [{
                        label: "\u8F93\u5165/\u8F93\u51FA\u7C7B\u578B",
                        value: "\u97F3\u9891 / \u6587\u672C\u3001\u97F3\u9891"
                    }, {
                        label: "\u8F93\u5165\u4EF7\u683C",
                        value: "80 \u5143/\u767E\u4E07 token"
                    }, {
                        label: "\u8F93\u51FA\u4EF7\u683C",
                        value: "80 \u5143/\u767E\u4E07 Token"
                    }, {label: "\u6A21\u578B\u9650\u5236", value: "QPM 60 / TPM 100000"}]
                }],
                multiRow: !0,
                apiButton: D
            }]
    }, 34088: function (M, e, t) {
        var n = t(88268);
        e.Z = (0, t(88974).Hk)(n.w)
    }, 19532: function (M, e, t) {
        t.r(e), t.d(e, {
            default: function () {
                return c
            }
        });
        var n = t(97458), i = t(52983), a = t(98011), c = (0, i.memo)(function () {
            return (0, n.jsx)(a.j3, {})
        })
    }, 50319: function (M, e, t) {
        t.d(e, {
            S: function () {
                return c
            }
        });
        var n = t(97458);
        t(52983);
        var i = t(47251), a = t(88268), c = function (M) {
            var e = M.children, t = M.from, c = M.justHide;
            return (0, n.jsx)(i.S, {from: t, fallback: c ? null : (0, n.jsx)(a.w, {}), children: e})
        }
    }, 92885: function (M, e, t) {
        t.d(e, {
            CJ: function () {
                return N
            }, Qs: function () {
                return D
            }, am: function () {
                return r
            }, hn: function () {
                return l
            }
        });
        var n = t(44023), i = t(98546);
        t(46643), t(91813), t(50301), t(74908), t(75684), t(36863), t(12924);
        var a = t(76693), c = t(98959), u = t(35098);

        function N() {
            var M = "https://".concat((0, a.WH)({fallbackEnv: a.tE.PROD}).aiSite, "/signin/status/identity");
            return (0, c.W)(M, {method: "GET", credentials: "include", headers: {accept: "application/json"}})
        }

        function D() {
            return (0, n._)(function () {
                return (0, i._)(this, function (M) {
                    switch (M.label) {
                        case 0:
                            return M.trys.push([0, 2, , 3]), [4, (0, u.z)({
                                targetService: "account_management",
                                action: "GetAccountBasicInfo",
                                version: "2018-01-01",
                                method: "get",
                                region: "cn-beijing"
                            })];
                        case 1:
                            return [2, M.sent()];
                        case 2:
                            return M.sent(), [2, {}];
                        case 3:
                            return [2]
                    }
                })
            })()
        }

        function r() {
            return (0, n._)(function () {
                var M, e, t;
                return (0, i._)(this, function (n) {
                    switch (n.label) {
                        case 0:
                            return n.trys.push([0, 2, , 3]), [4, (0, u.z)({
                                targetService: "bill_volcano_engine",
                                action: "GetBalanceFromTradeBalance",
                                version: "2020-01-01",
                                method: "post",
                                headers: {"Content-Type": "application/json"},
                                urlPrefix: "/api",
                                params: {ReqSysNo: "page02", GetAlertFlag: "Y"}
                            })];
                        case 1:
                            var i;
                            return [2, "number" == typeof (i = t = null == (e = n.sent()) || null == (M = e.Acct) ? void 0 : M.AvailableBalance) || "string" == typeof i ? t : void 0];
                        case 2:
                            return n.sent(), [2, void 0];
                        case 3:
                            return [2]
                    }
                })
            })()
        }

        function l() {
            return (0, n._)(function () {
                var M, e;
                return (0, i._)(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, (0, u.z)({
                                targetService: "iam",
                                action: "ListThirdPartyPersonalIdentityByPlatformIdentity",
                                version: "2018-01-01",
                                method: "get",
                                region: "cn-beijing",
                                params: {WithID: 1, PlatformIdentityType: 1}
                            })];
                        case 1:
                            return [2, (null == (e = (Array.isArray(null == (M = t.sent()) ? void 0 : M.List) ? M.List : []).find(function (M) {
                                return (null == M ? void 0 : M.IDPType) === "Doubao"
                            })) ? void 0 : e.ThirdPartyIdentityName) || ""]
                    }
                })
            })()
        }
    }, 98937: function (M, e, t) {
        t.d(e, {
            Nh: function () {
                return s
            }, ZP: function () {
                return x
            }, Iz: function () {
                return A
            }, Il: function () {
                return z
            }, mr: function () {
                return T
            }, x5: function () {
                return L
            }
        });
        var n = t(44023), i = t(3149), a = t(82111), c = t(23144), u = t(98546);
        t(77599), t(12924), t(87815), t(3851), t(61762), t(5264), t(37650), t(87598), t(75482), t(8842), t(26987), t(23042), t(83999), t(91813), t(46643);
        var N = t(97458), D = t(52983), r = t(94343), l = t(98011), o = t(71507), I = t(9253), j = function (M) {
            return null
        }, g = t(92885), z = o.Il;

        function y(M) {
            var e, t = (0, i._)({}, M || o.mI),
                n = Number((null == t || null == (e = t.Account) ? void 0 : e.Id) || (null == t ? void 0 : t.Id) || 0);
            return void 0 === t.Id && (t.Id = n), void 0 === t.IsLogin && (t.IsLogin = n > 0), t
        }

        function A(M) {
            return "en" === M ? "en" : "zh"
        }

        function T(M) {
            return new URL(M).searchParams.get("lang") || void 0
        }

        function s(M) {
            return M.user_locale || M.signin_i18next || void 0
        }

        var d = "zh";

        function L(M) {
            d = M
        }

        var x = function (M) {
            var e, t, T = M.children, s = M.needUserInfo, L = void 0 === s || s, x = M.hostAppConfig,
                O = void 0 === x ? null : x, E = M.canonicalPathPrefix, m = (0, l.f_)() || {}, b = (0, l.TH)(),
                S = (0, c._)((0, D.useState)(function () {
                    var M, e;
                    return y(null == (e = m.userRes) || null == (M = e.Result) ? void 0 : M.profile)
                }), 2), Q = S[0], v = S[1], w = (0, c._)((0, D.useState)({}), 2), k = w[0], h = w[1],
                p = Number((null == Q ? void 0 : Q.Id) || (null == Q || null == (e = Q.Account) ? void 0 : e.Id) || 0),
                f = (0, c._)((0, D.useState)(!!(L && p <= 0)), 2), C = f[0], U = f[1],
                Y = (0, c._)((0, D.useState)(!!(L && p <= 0)), 2), P = Y[0], Z = Y[1],
                W = Number((null == Q ? void 0 : Q.Id) || (null == Q || null == (t = Q.Account) ? void 0 : t.Id) || 0);
            (0, D.useEffect)(function () {
                if (!L || W > 0) {
                    U(!1), Z(!1);
                    return
                }
                var M = !1;
                return U(!0), Z(!0), (0, n._)(function () {
                    var e, t, N, D, r, l, j, z, A;
                    return (0, u._)(this, function (T) {
                        switch (T.label) {
                            case 0:
                                return T.trys.push([0, 4, , 5]), [4, (0, g.CJ)()];
                            case 1:
                                if (N = T.sent(), M) return [2];
                                if (0 >= Number((null == (D = (null == N || null == (t = N.ResponseMetadata) || null == (e = t.Error) ? void 0 : e.Code) || null == N ? void 0 : N.Result) ? void 0 : D.AccountId) || 0)) return h({}), v((0, a._)((0, i._)({}, o.mI), {
                                    Id: -1,
                                    IsLogin: !1
                                })), U(!1), Z(!1), [2];
                                return [4, (0, n._)(function () {
                                    var M, e, t, n, i;
                                    return (0, u._)(this, function (a) {
                                        switch (a.label) {
                                            case 0:
                                                return [4, Promise.allSettled([(0, g.am)(), (0, g.Qs)(), (0, g.hn)()])];
                                            case 1:
                                                return e = (M = c._.apply(void 0, [a.sent(), 3]))[0], t = M[1], n = M[2], i = {}, "fulfilled" === e.status && void 0 !== e.value && (i.AvailableBalance = e.value), [2, {
                                                    financeInfo: i,
                                                    accountBasicInfo: "fulfilled" === t.status ? t.value : {},
                                                    thirdPartyIdentityName: "fulfilled" === n.status ? n.value : ""
                                                }]
                                        }
                                    })
                                })()];
                            case 2:
                                return l = (r = T.sent()).financeInfo, j = r.accountBasicInfo, z = r.thirdPartyIdentityName, M || (h(function (M) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                                    return {
                                        Type: null == M ? void 0 : M.Type,
                                        AccountId: null == M ? void 0 : M.AccountId,
                                        IdentityName: null == M ? void 0 : M.IdentityName,
                                        ThirdPartyIdentityName: n || void 0,
                                        AvailableBalance: null == e ? void 0 : e.AvailableBalance,
                                        Avatar: null == t ? void 0 : t.Avatar,
                                        AccountType: null == t ? void 0 : t.AccountType,
                                        CreatedTime: null == t ? void 0 : t.CreatedTime
                                    }
                                }(D, l, j, z)), Z(!1)), [4, (0, I.P)({useCache: !0})];
                            case 3:
                                return A = T.sent(), M || (v(y((0, a._)((0, i._)({}, A), {IsLogin: !0}))), U(!1)), [3, 5];
                            case 4:
                                return T.sent(), M || (h({}), v({Id: -1, IsLogin: !1}), U(!1), Z(!1)), [3, 5];
                            case 5:
                                return [2]
                        }
                    })
                })(), function () {
                    M = !0
                }
            }, [L, W]);
            var H = (0, D.useMemo)(function () {
                return {
                    profile: Q,
                    setProfile: v,
                    profileLoading: C,
                    doubaoUserLoading: P,
                    doubaoUser: k,
                    setDoubaoUser: h,
                    lang: A(m.lang || d),
                    hostAppConfig: O
                }
            }, [m.lang, k, P, O, Q, C]);
            return (0, N.jsxs)(z.Provider, {
                value: H,
                children: [(0, N.jsx)(r.q, {
                    defaultTitle: "\u706B\u5C71\u5F15\u64CE AI",
                    htmlAttributes: {lang: H.lang},
                    children: (0, N.jsx)("link", {
                        rel: "canonical",
                        href: "https://ai.volcengine.com".concat(void 0 === E ? "" : E).concat(b.pathname)
                    })
                }), (0, N.jsx)(j, {profile: Q}), T || (0, N.jsx)(l.j3, {})]
            })
        }
    }, 54006: function (M, e, t) {
        t.d(e, {
            Kf: function () {
                return a
            }
        });
        var n = t(82939);
        t(95579), t(20366), t(12590), t(98347), t(66818), t(92742), t(44444), t(38589), t(12915), t(36863), t(12924), t(30678), t(79112), t(59519), t(9281), t(96013), t(62881);
        var i = t(98937), a = function (M) {
            var e, t, a, c = (e = M.request, t = (0, i.mr)(e.url), a = (0, i.Nh)(function () {
                var M = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return M.split(";").map(function (M) {
                    return M.trim()
                }).filter(Boolean).reduce(function (M, e) {
                    var t = (0, n._)(e.split("=")), i = t[0], a = t.slice(1);
                    return M[i] = decodeURIComponent(a.join("=")), M
                }, {})
            }(e.headers.get("cookie") || "")), (0, i.Iz)(t || a));
            return (0, i.x5)(c), {lang: c}
        }
    }, 88974: function (M, e, t) {
        t.d(e, {
            iz: function () {
                return eN
            }, Hk: function () {
                return en
            }, KL: function () {
                return eI
            }, Zb: function () {
                return eD
            }
        });
        var n, i = t(98937);
        t(54006);
        var a = t(50319), c = t(44023), u = t(3149), N = t(82111), D = t(93823), r = t(23144), l = t(98546);
        t(77599), t(12924), t(80386), t(58753), t(77379), t(20366), t(91813), t(46643);
        var o = t(97458), I = t(52983), j = t(94343), g = t(98011), z = "SET_STORE", y = function (M) {
                return {type: z, payload: M}
            }, A = {
                appbarData: null,
                activeModule: "",
                profile: void 0,
                profileLoading: !1,
                doubaoUserLoading: !1,
                setProfile: void 0,
                doubaoUser: void 0
            }, T = function () {
                var M = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A,
                    e = arguments.length > 1 ? arguments[1] : void 0;
                return e.type === z ? function (M) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = null != arguments[e] ? arguments[e] : {}, n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function (M) {
                            return Object.getOwnPropertyDescriptor(t, M).enumerable
                        }))), n.forEach(function (e) {
                            var n;
                            n = t[e], e in M ? Object.defineProperty(M, e, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : M[e] = n
                        })
                    }
                    return M
                }({}, M, e.payload) : M
            }, s = (0, I.createContext)(A), d = (0, I.createContext)(function () {
            }), L = t(76693), x = (0, L.dU)({fallback: L.tE.PROD}),
            O = x === L.tE.BOE || x === L.tE.STABLE ? "https://".concat((0, L.WH)().aiSite, "/docs/4602/170528?lang=zh") : "https://".concat((0, L.WH)().aiSite, "/docs/88760?lang=zh"),
            E = {console: ["console"], model: ["model"]}, m = {
                infomercial: {
                    infomercialText: [{
                        type: "strong",
                        content: "AIHub\u7AD9\u70B9\u5168\u65B0\u5347\u7EA7\uFF1A"
                    }, {
                        type: "text",
                        content: "\u652F\u6301\u8C46\u5305\u8D26\u53F7\u4E00\u952E\u767B\u5F55\uFF0C"
                    }, {type: "text", content: "\u5DF2\u6709\u8D44\u6E90\u8D26\u53F7\u8BF7\u524D\u5F80"}, {
                        type: "solid",
                        content: "\u706B\u5C71\u5F15\u64CE"
                    }, {type: "text", content: "\u7EE7\u7EED\u4F7F\u7528"}],
                    link: "https://www.volcengine.com/",
                    infomercialPoster: "",
                    infomercialBgColor: ""
                },
                modules: [{title: "\u6A21\u578B", list: [], target: "/model"}, {
                    title: "\u6587\u6863",
                    list: [],
                    target: O
                }, {title: "\u63A7\u5236\u53F0", list: [], target: "/console/subscriptions"}]
            }, b = function (M) {
                var e, t = (0, I.useContext)(s).appbarData,
                    n = (null == t || null == (e = t.modules) ? void 0 : e.length) ? t.modules : m.modules;
                return M.menuShow ? I.createElement("div", {id: "appbar-menu"}, I.createElement("div", {className: "appbar-menu-content"}, n.map(function (e) {
                    return I.createElement("div", {
                        className: "appbar-menu-module",
                        key: e.title
                    }, I.createElement("header", {key: e.title}, I.createElement("a", {
                        href: e.target || void 0,
                        onClick: M.onClose
                    }, e.title)))
                }))) : null
            }, S = t(57504), Q = function (M) {
                return (0, o.jsxs)("svg", (0, N._)((0, u._)({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 185,
                    height: 18,
                    fill: "none",
                    viewBox: "0 0 185 18"
                }, M), {
                    children: [(0, o.jsx)("g", {
                        clipPath: "url(#logo_22182990_svg__a)", children: (0, o.jsx)("path", {
                            fill: "#fff",
                            fillOpacity: .9,
                            fillRule: "evenodd",
                            d: "M71.345 3.955h.834v.185c0 .047.035.089.083.089h1.555c.041 0 .083-.042.083-.09v-.184h1.316v.185c0 .047.036.089.078.089h1.554c.042 0 .084-.042.084-.09v-.184h.87a.08.08 0 0 0 .083-.083V2.71a.08.08 0 0 0-.084-.083h-.87v-.28c0-.048-.035-.09-.083-.09h-1.554c-.042 0-.078.042-.078.09v.28H73.9v-.28c0-.048-.036-.09-.083-.09h-1.555c-.042 0-.083.042-.083.09v.28h-.834a.08.08 0 0 0-.084.083v1.162c0 .047.036.083.084.083m4.866 1.888c.042 0 .078.036.078.078v2.317a.08.08 0 0 1-.078.077h-.375V6.308a.16.16 0 0 0-.161-.161h-3.097c.113-.095.22-.197.315-.316h3.312zm-1.644 1.924a.085.085 0 0 1-.083.083h-1.24a.085.085 0 0 1-.082-.083v-.554c0-.048.035-.083.083-.083h1.239c.041 0 .083.035.083.083zm-3.311-1.084q.339-.035.643-.143v2.115c0 .089.071.16.16.16h3.64v.763c0 .041.036.077.077.077h1.37a.66.66 0 0 0 .656-.66V4.859a.16.16 0 0 0-.161-.16h-4.217q.027-.154.047-.316c0-.048-.035-.09-.083-.09h-1.352c-.042 0-.078.03-.078.072-.089.703-.482.786-.715.804-.041 0-.077.042-.077.083V6.6c0 .041.03.077.072.083zm6.82 1.34.017 1.43c0 .047.042.089.09.089 1.167-.024 2.096-.238 2.859-.637.822.452 1.828.697 2.99.697.047 0 .083-.042.083-.09v-1.4a.08.08 0 0 0-.083-.083 5.3 5.3 0 0 1-1.608-.238c1-1.203 1.078-2.657 1.066-3.413h.673a.085.085 0 0 0 .083-.083V3.032a.08.08 0 0 0-.083-.084h-3.371c.041-.196.071-.393.077-.601a.08.08 0 0 0-.083-.084h-1.394a.08.08 0 0 0-.078.078c-.035.679-.518 1.215-1.155 1.298-.042 0-.072.036-.072.078v1.405c0 .048.042.084.084.084a2.86 2.86 0 0 0 1.84-.828h1.918v.125c0 .625-.095 1.626-.798 2.377-.024.03-.06.053-.083.077-.405-.411-.721-.953-.888-1.656-.012-.036-.041-.065-.077-.065h-1.394c-.054 0-.09.047-.083.1.16.942.518 1.752 1.048 2.407-.423.12-.905.185-1.483.203-.048 0-.084.041-.084.09zm6.123 5.462H78.73v-.62h4.8a.08.08 0 0 0 .078-.077v-1.012a.08.08 0 0 0-.078-.078h-4.8v-.631h5.003a.08.08 0 0 0 .077-.078V9.977a.08.08 0 0 0-.077-.078H71.708a.08.08 0 0 0-.077.078v1.012c0 .042.035.078.077.078h5.003v.631h-4.8a.08.08 0 0 0-.078.078v1.012c0 .042.036.078.078.078h4.8v.62h-5.468a.08.08 0 0 0-.077.076v1.013c0 .042.036.078.078.078h5.467v.81c0 .089-.065.16-.154.16H75.15a.154.154 0 0 0-.155.155v.935c0 .09.072.155.155.155h2.329c.697 0 1.25-.566 1.25-1.262v-.965h5.468a.08.08 0 0 0 .078-.078v-1.012a.08.08 0 0 0-.078-.078zM68.307 2.257h-1.346a.226.226 0 0 0-.226.227V16.66c0 .125.1.226.226.226h1.346a.226.226 0 0 0 .226-.226V2.484a.226.226 0 0 0-.226-.227m-5.069 0H56.55a.226.226 0 0 0-.226.227v1.34c0 .125.101.226.226.226h5.045c.042 0 .078.036.078.078v1.924a.08.08 0 0 1-.078.077h-4.848c-.12 0-.215.09-.227.209l-.345 5.08c0 .078.048.143.12.161h5.3c.042 0 .078.036.078.077v2.758c0 .346-.28.632-.632.632h-3.865a.226.226 0 0 0-.227.226v1.376c0 .125.102.226.227.226h4.396a1.89 1.89 0 0 0 1.888-1.888v-4.968a.226.226 0 0 0-.227-.226h-5.11a.154.154 0 0 1-.155-.155v-.012l.13-1.566a.156.156 0 0 1 .156-.143h4.98a.226.226 0 0 0 .226-.226V2.484a.226.226 0 0 0-.227-.227zM53.69 4.17h-1.334a.226.226 0 0 0-.226.227v10.697h-3.49V2.483a.226.226 0 0 0-.227-.226h-1.346a.226.226 0 0 0-.227.227v12.61h-3.496V4.395a.226.226 0 0 0-.226-.227h-1.334a.226.226 0 0 0-.227.227V16.57c0 .172.143.315.316.315H53.6a.32.32 0 0 0 .316-.316V4.397a.226.226 0 0 0-.227-.227M33.278 2.257c.125 0 .226.102.226.227v5.3c-.071 4.242 3.532 7.083 5.67 7.22.09 0 .156.077.156.167v1.542a.164.164 0 0 1-.173.167c-1.596-.101-3.413-.983-4.789-2.34a9.1 9.1 0 0 1-1.799-2.532 8.8 8.8 0 0 1-1.799 2.531c-1.37 1.358-3.186 2.24-4.788 2.341a.17.17 0 0 1-.173-.167v-1.542c0-.09.071-.161.155-.167 2.138-.137 5.76-2.984 5.688-7.22v-5.3c0-.125.101-.227.226-.227h1.4m-4.956 1.716c.09 0 .167.071.173.167l.012.327c.042.858.155 2.442.459 4.771.011.102-.066.197-.167.197h-1.751a.18.18 0 0 1-.173-.155l-.084-.667c-.274-2.305-.357-3.782-.38-4.467 0-.096.07-.18.172-.18h1.74zm10.144 0c.095 0 .167.077.167.179l-.018.458c-.042.876-.155 2.4-.429 4.598a.17.17 0 0 1-.167.15h-1.697a.164.164 0 0 1-.161-.197l.06-.489c.285-2.346.369-3.853.393-4.532 0-.09.077-.161.166-.161h1.686zM4.759 18h7.714L8.887 6.945a.281.281 0 0 0-.536 0L4.765 18zm-1.68-7.833a.281.281 0 0 0-.536 0L0 18h1.698l1.96-6.046-.585-1.787zm3.997-5.366a.281.281 0 0 0-.536 0L2.257 18H4.2L7.78 6.963zM12.181.197a.281.281 0 0 0-.536 0L9.447 6.969l3.58 11.037h4.931zm5.015 8.547a.281.281 0 0 0-.536 0l-.572 1.757L18.524 18h1.674z",
                            clipRule: "evenodd"
                        })
                    }), (0, o.jsx)("path", {
                        fill: "#fff",
                        fillOpacity: .9,
                        d: "M95.903 1.963h1.954l5.682 14.074h-2.277l-4.372-11.3-4.311 11.3h-2.297zm-2.62 8.666h7.254v1.95h-7.253zM104.522 1.963h2.115v14.074h-2.115zM111.946 1.963h2.115v5.87h7.717v-5.87h2.115v14.074h-2.115V9.784h-7.717v6.253h-2.115zM129.649 16.318a3.9 3.9 0 0 1-2.015-.543 4.06 4.06 0 0 1-1.471-1.467q-.524-.945-.524-2.111V5.38h2.035v6.092q0 .804.323 1.468.322.642.906 1.025.605.382 1.431.382.765 0 1.41-.422.644-.443 1.007-1.166a3.6 3.6 0 0 0 .363-1.609v-5.77h2.075v10.656h-1.995v-1.548a3.5 3.5 0 0 1-1.41 1.347q-.906.482-2.135.482M142.933 16.258q-1.772.04-2.941-.925-1.168-.985-1.713-2.312-.543-1.327-.543-2.392 0-1.005.543-2.313.545-1.306 1.713-2.271 1.169-.966 2.941-.966 1.491 0 2.7.744a5.3 5.3 0 0 1 1.934 2.031q.705 1.267.705 2.775 0 1.548-.705 2.834a5.5 5.5 0 0 1-1.934 2.031q-1.209.744-2.7.764M136.99 1.682h2.035v7.64l-.746 1.367.746 1.327v4.02h-2.035zm5.541 12.726q1.067 0 1.914-.522.846-.523 1.309-1.388.463-.885.463-1.89 0-.945-.463-1.789a3.65 3.65 0 0 0-1.309-1.367 3.57 3.57 0 0 0-1.914-.523 3.36 3.36 0 0 0-1.834.523 3.7 3.7 0 0 0-1.269 1.387 3.8 3.8 0 0 0-.464 1.83q0 .984.464 1.85a3.76 3.76 0 0 0 1.269 1.367 3.36 3.36 0 0 0 1.834.522"
                    }), (0, o.jsx)("defs", {
                        children: (0, o.jsx)("clipPath", {
                            id: "logo_22182990_svg__a",
                            children: (0, o.jsx)("path", {fill: "#fff", d: "M0 0h84.282v18H0z"})
                        })
                    })]
                }))
            }, v = function (M) {
                return (0, o.jsx)("svg", (0, N._)((0, u._)({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    fill: "none",
                    viewBox: "0 0 24 24"
                }, M), {
                    children: (0, o.jsx)("path", {
                        fill: "#C7CCD6",
                        d: "M19.8 17c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2H4.2a.2.2 0 0 1-.2-.2v-1.6c0-.11.09-.2.2-.2zm0-6c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2H4.2a.2.2 0 0 1-.2-.2v-1.6c0-.11.09-.2.2-.2zm0-6c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2H4.2a.2.2 0 0 1-.2-.2V5.2c0-.11.09-.2.2-.2z"
                    })
                }))
            }, w = t(98959), k = t(35098);

        function h(M, e) {
            (null == e || e > M.length) && (e = M.length);
            for (var t = 0, n = Array(e); t < e; t++) n[t] = M[t];
            return n
        }

        function p(M, e, t, n, i, a, c) {
            try {
                var u = M[a](c), N = u.value
            } catch (M) {
                t(M);
                return
            }
            u.done ? e(N) : Promise.resolve(N).then(n, i)
        }

        function f(M) {
            return function () {
                var e = this, t = arguments;
                return new Promise(function (n, i) {
                    var a = M.apply(e, t);

                    function c(M) {
                        p(a, n, i, c, u, "next", M)
                    }

                    function u(M) {
                        p(a, n, i, c, u, "throw", M)
                    }

                    c(void 0)
                })
            }
        }

        function C(M, e) {
            return function (M) {
                if (Array.isArray(M)) return M
            }(M) || function (M, e) {
                var t, n, i = null == M ? null : "undefined" != typeof Symbol && M[Symbol.iterator] || M["@@iterator"];
                if (null != i) {
                    var a = [], c = !0, u = !1;
                    try {
                        for (i = i.call(M); !(c = (t = i.next()).done) && (a.push(t.value), !e || a.length !== e); c = !0) ;
                    } catch (M) {
                        u = !0, n = M
                    } finally {
                        try {
                            c || null == i.return || i.return()
                        } finally {
                            if (u) throw n
                        }
                    }
                    return a
                }
            }(M, e) || function (M, e) {
                if (M) {
                    if ("string" == typeof M) return h(M, e);
                    var t = Object.prototype.toString.call(M).slice(8, -1);
                    if ("Object" === t && M.constructor && (t = M.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return h(M, e)
                }
            }(M, e) || function () {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function U(M, e) {
            var t, n, i, a, c = {
                label: 0, sent: function () {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                }, trys: [], ops: []
            };
            return a = {
                next: u(0),
                throw: u(1),
                return: u(2)
            }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
                return this
            }), a;

            function u(a) {
                return function (u) {
                    var N = [a, u];
                    if (t) throw TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (t = 1, n && (i = 2 & N[0] ? n.return : N[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, N[1])).done) return i;
                        switch (n = 0, i && (N = [2 & N[0], i.value]), N[0]) {
                            case 0:
                            case 1:
                                i = N;
                                break;
                            case 4:
                                return c.label++, {value: N[1], done: !1};
                            case 5:
                                c.label++, n = N[1], N = [0];
                                continue;
                            case 7:
                                N = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = c.trys).length > 0 && i[i.length - 1]) && (6 === N[0] || 2 === N[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === N[0] && (!i || N[1] > i[0] && N[1] < i[3])) {
                                    c.label = N[1];
                                    break
                                }
                                if (6 === N[0] && c.label < i[1]) {
                                    c.label = i[1], i = N;
                                    break
                                }
                                if (i && c.label < i[2]) {
                                    c.label = i[2], c.ops.push(N);
                                    break
                                }
                                i[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        N = e.call(M, c)
                    } catch (M) {
                        N = [6, M], n = 0
                    } finally {
                        t = i = 0
                    }
                    if (5 & N[0]) throw N[1];
                    return {value: N[0] ? N[1] : void 0, done: !0}
                }
            }
        }

        var Y = (0, L.dU)({fallback: L.tE.PROD}), P = (n = f(function () {
            var M;
            return U(this, function (e) {
                switch (e.label) {
                    case 0:
                        M = Y === L.tE.BOE || Y === L.tE.STABLE ? "https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_950/bee_prod_950_bee_publish_17345.json" : "https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_950/bee_prod_950_bee_publish_17344.json", e.label = 1;
                    case 1:
                        return e.trys.push([1, 3, , 4]), [4, (0, w.W)(M)];
                    case 2:
                        return [2, e.sent()];
                    case 3:
                        return console.error("[appbar] getInfomercialData error:", e.sent()), [2, null];
                    case 4:
                        return [2]
                }
            })
        }), function () {
            return n.apply(this, arguments)
        });

        function Z() {
            return (Z = f(function () {
                return U(this, function (M) {
                    switch (M.label) {
                        case 0:
                            return M.trys.push([0, 2, , 3]), [4, (0, k.z)({
                                targetService: "account_management",
                                action: "GetAccountBasicInfo",
                                version: "2018-01-01",
                                method: "get",
                                region: "cn-beijing"
                            })];
                        case 1:
                            return [2, M.sent()];
                        case 2:
                            return M.sent(), [2, {}];
                        case 3:
                            return [2]
                    }
                })
            })).apply(this, arguments)
        }

        function W() {
            return H.apply(this, arguments)
        }

        function H() {
            return (H = f(function () {
                var M, e, t;
                return U(this, function (n) {
                    switch (n.label) {
                        case 0:
                            return n.trys.push([0, 2, , 3]), [4, (0, k.z)({
                                targetService: "bill_volcano_engine",
                                action: "GetBalanceFromTradeBalance",
                                version: "2020-01-01",
                                method: "post",
                                headers: {"Content-Type": "application/json"},
                                urlPrefix: "/api",
                                params: {ReqSysNo: "page02", GetAlertFlag: "Y"}
                            })];
                        case 1:
                            var i;
                            return [2, "number" == typeof (i = t = null == (e = n.sent()) || null == (M = e.Acct) ? void 0 : M.AvailableBalance) || "string" == typeof i ? t : void 0];
                        case 2:
                            return n.sent(), [2, void 0];
                        case 3:
                            return [2]
                    }
                })
            })).apply(this, arguments)
        }

        function B() {
            return (B = f(function () {
                var M, e;
                return U(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return t.trys.push([0, 2, , 3]), [4, (0, k.z)({
                                targetService: "iam",
                                action: "ListThirdPartyPersonalIdentityByPlatformIdentity",
                                version: "2018-01-01",
                                method: "get",
                                region: "cn-beijing",
                                params: {WithID: 1, PlatformIdentityType: 1}
                            })];
                        case 1:
                            return [2, (null == (e = (Array.isArray(null == (M = t.sent()) ? void 0 : M.List) ? M.List : []).find(function (M) {
                                return (null == M ? void 0 : M.IDPType) === "Doubao"
                            })) ? void 0 : e.ThirdPartyIdentityName) || ""];
                        case 2:
                            return t.sent(), [2, ""];
                        case 3:
                            return [2]
                    }
                })
            })).apply(this, arguments)
        }

        function G() {
            return (G = f(function () {
                var M, e, t, n, i, a, c, u, N, D;
                return U(this, function (r) {
                    switch (r.label) {
                        case 0:
                            var l;
                            return [4, (l = "https://".concat((0, L.WH)({fallbackEnv: L.tE.PROD}).aiSite, "/signin/status/identity"), (0, w.W)(l, {
                                method: "GET",
                                credentials: "include",
                                headers: {accept: "application/json"}
                            }))];
                        case 1:
                            if (0 >= Number((null == (n = (null == (t = r.sent()) || null == (e = t.ResponseMetadata) || null == (M = e.Error) ? void 0 : M.Code) || null == t ? void 0 : t.Result) ? void 0 : n.AccountId) || 0)) return [2, void 0];
                            return [4, Promise.allSettled([W(), function () {
                                return Z.apply(this, arguments)
                            }(), function () {
                                return B.apply(this, arguments)
                            }()])];
                        case 2:
                            return a = (i = C.apply(void 0, [r.sent(), 3]))[0], c = i[1], u = i[2], N = "fulfilled" === c.status ? c.value : {}, D = "fulfilled" === u.status ? u.value : "", [2, {
                                Type: null == n ? void 0 : n.Type,
                                AccountId: null == n ? void 0 : n.AccountId,
                                IdentityName: null == n ? void 0 : n.IdentityName,
                                ThirdPartyIdentityName: D || void 0,
                                AvailableBalance: "fulfilled" === a.status ? a.value : void 0,
                                Avatar: null == N ? void 0 : N.Avatar,
                                AccountType: null == N ? void 0 : N.AccountType,
                                CreatedTime: null == N ? void 0 : N.CreatedTime
                            }]
                    }
                })
            })).apply(this, arguments)
        }

        var R = t(63730), V = t(87199), F = t(20717), J = t(53522), _ = t(98148);

        function X(M, e) {
            (null == e || e > M.length) && (e = M.length);
            for (var t = 0, n = Array(e); t < e; t++) n[t] = M[t];
            return n
        }

        var K = function (M) {
                var e, t = null == M ? void 0 : M.trim();
                return t && (null == (e = t.replace(/^[\s/]+/, "")[0]) ? void 0 : e.toUpperCase()) || "?"
            }, q = function (M) {
                var e, t = M.name, n = M.avatar, i = M.size, a = void 0 === i ? 32 : i, c = M.decorative, u = K(t),
                    N = a <= 32 ? 14 : 20, D = (e = I.useState(!1), function (M) {
                        if (Array.isArray(M)) return M
                    }(e) || function (M, e) {
                        var t, n, i = null == M ? null : "undefined" != typeof Symbol && M[Symbol.iterator] || M["@@iterator"];
                        if (null != i) {
                            var a = [], c = !0, u = !1;
                            try {
                                for (i = i.call(M); !(c = (t = i.next()).done) && (a.push(t.value), a.length !== e); c = !0) ;
                            } catch (M) {
                                u = !0, n = M
                            } finally {
                                try {
                                    c || null == i.return || i.return()
                                } finally {
                                    if (u) throw n
                                }
                            }
                            return a
                        }
                    }(e, 2) || function (M, e) {
                        if (M) {
                            if ("string" == typeof M) return X(M, 2);
                            var t = Object.prototype.toString.call(M).slice(8, -1);
                            if ("Object" === t && M.constructor && (t = M.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return X(M, e)
                        }
                    }(e, 2) || function () {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()), r = D[0], l = D[1];
                return (I.useEffect(function () {
                    l(!1)
                }, [n]), n && !r) ? I.createElement("div", {
                    className: "user-avatar",
                    style: {width: a, height: a, borderRadius: "50%", flexShrink: 0, overflow: "hidden"}
                }, I.createElement("img", {
                    src: n, alt: t, onError: function () {
                        return l(!0)
                    }, style: {width: "100%", height: "100%", objectFit: "cover"}
                })) : I.createElement("div", {
                    className: "user-avatar",
                    style: {
                        width: a,
                        height: a,
                        borderRadius: "50%",
                        background: "#0C0D0E",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#FFFFFF",
                        fontSize: N,
                        fontWeight: 500,
                        lineHeight: 1,
                        letterSpacing: "0.042em",
                        flexShrink: 0
                    }
                }, void 0 !== c && c ? null : u)
            }, $ = t(32722), MM = t(41229), Me = t.n(MM),
            Mt = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMDA5MyAxMC42MDkxTDkuODYyMTUgNC43NTYyNlY5LjM1NzE4QzkuODYyMjEgOS41OTg3MSAxMC4wNTgxIDkuNzk0NTcgMTAuMjk5NiA5Ljc5NDYzQzEwLjU0MTIgOS43OTQ2MyAxMC43MzcgOS41OTg3NSAxMC43MzcxIDkuMzU3MThMMTAuNzM3MSAzLjcwMDA5TDEwLjczNSAzLjY1NTM4QzEwLjcxMjYgMy40MzQ4MSAxMC41MjYxIDMuMjYyNjQgMTAuMjk5NiAzLjI2MjY0TDQuNjQyOTIgMy4yNjMwNEM0LjQwMTI5IDMuMjYzMDQgNC4yMDU0NiAzLjQ1ODg3IDQuMjA1NDYgMy43MDA0OUM0LjIwNTYyIDMuOTQxOTkgNC40MDEzOSA0LjEzNzk1IDQuNjQyOTIgNC4xMzc5NUw5LjI0MzQzIDQuMTM3NTRMMy4zOTA1OCA5Ljk5MDRDMy4yMTk3NiAxMC4xNjEyIDMuMjE5ODQgMTAuNDM4MyAzLjM5MDU4IDEwLjYwOTFDMy41NjE0MyAxMC43OCAzLjgzODQ0IDEwLjc4IDQuMDA5MyAxMC42MDkxWiIgZmlsbD0iIzUyNTI1QyIvPgo8L3N2Zz4K";

        function Mn(M, e, t, n, i, a, c) {
            try {
                var u = M[a](c), N = u.value
            } catch (M) {
                t(M);
                return
            }
            u.done ? e(N) : Promise.resolve(N).then(n, i)
        }

        var Mi = "/console";

        function Ma() {
            var M;
            return M = function () {
                var M, e, t, n, i;
                return function (M, e) {
                    var t, n, i, a, c = {
                        label: 0, sent: function () {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        }, trys: [], ops: []
                    };
                    return a = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
                        return this
                    }), a;

                    function u(a) {
                        return function (u) {
                            var N = [a, u];
                            if (t) throw TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (t = 1, n && (i = 2 & N[0] ? n.return : N[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, N[1])).done) return i;
                                switch (n = 0, i && (N = [2 & N[0], i.value]), N[0]) {
                                    case 0:
                                    case 1:
                                        i = N;
                                        break;
                                    case 4:
                                        return c.label++, {value: N[1], done: !1};
                                    case 5:
                                        c.label++, n = N[1], N = [0];
                                        continue;
                                    case 7:
                                        N = c.ops.pop(), c.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = c.trys).length > 0 && i[i.length - 1]) && (6 === N[0] || 2 === N[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === N[0] && (!i || N[1] > i[0] && N[1] < i[3])) {
                                            c.label = N[1];
                                            break
                                        }
                                        if (6 === N[0] && c.label < i[1]) {
                                            c.label = i[1], i = N;
                                            break
                                        }
                                        if (i && c.label < i[2]) {
                                            c.label = i[2], c.ops.push(N);
                                            break
                                        }
                                        i[2] && c.ops.pop(), c.trys.pop();
                                        continue
                                }
                                N = e.call(M, c)
                            } catch (M) {
                                N = [6, M], n = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & N[0]) throw N[1];
                            return {value: N[0] ? N[1] : void 0, done: !0}
                        }
                    }
                }(this, function (a) {
                    switch (a.label) {
                        case 0:
                            window.localStorage.removeItem("aihub-preview-login"), M = (0, L.WH)().aiSite, a.label = 1;
                        case 1:
                            return a.trys.push([1, 3, , 4]), [4, (0, w.W)("//".concat(M, "/signin/logout"), {
                                method: "GET",
                                credentials: "include"
                            })];
                        case 2:
                            if (n = null == (t = a.sent()) || null == (e = t.Result) ? void 0 : e.SignoutRedirectUri) {
                                var c, u, N, D;
                                return i = "https://".concat(M).concat((u = (c = window.location).pathname, N = c.search, D = c.hash, u === Mi || u.startsWith("".concat(Mi, "/")) ? "/" : "".concat(u).concat(N).concat(D))), location.href = "".concat(n, "&redirect_uri=").concat(encodeURIComponent(i)), [2]
                            }
                            return [3, 4];
                        case 3:
                            return console.error("[ai-appbar] logout failed", a.sent()), [3, 4];
                        case 4:
                            return location.reload(), [2]
                    }
                })
            }, (Ma = function () {
                var e = this, t = arguments;
                return new Promise(function (n, i) {
                    var a = M.apply(e, t);

                    function c(M) {
                        Mn(a, n, i, c, u, "next", M)
                    }

                    function u(M) {
                        Mn(a, n, i, c, u, "throw", M)
                    }

                    c(void 0)
                })
            }).apply(this, arguments)
        }

        function Mc(M, e) {
            (null == e || e > M.length) && (e = M.length);
            for (var t = 0, n = Array(e); t < e; t++) n[t] = M[t];
            return n
        }

        function Mu(M, e, t, n, i, a, c) {
            try {
                var u = M[a](c), N = u.value
            } catch (M) {
                t(M);
                return
            }
            u.done ? e(N) : Promise.resolve(N).then(n, i)
        }

        function MN(M) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {}, n = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function (M) {
                    return Object.getOwnPropertyDescriptor(t, M).enumerable
                }))), n.forEach(function (e) {
                    var n;
                    n = t[e], e in M ? Object.defineProperty(M, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : M[e] = n
                })
            }
            return M
        }

        function MD(M, e) {
            return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(M, Object.getOwnPropertyDescriptors(e)) : (function (M, e) {
                var t = Object.keys(M);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(M);
                    t.push.apply(t, n)
                }
                return t
            })(Object(e)).forEach(function (t) {
                Object.defineProperty(M, t, Object.getOwnPropertyDescriptor(e, t))
            }), M
        }

        function Mr(M, e) {
            if (null == M) return {};
            var t, n, i = function (M, e) {
                if (null == M) return {};
                var t, n, i = {}, a = Object.keys(M);
                for (n = 0; n < a.length; n++) t = a[n], e.indexOf(t) >= 0 || (i[t] = M[t]);
                return i
            }(M, e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(M);
                for (n = 0; n < a.length; n++) t = a[n], !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(M, t) && (i[t] = M[t])
            }
            return i
        }

        function Ml(M, e) {
            return function (M) {
                if (Array.isArray(M)) return M
            }(M) || function (M, e) {
                var t, n, i = null == M ? null : "undefined" != typeof Symbol && M[Symbol.iterator] || M["@@iterator"];
                if (null != i) {
                    var a = [], c = !0, u = !1;
                    try {
                        for (i = i.call(M); !(c = (t = i.next()).done) && (a.push(t.value), !e || a.length !== e); c = !0) ;
                    } catch (M) {
                        u = !0, n = M
                    } finally {
                        try {
                            c || null == i.return || i.return()
                        } finally {
                            if (u) throw n
                        }
                    }
                    return a
                }
            }(M, e) || function (M, e) {
                if (M) {
                    if ("string" == typeof M) return Mc(M, e);
                    var t = Object.prototype.toString.call(M).slice(8, -1);
                    if ("Object" === t && M.constructor && (t = M.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Mc(M, e)
                }
            }(M, e) || function () {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        var Mo = (0, L.WH)(), MI = (0, L.dU)({fallback: L.tE.PROD}), Mj = (0, $.ZP)(function () {
                return t.e("52008").then(t.bind(t, 24830)).then(function (M) {
                    return {default: M.FundRechargePayModal}
                })
            }, {ssr: !1}), Mg = (0, $.ZP)(function () {
                return t.e("52008").then(t.bind(t, 24830)).then(function (M) {
                    return {default: M.RechargeHistoryModal}
                })
            }, {ssr: !1}), Mz = [{
                to: "/console/subscriptions",
                label: "\u8BA2\u9605",
                icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDYuNjY2NThIMk0xMC42NjY3IDEuMzMzMjVWMy45OTk5Mk01LjMzMzMzIDEuMzMzMjVWMy45OTk5Mk01LjIgMTQuNjY2NkgxMC44QzExLjkyIDE0LjY2NjYgMTIuNDggMTQuNjY2NiAxMi45MDggMTQuNDQ4NkMxMy4yODQzIDE0LjI1NjggMTMuNTkwMyAxMy45NTA5IDEzLjc4MiAxMy41NzQ2QzE0IDEzLjE0NjYgMTQgMTIuNTg2NiAxNCAxMS40NjY2VjUuODY2NTlDMTQgNC43NDY1OSAxNCA0LjE4NjU5IDEzLjc4MiAzLjc1ODU5QzEzLjU5MDMgMy4zODIyOCAxMy4yODQzIDMuMDc2MzMgMTIuOTA4IDIuODg0NTlDMTIuNDggMi42NjY1OSAxMS45MiAyLjY2NjU5IDEwLjggMi42NjY1OUg1LjJDNC4wOCAyLjY2NjU5IDMuNTIgMi42NjY1OSAzLjA5MiAyLjg4NDU5QzIuNzE1NjkgMy4wNzYzMyAyLjQwOTc0IDMuMzgyMjggMi4yMTggMy43NTg1OUMyIDQuMTg2NTkgMiA0Ljc0NjU5IDIgNS44NjY1OVYxMS40NjY2QzIgMTIuNTg2NiAyIDEzLjE0NjYgMi4yMTggMTMuNTc0NkMyLjQwOTc0IDEzLjk1MDkgMi43MTU2OSAxNC4yNTY4IDMuMDkyIDE0LjQ0ODZDMy41MiAxNC42NjY2IDQuMDggMTQuNjY2NiA1LjIgMTQuNjY2NloiIHN0cm9rZT0iIzlEQTJBQiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
            }, {
                to: "/console/apikey",
                label: "API Key",
                icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjMzMzMgNS45OTk5NkMxMS4zMzMzIDUuNjU4NzQgMTEuMjAzMSA1LjMxNzUzIDEwLjk0MjggNS4wNTcxOUMxMC42ODI1IDQuNzk2ODQgMTAuMzQxMiA0LjY2NjY3IDEwIDQuNjY2NjdNMTAgMTBDMTIuMjA5MSAxMCAxNCA4LjIwOTE0IDE0IDZDMTQgMy43OTA4NiAxMi4yMDkxIDIgMTAgMkM3Ljc5MDg2IDIgNiAzLjc5MDg2IDYgNkM2IDYuMTgyNDUgNi4wMTIyMiA2LjM2MjA1IDYuMDM1ODcgNi41MzgwMkM2LjA3NDc4IDYuODI3NDUgNi4wOTQyNCA2Ljk3MjE3IDYuMDgxMTQgNy4wNjM3M0M2LjA2NzUgNy4xNTkxIDYuMDUwMTMgNy4yMTA1IDYuMDAzMTMgNy4yOTQ2QzUuOTU4IDcuMzc1MzMgNS44Nzg0NyA3LjQ1NDg2IDUuNzE5NDIgNy42MTM5MUwyLjMxMjQyIDExLjAyMDlDMi4xOTcxMiAxMS4xMzYyIDIuMTM5NDcgMTEuMTkzOSAyLjA5ODI0IDExLjI2MTFDMi4wNjE2OSAxMS4zMjA4IDIuMDM0NzUgMTEuMzg1OCAyLjAxODQyIDExLjQ1MzhDMiAxMS41MzA2IDIgMTEuNjEyMSAyIDExLjc3NTJWMTIuOTMzM0MyIDEzLjMwNjcgMiAxMy40OTM0IDIuMDcyNjYgMTMuNjM2QzIuMTM2NTggMTMuNzYxNCAyLjIzODU2IDEzLjg2MzQgMi4zNjQwMSAxMy45MjczQzIuNTA2NjEgMTQgMi42OTMzIDE0IDMuMDY2NjcgMTRINC42NjY2N1YxMi42NjY3SDZWMTEuMzMzM0g3LjMzMzMzTDguMzg2MDkgMTAuMjgwNkM4LjU0NTE0IDEwLjEyMTUgOC42MjQ2NyAxMC4wNDIgOC43MDU0IDkuOTk2ODdDOC43ODk1IDkuOTQ5ODcgOC44NDA5IDkuOTMyNSA4LjkzNjI3IDkuOTE4ODZDOS4wMjc4MyA5LjkwNTc2IDkuMTcyNTUgOS45MjUyMiA5LjQ2MTk4IDkuOTY0MTNDOS42Mzc5NSA5Ljk4Nzc4IDkuODE3NTUgMTAgMTAgMTBaIiBzdHJva2U9IiM5REEyQUIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
            }, {
                to: "/console/billing",
                label: "\u8D26\u5355",
                icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjMzMzMgNS4zMzM0MUgxMkMxMy4xMDQ2IDUuMzMzNDEgMTQgNi4yMjg4NSAxNCA3LjMzMzQxVjEyLjAwMDFDMTQgMTIuNzM2NSAxMy40MDMgMTMuMzMzNCAxMi42NjY3IDEzLjMzMzRIMTEuMzMzM00xMS4zMzMzIDEzLjMzMzRINEMyLjg5NTQzIDEzLjMzMzQgMiAxMi40MzggMiAxMS4zMzM0VjQuNjY2NzVDMiAzLjU2MjE4IDIuODk1NDMgMi42NjY3NSA0IDIuNjY2NzVIOS4zMzMzM0MxMC40Mzc5IDIuNjY2NzUgMTEuMzMzMyAzLjU2MjE4IDExLjMzMzMgNC42NjY3NVYxMy4zMzM0WiIgc3Ryb2tlPSIjOURBMkFCIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTExLjMzMzQgNS4zMzMyNVYxMS45OTk5QzExLjMzMzQgMTIuNzM2MyAxMS45MzAzIDEzLjMzMzMgMTIuNjY2NyAxMy4zMzMzIiBzdHJva2U9IiM5REEyQUIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOC42NjY2MyA1LjMzMzI1TDQuNjY2NjMgNS4zMzMyNSIgc3Ryb2tlPSIjOURBMkFCIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTguNjY2NjcgOEw2IDgiIHN0cm9rZT0iIzlEQTJBQiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
            }, {
                to: "https://console.volcengine.com/finance/saving-plan",
                label: "AI \u8282\u7701\u8BA1\u5212",
                icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuODMyMDMgNy40NDM2N1YzLjE2OTI3QzEuODMyMDMgMi40MzI4OSAyLjQyODk4IDEuODM1OTQgMy4xNjUzNiAxLjgzNTk0SDcuNDM5NzZDNy43OTMzNiAxLjgzNTk0IDguMTMyNSAxLjk3NjQxIDguMzgyNTYgMi4yMjY0NkwxMy43MjI2IDcuNTY2NDdDMTQuMjQzMiA4LjA4NzE0IDE0LjI0MzIgOC45MzE0IDEzLjcyMjYgOS40NTIwN0w5LjQ0ODE2IDEzLjcyNjVDOC45Mjc1IDE0LjI0NzEgOC4wODMyMyAxNC4yNDcxIDcuNTYyNTYgMTMuNzI2NUwyLjIyMjU2IDguMzg2NDdDMS45NzI1IDguMTM2NCAxLjgzMjAzIDcuNzk3MjcgMS44MzIwMyA3LjQ0MzY3WiIgc3Ryb2tlPSIjOURBMkFCIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik01LjUgNUM1LjUgNS4yNzYxNCA1LjI3NjE0IDUuNSA1IDUuNUM0LjcyMzg2IDUuNSA0LjUgNS4yNzYxNCA0LjUgNUM0LjUgNC43MjM4NiA0LjcyMzg2IDQuNSA1IDQuNUM1LjI3NjE0IDQuNSA1LjUgNC43MjM4NiA1LjUgNVoiIHN0cm9rZT0iIzlEQTJBQiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",
                externalIcon: Mt,
                target: "_blank"
            }, {
                to: "https://console.volcengine.com/finance/invoice",
                label: "\u5F00\u7968",
                icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjE2NjcgNEMxMi4xNjY3IDMuMTcxNTcgMTEuNDk1MSAyLjUgMTAuNjY2NyAyLjVINS4zMzMzN0M0LjUwNDk1IDIuNSAzLjgzMzM3IDMuMTcxNTcgMy44MzMzNyA0VjEyLjkyMzJDNC41MTI0IDEyLjQ0NDUgNS40NDAxMyAxMi40ODA0IDYuMDgyMDcgMTMuMDMwNkw2LjQ0NDA1IDEzLjM0MTFMNi44MDY2OCAxMy4wMzA2QzcuNDkzMjUgMTIuNDQyMSA4LjUwNjgzIDEyLjQ0MjEgOS4xOTM0IDEzLjAzMDZMOS41NTUzOCAxMy4zNDExTDkuOTE4MDEgMTMuMDMwNkMxMC41NiAxMi40ODA0IDExLjQ4NzcgMTIuNDQ0NSAxMi4xNjY3IDEyLjkyMzJWNFpNMTMuMTY2NyAxNEMxMy4xNjY3IDE0LjE5NTMgMTMuMDUzMSAxNC4zNzI4IDEyLjg3NTcgMTQuNDU0NEMxMi42OTgzIDE0LjUzNiAxMi40ODk0IDE0LjUwNjYgMTIuMzQxMiAxNC4zNzk2TDExLjY1MzcgMTMuNzkwNEMxMS4zNDE2IDEzLjUyMjkgMTAuODgxMSAxMy41MjI5IDEwLjU2OTEgMTMuNzkwNEw5Ljg4MDkgMTQuMzc5NkM5LjY5MzcgMTQuNTQgOS40MTc3NSAxNC41Mzk5IDkuMjMwNTEgMTQuMzc5Nkw4LjU0MjM2IDEzLjc5MDRDOC4yMzAyOCAxMy41MjI5IDcuNzY5OCAxMy41MjI5IDcuNDU3NzIgMTMuNzkwNEw2Ljc2OTU3IDE0LjM3OTZDNi41ODIzNCAxNC41Mzk5IDYuMzA2MzggMTQuNTQgNi4xMTkxOCAxNC4zNzk2TDUuNDMxMDMgMTMuNzkwNEM1LjExODk2IDEzLjUyMjkgNC42NTg0NyAxMy41MjI5IDQuMzQ2MzkgMTMuNzkwNEwzLjY1ODg5IDE0LjM3OTZDMy41MTA2NCAxNC41MDY2IDMuMzAxNzkgMTQuNTM2IDMuMTI0MzkgMTQuNDU0NEMyLjk0Njk5IDE0LjM3MjggMi44MzMzNyAxNC4xOTUzIDIuODMzMzcgMTRWNEMyLjgzMzM3IDIuNjE5MjkgMy45NTI2NiAxLjUgNS4zMzMzNyAxLjVIMTAuNjY2N0MxMi4wNDc0IDEuNSAxMy4xNjY3IDIuNjE5MjkgMTMuMTY2NyA0VjE0WiIgZmlsbD0iIzlEQTJBQiIvPgo8cGF0aCBkPSJNMTAgNC4xNjY3NUMxMC4yNzYxIDQuMTY2NzUgMTAuNSA0LjM5MDYxIDEwLjUgNC42NjY3NUMxMC41IDQuOTQyODkgMTAuMjc2MSA1LjE2Njc1IDEwIDUuMTY2NzVMNiA1LjE2Njc1QzUuNzIzODYgNS4xNjY3NSA1LjUgNC45NDI4OSA1LjUgNC42NjY3NUM1LjUgNC4zOTA2MSA1LjcyMzg2IDQuMTY2NzUgNiA0LjE2Njc1TDEwIDQuMTY2NzVaIiBmaWxsPSIjOURBMkFCIi8+CjxwYXRoIGQ9Ik0xMCA2LjgzMzI1QzEwLjI3NjEgNi44MzMyNSAxMC41IDcuMDU3MTEgMTAuNSA3LjMzMzI1QzEwLjUgNy42MDkzOSAxMC4yNzYxIDcuODMzMjUgMTAgNy44MzMyNUw2IDcuODMzMjVDNS43MjM4NiA3LjgzMzI1IDUuNSA3LjYwOTM5IDUuNSA3LjMzMzI1QzUuNSA3LjA1NzExIDUuNzIzODYgNi44MzMyNSA2IDYuODMzMjVMMTAgNi44MzMyNVoiIGZpbGw9IiM5REEyQUIiLz4KPHBhdGggZD0iTTEwIDkuNUMxMC4yNzYyIDkuNSAxMC41IDkuNzIzODYgMTAuNSAxMEMxMC41IDEwLjI3NjEgMTAuMjc2MiAxMC41IDEwIDEwLjVMNy4zMzMzNyAxMC41QzcuMDU3MjMgMTAuNSA2LjgzMzM3IDEwLjI3NjEgNi44MzMzNyAxMEM2LjgzMzM3IDkuNzIzODYgNy4wNTcyMyA5LjUgNy4zMzMzNyA5LjVMMTAgOS41WiIgZmlsbD0iIzlEQTJBQiIvPgo8L3N2Zz4K",
                externalIcon: Mt,
                target: "_blank"
            }], My = function () {
                return I.createElement("svg", {
                    className: "ai-console-account-copy-success-icon",
                    viewBox: "0 0 12 12",
                    "aria-hidden": "true",
                    focusable: "false"
                }, I.createElement("path", {d: "M2.5 6.2 5 8.7 9.7 3.4"}))
            }, MA = function (M) {
                var e = M.children, t = M.className, n = M.rel, i = M.role, a = M.to, c = M.target,
                    u = Mr(M, ["children", "className", "rel", "role", "to", "target"]);
                return I.createElement("a", MD(MN({}, u), {
                    className: t,
                    href: a,
                    role: i,
                    target: c,
                    rel: null != n ? n : c ? "noreferrer" : void 0
                }), e)
            }, MT = function (M) {
                var e = M.children, t = M.className, n = M.href, i = M.rel, a = M.target, c = M.variant,
                    u = Mr(M, ["children", "className", "href", "rel", "target", "variant"]);
                return I.createElement("a", MD(MN({}, u), {
                    className: Me()("ai-console-account-balance-action-button", t, {
                        "ai-console-account-balance-action-button-primary": "primary" === c,
                        "ai-console-account-balance-action-button-outline": "outline" === c
                    }), href: n, target: a, rel: null != i ? i : a ? "noreferrer" : void 0
                }), e)
            }, Ms = function (M) {
                var e, t, n = M.availableBalance, i = M.avatarName, a = M.accountId, c = M.isIdentified,
                    u = M.isEnterpriseIdentified, N = M.iamIdentityInfo, D = M.onRechargeHistoryClick,
                    r = M.onRechargeSuccess, l = M.fallbackRechargePage, o = M.onUnverifiedVerifyClick,
                    j = Ml((0, I.useState)(!1), 2), g = j[0], z = j[1], y = Ml((0, I.useState)(!1), 2), A = y[0], T = y[1],
                    s = Ml((0, I.useState)(!1), 2), d = s[0], L = s[1], x = Ml((0, I.useState)(!1), 2), O = x[0], E = x[1],
                    m = Ml((0, I.useState)(!1), 2), b = m[0], Q = m[1], v = (0, I.useRef)(!1), w = (0, I.useRef)(null),
                    k = function (M) {
                        if (void 0 === M) return "--";
                        var e = (function (M) {
                            var e = M.amount, t = M.fixed, n = void 0 === t ? 2 : t, i = Number(e);
                            if ("" === e || !Number.isFinite(i)) return "";
                            var a = Math.abs(i).toFixed(n), c = i < 0 && Number(a) >= Math.pow(10, -n),
                                u = Ml(a.split("."), 2), N = u[0], D = u[1];
                            return "".concat(c ? "- " : "").concat(Number(N).toLocaleString(), ".").concat(D)
                        })({amount: M}).trim();
                        return e ? "\xa5 ".concat(e) : "--"
                    }(n), h = void 0 !== n, p = N ? N.trim() : (null == i ? void 0 : i.trim()) || "\u7528\u6237",
                    f = a || "--",
                    C = u ? "\u4F01\u4E1A\u8BA4\u8BC1" : c ? "\u4E2A\u4EBA\u8BA4\u8BC1" : "\u672A\u8BA4\u8BC1", U = c || u,
                    Y = !c && !u;
                (0, I.useEffect)(function () {
                    if (g) {
                        var M = window.setTimeout(function () {
                            return z(!1)
                        }, 1400);
                        return function () {
                            return window.clearTimeout(M)
                        }
                    }
                }, [g]), (0, I.useEffect)(function () {
                    var M = function () {
                        var M = w.current;
                        M && E(M.scrollWidth > M.clientWidth)
                    };
                    if (M(), "undefined" != typeof ResizeObserver) {
                        var e = new ResizeObserver(M);
                        return w.current && e.observe(w.current), function () {
                            return e.disconnect()
                        }
                    }
                    return window.addEventListener("resize", M), function () {
                        return window.removeEventListener("resize", M)
                    }
                }, [p]), (0, I.useEffect)(function () {
                    if ("undefined" != typeof window) {
                        var M = window.matchMedia("(hover: none)"), e = function () {
                            return Q(M.matches)
                        };
                        return e(), M.addEventListener("change", e), function () {
                            return M.removeEventListener("change", e)
                        }
                    }
                }, []);
                var P = function (M) {
                    l || "undefined" != typeof window && window.innerWidth <= 809.98 || (S.Fz("reportCustom", "d111788", {
                        type: "click",
                        text: "\u5145\u503C\u5386\u53F2\u6309\u94AE"
                    }), null == M || M.preventDefault(), null == M || M.stopPropagation(), v.current || (v.current = !0, null == D || D(), L(!0), window.dispatchEvent(new CustomEvent("ai-console-recharge-history-open")), window.setTimeout(function () {
                        v.current = !1
                    }, 0)))
                }, Z = (e = function () {
                    return function (M, e) {
                        var t, n, i, a, c = {
                            label: 0, sent: function () {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            }, trys: [], ops: []
                        };
                        return a = {
                            next: u(0),
                            throw: u(1),
                            return: u(2)
                        }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
                            return this
                        }), a;

                        function u(a) {
                            return function (u) {
                                var N = [a, u];
                                if (t) throw TypeError("Generator is already executing.");
                                for (; c;) try {
                                    if (t = 1, n && (i = 2 & N[0] ? n.return : N[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, N[1])).done) return i;
                                    switch (n = 0, i && (N = [2 & N[0], i.value]), N[0]) {
                                        case 0:
                                        case 1:
                                            i = N;
                                            break;
                                        case 4:
                                            return c.label++, {value: N[1], done: !1};
                                        case 5:
                                            c.label++, n = N[1], N = [0];
                                            continue;
                                        case 7:
                                            N = c.ops.pop(), c.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = (i = c.trys).length > 0 && i[i.length - 1]) && (6 === N[0] || 2 === N[0])) {
                                                c = 0;
                                                continue
                                            }
                                            if (3 === N[0] && (!i || N[1] > i[0] && N[1] < i[3])) {
                                                c.label = N[1];
                                                break
                                            }
                                            if (6 === N[0] && c.label < i[1]) {
                                                c.label = i[1], i = N;
                                                break
                                            }
                                            if (i && c.label < i[2]) {
                                                c.label = i[2], c.ops.push(N);
                                                break
                                            }
                                            i[2] && c.ops.pop(), c.trys.pop();
                                            continue
                                    }
                                    N = e.call(M, c)
                                } catch (M) {
                                    N = [6, M], n = 0
                                } finally {
                                    t = i = 0
                                }
                                if (5 & N[0]) throw N[1];
                                return {value: N[0] ? N[1] : void 0, done: !0}
                            }
                        }
                    }(this, function (M) {
                        switch (M.label) {
                            case 0:
                                return T(!1), [4, null == r ? void 0 : r()];
                            case 1:
                                return M.sent(), [2]
                        }
                    })
                }, t = function () {
                    var M = this, t = arguments;
                    return new Promise(function (n, i) {
                        var a = e.apply(M, t);

                        function c(M) {
                            Mu(a, n, i, c, u, "next", M)
                        }

                        function u(M) {
                            Mu(a, n, i, c, u, "throw", M)
                        }

                        c(void 0)
                    })
                }, function () {
                    return t.apply(this, arguments)
                });
                return I.createElement("div", {
                    className: "user-info-card user-info-card-console",
                    "data-monitor-comp-id": "c111783"
                }, I.createElement("section", {className: "ai-console-account-profile"}, I.createElement("div", {className: "ai-console-account-name-row-container"}, I.createElement("div", {className: "ai-console-account-name-row"}, O ? I.createElement(V.Z, {
                    popup: function () {
                        return I.createElement("span", {className: "ai-console-account-name-tooltip"}, p)
                    }, position: "br", popupAlign: {right: [0, 4]}, unmountOnExit: !1, trigger: "hover"
                }, I.createElement("strong", {ref: w}, p)) : I.createElement("strong", {ref: w}, p)), I.createElement("div", {className: "ai-console-account-id-row"}, I.createElement("div", {
                    style: {
                        display: "flex",
                        alignItems: "center"
                    }
                }, I.createElement("span", null, "\u706B\u5C71\u5F15\u64CEID\uFF1A".concat(f)), I.createElement(V.Z, {
                    popup: function () {
                        return I.createElement("span", {className: "ai-console-account-copy-tooltip"}, g ? "\u5DF2\u590D\u5236" : "\u590D\u5236")
                    }, position: "right", popupAlign: {right: [8, 0]}, unmountOnExit: !1, trigger: b ? "click" : "hover"
                }, I.createElement("button", {
                    className: "ai-console-account-copy-button",
                    "data-monitor-click-id": "d111785",
                    type: "button",
                    "aria-label": "\u590D\u5236\u8D26\u53F7ID",
                    disabled: !a,
                    onClick: function () {
                        var M;
                        a && (null == (M = navigator.clipboard) || M.writeText(a).catch(function () {
                        }), z(!0))
                    }
                }, g ? I.createElement(My, null) : I.createElement("img", {
                    className: "ai-console-account-copy-icon",
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuNTIwODMgNC41MjA4M1YzLjM1NDE3QzQuNTIwODMgMi43MDk4MyA1LjA0MzE3IDIuMTg3NSA1LjY4NzUgMi4xODc1SDEwLjY0NThDMTEuMjkwMiAyLjE4NzUgMTEuODEyNSAyLjcwOTgzIDExLjgxMjUgMy4zNTQxN1Y4LjMxODMzQzExLjgxMjUgOC45NjI2OCAxMS4yOTAyIDkuNDg1IDEwLjY0NTggOS40ODVIOS40NzkxN00yLjE4NzUgNS42ODc1VjEwLjY0NThDMi4xODc1IDExLjI5MDIgMi43MDk4MyAxMS44MTI1IDMuMzU0MTcgMTEuODEyNUg4LjMxMjVDOC45NTY4NSAxMS44MTI1IDkuNDc5MTcgMTEuMjkwMiA5LjQ3OTE3IDEwLjY0NThWNS42ODc1QzkuNDc5MTcgNS4wNDMxNyA4Ljk1Njg1IDQuNTIwODMgOC4zMTI1IDQuNTIwODNIMy4zNTQxN0MyLjcwOTgzIDQuNTIwODMgMi4xODc1IDUuMDQzMTcgMi4xODc1IDUuNjg3NVoiIHN0cm9rZT0iIzQyNDY0RSIgc3Ryb2tlLXdpZHRoPSIwLjg3NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=",
                    alt: ""
                })))), I.createElement("a", {
                    className: "ai-console-account-verify-tag".concat(U ? "" : " unverified"),
                    "data-monitor-click-id": Y ? "d111784" : void 0,
                    href: "https://".concat(Mo.console, "/user/authentication/"),
                    target: "_blank",
                    rel: "noreferrer",
                    "aria-label": "\u67E5\u770B".concat(C),
                    onClick: function (M) {
                        if (U) return void M.preventDefault();
                        Y && (M.preventDefault(), null == o || o())
                    }
                }, I.createElement("img", {
                    className: "ai-console-account-verify-tag-icon",
                    src: Y ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE1NTRfNDM1MCkiPgo8cGF0aCBkPSJNMTAuMTI1IDZDMTAuMTI1IDMuNzIxODMgOC4yNzgxNyAxLjg3NSA2IDEuODc1QzMuNzIxODMgMS44NzUgMS44NzUgMy43MjE4MyAxLjg3NSA2QzEuODc1IDguMjc4MTcgMy43MjE4MyAxMC4xMjUgNiAxMC4xMjVDOC4yNzgxNyAxMC4xMjUgMTAuMTI1IDguMjc4MTcgMTAuMTI1IDZaTTUuNjI1IDhWNS41QzUuNjI1IDUuMjkyODkgNS43OTI4OSA1LjEyNSA2IDUuMTI1QzYuMjA3MTEgNS4xMjUgNi4zNzUgNS4yOTI4OSA2LjM3NSA1LjVWOEM2LjM3NSA4LjIwNzExIDYuMjA3MTEgOC4zNzUgNiA4LjM3NUM1Ljc5Mjg5IDguMzc1IDUuNjI1IDguMjA3MTEgNS42MjUgOFpNMTAuODc1IDZDMTAuODc1IDguNjkyMzkgOC42OTIzOSAxMC44NzUgNiAxMC44NzVDMy4zMDc2MSAxMC44NzUgMS4xMjUgOC42OTIzOSAxLjEyNSA2QzEuMTI1IDMuMzA3NjEgMy4zMDc2MSAxLjEyNSA2IDEuMTI1QzguNjkyMzkgMS4xMjUgMTAuODc1IDMuMzA3NjEgMTAuODc1IDZaTTYuMzk5OSA0LjA0OThDNi4zOTk5IDQuMjU2NTQgNi4yMzI1OSA0LjQyNDI3IDYuMDI1ODggNC40MjQ4TDUuOTc2MDcgNC40MjUyOUM1Ljg3NjQ5IDQuNDI1NDkgNS43ODA0NSA0LjM4NTc4IDUuNzA5OTYgNC4zMTU0M0M1LjYzOTYyIDQuMjQ1MTQgNS42MDAxNSA0LjE0OTczIDUuNjAwMSA0LjA1MDI5VjRDNS42MDAxIDMuNzkyODkgNS43Njc5OSAzLjYyNSA1Ljk3NTEgMy42MjVINi4wMjQ5QzYuMjMyMDEgMy42MjUgNi4zOTk5IDMuNzkyODkgNi4zOTk5IDRWNC4wNDk4WiIgZmlsbD0iI0ZGN0EwMCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE1NTRfNDM1MCI+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K" : "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMTAuMTI1IDZDMTAuMTI1IDMuNzIxODMgOC4yNzgxNyAxLjg3NSA2IDEuODc1QzMuNzIxODMgMS44NzUgMS44NzUgMy43MjE4MyAxLjg3NSA2QzEuODc1IDguMjc4MTcgMy43MjE4MyAxMC4xMjUgNiAxMC4xMjVDOC4yNzgxNyAxMC4xMjUgMTAuMTI1IDguMjc4MTcgMTAuMTI1IDZaTTcuNzU5NzcgNC4zODQ3N0M3LjkwNjE4IDQuMjM4MzUgOC4xNDM1OCA0LjIzODQyIDguMjkwMDQgNC4zODQ3N0M4LjQzNjQ5IDQuNTMxMjEgOC40MzY0OSA0Ljc2ODU5IDguMjkwMDQgNC45MTUwNEw1LjU5MDMzIDcuNjE1MjNDNS40NDM5MyA3Ljc2MTYzIDUuMjA2NTIgNy43NjE1MyA1LjA2MDA2IDcuNjE1MjNMMy43MDk5NiA2LjI2NTE0QzMuNTYzNTEgNi4xMTg2OSAzLjU2MzUxIDUuODgxMzEgMy43MDk5NiA1LjczNDg2QzMuODU2NDEgNS41ODg0NyA0LjA5MzggNS41ODg0MyA0LjI0MDIzIDUuNzM0ODZMNS4zMjQ3MSA2LjgxOTM0TDcuNzU5NzcgNC4zODQ3N1pNMTAuODc1IDZDMTAuODc1IDguNjkyMzkgOC42OTIzOSAxMC44NzUgNiAxMC44NzVDMy4zMDc2MSAxMC44NzUgMS4xMjUgOC42OTIzOSAxLjEyNSA2QzEuMTI1IDMuMzA3NjEgMy4zMDc2MSAxLjEyNSA2IDEuMTI1QzguNjkyMzkgMS4xMjUgMTAuODc1IDMuMzA3NjEgMTAuODc1IDZaIiBmaWxsPSIjMTZBMzRBIiAvPgo8L3N2Zz4K",
                    alt: ""
                }), I.createElement("span", null, C), Y && I.createElement("img", {
                    className: "ai-console-account-verify-tag-arrow",
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNSA2SDkuNU02LjUgOUw5LjUgNkw2LjUgMyIgc3Ryb2tlPSIjMzgzNzQwIiBzdHJva2Utd2lkdGg9IjAuNzUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",
                    alt: ""
                }))))), I.createElement("section", {className: "ai-console-account-balance".concat(h ? "" : " ai-console-account-balance-empty")}, h ? I.createElement(I.Fragment, null, I.createElement("div", {className: "ai-console-account-balance-header"}, I.createElement("h2", null, "\u4F59\u989D")), I.createElement("div", {className: "ai-console-account-balance-rows"}, h ? I.createElement("div", {className: "ai-console-account-balance-row"}, I.createElement("span", {className: "ai-console-account-balance-label"}, I.createElement("img", {
                    className: "ai-console-account-balance-icon",
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjY2NjcgMi45MTY3NUMxMS42NjY3IDMuODgzMjUgOS41NzczNyA0LjY2Njc1IDcuMDAwMDQgNC42NjY3NUM0LjQyMjcxIDQuNjY2NzUgMi4zMzMzNyAzLjg4MzI1IDIuMzMzMzcgMi45MTY3NU0xMS42NjY3IDIuOTE2NzVDMTEuNjY2NyAxLjk1MDI1IDkuNTc3MzcgMS4xNjY3NSA3LjAwMDA0IDEuMTY2NzVDNC40MjI3MSAxLjE2Njc1IDIuMzMzMzcgMS45NTAyNSAyLjMzMzM3IDIuOTE2NzVNMTEuNjY2NyAyLjkxNjc1VjExLjA4MzRDMTEuNjY2NyAxMi4wNDk5IDkuNTc3MzcgMTIuODMzNCA3LjAwMDA0IDEyLjgzMzRDNC40MjI3MSAxMi44MzM0IDIuMzMzMzcgMTIuMDQ5OSAyLjMzMzM3IDExLjA4MzRWMi45MTY3NU0xMS42NjY3IDUuNjM4OTNDMTEuNjY2NyA2LjYwNTQzIDkuNTc3MzcgNy4zODg5MyA3LjAwMDA0IDcuMzg4OTNDNC40MjI3MSA3LjM4ODkzIDIuMzMzMzcgNi42MDU0MyAyLjMzMzM3IDUuNjM4OTNNMTEuNjY2NyA4LjM1OTI1QzExLjY2NjcgOS4zMjU3NSA5LjU3NzM3IDEwLjEwOTIgNy4wMDAwNCAxMC4xMDkyQzQuNDIyNzEgMTAuMTA5MiAyLjMzMzM3IDkuMzI1NzUgMi4zMzMzNyA4LjM1OTI1IiBzdHJva2U9IiMwQzBEMEUiIHN0cm9rZS13aWR0aD0iMC44NzUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",
                    alt: ""
                }), "\u53EF\u7528\u4F59\u989D"), I.createElement("strong", null, k)) : null)) : null, I.createElement("div", {className: "ai-console-account-balance-actions"}, I.createElement(MT, {
                    variant: "primary",
                    className: "ai-console-account-balance-recharge-button",
                    "data-monitor-click-id": "d111787",
                    href: "https://".concat(Mo.console, "/finance/fund/recharge"),
                    target: "_blank",
                    onClick: function (M) {
                        !l && "undefined" != typeof window && window.innerWidth > 809.98 && (M.preventDefault(), M.stopPropagation(), S.Fz("reportCustom", "d111787", {
                            type: "click",
                            text: "\u6253\u5F00\u5145\u503C\u5F39\u7A97"
                        }), T(!0))
                    }
                }, "\u5145\u503C"), I.createElement("span", {
                    className: "ai-console-account-balance-action-shell",
                    "data-monitor-click-id": "d111788",
                    onClick: P,
                    onMouseDown: P,
                    onPointerDownCapture: P
                }, I.createElement(MT, {
                    variant: "outline",
                    className: "ai-console-account-balance-history-button",
                    href: "https://".concat(Mo.console, "/finance/fund/withdraw"),
                    target: "_blank"
                }, "\u5145\u503C\u8BB0\u5F55")))), I.createElement("nav", {
                    className: "ai-console-account-links",
                    "aria-label": "\u4E2A\u4EBA\u4E2D\u5FC3\u5BFC\u822A"
                }, Mz.map(function (M) {
                    return I.createElement(MA, {
                        key: M.to,
                        className: M.externalIcon ? "ai-console-account-link-external" : void 0,
                        to: M.to,
                        role: "menuitem",
                        target: M.target,
                        "data-monitor-click-id": "d111789"
                    }, I.createElement("span", {className: "ai-console-account-link-main"}, I.createElement("img", {
                        className: "ai-console-account-link-icon",
                        src: M.icon,
                        alt: ""
                    }), I.createElement("span", {
                        className: "ai-console-account-link-label",
                        "aria-label": M.label
                    }, I.createElement("span", {
                        className: "ai-console-account-link-label-track",
                        "aria-hidden": "true"
                    }, I.createElement("span", null, M.label), I.createElement("span", null, M.label)))), M.externalIcon ? I.createElement("img", {
                        className: "ai-console-account-link-external-icon",
                        src: M.externalIcon,
                        alt: ""
                    }) : null)
                })), I.createElement("section", {className: "ai-console-account-logout"}, I.createElement("span", {
                    "data-monitor-click-id": "d111790",
                    onClick: function (M) {
                        M.stopPropagation(), M.preventDefault(), S.Fz("reportCustom", "d111790", {
                            type: "click",
                            text: "\u9000\u51FA\u767B\u5F55"
                        }), function () {
                            Ma.apply(this, arguments)
                        }()
                    }
                }, I.createElement("button", {type: "button", role: "menuitem"}, I.createElement("img", {
                    className: "ai-console-account-link-icon",
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNSAxMC4xMzM1VjUuODY2NjJDMS41IDUuMzE0OSAxLjQ5OTM1IDQuODcxMDEgMS41Mjg2NSA0LjUxMjQ1QzEuNTU4NDIgNC4xNDgwNSAxLjYyMTkxIDMuODI4MTIgMS43NzI3OSAzLjUzMTk4QzIuMDEyNDcgMy4wNjE1OCAyLjM5NDgzIDIuNjc5MjIgMi44NjUyNCAyLjQzOTU0QzMuMTYxMzcgMi4yODg2NiAzLjQ4MTMgMi4yMjUxNyAzLjg0NTcgMi4xOTU0QzQuMjA0MjYgMi4xNjYxIDQuNjQ4MTUgMi4xNjY3NSA1LjE5OTg3IDIuMTY2NzVINkM2LjI3NjE0IDIuMTY2NzUgNi41IDIuMzkwNjEgNi41IDIuNjY2NzVDNi41IDIuOTQyODkgNi4yNzYxNCAzLjE2Njc1IDYgMy4xNjY3NUg1LjE5OTg3QzQuNjMxNjQgMy4xNjY3NSA0LjIzNTQ4IDMuMTY2OTQgMy45MjcwOCAzLjE5MjE0QzMuNjI0NTQgMy4yMTY4NiAzLjQ1MDY4IDMuMjYzMDggMy4zMTkwMSAzLjMzMDE2QzMuMDM2NzcgMy40NzM5NyAyLjgwNzIyIDMuNzAzNTIgMi42NjM0MSAzLjk4NTc2QzIuNTk2MzMgNC4xMTc0MyAyLjU1MDExIDQuMjkxMjggMi41MjUzOSA0LjU5MzgzQzIuNTAwMTkgNC45MDIyMyAyLjUgNS4yOTgzOSAyLjUgNS44NjY2MlYxMC4xMzM1QzIuNSAxMC43MDE4IDIuNTAwMTkgMTEuMDk3OSAyLjUyNTM5IDExLjQwNjNDMi41NTAxMSAxMS43MDg5IDIuNTk2MzMgMTEuODgyNyAyLjY2MzQxIDEyLjAxNDRDMi44MDcyMiAxMi4yOTY2IDMuMDM2NzcgMTIuNTI2MiAzLjMxOTAxIDEyLjY3QzMuNDUwNjggMTIuNzM3MSAzLjYyNDU0IDEyLjc4MzMgMy45MjcwOCAxMi44MDhDNC4yMzU0OCAxMi44MzMyIDQuNjMxNjQgMTIuODMzNCA1LjE5OTg3IDEyLjgzMzRINkM2LjI3NjE0IDEyLjgzMzQgNi41IDEzLjA1NzMgNi41IDEzLjMzMzRDNi41IDEzLjYwOTYgNi4yNzYxNCAxMy44MzM0IDYgMTMuODMzNEg1LjE5OTg3QzQuNjQ4MTUgMTMuODMzNCA0LjIwNDI2IDEzLjgzNDEgMy44NDU3IDEzLjgwNDhDMy40ODEzIDEzLjc3NSAzLjE2MTM3IDEzLjcxMTUgMi44NjUyNCAxMy41NjA2QzIuMzk0ODMgMTMuMzIwOSAyLjAxMjQ3IDEyLjkzODYgMS43NzI3OSAxMi40NjgyQzEuNjIxOTEgMTIuMTcyIDEuNTU4NDIgMTEuODUyMSAxLjUyODY1IDExLjQ4NzdDMS40OTkzNSAxMS4xMjkyIDEuNSAxMC42ODUzIDEuNSAxMC4xMzM1Wk0xMC4zMTMyIDQuMzEzMjNDMTAuNTA4NCA0LjExNzk3IDEwLjgyNDkgNC4xMTc5NyAxMS4wMjAyIDQuMzEzMjNMMTQuMzUzNSA3LjY0NjU3QzE0LjU0ODggNy44NDE4MyAxNC41NDg4IDguMTU4MzQgMTQuMzUzNSA4LjM1MzZMMTEuMDIwMiAxMS42ODY5QzEwLjgyNDkgMTEuODgyMiAxMC41MDg0IDExLjg4MjIgMTAuMzEzMiAxMS42ODY5QzEwLjExNzkgMTEuNDkxNyAxMC4xMTc5IDExLjE3NTIgMTAuMzEzMiAxMC45Nzk5TDEyLjc5MyA4LjUwMDA4SDZDNS43MjM4NiA4LjUwMDA4IDUuNSA4LjI3NjIyIDUuNSA4LjAwMDA4QzUuNSA3LjcyMzk0IDUuNzIzODYgNy41MDAwOCA2IDcuNTAwMDhIMTIuNzkzTDEwLjMxMzIgNS4wMjAyNkMxMC4xMTc5IDQuODI1IDEwLjExNzkgNC41MDg1IDEwLjMxMzIgNC4zMTMyM1oiIGZpbGw9IiM5REEyQUIiLz4KPC9zdmc+Cg==",
                    alt: ""
                }), I.createElement("span", {
                    className: "ai-console-account-logout-label",
                    "aria-label": "\u9000\u51FA\u767B\u5F55"
                }, I.createElement("span", {
                    className: "ai-console-account-link-label-track",
                    "aria-hidden": "true"
                }, I.createElement("span", null, "\u9000\u51FA\u767B\u5F55")))))), I.createElement(Mj, {
                    isDark: !0,
                    visible: A,
                    isActiveTab: !1,
                    onCancel: function () {
                        T(!1)
                    },
                    onScanSuccess: Z
                }), I.createElement(Mg, {
                    visible: d, onClose: function () {
                        L(!1)
                    }, env: MI
                }))
            }, Md = "#101013", ML = "#383740", Mx = "#FFF", MO = "#B8B7C3", ME = "#D2D1E0", Mm = "#EBEBF5", Mb = "#FFF",
            MS = {
                "--fast-cert-drawer-primary-button-bg": Md,
                "--fast-cert-drawer-primary-button-bg-hover": ML,
                "--fast-cert-drawer-primary-button-bg-active": Md,
                "--fast-cert-drawer-primary-button-bg-disabled": Mm,
                "--fast-cert-drawer-primary-button-text": Mx,
                "--fast-cert-drawer-primary-button-text-hover": Mx,
                "--fast-cert-drawer-primary-button-text-active": Mx,
                "--fast-cert-drawer-primary-button-text-disabled": MO,
                "--fast-cert-drawer-primary-button-border-color": Md,
                "--fast-cert-drawer-primary-button-border-color-hover": ML,
                "--fast-cert-drawer-primary-button-border-color-active": Md,
                "--fast-cert-drawer-primary-button-border-color-disabled": Mm,
                "--fast-cert-drawer-secondary-button-text": Md,
                "--fast-cert-drawer-secondary-button-text-hover": ML,
                "--fast-cert-drawer-secondary-button-text-active": "#1F1F23",
                "--fast-cert-drawer-secondary-button-text-disabled": MO,
                "--fast-cert-drawer-secondary-button-bg": Mb,
                "--fast-cert-drawer-secondary-button-bg-hover": Mb,
                "--fast-cert-drawer-secondary-button-bg-active": Mb,
                "--fast-cert-drawer-secondary-button-bg-disabled": Mb,
                "--fast-cert-drawer-secondary-button-border-color": MO,
                "--fast-cert-drawer-secondary-button-border-color-hover": ML,
                "--fast-cert-drawer-secondary-button-border-color-active": Md,
                "--fast-cert-drawer-secondary-button-border-color-disabled": ME,
                "--fast-cert-drawer-agreement-text": "#737A87",
                "--fast-cert-drawer-agreement-link": ML,
                "--fast-cert-drawer-agreement-link-hover": Md,
                "--fast-cert-drawer-agreement-link-active": Md,
                "--fast-cert-drawer-agreement-link-decoration": "underline",
                "--fast-cert-drawer-scan-type-switch-bg": "#F1F3F5",
                "--fast-cert-drawer-scan-type-switch-text": "#42464E",
                "--fast-cert-drawer-scan-type-switch-bg-active": Mb,
                "--fast-cert-drawer-scan-type-switch-text-active": Md,
                "--fast-cert-drawer-scan-type-switch-border-active": ME,
                "--fast-cert-drawer-scan-type-switch-radius": "4px",
                "--fast-cert-drawer-qrcode-corner-color": "#000"
            }, MQ = [2, 5, 10], Mv = [5, 10];

        function Mw(M, e) {
            (null == e || e > M.length) && (e = M.length);
            for (var t = 0, n = Array(e); t < e; t++) n[t] = M[t];
            return n
        }

        function Mk(M, e, t, n, i, a, c) {
            try {
                var u = M[a](c), N = u.value
            } catch (M) {
                t(M);
                return
            }
            u.done ? e(N) : Promise.resolve(N).then(n, i)
        }

        function Mh(M, e) {
            return function (M) {
                if (Array.isArray(M)) return M
            }(M) || function (M, e) {
                var t, n, i = null == M ? null : "undefined" != typeof Symbol && M[Symbol.iterator] || M["@@iterator"];
                if (null != i) {
                    var a = [], c = !0, u = !1;
                    try {
                        for (i = i.call(M); !(c = (t = i.next()).done) && (a.push(t.value), !e || a.length !== e); c = !0) ;
                    } catch (M) {
                        u = !0, n = M
                    } finally {
                        try {
                            c || null == i.return || i.return()
                        } finally {
                            if (u) throw n
                        }
                    }
                    return a
                }
            }(M, e) || function (M, e) {
                if (M) {
                    if ("string" == typeof M) return Mw(M, e);
                    var t = Object.prototype.toString.call(M).slice(8, -1);
                    if ("Object" === t && M.constructor && (t = M.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Mw(M, e)
                }
            }(M, e) || function () {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function Mp(M, e) {
            if (M && "object" == typeof M) {
                var t = M[e];
                return "number" == typeof t || "string" == typeof t ? t : void 0
            }
        }

        function Mf() {
            return "undefined" != typeof window && window.innerWidth <= 1023
        }

        function MC() {
            return document.getElementById("appbar")
        }

        var MU = function (M) {
            var e = M.onClose, t = M.children, n = "undefined" != typeof document;
            if ((0, I.useEffect)(function () {
                if ("undefined" != typeof document) {
                    var M = document.body, e = M.style.overflow;
                    return M.style.overflow = "hidden", function () {
                        M.style.overflow = e
                    }
                }
            }, []), !n) return null;
            var i = document.getElementById("appbar"), a = i === document.body;
            return (0, R.createPortal)(I.createElement("div", {
                className: "user-menu-mobile-panel".concat(a ? " user-menu-mobile-panel--body" : ""),
                onClick: e
            }, I.createElement("div", {
                className: "user-menu-mobile-panel-content", onClick: function (M) {
                    return M.stopPropagation()
                }
            }, t)), i)
        }, MY = function (M) {
            var e = M.isMobileViewport, t = M.avatarName, n = M.avatar, i = M.renderUserInfoCard,
                a = M.mobilePopupVisible, c = M.onMobilePopupVisibleChange, u = M.onMobilePopupOpen,
                N = Mh((0, I.useState)(!1), 2), D = N[0], r = N[1], l = "boolean" == typeof a ? a : D,
                o = (0, I.useCallback)(function () {
                    "undefined" != typeof window && S.Fz("reportCustom", "c111783", {
                        type: "preview",
                        text: "\u4E2A\u4EBA\u9762\u677F\u66DD\u5149"
                    })
                }, []), j = (0, I.useCallback)(function (M) {
                    r(M), null == c || c(M)
                }, [c]);
            (0, I.useEffect)(function () {
                j(!1)
            }, [e, j]);
            var g = (0, I.useCallback)(function () {
                j(!1)
            }, [j]);
            return e ? I.createElement(I.Fragment, null, I.createElement("div", {
                className: "user-menu-trigger user-menu-trigger-mobile",
                onClick: function () {
                    var M = !l;
                    M && (null == u || u(), o()), j(M)
                }
            }, I.createElement(q, {
                name: t,
                avatar: n,
                size: 32
            })), l ? I.createElement(MU, {onClose: g}, i(g)) : null) : I.createElement(V.Z, {
                popup: function () {
                    return i(g)
                },
                popupVisible: D,
                onVisibleChange: function (M) {
                    M && o(), r(M)
                },
                position: "bl",
                popupAlign: {bottom: [-30, 8]},
                updateOnScroll: !0,
                unmountOnExit: !1,
                getPopupContainer: MC,
                style: {zIndex: 9999}
            }, I.createElement("div", {className: "user-menu-trigger"}, I.createElement(q, {
                name: t,
                avatar: n,
                size: 32
            })))
        }, MP = function (M) {
            var e, n, i, a, c, u, N, D, r = (0, I.useContext)(s), l = r.profile, o = r.doubaoUserLoading,
                j = r.doubaoUser, g = r.setProfile, z = M.notLoginBtn, y = M.onRechargeHistoryClick,
                A = M.onRechargeSuccess, T = M.mobilePopupVisible, d = M.onMobilePopupVisibleChange,
                x = M.onMobilePopupOpen, O = M.fallbackRechargePage, E = M.fallbackNpm,
                m = (n = (e = Mh((0, I.useState)(Mf), 2))[0], i = e[1], (0, I.useEffect)(function () {
                    if ("undefined" != typeof window) {
                        var M = window.matchMedia("(max-width: ".concat(1023, "px)")), e = function (M) {
                            i(M.matches)
                        };
                        return i(M.matches), M.addEventListener("change", e), function () {
                            M.removeEventListener("change", e)
                        }
                    }
                }, []), n), b = Mh((0, I.useState)(null), 2), S = b[0], Q = b[1];
            (0, I.useEffect)(function () {
                var M = !1;
                if (E && "undefined" != typeof window) return t.e("48645").then(t.bind(t, 40708)).then(function (e) {
                    M || Q(function () {
                        return e.default
                    })
                }).catch(function (M) {
                    console.warn("[ai-appbar] load fast-cert-drawer failed:", M)
                }), function () {
                    M = !0
                }
            }, [E]);
            var v = function () {
                    (0, _.r)()
                },
                w = !!((null == l ? void 0 : l.IsLogin) && Number((null == l ? void 0 : l.Id) || (null == l || null == (N = l.Account) ? void 0 : N.Id) || 0) > 0),
                k = (0, I.useMemo)(function () {
                    if (null == j ? void 0 : j.ThirdPartyIdentityName) return j.ThirdPartyIdentityName.trim();
                    if (null == j ? void 0 : j.IdentityName) return null == j ? void 0 : j.IdentityName.trim();
                    if (w && l) {
                        var M, e, t, n, i, a, c, u;
                        return (a = (null == l || null == (M = l.User) ? void 0 : M.DisplayName) || (null == l || null == (e = l.User) ? void 0 : e.UserName), c = (null == l || null == (t = l.Account) ? void 0 : t.Identity) || "", u = (null == (n = l.AssumedRole) ? void 0 : n.RoleDisplayName) || (null == (i = l.AssumedRole) ? void 0 : i.RoleName), "".concat(u ? "".concat(u, " / ") : "").concat(a ? "".concat(a, " / ") : "").concat(c)).trim()
                    }
                    return ""
                }, [w, l, null == j ? void 0 : j.IdentityName, null == j ? void 0 : j.ThirdPartyIdentityName]),
                h = (0, I.useMemo)(function () {
                    if (j) return null == j ? void 0 : j.Avatar
                }, [null == j ? void 0 : j.Avatar]), p = (0, I.useMemo)(function () {
                    if (w) {
                        var M;
                        return String((null == l || null == (M = l.Account) ? void 0 : M.Id) || (null == l ? void 0 : l.Id) || "")
                    }
                    return ""
                }, [w, null == l || null == (D = l.Account) ? void 0 : D.Id, null == l ? void 0 : l.Id]),
                f = Mp(j, "AvailableBalance"), C = Mp(j, "PointRemainAmount"),
                U = !!l && MQ.includes((null == l || null == (a = l.Account) ? void 0 : a.IdentityStatus) || -1),
                Y = !!l && Mv.includes((null == l || null == (c = l.Account) ? void 0 : c.IdentityStatus) || -1),
                P = (0, I.useCallback)((u = function () {
                    return function (M, e) {
                        var t, n, i, a, c = {
                            label: 0, sent: function () {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            }, trys: [], ops: []
                        };
                        return a = {
                            next: u(0),
                            throw: u(1),
                            return: u(2)
                        }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
                            return this
                        }), a;

                        function u(a) {
                            return function (u) {
                                var N = [a, u];
                                if (t) throw TypeError("Generator is already executing.");
                                for (; c;) try {
                                    if (t = 1, n && (i = 2 & N[0] ? n.return : N[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, N[1])).done) return i;
                                    switch (n = 0, i && (N = [2 & N[0], i.value]), N[0]) {
                                        case 0:
                                        case 1:
                                            i = N;
                                            break;
                                        case 4:
                                            return c.label++, {value: N[1], done: !1};
                                        case 5:
                                            c.label++, n = N[1], N = [0];
                                            continue;
                                        case 7:
                                            N = c.ops.pop(), c.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = (i = c.trys).length > 0 && i[i.length - 1]) && (6 === N[0] || 2 === N[0])) {
                                                c = 0;
                                                continue
                                            }
                                            if (3 === N[0] && (!i || N[1] > i[0] && N[1] < i[3])) {
                                                c.label = N[1];
                                                break
                                            }
                                            if (6 === N[0] && c.label < i[1]) {
                                                c.label = i[1], i = N;
                                                break
                                            }
                                            if (i && c.label < i[2]) {
                                                c.label = i[2], c.ops.push(N);
                                                break
                                            }
                                            i[2] && c.ops.pop(), c.trys.pop();
                                            continue
                                    }
                                    N = e.call(M, c)
                                } catch (M) {
                                    N = [6, M], n = 0
                                } finally {
                                    t = i = 0
                                }
                                if (5 & N[0]) throw N[1];
                                return {value: N[0] ? N[1] : void 0, done: !0}
                            }
                        }
                    }(this, function (M) {
                        switch (M.label) {
                            case 0:
                                if (!g) return [2];
                                M.label = 1;
                            case 1:
                                return M.trys.push([1, 4, , 5]), [4, t.e("23754").then(t.bind(t, 61534))];
                            case 2:
                                return [4, (0, M.sent().getUser)({useCache: !1})];
                            case 3:
                                var e, n;
                                return g((e = function (M) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var t = null != arguments[e] ? arguments[e] : {}, n = Object.keys(t);
                                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function (M) {
                                            return Object.getOwnPropertyDescriptor(t, M).enumerable
                                        }))), n.forEach(function (e) {
                                            var n;
                                            n = t[e], e in M ? Object.defineProperty(M, e, {
                                                value: n,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0
                                            }) : M[e] = n
                                        })
                                    }
                                    return M
                                }({}, M.sent()), n = n = {IsLogin: !0}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function (M, e) {
                                    var t = Object.keys(M);
                                    if (Object.getOwnPropertySymbols) {
                                        var n = Object.getOwnPropertySymbols(M);
                                        t.push.apply(t, n)
                                    }
                                    return t
                                })(Object(n)).forEach(function (M) {
                                    Object.defineProperty(e, M, Object.getOwnPropertyDescriptor(n, M))
                                }), e)), [3, 5];
                            case 4:
                                return console.warn("[ai-appbar] refresh profile after fast cert failed:", M.sent()), [3, 5];
                            case 5:
                                return [2]
                        }
                    })
                }, function () {
                    var M = this, e = arguments;
                    return new Promise(function (t, n) {
                        var i = u.apply(M, e);

                        function a(M) {
                            Mk(i, t, n, a, c, "next", M)
                        }

                        function c(M) {
                            Mk(i, t, n, a, c, "throw", M)
                        }

                        a(void 0)
                    })
                }), [g]), Z = (0, I.useCallback)(function () {
                    P()
                }, [P]), W = (0, I.useCallback)(function (M) {
                    var e, t;
                    if (M(), p) {
                        if (E) return void (0, J.D)({env: (0, L.dU)({fallback: L.tE.PROD}), accountId: p, onSuccess: Z});
                        null == (t = F.rU.externalSdk) || null == (e = t.use("fast-cert-app")) || e.then(function (M) {
                            console.log("sdk: fast-cert-app", M), M.show({
                                site: "volc_website",
                                scenario: "ai-hub",
                                env: (0, L.dU)({fallback: L.tE.PROD}),
                                accountId: p,
                                themeTokens: MS,
                                onSuccess: Z
                            })
                        })
                    }
                }, [p, E, Z]), H = (0, I.useCallback)(function (M) {
                    return I.createElement(Ms, {
                        avatarName: k,
                        accountId: p,
                        isIdentified: U,
                        isEnterpriseIdentified: Y,
                        availableBalance: f,
                        iamIdentityInfo: null == j ? void 0 : j.ThirdPartyIdentityName,
                        onRechargeHistoryClick: y,
                        onRechargeSuccess: A,
                        fallbackRechargePage: O,
                        onUnverifiedVerifyClick: function () {
                            return W(M)
                        },
                        onMenuClose: M
                    })
                }, [p, k, f, C, Y, U, null == j ? void 0 : j.ThirdPartyIdentityName, W, y, A]);
            return o ? null : (null == j ? void 0 : j.AccountId) ? I.createElement(I.Fragment, null, I.createElement(MY, {
                isMobileViewport: m,
                avatarName: k,
                avatar: h,
                renderUserInfoCard: H,
                mobilePopupVisible: T,
                onMobilePopupVisibleChange: d,
                onMobilePopupOpen: x
            }), E && S ? I.createElement(S, {
                setProfile: function (M) {
                    null == g || g(M)
                }
            }) : null) : z ? I.cloneElement(z, {onClick: v}) : I.createElement("div", {
                className: "user-menu-login-btn",
                onClick: v
            }, "\u6CE8\u518C/\u767B\u5F55")
        };

        function MZ(M, e) {
            (null == e || e > M.length) && (e = M.length);
            for (var t = 0, n = Array(e); t < e; t++) n[t] = M[t];
            return n
        }

        function MW(M, e, t, n, i, a, c) {
            try {
                var u = M[a](c), N = u.value
            } catch (M) {
                t(M);
                return
            }
            u.done ? e(N) : Promise.resolve(N).then(n, i)
        }

        function MH(M) {
            return function () {
                var e = this, t = arguments;
                return new Promise(function (n, i) {
                    var a = M.apply(e, t);

                    function c(M) {
                        MW(a, n, i, c, u, "next", M)
                    }

                    function u(M) {
                        MW(a, n, i, c, u, "throw", M)
                    }

                    c(void 0)
                })
            }
        }

        function MB(M) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {}, n = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function (M) {
                    return Object.getOwnPropertyDescriptor(t, M).enumerable
                }))), n.forEach(function (e) {
                    var n;
                    n = t[e], e in M ? Object.defineProperty(M, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : M[e] = n
                })
            }
            return M
        }

        function MG(M, e) {
            return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(M, Object.getOwnPropertyDescriptors(e)) : (function (M, e) {
                var t = Object.keys(M);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(M);
                    t.push.apply(t, n)
                }
                return t
            })(Object(e)).forEach(function (t) {
                Object.defineProperty(M, t, Object.getOwnPropertyDescriptor(e, t))
            }), M
        }

        function MR(M, e) {
            return function (M) {
                if (Array.isArray(M)) return M
            }(M) || function (M, e) {
                var t, n, i = null == M ? null : "undefined" != typeof Symbol && M[Symbol.iterator] || M["@@iterator"];
                if (null != i) {
                    var a = [], c = !0, u = !1;
                    try {
                        for (i = i.call(M); !(c = (t = i.next()).done) && (a.push(t.value), !e || a.length !== e); c = !0) ;
                    } catch (M) {
                        u = !0, n = M
                    } finally {
                        try {
                            c || null == i.return || i.return()
                        } finally {
                            if (u) throw n
                        }
                    }
                    return a
                }
            }(M, e) || function (M, e) {
                if (M) {
                    if ("string" == typeof M) return MZ(M, e);
                    var t = Object.prototype.toString.call(M).slice(8, -1);
                    if ("Object" === t && M.constructor && (t = M.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return MZ(M, e)
                }
            }(M, e) || function () {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function MV(M, e) {
            var t, n, i, a, c = {
                label: 0, sent: function () {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                }, trys: [], ops: []
            };
            return a = {
                next: u(0),
                throw: u(1),
                return: u(2)
            }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
                return this
            }), a;

            function u(a) {
                return function (u) {
                    var N = [a, u];
                    if (t) throw TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (t = 1, n && (i = 2 & N[0] ? n.return : N[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, N[1])).done) return i;
                        switch (n = 0, i && (N = [2 & N[0], i.value]), N[0]) {
                            case 0:
                            case 1:
                                i = N;
                                break;
                            case 4:
                                return c.label++, {value: N[1], done: !1};
                            case 5:
                                c.label++, n = N[1], N = [0];
                                continue;
                            case 7:
                                N = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = c.trys).length > 0 && i[i.length - 1]) && (6 === N[0] || 2 === N[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === N[0] && (!i || N[1] > i[0] && N[1] < i[3])) {
                                    c.label = N[1];
                                    break
                                }
                                if (6 === N[0] && c.label < i[1]) {
                                    c.label = i[1], i = N;
                                    break
                                }
                                if (i && c.label < i[2]) {
                                    c.label = i[2], c.ops.push(N);
                                    break
                                }
                                i[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        N = e.call(M, c)
                    } catch (M) {
                        N = [6, M], n = 0
                    } finally {
                        t = i = 0
                    }
                    if (5 & N[0]) throw N[1];
                    return {value: N[0] ? N[1] : void 0, done: !0}
                }
            }
        }

        var MF = function (M) {
            var e = M.children.match(/[A-Za-z0-9]+|\s+|./g) || [];
            return I.createElement("span", {className: "appbar-login-text"}, e.map(function (M, e) {
                return /^\s+$/.test(M) ? I.createElement("span", {key: "".concat(M, "-").concat(e)}, "\xa0") : I.createElement("span", {
                    className: "appbar-login-char",
                    style: {"--i": e},
                    key: "".concat(M, "-").concat(e)
                }, I.createElement("span", {className: "appbar-login-original"}, M), I.createElement("span", {
                    className: "appbar-login-hover",
                    "aria-hidden": "true"
                }, M))
            }))
        }, MJ = function (M) {
            if (Array.isArray(M)) return M.filter(function (M) {
                return !!M && "string" == typeof M.content && "string" == typeof M.type
            });
            if ("string" == typeof M) {
                var e = M.trim();
                return e ? [{type: "text", content: e}] : []
            }
            return []
        }, M_ = function (M) {
            return I.createElement("svg", {
                className: M,
                viewBox: "0 0 24 24",
                fill: "none",
                "aria-hidden": "true"
            }, I.createElement("g", {transform: "translate(4 4)"}, I.createElement("path", {
                d: "M3 8h10M9 4l4 4-4 4",
                stroke: "currentColor",
                strokeWidth: "1.2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })))
        }, MX = I.memo(function (M) {
            var e, t, n = m.modules || [], i = MR((0, I.useReducer)(T, {appbarData: null, activeModule: ""}), 2),
                a = i[0], c = i[1], u = MR((0, I.useState)(!1), 2), N = u[0], D = u[1], r = MR((0, I.useState)(!1), 2),
                l = r[0], o = r[1], j = MR((0, I.useState)(!1), 2), g = j[0], z = j[1], A = MR((0, I.useState)(!1), 2),
                x = A[0], O = A[1], w = MR((0, I.useState)(!1), 2), k = w[0], h = w[1], p = MR((0, I.useState)(!1), 2),
                f = p[0], C = p[1], U = void 0 !== M.doubaoUser, Y = MR((0, I.useState)(M.doubaoUser), 2), Z = Y[0],
                H = Y[1], B = MR((0, I.useState)(!U), 2), R = B[0], V = B[1], F = M.navigate,
                J = M.onRechargeHistoryClick, _ = M.onRechargeSuccess, X = M.profile, K = M.profileLoading,
                q = M.doubaoUserLoading, $ = M.doubaoUser, MM = null != (t = a.appbarData) ? t : m, Me = U ? !!q : R;
            (0, I.useEffect)(function () {
                try {
                    var M, e = "true" === sessionStorage.getItem("aiHub_appbar_hidden");
                    h(e)
                } catch (M) {
                }
                (M = MH(function () {
                    var M;
                    return MV(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return [4, P()];
                            case 1:
                                return (M = e.sent()) && c(y({appbarData: M})), C(!0), [2]
                        }
                    })
                }), function () {
                    return M.apply(this, arguments)
                })()
            }, []), (0, I.useEffect)(function () {
                if (!U) {
                    var M = !1;
                    return V(!0), !function () {
                        e.apply(this, arguments)
                    }(), function () {
                        M = !0
                    }
                }

                function e() {
                    return (e = MH(function () {
                        var e;
                        return MV(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, function () {
                                        return G.apply(this, arguments)
                                    }()];
                                case 1:
                                    return e = t.sent(), M || (H(e), V(!1)), [3, 3];
                                case 2:
                                    return t.sent(), M || (H(void 0), V(!1)), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })).apply(this, arguments)
                }
            }, [U]), (0, I.useEffect)(function () {
                var M = function () {
                    var M, e = null != (M = window.scrollY) ? M : document.documentElement.scrollTop;
                    D(e > 80), o(e > 1)
                };
                return M(), window.addEventListener("scroll", M), function () {
                    window.removeEventListener("scroll", M)
                }
            }, []);
            var Mt = function (M, e) {
                    c(y({activeModule: ""}));
                    var t = S.Fz("getTraceUrl", {url: e, aId: "a106064", bId: "b106065", dom: M.target}) || e;
                    if (e.startsWith("/") && F) {
                        var n = t.match(/\/\/[^/]+(\/.*)?$/);
                        return F(t = n ? n[1] || "/" : t)
                    }
                    window.open(t, "_blank")
                }, Mn = function () {
                    c(y({activeModule: ""})), z(!1), O(!1), "undefined" != typeof window && (window.location.href = new URL("/", window.location.origin).toString())
                }, Mi = function (M, e) {
                    if (e.target) {
                        var t = e.target;
                        if ("\u63A7\u5236\u53F0" === e.title && (t = E.console.some(function (M) {
                            return window.location.pathname.includes(M)
                        }) ? "/subscriptions" : "https://".concat((0, L.WH)().aiSite).concat(e.target)), "\u6A21\u578B" === e.title) {
                            var n = E.model;
                            t = "/" === window.location.pathname || n.some(function (M) {
                                return window.location.pathname.includes(M)
                            }) ? e.target : "https://".concat((0, L.WH)().aiSite).concat(e.target)
                        }
                        Mt(M, t)
                    }
                }, Ma = MM.infomercial, Mc = MJ(null == Ma ? void 0 : Ma.infomercialText),
                Mu = !!(Mc.length > 0 && (null == Ma ? void 0 : Ma.link) && "\u5E7F\u544A\u4F4D" !== MJ(Ma.infomercialText).map(function (M) {
                    return M.content
                }).join("").trim()), MN = k || !Mu, MD = (e = MH(function () {
                    var M;
                    return MV(this, function (e) {
                        switch (e.label) {
                            case 0:
                                if (U) return [3, 2];
                                return [4, W()];
                            case 1:
                                void 0 !== (M = e.sent()) && H(function (e) {
                                    return MG(MB({}, e), {AvailableBalance: M})
                                }), e.label = 2;
                            case 2:
                                return [4, null == _ ? void 0 : _()];
                            case 3:
                                return e.sent(), [2]
                        }
                    })
                }), function () {
                    return e.apply(this, arguments)
                });
            return I.createElement("div", {
                id: "appbar",
                "data-monitor-comp-id": "c111791",
                className: "appbar ".concat(MN ? "appbar-ad-hidden" : "", " ").concat(l ? "appbar-ad-collapsed" : "", " ").concat(g ? "appbar-menu-open" : ""),
                onMouseLeave: function () {
                    return c(y({activeModule: ""}))
                }
            }, I.createElement(s.Provider, {
                value: MG(MB({}, a), {
                    appbarData: MM,
                    profile: X,
                    profileLoading: K,
                    doubaoUserLoading: Me,
                    setProfile: M.setProfile,
                    doubaoUser: U ? $ : Z
                })
            }, I.createElement(d.Provider, {value: c}, f && Mu && !k && I.createElement("div", {
                className: "appbar-adbar ".concat(Ma.infomercialPoster ? "appbar-adbar-poster-mode" : ""),
                role: "note",
                style: Ma.infomercialPoster ? {backgroundImage: "url(".concat(Ma.infomercialPoster, ")")} : void 0
            }, !Ma.infomercialPoster && I.createElement("a", {
                className: "appbar-adbar-inner",
                "data-monitor-click-id": "d111792",
                href: Ma.link,
                target: "_blank",
                rel: "noopener noreferrer"
            }, I.createElement("div", {className: "appbar-adbar-marquee"}, [0, 1, 2].map(function (M) {
                return I.createElement("span", {
                    className: "appbar-adbar-marquee-item",
                    "aria-hidden": M > 0 ? "true" : void 0,
                    key: M
                }, I.createElement("span", {className: "braft-output-content"}, MJ(Mc).map(function (M, e) {
                    switch (M.type) {
                        case"strong":
                            return I.createElement("strong", {key: e}, M.content);
                        case"dotted":
                            return I.createElement("span", {key: e, className: "appbar-adbar-dotted"}, M.content);
                        case"solid":
                            return I.createElement("span", {key: e, className: "appbar-adbar-solid"}, M.content);
                        default:
                            return I.createElement("span", {key: e}, M.content)
                    }
                })), M_("appbar-adbar-marquee-arrow"))
            })), M_("appbar-adbar-arrow")), Ma.infomercialPoster && Ma.link && I.createElement("a", {
                className: "appbar-adbar-poster-link",
                "data-monitor-click-id": "d111792",
                href: Ma.link,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "\u5E7F\u544A\u6D77\u62A5"
            }), I.createElement("button", {
                className: "appbar-adbar-close",
                "data-monitor-click-id": "d111793",
                type: "button",
                "aria-label": "\u5173\u95ED\u9876\u90E8\u516C\u544A",
                onClick: function () {
                    try {
                        sessionStorage.setItem("aiHub_appbar_hidden", "true")
                    } catch (M) {
                    }
                    h(!0), z(!1), O(!1)
                }
            }, I.createElement("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                "aria-hidden": "true"
            }, I.createElement("path", {
                d: "M6 6l12 12M18 6L6 18",
                stroke: "currentColor",
                strokeWidth: "2.4",
                strokeLinecap: "round"
            })))), I.createElement("div", {
                className: "appbar-box ".concat(N ? "appbar-box-scroll" : ""),
                id: "appbar-box"
            }, I.createElement("div", {className: "appbar-items"}, I.createElement("a", {
                className: "appbar-logo",
                "data-monitor-click-id": "d111794",
                href: "/",
                "aria-label": "\u8FD4\u56DE AIHub \u9996\u9875",
                onClickCapture: function (M) {
                    M.preventDefault(), M.stopPropagation(), "undefined" != typeof window && (S.Fz("reportCustom", "d111794", {
                        type: "click",
                        text: "Logo\u70B9\u51FB"
                    }), Mn())
                },
                onKeyDown: function (M) {
                    ("Enter" === M.key || " " === M.key) && (M.preventDefault(), M.stopPropagation(), "undefined" != typeof window && (S.Fz("reportCustom", "d111794", {
                        type: "click",
                        text: "\u952E\u76D8\u70B9\u51FB"
                    }), Mn()))
                }
            }, I.createElement(Q, null))), !Me && I.createElement("div", {className: "appbar-options"}, n.map(function (M) {
                return I.createElement("div", {
                    className: "appbar-nav-item",
                    "data-monitor-click-id": "d111795",
                    key: M.title,
                    "data-active": M.title === a.activeModule ? "true" : void 0,
                    onClick: function (e) {
                        return Mi(e, M)
                    },
                    onMouseEnter: function () {
                        return c(y({activeModule: M.title}))
                    }
                }, M.title)
            }), I.createElement(MP, {
                fallbackRechargePage: M.fallbackRechargePage,
                fallbackNpm: M.fallbackNpm,
                onRechargeHistoryClick: J,
                onRechargeSuccess: MD,
                mobilePopupVisible: x,
                onMobilePopupVisibleChange: O,
                onMobilePopupOpen: function () {
                    return z(!1)
                },
                notLoginBtn: I.createElement("button", {
                    className: "appbar-login",
                    "data-monitor-click-id": "d111796",
                    type: "button",
                    "aria-label": "\u8C46\u5305\u8D26\u53F7\u767B\u5F55"
                }, I.createElement("span", {className: "appbar-login-text"}, I.createElement("span", {className: "appbar-login-label appbar-login-label-pc"}, I.createElement(MF, null, "\u8C46\u5305\u8D26\u53F7\u767B\u5F55")), I.createElement("span", {className: "appbar-login-label appbar-login-label-mob"}, I.createElement(MF, null, "\u767B\u5F55"))))
            }), I.createElement("button", {
                className: "appbar-menu",
                "data-monitor-click-id": "d111797",
                type: "button",
                "aria-label": g ? "\u5173\u95ED\u83DC\u5355" : "\u6253\u5F00\u83DC\u5355",
                "aria-expanded": g,
                onClick: function () {
                    O(!1), z(!g)
                }
            }, g ? I.createElement("svg", {
                className: "appbar-menu-close-icon",
                viewBox: "0 0 20 20",
                "aria-hidden": "true"
            }, I.createElement("path", {d: "M5 5L15 15M15 5L5 15"})) : I.createElement(v, null)))), I.createElement(b, {
                menuShow: g,
                onClose: function () {
                    return z(!1)
                }
            }))))
        });
        t(80070), t(12590), t(98347), t(66818);
        var MK = function (M) {
                return (0, o.jsxs)("svg", (0, N._)((0, u._)({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 185,
                    height: 18,
                    fill: "none",
                    viewBox: "0 0 185 18"
                }, M), {
                    children: [(0, o.jsx)("g", {
                        clipPath: "url(#logo_svg__a)", children: (0, o.jsx)("path", {
                            fill: "#fff",
                            fillOpacity: .9,
                            fillRule: "evenodd",
                            d: "M71.345 3.955h.834v.185c0 .047.035.089.083.089h1.555c.041 0 .083-.042.083-.09v-.184h1.316v.185c0 .047.036.089.078.089h1.554c.042 0 .084-.042.084-.09v-.184h.87a.08.08 0 0 0 .083-.083V2.71a.08.08 0 0 0-.084-.083h-.87v-.28c0-.048-.035-.09-.083-.09h-1.554c-.042 0-.078.042-.078.09v.28H73.9v-.28c0-.048-.036-.09-.083-.09h-1.555c-.042 0-.083.042-.083.09v.28h-.834a.08.08 0 0 0-.084.083v1.162c0 .047.036.083.084.083m4.866 1.888c.042 0 .078.036.078.078v2.317a.08.08 0 0 1-.078.077h-.375V6.308a.16.16 0 0 0-.161-.161h-3.097c.113-.095.22-.197.315-.316h3.312zm-1.644 1.924a.085.085 0 0 1-.083.083h-1.24a.085.085 0 0 1-.082-.083v-.554c0-.048.035-.083.083-.083h1.239c.041 0 .083.035.083.083zm-3.311-1.084q.339-.035.643-.143v2.115c0 .089.071.16.16.16h3.64v.763c0 .041.036.077.077.077h1.37a.66.66 0 0 0 .656-.66V4.859a.16.16 0 0 0-.161-.16h-4.217q.027-.154.047-.316c0-.048-.035-.09-.083-.09h-1.352c-.042 0-.078.03-.078.072-.089.703-.482.786-.715.804-.041 0-.077.042-.077.083V6.6c0 .041.03.077.072.083zm6.82 1.34.017 1.43c0 .047.042.089.09.089 1.167-.024 2.096-.238 2.859-.637.822.452 1.828.697 2.99.697.047 0 .083-.042.083-.09v-1.4a.08.08 0 0 0-.083-.083 5.3 5.3 0 0 1-1.608-.238c1-1.203 1.078-2.657 1.066-3.413h.673a.085.085 0 0 0 .083-.083V3.032a.08.08 0 0 0-.083-.084h-3.371c.041-.196.071-.393.077-.601a.08.08 0 0 0-.083-.084h-1.394a.08.08 0 0 0-.078.078c-.035.679-.518 1.215-1.155 1.298-.042 0-.072.036-.072.078v1.405c0 .048.042.084.084.084a2.86 2.86 0 0 0 1.84-.828h1.918v.125c0 .625-.095 1.626-.798 2.377-.024.03-.06.053-.083.077-.405-.411-.721-.953-.888-1.656-.012-.036-.041-.065-.077-.065h-1.394c-.054 0-.09.047-.083.1.16.942.518 1.752 1.048 2.407-.423.12-.905.185-1.483.203-.048 0-.084.041-.084.09zm6.123 5.462H78.73v-.62h4.8a.08.08 0 0 0 .078-.077v-1.012a.08.08 0 0 0-.078-.078h-4.8v-.631h5.003a.08.08 0 0 0 .077-.078V9.977a.08.08 0 0 0-.077-.078H71.708a.08.08 0 0 0-.077.078v1.012c0 .042.035.078.077.078h5.003v.631h-4.8a.08.08 0 0 0-.078.078v1.012c0 .042.036.078.078.078h4.8v.62h-5.468a.08.08 0 0 0-.077.076v1.013c0 .042.036.078.078.078h5.467v.81c0 .089-.065.16-.154.16H75.15a.154.154 0 0 0-.155.155v.935c0 .09.072.155.155.155h2.329c.697 0 1.25-.566 1.25-1.262v-.965h5.468a.08.08 0 0 0 .078-.078v-1.012a.08.08 0 0 0-.078-.078zM68.307 2.257h-1.346a.226.226 0 0 0-.226.227V16.66c0 .125.1.226.226.226h1.346a.226.226 0 0 0 .226-.226V2.484a.226.226 0 0 0-.226-.227m-5.069 0H56.55a.226.226 0 0 0-.226.227v1.34c0 .125.101.226.226.226h5.045c.042 0 .078.036.078.078v1.924a.08.08 0 0 1-.078.077h-4.848c-.12 0-.215.09-.227.209l-.345 5.08c0 .078.048.143.12.161h5.3c.042 0 .078.036.078.077v2.758c0 .346-.28.632-.632.632h-3.865a.226.226 0 0 0-.227.226v1.376c0 .125.102.226.227.226h4.396a1.89 1.89 0 0 0 1.888-1.888v-4.968a.226.226 0 0 0-.227-.226h-5.11a.154.154 0 0 1-.155-.155v-.012l.13-1.566a.156.156 0 0 1 .156-.143h4.98a.226.226 0 0 0 .226-.226V2.484a.226.226 0 0 0-.227-.227zM53.69 4.17h-1.334a.226.226 0 0 0-.226.227v10.697h-3.49V2.483a.226.226 0 0 0-.227-.226h-1.346a.226.226 0 0 0-.227.227v12.61h-3.496V4.395a.226.226 0 0 0-.226-.227h-1.334a.226.226 0 0 0-.227.227V16.57c0 .172.143.315.316.315H53.6a.32.32 0 0 0 .316-.316V4.397a.226.226 0 0 0-.227-.227M33.278 2.257c.125 0 .226.102.226.227v5.3c-.071 4.242 3.532 7.083 5.67 7.22.09 0 .156.077.156.167v1.542a.164.164 0 0 1-.173.167c-1.596-.101-3.413-.983-4.789-2.34a9.1 9.1 0 0 1-1.799-2.532 8.8 8.8 0 0 1-1.799 2.531c-1.37 1.358-3.186 2.24-4.788 2.341a.17.17 0 0 1-.173-.167v-1.542c0-.09.071-.161.155-.167 2.138-.137 5.76-2.984 5.688-7.22v-5.3c0-.125.101-.227.226-.227h1.4m-4.956 1.716c.09 0 .167.071.173.167l.012.327c.042.858.155 2.442.459 4.771.011.102-.066.197-.167.197h-1.751a.18.18 0 0 1-.173-.155l-.084-.667c-.274-2.305-.357-3.782-.38-4.467 0-.096.07-.18.172-.18h1.74zm10.144 0c.095 0 .167.077.167.179l-.018.458c-.042.876-.155 2.4-.429 4.598a.17.17 0 0 1-.167.15h-1.697a.164.164 0 0 1-.161-.197l.06-.489c.285-2.346.369-3.853.393-4.532 0-.09.077-.161.166-.161h1.686zM4.759 18h7.714L8.887 6.945a.281.281 0 0 0-.536 0L4.765 18zm-1.68-7.833a.281.281 0 0 0-.536 0L0 18h1.698l1.96-6.046-.585-1.787zm3.997-5.366a.281.281 0 0 0-.536 0L2.257 18H4.2L7.78 6.963zM12.181.197a.281.281 0 0 0-.536 0L9.447 6.969l3.58 11.037h4.931zm5.015 8.547a.281.281 0 0 0-.536 0l-.572 1.757L18.524 18h1.674z",
                            clipRule: "evenodd"
                        })
                    }), (0, o.jsx)("path", {
                        fill: "#fff",
                        fillOpacity: .9,
                        d: "M95.903 1.963h1.954l5.682 14.074h-2.277l-4.372-11.3-4.311 11.3h-2.297zm-2.62 8.666h7.254v1.95h-7.253zM104.522 1.963h2.115v14.074h-2.115zM111.946 1.963h2.115v5.87h7.717v-5.87h2.115v14.074h-2.115V9.784h-7.717v6.253h-2.115zM129.649 16.318a3.9 3.9 0 0 1-2.015-.543 4.06 4.06 0 0 1-1.471-1.467q-.524-.945-.524-2.111V5.38h2.035v6.092q0 .804.323 1.468.322.642.906 1.025.605.382 1.431.382.765 0 1.41-.422.644-.443 1.007-1.166a3.6 3.6 0 0 0 .363-1.609v-5.77h2.075v10.656h-1.995v-1.548a3.5 3.5 0 0 1-1.41 1.347q-.906.482-2.135.482M142.933 16.258q-1.772.04-2.941-.925-1.168-.985-1.713-2.312-.543-1.327-.543-2.392 0-1.005.543-2.313.545-1.306 1.713-2.271 1.169-.966 2.941-.966 1.491 0 2.7.744a5.3 5.3 0 0 1 1.934 2.031q.705 1.267.705 2.775 0 1.548-.705 2.834a5.5 5.5 0 0 1-1.934 2.031q-1.209.744-2.7.764M136.99 1.682h2.035v7.64l-.746 1.367.746 1.327v4.02h-2.035zm5.541 12.726q1.067 0 1.914-.522.846-.523 1.309-1.388.463-.885.463-1.89 0-.945-.463-1.789a3.65 3.65 0 0 0-1.309-1.367 3.57 3.57 0 0 0-1.914-.523 3.36 3.36 0 0 0-1.834.523 3.7 3.7 0 0 0-1.269 1.387 3.8 3.8 0 0 0-.464 1.83q0 .984.464 1.85a3.76 3.76 0 0 0 1.269 1.367 3.36 3.36 0 0 0 1.834.522"
                    }), (0, o.jsx)("defs", {
                        children: (0, o.jsx)("clipPath", {
                            id: "logo_svg__a",
                            children: (0, o.jsx)("path", {fill: "#fff", d: "M0 0h84.282v18H0z"})
                        })
                    })]
                }))
            }, Mq = function (M) {
                return (0, o.jsxs)("svg", (0, N._)((0, u._)({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 22,
                    height: 22,
                    fill: "none",
                    viewBox: "0 0 22 22"
                }, M), {
                    children: [(0, o.jsx)("path", {
                        fill: "#3D3179",
                        d: "M16.481 5.955c-.435-.148-.87-.675-1.16-.971s-.54-1.52-.54-1.52l-4.165-1.583L6.45 3.464S6.2 4.688 5.91 4.984s-.725.823-1.16.971l-.415.127s0 5.763 2.756 8.55c2.736 2.807 3.524 2.744 3.524 2.744s.787.063 3.523-2.745c2.756-2.786 2.756-8.55 2.756-8.55z"
                    }), (0, o.jsx)("path", {
                        fill: "#E58D2E",
                        d: "m18.527 12.794.58-.591c.58-.591.29-2.534.29-2.534h-.455v-.886c0-.887-.705-1.584-.87-1.584-.167 0-.705.423-.705.423l-.187.295c-.27 2.069-.953 5.193-2.798 7.072-2.673 2.723-3.606 2.913-3.751 2.934l-.02.022-.022-.022c-.145-.02-1.077-.21-3.75-2.934-1.845-1.879-2.53-5.003-2.799-7.072l-.186-.274s-.54-.444-.705-.444c-.145 0-.87.697-.87 1.584v.886h-.456s-.29 1.942.29 2.534l.58.59s-.642-.19-.829 0 .124 1.478 1.244 2.618c1.119 1.14 1.823 1.5 1.823 1.5s-.974-.022-1.388.21l-.435.254s.145 1.435 2.383 1.92c1.72.36 3.606.782 4.497.93l.208.02.248.022.29-.021c.187.105 2.757-.486 4.995-.95 2.239-.486 2.384-1.921 2.384-1.921l-.436-.254c-.435-.232-1.388-.21-1.388-.21s.704-.36 1.824-1.5c1.119-1.14 1.43-2.427 1.243-2.617s-.829 0-.829 0"
                    }), (0, o.jsx)("path", {
                        fill: "#FAAA46",
                        d: "M16.867 5.68c-.456-.128-.912-.698-1.222-1.014-.311-.317-.58-1.626-.58-1.626l-4.436-1.688L6.173 3.04s-.27 1.31-.58 1.626c-.311.316-.767.865-1.223 1.013l-.456.148s0 .865.145 2.09c.27 2.069.954 5.193 2.798 7.072 2.674 2.723 3.606 2.913 3.751 2.934h.042c.145-.021 1.077-.211 3.751-2.934 1.845-1.88 2.529-5.003 2.798-7.072.145-1.225.145-2.09.145-2.09l-.456-.148zm-.228 3.039c-.29 1.9-.974 4.37-2.507 5.91l-.29.296c-.083-.084-.187-.148-.208-.105-.041.084-.186.042-.186.042v-.317h-.083v.064h-.042v-.106h-.062v.063h-.02v-.063h-.063v.042h-.041v-.084h-.083v.105h-.042v-.105h-.062v.105h-.041v-.126h-.125v.464l-.062.063-.083-.063-.02-.02-.104-.022s-.332-.085-.477 0c-.145.105-.29.042-.29.042v-.675h-.124v.105h-.083v-.169h-.083v.127h-.062v-.211h-.124v.084h-.063v-.147h-.124v.147h-.145v-.147h-.124v.147h-.125v-.147h-.145v.147h-.103v-.147h-.104v.168h-.166v-.168h-.145v.696s-.497.063-.539.042c-.041-.042-.145 0-.145 0l-.27.064-.04.21H8.95l-.248-.21c-.083-.085-.166-.085-.187-.085l-.02-.02v-.402h-.146v-.127h-.062v.085h-.062v-.106h-.062v.085H8.1v-.106h-.083v.085h-.042v-.106h-.124v.106h-.124v-.106h-.083v.507s-.208-.148-.311-.148c-.083 0-.145.148-.166.232l-.083-.084a11.2 11.2 0 0 1-2.508-5.911C4.33 7.199 4.33 6.08 4.33 6.08l.414-.148c.435-.126.87-.654 1.16-.95s.54-1.52.54-1.52l4.165-1.583 4.187 1.584s.228 1.224.518 1.52c.29.295.725.823 1.16.97l.415.127s0 1.14-.249 2.639"
                    }), (0, o.jsx)("path", {
                        fill: "#D48931",
                        d: "M10.465 1.656q0 .06.042.104a.144.144 0 0 0 .248-.104.15.15 0 0 0-.043-.105.144.144 0 0 0-.205 0 .15.15 0 0 0-.042.105m-.434.162q.001.062.043.105a.144.144 0 0 0 .205 0 .15.15 0 0 0 0-.21.144.144 0 0 0-.248.105m-.43.163q0 .06.042.104a.144.144 0 0 0 .205 0 .15.15 0 0 0 0-.209.144.144 0 0 0-.205 0 .15.15 0 0 0-.043.105m-.434.162a.15.15 0 0 0 .043.105.145.145 0 0 0 .158.032.14.14 0 0 0 .078-.08.15.15 0 0 0-.078-.193.14.14 0 0 0-.158.032.15.15 0 0 0-.043.104m-.433.16q0 .061.042.105a.144.144 0 0 0 .206 0 .15.15 0 0 0 0-.209.144.144 0 0 0-.206 0 .15.15 0 0 0-.042.105m-.431.163q0 .062.042.105a.144.144 0 0 0 .206 0 .15.15 0 0 0 0-.21.144.144 0 0 0-.206 0 .15.15 0 0 0-.042.105m-.433.163c0 .039.015.077.042.104a.144.144 0 0 0 .205 0 .15.15 0 0 0 0-.209.144.144 0 0 0-.205 0 .15.15 0 0 0-.042.105m-.431.162q0 .062.042.105a.144.144 0 0 0 .205 0 .15.15 0 0 0 0-.21.144.144 0 0 0-.205 0 .15.15 0 0 0-.042.105m-.434.163c0 .039.016.077.043.104a.144.144 0 0 0 .205 0 .15.15 0 0 0 0-.209.144.144 0 0 0-.205 0 .15.15 0 0 0-.043.105m-.433.162q.001.062.043.105a.144.144 0 0 0 .205 0 .15.15 0 0 0 0-.21.144.144 0 0 0-.205 0 .15.15 0 0 0-.043.105m-.416.188q0 .062.042.105a.144.144 0 0 0 .205 0 .15.15 0 0 0 0-.21.144.144 0 0 0-.205 0 .15.15 0 0 0-.042.105M5.294 5.16c0 .039.015.077.042.104a.144.144 0 0 0 .205 0 .15.15 0 0 0 0-.209.144.144 0 0 0-.205 0 .15.15 0 0 0-.042.105m.36-.422q0 .06.043.104a.144.144 0 0 0 .205 0 .15.15 0 0 0 0-.209.144.144 0 0 0-.205 0 .15.15 0 0 0-.043.105M4.431 5.812q.001.061.043.105a.144.144 0 0 0 .205 0 .15.15 0 0 0 0-.21.144.144 0 0 0-.205 0 .15.15 0 0 0-.043.105m-.47.163q0 .06.042.104a.144.144 0 0 0 .206 0 .15.15 0 0 0 0-.209.144.144 0 0 0-.206 0 .15.15 0 0 0-.042.105m.943-.446q0 .061.042.105a.144.144 0 0 0 .206 0 .15.15 0 0 0 0-.21.144.144 0 0 0-.206 0 .15.15 0 0 0-.042.105m.978-1.285q0 .06.043.104a.144.144 0 0 0 .205 0 .15.15 0 0 0 0-.209.144.144 0 0 0-.205 0 .15.15 0 0 0-.043.105m.145-.471q.001.062.043.104a.144.144 0 0 0 .205 0 .15.15 0 0 0 0-.209.144.144 0 0 0-.205 0 .15.15 0 0 0-.043.105m4.87-1.955q.001.062.043.105a.144.144 0 0 0 .205 0 .15.15 0 0 0 0-.21.144.144 0 0 0-.205 0 .15.15 0 0 0-.042.105m.432.163q0 .06.042.104a.144.144 0 0 0 .205 0 .15.15 0 0 0 0-.209.144.144 0 0 0-.205 0 .15.15 0 0 0-.042.105m.433.162q0 .062.043.105a.144.144 0 0 0 .205 0 .15.15 0 0 0 0-.21.144.144 0 0 0-.205 0 .15.15 0 0 0-.043.105m.433.16q0 .061.043.105a.144.144 0 0 0 .205 0 .15.15 0 0 0 0-.209.144.144 0 0 0-.205 0 .15.15 0 0 0-.043.105m.431.163q.001.062.043.105a.144.144 0 0 0 .205 0 .15.15 0 0 0 0-.21.144.144 0 0 0-.205 0 .15.15 0 0 0-.043.105m.433.163c0 .039.016.077.043.104a.144.144 0 0 0 .205 0 .15.15 0 0 0 0-.209.144.144 0 0 0-.205 0 .15.15 0 0 0-.043.105m.432.162q0 .062.042.105a.144.144 0 0 0 .248-.105.15.15 0 0 0-.043-.104.144.144 0 0 0-.205 0 .15.15 0 0 0-.042.104m.433.163c0 .039.015.077.042.104a.144.144 0 0 0 .205 0 .15.15 0 0 0 0-.209.144.144 0 0 0-.205 0 .15.15 0 0 0-.042.105m.433.162q0 .062.042.105a.144.144 0 0 0 .205 0 .15.15 0 0 0 0-.21.144.144 0 0 0-.205 0 .15.15 0 0 0-.042.105m.416.188q.001.062.043.105a.144.144 0 0 0 .205 0 .15.15 0 0 0 0-.21.144.144 0 0 0-.205 0 .15.15 0 0 0-.043.105m.863 1.856c0 .039.015.077.042.104a.144.144 0 0 0 .205 0 .15.15 0 0 0 0-.209.144.144 0 0 0-.205 0 .15.15 0 0 0-.043.105m-.361-.422q0 .06.042.104a.144.144 0 0 0 .206 0 .15.15 0 0 0 0-.209.144.144 0 0 0-.206 0 .15.15 0 0 0-.042.105m1.223 1.074q0 .061.042.105a.144.144 0 0 0 .205 0 .15.15 0 0 0 0-.21.144.144 0 0 0-.205 0 .15.15 0 0 0-.042.105m.47.163q0 .06.043.104a.144.144 0 0 0 .205 0 .15.15 0 0 0 0-.209.144.144 0 0 0-.205 0 .15.15 0 0 0-.043.105m-.943-.446q.001.061.043.105a.144.144 0 0 0 .205 0 .15.15 0 0 0 0-.21.144.144 0 0 0-.205 0 .15.15 0 0 0-.043.105m-.978-1.285q0 .06.042.104a.144.144 0 0 0 .206 0 .15.15 0 0 0 0-.209.144.144 0 0 0-.206 0 .15.15 0 0 0-.042.105m-.145-.471q0 .062.042.104a.144.144 0 0 0 .248-.104.15.15 0 0 0-.043-.105.144.144 0 0 0-.205 0 .15.15 0 0 0-.042.105"
                    }), (0, o.jsx)("path", {
                        fill: "#EF9C48",
                        d: "M15.09 7.597c0-.232-.042-.465-.084-.697a4.35 4.35 0 0 0-.74-1.667 4.25 4.25 0 0 0-1.353-1.204 4.25 4.25 0 0 0-1.969-.57h-.456l-.062.021a4.52 4.52 0 0 0-3.005 1.415 4.3 4.3 0 0 0-1.202 2.828v.55l.041.316c.124.93.539 1.797 1.182 2.47l.02.02.042.043v.021l-.208 1.098-.041.274.124.043c.104.02.104.02.104.105 0 .042.02.042.041.042l.228.043c.042.02.063.02.063.084v.106l.373.042c.041 0 .041.021.041.042l.02.106h.664l.02-.254.021-.042.104-.063v.147c0 .043 0 .043.042.043l.186.02.02.043.022.085H9.7l.041-.022c.02-.042.042-.063.083-.063h.041c.042 0 .083.021.083.063l.042.021h.393l.063-.02c0-.043.02-.043.041-.043h.228c.02 0 .042 0 .062.042l.042.021q.217-.014.435-.02c0-.043.041-.064.062-.043h.042c.062-.02.103 0 .124.042l.041.021h.353l.02-.126.25-.021v-.19l.124.084v.042l.02.233h.663l.042-.148.29-.042h.104v-.148l.041-.042.187-.021c.103-.022.103-.022.103-.127l.042-.042.186-.043v-.042l-.228-1.14-.041-.21a4.44 4.44 0 0 0 1.41-2.872l.02-.274v-.338zm-3.773 3.356c-.124-.21-.414-.337-.725-.337s-.58.126-.726.337c-1.326-.337-2.28-1.562-2.28-3.018a3.09 3.09 0 0 1 3.089-3.104c1.7 0 3.088 1.394 3.088 3.104 0 1.456-1.078 2.68-2.446 3.018"
                    }), (0, o.jsx)("path", {
                        fill: "#DB0303",
                        d: "m8.253 13.133-.021-.084c0-.043 0-.064-.042-.064l-.393-.042.02-.106q0-.063-.062-.063l-.248-.042-.021-.042c-.02-.106-.02-.106-.104-.127l-.124-.021.041-.275.208-1.118.041-.106.29-.549.042.021c.59.535 1.315.893 2.093 1.035q.125.031.248-.064l-.082-.02c.02-.17.228-.317.414-.339.207 0 .415.127.477.317l-.062.021v.021l.083.042h.207c.767-.126 1.43-.464 2.01-.97l.083-.064.104.169.207.422.062.253.207 1.14v.064l-.165.042c-.042 0-.042.021-.042.042-.02.106-.02.106-.104.106l-.186.042c-.041 0-.041.021-.041.042v.148h-.104l-.29.042-.042.021v.127h-.663l-.02-.253-.021-.043-.125-.063v.19l-.248.021-.021.127h-.352l-.021-.021a.19.19 0 0 0-.145-.063h-.021c-.042 0-.062 0-.083.042 0 .042-.02.042-.041.042q-.217-.025-.436-.042l-.041-.021h-.249l-.041.02-.042.043h-.393l-.042-.021c-.02-.042-.041-.063-.083-.063h-.041l-.104.042-.041.042H9.33l-.02-.106-.042-.02-.186-.022c-.021 0-.042 0-.042-.042v-.148l-.103.063-.021.043-.02.253zm4.124-1.077-.042.085v.95h.042l.456-.021q.062 0 .062-.064l.02-.063.022-.021.248-.042c.104-.022.104-.022.125-.127l.02-.042.208-.043c.062 0 .103-.042.124-.105l.041-.042.146-.021v-.043l-.27-1.33c0-.042-.02-.063-.062-.084v.127l.207 1.224-.228.021-.145-.95-.041-.105c-.042.02-.063.063-.042.105l.042.317.082.718.042.02h.104v.085l-.394.042-.083-1.013c-.083.042-.083.042-.083.127l.042.739.02.232h.145v.084h-.414v-.084l-.021-.697-.041-.127h-.021l-.042.17.021.675v.169h.124v.084h-.331l-.02-.02q-.035-.465-.063-.93m-4.912.338.02-.042.187-1.182v-.127l-.062.084-.228 1.204-.02.148.082.02c.063 0 .104.043.125.106 0 .042.02.042.041.063l.187.043c.103.02.103.02.103.105v.021l.042.043.248.02q.125 0 .125.127l.041.043h.498v-.95l-.021-.064q-.062 0-.062.064l-.021.717.02.148h-.372v-.084h.124v-.064l.02-.76-.04-.19-.042.17-.02.527-.022.232h-.414v-.105h.145v-.021l.083-.993-.02-.042-.084-.042-.062 1.034-.414-.063.02-.084h.125l.02-.043.125-1.013c0-.042 0-.063-.042-.106l-.041.106-.104.718-.041.274zm4.249.591h-.145l-.042-.042-.02-.253v-.064c.02-.042 0-.084-.042-.105l.042-.043h-.021l-.062.064v.38h-.208v-.085c0-.063 0-.084-.082-.084l-.021.274h-.228l-.021-.21c-.041-.022-.062 0-.062.041l-.02.064c-.022.02-.022.042-.063.042h-.187c-.103 0-.103 0-.124-.106-.02-.042-.041-.063-.062-.042l-.042.19h-.228l-.02-.253c-.083.021-.083.021-.083.084v.085h-.207v-.38l-.042-.063-.041.02.041.043-.041.02c.02.149-.021.275-.021.423h-.187v-.38l-.02-.084c-.042.042-.062.063-.042.126v.19l-.041.043h-.125c-.041 0-.041-.022-.041-.043l-.02-.105c-.084.042-.042.105-.042.169h.228q.03.084.062.169h.228l.02-.021c.042-.043.084-.043.146-.043h.103l.083.021c.021.043.042.043.083.043h.228c.02 0 .042 0 .062-.043l.042-.042h.331c.042 0 .063.021.083.064l.021.02q.156.004.31 0c.042-.063.084-.063.146-.063h.104l.083.021.041.043h.228l.041-.043.021-.126h.228c-.02-.064.041-.127-.041-.17l-.021.106-.02.043h-.187v-.233l-.042-.126c-.041.042-.02.084-.02.147zm-3.897-2.174c-.062.063-.062.105-.02.19.083.169.186.316.331.464q.342.317.746.507c.27.127.54.19.83.19l.269-.042h-.207c-.415-.021-.747-.148-1.037-.444a2.1 2.1 0 0 1-.393-.654c-.021-.063-.063-.085-.104-.106.062.401.29.676.58.93a.25.25 0 0 1-.186-.085l-.249-.232a2.2 2.2 0 0 1-.352-.697c-.021-.085-.021-.085-.104-.085.083.317.228.57.415.824-.29-.17-.394-.486-.519-.76m3.42 1.287v.022h.02c.229.063.457.042.685-.021.373-.085.704-.275.995-.507.207-.169.373-.38.476-.612.042-.064.021-.106-.02-.17l-.104.212a1.6 1.6 0 0 1-.29.443l-.145.106c.186-.254.331-.507.414-.823-.083 0-.083 0-.104.063-.1.372-.31.703-.6.95-.042.042-.104.084-.166.063.27-.232.497-.507.58-.908-.062.021-.083.064-.124.106l-.166.359c-.145.252-.36.455-.619.583a1.43 1.43 0 0 1-.832.134m-2.777-.992.02.021c.084.17.187.338.311.465.166.19.374.338.622.401.249.063.477.021.726-.063l.145-.043v-.02h-.042l-.331.063a1.33 1.33 0 0 1-.85-.233c-.228-.147-.394-.358-.539-.57 0-.042-.02-.042-.062-.02m4.27 0c-.021-.02-.042-.02-.063.021a2 2 0 0 1-.31.401 1.3 1.3 0 0 1-1.078.402l-.311-.064c-.021 0-.042-.02-.062.021l.435.127c.331.042.622-.021.89-.232.146-.127.25-.254.353-.422zm-3.027 1.267.187.148h.02c.042-.043.084 0 .125.02l-.041.085.248.085.083-.021c.042-.043.062-.043.104.02l.062.022h.187c.062 0 .103 0 .124-.042.02-.043.062-.021.083-.021.02.02.062.063.083.042l.248-.085-.02-.084c.041-.021.062-.063.103-.021h.042l.186-.127-.041-.042v.02h-.104l-.083.085c-.041-.02-.103-.042-.124-.02-.042.02-.062.063-.042.105l-.02.042-.125.063c-.02-.02-.041-.084-.082-.084-.021-.021-.063 0-.104.021-.042 0-.083 0-.083.042s-.02.043-.062.043h-.104c-.041 0-.062 0-.062-.043s-.02-.042-.062-.042l-.042-.021c-.062-.021-.103 0-.145.063l-.02.021-.146-.063c.021-.063.042-.105-.02-.148-.042-.02-.104 0-.145.021l-.063-.063c-.02-.021-.041-.063-.062-.021-.02 0-.062-.063-.083 0m.892-1.077h-.063c-.103.021-.228.106-.248.211-.042.148.062.317.228.36.165.041.331-.043.373-.212v-.148a.29.29 0 0 0-.29-.21m.56.93-.063-.043c-.041-.021-.062 0-.104.021-.207.127-.435.169-.663.085l-.248-.148-.083.063a.847.847 0 0 0 1.16.021m-2.218.442c.02.043.062.043.103.022l.601-.36.042-.041-.042-.022-.103-.042-.063-.02h-.062l-.352.231-.145.106c.02.063.041.063.083.02l.435-.273c.041-.022.062-.022.104.02zm3.336 0-.6-.358c.02-.043.062-.043.082-.021l.435.295c.063.021.083.021.083-.042l-.497-.338h-.02l-.104.021c-.042 0-.104.021-.125.064l.062.042.58.359c.042.042.063.02.104-.021m-1.305-.886c.29.084.6.084.87-.042.228-.106.394-.254.539-.444-.062.021-.124.021-.166.085l-.166.147a1.21 1.21 0 0 1-.994.233zm-.726 0-.124-.021a1.16 1.16 0 0 1-.746-.106 1.4 1.4 0 0 1-.415-.295c-.02-.043-.083-.043-.124-.064.352.507.87.613 1.41.486m-.02.274c.145.148.497.17.663.043l-.145-.085h-.021c-.124.042-.249.042-.352-.021h-.042zm1.471-.506h-.02c-.208.042-.415.105-.664.084 0 .021 0 .042.042.042h.227a.85.85 0 0 0 .332-.063zm-2.176 0c.02.042.062.063.145.105.166.042.332.042.497.021.042 0 .021-.02.021-.042-.228.021-.435-.042-.663-.084m2.363.654.373.253c.02-.042.02-.063-.021-.084l-.27-.19c-.041-.021-.062-.021-.082.021m-2.943.253.393-.253c-.041-.042-.062-.042-.083-.021l-.29.19c-.02.021-.041.042-.02.084m3.357-.21-.187-.106-.04.02.02.043.124.106zm-3.316.063.124-.106.021-.042-.041-.021-.166.105z"
                    }), (0, o.jsx)("path", {
                        fill: "#D48931",
                        d: "M10.944 3.483h.187a4.33 4.33 0 0 1 2.922 1.498c.628.727.994 1.65 1.036 2.618v.38l-.02.275a4.47 4.47 0 0 1-1.265 2.744l-.02.042-.042-.105.02-.043a4.387 4.387 0 0 0 .435-5.573 4.2 4.2 0 0 0-1.467-1.266c-.579-.3-1.219-.46-1.869-.465a4.3 4.3 0 0 0-1.746.282 4.3 4.3 0 0 0-1.49.97 4.4 4.4 0 0 0-.985 1.494 4.5 4.5 0 0 0-.318 1.772 4.38 4.38 0 0 0 1.161 2.85v.063l-.02.063-.187-.21a4.48 4.48 0 0 1-1.057-2.576v-.55a4.5 4.5 0 0 1 1.296-2.95 4.36 4.36 0 0 1 2.911-1.292l.062-.021z"
                    }), (0, o.jsx)("path", {
                        fill: "#D48931",
                        d: "m11.632 11.168-.103-.19-.104.063-.083-.106-.02-.042.062-.084-.146-.127-.062.084-.145-.063.063-.106-.187-.084-.041.084-.021.022-.166-.022v-.126h-.187v.084c0 .042 0 .042-.041.042l-.104.022c-.02.02-.041 0-.041-.022l-.041-.105-.187.105.062.106-.124.085-.083-.106-.145.127.062.105-.02.021-.084.106-.103-.042-.104.169.124.063-.041.127.145.02c.062-.147.145-.295.249-.4.124-.127.29-.19.518-.212a.78.78 0 0 1 .622.212q.155.158.248.38l.166-.043-.041-.084z"
                    }), (0, o.jsx)("path", {
                        fill: "#D48931",
                        d: "M11.007 11a.72.72 0 0 0-.85 0c-.145.106-.269.254-.269.402l.124.042a.63.63 0 0 1 .436-.422h.27c.206.063.351.19.434.4l.125-.041c-.021-.127-.125-.275-.27-.38m-4.58-2.406v-.021l-.02-.148.124-.105.89-.824.022-.02-.021.19-.042.02-.912.887zm8.435-.042-.166-.148-.787-.781-.042-.19.021.021.974.887c.02.02.042.042.02.084zm-8.352.316-.042-.147.021-.043.83-.78.082-.064v.148l-.02.042-.768.739zm8.27-.042-.312-.316-.518-.486c-.041-.042-.062-.063-.041-.127v-.105l.041.021.83.823c.04.021.04.042.02.064zm-7.4 1.858-.083-.127-.02-.02.456-1.014.103.127v.042l-.456.97zm.518-.992.021.02.083.128-.062.126-.373.866-.02.02-.084-.105v-.042l.435-.992zm5.638-.232.228.57q.09.255.186.506l-.083.085-.02-.043-.415-.928.02-.064zm.166 1.35-.063-.147-.373-.845.021-.063.062-.105.062.126.373.866-.02.063zM6.614 6.695c.041.021.062.042.041.106a4.2 4.2 0 0 0-.166 1.35c0 .043-.02.064-.062.085a4.8 4.8 0 0 1 .187-1.54m8.103-.042c.145.507.207 1.013.145 1.54-.02-.02-.041-.041-.041-.105.02-.443-.021-.907-.145-1.35zm-7.005-.38c-.062-.085-.062-.085-.145-.042h-.02c-.042.02-.063 0-.042-.043l.062-.105.124-.106.062-.02.042.02c.02.043.02.106-.02.148v.085l.123-.021c.042 0 .042 0 .042.042l-.02.105c-.022.042-.063.042-.104.021h-.021l-.042.021c-.02 0-.062.022-.083-.02-.02-.022 0-.064.021-.085zm5.948-.042.02.084c0 .042-.02.063-.061.042l-.042-.02h-.041c-.042.02-.083.02-.083-.022l-.042-.127.042-.02.145.02-.02-.084v-.148l.04-.02.084.063.062.042.083.105v.064h-.062c-.063-.043-.104-.021-.125.02m-6.901.612c.02.021.041.042.02.084a4 4 0 0 0-.124.971v.127l-.062.063c-.021-.422.041-.844.166-1.245m7.834-.042c.103.422.145.823.124 1.245-.041 0-.062-.02-.062-.084 0-.36-.02-.718-.104-1.077-.02-.042.021-.042.042-.084M6.738 7.982q0-.633.186-1.203h.063l-.063.19a3.5 3.5 0 0 0-.124.928c0 .043-.02.043-.062.085m7.627-1.225.041-.02c.125.4.166.802.166 1.203-.041-.021-.062-.043-.062-.085 0-.359-.042-.718-.145-1.055zM6.904 7.834q.03-.539.186-1.013h.042l-.063.295a3.4 3.4 0 0 0-.103.634c0 .063 0 .063-.062.084M14.199 6.8l.062-.021c.083.337.145.675.145 1.013-.041 0-.062-.021-.062-.085 0-.295-.041-.57-.124-.865zm-7.13-1.098.083.19c.042.063.042.127 0 .169l-.062.063H7.05V6.04l-.042-.042c-.041-.022-.02-.064-.02-.085.02-.084.02-.148.082-.211M6.841 9.65l.125.253.207.401c.042.042.02.063 0 .105a3.6 3.6 0 0 1-.394-.738zm7.586-.043.062.021a3.6 3.6 0 0 1-.414.718c-.042-.042-.042-.063 0-.105q.204-.3.352-.634m-.124-3.926c.062.084.062.169.082.253l-.02.021c-.042.021-.042.043-.042.085l-.02.042-.021.042-.042-.02-.041-.106-.02-.085zM9.12 11.233l-.103-.042-.021-.022-.104-.506c.083.02.104.042.125.105zm3.005-.064.042-.232.062-.232.062-.084.062-.021-.062.295-.062.19q0 .063-.062.063zm-1.595-7.494q0 .064-.063.064c-.228 0-.435.042-.663.084h-.041c0-.042.02-.063.062-.084q.35-.061.705-.064m.352-.02.332.042.373.042c.041.02.062.042.062.084l-.187-.02-.518-.064c-.041 0-.041 0-.062-.085M9.1 4.33c.082 0 .165.02.248.084.042.042.042.064-.02.064-.083.042-.187.02-.27-.022l-.041-.02-.021-.085.062-.021zm3.067.169-.104-.021c-.041-.022-.062-.043-.02-.085l.186-.063.145-.021c.02 0 .042.02.02.063 0 .042-.02.063-.061.084zm.394-.401c.062 0 .165.063.165.126l.021.19c0 .021-.02.042-.041.021-.062-.02-.104-.042-.125-.126zm-3.71 0c.02.105-.02.19-.062.274l-.104.084-.041-.02a.3.3 0 0 1 .041-.233c.02-.063.083-.084.166-.105m2.072-.254.56.064.187.02.02.064h-.041c-.228-.042-.456-.084-.684-.084-.042 0-.042 0-.042-.064m-.435 0v.043l-.56.084-.165.042-.042-.02.021-.043.207-.042.498-.064zm3.73 4.539c.042.148-.061.359-.207.38-.041-.148.063-.338.208-.38M8.418 5.195l-.021.085-.083.148-.104.105-.041.021-.02-.063.04-.169c.042-.084.146-.084.208-.127zM7.09 8.404c.125.042.228.232.187.38-.125.021-.249-.232-.187-.38m.912-2.829c.062.085.062.17.02.233-.02.063-.082.105-.144.126l-.021-.02c-.041-.064-.02-.149.02-.19l.063-.064zm1.368-.97c0 .084-.02.147-.104.19l-.145.02q-.062 0-.062-.063c0-.063.042-.084.083-.106l.187-.042zm2.819-.634V3.95l.02-.021h.021c.062.063.145.105.187.19l.02.063-.02.042-.063.021c-.145-.042-.165-.147-.165-.274m.787 1.203.042.021c.124.021.207.127.207.275l-.02.063-.063-.021-.145-.211zM9.225 3.908l-.042.232c-.02.084-.082.105-.145.105-.041.021-.083-.042-.062-.084l.125-.169.082-.063zm4.145 1.667.145.148c.041.063.02.127 0 .169l-.062.021c-.083-.042-.145-.105-.124-.211l.02-.127zm-1.14-.76-.145-.042a.2.2 0 0 1-.062-.148l.02-.02.208.041c.062.022.083.085.083.127-.021.042-.062.042-.104.042M6.924 6.061l.042.105.02.127c.021.063-.02.084-.04.127h-.042c-.104-.085-.125-.232-.042-.317l.042-.042zm7.524-.021c.124.084.103.274 0 .359h-.042c-.02-.022-.062-.064-.041-.106 0-.084.041-.148.062-.232zM6.945 9.248c0-.105.042-.21.062-.295.021-.042.042-.021.042 0l.041.127c.02.105-.041.19-.083.274l-.02.021-.042-.042zm7.4-.042-.022.085-.041.02h-.02c-.063-.105-.104-.21-.063-.337l.02-.084c.021 0 .042-.022.042.02l.083.275zM7.462 6.082v.021c-.02.127-.186.211-.29.19-.041-.021-.041-.042-.02-.063l.124-.148zm-.497 2.49.02.085-.04.211-.042.043c-.063.02-.083 0-.083-.043V8.7c.02-.085.083-.106.145-.127m0-1.941c-.02-.148.166-.275.352-.254-.041.127-.228.254-.352.254m7.42-.021a.42.42 0 0 1-.353-.254c.083 0 .145 0 .228.043.062.042.125.105.125.21m-.498-.55h.104c.103-.02.165.064.228.149l-.021.042c-.083.02-.145.02-.207-.021l-.083-.085zm.435 2.47c.125.043.145.106.145.275 0 .021 0 .063-.041.063-.02.022-.062 0-.083-.02a.36.36 0 0 1-.02-.296zM9.556 3.824c0 .064 0 .127-.062.19-.041.064-.103.064-.145.064q-.062 0-.062-.064c.042-.105.124-.148.207-.19zm2.301 0c.083-.02.145.021.187.064a.23.23 0 0 1 .062.147c.02.043-.021.043-.042.043-.124 0-.186-.064-.207-.19zM8.251 10.41l-.042-.105.021-.169c0-.021.02-.042.042-.021.082.042.124.105.165.19v.042h-.062c-.02-.02-.062-.02-.083.021l-.02.042zM8.5 4.836l-.146-.02-.041-.064.041-.063c.104-.043.187 0 .27.042.041.021.02.063 0 .084zm4.497 5.531-.062-.063c0-.042-.021-.042-.042-.021l-.041.021h-.042v-.042c.042-.085.083-.148.166-.19.02-.021.042-.021.062.02l-.02.212zm-.124-5.53-.104-.043c-.042 0-.042-.063 0-.063.083-.042.166-.085.249-.063.041 0 .062.042.062.084s-.02.042-.062.063zm-5.68 2.28c.084.084.084.19.042.295l-.062.042c-.041.021-.062.021-.083-.021l-.02-.106.062-.105zm-.248 2.511.042-.02.165.337.125.19c.02.042.02.042-.021.106a3.4 3.4 0 0 1-.31-.613m7.337-.084.041.042a3.3 3.3 0 0 1-.331.591v-.105l.27-.486zm-6.86-3.82c0-.064.02-.106.083-.128l.228-.042h.02c0 .148-.145.211-.331.17M7.36 7.158v-.085l.062-.148.103-.126c.021-.021.042 0 .042.02v.085l-.02.127c0 .084-.022.084-.104.042zm6.259-1.605h.041l.207.042c.063 0 .083.043.083.106-.186.063-.31 0-.331-.148m.539 1.541.041.148.041.042v.127l-.062.021c-.02 0-.062 0-.083-.042-.041-.085-.041-.211.042-.275zm-.187.042-.062-.063-.042-.021c-.041.042-.083.021-.083-.021l-.02-.211.02-.064.042.043c.104.063.104.169.145.274zm.166-1.71.02.127v.042c.042.022.042.043.021.085l-.083.105-.062-.02c-.041-.106.02-.296.104-.338M7.36 9.355q.088.045.165.106c.042.02.042.042.042.105l-.042.063c-.02.043-.062.064-.082 0l-.104-.21v-.064zm-.519-.211h-.186c-.062-.063-.124-.106-.145-.169.145-.042.31.021.331.169m7.089.169v.084l-.104.19c-.02.042-.062.042-.083 0-.041-.084-.062-.148.041-.19l.083-.063.063-.042zm-3.482-5.32c.02.042 0 .063-.042.063l-.56.085c-.04 0-.062 0-.062-.042.208-.064.436-.085.664-.106M7.235 5.428l.042.042q.093.126.062.253c0 .063-.062.106-.083.063l-.062-.063c0-.042-.02-.084.02-.105l.021-.106zM14.448 9.1c0-.148.165-.211.352-.17l-.062.085q-.05.045-.104.085zM7.38 8.55c-.103-.105-.124-.274-.062-.358.02-.042.062-.042.062 0a.3.3 0 0 1 .042.232zm5.783-2.765-.125-.063-.082-.148v-.02h.103c.083 0 .145.041.166.126 0 .042-.02.084-.062.105m-4.85-.21.083-.022c.041 0 .041.021.02.042-.04.085-.082.17-.207.19q-.062 0-.062-.063c0-.084.062-.148.166-.148m-.746.76.041.063-.02.042-.042.105c-.02.043-.103.085-.145.064-.02-.021-.041-.043-.02-.064 0-.084.103-.19.186-.21m3.378-2.344c.228.021.456.042.684.106 0 .042-.02.042-.062.042l-.56-.085q-.062 0-.062-.063M7.691 9.291v.02c0 .043 0 .085-.041.085-.042.021-.104-.042-.125-.084 0-.042 0-.106.042-.148v-.042l.02-.042.063.02.062.19zm1.451 1.52c.062.02.104.063.104.126l.083.36c-.063 0-.083-.022-.104-.085l-.083-.36zm4.643-4.497q.154.064.186.19c.02.042 0 .085-.041.085-.083 0-.125-.022-.125-.085l-.02-.042-.042-.063zm.145 2.196-.063-.19.042-.148.041-.042.042.042c.041.127.02.253-.062.338m-.353.717.062-.169.042-.02.041.042.021.063c.041.084 0 .19-.104.211l-.041-.021zm-1.471 1.541-.125.423-.082.063v-.042l.103-.38c0-.064.062-.043.083-.064zm1.223-.506c0 .105-.063.169-.146.21l-.103-.02v-.043l.062-.084.124-.105.042-.022zm-5.244.274-.041-.042c-.083-.042-.125-.106-.125-.211.02-.021.042-.042.062-.021l.166.147.02.085zM7.173 6.99l.02-.085.125-.126c.02-.043.042-.022.062 0 .021.042 0 .147-.02.168l-.042.085-.02.021-.021-.021c-.021-.042-.042-.042-.104-.042m6.985-.021c-.042-.022-.083 0-.083.042l-.042.02-.02-.041-.042-.064v-.169l.041-.02.125.147z"
                    }), (0, o.jsx)("path", {
                        fill: "#D48931",
                        d: "M8.166 5.912c0 .063-.02.084-.062.126l-.165.085c-.042 0-.063-.021-.042-.064.02-.105.166-.168.27-.147m5.099-.021c.062.02.145.042.186.126v.064l-.062.02a.31.31 0 0 1-.186-.147c-.021-.042-.021-.063.062-.063m-.601 4.623.041-.085.125-.063q.093-.032.062.063l-.062.17h-.042c-.041-.043-.062-.085-.124-.085m-4.083.063c-.062 0-.083.042-.124.084h-.042l-.062-.19c-.02-.042.02-.063.062-.042l.125.085.041.042zm-.953-4.75-.021.021-.042.043c-.082.126-.186.084-.29.105l.042-.105.062-.022c.041-.042.083-.042.124-.042h.042l.083-.02zm6.445.148-.186-.021h-.021l-.145-.148v-.021l.062.021h.104l.062.021.083.042c.041.022.041.043.041.106M7.11 9.521q.123.224.25.444c.02.042.02.084-.022.127l-.269-.528zm.29-4.053.042-.147.062-.17.021-.02.041.02c.042.106-.02.19-.062.296l-.083.042zm.954-.928a.5.5 0 0 1 .104-.233c.041-.042.062-.02.083.043.02.063-.042.19-.125.232-.041.02-.062 0-.062-.042m4.684 0c0 .042-.02.042-.042.042l-.02-.021c-.083-.021-.145-.17-.104-.254 0-.042.02-.042.042-.02l.082.105zm1.12 4.94.04.02-.29.528v-.105l.228-.402zm-.747-4.075a.31.31 0 0 1 .27-.063l.082.084c0 .042 0 .063-.041.063l-.145-.02zm.56 0-.042.063-.083-.042-.041-.19c-.02-.042 0-.063.02-.105h.042zm-5.016-.781-.041.021-.208.021-.062-.042-.02-.042.062-.042.207.02.083.043zm-.995.802c-.103.021-.186.106-.31.063-.042 0-.063-.02-.042-.042l.083-.084a.33.33 0 0 1 .27.063m1.617-1.098a.19.19 0 0 1-.145-.063c-.042-.021-.042-.063-.021-.105h.041q.12.042.228.105l.021.021-.02.021zM7.503 8.656c.042.063.042.211-.041.317l-.083-.106v-.042c0-.063.062-.127.124-.169m4.933-4.032c.02-.063.083-.084.124-.084l.125-.022c.041 0 .082.022.082.064l-.062.063a.4.4 0 0 1-.27-.021m-.746-.338.02-.02.228-.128.063.022c0 .042.02.084-.021.105-.083.063-.187.042-.29.021m2.135 4.644c-.083-.084-.083-.253-.021-.316.145.105.145.21.02.316m-3.98-4.686.56-.084c.02.042 0 .063-.042.063l-.435.063c-.041 0-.062 0-.083-.042M7.38 9.184l-.166-.085c-.041-.063-.02-.126-.041-.19.145.021.207.148.207.275m5.969-4.518.041-.063.373.338-.041.042zm-1.803-.443c0 .063-.042.063-.062.063l-.456-.063c-.042-.021-.042 0-.042-.085zm2.342 4.919c-.021-.127.103-.275.228-.275-.021.063 0 .127-.062.19zM8 4.602l.041.064-.373.338-.041-.042zM6.716 6.398c.041 0 .083.042.083.085l.041.169c0 .042-.02.063-.062.042-.042-.042-.083-.064-.083-.106zm7.917-.02v.21l-.104.085-.02-.021c-.042-.085.04-.254.103-.275zM9.555 4.92l-.062-.022-.062-.02c-.042 0-.062 0-.062-.043-.021-.042.02-.042.041-.042.083-.042.145-.021.228.021.02.021.02.084-.02.084zm2.26 0-.063-.022c-.02-.02-.042-.063 0-.084a.22.22 0 0 1 .228-.021l.041.042-.041.042zm-3.794.422-.041-.043.373-.337h.062zm-.269 1.224-.02.127c0 .042-.084.063-.125.02l-.042-.041v-.043l.042-.042a.11.11 0 0 1 .104-.063c.041-.021.062 0 .041.042m5.845.063v-.042l-.021-.063c0-.021.02-.042.041-.021.062.02.125.042.145.105v.043l-.041.042-.062.02c-.021-.02-.083-.02-.062-.084m-3.482-2.11c-.021-.064-.062-.064-.125-.064H9.95v-.042c.041-.021.104-.085.166-.085h.02l.083.022-.041.084zm3.295.76-.062.042-.373-.36h.083zm-3.585-.57-.063-.022c-.041-.02-.02-.042-.02-.063l.062-.084c.041-.043.083-.043.124.02l.02.043c.022.021.022.042-.02.063l-.062.042zm1.45-.19-.083-.127c-.041-.021-.02-.042.021-.064l.166.022.062.042.02.042h-.02l-.083.021c-.041 0-.083.021-.083.063m.27.168-.104-.042-.02-.021.082-.106c.021-.02.062-.02.083.022l.062.063c.021.042 0 .063-.041.084zm-3.772.444-.042-.043.353-.316.041.042zm.476-.233-.352.338-.041-.042.186-.169.124-.106c.021-.042.063-.042.083-.02m.394.465-.041.084-.083.106c-.02.02-.042 0-.042-.021q0-.064-.062-.064l-.02-.02.02-.022.187-.063zm.042-.106.041-.042c.062-.063.124-.063.207-.042l.021.042-.083.084-.062.022-.062-.022-.02-.02zm4.58-.443.041-.063.332.316-.041.042zm-.498.528.187.063.02.042h-.02q-.062 0-.062.064c0 .042-.02.042-.042.02l-.124-.147c0-.042.02-.042.041-.042m-.269-.19.145.042c.042.021.042.063 0 .084-.02.043-.062.043-.083.021-.062-.02-.124-.042-.124-.105l.02-.042zm.974.063-.331-.317c.02-.02.041-.042.082 0l.27.254.02.02zM9.7 4.497l-.124.148c-.042.042-.062.021-.062-.021l-.042-.063c-.02-.043 0-.085.042-.085H9.7zM8.021 9.965c.104.042.104.127.125.21.02.043-.021.064-.062.043C8 10.197 7.98 10.155 8 10.07zm5.223-.042.02.126c0 .064-.061.127-.123.127l-.042-.063c0-.064.062-.17.145-.19M11.69 4.455h.062l.124.021c.042 0 .063.042.042.064l-.042.105h-.041l-.125-.127zm-3.005 6.418-.042-.043-.062-.105v-.064h.062l.125.106c.041.042.02.063-.021.084zm5.326-1.478.062.042-.248.422c-.021-.042-.042-.063 0-.105l.165-.317zm-6.798.084.042-.042.02.063.166.317c.02.021.02.063-.02.106zm5.327 1.33-.083-.02v-.043c0-.064.124-.148.165-.148l.042.042-.083.148zM9.223 4.941l.042.02c.062.022.062.064.02.085-.062.021-.103.063-.186.042l-.041-.042c-.021-.021.02-.042.041-.063zm3.006.147-.145-.063c-.021-.021-.021-.063.02-.063l.104-.021.083.042.041.042-.041.042zm-3.917 5.489c.02.063.082.105.103.19-.041.021-.083.021-.103-.021l-.104-.085-.02-.063.061-.021zm.414-5.615-.02-.021v-.064l.207-.105c.02-.021.041-.021.062.02l-.02.043c-.063.021-.125.042-.167.106zm4.104.295-.125-.063-.02-.085v-.02h.165l.063.042-.042.042c-.041.02-.041.02-.041.084m-.29 5.637c-.042.063-.083.105-.166.105-.021.021-.042 0-.042-.042l.021-.063c0-.043.042-.064.104-.043zm.29-.19c0-.085.083-.127.103-.19h.083l.042.02-.021.064-.104.084c-.02.043-.062.043-.103.022M8.54 5.257c.02-.042 0-.063-.021-.084l-.042-.042.042-.022h.186c0 .064 0 .085-.062.106l-.062.042zm.145 5.7.103-.042c.042-.021.083 0 .104.063v.085c-.042.02-.083 0-.124-.022L8.726 11zm5.948-1.731-.083.169c-.02.042-.062.02-.083 0-.042 0-.042-.021-.062-.064l.02-.02.104-.043zm-1.97-4.264-.061-.042a.18.18 0 0 0-.145-.085c-.042-.021-.042-.042-.042-.063l.062-.021.208.126v.043zm-6.03 4.306.186.063.063.043-.063.063c-.041.042-.083.042-.103-.021zm1.99 1.182.082.043.063.126-.021.042h-.042l-.083-.105-.02-.085zm4.02-.042c0 .042 0 .085-.041.106l-.062.084-.042.021-.02-.042c-.021-.042.062-.169.124-.169zM8.83 5.068l.041-.064.042-.042c0-.042.082-.064.103-.042l.02.042-.061.084c-.042.021-.083.042-.145.021m3.71-.022c-.042.021-.083.021-.125-.021l-.062-.084.02-.043c.042-.02.084 0 .104.043l.042.063zm-2.529-.274L9.97 4.75l.02-.043.042-.063h.062c.02.021.041.042.02.063zm1.368-.021-.083-.043c-.02 0-.041-.02 0-.063h.062l.042.042.02.043zM7.027 7.579c.041.021.082 0 .062.064l-.021.02c-.041-.02-.041-.041-.041-.084m7.274-.042c-.02.042 0 .085-.041.085l-.042-.022c0-.042.042-.042.083-.063m-2.445 3.336c-.021.063-.083.063-.104.084-.02-.042 0-.042.104-.085m-2.363.147c-.042-.02-.104-.02-.104-.084.042.021.083.021.104.084m-.104.021c.021.043.083.021.104.085-.062 0-.104-.042-.104-.085m.083.317c-.041-.021-.083-.021-.083-.084.021.02.083.02.083.084m2.28-.169c0-.063.062-.063.104-.084 0 .042-.021.042-.104.084m.104-.19c-.021.063-.063.042-.104.063 0-.042.062-.042.104-.063m-2.384.232c-.041-.02-.083 0-.083-.063.021.021.083.021.083.063m2.28.064c0-.064.062-.064.104-.085-.021.064-.063.064-.104.085m-.974.316c0 .106-.083.19-.187.19-.124 0-.207-.084-.207-.19a.21.21 0 0 1 .207-.21c.104 0 .187.084.187.21"
                    }), (0, o.jsx)("path", {
                        fill: "#DB0303",
                        d: "M9.136 9.644c.042 0 .083 0 .104-.042.042-.064.083-.106.062-.17 0-.062 0-.105-.062-.126-.062-.02-.083-.063-.083-.126h.104c.062 0 .062 0 .083-.064l-.083-.148h.062c.02.022.062 0 .062-.042l.062-.253.021-.063.062.042v.02c.02.043.042.064.083.043h1.928c.041 0 .082 0 .103-.042l.02-.042h.042l.021.02.042.233c.02.084.02.106.124.084l.02.022-.082.105-.021.042c.02.021.02.043.062.043h.145c0 .084-.062.126-.124.147l-.042.043c0 .084 0 .168.083.232v.02l.083.022h.767l.083.042.083.19v.021l.02-.042a3.133 3.133 0 0 0 .435-3.314 2.96 2.96 0 0 0-1-1.17 2.9 2.9 0 0 0-1.445-.498h-.352a2.9 2.9 0 0 0-1.258.28 3.113 3.113 0 0 0-1.748 2.908 3.2 3.2 0 0 0 .602 1.752l.041.042.062-.169c.021-.042.042-.042.063-.042zm3.275.739H8.743c.145.105.27.21.414.274l.352.19.311.085.021-.021-.083-.106.166-.127.062.106.145-.085-.062-.105.166-.085.062.085c0 .021.02.042.041.021l.104-.021.042-.021v-.085h.186v.106l.145.021.042-.021.041-.085.187.085-.063.105.125.085.083-.106.145.127-.062.106.02.02.311-.084-.02-.042c.269-.106.538-.232.787-.422"
                    }), (0, o.jsx)("path", {
                        fill: "#FFD400",
                        d: "m10.099 6.777.041-.147.125-.444c.02-.02.02-.042-.021-.063l-.435-.338-.021-.042h.58c.042 0 .042 0 .063-.042l.186-.549v-.021l.062.148.145.422c0 .042.021.042.042.042h.6v.021l-.04.021-.436.338c-.02.021-.041.042-.02.084l.165.507.02.063-.123-.084-.373-.274h-.083q-.239.18-.477.358m-1.12-.612q.106.147.208.296l.29-.042-.083.084-.124.148c-.02 0-.042.02-.02.063l.123.275-.124-.064-.124-.084c-.042-.021-.062 0-.083.02l-.187.17-.02.02.041-.274c0-.042 0-.063-.041-.084l-.25-.127.291-.063c.042 0 .042 0 .062-.042zm2.923.866.124-.275-.02-.063-.166-.19-.042-.021.311.042.042-.042.145-.275.02.085.021.211.062.063.228.021.063.022-.25.126c-.04.021-.04.042-.04.085l.04.295-.144-.148-.062-.063-.063-.021zm-1.492.675-.249.021c-.083 0-.083 0-.104.085l-.062.253-.103-.232v-.021c-.021-.042-.042-.064-.104-.064h-.249l.062-.042.146-.126.02-.064-.103-.253v-.042l.248.169c.021.02.042.02.063-.021l.228-.17v.064l-.063.232.021.042.207.148zm.787-.527.145.21c.042.064.042.064.125.043l.248-.063-.145.19c-.062.084-.062.084 0 .168l.125.211a11 11 0 0 1-.353-.084l-.186.232v-.148l.02-.147c0-.043-.02-.043-.04-.064l-.291-.105q.165-.075.332-.148z"
                    }), (0, o.jsx)("path", {
                        fill: "#D48931",
                        d: "m11.667 10.872-.042-.063c.27-.106.539-.253.788-.422H8.744l.415.274.435.211-.02.063-.042-.02A3.12 3.12 0 0 1 8.014 9.64a3.21 3.21 0 0 1 .31-3.786 3.1 3.1 0 0 1 1.705-1 3.01 3.01 0 0 1 2.36.438c.344.23.64.53.868.878.228.35.385.742.461 1.155.166 1.034-.124 1.942-.808 2.723-.343.373-.77.655-1.244.823m1.284-.992.021-.021a3.133 3.133 0 0 0 .414-3.314 2.96 2.96 0 0 0-.992-1.166 2.9 2.9 0 0 0-1.432-.502h-.352l-.56.042a3 3 0 0 0-1.72 1.035 3.06 3.06 0 0 0-.726 2.09c.021.654.228 1.245.601 1.773l.042.02.062-.168.062-.021h.767a.11.11 0 0 0 .104-.064.2.2 0 0 0 .062-.147c0-.064 0-.106-.062-.148-.063-.021-.083-.063-.083-.127l.103.021c.063 0 .063 0 .083-.063l-.083-.148v-.02l.063.02c.02 0 .062 0 .062-.042l.062-.253.02-.064.042.043.02.02c.022.043.042.043.084.043h1.927c.042 0 .083 0 .083-.063l.041-.021.042-.022.02.043.042.21c.02.106.02.127.125.106h.02l-.083.106-.02.042c.02.021.02.063.062.063h.145a.28.28 0 0 1-.124.148l-.042.021c0 .085 0 .17.083.232v.022c.02.042.041.042.083.042h.767c.041 0 .062 0 .062.042zm-4.31.338c.041.042.062.063.103.063h3.69c.04 0 .062-.021.082-.063zm3.108-1.077c-.02-.042-.02-.063-.062-.063H9.49q-.062 0-.062.063zm-1.015.992c0-.084.041-.19-.062-.253-.083-.042-.166-.042-.228.021-.083.063-.062.148-.062.232zm.104-.76h-.498V9.5l.498.021zm-.788.76c0-.084.02-.169-.083-.21-.041-.043-.104-.022-.166.02-.041.021-.062.127-.041.19zm1.368 0c0-.084.02-.169-.062-.21-.063-.043-.125-.022-.187 0-.062.063-.041.147-.041.21zm.331-.316-.062-.085c0-.02-.02-.063-.041-.042l-.062.042c0 .021 0 .064-.042.064l-.02.042c.062 0 .062.042.062.084v.127c0 .084 0 .084.082.084l.021-.232.042-.084zm.228.316c.021-.063.021-.126-.041-.169l-.124.022c-.063.02-.063.084-.042.147zM9.594 9.69h-.041c-.042-.021-.042 0-.042.021l-.02.042v.064l.02.147v.127l.02.042.022-.063v-.063c0-.064 0-.148.041-.19l.02-.043zm-.187.443c0-.063 0-.126-.062-.147h-.124c-.042.042-.042.105-.042.147zm2.384-.76h-.187V9.5h.187zm-2.404.148h.186v-.148H9.49c-.124 0-.124 0-.124.127zm2.114-.148h-.125l-.02.021V9.5h.124zm-1.617 0V9.5h.124v-.127zm.228.127h.124v-.127h-.124zm1.036 0h.125v-.127h-.125zm-.228-.127V9.5h.125v-.127zm-1.119 0h-.124V9.5H9.8z"
                    }), (0, o.jsx)("path", {
                        fill: "#EF9C48",
                        d: "M11.28 9.378h-.124v.126l.125.022zm-.435 0h-.497v.126l.497.022zm.208.126v-.126h-.125v.126zm.621-.422H9.498q-.062 0-.062.063h2.3c0-.042 0-.063-.062-.063m-.994.803c-.083-.043-.166-.043-.229.02-.082.064-.062.149-.062.233h.353c0-.084.041-.19-.062-.253m.663.042c-.042-.042-.104-.021-.166 0-.062.063-.041.148-.041.211h.269c.02-.084.02-.169-.062-.211m-2.59.359h3.688c.042 0 .062-.021.083-.063H8.648c.042.042.063.063.104.063m2.838-.232c0 .084 0 .084.063.084h.02l.021-.232.041-.085h.021l-.062-.084c-.02-.021-.02-.064-.041-.042l-.063.042c0 .02 0 .063-.041.063l-.02.042c.061 0 .061.043.061.085zm0-.55h.208v-.126h-.208zm.187.634h.207c0-.063 0-.127-.062-.169l-.104.021c-.062.043-.062.085-.041.148m-.27-.76h-.124l-.02.02v.106h.124zm-1.264.126v-.126h-.124v.126zm-.87 0 .02.022h.187v-.148h-.104c-.103 0-.103 0-.103.126m-.145.486c-.042.043-.042.085-.042.148h.228c0-.063 0-.127-.062-.148zm.394-.211-.042-.084h-.02c-.042-.022-.042 0-.063.02v.043l-.02.063.02.148.02.127.022.042.02-.063v-.064c0-.063 0-.147.042-.19zm.186-.401h-.124v.126h.124zm.249.76c0-.084.02-.169-.083-.211-.042-.042-.104-.021-.166.021-.041.021-.062.127-.041.19zm-.042-.76h-.124v.126h.124z"
                    })]
                }))
            }, M$ = t(8536), M0 = {
                modules: [{
                    title: "\u5927\u6A21\u578B\u672C\u5730",
                    list: [{name: "Doubao-Seed-Evolving", link: "/model#language-models"}, {
                        name: "Doubao-Seed-2.1-pro",
                        link: "/model#language-models"
                    }, {name: "Doubao-Seed-2.1-turbo", link: "/model#language-models"}, {
                        name: "Doubao Seedance 2.0",
                        link: "/model#video-models"
                    }, {
                        name: "Doubao-Seedream-5.0-pro",
                        link: "/model#image-models"
                    }, {name: "Doubao-\u97F3\u9891\u751F\u6210-1.0", link: "/model#section-head"}]
                }, {
                    title: "\u7279\u60E0\u6D3B\u52A8",
                    list: [{name: "AgentPlan", link: "https://www.volcengine.com/activity/agentplan"}, {
                        name: "CodingPlan",
                        link: "https://www.volcengine.com/activity/codingplan"
                    }]
                }, {
                    title: "\u4E2A\u4EBA\u4E2D\u5FC3",
                    list: [{name: "\u6211\u7684\u8BA2\u9605", link: "/console/subscriptions"}, {
                        name: "API Key\u7BA1\u7406",
                        link: "/console/apikey"
                    }, {name: "\u8D26\u5355\u7BA1\u7406", link: "/console/billing"}, {
                        name: "\u53D1\u7968\u7BA1\u7406",
                        link: "https://console.volcengine.com/finance/invoice"
                    }]
                }],
                beian: [{
                    type: "common",
                    text: "\u7248\u6743\u6240\u6709 \xa9 \u5317\u4EAC\u706B\u5C71\u5F15\u64CE\u79D1\u6280\u6709\u9650\u516C\u53F82026",
                    link: "",
                    list: []
                }, {
                    type: "common",
                    text: "\u589E\u503C\u7535\u4FE1\u4E1A\u52A1\u7ECF\u8425\u8BB8\u53EF\u8BC1\uFF1A\u724C\u7167\u4EACB2-20202418",
                    link: "https://dxzhgl.miit.gov.cn/#/home",
                    list: []
                }, {
                    type: "gov",
                    text: "",
                    link: "",
                    list: [{
                        text: "\u4EAC\u516C\u7F51\u5B89\u5907 11010802032137\u53F7",
                        link: "https://beian.mps.gov.cn/#/query/webSearch?code=11010802032137"
                    }, {text: "\u4EACICP\u590720018813\u53F7-3", link: "https://beian.miit.gov.cn/"}]
                }]
            }, M4 = (0, L.dU)(), M2 = function () {
                var M, e, t = (0, r._)((0, I.useState)(), 2), n = t[0], i = t[1];
                (0, I.useEffect)(function () {
                    (0, c._)(function () {
                        var M;
                        return (0, l._)(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    M = M4 === L.tE.BOE || M4 === L.tE.STABLE ? "https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_950/bee_prod_950_bee_publish_17411.json" : "https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_950/bee_prod_950_bee_publish_17412.json", e.label = 1;
                                case 1:
                                    return e.trys.push([1, 3, , 4]), [4, (0, M$.WY)(M)];
                                case 2:
                                    return [2, e.sent()];
                                case 3:
                                    return console.error("getAppbarData error", e.sent()), [2, M0];
                                case 4:
                                    return [2]
                            }
                        })
                    })().then(function (M) {
                        i(M)
                    })
                }, []);
                var a = function (M, e) {
                    var t = e.link || "",
                        n = S.Fz("getTraceUrl", {url: t, aId: "a106064", bId: "b106065", dom: M.target}) || t;
                    t && window.open(n, "_blank")
                };
                return (0, o.jsx)("div", {
                    id: "footer", className: "footer", "data-monitor-comp-id": "c111389", children: (0, o.jsxs)("div", {
                        className: "footer-container",
                        children: [(0, o.jsxs)("div", {
                            className: "footer-content",
                            children: [(0, o.jsx)("div", {
                                className: "footer-logo",
                                children: (0, o.jsx)(MK, {})
                            }), (0, o.jsx)("div", {
                                className: "footer-nav",
                                children: null == n || null == (M = n.modules) ? void 0 : M.map(function (M) {
                                    var e;
                                    return (0, o.jsxs)("div", {
                                        className: "footer-block",
                                        children: [(0, o.jsx)("header", {children: M.title}), null == (e = M.list) ? void 0 : e.map(function (M) {
                                            return (0, o.jsx)("p", {
                                                onClick: function (e) {
                                                    return a(e, M)
                                                }, "data-monitor-click-id": "d111391", children: M.name
                                            }, M.name)
                                        })]
                                    }, M.title)
                                })
                            })]
                        }), (0, o.jsx)("div", {
                            className: "footer-bottom",
                            children: null == n || null == (e = n.beian) ? void 0 : e.map(function (M) {
                                if ("common" === M.type) return (0, o.jsx)("a", {
                                    href: M.link || void 0,
                                    target: "_blank",
                                    "data-monitor-click-id": "d111392",
                                    children: M.text
                                }, M.text);
                                if ("gov" === M.type) {
                                    var e;
                                    return (0, o.jsxs)("div", {
                                        children: [(0, o.jsx)(Mq, {}), null == (e = M.list) ? void 0 : e.map(function (M) {
                                            return (0, o.jsx)("a", {
                                                href: M.link || void 0,
                                                target: "_blank",
                                                "data-monitor-click-id": "d111392",
                                                children: M.text
                                            }, M.text)
                                        })]
                                    }, M.text)
                                }
                            })
                        })]
                    })
                })
            }, M1 = t(71507), M3 = t(90171),
            M5 = {wrap: "wrap-TBGW", root: "root-bPaA", content: "content-LPoG", footerDeferred: "footerDeferred-woVF"},
            M6 = t(92885), M8 = {
                title: "AI Hub-\u8C46\u5305\u5927\u6A21\u578BAPI\u670D\u52A1\u5E73\u53F0-\u706B\u5C71\u5F15\u64CE",
                description: "\u5168\u6808 AI \u6A21\u578B\u5373\u5F00\u5373\u7528\uFF0C\u52A9\u529B\u5F00\u53D1\u8005\u5FEB\u901F\u63A5\u5165\u3001\u9AD8\u6548\u8C03\u7528\u5404\u7C7B\u6A21\u578B\u80FD\u529B\u642D\u5EFA\u5E94\u7528",
                keyword: "\u706B\u5C71\u5F15\u64CE,\u8C46\u5305\u5927\u6A21\u578B,seedream5.0,seedance2.0,Doubao,\u8C46\u5305\u89C6\u9891\u751F\u6210,\u8C46\u5305\u89C6\u89C9\u6A21\u578B,codingplan,agentplan,seed,\u8C46\u5305\u56FE\u50CF\u521B\u4F5C,\u8C46\u5305\u8BED\u97F3\u6A21\u578B"
            }, M9 = (0, I.createContext)({
                appTheme: "light", setAppTheme: function () {
                    return null
                }
            }), M7 = M1.Il, eM = Promise.resolve({
                loadNewPage: function () {
                }
            }), ee = "page:first-screen-ready", et = function (M, e, t) {
                var n = (0, r._)((0, I.useState)(!t), 2), i = n[0], a = n[1];
                return (0, I.useEffect)(function () {
                    if (!t || "undefined" == typeof window) return void a(!0);
                    var M = !1, e = function () {
                        M || a(!0)
                    };
                    if (a(!1), document.querySelector('[data-page-ready="true"]')) return void e();
                    var n = window.setTimeout(e, 1600);
                    return window.addEventListener(ee, e, {once: !0}), function () {
                        M = !0, window.clearTimeout(n), window.removeEventListener(ee, e)
                    }
                }, [t, M, e]), {shouldDeferFooter: t && !i}
            }, en = function (M, e) {
                var t = e || {}, n = t.appbar, i = void 0 === n ? {} : n, z = t.footer, y = t.style,
                    A = void 0 === y ? {} : y, T = t.className, s = t.asyncInit, d = t.title,
                    L = void 0 === d ? M8.title : d, x = t.keyword, O = void 0 === x ? M8.keyword : x, E = t.description,
                    m = void 0 === E ? M8.description : E, b = i.enabled, S = void 0 === b || b,
                    Q = (0, D._)(i, ["enabled"]), v = (void 0 === z ? {} : z).enabled, w = void 0 === v || v;
                return I.memo(function (t) {
                    var n = (0, g.s0)(), i = (0, g.TH)(), D = (0, I.useContext)(M7), z = D.profile, y = D.profileLoading,
                        s = D.doubaoUserLoading, d = D.setProfile, x = D.doubaoUser, E = D.setDoubaoUser,
                        b = (0, r._)((0, I.useState)(null == e ? void 0 : e.appTheme), 2), v = b[0], k = b[1],
                        h = et(i.pathname, i.search, w).shouldDeferFooter;
                    return (0, I.useEffect)(function () {
                        (0, c._)(function () {
                            var M;
                            return (0, l._)(this, function (e) {
                                switch (e.label) {
                                    case 0:
                                        return e.trys.push([0, 2, , 3]), [4, eM];
                                    case 1:
                                        return null == (M = e.sent()) || M.loadNewPage(), [3, 3];
                                    case 2:
                                        return e.sent(), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })()
                    }, []), (0, I.useEffect)(function () {
                        var M;
                        y || (null == z ? void 0 : z.Id) || null == x || x.AccountId
                    }, [y, null == z ? void 0 : z.Id]), (0, I.useEffect)(function () {
                        (null == z ? void 0 : z.Id) !== void 0 && (null == z ? void 0 : z.Id) !== null && (0, M3.w)(z.Id)
                    }, [null == z ? void 0 : z.Id]), (0, o.jsx)("div", {
                        className: "".concat(M5.wrap, " ").concat(null != T ? T : ""), children: (0, o.jsxs)("div", {
                            className: M5.root,
                            style: A,
                            id: "withRoot",
                            children: [(0, o.jsxs)(j.q, {
                                children: [(0, o.jsx)("title", {children: L}), (0, o.jsx)("meta", {
                                    name: "keywords",
                                    content: O
                                }), (0, o.jsx)("meta", {
                                    name: "description",
                                    content: m
                                }), (0, o.jsx)("body", {"arco-theme": v})]
                            }), (0, o.jsx)(a.S, {
                                from: "with-root-appbar",
                                justHide: !0,
                                children: S && (0, o.jsx)(MX, (0, N._)((0, u._)({}, Q), {
                                    navigate: Q.navigate || n,
                                    profile: z,
                                    profileLoading: y,
                                    doubaoUserLoading: s,
                                    setProfile: d,
                                    doubaoUser: x,
                                    onRechargeSuccess: function () {
                                        return (0, c._)(function () {
                                            var M;
                                            return (0, l._)(this, function (e) {
                                                switch (e.label) {
                                                    case 0:
                                                        return [4, (0, M6.am)()];
                                                    case 1:
                                                        return void 0 !== (M = e.sent()) && (null == E || E((0, N._)((0, u._)({}, x), {AvailableBalance: M}))), [2]
                                                }
                                            })
                                        })()
                                    }
                                }))
                            }), (0, o.jsx)(a.S, {
                                from: "page-content",
                                children: (0, o.jsx)("div", {
                                    className: M5.content,
                                    id: S ? "app-content" : "",
                                    children: (0, o.jsx)(M9.Provider, {
                                        value: {appTheme: v, setAppTheme: k},
                                        children: (0, o.jsx)(M, (0, u._)({}, t))
                                    })
                                })
                            }), (0, o.jsx)(a.S, {
                                from: "with-root-footer",
                                justHide: !0,
                                children: (0, o.jsx)("div", {
                                    className: h ? M5.footerDeferred : void 0,
                                    children: w && (0, o.jsx)(M2, {})
                                })
                            })]
                        })
                    })
                })
            };
        t(3851), t(61762), t(5264), t(37650), t(94849), t(81366);
        var ei = null, ea = function () {
            return ei || (ei = Promise.all([t.e("22769").then(t.bind(t, 46645)), t.e("92179").then(t.bind(t, 29169))]).then(function (M) {
                var e = (0, r._)(M, 2), t = e[0], n = e[1];
                return {
                    QuickApiAccessDrawerProvider: t.QuickApiAccessDrawerProvider,
                    QuickApiAccessDrawer: n.QuickApiAccessDrawer
                }
            })), ei
        }, ec = {
            colorPrimary: "#101013",
            colorPrimaryHover: "#383740",
            colorPrimaryActive: "#101013",
            colorPrimaryDisabled: "#F6F7F9",
            colorTextPrimary: "#101013",
            colorTextTertiary: "#737A87",
            colorBgSecondary: "#F1F4F8",
            colorBorder: "#DDE2E9",
            radiusSm: 2,
            radiusMd: 4,
            colorLink: "#1664FF",
            aiBtnPrimaryBg: "#101013",
            aiBtnPrimaryBgHover: "#383740",
            aiBtnPrimaryBgActive: "#0A0A0C",
            aiBtnPrimaryBgDisabled: "#C7C9CE",
            aiBtnPrimaryBgImage: "none",
            aiBtnPrimaryBgImageHover: "none",
            aiBtnPrimaryBgImageActive: "none",
            aiBtnPrimaryBgImageDisabled: "none",
            awesomeBtnPrimaryBgImage: "linear-gradient(77.86deg, #101013 -3.23%, #101013 51.11%, #101013 98.65%)",
            awesomeBtnSecondaryHoverBgImage: "linear-gradient(to bottom right, #383740, #101013)",
            finishCallBtnBgImage: "linear-gradient(72deg, #101013 18.03%, #383740 75.58%, #101013 104.34%)",
            copyParamTextBgImage: "linear-gradient(0deg, #1664FF, #1664FF)",
            switchCheckedBg: "#1664FF",
            switchCheckedBgDisabled: "rgba(22, 100, 255, 0.3)",
            checkboxCheckedBg: "#1664FF",
            checkboxCheckedBgDisabled: "rgba(22, 100, 255, 0.3)",
            linkPureColor: "#383740",
            linkPureHoverColor: "#101013",
            linkPureActiveColor: "#101013",
            textBtnPrimaryColor: "#1664FF",
            textBtnPrimaryHoverColor: "#4080FF",
            textBtnPrimaryDisabledColor: "rgba(22, 100, 255, 0.3)",
            defaultBtnBg: "#FFFFFF",
            defaultBtnBorderColor: "#B8B7C3",
            defaultBtnBorderColorHover: "#383740",
            defaultBtnBorderColorActive: "#101013",
            selectBorderGradient: "linear-gradient(#DDE2E9, #DDE2E9)",
            accountTipBgImage: "linear-gradient(124deg, #FFF 53.71%, #F6F7F9 104.06%), linear-gradient(90deg, #F1F4F8 0%, #E5E6EB 100%)",
            apiKeyTableHeaderBgImage: "linear-gradient(180deg, #F1F4F8 0%, #FFF 32.29%)",
            comfortAlertBg: "rgba(243, 245, 248, 0.72)",
            comfortAlertBorderColor: "#DDE2E9",
            comfortAlertCollapseIconColor: "#101013",
            comfortAlertUnderlineColor: "#DDE2E9",
            comfortAlertTitleBgImage: "linear-gradient(0deg, #101013, #101013)",
            comfortAlertLinkColor: "#1664FF",
            linkUnderlineOffset: 2,
            modalBgImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(241, 244, 248, 0.2) 50%, rgba(220, 226, 234, 0.2) 100%)",
            brandGradientText: "linear-gradient(89deg, #383740 17.24%, #101013 47.12%)",
            fastCertPrimaryButtonText: "#FFFFFF",
            fastCertPrimaryButtonTextHover: "#FFFFFF",
            fastCertPrimaryButtonTextActive: "#FFFFFF",
            fastCertPrimaryButtonTextDisabled: "rgba(255, 255, 255, 0.72)",
            fastCertPrimaryButtonBg: "#101013",
            fastCertPrimaryButtonBgHover: "#383740",
            fastCertPrimaryButtonBgActive: "#0A0A0C",
            fastCertPrimaryButtonBgDisabled: "#C7C9CE",
            fastCertPrimaryButtonBorderColor: "#101013",
            fastCertPrimaryButtonBorderColorHover: "#383740",
            fastCertPrimaryButtonBorderColorActive: "#0A0A0C",
            fastCertPrimaryButtonBorderColorDisabled: "#C7C9CE",
            fastCertPrimaryButtonRadius: 2,
            fastCertPrimaryButtonShadow: "none",
            fastCertPrimaryButtonShadowHover: "none",
            fastCertPrimaryButtonShadowActive: "none",
            fastCertAgreementText: "#737A87",
            fastCertAgreementLink: "#101013",
            fastCertAgreementLinkHover: "#383740",
            fastCertAgreementLinkActive: "#101013",
            fastCertInputFocusBorder: "#1664FF",
            fastCertSwitch: {
                bg: "#F1F4F8",
                text: "#737A87",
                bgHover: "#E5E6EB",
                textHover: "#101013",
                bgActive: "#FFFFFF",
                textActive: "#101013",
                borderActive: "#101013",
                radius: 2
            },
            fastCertQrcodeCornerColor: "#101013",
            fastCertVars: {
                "button-height": "32px",
                "default-button-text": "#101013",
                "default-button-text-hover": "#101013",
                "default-button-text-active": "#101013",
                "default-button-text-disabled": "#C7C9CE",
                "default-button-border": "1px solid #DDE2E9",
                "default-button-border-hover": "1px solid #C7C9CE",
                "default-button-border-active": "1px solid #101013",
                "default-button-border-disabled": "1px solid #E5E6EB",
                "default-button-bg": "#FFFFFF",
                "default-button-bg-hover": "#F6F7F9",
                "default-button-bg-active": "#F1F4F8",
                "default-button-bg-disabled": "#F6F7F9",
                "default-button-shadow": "none",
                "default-button-shadow-hover": "none",
                "default-button-shadow-active": "none"
            },
            captionColor: "#101013",
            defaultBtnBoxShadow: "none",
            defaultBtnBoxShadowHover: "none",
            defaultBtnBoxShadowActive: "none",
            apiKeyTableChooseBtnBoxShadow: "none",
            apiKeyTableChooseBtnBoxShadowHover: "none",
            apiKeyTableChooseBtnBoxShadowActive: "none",
            tabsTitleHoverColor: "#101013"
        }, eu = {
            module_show: {
                reportType: "reportEventClick",
                eventId: "d111512",
                text: "STEP2\u7684\u5C55\u5F00\u6B21\u6570",
                match: function (M) {
                    var e;
                    return (null == M || null == (e = M.categories) ? void 0 : e.step) === "step2"
                }
            },
            create_api_key_btn: {reportType: "reportEventClick", eventId: "d111510", text: "\u521B\u5EFAAPI KEY"},
            copy_api_key_btn: {
                reportType: "reportEventClick",
                eventId: "d111511",
                text: "\u70B9\u51FBAPIkey\u9009\u62E9\u5E76\u590D\u5236"
            },
            finish_inference_call_btn: {
                reportType: "reportEventClick",
                eventId: "d111798",
                text: "\u70B9\u51FB\u5B9E\u540D\u8BA4\u8BC1\u6309\u94AE"
            },
            real_name_auth_success: {
                reportType: "reportCustom",
                eventId: "d111514",
                text: "\u5B9E\u540D\u8BA4\u8BC1\u6210\u529F"
            },
            open_model_btn: {
                reportType: "reportEventClick",
                eventId: "d111516",
                text: "\u70B9\u51FB\u5F00\u901A\u6A21\u578B\u6309\u94AE"
            },
            open_all_models_btn: {
                reportType: "reportEventClick",
                eventId: "d111515",
                text: "\u70B9\u51FB\u4E00\u952E\u5F00\u901A\u6A21\u578B\u6309\u94AE"
            },
            open_model_success: {
                reportType: "reportCustom",
                eventId: "d111518",
                text: "\u5F00\u901A\u6A21\u578B\u6210\u529F"
            },
            copy_example_code_btn: {
                reportType: "reportEventClick",
                eventId: "d111519",
                text: "\u70B9\u51FB\u590D\u5236\u4EE3\u7801\u6309\u94AE"
            },
            complete_calling_guide_btn: {
                reportType: "reportEventClick",
                eventId: "d111520",
                text: "\u8DF3\u8F6C\u6587\u6863\u67E5\u770B"
            }
        }, eN = function (M) {
            var e, t, n, a, c, N, D, l, j, g, z = (0, r._)((0, I.useState)(null), 2), y = z[0], A = z[1],
                T = (l = (n = (t = (0, I.useContext)(i.Il)).profile, a = t.doubaoUser, D = {
                    isLogin: N = (c = Number((null == n || null == (e = n.Account) ? void 0 : e.Id) || (null == n ? void 0 : n.Id) || 0)) > 0,
                    accountId: N ? String((null == a ? void 0 : a.AccountId) || c) : ""
                }).accountId, j = D.isLogin, g = (0, I.useCallback)(function () {
                    return {
                        realNameAuthScenario: "ai-hub",
                        runtime: {accountId: l, region: "cn-beijing", env: "prod", flavor: "volc", locale: "zh"},
                        theme: ec,
                        region: {isEnglish: !1, isByteplus: !1, isVolc: !0, isEU: !1, topRegion: "cn-beijing"},
                        tracker: {
                            sendEvent: function (M, e) {
                                if ("undefined" != typeof window) {
                                    var t = eu[M];
                                    if (t && (!t.match || t.match(e))) return S.Fz(t.reportType, t.eventId, {text: t.text})
                                }
                            }
                        },
                        isLogin: function () {
                            return j
                        },
                        onCreateEndpoint: function (M) {
                            var e = M.path;
                            e && (window.location.href = e)
                        },
                        onApiKeyChanged: function () {
                        }
                    }
                }, [l, j]), (0, I.useMemo)(function () {
                    return g()
                }, [g]));
            if ((0, I.useEffect)(function () {
                var M = !1;
                if ("undefined" != typeof window) return ea().then(function (e) {
                    M || A(e)
                }), function () {
                    M = !0
                }
            }, []), !y) return null;
            var s = y.QuickApiAccessDrawerProvider, d = y.QuickApiAccessDrawer;
            return (0, o.jsx)(s, {value: T, children: (0, o.jsx)(d, (0, u._)({}, M))})
        }, eD = function (M) {
            var e = M.children;
            return (0, I.useEffect)(function () {
                "undefined" != typeof window && ea()
            }, []), (0, o.jsx)(o.Fragment, {children: e})
        };
        t(35133);
        var er = t(50091), el = {
            mobilePcOnlyMask: "mobilePcOnlyMask-l_sQ",
            mobilePcOnlyModal: "mobilePcOnlyModal-s240",
            mobilePcOnlyHeader: "mobilePcOnlyHeader-ud34",
            mobilePcOnlyClose: "mobilePcOnlyClose-ScXf",
            mobilePcOnlyContent: "mobilePcOnlyContent-JVs4",
            mobilePcOnlyLinkBox: "mobilePcOnlyLinkBox-rFHg",
            mobilePcOnlyFooter: "mobilePcOnlyFooter-PE1Y",
            mobilePcOnlyCopyButton: "mobilePcOnlyCopyButton-g8Vi"
        }, eo = function () {
            return (0, o.jsx)("svg", {
                viewBox: "0 0 20 20",
                "aria-hidden": "true",
                focusable: "false",
                children: (0, o.jsx)("path", {d: "m6 6 8 8M14 6l-8 8"})
            })
        }, eI = function (M) {
            var e = M.currentUrl, t = M.show, n = M.onClose, i = M.title, a = M.content, u = M.blockScroll,
                N = void 0 === u || u;
            return ((0, I.useEffect)(function () {
                if (t && N && "undefined" != typeof document) {
                    var M = document.body.style.overflow;
                    return document.body.style.overflow = "hidden", function () {
                        document.body.style.overflow = M
                    }
                }
            }, [t, N]), t) ? (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)("button", {
                    className: el.mobilePcOnlyMask,
                    type: "button",
                    "aria-label": "\u5173\u95ED\u63D0\u793A",
                    onClick: n
                }), (0, o.jsxs)("section", {
                    className: el.mobilePcOnlyModal,
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": "console-mobile-pc-only-title",
                    "data-monitor-comp-id": "c111531",
                    children: [(0, o.jsxs)("header", {
                        className: el.mobilePcOnlyHeader,
                        children: [(0, o.jsx)("span", {
                            id: "console-mobile-pc-only-title",
                            children: void 0 === i ? "\u6E29\u99A8\u63D0\u793A" : i
                        }), (0, o.jsx)("button", {
                            className: el.mobilePcOnlyClose,
                            type: "button",
                            "aria-label": "\u5173\u95ED\u63D0\u793A",
                            onClick: n,
                            "data-monitor-click-id": "d111535",
                            children: (0, o.jsx)(eo, {})
                        })]
                    }), (0, o.jsx)("div", {
                        className: el.mobilePcOnlyContent,
                        children: void 0 === a ? "AI Hub \u63A7\u5236\u53F0\u76EE\u524D\u6682\u4E0D\u652F\u6301\u79FB\u52A8\u7AEF\u4F53\u9A8C\uFF0C\u8BF7\u590D\u5236\u4EE5\u4E0B\u94FE\u63A5\u524D\u5F80\u7535\u8111\u7AEF\u8FDB\u884C\u4F53\u9A8C\u3002" : a
                    }), (0, o.jsx)("div", {className: el.mobilePcOnlyLinkBox, children: e}), (0, o.jsx)("div", {
                        className: el.mobilePcOnlyFooter, children: (0, o.jsx)("button", {
                            className: el.mobilePcOnlyCopyButton, type: "button", onClick: function () {
                                (0, c._)(function () {
                                    return (0, l._)(this, function (M) {
                                        switch (M.label) {
                                            case 0:
                                                return M.trys.push([0, 2, , 3]), [4, (0, c._)(function () {
                                                    var M, t, n;
                                                    return (0, l._)(this, function (i) {
                                                        switch (i.label) {
                                                            case 0:
                                                                if (!("undefined" != typeof navigator && (null == (M = navigator.clipboard) ? void 0 : M.writeText))) return [3, 2];
                                                                return [4, navigator.clipboard.writeText(e)];
                                                            case 1:
                                                                return i.sent(), [2];
                                                            case 2:
                                                                if ("undefined" == typeof document) throw Error("document is not available");
                                                                if ((t = document.createElement("textarea")).value = e, t.setAttribute("readonly", "true"), t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.opacity = "0", document.body.appendChild(t), t.focus(), t.select(), n = document.execCommand.call(document, "copy"), document.body.removeChild(t), !n) throw Error("execCommand copy failed");
                                                                return [2]
                                                        }
                                                    })
                                                })()];
                                            case 1:
                                                return M.sent(), er.v.success({content: "\u590D\u5236\u6210\u529F\uFF01"}), [3, 3];
                                            case 2:
                                                return console.warn("[console] copy mobile pc only link failed:", M.sent()), er.v.error({content: "\u590D\u5236\u5931\u8D25\uFF01"}), [3, 3];
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })()
                            }, "data-monitor-click-id": "d111537", children: "\u590D\u5236\u94FE\u63A5"
                        })
                    })]
                })]
            }) : null
        }
    }, 97205: function (M, e, t) {
        t.d(e, {
            _: function () {
                return D
            }
        });
        var n = t(44023), i = t(3149), a = t(82111), c = t(23144), u = t(98546);
        t(96013), t(62881), t(36863), t(12924), t(91813), t(77599), t(3851), t(61762), t(5264);
        var N = t(48417), D = function (M) {
            var e = M.request;
            return (0, n._)(function () {
                var M, t, n, D;
                return (0, u._)(this, function (u) {
                    switch (u.label) {
                        case 0:
                            var r;
                            if (u.trys.push([0, 2, , 3]), r = {}, e.headers.forEach(function (M, e) {
                                r[e] = M
                            }), "1" === (M = r)["x-use-fallback"]) return [2, {_CSR: !0, data: N.df}];
                            return [4, Promise.all([(0, N.an)(M), (0, N.ar)(M)])];
                        case 1:
                            if (n = (t = c._.apply(void 0, [u.sent(), 2]))[0], D = t[1], !n) return [2, {data: null}];
                            return [2, {data: (0, a._)((0, i._)({}, n), {abTestInfo: D})}];
                        case 2:
                            return console.error("[home] SSR loader error, fallback to CSR:", u.sent()), [2, {
                                _CSR: !0,
                                data: N.df
                            }];
                        case 3:
                            return [2]
                    }
                })
            })()
        }
    }, 82719: function (M, e, t) {
        t.d(e, {
            _: function () {
                return r
            }
        });
        var n = t(44023), i = t(3149), a = t(98546), c = t(54006);
        t(91813);
        var u = t(94971);

        function N(M) {
            console.error("[ai][volcf] load volcfData failed", M)
        }

        var D = function (M) {
            var e = M.request;
            return (0, n._)(function () {
                var M, t;
                return (0, a._)(this, function (n) {
                    switch (n.label) {
                        case 0:
                            return n.trys.push([0, 2, , 3]), [4, u.z({headers: e.headers}, N)];
                        case 1:
                            return t = !(M = n.sent()), [2, {volcfData: M, volcfLoadError: t}];
                        case 2:
                            return N(n.sent()), [2, {volcfData: null, volcfLoadError: !0}];
                        case 3:
                            return [2]
                    }
                })
            })()
        }, r = function (M) {
            return (0, n._)(function () {
                var e, t;
                return (0, a._)(this, function (n) {
                    switch (n.label) {
                        case 0:
                            return [4, (0, c.Kf)(M)];
                        case 1:
                            return e = n.sent(), [4, D(M)];
                        case 2:
                            return t = n.sent(), [2, (0, i._)({}, e, t)]
                    }
                })
            })()
        }
    }, 30423: function (M, e, t) {
        t.d(e, {
            _: function () {
                return D
            }
        });
        var n = t(44023), i = t(98546);
        t(91813);
        var a = t(8536), c = t(76693), u = t(68244), N = (0, c.dU)(), D = function (M) {
            return (0, n._)(function () {
                return (0, i._)(this, function (M) {
                    switch (M.label) {
                        case 0:
                            return M.trys.push([0, 2, , 3]), [4, (0, n._)(function () {
                                var M;
                                return (0, i._)(this, function (e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, (0, n._)(function () {
                                                var M;
                                                return (0, i._)(this, function (e) {
                                                    switch (e.label) {
                                                        case 0:
                                                            M = N === c.tE.BOE || N === c.tE.STABLE ? "https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_950/bee_prod_950_bee_publish_17355.json" : "https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_950/bee_prod_950_bee_publish_17393.json", e.label = 1;
                                                        case 1:
                                                            return e.trys.push([1, 3, , 4]), [4, (0, a.WY)(M)];
                                                        case 2:
                                                            return [2, e.sent()];
                                                        case 3:
                                                            return console.error("[model] getModelPageData error, fallback to default:", e.sent()), [2, {
                                                                modelPageInfo: {
                                                                    title: "\u6A21\u578B\u5E7F\u573A",
                                                                    textSub: "\u6C47\u805A\u5168\u6808\u524D\u6CBF AI \u6A21\u578B\uFF0C\u4E00\u7AD9\u5F0F\u8D4B\u80FD\u4E1A\u52A1\uFF0C\u52A9\u529B\u5F00\u53D1\u8005\u9AD8\u6548\u642D\u5EFA\u667A\u80FD\u5E94\u7528",
                                                                    promos: [],
                                                                    modelSections: u.yY
                                                                }
                                                            }];
                                                        case 4:
                                                            return [2]
                                                    }
                                                })
                                            })()];
                                        case 1:
                                            return [2, {
                                                data: {
                                                    modelPageInfo: null == (M = e.sent()) ? void 0 : M.modelPageInfo,
                                                    squareBenefitPromo: null == M ? void 0 : M.squareBenefitPromo,
                                                    notIncludedThePlan: null == M ? void 0 : M.notIncludedThePlan
                                                }
                                            }]
                                    }
                                })
                            })()];
                        case 1:
                            return [2, M.sent()];
                        case 2:
                            return console.error("[model] SSR loader error, fallback to CSR:", M.sent()), [2, {_CSR: !0}];
                        case 3:
                            return [2]
                    }
                })
            })()
        }
    }, 71089: function (M, e, t) {
        t.d(e, {
            _: function () {
                return n
            }
        });
        var n = function () {
            return null
        }
    }, 99609: function () {
        window.__assetPrefix__ = "//portal.volccdn.com/obj/volcfe-scm/ai"
    }
}, function (M) {
    var e = function (e) {
        return M(M.s = e)
    };
    M.O(0, ["2118", "22072", "43361", "58019", "67271", "72126"], function () {
        return e(99609), e(46160)
    }), M.O()
}]);