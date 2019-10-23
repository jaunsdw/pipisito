
$(document).ready(function()
    {  
        setTimeout(seeToast, 10000);  
    } 
);
function seeToast(params) {
    $('.toast').toast('show' );
}
