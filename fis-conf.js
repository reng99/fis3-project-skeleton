fis.match('views/common/*.html', {
	// 设置 release 为 FALSE，不再产出此文件
	release: false
})
// 某些资源从构建中去除
fis.set('project.ignore', [
	'package.json',
	'fis-conf.js',
	'README.md'
]);

fis.match('*.js', {
	// fis-optimizer-uglify-js 插件进行压缩，已内置
	optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
	// fis-optimizer-clean-css 插件进行压缩，已内置
	optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
	// fis-optimizer-png-compressor 插件进行压缩，已内置
	optimizer: fis.plugin('png-compressor')
});

// 文件指纹
fis.match('*.{js,css,png,jpeg,jpg,gif}', {
	useHash: true
});