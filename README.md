
# NowSeat

Often it happens to bring valuables, fragile or bulky objects with you and before getting on a public transport we always hope to find a seat. Through our implementation we want to provide the end user with this information in real time for various types of public transport, accessible via the website.

*This project aims to meet the needs of those who, taking public transport, need to know how many people are actually on the vehicle so that they can choose whether to get on or not thanks to this information.*

We can summarize NowSeat in *"Real-time availability of seats on various public transport"*.


**General Architecture**

<img src="https://lh6.googleusercontent.com/J4FEO5F-wlg9VGiwQm1yDgeS7AsMOYfV7lg9fWp71eGdg5vIsmM_n2egMuV0HW9YOoF-icwUIc8Ogm9VDBXSFM7q1FjXP6PG03JzuGEWoL1ZS5nyg7gAlieSk2u_eNulFob3mrTuRO-azKQmYmLwnfGoRN1hYZxU6GD6CUA1GsPiyCN6zDQlkEB6NOiR=nw">


**Angular WebApp Architecture**

<img src="https://lh3.googleusercontent.com/uRweRVTG7osombZaW07GHS2wUBeiLX-zSJZ1jgBxILYMo13BqngYLIPmTFYLfud4-vL01B1woLMo9GnGodwebPz4fVatEdpxJBZG6d394n5MCeVAHGuC48voaW3uv7AOCwD1tJV5UKT1VWfIkfuAEu6FHOGrJ3AOTfFNpLBvwFxzBVN-YzXqjbz1BvfZ=nw" width="650" height="300">


**Broker Architecture**

<img src="https://lh4.googleusercontent.com/xhtaI1KRCXtgEiPztdr_3YlDsApzp-ol1EbWdKHEi4foV0acZcPC8e2Z2UUTX_KemBWwVxNmAoA8qEtMNCPADlDF--SAhVaUG1uUUuRYDcBiwqczpu1YR3vp5kJumgDRLOMfSNCF3NB12OXXx5xWv7jhynAR1WB7H6BD0dJXeiTtuNPXHu5pk4eNw8LZ=nw" width="650" height="300">


**Sensor Circuit Diagram with Arduino ONE, a Force Pressure Sensor and a chip ESP8266**

<img src="https://lh5.googleusercontent.com/ARZ49OP6Jpz-NHiLQXbWikotYOF0rgXL8gLsctZPyE3XURnKZWTplDQGKpADkOfUmuix9SUap2-d8mV9dCN-lRDTuMKw9icH157lkaD_P5PmhXOaMmVt3jw7JiUtAvdVNOSynnWWjg8s3LEyEdXKJzLD1uIgv7CP-aSzaxcBaJND4PxVFO892i2iYE1T=nw" width="650" height="500">

*More info in "NowSeat Presentation.pdf"*


## Dependencies
0. Install node wih version > 16.16.0
1. Inside NowSeat-Broker install aedes with `npm install aedes`
2. Inside NowSeat-Arduino install node-red with `npm install node-red`
3. Inside NowSeat-WebApp install packages with `npm install`

## Execution
1. Start server with `node NowSeat-Broker/server.js`
2. Start node-red sensors with `node-red`  and check http://localhost:1880 to start the simulation
3. Start the WebApp with `npm start` and check http://localhost:4200 to open the web app



*Italian explaination with DEMO: https://www.youtube.com/watch?v=molrQQj3Kw8*
