# Birdie Developer Test

This App displays a timeline of observations of older adults receiving care. These observations include mood, fluid intake, food intake, general etc. This App allows family members to stay up to date on the observations of the carers for their relation. If any concerns have been raised there is a also separate timeline which displays these concerns with relevant notes/further information in the description.

## Set up

Technical stack:

### Front end

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

### Back end

- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Usage

### create .env file in the backend folder with the following variables (see also example.env):

```
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=
```

### Run App locally

1. Start the API. (Run the following commands within the `backend` folder)

   a. Install the dependencies

   ```bash
   npm install
   ```

   b. Run the HTTP server (will start on port `8000`)

   ```bash
   npm run dev
   ```

2. Start the React app (Run the following commands within the `front-end` folder)

   a. Install the dependencies

   ```bash
   npm install
   ```

   b. Run the application (will start on port `3000`)

   ```bash
   npm start
   ```

### To test

1. fontend

   ```bash
   npm test
   ```

   or

   ```bash
   npm test:watch
   ```

2. backend
   ```bash
   npm test
   ```

### Next steps I would add if there was more time

- Add a stacked bar chart with [charts.js] (https://www.chartjs.org/docs/latest/samples/bar/stacked.html) to display data for whether medication has been taken. This would display by week/month whether medication was mostly "not taken, partically taken, taken, or maybe taken". As this could be useful for family members to see.
- Improve the UI! Make the styling more interesting.
- Validation for entering the care recipient ID e.g. an alert message if submit is pressed with no input added (rather than a silent fail) and custom error if ID was entered incorrectly, rather than simply redirecting to the "no events" component.
