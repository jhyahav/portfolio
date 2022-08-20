// Based on "Warp Speed 2" by David Hoskins,  https://www.shadertoy.com/view/4tjSDt

export const warpFragment = `
uniform float iTime;
varying vec2 vUv;

void main( void )
{
	float s = 0.0, v = 0.0;
    float time = (iTime-2.0)*58.0;
	vec2 uv = (vUv * 2.) - 1.;
	vec3 col = vec3(0);
    vec3 init = vec3(sin(time * .0032)*.3, .35 - cos(time * .005)*.3, time * 0.002);
	int cap = int(ceil(max((150.0 - 3.5 * pow(time, 0.6)), 0.0))) + 10;
	for (int r = 0; r < cap; r++) 
	{
		vec3 p = init + s * vec3(uv, 0.05);
		p.z = fract(p.z);
		for (int i=0; i < 10; i++)	p = abs(p * 2.04) / dot(p, p) - .9;
		v += pow(dot(p, p), .7) * .06;
		col +=  vec3(v * 0.3+.4, 12.-s*7., .1 + v * 0.6) * v * 0.00003;
		s += .025;
	}
	gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;
