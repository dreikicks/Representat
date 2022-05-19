window.onload = function () {
    
    var btinici=document.getElementById("presentat").addEventListener("click", function(){
    
    var titi=document.getElementById("titinici");
    var ti=document.getElementById("textinici");
    var cw=document.getElementById("cosweb");
    var nuv =document.getElementById("nombreus").value;
    var nu =document.getElementById("nombreus");
    //var lu=document.getElementById("nompers");
    var bi=document.getElementById("presentat");
    var body=document.getElementById("body");
    var divpres=document.getElementById("divpres");
        
    var tu=document.getElementById("textulls");
    var tc=document.getElementById("textcabell");
    var tri=document.getElementById("textrobaint");
    var trd=document.getElementById("textrobadalt");
    var trb=document.getElementById("textrobaabaix");
    var tcom=document.getElementById("textcomplement");
    var ts=document.getElementById("textsabates");
        
    localStorage.nomusuari=nuv;
    
    titi.setAttribute("class", "escondido");
    bi.setAttribute("id", "escondidoid");
    nu.setAttribute("class", "escondido");
    //lu.setAttribute("class", "visible");
    cw.setAttribute("id", "visibleid");
    ti.setAttribute("class", "escondido");
    body.setAttribute("class", "body2");
    tu.setAttribute("class", "textdesc");
    divpres.setAttribute("id", "escondidoid");
        
    //lu.innerHTML="Hola " + nuv;
        
    tu.innerHTML="COM SÓN ELS MEUS ULLS?";
    tc.innerHTML="COM SÓN ELS MEUS CABELLS?";
    tri.innerHTML="COM ÉS LA MEVA ROBA INTERIOR?";
    trd.innerHTML="COM ÉS LA MEVA ROBA?";
    trb.innerHTML="COM ÉS LA MEVA ROBA?";
    tcom.innerHTML="QUIN ÉS EL MEU COMPLEMENT?";
    ts.innerHTML="COM SÓN LES MEVES SABATES?";
        
        
    }, false);
    
    
    
    
    var btulls1=document.getElementById("opulls1").addEventListener("click", function(){
    
    //var fondoblanco=document.getElementById("fondoblanco");
    var u11=document.getElementById("ulls1");
    var u21=document.getElementById("ulls2");
    
    //fondoblanco.setAttribute("class", "escondido");
    u11.setAttribute("class", "visible");
    u21.setAttribute("class", "escondido");
        
        
    }, false);
    
    var btulls2=document.getElementById("opulls2").addEventListener("click", function(){
    
    //var fondoblanco=document.getElementById("fondoblanco");
    var u12=document.getElementById("ulls1");
    var u22=document.getElementById("ulls2");
    
    //fondoblanco.setAttribute("class", "escondido");
    u12.setAttribute("class", "escondido");
    u22.setAttribute("class", "visible");
        
    }, false);
    
    
    
    
    var btseg1=document.getElementById("seg1").addEventListener("click", function(){
    
    var tu=document.getElementById("textulls");
    var tc=document.getElementById("textcabell");
    var ou1=document.getElementById("opulls1");
    var ou2=document.getElementById("opulls2");
        
    var oc1=document.getElementById("opcabell1");
    var oc2=document.getElementById("opcabell2");
    var oc3=document.getElementById("opcabell3");
    var oc4=document.getElementById("opcabell4");
        
    var seg1=document.getElementById("seg1");
    var seg2=document.getElementById("seg2");
        
    var body=document.getElementById("body");
    
    tu.setAttribute("class", "escondido");
    tc.setAttribute("class", "textdesc");
    ou1.setAttribute("class", "escondido");
    ou2.setAttribute("class", "escondido");
    
    seg1.setAttribute("class", "escondido");
    seg2.setAttribute("class", "tit3 btn btn-primary");
        
    oc1.setAttribute("class", "visiblebotons");
    oc2.setAttribute("class", "visiblebotons");
    oc3.setAttribute("class", "visiblebotons");
    oc4.setAttribute("class", "visiblebotons");
        
    body.setAttribute("class", "body3");
        
        
    }, false);
    
    
    var btcabell1=document.getElementById("opcabell1").addEventListener("click", function(){
    
    var c11=document.getElementById("cabell1");
    var c21=document.getElementById("cabell2");
    var c31=document.getElementById("cabell3");
    var c41=document.getElementById("cabell4");
    
    c11.setAttribute("class", "visible2");
    c21.setAttribute("class", "escondido");
    c31.setAttribute("class", "escondido");
    c41.setAttribute("class", "escondido");
        
        
    }, false);
    
    
    var btcabell2=document.getElementById("opcabell2").addEventListener("click", function(){
    
    var c12=document.getElementById("cabell1");
    var c22=document.getElementById("cabell2");
    var c32=document.getElementById("cabell3");
    var c42=document.getElementById("cabell4");
    
    c12.setAttribute("class", "escondido");
    c22.setAttribute("class", "visible2");
    c32.setAttribute("class", "escondido");
    c42.setAttribute("class", "escondido");
        
        
    }, false);
    
    
    var btcabell3=document.getElementById("opcabell3").addEventListener("click", function(){
    
    var c13=document.getElementById("cabell1");
    var c23=document.getElementById("cabell2");
    var c33=document.getElementById("cabell3");
    var c43=document.getElementById("cabell4");
    
    c13.setAttribute("class", "escondido");
    c23.setAttribute("class", "escondido");
    c33.setAttribute("class", "visible2");
    c43.setAttribute("class", "escondido");
        
        
    }, false);
    
    
    var btcabell4=document.getElementById("opcabell4").addEventListener("click", function(){
    
    var c14=document.getElementById("cabell1");
    var c24=document.getElementById("cabell2");
    var c34=document.getElementById("cabell3");
    var c44=document.getElementById("cabell4");
    
    c14.setAttribute("class", "escondido");
    c24.setAttribute("class", "escondido");
    c34.setAttribute("class", "escondido");
    c44.setAttribute("class", "visible2");
        
        
    }, false);
    
    
    
    
    var btseg2=document.getElementById("seg2").addEventListener("click", function(){
    
    var tc=document.getElementById("textcabell");
    var tri=document.getElementById("textrobaint");
        
    var oc1=document.getElementById("opcabell1");
    var oc2=document.getElementById("opcabell2");
    var oc3=document.getElementById("opcabell3");
    var oc4=document.getElementById("opcabell4");
        
    var ori1=document.getElementById("oprobaint1");
    var ori2=document.getElementById("oprobaint2");
    
    var seg2=document.getElementById("seg2");
    var seg3=document.getElementById("seg3");
        
    var body=document.getElementById("body");
    
    tc.setAttribute("class", "escondido");
    tri.setAttribute("class", "textdesc");
        
    oc1.setAttribute("class", "escondido");
    oc2.setAttribute("class", "escondido");
    oc3.setAttribute("class", "escondido");
    oc4.setAttribute("class", "escondido");
        
    seg2.setAttribute("class", "escondido");
    seg3.setAttribute("class", "tit3 btn btn-primary");
        
    ori1.setAttribute("class", "visiblebotons");
    ori2.setAttribute("class", "visiblebotons");
        
    body.setAttribute("class", "body4");
        
        
    }, false);
    
    
    
    var btrobaint1=document.getElementById("oprobaint1").addEventListener("click", function(){
    
    //var fondoblanco=document.getElementById("fondoblanco");
    var ri11=document.getElementById("robaint1");
    var ri21=document.getElementById("robaint2");
    
    //fondoblanco.setAttribute("class", "escondido");
    ri11.setAttribute("class", "visible");
    ri21.setAttribute("class", "escondido");
        
        
    }, false);
    
    var btrobaint2=document.getElementById("oprobaint2").addEventListener("click", function(){
    
    //var fondoblanco=document.getElementById("fondoblanco");
    var ri12=document.getElementById("robaint1");
    var ri22=document.getElementById("robaint2");
    
    //fondoblanco.setAttribute("class", "escondido");
    ri12.setAttribute("class", "escondido");
    ri22.setAttribute("class", "visible");
        
    }, false);
    
    
    
    
    var btseg3=document.getElementById("seg3").addEventListener("click", function(){
    
    var tri=document.getElementById("textrobaint");
    var tpd=document.getElementById("textrobadalt");
        
    var ori1=document.getElementById("oprobaint1");
    var ori2=document.getElementById("oprobaint2");
    
    var opd1=document.getElementById("oprobaarriba1");
    var opd2=document.getElementById("oprobaarriba2");
    var opd3=document.getElementById("oprobaarriba3");
    var opd4=document.getElementById("oprobaarriba4");
    var opd5=document.getElementById("oprobaarriba5");
        
    var seg3=document.getElementById("seg3");
    var seg4=document.getElementById("seg4");
        
    var body=document.getElementById("body");
    
    tri.setAttribute("class", "escondido");
    tpd.setAttribute("class", "textdesc");
        
    ori1.setAttribute("class", "escondido");
    ori2.setAttribute("class", "escondido");
        
    seg3.setAttribute("class", "escondido");
    seg4.setAttribute("class", "tit3 btn btn-primary");
        
    opd1.setAttribute("class", "visiblebotons");
    opd2.setAttribute("class", "visiblebotons");
    opd3.setAttribute("class", "visiblebotons");
    opd4.setAttribute("class", "visiblebotons");
    opd5.setAttribute("class", "visiblebotons");
        
    body.setAttribute("class", "body5");
        
        
    }, false);
    
    
    
    var btrobaarriba1=document.getElementById("oprobaarriba1").addEventListener("click", function(){
    
    var ra11=document.getElementById("robaarriba1");
    var ra21=document.getElementById("robaarriba2");
    var ra31=document.getElementById("robaarriba3");
    var ra41=document.getElementById("robaarriba4");
    var ra51=document.getElementById("robaarriba5");
    
    ra11.setAttribute("class", "visible");
    ra21.setAttribute("class", "escondido");
    ra31.setAttribute("class", "escondido");
    ra41.setAttribute("class", "escondido");
    ra51.setAttribute("class", "escondido");
        
        
    }, false);
    
    var btrobaarriba2=document.getElementById("oprobaarriba2").addEventListener("click", function(){
    
    var ra12=document.getElementById("robaarriba1");
    var ra22=document.getElementById("robaarriba2");
    var ra32=document.getElementById("robaarriba3");
    var ra42=document.getElementById("robaarriba4");
    var ra52=document.getElementById("robaarriba5");
    
    ra12.setAttribute("class", "escondido");
    ra22.setAttribute("class", "visible");
    ra32.setAttribute("class", "escondido");
    ra42.setAttribute("class", "escondido");
    ra52.setAttribute("class", "escondido");
        
    }, false);
    
    var btrobaarriba3=document.getElementById("oprobaarriba3").addEventListener("click", function(){
    
    var ra13=document.getElementById("robaarriba1");
    var ra23=document.getElementById("robaarriba2");
    var ra33=document.getElementById("robaarriba3");
    var ra43=document.getElementById("robaarriba4");
    var ra53=document.getElementById("robaarriba5");
    
    ra13.setAttribute("class", "escondido");
    ra23.setAttribute("class", "escondido");
    ra33.setAttribute("class", "visible");
    ra43.setAttribute("class", "escondido");
    ra53.setAttribute("class", "escondido");
        
    }, false);
    
    var btrobaarriba4=document.getElementById("oprobaarriba4").addEventListener("click", function(){
    
    var ra14=document.getElementById("robaarriba1");
    var ra24=document.getElementById("robaarriba2");
    var ra34=document.getElementById("robaarriba3");
    var ra44=document.getElementById("robaarriba4");
    var ra54=document.getElementById("robaarriba5");
    
    ra14.setAttribute("class", "escondido");
    ra24.setAttribute("class", "escondido");
    ra34.setAttribute("class", "escondido");
    ra44.setAttribute("class", "visible");
    ra54.setAttribute("class", "escondido");
        
    }, false);
    
    var btrobaarriba5=document.getElementById("oprobaarriba5").addEventListener("click", function(){
    
    var ra15=document.getElementById("robaarriba1");
    var ra25=document.getElementById("robaarriba2");
    var ra35=document.getElementById("robaarriba3");
    var ra45=document.getElementById("robaarriba4");
    var ra55=document.getElementById("robaarriba5");
    
    ra15.setAttribute("class", "escondido");
    ra25.setAttribute("class", "escondido");
    ra35.setAttribute("class", "escondido");
    ra45.setAttribute("class", "escondido");
    ra55.setAttribute("class", "visible");
        
    }, false);
    
    
    
    
    var btseg4=document.getElementById("seg4").addEventListener("click", function(){
    
    var tri=document.getElementById("textrobadalt");
    var trd=document.getElementById("textrobaabaix");
        
    var ora1=document.getElementById("oprobaarriba1");
    var ora2=document.getElementById("oprobaarriba2");
    var ora3=document.getElementById("oprobaarriba3");
    var ora4=document.getElementById("oprobaarriba4");
    var ora5=document.getElementById("oprobaarriba5");
        
    var orb1=document.getElementById("oprobaabajo1");
    var orb2=document.getElementById("oprobaabajo2");
    var orb3=document.getElementById("oprobaabajo3");
    var orb4=document.getElementById("oprobaabajo4");
    var orb5=document.getElementById("oprobaabajo5");
    var orb6=document.getElementById("oprobaabajo6");
        
    var seg4=document.getElementById("seg4");
    var seg5=document.getElementById("seg5");
        
    var body=document.getElementById("body");
    
    tri.setAttribute("class", "escondido");
    trd.setAttribute("class", "textdesc");
        
    ora1.setAttribute("class", "escondido");
    ora2.setAttribute("class", "escondido");
    ora3.setAttribute("class", "escondido");
    ora4.setAttribute("class", "escondido");
    ora5.setAttribute("class", "escondido");
        
    seg4.setAttribute("class", "escondido");
    seg5.setAttribute("class", "tit3 btn btn-primary");
        
    orb1.setAttribute("class", "visiblebotons");
    orb2.setAttribute("class", "visiblebotons");
    orb3.setAttribute("class", "visiblebotons");
    orb4.setAttribute("class", "visiblebotons");
    orb5.setAttribute("class", "visiblebotons");
    orb6.setAttribute("class", "visiblebotons");
        
    body.setAttribute("class", "body6");
        
        
    }, false);
    
    
    var btrobabaix1=document.getElementById("oprobaabajo1").addEventListener("click", function(){
    
    var rb11=document.getElementById("robaabajo1");
    var rb21=document.getElementById("robaabajo2");
    var rb31=document.getElementById("robaabajo3");
    var rb41=document.getElementById("robaabajo4");
    var rb51=document.getElementById("robaabajo5");
    var rb61=document.getElementById("robaabajo6");
    
    rb11.setAttribute("class", "visible");
    rb21.setAttribute("class", "escondido");
    rb31.setAttribute("class", "escondido");
    rb41.setAttribute("class", "escondido");
    rb51.setAttribute("class", "escondido");
    rb61.setAttribute("class", "escondido");
        
        
    }, false);
    
    var btrobabaix2=document.getElementById("oprobaabajo2").addEventListener("click", function(){
    
    var rb12=document.getElementById("robaabajo1");
    var rb22=document.getElementById("robaabajo2");
    var rb32=document.getElementById("robaabajo3");
    var rb42=document.getElementById("robaabajo4");
    var rb52=document.getElementById("robaabajo5");
    var rb62=document.getElementById("robaabajo6");
    
    rb12.setAttribute("class", "escondido");
    rb22.setAttribute("class", "visible");
    rb32.setAttribute("class", "escondido");
    rb42.setAttribute("class", "escondido");
    rb52.setAttribute("class", "escondido");
    rb62.setAttribute("class", "escondido");
        
    }, false);
    
    var btrobabaix3=document.getElementById("oprobaabajo3").addEventListener("click", function(){
    
    var rb13=document.getElementById("robaabajo1");
    var rb23=document.getElementById("robaabajo2");
    var rb33=document.getElementById("robaabajo3");
    var rb43=document.getElementById("robaabajo4");
    var rb53=document.getElementById("robaabajo5");
    var rb63=document.getElementById("robaabajo6");
    
    rb13.setAttribute("class", "escondido");
    rb23.setAttribute("class", "escondido");
    rb33.setAttribute("class", "visible");
    rb43.setAttribute("class", "escondido");
    rb53.setAttribute("class", "escondido");
    rb63.setAttribute("class", "escondido");
        
    }, false);
    
    var btrobabaix4=document.getElementById("oprobaabajo4").addEventListener("click", function(){
    
    var rb14=document.getElementById("robaabajo1");
    var rb24=document.getElementById("robaabajo2");
    var rb34=document.getElementById("robaabajo3");
    var rb44=document.getElementById("robaabajo4");
    var rb54=document.getElementById("robaabajo5");
    var rb64=document.getElementById("robaabajo6");
    
    rb14.setAttribute("class", "escondido");
    rb24.setAttribute("class", "escondido");
    rb34.setAttribute("class", "escondido");
    rb44.setAttribute("class", "visible");
    rb54.setAttribute("class", "escondido");
    rb64.setAttribute("class", "escondido");
        
    }, false);
    
    var btrobabaix5=document.getElementById("oprobaabajo5").addEventListener("click", function(){
    
    var rb15=document.getElementById("robaabajo1");
    var rb25=document.getElementById("robaabajo2");
    var rb35=document.getElementById("robaabajo3");
    var rb45=document.getElementById("robaabajo4");
    var rb55=document.getElementById("robaabajo5");
    var rb65=document.getElementById("robaabajo6");
    
    rb15.setAttribute("class", "escondido");
    rb25.setAttribute("class", "escondido");
    rb35.setAttribute("class", "escondido");
    rb45.setAttribute("class", "escondido");
    rb55.setAttribute("class", "visible");
    rb65.setAttribute("class", "escondido");
        
    }, false);
    
    var btrobabaix6=document.getElementById("oprobaabajo6").addEventListener("click", function(){
    
    var rb16=document.getElementById("robaabajo1");
    var rb26=document.getElementById("robaabajo2");
    var rb36=document.getElementById("robaabajo3");
    var rb46=document.getElementById("robaabajo4");
    var rb56=document.getElementById("robaabajo5");
    var rb66=document.getElementById("robaabajo6");
    
    rb16.setAttribute("class", "escondido");
    rb26.setAttribute("class", "escondido");
    rb36.setAttribute("class", "escondido");
    rb46.setAttribute("class", "escondido");
    rb56.setAttribute("class", "escondido");
    rb66.setAttribute("class", "visible");
        
    }, false);
    
    
    
    
    
    var btseg5=document.getElementById("seg5").addEventListener("click", function(){
    
    var trb=document.getElementById("textrobaabaix");
    var tco=document.getElementById("textcomplement");
        
    var orb1=document.getElementById("oprobaabajo1");
    var orb2=document.getElementById("oprobaabajo2");
    var orb3=document.getElementById("oprobaabajo3");
    var orb4=document.getElementById("oprobaabajo4");
    var orb5=document.getElementById("oprobaabajo5");
    var orb6=document.getElementById("oprobaabajo6");
        
    var oco1=document.getElementById("opcomplement1");
    var oco2=document.getElementById("opcomplement2");
    var oco3=document.getElementById("opcomplement3");
    var oco4=document.getElementById("opcomplement4");
        
    var seg5=document.getElementById("seg5");
    var seg6=document.getElementById("seg6");
        
    var body=document.getElementById("body");
    
    trb.setAttribute("class", "escondido");
    tco.setAttribute("class", "textdesc");
        
    orb1.setAttribute("class", "escondido");
    orb2.setAttribute("class", "escondido");
    orb3.setAttribute("class", "escondido");
    orb4.setAttribute("class", "escondido");
    orb5.setAttribute("class", "escondido");
    orb6.setAttribute("class", "escondido");
        
    seg5.setAttribute("class", "escondido");
    seg6.setAttribute("class", "tit3 btn btn-primary");
        
    oco1.setAttribute("class", "visiblebotons");
    oco2.setAttribute("class", "visiblebotons");
    oco3.setAttribute("class", "visiblebotons");
    oco4.setAttribute("class", "visiblebotons");
        
    body.setAttribute("class", "body7");
        
        
    }, false);
    
    
    var btcomplement1=document.getElementById("opcomplement1").addEventListener("click", function(){
    
    var co11=document.getElementById("complement1");
    var co21=document.getElementById("complement2");
    var co31=document.getElementById("complement3");
    var co41=document.getElementById("complement4");
    
    co11.setAttribute("class", "visible");
    co21.setAttribute("class", "escondido");
    co31.setAttribute("class", "escondido");
    co41.setAttribute("class", "escondido");
        
        
    }, false);
    
    var btcomplement2=document.getElementById("opcomplement2").addEventListener("click", function(){
    
    var co12=document.getElementById("complement1");
    var co22=document.getElementById("complement2");
    var co32=document.getElementById("complement3");
    var co42=document.getElementById("complement4");
    
    co12.setAttribute("class", "escondido");
    co22.setAttribute("class", "visible");
    co32.setAttribute("class", "escondido");
    co42.setAttribute("class", "escondido");
        
    }, false);
    
    var btcomplement3=document.getElementById("opcomplement3").addEventListener("click", function(){
    
    var co13=document.getElementById("complement1");
    var co23=document.getElementById("complement2");
    var co33=document.getElementById("complement3");
    var co43=document.getElementById("complement4");
    
    co13.setAttribute("class", "escondido");
    co23.setAttribute("class", "escondido");
    co33.setAttribute("class", "visible");
    co43.setAttribute("class", "escondido");
        
    }, false);
    
    var btcomplement4=document.getElementById("opcomplement4").addEventListener("click", function(){
    
    var co14=document.getElementById("complement1");
    var co24=document.getElementById("complement2");
    var co34=document.getElementById("complement3");
    var co44=document.getElementById("complement4");
    
    co14.setAttribute("class", "escondido");
    co24.setAttribute("class", "escondido");
    co34.setAttribute("class", "escondido");
    co44.setAttribute("class", "visible");
        
    }, false);
    
    
    
    
    var btseg6=document.getElementById("seg6").addEventListener("click", function(){
    
    var tco=document.getElementById("textcomplement");
    var tsa=document.getElementById("textsabates");
        
    var oco1=document.getElementById("opcomplement1");
    var oco2=document.getElementById("opcomplement2");
    var oco3=document.getElementById("opcomplement3");
    var oco4=document.getElementById("opcomplement4");
        
    var osa1=document.getElementById("opsabates1");
    var osa2=document.getElementById("opsabates2");
    var osa3=document.getElementById("opsabates3");
    var osa4=document.getElementById("opsabates4");
        
    var seg5=document.getElementById("seg6");
    var fin=document.getElementById("fin");
    
    var body=document.getElementById("body");
    
    tco.setAttribute("class", "escondido");
    tsa.setAttribute("class", "textdesc");
        
    oco1.setAttribute("class", "escondido");
    oco2.setAttribute("class", "escondido");
    oco3.setAttribute("class", "escondido");
    oco4.setAttribute("class", "escondido");
        
    seg5.setAttribute("class", "escondido");
    fin.setAttribute("class", "btn btn-success");
        
    osa1.setAttribute("class", "visiblebotons");
    osa2.setAttribute("class", "visiblebotons");
    osa3.setAttribute("class", "visiblebotons");
    osa4.setAttribute("class", "visiblebotons");
        
    body.setAttribute("class", "body8");
        
        
    }, false);
    
    
    var btsabates1=document.getElementById("opsabates1").addEventListener("click", function(){
    
    var sa11=document.getElementById("sabates1");
    var sa21=document.getElementById("sabates2");
    var sa31=document.getElementById("sabates3");
    var sa41=document.getElementById("sabates4");
    
    sa11.setAttribute("class", "visible");
    sa21.setAttribute("class", "escondido");
    sa31.setAttribute("class", "escondido");
    sa41.setAttribute("class", "escondido");
        
        
    }, false);
    
    var btsabates2=document.getElementById("opsabates2").addEventListener("click", function(){
    
    var sa12=document.getElementById("sabates1");
    var sa22=document.getElementById("sabates2");
    var sa32=document.getElementById("sabates3");
    var sa42=document.getElementById("sabates4");
    
    sa12.setAttribute("class", "escondido");
    sa22.setAttribute("class", "visible");
    sa32.setAttribute("class", "escondido");
    sa42.setAttribute("class", "escondido");
        
    }, false);
    
    var btsabates3=document.getElementById("opsabates3").addEventListener("click", function(){
    
    var sa13=document.getElementById("sabates1");
    var sa23=document.getElementById("sabates2");
    var sa33=document.getElementById("sabates3");
    var sa43=document.getElementById("sabates4");
    
    sa13.setAttribute("class", "escondido");
    sa23.setAttribute("class", "escondido");
    sa33.setAttribute("class", "visible");
    sa43.setAttribute("class", "escondido");
        
    }, false);
    
    var btsabates4=document.getElementById("opsabates4").addEventListener("click", function(){
    
    var sa14=document.getElementById("sabates1");
    var sa24=document.getElementById("sabates2");
    var sa34=document.getElementById("sabates3");
    var sa44=document.getElementById("sabates4");
    
    sa14.setAttribute("class", "escondido");
    sa24.setAttribute("class", "escondido");
    sa34.setAttribute("class", "escondido");
    sa44.setAttribute("class", "visible");
        
    }, false);
    
    
    
    
    var btfinal=document.getElementById("fin").addEventListener("click", function(){
    
    var textsab=document.getElementById("textsabates");
    var botons=document.getElementById("options");
    var botons2=document.getElementById("options2");
    var botons3=document.getElementById("options3");
    var fi=document.getElementById("final");
    var nomus=document.getElementById("nombreus").value;
    var txtfin=document.getElementById("textfin");
    var botfin=document.getElementById("fin");
    var botdesc=document.getElementById("desc");
    var body=document.getElementById("body");
    
        
    localStorage.nomusuari=nomus;
    
    textsab.setAttribute("class", "escondido");
    botons.setAttribute("class", "escondido");
    botons2.setAttribute("class", "escondido");
    botons3.setAttribute("class", "escondido");
    fi.setAttribute("class", "col");
    botfin.setAttribute("class", "escondido");
    botdesc.setAttribute("class", "btn btn-secondary");
    body.setAttribute("class", "body9");
        
    txtfin.innerHTML= nomus;
        
        
    }, false);
    
    
    
    }