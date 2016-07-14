## Bonus: Todo List

# Make a command-line-based todo list app that stores your tasks in a text file called tasks.txt. The app has the following commands:
#
# 1. list - lists the tasks
# 2. add - add a task
# 3. remove - remove a task
# 4. move - move a task up or down


def read_contents():
    "read the file and return its contents after removing empty elements from the list"
    list_file = open('tasks.txt', 'r')
    list_file.seek(0)
    contents = list_file.read()
    tasks = contents.split('\n')

    # remove any empty elements
    while '' in tasks: tasks.remove('')
    list_file.close()

    return tasks

def format_tasks(tasks):
    "format the tasks as a string. tasks is passed in as a list"
    for x in range(0, len(tasks)):
        tasknumber = x + 1
        tasks[x] = str(tasknumber) + ' ' + tasks[x]

    formatted_tasks = '\n'.join(tasks)
    return formatted_tasks

def add_task(task):
    "append the task to the file"
    list_file = open('tasks.txt', 'a')
    task = task + '\n'
    list_file.write(task)
    list_file.close()
    return

def remove_task(task_to_delete):
    "rewrite the file, except for the task to be deleted"
    tasks = read_contents()
    list_file = open('tasks.txt', 'w')

    for task in tasks:
        if task != task_to_delete:
            list_file.write(task + '\n')

    list_file.close()
    return

def move_task(moves):
    "move a task in the list by deleting and inserting at proper position"
    # some error handling for user input
    if len(moves) > 2:
        print "Please enter moves like: 1 3"
        return
    task_to_move = int(moves[0]) - 1
    move_to = int(moves[1]) - 1
    contents = read_contents()

    list_file = open('tasks.txt', 'w')

    # move positions in list
    contents.insert(move_to, contents.pop(task_to_move))

    # rewrite file with new order
    for task in contents:
        list_file.write(task + '\n')

    list_file.close()
    return

def start():
    "prompt the user for what they want to do"
    print '''
    What would you like to do?
    1. List the tasks
    2. Add a task
    3. Delete a task
    4. Change task priority
    5. Exit
    '''
    response = int(raw_input("> "))
    complete_action(response)

def complete_action(response):
    "execute action depending on user input"
    if response == 1:
        tasks = read_contents()
        print format_tasks(tasks)
        start()
    elif response == 2:
        print "Please type the task you'd like to add:"
        new_task = raw_input("> ")
        add_task(new_task)
        print "Task has been added!"
        start()
    elif response == 3:
        print "Please type the task you want to remove:"
        task_to_remove = raw_input("> ")
        remove_task(task_to_remove)
        print "Task has been removed."
        start()
    elif response == 4:
        print "Enter the task you want to move followed by the place to move it to. Ex: 1 3"
        moves = raw_input('> ')
        moves = moves.split(' ')
        move_task(moves)
        print "Move complete!"
        start()
    elif response == 5:
        exit(0)
    else:
        print "Please select a valid option."


# start the program
start()
