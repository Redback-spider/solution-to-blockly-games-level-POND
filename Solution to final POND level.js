while (getX()< 50){
  swim(295);
}
var i, a2;
a2 = 0;
i = 0;
while (true) {
  i += 5;
  a2 += 1;
  swim(a2,100);
  if (scan(i) <= 70) {
    while (scan(i) <= 70) {
      a2 += 1;
      swim(a2,100);
      cannon(i, scan(i,100));
    }
  }
  if (i >= 360) {
    i = 0;
  }
  if (a2 >= 360) {
    a2 = 0;
  }
}
