/* The following mimics the starter shim */
var a = document.getElementById('c'),
    b = document.body,
    c = a.getContext('2d');

a.width = window.innerWidth;
a.height = window.innerHeight;

/*
Minified
*/

function R() {
    w = a.width = W.innerWidth, h = a.height = W.innerHeight, f = c.getImageData(0, 0, w, h), d = f.data, O = d.length
}

function L() {
    for (i = 0; O > i; i++) d[i] = i + 1 & 3 ? 0 : 255;
    z[0] += .005, z[0] = z[0] > 1 ? z[0] - 1 : z[0] < 0 ? z[0] + 1 : z[0];
    var n = z[2] < .5 ? z[2] * (1 + z[1]) : z[2] + z[1] - z[2] * z[1],
        a = 2 * z[2] - n,
        t = 255 * H(a, n, z[0] + 1 / 3) + .5 >> 0;
    for (g = 255 * H(a, n, z[0]) + .5 >> 0, b = 255 * H(a, n, z[0] - 1 / 3) + .5 >> 0, i = 0; C > i; i++) {
        var e = S[i],
            r = m[0] - e[0],
            o = m[1] - e[1],
            s = M.atan2(o, r),
            W = 100 / M.sqrt(r * r + o * o),
            v = M.cos(s) * W,
            p = M.sin(s) * W;
        e[2] += v, e[3] += p, e[0] += e[2], e[1] += e[3], e[2] *= .96, e[3] *= .96, e[0] = e[0] >= w ? 0 : e[0] < 0 ? w - 1 : e[0], e[1] = e[1] >= h ? 0 : e[1] < 0 ? h - 1 : e[1], a = (e[1] + .5 >> 0) * w * 4 + 4 * (e[0] + .5 >> 0), d[a++] = t, d[a++] = g, d[a++] = b
    }
    c.putImageData(f, 0, 0), u && requestAnimationFrame(L)
}

function N(i) {
    m[0] = i.pageX, m[1] = i.pageY
}

function T() {
    u = !u, u && L()
}

function H(i, n, a) {
    return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 1 / 6 > a ? i + 6 * (n - i) * a : .5 > a ? n : 2 / 3 > a ? i + (n - i) * (2 / 3 - a) * 6 : i
}
var W = window,
    S = [],
    m = [0, 0],
    z = [0, 1, .5],
    C = 3e4,
    u = !0,
    w, h, f, d, O, M = Math,
    r = "random";
for (W.onresize = R, W.onmousemove = N, W.onclick = T, R(), i = 0; C > i; i++) {
    var n = [M[r]() * w, M[r]() * h, 0, 0];
    S.push(n)
}
L();


/*
Unminified

var W = window,
	S = [],
	m = [0, 0],
	z = [0, 1, 0.5],
	C = 30000,
	u = true,
	w, h, f, d, O,
	M = Math,
	r = 'random';

function R(){

	w = a.width = W.innerWidth;
	h = a.height = W.innerHeight;
	f = c.getImageData(0, 0, w, h);
	d = f.data;
    O = d.length

}

function L(){

	for (i=0;i<O;i++) {
		d[i]=(!((i+1)&3))?255:0
	}

    z[0]+=0.005;
    z[0]=z[0]>1?z[0]-1:(z[0]<0?z[0]+1:z[0]);

    var q=z[2]<0.5?z[2]*(1+z[1]):z[2]+z[1]-z[2]*z[1],
    	p=2*z[2]-q,
	    r=((H(p,q,z[0]+1/3)*255)+0.5)>>0;
	    g=((H(p,q,z[0])*255)+0.5)>>0;
	    b=((H(p,q,z[0]-1/3)*255)+0.5)>>0;

	for (i=0;i<C;i++) {

		var n=S[i],
        	x=m[0]-n[0],
        	y=m[1]-n[1],
        	k=M.atan2(y,x),
        	o=100/M.sqrt(x*x+y*y),
			v=(M.cos(k)*o),
        	t=(M.sin(k)*o);

        n[2]+=v;
        n[3]+=t;

        n[0]+=n[2];
        n[1]+=n[3];

        n[2]*=0.96;
        n[3]*=0.96;

        n[0]=n[0]>=w?0:(n[0]<0?w-1:n[0]);
        n[1]=n[1]>=h?0:(n[1]<0?h-1:n[1]);
        
		p=(((n[1]+0.5)>>0)*w*4)+(((n[0]+0.5)>>0)*4);

		d[p++]=r;
		d[p++]=g;
		d[p++]=b

	}

	c.putImageData(f, 0, 0);
	if (u) requestAnimationFrame(L)
}

function N(e){
    m[0] = e.pageX;
    m[1] = e.pageY
}

function T() {
	u = !u;
	if (u) L()
};

function H(p,q,t){
    t=t<0?t+1:(t>1?t-1:t);
    return t<1/6?p+(q-p)*6*t:(t<1/2?q:(t<2/3?p+(q-p)*(2/3-t)*6:p))
}

W.onresize = R;
W.onmousemove = N;
W.onclick = T;

R();

for (i=0;i<C;i++) {
	var n = [M[r]()*w,M[r]()*h,0,0];
	S.push(n)
}

L();

*/