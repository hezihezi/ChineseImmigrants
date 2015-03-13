hezihezi/ChineseImmigrants

I created a README file... Wrote almost everything. 
Then I realized I couldn't push to git to terminal, so I used git push -f origin master. 
And the README file disappeared...

BUT IT'S OKAY. THIS IS A NEW README FILE.

-----------------------------------------

Retrieve Data:

I want to find some long-term statistics of numbers of Chinese immigrants gaining green card through the past decades.
On the Department of Homeland Seurity website, I found the 2013 Yearbook of Immigration Statistics. 
There is an link to data tables of Lawful Permanent Residents (“Green Card” recipient): 
http://www.dhs.gov/yearbook-immigration-statistics-2013-lawful-permanent-residents .
“Table 2 – Persons Obtaining Lawful Permanent Resident Status by Region and Selected Country of Last Residence: Fiscal Years 1820 to 2013 (XLS, 56KB)” 
goes back to nearly 200 years, and “country of last residence” seems good enough for the person’s origin nationality.
Though country of birth would be better, there is no such data available with the same scale of historic value. 

Process Data:

For 2010s, we only have statistics for 2010-2013. Therefore, I calculated an estimated number for the whole decade =
10 times of the average of the sum of the first four years. 

Configurations:

1. Formatted the number of persons as number with commas and 0 digit after the decimal point. 

2. textStyle for numbers of x-axis and y-axis: Helvetica, 11, bold, black

3. textStyle for verticle title: '#406214', 14

4. QUESTION: why the textStyle and the Outsidebar configurations do not work on annotations?
