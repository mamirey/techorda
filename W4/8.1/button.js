let btn = document.getElementById('btn');
let num = btn.innerHTML;
//alert(num);
/*btn.onclick = function() {
           
            btn.innerHTML = 'You clicked me!';
        };
        */
btn.addEventListener("click", function () {
    
    btn.innerHTML = ++btn.innerHTML;
});
