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

  function card(i) {
    const curio = i.curiosidades && i.curiosidades.length
      ? `<div class="box curio"><b>Curiosidades</b><ul>${i.curiosidades.map(c => `<li>${esc(c)}</li>`).join("")}</ul></div>` : "";
    const tags = [
      i.cat ? `<span class="tag">${catLabel[i.cat]}</span>` : "",
      i.tipo ? `<span class="tag">${esc(i.tipo)}</span>` : "",
      i.naoRecomendo ? `<span class="tag no">Não recomendo</span>` : ""
    ].join("");
    return `<article class="card" id="item-${i.id}">
      <div class="ph">${i.foto ? `<img src="${esc(i.foto)}" alt="${esc(i.nome)}" loading="lazy">` : i.emoji || "📍"}</div>
      <div class="body">
        <h3>${esc(i.nome)}</h3>
        <div class="meta">${stars(i.nota)}${tags}${i.preco ? `<span>💲 ${esc(i.preco)}</span>` : ""}</div>
        <p class="op">${esc(i.opiniao)}</p>
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
      <input class="search" type="search" placeholder="Buscar…" aria-label="Buscar">
      ${filters ? `<div class="chips">${filters.map(([k, l]) => `<button class="chip" data-f="${k}" aria-pressed="${k === f}">${l}</button>`).join("")}</div>` : ""}
      <div id="list"></div>
      <p class="note">Valores aproximados pesquisados em nov/2026. Confirme no site oficial antes de ir.</p>`;
    const list = app.querySelector("#list");
    const draw = () => {
      const res = items.filter(i =>
        (f === "todos" || i.cat === f || (f === "pendentes" && !done[i.id])) &&
        (!q || (i.nome + " " + i.opiniao + " " + (i.tipo || "")).toLowerCase().includes(q)));
      list.innerHTML = res.length ? res.map(card).join("") : `<p class="empty">Nada encontrado.</p>`;
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
    const total = all.length, feitos = all.filter(i => done[i.id]).length;
    app.innerHTML = `
      <div class="hero"><p>${esc(G.intro.conselho)}</p></div>
      <div class="progress">Você já visitou ${feitos} de ${total} sugestões
        <div class="bar"><i style="width:${total ? (feitos / total) * 100 : 0}%"></i></div></div>
      <div class="grid">
        <a class="tile" href="#roteiros"><span>🗺️</span><b>Roteiros</b><small>Lugares próximos, agrupados</small></a>
        <a class="tile" href="#lugares"><span>📍</span><b>Lugares</b><small>${G.lugares.length} passeios</small></a>
        <a class="tile" href="#comida"><span>🍽️</span><b>Comida</b><small>${G.comida.length} lugares</small></a>
        <a class="tile" href="#compras"><span>🛍️</span><b>Compras</b><small>${G.compras.length} lojas</small></a>
        <a class="tile" href="#dicas"><span>🚇</span><b>Transporte</b><small>Presto e como andar</small></a>
        <a class="tile" href="${esc(G.playlist.url)}" target="_blank" rel="noopener"><span>🎧</span><b>Playlist</b><small>Pra ouvir no trem</small></a>
      </div>`;
  }

  function roteiros() {
    app.innerHTML = `<p style="color:var(--muted);margin:4px 0 0">Lugares que ficam perto uns dos outros. Monta o dia como quiser!</p>` +
      G.roteiros.map(r => `<section class="route">
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
    lugares: () => listView(G.lugares, [["todos", "Todos"], ["citypass", "CityPASS"], ["gratis", "Grátis"], ["niagara", "Niagara"], ["pendentes", "Ainda não fui"]]),
    comida: () => listView(G.comida, [["todos", "Todos"], ["pendentes", "Ainda não fui"]]),
    compras: () => listView(G.compras, [["todos", "Todos"], ["pendentes", "Ainda não fui"]]),
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
  window.addEventListener("hashchange", render);
  render();

  if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});
})();
