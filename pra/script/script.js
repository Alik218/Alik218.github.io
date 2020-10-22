.clock{
  /* .clock div Динамически создан jQuery */
  background-color:#222;
  height:200px;
  width:200px;
  position:relative;
  overflow:hidden;
  float:left;
}

.clock .rotate{
  /* Есть два .rotate divs - один для каждый половины фона-подложки */
  position:absolute;
  width:200px;
  height:200px;
  top:0;
  left:0;
}

.rotate.right{
  display:none;
  z-index:11;
}

.clock .bg, .clock .front{
  width:100px;
  height:200px;
  background-color:#222;
  position:absolute;
  top:0;
}

.clock .display{
  /* Содержит число секунд, минут или часов */
  position:absolute;
  width:200px;
  font-family:"Lucida Sans Unicode", "Lucida Grande", sans-serif;
  z-index:20;
  color:#F5F5F5;
  font-size:60px;
  text-align:center;
  top:65px;
  left:0;

  /* CSS3 text shadow: */
  text-shadow:4px 4px 5px #333333;
}

/* Левая часть бэкграунда */

.clock .bg.left{ left:0; }

/* Индивидуальная стилизация каждого цвета : */
.orange .bg.left{ background:url(img/bg_orange.png) no-repeat left top; }
.green .bg.left{ background:url(img/bg_green.png) no-repeat left top; }
.blue .bg.left{	background:url(img/bg_blue.png) no-repeat left top; }

/* Правая часть бэкграунда */
.clock .bg.right{ left:100px; }

.orange .bg.right{ background:url(img/bg_orange.png) no-repeat right top; }
.green .bg.right{ background:url(img/bg_green.png) no-repeat right top; }
.blue .bg.right{ background:url(img/bg_blue.png) no-repeat right top; }

.clock .front.left{
  left:0;
  z-index:10;
}
#fcbg{ background:url(img/bg_grey.png)
repeat-x; width:600px;height:200px;z-index:11;position:absolute;}