// Based on Three.js examples: https://github.com/mrdoob/three.js/blob/master/examples/jsm/curves/CurveExtras.js

import { Curve, Vector3 } from "three";

export default class ModifiedCurve extends Curve<Vector3> {
  getPoint(t: number, optionalTarget = new Vector3()) {
    const point = optionalTarget;

    t *= 2 * Math.PI;

    const R = 20;
    const s = 100;

    const x = -s * Math.sin(t);
    const y = Math.cos(t) * (R + s * Math.cos(t));
    const z = -Math.sin(t) * (R + s * Math.cos(t));

    return point.set(x, y, z);
  }
}
