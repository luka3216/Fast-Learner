window.addEventListener('load', () => {
  document.getElementById('area-substitute').style.height = document.getElementById('header-menu').clientHeight;
}
);
document.getElementById('wordpack-link').addEventListener('mouseover', () => {
  document.getElementById('top-bottom-panel').style.display = 'block';
  document.getElementById('area-substitute').style.height = document.getElementById('header-menu').clientHeight;

}
);
document.getElementById('header-menu').addEventListener('mouseleave', () => {
  document.getElementById('top-bottom-panel').style.display = 'none';
  document.getElementById('area-substitute').style.height = document.getElementById('header-menu').clientHeight;
}
);

