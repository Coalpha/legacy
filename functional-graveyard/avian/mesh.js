// The array meshing function
const A = [],
  x = [0, , 2, 3, A, 5],
  y = [1, 4, 6],
  r = [...Object.keys(x).reduce((a, v) => (a[v] = x[v] !== A, a), []).values()].reduce((A, v, i, a, n) => {
    [a, n] = A;
    if (v) {
      a.push(x[i]);
    } else {
      a.push(y[n]);
      n++;
    }
    return [a, n];
  }, [[], 0])[0];
