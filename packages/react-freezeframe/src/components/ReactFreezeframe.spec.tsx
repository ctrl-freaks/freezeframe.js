import React from 'react';
import { render } from '@testing-library/react';
import ReactFreezeframe from './ReactFreezeframe';

const src = 'http://localhost:8080/foo.gif'

describe('ReactFreezeframe.js', () => {
  it('renders image when url is passed into src prop', () => {
    const { container } = render(<ReactFreezeframe src={src} />);
    const img = container.querySelector('img')
    expect(container.firstChild).toHaveClass('react-freezeframe')
    expect(img).toHaveAttribute('src', src)
  })

  it('renders image when img is passed as child', () => {
    const { container } = render(
      <ReactFreezeframe>
        <img src={src} alt="one"/>
      </ReactFreezeframe>
    );
    const img = container.querySelector('img')
    expect(container.firstChild).toHaveClass('react-freezeframe')
    expect(img).toHaveAttribute('src', src)
  })

  it('renders images when multiple imgs are passed as children', () => {
    const { container } = render(
      <ReactFreezeframe>
        <img src={src} alt="one"/>
        <img src={src} alt="two"/>
        <img src={src} alt="three"/>
      </ReactFreezeframe>
    );
    const imgs = container.querySelectorAll('img')
    expect(container.firstChild).toHaveClass('react-freezeframe')
    imgs.forEach(img => expect(img).toHaveAttribute('src', src))
  })
})
