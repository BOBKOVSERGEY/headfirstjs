var bs = require("browser-sync").create();

//тут
bs.watch(['zamykaniya/page/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./zamykaniya/page"
});