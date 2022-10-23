import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import minifyHTML from "lume/plugins/minify_html.ts";

const site = lume({
	src: "./src",
	prettyUrls: "no-html-extension"
});

site.use(code_highlight());
site.use(lightningCss());
site.use(minifyHTML({
	options: {
		do_not_minify_doctype: true,
		ensure_spec_compliant_unquoted_attribute_values: true,
		keep_spaces_between_attributes: true
	}
}));

site.copy("static", ".");

export default site;
