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