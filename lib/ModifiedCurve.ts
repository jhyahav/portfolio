// Based on Three.js examples: https://github.com/mrdoob/three.js/blob/master/examples/jsm/curves/CurveExtras.js

import { Curve, Vector3 } from "three";

export default class ModifiedCurve extends Curve<Vector3> {
  scale: number;
  constructor(scale = 70) {
    super();

    this.scale = scale;
  }

  getPoint(t: number, optionalTarget = new Vector3()) {
    const point = optionalTarget;

    const p = 2;
    const q = 5;

    t *= Math.PI * 2;

    const x = (2 + Math.cos(q * t)) * Math.cos(p * t);
    const y = (2 + Math.cos(q * t)) * Math.sin(p * t);
    const z = Math.sin(q * t);

    return point.set(x, y, z).multiplyScalar(this.scale);
  }
}
