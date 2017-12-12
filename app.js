var bs = require("browser-sync").create();

//тут
bs.watch(['createObject/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./createObject"
});