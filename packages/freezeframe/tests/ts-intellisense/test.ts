/* eslint-disable no-new */
import FreezeFrame from '../../src';

// happy paths
new FreezeFrame();
new FreezeFrame('.foo');
new FreezeFrame('#foo');
new FreezeFrame(document.body);
new FreezeFrame(document.getElementById('foo'));
new FreezeFrame(document.getElementsByClassName('foo'));
new FreezeFrame(document.querySelector('.foo'));
new FreezeFrame(document.querySelectorAll('.foo'));
new FreezeFrame({
  selector: '.foo'
});
new FreezeFrame({
  selector: document.body,
  responsive: false,
  trigger: 'click',
  overlay: false,
  warnings: false
});

// sad paths
new FreezeFrame(true);
new FreezeFrame(3);
new FreezeFrame({});
new FreezeFrame({
  foo: 3
});
new FreezeFrame({
  selector: 3
});
new FreezeFrame('.foo', {});
