while (getX()< 50){
  swim(295);
}
var i, a;
a = 0;
i = 0;
while (true) {
  i += 5;
  a += 1;
  swim(a,100);
  if (scan(i) <= 70) {
    while (scan(i) <= 70) {
      a += 1;
      swim(a,100);
      cannon(i, scan(i,100));
    }
  }
  if (i >= 360) {
    i = 0;
  }
  if (a >= 360) {
    a = 0;
  }
}
