Hot reloader error recovery example
===================================
1. Run:
  ```
  $ npm install
  $ npm start
  ```
1. Open `http://localhost:3000/` in a browser.
1. In `src/example.js` remove `(`,
1. Error should be shown
1. Re-add the `(`
1. The fixed file should be reloaded and code should work again, but currently the same error is shown.
