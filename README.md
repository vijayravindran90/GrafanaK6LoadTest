# To install K6 locally
choco install k6

# Check K6 is installed by running below command
k6 or k6 version

# To login K6 cloud dashboard - Grafana
k6 cloud login --token YOUR_API_TOKEN

**Note:** You can get the token from Grafana

# To run the K6 script locally
k6 run test.js

# To run the K6 script on cloud
k6 cloud test.js