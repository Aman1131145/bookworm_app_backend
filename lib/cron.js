import cron from 'cron';
import https from 'https'

const apiUrl = process.env.API_URL;

const job = new cron.CronJob('*/14 * * * *', function () {
    https
        .get(apiUrl, (res) => {
            if (res.statusCode === 200) console.log('Get request send successfully');
            else console.log("Get request failed", res.statusCode);
        })
        .on('error', (e) => console.error("Error while sending request", e));
})

export default job;