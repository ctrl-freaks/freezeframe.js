/* eslint-disable no-new */
import Freezeframe from '../../src';

// happy paths
new Freezeframe();
new Freezeframe('.foo');
new Freezeframe('#foo');
new Freezeframe(document.body);
new Freezeframe(document.getElementById('foo'));
new Freezeframe(document.getElementsByClassName('foo'));
new Freezeframe(document.querySelector('.foo'));
new Freezeframe(document.querySelectorAll('.foo'));
new Freezeframe({
  selector: '.foo'
});
new Freezeframe({
  selector: document.body,
  responsive: false,
  trigger: 'click',
  overlay: false,
  warnings: false
});
new Freezeframe(document.body, {
  responsive: false,
  trigger: 'click',
  overlay: false,
  warnings: false
});
new Freezeframe('.foo', {}); // looks odd but isn't an issue

// sad paths
new Freezeframe(true);
new Freezeframe(3);
new Freezeframe({});
new Freezeframe([]);
new Freezeframe({
  foo: 3
});
new Freezeframe({
  selector: 3
});
new Freezeframe({
  responsive: false,
  trigger: 'click',
  overlay: false,
  warnings: false
});
