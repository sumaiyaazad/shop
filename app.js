var path = require('path');
var logger = require('morgan');
var express = require('express');
var cors = require('cors');
const multer = require('multer');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './temp')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
});

const upload = multer({ storage: storage });

const app = express();
app.upload = upload;

const router = express.Router();
const routes = require('./routes')(app, router);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//route initial
app.use('/api/v1', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === 'MulterError') {
    if (err.code === "LIMIT_UNEXPECTED_FILE")
      return res
        .status(err.status || 500)
        .json({ errors: 'No of file upload exceeded' });
  } else {
    return res
      .status(err.status || 500)
      .json({ errors: err.message });
  }
})

module.exports = app;
