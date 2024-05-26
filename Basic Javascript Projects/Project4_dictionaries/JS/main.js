function my_Dictionary() { /* Create function with key value pairs */
    var Cider = {
        Strength: "4%",
        Fruit: "Pear",
        Brand: 'Kopparberg',
        Amount: 4,
        Rating: '8/20'
    }
    delete Cider.Fruit /* Remove the value from the Fruit Key */
    document.getElementById('Dictionary').innerHTML = Cider.Fruit /* Print the value inside the Fruit key to the element with the id 'Dictionary' */
}