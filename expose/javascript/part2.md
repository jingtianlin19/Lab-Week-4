1. line 12 returns 3, because i is a var used to iterate the prices array, after the for loop iteration, i hold the value equivalent to the array length
2.  line 13 returns 150. The var discountedPrice gets reassigned every iteration for every elements in the prices array. In line 13 the discounted price of last item in the prices array will be printed which equals to 300 * (1-0.5) = 150
3.  line 14 returns 150, because the var final price is equivalent to Math.round of the last discountedPrice which is Math.round(150 * 100) /100 = 150
4.  The function will return an array of [50, 100, 150]. The returned discounted array is the discountedPrice in accordance to each price variables in the prices array.
5.  line 12 would cause an error because i is declared in the for loop using let and it is only accessible in that blcok scope. line 12 would be printing a variable not yet being declared
6.  line 13 would cause an error because discountedPrice is declared within the for loop using let and it is only accessible in that blcok scope. line 13 would be printing a variable not yet being declared
7.  line 14 would print 150, because finalPrice is declared in the function scope outside the for loop. It holds the discountedprice of the last item in the prices array which is Math.round(150 * 100) / 100 = 150
8.  the function will return an array of [50, 100, 150]. The returned discounted array is the discountedPrice in accordance to each price variables in the prices array.
9.  line 11 would cause an error because i is declared in the for loop using let and it is only accessible in that blcok scope. line 12 would be printing a variable not yet being declared
10. line 12 will return 3 because length is a const variable assigned to be the length of the prices array which is 3
11. the function will return an array of [50, 100, 150], the discounted array that holds the discounted price in accordance to each items in prices array. in every iteration the discounted price of each item in prices gets pushed into the discounted array. although discounted is a const type variable, we can changing the value by using the push function because we are not reassigning the value of discoutned. 
12. A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]
13. A. 32, because 2 map to string representation '2'
    B. 1, because '3' is converted to 3
    C. 3, because null is converted to 0
    D. 3null, because null is converted to 'null'
    E. 4, befcause true is converted to 1
    F. 0, because false is converted to 0 and null is converted to 0
    G. 3undefined, undefined is converted to 'undefined'
    H. NaN, because undefined is convereted to NaN, and the expression caused the conversion to fail, resulted in NaN 
14. A. true, '2' is converted to 2
    B. false, because in dictionary comparison the first char '1' is smaller than '2'
    C. true, '2' is converted to 2
    D. false, strict equality operator check the equality without type conversion, and 2 is different from '2'
    E. false, ture is converted to 1, 1 != 2
    F. true, because Boolean(2) is converted to true
15. '==' is the equality operator which return true if the left side is equal to the right side after type conversion and false otherwise. '===' is the strict equality operator that checks the equality without type conversion. if a and b are of different type, then a===b immediately returns false without an attempt to convert them.
17. the result will be the array [2, 4, 6]. The function dosomething simply multiply every input number by 2. The modifyArray takes an array and a function as parameters, it then perform the callback function on every element inside the input array and return the result as an array. In this case the modifyArray function takes the array [1, 2, 3] and perform function dosomething on every elements 1, 2, and 3. as a result the array [2, 4, 6] is returned.
19. 1, 4, 3, 2 
1 is printed first then 4 then 3 then 2.