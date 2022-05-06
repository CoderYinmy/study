### tweens

左右滑动动画

```js
const logo = this.add.image(400, 150, "logo");
const logo1 = this.add.image(400, 150, "logo").setAlpha(0.3); //透明度
tweens.add({
  targets: logo,
  ease: "Power3",
  y: 800,
  yoyo: true,
  loop: -1, //循环
  duration: 2000,
});
```

### add.group && Phaser.Actions.GridAlign && blocks.children.iterate

心跳

```js

var blocks = this.add.group({ key: 'logo', repeat: 2, setScale: { x: 0.3, y: 0.3 } });

    Phaser.Actions.GridAlign(blocks.getChildren(), {
        width: 3,
        height: 1,
        cellWidth: 150,
        cellHeight: 60,
        x: 50,
        y: 50
    });

    var i = 0;

    blocks.children.iterate(function (child) {

        this.tweens.add({
            targets: child,
            scaleX: .35,
            scaleY: .35,
            ease: 'Sine.easeInOut',
            duration: 300,
            delay: i * 50,
            repeat: -1,
            yoyo: true
        });

        i++;

        if (i % 12 === 0)
        {
            i = 0;
        }

    }, this);
  }
```

### 图形转换动画

```js
var balls = this.add.group({ key: "ball", repeat: 10 });
// 圆
var circle = new Phaser.Geom.Circle(400, 400, 300);
//三角
var triangle = new Phaser.Geom.Triangle.BuildRight(200, 400, 500, 200);
//长方形
var rect = new Phaser.Geom.Rectangle(200, 150, 400, 300);
//竖椭圆
var ellipse = new Phaser.Geom.Ellipse(400, 400, 200, 500);
//正三角
var triangle2 = new Phaser.Geom.Triangle.BuildEquilateral(400, 200, 300);

Phaser.Actions.PlaceOnCircle(balls.getChildren(), circle);

balls.children.iterate(function (child) {
  child.setData("circle", { x: child.x, y: child.y });
});

Phaser.Actions.PlaceOnTriangle(balls.getChildren(), triangle);

balls.children.iterate(function (child) {
  child.setData("triangle", { x: child.x, y: child.y });
});

Phaser.Actions.PlaceOnRectangle(balls.getChildren(), rect);

balls.children.iterate(function (child) {
  child.setData("rect", { x: child.x, y: child.y });
});
Phaser.Actions.PlaceOnEllipse(balls.getChildren(), ellipse);

balls.children.iterate(function (child) {
  child.setData("ellipse", { x: child.x, y: child.y });
});
Phaser.Actions.PlaceOnTriangle(balls.getChildren(), triangle2);

balls.children.iterate(function (child) {
  child.setData("triangle2", { x: child.x, y: child.y });
});

Phaser.Actions.PlaceOnCircle(balls.getChildren(), circle);
var shapes = ["circle", "triangle", "rect", "ellipse", "triangle2"];
var shape1 = 0;
var shape2 = 1;

this.tweens.add({
  targets: balls.getChildren(),
  ease: "Quintic.easeInOut",
  duration: 3000,
  delay: 1000,
  hold: 1000,
  loop: -1,

  x: {
    getEnd: function (target, key, value) {
      return target.getData(shapes[shape2]).x;
    },

    getStart: function (target, key, value) {
      return target.getData(shapes[shape1]).x;
    },
  },

  y: {
    getEnd: function (target, key, value) {
      return target.getData(shapes[shape2]).y;
    },

    getStart: function (target, key, value) {
      return target.getData(shapes[shape1]).y;
    },
  },

  onLoop: function () {
    shape1 = Phaser.Math.Wrap(shape1 + 1, 0, 5);
    shape2 = Phaser.Math.Wrap(shape2 + 1, 0, 5);
  },
});
```


