const express = require('express');
const cors = require('cors');
const propertiesRoute = require('./routes/properties');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/properties', propertiesRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
