import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";

const site = lume({
    src: "./src",
});

site.copy("assets");

site.use(code_highlight());

export default site;
