document.addEventListener('DOMContentLoaded', () => {
  let new_tab_checkbox = document.getElementById('new-tab-checkbox');
  if (localStorage.getItem('open_new_tab') === 'true') {
    new_tab_checkbox.checked = true;
    table_set_target(true);
  } else if (localStorage.getItem('open_new_tab') === 'false') {
    new_tab_checkbox.checked = false;
    table_set_target(false);
  } else {
    // default
    new_tab_checkbox.checked = true;
  }
});

function on_new_tab_checkbox(e) {
  open_new_tab = e.checked;
  table_set_target(open_new_tab);
  localStorage.setItem('open_new_tab', open_new_tab);
}

function table_set_target(open_new_tab) {
  let table = document.querySelectorAll("table tr td a");
  for (let x of table) {
    x.target = `${open_new_tab ? '_blank' : '_self'}`;
  }
}