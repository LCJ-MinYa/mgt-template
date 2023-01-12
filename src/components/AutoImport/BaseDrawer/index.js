import Vue from 'vue';
import DrawerVue from './index.vue';

const DrawerConstructor = Vue.extend(DrawerVue);

let instance = null;

const initData = function (component, options = {}) {
    options = Object.assign({}, Drawer.defaults, options);
    options.mainComponent = component;
    options.mainProps = options.props || {};
    delete options.props; // unbind options props
    return options;
};

// Open current instance or create one
function Drawer(component, options) {
    if (instance) {
        Object.assign(instance.$data, initData(component, options));
        setTimeout(() => {
            instance.visible = true;
        });
    } else {
        instance = new DrawerConstructor({
            el: document.createElement('div'),
            data: initData(component, options),
        });
        instance.$mount();
        document.body.appendChild(instance.$el);
        Vue.nextTick(() => {
            instance.visible = true;
        });
    }
    return instance;
}

Drawer.defaults = {};

Drawer.close = function () {
    if (instance) {
        instance.visible = false;
    }
};

Drawer.setDefaults = function (options) {
    Drawer.defaults = { ...options };
};

export default Drawer;
