import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import minifyHTML from "lume/plugins/minify_html.ts";

const site = lume({
	src: "./src"
});

site.use(sass());
site.use(lightningCss());
site.use(minifyHTML({
	options: {
		do_not_minify_doctype: true,
		ensure_spec_compliant_unquoted_attribute_values: true,
		keep_spaces_between_attributes: true
	}
}));

// site.copy("static", ".");

export default site;
