const menu = {
    _courses : {
    appetizers : [],
    mains : [],
    desserts : [],
    },

    get appetizers(){
      return this._courses.appetizers; 
      },
    
    get mains(){
      return this._courses.mains; 
      },
    
    get desserts(){
      return this._courses.desserts; 
      },
    
    set appetizers(valueOfAppetizer){
    this._courses.appetizers = valueOfAppetizer;
      
    },
    
    set mains(valueOfMain){
    this._courses.mains = valueOfMain;
      
    },
    
    set desserts(valueOfDessert){
    this._courses.desserts = valueOfDessert;
      
    },
    
    
    
    get courses(){
    return {
      appetizers : this.appetizers,
      mains : this.mains,
      desserts : this.desserts,
    };
    
    },
    
    addDishToCourse : function(courseName,dishName,dishPrice){
    
    const dish = {
    name : dishName,
    price  : dishPrice
    
    }
    
    return this._courses[courseName].push(dish);
    
    
    
    },

    getRandomDishFromCourse : function(courseName){
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random()*dishes.length);
      return dishes[randomIndex];
    },
    
   generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;

     return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, which totals at a price of GHC${totalPrice}`;
   }
    
    };

    menu.addDishToCourse('appetizers', 'Salad', 4.00);
    menu.addDishToCourse('appetizers', 'Soup', 4.50);
    menu.addDishToCourse('appetizers', 'Fries', 5.00);

    menu.addDishToCourse('mains', 'Fried Rice Chicken', 12.25);
    menu.addDishToCourse('mains', 'Banku Tilapia', 20.25);
    menu.addDishToCourse('mains', 'Ampesi', 13.20);
    menu.addDishToCourse('mains', 'Fufu Goat', 15.25);
    menu.addDishToCourse('mains', 'Waakye', 16.20);
    

    menu.addDishToCourse('desserts', 'Fruit Salad', 4.00);
    menu.addDishToCourse('desserts', 'Ice Kenkey', 10.00);
    menu.addDishToCourse('desserts', 'Cake', 3.25);
    menu.addDishToCourse('desserts', 'Coffee', 3.25);
    menu.addDishToCourse('desserts', 'Ice-cream', 5.25);

    const meal = menu.generateRandomMeal();
    console.log(meal);
