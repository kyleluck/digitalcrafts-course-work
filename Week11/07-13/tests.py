import unittest

class LearningTests(unittest.TestCase):

    def test_add(self):
        self.assertEqual(1 + 2, 3)

    def test_multiply(self):
        self.assertEqual(4 * 2, 8)

    def test_booleans(self):
        self.assertTrue(True)
        self.assertFalse(False)

    def test_raises(self):
        def fun():
            raise Exception("kaboom!")
        self.assertRaises(Exception, fun)

if __name__ == '__main__':
    unittest.main()
