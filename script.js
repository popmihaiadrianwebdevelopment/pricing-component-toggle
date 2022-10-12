const toggle = document.getElementById('toggle');
const flexid = document.getElementById('flexid');

toggle.addEventListener('change', e => {
	flexid.classList.toggle('show-monthly');
});