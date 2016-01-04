/*
 * Pure JavaScript countdown timer 1.1
 * Author: Vadym Shymko
 * Author URI: http://ninjadev.pw/
 */

function PureJSTimer(config) {
  var scope = this;
  scope.timer             = document.querySelector(config.timer);
  scope.yearsToEnd        = config.yearsToEnd        || 0;
  scope.monthsToEnd       = config.monthsToEnd       || 0;
  scope.daysToEnd         = config.daysToEnd         || 0;
  scope.hoursToEnd        = config.hoursToEnd        || 0;
  scope.minutesToEnd      = config.minutesToEnd      || 0;
  scope.secondsToEnd      = config.secondsToEnd      || 0;
  scope.leadingZero       = config.leadingZero       || false;
  scope.onUpdate          = config.onUpdate          || null;
  scope.onStop            = config.onStop            || null;

  scope.start = function() {
    scope.startDate         = new Date();
    scope.currentDate       = scope.startDate;
    scope.endDate           = config.endDate ? new Date(config.endDate) : new Date(scope.startDate.getFullYear() + scope.yearsToEnd, scope.startDate.getMonth() + scope.monthsToEnd, scope.startDate.getDate() + scope.daysToEnd, scope.startDate.getHours() + scope.hoursToEnd, scope.startDate.getMinutes() + scope.minutesToEnd, scope.startDate.getSeconds() + scope.secondsToEnd);

    scope.update();

    scope.interval = setInterval(function() {
      scope.currentDate = new Date();
      scope.update();

      if (scope.days === 0 && scope.hours === 0 && scope.minutes === 0 && scope.seconds === 0) {
        scope.stop();
      }
    }, 1000);

    if (scope.days === 0 && scope.hours === 0 && scope.minutes === 0 && scope.seconds === 0) {
      scope.stop();
    }
  };

  scope.update = function() {
    if ((scope.currentDate.getTime() + 1000) >= scope.endDate.getTime()) {
      scope.days    = 0;
      scope.hours   = 0;
      scope.minutes = 0;
      scope.seconds = 0;
    } else {
      scope.days    = Math.floor((scope.endDate.getTime() - scope.currentDate.getTime()) / 86400000);
      scope.hours   = Math.floor((scope.endDate.getTime() - scope.currentDate.getTime()) / 3600000) % 24;
      scope.minutes = Math.floor((scope.endDate.getTime() - scope.currentDate.getTime()) / 60000) % 60;
      scope.seconds = Math.floor((scope.endDate.getTime() - scope.currentDate.getTime()) / 1000) % 60;
    }

    scope.timer.querySelector('.pure-js-timer-days').innerHTML    = scope.leadingZero === true && scope.days.toString().length === 1 ? '0' + scope.days : scope.days;
    scope.timer.querySelector('.pure-js-timer-hours').innerHTML   = scope.leadingZero === true && scope.hours.toString().length === 1 ? '0' + scope.hours : scope.hours;
    scope.timer.querySelector('.pure-js-timer-minutes').innerHTML = scope.leadingZero === true && scope.minutes.toString().length === 1 ? '0' + scope.minutes : scope.minutes;
    scope.timer.querySelector('.pure-js-timer-seconds').innerHTML = scope.leadingZero === true && scope.seconds.toString().length === 1 ? '0' + scope.seconds : scope.seconds;

    if (scope.onUpdate) {
      scope.onUpdate(scope);
    }
  };

  scope.stop = function() {
    clearInterval(scope.interval);
    if (scope.onStop) {
      scope.onStop(scope);
    }
  };

  scope.destroy = function() {
    scope.stop();
    scope.timer.innerHTML = '';
    for (var property in scope) {
      if (scope.hasOwnProperty(property)) {
        delete scope[property];
      }
    }
  };

  var daysContainer    = document.createElement('span');
  var hoursContainer   = document.createElement('span');
  var minutesContainer = document.createElement('span');
  var secondsContainer = document.createElement('span');

  scope.timer.className   += ' pure-js-timer';
  daysContainer.className    = 'pure-js-timer-days';
  hoursContainer.className   = 'pure-js-timer-hours';
  minutesContainer.className = 'pure-js-timer-minutes';
  secondsContainer.className = 'pure-js-timer-seconds';

  scope.timer.appendChild(daysContainer);
  scope.timer.appendChild(hoursContainer);
  scope.timer.appendChild(minutesContainer);
  scope.timer.appendChild(secondsContainer);

  scope.start();
}
