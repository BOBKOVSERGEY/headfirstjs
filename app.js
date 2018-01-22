var bs = require("browser-sync").create();

//тут
bs.watch(['prototype/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./prototype"
});