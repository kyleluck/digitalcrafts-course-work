import random
import time

class Character(object):
    def alive(self):
        return self.health > 0

    def attack(self, enemy):
        if not self.alive():
            return
        print "%s attacks %s" % (self.name, enemy.name)
        enemy.receive_damage(self.power)
        time.sleep(1.5)

    def receive_damage(self, points):
        self.health -= points
        print "%s received %d damage." % (self.name, points)
        if self.health <= 0:
            print "%s is dead." % self.name

    def print_status(self):
        print "%s has %d health and %d power." % (self.name, self.health, self.power)

class Hero(Character):
    def __init__(self):
        self.name = 'hero'
        self.health = 10
        self.power = 5
        self.coins = 20
        self.prize = 100
        self.armor = 0
        self.evade = 0
        self.items = [{ 'name': 'tonic', 'num': 10 }, { 'name': 'test', 'num': 20 }]

    def restore(self):
        self.health = 10
        print "Hero's heath is restored to %d!" % self.health
        time.sleep(1)

    def buy(self, item):
        self.coins -= item.cost
        item.apply(hero)

    def attack(self, enemy):
        # make hero generate double damage points with a 20% probabilty
        double_power = random.random() <= 0.2
        if double_power:
            self.power = self.power * 2
            print "%s gets double power!" % self.name
        # allow user to choose if they want to use an item during battle
        print "Do you want to use an item for battle?"
        input = raw_input("Yes or No? ")
        if input == 'yes' or input =='Yes':
            # options to use item
            for i in xrange(0, len(self.items)):
                print "%d: %s" % (i + 1, self.items[i]['name'])
            battle_item_index = int(raw_input())
            try:
                battle_item = self.items[battle_item_index]
            except IndexError:
                print "Invalid input. Continuing..."
        elif input =='no' or input == 'No':
            pass
        else:
            print "Invalid input... continuing..."
        super(Hero, self).attack(enemy)
        if double_power:
            self.power = 5

    # when the hero is attacked, he receives points - value of armor damage
    def receive_damage(self, points):
        # hero's probability of evading an attack
        # is based on his number of evade points
        probability_to_evade = self.evade * 0.03
        # probability to evade cannot exceed 95%
        probability_to_evade = min(probability_to_evade, 0.95)
        if random.random() <= probability_to_evade:
            print "%s evaded the attack!" % self.name
            return

        # damage can't be a negative number
        # or the hero would gain health because of armor
        damage = max(0, points - self.armor)
        self.health -= damage
        print "%s received %d damage." % (self.name, damage)
        if self.health <= 0:
            print "%s is dead." % self.name

class Kyle(Hero):
    def __init__(self):
        self.name = 'Kyle'
        self.health = 10
        self.power = 5
        self.coins = 50
        self.prize = 100

    # Kyle doesnt receive damage, he gains strength!
    def receive_damage(self, points):
        self.power += points
        print "%s got stronger by %s" % (self.name, points)

class Goblin(Character):
    def __init__(self):
        self.name = 'goblin'
        self.health = 6
        self.power = 2
        self.prize = 10

class Wizard(Character):
    def __init__(self):
        self.name = 'wizard'
        self.health = 8
        self.power = 1
        self.prize = 20

    def attack(self, enemy):
        swap_power = random.random() > 0.5
        if swap_power:
            print "%s swaps power with %s during attack" % (self.name, enemy.name)
            self.power, enemy.power = enemy.power, self.power
        super(Wizard, self).attack(enemy)
        if swap_power:
            self.power, enemy.power = enemy.power, self.power

# make a new character called Medic that can sometimes recuperate 2 health points after being attacked with a probability of 20%
class Medic(Character):
    def __init__(self):
        self.name = 'medic'
        self.health = 10
        self.power = 2
        self.prize = 20

    def receive_damage(self, points):
        super(Medic, self).receive_damage(self.power)
        recuperate = random.random() <= 0.2
        if recuperate:
            print "Medic recuperates 2 health points!"
            self.health += 2

# make a character called Shadow who has only 1 starting health but will only take damage about once out of every ten times he is attacked.
class Shadow(Character):
    def __init__(self):
        self.name = 'shadow'
        self.health = 1
        self.power = 3
        self.prize = 30

        def receive_damage(self, points):
            if random.random() <= 0.1:
                super(Shadow, self).receive_damage(self.power)

# make a Zombie character that doesn't die even if his health is below zero
class Zombie(Character):
    def __init__(self):
        self.name = 'zombie'
        self.health = 0
        self.power = 4
        self.prize = 30

    def alive(self):
        return True

# another character
class King(Character):
    def __init__(self):
        self.name = 'king'
        self.health = 15
        self.power = 5
        self.prize = 50

    # the king is smart. he makes the enemy attack itself
    def attack(self, enemy):
        if not self.alive():
            return
        print "%s attacks %s" % (enemy.name, enemy.name)
        enemy.receive_damage(enemy.power)
        time.sleep(1.5)

class Battle(object):
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
                print "You receive %d coins as a prize" % enemy.prize
                hero.coins += enemy.prize
                return True
            else:
                print "YOU LOSE!"
                return False

class Tonic(object):
    cost = 5
    name = 'tonic'
    def apply(self, character):
        character.health += 2
        print "%s's health increased to %d." % (character.name, character.health)

# SuperTonic restores hero's health to 10.
class SuperTonic(object):
    cost = 15
    name = 'supertonic'
    def apply(self, character):
        character.health = 10
        print "%s's heath restored to %d." % (character.name, character.health)

class Sword(object):
    cost = 10
    name = 'sword'
    def apply(self, character):
        character.power += 2
        print "%s's power increased to %d." % (character.name, character.power)

class Armor(object):
    cost = 20
    name = 'armor'
    def apply(self, character):
        character.armor += 2
        print "%s's armor increased to %d." % (character.name, character.armor)

class Evade(object):
    cost = 25
    name = 'evade'
    def apply(self, character):
        character.evade += 2
        print "%s's evade points increased to %d." % (character.name, character.evade)

class Shopping(object):
    items = [Tonic, Sword, SuperTonic, Armor]
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

hero = Hero()
enemies = [Goblin(), Wizard(), Medic(), Shadow(), Zombie(), King(), Kyle()]
battle_engine = Battle()
shopping_engine = Shopping()

for enemy in enemies:
    hero_won = battle_engine.do_battle(hero, enemy)
    if not hero_won:
        print "YOU LOSE!"
        exit(0)
    shopping_engine.do_shopping(hero)

print "YOU WIN!"
