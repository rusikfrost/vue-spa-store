const shop = [
  {
    name: "Чат бот Вконтакте с функцией - вопрос/ответ",
    price: 1000,
    quantity: 0
  },
  {
    name: "Спам бот Вконтакте для рассылки в комментарии с автолайком",
    price: 1500,
    quantity: 0
  },
  {
    name: "Спам бот Вконтакте для рассылки в личные сообщения",
    price: 1000,
    quantity: 0
  },
  {
    name: "Бот для парсинга сайта и размещения информации в группе Вконтакте",
    price: 2000,
    quantity: 0
  },
  {
    name: "Бот для парсинга других групп Вконтакт и размещения информации в Вашей группее", 
    price: 2000,
    quantity: 0
  }
];

const vm = new Vue({
  el: "#app",
  data: {
    items: [], 
    shop: shop,
    showCart: false,
    verified: false,
    quantity: 1
  },
  computed: {
    total() {
      var total = 0;
      for(var i = 0; i < this.items.length; i++) {
        total += this.items[i].price;
      }
      return total;
    }
  },
  methods: {
    addToCart(item) {
      item.quantity += 1;
      this.items.push(item);
    },
    removeFromCart(item) {
      item.quantity -= 1;
      this.items.splice(this.items.indexOf(item), 1);
    }
  }
});