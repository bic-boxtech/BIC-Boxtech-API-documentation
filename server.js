const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./bicapi.yaml');
//var cors = require('cors');

//app.use(cors());
app.set('port', process.env.PORT || 5000);
var customCSS = '';
var options = {};

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument, false, options, customCSS));


app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});