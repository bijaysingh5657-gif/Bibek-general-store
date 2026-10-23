const searchItem = document.getElementById('search-item');
searchItem.addEventListener('input', (e) => {
    const searchValue = e.target.value.toLowerCase();
    const items = document.querySelectorAll('.product');
    items.forEach((item) => {
        const itemName = item.querySelector('h2').textContent.toLowerCase();
        if (itemName.includes(searchValue)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});
