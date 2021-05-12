const csv = require('csv-parser');
const fs = require('fs');
const results = [];

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: './data2.csv',
    header: [
        { id: 'name', title: 'NAME2' }, { id: 'age', title: 'AGE2' }
    ]
});

const csvWriterFilter = createCsvWriter({
    path: './dataFilter.csv',
    header: [
        { id: 'NAME', title: 'NAME3' }, { id: 'AGE', title: 'AGE3' }
    ]
});

fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        
        const filteredResults = results.filter(item => item.AGE > 25);

        

        csvWriterFilter.writeRecords(filteredResults)
            .then(() => {
                console.log('Done');
            });

    });

fs.createReadStream('./data.csv').pipe(fs.createWriteStream('./copyData.txt'));