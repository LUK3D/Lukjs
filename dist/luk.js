/*(function (window){
    'use strict'

    function defineLuk(){




        var luk = function(tag){
            if(tag.has)

             return document.querySelector(tag);
            };



        luk.alerta = function (mensagem) { 
            alert(mensagem);
         };





         
         return luk;
    }





    if(typeof(luk) ==='undefined'){
        window.luk = defineLuk();
    }
} ) (window);

*/

var elementos = new Array();

function luk(selector){

    var el = {}; //Inicializando a variavel de funcoes
    el.selector = selector; //Pegando um selector
    el.elemento = document.querySelector(el.selector); //Pegando o elemento

    el.html = function () {return el.elemento;};

    el.attr = function(nome,valor){
        if(!valor)return el.elemento.getAttribute(nome);
        el.elemento.setAttribute(nome,valor);
        return el;
    };

    el.on = function(evento,funcao){
        el.elemento['on' + evento] = funcao;
        return el;
    }

    el.cascata= function(elemento){
        $(elemento).slideToggle();
        
        return el;
    }

    /////////////////CRIACAO DA PAGINACAO//////////////////

    //var elementos = new Array();
    var pos = 0;

    el.paginacao = function(lista,contador,quatidade){
        
        $(lista+">*").each(function(){
            elementos.push($(this).html());
            
        });
        $(lista).html("");

        for (let i = pos; i < quatidade; i++) {
            
            $(lista).append("<li>novo "+ elementos[i]+"</li>");
            console.log("add");
            
        }

        $(contador).html("sadasd");
      //  $(lista).html("Pequenos testes");
        return el;
    }

    var Poptamanho ="";

    el.popup = function (titulo,icon,tamanho) { 
   
        $("[luk*=blockPopups]").removeClass("scale-out-center ");

        $("[luk*=blockPopups]").addClass("slide-in-elliptic-top-fwd");


        $("[luk*=blockPopups]").show();
        return el;

    }
    el.popup2 = function (titulo,icon,tamanho) { 
   
        $("[luk*=blockPopups2]").removeClass("scale-out-center ");

        $("[luk*=blockPopups2]").addClass("slide-in-elliptic-top-fwd");


        $("[luk*=blockPopups2]").show();
        return el;

    }

   

    el.popupx = function () {
        $("[luk*=blockPopups]").removeClass("slide-in-elliptic-top-fwd");
        $("[luk*=blockPopups]").addClass("scale-out-center");
        return el;
      }
    el.popupx2 = function () {
        $("[luk*=blockPopups2]").removeClass("slide-in-elliptic-top-fwd");
        $("[luk*=blockPopups2]").addClass("scale-out-center");
        return el;
      }

      el.lista_p = function (lista,Container,numero,cor="cr-br"){

     var n = 0;

     var total = 0;

      
        $(lista+">*").each(function(){
            elementos.push($(this));
           
            
        });




        
       let n1 = 0;
       
       $(Container).html("");
        if(elementos.length>0){
            for (let index =0; index <= elementos.length; index+=numero) {
                var string ='<span luk="btn ctr-f ctr-p btn-p'+cor+' borda"  ondblclick="marcar(\'teste\',\'#000\')" class="teste"  style="margin:10px;"  onclick="paginar(\''+lista+'\','+total+','+index+',this)">'+((n1!=0)?n1:"<span class='ti-list'></span> Listar Todos...")+'<span>';
                total = index;
                $(Container).append(string);
                n1++;
            }

/* 
            var string ='<span luk="btn ctr-f ctr-p btn-p '+cor+' borda" style="margin:10px;" onclick="paginar()"><span class="ti-arrow-right"></span><span>';
            $(Container).append(string);
 */

        }
        
        

      }


    
    

return el;
}

function vai (destino) {
   
    document.location = (destino);
   
  }


  
