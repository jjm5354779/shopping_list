const add_item = document.querySelector('#add_item');

const add_button = document.querySelector('.add');
const body = document.querySelector('.list_box');

const item_arr = [];
add_button.addEventListener('click', () => {
	let add_value = add_item.value;
	console.log(add_value);

	let item_id = item_arr.length + 1;
	item_arr.push({ id: item_id, item: add_value });

	let h2 = document.createElement('h2');
	h2.setAttribute('class', 'item');
	h2.setAttribute('id', 'item');
	h2.textContent = add_value;
	body.appendChild(h2);

	let del_button = document.createElement('button');
	del_button.setAttribute('class', 'deleteItem');
	del_button.setAttribute('id', item_id);
	del_button.textContent = '🗑';
	body.appendChild(del_button);
	let ptag = document.createElement('p');
	body.appendChild(ptag);

	let data = '';
	item_arr.forEach((i) => {
		data += `<h2 class='item' id='${i.id}'>${i.item}</h2>`;
		data += `<button class='deleteItem' id=${i.id}>🗑</button>`;
		data += '<br>';
	});
	body.innerHTML = `
		${data}
	`;
	// const h2 = document.createElement('h2');
	// h2.setAttribute('class', 'title'); // <h2 class="title"></h2>
	// h2.textContent = 'This is a title'; // <h2 class="title">This is a title</h2>
	// body.innerHTML = `
	// 	<h1>${add_value}</h1>
	// 	<button class='delete_item' id='1'>🗑</button>
	// 	`;
});

document.addEventListener('DOMLinkAdded', (e) => {
	const delete_button = document.querySelector('.deleteItem');
	// const delete_button = document.querySelector('.deleteItem');
	console.log(`delete_button: ${delete_button}`);
	delete_button.addEventListener('click', (e) => {
		console.log('e');
		console.log(e);
	});
});

// console.log(item_arr.length);
// if (item_arr.length > 0) {
// 	console.log('IN');
// 	const delete_button = document.querySelector('#1');
// 	// const delete_button = document.querySelector('.deleteItem');
// 	console.log(`delete_button: ${delete_button}`);
// 	delete_button.addEventListener('click', (e) => {
// 		console.log('e');
// 		console.log(e);
// 	});
// }
