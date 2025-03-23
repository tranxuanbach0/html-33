let dish = [
    {
        id: 1,
        name: 'rau sach',
        category: 'do an',
    },
    {
        id: 2,
        name: 'thit lon',
        category: 'do an',
    },
    {
        id: 3,
        name: 'pespsi khong calo',
        category: 'nuoc',
    },
    {
        id: 4,
        name: 'cocacola',
        category: 'nuoc',
    },
    {
        id: 5,
        name: 'co le',
        category: 'dung cu',
    },
    {
        id: 6,
        name: 'tuy vit',
        category: 'dung cu',
    }

];
function check() {
    let selectedCategory = document.getElementById("product").value;
    let result = dish.filter(item => item.category === selectedCategory);
console.log(result);
}
