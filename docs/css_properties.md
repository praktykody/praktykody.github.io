# Właściwości CSS
## margin / padding
```css
element.style {
    margin: 20px;
    padding: 10px 2px;
}
```
![Margin & padding difference](./images/css_margin_padding.webp)
## display
```css
#div{
	display:none;
}

.element{
	display:block|inline|inline-block|table|table-cell|none;
}
```

![CSS Displays](./images/css_displays.webp)

### Display:flex
```html
<div class="dflex">
	<div>1</div>
	<div>2</div>
	<div>3</div>
</div>
```
```css
.dflex{
	background-color:green;
	width:100%;
	display:flex;
	justify-content: center;
}
.dflex div{
	text-align: center;
	width:30%;
	border: 3px solid #000;
	background-color:#eee;
	margin:5px;
	padding: 10% 0 10% 0;
}
```

![Display Flex](./images/css_display_flex.webp)


## position
```css
.element{
	position:static|sticky|absolute|relative|fixed;
}

```
![positions](./images/css_positions.gif)


<div style="display:flex;justify-content:space-between;flex-wrap:wrap;">
  <a href="./#/css_overview?id=przeglĄd-cssa">Prev: 👁️ Przegląd CSS</a>
  <a href="./#/css_units?id=jednostki-css">Next: ⚽️ Jednostki</a>
</div>
