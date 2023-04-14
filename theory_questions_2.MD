**1.1**

*What does SDLC stand for?*

The SDLC is a software development life cycle, which means it’s a process or methodology which helps create high-quality software in the shortest time with the lowest amount of money.

**1.2**

*What exception is thrown when you divide a number by 0?*

ZeroDivisionError, which is a built-in Python exception. 

**1.3**

*What is the git command that moves code from the local repository to the remote repository?*

git push

**1.4**

*What does NULL represent in a database? *

NULL isn’t a specific value but is used to signify missing or unknown   values.

**1.5**

*Name 2 responsibilities of the Scrum Master*

- The SM is responsible for maintaining and properly establishing Scrum, and explaining all that is needed to understand about theory and practice parts of Scrum for teams and the organization.
- The second responsibility is to help the Scrum teams to be effective within the Scrum framework.


**1.6**

*Name 2 debugging methods, and when you would use them.*

- Breakpoint() - this is a built - in debugging function which is new in Python 3.7 and it’s equivalent to the older 
import pdb; pdb.set_trace(). We can use it in a really good IDE with Python no less than 3.7. 
- Import pdb; pdb.set_trace() - (Python DeBugger) this is built into the standard Python Library which is mean that we can use it anytime anywhere. Plus it works in the command line.

**1.7**

*Looking at the following code, describe a case where this function would throw an error when called.*
*Describe this case and talk about what exception handling you’ll need.*

I think that function can throw a TypeError when parameters will be not  digits. For example, it will be letters (problems with the type of object). In the except block(try/except)  under the function an exception will be raised and handled by the program with the sentence “TypeError: price and сash must be digits.”

**1.8**

*What is git branching? Explain how it is used in Git.*

In my understanding, git branching is used to create a new addition branch from the main one. And it’s not only the creation of the branch but this is a place where a developer can keep changes, edit them, stage and commit process. It helps first of all to keep the main branch free from unchecked code and helps to work in both of these branches.
 
**1.9**

*Design a restaurant ordering system.*
*You do not need to write code, but describe a high-level approach:*
- *Draw a list of key requirements*
- *What are your main considerations and problems?*
- *What components or tools would you potentially use?*

Key requirements:
- friendly interface of the website
- menu managment: The system should allow the restaurant staff to easily manage and update the menu items
- secure and easy payment system
- order placement and tracking process
- order history
- security and data protection
- customer support

Main considerations and problems:
- user interface should be intuitive, easy to navigate, and visually appealing. It must be easy to reach from different devices such as desktops, mobile phones, and tablets.
- problems with order managment: tracking order status, sending notifications to customers.
- could be problems with updating actual items, removing them and adding them in real time.
- support different payment methods
- data security and privacy
- user support and feedback

Components or tools which will be usefull:
- use different reliable payment system: Paypal, Strype 
- create system which will combine all components in one for better connection to each other and data exchange.
- security tools
- Jira, Trello or anything like these for manage and track the development process