function paginar (container,total,quantidade,elemento) {
   // console.log(elementos.slice(0, parseInt(quantidade)));
  // console.log(elementos);
  $(container).html("");
  if (parseInt(total)>0 || parseInt(quantidade)>0) {
       elementos.slice(parseInt(total),(parseInt(quantidade))).forEach(element => {$(container).append(element); });
    }else{
        elementos.forEach(element => {$(container).append(element); });

    }

    $(elemento).parent().children().each(function(){
        $(this).show();
    });
/* $(elemento).attr("style",$(elemento).attr('style')+"Background:#000 !important"); */
    $(elemento).hide();
    //$(container).html(elementos.slice(0, parseInt(quantidade))[0] );
   
  }

  
var funcao = function(){}

 function messageboxOpen(titulo,conteudo,icon,func,cor){
    $('.poptitulo').parent().css('color',cor);
     if(!cor){
        $('.poptitulo').parent().css('color','#515a6e');

     }
    $('.poptitulo').html(titulo);
    
    $('#pop * #popconteudo').html(conteudo);
    $('#pop').css('display','flex');
    $('#pop * #popicon').attr("class","ti-"+icon);

    funcao = function(){
        return window[func]("");
    }
    

}

function sim(){
    messaboxClose();
     setTimeout(() => {
        funcao();
     }, 2000);
}




function teste(){
    alert("funcionou");
}



function messaboxClose(){
    $($('#pop')).fadeToggle();

}

  function update(){

    
  function lformDeactive(container){

    $(container + "* input").attr("disabled",'true');

        $(container).find("input").each(function(){
            $(this).attr("disabled",'true');
            
    });

    $(container).find("select").each(function(){
        $(this).attr("disabled",'true');
    });
  }
  

    $("[luk*=form]> input").each(function(){
        if(! $(this).attr("placeholder")){
            $(this).attr("placeholder", "");
        }
        var ena = "";
       
        if( $(this).attr("disabled")){
            ena ="disabled";
        }

       var html = '<label luk="i-1 flex s-w-b" style="'+$(this).attr('l-style')+'" luk="'+$(this).attr('l-luk')+'"><span class="ti-'+ $(this).attr("ltype")+'"></span><input  onchange="'+$(this).attr('onchange')+'"  onclick="'+$(this).attr('onclick')+'" id="'+$(this).attr('id')+'" style="'+$(this).attr('style')+'" luk="'+$(this).attr('luk')+'" type="'+$(this).attr('type')+'" '+ena+'  name="'+$(this).attr('name')+'" placeholder="'+$(this).attr('placeholder')+'" class="'+((!$(this).attr('class'))?"":$(this).attr('class'))+'" lform="'+((!$(this).attr('lform'))?"":$(this).attr('lform'))+'" value="'+((!$(this).attr('value'))?"":$(this).attr('value'))+'"> '+(($(this).attr('html'))?$(this).attr('html'):'')+' <label>';
       $(this).parent().append(html);
       $(this).remove();
     //  console.log($(this));

   });

   $("[luk*=form]> select").each(function(){
       if(! $(this).attr("placeholder")){
           $(this).attr("placeholder", "");
       }
       var ena = "";
       
        if( $(this).attr("disabled")){
            ena ="disabled";
        }

       var filhos = $(this).html();

      var html = '<label  style="'+$(this).attr('l-style')+'" luk="i-1 flex s-w-b '+$(this).attr('l-luk')+'"><span class="ti-'+ $(this).attr("ltype")+'"></span><select '+ena+' id="'+$(this).attr('id')+'" class="'+$(this).attr('class')+'" style="'+$(this).attr('style')+'" luk="'+$(this).attr('luk')+'" name="'+$(this).attr('name')+'" placeholder="'+$(this).attr('placeholder')+'" value="">'+filhos+' </select> '+(($(this).attr('html'))?$(this).attr('html'):'')+' <label>';
      $(this).parent().append(html);
      $(this).remove();
   //   console.log($(this));

  });


  $('[luk*=nFormat]').each(function(){
      var valor = $(this).html().toString("0-0-0");
    $(this).html(valor.toString("0.0"));

   // console.log(valor);
   
    
});


  
  }

  function lformActive(container){

    $(container + "* input").removeAttr("disabled");

        $(container).find("input").each(function(){
            $(this).removeAttr("disabled");
    });

    $(container).find("select").each(function(){
        $(this).removeAttr("disabled");
    });
  }

  function limpar(elemento){
    $(elemento).find("input").each(function(){
    $(this).val("");
    });

    $(elemento).find("select").each(function(){
        $(this).val("");
    });

  }



  function limpar(elemento){
    $(elemento).find("input").each(function(){
    $(this).val("");
    });

    $(elemento).find("select").each(function(){
        $(this).val("");
    });

  }


 

