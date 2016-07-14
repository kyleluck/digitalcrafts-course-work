class Person(object):
    def __init__(self, name):
        self.name = name

    def say_hello(self):
        print "Hello, I am %s!" % self.name

aditi = Person('Aditi')
aditi.say_hello()
