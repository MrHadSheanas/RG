let buttonone=document.getElementById("btn-1");
let target=document.getElementById('come');
let login=document.querySelector('.Second-div');
let target2=document.querySelector('.coming');
let welcome=document.querySelector('.Welcome');
let clicking = false;

if(buttonone){
    buttonone.addEventListener('click',()=>{
     clicking=!clicking;
        if(clicking){
            target.style.transform = 'translateX(-87%)';
			target.classList.add('going');
			login.classList.add('show');
			document.getElementById('First-div').style.display = 'none';
			document.getElementById('btn-1').textContent = 'Register';
			document.welcome.style.left='-200px';

        }
        else{
            target.style.transform = 'translateX(0%)';
			target.classList.remove('going');
			login.classList.remove('show');
			document.getElementById('First-div').style.display = 'block';
			document.getElementById('btn-1').textContent = 'Sign in';
		
            
        }


    })
}




document.addEventListener('DOMContentLoaded', function () {
	// collect inputs in visual order inside the #main-div
	const inputs = Array.from(document.querySelectorAll('#main-div .step-input'));
	inputs.forEach((input, idx) => {
		input.addEventListener('keydown', function (e) {
			if (e.key === 'Enter') {
				e.preventDefault();
				const next = inputs[idx + 1];
				if (next) {
					next.focus();
				} else {
					// no next input: focus nearest button (optional)
					const btn = input.closest('#main-div')?.querySelector('button');
					if (btn) btn.focus();
				}
			}
		});
	});
});