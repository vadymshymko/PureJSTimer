# PureJSTimer
Pure JavaScript countdown timer. Demo: http://ninjadev.pw/portfolio/pure-js-timer/
> Tested on IE8+, Microsoft Edge, Chrome, Safari(5.1+), Firefox, Opera, Yandex browser, iPhone, iPad

## Getting Started

### 1. Include PureJSTimer files
```html
<script src="path/to/pure-js-timer.js"></script>
```

### 2. Set up your HTML
```html
<div class="your-selector">
</div>
```

### 3. Call the PureJSTimer
var yourVariable = new PureJSTimer({
  timer: '.your-selector',
  endDate: '2022/03/28'
});

#### 3.1 Settings
Option | Type | Default
------ | ---- | -------
timer | string (CSS selector) | n/a
endDate | string | n/a,
yearsToEnd | int | 0
monthsToEnd | int | 0
daysToEnd | int | 0
hoursToEnd | int | 0
minutesToEnd | int | 0
secondsToEnd | int | 0
leadingZero | boolean | false
onUpdate | function | n/a
onStop | function | n/a

#### 3.2 Methods
Stop:
yourVarible.stop();

Update:
yourVarible.update();

Start:
yourVarible.start();

Destroy:
yourVarible.destroy();
