"""
Added a store. The hero can now buy a tonic or a sword. A tonic will add 2 to the hero's health wherease a sword will add 2 power.
"""
import random
import time

# make a class named Character that inherits object
class Character(object):
    # class Character has a method alive that takes self as a parameter
    def alive(self):
        return self.health > 0

    # class Character has a method attach that takes self and enemy as parameters
    def attack(self, enemy):
        if not self.alive():
            return
        print "%s attacks %s" % (self.name, enemy.name)
        enemy.receive_damage(self.power)
        time.sleep(1.5)

    # class Character has a method receive_damage that takes self and points as parameters
    def receive_damage(self, points):
        self.health -= points
        print "%s received %d damage." % (self.name, points)
        if self.health <= 0:
            print "%s is dead." % self.name

    # class Character has a method print_status that takes self as a parameter
    def print_status(self):
        print "%s has %d health and %d power." % (self.name, self.health, self.power)

# make a class named Hero that inherits Character
class Hero(Character):
    # class Hero has a dunder-init that takes self as a parameter
    def __init__(self):
        self.name = 'hero'
        self.health = 10
        self.power = 5
        self.coins = 20

    # class Hero has a method named restore that takes self as a parameter
    def restore(self):
        self.health = 10
        print "Hero's heath is restored to %d!" % self.health
        time.sleep(1)

    # class Hero has a method named buy that takes self and item as paramters
    def buy(self, item):
        self.coins -= item.cost
        item.apply(hero)

# make a class named Goblin that inherits Character
class Goblin(Character):
    # class Goblin has a dunder-init that takes self as a parameter
    def __init__(self):
        self.name = 'goblin'
        self.health = 6
        self.power = 2

# make a class named Wizard that inherits Character
class Wizard(Character):
    # class Wizard has a dunder-init that takes self as a parameter
    def __init__(self):
        self.name = 'wizard'
        self.health = 8
        self.power = 1

    # class Wizard has a method named attack that takes self and enemy as parameters
    def attack(self, enemy):
        swap_power = random.random() > 0.5
        if swap_power:
            print "%s swaps power with %s during attack" % (self.name, enemy.name)
            self.power, enemy.power = enemy.power, self.power
        super(Wizard, self).attack(enemy)
        if swap_power:
            self.power, enemy.power = enemy.power, self.power

# make a class named Battle that interits object
class Battle(object):
    # class Battle has a method named do_battle that takes self, hero, and enemy as parameters
    def do_battle(self, hero, enemy):
        print "====================="
        print "Hero faces the %s" % enemy.name
        print "====================="
        while hero.alive() and enemy.alive():
            hero.print_status()
            enemy.print_status()
            time.sleep(1.5)
            print "-----------------------"
            print "What do you want to do?"
            print "1. fight %s" % enemy.name
            print "2. do nothing"
            print "3. flee"
            print "> ",
            input = int(raw_input())
            if input == 1:
                hero.attack(enemy)
            elif input == 2:
                pass
            elif input == 3:
                print "Goodbye."
                exit(0)
            else:
                print "Invalid input %r" % input
                continue
            enemy.attack(hero)
        if hero.alive():
            print "You defeated the %s" % enemy.name
            return True
        else:
            print "YOU LOSE!"
            return False

# make a class named Tonic that inherits object
class Tonic(object):
    cost = 5
    name = 'tonic'
    # class Tonic has a method named apply that takes self and character as parameters
    def apply(self, character):
        character.health += 2
        print "%s's health increased to %d." % (character.name, character.health)

# make a class named Sword that inherits object
class Sword(object):
    cost = 10
    name = 'sword'
    # class Sword has a method named apply that takes self and character as parameters
    def apply(self, character):
        character.power += 2
        print "%s's power increased to %d." % (character.name, character.power)

# make a class named Shopping that inherits object
class Shopping(object):
    items = [Tonic, Sword]
    # class Shopping has a method named do_shopping that takes self and hero has parameters
    def do_shopping(self, hero):
        while True:
            print "====================="
            print "Welcome to the store!"
            print "====================="
            print "You have %d coins." % hero.coins
            print "What do you want to do?"
            for i in xrange(len(Shopping.items)):
                item = Shopping.items[i]
                print "%d. buy %s (%d)" % (i + 1, item.name, item.cost)
            print "10. leave"
            input = int(raw_input("> "))
            if input == 10:
                break
            else:
                ItemToBuy = Shopping.items[input - 1]
                item = ItemToBuy()
                hero.buy(item)
# set hero to an instance of class Hero
hero = Hero()
# set enemies to a list of instances of class Goblin and class Wizard
enemies = [Goblin(), Wizard()]
# set battle_engine to an instance of class Battle
battle_engine = Battle()
# set shopping_engine to an instance of class Shopping
shopping_engine = Shopping()

for enemy in enemies:
    hero_won = battle_engine.do_battle(hero, enemy)
    if not hero_won:
        print "YOU LOSE!"
        exit(0)
    shopping_engine.do_shopping(hero)

print "YOU WIN!"
