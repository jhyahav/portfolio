<a name="readme-top"></a>

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/jhyahav/portfolio">
    <img src="public/android-chrome-512x512.png" alt="jhyahav icon" width="80" height="80">
  </a>

<h3 align="center">jhyahav's portfolio</h3>

  <p align="center">
    Jonathan Yahav's out-of-this-world portfolio site.
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About

[![screenshot of jhyahav's portfolio][product-screenshot]](https://jhyahav.vercel.app/)

The goal of this project was to create a beautiful, performant, fully responsive and interactive 3D site that showcases my experience and skills while keeping it all short and sweet. I created a little solar system, binding the camera to user scrolling to enable realistic movement while panning between sections of my biography. The project includes a realistic dying star, a randomly-generated asteroid belt with a wide variety of different features, several planets, and a number of text and image billboards. The camera follows a curve, focusing on the relevant element at each stage. I made extensive use of custom shaders and drei's ScrollControls (see <a href="#acknowledgments">Acknowledgments</a>), as well as custom displacement maps.

### Performance

Please note that performance may not be ideal on particularly large screens. In general, performance tests on various devices yielded good results, but YMMV depending on your GPU.

### Accessibility

As mentioned on the site itself, the project (specifically the warp animation after initial landing) includes flashing effects that may not be suitable for users with photosensitive epilepsy. Due to the nature of the animation used, the site may also be unsuitable for users with motion sensitivities. I plan on improving accessibility using [react-three-a11y](https://github.com/pmndrs/react-three-a11y) in the near future.

### Built with

[![Three][three.js]][three-url] [![Next][next.js]][next-url] [![React][react.js]][react-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- This project wouldn't have been possible without [react-three-fiber](https://github.com/pmndrs/react-three-fiber) and [drei](https://github.com/pmndrs/drei).
- The custom shader materials in the project are based on fragment shaders from [Shadertoy](https://www.shadertoy.com/):
  - [Main Sequence Star](https://www.shadertoy.com/view/4dXGR4) by flight404
  - [Warp Speed 2](https://www.shadertoy.com/view/4tjSDt) by David Hoskins
- Camera movement path based on curve from [Three.js examples](https://github.com/mrdoob/three.js/blob/master/examples/jsm/curves/CurveExtras.js).
- [3D model of ISS](https://solarsystem.nasa.gov/resources/2378/international-space-station-3d-model/) by NASA
- [GLTF -> React Three Fiber](https://gltf.pmnd.rs/)
- Favicon and logo created with [favicon.io](https://favicon.io/).
- Some planet color maps were taken from [Solar System Scope](https://www.solarsystemscope.com/textures/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[license-url]: https://github.com/jhyahav/portfolio/blob/master/LICENSE.txt
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=0a66c2
[linkedin-url]: https://linkedin.com/in/jhyahav/
[product-screenshot]: public/screenshot1.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[three.js]: https://img.shields.io/badge/three.js-FFFFFF?style=for-the-badge&logo=threedotjs&logoColor=black
[three-url]: https://threejs.org/
