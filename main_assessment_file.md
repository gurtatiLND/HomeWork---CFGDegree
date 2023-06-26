
### Part 1:

#### 1.Can you provide a brief summary of what is happening in this function code?

This is a reducer function which takes state and action-like parameters, and If the type of action will be equal to "increment" then 'reducer' will do this action which is described after return: it will increase the state for 1.

#### 2.Add one action that tells the reducer to reduce the state value by 1

`if (action.type === 'decrement) {
    return {
        value: state.value - 1
    }
}`

#### 3.Add one action that tells the reducer to reset the state

`default: 
    return state;`



### Part 2:

#### 1.Can you provide a brief summary on what is happening on line 34, 39?

on line 34: declared a new state variable which is called studentsCount

on line 39: in this line passed a function as the event handler

#### 2.When a user clicks on the “Add student” button update the state (studentsCount) to include only the total number of students who are present. Using the data provided below:

+ Write a pseudocode of how your function would look.

`const handleSubmit(e) {
    e.preventDefault();
    if (students.present) {
        setStudentsCount(studentsCount => studentsCount + 1);
    } else {
        setStudentsCount(studentCounts);
    }
  }`

+ How do you ensure that the function is triggered when the button is clicked?

I pass this function to the button as the event handler: onClick={handleSubmit}

+ How will you update the state with the result of your function?

throw the "handleSubmit function I'll change the state in studentsCount


### Part 3:

#### 1.A change of code was made on line 174 (figure 4), can you briefly explain what that would do?

in this line we see that we should assign the new value(which we take from action with key 'payload') to the state

#### 2.Let’s say we don’t want to set the state locally anymore and want to use dispatch. How would you ensure that an “increment” action that also contains the result of the studentCount is dispatched on button click? According to your answer in part 2.2b what would need to be changed?

we should declare a dispatch:
`const dispatch = useDispatch();`

and than add changes in our function:

`const handleSubmit(e) {`
    `e.preventDefault();`
    `if (students.present) {`
        `setStudentsCount(studentsCount => studentsCount + 1);`
        `dispatch('increment');`
    `} else {`
        `setStudentsCount(studentCounts);`
    `}`
  `}`


#### 3.Which code do you think is best suited to ensure that the “increment” action updates the state with the correct total number of students who are present. Is it Figure 4? Or Figure 5? Explain the code difference and your reasoning

I think figure 4.
