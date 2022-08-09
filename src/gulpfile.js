const uswds = require("@uswds/compile");
uswds.settings.version = 3;
uswds.paths.dist.theme = "./_theme";

exports.init = uswds.init;
exports.compile = uswds.compile;
exports.watch = uswds.watch;

uswds.paths.src.projectSass = "./assets/css";

const { src, dest } = require("gulp");
const { series, parallel } = require("gulp");

function copy1() {
  return src("index.html")
    .pipe(src("scroll.js"))
    .pipe(src("README.md"))
    .pipe(dest("../build/"));
}

function copy2() {
  return src(
    ["assets/uswds/css/*", "assets/uswds/fonts/*/*", "assets/uswds/js/*"],
    { base: "assets/uswds" }
  ).pipe(dest("../build/assets/uswds"));
}

function copy3() {
  return src(["assets/uswds/img/alerts/*"], {}).pipe(
    dest("../build/assets/uswds/img/alerts")
  );
}

function copy4() {
  return src(
    [
      "assets/uswds/img/usa-icons/add.svg",
      "assets/uswds/img/usa-icons/expand_less.svg",
      "assets/uswds/img/usa-icons/expand_more.svg",
      "assets/uswds/img/usa-icons/error.svg",
      "assets/uswds/img/usa-icons/error_outline.svg",
      "assets/uswds/img/usa-icons/remove.svg",
    ],
    { base: "assets/uswds/img/usa-icons" }
  ).pipe(dest("../build/assets/uswds/img/usa-icons"));
}

function copy5() {
  return src(
    [
      "assets/uswds/img/icon-dot-gov.svg ",
      "assets/uswds/img/icon-https.svg",
      "assets/uswds/img/us_flag_small.png",
    ],
    { base: "assets/uswds/img" }
  ).pipe(dest("../build/assets/uswds/img"));
}

function copy6() {
  return src(["assets/imgs/*"], {}).pipe(dest("../build/assets/imgs"));
}

exports.copy1 = copy1;
exports.copy2 = copy2;
exports.copy3 = copy3;
exports.copy4 = copy4;
exports.copy5 = copy5;
exports.copy6 = copy6;

exports.buildAll = series(copy1, copy2, copy3, copy4, copy5, copy6);
