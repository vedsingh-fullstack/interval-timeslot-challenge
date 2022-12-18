# Interval Timeslot Challenge

Challange: Given JSON file containing a list of schedules and break timing for each veterinarian splits each schedule into 15 minute long meeting ignore the break timings and output the sorted list of available 15 minute meeting slots.


Assumption:
* I used the json file from ```src/json``` folder assuming the third party service will give similar json file data.
* Schedule date from the list is always single date considering the animal owner will always check for one date. eg. in the given example it has data for date '2020-03-29'.

## Getting Started
This instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

* Download from github

```bash
git clone https://github.com/vedsingh-fullstack/interval-timeslot-challenge.git
```
* Navigate into the repository
```bash
 cd interval-timeslot-challenge
```

* Setup

```sh
# Install dependencies
npm install

# Run the script to get the timeslot based on schedule input file in src/json folder.
npm start

# Run test

npm test
```
