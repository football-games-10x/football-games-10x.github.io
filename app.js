
const grid = document.getElementById("gameGrid");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
const gameCount = document.getElementById("gameCount");

function gameCard(game){
  const href = "game.html?g=" + encodeURIComponent(game.url);
  return `
    <a class="card" href="${href}">
      <div class="thumb">
        <img src="${game.image}" alt="${game.name} Unblocked" loading="lazy">
      </div>
      <div class="card-body">
        <div class="card-title">${game.name}</div>
        <div class="card-sub">Play Unblocked</div>
      </div>
    </a>
  `;
}

function render(list){
  grid.innerHTML = list.map(gameCard).join("");
  emptyState.style.display = list.length ? "none" : "block";
}

if(gameCount) gameCount.textContent = games.length;

render(games);

searchInput.addEventListener("input", function(){
  const q = this.value.toLowerCase().trim();

  const filtered = games.filter(g =>
    g.name.toLowerCase().includes(q)
  );

  render(filtered);
});
