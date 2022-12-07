# Dynamic Similarity

- The principle of dynamic similarity can be stated as follows:

*If the model and prototype are geometrically similar (i.e. the model is a perfect scale replica of the prototype), and if each independent dimensionless parameter for the model is equal to the corresponding independent dimensionless parameter of the prototype, then the dependent dimensionless parameter for the prototype will be equal to the corresponding dependent dimensionless parameter for the model.*

- Consider the airplane wing example above. In this case, the two independent dimensionless parameters (those on the right hand side) are Reynolds number and angle of attack. The dependent parameter is the lift coefficient. The model wing in the wind tunnel must obviously be set at the same angle of attack as the desired angle of attack of the prototype. In order to achieve dynamic similarity, the Reynolds number of the model must also equal that of the prototype. Then, dynamic similarity assures us that the lift coefficient of the prototype will equal that of the model. Mathematically, we can solve for the wind tunnel velocity, Vm, required to match Reynolds number, and we can scale up the lift measurement from the wind tunnel tests to the full scale prototype as follows:


![logo:center:](./../../static\img\fluid\l07_07.gif)

*In this manner, we can set the wind tunnel speed properly to match Reynolds number. Then, after measuring the lift on the model wing, Lm, we can properly scale (using the last equation above) to predict the lift, Lp, on the prototype.*