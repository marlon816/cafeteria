
         



    function iniciar(){
       
        function enviar(){
            var nome = document.getElementById("nome").value;
            var mesa = document.getElementById("mesa").value;
            var completo = document.getElementById("total0").value = "nome do cliente:"+nome + "\nmesa do cliente:"+mesa;
            
            
        }
        var click = document.getElementById("envia");
        click.addEventListener("click",enviar);

    
        function precos(){
        
     
           

            
          var massa_doce = [7.50 , 5.00 ,3.50 ,4.00 ,2.50 ,2.00 ,5.60];
          var nome_do_doce = ["torta de maracujá"," bolo de cenoura com corbetura de chocolate" ,"doce de mamão verde","pudim de leite ninho com nutella" ,"doce de cocô","goiabada com queixo","bolo de fubá"];
        


                      /*massa doce*/
                     
          var total_doce = document.getElementById("quantidade_doce");
          var quantidade_Total_massa_doce = document.getElementById("quantidade_doce").value;

          var seletor_massa_doce = document.getElementById("doce").value;
         
          var preco_doce = document.getElementById("preco_doce").value =  massa_doce[seletor_massa_doce]*quantidade_Total_massa_doce;

         
          
          var total_doce = document.getElementById("quantidade_doce");
          
          var valor_total = document.getElementById("total1").value = quantidade_Total_massa_doce+" "+nome_do_doce[seletor_massa_doce] +" - preço:"+preco_doce+" R$";
        
       
       
      
    

            
            var massa_salgada = [6.50 ,8.00 ,7.50 ,9.00 ,2.50 ,2.00 ,6.50];
            var nome_do_salgado = ["torta de atum","Esfiha de frango","pizza","Empada de Camarrão","Pastel de frango com caturpiri","Misto quente","Coxinha"]


                        /*salgado*/
        
                        
            var total_massa_salgada = document.getElementById("quantidade_salgado");
            var quantidade_Total_massa_salgada = document.getElementById("quantidade_salgado").value;

            var seletor_massa_salgada = document.getElementById("salgado").value;
            var preco_salgado = document.getElementById("preco_salgado").value =  massa_salgada[seletor_massa_salgada]*quantidade_Total_massa_salgada;


            
            var total_salgada = document.getElementById("quantidade_salgado");
            var valor_total = document.getElementById("total2").value = quantidade_Total_massa_salgada+" "+nome_do_salgado[seletor_massa_salgada] +" - preço:"+preco_salgado+" R$";
          
       


            var bebidas_quente = [2.50 ,3.00 ,3.50 ,4.00 ,2.50 ,4.00 ,5.00 ];
            var nome_da_bebida_quente =["Café","cappucino","café com leite","achocolatado","café expressor","Café Extra forte","mate leão"];
            

                        /*bebidas quente*/
                        
            var total_bebida_quente = document.getElementById("quantidade_Bebida_quente");
            var quantidade_Total_bebida_quente = document.getElementById("quantidade_Bebida_quente").value;

            var seletor_bebida_Quente = document.getElementById("bebidas_quente").value;
            var preco_bebidas_quente = document.getElementById("preco_bebidas_quente").value =  bebidas_quente[seletor_bebida_Quente]*quantidade_Total_bebida_quente;
            var valor_total = document.getElementById("total3").value = quantidade_Total_bebida_quente+" "+nome_da_bebida_quente[seletor_bebida_Quente] +" - preço:"+preco_bebidas_quente+" R$";


            
            var total_doce = document.getElementById("quantidade_doce");
               


                         /*bebidas fria*/
            var bebidas_frias = [2.50 ,3.00 ,3.50 ,4.00 ,2.50 ,2.00 ,2.20 ];
            var nome_da_bebida_fria = ["cocar-colar","Fanta uva","Sprits","energético","gatorade","água com gás"," água sem gás",];

            var total_bebida_fria = document.getElementById("quantidade_fria").value;
            

            var seletor_bebida_Fria = document.getElementById("bebidas_fria").value;
            var preco_bebidas_fria = document.getElementById("preco_bebidas_frias").value =  bebidas_frias[seletor_bebida_Fria]*total_bebida_fria;
            var valor_total = document.getElementById("total4").value = total_bebida_fria+" "+nome_da_bebida_fria[seletor_bebida_Fria] +" - preço:"+preco_bebidas_fria+" R$";
            
            var q1 = parseInt(quantidade_Total_bebida_quente);
            var q2 =parseInt(quantidade_Total_massa_doce);
            var q3 = parseInt(quantidade_Total_massa_salgada);
            var q4 = parseInt(total_bebida_fria);
            var total_Q =q1 + q2 + q3 + q4;
            var final = document.getElementById("total5").value = "valor total: "+(parseFloat(preco_doce + preco_salgado + preco_bebidas_quente + preco_bebidas_fria))+" R$"+"\n"+"Quantidade dos itens total: "+total_Q;
           

            
        }

        
        var mostra_Bebida = document.getElementById("bebidas_fria");
        var mostra_Bebida2 = document.getElementById("quantidade_fria");
    
        
        mostra_Bebida.addEventListener("click",precos);
        mostra_Bebida2.addEventListener("click",precos);

        var mostra_doce = document.getElementById("doce");
      mostra_doce.addEventListener("click",precos);
      var mostra_doce2 = document.getElementById("quantidade_doce");
      mostra_doce2.addEventListener("click",precos);

      
      var mostra_salgado = document.getElementById("salgado");
        mostra_salgado.addEventListener("click",precos);
        var mostra_salgado2 = document.getElementById("quantidade_salgado");
        mostra_salgado2.addEventListener("click",precos);

        var mostra_Bebida_Quente = document.getElementById("bebidas_quente");
        mostra_Bebida_Quente.addEventListener("click",precos);
        var mostra_Bebida2_quente2 = document.getElementById("quantidade_Bebida_quente");
        mostra_Bebida2_quente2.addEventListener("click",precos);

         
        
 
   
      

        

        
    
        
        

        

    }
    window.addEventListener("load",iniciar);

    
       
    

