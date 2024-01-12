// Part 1
// #1
for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  })
};
// What will the console display and why?
// Answer: The time, in milliseconds that the timer should wait before the specified function or code is executed. If this parameter is omitted, a value of 0 is used, meaning execute "immediately", or more accurately, the next event cycle.


           // #2
// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : 
// Today is: Friday. 
// Current time is: 4PM:50:22

function displayTime(){
    let weekDays = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    const day = new Date().getDay();
    const time = new Date();
    
    console.log(`Today is: ${weekDays[day]}`);
    
    let hour = time.getHours(); // => 9
    let minutes = time.getMinutes(); // =>  30
    let seconds = time.getSeconds();
    
    console.log(`Current time is: ${hour}PM:${minutes}:${seconds}`)  
}
displayTime();

// #3
// Write a JavaScript function that reverse a number. 
// Example x = 32243;	
// Expected Output : 34223

function reverseNum(num){
    let stringNum = num.toString();
    let array = stringNum.split('');
    let reversedArrayNums = array.reverse();
    let reversedStringNum = reversedArrayNums.join('');
    let reversedNum = parseInt(reversedStringNum);
    console.log(reversedNum)
}
reverseNum(32243);


// #4
// Write a JavaScript program to calculate the factorial of a number. In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. 
// For example, 5! = 5 x 4 x 3 x 2 x 1 = 120 
function calculateFactorial(num){
    let sum = 1;
    for(let i = 1; i <= num; i++){
        sum = sum * i;
    }
    console.log(`it is sum: ${sum}`);
}
calculateFactorial(5);
calculateFactorial(10);


// #5
//  Write a JavaScript program that accepts two integers in prompt() and alert the larger one.
// let largerNum = prompt("Type two numbers:");

// alert("hello");


// #6
// Write a simple JavaScript program to join all elements of the following array into a string. 
// Sample array: myColor = ["Red", "Green", "White", "Black"];
// Expected Output : 
// "Red,Green,White,Black"
// "Red+Green+White+Black"
myColor = ["Red", "Green", "White", "Black"];

function joinElements(array){
    let joined = myColor.join(',');
    console.log(joined);
}
joinElements(myColor)

// #7
// Write a JavaScript function to get the month name from a particular date. 
// Test Data :
// console.log(month_name(new Date("10/11/2009"))); 
// console.log(month_name(new Date("11/13/2014")));
// Output :
// "October" 
// "November" 


// #8
// Write a JavaScript program to test the first character of a string is uppercase or not
function isUppercase(string){

}
isUppercase()
// #9
// Write a JavaScript program to draw a smile
// console.log(“: )”)
	

// Part 2
// #1
// На странице есть верстка:
// <div id="string-1">Ядра в вёдра, выдру в тундру!</div>
// <div id="string-2">Выдрав с выдры в тундре гетры</div>
// <div id="string-3">В недрах тундры, выдры в гетрах </div>
// <div id="string-4">Вытру гетрой выдре морду </div>
// <div id="string-5">Тырят в вёдра ядра кедров!</div>
// <div id="string-6">Вытру выдрой ядра кедров</div>
	
// Необходимо поочередно обратиться к каждому тэгу в нужном порядке, и вывести их содержимое в консоль, чтобы получилась осмысленная скороговорка.

// Вывод в консоли:
// В недрах тундры, выдры в гетрах 
// Тырят в вёдра ядра кедров! 
// Выдрав с выдры в тундре гетры 
// Вытру выдрой ядра кедров 
// Вытру гетрой выдре морду  
// Ядра в вёдра, выдру в тундру! 

// #2
// На странице есть верстка

// <div class="element">Element 1</div>
// <div class="element">Element 2</div>
// <div class="element">Element 3</div>
// <div class="element">Element 4</div>
// <div class="element">Element 5</div>
// <div class="element">Element 6</div>

// С помощью JS необходимо первым трем  элементам задать красный цвет текста, а остальным трем - зеленый.



// #3

// На странице есть контейнер <ol id="todo-list"></ol>, необходимо с помощью цикла добавить в него пять задач (элементов <li>) с классом task и текстом, взятым из массива задач из пяти элементов: 

// const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];

// Ожидаемый результат в инспекторе после выполнения скрипта:

// <ol id="todo-list">
//   <li class="task">Buy lemonade</li>
//   <li class="task">Make toasts</li>
//   <li class="task">Repair car</li>
//   <li class="task">Play games</li>
//   <li class="task">Pet a cat</li>
// </ol>

// #4
// На странице есть следующая разметка:

// <article>
// <h3>What is Lorem Ipsum?</h3>
// <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
// <h3>Where does it come from?</h3>
// <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. from "The Extremes of Good and Evil" by Cicero</p>
// <h3>Why do we use it?</h3>
// <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
// </article>

// Вам необходимо с помощью JavaScript вставить после каждого тега <p> тег <hr>, для визуального отделения абзацев друг от друга.
	
// Указания:
// Подразумевается, что вышеуказанная разметка находится внутри тега <body>.
// Нельзя модифицировать указанную разметку.
// За использование цикла дополнительные баллы.


// #5
// Дана такая разметка:

// <div id="cart-items">
// 	<div class="item">Milk 1 l.<span class="qty">x 2</span></div>
// 	<div class="item">Cola 1.5 l. <span class="qty">x 1</span></div>
// 	<div class="item">Bread <span class="qty">x 2</span></div>
// 	<div class="item">Cheese <span class="qty">x 1</span></div>
// 	<div class="item">Chocolate bar <span class="qty">x 3</span></div>
// </div>

// Необходимо с помощью JavaScript удалить элемент "Cola 1.5 l" и заменить товар "Chocolate bar" на "Canned Fish", количеством 4 штуки.

// Указания:
//  Для удаления использовать .remove()
// Для замены использовать .replaceChild()
// Подразумевается, что вышеуказанная разметка находится внутри тега <body>.


// #6
// Напишите программу для создания списка, которые будет вводить пользователь.
// Для каждого пункта:
// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте пункт и добавляйте его к <ul>.
// Процесс прерывается, когда пользователь нажимает "Отмена" или вводит пустую стр
