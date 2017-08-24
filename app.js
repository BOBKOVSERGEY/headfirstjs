var bs = require("browser-sync").create();

//тут
bs.watch(['game/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./game"
});