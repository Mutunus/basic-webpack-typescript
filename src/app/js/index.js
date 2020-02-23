import _ from 'lodash';
import { Store } from './store'
import './../styles/styles.css'

console.log('%cGIVE ME A JOB', "font-weight: bold; font-size:50px; color: blue")

const store = new Store();


const setActiveTab = (tab) => {

    console.log(tab)

    removeEl(store.activeTab)
    addEl('main', 'p', tab, store.textOptionsDict[tab], 'scale-in-center')
    store.activeTab = tab;
}

const addEl = (parentId, elementTag, elementId, html, classes) => {
    const parentNode = document.getElementById(parentId);
    const newElement = document.createElement(elementTag);

    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    newElement.classList.add(classes)
    parentNode.appendChild(newElement);
}

const removeEl = (elementId) => {
    const element = document.getElementById(elementId);

    element.parentNode.removeChild(element);
}

document.addEventListener("DOMContentLoaded", () => {
    addEl('main', 'p', 'about', store.textOptionsDict['about'], 'scale-in-center')
  });
