(function () {
  const G = window.GUIA;
  const app = document.getElementById("app");
  const all = [...G.lugares, ...G.comida, ...G.compras];
  const byId = Object.fromEntries(all.map(i => [i.id, i]));
  const sectionOf = id =>
    G.lugares.some(i => i.id === id) ? "lugares" : G.comida.some(i => i.id === id) ? "comida" : "compras";

  // ---- estado local (visitei) ----
  const KEY = "toronto-visitei";
  let done = {};
  try { done = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { done = {}; }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(done)); } catch (e) {} };

  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const stars = n => n ? `<span class="stars" aria-label="${n} de 5">${"★".repeat(n)}${"☆".repeat(5 - n)}</span>` : "";
  const mapsUrl = q => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
  const catLabel = { citypass: "CityPASS", gratis: "Grátis", niagara: "Niagara" };

  function card(i, n) {
    const curio = i.curiosidades && i.curiosidades.length
      ? `<div class="box curio"><b>Curiosidades</b><ul>${i.curiosidades.map(c => `<li>${esc(c)}</li>`).join("")}</ul></div>` : "";
    const tags = [
      i.cat ? `<span class="tag ${i.cat}">${catLabel[i.cat]}</span>` : "",
      i.tipo ? `<span class="tag">${esc(i.tipo)}</span>` : "",
      i.naoRecomendo ? `<span class="tag no">Não recomendo</span>` : ""
    ].join("");
    return `<article class="card" id="item-${i.id}">
      <div class="ph c${(n || 0) % 6}">${i.foto ? `<img src="${esc(i.foto)}" alt="${esc(i.nome)}" loading="lazy">` : i.emoji || "📍"}</div>
      ${i.credito ? `<div class="credito">Foto: <a href="${esc(i.credito.url)}" target="_blank" rel="noopener">${esc(i.credito.texto)}</a></div>` : ""}
      <div class="body">
        <h3>${esc(i.nome)}</h3>
        <div class="meta">${stars(i.nota)}${tags}${i.preco ? `<span>💲 ${esc(i.preco)}</span>` : ""}</div>
        ${i.opiniao ? `<p class="op">${esc(i.opiniao)}</p>` : ""}
        ${i.dica ? `<div class="box dica"><b>Dica</b>${esc(i.dica)}</div>` : ""}
        ${i.cupom ? `<div class="box cupom">🎟️ ${esc(i.cupom)}</div>` : ""}
        ${curio}
        ${i.endereco ? `<div class="addr">📍 ${esc(i.endereco)}</div>` : ""}
        <div class="actions">
          ${i.maps ? `<a class="btn" href="${mapsUrl(i.maps)}" target="_blank" rel="noopener">🧭 Abrir no Maps</a>` : ""}
          <button class="btn" data-done="${i.id}" aria-pressed="${!!done[i.id]}">${done[i.id] ? "✓ Fui!" : "Marcar como visitado"}</button>
        </div>
      </div>
    </article>`;
  }

  function listView(items, filters) {
    let q = "", f = "todos";
    app.innerHTML = `
      <input class="search" type="search" placeholder="Buscar" aria-label="Buscar">
      ${filters ? `<div class="chips">${filters.map(([k, l]) => `<button class="chip" data-f="${k}" aria-pressed="${k === f}">${l}</button>`).join("")}</div>` : ""}
      <div id="list"></div>
      <p class="note">Valores aproximados pesquisados em nov/2026. Confirme no site oficial antes de ir.</p>`;
    const list = app.querySelector("#list");
    const draw = () => {
      const res = items.filter(i =>
        (f === "todos" || i.cat === f) &&
        (!q || (i.nome + " " + i.opiniao + " " + (i.tipo || "")).toLowerCase().includes(q)));
      list.innerHTML = res.length ? res.map((x, n) => card(x, n)).join("") : `<p class="empty">Nada encontrado.</p>`;
    };
    app.querySelector(".search").addEventListener("input", e => { q = e.target.value.toLowerCase().trim(); draw(); });
    app.querySelectorAll(".chip").forEach(b => b.addEventListener("click", () => {
      f = b.dataset.f;
      app.querySelectorAll(".chip").forEach(x => x.setAttribute("aria-pressed", x === b));
      draw();
    }));
    draw();
  }

  function inicio() {
    const tiles = [
      ["#roteiros", "🗺️", "Roteiros", "Lugares pertinho um do outro", "c0"],
      ["#lugares", "📍", "Lugares", `${G.lugares.length} passeios`, "c1"],
      ["#comida", "🍽️", "Comida", `${G.comida.length} lugares`, "c3"],
      ["#compras", "🛍️", "Compras", `${G.compras.length} lojas`, "c2"],
      ["#dicas", "🚇", "Transporte", "Presto e como andar", "c4"],
      [G.playlist.url, "🎧", "Playlist", "Pra ouvir no trem", "c5"]
    ];
    app.innerHTML = `
      <div class="hero"><p>${esc(G.intro.conselho)}</p><div class="sig">com carinho, Gab 🍁</div></div>
      <div class="grid">${tiles.map(([h, e, t, s, c]) =>
        `<a class="tile ${c}" href="${esc(h)}"${h.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}><span>${e}</span><b>${t}</b><small>${s}</small></a>`).join("")}
      </div>`;
  }

  function roteiros() {
    app.innerHTML = `<p style="color:var(--muted);margin:4px 0 0">Lugares que ficam perto uns dos outros. Monta o dia como quiser!</p>` +
      G.roteiros.map((r, n) => `<section class="route r${n % 6}">
        <h3>${r.emoji} ${esc(r.titulo)}</h3><p>${esc(r.desc)}</p>
        <ol>${r.paradas.map(id => byId[id]).filter(Boolean).map(i =>
          `<li><a href="#${sectionOf(i.id)}/${i.id}">${esc(i.nome)}</a>${done[i.id] ? " ✓" : ""}</li>`).join("")}</ol>
        <div class="actions"><a class="btn" target="_blank" rel="noopener" href="${routeUrl(r)}">🧭 Ver rota no Maps</a></div>
      </section>`).join("");
  }
  function routeUrl(r) {
    const pts = [...new Set(r.paradas.map(id => byId[id]).filter(i => i && i.maps).map(i => i.maps))];
    if (pts.length < 2) return mapsUrl(pts[0] || r.titulo);
    const p = s => encodeURIComponent(s);
    return `https://www.google.com/maps/dir/?api=1&origin=${p(pts[0])}&destination=${p(pts[pts.length - 1])}` +
      (pts.length > 2 ? `&waypoints=${pts.slice(1, -1).map(p).join("%7C")}` : "") + "&travelmode=walking";
  }

  function dicas() {
    const t = G.transporte;
    app.innerHTML = `
      <h2>🚇 Transporte</h2>
      <div class="list"><p style="margin:10px 0 0">Meu cartão Presto (tem saldo!):</p>
        <div class="presto">${esc(t.presto)}</div>
        <ul>${t.itens.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
      <h2>💡 Dicas e curiosidades (úteis ou não)</h2>
      <div class="list"><ul>${G.dicas.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
      <h2>🎧 Música pra ouvir no trem</h2>
      <div class="list"><p>${esc(G.playlist.texto)}</p>
        <div class="actions" style="margin-bottom:12px"><a class="btn" href="${esc(G.playlist.url)}" target="_blank" rel="noopener">▶️ Abrir no Spotify</a></div></div>`;
  }

  const routes = {
    inicio,
    roteiros,
    lugares: () => listView(G.lugares, [["todos", "Todos"], ["citypass", "CityPASS"], ["gratis", "Grátis"], ["niagara", "Niagara"]]),
    comida: () => listView(G.comida),
    compras: () => listView(G.compras),
    dicas
  };
  const titles = { inicio: G.intro.titulo, roteiros: "Roteiros", lugares: "Lugares", comida: "Comida", compras: "Compras", dicas: "Dicas" };

  function render() {
    const [page, item] = (location.hash.slice(1) || "inicio").split("/");
    const r = routes[page] ? page : "inicio";
    routes[r]();
    document.getElementById("titulo").textContent = titles[r];
    document.getElementById("subtitulo").textContent = r === "inicio" ? G.intro.subtitulo : "";
    document.querySelectorAll("nav.tabs a").forEach(a => a.setAttribute("aria-current", a.getAttribute("href") === "#" + r ? "page" : "false"));
    if (item) { const el = document.getElementById("item-" + item); if (el) el.scrollIntoView({ block: "start" }); }
    else window.scrollTo(0, 0);
  }

  app.addEventListener("click", e => {
    const b = e.target.closest("[data-done]");
    if (!b) return;
    const id = b.dataset.done;
    done[id] = !done[id]; if (!done[id]) delete done[id];
    save();
    b.setAttribute("aria-pressed", !!done[id]);
    b.textContent = done[id] ? "✓ Fui!" : "Marcar como visitado";
  });
  // pop-up com o disclaimer antes de abrir a playlist
  const pop = document.createElement("dialog");
  pop.className = "pop";
  pop.innerHTML = `<h3>🎧 Antes de dar o play</h3>
    <p>${esc(G.playlist.texto)}</p>
    <div class="pedra">Só PE DRA DA</div>
    <div class="actions">
      <button class="btn" data-fechar type="button">Fechar</button>
      <a class="btn" href="${esc(G.playlist.url)}" target="_blank" rel="noopener" data-fechar>▶️ Abrir no Spotify</a>
    </div>`;
  document.body.appendChild(pop);
  pop.addEventListener("click", e => { if (e.target === pop || e.target.closest("[data-fechar]")) pop.close(); });
  document.addEventListener("click", e => {
    const a = e.target.closest("a[href]");
    if (!a || a.closest("dialog") || a.getAttribute("href") !== G.playlist.url || !pop.showModal) return;
    e.preventDefault();
    pop.showModal();
  });
  window.addEventListener("hashchange", render);
  render();

  if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});
})();
