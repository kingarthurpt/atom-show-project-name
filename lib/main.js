'use babel';

export default {
    name: null,
    element: null,
    nameSelector: '.atom-dock-content-wrapper.left .tool-panel.tree-view .project-root-header span',
    elementSelector: '.atom-dock-inner.left ul.tab-bar li.tab div.title',

    activate(state) {
        var self = this;
        this.name = document.querySelector(this.nameSelector);
        this.element = document.querySelector(this.elementSelector);
        if (this.element !== null && this.name !== null) {
            this.element.innerHTML = this.element.innerHTML + ": " + this.name.innerText;
        } else {
            setTimeout(function() {
                self.activate(state);
            }, 500);
        }
    },
};
