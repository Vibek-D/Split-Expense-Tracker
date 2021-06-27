Input format is a list of objects like below

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


Output format is a CSV file
