function Calculate()
  {
    let a = eval( document.forms.equ.a.value);
    let b = eval( document.forms.equ.b.value);
    let c = eval( document.forms.equ.c.value);
    let d = b * b - 4 * a * c;
    document.forms.equ.dis.value = d;
    if( d < 0)
    {
      let str = "";
      str += ( - b ) / ( 2 * a);
      str += " + i * ";
      str += Math.sqrt( - d ) / ( 2 * a);
      document.forms.equ.x1.value = str;
       
      str = "";
      str += ( - b ) / ( 2 * a);
      str += " - i * ";
      str += Math.sqrt( - d ) / ( 2 * a);
      document.forms.equ.x2.value = str;
    }
    else
    {
      document.forms.equ.x1.value = ( - b + Math.sqrt( d ) ) / ( 2 * a);
      document.forms.equ.x2.value = ( - b - Math.sqrt( d ) ) / ( 2 * a);
    }
  }