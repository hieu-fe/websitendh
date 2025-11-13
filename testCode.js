const button = document.getElementById('myButton');
	const text = document.getElementById('myText');
	const input = document.getElementById('myInput');
    const button_2 = document.getElementById('button2');
    const text_2= document.getElementById('text2');
    const input_2 = document.getElementById('input2');

	button.addEventListener('click' , () => 
	{
    	console.log('Thông báo bên dưới');
    	let n = Number(input.value);
    	let t = true;

    	if (n < 2) t = false;
    	for (let i=2; i<=n-1; i++){
      	  if(n%i===0){
        	    t = false;
        	    break;
       		}
    	}
    	if (t){
        	alert('Đây là số nguyên tố :))');
        	console.log(`Số ${n} là số nguyên tố`);
    	} else {
        	alert('Đây không phải là số nguyên tố :((');
        	console.log(`Số ${n} không phải là số nguyên tố`);
    	}
    	text.innerHTML = 'Vào console để đọc thông báo !!!';
	});
    
    button_2.addEventListener('click', () =>{
    	let dem="";
    	let a = Number(input_2.value);
    	for (let d = 1; d<=a; d++){
        	dem += d + "_";
        }
        text_2.innerHTML = dem;
        console.log(dem);
    });