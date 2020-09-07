/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction()
{
  var name=document.getElementById('shippingName').value;
  var code=document.getElementById('shippingZip').value;
  if(document.getElementById('same').checked){
  document.getElementById('billingName').value=name;
  document.getElementById('billingZip').value=code;}
    else
    {
        document.getElementById('billingName').value=null;
  document.getElementById('billingZip').value=null;
    }
}