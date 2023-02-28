document.addEventListener('DOMContentLoaded', () => {
  let openNewTab = document.getElementById('checkbox-open-new-tab');
  if (localStorage.getItem('open_new_tab') === 'true') {
    openNewTab.checked = true;
    tableSetTarget(true);
  } else if (localStorage.getItem('open_new_tab') === 'false') {
    openNewTab.checked = false;
    tableSetTarget(false);
  } else {
    // default
    openNewTab.checked = true;
  }
});

function onOpenNewTabCheck(e) {
  let openNewTab = e.checked;
  tableSetTarget(openNewTab);
  localStorage.setItem('open_new_tab', openNewTab);
}

function tableSetTarget(openNewTab) {
  let table = document.querySelectorAll("table tr td a");
  for (let x of table) {
    x.target = `${openNewTab ? '_blank' : '_self'}`;
  }
}