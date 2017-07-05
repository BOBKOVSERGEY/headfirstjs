var bs = require("browser-sync").create();

//тут
bs.watch(['truefalse/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./truefalse"
});