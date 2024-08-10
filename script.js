// Получаем элементы DOM
main_coin_output = document.getElementById('main_coin-output')
button_update_click = document.getElementById('button-update-click')

// Загрузка сохраненных данных из localStorage
let savedClickCoins = parseFloat(localStorage.getItem('clickCoins')) || 0;
let savedAnyCoinsClick = parseInt(localStorage.getItem('anyCoinsClick')) || 1;
let savedPriceofClickonClick = parseFloat(localStorage.getItem('priceofClickonClick')) || 100;

// Устанавливаем значения переменных из сохраненных данных
let clickCoins = savedClickCoins;
let anyCoinsClick = savedAnyCoinsClick;
let priceofClickonClick = savedPriceofClickonClick;

// Функция обновления отображения монет
const restartCoin = () =>{
    button_update_click.textContent = `Update +1 on click Price: ${priceofClickonClick} Click: ${anyCoinsClick}`;
    main_coin_output.textContent = clickCoins;
}

// Функция клика по монетам
const clickCoin = () =>{
    clickCoins += anyCoinsClick;
    
    restartCoin();
} 
restartCoin();

// Функция сохранения данных в localStorage
const saveClickCoins = () =>{
    localStorage.setItem('clickCoins', clickCoins);
    localStorage.setItem('anyCoinsClick', anyCoinsClick);
    localStorage.setItem('priceofClickonClick', priceofClickonClick);
    console.log('Данные сохранены:', { clickCoins, anyCoinsClick, priceofClickonClick });
}

// Функция обновления стоимости клика
const updateClicksOnClick = () =>{
    if (clickCoins >= priceofClickonClick){
        anyCoinsClick += 1;
        clickCoins -= priceofClickonClick;
        priceofClickonClick = (priceofClickonClick * 0.5) + priceofClickonClick;
        priceofClickonClick = Number.parseInt(priceofClickonClick);
        button_update_click.textContent = `Update +1 on click Price: ${priceofClickonClick} Click: ${anyCoinsClick}`;
        restartCoin();
    }
}

// Автосохранение данных каждые 500 мс
setInterval(saveClickCoins, 500);
