(function() {
  function closeMenus(exceptMenu) {
    (document.querySelector("[data-signals-d3-visualisation]") || document).querySelectorAll(".select-menu.open").forEach(menu => {
      if (menu !== exceptMenu) {
        menu.classList.remove("open");
      }
    });
  }

  window.createCustomSelect = function(config) {
    const root = document.getElementById(config.rootId);
    const button = document.getElementById(config.buttonId);
    const selectedText = document.getElementById(config.selectedId);
    const menu = document.getElementById(config.menuId);

    if (!root || !button || !selectedText || !menu) return null;

    const options = Array.from(menu.querySelectorAll(".select-option"));
    let value = config.initialValue || options.find(option => option.classList.contains("selected"))?.dataset.value;

    function choose(option) {
      value = option.dataset.value;
      selectedText.textContent = option.querySelector(".option-label").textContent;
      options.forEach(item => item.classList.toggle("selected", item === option));
      menu.classList.remove("open");

      if (typeof config.onChange === "function") {
        config.onChange(value);
      }
    }

    button.setAttribute("aria-haspopup", "listbox");
    button.setAttribute("aria-expanded", "false");
    menu.setAttribute("role", "listbox");
    options.forEach(option => {
      option.setAttribute("role", "option");
      option.setAttribute("tabindex", "0");
      option.setAttribute("aria-selected", option.classList.contains("selected") ? "true" : "false");
    });

    button.addEventListener("click", event => {
      event.stopPropagation();
      const nextOpen = !menu.classList.contains("open");
      closeMenus(menu);
      menu.classList.toggle("open", nextOpen);
      button.setAttribute("aria-expanded", String(nextOpen));
    });

    options.forEach(option => {
      option.addEventListener("click", event => {
        event.stopPropagation();
        choose(option);
        options.forEach(item => {
          item.setAttribute("aria-selected", item === option ? "true" : "false");
        });
        button.setAttribute("aria-expanded", "false");
      });

      option.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          option.click();
        }
      });
    });

    document.addEventListener("click", () => {
      menu.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
    });

    root.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        menu.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
        button.focus();
      }
    });

    return {
      getValue: () => value,
      setValue: nextValue => {
        const option = options.find(item => item.dataset.value === nextValue);
        if (option) choose(option);
      }
    };
  };
})();
