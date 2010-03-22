// Page-specific demo stuff - not needed for library

function stressTest(sound,count) {
  for (var i=0; i<count; i++) {
    setTimeout("soundManager.play('"+sound+"',1,true)",(i+1)*50);
  }
}

function ihatespam(s) {
  return s.replace('improbablyaspammer','scott');
}