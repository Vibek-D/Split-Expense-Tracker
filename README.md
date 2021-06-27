API endpoint is 'http://localhost:3000/split'
Input format in the body of the API is a raw JSON list of objects like below

 [
    {
        "a":{
            "expense":300,
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
        "c":{
            "expense":400,
            "split":["a", "c"]
        }
    },
    {
        "d":{
            "expense":600,
            "split":["a", "d"]
        }
    },
    {
        "d":{
            "expense":300,
            "split":["d", "b", "c"]
        }
    },
    {
        "b":{
            "expense":600,
            "split":["d", "a", "b"]
        }
    }
]

Output format is a CSV file like below

a, 'owes', c, 'amount', 0
a, 'owes', d, 'amount', 300
a, 'owes', b, 'amount', 0
b, 'owes', a, 'amount', 0
b, 'owes', d, 'amount', 0
c, 'owes', a, 'amount', 0
c, 'owes', b, 'amount', 100
c, 'owes', d, 'amount', 100
d, 'owes', b, 'amount', 100
d, 'owes', a, 'amount', 0
d, 'owes', c, 'amount', 0
