export const galleryFragment = `
  uniform sampler2D uFirstImage;
  uniform sampler2D uSecondImage;
  uniform float uInterpolation;

  varying vec2 vUv;

  void main() {
    vec4 firstImage = texture2D(uFirstImage, vUv);
    vec4 secondImage = texture2D(uSecondImage, vUv);
    gl_FragColor = mix(firstImage, secondImage, uInterpolation); 
  }
`;
