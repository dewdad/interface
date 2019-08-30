import PortalVue from 'portal-vue';
import { mapGetters } from 'vuex';
import VueNotifications from 'vue-notifications';
import iziToast from 'izitoast';
import Devise from './Devise.vue';
import DeviseStore from './vuex/store';
import DeviseBus from './event-bus';
import Image from './directives/image';
import Link from './directives/link';
import Messages from './components/utilities/Messages.vue'
import routes from './router/route.config';
import Slices from './components/slices/Slices.vue';

const EditPage = import(/* webpackChunkName: "devise-administration" */ './components/pages/Editor.vue')
const Help = import(/* webpackChunkName: "devise-administration" */ './components/utilities/Help.vue')
const alertConfirm = import(/* webpackChunkName: "devise-administration" */ './directives/alert-confirm')
const Tuck = import(/* webpackChunkName: "devise-administration" */ './directives/tuck')
const Installer = import(/* webpackChunkName: "devise-installer" */ './components/installer/Installer.vue')
const VueScrollactive = import(/* webpackChunkName: "devise-installer" */ 'vue-scrollactive')
const Vue2Scrollbar = require(/* webpackChunkName: "vue-scrollbar" */ 'vue2-scrollbar');

const DevisePlugin = {
  install (Vue, { store, router, bus, options }) {
    const startDevise = 'start-devise'
    performance.mark(startDevise);

    // Register tuck directive
    Vue.directive('tuck', Tuck);

    if (typeof store === 'undefined') {
      throw new Error('Please provide a vuex store.');
    }

    if (typeof router === 'undefined') {
      throw new Error('Please provide a vue router.');
    }

    // Set the devise route to Edit Page for any application routes
    // that aren't setup to take over the admin. This allows us to see the
    // page editor even if you are navigating around the application routes.
    router.options.routes.map(route => {
      if (!route.hasOwnProperty('components')) {
        route.components = {};
      }
      if (!route.components.hasOwnProperty('devise')) {
        route.components.devise = EditPage;
      }

      return route;
    });

    for (const route in routes) {
      if (routes.hasOwnProperty(route)) {
        const routeToCheck = routes[route];
        let canAdd = true;

        for (const customRoute in router.options.routes) {
          if (router.options.routes.hasOwnProperty(customRoute)) {
            const routeToCheckAgainst = router.options.routes[customRoute];
            if (routeToCheckAgainst.name === routeToCheck.name) {
              canAdd = false;
            }
          }
        }

        if (canAdd) {
          router.addRoutes([routeToCheck]);
        }
      }
    }

    if (typeof window.deviseSettings === 'undefined') {
      window.deviseSettings = () => { };
    }

    // If the bus isn't set we'll use our own bus
    if (typeof bus === 'undefined') {
      window.deviseSettings.$bus = DeviseBus;
    } else {
      window.deviseSettings.$bus = bus;
    }

    // Portals to render items outside of their component
    Vue.use(PortalVue);

    // Scrollactive 
    Vue.use(VueScrollactive);

    // Register global components

    Vue.component('devise', Devise);
    Vue.component('slices', Slices);
    Vue.component('messages', Messages);
    Vue.component('devise-installer', Installer);
    Vue.component('vue-scrollbar', Vue2Scrollbar);

    // Users Admin
    Vue.component('devise-user-create', () =>
      import(/* webpackChunkName: "devise-administration-users" */ './components/users/steps/Create.vue')
    );
    Vue.component('devise-user-edit', () =>
      import(/* webpackChunkName: "devise-administration-users" */ './components/users/steps/Edit.vue')
    );
    Vue.component('devise-user-delete', () =>
      import(/* webpackChunkName: "devise-administration-users" */ './components/users/steps/Delete.vue')
    );

    // Pages Admin
    Vue.component('devise-page-create', () =>
      import(/* webpackChunkName: "devise-administration-pages" */ './components/pages/steps/Create.vue')
    );
    Vue.component('devise-page-copy', () =>
      import(/* webpackChunkName: "devise-administration-pages" */ './components/pages/steps/Copy.vue')
    );
    Vue.component('devise-page-translate', () =>
      import(/* webpackChunkName: "devise-administration-pages" */ './components/pages/steps/Translate.vue')
    );
    Vue.component('devise-page-settings', () =>
      import(/* webpackChunkName: "devise-administration-pages" */ './components/pages/steps/EditSettings.vue')
    );
    Vue.component('devise-page-versions', () =>
      import(/* webpackChunkName: "devise-administration-pages" */ './components/pages/steps/EditVersions.vue')
    );
    Vue.component('devise-page-delete', () =>
      import(/* webpackChunkName: "devise-administration-pages" */ './components/pages/steps/Delete.vue')
    );

    // Sites Admin
    Vue.component('devise-site-create', () =>
      import(/* webpackChunkName: "devise-administration-sites" */ './components/sites/steps/Create.vue')
    );
    Vue.component('devise-site-edit', () =>
      import(/* webpackChunkName: "devise-administration-sites" */ './components/sites/steps/Edit.vue')
    );
    Vue.component('devise-site-delete', () =>
      import(/* webpackChunkName: "devise-administration-sites" */ './components/sites/steps/Delete.vue')
    );

    // Redirect Admin
    Vue.component('devise-redirect-create', () =>
      import(/* webpackChunkName: "devise-administration-redirects" */ './components/redirects/steps/Create.vue')
    );
    Vue.component('devise-redirect-edit', () =>
      import(/* webpackChunkName: "devise-administration-redirects" */ './components/redirects/steps/Edit.vue')
    );
    Vue.component('devise-redirect-delete', () =>
      import(/* webpackChunkName: "devise-administration-redirects" */ './components/redirects/steps/Delete.vue')
    );

    // Vue.component('Sidebar', Sidebar);

    if (typeof store.state.adminMenu !== 'undefined') {
      DeviseStore.state.adminMenu = Object.assign({}, store.state.adminMenu);
    }

    if (typeof store.state.settingsMenu !== 'undefined') {
      DeviseStore.state.settingsMenu = Object.assign({}, store.state.settingsMenu);
    }

    // Setup the currentPage and Sites arrays in the store b/c they are necessary in
    // some apps to be ready to go right away
    DeviseStore.state.currentPage = Object.assign(
      {},
      DeviseStore.state.currentPage,
      window.deviseSettings.$page
    );
    DeviseStore.state.sites = Object.assign({}, DeviseStore.state.sites, {
      data: window.deviseSettings.$sites,
    });

    // Register devise vuex module and sync it with the store
    store.registerModule('devise', DeviseStore);

    // Register image directive
    Vue.directive('devise-image', Image);

    // Register link directive
    Vue.directive('devise-link', Link);

    // Register link directive
    Vue.directive('devise-alert-confirm', alertConfirm);

    // Register Help component
    Vue.component('help', Help);

    const deviseOptions = Object.assign(
      {
        breakpoints: {
          mobile: 575,
          tablet: 768,
          desktop: 991,
          largeDesktop: 1199,
        },
      },
      options
    );

    // Register Messages
    function toast ({ title, message, type, timeout }) {
      if (type === VueNotifications.types.warn) type = 'warning';
      return iziToast[type]({ title, message, timeout });
    }

    const vueNotificationsOptions = {
      success: toast,
      error: toast,
      info: toast,
      warn: toast,
    };

    Vue.use(VueNotifications, vueNotificationsOptions);

    // For administration sidebars
    Vue.use(VueScrollactive);

    // enables passive event listeners by default for some events
    // require('default-passive-events');

    // We call Vue.mixin() here to inject functionality into all components.
    Vue.mixin({
      data () {
        return {
          deviseOptions
        };
      },
      notifications: {
        showSuccessMsg: {
          type: VueNotifications.types.success,
          title: 'Success',
          message: 'Your Request was successful',
        },
        showErrorMsg: {
          type: VueNotifications.types.error,
          title: 'Wow-wow',
          message: "That's the error",
        },
      },
      methods: {
        // Convienience method to push things into the router from templates
        goToPage (pageName, params) {
          this.$router.push({ name: pageName, params });
        },
        href (url) {
          window.open(url, '_self');
        },
        launchMediaManager (callbackObject, callbackProperty) {
          window.deviseSettings.$bus.$emit('devise-launch-media-manager', {
            callback (media) {
              callbackObject[callbackProperty] = media.url;
            },
          });
        },
        can (permission) {
          if (this.isLoggedIn) {
            const toCheck = !Array.isArray(permission) ? [permission] : permission;
            const allowed = window.deviseSettings.$user.permissions_list
              ? window.deviseSettings.$user.permissions_list
              : [];
            for (let i = 0; i < toCheck.length; i += 1) {
              const found = allowed.find(perm => perm === toCheck[i]);

              if (found) return true;
            }
          }
          return false
        },
      },
      computed: {
        ...mapGetters('devise', ['breakpoint', 'currentPage', 'currentUser', 'lang']),
        isLoggedIn () {
          return !!this.currentUser
        }
      },
      // This sets a prop to be accepted by all components in a custom Vue
      // app that resides within Devise. Makes it a little easier to pass
      // down any data to custom child components
      props: ['devise', 'slices', 'devise-models'],
      store,
    });

    if (
      window.deviseSettings.$config &&
      typeof window.deviseSettings.$config.mothership !== 'undefined' &&
      window.deviseSettings.$config.mothership !== null
    ) {
      store.commit('devise/setMothership', window.deviseSettings.$config.mothership);
    }

    if (
      window.deviseSettings.$config &&
      typeof window.deviseSettings.$config.layouts !== 'undefined'
    ) {
      store.commit('devise/setLayouts', window.deviseSettings.$config.layouts);
    }

    performance.measure("beginning of install to here", startDevise);
    console.log(performance.getEntriesByType("measure"));
  },
};

export default DevisePlugin;
