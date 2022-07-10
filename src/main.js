// const html =(
//     <form class="login-fm">
//     <div class="login-fm__item">
//         <label class="login-fm__email" for="email">Email: </label>
//         <input class="login-fm__input" type="email" type="text" />
//     </div>
//     <div class="login-fm__item">
//         <label class="login-fm__email" for="password">Password:  </label>
//         <input class="login-fm__input" type="email" type="text" />
//     </div>
//     <div class="login-fm__item">
//         <button class="login-fm__submit-btn" type="submit">login</button>
//     </div>
// </form>
// );
Array.prototype.myFind = function (cb) {
	for (let i = 0; i < this.length; i++) {
		let number = this[i];
		if (cb(number)) {
			return number;
		}
	}
};
function cb(n) {
	return n < 5;
}

const numberList = [1, 2, 5, 8];
// console.log(numberList.myFind(cb));

Array.prototype.myFindIndex = function (tb) {
	for (let i = 0; i < this.length; i++) {
		let number = this[i];
		if (tb(number)) {
			return i;
		}
	}
};
function tb(n) {
	return n < 2;
}
console.log(numberList.myFindIndex(tb));
