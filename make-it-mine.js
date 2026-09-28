/* Make it mine: one tap way for a business owner to say "I want this site".
   Loaded by every demo with <script src="/make-it-mine.js" data-business="Business Name" defer></script>
   Change prices or contact details here and every demo updates. */
(function () {
  var S = document.currentScript;
  var BIZ = (S && S.getAttribute("data-business")) || document.title.split("|")[0].trim() || "your business";
  var PHONE = "+14122281969", PHONE_SHOW = "412-228-1969";
  var EMAIL = "jeremy.steffan@eyeintheskysolutions.com";
  var PRICE_OWN = "$750", PRICE_MONTH = "$50";
  var SLUG = location.pathname.replace(/^\/|\/$/g, "") || "home";

  function track(what) {
    try { if (window.goatcounter && window.goatcounter.count) window.goatcounter.count({ path: "make-it-mine/" + what + "/" + SLUG, title: "Make it mine: " + what + " (" + BIZ + ")", event: true }); } catch (e) {}
  }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }

  var smsBody = "Hey Jeremy! I saw the " + BIZ + " website demo and I want it.";
  var smsHref = "sms:" + PHONE + "?&body=" + encodeURIComponent(smsBody);
  var mailHref = "mailto:" + EMAIL + "?subject=" + encodeURIComponent("The " + BIZ + " website") + "&body=" + encodeURIComponent("Hey Jeremy,\n\nI saw the demo you built for " + BIZ + " and I'm interested.\n\n");

  var css = "" +
    ".eim-pill{position:fixed;right:16px;bottom:16px;z-index:2147483000;display:inline-flex;align-items:center;gap:8px;border:0;border-radius:999px;padding:12px 18px 12px 14px;background:#0f172a;color:#fff;font:700 15px/1 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;letter-spacing:.01em;box-shadow:0 10px 30px rgba(2,6,23,.35),0 0 0 1px rgba(255,255,255,.12) inset;cursor:pointer;opacity:0;transform:translateY(20px);pointer-events:none;transition:opacity .35s ease,transform .35s ease,bottom .35s ease}" +
    ".eim-pill.on{opacity:1;transform:none;pointer-events:auto}" +
    ".eim-pill:hover{background:#1e293b}" +
    ".eim-pill:focus-visible{outline:3px solid #60a5fa;outline-offset:3px}" +
    ".eim-pill svg{width:18px;height:18px;flex:none}" +
    ".eim-back{position:fixed;inset:0;z-index:2147483001;background:rgba(2,6,23,.55);display:flex;align-items:center;justify-content:center;padding:16px;opacity:0;transition:opacity .25s ease}" +
    ".eim-back.on{opacity:1}" +
    ".eim-card{position:relative;width:100%;max-width:420px;background:#fff;color:#0f172a;border-radius:20px;padding:24px 22px 20px;font:400 15px/1.5 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;box-shadow:0 30px 80px rgba(2,6,23,.45);transform:translateY(16px);transition:transform .3s ease;text-align:left}" +
    ".eim-back.on .eim-card{transform:none}" +
    ".eim-card *{box-sizing:border-box}" +
    ".eim-k{font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#64748b;margin:0 0 6px}" +
    ".eim-h{font-size:22px;line-height:1.2;font-weight:800;margin:0 0 8px;color:#0f172a}" +
    ".eim-p{margin:0 0 16px;color:#334155}" +
    ".eim-prices{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0 0 18px}" +
    ".eim-price{border:1px solid #e2e8f0;border-radius:14px;padding:12px}" +
    ".eim-price b{display:block;font-size:22px;line-height:1.1;font-weight:800;color:#0f172a}" +
    ".eim-price b small{font-size:13px;font-weight:700;color:#475569}" +
    ".eim-price span{display:block;font-size:13px;color:#475569;margin-top:4px;line-height:1.35}" +
    ".eim-btns{display:grid;gap:8px}" +
    ".eim-btn{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;border-radius:12px;padding:14px;font-weight:700;font-size:16px;text-decoration:none;border:1px solid #cbd5e1;color:#0f172a;background:#fff}" +
    ".eim-btn:hover{border-color:#0f172a}" +
    ".eim-btn.main{background:var(--acc,#0f172a);border-color:transparent;color:#fff}" +
    ".eim-btn.main:hover{filter:brightness(1.08)}" +
    ".eim-row{display:grid;grid-template-columns:1fr 1fr;gap:8px}" +
    ".eim-fine{margin:14px 0 0;font-size:12.5px;color:#64748b;text-align:center}" +
    ".eim-x{position:absolute;top:10px;right:10px;width:36px;height:36px;border:0;border-radius:50%;background:#f1f5f9;color:#0f172a;font-size:20px;line-height:1;cursor:pointer}" +
    ".eim-x:focus-visible,.eim-btn:focus-visible{outline:3px solid #60a5fa;outline-offset:2px}" +
    "@media (max-width:560px){.eim-back{align-items:flex-end;padding:0}.eim-card{max-width:none;border-radius:20px 20px 0 0;padding-bottom:calc(20px + env(safe-area-inset-bottom,0px))}.eim-pill{right:14px}}" +
    "@media (prefers-reduced-motion:reduce){.eim-pill,.eim-back,.eim-card{transition:none}}";

  function init() {
    if (document.querySelector(".eim-pill")) return;
    var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

    var pill = document.createElement("button");
    pill.type = "button"; pill.className = "eim-pill";
    pill.setAttribute("aria-haspopup", "dialog");
    pill.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#fb7185" d="M12 21s-7.5-4.6-9.6-9.3C1 8.4 3.1 4.5 6.9 4.5c2.1 0 3.6 1.1 5.1 2.9 1.5-1.8 3-2.9 5.1-2.9 3.8 0 5.9 3.9 4.5 7.2C19.5 16.4 12 21 12 21z"/></svg>Love it? Make it mine';
    document.body.appendChild(pill);

    // keep clear of a demo's own sticky call bar on phones
    var bar = document.querySelector(".mcall");
    function place() {
      var lift = 16;
      if (bar) { var cs = getComputedStyle(bar); if (cs.display !== "none" && bar.classList.contains("show")) lift = bar.offsetHeight + 14 + 12; }
      pill.style.bottom = "calc(" + lift + "px + env(safe-area-inset-bottom,0px))";
    }
    var shown = false;
    function reveal() { if (shown) return; shown = true; pill.classList.add("on"); }
    function onScroll() { place(); if ((window.scrollY || 0) > 500) reveal(); }
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", place);
    setTimeout(reveal, 7000);
    place();

    var back = null, lastFocus = null;
    function open() {
      track("opened");
      lastFocus = document.activeElement;
      back = document.createElement("div");
      back.className = "eim-back";
      back.innerHTML =
        '<div class="eim-card" role="dialog" aria-modal="true" aria-labelledby="eim-h">' +
        '<button type="button" class="eim-x" aria-label="Close">&times;</button>' +
        '<p class="eim-k">Demo by Eye in the Sky Solutions</p>' +
        '<h2 class="eim-h" id="eim-h">Want this site for ' + esc(BIZ) + '?</h2>' +
        '<p class="eim-p">I&rsquo;ll build the real one exactly how you want it. You don&rsquo;t pay a thing until you&rsquo;ve seen the finished site and signed off on it.</p>' +
        '<div class="eim-prices">' +
          '<div class="eim-price"><b>' + PRICE_OWN + '</b><span>One time. You own it outright.</span></div>' +
          '<div class="eim-price"><b>' + PRICE_MONTH + '<small>/mo</small></b><span>I host it and handle any updates you need.</span></div>' +
        '</div>' +
        '<div class="eim-btns">' +
          '<a class="eim-btn main" data-w="text" href="' + esc(smsHref) + '">Text Jeremy</a>' +
          '<div class="eim-row"><a class="eim-btn" data-w="call" href="tel:' + PHONE + '">Call</a><a class="eim-btn" data-w="email" href="' + esc(mailHref) + '">Email</a></div>' +
        '</div>' +
        '<p class="eim-fine">Jeremy Steffan &middot; ' + PHONE_SHOW + ' &middot; Orlando, FL</p>' +
        '</div>';
      document.body.appendChild(back);
      requestAnimationFrame(function () { back.classList.add("on"); });
      back.addEventListener("click", function (e) {
        if (e.target === back || e.target.closest(".eim-x")) { close(); return; }
        var a = e.target.closest("a[data-w]"); if (a) track(a.getAttribute("data-w"));
      });
      document.addEventListener("keydown", onKey);
      var x = back.querySelector(".eim-x"); if (x) x.focus();
    }
    function close() {
      if (!back) return;
      var b = back; back = null; b.classList.remove("on");
      setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); }, 260);
      document.removeEventListener("keydown", onKey);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    function onKey(e) { if (e.key === "Escape") close(); }
    pill.addEventListener("click", open);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
