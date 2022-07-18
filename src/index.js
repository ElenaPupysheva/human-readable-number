module.exports = function toReadable (number) {
    n=number.toString();
    let l=n.length;//длина строки
    let splits=n.split('');
    let hun="";
    let dec="";
    let edn="";
    if (l==3) {
        switch (splits[0]) {
            case "1" :
                hun="one hundred";
                break;
            case "2" :
                hun="two hundred";
                break;
            case "3" :
                hun="three hundred";
                break;
            case "4" :
                hun="four hundred";
                break;
            case "5" :
                hun="five hundred";
                break;
            case "6" :
                hun="six hundred";
                break;
            case '7' :
                hun="seven hundred";
                break;
            case '8' :
                hun="eight hundred";
                break;
            case "9" :
                hun="nine hundred";
                break;}
        
            if (splits[1]=="1") {
                switch (splits[2]) {
                    case "0":
                    dec=" ten";
                    break;
                    case "1":
                    dec=" eleven";
                    break;
                    case "2":
                    dec=" twelve";
                    break;
                    case "3":
                    dec=" thirteen";
                    break;
                    case "4":
                    dec=" fourteen"; 
                    break;                            
                    case '5':
                    dec=" fifteen";
                    break;
                    case "6":
                    dec=" sixteen";
                    break;
                    case "7":
                    dec=" seventeen";
                    break;
                    case "8":
                    dec=" eighteen";
                    break;
                    case "9":
                    dec=" nineteen";
                    break;
                    }
                }
            else {switch (splits[1]) {
                                case "2" :
                                    dec=" twenty";
                                    break;
                                case "3" :
                                    dec=" thirty";
                                    break;
                                case "4" :
                                    dec=" forty";
                                    break;
                                case "5" :
                                    dec=" fifty";
                                    break;
                                case "6" :
                                    dec=" sixty";
                                    break;
                                case "7" :
                                    dec=" seventy";
                                    break;            
                                case "8" :
                                    dec=" eighty";  
                                    break;          
                                case "9" :
                                    dec=" ninety";
                                    break;}}
        
        if ((splits[1])!=1){
                    switch (splits[2]) {
                                case "1":
                                    edn=" one";
                                    break;
                                case "2":
                                    edn=" two";
                                    break;
                                case "3":
                                    edn=" three";
                                    break;
                                case '4':
                                    edn=" four"; 
                                    break;                             
                                case "5":
                                    edn=" five";
                                    break;
                                case "6":
                                    edn=" six";
                                    break;
                                case "7":
                                    edn=" seven";
                                    break;
                                case "8":
                                    edn=" eight";
                                    break;
                                case '9':
                                    edn=" nine";
                                    break;
                                }}}
    else if (l==2)  {
            if (splits[0]=="1") {
                    switch (splits[1]) {
                        case "0":
                        dec="ten";
                        break;
                        case "1":
                        dec="eleven";
                        break;
                        case "2":
                        dec="twelve";
                        break;
                        case "3":
                        dec="thirteen";
                        break;
                        case "4":
                        dec="fourteen"; 
                        break;                            
                        case '5':
                        dec="fifteen";
                        break;
                        case "6":
                        dec="sixteen";
                        break;
                        case "7":
                        dec="seventeen";
                        break;
                        case "8":
                        dec="eighteen";
                        break;
                        case "9":
                        dec="nineteen";
                        break;
                        }
                    }
                else {switch (splits[0]) {
                                    case "2" :
                                        dec="twenty";
                                        break;
                                    case "3" :
                                        dec="thirty";
                                        break;
                                    case "4" :
                                        dec="forty";
                                        break;
                                    case "5" :
                                        dec="fifty";
                                        break;
                                    case "6" :
                                        dec="sixty";
                                        break;
                                    case "7" :
                                        dec="seventy";
                                        break;            
                                    case "8" :
                                        dec="eighty";  
                                        break;          
                                    case "9" :
                                        dec="ninety";
                                        break;}}
                        if ((splits[0])!=1){
                                    switch (splits[1]) {
                                                case "1":
                                                    edn=" one";
                                                    break;
                                                case "2":
                                                    edn=" two";
                                                    break;
                                                case "3":
                                                    edn=" three";
                                                    break;
                                                case '4':
                                                    edn=" four"; 
                                                    break;                             
                                                case "5":
                                                    edn=" five";
                                                    break;
                                                case "6":
                                                    edn=" six";
                                                    break;
                                                case "7":
                                                    edn=" seven";
                                                    break;
                                                case "8":
                                                    edn=" eight";
                                                    break;
                                                case '9':
                                                    edn=" nine";
                                                    break;
                                                }}}
    else if (l==1) {
            switch (splits[0]) {
                        case "0":
                            edn="zero";
                            break;        
                        case "1":
                            edn="one";
                            break;
                        case "2":
                            edn="two";
                            break;
                        case "3":
                            edn="three";
                            break;
                        case '4':
                            edn="four"; 
                            break;                             
                        case "5":
                            edn="five";
                            break;
                        case "6":
                            edn="six";
                            break;
                        case "7":
                            edn="seven";
                            break;
                        case "8":
                            edn="eight";
                            break;
                        case '9':
                            edn="nine";
                            break;
                    
                                                }}
    let res=hun+dec+edn;
    console.log(res);
    return res;
  }