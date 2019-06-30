const gulp = require('gulp')

gulp.task('default', () => {
	//console.log('OK!')
	gulp.start('copiar', 'fim')
})

gulp.task('copiar', ['antes1', 'antes2'], () => {
	console.log('Copiar!!!!!')
})

gulp.task('antes1', () => {
	console.log('Antes 1!!!!!')
})

gulp.task('antes2', () => {
	console.log('Antes 2 !!!!!')
})

gulp.task('fim', () => {
	console.log('fim!')
})
