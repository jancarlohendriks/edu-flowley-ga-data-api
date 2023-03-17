// const { google } = require("googleapis");
const { BetaAnalyticsDataClient } = require("@google-analytics/data");
// const key = require("./flowley-test-880d49cc6785.json");

// Create a new JWT client using the service account key
// const client = new google.auth.JWT(
//   key.client_email,
//   null,
//   key.private_key,
//   ["https://www.googleapis.com/auth/analytics.readonly"],
//   null
// );

const analyticsDataClient = new BetaAnalyticsDataClient();

// Set the GA4 property ID for the Google Analytics account you want to retrieve data for
const PROPERTY_ID = "353724991";

// Query parameters for the API request
const startDate = "7daysAgo";
const endDate = "today";
const metric = "screenPageViews";

// Call the Google Analytics API to retrieve pageviews for the given property ID
async function getPageviews() {
  try {
    // Authorize the client
    // await client.authorize();

    // Make the API request
    const response = await analyticsDataClient.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [
        {
          startDate: startDate,
          endDate: endDate,
        },
      ],
      metrics: [
        {
          name: metric,
        },
      ],
    });

    console.log(response);

    // Log the pageviews
    // console.log(`Pageviews: ${response.data.rows[0].metrics[0].values[0]}`);
  } catch (err) {
    console.error(err);
  }
}

// Call the function to retrieve the pageviews
getPageviews();

// require("dotenv").config();
// const express = require("express");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const { google } = require("googleapis");

// // Imports the Google Analytics Data API client library.
// const { BetaAnalyticsDataClient } = require("@google-analytics/data");

// const { HOST, PORT } = process.env;

// const app = express();
// app.use(cookieParser());
// app.use(cors({ credentials: true, origin: true }));

// const key = require("./flowley-test-880d49cc6785.json");

// // Create a new JWT client using the service account key
// const client = new google.auth.JWT(
//   key.client_email,
//   null,
//   key.private_key,
//   ["https://www.googleapis.com/auth/analytics.readonly"],
//   null
// );

// /**
//  * TODO(developer): Uncomment this variable and replace with your
//  *   Google Analytics 4 property ID before running the sample.
//  */
// propertyId = "353724991";

// // Using a default constructor instructs the client to use the credentials
// // specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.
// const analyticsDataClient = new BetaAnalyticsDataClient();

// // Runs a simple report.
// // async function runReport() {
// //   // Authorize the client
// //   await client.authorize();

// //   const [response] = await analyticsDataClient.runReport({
// //     property: `properties/${propertyId}`,
// //     dateRanges: [
// //       {
// //         startDate: "2020-03-31",
// //         endDate: "today",
// //       },
// //     ],
// //     dimensions: [
// //       {
// //         name: "city",
// //       },
// //     ],
// //     metrics: [
// //       {
// //         name: "activeUsers",
// //       },
// //     ],
// //   });

// //   console.log("Report result:");
// //   response.rows.forEach((row) => {
// //     console.log(row.dimensionValues[0], row.metricValues[0]);
// //   });
// // }

// // runReport();

// // Call the Google Analytics API to retrieve pageviews for the given property ID
// async function getPageviews() {
//   try {
//     // Authorize the client
//     await client.authorize();

//     const [response] = await analyticsDataClient.runReport({
//       property: `properties/${propertyId}`,
//       dateRanges: [
//         {
//           startDate: "2020-03-31",
//           endDate: "today",
//         },
//       ],
//       dimensions: [
//         {
//           name: "city",
//         },
//       ],
//       metrics: [
//         {
//           name: "activeUsers",
//         },
//       ],
//     });

//     // Log the pageviews
//     console.log("Report result:");
//     response.rows.forEach((row) => {
//       console.log(row.dimensionValues[0], row.metricValues[0]);
//     });
//   } catch (err) {
//     console.error(err);
//   }
// }

// // Call the function to retrieve the pageviews
// getPageviews();
