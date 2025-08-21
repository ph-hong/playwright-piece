GameController: Duck (any)

// Aggregation
Duck Class: Template of IS-A relationship
    protected flyBehaviour: FlyBehaviour; (from interface)
    protected quackBehaviour: QuackBehaviour; (from interface)

Decoy
BabyDuck
MallardDuck

Controller:
    performQuack(duck: Duck)
    performFly(duck: Duck)

Interface:
FlyBehavious
QuackBehaviour
---Step---
S1. Create Interface truoc de rang buoc cac hanh vi lien quan Has-A relationship
    FlyBehaviour
    