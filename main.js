new Vue({
    el: '#app',
    data: {
        newItem: '',
        items: [
            {
                id: 1,
                name: 'Clean the fridge',
                completed: true
            },
            {
                id: 2,
                name: 'Walk the dogs',
                completed: false
            }
        ],
    },
    methods: {
        addItem: function() {
            this.items.push({
                id: this.items.length + 1,
                name: this.newItem,
                completed: false
            });
            this.newItem = '';
        },
        toggleComplete: function(item) {
            item.completed = !item.completed;
        },
        removeItem: function(itemID) {
            this.items = this.items.filter((item) => item.id !== itemID);
        }
    }
});