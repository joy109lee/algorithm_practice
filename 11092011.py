
def sayHi():
    print("hello world")
    return


def myFunc(cb):
    return cb


def recursion(x):
    return x if x % 2 == 0 else recursion(x * 3 - 1)


myFunc(sayHi)()


print(recursion(3))
