## Gulp Bootstrap
Custom Boilerplate with common tasks in Fron-End Development.

## Helpers
* [html5shiv 3.7.3](https://github.com/aFarkas/html5shiv)
* [respond 1.4.2](https://github.com/scottjehl/Respond)

## Libs
* [jQuery 2.2.4](https://code.jquery.com/)

## devDependencies
* [gulp 3.9.0](http://gulpjs.com)
* [gulp-concat 2.6.0](https://www.npmjs.com/package/gulp-concat)
* [gulp-cssmin 0.1.7](https://www.npmjs.com/package/gulp-cssmin)
* [gulp-rename 1.2.2](https://www.npmjs.com/package/gulp-rename)
* [gulp-sass 2.3.1](https://www.npmjs.com/package/gulp-sass)
* [gulp-uglify 1.5.3](https://www.npmjs.com/package/gulp-uglify)

## Dependencies
* Bootstrap Sass 3.3.7
* Font Awesome 4.7.0
* jQuery 2.2.4

## Workflow
```
Gulp Boilerplate/
.
├── README.md
├── LICENSE.md
├── index.html
├── .gitignore
├── .editorconfig
├── src/
|   ├── js/
|   |   └── functions/
|   |
|   └── sass/
|      	├── base/
|      	├── components/
|      	├── layout/
|      	├── utilities/
|      	└── all.scss
|
├── static/
|   ├── css/
|   |   ├── all.js
|   |   └── all.min.js
|   |
|   ├── fonts/
|   ├── images/
|   |  	├── banners/
|   |  	├── bgs/
|   |  	├── buttons/
|   |  	├── general/
|   |  	├── icons/
|   |  	└── logotypes/
|   |
|   └── js/
|   	├── all.js
|   	├── all.min.js
|   	├── html5shiv.min.js
|   	└── respond.min.js
|
└── gulp-boilerplate
```
## How to use
*A requirement is that you have installed on your computer [Gulp](http://gulpjs.com/).

1. Download the repository
2. Install dependencies

**Task listing**
- gulp (performs tasks sass and concatjs)
- gulp sass (Compiles all files  _scss)
- gulp concatjs (Concatenate all .js)
- gulp cssmin (Minify all.css)
- gulp jsmin (Minify all.js)

**NPM Scripts**
```bash
# gulp sass && gulp concatjs
npm run dev

# gulp sass && gulp concatjs && gulp cssmin && gulp jsmin
npm run build
```

## Questions
If you have any difficulty using the Gulp Boilerplate or would like some aspect of the current configuration, open an [issue](https://github.com/theandersonn/gulp-bootstrap/issues/new) and explain your difficulty.

## License
[MIT](https://github.com/theandersonn/gulp-bootstrap/blob/master/LICENSE.md) © [Anderson Nascimento](https://github.com/theandersonn)

В разработке была применена сборка https://github.com/theandersonn/gulp-bootstrap

src/sass/_custom.scss - переписанные переменные
src/sass/_rewrite.scss - кастомные стили
src/sass/all.scss - собирает все стили в один файл, который подключается на страницы
src/sass/layout - использовалась только бутстрапная сетка
	при желании можно разбить _rewrite.scss на соответствующие файлы

Селекторы для нестандартных кнопок
	btn-file
		<div class="btn btn-file">
		    <div>Выбрать фото</div>
		    <div class="desc">
		    	JPEG, JPG, PNG, GIF, <br>не более 10 мб
		    </div> <input type="file">
		</div>

		инпут с drag and drop
	     <div class="g_item text-center" id="drop-zone">
	        <a href="#a" class="add_portfolio_item" id="clickHere">
	          <span class="but_1">
	            <span class="plus_icon"></span>
	            <span class="file_name">Добавить фото</span>
	            Перетащите сюда фотографии или <!-- после drop заменяется названиями файлов -->
	            <span class="clickHere">
	              выберите с диска
	              <input type="file" multiple name="file" id="file">
	            </span>
	          </span>
	        </a>
	     </div>

	.round_sm
	.round-md
	.btn-bordered

Чекбоксы, радио кнопки

	<div class="checkbox">
	  <label for="item1">
	    <input type="checkbox" id="item1" class="hidden">
	    <span class="checkbox_f"></span>
	    <span>Я согласен <a href="#a">с правилами сервиса</a></span>
	  </label>
	</div>

	<div class="radio">
	   <div class="radio_box item" style="position: static;">
		   <label>
		       <input type="radio" class="hidden" name="radios" id="radios-0" value="1" checked="checked">
		       <span class="radio_f"></span>
		       <span>В любое время</span>
		   </label>
	   </div>
	</div>

Строки с иконками
	.p_iconized.p_mail
	.p_iconized.p_stat
	.p_iconized.p_links
	.p_iconized.p_pic
	.p_iconized.p_name
	.p_iconized.p_loc
	.p_iconized.p_stat
	.p_iconized.p_budget
	.p_iconized.p_budget2
	.p_iconized.p_brief
	.p_iconized.p_shield
	.p_iconized.p_line_stat
	.p_iconized.p_time
	.p_iconized.p_list
	.p_iconized.p_calendar
	.p_iconized.p_eye
	.p_iconized.p_shield

Всплывающие окна 
	<a 
		href="#myModal"
		data-toggle="modal"
		data-href="http://ferkzn.tmweb.ru/cdc/remontnik/popup_prices.html #myModal"
		class="edit-cell_span
	">Редактировать</a>
	вызываются стандартно, если подгружается сторонняя страница, используется атрибут data-href

	На странице, где предполагается использование всплывающих окон, должен присутствовать скелет окна
	    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="false" id="myModal">
          <div class="modal-dialog modal-lg">
                some text
          </div>
        </div>

Дэйтпикер инициализируется по селектору _date

Инпут range
    <div class="kekeke">
        <div class="range_bg"></div>
        <div class="range_th"></div>
        <input type="range" name="foo1" min="1000" max="100000" step="1000" />
        <output for="foo1" onforminput="value = foo1.valueAsNumber;"></output>
    </div>

Все остальные стили, кроме переписанных под дизайн стандартны для бутстрапа.

Блоки, использованные на разных страницах повторяемые.

