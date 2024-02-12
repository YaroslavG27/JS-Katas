// You are given a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.
// The current implementation sorts the array using a for loop.
// Your task is to refactor this function to use the sort() method instead, for a more efficient and idiomatic approach.

/*const sortNumbers = numbers => numbers.sort((number, order) => number - order)


console.log(sortNumbers([6,5,4,1,2,3]))
console.log(sortNumbers([20,100,-20,0]))*/

// Create a sortNames function that takes an array of strings (names) and returns the array sorted alphabetically.

/*const sortNames = names => names.sort()

console.log(sortNames(['Bob','Alice','David']))
console.log(sortNames(['Xenia','Xander','Xavia']))*/

// Create a function named filterAndSortBooks.
// This function will take two parameters: an array of book objects and a minimum rating value.
// Each book object contains a title, an author, and a rating. The function should first use the filter() method to keep only the books with a rating greater than or equal to the minimum rating value.
// Then, it should use the sort() method to sort these filtered books in descending order of their ratings.
// The function should return the sorted array of books.

function filterAndSortBooks(books, rating){
    return books.filter(book => {
        return book.rating >= rating}).sort((a, b) => b.rating - a.rating)
}

console.log(filterAndSortBooks([{'title':'The Great Gatsby','author':'F. Scott Fitzgerald','rating':8.5},{'title':'1984','author':'George Orwell','rating':9},{'title':'To Kill a Mockingbird','author':'Harper Lee','rating':8.3}],8.4))
console.log(filterAndSortBooks([{'title':'Atomic Habits','author':'James Clear','rating':9},{'title':'Mindset','author':'Carol Dwecks','rating':9},{'title':'Dare to Lead','author':'Brene Brown','rating':7.2}],7.3))