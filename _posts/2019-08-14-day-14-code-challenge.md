---
layout: post
title: "Day 14 of Code Challenge"
date: 2019-08-14
---
Continued working on getting data from JSON and CSV files into a format that I want to use for the application. I am going to use a JSON file on the server.
I have successfully processed the JSON file and created a new JSON file with the data I want. I used json-simple. I am using a split on comma to create an array
from the CSV files. There is a directory that has all the CSV files and I need to iterate over the whole directory and get the information from each file.
The files are divided into male and female names so I need to add that information to the names and put them in the JSON file with the other data.