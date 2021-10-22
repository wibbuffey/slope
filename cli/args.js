// github.com/wibbuffey/nsfp: version 1.1.0

module.exports = (a, r = {}, i = []) => {
  f = {}, o = [], l = a;
  l.map(e => {
    b = e.slice.bind(e);
    c = b(1);
    j = b(2);
    k = i.indexOf(j);
    h = e.startsWith.bind(e);
      
    h("--") ? (() => {
      k < 0 ? f[j] = 1 : (() => {
        f[j] = a[k+1];
        l.shift()
      })()})() : (() => {
        h("-") ? (() => {
          d = r[c];
          d ? f[d] = 1 : f[c] = 1
        })() : o.push(e)
      })()
    });
  return [f, o]
}
