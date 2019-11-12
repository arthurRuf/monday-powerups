// document.body.style.border = "2px solid blue";

setTimeout(function() {
  // document.getElementsByClassName("board-header-content-wrapper")[0].remove();
  var iconsList = document.getElementsByClassName("filter-buttons-wrapper")[0];

  var itemComponent = document
    .createElement("div");
  var itemWrapper = document
    .createElement("div");
  var itemContent = document
    .createElement("div");
  var icon = document
    .createElement("i");
  // itemContent.innerText = ("^");

  itemComponent.className = "board-filter-item-component";
  itemWrapper.className = "board-filter-item-content-wrapper";
  itemContent.className = "board-filter-item-content without-additional-data";
  icon.className = "icon icon-v2-fullscreen";

  itemContent.addEventListener("click", function() {
    document.getElementsByClassName("board-header-content-wrapper")[0].remove();
  });

  itemContent.appendChild(icon);
  itemWrapper.appendChild(itemContent);
  itemComponent.appendChild(itemWrapper);
  iconsList.appendChild(itemComponent);
}, 5000);
