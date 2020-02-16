var firstElem = document.createElement('div');
firstElem.className = 'first';
firstElem.style.backgroundColor = 'blue';
firstElem.style.height = '50px';
firstElem.style.width = '50px';
document.body.append(firstElem);

var secondElem= document.createElement('div');
secondElem.className = 'second';
secondElem.style.backgroundColor = 'red';
secondElem.style.height = '70px';
secondElem.style.width = '70px';
document.body.append(secondElem);

var thirdElem = document.createElement('div');
thirdElem.className = 'third';
thirdElem.style.backgroundColor = 'green';
thirdElem.style.height = '90px';
thirdElem.style.width = '90px';
document.body.append(thirdElem);

document.onmousedown = function(e) {

	if (e.which != 1) { // если клик правой кнопкой мыши
		return; // то он не запускает перенос
	}

	var elem = e.target.closest('div');

	if (!elem) return; // не нашли, клик вне draggable-объекта

	var dragElem = elem;

	var coords = getCoords(dragElem);
	var shiftX = e.pageX - coords.left;
	var shiftY = e.pageY - coords.top;

	dragElem.style.position = 'absolute';
	document.body.appendChild(dragElem);
	moveAt(e);

	dragElem.style.zIndex = 1000; // над другими элементами

	function moveAt(e) {
		dragElem.style.left = e.pageX - shiftX + 'px';
		dragElem.style.top = e.pageY - shiftY + 'px';
	}

	document.onmousemove = function(e) {
		moveAt(e);
	};

	dragElem.onmouseup = function() {
		document.onmousemove = null;
		dragElem.onmouseup = null;
	};

	dragElem.ondragstart = function() {
		return false;
	};

	function getCoords(elem) {
		var box = elem.getBoundingClientRect();
		return {
			top: box.top + pageYOffset,
			left: box.left + pageXOffset
		};

	}

};
