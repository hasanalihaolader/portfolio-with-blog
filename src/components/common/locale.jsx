const locales = {};
function getAllLocaleFiles() {
	const context = require.context("../../assets/lang", false, /\.json$/);
	context.keys().forEach((fileName) => {
		const locale = fileName.replace("./", "").replace(".json", ""); // Extract file name (e.g., 'en', 'bn')
		locales[locale] = context(fileName);
	});
}
export default function Locale({ label }) {

	const default_lang = process.env.REACT_APP_DEFAULT_LANG || 'bn';
	getAllLocaleFiles();
    return (<>{locales[default_lang]?.[label] || ''}</>)
}
