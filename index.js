const express = require('express');
const app = express();
const port = 3000;
const csv = require('fast-csv');
const fs = require('fs');
const exec = require('child_process').exec;

app.use(express.json());

const demoData = [
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
];

let deleteFile = function() {
    exec('del '+ 'split.csv', function(err,stdout,stderr){     
        if(err)
           console.log('Directory Empty', err);
        else
           console.log("Files Deleted");
    });
}

// app.use(deleteFile);

app.post('/split', (req, res) => {
    fs.writeFileSync('split.csv', '', function(err) {
        console.log('File written');
    });

    let list = req.body;
    let allPeople = new Set();
    let map = new Map();

    for (const obj of list) {
        allPeople.add(Object.keys(obj)[0]);
    }

    for (const data of allPeople) {
        map.set(data, new Map()); 
    }

    for (const obj of list) {
        let guyWhoPaid = Object.keys(obj)[0];
        let objOfGuy = obj[`${guyWhoPaid}`];
        let expense = parseInt(objOfGuy.expense);
        let splitList = objOfGuy.split;
        let divideAmt = expense/splitList.length;

        for (const person of splitList) {
            if(person !== guyWhoPaid){
                // console.log(person);
                let currPersonMap = map.get(person);
                // console.log(currPersonMap.get(guyWhoPaid));
                if(!currPersonMap.get(guyWhoPaid)) {
                    currPersonMap.set(guyWhoPaid, divideAmt);
                } else {
                    let oldValue = currPersonMap.get(guyWhoPaid);
                    // console.log(oldValue);
                    currPersonMap.set(guyWhoPaid, oldValue+divideAmt);
                }
                // console.log(currPersonMap);
                map.set(person, currPersonMap);
                // console.log(map);
            }
        }
    }

    let response = [];
    let csvList = [];

    for (let [key, value] of map) {
        let obj = {};
        let subList = {};

        for (const [k, v] of value) {
            let iToj = v;
            let jToi = map.get(k).get(key) ? map.get(k).get(key) : 0;

            if(iToj>jToi) {
                iToj = iToj - jToi;
                value.set(k, iToj);
                jToi = 0;
                map.get(k).set(key, jToi);
            } else {
                jToi = jToi - iToj;
                map.get(k).set(key, jToi);
                iToj = 0;
                value.set(k, iToj);
            }
            csvList.push([`${key}`, 'owes', `${k}`, 'amount', `${iToj}`]);
            fs.appendFileSync('split.csv', `${key}, 'owes', ${k}, 'amount', ${iToj}\n`, function(err) {
                console.log('File written');
            });
            subList[k] = iToj;
        }
        obj[key] = subList;
        response.push(obj);
    }

    // let csvFile = fs.createWriteStream('split.csv');
    // csv.write('', {headers:true}).pipe(csvFile);
    // csv.write(csvList, {headers:true}).pipe(csvFile);
    // res.send(JSON.stringify(response));
    // res.download('./split.csv', 'split.csv', (err) => { if (err) { console.log(err); } else {  } });
    res.sendFile('split.csv', { root: __dirname });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});