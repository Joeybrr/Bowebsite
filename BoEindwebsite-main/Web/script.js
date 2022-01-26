const MyTitle = document.getElementById('MyTitle');
const MyImage = document.getElementById('MyImage');
const MyInput = document.getElementById('MyInput');

let locations = [{
        "Title": "spot 0",
        "Image": "img/spot0.png",
    },
    {
        "Title": "Spot 1",
        "Image": "img/spot1.png"
    },
    {
        "Title": "Spot 2",
        "Image": "img/spot2.png"
    },
    {
        "Title": "Spot 3",
        "Image": "img/spot3.png"
    },
    {
        "Title": "Spot 4",
        "Image": "img/spot4.png"
    },
    {
        "Title": "Spot 5",
        "Image": "img/spot5.png"
    },
    {
        "Title": "Spot 6",
        "Image": "img/spot6.png"
    },
    {
        "Title": "Spot 7",
        "Image": "img/spot7.png"
    },
    {
        "Title": "Spot 8",
        "Image": "img/spot8.png"
    },
    {
        "Title": "Spot 9",
        "Image": "img/spot9.png"
    },
    {
        "Title": "Spot 10",
        "Image": "img/spot10.png"
    },
    {
        "Title": "Spot 11",
        "Image": "img/spot11.png"
    },
    {
        "Title": "Spot 12",
        "Image": "img/spot12.png"
    }
]

function show(index) {
    MyTitle.innerHTML = locations[index].Title;
    MyImage.src = locations[index].Image;
}

function GetInput() {
    show(MyInput.value);
    MyInput.value = "";
    MyInput.focus();
}