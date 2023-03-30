let output=document.getElementById("screen");
function display(num){
    output.value=output.value+num;
}
function calculate(){
    try{
        output.value=eval(output.value);
    }
    catch(err)
    {
alert("Only numbers are allowed")
    }
}
function clr(){
    output.value='';
}
function del(){
    output.value=output.value.slice(0,-1);
}