$(document).ready(function () {

update();


    console.log(" Seja bem-vindo ao Luk");

    
    
    $("[luk*=cascata]> [luk*=cascata-btn]").click(function (e) { 
        $("[luk*=cascata] [luk*=cascata-btn]").next().slideUp();
       
        
        $(this).next().slideToggle();
        $("*").removeClass("cascata-btn");
        $(this).addClass("cascata-btn");
        $(this).next().addClass("cascata-btn");
    });

     $("[luk*=cascata]> [luk*=cascata-btn]").next().hide();

    

    $("[luk*=lista-n]> li").prepend('<span class="ti-control-record">');


    /*$("[luk*=blockPopups]").click(function (e) { 
        $(this).fadeOut();        
    });*/


    $("[lform*=decimal]").on("keypress keyup blur",function (event) {
        //this.value = this.value.replace(/[^0-9\.]/g,'');
 $(this).val($(this).val().replace(/[^0-9\.]/g,''));
        if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }

    });

$("[lform*=int]").on("keypress keyup blur",function (event) {    
       $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }

       
    });

    /*$("[lform*=int]").focusout(function () { 
        $(this).val($(this).val().replace(/[^\d].+/, ""));
    });*/

    $("[lform*=decimal]").focusout(function () { 
        $(this).val(formatarString($(this).val()));
    });
   
   


});


   
function formatarString(nStr)
{
  //  var string = nStr.split('.').join('');
   // var result = Math.round( parseFloat(nStr)*100)/100;
 //   console.log(new Intl.NumberFormat('de-DE').format( parseFloat(string) ));
  //  return  new Intl.NumberFormat('de-DE').format(parseFloat(string));
  
  //return result;

  nStr += '';
    x = nStr.split(',');
    x1 = x[0];
    x2 = x.length > 1 ? ',' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2;

    
}

/* Imprimir area */


function printDiv(elemento) 
{

  var divToPrint=$(elemento);
  console.log($(elemento).html());

  var newWin=window.open('','Print-Window');

  newWin.document.open();

  newWin.document.write('<html> <link rel="stylesheet"  media="print" type="text/css"  href="dist/luk.css"> <link rel="stylesheet"  media="print" type="text/css"  href="dist/luk_print.css"> <body onload="window.print()">'+$(elemento).html()+'</body></html>');

  newWin.document.close();

  setTimeout(function(){newWin.close();},10);

}


window.onbeforeprint = imprimindo;
let valor=0;
function imprimindo(){
    console.log("Quebra de Linha");
    let quantidade = parseInt($("[luk*='print-list']").attr('print-max'));
   /*  $($("[luk*='print-list']")).children().eq(quantidade).css('page-break-before', 'always');
    console.log($("[luk*='print-list']").children().eq(0).html()); */

    $($("[luk*='print-list']")).children().each(function (indexInArray, valueOfElement) { 
         if(valor>= quantidade){
             var css = 'page-break-before: always;';
             $(this).css( 'page-break-before', 'always');
            // $(this).attr( "style", css);
             valor=0;
             
         }

         valor++;
         console.log(valor);
    });
}