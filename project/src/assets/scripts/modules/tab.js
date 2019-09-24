const tab = (container) => {

  let tab = document.querySelector(container);

  tab
    .querySelector('.tab-controls')
    .insertAdjacentHTML('beforeend', '<span class="tab-trigger"></span>');

  let tabTrigger = tab.querySelector('.tab-trigger');
  let tabControls = tab.querySelectorAll('.tab-control');
  let tabItems = tab.querySelectorAll('.tab-item');

  tabControls.forEach(function (control, index) {
    //set tabindex
    control.setAttribute('tabindex', index);

    //set active class first item
    if (index == 0) {
      control.classList.add('active');

      tabTrigger.style.cssText = `width: ${control.offsetWidth}px;`;
    }

    control.addEventListener('click', (event) => {
      let elem = event.currentTarget;

      tabTrigger.style.cssText = `
          left: ${elem.offsetLeft}px;
          width: ${elem.offsetWidth}px;
        `;

      tab.querySelector('.tab-control.active').classList.remove('active');
      tab.querySelector('.tab-item.active').classList.remove('active');

      elem.classList.add('active');

      let activeTabItem = tab.querySelector(`.tab-item[tabindex="${elem.getAttribute('tabindex')}"]`);

      activeTabItem.classList.add('active')
      activeTabItem.style.opacity = 0;

      let opacity = 0;
      let timer = setInterval(function () {
        if (opacity >= 0.95) {
          clearInterval(timer);
        }
        opacity += 0.05;
        activeTabItem.style.opacity = opacity;
      }, 35);

      activeTabItem.style.cssText = `opacity: 1`;
    });
  });

  tabItems.forEach(function (item, index) {
    //set tabindex
    item.setAttribute('tabindex', index);
    //set active class first item
    if (index == 0) {
      item.classList.add('active');
    }
  });

};

export default tab;