function formatar(src, Tipo, mask)
{
    if (src.value.length>0)
    {
        var mask, i1, i2, saida, info;
        switch ( Tipo )
        {
            case "H":
            mask = "##:##:##";
            break;
            case "C":
            mask = "#####-###";
            break;
            case "D":
            mask = "##/##/####";
            break;
            case "DT":
            mask = "##/##/#### ##:##:##";
            break;
            case "N":
            mask = "###.###.###.###,##"
            break;
            case "t":
            mask = "(##)####.####";
            break;
            case "T":
            mask = "(##)#.####.####";
            break;
            case "J":
            mask = "##.###.###/####-##";
            break;
            case "F":
            mask = "###.###.###-##";
            break;
        }
        if ( mask != null )
        {
            saida = "";
            info = String(src.value).replace(/\D/g, "");
            if ( Tipo == "N" )
            {
                i1 = info.length;
                for(i2=mask.length;i2 >= 0; i2--)
                {
                    if (mask.charAt(i2) == "#") {i1--;saida=info.charAt(i1)+saida;if(i1 == 0 )break;}
                    else {saida=mask.charAt(i2)+saida;}
                }
            }
            else
            {
                i1 = 0;
                for(i2=0;i2 < mask.length; i2++)
                {
                    if (mask.charAt(i2) == "#") {saida += info.charAt(i1);i1++;}
                    else {saida += mask.charAt(i2);}
                    if(i1==info.length)break;
                }
            }
            if ((typeof src) == "object") src.value = saida;
            else return (saida);
        }
    }    
}
