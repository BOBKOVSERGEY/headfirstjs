var bs = require("browser-sync").create();

//тут
bs.watch(['zamykaniya/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./zamykaniya"
});