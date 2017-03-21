SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "hot-reloader-error-recovery/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.21",
      "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.23.0",
      "fs": "npm:jspm-nodelibs-fs@0.2.0",
      "process": "npm:jspm-nodelibs-process@0.2.0",
      "path": "npm:jspm-nodelibs-path@0.2.1",
      "systemjs-hot-reloader": "npm:systemjs-hot-reloader@1.1.0"
    },
    "packages": {
      "npm:babel-plugin-transform-react-jsx@6.23.0": {
        "map": {
          "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
          "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.23.0",
          "babel-runtime": "npm:babel-runtime@6.23.0"
        }
      },
      "npm:babel-helper-builder-react-jsx@6.23.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.23.0",
          "esutils": "npm:esutils@2.0.2",
          "babel-types": "npm:babel-types@6.23.0",
          "lodash": "npm:lodash@4.17.4"
        }
      },
      "npm:babel-runtime@6.23.0": {
        "map": {
          "core-js": "npm:core-js@2.4.1",
          "regenerator-runtime": "npm:regenerator-runtime@0.10.3"
        }
      },
      "npm:babel-types@6.23.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.23.0",
          "esutils": "npm:esutils@2.0.2",
          "lodash": "npm:lodash@4.17.4",
          "to-fast-properties": "npm:to-fast-properties@1.0.2"
        }
      },
      "npm:systemjs-hot-reloader@1.1.0": {
        "map": {
          "systemjs-hmr": "npm:systemjs-hmr@2.0.9"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "hot-reloader-error-recovery": {
      "main": "hot-reloader-error-recovery.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {},
  packages: {}
});
