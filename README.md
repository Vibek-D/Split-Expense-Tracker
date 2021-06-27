Clone the Github repository and run command 'npm install' then after all the dependencies have been installed run command 'npm test' to run the application
API endpoint is 'http://localhost:3000/split'
Input format in the body of the API is a raw JSON list of objects like below

 [
    {
        "a":{
            "expense":304,
            "split":["a", "b", "c"]
        }
    },
    {
        "b":{
            "expense":200,
            "split":["b", "c"]
        }
    },
    {
        "a":{
            "expense":540,
            "split":["a", "c", "d", "e"]
        }
    },
    {
        "c":{
            "expense":2400,
            "split":["c", "d", "e"]
        }
    },
    {
        "d":{
            "expense":342,
            "split":["d", "b", "c", "a"]
        }
    },
    {
        "e":{
            "expense":1210,
            "split":["d", "a", "b", "e"]
        }
    },
    {
        "d":{
            "expense":214,
            "split":["e", "a"]
        }
    },
    {
        "d":{
            "expense":300,
            "split":["b", "c", "a"]
        }
    },
    {
        "b":{
            "expense":1200,
            "split":["d", "b", "e"]
        }
    },
    {
        "c":{
            "expense":400,
            "split":["c", "a"]
        }
    },
    {
        "d":{
            "expense":354,
            "split":["d", "b", "a"]
        }
    },
    {
        "e":{
            "expense":1000,
            "split":["e", "a"]
        }
    },
    {
        "d":{
            "expense":400,
            "split":["d", "a"]
        }
    },
    {
        "c":{
            "expense":1034,
            "split":["d", "b", "c", "a"]
        }
    },
    {
        "a":{
            "expense":500,
            "split":["e", "a"]
        }
    },
    {
        "e":{
            "expense":600,
            "split":["d", "c", "e"]
        }
    }
]

Output format is a CSV file like below

a, 'owes', d, 'amount', 475.5
a, 'owes', e, 'amount', 417.5
a, 'owes', c, 'amount', 222.16666666666669
b, 'owes', a, 'amount', 101.33333333333333
b, 'owes', d, 'amount', 0
b, 'owes', e, 'amount', 0
b, 'owes', c, 'amount', 158.5
c, 'owes', a, 'amount', 0
c, 'owes', b, 'amount', 0
c, 'owes', d, 'amount', 0
c, 'owes', e, 'amount', 0
d, 'owes', a, 'amount', 0
d, 'owes', c, 'amount', 873
d, 'owes', e, 'amount', 395.5
d, 'owes', b, 'amount', 96.5
e, 'owes', a, 'amount', 0
e, 'owes', c, 'amount', 600
e, 'owes', d, 'amount', 0
e, 'owes', b, 'amount', 97.5

This is a result of the data provided in the link https://mail.google.com/mail/u/0/#inbox/FMfcgzGkXwJxxQxNcktcvRcdgcrXZCQc
