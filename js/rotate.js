const rotateBox = basicScroll.create({
	elem: document.querySelector('.client-item'),
	from: 'bottom-bottom',
	to: 'top-middle',
	props: {
		'--r': {
			from: '0',
			to: '1turn'
		}
	}
})

rotateBox.start()
