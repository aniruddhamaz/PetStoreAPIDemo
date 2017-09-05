This is a sample mobile app application demonstrating the usage of Amazon API Gateway SDK to access API's defined in the Amazon API Gateway.

# How to get started with this

*This app works with the Example API created by Amazon API Gateway.*

### 1. Create the API

This step will create an API that can be invoked from the mobile app.

1. Go to the Amazon API Gateway Console
2. Click on "Create API"
3. In the *Create New API* section select *Example API*
4. Provide a name for your API
5. Check the resources section to see the resources defined in the API
6. From the Actions drop-down select *Deploy API*
7. Select *[New Stage]* in *Deployment Stage*
8. Enter *Stage name* as *Development*

**Note:** *The API created will be a public API, which should suffice for this demo. However, appropriate security should be added for API's. See [Control Access In API Gateway](http://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-control-access-to-api.html) for more details on how to setup authorization and control access*


### 2. Test the API

1. Select *Resources* on the left and select */pets*
2. Click on *GET* in the top-left box
3. Click *Test*
4. Leave *Query Strings* and click on *Test* button at the bottom

Make sure the test works and shows a *Response Body* as below
```json
[
  {
    "id": 1,
    "type": "dog",
    "price": 249.99
  },
  {
    "id": 2,
    "type": "cat",
    "price": 124.99
  },
  {
    "id": 3,
    "type": "fish",
    "price": 0.99
  }
]
```
### 3. Generate the SDK and Integrate into this project

1. Click on *Stages* on the left and then select *Development*
2. Click on *SDK Generation* tab
3. Select *Platform* as Javascript
4. Click on *Generate SDK*
5. Save the downloaded file to a folder and extract it
6. Locate the folder *src/assets/lib/apiGateway-js-sdk* and delete it
7. Copy the extracted folder *apiGateway-js-sdk* into *src/assets/lib*

**Note:** These steps should be performed every time API is deployed.

### 4. Build and run the app

1. Build the app

  ```bash
  $ ionic cordova build ios
  ```
2. Run the app

  ```bash
  $ ionic cordova run ios
  ```

# Integration notes

1. The SDK should be re-generated and integrated into the app for every deployment as the API's might have changed.
2. Its advisable to use Stages for deploying your API's during the development stage. Remember to delete stages when not required.
3. API's can be easily tested by exporting the API definitions from the *Export* tab of a stage.
4. By default the SDK generation process assigns names to methods based on a certain convention, such as resource name followed by the HTTP method. This can be customized from the *SDK Settings* section in the resources *Method Execution* page.
  1. Select *Resources* and click on the HTTP method to customize, under the desired resource.
  2. Click on *Method Request* box on top left.
  3. Go to *SDK Settings* section and click the pen icon.
  4. Enter the custom method name to be generated for the SDK.

## Calling the SDK

To make API calls use the *apigClientFactory* variable to create an object. This object contains API specific methods such as *petsGet*, to call *GET* on the */pets* resource.
