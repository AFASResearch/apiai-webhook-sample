import * as express from 'express';
import * as bodyParser from 'body-parser';

const restService = express();
restService.use(bodyParser.json());

restService.post('/hook', function (req, res) {

  console.log('hook request');

  try {
    let speech = 'empty speech';

    if (req.body) {
      let requestBody = req.body;
      if (requestBody.result) {
        speech = '';
        if (requestBody.result.fulfillment) {
          speech += requestBody.result.fulfillment.speech;
          speech += ' ';
        }

        if (requestBody.result.action) {
          speech += 'action: ' + requestBody.result.action;
        }
      }
    }

    console.log('result: ', speech);

    return res.json({
      speech: speech,
      displayText: speech,
      source: 'apiai-webhook-sample'
    });
  } catch (err) {
    console.error("Can't process request", err);

    return res.status(400).json({
      status: {
        code: 400,
        errorType: err.message
      }
    });
  }
});

let port = (process.env.PORT || 5000);
restService.listen(port, function () {
  console.log(`Server listening on http://localhost:${port}/`);
});
